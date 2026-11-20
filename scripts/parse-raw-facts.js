import fs from 'fs';

const code = fs.readFileSync('scripts/financial-analysis-content.js', 'utf8');

// Let's extract s.facts arrays
// In financial-analysis-content.js, facts are:
// ['question', 'answer', 'explanation', 'anchor']

const factsRegex = /facts:\s*\[([\s\S]*?)\n\s*\]/g;
let match;
let segIndex = 0;

const segNames = [
  'fa-accounting-foundations',
  'fa-period-end-adjustments',
  'fa-balance-income-statements',
  'fa-cash-flow-integration',
  'fa-common-size-trends',
  'fa-liquidity-activity-ratios',
  'fa-debt-profitability-ratios',
  'fa-market-ratios-diagnosis',
  'fa-valuation-methods',
  'fa-wacc-discounting',
  'fa-dcf-terminal-value',
  'fa-equity-value-challenge'
];

while ((match = factsRegex.exec(code)) !== null) {
  const segId = segNames[segIndex++];
  const block = match[1];
  const items = block.split(/\],\s*\[/).map(s => s.replace(/^[\[\s]+|[\]\s]+$/g, ''));
  
  console.log(`\n=== Segment: ${segId} ===`);
  items.forEach((item, idx) => {
    // Parse strings
    const parts = item.match(/'([^'\\]*(?:\\.[^'\\]*)*)'/g);
    if (parts && parts.length >= 4) {
      const q = parts[0].slice(1, -1);
      const intendedAnchor = parts[3].slice(1, -1);
      console.log(`  Q${idx + 1}: Intended Anchor: #${intendedAnchor} | Question: ${q.slice(0, 40)}`);
    }
  });
}
