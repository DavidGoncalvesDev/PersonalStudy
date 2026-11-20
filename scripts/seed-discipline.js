import { readFileSync, existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import { createClient } from '@supabase/supabase-js';
import { organizeMaterials, getMaterialsForDiscipline } from './organize-materials.js';

// Parse arguments
const targetFile = process.argv[2];
if (!targetFile) {
  console.error('❌ Usage: node scripts/seed-discipline.js <path-to-content-file.js>');
  console.error('Example: node scripts/seed-discipline.js scripts/financial-analysis-content.js');
  process.exit(1);
}

const resolvedPath = path.resolve(process.cwd(), targetFile);
if (!existsSync(resolvedPath)) {
  console.error(`❌ Content file does not exist: ${resolvedPath}`);
  process.exit(1);
}

// 1. Supabase credentials from src/supabaseClient.ts
const clientConfig = readFileSync(new URL('../src/supabaseClient.ts', import.meta.url), 'utf8');
const supabaseUrl = clientConfig.match(/const SUPABASE_URL = '([^']+)'/)?.[1];
const anonKey = clientConfig.match(/const SUPABASE_ANON_KEY = '([^']+)'/)?.[1];
if (!supabaseUrl || !anonKey || !supabaseUrl.includes('eurqqiebokwcrrhfbihg')) {
  throw new Error('❌ Tracker Supabase client configuration was not found or did not match the approved project.');
}
const supabase = createClient(supabaseUrl, anonKey);

async function upsertBatches(table, rows, batchSize = 50) {
  if (!rows || rows.length === 0) return;
  for (let offset = 0; offset < rows.length; offset += batchSize) {
    const chunk = rows.slice(offset, offset + batchSize);
    const { error } = await supabase.from(table).upsert(chunk);
    if (error) throw new Error(`${table} batch offset ${offset}: ${error.message}`);
  }
  console.log(`  ✓ ${table}: ${rows.length} rows upserted`);
}

async function run() {
  console.log(`\n======================================================`);
  console.log(`🌱 SEEDING DISCIPLINE FROM: ${targetFile}`);
  console.log(`======================================================\n`);

  const fileUrl = pathToFileURL(resolvedPath).href;
  const importedModule = await import(fileUrl);
  
  // Find the exported seed object
  const seedKey = Object.keys(importedModule).find(k => k.toLowerCase().includes('seed') || k.toLowerCase().includes('content'));
  const payload = seedKey ? importedModule[seedKey] : (importedModule.default || importedModule);

  if (!payload || !payload.discipline) {
    throw new Error('❌ Exported payload must contain a `discipline` definition object.');
  }

  console.log(`📚 Discipline: ${payload.discipline.name} (${payload.discipline.id})`);

  // Ensure materials are organized (pull from folder or auto-organize uploaded files)
  await organizeMaterials({ dryRun: false, targetDiscipline: payload.discipline.id });
  const materials = getMaterialsForDiscipline(payload.discipline.id);
  console.log(`\n📁 Course materials for ${payload.discipline.id} (${materials.length} files):`);
  materials.forEach(m => console.log(`   - ${m.filename}`));
  console.log(``);

  // 1. Upsert discipline
  const { error: discError } = await supabase.from('study_disciplines').upsert(payload.discipline);
  if (discError) throw discError;
  console.log(`  ✓ study_disciplines: ${payload.discipline.id} ready`);

  // 2. Upsert segments
  if (payload.segments && payload.segments.length > 0) {
    await upsertBatches('study_segments', payload.segments, 25);
  }

  // 3. Upsert questions
  if (payload.questions && payload.questions.length > 0) {
    await upsertBatches('study_questions', payload.questions, 50);
  }

  // 4. Upsert workbook exercises
  if (payload.workbookExercises && payload.workbookExercises.length > 0) {
    await upsertBatches('study_workbook_exercises', payload.workbookExercises, 25);
  }

  // 5. Upsert flashcards
  if (payload.flashcards && payload.flashcards.length > 0) {
    await upsertBatches('study_flashcards', payload.flashcards, 50);
  }

  console.log(`\n🎉 Discipline seeding completed successfully!`);
  console.log(`Next step: run 'node scripts/validate-curriculum.js' to verify all CI calibration checks.\n`);
}

run().catch(err => {
  console.error('\n❌ Seeding failed:', err.message || err);
  process.exit(1);
});
