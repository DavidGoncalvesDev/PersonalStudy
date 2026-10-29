import { SegmentProgress } from '../types';

interface ScoreParams {
  totalSegments: number;
  progressMap: Record<string, SegmentProgress>;
  randomExercisesCount: number;
  bestStreak: number;
}

/**
 * Calculates the comprehensive Preparation Score (0% to 100%).
 * Rigorously calibrated so that 100% requires:
 * 1. 100% curriculum completion (50 pts)
 * 2. High first-attempt quiz accuracy without excessive retakes (25 pts)
 * 3. Consistent practice in the Exercise Zone (15 pts)
 * 4. A strong Sudden Death consecutive streak of 20+ (10 pts)
 */
export const calculatePreparationScore = ({
  totalSegments,
  progressMap,
  randomExercisesCount,
  bestStreak
}: ScoreParams): number => {
  if (totalSegments === 0) return 0;

  const progressList = Object.values(progressMap);

  // 1. Curriculum Completion Component (0 to 50 pts)
  const completedSegments = progressList.filter(p => p.completed).length;
  const curriculumScore = (completedSegments / totalSegments) * 50;

  // 2. Quiz First-Time Efficiency Component (0 to 25 pts)
  // Passing on 1st attempt = 100% credit per passed segment; repeats penalize score
  let accuracyPoints = 0;
  progressList.forEach(p => {
    if (p.quiz_passed) {
      const attempts = p.quiz_attempts || 1;
      const efficiencyMultiplier = Math.max(0.25, 1 / attempts);
      accuracyPoints += (25 / totalSegments) * efficiencyMultiplier;
    }
  });

  // 3. Random Practice Volume Component (0 to 15 pts)
  // Each correct random exercise awards +0.5 pts up to 30 exercises (15 pts max)
  const practiceScore = Math.min(15, (randomExercisesCount || 0) * 0.5);

  // 4. Sudden Death Streak Component (0 to 10 pts)
  // Streak 5 -> 2.5 pts, 10 -> 5 pts, 15 -> 7.5 pts, 20+ -> 10 pts
  const streakScore = Math.min(10, (bestStreak || 0) * 0.5);

  const rawTotal = curriculumScore + accuracyPoints + practiceScore + streakScore;
  return Math.min(100, Math.round(rawTotal));
};
