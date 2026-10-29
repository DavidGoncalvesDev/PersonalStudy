import { levelsPart1 } from './levels-data-part1.js';
import { levelsPart2 } from './levels-data-part2.js';
import { l1Summary, l2Summary, l3Summary, l4Summary } from './curriculum-text-part1.js';
import { l5Summary, l6Summary, l7Summary, l8Summary } from './curriculum-text-part2.js';
import fs from 'fs';

levelsPart1[0].segment.summary_markdown = l1Summary;
levelsPart1[1].segment.summary_markdown = l2Summary;
levelsPart1[2].segment.summary_markdown = l3Summary;
levelsPart1[3].segment.summary_markdown = l4Summary;

levelsPart2[0].segment.summary_markdown = l5Summary;
levelsPart2[1].segment.summary_markdown = l6Summary;
levelsPart2[2].segment.summary_markdown = l7Summary;
levelsPart2[3].segment.summary_markdown = l8Summary;

// Serialize back to file cleanly
fs.writeFileSync(
  'scripts/levels-data-part1.js',
  `// Part 1: Levels 1 to 4 of Data Analysis curriculum\n\nexport const levelsPart1 = ${JSON.stringify(levelsPart1, null, 2)};\n`,
  'utf8'
);

fs.writeFileSync(
  'scripts/levels-data-part2.js',
  `// Part 2: Levels 5 to 8 of Data Analysis curriculum\n\nexport const levelsPart2 = ${JSON.stringify(levelsPart2, null, 2)};\n`,
  'utf8'
);

console.log('✓ Successfully wrote serialized levels with clean narrative text to both files!');
