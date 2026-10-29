import React, { useState, useEffect, useRef } from 'react';
import { Question, Segment } from '../types';
import { renderInlineMath, MathRenderer } from './MathRenderer';
import {
  GraduationCap,
  Clock,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  Flag,
  Edit3,
  Copy,
  Check,
  ChevronRight,
  ChevronDown,
  Trophy,
  Award,
  Bookmark,
  ArrowRight,
  ShieldCheck,
  ShieldAlert
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { playCorrectSound, playWrongSound, playSuccessChime, playClickSound } from '../utils/soundEffects';

interface ExamSimulationProps {
  segments: Segment[];
  allQuestions: Question[];
  bestExamScore: number;
  lastExamScore: number;
  examAttempts: number;
  onCompleteExam: (scorePercent: number, correctCount: number, totalCount: number) => void;
  onOpenScratchpad: (activeQ?: Question) => void;
}

export const ExamSimulation: React.FC<ExamSimulationProps> = ({
  segments,
  allQuestions,
  bestExamScore,
  lastExamScore,
  examAttempts,
  onCompleteExam,
  onOpenScratchpad
}) => {
  // Exam Flow States: 'intro' | 'active' | 'results'
  const [examState, setExamState] = useState<'intro' | 'active' | 'results'>('intro');
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});
  const [inclinations, setInclinations] = useState<Record<string, 'no' | 'maybe' | 'yes'>>({});
  const [copiedQuestionId, setCopiedQuestionId] = useState<string | null>(null);

  // 50-Minute Countdown Timer (50 * 60 = 3000 seconds)
  const [timeRemaining, setTimeRemaining] = useState<number>(50 * 60);
  const [timeTakenSeconds, setTimeTakenSeconds] = useState<number>(0);
  const timerRef = useRef<number | null>(null);

  // Results State
  const [examResult, setExamResult] = useState<{
    correctCount: number;
    totalCount: number;
    percentage: number;
  } | null>(null);
  const [resultsFilter, setResultsFilter] = useState<'all' | 'incorrect' | 'correct'>('all');
  const [showSubmitConfirm, setShowSubmitConfirm] = useState<boolean>(false);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Timer Tick during active exam
  useEffect(() => {
    if (examState === 'active') {
      timerRef.current = window.setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            // Time expired! Auto-submit
            if (timerRef.current) clearInterval(timerRef.current);
            finishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [examState, examQuestions, userAnswers]);

  // Generate 25 questions sampled proportionally across all 8 segments
  const generateExamPaper = () => {
    if (allQuestions.length === 0) return;

    const questionsBySegment: Record<string, Question[]> = {};
    allQuestions.forEach((q) => {
      if (!questionsBySegment[q.segment_id]) {
        questionsBySegment[q.segment_id] = [];
      }
      questionsBySegment[q.segment_id].push(q);
    });

    const selected: Question[] = [];
    const segmentIds = segments.length > 0 ? segments.map((s) => s.id) : Object.keys(questionsBySegment);

    // Pick ~3 questions from each segment
    segmentIds.forEach((segId) => {
      const pool = questionsBySegment[segId] || [];
      const shuffled = [...pool].sort(() => 0.5 - Math.random());
      selected.push(...shuffled.slice(0, 3));
    });

    // Fill up to 25 if needed
    if (selected.length < 25) {
      const remainingPool = allQuestions.filter((q) => !selected.some((s) => s.id === q.id));
      const shuffled = [...remainingPool].sort(() => 0.5 - Math.random());
      selected.push(...shuffled.slice(0, 25 - selected.length));
    }

    // Shuffle the final 25-question exam paper
    const finalPaper = selected.slice(0, 25).sort(() => 0.5 - Math.random());
    setExamQuestions(finalPaper);
    setUserAnswers({});
    setFlaggedQuestions({});
    setInclinations({});
    setTimeRemaining(50 * 60);
    setTimeTakenSeconds(0);
    setExamResult(null);
  };

  const handleStartExam = () => {
    playClickSound();
    generateExamPaper();
    setExamState('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectOption = (questionId: string, optionId: string) => {
    playClickSound();
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionId
    }));
  };

  const handleToggleFlag = (questionId: string) => {
    playClickSound();
    setFlaggedQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const handleCycleInclination = (key: string) => {
    playClickSound();
    setInclinations((prev) => {
      const current = prev[key];
      if (!current) return { ...prev, [key]: 'no' };
      if (current === 'no') return { ...prev, [key]: 'maybe' };
      if (current === 'maybe') return { ...prev, [key]: 'yes' };
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const finishExam = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    const elapsed = 50 * 60 - timeRemaining;
    setTimeTakenSeconds(elapsed);

    let correct = 0;
    examQuestions.forEach((q) => {
      if (userAnswers[q.id] === q.correct_option) {
        correct += 1;
      }
    });

    const total = examQuestions.length || 25;
    const percentage = Math.round((correct / total) * 100);

    setExamResult({
      correctCount: correct,
      totalCount: total,
      percentage
    });

    onCompleteExam(percentage, correct, total);

    if (percentage >= 70) {
      playSuccessChime();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      playWrongSound();
    }

    setExamState('results');
    setShowSubmitConfirm(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyQuestionForAI = (q: Question, isReview: boolean = false) => {
    playClickSound();
    const seg = segments.find((s) => s.id === q.segment_id);
    const metaParts = [];
    if (seg) metaParts.push(`Level ${seg.order_index}: ${seg.title}`);
    if (q.section_reference) metaParts.push(`Curriculum Point: ${q.section_reference}`);
    if (q.difficulty) metaParts.push(`Difficulty: ${q.difficulty}`);

    const optionsList = q.options.map((opt) => `- [${opt.id.toUpperCase()}] ${opt.text}`).join('\n');

    let textToCopy = `### Multivariate Data Analysis Exam Question\n`;
    if (metaParts.length > 0) textToCopy += `*${metaParts.join(' | ')}*\n\n`;
    textToCopy += `**Question:**\n${q.question}\n\n`;
    textToCopy += `**Choices:**\n${optionsList}\n\n`;

    if (isReview) {
      const correctOpt = q.options.find((o) => o.id === q.correct_option);
      const userChoice = userAnswers[q.id];
      const userOpt = q.options.find((o) => o.id === userChoice);
      textToCopy += `---\n**Exam Solution:**\n`;
      textToCopy += `**Student's Selected Answer:** ${userChoice ? `[${userChoice.toUpperCase()}] ${userOpt?.text}` : 'Unanswered'}\n`;
      textToCopy += `**Correct Answer:** [${q.correct_option.toUpperCase()}] ${correctOpt ? correctOpt.text : ''}\n\n`;
      if (q.explanation) {
        textToCopy += `**Theoretical Derivation:**\n${q.explanation}\n`;
      }
    } else {
      textToCopy += `Please solve this step by step, explain the theoretical formulation, determine the correct choice, and explain why the other options are incorrect.`;
    }

    navigator.clipboard.writeText(textToCopy);
    setCopiedQuestionId(q.id);
    setTimeout(() => setCopiedQuestionId(null), 2200);
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const answeredCount = Object.keys(userAnswers).length;
  const unansweredCount = examQuestions.length - answeredCount;

  // -------------------------------------------------------------
  // VIEW 1: INTRO / PRE-EXAM SCREEN
  // -------------------------------------------------------------
  if (examState === 'intro') {
    return (
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        border: '1.5px solid #e7e2d7',
        padding: '2.5rem 1.75rem',
        boxShadow: '0 4px 14px rgba(120, 53, 15, 0.05)',
        textAlign: 'center',
        maxWidth: '720px',
        margin: '0 auto'
      }}>
        <div style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          backgroundColor: '#fffbeb',
          border: '2px solid #fde68a',
          margin: '0 auto 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <GraduationCap size={34} color="#78350f" />
        </div>

        <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#451a03', margin: '0 0 0.5rem' }}>
          50-Minute Comprehensive Exam
        </h2>
        <p style={{ fontSize: '0.92rem', color: '#78716c', margin: '0 auto 1.75rem', maxWidth: '520px', lineHeight: 1.6 }}>
          Full-length simulated university examination covering all 8 curriculum learning units (Measurement Scales, Distance Metrics, PCA, and Factor Analysis).
        </p>

        {/* Exam Parameter Highlights */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '0.85rem',
          marginBottom: '2rem',
          textAlign: 'left'
        }}>
          <div style={{
            padding: '1rem',
            backgroundColor: '#fdfbf7',
            border: '1px solid #e7e2d7',
            borderRadius: '10px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#78350f', marginBottom: '0.3rem' }}>
              <Clock size={16} />
              <span style={{ fontSize: '0.82rem', fontWeight: 800 }}>Time Limit</span>
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#451a03' }}>50 Minutes</div>
            <div style={{ fontSize: '0.72rem', color: '#78716c' }}>2 minutes per question</div>
          </div>

          <div style={{
            padding: '1rem',
            backgroundColor: '#fdfbf7',
            border: '1px solid #e7e2d7',
            borderRadius: '10px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#78350f', marginBottom: '0.3rem' }}>
              <Bookmark size={16} />
              <span style={{ fontSize: '0.82rem', fontWeight: 800 }}>Format</span>
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#451a03' }}>25 Questions</div>
            <div style={{ fontSize: '0.72rem', color: '#78716c' }}>All content in a row</div>
          </div>

          <div style={{
            padding: '1rem',
            backgroundColor: '#fdfbf7',
            border: '1px solid #e7e2d7',
            borderRadius: '10px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#78350f', marginBottom: '0.3rem' }}>
              <Trophy size={16} />
              <span style={{ fontSize: '0.82rem', fontWeight: 800 }}>Prep Score Weight</span>
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#b45309' }}>20 Points</div>
            <div style={{ fontSize: '0.72rem', color: '#78716c' }}>Directly boosts Prep Index</div>
          </div>
        </div>

        {/* Historical Stats on this Profile */}
        {examAttempts > 0 && (
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1.2rem',
            padding: '0.65rem 1.25rem',
            backgroundColor: '#fffbeb',
            border: '1px solid #fde68a',
            borderRadius: '999px',
            marginBottom: '2rem'
          }}>
            <div style={{ fontSize: '0.82rem', color: '#78350f' }}>
              Best Score: <strong style={{ color: '#b45309' }}>{bestExamScore}%</strong>
            </div>
            <div style={{ width: '1px', height: '14px', backgroundColor: '#fcd34d' }} />
            <div style={{ fontSize: '0.82rem', color: '#78350f' }}>
              Last Score: <strong>{lastExamScore}%</strong>
            </div>
            <div style={{ width: '1px', height: '14px', backgroundColor: '#fcd34d' }} />
            <div style={{ fontSize: '0.82rem', color: '#78350f' }}>
              Exams Completed: <strong>{examAttempts}</strong>
            </div>
          </div>
        )}

        {/* Start Button */}
        <div>
          <button
            onClick={handleStartExam}
            style={{
              padding: '0.9rem 2.5rem',
              backgroundColor: '#78350f',
              color: '#ffffff',
              border: 'none',
              borderRadius: '10px',
              fontWeight: 800,
              fontSize: '1rem',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(120, 53, 15, 0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              transition: 'transform 0.15s ease'
            }}
          >
            <span>Begin 50-Minute Exam Paper</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: ACTIVE EXAM IN PROGRESS
  // -------------------------------------------------------------
  if (examState === 'active') {
    const isUrgentTimer = timeRemaining <= 300; // Under 5 minutes

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
        {/* Sticky Exam Progress & Countdown Header */}
        <div style={{
          position: 'sticky',
          top: '64px',
          zIndex: 35,
          backgroundColor: '#ffffff',
          border: '1.5px solid #e7e2d7',
          borderRadius: '12px',
          padding: '0.75rem 1.15rem',
          boxShadow: '0 6px 20px rgba(120, 53, 15, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.65rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.5rem'
          }}>
            {/* Countdown Clock */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.35rem 0.8rem',
              borderRadius: '8px',
              backgroundColor: isUrgentTimer ? '#fef2f2' : '#fffbeb',
              border: isUrgentTimer ? '1.5px solid #fca5a5' : '1.5px solid #fde68a',
              color: isUrgentTimer ? '#b91c1c' : '#78350f',
              fontWeight: 800,
              fontSize: '1rem',
              fontVariantNumeric: 'tabular-nums'
            }}>
              <Clock size={16} color={isUrgentTimer ? '#b91c1c' : '#b45309'} />
              <span>{formatTimer(timeRemaining)}</span>
              {isUrgentTimer && <span style={{ fontSize: '0.72rem', fontWeight: 700 }}>(Time running low!)</span>}
            </div>

            {/* Answered Counter */}
            <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#57534e' }}>
              Answered: <strong style={{ color: '#78350f' }}>{answeredCount}</strong> of {examQuestions.length}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <button
                onClick={() => onOpenScratchpad()}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  padding: '0.35rem 0.65rem',
                  borderRadius: '6px',
                  backgroundColor: '#fdfbf7',
                  border: '1px solid #d6cebf',
                  color: '#78350f',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <Edit3 size={13} color="#78350f" />
                <span>Scratchpad / Notes</span>
              </button>

              <button
                onClick={() => setShowSubmitConfirm(true)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.4rem 0.95rem',
                  borderRadius: '6px',
                  backgroundColor: '#15803d',
                  color: '#ffffff',
                  border: 'none',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(21, 128, 61, 0.25)'
                }}
              >
                <span>Finish & Submit</span>
                <Check size={14} strokeWidth={3} />
              </button>
            </div>
          </div>

          {/* Quick Jump Navigator Grid (1..25) */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.3rem',
            alignItems: 'center',
            paddingTop: '0.4rem',
            borderTop: '1px solid #f2ede4'
          }}>
            <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#a8a29e', textTransform: 'uppercase', marginRight: '0.2rem' }}>
              Jump:
            </span>
            {examQuestions.map((q, idx) => {
              const isAnswered = Boolean(userAnswers[q.id]);
              const isFlagged = Boolean(flaggedQuestions[q.id]);

              let bg = '#f5f5f4';
              let text = '#78716c';
              let border = '1px solid #e7e5e4';

              if (isAnswered) {
                bg = '#fef3c7';
                text = '#78350f';
                border = '1.5px solid #d97706';
              }
              if (isFlagged) {
                border = '1.5px solid #ef4444';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    const el = document.getElementById(`exam-q-${idx}`);
                    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  title={`Question ${idx + 1}${isFlagged ? ' (Flagged)' : ''}${isAnswered ? ' (Answered)' : ''}`}
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '5px',
                    backgroundColor: bg,
                    color: text,
                    border,
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}
                >
                  {idx + 1}
                  {isFlagged && (
                    <div style={{
                      position: 'absolute',
                      top: '-2px',
                      right: '-2px',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#ef4444'
                    }} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Questions Rendered in a Row (Continuous Exam Paper) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {examQuestions.map((q, idx) => {
            const chosenOpt = userAnswers[q.id];
            const isFlagged = Boolean(flaggedQuestions[q.id]);
            const seg = segments.find((s) => s.id === q.segment_id);

            return (
              <div
                key={q.id}
                id={`exam-q-${idx}`}
                style={{
                  backgroundColor: '#ffffff',
                  border: isFlagged ? '2px solid #fca5a5' : '1px solid #e7e2d7',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  boxShadow: '0 2px 6px rgba(120, 53, 15, 0.03)',
                  scrollMarginTop: '160px'
                }}
              >
                {/* Question Header Meta */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '0.85rem',
                  paddingBottom: '0.65rem',
                  borderBottom: '1px solid #f2ede4'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#78350f' }}>
                      Question {idx + 1} of {examQuestions.length}
                    </span>
                    {seg && (
                      <span style={{ fontSize: '0.74rem', fontWeight: 700, color: '#a8a29e' }}>
                        • Level {seg.order_index}: {seg.title}
                      </span>
                    )}
                    {q.section_reference && (
                      <span style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        backgroundColor: '#fffbeb',
                        color: '#92400e',
                        padding: '0.12rem 0.45rem',
                        borderRadius: '4px',
                        border: '1px solid #fde68a'
                      }}>
                        {q.section_reference}
                      </span>
                    )}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    {/* Copy for AI Button */}
                    <button
                      onClick={() => handleCopyQuestionForAI(q, false)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '6px',
                        backgroundColor: copiedQuestionId === q.id ? '#dcfce7' : '#fffdfa',
                        border: copiedQuestionId === q.id ? '1px solid #86efac' : '1px solid #d6cebf',
                        color: copiedQuestionId === q.id ? '#15803d' : '#78350f',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      {copiedQuestionId === q.id ? <Check size={12} strokeWidth={3} /> : <Copy size={12} />}
                      <span>{copiedQuestionId === q.id ? 'Copied!' : 'Copy for AI'}</span>
                    </button>

                    {/* Flag for Review */}
                    <button
                      onClick={() => handleToggleFlag(q.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '6px',
                        backgroundColor: isFlagged ? '#fee2e2' : '#f5f5f4',
                        border: isFlagged ? '1px solid #fca5a5' : '1px solid #e7e5e4',
                        color: isFlagged ? '#b91c1c' : '#78716c',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      <Flag size={12} color={isFlagged ? '#b91c1c' : '#78716c'} fill={isFlagged ? '#b91c1c' : 'none'} />
                      <span>{isFlagged ? 'Flagged' : 'Flag'}</span>
                    </button>
                  </div>
                </div>

                {/* Question Text */}
                <h3 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#451a03', lineHeight: 1.6, margin: '0 0 1.15rem' }}>
                  {renderInlineMath(q.question)}
                </h3>

                {/* 6 Choices */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {q.options.map((opt) => {
                    const isSelected = chosenOpt === opt.id;
                    const incKey = `${q.id}_${opt.id}`;
                    const currentInc = inclinations[incKey];

                    let bg = '#ffffff';
                    let border = '#e7e2d7';
                    let textColor = '#292524';
                    let badgeBg = '#f5efe6';
                    let badgeColor = '#78350f';

                    if (isSelected) {
                      bg = '#fffbeb';
                      border = '#d97706';
                      textColor = '#78350f';
                      badgeBg = '#78350f';
                      badgeColor = '#ffffff';
                    }

                    return (
                      <div
                        key={opt.id}
                        onClick={() => handleSelectOption(q.id, opt.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.65rem',
                          padding: '0.75rem 0.85rem',
                          borderRadius: '8px',
                          border: `1.5px solid ${border}`,
                          backgroundColor: bg,
                          cursor: 'pointer',
                          transition: 'all 0.12s ease'
                        }}
                      >
                        <span style={{
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.74rem',
                          fontWeight: 800,
                          backgroundColor: badgeBg,
                          color: badgeColor,
                          flexShrink: 0,
                          marginTop: '0.1rem'
                        }}>
                          {opt.id.toUpperCase()}
                        </span>

                        <span style={{
                          flex: 1,
                          fontSize: '0.9rem',
                          fontWeight: isSelected ? 700 : 500,
                          color: textColor,
                          lineHeight: 1.5
                        }}>
                          {renderInlineMath(opt.text)}
                        </span>

                        {/* Inclination Tag (No/Maybe/Yes) */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCycleInclination(incKey);
                          }}
                          style={{
                            flexShrink: 0,
                            width: '62px',
                            boxSizing: 'border-box',
                            padding: '0.2rem 0',
                            borderRadius: '999px',
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            textAlign: 'center',
                            border: currentInc === 'no' ? '1.5px solid #fca5a5' : currentInc === 'maybe' ? '1.5px solid #fde68a' : currentInc === 'yes' ? '1.5px solid #86efac' : '1px dashed #d6cebf',
                            backgroundColor: currentInc === 'no' ? '#fef2f2' : currentInc === 'maybe' ? '#fffbeb' : currentInc === 'yes' ? '#f0fdf4' : 'transparent',
                            color: currentInc === 'no' ? '#dc2626' : currentInc === 'maybe' ? '#b45309' : currentInc === 'yes' ? '#15803d' : '#a8a29e',
                            opacity: currentInc ? 1 : 0.4
                          }}
                        >
                          {currentInc === 'no' ? 'No' : currentInc === 'maybe' ? 'Maybe' : currentInc === 'yes' ? 'Yes' : 'No'}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Submit Banner */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '1.5px solid #e7e2d7',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#451a03' }}>
              Exam Paper Progress: {answeredCount} / {examQuestions.length} answered
            </div>
            {unansweredCount > 0 && (
              <div style={{ fontSize: '0.78rem', color: '#b45309', fontWeight: 600 }}>
                ⚠️ You have {unansweredCount} unanswered question{unansweredCount > 1 ? 's' : ''}.
              </div>
            )}
          </div>

          <button
            onClick={() => setShowSubmitConfirm(true)}
            style={{
              padding: '0.8rem 2rem',
              backgroundColor: '#15803d',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 800,
              fontSize: '0.92rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 12px rgba(21, 128, 61, 0.25)'
            }}
          >
            <span>Finish & Submit Exam</span>
            <Check size={16} strokeWidth={3} />
          </button>
        </div>

        {/* Submit Confirmation Modal */}
        {showSubmitConfirm && (
          <div style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(69, 26, 3, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            zIndex: 100
          }}>
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '14px',
              border: '1.5px solid #d6cebf',
              maxWidth: '420px',
              width: '100%',
              padding: '1.75rem',
              boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#451a03', margin: '0 0 0.5rem' }}>
                Submit 50-Minute Exam?
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#57534e', margin: '0 0 1.25rem', lineHeight: 1.5 }}>
                You have answered <strong>{answeredCount}</strong> of <strong>{examQuestions.length}</strong> questions.
                {unansweredCount > 0 && (
                  <span style={{ color: '#b91c1c', display: 'block', marginTop: '0.4rem' }}>
                    Note: {unansweredCount} question{unansweredCount > 1 ? 's are' : ' is'} left blank and will be scored as incorrect.
                  </span>
                )}
              </p>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.65rem' }}>
                <button
                  onClick={() => setShowSubmitConfirm(false)}
                  style={{
                    padding: '0.6rem 1rem',
                    backgroundColor: '#f5f5f4',
                    border: '1px solid #d6d3d1',
                    borderRadius: '6px',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    color: '#57534e',
                    cursor: 'pointer'
                  }}
                >
                  Continue Working
                </button>
                <button
                  onClick={finishExam}
                  style={{
                    padding: '0.6rem 1.25rem',
                    backgroundColor: '#15803d',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: 800,
                    fontSize: '0.82rem',
                    color: '#ffffff',
                    cursor: 'pointer'
                  }}
                >
                  Confirm & Grade
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 3: EXAM RESULTS & FULL QUESTION-BY-QUESTION REVIEW
  // -------------------------------------------------------------
  if (examState === 'results' && examResult) {
    const isPassing = examResult.percentage >= 50;
    const isDistinction = examResult.percentage >= 85;

    const filteredQuestions = examQuestions.filter((q) => {
      const isCorrect = userAnswers[q.id] === q.correct_option;
      if (resultsFilter === 'correct') return isCorrect;
      if (resultsFilter === 'incorrect') return !isCorrect;
      return true;
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
        {/* Results Banner */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          border: '1.5px solid #e7e2d7',
          padding: '2rem 1.5rem',
          boxShadow: '0 4px 16px rgba(120, 53, 15, 0.06)',
          textAlign: 'center'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: isDistinction ? '#fef3c7' : isPassing ? '#dcfce7' : '#fee2e2',
            border: isDistinction ? '2px solid #fde68a' : isPassing ? '2px solid #86efac' : '2px solid #fca5a5',
            margin: '0 auto 1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {isDistinction ? (
              <Trophy size={30} color="#b45309" />
            ) : isPassing ? (
              <Award size={30} color="#15803d" />
            ) : (
              <ShieldAlert size={30} color="#dc2626" />
            )}
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#451a03', margin: '0 0 0.35rem' }}>
            {isDistinction
              ? 'Outstanding Distinction!'
              : isPassing
              ? 'Exam Passed Successfully!'
              : 'Review Recommended'}
          </h2>

          <div style={{ fontSize: '2.5rem', fontWeight: 900, color: isPassing ? '#15803d' : '#b91c1c', margin: '0.4rem 0' }}>
            {examResult.percentage}%
          </div>

          <p style={{ fontSize: '0.88rem', color: '#57534e', margin: '0 0 1.25rem' }}>
            You scored <strong>{examResult.correctCount}</strong> out of <strong>{examResult.totalCount}</strong> questions correct in {Math.floor(timeTakenSeconds / 60)}m {timeTakenSeconds % 60}s.
          </p>

          {/* Preparation Score Impact Highlight */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            padding: '0.55rem 1.15rem',
            backgroundColor: '#fef3c7',
            border: '1.5px solid #d97706',
            borderRadius: '999px',
            color: '#78350f',
            fontWeight: 800,
            fontSize: '0.85rem',
            marginBottom: '1.5rem'
          }}>
            <Award size={16} color="#b45309" />
            <span>Preparation Score Updated: Best Exam Score is now {Math.max(bestExamScore, examResult.percentage)}%!</span>
          </div>

          <div>
            <button
              onClick={handleStartExam}
              style={{
                padding: '0.75rem 1.85rem',
                backgroundColor: '#78350f',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 800,
                fontSize: '0.9rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem'
              }}
            >
              <RotateCcw size={15} />
              <span>Retake 50-Minute Exam Paper</span>
            </button>
          </div>
        </div>

        {/* Review Filter Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem'
        }}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#451a03', margin: 0 }}>
            Question-by-Question Review
          </h3>

          <div style={{ display: 'flex', gap: '0.35rem' }}>
            <button
              onClick={() => setResultsFilter('all')}
              style={{
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: resultsFilter === 'all' ? '#78350f' : '#f5f5f4',
                color: resultsFilter === 'all' ? '#ffffff' : '#78716c',
                fontWeight: 700,
                fontSize: '0.78rem',
                cursor: 'pointer'
              }}
            >
              All ({examQuestions.length})
            </button>
            <button
              onClick={() => setResultsFilter('incorrect')}
              style={{
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: resultsFilter === 'incorrect' ? '#dc2626' : '#fef2f2',
                color: resultsFilter === 'incorrect' ? '#ffffff' : '#b91c1c',
                fontWeight: 700,
                fontSize: '0.78rem',
                cursor: 'pointer'
              }}
            >
              Incorrect ({examResult.totalCount - examResult.correctCount})
            </button>
            <button
              onClick={() => setResultsFilter('correct')}
              style={{
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: resultsFilter === 'correct' ? '#15803d' : '#f0fdf4',
                color: resultsFilter === 'correct' ? '#ffffff' : '#15803d',
                fontWeight: 700,
                fontSize: '0.78rem',
                cursor: 'pointer'
              }}
            >
              Correct ({examResult.correctCount})
            </button>
          </div>
        </div>

        {/* Detailed Solutions List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {filteredQuestions.map((q) => {
            const originalIdx = examQuestions.findIndex((orig) => orig.id === q.id);
            const userChoice = userAnswers[q.id];
            const isCorrect = userChoice === q.correct_option;
            const seg = segments.find((s) => s.id === q.segment_id);

            return (
              <div
                key={q.id}
                style={{
                  backgroundColor: '#ffffff',
                  border: isCorrect ? '1.5px solid #86efac' : '1.5px solid #fca5a5',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
                }}
              >
                {/* Review Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '0.85rem',
                  paddingBottom: '0.65rem',
                  borderBottom: '1px solid #f2ede4'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '999px',
                      backgroundColor: isCorrect ? '#dcfce7' : '#fee2e2',
                      color: isCorrect ? '#15803d' : '#b91c1c',
                      fontSize: '0.74rem',
                      fontWeight: 800
                    }}>
                      {isCorrect ? <CheckCircle2 size={13} /> : <AlertCircle size={13} />}
                      <span>{isCorrect ? 'Correct' : 'Incorrect'}</span>
                    </span>

                    <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#451a03' }}>
                      Question {originalIdx + 1}
                    </span>

                    {seg && (
                      <span style={{ fontSize: '0.74rem', color: '#78716c' }}>
                        • Level {seg.order_index}: {seg.title}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => handleCopyQuestionForAI(q, true)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      padding: '0.25rem 0.55rem',
                      borderRadius: '6px',
                      backgroundColor: copiedQuestionId === q.id ? '#dcfce7' : '#fffdfa',
                      border: copiedQuestionId === q.id ? '1px solid #86efac' : '1px solid #d6cebf',
                      color: copiedQuestionId === q.id ? '#15803d' : '#78350f',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    {copiedQuestionId === q.id ? <Check size={12} strokeWidth={3} /> : <Copy size={12} />}
                    <span>{copiedQuestionId === q.id ? 'Copied Solution!' : 'Copy Question & Solution for AI'}</span>
                  </button>
                </div>

                {/* Question Text */}
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#292524', margin: '0 0 1rem', lineHeight: 1.55 }}>
                  {renderInlineMath(q.question)}
                </h4>

                {/* Side-by-Side Review Pills */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '0.75rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    padding: '0.75rem 0.95rem',
                    borderRadius: '8px',
                    backgroundColor: isCorrect ? '#f0fdf4' : '#fef2f2',
                    border: isCorrect ? '1px solid #bbf7d0' : '1px solid #fecaca'
                  }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, color: isCorrect ? '#15803d' : '#b91c1c', textTransform: 'uppercase' }}>
                      Your Answer:
                    </span>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#292524', marginTop: '0.2rem' }}>
                      {userChoice ? `Option ${userChoice.toUpperCase()}: ${q.options.find((o) => o.id === userChoice)?.text}` : 'Unanswered'}
                    </div>
                  </div>

                  <div style={{
                    padding: '0.75rem 0.95rem',
                    borderRadius: '8px',
                    backgroundColor: '#f0fdf4',
                    border: '1px solid #bbf7d0'
                  }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#15803d', textTransform: 'uppercase' }}>
                      Correct Answer:
                    </span>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#15803d', marginTop: '0.2rem' }}>
                      Option {q.correct_option.toUpperCase()}: {q.options.find((o) => o.id === q.correct_option)?.text}
                    </div>
                  </div>
                </div>

                {/* Theoretical Mathematical Derivation */}
                {q.explanation && (
                  <div style={{
                    backgroundColor: '#fffdfa',
                    border: '1px solid #f2ede4',
                    borderRadius: '8px',
                    padding: '0.95rem 1.15rem'
                  }}>
                    <div style={{ fontSize: '0.74rem', fontWeight: 800, color: '#78350f', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                      Theoretical Derivation & Analytical Explanation:
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#44403c', lineHeight: 1.65 }}>
                      <MathRenderer content={q.explanation} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
};
