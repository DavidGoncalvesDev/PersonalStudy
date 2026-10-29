import { createClient } from '@supabase/supabase-js';
import { practicePart1 } from './practice-questions-part1.js';
import { practicePart2 } from './practice-questions-part2.js';
import { practicePart3 } from './practice-questions-part3.js';
import { practicePart4 } from './practice-questions-part4.js';

const SUPABASE_URL = 'https://eurqqiebokwcrrhfbihg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cnFxaWVib2t3Y3JyaGZiaWhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNDA0MzIsImV4cCI6MjEwNzcxNjQzMn0.UrhclnTabK3YEJZzroYeDmO4D4pij59IWCXyWZ9ruxs';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const allPractice = [
  ...practicePart1,
  ...practicePart2,
  ...practicePart3,
  ...practicePart4
];

async function seedPractice() {
  console.log(`Starting seed of ${allPractice.length} Practice & Sudden Death questions...`);

  // Verify all have 6 options and correct_option
  let invalid = 0;
  allPractice.forEach((q, idx) => {
    if (!q.options || q.options.length !== 6) {
      console.error(`Question ${q.id} at index ${idx} has ${q.options ? q.options.length : 0} options!`);
      invalid++;
    }
    const optionIds = (q.options || []).map(o => o.id);
    if (!optionIds.includes(q.correct_option)) {
      console.error(`Question ${q.id} correct_option ${q.correct_option} not in options!`);
      invalid++;
    }
  });

  if (invalid > 0) {
    console.error(`Aborting: found ${invalid} question structure errors.`);
    process.exit(1);
  }

  // Delete existing practice questions
  console.log('Cleaning up existing practice questions...');
  await supabase
    .from('study_questions')
    .delete()
    .eq('pool_type', 'practice');

  // Insert in batches of 24
  const batchSize = 24;
  for (let i = 0; i < allPractice.length; i += batchSize) {
    const batch = allPractice.slice(i, i + batchSize);
    const { error } = await supabase.from('study_questions').insert(batch);
    if (error) {
      console.error(`Error inserting batch starting at ${i}:`, error);
      process.exit(1);
    }
    console.log(`✓ Inserted batch ${Math.floor(i / batchSize) + 1} of ${Math.ceil(allPractice.length / batchSize)}`);
  }

  console.log(`🎉 Successfully seeded ${allPractice.length} practice questions across all 8 learning units!`);
}

seedPractice().then(() => {
  process.exit(0);
}).catch(err => {
  console.error('Fatal practice seed error:', err);
  process.exit(1);
});
