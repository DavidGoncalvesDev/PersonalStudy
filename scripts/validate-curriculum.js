import { createClient } from '@supabase/supabase-js';
import katex from 'katex';

const SUPABASE_URL = 'https://eurqqiebokwcrrhfbihg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cnFxaWVib2t3Y3JyaGZiaWhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNDA0MzIsImV4cCI6MjEwNzcxNjQzMn0.UrhclnTabK3YEJZzroYeDmO4D4pij59IWCXyWZ9ruxs';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function testKatex(text, context) {
  if (!text) return [];
  const errors = [];
  // Match inline math $...$ and block math $$...$$
  const mathRegex = /\$\$([\s\S]*?)\$\$|\$([^$\n\r]+?)\$/g;
  let match;
  while ((match = mathRegex.exec(text)) !== null) {
    const formula = match[1] || match[2];
    try {
      katex.renderToString(formula, { throwOnError: true, displayMode: !!match[1] });
    } catch (e) {
      errors.push(`[KaTeX Error in ${context}] Formula: "${formula}" -> ${e.message}`);
    }
  }
  return errors;
}

const FORBIDDEN_DISTRACTOR_PATTERNS = [
  /\ball of the above\b/i,
  /\bnone of the above\b/i,
  /\bboth [a-f] and [a-f]\b/i,
  /\ball (the )?answers are correct\b/i
];

