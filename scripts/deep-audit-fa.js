import { financialAnalysisSeed } from './financial-analysis-content.js';

const questions = financialAnalysisSeed.questions;
const segs = financialAnalysisSeed.segments;

console.log('=== AUDITING QUESTIONS, ANCHORS, AND DISTRACTORS ===\n');

segs.forEach((s, idx) => {
  console.log(`\n======================================================`);
  console.log(`SEGMENT ${idx + 1}: ${s.title} (${s.id})`);
  console.log(`======================================================`);
  
  const segQ = questions.filter(q => q.segment_id === s.id);
  
  segQ.forEach((q, qIdx) => {
    console.log(`\nQ${qIdx + 1} [id: ${q.id}]: ${q.question}`);
    console.log(`  Assigned Anchor: #${q.section_anchor} (Ref: ${q.section_reference})`);
    
    // Check if the answer concept actually appears in the text section pointed by the anchor
    const correctOpt = q.options.find(o => o.id === q.correct_option);
    console.log(`  Correct [${q.correct_option.toUpperCase()}]: ${correctOpt.text.slice(0, 80)}...`);
    
    // Check distractors: are they identical to other questions' answers?
    const distractorTexts = q.options.filter(o => o.id !== q.correct_option).map(o => o.text);
    const otherAnswers = segQ.filter(oq => oq.id !== q.id).map(oq => oq.options.find(o => o.id === oq.correct_option).text);
    
    const overlapCount = distractorTexts.filter(dt => otherAnswers.some(oa => dt.startsWith(oa.slice(0, 30)))).length;
    console.log(`  Distractor recycling: ${overlapCount}/5 distractors match other question answers directly.`);
  });
});
