import { createClient } from '@supabase/supabase-js';
import { discipline, segments } from './data-content.js';
import { questions } from './questions-data.js';
import { flashcards } from './flashcards-data.js';

const SUPABASE_URL = 'https://eurqqiebokwcrrhfbihg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cnFxaWVib2t3Y3JyaGZiaWhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNDA0MzIsImV4cCI6MjEwNzcxNjQzMn0.UrhclnTabK3YEJZzroYeDmO4D4pij59IWCXyWZ9ruxs';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function seed() {
  console.log('Seeding Data Analysis into Supabase...');

  // 1. Discipline
  const { error: discError } = await supabase
    .from('study_disciplines')
    .upsert(discipline);
  if (discError) {
    console.error('Error inserting discipline:', discError);
    process.exit(1);
  }
  console.log('✓ Discipline inserted successfully');

  // 2. Segments
  for (const seg of segments) {
    const { error: segError } = await supabase
      .from('study_segments')
      .upsert(seg);
    if (segError) {
      console.error(`Error inserting segment ${seg.id}:`, segError);
      process.exit(1);
    }
  }
  console.log(`✓ ${segments.length} Segments inserted successfully`);

  // 3. Questions
  for (const q of questions) {
    const { error: qError } = await supabase
      .from('study_questions')
      .upsert(q);
    if (qError) {
      console.error(`Error inserting question ${q.id}:`, qError);
      process.exit(1);
    }
  }
  console.log(`✓ ${questions.length} Questions inserted successfully`);

  // 4. Flashcards
  for (const fc of flashcards) {
    const { error: fcError } = await supabase
      .from('study_flashcards')
      .upsert(fc);
    if (fcError) {
      console.error(`Error inserting flashcard ${fc.id}:`, fcError);
      process.exit(1);
    }
  }
  console.log(`✓ ${flashcards.length} Flashcards inserted successfully`);

  console.log('🎉 Seeding complete!');
}

seed().catch(err => {
  console.error('Fatal seed error:', err);
  process.exit(1);
});
