import { readFileSync } from 'fs';

try {
  const p1 = readFileSync('./scripts/levels-data-part1.js', 'utf8');
  console.log('levels-data-part1.js size:', p1.length);
} catch (e) {
  console.log(e.message);
}
