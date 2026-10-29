import React from 'react';
import { Segment } from '../types';
import { MathRenderer } from './MathRenderer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface TextSummaryPhaseProps {
  segment: Segment;
  isCompleted: boolean;
  onProceedToQuiz: () => void;
}

export const TextSummaryPhase: React.FC<TextSummaryPhaseProps> = ({
  segment,
  isCompleted,
  onProceedToQuiz
}) => {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e7e2d7',
      padding: '2rem 1.75rem',
      boxShadow: '0 1px 3px rgba(120, 53, 15, 0.02)'
    }}>
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

      {/* Narrative Text with KaTeX formulas */}
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        <MathRenderer content={segment.summary_markdown} />
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
          <span>Take Level Quiz (12 Qs)</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
