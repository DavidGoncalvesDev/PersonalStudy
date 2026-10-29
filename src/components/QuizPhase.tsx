import React, { useState } from 'react';
import { Question } from '../types';
import confetti from 'canvas-confetti';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Award } from 'lucide-react';
import { renderInlineMath } from './MathRenderer';

interface QuizPhaseProps {
  questions: Question[];
  segmentTitle: string;
  isAlreadyPassed: boolean;
  onPassQuiz: (score: number) => void;
  onProceedToFlashcards: () => void;
}

export const QuizPhase: React.FC<QuizPhaseProps> = ({
  questions,
  segmentTitle,
  isAlreadyPassed,
  onPassQuiz,
  onProceedToFlashcards
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const handleOptionSelect = (qId: string, optionId: string) => {
    if (isSubmitted) return;
    setSelectedAnswers(prev => ({
      ...prev,
      [qId]: optionId
    }));
  };

  const allAnswered = questions.length > 0 && questions.every(q => selectedAnswers[q.id]);

  const handleSubmit = () => {
    let correctCount = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correct_option) {
        correctCount++;
      }
    });

    setScore(correctCount);
    setIsSubmitted(true);

    if (correctCount === 12) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      onPassQuiz(12);
    }
  };

  const handleRetakeWholeTest = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setScore(0);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const isPassed = isSubmitted && score === 12;

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e7e2d7',
      padding: '1.75rem 1.5rem',
      boxShadow: '0 1px 3px rgba(120, 53, 15, 0.02)'
    }}>
      {/* Header Info */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem',
        paddingBottom: '1rem',
        marginBottom: '1.5rem',
        borderBottom: '1px solid #f2eee6'
      }}>
        <div>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#b45309', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Level Quiz (12 Questions • 100% Required)
          </span>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#451a03', marginTop: '0.15rem' }}>
            {segmentTitle}
          </h2>
        </div>

        <div style={{
          padding: '0.35rem 0.75rem',
          backgroundColor: '#fffbeb',
          border: '1px solid #e7e2d7',
          borderRadius: '6px',
          fontSize: '0.8rem',
          fontWeight: 700,
          color: '#78350f'
        }}>
          {Object.keys(selectedAnswers).length} / {questions.length} answered
        </div>
      </div>

      {/* Result Card if Submitted */}
      {isSubmitted && (
        <div style={{
          padding: '1.25rem',
          borderRadius: '10px',
          marginBottom: '1.75rem',
          backgroundColor: isPassed ? '#f0fdf4' : '#fef2f2',
          border: isPassed ? '1.5px solid #16a34a' : '1.5px solid #dc2626',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {isPassed ? (
              <Award size={30} color="#15803d" />
            ) : (
              <XCircle size={30} color="#dc2626" />
            )}
            <div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: isPassed ? '#166534' : '#991b1b' }}>
                {isPassed ? 'Perfect 12 / 12! Level Mastered' : `Score: ${score} / 12 (12/12 required)`}
              </div>
              <p style={{ fontSize: '0.825rem', color: isPassed ? '#15803d' : '#b91c1c' }}>
                {isPassed
                  ? 'All 12 questions correct! You may now proceed to Flashcards.'
                  : 'Mastery rule: You must score 12/12 to pass. Redo the whole quiz below.'}
              </p>
            </div>
          </div>

          <div>
            {!isPassed ? (
              <button
                onClick={handleRetakeWholeTest}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.55rem 1rem',
                  backgroundColor: '#dc2626',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                <RotateCcw size={14} />
                <span>Restart Quiz</span>
              </button>
            ) : (
              <button
                onClick={onProceedToFlashcards}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.55rem 1.1rem',
                  backgroundColor: '#15803d',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                <span>Go to Flashcards</span>
                <ArrowRight size={15} />
              </button>
            )}
          </div>
        </div>
      )}

      {/* 12 Question Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {questions.map((q, qIdx) => {
          const selected = selectedAnswers[q.id];
          const isCorrect = isSubmitted && selected === q.correct_option;

          const diffBadge = {
            easy: { text: 'Basics', color: '#166534', bg: '#f0fdf4' },
            intermediate: { text: 'Concepts', color: '#92400e', bg: '#fef3c7' },
            hard: { text: 'Calculations', color: '#991b1b', bg: '#fef2f2' }
          }[q.difficulty];

          return (
            <div
              key={q.id}
              style={{
                padding: '1.25rem',
                borderRadius: '8px',
                border: isSubmitted
                  ? isCorrect
                    ? '1.5px solid #16a34a'
                    : '1.5px solid #dc2626'
                  : '1px solid #e7e2d7',
                backgroundColor: isSubmitted
                  ? isCorrect
                    ? '#fcfdfd'
                    : '#fffdfd'
                  : '#ffffff'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.65rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#78350f' }}>
                  Q{qIdx + 1} of 12
                </span>
                <span style={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  padding: '0.15rem 0.45rem',
                  borderRadius: '4px',
                  backgroundColor: diffBadge.bg,
                  color: diffBadge.color
                }}>
                  {diffBadge.text}
                </span>
              </div>

              <h3 style={{
                fontSize: '0.95rem',
                fontWeight: 700,
                color: '#292524',
                lineHeight: 1.5,
                marginBottom: '1rem'
              }}>
                {renderInlineMath(q.question)}
              </h3>

              {/* 6 Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {q.options.map((opt) => {
                  const isOptSelected = selected === opt.id;
                  const isOptCorrect = isSubmitted && opt.id === q.correct_option;
                  const isOptWrongSelected = isSubmitted && isOptSelected && !isOptCorrect;

                  let optBg = '#fdfbf7';
                  let optBorder = '#e7e2d7';
                  let optColor = '#44403c';

                  if (isOptSelected && !isSubmitted) {
                    optBg = '#fffbeb';
                    optBorder = '#b45309';
                    optColor = '#451a03';
                  } else if (isSubmitted) {
                    if (isOptCorrect) {
                      optBg = '#dcfce7';
                      optBorder = '#16a34a';
                      optColor = '#14532d';
                    } else if (isOptWrongSelected) {
                      optBg = '#fee2e2';
                      optBorder = '#dc2626';
                      optColor = '#7f1d1d';
                    }
                  }

                  return (
                    <div
                      key={opt.id}
                      onClick={() => handleOptionSelect(q.id, opt.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        padding: '0.65rem 0.85rem',
                        borderRadius: '6px',
                        border: `1.5px solid ${optBorder}`,
                        backgroundColor: optBg,
                        color: optColor,
                        cursor: isSubmitted ? 'default' : 'pointer',
                        fontSize: '0.875rem',
                        lineHeight: 1.45
                      }}
                    >
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '4px',
                        border: isOptSelected || isOptCorrect ? 'none' : '1px solid #d6cebf',
                        backgroundColor: isOptCorrect
                          ? '#16a34a'
                          : isOptWrongSelected
                          ? '#dc2626'
                          : isOptSelected
                          ? '#78350f'
                          : '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isOptSelected || isOptCorrect || isOptWrongSelected ? '#ffffff' : '#78716c',
                        fontWeight: 700,
                        fontSize: '0.7rem',
                        flexShrink: 0,
                        marginTop: '0.1rem'
                      }}>
                        {opt.id.toUpperCase()}
                      </div>
                      <span style={{ fontWeight: isOptSelected ? 600 : 400 }}>
                        {renderInlineMath(opt.text)}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Explanation after submit */}
              {isSubmitted && (
                <div style={{
                  marginTop: '0.85rem',
                  padding: '0.75rem 0.9rem',
                  borderRadius: '6px',
                  backgroundColor: '#ffffff',
                  border: isCorrect ? '1px solid #bbf7d0' : '1px solid #fecaca',
                  fontSize: '0.825rem',
                  color: '#44403c',
                  lineHeight: 1.5
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontWeight: 700, marginBottom: '0.25rem', color: isCorrect ? '#15803d' : '#dc2626' }}>
                    {isCorrect ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                    <span>{isCorrect ? 'Explanation:' : 'Concept Review:'}</span>
                  </div>
                  <div>{renderInlineMath(q.explanation)}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Bar */}
      <div style={{
        marginTop: '2rem',
        paddingTop: '1rem',
        borderTop: '1px solid #e7e2d7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem'
      }}>
        {!isSubmitted ? (
          <>
            <span style={{ fontSize: '0.8rem', color: allAnswered ? '#15803d' : '#78716c', fontWeight: 600 }}>
              {allAnswered
                ? 'All 12 answered.'
                : `${12 - Object.keys(selectedAnswers).length} remaining.`}
            </span>
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              style={{
                padding: '0.65rem 1.5rem',
                backgroundColor: allAnswered ? '#78350f' : '#d6cebf',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: 700,
                cursor: allAnswered ? 'pointer' : 'not-allowed'
              }}
            >
              Submit & Verify 12/12
            </button>
          </>
        ) : !isPassed ? (
          <>
            <span style={{ fontSize: '0.85rem', color: '#dc2626', fontWeight: 700 }}>
              {score} / 12 correct. Retake required.
            </span>
            <button
              onClick={handleRetakeWholeTest}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.65rem 1.4rem',
                backgroundColor: '#dc2626',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              <RotateCcw size={15} />
              <span>Redo Whole Quiz</span>
            </button>
          </>
        ) : (
          <>
            <span style={{ fontSize: '0.85rem', color: '#15803d', fontWeight: 700 }}>
              ✓ Mastered! 12/12
            </span>
            <button
              onClick={onProceedToFlashcards}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.65rem 1.5rem',
                backgroundColor: '#15803d',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              <span>Continue to Flashcards</span>
              <ArrowRight size={16} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
