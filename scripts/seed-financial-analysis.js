import { readFileSync } from 'node:fs';
import { createClient } from '@supabase/supabase-js';
import { financialAnalysisSeed } from './financial-analysis-content.js';

// Reuse the configured tracker project's public client settings without duplicating its key.
const clientConfig = readFileSync(new URL('../src/supabaseClient.ts', import.meta.url), 'utf8');
const supabaseUrl = clientConfig.match(/const SUPABASE_URL = '([^']+)'/)?.[1];
const anonKey = clientConfig.match(/const SUPABASE_ANON_KEY = '([^']+)'/)?.[1];
if (!supabaseUrl || !anonKey || !supabaseUrl.includes('eurqqiebokwcrrhfbihg')) {
  throw new Error('Tracker Supabase client configuration was not found or did not match the approved project.');
}
const supabase = createClient(supabaseUrl, anonKey);

async function upsertBatches(table, rows, batchSize = 50) {
  for (let offset = 0; offset < rows.length; offset += batchSize) {
    const { error } = await supabase.from(table).upsert(rows.slice(offset, offset + batchSize));
    if (error) throw new Error(`${table} batch ${offset}: ${error.message}`);
  }
  console.log(`${table}: ${rows.length} rows upserted`);
}

async function seed() {
  const payload = financialAnalysisSeed;
  const { error: disciplineError } = await supabase.from('study_disciplines').upsert(payload.discipline);
  if (disciplineError) throw disciplineError;
  console.log(`study_disciplines: ${payload.discipline.id} ready`);

  await upsertBatches('study_segments', payload.segments, 25);
  await upsertBatches('study_questions', payload.questions, 50);
  await upsertBatches('study_workbook_exercises', payload.workbookExercises, 25);
  await upsertBatches('study_flashcards', payload.flashcards, 50);
}

seed().catch((error) => {
  console.error('Financial Analysis seed failed:', error.message || error);
  process.exitCode = 1;
});
