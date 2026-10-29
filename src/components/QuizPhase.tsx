import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import confetti from 'canvas-confetti';
import { Award, Edit3, ShieldAlert, RotateCcw, ArrowRight } from 'lucide-react';
import { renderInlineMath } from './MathRenderer';
import { playCorrectSound, playWrongSound, playSuccessChime, playClickSound } from '../utils/soundEffects';

interface QuizPhaseProps {
  questions: Question[];
  segmentTitle: string;
  isAlreadyPassed: boolean;
  onPassQuiz: (score: number) => void;
  onProceedToFlashcards: () => void;
  onOpenScratchpad?: () => void;
}

export const QuizPhase: React.FC<QuizPhaseProps> = ({
  questions,
  segmentTitle,
  isAlreadyPassed,
  onPassQuiz,
  onProceedToFlashcards,
  onOpenScratchpad
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isFailed, setIsFailed] = useState<boolean>(false);
  const [failedOption, setFailedOption] = useState<string | null>(null);
  const [isAllCompleted, setIsAllCompleted] = useState<boolean>(false);
  // "What am I inclined" helper state (No -> Maybe -> Yes -> unselected)
  const [inclinations, setInclinations] = useState<Record<string, 'no' | 'maybe' | 'yes'>>({});

  useEffect(() => {
    setInclinations({});
  }, [currentIndex]);

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
      // 'yes' -> cycle back to unselected (faded out No)
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

  if (!questions || questions.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '2.5rem', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e7e2d7' }}>
        <p style={{ color: '#78716c', fontWeight: 600 }}>No questions available for this level.</p>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  const handleSelectOption = (optId: string) => {
    if (isFailed || isAllCompleted) return;

    setSelectedOption(optId);

    const isCorrect = optId === currentQ.correct_option;

    if (isCorrect) {
      playCorrectSound();
      // Correct! Immediate transition without any intermediate popups or clicking "next"
      if (currentIndex === questions.length - 1) {
        // All 12/12 in a row completed!
        setIsAllCompleted(true);
        playSuccessChime();
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
        onPassQuiz(12);
      } else {
        // Move instantly to the next question after a tiny 150ms visual confirmation
        setTimeout(() => {
          setSelectedOption(null);
          setInclinations({});
          setCurrentIndex(prev => prev + 1);
        }, 150);
      }
    } else {
      // Wrong! Show explanation card and enforce restart
      playWrongSound();
      setFailedOption(optId);
      setIsFailed(true);
    }
  };

  const handleRestartQuiz = () => {
    playClickSound();
    setCurrentIndex(0);
    setSelectedOption(null);
    setInclinations({});
    setIsFailed(false);
    setFailedOption(null);
    setIsAllCompleted(false);
  };

  // If already passed and user visits to review
  if (isAllCompleted || (isAlreadyPassed && !selectedOption && currentIndex === 0 && !isFailed)) {
    return (
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        border: '1.5px solid #86efac',
        padding: '2.25rem 1.5rem',
        boxShadow: '0 4px 12px rgba(22, 163, 74, 0.08)',
        textAlign: 'center'
      }}>
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#f0fdf4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1rem',
          border: '1.5px solid #86efac'
        }}>
          <Award size={30} color="#15803d" />
        </div>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#15803d', marginBottom: '0.5rem' }}>
          Level Quiz Mastered! (12/12 in a row)
        </h2>
        <p style={{ color: '#44403c', fontSize: '0.9rem', maxWidth: '440px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
          You have successfully answered all 12 substantive questions in a row without error for <strong>{segmentTitle}</strong>.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          <button
            onClick={handleRestartQuiz}
            style={{
              padding: '0.65rem 1.25rem',
              backgroundColor: '#ffffff',
              color: '#78350f',
              border: '1.5px solid #e7e2d7',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <RotateCcw size={15} />
            <span>Retake Quiz for Practice</span>
          </button>
          <button
            onClick={onProceedToFlashcards}
            style={{
              padding: '0.65rem 1.5rem',
              backgroundColor: '#15803d',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 800,
              fontSize: '0.85rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              boxShadow: '0 2px 6px rgba(21, 128, 61, 0.25)'
            }}
          >
            <span>Proceed to Phase 3: Flashcards</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    );
  }

  const difficultyColors = {
    easy: { bg: '#f0fdf4', text: '#15803d', border: '#bbf7d0', label: 'Elemental' },
    intermediate: { bg: '#fffbeb', text: '#b45309', border: '#fde68a', label: 'Conceptual' },
    hard: { bg: '#fef2f2', text: '#b91c1c', border: '#fecaca', label: 'Advanced' }
  };

  const diffStyle = difficultyColors[currentQ.difficulty] || difficultyColors.easy;

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e7e2d7',
      padding: '1.75rem 1.5rem',
      boxShadow: '0 2px 6px rgba(120, 53, 15, 0.03)'
    }}>
      {/* Top Status & Question Progress */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: '1rem',
        paddingBottom: '0.85rem',
        borderBottom: '1px solid #f2ede4'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{
            fontSize: '0.85rem',
            fontWeight: 800,
            color: '#78350f',
            textTransform: 'uppercase',
            letterSpacing: '0.04em'
          }}>
            Question {currentIndex + 1} of {questions.length}
          </span>
          <span style={{
            padding: '0.2rem 0.55rem',
            borderRadius: '999px',
            fontSize: '0.7rem',
            fontWeight: 700,
            backgroundColor: diffStyle.bg,
            color: diffStyle.text,
            border: `1px solid ${diffStyle.border}`
          }}>
            {diffStyle.label}
          </span>
        </div>

        {/* Quick Scratchpad Button */}
        {onOpenScratchpad && (
          <button
            onClick={onOpenScratchpad}
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
        )}
      </div>

      {/* Progress Bar (12 Steps) */}
      <div style={{
        display: 'flex',
        gap: '0.3rem',
        marginBottom: '1.5rem'
      }}>
        {questions.map((_, qIdx) => (
          <div
            key={`prog-step-${qIdx}`}
            style={{
              flex: 1,
              height: '5px',
              borderRadius: '3px',
              backgroundColor: qIdx < currentIndex
                ? '#15803d'
                : qIdx === currentIndex
                ? '#d97706'
                : '#f2ede4',
              transition: 'all 0.2s ease'
            }}
          />
        ))}
      </div>

      {/* Question Prompt */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{
          fontSize: '1.05rem',
          fontWeight: 700,
          color: '#451a03',
          lineHeight: 1.6
        }}>
          {renderInlineMath(currentQ.question)}
        </h3>
      </div>

      {/* 6 Choices */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
        {currentQ.options.map((opt) => {
          const isSelected = selectedOption === opt.id;
          const isCorrectChoice = opt.id === currentQ.correct_option;
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
            // Instant selection feedback
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
                  width: '62px',
                  boxSizing: 'border-box',
                  marginTop: '0.05rem',
                  padding: '0.22rem 0',
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
                  textAlign: 'center',
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

      {/* Failure Screen: Only appears on Wrong Answers! Explains what is wrong and restarts */}
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
              Incorrect Answer • Quiz Resets to Question 1
            </span>
          </div>
          <p style={{ fontSize: '0.84rem', color: '#7f1d1d', margin: '0 0 0.75rem', lineHeight: 1.55 }}>
            You selected <strong>Option {failedOption?.toUpperCase()}</strong>. Correct answer is <strong>Option {currentQ.correct_option.toUpperCase()}</strong>.
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
            {renderInlineMath(currentQ.explanation)}
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={handleRestartQuiz}
              style={{
                padding: '0.65rem 1.5rem',
                backgroundColor: '#dc2626',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 800,
                fontSize: '0.85rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                boxShadow: '0 2px 6px rgba(220, 38, 38, 0.2)'
              }}
            >
              <RotateCcw size={15} />
              <span>Restart Quiz from Question 1</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
