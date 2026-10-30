export interface Discipline {
  id: string;
  name: string;
  code?: string;
  description?: string;
  created_at?: string;
}

export interface Segment {
  id: string;
  discipline_id: string;
  order_index: number;
  title: string;
  subtitle?: string;
  summary_markdown: string;
  created_at?: string;
}

export interface QuestionOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  segment_id: string;
  order_index: number;
  difficulty: 'easy' | 'intermediate' | 'hard';
  question: string;
  options: QuestionOption[];
  correct_option: string;
  explanation: string;
  section_reference?: string;
  section_anchor?: string;
  pool_type?: 'quiz' | 'practice';
}

export interface Flashcard {
  id: string;
  segment_id: string;
  order_index: number;
  front: string;
  back: string;
  category?: string;
  section_reference?: string;
  section_anchor?: string;
}

export interface WorkbookExercise {
  id: string;
  segment_id: string;
  order_index: number;
  title: string;
  difficulty: 'intermediate' | 'hard' | 'exam';
  prompt_markdown: string;
  solution_markdown: string;
  section_reference?: string;
  section_anchor?: string;
  created_at?: string;
}

export interface WorkbookSubmission {
  id: string;
  username: string;
  exercise_id: string;
  segment_id: string;
  user_response: string;
  self_evaluated_correct: boolean | null;
  submitted_at?: string;
  updated_at?: string;
}

export interface SegmentProgress {
  id: string;
  username?: string;
  discipline_id: string;
  segment_id: string;
  text_completed: boolean;
  quiz_passed: boolean;
  quiz_score: number;
  quiz_attempts: number;
  workbook_passed?: boolean;
  flashcards_passed: boolean;
  completed: boolean;
  manually_unlocked?: boolean;
  updated_at?: string;
}

export interface UserSettings {
  id: string;
  username?: string;
  unlock_all: boolean;
  active_discipline_id?: string;
  preparation_score?: number;
  sudden_death_best_streak?: number;
  sudden_death_current_streak?: number;
  random_exercises_completed?: number;
  total_correct_answers?: number;
  total_wrong_answers?: number;
  exam_best_score?: number;
  exam_last_score?: number;
  exam_attempts?: number;
  updated_at?: string;
}
