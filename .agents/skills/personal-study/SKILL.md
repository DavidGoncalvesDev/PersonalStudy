---
name: personal-study
description: >-
  Comprehensive guide and operational rules for the Personal Study system.
  Use whenever the user mentions 'personal study', provides slides, exercises,
  or course materials, asks to update or adapt the study app, or modifies disciplines,
  segments, quizzes, and flashcards. Defines the architecture, Supabase schema,
  granular 4-5 segment-per-chapter division, clear brown theme, 3-phase mastery
  progression (rich text -> 12-question 6-choice quiz -> flashcards), and self-updating guidelines.
---

# Personal Study System Skill

This skill defines the specifications, system architecture, database design, content pedagogy, granular segmentation rules, visual theme, and progression logic for the **Personal Study** platform.

> [!IMPORTANT]
> **CRITICAL AGENT ADAPTATION DIRECTIVE**:
> Whenever the user refers to `personal study`, uploads course files (slides, exercises, syllabi), or corrects any aspect of the system in conversation:
> 1. The agent **MUST immediately update this SKILL.md file** to track and persist the user's instructions and refinements.
> 2. The agent **MUST adapt the codebase and database** to reflect the new requirements or content immediately.
> 3. Any future agent loading this skill must adhere to all rules documented here.

---

## 1. Visual Theme & Brand Identity

