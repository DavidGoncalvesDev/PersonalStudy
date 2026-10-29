import { SegmentProgress } from '../types';

interface ScoreParams {
  totalSegments: number;
  progressMap: Record<string, SegmentProgress>;
  randomExercisesCount: number;
  bestStreak: number;
  examBestScore?: number;
}

/**
 * Calculates the comprehensive Preparation Score (0% to 100%).
 * Rigorously calibrated so that 100% requires:
 * 1. 100% curriculum completion (40 pts)
 * 2. High first-attempt quiz accuracy without excessive retakes (20 pts)
 * 3. Strong performance on the 50-minute Comprehensive Exam (20 pts)
 * 4. Consistent practice volume in the Exercise Zone (10 pts)
 * 5. A strong Sudden Death consecutive streak of 20+ (10 pts)
 */
export const calculatePreparationScore = ({
  totalSegments,
  progressMap,
  randomExercisesCount,
  bestStreak,
  examBestScore = 0
}: ScoreParams): number => {
  if (totalSegments === 0) return 0;

  const progressList = Object.values(progressMap);

  // 1. Curriculum Completion Component (0 to 40 pts)
  const completedSegments = progressList.filter(p => p.completed).length;
  const curriculumScore = (completedSegments / totalSegments) * 40;

  // 2. Quiz First-Time Efficiency Component (0 to 20 pts)
  // Passing on 1st attempt = 100% credit per passed segment; repeats penalize score
  let accuracyPoints = 0;
  progressList.forEach(p => {
    if (p.quiz_passed) {
      const attempts = p.quiz_attempts || 1;
      const efficiencyMultiplier = Math.max(0.25, 1 / attempts);
      accuracyPoints += (20 / totalSegments) * efficiencyMultiplier;
    }
  });

  // 3. Comprehensive 50-Minute Exam Performance (0 to 20 pts)
  // Normalized from percentage (0-100% -> 0-20 pts)
  const examScore = Math.min(20, (Math.max(0, examBestScore) / 100) * 20);

  // 4. Random Practice Volume Component (0 to 10 pts)
  // Each correct random exercise awards +0.5 pts up to 20 exercises (10 pts max)
  const practiceScore = Math.min(10, (randomExercisesCount || 0) * 0.5);

  // 5. Sudden Death Streak Component (0 to 10 pts)
  // Streak 5 -> 2.5 pts, 10 -> 5 pts, 15 -> 7.5 pts, 20+ -> 10 pts
  const streakScore = Math.min(10, (bestStreak || 0) * 0.5);

  const rawTotal = curriculumScore + accuracyPoints + examScore + practiceScore + streakScore;
  return Math.min(100, Math.round(rawTotal));
};
