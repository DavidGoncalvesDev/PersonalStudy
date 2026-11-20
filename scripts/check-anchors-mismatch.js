import { financialAnalysisSeed } from './financial-analysis-content.js';
import fs from 'fs';

// Read financial-analysis-content.js to extract raw facts
const fileContent = fs.readFileSync('scripts/financial-analysis-content.js', 'utf8');

// The original author wrote explicit anchors in s.facts:
// e.g. ['What does the accrual principle determine?', '...', '...', 'core-accounting-principles']
// But then anchorsFor(s)[Math.floor(i/4)] clobbered it!

const questions = financialAnalysisSeed.questions;
const segs = financialAnalysisSeed.segments;

console.log('=== AUDIT: INTENDED ANCHORS VS CLOBBERED ASSIGNED ANCHORS ===\n');

let totalMismatches = 0;

segs.forEach((s, idx) => {
  const segQ = questions.filter(q => q.segment_id === s.id);
  console.log(`\nSegment ${idx + 1}: ${s.title}`);

  // Extract headings from summary_markdown
  const headings = [...s.summary_markdown.matchAll(/^###?\s+(.+)$/gm)].map(m => {
    return {
      title: m[1],
      slug: m[1].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    };
  });

  segQ.forEach((q, i) => {
    // Find fact intended anchor from source code
    // In s.facts, the 4th element is fact[3]
    // Let's inspect q.explanation or check how anchorsFor matched
    console.log(`  Q${i + 1}: ${q.question.slice(0, 45)}... -> assigned: #${q.section_anchor}`);
  });
});
