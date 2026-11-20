import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://eurqqiebokwcrrhfbihg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cnFxaWVib2t3Y3JyaGZiaWhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNDA0MzIsImV4cCI6MjEwNzcxNjQzMn0.UrhclnTabK3YEJZzroYeDmO4D4pij59IWCXyWZ9ruxs';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function inspectDisciplines() {
  const { data: disciplines } = await supabase.from('study_disciplines').select('*');
  console.log('Disciplines in DB:', disciplines);

  const { data: segments } = await supabase.from('study_segments').select('id, discipline_id, order_index, title, summary_markdown').order('order_index');
  console.log('\nSegments in DB:');
  const byDiscipline = {};
  segments.forEach(s => {
    byDiscipline[s.discipline_id] = byDiscipline[s.discipline_id] || [];
    byDiscipline[s.discipline_id].push(s);
  });

  for (const [disc, segs] of Object.entries(byDiscipline)) {
    console.log(`\n=== Discipline: ${disc} (${segs.length} segments) ===`);
    segs.forEach(s => {
      console.log(`  [${s.order_index}] ${s.title} (${s.id}) - summary length: ${s.summary_markdown?.length || 0} chars, words: ${s.summary_markdown?.split(/\s+/).length || 0}`);
    });
  }
}

inspectDisciplines();
