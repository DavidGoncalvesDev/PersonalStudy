import React from 'react';
import { Segment, SegmentProgress } from '../types';
import { Check, Lock, Unlock } from 'lucide-react';

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
  const isAccessible = (index: number) => {
    if (unlockAll) return true;
    if (index === 0) return true;
    const prev = segments[index - 1];
    return progressMap[prev.id]?.completed;
  };

  return (
    <div style={{ marginBottom: '1.25rem' }}>
      {/* Top Bar with Level Dropdown / Pills & Unlock Switch */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: '0.65rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#78350f', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Levels ({segments.length})
          </span>
          {currentSegment && (
            <span style={{ fontSize: '0.8rem', color: '#78716c', fontWeight: 500 }}>
              • Level {currentSegment.order_index}: {currentSegment.title}
            </span>
          )}
        </div>

        <button
          onClick={onToggleUnlockAll}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.3rem 0.6rem',
            borderRadius: '6px',
            fontSize: '0.72rem',
            fontWeight: 700,
            cursor: 'pointer',
            border: unlockAll ? '1px solid #d97706' : '1px solid #e7e2d7',
            backgroundColor: unlockAll ? '#fef3c7' : '#ffffff',
            color: unlockAll ? '#78350f' : '#78716c'
          }}
          title={unlockAll ? "Lock mode (sequential progression)" : "Unlock all levels"}
        >
          {unlockAll ? <Unlock size={12} color="#78350f" /> : <Lock size={12} color="#78716c" />}
          <span>{unlockAll ? 'All Unlocked' : 'Unlock All'}</span>
        </button>
      </div>

      {/* Horizontal Scrollable Pills */}
      <div style={{
        display: 'flex',
        gap: '0.4rem',
        overflowX: 'auto',
        paddingBottom: '0.35rem',
        scrollbarWidth: 'none'
      }}>
        {segments.map((seg, idx) => {
          const accessible = isAccessible(idx);
          const isSelected = currentSegment?.id === seg.id;
          const isDone = progressMap[seg.id]?.completed;

          return (
            <button
              key={seg.id}
              onClick={() => {
                if (accessible) onSelectSegment(seg);
              }}
              disabled={!accessible}
              style={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.4rem 0.75rem',
                borderRadius: '8px',
                border: isSelected
                  ? '1.5px solid #78350f'
                  : isDone
                  ? '1px solid #bbf7d0'
                  : '1px solid #e7e2d7',
                backgroundColor: isSelected
                  ? '#78350f'
                  : isDone
                  ? '#f0fdf4'
                  : accessible
                  ? '#ffffff'
                  : '#f7f4ee',
                color: isSelected
                  ? '#ffffff'
                  : isDone
                  ? '#15803d'
                  : accessible
                  ? '#44403c'
                  : '#a8a29e',
                fontWeight: isSelected ? 700 : 600,
                fontSize: '0.8rem',
                cursor: accessible ? 'pointer' : 'not-allowed',
                opacity: accessible ? 1 : 0.6,
                transition: 'all 0.12s ease'
              }}
            >
              <span>L{seg.order_index}</span>
              {isDone ? (
                <Check size={12} strokeWidth={3} />
              ) : !accessible ? (
                <Lock size={11} />
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
};
