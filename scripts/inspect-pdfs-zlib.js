import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

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
  let text = '';
  let pos = 0;
  
  while ((pos = buf.indexOf('stream', pos)) !== -1) {
    const start = pos + 6 + (buf[pos + 6] === 0x0d ? 2 : 1);
    const end = buf.indexOf('endstream', start);
    if (end !== -1) {
      const streamBuf = buf.slice(start, end);
      try {
        const decomp = zlib.inflateSync(streamBuf);
        const str = decomp.toString('latin1');
        const matches = str.match(/\(([^)]+)\)\s*Tj/g) || [];
        matches.forEach(m => {
          text += m.replace(/^\(|\)\s*Tj$/g, '') + ' ';
        });
        const tj2 = str.match(/\[([^\]]+)\]\s*TJ/g) || [];
        tj2.forEach(m => {
          const parts = m.match(/\(([^)]+)\)/g) || [];
          parts.forEach(p => text += p.slice(1, -1) + ' ');
        });
      } catch (e) {
        // Not zlib stream or raw
      }
      pos = end + 9;
    } else {
      break;
    }
  }
  
  console.log(`\n======================================================`);
  console.log(`FILE: ${name} (${filePath})`);
  console.log(`Total extracted text length: ${text.length} chars`);
  console.log(`Sample: ${text.slice(0, 300).replace(/\s+/g, ' ')}`);
}