async function validateDiscipline(disciplineId) {
  console.log(`\n======================================================`);
  console.log(`🔍 VALIDATING DISCIPLINE: ${disciplineId}`);
  console.log(`======================================================\n`);

  let totalQuestions = 0;
  let totalWorkbook = 0;
  let totalFlashcards = 0;
  let totalErrors = 0;
  let totalWarnings = 0;

  // 1. Fetch segments
  const { data: segments, error: segErr } = await supabase
    .from('study_segments')
    .select('*')
    .eq('discipline_id', disciplineId)
    .order('order_index');

  if (segErr || !segments || segments.length === 0) {
    console.error(`❌ Failed to fetch segments or no segments found for ${disciplineId}:`, segErr);
    return { totalErrors: 1, totalWarnings: 0 };
  }

  console.log(`Found ${segments.length} segments in ${disciplineId}.\n`);

  for (const seg of segments) {
    console.log(`------------------------------------------------------`);
    console.log(`📌 Segment ${seg.order_index}: ${seg.title || seg.name || seg.id} (id: ${seg.id})`);
    console.log(`------------------------------------------------------`);

    // Fetch quiz questions
    const { data: questions, error: qErr } = await supabase
      .from('study_questions')
      .select('*')
      .eq('segment_id', seg.id)
      .order('order_index');

    if (qErr) {
      console.error(`  ❌ Error fetching questions for segment ${seg.id}:`, qErr);
      totalErrors++;
      continue;
    }

    const qCount = questions ? questions.length : 0;
    totalQuestions += qCount;
    console.log(`  Quiz Questions: ${qCount}`);

    // Check Question count
    if (qCount !== 12 && qCount > 0) {
      console.warn(`  ⚠️ Warning: Expected 12 questions per LU, found ${qCount}.`);
      totalWarnings++;
    }

    // Check Option distribution
    const letterCounts = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 };
    let longestIsCorrectCount = 0;

    questions?.forEach((q, idx) => {
      const qNum = idx + 1;
      const target = (q.correct_option || '').toLowerCase();
      if (letterCounts[target] !== undefined) {
        letterCounts[target]++;
      } else {
        console.error(`  ❌ Q${qNum}: Invalid correct_option '${q.correct_option}'`);
        totalErrors++;
      }

      // Check options array
      if (!Array.isArray(q.options) || q.options.length === 0) {
        console.error(`  ❌ Q${qNum}: Options is not a valid array`);
        totalErrors++;
        return;
      }

      // Anti-verbosity check: is the correct option strictly the longest?
      const lengths = q.options.map(opt => ({
        id: (opt.id || '').toLowerCase(),
        len: (opt.text || '').length,
        text: opt.text || ''
      }));
      lengths.sort((x, y) => y.len - x.len);
      if (lengths[0] && lengths[0].id === target && lengths[0].len > (lengths[1]?.len || 0) + 15) {
        longestIsCorrectCount++;
      }

      // Distractor filler checks
      q.options.forEach(opt => {
        for (const pattern of FORBIDDEN_DISTRACTOR_PATTERNS) {
          if (pattern.test(opt.text)) {
            console.warn(`  ⚠️ Q${qNum}: Option (${opt.id}) contains forbidden robotic filler: "${opt.text}"`);
            totalWarnings++;
          }
        }
      });

      // KaTeX math syntax checks
      const qErrors = [
        ...testKatex(q.question, `Q${qNum} Question Text`),
        ...testKatex(q.explanation, `Q${qNum} Explanation`),
        ...q.options.flatMap(opt => testKatex(opt.text, `Q${qNum} Option ${opt.id}`))
      ];

      if (qErrors.length > 0) {
        qErrors.forEach(err => console.error(`    ❌ ${err}`));
        totalErrors += qErrors.length;
      }
    });

    if (qCount > 0) {
      console.log(`  Option Distribution: A:${letterCounts.a} B:${letterCounts.b} C:${letterCounts.c} D:${letterCounts.d} E:${letterCounts.e} F:${letterCounts.f}`);
      const isUniform = Object.values(letterCounts).every(cnt => cnt === 2);
      if (!isUniform && qCount === 12) {
        console.warn(`  ⚠️ Notice: Option distribution is not uniform (expected exactly 2 of each A-F).`);
        totalWarnings++;
      }

      const longestRatio = ((longestIsCorrectCount / qCount) * 100).toFixed(0);
      if (longestIsCorrectCount > 3) {
        console.warn(`  ⚠️ Longest Option Bias: Correct answer is significantly longest in ${longestIsCorrectCount}/${qCount} (${longestRatio}%) questions.`);
        totalWarnings++;
      }
    }

    // Check Workbook Exercises
    const { data: workbooks, error: wbErr } = await supabase
      .from('study_workbook_exercises')
      .select('*')
      .eq('segment_id', seg.id)
      .order('order_index');

    if (!wbErr && workbooks) {
      totalWorkbook += workbooks.length;
      console.log(`  Workbook Exercises: ${workbooks.length}`);
      workbooks.forEach((wb, wIdx) => {
        const wbErrors = [
          ...testKatex(wb.prompt_markdown, `WB${wIdx + 1} Prompt`),
          ...testKatex(wb.solution_markdown, `WB${wIdx + 1} Solution`)
        ];
        if (wbErrors.length > 0) {
          wbErrors.forEach(err => console.error(`    ❌ ${err}`));
          totalErrors += wbErrors.length;
        }
      });
    }

    // Check Flashcards
    const { data: cards, error: fcErr } = await supabase
      .from('study_flashcards')
      .select('*')
      .eq('segment_id', seg.id)
      .order('order_index');

    if (!fcErr && cards) {
      totalFlashcards += cards.length;
      console.log(`  Flashcards: ${cards.length}`);
      cards.forEach((fc, cIdx) => {
        const fcErrors = [
          ...testKatex(fc.front, `Card ${cIdx + 1} Front`),
          ...testKatex(fc.back, `Card ${cIdx + 1} Back`)
        ];
        if (fcErrors.length > 0) {
          fcErrors.forEach(err => console.error(`    ❌ ${err}`));
          totalErrors += fcErrors.length;
        }
      });
    }
  }

  console.log(`\n======================================================`);
  console.log(`📊 SUMMARY FOR ${disciplineId}:`);
  console.log(`Total Questions: ${totalQuestions} | Workbooks: ${totalWorkbook} | Flashcards: ${totalFlashcards}`);
  console.log(`Errors: ${totalErrors} | Warnings: ${totalWarnings}`);
  console.log(`======================================================\n`);

  return { totalErrors, totalWarnings };
}

async function run() {
  const targetDiscipline = process.argv[2];
  let disciplinesToTest = [];

  if (targetDiscipline) {
    disciplinesToTest = [targetDiscipline];
  } else {
    const { data: discs, error } = await supabase.from('study_disciplines').select('id');
    if (error || !discs) {
      console.error('Failed to fetch disciplines list:', error);
      process.exit(1);
    }
    disciplinesToTest = discs.map(d => d.id);
  }

  let globalErrors = 0;
  let globalWarnings = 0;

  for (const discId of disciplinesToTest) {
    const res = await validateDiscipline(discId);
    globalErrors += res.totalErrors;
    globalWarnings += res.totalWarnings;
  }

  if (globalErrors > 0) {
    console.error(`💥 VALIDATION FAILED with ${globalErrors} critical error(s) and ${globalWarnings} warning(s).`);
    process.exit(1);
  } else {
    console.log(`✅ ALL CHECKS PASSED with 0 critical errors (${globalWarnings} non-blocking warnings).`);
    process.exit(0);
  }
}

run();
