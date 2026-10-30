import React, { useState, useEffect, useMemo } from 'react';
import { supabase } from './supabaseClient';
import { Discipline, Segment, Question, Flashcard, SegmentProgress, WorkbookExercise } from './types';
import { Header } from './components/Header';
import { SegmentSelector } from './components/SegmentSelector';
import { TextSummaryPhase } from './components/TextSummaryPhase';
import { QuizPhase } from './components/QuizPhase';
import { WorkbookPhase } from './components/WorkbookPhase';
import { FlashcardsPhase } from './components/FlashcardsPhase';
import { ExerciseZone } from './components/ExerciseZone';
import { ScratchpadModal } from './components/ScratchpadModal';
import { UserLoginModal } from './components/UserLoginModal';
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
  const [activePhase, setActivePhase] = useState<'text' | 'quiz' | 'workbook' | 'flashcards'>('text');
  const [workbookExercises, setWorkbookExercises] = useState<WorkbookExercise[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Top navigation mode: Curriculum vs Exercise Zone
  const [activeTab, setActiveTab] = useState<'curriculum' | 'exercise_zone'>('curriculum');

  // Stats & Gamification
  const [bestStreak, setBestStreak] = useState<number>(0);
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [randomExercisesCount, setRandomExercisesCount] = useState<number>(0);
  const [totalCorrect, setTotalCorrect] = useState<number>(0);
  const [totalWrong, setTotalWrong] = useState<number>(0);

  // 50-Minute Comprehensive Exam Stats
  const [examBestScore, setExamBestScore] = useState<number>(0);
  const [examLastScore, setExamLastScore] = useState<number>(0);
  const [examAttempts, setExamAttempts] = useState<number>(0);

  // Global Scratchpad Modal
  const [isScratchpadOpen, setIsScratchpadOpen] = useState<boolean>(false);
  const [scratchpadQuestion, setScratchpadQuestion] = useState<Question | null>(null);

  // Active Question/Flashcard Reference Navigation (Text Guide highlighting & smooth bidirectional return)
  const [highlightedAnchor, setHighlightedAnchor] = useState<string | null>(null);
  const [activeReferenceSource, setActiveReferenceSource] = useState<'quiz' | 'workbook' | 'flashcards' | null>(null);
  const [activeReferenceItemNumber, setActiveReferenceItemNumber] = useState<number | null>(null);

  // Per-Device & Per-Person User Login State (Prompt user first, DO NOT auto-login as David!)
  const [currentUser, setCurrentUser] = useState<string | null>(() => {
    return localStorage.getItem('david_study_user') || null;
  });
  const [isUserModalOpen, setIsUserModalOpen] = useState<boolean>(() => {
    return !localStorage.getItem('david_study_user');
  });

  const normalizeUserKey = (name: string | null) => {
    if (!name) return 'david';
    return name.trim().toLowerCase().replace(/[^a-z0-9_-]/g, '') || 'david';
  };

  // 1. Load disciplines on mount
  useEffect(() => {
    fetchDisciplines();
  }, []);

  // Reload user settings and progress whenever currentUser changes
  useEffect(() => {
    if (currentUser) {
      const uKey = normalizeUserKey(currentUser);
      fetchUserSettings(uKey);
      if (currentDiscipline) {
        fetchSegmentsAndProgress(currentDiscipline.id, currentUser);
      }
    }
  }, [currentUser]);

  const fetchUserSettings = async (uKey: string) => {
    try {
      const { data, error } = await supabase
        .from('study_user_settings')
        .select('*')
        .eq('id', uKey)
        .maybeSingle();

      if (data) {
        setUnlockAll(typeof data.unlock_all === 'boolean' ? data.unlock_all : false);
        setBestStreak(typeof data.sudden_death_best_streak === 'number' ? data.sudden_death_best_streak : 0);
        setCurrentStreak(typeof data.sudden_death_current_streak === 'number' ? data.sudden_death_current_streak : 0);
        setRandomExercisesCount(typeof data.random_exercises_completed === 'number' ? data.random_exercises_completed : 0);
        setTotalCorrect(typeof data.total_correct_answers === 'number' ? data.total_correct_answers : 0);
        setTotalWrong(typeof data.total_wrong_answers === 'number' ? data.total_wrong_answers : 0);
        setExamBestScore(typeof data.exam_best_score === 'number' ? Number(data.exam_best_score) : 0);
        setExamLastScore(typeof data.exam_last_score === 'number' ? Number(data.exam_last_score) : 0);
        setExamAttempts(typeof data.exam_attempts === 'number' ? data.exam_attempts : 0);
      } else {
        // Initialize default row for new user profile
        const newSettings = {
          id: uKey,
          username: uKey,
          unlock_all: false,
          active_discipline_id: currentDiscipline?.id || 'data-analysis',
          preparation_score: 0,
          sudden_death_best_streak: 0,
          sudden_death_current_streak: 0,
          random_exercises_completed: 0,
          total_correct_answers: 0,
          total_wrong_answers: 0,
          exam_best_score: 0,
          exam_last_score: 0,
          exam_attempts: 0,
          updated_at: new Date().toISOString()
        };
        setUnlockAll(false);
        setBestStreak(0);
        setCurrentStreak(0);
        setRandomExercisesCount(0);
        setTotalCorrect(0);
        setTotalWrong(0);
        setExamBestScore(0);
        setExamLastScore(0);
        setExamAttempts(0);
        await supabase.from('study_user_settings').upsert(newSettings);
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
    fetchSegmentsAndProgress(currentDiscipline.id, currentUser);
  }, [currentDiscipline]);

  const fetchSegmentsAndProgress = async (disciplineId: string, uName?: string | null) => {
    setLoading(true);
    const uKey = normalizeUserKey(uName !== undefined ? uName : currentUser);
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
        .eq('username', uKey)
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

  // 3. Load segment quiz questions (pool_type = 'quiz'), flashcards, and workbook exercises
  useEffect(() => {
    if (!currentSegment) return;
    fetchSegmentDetails(currentSegment.id);

    const prog = progressMap[currentSegment.id];
    if (prog?.completed) {
      setActivePhase('text');
    } else if (prog?.workbook_passed) {
      setActivePhase('flashcards');
    } else if (prog?.quiz_passed) {
      setActivePhase('workbook');
    } else if (prog?.text_completed) {
      setActivePhase('quiz');
    } else {
      setActivePhase('text');
    }
  }, [currentSegment?.id]);

  const fetchSegmentDetails = async (segmentId: string) => {
    try {
      const [
        { data: qData, error: qError },
        { data: fcData, error: fcError },
        { data: wbData, error: wbError }
      ] = await Promise.all([
        supabase
          .from('study_questions')
          .select('*')
          .eq('segment_id', segmentId)
          .eq('pool_type', 'quiz')
          .order('order_index', { ascending: true }),
        supabase
          .from('study_flashcards')
          .select('*')
          .eq('segment_id', segmentId)
          .order('order_index', { ascending: true }),
        supabase
          .from('study_workbook_exercises')
          .select('*')
          .eq('segment_id', segmentId)
          .order('order_index', { ascending: true })
      ]);

      if (qError) {
        console.error('Error fetching quiz questions:', qError);
      } else {
        setQuestions(qData || []);
      }

      if (fcError) {
        console.error('Error fetching flashcards:', fcError);
      } else {
        setFlashcards(fcData || []);
      }

      if (wbError) {
        console.error('Error fetching workbook exercises:', wbError);
      } else {
        setWorkbookExercises(wbData || []);
      }
    } catch (err) {
      console.error('Error loading segment details:', err);
    }
  };

  // Strictly filter questions, flashcards, and workbook exercises for the currently selected segment
  // to prevent stale data bleed-through when transitioning between levels
  const currentSegmentQuestions = useMemo(() => {
    if (!currentSegment) return [];
    return questions.filter(q => q.segment_id === currentSegment.id);
  }, [questions, currentSegment?.id]);

  const currentSegmentFlashcards = useMemo(() => {
    if (!currentSegment) return [];
    return flashcards.filter(f => f.segment_id === currentSegment.id);
  }, [flashcards, currentSegment?.id]);

  const currentSegmentWorkbookExercises = useMemo(() => {
    if (!currentSegment) return [];
    return workbookExercises.filter(wb => wb.segment_id === currentSegment.id);
  }, [workbookExercises, currentSegment?.id]);

  // Progress Update in Supabase
  const updateProgress = async (updates: Partial<SegmentProgress>) => {
    if (!currentDiscipline || !currentSegment) return;
    const uKey = normalizeUserKey(currentUser);

    const progressId = `prog_${uKey}_${currentDiscipline.id}_${currentSegment.id}`;
    const existing = progressMap[currentSegment.id] || {
      id: progressId,
      username: uKey,
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
      username: uKey,
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
    const uKey = normalizeUserKey(currentUser);
    setUnlockAll(nextVal);
    try {
      await supabase
        .from('study_user_settings')
        .upsert({
          id: uKey,
          username: uKey,
          unlock_all: nextVal,
          updated_at: new Date().toISOString()
        });
    } catch (err) {
      console.error('Failed to persist unlock_all setting to Supabase:', err);
    }
  };

  const handleDoubleClickSegment = async (seg: Segment) => {
    if (!currentDiscipline) return;
    const uKey = normalizeUserKey(currentUser);
    const progressId = `prog_${uKey}_${currentDiscipline.id}_${seg.id}`;
    const currentProg = progressMap[seg.id] || {
      id: progressId,
      username: uKey,
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
      username: uKey,
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
    setActiveReferenceSource(null);
    setActiveReferenceItemNumber(null);
    setActivePhase('quiz');
    window.scrollTo({ top: 80, behavior: 'smooth' });
  };

  const handleGoToTextFromQuiz = (anchor?: string, qNum?: number) => {
    setHighlightedAnchor(anchor || null);
    setActiveReferenceSource('quiz');
    setActiveReferenceItemNumber(qNum || null);
    setActivePhase('text');
  };

  const handleGoToTextFromFlashcards = (anchor?: string, cardNum?: number) => {
    setHighlightedAnchor(anchor || null);
    setActiveReferenceSource('flashcards');
    setActiveReferenceItemNumber(cardNum || null);
    setActivePhase('text');
  };

  const handleGoToTextFromWorkbook = (anchor?: string, exerciseNum?: number) => {
    setHighlightedAnchor(anchor || null);
    setActiveReferenceSource('workbook');
    setActiveReferenceItemNumber(exerciseNum || null);
    setActivePhase('text');
  };

  const handleReturnFromText = () => {
    const returnTarget = activeReferenceSource || 'quiz';
    setHighlightedAnchor(null);
    setActiveReferenceSource(null);
    setActiveReferenceItemNumber(null);
    setActivePhase(returnTarget);
  };

  const handlePassQuiz = async (score: number) => {
    const existingAttempts = progressMap[currentSegment?.id || '']?.quiz_attempts || 0;
    await updateProgress({
      quiz_passed: true,
      quiz_score: score,
      quiz_attempts: existingAttempts + 1
    });
  };

  const handleProceedToWorkbook = () => {
    setActivePhase('workbook');
    window.scrollTo({ top: 80, behavior: 'smooth' });
  };

  const handlePassWorkbook = async () => {
    await updateProgress({
      workbook_passed: true
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

  // Exercise Zone Stats Handler
  const handleUpdateExerciseStats = async (correct: boolean, isSuddenDeath: boolean, streak: number) => {
    const uKey = normalizeUserKey(currentUser);
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
      bestStreak: nextBestStreak,
      examBestScore
    });

    try {
      await supabase.from('study_user_settings').upsert({
        id: uKey,
        username: uKey,
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

  // 50-Minute Comprehensive Exam Score Handler
  const handleUpdateExamScore = async (scorePercent: number, correctCount: number, totalCount: number) => {
    const uKey = normalizeUserKey(currentUser);
    const nextBest = Math.max(examBestScore, scorePercent);
    const nextAttempts = examAttempts + 1;
    const nextTotalCorrect = totalCorrect + correctCount;
    const nextTotalWrong = totalWrong + (totalCount - correctCount);

    setExamBestScore(nextBest);
    setExamLastScore(scorePercent);
    setExamAttempts(nextAttempts);
    setTotalCorrect(nextTotalCorrect);
    setTotalWrong(nextTotalWrong);

    const nextPrepScore = calculatePreparationScore({
      totalSegments: segments.length,
      progressMap,
      randomExercisesCount,
      bestStreak,
      examBestScore: nextBest
    });

    try {
      await supabase.from('study_user_settings').upsert({
        id: uKey,
        username: uKey,
        preparation_score: nextPrepScore,
        exam_best_score: nextBest,
        exam_last_score: scorePercent,
        exam_attempts: nextAttempts,
        total_correct_answers: nextTotalCorrect,
        total_wrong_answers: nextTotalWrong,
        updated_at: new Date().toISOString()
      });
    } catch (err) {
      console.error('Failed to sync exam stats:', err);
    }
  };

  const handleLoginUser = (name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    localStorage.setItem('david_study_user', trimmed);
    setCurrentUser(trimmed);
    setIsUserModalOpen(false);
  };

  const handleLogoutUser = () => {
    localStorage.removeItem('david_study_user');
    setCurrentUser(null);
    setIsUserModalOpen(true);
  };

  // Preparation Score Calculation
  const preparationScore = calculatePreparationScore({
    totalSegments: segments.length,
    progressMap,
    randomExercisesCount,
    bestStreak,
    examBestScore
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
        currentUser={currentUser}
        onOpenUserModal={() => setIsUserModalOpen(true)}
      />

      {/* Main Content Area */}
      <main style={{ flex: 1, maxWidth: '960px', width: '100%', margin: '0 auto', padding: '0.85rem clamp(0.5rem, 2vw, 1rem) 5.5rem' }}>
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
              setScratchpadQuestion(q || null);
              setIsScratchpadOpen(true);
            }}
            bestExamScore={examBestScore}
            lastExamScore={examLastScore}
            examAttempts={examAttempts}
            onCompleteExam={handleUpdateExamScore}
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
                  padding: '0.3rem',
                  gap: '0.25rem',
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
                      gap: '0.35rem',
                      padding: '0.48rem 0.4rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: activePhase === 'text' ? '#fef3c7' : 'transparent',
                      color: activePhase === 'text' ? '#78350f' : '#78716c',
                      fontWeight: activePhase === 'text' ? 800 : 600,
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      transition: 'all 0.12s ease'
                    }}
                  >
                    <BookOpen size={14} />
                    <span className="desktop-only">1. Text Guide</span>
                    <span className="mobile-only">1. Text</span>
                    {currentSegmentProgress?.text_completed && <CheckCircle2 size={13} color="#15803d" />}
                  </button>

                  <ChevronRight size={14} color="#d6cebf" className="hide-on-mobile" />

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
                      gap: '0.35rem',
                      padding: '0.48rem 0.4rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: activePhase === 'quiz' ? '#fef3c7' : 'transparent',
                      color: activePhase === 'quiz'
                        ? '#78350f'
                        : (currentSegmentProgress?.text_completed || unlockAll)
                        ? '#78716c'
                        : '#c7c2b6',
                      fontWeight: activePhase === 'quiz' ? 800 : 600,
                      fontSize: '0.8rem',
                      cursor: (currentSegmentProgress?.text_completed || unlockAll) ? 'pointer' : 'not-allowed',
                      transition: 'all 0.12s ease'
                    }}
                  >
                    <HelpCircle size={14} />
                    <span className="desktop-only">2. Quiz (12 Qs)</span>
                    <span className="mobile-only">2. Quiz</span>
                    {currentSegmentProgress?.quiz_passed && <CheckCircle2 size={13} color="#15803d" />}
                  </button>

                  <ChevronRight size={14} color="#d6cebf" className="hide-on-mobile" />

                  {/* Phase 3 Tab */}
                  <button
                    onClick={() => {
                      if (currentSegmentProgress?.quiz_passed || unlockAll) {
                        setActivePhase('workbook');
                      } else {
                        alert('Mastery rule: Score 12/12 on the Quiz to unlock Workbook Exercises.');
                      }
                    }}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.35rem',
                      padding: '0.48rem 0.4rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: activePhase === 'workbook' ? '#fef3c7' : 'transparent',
                      color: activePhase === 'workbook'
                        ? '#78350f'
                        : (currentSegmentProgress?.quiz_passed || unlockAll)
                        ? '#78716c'
                        : '#c7c2b6',
                      fontWeight: activePhase === 'workbook' ? 800 : 600,
                      fontSize: '0.8rem',
                      cursor: (currentSegmentProgress?.quiz_passed || unlockAll) ? 'pointer' : 'not-allowed',
                      transition: 'all 0.12s ease'
                    }}
                  >
                    <Edit3 size={14} />
                    <span className="desktop-only">3. Workbook</span>
                    <span className="mobile-only">3. Work</span>
                    {currentSegmentProgress?.workbook_passed && <CheckCircle2 size={13} color="#15803d" />}
                  </button>

                  <ChevronRight size={14} color="#d6cebf" className="hide-on-mobile" />

                  {/* Phase 4 Tab */}
                  <button
                    onClick={() => {
                      if (currentSegmentProgress?.workbook_passed || (currentSegmentProgress?.quiz_passed && currentSegmentWorkbookExercises.length === 0) || unlockAll) {
                        setActivePhase('flashcards');
                      } else {
                        alert('Mastery rule: Complete Workbook Exercises (or Quiz) to unlock Flashcards.');
                      }
                    }}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.35rem',
                      padding: '0.48rem 0.4rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: activePhase === 'flashcards' ? '#fef3c7' : 'transparent',
                      color: activePhase === 'flashcards'
                        ? '#78350f'
                        : (currentSegmentProgress?.workbook_passed || (currentSegmentProgress?.quiz_passed && currentSegmentWorkbookExercises.length === 0) || unlockAll)
                        ? '#78716c'
                        : '#c7c2b6',
                      fontWeight: activePhase === 'flashcards' ? 800 : 600,
                      fontSize: '0.8rem',
                      cursor: (currentSegmentProgress?.workbook_passed || (currentSegmentProgress?.quiz_passed && currentSegmentWorkbookExercises.length === 0) || unlockAll) ? 'pointer' : 'not-allowed',
                      transition: 'all 0.12s ease'
                    }}
                  >
                    <Layers size={14} />
                    <span className="desktop-only">4. Flashcards</span>
                    <span className="mobile-only">4. Cards</span>
                    {currentSegmentProgress?.completed && <CheckCircle2 size={13} color="#15803d" />}
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
                    activeQuestionNumber={activeReferenceItemNumber}
                    activeReferenceSource={activeReferenceSource}
                    activeItemNumber={activeReferenceItemNumber}
                    onReturn={handleReturnFromText}
                    onReturnToQuiz={handleReturnFromText}
                  />
                </div>

                <div style={{ display: activePhase === 'quiz' ? 'block' : 'none' }}>
                  <QuizPhase
                    key={`quiz-${currentSegment.id}`}
                    questions={currentSegmentQuestions}
                    segmentTitle={currentSegment.title}
                    isAlreadyPassed={!!currentSegmentProgress?.quiz_passed}
                    onPassQuiz={handlePassQuiz}
                    proceedButtonLabel={currentSegmentWorkbookExercises.length > 0 ? 'Proceed to Phase 3: Workbook' : 'Proceed to Phase 4: Flashcards'}
                    onProceedToFlashcards={() => {
                      if (currentSegmentWorkbookExercises.length > 0) {
                        setActivePhase('workbook');
                      } else {
                        setActivePhase('flashcards');
                      }
                      window.scrollTo({ top: 80, behavior: 'smooth' });
                    }}
                    onGoToText={handleGoToTextFromQuiz}
                    onOpenScratchpad={(q) => {
                      setScratchpadQuestion(q || currentSegmentQuestions[0] || null);
                      setIsScratchpadOpen(true);
                    }}
                  />
                </div>

                <div style={{ display: activePhase === 'workbook' ? 'block' : 'none' }}>
                  <WorkbookPhase
                    key={`workbook-${currentSegment.id}`}
                    exercises={currentSegmentWorkbookExercises}
                    segmentId={currentSegment.id}
                    currentUser={currentUser}
                    segmentTitle={currentSegment.title}
                    isAlreadyPassed={!!currentSegmentProgress?.workbook_passed}
                    onPassWorkbook={handlePassWorkbook}
                    onProceedToFlashcards={handleProceedToFlashcards}
                    onGoToText={handleGoToTextFromWorkbook}
                    onOpenScratchpad={(prompt) => {
                      const pseudoQ: Question = {
                        id: `wb_${currentSegment.id}`,
                        segment_id: currentSegment.id,
                        order_index: 1,
                        question: prompt || 'Workbook Exercise',
                        options: [],
                        correct_option_id: '',
                        explanation: '',
                        section_reference: currentSegment.title
                      };
                      setScratchpadQuestion(pseudoQ);
                      setIsScratchpadOpen(true);
                    }}
                  />
                </div>

                <div style={{ display: activePhase === 'flashcards' ? 'block' : 'none' }}>
                  <FlashcardsPhase
                    key={`flashcards-${currentSegment.id}`}
                    flashcards={currentSegmentFlashcards}
                    segmentId={currentSegment.id}
                    currentUser={currentUser}
                    segmentTitle={currentSegment.title}
                    isAlreadyCompleted={!!currentSegmentProgress?.flashcards_passed}
                    onCompleteSegment={handleCompleteSegment}
                    onGoToNextSegment={handleGoToNextSegment}
                    hasNextSegment={hasNextSegment}
                    onGoToText={handleGoToTextFromFlashcards}
                  />
                </div>
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
          bottom: 'max(16px, env(safe-area-inset-bottom, 16px))',
          right: '16px',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          backgroundColor: '#78350f',
          color: '#ffffff',
          border: '2px solid #fef3c7',
          boxShadow: '0 6px 20px rgba(120, 53, 15, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 90,
          transition: 'transform 0.15s ease'
        }}
        aria-label="Open Scratchpad / Notes"
      >
        <Edit3 size={20} />
      </button>

      {/* Full-Screen Scratchpad Modal (Apple Pencil & Mouse Canvas) */}
      <ScratchpadModal
        isOpen={isScratchpadOpen}
        onClose={() => setIsScratchpadOpen(false)}
        activeQuestion={scratchpadQuestion}
      />

      {/* User Login & Profile Switcher Modal (Per-Device & Per-Person Isolated Data) */}
      <UserLoginModal
        isOpen={!currentUser || isUserModalOpen}
        currentUser={currentUser}
        canClose={Boolean(currentUser)}
        onClose={() => setIsUserModalOpen(false)}
        onLogin={handleLoginUser}
        onLogout={handleLogoutUser}
      />
    </div>
  );
};
