import React, { useState, useRef, useEffect } from 'react';
import { Segment, SegmentProgress } from '../types';
import { Check, Lock, Unlock, Sparkles, BookOpen, HelpCircle } from 'lucide-react';

interface SegmentSelectorProps {
  segments: Segment[];
  currentSegment: Segment | null;
  onSelectSegment: (segment: Segment) => void;
  onDoubleClickSegment: (segment: Segment) => void;
  progressMap: Record<string, SegmentProgress>;
  unlockAll: boolean;
  onToggleUnlockAll: () => void;
}

export const SegmentSelector: React.FC<SegmentSelectorProps> = ({
  segments,
  currentSegment,
  onSelectSegment,
  onDoubleClickSegment,
  progressMap,
  unlockAll,
  onToggleUnlockAll
}) => {
  const [hoveredSegment, setHoveredSegment] = useState<Segment | null>(null);
  const [hoverPosition, setHoverPosition] = useState<{ x: number; y: number } | null>(null);
  const hoverTimerRef = useRef<NodeJS.Timeout | number | null>(null);

  const clearHoverTimer = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current as number);
      hoverTimerRef.current = null;
    }
  };

  const dismissHover = () => {
    clearHoverTimer();
    setHoveredSegment(null);
    setHoverPosition(null);
  };

  const isAccessible = (index: number, segId: string) => {
    if (unlockAll) return true;
    if (index === 0) return true;
    if (progressMap[segId]?.manually_unlocked) return true;
    const prev = segments[index - 1];
    return !!progressMap[prev.id]?.completed;
  };

  // Only show preview after sustained hover (550ms)
  const handleMouseEnter = (seg: Segment, e: React.MouseEvent<HTMLButtonElement>) => {
    clearHoverTimer();
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = {
      x: Math.max(16, rect.left + rect.width / 2),
      y: rect.bottom + window.scrollY + 8
    };

    hoverTimerRef.current = setTimeout(() => {
      setHoverPosition(pos);
      setHoveredSegment(seg);
    }, 550);
  };

  const handleMouseLeave = () => {
    dismissHover();
  };

  // On touch screens (e.g. iPad / iPhone), require holding for 600ms to preview
  const handleTouchStart = (seg: Segment, e: React.TouchEvent<HTMLButtonElement>) => {
    clearHoverTimer();
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const pos = {
      x: Math.max(16, rect.left + rect.width / 2),
      y: rect.bottom + window.scrollY + 8
    };

    hoverTimerRef.current = setTimeout(() => {
      setHoverPosition(pos);
      setHoveredSegment(seg);
    }, 600);
  };

  const handleTouchEnd = () => {
    clearHoverTimer();
  };

  // When clicking or double clicking to change levels, immediately dismiss the hover info
  const handleClick = (seg: Segment, accessible: boolean) => {
    dismissHover();
    if (accessible) {
      onSelectSegment(seg);
    }
  };

  const handleDoubleClick = (seg: Segment) => {
    dismissHover();
    onDoubleClickSegment(seg);
  };

  useEffect(() => {
    const handleScrollOrDoc = () => {
      dismissHover();
    };
    window.addEventListener('scroll', handleScrollOrDoc, { passive: true });
    return () => {
      clearHoverTimer();
      window.removeEventListener('scroll', handleScrollOrDoc);
    };
  }, []);

  return (
    <div style={{ marginBottom: '1.25rem', position: 'relative' }}>
      {/* Top Bar with Level Info and Unlock Switch */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: '0.65rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#78350f', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Levels ({segments.length})
          </span>
          {currentSegment && (
            <span style={{ fontSize: '0.8rem', color: '#78716c', fontWeight: 600 }}>
              • Level {currentSegment.order_index}: {currentSegment.title}
            </span>
          )}
        </div>

        {/* Global Unlock All Button */}
        <button
          onClick={onToggleUnlockAll}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            padding: '0.35rem 0.65rem',
            borderRadius: '6px',
            fontSize: '0.74rem',
            fontWeight: 700,
            cursor: 'pointer',
            border: unlockAll ? '1.5px solid #d97706' : '1px solid #e7e2d7',
            backgroundColor: unlockAll ? '#fef3c7' : '#ffffff',
            color: unlockAll ? '#78350f' : '#78716c',
            transition: 'all 0.15s ease',
            boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
          }}
        >
          {unlockAll ? <Unlock size={13} color="#78350f" /> : <Lock size={13} color="#78716c" />}
          <span>{unlockAll ? 'Unlock All (Active)' : 'Unlock All'}</span>
        </button>
      </div>

      {/* Horizontal Scrollable Pills */}
      <div
        className="mobile-scroll-x"
        style={{
          display: 'flex',
          gap: '0.4rem',
          overflowX: 'auto',
          paddingBottom: '0.35rem',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {segments.map((seg, idx) => {
          const accessible = isAccessible(idx, seg.id);
          const isSelected = currentSegment?.id === seg.id;
          const prog = progressMap[seg.id];
          const isDone = prog?.completed;
          const isManuallyUnlocked = prog?.manually_unlocked;

          return (
            <button
              key={seg.id}
              onClick={() => handleClick(seg, accessible)}
              onDoubleClick={() => handleDoubleClick(seg)}
              onMouseEnter={(e) => handleMouseEnter(seg, e)}
              onMouseLeave={handleMouseLeave}
              onTouchStart={(e) => handleTouchStart(seg, e)}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={dismissHover}
              style={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.42rem 0.8rem',
                borderRadius: '8px',
                border: isSelected
                  ? '1.5px solid #78350f'
                  : isDone
                  ? '1.5px solid #86efac'
                  : isManuallyUnlocked
                  ? '1.5px solid #fde68a'
                  : '1px solid #e7e2d7',
                backgroundColor: isSelected
                  ? '#78350f'
                  : isDone
                  ? '#f0fdf4'
                  : isManuallyUnlocked
                  ? '#fffbeb'
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
                fontWeight: isSelected ? 800 : 600,
                fontSize: '0.8rem',
                cursor: accessible ? 'pointer' : 'pointer', // allow double clicking even if locked
                opacity: accessible ? 1 : 0.7,
                transition: 'all 0.12s ease',
                position: 'relative',
                userSelect: 'none'
              }}
            >
              <span>L{seg.order_index}</span>
              {isDone ? (
                <Check size={12} strokeWidth={3} />
              ) : isManuallyUnlocked && !unlockAll ? (
                <Sparkles size={11} color="#d97706" />
              ) : !accessible ? (
                <Lock size={11} />
              ) : null}
            </button>
          );
        })}
      </div>

      {/* Floating Hover Preview Card */}
      {hoveredSegment && hoverPosition && (
        <div
          style={{
            position: 'absolute',
            top: '42px',
            left: '0',
            maxWidth: '380px',
            width: '90%',
            backgroundColor: '#ffffff',
            border: '1.5px solid #78350f',
            borderRadius: '10px',
            padding: '0.85rem 1rem',
            boxShadow: '0 8px 24px rgba(120, 53, 15, 0.15)',
            zIndex: 50,
            pointerEvents: 'none',
            animation: 'fadeIn 0.12s ease-out'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
            <span style={{
              fontSize: '0.72rem',
              fontWeight: 800,
              color: '#d97706',
              textTransform: 'uppercase',
              letterSpacing: '0.04em'
            }}>
              Level {hoveredSegment.order_index}
            </span>
            {progressMap[hoveredSegment.id]?.completed ? (
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#15803d', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                <Check size={12} /> Mastered (100%)
              </span>
            ) : progressMap[hoveredSegment.id]?.quiz_passed ? (
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#b45309', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                <HelpCircle size={12} /> Phase 3: Flashcards
              </span>
            ) : progressMap[hoveredSegment.id]?.text_completed ? (
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#b45309', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                <BookOpen size={12} /> Phase 2: Quiz
              </span>
            ) : (
              <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#78716c' }}>
                Phase 1: Reading
              </span>
            )}
          </div>

          <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#451a03', margin: '0 0 0.35rem' }}>
            {hoveredSegment.title}
          </h4>

          {hoveredSegment.subtitle && (
            <p style={{ fontSize: '0.8rem', color: '#57534e', margin: '0 0 0.5rem', lineHeight: 1.45 }}>
              {hoveredSegment.subtitle}
            </p>
          )}

          <div style={{
            fontSize: '0.7rem',
            color: '#78716c',
            borderTop: '1px solid #f2ede4',
            paddingTop: '0.4rem',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <span>💡 Click to view</span>
            <span>⚡ Double-click to unlock</span>
          </div>
        </div>
      )}
    </div>
  );
};
