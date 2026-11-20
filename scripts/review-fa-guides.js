import { financialAnalysisSeed } from './financial-analysis-content.js';
import katex from 'katex';

console.log('======================================================');
console.log('🔍 IN-DEPTH AUDIT OF FINANCIAL ANALYSIS TEXT GUIDES');
console.log('======================================================\n');

const segs = financialAnalysisSeed.segments;
const questions = financialAnalysisSeed.questions;
const flashcards = financialAnalysisSeed.flashcards;
const workbooks = financialAnalysisSeed.workbookExercises;

let totalWords = 0;
let totalIssues = 0;

segs.forEach((s, idx) => {
  const text = s.summary_markdown;
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  totalWords += wordCount;

  console.log(`------------------------------------------------------`);
  console.log(`📌 Segment ${idx + 1}: ${s.title} (${s.id})`);
  console.log(`   Length: ${wordCount} words | ${text.length} chars | ${text.split('\n\n').length} paragraphs`);

  // Extract all headings and their generated slug anchors
  const headingMatches = [...text.matchAll(/^(#{2,3})\s+(.+)$/gm)];
  const existingAnchors = headingMatches.map(m =>
    m[2].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  );

  console.log(`   Headings (${headingMatches.length}):`);
  headingMatches.forEach(m => {
    const slug = m[2].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    console.log(`     ${m[1]} ${m[2]} -> #${slug}`);
  });

  // Check Anchors for Questions
  const segQuestions = questions.filter(q => q.segment_id === s.id);
  const brokenQAnchors = segQuestions.filter(q => !existingAnchors.includes(q.section_anchor));
  if (brokenQAnchors.length > 0) {
    console.log(`   ⚠️ Question Anchor Mismatches (${brokenQAnchors.length}):`);
    brokenQAnchors.forEach(q => {
      console.log(`      - Q ${q.id}: anchor "${q.section_anchor}" not found in headings!`);
    });
    totalIssues += brokenQAnchors.length;
  } else {
    console.log(`   ✅ All ${segQuestions.length} questions link to valid anchors.`);
  }

  // Check Anchors for Flashcards
  const segFlashcards = flashcards.filter(f => f.segment_id === s.id);
  const brokenFCAnchors = segFlashcards.filter(f => !existingAnchors.includes(f.section_anchor));
  if (brokenFCAnchors.length > 0) {
    console.log(`   ⚠️ Flashcard Anchor Mismatches (${brokenFCAnchors.length}):`);
    brokenFCAnchors.forEach(f => {
      console.log(`      - FC ${f.id}: anchor "${f.section_anchor}" not found in headings!`);
    });
    totalIssues += brokenFCAnchors.length;
  } else {
    console.log(`   ✅ All ${segFlashcards.length} flashcards link to valid anchors.`);
  }

  // Check Anchors for Workbooks
  const segWorkbooks = workbooks.filter(w => w.segment_id === s.id);
  const brokenWBAnchors = segWorkbooks.filter(w => !existingAnchors.includes(w.section_anchor));
  if (brokenWBAnchors.length > 0) {
    console.log(`   ⚠️ Workbook Anchor Mismatches (${brokenWBAnchors.length}):`);
    brokenWBAnchors.forEach(w => {
      console.log(`      - WB ${w.id}: anchor "${w.section_anchor}" not found in headings!`);
    });
    totalIssues += brokenWBAnchors.length;
  } else {
    console.log(`   ✅ All ${segWorkbooks.length} workbooks link to valid anchors.`);
  }

  // Check Raw Asterisks
  const rawAsterisks = text.match(/(?<!\*)\*(?!\*)/g);
  if (rawAsterisks) {
    console.log(`   ❌ Found ${rawAsterisks.length} raw single asterisks!`);
    totalIssues += rawAsterisks.length;
  }

  // Check Bold Double Asterisks
  const doubleAsterisks = text.match(/\*\*/g);
  if (doubleAsterisks) {
    console.log(`   ℹ️ Found ${doubleAsterisks.length / 2} bold markdown tags (**).`);
  }

  // Check KaTeX
  const inlineMath = [...text.matchAll(/\$([^\$\n]+)\$/g)].map(m => m[1]);
  const blockMath = [...text.matchAll(/\$\$([\s\S]*?)\$\$/g)].map(m => m[1]);

  let katexErrors = 0;
  [...inlineMath, ...blockMath].forEach(m => {
    try {
      katex.renderToString(m, { output: 'html', throwOnError: true });
    } catch (e) {
      console.log(`   ❌ KaTeX Error in "$${m}$": ${e.message}`);
      katexErrors++;
      totalIssues++;
    }
  });

  if (katexErrors === 0 && (inlineMath.length > 0 || blockMath.length > 0)) {
    console.log(`   ✅ KaTeX syntax: ${inlineMath.length} inline and ${blockMath.length} block formulas all valid.`);
  } else if (inlineMath.length === 0 && blockMath.length === 0) {
    console.log(`   ℹ️ No KaTeX formulas found in this text guide.`);
  }
});

console.log('\n======================================================');
console.log(`AUDIT COMPLETE: Total Words = ${totalWords}, Total Issues = ${totalIssues}`);
console.log('======================================================\n');
