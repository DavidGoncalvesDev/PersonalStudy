import { createClient } from '@supabase/supabase-js';
import { levelsPart1 } from './levels-data-part1.js';
import { levelsPart2 } from './levels-data-part2.js';

const SUPABASE_URL = 'https://eurqqiebokwcrrhfbihg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cnFxaWVib2t3Y3JyaGZiaWhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNDA0MzIsImV4cCI6MjEwNzcxNjQzMn0.UrhclnTabK3YEJZzroYeDmO4D4pij59IWCXyWZ9ruxs';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const allLevels = [...levelsPart1, ...levelsPart2];

async function seed() {
  console.log('--- Starting Granular Curriculum Seed (8 Levels) ---');

  // 1. Ensure Discipline exists
  const discipline = {
    id: 'data-analysis',
    name: 'Data Analysis',
    code: 'DA-2026',
    description: 'Multivariate data analysis: measurement scales, distances, Principal Components Analysis (PCA), and Exploratory Factor Analysis (FA).'
  };

  const { error: discError } = await supabase
    .from('study_disciplines')
    .upsert(discipline);

  if (discError) {
    console.error('Error inserting discipline:', discError);
    process.exit(1);
  }
  console.log('✓ Discipline verified:', discipline.name);

  // 2. Prepare Segments, Questions, and Flashcards
  const segments = allLevels.map(l => l.segment);
  const questions = allLevels.flatMap(l => l.questions);
  const flashcards = allLevels.flatMap(l => l.flashcards);

  console.log(`Payload summary: ${segments.length} segments, ${questions.length} questions, ${flashcards.length} flashcards.`);

  // 3. Clear old child rows for data-analysis to prevent foreign key or duplicate key issues
  const { data: existingSegments } = await supabase
    .from('study_segments')
    .select('id')
    .eq('discipline_id', 'data-analysis');

  if (existingSegments && existingSegments.length > 0) {
    const existingIds = existingSegments.map(s => s.id);
    console.log('Cleaning up existing data for segment IDs:', existingIds);

    await supabase.from('study_progress').delete().in('segment_id', existingIds);
    await supabase.from('study_questions').delete().in('segment_id', existingIds);
    await supabase.from('study_flashcards').delete().in('segment_id', existingIds);
    await supabase.from('study_segments').delete().eq('discipline_id', 'data-analysis');
  }

  // 4. Insert Segments
  for (const seg of segments) {
    const { error } = await supabase.from('study_segments').insert(seg);
    if (error) {
      console.error(`Error inserting segment ${seg.id}:`, error);
      process.exit(1);
    }
  }
  console.log(`✓ Inserted ${segments.length} segments.`);

  // 5. Insert Questions in batches of 24
  const batchSize = 24;
  for (let i = 0; i < questions.length; i += batchSize) {
    const batch = questions.slice(i, i + batchSize);
    const { error } = await supabase.from('study_questions').insert(batch);
    if (error) {
      console.error(`Error inserting questions batch ${i / batchSize}:`, error);
      process.exit(1);
    }
  }
  console.log(`✓ Inserted ${questions.length} questions.`);

  // 6. Insert Flashcards in batches of 24
  for (let i = 0; i < flashcards.length; i += batchSize) {
    const batch = flashcards.slice(i, i + batchSize);
    const { error } = await supabase.from('study_flashcards').insert(batch);
    if (error) {
      console.error(`Error inserting flashcards batch ${i / batchSize}:`, error);
      process.exit(1);
    }
  }
  console.log(`✓ Inserted ${flashcards.length} flashcards.`);

  console.log('🎉 Successfully seeded 8 granular study levels into Supabase!');
}

seed().then(() => {
  console.log('Done!');
  process.exit(0);
}).catch(err => {
  console.error('Fatal seed failure:', err);
  process.exit(1);
});
