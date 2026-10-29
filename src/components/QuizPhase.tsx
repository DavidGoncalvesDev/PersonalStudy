import React, { useState } from 'react';
import { Question } from '../types';
import confetti from 'canvas-confetti';
import { CheckCircle2, XCircle, AlertTriangle, ArrowRight, RotateCcw, Award } from 'lucide-react';

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
  // State for user answers: map of questionId -> selectedOptionId
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  // Submitted state
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  // Current view score
  const [score, setScore] = useState<number>(0);

  const handleOptionSelect = (qId: string, optionId: string) => {
    if (isSubmitted) return; // Prevent changing after submission
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
    // Strict mastery rule: Reset ENTIRE test
    setSelectedAnswers({});
    setIsSubmitted(false);
    setScore(0);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const isPassed = isSubmitted && score === 12;

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
              Phase 2 of 3: Comprehensive Mastery Quiz
            </span>
            {isAlreadyPassed && (
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#059669', backgroundColor: '#dcfce7', padding: '0.1rem 0.5rem', borderRadius: '9999px' }}>
                Passed (12/12)
              </span>
            )}
          </div>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a' }}>
            {segmentTitle} - 12 Questions
          </h2>
          <p style={{ fontSize: '0.825rem', color: '#64748b' }}>
            Requirements: Exactly 12 substantive questions (4 Easy, 4 Intermediate, 4 Hard). <strong>100% (12/12) is required to unlock Flashcards.</strong> If you miss any question, you must retake the entire test.
          </p>
        </div>

        {/* Answer counter */}
        <div style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
          fontSize: '0.85rem',
          fontWeight: 700,
          color: '#334155'
        }}>
          Answered: {Object.keys(selectedAnswers).length} / {questions.length}
        </div>
      </div>

      {/* Submission Result Banner */}
      {isSubmitted && (
        <div style={{
          padding: '1.25rem',
          borderRadius: '10px',
          marginBottom: '2rem',
          backgroundColor: isPassed ? '#ecfdf5' : '#fef2f2',
          border: isPassed ? '2px solid #10b981' : '2px solid #ef4444',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            {isPassed ? (
              <Award size={36} color="#059669" />
            ) : (
              <AlertTriangle size={36} color="#dc2626" />
            )}
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: isPassed ? '#065f46' : '#991b1b' }}>
                {isPassed
                  ? 'Perfect Mastery! 12 / 12 Correct'
                  : `Mastery Incomplete: Scored ${score} / 12`}
              </h3>
              <p style={{ fontSize: '0.85rem', color: isPassed ? '#047857' : '#b91c1c' }}>
                {isPassed
                  ? 'Congratulations! You have demonstrated 100% mastery of this level and unlocked Phase 3: Flashcards.'
                  : 'System Rule: You must achieve 12/12 to pass. You cannot move forward until all 12 are answered correctly. Review the explanations below, then restart the full test.'}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            {!isPassed && (
              <button
                onClick={handleRetakeWholeTest}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1.25rem',
                  backgroundColor: '#ef4444',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer'
                }}
              >
                <RotateCcw size={16} />
                <span>Restart Whole Test</span>
              </button>
            )}

            {isPassed && (
              <button
                onClick={onProceedToFlashcards}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1.4rem',
                  backgroundColor: '#10b981',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 10px rgba(16, 185, 129, 0.25)'
                }}
              >
                <span>Proceed to Flashcards</span>
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      )}

      {/* 12 Questions List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {questions.map((q, qIdx) => {
          const selected = selectedAnswers[q.id];
          const isCorrect = isSubmitted && selected === q.correct_option;
          const isWrong = isSubmitted && selected && selected !== q.correct_option;

          // Difficulty badge style
          const diffBadge = {
            easy: { text: 'Elemental (Basics)', bg: '#f0fdf4', color: '#166534', border: '#bbf7d0' },
            intermediate: { text: 'Intermediate (Concepts)', bg: '#eff6ff', color: '#1e40af', border: '#bfdbfe' },
            hard: { text: 'Hard (Calculation & Application)', bg: '#fef2f2', color: '#991b1b', border: '#fecaca' }
          }[q.difficulty];

          return (
            <div
              key={q.id}
              style={{
                padding: '1.5rem',
                borderRadius: '10px',
                border: isSubmitted
                  ? isCorrect
                    ? '1.5px solid #10b981'
                    : '1.5px solid #ef4444'
                  : '1px solid #e2e8f0',
                backgroundColor: isSubmitted
                  ? isCorrect
                    ? '#f0fdf4'
                    : '#fff5f5'
                  : '#ffffff',
                boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
              }}
            >
              {/* Question Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#4f46e5' }}>
                  Question {qIdx + 1} of 12
                </span>
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.55rem',
                  borderRadius: '9999px',
                  backgroundColor: diffBadge.bg,
                  color: diffBadge.color,
                  border: `1px solid ${diffBadge.border}`
                }}>
                  {diffBadge.text}
                </span>
              </div>

              {/* Question Text */}
              <h4 style={{
                fontSize: '1rem',
                fontWeight: 700,
                color: '#0f172a',
                lineHeight: 1.5,
                marginBottom: '1.25rem'
              }}>
                {q.question}
              </h4>

              {/* 6 Choices */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {q.options.map((opt) => {
                  const isOptSelected = selected === opt.id;
                  const isOptCorrect = isSubmitted && opt.id === q.correct_option;
                  const isOptWrongSelected = isSubmitted && isOptSelected && !isOptCorrect;

                  let optBg = '#f8fafc';
                  let optBorder = '#e2e8f0';
                  let optText = '#334155';

                  if (isOptSelected && !isSubmitted) {
                    optBg = '#eef2ff';
                    optBorder = '#6366f1';
                    optText = '#312e81';
                  } else if (isSubmitted) {
                    if (isOptCorrect) {
                      optBg = '#dcfce7';
                      optBorder = '#10b981';
                      optText = '#065f46';
                    } else if (isOptWrongSelected) {
                      optBg = '#fee2e2';
                      optBorder = '#ef4444';
                      optText = '#991b1b';
                    }
                  }

                  return (
                    <div
                      key={opt.id}
                      onClick={() => handleOptionSelect(q.id, opt.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        border: `1.5px solid ${optBorder}`,
                        backgroundColor: optBg,
                        color: optText,
                        cursor: isSubmitted ? 'default' : 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <div style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '6px',
                        border: isOptSelected || isOptCorrect ? 'none' : '1.5px solid #cbd5e1',
                        backgroundColor: isOptCorrect
                          ? '#10b981'
                          : isOptWrongSelected
                          ? '#ef4444'
                          : isOptSelected
                          ? '#4f46e5'
                          : '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isOptSelected || isOptCorrect || isOptWrongSelected ? '#ffffff' : '#64748b',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        flexShrink: 0,
                        marginTop: '0.1rem'
                      }}>
                        {opt.id.toUpperCase()}
                      </div>
                      <span style={{ fontSize: '0.9rem', lineHeight: 1.45, fontWeight: isOptSelected ? 600 : 400 }}>
                        {opt.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Explanation (Shown when submitted) */}
              {isSubmitted && (
                <div style={{
                  marginTop: '1rem',
                  padding: '0.85rem 1rem',
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  border: isCorrect ? '1px solid #86efac' : '1px solid #fca5a5',
                  fontSize: '0.85rem',
                  color: '#334155',
                  lineHeight: 1.5
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, marginBottom: '0.35rem', color: isCorrect ? '#059669' : '#dc2626' }}>
                    {isCorrect ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
                    <span>{isCorrect ? 'Correct Explanation:' : 'Review Concept & Correct Answer:'}</span>
                  </div>
                  <p>{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Submit Bar */}
      <div style={{
        marginTop: '2.5rem',
        paddingTop: '1.5rem',
        borderTop: '1px solid #e2e8f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        {!isSubmitted ? (
          <>
            <span style={{ fontSize: '0.85rem', color: allAnswered ? '#059669' : '#64748b', fontWeight: 600 }}>
              {allAnswered
                ? 'All 12 questions answered! Ready to verify mastery.'
                : `Please answer all 12 questions (${12 - Object.keys(selectedAnswers).length} remaining).`}
            </span>
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              style={{
                padding: '0.75rem 1.8rem',
                backgroundColor: allAnswered ? '#4f46e5' : '#cbd5e1',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.95rem',
                fontWeight: 700,
                cursor: allAnswered ? 'pointer' : 'not-allowed',
                boxShadow: allAnswered ? '0 4px 10px rgba(79, 70, 229, 0.25)' : 'none'
              }}
            >
              Submit Quiz & Verify 12/12
            </button>
          </>
        ) : !isPassed ? (
          <>
            <span style={{ fontSize: '0.85rem', color: '#dc2626', fontWeight: 700 }}>
              Score: {score} / 12. Retake required to advance.
            </span>
            <button
              onClick={handleRetakeWholeTest}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.6rem',
                backgroundColor: '#ef4444',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.95rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              <RotateCcw size={16} />
              <span>Retake Entire Quiz (12 Questions)</span>
            </button>
          </>
        ) : (
          <>
            <span style={{ fontSize: '0.85rem', color: '#059669', fontWeight: 700 }}>
              ✓ Perfect Score (12/12)! Level Quiz Passed.
            </span>
            <button
              onClick={onProceedToFlashcards}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.8rem',
                backgroundColor: '#10b981',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.95rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 10px rgba(16, 185, 129, 0.25)'
              }}
            >
              <span>Continue to Flashcards</span>
              <ArrowRight size={18} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
