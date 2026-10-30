import fs from 'fs';
import { mergedLevel4QuizQuestions, mergedLevel4Flashcards } from './merge-lu4-lu5.js';

async function updateLocalFiles() {
  console.log('Updating local seed files...');

  const p1Module = await import('./levels-data-part1.js');
  const p2Module = await import('./levels-data-part2.js');

  const p1 = p1Module.levelsPart1;
  const p2 = p2Module.levelsPart2;

  // 1. Update Level 4 in p1
  const mergeScript = await import('./merge-lu4-lu5.js');
  const { createClient } = await import('@supabase/supabase-js');
  const supabase = createClient('https://eurqqiebokwcrrhfbihg.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cnFxaWVib2t3Y3JyaGZiaWhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNDA0MzIsImV4cCI6MjEwNzcxNjQzMn0.UrhclnTabK3YEJZzroYeDmO4D4pij59IWCXyWZ9ruxs');
  
  const { data: seg4 } = await supabase.from('study_segments').select('*').eq('id', 'ch2-pca-analytical').single();

  p1[3] = {
    segment: seg4,
    questions: mergedLevel4QuizQuestions,
    flashcards: mergedLevel4Flashcards
  };

  fs.writeFileSync(
    './scripts/levels-data-part1.js',
    `// Part 1: Levels 1 to 4 of Data Analysis curriculum\n\nexport const levelsPart1 = ${JSON.stringify(p1, null, 2)};\n`,
    'utf8'
  );
  console.log('Saved updated scripts/levels-data-part1.js (4 levels)');

  // 2. Filter p2 to exclude ch2-pca-interpretation, update order_indices
  const newP2 = p2.filter(l => l.segment.id !== 'ch2-pca-interpretation');
  newP2[0].segment.order_index = 5; // ch3-fa-theory
  newP2[1].segment.order_index = 6; // ch3-fa-extraction
  newP2[2].segment.order_index = 7; // ch3-fa-rotation-evaluation

  fs.writeFileSync(
    './scripts/levels-data-part2.js',
    `// Part 2: Levels 5 to 7 of Data Analysis curriculum\n\nexport const levelsPart2 = ${JSON.stringify(newP2, null, 2)};\n`,
    'utf8'
  );
  console.log('Saved updated scripts/levels-data-part2.js (3 levels: 5, 6, 7)');
}

updateLocalFiles();
