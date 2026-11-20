import fs from 'fs';
import zlib from 'zlib';

const paths = [
  '4728c8f6-cecc-41a3-9ebb-68657b270f55/.system_generated/logs/media/step_10_media_0.pdf',
  '79ec8233-a3d0-4aaa-9452-1fd9500d2113/.system_generated/logs/media/step_6_media_0.pdf'
];

paths.forEach(p => {
  const full = 'C:/Users/david_kttkn32/.gemini/antigravity/brain/' + p;
  const buf = fs.readFileSync(full);
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
  console.log('=== ' + p + ' ===');
  console.log(clean.slice(0, 300));
});