- **Logo**: The custom Book Icon PNG (warm brown leather cover, yellow title badge, cream pages). Located at `/public/logo.png`.
- **Color Palette (Clear Warm Brown & Amber)**:
  - **Primary Brand / Headers / Active Accents**: Deep Leather Brown (`#78350f` / `#6d3b14` / `#582f10`).
  - **Warm Accent / Badges**: Warm Amber & Gold (`#d97706` / `#b45309` / `#fef3c7`).
  - **Backgrounds**: Soft Warm Cream / Sand (`#fdfbf7`, `#f8f6f0`, `#fffbeb`).
  - **Borders & Dividers**: Warm Tan / Stone (`#e7e2d7`, `#d6cebf`).
  - **Card Surfaces**: Pure White (`#ffffff`) or Soft Ivory (`#fffefc`) with subtle warm shadows.
  - **Flashcard Buttons**:
    - **Yes (Knew It)**: Tactile Vibrant Green (`#16a34a` / `#15803d`).
    - **No (Didn't Know)**: Tactile Crimson Red (`#dc2626` / `#b91c1c`).
  - **Strict Negative Constraint**: Avoid cold generic blues. Use warm, sophisticated leather brown and cream tones matching the logo.

---

## 2. Minimalist, Screen-by-Screen UI Design

- **Eliminate Clutter**: Avoid overwhelming walls of instruction banners, competing cards, or cluttered text.
- **Mobile-First Focused Flow**: On phone and desktop alike, the user should be in **one focused mode at a time**:
  - Compact header with Book logo, discipline selector, and minimal progress badge.
  - Clean Level navigator (unobtrusive dropdown or compact horizontal pill list).
  - Clean view transitions:
    - **Reading View**: Distraction-free, comfortable line width, readable typography, elegant formula callouts.
    - **Quiz View**: 12 substantive questions with clean 6-choice cards, no visual noise.
    - **Flashcards View**: Single-card 3D flip focus with prominent Yes/No buttons.

---

## 3. Granular Segmentation Architecture (~4-5 Segments per Slide Deck)

> [!CAUTION]
> **Never lump an entire presentation or chapter into 1 monolithic segment!**

- Each slide deck contains multiple distinct sub-topics (explicitly outlined in the presentation's internal program/index).
- The curriculum must be broken down into **granular, bite-sized segments (~4 to 5 segments per chapter/deck)**:
  - Each granular segment represents one cohesive, focused conceptual milestone.
  - Each segment has its own dedicated:
    1. **Full Narrative Text Summary** (rich prose, deep explanations, no bare formula dumps).
    2. **Mastery Quiz** (exactly 12 questions: 4 easy, 4 intermediate, 4 hard; 6 choices each).
    3. **Flashcard Deck** (key terms, formulas, rules).
- This structure ensures clear, manageable milestones where the user masters one concept completely before advancing.

---

## 4. Content Pedagogy & Formula Formatting

1. **Full, Engaging Narrative (No Bare Bullet Dumps)**:
   - Provide comprehensive, readable explanations that build intuition from the ground up.
   - Explain the "why" and "how" behind every method, connecting concepts directly to the course exercises and real-world scenarios.
2. **Proper KaTeX Math Formatting**:
   - All formulas must be cleanly rendered using KaTeX (`$...$` for inline, `$$...$$` for display equations).
   - Never display raw unparsed LaTeX code (such as raw `$Y_t = a + b Y_0$` or `$20^\circ\text{C}$`).
   - Every formula must be paired with:
     - A clear, simple explanation in plain English.
     - A breakdown of what every variable and symbol represents.
     - A concrete numerical walkthrough (matching the slides/workbooks).

---

## 5. 3-Phase Mastery Progression per Segment

Progress moves sequentially from **0% to 100%**:

### Phase 1: Pure Text Summary
- High-yield, deep narrative explanation with formatted KaTeX formula cards and practical examples.
- Once understood, clicking **"Mark Text as Understood & Take Quiz"** unlocks Phase 2.

### Phase 2: Exercises & Quiz (12 Questions, 6 Choices Each)
- **Question Composition**:
  - 4 Easy / Elemental (basic definitions, direct properties).
  - 4 Intermediate (conceptual reasoning, interpretation of models).
  - 4 Hard (calculations, multi-step output interpretations).
- **Format**: Exactly **6 choices** per question with **1 correct answer**. Choices must be substantive and content-focused.
- **Strict Mastery Rule**:
  - The user **MUST score 12/12 (100%)** to pass!
  - If any question is missed, the user **CANNOT advance** to flashcards.
  - They **MUST redo the entire 12-question quiz** from question 1.
  - In-depth explanations are displayed after submission so the user learns from any error.

### Phase 3: Flashcards
- Fast-recall cards with question on front, answer/insight on back.
- Self-assessment: **Yes (Green)** vs **No (Red)**.
- **Strict Mastery Rule**:
  - The user **MUST answer "Yes" to all cards (100% mastery)** in the deck to complete the level.
  - Cards marked "No" cycle back through the review loop until mastered.

### Completion & Freedom:
- Completing all 3 phases marks the segment as **Mastered** (checkmarked), increments the overall course progress bar, and automatically unlocks the next level.
- **"Unlock All Levels" Toggle**: Available in the level selector to allow free jumping between levels for flexible study and revision.

---

## 6. Multi-Discipline Management & Deletion

- Multi-discipline support via a clean dropdown selector.
- Easy deletion of any discipline with one click (cascading in PostgreSQL to remove all its segments, questions, flashcards, and progress records when an exam or course ends).

---

## 7. Cloud Database (Supabase `tracker` Project)

- **Connected Project**: Supabase `tracker` (`https://eurqqiebokwcrrhfbihg.supabase.co`).
- **STRICT PROHIBITION**:
  - Completely avoid Nova UI / `supabase_novae`.
  - Isolate all personal study tables using the `study_*` prefix (`study_disciplines`, `study_segments`, `study_questions`, `study_flashcards`, `study_progress`).
  - Never touch calorie tracker tables (`food_items`, `weight_logs`).
- Public anon access enabled for seamless multi-device cloud sync.

---

## 8. Hosting & Deployment

- Hosting will be managed by the user on Netlify.
- The codebase must always produce a clean, zero-error production build (`npm run build` -> `dist/`) with `netlify.toml` and `public/_redirects` configured for SPA routing.
