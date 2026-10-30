import fs from 'fs';
import { createClient } from '@supabase/supabase-js';
import { level1Balanced, level2Balanced } from './balance-level-1-2.js';
import { level3Balanced, level4Balanced } from './balance-level-3-4.js';
import { level5Balanced, level6Balanced } from './balance-level-5-6.js';
import { level7Balanced, level8Balanced } from './balance-level-7-8.js';

const SUPABASE_URL = 'https://eurqqiebokwcrrhfbihg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cnFxaWVib2t3Y3JyaGZiaWhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNDA0MzIsImV4cCI6MjEwNzcxNjQzMn0.UrhclnTabK3YEJZzroYeDmO4D4pij59IWCXyWZ9ruxs';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const balancedLevels = [
  level1Balanced, level2Balanced,
  level3Balanced, level4Balanced,
  level5Balanced, level6Balanced,
  level7Balanced, level8Balanced
];

function formatOptions(balancedQ) {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
  const targetLetter = balancedQ.targetLetter.toLowerCase();
  const correctOpt = balancedQ.options.find(o => o.isCorrect);
  const distractors = balancedQ.options.filter(o => !o.isCorrect);

  const finalOptions = [];
  let distractorIdx = 0;

  for (const letter of letters) {
    if (letter === targetLetter) {
      finalOptions.push({
        id: letter,
        text: correctOpt.text
      });
    } else {
      finalOptions.push({
        id: letter,
        text: distractors[distractorIdx++].text
      });
    }
  }

  return {
    options: finalOptions,
    correct_option: targetLetter
  };
}

async function run() {
  console.log('--- Remaking and Balancing All 96 Quiz Questions (Clean & Grounded) ---');

  // Load Part 1 and Part 2 local seed files
  const p1Module = await import('./levels-data-part1.js');
  const p2Module = await import('./levels-data-part2.js');

  const p1Data = p1Module.levelsPart1;
  const p2Data = p2Module.levelsPart2;

  const allLevelsData = [...p1Data, ...p2Data];
  let dbUpdateCount = 0;

  for (let l = 0; l < 8; l++) {
    const segment = allLevelsData[l];
    const balancedQs = balancedLevels[l];
    console.log(`\nProcessing Segment ${l + 1}: ${segment.segment.id}`);

    for (let q = 0; q < 12; q++) {
      const originalQ = segment.questions[q];
      const balancedQ = balancedQs[q];

      const { options, correct_option } = formatOptions(balancedQ);

      // Update in-memory object
      originalQ.options = options;
      originalQ.correct_option = correct_option;

      // Update in Supabase
      const updateData = {
        question: originalQ.question,
        options,
        correct_option,
        explanation: originalQ.explanation,
        section_reference: originalQ.section_reference || null,
        section_anchor: originalQ.section_anchor || null
      };

      const { error } = await supabase
        .from('study_questions')
        .update(updateData)
        .match({ id: originalQ.id });

      if (error) {
        console.error(`Error updating DB for question ${originalQ.id}:`, error.message);
      } else {
        dbUpdateCount++;
      }
    }
  }

  // Save updated local files
  fs.writeFileSync(
    './scripts/levels-data-part1.js',
    `// Part 1: Levels 1 to 4 of Data Analysis curriculum\n\nexport const levelsPart1 = ${JSON.stringify(p1Data, null, 2)};\n`,
    'utf8'
  );
  console.log('Saved updated scripts/levels-data-part1.js');

  fs.writeFileSync(
    './scripts/levels-data-part2.js',
    `// Part 2: Levels 5 to 8 of Data Analysis curriculum\n\nexport const levelsPart2 = ${JSON.stringify(p2Data, null, 2)};\n`,
    'utf8'
  );
  console.log('Saved updated scripts/levels-data-part2.js');

  console.log(`\n--- Completed! ---`);
  console.log(`Successfully updated ${dbUpdateCount} / 96 questions in Supabase DB.`);
}

run();
