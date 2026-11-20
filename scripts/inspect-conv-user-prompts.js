import fs from 'fs';

['b51e6a7f-b32a-490a-9013-caf6f26ef3f0', 'edf39d5d-40de-4988-9274-727a7c5f1e6f'].forEach(cid => {
  const p = `C:/Users/david_kttkn32/.gemini/antigravity/brain/${cid}/.system_generated/logs/transcript.jsonl`;
  if (fs.existsSync(p)) {
    const lines = fs.readFileSync(p, 'utf8').split('\n').filter(Boolean);
    console.log(`\n=== CONVERSATION: ${cid} (${lines.length} lines) ===`);
    lines.forEach(l => {
      try {
        const obj = JSON.parse(l);
        if (obj.source === 'USER_EXPLICIT' || obj.type === 'USER_INPUT') {
          console.log('USER:', obj.content ? obj.content.slice(0, 200) : '[media or empty]');
          if (obj.media) console.log('  MEDIA:', obj.media);
        }
      } catch (e) {}
    });
  }
});
