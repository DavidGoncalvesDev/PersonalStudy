import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import confetti from 'canvas-confetti';
import { Award, Edit3, ShieldAlert, RotateCcw, ArrowRight, BookOpen, Check, X, Lightbulb, Bookmark, Copy } from 'lucide-react';
import { renderInlineMath, MathRenderer } from './MathRenderer';
import { playCorrectSound, playWrongSound, playSuccessChime, playClickSound } from '../utils/soundEffects';

interface QuizPhaseProps {
  questions: Question[];
  segmentTitle: string;
  isAlreadyPassed: boolean;
  onPassQuiz: (score: number) => void;
  onProceedToFlashcards: () => void;
  onOpenScratchpad?: (question?: Question) => void;
  onGoToText?: (anchor?: string, qNum?: number) => void;
}

export const QuizPhase: React.FC<QuizPhaseProps> = ({
  questions,
  segmentTitle,
  isAlreadyPassed,
  onPassQuiz,
  onProceedToFlashcards,
  onOpenScratchpad,
  onGoToText
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isFailed, setIsFailed] = useState<boolean>(false);
  const [failedOption, setFailedOption] = useState<string | null>(null);
  const [isAllCompleted, setIsAllCompleted] = useState<boolean>(false);
  // "What am I inclined" helper state (No -> Maybe -> Yes -> unselected)
  const [inclinations, setInclinations] = useState<Record<string, 'no' | 'maybe' | 'yes'>>({});
  const [copiedQuiz, setCopiedQuiz] = useState<boolean>(false);

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

  const handleCopyQuizExercise = () => {
    const currentQuestion = questions[currentIndex];
    if (!currentQuestion) return;
    playClickSound();

    const metaParts = [];
    if (segmentTitle) {
      metaParts.push(segmentTitle);
    }
    metaParts.push(`Question ${currentIndex + 1} of ${questions.length}`);
    if (currentQuestion.section_reference) {
      metaParts.push(`Curriculum Point: ${currentQuestion.section_reference}`);
    }
    if (currentQuestion.difficulty) {
      metaParts.push(`Difficulty: ${currentQuestion.difficulty}`);
    }

    const optionsList = currentQuestion.options
      .map(opt => `- [${opt.id.toUpperCase()}] ${opt.text}`)
      .join('\n');

    let textToCopy = `### Multivariate Data Analysis Quiz Question\n`;
    if (metaParts.length > 0) {
      textToCopy += `*${metaParts.join(' | ')}*\n\n`;
    }
    textToCopy += `**Question:**\n${currentQuestion.question}\n\n`;
    textToCopy += `**Choices:**\n${optionsList}\n\n`;

    if (isFailed) {
      const correctOpt = currentQuestion.options.find(o => o.id === currentQuestion.correct_option);
      textToCopy += `---\n**Official Solution:**\n`;
      textToCopy += `**Correct Answer:** [${currentQuestion.correct_option.toUpperCase()}] ${correctOpt ? correctOpt.text : ''}\n\n`;
      if (currentQuestion.explanation) {
        textToCopy += `**Theoretical Derivation & Breakdown:**\n${currentQuestion.explanation}\n`;
      }
    } else {
      textToCopy += `Please solve this step by step, formulate the underlying mathematical derivation, determine the correct choice, and explain why the other options are incorrect.`;
    }

    navigator.clipboard.writeText(textToCopy);
    setCopiedQuiz(true);
    setTimeout(() => setCopiedQuiz(false), 2200);
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
  const failedOptObj = currentQ.options.find(o => o.id === failedOption);
  const correctOptObj = currentQ.options.find(o => o.id === currentQ.correct_option);

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e7e2d7',
      padding: 'clamp(1rem, 3vw, 1.75rem) clamp(0.75rem, 2.5vw, 1.5rem)',
      boxShadow: '0 2px 6px rgba(120, 53, 15, 0.03)'
    }}>
      {/* Top Status & Question Progress */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.45rem',
        marginBottom: '0.85rem',
        paddingBottom: '0.75rem',
        borderBottom: '1px solid #f2ede4'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{
            fontSize: '0.82rem',
            fontWeight: 800,
            color: '#78350f',
            textTransform: 'uppercase',
            letterSpacing: '0.04em'
          }}>
            Question {currentIndex + 1} of {questions.length}
          </span>
          <span style={{
            padding: '0.18rem 0.5rem',
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

        {/* Quick Actions: Review in Text Guide (without quiz reset) + Copy for AI + Scratchpad */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap' }}>
          <button
            onClick={handleCopyQuizExercise}
            title="Copy formatted exercise for AI prompt"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              padding: '0.32rem 0.55rem',
              borderRadius: '6px',
              backgroundColor: copiedQuiz ? '#dcfce7' : '#fffdfa',
              border: copiedQuiz ? '1px solid #86efac' : '1px solid #d6cebf',
              color: copiedQuiz ? '#15803d' : '#78350f',
              fontWeight: 700,
              fontSize: '0.74rem',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            {copiedQuiz ? <Check size={12} strokeWidth={3} /> : <Copy size={12} />}
            <span className="desktop-only">{copiedQuiz ? 'Copied for AI!' : 'Copy for AI'}</span>
            <span className="mobile-only">{copiedQuiz ? 'Copied!' : 'AI'}</span>
          </button>

          {onGoToText && (
            <button
              onClick={() => {
                playClickSound();
                onGoToText(currentQ.section_anchor || currentQ.section_reference, currentIndex + 1);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.32rem 0.55rem',
                borderRadius: '6px',
                backgroundColor: '#fffdfa',
                border: '1px solid #d6cebf',
                color: '#78350f',
                fontWeight: 700,
                fontSize: '0.74rem',
                cursor: 'pointer'
              }}
              aria-label="Reference Text Guide without resetting quiz"
            >
              <BookOpen size={12} color="#78350f" />
              <span className="desktop-only">Reference Text Guide</span>
              <span className="mobile-only">Text Guide</span>
            </button>
          )}

          {onOpenScratchpad && (
            <button
              onClick={() => {
                playClickSound();
                onOpenScratchpad(currentQ);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.32rem 0.55rem',
                borderRadius: '6px',
                backgroundColor: '#fdfbf7',
                border: '1px solid #e7e2d7',
                color: '#78350f',
                fontWeight: 700,
                fontSize: '0.74rem',
                cursor: 'pointer'
              }}
            >
              <Edit3 size={12} color="#78350f" />
              <span className="desktop-only">Scratchpad / Calculations</span>
              <span className="mobile-only">Notes</span>
            </button>
          )}
        </div>
      </div>

      {/* Progress Bar (12 Steps) */}
      <div style={{
        display: 'flex',
        gap: '0.3rem',
        marginBottom: '1.25rem'
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

      {/* Curriculum Point Anchor if available */}
      {currentQ.section_reference && (
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
          padding: '0.22rem 0.6rem',
          borderRadius: '6px',
          backgroundColor: '#fffbeb',
          border: '1px solid #fde68a',
          color: '#92400e',
          fontSize: '0.74rem',
          fontWeight: 700,
          marginBottom: '0.85rem'
        }}>
          <Bookmark size={12} color="#b45309" />
          <span>Curriculum Point: {currentQ.section_reference}</span>
        </div>
      )}

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
                gap: '0.65rem',
                padding: 'clamp(0.6rem, 2vw, 0.75rem) clamp(0.65rem, 2.5vw, 1rem)',
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
                fontSize: '0.74rem',
                fontWeight: 800,
                backgroundColor: badgeBg,
                color: badgeColor,
                marginTop: '0.1rem'
              }}>
                {opt.id.toUpperCase()}
              </span>
              <span style={{
                flex: 1,
                fontSize: '0.9rem',
                fontWeight: isSelected ? 700 : 500,
                color: textColor,
                lineHeight: 1.5,
                paddingRight: '0.35rem',
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
                  width: '54px',
                  boxSizing: 'border-box',
                  marginTop: '0.05rem',
                  padding: '0.2rem 0',
                  borderRadius: '999px',
                  fontSize: '0.68rem',
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

      {/* Comprehensive Fundamental Failure Card: Appears only on Wrong Answers */}
      {isFailed && (
        <div style={{
          marginTop: '1.75rem',
          backgroundColor: '#ffffff',
          border: '2px solid #ef4444',
          borderRadius: '14px',
          boxShadow: '0 10px 25px rgba(239, 68, 68, 0.08), 0 2px 8px rgba(120, 53, 15, 0.04)',
          overflow: 'hidden',
          animation: 'fadeIn 0.25s ease'
        }}>
          {/* Top Alert Header */}
          <div style={{
            backgroundColor: '#fef2f2',
            borderBottom: '1.5px solid #fecaca',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: '#fee2e2',
                border: '1.5px solid #fca5a5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <ShieldAlert size={20} color="#dc2626" />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#991b1b' }}>
                  Incorrect Answer • Fundamental Concept Breakdown
                </h4>
                <span style={{ fontSize: '0.8rem', color: '#b91c1c', fontWeight: 600 }}>
                  Quiz resets to Question 1 (0/12) — study the theoretical derivation below before retrying
                </span>
              </div>
            </div>

            {/* Direct Link to section in text guide without losing quiz state */}
            {onGoToText && (
              <button
                onClick={() => {
                  playClickSound();
                  onGoToText(currentQ.section_anchor || currentQ.section_reference, currentIndex + 1);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.4rem 0.75rem',
                  borderRadius: '6px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #fca5a5',
                  color: '#991b1b',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  cursor: 'pointer'
                }}
              >
                <BookOpen size={13} />
                <span>Review in Text Guide</span>
              </button>
            )}
          </div>

          <div style={{ padding: '1.5rem 1.5rem' }}>
            {/* Visual Choice Comparison */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1rem',
              marginBottom: '1.5rem'
            }}>
              {/* What You Selected (Red) */}
              <div style={{
                backgroundColor: '#fff5f5',
                border: '1.5px solid #fecaca',
                borderRadius: '10px',
                padding: '1rem 1.15rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginBottom: '0.45rem',
                  color: '#dc2626',
                  fontWeight: 800,
                  fontSize: '0.82rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em'
                }}>
                  <X size={15} />
                  <span>You Selected: Option {failedOption?.toUpperCase()}</span>
                </div>
                <div style={{ fontSize: '0.92rem', color: '#7f1d1d', lineHeight: 1.55 }}>
                  {failedOptObj ? renderInlineMath(failedOptObj.text) : 'None'}
                </div>
              </div>

              {/* Correct Answer (Green) */}
              <div style={{
                backgroundColor: '#f0fdf4',
                border: '1.5px solid #bbf7d0',
                borderRadius: '10px',
                padding: '1rem 1.15rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginBottom: '0.45rem',
                  color: '#15803d',
                  fontWeight: 800,
                  fontSize: '0.82rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em'
                }}>
                  <Check size={15} />
                  <span>Correct Answer: Option {currentQ.correct_option.toUpperCase()}</span>
                </div>
                <div style={{ fontSize: '0.92rem', color: '#14532d', lineHeight: 1.55, fontWeight: 600 }}>
                  {correctOptObj ? renderInlineMath(correctOptObj.text) : ''}
                </div>
              </div>
            </div>

            {/* Deep Fundamental Theory Breakdown Card */}
            <div style={{
              backgroundColor: '#fffdfa',
              border: '1.5px solid #e7e2d7',
              borderRadius: '12px',
              padding: '1.5rem',
              marginBottom: '1.5rem',
              boxShadow: '0 2px 8px rgba(120, 53, 15, 0.03)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1rem',
                borderBottom: '1.5px solid #f2ede4',
                paddingBottom: '0.65rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Lightbulb size={18} color="#b45309" />
                  <h5 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#78350f' }}>
                    Fundamental Concept & Theory Breakdown
                  </h5>
                </div>

                {currentQ.section_reference && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '6px',
                    backgroundColor: '#fef3c7',
                    border: '1px solid #fde68a',
                    color: '#92400e',
                    fontSize: '0.74rem',
                    fontWeight: 700
                  }}>
                    <Bookmark size={12} color="#b45309" />
                    <span>Section Anchor: {currentQ.section_reference}</span>
                  </div>
                )}
              </div>

              <div style={{
                fontSize: '0.98rem',
                color: '#292524',
                lineHeight: 1.75
              }}>
                <MathRenderer content={currentQ.explanation} />
              </div>
            </div>

            {/* Action Buttons: Copy Solution for AI + Restart Quiz */}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={handleCopyQuizExercise}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.65rem 1rem',
                  backgroundColor: copiedQuiz ? '#dcfce7' : '#ffffff',
                  color: copiedQuiz ? '#15803d' : '#78350f',
                  border: copiedQuiz ? '1px solid #86efac' : '1px solid #d6cebf',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  cursor: 'pointer'
                }}
              >
                {copiedQuiz ? <Check size={14} strokeWidth={3} /> : <Copy size={14} />}
                <span>{copiedQuiz ? 'Copied Full Solution!' : 'Copy Question & Solution for AI'}</span>
              </button>

              <button
                onClick={handleRestartQuiz}
                style={{
                  padding: '0.85rem 1.85rem',
                  backgroundColor: '#78350f',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 12px rgba(120, 53, 15, 0.25)',
                  transition: 'all 0.15s ease'
                }}
              >
                <RotateCcw size={16} />
                <span>Understood • Restart Quiz from Question 1</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
