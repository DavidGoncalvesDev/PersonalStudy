import React from 'react';
import { Segment, SegmentProgress } from '../types';
import { CheckCircle, Lock, Unlock, ArrowRight } from 'lucide-react';

interface SegmentSelectorProps {
  segments: Segment[];
  currentSegment: Segment | null;
  onSelectSegment: (segment: Segment) => void;
  progressMap: Record<string, SegmentProgress>;
  unlockAll: boolean;
  onToggleUnlockAll: () => void;
}

export const SegmentSelector: React.FC<SegmentSelectorProps> = ({
  segments,
  currentSegment,
  onSelectSegment,
  progressMap,
  unlockAll,
  onToggleUnlockAll
}) => {
  // Determine if a segment is accessible
  const isAccessible = (index: number) => {
    if (unlockAll) return true;
    if (index === 0) return true;
    // Accessible if previous segment is completed
    const prevSegment = segments[index - 1];
    return progressMap[prevSegment.id]?.completed;
  };

  return (
    <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '1.25rem',
      marginBottom: '1.5rem',
      boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem',
        marginBottom: '1rem',
        paddingBottom: '0.75rem',
        borderBottom: '1px solid #f1f5f9'
      }}>
        <div>
          <h2 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>
            Study Levels & Curriculum
          </h2>
          <p style={{ fontSize: '0.8rem', color: '#64748b' }}>
            Sequential mastery: Complete Text → Pass 12/12 Quiz → Master Flashcards to advance.
          </p>
        </div>

        {/* Unlock All Segments Toggle Button */}
        <button
          onClick={onToggleUnlockAll}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.45rem 0.85rem',
            borderRadius: '8px',
            fontSize: '0.8rem',
            fontWeight: 600,
            cursor: 'pointer',
            border: unlockAll ? '1px solid #818cf8' : '1px solid #cbd5e1',
            backgroundColor: unlockAll ? '#eef2ff' : '#f8fafc',
            color: unlockAll ? '#4f46e5' : '#475569',
            transition: 'all 0.15s ease'
          }}
          title={unlockAll ? "Lock mode active (sequential progression)" : "Unlock all levels for free review"}
        >
          {unlockAll ? <Unlock size={15} color="#4f46e5" /> : <Lock size={15} color="#64748b" />}
          <span>{unlockAll ? 'All Levels Unlocked' : 'Unlock All Levels'}</span>
        </button>
      </div>

      {/* Segment Cards / Level Pills */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '0.85rem'
      }}>
        {segments.map((seg, idx) => {
          const accessible = isAccessible(idx);
          const isSelected = currentSegment?.id === seg.id;
          const progress = progressMap[seg.id];
          const isDone = progress?.completed;

          return (
            <div
              key={seg.id}
              onClick={() => {
                if (accessible) onSelectSegment(seg);
              }}
              style={{
                padding: '0.9rem 1rem',
                borderRadius: '10px',
                border: isSelected
                  ? '2px solid #4f46e5'
                  : isDone
                  ? '1px solid #a7f3d0'
                  : accessible
                  ? '1px solid #e2e8f0'
                  : '1px dashed #cbd5e1',
                backgroundColor: isSelected
                  ? '#f5f3ff'
                  : isDone
                  ? '#ecfdf5'
                  : accessible
                  ? '#ffffff'
                  : '#f8fafc',
                cursor: accessible ? 'pointer' : 'not-allowed',
                opacity: accessible ? 1 : 0.6,
                transition: 'all 0.15s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: isSelected ? '#4f46e5' : isDone ? '#059669' : '#64748b',
                    letterSpacing: '0.04em'
                  }}>
                    Level {seg.order_index}
                  </span>

                  {isDone ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#059669', fontSize: '0.75rem', fontWeight: 700 }}>
                      <CheckCircle size={15} />
                      Mastered
                    </span>
                  ) : !accessible ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#94a3b8', fontSize: '0.75rem' }}>
                      <Lock size={14} />
                      Locked
                    </span>
                  ) : (
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#4f46e5' }}>
                      In Progress
                    </span>
                  )}
                </div>

                <h3 style={{
                  fontSize: '0.925rem',
                  fontWeight: 700,
                  color: isSelected ? '#312e81' : '#0f172a',
                  lineHeight: 1.35,
                  marginBottom: '0.25rem'
                }}>
                  {seg.title}
                </h3>

                {seg.subtitle && (
                  <p style={{
                    fontSize: '0.78rem',
                    color: '#64748b',
                    lineHeight: 1.4,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {seg.subtitle}
                  </p>
                )}
              </div>

              {/* Phase progress mini-indicator */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '0.75rem',
                paddingTop: '0.5rem',
                borderTop: '1px solid rgba(0,0,0,0.04)',
                fontSize: '0.72rem',
                color: '#64748b'
              }}>
                <span style={{ color: progress?.text_completed ? '#059669' : '#94a3b8', fontWeight: 600 }}>
                  1. Text {progress?.text_completed ? '✓' : '○'}
                </span>
                <span>•</span>
                <span style={{ color: progress?.quiz_passed ? '#059669' : '#94a3b8', fontWeight: 600 }}>
                  2. Quiz (12/12) {progress?.quiz_passed ? '✓' : '○'}
                </span>
                <span>•</span>
                <span style={{ color: progress?.flashcards_passed ? '#059669' : '#94a3b8', fontWeight: 600 }}>
                  3. Cards {progress?.flashcards_passed ? '✓' : '○'}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
