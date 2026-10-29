import fs from 'fs';

const filesToCheck = [
  'scripts/curriculum-text-part1.js',
  'scripts/curriculum-text-part2.js',
  'scripts/levels-data-part1.js',
  'scripts/levels-data-part2.js',
  'scripts/practice-questions-part1.js',
  'scripts/practice-questions-part2.js',
  'scripts/practice-questions-part3.js',
  'scripts/practice-questions-part4.js'
];

let totalIssues = 0;

filesToCheck.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);

  lines.forEach((line, lineNum) => {
    // 1. Check for unescaped literal tab inside \text{...}
    if (line.includes('\text{') || line.includes('\text ') || line.includes('\theta') || line.includes('\times')) {
      // In JS, if it's literal \text, check if it's \\text
      // Regex check: (?<!\\)\\text
      if (/(?<!\\)\\text\{/.test(line)) {
        console.log(`[${file}:${lineNum + 1}] Unescaped \\text: ${line.trim().slice(0, 70)}`);
        totalIssues++;
      }
    }

    // 2. Check for unmatched single dollar signs on a line (excluding block math lines)
    if (!line.trim().startsWith('$$') && !line.trim().endsWith('$$')) {
      const dollars = (line.match(/(?<!\\)\$/g) || []).length;
      if (dollars % 2 !== 0) {
        console.log(`[${file}:${lineNum + 1}] Unmatched $ (${dollars} found): ${line.trim().slice(0, 70)}`);
        totalIssues++;
      }
    }

    // 3. Check for literal *Example* or *Crucial*
    if (/\*[A-Za-z0-9\s]+:\*/.test(line)) {
      console.log(`[${file}:${lineNum + 1}] Asterisk token: ${line.trim().slice(0, 70)}`);
      totalIssues++;
    }

    // 4. Check for ' as transpose inside math: e.g. (x_i - x_k)'
    if (/\)\s*\'\s*S/.test(line) || /\)\s*\'\s*X/.test(line) || /\)\s*\'\s*[\$\,]/.test(line)) {
      console.log(`[${file}:${lineNum + 1}] Prime transpose instead of ^T: ${line.trim().slice(0, 70)}`);
      totalIssues++;
    }

    // 5. Check for "extMostpreferred" or similar artifacts
    if (line.includes('extMost') || line.includes('extSecond') || line.includes('extThird') || line.includes('extLeast')) {
      console.log(`[${file}:${lineNum + 1}] Corrupted text artifact: ${line.trim().slice(0, 70)}`);
      totalIssues++;
    }
  });
});

console.log(`\nScan complete. Total potential formatting issues found: ${totalIssues}`);
