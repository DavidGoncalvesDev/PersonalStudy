import fs from 'fs';
import zlib from 'zlib';

const dir = 'materials/financial-analysis';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.pdf'));

console.log(`Auditing ${files.length} lecture slide files in ${dir}:\n`);

for (const f of files) {
  const buf = fs.readFileSync(`${dir}/${f}`);
  let text = '';
  let pos = 0;
  
  while ((pos = buf.indexOf('stream', pos)) !== -1) {
    const start = pos + 6 + (buf[pos + 6] === 0x0d ? 2 : 1);
    const end = buf.indexOf('endstream', start);
    if (end !== -1) {
      const streamBuf = buf.slice(start, end);
      try {
        const decomp = zlib.inflateSync(streamBuf);
        const s = decomp.toString('latin1');
        const matches = s.match(/\(([^)]+)\)\s*Tj/g) || [];
        matches.forEach(m => text += m.replace(/^\(|\)\s*Tj$/g, '') + ' ');
        const tj2 = s.match(/\[([^\]]+)\]\s*TJ/g) || [];
        tj2.forEach(m => {
          const parts = m.match(/\(([^)]+)\)/g) || [];
          parts.forEach(p => text += p.slice(1, -1) + ' ');
        });
      } catch (e) {}
      pos = end + 9;
    } else break;
  }
  
  const clean = text.replace(/[^a-zA-Z0-9 .,:;%€$()/-]/g, ' ').replace(/\s+/g, ' ').trim();
  console.log(`======================================================`);
  console.log(`FILE: ${f}`);
  console.log(`Extracted text length: ${clean.length} chars`);
  console.log(`Sample (first 400 chars):\n${clean.slice(0, 400)}\n`);
}
