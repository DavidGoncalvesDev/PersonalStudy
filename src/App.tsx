import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import { Discipline, Segment, Question, Flashcard, SegmentProgress } from './types';
import { Header } from './components/Header';
import { SegmentSelector } from './components/SegmentSelector';
import { TextSummaryPhase } from './components/TextSummaryPhase';
import { QuizPhase } from './components/QuizPhase';
import { FlashcardsPhase } from './components/FlashcardsPhase';
import { ExerciseZone } from './components/ExerciseZone';
import { ScratchpadModal } from './components/ScratchpadModal';
import { calculatePreparationScore } from './utils/scoreCalculator';
import { BookOpen, HelpCircle, Layers, CheckCircle2, ChevronRight, Loader2, Edit3 } from 'lucide-react';

export const App: React.FC = () => {
  const [disciplines, setDisciplines] = useState<Discipline[]>([]);
  const [currentDiscipline, setCurrentDiscipline] = useState<Discipline | null>(null);
  const [segments, setSegments] = useState<Segment[]>([]);
  const [currentSegment, setCurrentSegment] = useState<Segment | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [progressMap, setProgressMap] = useState<Record<string, SegmentProgress>>({});
  const [unlockAll, setUnlockAll] = useState<boolean>(false);
  const [activePhase, setActivePhase] = useState<'text' | 'quiz' | 'flashcards'>('text');
  const [loading, setLoading] = useState<boolean>(true);

  // Top navigation mode: Curriculum vs Exercise Zone
  const [activeTab, setActiveTab] = useState<'curriculum' | 'exercise_zone'>('curriculum');

  // Stats & Gamification
  const [bestStreak, setBestStreak] = useState<number>(0);
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [randomExercisesCount, setRandomExercisesCount] = useState<number>(0);
  const [totalCorrect, setTotalCorrect] = useState<number>(0);
  const [totalWrong, setTotalWrong] = useState<number>(0);

  // Global Scratchpad Modal
  const [isScratchpadOpen, setIsScratchpadOpen] = useState<boolean>(false);
  const [scratchpadQuestion, setScratchpadQuestion] = useState<Question | null>(null);

  // Active Question Reference Navigation (Text Guide highlighting & smooth return to quiz)
  const [highlightedAnchor, setHighlightedAnchor] = useState<string | null>(null);
  const [activeQuizQuestionNumber, setActiveQuizQuestionNumber] = useState<number | null>(null);

  // 1. Load disciplines & user settings on mount
  useEffect(() => {
    fetchDisciplines();
    fetchUserSettings();
  }, []);

  const fetchUserSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('study_user_settings')
        .select('*')
        .eq('id', 'default')
        .maybeSingle();

      if (data) {
        if (typeof data.unlock_all === 'boolean') {
          setUnlockAll(data.unlock_all);
        }
        if (typeof data.sudden_death_best_streak === 'number') {
          setBestStreak(data.sudden_death_best_streak);
        }
        if (typeof data.sudden_death_current_streak === 'number') {
          setCurrentStreak(data.sudden_death_current_streak);
        }
        if (typeof data.random_exercises_completed === 'number') {
          setRandomExercisesCount(data.random_exercises_completed);
        }
        if (typeof data.total_correct_answers === 'number') {
          setTotalCorrect(data.total_correct_answers);
        }
        if (typeof data.total_wrong_answers === 'number') {
          setTotalWrong(data.total_wrong_answers);
        }
      }
    } catch (err) {
      console.error('Error fetching user settings:', err);
    }
  };

  const fetchDisciplines = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('study_disciplines')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error('Error fetching disciplines:', error);
        return;
      }

      if (data && data.length > 0) {
        setDisciplines(data);
        const defaultDisc = data.find(d => d.id === 'data-analysis') || data[0];
        setCurrentDiscipline(defaultDisc);
      }
    } finally {
      setLoading(false);
    }
  };

  // 2. Load segments and progress when currentDiscipline changes
  useEffect(() => {
    if (!currentDiscipline) return;
    fetchSegmentsAndProgress(currentDiscipline.id);
  }, [currentDiscipline]);

  const fetchSegmentsAndProgress = async (disciplineId: string) => {
    setLoading(true);
    try {
      const { data: segData, error: segError } = await supabase
        .from('study_segments')
        .select('*')
        .eq('discipline_id', disciplineId)
        .order('order_index', { ascending: true });

      if (segError) {
        console.error('Error fetching segments:', segError);
        return;
      }

      setSegments(segData || []);
      if (segData && segData.length > 0) {
        setCurrentSegment(segData[0]);
      } else {
        setCurrentSegment(null);
      }

      const { data: progData, error: progError } = await supabase
        .from('study_progress')
        .select('*')
        .eq('discipline_id', disciplineId);

      if (progError) {
        console.error('Error fetching progress:', progError);
      } else if (progData) {
        const map: Record<string, SegmentProgress> = {};
        progData.forEach(p => {
          map[p.segment_id] = p;
        });
        setProgressMap(map);
      }
    } finally {
      setLoading(false);
    }
  };

  // 3. Load segment quiz questions (pool_type = 'quiz') and flashcards
  useEffect(() => {
    if (!currentSegment) return;
    fetchSegmentDetails(currentSegment.id);

    const prog = progressMap[currentSegment.id];
    if (prog?.completed) {
      setActivePhase('text');
    } else if (prog?.quiz_passed) {
      setActivePhase('flashcards');
    } else if (prog?.text_completed) {
      setActivePhase('quiz');
    } else {
      setActivePhase('text');
    }
  }, [currentSegment]);

  const fetchSegmentDetails = async (segmentId: string) => {
    try {
      const { data: qData, error: qError } = await supabase
        .from('study_questions')
        .select('*')
        .eq('segment_id', segmentId)
        .eq('pool_type', 'quiz')
        .order('order_index', { ascending: true });

      if (qError) {
        console.error('Error fetching quiz questions:', qError);
      } else {
        setQuestions(qData || []);
      }

      const { data: fcData, error: fcError } = await supabase
        .from('study_flashcards')
        .select('*')
        .eq('segment_id', segmentId)
        .order('order_index', { ascending: true });

      if (fcError) {
        console.error('Error fetching flashcards:', fcError);
      } else {
        setFlashcards(fcData || []);
      }
    } catch (err) {
      console.error('Error loading segment details:', err);
    }
  };

  // Progress Update in Supabase
  const updateProgress = async (updates: Partial<SegmentProgress>) => {
    if (!currentDiscipline || !currentSegment) return;

    const progressId = `prog_${currentDiscipline.id}_${currentSegment.id}`;
    const existing = progressMap[currentSegment.id] || {
      id: progressId,
      discipline_id: currentDiscipline.id,
      segment_id: currentSegment.id,
      text_completed: false,
      quiz_passed: false,
      quiz_score: 0,
      quiz_attempts: 0,
      flashcards_passed: false,
      completed: false
    };

    const newProgress: SegmentProgress = {
      ...existing,
      ...updates,
      updated_at: new Date().toISOString()
    };

    setProgressMap(prev => ({
      ...prev,
      [currentSegment.id]: newProgress
    }));

    try {
      await supabase
        .from('study_progress')
        .upsert(newProgress);
    } catch (err) {
      console.error('Failed to persist progress to Supabase:', err);
    }
  };

  const handleToggleUnlockAll = async () => {
    const nextVal = !unlockAll;
    setUnlockAll(nextVal);
    try {
      await supabase
        .from('study_user_settings')
        .upsert({
          id: 'default',
          unlock_all: nextVal,
          updated_at: new Date().toISOString()
        });
    } catch (err) {
      console.error('Failed to persist unlock_all setting to Supabase:', err);
    }
  };

  const handleDoubleClickSegment = async (seg: Segment) => {
    if (!currentDiscipline) return;
    const currentProg = progressMap[seg.id] || {
      id: `prog_${currentDiscipline.id}_${seg.id}`,
      discipline_id: currentDiscipline.id,
      segment_id: seg.id,
      text_completed: false,
      quiz_passed: false,
      quiz_score: 0,
      quiz_attempts: 0,
      flashcards_passed: false,
      completed: false,
      manually_unlocked: false
    };

    const nextManualState = !currentProg.manually_unlocked;
    const updatedProg: SegmentProgress = {
      ...currentProg,
      manually_unlocked: nextManualState,
      updated_at: new Date().toISOString()
    };

    setProgressMap(prev => ({
      ...prev,
      [seg.id]: updatedProg
    }));

    setCurrentSegment(seg);

    try {
      await supabase
        .from('study_progress')
        .upsert(updatedProg);
    } catch (err) {
      console.error('Failed to update manual unlock:', err);
    }
  };

  // Phase Handlers
  const handleProceedToQuiz = async () => {
    await updateProgress({ text_completed: true });
    setHighlightedAnchor(null);
    setActiveQuizQuestionNumber(null);
    setActivePhase('quiz');
    window.scrollTo({ top: 80, behavior: 'smooth' });
  };

  const handleGoToTextFromQuiz = (anchor?: string, qNum?: number) => {
    setHighlightedAnchor(anchor || null);
    setActiveQuizQuestionNumber(qNum || null);
    setActivePhase('text');
  };

  const handleReturnToQuizFromText = () => {
    setHighlightedAnchor(null);
    setActiveQuizQuestionNumber(null);
    setActivePhase('quiz');
  };

  const handlePassQuiz = async (score: number) => {
    const existingAttempts = progressMap[currentSegment?.id || '']?.quiz_attempts || 0;
    await updateProgress({
      quiz_passed: true,
      quiz_score: score,
      quiz_attempts: existingAttempts + 1
    });
  };

  const handleProceedToFlashcards = () => {
    setActivePhase('flashcards');
    window.scrollTo({ top: 80, behavior: 'smooth' });
  };

  const handleCompleteSegment = async () => {
    await updateProgress({
      flashcards_passed: true,
      completed: true
    });
  };

  const handleGoToNextSegment = () => {
    if (!currentSegment) return;
    const currentIdx = segments.findIndex(s => s.id === currentSegment.id);
    if (currentIdx !== -1 && currentIdx + 1 < segments.length) {
      const nextSeg = segments[currentIdx + 1];
      setCurrentSegment(nextSeg);
      setActivePhase('text');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Discipline Management
  const handleCreateDiscipline = async (name: string, code: string, description: string) => {
    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const newDisc: Discipline = { id, name, code, description };
    const { error } = await supabase.from('study_disciplines').insert(newDisc);
    if (error) {
      alert('Error creating discipline: ' + error.message);
      return;
    }
    setDisciplines(prev => [...prev, newDisc]);
    setCurrentDiscipline(newDisc);
  };

  const handleDeleteDiscipline = async (id: string) => {
    const { error } = await supabase.from('study_disciplines').delete().eq('id', id);
    if (error) {
      alert('Error deleting discipline: ' + error.message);
      return;
    }
    const remaining = disciplines.filter(d => d.id !== id);
    setDisciplines(remaining);
    if (remaining.length > 0) {
      setCurrentDiscipline(remaining[0]);
    } else {
      setCurrentDiscipline(null);
      setSegments([]);
      setCurrentSegment(null);
    }
  };

  // Exercise Zone Stats Handler
  const handleUpdateExerciseStats = async (correct: boolean, isSuddenDeath: boolean, streak: number) => {
    const nextTotalCorrect = correct ? totalCorrect + 1 : totalCorrect;
    const nextTotalWrong = !correct ? totalWrong + 1 : totalWrong;
    const nextRandomCount = !isSuddenDeath && correct ? randomExercisesCount + 1 : randomExercisesCount;

    let nextBestStreak = bestStreak;
    if (isSuddenDeath && streak > bestStreak) {
      nextBestStreak = streak;
      setBestStreak(streak);
    }
    if (isSuddenDeath) {
      setCurrentStreak(streak);
    }

    setTotalCorrect(nextTotalCorrect);
    setTotalWrong(nextTotalWrong);
    setRandomExercisesCount(nextRandomCount);

    const nextPrepScore = calculatePreparationScore({
      totalSegments: segments.length,
      progressMap,
      randomExercisesCount: nextRandomCount,
      bestStreak: nextBestStreak
    });

    try {
      await supabase.from('study_user_settings').upsert({
        id: 'default',
        preparation_score: nextPrepScore,
        sudden_death_best_streak: nextBestStreak,
        sudden_death_current_streak: streak,
        random_exercises_completed: nextRandomCount,
        total_correct_answers: nextTotalCorrect,
        total_wrong_answers: nextTotalWrong,
        updated_at: new Date().toISOString()
      });
    } catch (err) {
      console.error('Failed to sync exercise stats:', err);
    }
  };

  // Preparation Score Calculation
  const preparationScore = calculatePreparationScore({
    totalSegments: segments.length,
    progressMap,
    randomExercisesCount,
    bestStreak
  });

  const completedSegmentsCount = segments.filter(s => progressMap[s.id]?.completed).length;
  const completionPercentage = segments.length > 0
    ? Math.round((completedSegmentsCount / segments.length) * 100)
    : 0;

  const currentSegmentProgress = currentSegment ? progressMap[currentSegment.id] : undefined;
  const currentSegmentIdx = currentSegment ? segments.findIndex(s => s.id === currentSegment.id) : -1;
  const hasNextSegment = currentSegmentIdx !== -1 && currentSegmentIdx + 1 < segments.length;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fdfbf7' }}>
      {/* Top Header */}
      <Header
        disciplines={disciplines}
        currentDiscipline={currentDiscipline}
        onSelectDiscipline={(d) => setCurrentDiscipline(d)}
        onCreateDiscipline={handleCreateDiscipline}
        onDeleteDiscipline={handleDeleteDiscipline}
        completionPercentage={completionPercentage}
        preparationScore={preparationScore}
        completedCount={completedSegmentsCount}
        totalSegments={segments.length}
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
        onOpenScratchpad={() => {
          setScratchpadQuestion(null);
          setIsScratchpadOpen(true);
        }}
      />

      {/* Main Content Area */}
      <main style={{ flex: 1, maxWidth: '960px', width: '100%', margin: '0 auto', padding: '1.25rem 1rem 4rem' }}>
        {loading && disciplines.length === 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '300px', gap: '0.75rem' }}>
            <Loader2 size={32} color="#78350f" className="animate-spin" />
            <p style={{ color: '#78716c', fontWeight: 600, fontSize: '0.9rem' }}>Loading study guide...</p>
          </div>
        ) : !currentDiscipline ? (
          <div style={{ textAlign: 'center', padding: '3.5rem 1rem' }}>
            <BookOpen size={44} color="#a8a29e" style={{ margin: '0 auto 0.75rem' }} />
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#451a03' }}>No Disciplines Found</h2>
            <p style={{ color: '#78716c', maxWidth: '380px', margin: '0.5rem auto 1.25rem', fontSize: '0.875rem' }}>
              Create your study discipline or load content to begin.
            </p>
          </div>
        ) : activeTab === 'exercise_zone' ? (
          /* Exercise Zone Mode */
          <ExerciseZone
            segments={segments}
            progressMap={progressMap}
            bestStreak={bestStreak}
            currentStreak={currentStreak}
            onUpdateStats={handleUpdateExerciseStats}
            onOpenScratchpad={(q) => {
              setScratchpadQuestion(q);
              setIsScratchpadOpen(true);
            }}
          />
        ) : (
          /* Curriculum / Levels Mode */
          <>
            {/* Level / Segment Selector */}
            <SegmentSelector
              segments={segments}
              currentSegment={currentSegment}
              onSelectSegment={(seg) => setCurrentSegment(seg)}
              onDoubleClickSegment={handleDoubleClickSegment}
              progressMap={progressMap}
              unlockAll={unlockAll}
              onToggleUnlockAll={handleToggleUnlockAll}
            />

            {/* Current Segment Workflow Phase Stepper */}
            {currentSegment && (
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e7e2d7',
                  borderRadius: '10px',
                  padding: '0.35rem',
                  gap: '0.4rem',
                  boxShadow: '0 1px 3px rgba(120, 53, 15, 0.02)'
                }}>
                  {/* Phase 1 Tab */}
                  <button
                    onClick={() => setActivePhase('text')}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      padding: '0.55rem 0.75rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: activePhase === 'text' ? '#fef3c7' : 'transparent',
                      color: activePhase === 'text' ? '#78350f' : '#78716c',
                      fontWeight: activePhase === 'text' ? 800 : 600,
                      fontSize: '0.825rem',
                      cursor: 'pointer',
                      transition: 'all 0.12s ease'
                    }}
                  >
                    <BookOpen size={15} />
                    <span>1. Text Guide</span>
                    {currentSegmentProgress?.text_completed && <CheckCircle2 size={14} color="#15803d" />}
                  </button>

                  <ChevronRight size={14} color="#d6cebf" />

                  {/* Phase 2 Tab */}
                  <button
                    onClick={() => {
                      if (currentSegmentProgress?.text_completed || unlockAll) {
                        setActivePhase('quiz');
                      } else {
                        alert('Please read and mark the Text Guide complete first.');
                      }
                    }}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      padding: '0.55rem 0.75rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: activePhase === 'quiz' ? '#fef3c7' : 'transparent',
                      color: activePhase === 'quiz'
                        ? '#78350f'
                        : (currentSegmentProgress?.text_completed || unlockAll)
                        ? '#78716c'
                        : '#c7c2b6',
                      fontWeight: activePhase === 'quiz' ? 800 : 600,
                      fontSize: '0.825rem',
                      cursor: (currentSegmentProgress?.text_completed || unlockAll) ? 'pointer' : 'not-allowed',
                      transition: 'all 0.12s ease'
                    }}
                  >
                    <HelpCircle size={15} />
                    <span>2. Quiz (12 Qs)</span>
                    {currentSegmentProgress?.quiz_passed && <CheckCircle2 size={14} color="#15803d" />}
                  </button>

                  <ChevronRight size={14} color="#d6cebf" />

                  {/* Phase 3 Tab */}
                  <button
                    onClick={() => {
                      if (currentSegmentProgress?.quiz_passed || unlockAll) {
                        setActivePhase('flashcards');
                      } else {
                        alert('Mastery rule: Score 12/12 on the Quiz to unlock Flashcards.');
                      }
                    }}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      padding: '0.55rem 0.75rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: activePhase === 'flashcards' ? '#fef3c7' : 'transparent',
                      color: activePhase === 'flashcards'
                        ? '#78350f'
                        : (currentSegmentProgress?.quiz_passed || unlockAll)
                        ? '#78716c'
                        : '#c7c2b6',
                      fontWeight: activePhase === 'flashcards' ? 800 : 600,
                      fontSize: '0.825rem',
                      cursor: (currentSegmentProgress?.quiz_passed || unlockAll) ? 'pointer' : 'not-allowed',
                      transition: 'all 0.12s ease'
                    }}
                  >
                    <Layers size={15} />
                    <span>3. Flashcards</span>
                    {currentSegmentProgress?.completed && <CheckCircle2 size={14} color="#15803d" />}
                  </button>
                </div>
              </div>
            )}

            {/* Active Workflow Component */}
            {currentSegment && (
              <>
                <div style={{ display: activePhase === 'text' ? 'block' : 'none' }}>
                  <TextSummaryPhase
                    segment={currentSegment}
                    isCompleted={!!currentSegmentProgress?.text_completed}
                    onProceedToQuiz={handleProceedToQuiz}
                    highlightAnchor={highlightedAnchor}
                    activeQuestionNumber={activeQuizQuestionNumber}
                    onReturnToQuiz={handleReturnToQuizFromText}
                  />
                </div>

                <div style={{ display: activePhase === 'quiz' ? 'block' : 'none' }}>
                  <QuizPhase
                    key={`quiz-${currentSegment.id}`}
                    questions={questions}
                    segmentTitle={currentSegment.title}
                    isAlreadyPassed={!!currentSegmentProgress?.quiz_passed}
                    onPassQuiz={handlePassQuiz}
                    onProceedToFlashcards={handleProceedToFlashcards}
                    onGoToText={handleGoToTextFromQuiz}
                    onOpenScratchpad={() => {
                      setScratchpadQuestion(questions[0] || null);
                      setIsScratchpadOpen(true);
                    }}
                  />
                </div>

                {activePhase === 'flashcards' && (
                  <FlashcardsPhase
                    key={`flashcards-${currentSegment.id}`}
                    flashcards={flashcards}
                    segmentTitle={currentSegment.title}
                    isAlreadyCompleted={!!currentSegmentProgress?.flashcards_passed}
                    onCompleteSegment={handleCompleteSegment}
                    onGoToNextSegment={handleGoToNextSegment}
                    hasNextSegment={hasNextSegment}
                  />
                )}
              </>
            )}
          </>
        )}
      </main>

      {/* Floating Action Button (FAB) for Scratchpad - Accessible from ANY screen */}
      <button
        onClick={() => {
          setScratchpadQuestion(null);
          setIsScratchpadOpen(true);
        }}
        style={{
          position: 'fixed',
          bottom: '22px',
          right: '22px',
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          backgroundColor: '#78350f',
          color: '#ffffff',
          border: '2px solid #fef3c7',
          boxShadow: '0 8px 24px rgba(120, 53, 15, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 90,
          transition: 'transform 0.15s ease'
        }}
        aria-label="Open Scratchpad / Notes"
      >
        <Edit3 size={22} />
      </button>

      {/* Full-Screen Scratchpad Modal (Apple Pencil & Mouse Canvas) */}
      <ScratchpadModal
        isOpen={isScratchpadOpen}
        onClose={() => setIsScratchpadOpen(false)}
        activeQuestion={scratchpadQuestion}
      />
    </div>
  );
};
