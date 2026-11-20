import { financialAnalysisSeed } from './financial-analysis-content.js';

const questions = financialAnalysisSeed.questions;
const segs = financialAnalysisSeed.segments;

console.log('=== SEMANTIC AUDIT: QUESTION TO TEXT GUIDE ANCHOR MATCH ===\n');

let totalAnalyzed = 0;
let semanticMismatches = [];

segs.forEach((s, idx) => {
  const segQ = questions.filter(q => q.segment_id === s.id);
  const headings = [...s.summary_markdown.matchAll(/^(#{2,3})\s+(.+)$/gm)].map(m => ({
    level: m[1],
    title: m[2],
    slug: m[2].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  }));

  segQ.forEach((q, i) => {
    totalAnalyzed++;
    // Get target heading
    const targetHeading = headings.find(h => h.slug === q.section_anchor);
    
    // Check if the question text or answer text is conceptually aligned with the target heading
    // or if another heading is obviously much better
    const targetTitle = targetHeading ? targetHeading.title : 'MISSING';
    
    // Find best matching heading by simple keyword overlap
    const qWords = (q.question + ' ' + q.options.find(o => o.id === q.correct_option).text).toLowerCase();
    
    const scores = headings.map(h => {
      const hWords = h.title.toLowerCase().split(/\s+/).filter(w => w.length > 3);
      let matchCount = 0;
      hWords.forEach(w => {
        if (qWords.includes(w)) matchCount++;
      });
      return { heading: h, score: matchCount };
    });
    
    scores.sort((a, b) => b.score - a.score);
    const bestHeading = scores[0];
    
    if (bestHeading && bestHeading.score > 0 && bestHeading.heading.slug !== q.section_anchor) {
      semanticMismatches.push({
        segment: s.title,
        qId: q.id,
        question: q.question,
        assignedAnchor: q.section_anchor,
        assignedHeading: targetTitle,
        suggestedAnchor: bestHeading.heading.slug,
        suggestedHeading: bestHeading.heading.title
      });
    }
  });
});

console.log(`Analyzed ${totalAnalyzed} questions.`);
console.log(`Found ${semanticMismatches.length} obvious semantic heading mismatches:\n`);

semanticMismatches.forEach(m => {
  console.log(`[${m.segment}] Q: ${m.question}`);
  console.log(`   Assigned: #${m.assignedAnchor} ("${m.assignedHeading}")`);
  console.log(`   Better:   #${m.suggestedAnchor} ("${m.suggestedHeading}")\n`);
});
