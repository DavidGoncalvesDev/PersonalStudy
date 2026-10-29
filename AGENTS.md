# Antigravity Agent Guidelines for Personal Study

When working in this project or responding to instructions involving "Personal Study":
1. **Always activate and follow the `personal-study` skill** located in `.agents/skills/personal-study/SKILL.md`.
2. **Dynamic Self-Adaptation**: If the user corrects any requirement, adds course material, or modifies the workflow in chat, IMMEDIATELY update `.agents/skills/personal-study/SKILL.md` (and `~/.gemini/config/skills/personal-study/SKILL.md`) to reflect the changes.
3. **Database Guardrails**:
   - Only connect to the Supabase `tracker` database (`https://eurqqiebokwcrrhfbihg.supabase.co`).
   - NEVER query or interact with `supabase_novae` or Nova UI.
   - ONLY query/write to `study_*` tables (`study_disciplines`, `study_segments`, `study_questions`, `study_flashcards`, `study_progress`). NEVER alter calorie tracker tables.
4. **Progression & Quiz Rules**:
   - 12 questions per segment (4 easy, 4 intermediate, 4 hard).
   - 6 substantive choices per question, 1 correct.
   - User MUST score 12/12 (100%) to pass the quiz. Any mistake forces an entire test reset.
   - User MUST score 100% Yes on flashcards (Green button = Yes, Red button = No).
   - Segments unlock sequentially from 0% to 100% unless "Unlock all segments" is toggled.
