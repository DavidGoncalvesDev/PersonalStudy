import fs from 'fs';

// 1. Fix levels-data-part1.js
let l1 = fs.readFileSync('scripts/levels-data-part1.js', 'utf8');
l1 = l1.replace(
  '$$MD_{ik}^2 = (x_i - x_k)\' S^{-1} (x_i - x_k)$$',
  '$$MD_{ik}^2 = (x_i - x_k)^T S^{-1} (x_i - x_k)$$'
);
fs.writeFileSync('scripts/levels-data-part1.js', l1, 'utf8');

// 2. Fix levels-data-part2.js
let l2 = fs.readFileSync('scripts/levels-data-part2.js', 'utf8');
l2 = l2.replace(
  'Because $\\Lambda^* (\\Lambda^*) = (\\Lambda T)(T\' \\Lambda\') = \\Lambda \\Lambda\', any orthogonal rotation matrix $T$',
  'Because $\\Lambda^* (\\Lambda^*)^T = (\\Lambda T)(T^T \\Lambda^T) = \\Lambda \\Lambda^T$, any orthogonal rotation matrix $T$'
);
fs.writeFileSync('scripts/levels-data-part2.js', l2, 'utf8');

console.log('✓ Fixed precision strings in levels-data-part1.js and levels-data-part2.js');
