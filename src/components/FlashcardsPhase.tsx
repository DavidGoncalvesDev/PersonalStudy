import React, { useState, useEffect } from 'react';
import { Flashcard } from '../types';
import confetti from 'canvas-confetti';
import { Check, X, RotateCw, Trophy, ArrowRight, CheckCircle2, BookOpen } from 'lucide-react';
import { MathRenderer } from './MathRenderer';
import { playCorrectSound, playWrongSound, playSuccessChime, playClickSound } from '../utils/soundEffects';

interface FlashcardsPhaseProps {
  flashcards: Flashcard[];
  segmentId: string;
  currentUser?: string | null;
  segmentTitle: string;
  isAlreadyCompleted: boolean;
  onCompleteSegment: () => void;
  onGoToNextSegment: () => void;
  hasNextSegment: boolean;
  onGoToText?: (anchor?: string, cardNum?: number) => void;
}

export const FlashcardsPhase: React.FC<FlashcardsPhaseProps> = ({
  flashcards,
  segmentId,
  currentUser,
  segmentTitle,
  isAlreadyCompleted,
  onCompleteSegment,
  onGoToNextSegment,
  hasNextSegment,
  onGoToText
}) => {
  const uKey = (currentUser || 'guest').trim().toLowerCase().replace(/[^a-z0-9_-]/g, '') || 'guest';
  const storageKey = `david_study_fc_${uKey}_${segmentId}`;

  // Only accept flashcards that strictly belong to this segment
  const segmentFlashcards = React.useMemo(() => {
    return (flashcards || []).filter(f => f.segment_id === segmentId);
  }, [flashcards, segmentId]);

  const cardsFingerprint = segmentFlashcards.map(f => f.id).sort().join(',');

  // Helper to load mastered cards and queue from storage or defaults
  const loadInitialState = () => {
    if (segmentFlashcards.length === 0) {
      return {
        mastered: new Set<string>(),
        queue: [] as Flashcard[],
        completed: false
      };
    }

    if (isAlreadyCompleted) {
      // If completed in DB, check if the student specifically initiated a "Review Again" session locally
      try {
        const stored = localStorage.getItem(storageKey);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed && parsed.reviewing) {
            const validMastered = new Set<string>(
              (parsed.masteredIds || []).filter((id: string) => segmentFlashcards.some(f => f.id === id))
            );
            const remaining = segmentFlashcards.filter(f => !validMastered.has(f.id));
            if (remaining.length > 0) {
              return {
                mastered: validMastered,
                queue: remaining,
                completed: false
              };
            }
          }
        }
      } catch {
        // fallback to completed
      }
      return {
        mastered: new Set<string>(segmentFlashcards.map(f => f.id)),
        queue: [] as Flashcard[],
        completed: true
      };
    }

    // Not yet completed: check if partially practiced on this device
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        const idsArray: string[] = Array.isArray(parsed) ? parsed : (parsed?.masteredIds || []);
        const validMastered = new Set<string>(idsArray.filter(id => segmentFlashcards.some(f => f.id === id)));
        const remaining = segmentFlashcards.filter(f => !validMastered.has(f.id));

        if (validMastered.size > 0 && remaining.length > 0) {
          return {
            mastered: validMastered,
            queue: remaining,
            completed: false
          };
        } else if (validMastered.size === segmentFlashcards.length && segmentFlashcards.length > 0) {
          return {
            mastered: validMastered,
            queue: [],
            completed: true
          };
        }
      }
    } catch {
      // ignore
    }

    return {
      mastered: new Set<string>(),
      queue: [...segmentFlashcards],
      completed: false
    };
  };

  const initial = loadInitialState();
  const [queue, setQueue] = useState<Flashcard[]>(initial.queue);
  const [masteredIds, setMasteredIds] = useState<Set<string>>(initial.mastered);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [sessionCompleted, setSessionCompleted] = useState<boolean>(initial.completed);

  // Sync state if segmentId, user, or flashcards list changes
  useEffect(() => {
    const nextInit = loadInitialState();
    setQueue(nextInit.queue);
    setMasteredIds(nextInit.mastered);
    setSessionCompleted(nextInit.completed);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [segmentId, uKey, cardsFingerprint, isAlreadyCompleted]);

  const currentCard = queue[currentIndex];
  const totalCards = segmentFlashcards.length;
  const masteredCount = masteredIds.size;

  const handleFlip = () => {
    playClickSound();
    setIsFlipped(!isFlipped);
  };

  const handleResponse = (knewIt: boolean) => {
    if (!currentCard) return;

    if (knewIt) {
      playCorrectSound();
      // Mark as mastered
      const updatedMastered = new Set(masteredIds);
      updatedMastered.add(currentCard.id);
      setMasteredIds(updatedMastered);

      // Remove from active queue
      const nextQueue = queue.filter((_, idx) => idx !== currentIndex);
      setQueue(nextQueue);
      setIsFlipped(false);

      // Persist mastered cards to device storage so navigating away NEVER forgets progress
      try {
        localStorage.setItem(storageKey, JSON.stringify({
          reviewing: true,
          masteredIds: Array.from(updatedMastered)
        }));
      } catch {
        // ignore
      }

      if (nextQueue.length === 0) {
        // All mastered!
        setSessionCompleted(true);
        playSuccessChime();
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.5 }
        });
        onCompleteSegment();
      } else {
        // Advance or wrap
        setCurrentIndex(prev => (prev >= nextQueue.length ? 0 : prev));
      }
    } else {
      // Didn't know it: keep in queue, flip back, advance to next card in the remaining queue
      playWrongSound();
      setIsFlipped(false);
      setCurrentIndex(prev => (prev + 1 >= queue.length ? 0 : prev + 1));
    }
  };

  const handleResetSession = () => {
    playClickSound();
    setQueue([...segmentFlashcards]);
    setMasteredIds(new Set());
    setIsFlipped(false);
    setCurrentIndex(0);
    setSessionCompleted(false);

    try {
      localStorage.setItem(storageKey, JSON.stringify({
        reviewing: true,
        masteredIds: []
      }));
    } catch {
      // ignore
    }
  };

  if (segmentFlashcards.length === 0) {
    return (
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #e7e2d7',
        padding: '2.5rem 1.5rem',
        textAlign: 'center',
        boxShadow: '0 1px 3px rgba(120, 53, 15, 0.03)'
      }}>
        <div style={{
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          backgroundColor: '#fef3c7',
          color: '#d97706',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 0.75rem'
        }}>
          <RotateCw size={18} style={{ animation: 'spin 1.5s linear infinite' }} />
        </div>
        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#78350f', margin: '0 0 0.35rem' }}>
          Loading Level Flashcards...
        </h3>
        <p style={{ fontSize: '0.8rem', color: '#78716c', margin: 0 }}>
          Retrieving flashcards for {segmentTitle}.
        </p>
      </div>
    );
  }

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e7e2d7',
      padding: 'clamp(1rem, 3vw, 1.75rem)',
      boxShadow: '0 1px 3px rgba(120, 53, 15, 0.03)'
    }}>
      {/* Header Info */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem',
        paddingBottom: '1rem',
        marginBottom: '1.25rem',
        borderBottom: '1px solid #f2eee6'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#b45309', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Phase 3 of 3 • Flashcards
            </span>
            {isAlreadyCompleted && (
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                color: '#15803d',
                backgroundColor: '#dcfce7',
                padding: '0.1rem 0.45rem',
                borderRadius: '9999px'
              }}>
                Mastered
              </span>
            )}
          </div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#451a03', margin: 0 }}>
            {segmentTitle}
          </h2>
        </div>

        {/* Real-time Mastery Counter */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.35rem 0.8rem',
          backgroundColor: '#faf8f5',
          border: '1px solid #e7e2d7',
          borderRadius: '8px',
          fontSize: '0.8rem',
          fontWeight: 700,
          color: '#57534e'
        }}>
          <span>Mastered:</span>
          <span style={{ color: masteredCount === totalCards ? '#15803d' : '#b45309', fontWeight: 800 }}>
            {masteredCount} / {totalCards}
          </span>
        </div>
      </div>

      {/* Completion Banner */}
      {sessionCompleted ? (
        <div style={{
          padding: '2rem 1.5rem',
          borderRadius: '12px',
          backgroundColor: '#f0fdf4',
          border: '1.5px solid #86efac',
          textAlign: 'center'
        }}>
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: '#15803d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            margin: '0 auto 0.75rem',
            boxShadow: '0 4px 10px rgba(21, 128, 61, 0.25)'
          }}>
            <Trophy size={28} />
          </div>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#14532d', marginBottom: '0.35rem' }}>
            Segment Completely Mastered!
          </h3>
          <p style={{ fontSize: '0.875rem', color: '#166534', maxWidth: '480px', margin: '0 auto 1.25rem', lineHeight: 1.5 }}>
            You aced the text, 12-question quiz, and remembered all {totalCards} flashcards!
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={handleResetSession}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.55rem 1.1rem',
                backgroundColor: '#ffffff',
                color: '#15803d',
                border: '1px solid #86efac',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              <RotateCw size={14} />
              <span>Review Again</span>
            </button>

            {hasNextSegment && (
              <button
                onClick={onGoToNextSegment}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.55rem 1.3rem',
                  backgroundColor: '#78350f',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  boxShadow: '0 2px 6px rgba(120, 53, 15, 0.25)'
                }}
              >
                <span>Advance to Next Level</span>
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Active Card Deck */
        <div>
          {/* Card Count, Category & Reference Text Guide */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.75rem',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#78716c' }}>
                Card {currentIndex + 1} of {queue.length} in review
              </span>
              {currentCard?.category && (
                <span style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  backgroundColor: '#fef3c7',
                  color: '#92400e',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '6px'
                }}>
                  {currentCard.category}
                </span>
              )}
            </div>

            {onGoToText && (
              <button
                onClick={() => {
                  playClickSound();
                  onGoToText(
                    currentCard?.section_anchor || currentCard?.section_reference,
                    currentCard?.order_index || (currentIndex + 1)
                  );
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.3rem 0.65rem',
                  borderRadius: '6px',
                  border: '1px solid #d97706',
                  backgroundColor: '#fffbeb',
                  color: '#b45309',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
                title={currentCard?.section_reference ? `Reference: ${currentCard.section_reference}` : 'Review concept in text guide'}
              >
                <BookOpen size={13} />
                <span>Reference Text Guide</span>
              </button>
            )}
          </div>

          {/* Interactive Flip Card with KaTeX Math support */}
          <div
            onClick={handleFlip}
            style={{
              minHeight: '220px',
              borderRadius: '12px',
              border: isFlipped ? '2px solid #d97706' : '1.5px solid #e7e2d7',
              backgroundColor: isFlipped ? '#fffbeb' : '#ffffff',
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              cursor: 'pointer',
              position: 'relative',
              boxShadow: '0 4px 12px rgba(120, 53, 15, 0.04)',
              transition: 'border-color 0.15s ease, background-color 0.15s ease',
              userSelect: 'none'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '0.85rem',
              right: '0.85rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.72rem',
              fontWeight: 600,
              color: isFlipped ? '#b45309' : '#a8a29e'
            }}>
              <RotateCw size={13} />
              <span>{isFlipped ? 'Answer' : 'Tap to Flip'}</span>
            </div>

            <div style={{ maxWidth: '620px', width: '100%' }}>
              <span style={{
                display: 'inline-block',
                fontSize: '0.72rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: isFlipped ? '#92400e' : '#78716c',
                marginBottom: '0.5rem'
              }}>
                {isFlipped ? 'Key Answer' : 'Question / Prompt'}
              </span>

              <div style={{
                fontSize: isFlipped ? '1.05rem' : '1.15rem',
                fontWeight: isFlipped ? 500 : 700,
                color: isFlipped ? '#451a03' : '#1c1917',
                lineHeight: 1.6
              }}>
                <MathRenderer content={isFlipped ? (currentCard?.back || '') : (currentCard?.front || '')} />
              </div>
            </div>
          </div>

          {/* Pretty Yes / No Action Buttons */}
          <div style={{
            marginTop: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.65rem'
          }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#78716c', margin: 0 }}>
              {isFlipped ? 'Did you recall this correctly?' : 'Tap card to reveal answer, then rate your recall:'}
            </p>

            <div style={{ display: 'flex', gap: '0.85rem', width: '100%', maxWidth: '360px' }}>
              {/* No Button - Crimson Red */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleResponse(false);
                }}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#dc2626',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.925rem',
                  cursor: 'pointer',
                  boxShadow: '0 3px 8px rgba(220, 38, 38, 0.25)',
                  transition: 'background-color 0.12s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b91c1c')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#dc2626')}
              >
                <X size={18} strokeWidth={2.5} />
                <span>No</span>
              </button>

              {/* Yes Button - Emerald Green */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleResponse(true);
                }}
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  padding: '0.75rem 1rem',
                  backgroundColor: '#15803d',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.925rem',
                  cursor: 'pointer',
                  boxShadow: '0 3px 8px rgba(21, 128, 61, 0.25)',
                  transition: 'background-color 0.12s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#166534')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#15803d')}
              >
                <Check size={18} strokeWidth={2.5} />
                <span>Yes</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
