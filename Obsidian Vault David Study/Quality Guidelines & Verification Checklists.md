---
title: "Quality Guidelines & Verification Checklists"
aliases:
  - "Quality Guidelines"
  - "Checklists"
  - "Principle 1 & 2"
tags:
  - david-study
  - quality-assurance
  - anti-verbosity
  - ci-cd
type: second-brain
created: 2026-11-20
updated: 2026-11-20
---

> [!warning] Quality Assurance Standards & Verification Checklists
> **Quality Assurance Standards & Verification Checklists**
> 
> Core design rules, negative constraints, and pre-deployment auditing standards to ensure final product excellence.

---

## 1. Content & Exam Calibration Standards (Core Principles)

- **Principle 1: The Anti-Verbosity Rule (Avoid Longest Correct Answer)**: The correct option must NEVER dominate as the longest choice or serve as an inadvertent visual cue. Across any question bank (both Phase 2 Quizzes and Exercise Zone Practice sets), the correct option must be strictly longest in at most **\~16.7% of questions** (1 out of 6, exactly matching random probability). When equalizing option lengths, distractors must be enriched with **authentic, domain-specific conceptual explanations** (explaining why that specific formula, metric, matrix, or assumption is violated) rather than generic repetitive filler.
- **Principle 2: The Uniform Option Distribution Rule (Avoid Letter Bias)**: The correct answer must NEVER cluster around the same letter (e.g., legacy defaults to 'B'). Every 12-question Quiz must contain **exactly 2 A, 2 B, 2 C, 2 D, 2 E, 2 F**. Every 18-question Practice set must contain **exactly 3 A, 3 B, 3 C, 3 D, 3 E, 3 F**. Across the entire discipline, each letter choice must represent exactly 16.7% of solutions.
- **Zero Robotic Filler Constraint**: Never append repetitive boilerplate academic suffixes (such as `", which would distort the estimation of standard errors across empirical models"`) to artificially inflate distractor length. All distractors must reflect substantive, plausible domain misconceptions from the course slides.
- **Strict Grounding in Course Materials**: Formulations and distractors must be grounded strictly in the official lecture slides and workbooks. Avoid untelegraphed graduate-level minutiae that are neither taught nor tested.
- **Absolute Prohibition of Discipline Deletion**: Delete discipline buttons, trash icons, and deletion modals are strictly prohibited from the student user interface. Disciplines are curated academic curricula managed server-side.
- **Automated Pre-Seed CI Verification**: Always run `npm run validate:curriculum [discipline-id]` before committing content or seeding Supabase. Any build with letter imbalance, KaTeX syntax failure, or longest-option bias > 20% must be rejected.

---

## 2. Frontend & Hardware Calibration Standards

- **KaTeX HTML Rendering Only**: Configure KaTeX strictly with `output: 'html'` to prevent MathML `&lt;math&gt;` tags from rendering duplicate ghost numbers (such as `0 0` or `1 1`).
- **Anti-Instant Popup Delay**: Level preview hover cards require a sustained **550ms hover delay** on desktop and **600ms touch-and-hold** gesture on mobile to prevent intrusive flickering popups.
- **Apple Pencil Priority**: Preempt resting palm touches, lock stylus pointer events, and suppress iOS 18 text selection/AI callouts during drawing.
- **Zero Raw Asterisks**: Never leave raw asterisks in text guide prose; use semantic HTML headings and spans.

---

## 3. Pre-Deployment Quality Verification Checklist

Before publishing new content or deploying application updates, verify:

- [ ] Run `npm run validate:curriculum [discipline-id]` with **0 critical errors**.
- [ ] **Principle 1 Verified**: Correct option is longest in **$\le 16.7\%$** of questions across both Quiz and Practice pools.
- [ ] **Principle 2 Verified**: Exactly **2 A, 2 B, 2 C, 2 D, 2 E, 2 F** per 12-question Quiz; exactly **3 A, 3 B, 3 C, 3 D, 3 E, 3 F** per 18-question Practice set.
- [ ] Zero robotic distractor boilerplate; all distractor expansions contain authentic domain reasoning.
- [ ] KaTeX formulas render cleanly without duplicate numbers, unescaped dollar signs, or broken syntax.
- [ ] Every question, exercise, and flashcard has a valid `section_anchor` linking to the text guide.
- [ ] All workbook exercises include a writing zone, "Copy for AI", and self-evaluation buttons.
- [ ] Dynamic discipline theme is configured in `src/utils/theme.ts` with custom primary, accent, and canvas colors.
- [ ] First-time users load the most recently added discipline; returning users resume their exact LU and phase.
- [ ] `npm run build` exits with code 0 in under 5 seconds.
