import React, { useState, useEffect } from 'react';
import { WorkbookExercise, WorkbookSubmission } from '../types';
import { MathRenderer } from './MathRenderer';
import { supabase } from '../supabaseClient';
import confetti from 'canvas-confetti';
import { 
  Check, 
  X, 
  RotateCw, 
  CheckCircle2, 
  BookOpen, 
  Edit3, 
  Send, 
  ArrowRight, 
  Sparkles,
  HelpCircle,
  FileText
} from 'lucide-react';
import { playCorrectSound, playWrongSound, playSuccessChime, playClickSound } from '../utils/soundEffects';

interface WorkbookPhaseProps {
  exercises: WorkbookExercise[];
  segmentId: string;
  currentUser?: string | null;
  segmentTitle: string;
  isAlreadyPassed: boolean;
  onPassWorkbook: () => void;
  onProceedToFlashcards: () => void;
  onGoToText?: (anchor?: string, exerciseNum?: number) => void;
  onOpenScratchpad?: (exercisePrompt?: string) => void;
}

export const WorkbookPhase: React.FC<WorkbookPhaseProps> = ({
  exercises,
  segmentId,
  currentUser,
  segmentTitle,
  isAlreadyPassed,
  onPassWorkbook,
  onProceedToFlashcards,
  onGoToText,
  onOpenScratchpad
}) => {
  const uKey = (currentUser || 'guest').trim().toLowerCase().replace(/[^a-z0-9_-]/g, '') || 'guest';
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userResponse, setUserResponse] = useState<string>('');
  const [isTurnedIn, setIsTurnedIn] = useState<boolean>(false);
  const [selfEvaluated, setSelfEvaluated] = useState<boolean | null>(null);
  const [submissionsMap, setSubmissionsMap] = useState<Record<string, WorkbookSubmission>>({});

  const currentExercise = exercises[currentIndex];
  const draftKey = currentExercise ? `david_study_wb_draft_${uKey}_${currentExercise.id}` : '';

  // Load existing submissions from Supabase and draft from localStorage
  useEffect(() => {
    if (!currentExercise) return;

    // Load local draft
    const savedDraft = localStorage.getItem(draftKey);
    if (savedDraft) {
      setUserResponse(savedDraft);
    } else {
      setUserResponse('');
    }

    // Fetch submission from Supabase
    const fetchSubmission = async () => {
      try {
        const { data, error } = await supabase
          .from('study_workbook_submissions')
          .select('*')
          .eq('username', uKey)
          .eq('exercise_id', currentExercise.id)
          .maybeSingle();

        if (data && !error) {
          setSubmissionsMap(prev => ({ ...prev, [currentExercise.id]: data }));
          if (data.user_response) {
            setUserResponse(data.user_response);
          }
          setIsTurnedIn(true);
          setSelfEvaluated(data.self_evaluated_correct);
        } else {
          setIsTurnedIn(false);
          setSelfEvaluated(null);
        }
      } catch (err) {
        console.error('Error fetching submission:', err);
      }
    };

    fetchSubmission();
  }, [currentExercise?.id, uKey]);

  // Persist draft response on typing
  const handleResponseChange = (text: string) => {
    setUserResponse(text);
    if (draftKey) {
      try {
        localStorage.setItem(draftKey, text);
      } catch {
        // ignore
      }
    }
  };

  // Turn in response
  const handleTurnIn = async () => {
    if (!currentExercise) return;
    playClickSound();
    setIsTurnedIn(true);

    const submissionId = `wb_sub_${uKey}_${currentExercise.id}`;
    const newSub: WorkbookSubmission = {
      id: submissionId,
      username: uKey,
      exercise_id: currentExercise.id,
      segment_id: segmentId,
      user_response: userResponse,
      self_evaluated_correct: selfEvaluated,
      submitted_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    try {
      await supabase
        .from('study_workbook_submissions')
        .upsert(newSub, { onConflict: 'id' });
      setSubmissionsMap(prev => ({ ...prev, [currentExercise.id]: newSub }));
    } catch (err) {
      console.error('Error saving submission:', err);
    }
  };

  // Self Evaluation (Yes / No)
  const handleSelfEvaluate = async (correct: boolean) => {
    if (!currentExercise) return;

    setSelfEvaluated(correct);

    if (correct) {
      playCorrectSound();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      onPassWorkbook();
    } else {
      playWrongSound();
    }

    const submissionId = `wb_sub_${uKey}_${currentExercise.id}`;
    const updatedSub: WorkbookSubmission = {
      id: submissionId,
      username: uKey,
      exercise_id: currentExercise.id,
      segment_id: segmentId,
      user_response: userResponse,
      self_evaluated_correct: correct,
      updated_at: new Date().toISOString()
    };

    try {
      await supabase
        .from('study_workbook_submissions')
        .upsert(updatedSub, { onConflict: 'id' });
      setSubmissionsMap(prev => ({ ...prev, [currentExercise.id]: updatedSub }));
    } catch (err) {
      console.error('Error saving self-evaluation:', err);
    }
  };

  // Reset exercise to try again
  const handleResetExercise = async () => {
    playClickSound();
    setIsTurnedIn(false);
    setSelfEvaluated(null);
    if (draftKey) {
      localStorage.removeItem(draftKey);
    }
    setUserResponse('');
  };

  if (!exercises || exercises.length === 0) {
    return (
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #e7e2d7',
        padding: '3rem 1.5rem',
        textAlign: 'center',
        boxShadow: '0 1px 3px rgba(120, 53, 15, 0.03)'
      }}>
        <div style={{
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          backgroundColor: '#fef3c7',
          color: '#d97706',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1rem'
        }}>
          <FileText size={22} />
        </div>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#78350f', margin: '0 0 0.4rem' }}>
          No Workbook Exercises for {segmentTitle}
        </h3>
        <p style={{ fontSize: '0.85rem', color: '#78716c', maxWidth: '420px', margin: '0 auto 1.5rem', lineHeight: 1.5 }}>
          This segment focuses on foundational concepts. You can proceed directly to the Level Flashcards!
        </p>
        <button
          onClick={onProceedToFlashcards}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.6rem 1.25rem',
            backgroundColor: '#78350f',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 700,
            fontSize: '0.875rem',
            cursor: 'pointer'
          }}
        >
          <span>Proceed to Flashcards</span>
          <ArrowRight size={15} />
        </button>
      </div>
    );
  }

  return (
    <div style={{
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      border: '1px solid #e7e2d7',
      padding: 'clamp(1rem, 3vw, 1.75rem)',
      boxShadow: '0 1px 3px rgba(120, 53, 15, 0.03)'
    }}>
      {/* Header Info */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem',
        paddingBottom: '1rem',
        marginBottom: '1.25rem',
        borderBottom: '1px solid #f2eee6'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#b45309', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Phase 3 of 4 • Workbook Exercises
            </span>
            <span style={{
              fontSize: '0.68rem',
              fontWeight: 800,
              color: '#991b1b',
              backgroundColor: '#fee2e2',
              padding: '0.1rem 0.45rem',
              borderRadius: '9999px',
              textTransform: 'uppercase'
            }}>
              {currentExercise.difficulty}
            </span>
            {selfEvaluated === true && (
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                color: '#15803d',
                backgroundColor: '#dcfce7',
                padding: '0.1rem 0.45rem',
                borderRadius: '9999px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem'
              }}>
                <Check size={12} strokeWidth={3} /> Mastered
              </span>
            )}
          </div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#451a03', margin: 0 }}>
            {currentExercise.title}
          </h2>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          {onGoToText && (
            <button
              onClick={() => onGoToText(currentExercise.section_anchor, currentIndex + 1)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.4rem 0.8rem',
                borderRadius: '6px',
                border: '1px solid #d97706',
                backgroundColor: '#fffbeb',
                color: '#b45309',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <BookOpen size={14} />
              <span>📖 Reference Text Guide</span>
            </button>
          )}

          {onOpenScratchpad && (
            <button
              onClick={() => onOpenScratchpad(currentExercise.prompt_markdown)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.4rem 0.8rem',
                borderRadius: '6px',
                border: '1px solid #78350f',
                backgroundColor: '#fef3c7',
                color: '#78350f',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              <Edit3 size={14} />
              <span>✏️ Apple Pencil Canvas</span>
            </button>
          )}
        </div>
      </div>

      {/* Exercise Prompt Box */}
      <div style={{
        backgroundColor: '#faf8f5',
        border: '1.5px solid #e7e2d7',
        borderRadius: '10px',
        padding: '1.25rem 1.4rem',
        marginBottom: '1.5rem',
        lineHeight: 1.6
      }}>
        <div style={{
          fontSize: '0.75rem',
          fontWeight: 800,
          color: '#78350f',
          textTransform: 'uppercase',
          letterSpacing: '0.04em',
          marginBottom: '0.65rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem'
        }}>
          <FileText size={14} />
          <span>Workbook Scenario & Task Specifications:</span>
        </div>
        <div style={{ fontSize: '0.92rem', color: '#1c1917' }}>
          <MathRenderer content={currentExercise.prompt_markdown} />
        </div>
      </div>

      {/* Writing / Scratchpad Response Zone */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.45rem'
        }}>
          <label style={{
            fontSize: '0.82rem',
            fontWeight: 800,
            color: '#451a03',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}>
            <Edit3 size={14} color="#d97706" />
            <span>Your Response & Calculations:</span>
          </label>
          <span style={{ fontSize: '0.72rem', color: '#78716c', fontWeight: 600 }}>
            {userResponse.length} characters • Auto-saved
          </span>
        </div>

        <textarea
          value={userResponse}
          onChange={(e) => handleResponseChange(e.target.value)}
          disabled={isTurnedIn}
          placeholder="Work out your step-by-step arithmetic, derive formulas, state intermediate values, and write your conclusions here..."
          rows={6}
          style={{
            width: '100%',
            padding: '0.85rem 1rem',
            borderRadius: '8px',
            border: isTurnedIn ? '1.5px solid #d6cebf' : '1.5px solid #78350f',
            backgroundColor: isTurnedIn ? '#fbf9f5' : '#ffffff',
            color: '#1c1917',
            fontSize: '0.875rem',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
            lineHeight: 1.5,
            resize: 'vertical',
            outline: 'none',
            boxShadow: isTurnedIn ? 'none' : '0 1px 3px rgba(120, 53, 15, 0.08)'
          }}
        />

        {/* Turn-in Button Bar */}
        {!isTurnedIn && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.75rem' }}>
            <button
              onClick={handleTurnIn}
              disabled={userResponse.trim().length === 0}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0.65rem 1.5rem',
                borderRadius: '8px',
                backgroundColor: userResponse.trim().length === 0 ? '#d6cebf' : '#78350f',
                color: '#ffffff',
                border: 'none',
                fontWeight: 800,
                fontSize: '0.88rem',
                cursor: userResponse.trim().length === 0 ? 'not-allowed' : 'pointer',
                boxShadow: '0 2px 5px rgba(120, 53, 15, 0.25)',
                transition: 'all 0.15s ease'
              }}
            >
              <Send size={15} />
              <span>Turn In Exercise & Check Solution</span>
            </button>
          </div>
        )}
      </div>

      {/* Official Worked Solution (Revealed on Turn-In) */}
      {isTurnedIn && (
        <div style={{
          backgroundColor: '#f0fdf4',
          border: '1.5px solid #86efac',
          borderRadius: '10px',
          padding: '1.35rem 1.5rem',
          marginBottom: '1.5rem',
          animation: 'fadeIn 0.2s ease-out'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '0.85rem',
            borderBottom: '1px solid #bbf7d0',
            paddingBottom: '0.5rem'
          }}>
            <span style={{
              fontSize: '0.78rem',
              fontWeight: 800,
              color: '#15803d',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}>
              <CheckCircle2 size={16} />
              <span>Authoritative Step-by-Step Worked Solution:</span>
            </span>
            <button
              onClick={handleResetExercise}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.25rem 0.55rem',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: '#15803d',
                backgroundColor: '#ffffff',
                border: '1px solid #86efac',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              <RotateCw size={12} />
              <span>Edit / Re-attempt</span>
            </button>
          </div>

          <div style={{ fontSize: '0.92rem', color: '#14532d', lineHeight: 1.6 }}>
            <MathRenderer content={currentExercise.solution_markdown} />
          </div>

          {/* Self-Assessment Feedback Bar */}
          <div style={{
            marginTop: '1.5rem',
            paddingTop: '1.25rem',
            borderTop: '1.5px dashed #86efac',
            textAlign: 'center'
          }}>
            <h4 style={{
              fontSize: '0.95rem',
              fontWeight: 800,
              color: '#14532d',
              margin: '0 0 0.75rem'
            }}>
              Did your calculations and reasoning match the official solution?
            </h4>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => handleSelfEvaluate(false)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.6rem 1.4rem',
                  borderRadius: '8px',
                  backgroundColor: selfEvaluated === false ? '#dc2626' : '#ffffff',
                  color: selfEvaluated === false ? '#ffffff' : '#b91c1c',
                  border: '1.5px solid #dc2626',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.06)'
                }}
              >
                <X size={16} strokeWidth={3} />
                <span>No, I made mistakes</span>
              </button>

              <button
                onClick={() => handleSelfEvaluate(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.6rem 1.6rem',
                  borderRadius: '8px',
                  backgroundColor: selfEvaluated === true ? '#16a34a' : '#15803d',
                  color: '#ffffff',
                  border: '1.5px solid #15803d',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  boxShadow: '0 2px 6px rgba(21, 128, 61, 0.3)'
                }}
              >
                <Check size={16} strokeWidth={3} />
                <span>Yes, I got it right!</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.75rem',
        paddingTop: '1rem',
        borderTop: '1px solid #f2eee6',
        marginTop: '1.25rem'
      }}>
        <div style={{ fontSize: '0.8rem', color: '#78716c', fontWeight: 600 }}>
          Exercise {currentIndex + 1} of {exercises.length}
        </div>

        <button
          onClick={onProceedToFlashcards}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.55rem 1.25rem',
            backgroundColor: '#78350f',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 800,
            fontSize: '0.85rem',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(120, 53, 15, 0.2)'
          }}
        >
          <span>Proceed to Phase 4: Flashcards</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};
