import fs from 'fs';
import zlib from 'zlib';

const buf = fs.readFileSync('materials/financial-analysis/AF_aula7_Control.pdf');
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
    } catch (e) {}
    pos = end + 9;
  } else break;
}

const clean = text.replace(/[^a-zA-Z0-9 .,:;%€$()/-]/g, ' ').replace(/\s+/g, ' ').trim();
console.log('=== AF_aula7_Control.pdf (Pages on OKRs, Management Control) ===');
console.log(clean.slice(5000, 12000));
