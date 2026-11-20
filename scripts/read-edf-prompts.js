import fs from 'fs';

const p = 'C:/Users/david_kttkn32/.gemini/antigravity/brain/edf39d5d-40de-4988-9274-727a7c5f1e6f/.system_generated/logs/transcript.jsonl';
const lines = fs.readFileSync(p, 'utf8').split('\n').filter(Boolean);

lines.forEach(l => {
  try {
    const obj = JSON.parse(l);
    if (obj.source === 'USER_EXPLICIT' || obj.type === 'USER_INPUT') {
      console.log('USER:', obj.content);
      if (obj.media) console.log('MEDIA:', obj.media);
    }
  } catch (e) {}
});
