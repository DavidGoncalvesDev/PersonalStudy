import fs from 'fs';
import zlib from 'zlib';

const dir = 'C:/Users/david_kttkn32/.gemini/antigravity/brain/536b620c-37b2-4e80-b19b-3dde4531fc5f/.system_generated/logs/media';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.pdf'));

console.log(`Found ${files.length} PDFs in ${dir}:`);

files.forEach(f => {
  const filePath = `${dir}/${f}`;
  const buf = fs.readFileSync(filePath);
  const str = buf.toString('latin1');
  
  // Extract text
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
  
  // Clean extracted sample
  const clean = text.replace(/[^a-zA-Z0-9 .,:;%€$()/-]/g, ' ').replace(/\s+/g, ' ').trim();
  console.log(`\n======================================================`);
  console.log(`FILE: ${f} (${(buf.length / 1024).toFixed(1)} KB)`);
  console.log(`Sample: ${clean.slice(0, 300)}`);
});
