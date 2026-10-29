import React, { useState } from 'react';
import { Flashcard } from '../types';
import confetti from 'canvas-confetti';
import { Check, X, RotateCw, Trophy, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface FlashcardsPhaseProps {
  flashcards: Flashcard[];
  segmentTitle: string;
  isAlreadyCompleted: boolean;
  onCompleteSegment: () => void;
  onGoToNextSegment: () => void;
  hasNextSegment: boolean;
}

export const FlashcardsPhase: React.FC<FlashcardsPhaseProps> = ({
  flashcards,
  segmentTitle,
  isAlreadyCompleted,
  onCompleteSegment,
  onGoToNextSegment,
  hasNextSegment
}) => {
  // Queue of remaining cards to master
  const [queue, setQueue] = useState<Flashcard[]>([...flashcards]);
  // Mastered set of card IDs
  const [masteredIds, setMasteredIds] = useState<Set<string>>(new Set());
  // Is card flipped to show back?
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  // Current index in active queue
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  // All cards mastered in current session?
  const [sessionCompleted, setSessionCompleted] = useState<boolean>(isAlreadyCompleted);

  const currentCard = queue[currentIndex];
  const totalCards = flashcards.length;
  const masteredCount = masteredIds.size;

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleResponse = (knewIt: boolean) => {
    if (!currentCard) return;

    if (knewIt) {
      // Mark as mastered
      const updatedMastered = new Set(masteredIds);
      updatedMastered.add(currentCard.id);
      setMasteredIds(updatedMastered);

      // Remove from queue
      const nextQueue = queue.filter((_, idx) => idx !== currentIndex);
      setQueue(nextQueue);
      setIsFlipped(false);

      if (nextQueue.length === 0) {
        // All mastered!
        setSessionCompleted(true);
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
      // Didn't know it: keep in queue, move to next card or end of queue
      setIsFlipped(false);
      // Advance to next card in the remaining queue
      setCurrentIndex(prev => (prev + 1 >= queue.length ? 0 : prev + 1));
    }
  };

  const handleResetSession = () => {
    setQueue([...flashcards]);
    setMasteredIds(new Set());
    setIsFlipped(false);
    setCurrentIndex(0);
    setSessionCompleted(false);
  };

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e2e8f0',
      padding: '2rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
    }}>
      {/* Header Info */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
        paddingBottom: '1.25rem',
        marginBottom: '1.5rem',
        borderBottom: '1px solid #f1f5f9'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4f46e5', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Phase 3 of 3: Flashcard Recall Mastery
            </span>
            {isAlreadyCompleted && (
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', backgroundColor: '#dcfce7', padding: '0.1rem 0.5rem', borderRadius: '9999px' }}>
                Level Mastered
              </span>
            )}
          </div>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a' }}>
            {segmentTitle} - Flashcards
          </h2>
          <p style={{ fontSize: '0.825rem', color: '#64748b' }}>
            Click card to flip. <strong>Mastery Rule:</strong> You must answer "Yes" to all {totalCards} cards to complete this segment!
          </p>
        </div>

        {/* Real-time Mastery Counter */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          fontSize: '0.875rem',
          fontWeight: 700,
          color: '#334155'
        }}>
          <span>Mastered:</span>
          <span style={{ color: masteredCount === totalCards ? '#10b981' : '#4f46e5' }}>
            {masteredCount} / {totalCards}
          </span>
        </div>
      </div>

      {/* Completion Banner */}
      {sessionCompleted ? (
        <div style={{
          padding: '2.5rem',
          borderRadius: '12px',
          backgroundColor: '#ecfdf5',
          border: '2px solid #10b981',
          textAlign: 'center',
          boxShadow: '0 10px 15px -3px rgba(16, 185, 129, 0.1)'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: '#10b981',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            margin: '0 auto 1rem',
            boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
          }}>
            <Trophy size={32} />
          </div>

          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#065f46', marginBottom: '0.5rem' }}>
            Segment Completely Mastered!
          </h3>
          <p style={{ fontSize: '0.95rem', color: '#047857', maxWidth: '520px', margin: '0 auto 1.75rem', lineHeight: 1.5 }}>
            You have successfully read the text, aced the 12-question quiz (12/12), and retained all {totalCards} flashcards. Your progress is saved in Supabase!
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={handleResetSession}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.7rem 1.4rem',
                backgroundColor: '#ffffff',
                color: '#065f46',
                border: '1.5px solid #a7f3d0',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}
            >
              <RotateCw size={16} />
              <span>Practice Cards Again</span>
            </button>

            {hasNextSegment && (
              <button
                onClick={onGoToNextSegment}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.7rem 1.6rem',
                  backgroundColor: '#10b981',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)'
                }}
              >
                <span>Advance to Next Level</span>
                <ArrowRight size={18} />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Active Card Deck */
        <div>
          {/* Card Count & Category */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b' }}>
              Card {currentIndex + 1} of {queue.length} in current review loop
            </span>
            {currentCard?.category && (
              <span style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                backgroundColor: '#ede9fe',
                color: '#6366f1',
                padding: '0.15rem 0.5rem',
                borderRadius: '6px'
              }}>
                {currentCard.category}
              </span>
            )}
          </div>

          {/* Interactive Flip Card */}
          <div
            onClick={handleFlip}
            style={{
              minHeight: '260px',
              borderRadius: '14px',
              border: isFlipped ? '2px solid #818cf8' : '2px solid #e2e8f0',
              backgroundColor: isFlipped ? '#f5f3ff' : '#ffffff',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              cursor: 'pointer',
              position: 'relative',
              boxShadow: '0 8px 20px -4px rgba(0,0,0,0.06)',
              transition: 'all 0.25s ease',
              userSelect: 'none'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#94a3b8'
            }}>
              <RotateCw size={14} />
              <span>{isFlipped ? 'Answer' : 'Prompt (Click to flip)'}</span>
            </div>

            <div style={{ maxWidth: '640px' }}>
              <span style={{
                display: 'inline-block',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: isFlipped ? '#4f46e5' : '#64748b',
                marginBottom: '0.75rem'
              }}>
                {isFlipped ? 'Key Insight / Answer' : 'Question / Concept'}
              </span>

              <p style={{
                fontSize: isFlipped ? '1.1rem' : '1.25rem',
                fontWeight: isFlipped ? 500 : 700,
                color: isFlipped ? '#1e1b4b' : '#0f172a',
                lineHeight: 1.6,
                whiteSpace: 'pre-line'
              }}>
                {isFlipped ? currentCard?.back : currentCard?.front}
              </p>
            </div>
          </div>

          {/* Pretty Yes / No Action Buttons */}
          <div style={{
            marginTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#64748b' }}>
              {isFlipped ? 'Did you know this concept?' : 'Flip the card to check your answer first!'}
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', width: '100%', maxWidth: '420px' }}>
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
                  gap: '0.5rem',
                  padding: '0.9rem',
                  backgroundColor: '#ef4444',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3)',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#dc2626')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ef4444')}
              >
                <X size={20} strokeWidth={2.5} />
                <span>No (Didn't Know)</span>
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
                  gap: '0.5rem',
                  padding: '0.9rem',
                  backgroundColor: '#10b981',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#059669')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#10b981')}
              >
                <Check size={20} strokeWidth={2.5} />
                <span>Yes (Knew It!)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
