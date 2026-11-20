import fs from 'fs';
import path from 'path';

const searchDirs = ['materials/data-analysis', 'materials'];
const files = [];

for (const d of searchDirs) {
  if (fs.existsSync(d)) {
    const dirFiles = fs.readdirSync(d).filter(f => f.endsWith('.pdf'));
    for (const f of dirFiles) {
      if (!files.some(existing => existing.name === f)) {
        files.push({ name: f, path: path.join(d, f) });
      }
    }
  }
}

for (const { name, path: filePath } of files) {
  const buf = fs.readFileSync(filePath);
  console.log(`=== ${name} (${(buf.length / 1024).toFixed(1)} KB) ===`);
  const str = buf.toString('latin1');
  
  // Look for Title or metadata
  const titleMatch = str.match(/\/Title\s*\(([^)]+)\)/);
  if (titleMatch) console.log('  Title:', titleMatch[1]);

  // Extract text chunks between BT and ET (basic PDF text extraction)
  const textChunks = [];
  const regex = /BT[\s\S]*?ET/g;
  let m;
  while ((m = regex.exec(str)) !== null) {
    const chunk = m[0];
    const tjMatches = chunk.match(/\(([^)]+)\)\s*Tj/g) || chunk.match(/\[([^\]]+)\]\s*TJ/g);
    if (tjMatches) {
      tjMatches.forEach(t => {
        const clean = t.replace(/^\(|\)\s*Tj$/g, '').replace(/^\[|\]\s*TJ$/g, '').replace(/\\/g, '');
        if (clean.length > 2 && /[a-zA-Z]/.test(clean)) {
          textChunks.push(clean);
        }
      });
    }
  }
  console.log('  Extracted text sample (first 10):', textChunks.slice(0, 10).join(' | '));
}
