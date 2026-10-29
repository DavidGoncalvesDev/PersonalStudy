import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import { Discipline, Segment, Question, Flashcard, SegmentProgress } from './types';
import { Header } from './components/Header';
import { SegmentSelector } from './components/SegmentSelector';
import { TextSummaryPhase } from './components/TextSummaryPhase';
import { QuizPhase } from './components/QuizPhase';
import { FlashcardsPhase } from './components/FlashcardsPhase';
import { BookOpen, HelpCircle, Layers, CheckCircle2, ChevronRight, Loader2 } from 'lucide-react';

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

  // 1. Load all disciplines on mount
  useEffect(() => {
    fetchDisciplines();
  }, []);

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
        // Default to data-analysis or first
        const defaultDisc = data.find(d => d.id === 'data-analysis') || data[0];
        setCurrentDiscipline(defaultDisc);
      }
    } finally {
      setLoading(false);
    }
  };

  // 2. When currentDiscipline changes, load its segments and progress
  useEffect(() => {
    if (!currentDiscipline) return;
    fetchSegmentsAndProgress(currentDiscipline.id);
  }, [currentDiscipline]);

  const fetchSegmentsAndProgress = async (disciplineId: string) => {
    setLoading(true);
    try {
      // Fetch segments
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

      // Fetch progress
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

  // 3. When currentSegment changes, load its questions and flashcards
  useEffect(() => {
    if (!currentSegment) return;
    fetchSegmentDetails(currentSegment.id);

    // Default active phase based on progress
    const prog = progressMap[currentSegment.id];
    if (prog?.completed) {
      setActivePhase('text'); // Review mode
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
      // Fetch 12 questions
      const { data: qData, error: qError } = await supabase
        .from('study_questions')
        .select('*')
        .eq('segment_id', segmentId)
        .order('order_index', { ascending: true });

      if (qError) {
        console.error('Error fetching questions:', qError);
      } else {
        setQuestions(qData || []);
      }

      // Fetch flashcards
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

  // Helper to update progress in Supabase and local state
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

    // Optimistic UI update
    setProgressMap(prev => ({
      ...prev,
      [currentSegment.id]: newProgress
    }));

    // Persist to Supabase
    try {
      await supabase
        .from('study_progress')
        .upsert(newProgress);
    } catch (err) {
      console.error('Failed to persist progress to Supabase:', err);
    }
  };

  // Phase Handlers
  const handleProceedToQuiz = async () => {
    await updateProgress({ text_completed: true });
    setActivePhase('quiz');
    window.scrollTo({ top: 380, behavior: 'smooth' });
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
    window.scrollTo({ top: 380, behavior: 'smooth' });
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

  // Calculate overall discipline mastery percentage
  const completedSegmentsCount = segments.filter(s => progressMap[s.id]?.completed).length;
  const completionPercentage = segments.length > 0
    ? Math.round((completedSegmentsCount / segments.length) * 100)
    : 0;

  const currentSegmentProgress = currentSegment ? progressMap[currentSegment.id] : undefined;
  const currentSegmentIdx = currentSegment ? segments.findIndex(s => s.id === currentSegment.id) : -1;
  const hasNextSegment = currentSegmentIdx !== -1 && currentSegmentIdx + 1 < segments.length;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8fafc' }}>
      {/* Top Header */}
      <Header
        disciplines={disciplines}
        currentDiscipline={currentDiscipline}
        onSelectDiscipline={(d) => setCurrentDiscipline(d)}
        onCreateDiscipline={handleCreateDiscipline}
        onDeleteDiscipline={handleDeleteDiscipline}
        completionPercentage={completionPercentage}
      />

      {/* Main Content Area */}
      <main style={{ flex: 1, maxWidth: '1200px', width: '100%', margin: '0 auto', padding: '1.75rem 1.5rem 4rem' }}>
        {loading && disciplines.length === 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '350px', gap: '1rem' }}>
            <Loader2 size={36} color="#4f46e5" className="animate-spin" />
            <p style={{ color: '#64748b', fontWeight: 600 }}>Connecting to Supabase and loading study guides...</p>
          </div>
        ) : !currentDiscipline ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
            <BookOpen size={48} color="#94a3b8" style={{ margin: '0 auto 1rem' }} />
            <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#1e293b' }}>No Disciplines Found</h2>
            <p style={{ color: '#64748b', maxWidth: '400px', margin: '0.5rem auto 1.5rem' }}>
              Create your first study discipline or upload slides to begin.
            </p>
          </div>
        ) : (
          <>
            {/* Discipline Overview & Global Progress Bar */}
            <div style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '1.5rem',
              marginBottom: '1.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>
                      {currentDiscipline.name}
                    </h1>
                    {currentDiscipline.code && (
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4f46e5', backgroundColor: '#eef2ff', padding: '0.15rem 0.5rem', borderRadius: '6px' }}>
                        {currentDiscipline.code}
                      </span>
                    )}
                  </div>
                  {currentDiscipline.description && (
                    <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.25rem' }}>
                      {currentDiscipline.description}
                    </p>
                  )}
                </div>

                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#64748b' }}>
                    Overall Course Progress
                  </span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: completionPercentage === 100 ? '#10b981' : '#4f46e5' }}>
                    {completionPercentage}%
                  </div>
                </div>
              </div>

              {/* Progress Bar Container */}
              <div style={{ width: '100%', height: '10px', backgroundColor: '#e2e8f0', borderRadius: '9999px', overflow: 'hidden' }}>
                <div style={{
                  width: `${completionPercentage}%`,
                  height: '100%',
                  backgroundColor: completionPercentage === 100 ? '#10b981' : '#4f46e5',
                  borderRadius: '9999px',
                  transition: 'width 0.4s ease'
                }} />
              </div>
            </div>

            {/* Segment Selector / Levels Navigation */}
            <SegmentSelector
              segments={segments}
              currentSegment={currentSegment}
              onSelectSegment={(seg) => setCurrentSegment(seg)}
              progressMap={progressMap}
              unlockAll={unlockAll}
              onToggleUnlockAll={() => setUnlockAll(!unlockAll)}
            />

            {/* Current Segment Workflow Phase Stepper */}
            {currentSegment && (
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '0.4rem',
                  gap: '0.5rem',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.02)'
                }}>
                  {/* Phase 1 Tab */}
                  <button
                    onClick={() => setActivePhase('text')}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      padding: '0.65rem 1rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: activePhase === 'text' ? '#eef2ff' : 'transparent',
                      color: activePhase === 'text' ? '#4f46e5' : '#475569',
                      fontWeight: activePhase === 'text' ? 700 : 600,
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <BookOpen size={16} />
                    <span>1. Text Summary</span>
                    {currentSegmentProgress?.text_completed && <CheckCircle2 size={15} color="#10b981" />}
                  </button>

                  <ChevronRight size={16} color="#cbd5e1" />

                  {/* Phase 2 Tab */}
                  <button
                    onClick={() => {
                      if (currentSegmentProgress?.text_completed || unlockAll) {
                        setActivePhase('quiz');
                      } else {
                        alert('Please read and mark the Text Summary as understood first.');
                      }
                    }}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      padding: '0.65rem 1rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: activePhase === 'quiz' ? '#eef2ff' : 'transparent',
                      color: activePhase === 'quiz' ? '#4f46e5' : (currentSegmentProgress?.text_completed || unlockAll) ? '#475569' : '#94a3b8',
                      fontWeight: activePhase === 'quiz' ? 700 : 600,
                      fontSize: '0.875rem',
                      cursor: (currentSegmentProgress?.text_completed || unlockAll) ? 'pointer' : 'not-allowed',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <HelpCircle size={16} />
                    <span>2. Level Quiz (12 Qs)</span>
                    {currentSegmentProgress?.quiz_passed && <CheckCircle2 size={15} color="#10b981" />}
                  </button>

                  <ChevronRight size={16} color="#cbd5e1" />

                  {/* Phase 3 Tab */}
                  <button
                    onClick={() => {
                      if (currentSegmentProgress?.quiz_passed || unlockAll) {
                        setActivePhase('flashcards');
                      } else {
                        alert('Mastery Required: You must pass the 12-question quiz (12/12) to unlock Flashcards.');
                      }
                    }}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      padding: '0.65rem 1rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: activePhase === 'flashcards' ? '#eef2ff' : 'transparent',
                      color: activePhase === 'flashcards' ? '#4f46e5' : (currentSegmentProgress?.quiz_passed || unlockAll) ? '#475569' : '#94a3b8',
                      fontWeight: activePhase === 'flashcards' ? 700 : 600,
                      fontSize: '0.875rem',
                      cursor: (currentSegmentProgress?.quiz_passed || unlockAll) ? 'pointer' : 'not-allowed',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <Layers size={16} />
                    <span>3. Flashcards</span>
                    {currentSegmentProgress?.flashcards_passed && <CheckCircle2 size={15} color="#10b981" />}
                  </button>
                </div>
              </div>
            )}

            {/* Render Active Phase */}
            {currentSegment && (
              <div>
                {activePhase === 'text' && (
                  <TextSummaryPhase
                    segment={currentSegment}
                    isCompleted={!!currentSegmentProgress?.text_completed}
                    onProceedToQuiz={handleProceedToQuiz}
                  />
                )}

                {activePhase === 'quiz' && (
                  <QuizPhase
                    questions={questions}
                    segmentTitle={currentSegment.title}
                    isAlreadyPassed={!!currentSegmentProgress?.quiz_passed}
                    onPassQuiz={handlePassQuiz}
                    onProceedToFlashcards={handleProceedToFlashcards}
                  />
                )}

                {activePhase === 'flashcards' && (
                  <FlashcardsPhase
                    flashcards={flashcards}
                    segmentTitle={currentSegment.title}
                    isAlreadyCompleted={!!currentSegmentProgress?.completed}
                    onCompleteSegment={handleCompleteSegment}
                    onGoToNextSegment={handleGoToNextSegment}
                    hasNextSegment={hasNextSegment}
                  />
                )}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};
