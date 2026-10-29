import React, { useState, useEffect } from 'react';
import { Question, Segment, SegmentProgress } from '../types';
import { supabase } from '../supabaseClient';
import { renderInlineMath } from './MathRenderer';
import { Flame, Trophy, Shuffle, RotateCcw, ShieldAlert, Edit3 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playCorrectSound, playWrongSound, playSuccessChime, playClickSound } from '../utils/soundEffects';

interface ExerciseZoneProps {
  segments: Segment[];
  progressMap: Record<string, SegmentProgress>;
  bestStreak: number;
  currentStreak: number;
  onUpdateStats: (correct: boolean, isSuddenDeath: boolean, streak: number) => void;
  onOpenScratchpad: (activeQ: Question) => void;
}

export const ExerciseZone: React.FC<ExerciseZoneProps> = ({
  segments,
  progressMap,
  bestStreak,
  currentStreak,
  onUpdateStats,
  onOpenScratchpad
}) => {
  const [zoneMode, setZoneMode] = useState<'random' | 'suddendeath'>('random');
  const [questionsPool, setQuestionsPool] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isFailed, setIsFailed] = useState<boolean>(false);
  const [failedOption, setFailedOption] = useState<string | null>(null);
  const [gameStreak, setGameStreak] = useState<number>(currentStreak);
  const [localBestStreak, setLocalBestStreak] = useState<number>(bestStreak);
  // "What am I inclined" helper state (No -> Maybe -> Yes -> unselected)
  const [inclinations, setInclinations] = useState<Record<string, 'no' | 'maybe' | 'yes'>>({});

  useEffect(() => {
    setLocalBestStreak(bestStreak);
  }, [bestStreak]);

  const completedSegmentIds = segments
    .filter(s => progressMap[s.id]?.completed)
    .map(s => s.id);

  const eligibleSegmentIds = completedSegmentIds.length > 0
    ? completedSegmentIds
    : segments.length > 0
    ? [segments[0].id]
    : [];

  useEffect(() => {
    fetchPoolQuestions();
  }, [eligibleSegmentIds.join(',')]);

  const fetchPoolQuestions = async () => {
    if (eligibleSegmentIds.length === 0) return;
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('study_questions')
        .select('*')
        .in('segment_id', eligibleSegmentIds);

      if (error) {
        console.error('Error fetching exercise pool:', error);
      } else if (data && data.length > 0) {
        setQuestionsPool(data);
        pickRandomQuestion(data);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleCycleInclination = (optId: string) => {
    playClickSound();
    setInclinations(prev => {
      const current = prev[optId];
      if (!current) {
        return { ...prev, [optId]: 'no' };
      }
      if (current === 'no') {
        return { ...prev, [optId]: 'maybe' };
      }
      if (current === 'maybe') {
        return { ...prev, [optId]: 'yes' };
      }
      const next = { ...prev };
      delete next[optId];
      return next;
    });
  };

  const getInclinationStyle = (inc?: 'no' | 'maybe' | 'yes') => {
    switch (inc) {
      case 'no':
        return {
          label: 'No',
          opacity: 1,
          bg: '#fef2f2',
          color: '#dc2626',
          border: '1.5px solid #fca5a5',
          boxShadow: '0 1px 3px rgba(220, 38, 38, 0.12)'
        };
      case 'maybe':
        return {
          label: 'Maybe',
          opacity: 1,
          bg: '#fffbeb',
          color: '#b45309',
          border: '1.5px solid #fde68a',
          boxShadow: '0 1px 3px rgba(217, 119, 6, 0.12)'
        };
      case 'yes':
        return {
          label: 'Yes',
          opacity: 1,
          bg: '#f0fdf4',
          color: '#15803d',
          border: '1.5px solid #86efac',
          boxShadow: '0 1px 3px rgba(22, 163, 74, 0.12)'
        };
      default:
        // Faded out "No" initially when unclicked
        return {
          label: 'No',
          opacity: 0.35,
          bg: '#f5efe6',
          color: '#78716c',
          border: '1px solid #d6cebf',
          boxShadow: 'none'
        };
    }
  };

  const pickRandomQuestion = (pool = questionsPool) => {
    if (pool.length === 0) return;
    const randomIdx = Math.floor(Math.random() * pool.length);
    setCurrentQuestion(pool[randomIdx]);
    setSelectedOption(null);
    setInclinations({});
    setIsFailed(false);
    setFailedOption(null);
  };

  const handleSelectOption = (optId: string) => {
    if (isFailed || !currentQuestion) return;

    setSelectedOption(optId);

    const isCorrect = optId === currentQuestion.correct_option;

    if (isCorrect) {
      playCorrectSound();
      if (zoneMode === 'suddendeath') {
        const nextStreak = gameStreak + 1;
        setGameStreak(nextStreak);
        if (nextStreak > localBestStreak) {
          setLocalBestStreak(nextStreak);
        }
        if (nextStreak % 5 === 0) {
          playSuccessChime();
          confetti({ particleCount: 80, spread: 60 });
        }
        onUpdateStats(true, true, nextStreak);
      } else {
        onUpdateStats(true, false, gameStreak);
      }

      // Immediately advance to next question with zero popup delays!
      setTimeout(() => {
        pickRandomQuestion();
      }, 150);
    } else {
      // Wrong: show explanation and handle streak loss
      playWrongSound();
      setFailedOption(optId);
      setIsFailed(true);

      if (zoneMode === 'suddendeath') {
        onUpdateStats(false, true, 0);
        setGameStreak(0);
      } else {
        onUpdateStats(false, false, gameStreak);
      }
    }
  };

  const handleRestart = () => {
    playClickSound();
    pickRandomQuestion();
  };

  const difficultyColors = {
    easy: { bg: '#f0fdf4', text: '#15803d', border: '#bbf7d0', label: 'Elemental' },
    intermediate: { bg: '#fffbeb', text: '#b45309', border: '#fde68a', label: 'Conceptual' },
    hard: { bg: '#fef2f2', text: '#b91c1c', border: '#fecaca', label: 'Advanced' }
  };

  const diffStyle = currentQuestion
    ? difficultyColors[currentQuestion.difficulty] || difficultyColors.easy
    : difficultyColors.easy;

  const currentSegment = segments.find(s => s.id === currentQuestion?.segment_id);

  return (
    <div style={{ maxWidth: '840px', margin: '0 auto' }}>
      {/* Top Header & Mode Switcher */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem',
        marginBottom: '1.25rem',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #e7e2d7',
        padding: '0.75rem 1rem',
        boxShadow: '0 1px 3px rgba(120, 53, 15, 0.02)'
      }}>
        {/* Mode Switcher */}
        <div style={{ display: 'flex', gap: '0.4rem', backgroundColor: '#fdfbf7', padding: '0.25rem', borderRadius: '8px', border: '1px solid #e7e2d7' }}>
          <button
            onClick={() => {
              playClickSound();
              setZoneMode('random');
              pickRandomQuestion();
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.45rem 0.85rem',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: zoneMode === 'random' ? '#78350f' : 'transparent',
              color: zoneMode === 'random' ? '#ffffff' : '#78716c',
              fontWeight: 700,
              fontSize: '0.82rem',
              cursor: 'pointer',
              transition: 'all 0.12s ease'
            }}
          >
            <Shuffle size={14} />
            <span>Random Practice</span>
          </button>

          <button
            onClick={() => {
              playClickSound();
              setZoneMode('suddendeath');
              pickRandomQuestion();
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.45rem 0.85rem',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: zoneMode === 'suddendeath' ? '#dc2626' : 'transparent',
              color: zoneMode === 'suddendeath' ? '#ffffff' : '#78716c',
              fontWeight: 700,
              fontSize: '0.82rem',
              cursor: 'pointer',
              transition: 'all 0.12s ease'
            }}
          >
            <Flame size={14} />
            <span>Sudden Death</span>
          </button>
        </div>

        {/* Streak Badges in Sudden Death */}
        {zoneMode === 'suddendeath' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.35rem 0.65rem',
              borderRadius: '6px',
              backgroundColor: '#fef2f2',
              border: '1px solid #fecaca',
              color: '#b91c1c',
              fontSize: '0.8rem',
              fontWeight: 800
            }}>
              <Flame size={15} />
              <span>Streak: {gameStreak} 🔥</span>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.35rem 0.65rem',
              borderRadius: '6px',
              backgroundColor: '#fffbeb',
              border: '1px solid #fde68a',
              color: '#b45309',
              fontSize: '0.8rem',
              fontWeight: 800
            }}>
              <Trophy size={14} />
              <span>Best: {localBestStreak}</span>
            </div>
          </div>
        )}

        {zoneMode === 'random' && (
          <div style={{ fontSize: '0.78rem', color: '#78716c', fontWeight: 600 }}>
            Pool: {questionsPool.length} exercises from {eligibleSegmentIds.length} unlocked topic(s)
          </div>
        )}
      </div>

      {/* Main Question Card */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e7e2d7' }}>
          <p style={{ color: '#78716c', fontWeight: 600 }}>Loading exercises pool...</p>
        </div>
      ) : !currentQuestion ? (
        <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e7e2d7' }}>
          <p style={{ color: '#78716c', fontWeight: 600 }}>No exercises found. Complete a level first!</p>
        </div>
      ) : (
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e7e2d7',
          padding: '1.75rem 1.5rem',
          boxShadow: '0 2px 6px rgba(120, 53, 15, 0.03)'
        }}>
          {/* Question Meta Info */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '1rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid #f2ede4'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              {currentSegment && (
                <span style={{ fontSize: '0.76rem', fontWeight: 800, color: '#78350f', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Level {currentSegment.order_index}: {currentSegment.title}
                </span>
              )}
              <span style={{
                padding: '0.15rem 0.5rem',
                borderRadius: '999px',
                fontSize: '0.68rem',
                fontWeight: 700,
                backgroundColor: diffStyle.bg,
                color: diffStyle.text,
                border: `1px solid ${diffStyle.border}`
              }}>
                {diffStyle.label}
              </span>
            </div>

            {/* Calculations Button */}
            <button
              onClick={() => onOpenScratchpad(currentQuestion)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.65rem',
                borderRadius: '6px',
                backgroundColor: '#fdfbf7',
                border: '1px solid #e7e2d7',
                color: '#78350f',
                fontWeight: 700,
                fontSize: '0.74rem',
                cursor: 'pointer'
              }}
            >
              <Edit3 size={13} color="#78350f" />
              <span>Scratchpad / Calculations</span>
            </button>
          </div>

          {/* Question Text */}
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{
              fontSize: '1.05rem',
              fontWeight: 700,
              color: '#451a03',
              lineHeight: 1.6
            }}>
              {renderInlineMath(currentQuestion.question)}
            </h3>
          </div>

          {/* 6 Choices */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
            {currentQuestion.options.map((opt) => {
              const isSelected = selectedOption === opt.id;
              const isCorrectChoice = opt.id === currentQuestion.correct_option;
              const currentInclination = inclinations[opt.id];
              const incStyle = getInclinationStyle(currentInclination);

              let bg = '#ffffff';
              let border = '#e7e2d7';
              let textColor = '#292524';
              let badgeBg = '#f5efe6';
              let badgeColor = '#78350f';

              if (isFailed) {
                if (isCorrectChoice) {
                  bg = '#f0fdf4';
                  border = '#86efac';
                  textColor = '#15803d';
                  badgeBg = '#dcfce7';
                  badgeColor = '#15803d';
                } else if (opt.id === failedOption) {
                  bg = '#fef2f2';
                  border = '#fca5a5';
                  textColor = '#b91c1c';
                  badgeBg = '#fee2e2';
                  badgeColor = '#b91c1c';
                } else {
                  textColor = '#a8a29e';
                  border = '#f2ede4';
                }
              } else if (isSelected) {
                bg = '#f0fdf4';
                border = '#15803d';
                badgeBg = '#15803d';
                badgeColor = '#ffffff';
              }

              return (
                <div
                  key={opt.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleSelectOption(opt.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectOption(opt.id);
                    }
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: `1.5px solid ${border}`,
                    backgroundColor: bg,
                    textAlign: 'left',
                    cursor: isFailed ? 'default' : 'pointer',
                    transition: 'all 0.12s ease',
                    width: '100%',
                    boxSizing: 'border-box'
                  }}
                >
                  <span style={{
                    flexShrink: 0,
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    backgroundColor: badgeBg,
                    color: badgeColor,
                    marginTop: '0.1rem'
                  }}>
                    {opt.id.toUpperCase()}
                  </span>
                  <span style={{
                    flex: 1,
                    fontSize: '0.92rem',
                    fontWeight: isSelected ? 700 : 500,
                    color: textColor,
                    lineHeight: 1.5,
                    paddingRight: '0.5rem',
                    opacity: !isSelected && !isFailed && currentInclination === 'no' ? 0.65 : 1
                  }}>
                    {renderInlineMath(opt.text)}
                  </span>

                  {/* Inclination Helper Pill (No / Maybe / Yes) - not a submission */}
                  <button
                    type="button"
                    disabled={isFailed}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCycleInclination(opt.id);
                    }}
                    style={{
                      flexShrink: 0,
                      marginTop: '0.05rem',
                      padding: '0.22rem 0.65rem',
                      borderRadius: '999px',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      cursor: isFailed ? 'default' : 'pointer',
                      transition: 'all 0.15s ease',
                      border: incStyle.border,
                      backgroundColor: incStyle.bg,
                      color: incStyle.color,
                      opacity: incStyle.opacity,
                      boxShadow: incStyle.boxShadow,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      userSelect: 'none'
                    }}
                    aria-label="Inclination helper: click to cycle No, Maybe, Yes"
                  >
                    {incStyle.label}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Failure Card (Only shows on Incorrect answer!) */}
          {isFailed && (
            <div style={{
              backgroundColor: '#fef2f2',
              border: '1.5px solid #fca5a5',
              borderRadius: '10px',
              padding: '1.15rem 1.25rem',
              animation: 'fadeIn 0.2s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <ShieldAlert size={18} color="#b91c1c" />
                <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#b91c1c' }}>
                  {zoneMode === 'suddendeath'
                    ? '💀 SUDDEN DEATH! Streak Reset to 0'
                    : 'Incorrect Answer'}
                </span>
              </div>
              <p style={{ fontSize: '0.84rem', color: '#7f1d1d', margin: '0 0 0.75rem', lineHeight: 1.55 }}>
                You selected <strong>Option {failedOption?.toUpperCase()}</strong>. Correct answer is <strong>Option {currentQuestion.correct_option.toUpperCase()}</strong>.
              </p>
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #fecaca',
                borderRadius: '6px',
                padding: '0.85rem',
                marginBottom: '1rem',
                fontSize: '0.86rem',
                color: '#44403c',
                lineHeight: 1.55
              }}>
                <strong style={{ color: '#78350f' }}>Explanation: </strong>
                {renderInlineMath(currentQuestion.explanation)}
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={handleRestart}
                  style={{
                    padding: '0.65rem 1.5rem',
                    backgroundColor: zoneMode === 'suddendeath' ? '#dc2626' : '#78350f',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <RotateCcw size={15} />
                  <span>{zoneMode === 'suddendeath' ? 'Play Sudden Death Again' : 'Try Another Exercise'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
