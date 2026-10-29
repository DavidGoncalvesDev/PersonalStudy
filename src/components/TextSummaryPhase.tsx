import React, { useEffect } from 'react';
import { Segment } from '../types';
import { MathRenderer } from './MathRenderer';
import { ArrowRight, CheckCircle2, Bookmark, ArrowLeft } from 'lucide-react';

interface TextSummaryPhaseProps {
  segment: Segment;
  isCompleted: boolean;
  onProceedToQuiz: () => void;
  highlightAnchor?: string | null;
  activeQuestionNumber?: number | null;
  activeReferenceSource?: 'quiz' | 'flashcards' | null;
  activeItemNumber?: number | null;
  onReturn?: () => void;
  onReturnToQuiz?: () => void;
}

export const TextSummaryPhase: React.FC<TextSummaryPhaseProps> = ({
  segment,
  isCompleted,
  onProceedToQuiz,
  highlightAnchor,
  activeQuestionNumber,
  activeReferenceSource,
  activeItemNumber,
  onReturn,
  onReturnToQuiz
}) => {
  const effectiveSource = activeReferenceSource || (activeQuestionNumber ? 'quiz' : null);
  const effectiveItemNumber = activeItemNumber ?? activeQuestionNumber;
  const handleReturn = onReturn || onReturnToQuiz;

  // Smoothly scroll to the referenced section when requested from a quiz or flashcard
  useEffect(() => {
    if (!highlightAnchor) return;
    const timer = setTimeout(() => {
      const slug = highlightAnchor.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const target = document.getElementById(slug) ||
                     document.querySelector(`[id*="${slug}"]`) ||
                     document.getElementById(highlightAnchor);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 150);
    return () => clearTimeout(timer);
  }, [highlightAnchor]);

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e7e2d7',
      padding: 'clamp(1rem, 3vw, 2rem) clamp(0.75rem, 2.5vw, 1.75rem)',
      boxShadow: '0 1px 3px rgba(120, 53, 15, 0.02)'
    }}>
      {/* Sticky Active Context Banner: Appears when inspecting a concept from a live question or flashcard */}
      {effectiveSource && (
        <div style={{
          position: 'sticky',
          top: 'clamp(58px, 12vw, 88px)',
          zIndex: 35,
          marginBottom: '1.25rem',
          backgroundColor: '#fffbeb',
          border: '1.5px solid #fde68a',
          borderRadius: '10px',
          padding: 'clamp(0.5rem, 2vw, 0.75rem) clamp(0.65rem, 2.5vw, 1.25rem)',
          boxShadow: '0 6px 16px rgba(217, 119, 6, 0.12)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.6rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Bookmark size={18} color="#b45309" />
            <div>
              <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#92400e', display: 'block' }}>
                {effectiveSource === 'flashcards'
                  ? `Reviewing Concept for Flashcard ${effectiveItemNumber || ''}`
                  : `Reviewing Concept for Question ${effectiveItemNumber || ''} of 12`}
              </span>
              <span style={{ fontSize: '0.78rem', color: '#b45309' }}>
                {effectiveSource === 'flashcards'
                  ? 'The relevant section is highlighted below in amber. Your flashcard deck is still in progress.'
                  : 'The relevant section is highlighted below in amber. Your quiz is still in progress.'}
              </span>
            </div>
          </div>

          {handleReturn && (
            <button
              onClick={handleReturn}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                backgroundColor: '#78350f',
                color: '#ffffff',
                border: 'none',
                fontWeight: 800,
                fontSize: '0.82rem',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(120, 53, 15, 0.25)',
                transition: 'all 0.12s ease'
              }}
            >
              <ArrowLeft size={14} />
              <span>
                {effectiveSource === 'flashcards'
                  ? `Return to Flashcards`
                  : `Return to Question ${effectiveItemNumber || ''}`}
              </span>
            </button>
          )}
        </div>
      )}

      {/* Title & Subtitle */}
      <div style={{ marginBottom: '1.75rem', borderBottom: '1px solid #f2eee6', paddingBottom: '1rem' }}>
        <div style={{
          fontSize: '0.75rem',
          fontWeight: 800,
          color: '#b45309',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          marginBottom: '0.25rem'
        }}>
          Level {segment.order_index} • Study Material
        </div>
        <h1 style={{
          fontSize: '1.5rem',
          fontWeight: 800,
          color: '#451a03',
          letterSpacing: '-0.02em',
          lineHeight: 1.3
        }}>
          {segment.title}
        </h1>
        {segment.subtitle && (
          <p style={{ fontSize: '0.9rem', color: '#78716c', marginTop: '0.35rem', lineHeight: 1.5 }}>
            {segment.subtitle}
          </p>
        )}
      </div>

      {/* Narrative Text with KaTeX formulas and highlighted anchor */}
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        <MathRenderer
          content={segment.summary_markdown}
          highlightAnchor={highlightAnchor}
          activeQuestionNumber={activeQuestionNumber}
          activeReferenceSource={effectiveSource}
          activeItemNumber={effectiveItemNumber}
        />
      </div>

      {/* Clean Bottom Action */}
      <div style={{
        marginTop: '2.5rem',
        paddingTop: '1.25rem',
        borderTop: '1px solid #e7e2d7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem'
      }}>
        <div style={{ fontSize: '0.85rem', color: '#78716c' }}>
          {isCompleted ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#15803d', fontWeight: 600 }}>
              <CheckCircle2 size={16} /> Text review complete
            </span>
          ) : (
            <span>Next: Level Quiz (12 Questions • 100% required to advance)</span>
          )}
        </div>

        <button
          onClick={onProceedToQuiz}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.65rem 1.4rem',
            backgroundColor: '#78350f',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '0.9rem',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 3px 8px rgba(120, 53, 15, 0.25)',
            transition: 'background-color 0.12s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#582f10')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#78350f')}
        >
          <span>{isCompleted ? 'Return to Level Quiz (12 Qs)' : 'Take Level Quiz (12 Qs)'}</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
