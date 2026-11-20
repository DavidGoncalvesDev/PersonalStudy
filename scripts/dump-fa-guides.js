import { financialAnalysisSeed } from './financial-analysis-content.js';
import fs from 'fs';

let fullReport = '# Complete Text Guide for Financial Analysis & Management Control\n\n';

financialAnalysisSeed.segments.forEach((s, idx) => {
  fullReport += `\n\n================================================================================\n`;
  fullReport += `SEGMENT ${idx + 1}: ${s.title} (${s.id})\n`;
  fullReport += `SUBTITLE: ${s.subtitle}\n`;
  fullReport += `================================================================================\n\n`;
  fullReport += s.summary_markdown;
});

fs.writeFileSync('scripts/fa-all-guides-dump.txt', fullReport, 'utf8');
console.log('Dumped full text guides to scripts/fa-all-guides-dump.txt. Total length:', fullReport.length);
