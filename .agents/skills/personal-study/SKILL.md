---
name: personal-study
description: >-
  Comprehensive guide and operational rules for the David Study (Personal Study) system.
  Use whenever the user mentions 'personal study' or 'David Study', provides slides, exercises,
  or course materials, asks to update or adapt the study app, or modifies disciplines,
  segments, quizzes, and flashcards. Defines the architecture, Supabase schema,
  granular 4-5 segment-per-chapter division, clear brown theme, 3-phase mastery
  progression (rich text -> 1-by-1 quiz with reset -> flashcards), non-resetting quiz state,
  per-device & per-person user login data isolation, text guide anchoring with amber highlights,
  large fundamental explanations, scratchpad canvas with palm rejection, Apple Pencil priority,
  faded graph paper grid & pinch/wheel zoom, "Copy for AI" formatted exercise clipboard feature,
  Exercise Zone (Random practice, Sudden Death & 50-Minute Comprehensive Exam),
  Preparation Score formulation, and self-updating guidelines.
---

# David Study System Skill

This skill defines the operational specifications, system architecture, database design, content pedagogy, granular segmentation rules, visual theme, and progression logic for the **David Study** platform (customized for multivariate data analysis and academic coursework).

> [!IMPORTANT]
> **CRITICAL AGENT ADAPTATION DIRECTIVE**:
> Whenever the user refers to `personal study` or `David Study`, uploads course files (slides, exercises, syllabi), or corrects any aspect of the system in conversation:
> 1. The agent **MUST immediately update this SKILL.md file** across both workspace and global locations to track and persist the user's instructions and refinements.
> 2. The agent **MUST adapt the codebase and database** to reflect the new requirements or content immediately.
> 3. Any future agent loading this skill must adhere to all rules documented here.

---

## 1. Visual Theme, Branding & Navigation

- **Branding**: Titled **David Study** across the app header, browser tab (`<title>David Study</title>`), and favicon.
- **Header Navigation**: Clicking the header title ("David Study") or the custom book logo navigates directly back to the main levels overview (`curriculum` tab).
- **Logo**: The custom Book Icon PNG (warm brown leather cover, yellow title badge, cream pages). Located at `/public/logo.png`.
- **Color Palette (Clear Warm Brown & Amber)**:
  - **Primary Brand / Headers / Active Accents**: Deep Leather Brown (`#78350f` / `#6d3b14` / `#451a03`).
  - **Warm Accent / Badges**: Warm Amber & Gold (`#d97706` / `#b45309` / `#fef3c7`).
  - **Backgrounds**: Soft Warm Cream / Sand (`#fdfbf7`, `#f8f6f0`, `#fffbeb`).
  - **Borders & Dividers**: Warm Tan / Stone (`#e7e2d7`, `#d6cebf`).
  - **Card Surfaces**: Pure White (`#ffffff`) with subtle warm shadows.
  - **Flashcard Buttons**:
    - **Yes (Knew It)**: Tactile Vibrant Green (`#16a34a` / `#15803d`).
    - **No (Didn't Know)**: Tactile Crimson Red (`#dc2626` / `#b91c1c`).
- **No Native Browser Tooltips**: Never use native HTML `title="..."` attributes on buttons or pills. All hover information must be displayed via custom in-app React floating cards to avoid ugly, redundant browser popup balloons.
- **Strict Negative Constraint**: Avoid generic blues. Use warm, sophisticated leather brown and cream tones matching the book logo.

---

## 2. Per-Device & Per-Person User Login (Isolated Data Architecture)

- **Device Login & Profile Key**:
  - Each person logs in with their student name (e.g. `David`, `Sarah`, `Guest`).
  - The name is persisted locally on that device in `localStorage.getItem('david_study_user')`.
  - Normalized database key: `username = name.trim().toLowerCase().replace(/[^a-z0-9_-]/g, '')`.
- **Database Partitioning**:
  - `study_progress`: Stores `username` column, unique composite index on `(username, discipline_id, segment_id)`, and `id = 'prog_' || username || '_' || discipline_id || '_' || segment_id`.
  - `study_user_settings`: Primary key `id = username` and column `username`.
  - Different users on the same device or different devices have 100% separate curriculum completion, quiz attempts, flashcards, sudden death streaks, and 50-minute exam scores.
- **Header Profile Pill & Switcher**:
  - Header displays `[ 👤 David ]`. Clicking opens the profile modal with quick-select chips of recent profiles on that device and allows switching students at any time.

---

## 3. Text Formatting, Math Rendering & Pedagogy

1. **Full Narrative Prose (No Fragmented Bullet Outlines)**:
   - Deliver rich, readable paragraphs that build intuition from the ground up.
   - Subtitles (e.g. *Nominal Scale*, *Ordinal Scale*, *Varimax Rotation*) must always be formatted as real section headings (`###`), NEVER as bullet points (`- ...`).
2. **Zero Raw Asterisks (`*`) in Prose**:
   - The user does not want asterisks or formatting tokens visible in text. All bold terms and headings are formatted cleanly via HTML/CSS without exposing literal `*` symbols.
3. **No Raw Dividers**:
   - Do not use raw markdown dividers (`---`). Use subtle styling or spacing dividers.
4. **Proper KaTeX Math Formatting & Duplicate Suppression**:
   - All formulas must be cleanly rendered using KaTeX (`$...$` for inline, `$$...$$` for block display equations).
   - KaTeX must strictly be configured with `output: 'html'` to prevent generating MathML `<math>` tags, which cause duplicate numbers (such as `0 0` or `1 1`).
   - Every formula must be accompanied by intuitive explanations and concrete numerical walkthroughs.

---

## 4. Curriculum Architecture & Granular Segmentation

- Each slide deck must be divided into **granular, bite-sized segments (~4 to 5 segments per chapter deck)**. For example, Data Analysis Chapters 1–3 are segmented into 8 distinct learning units (LUs):
  1. `ch1-scales-methods`: Measurement Scales & Multivariate Methods Classification
  2. `ch1-manipulation-distances`: Data Manipulation Fundamentals & Distance Metrics
  3. `ch2-pca-geometry`: PCA: Geometric Foundations & Projections (12-Customer Study)
  4. `ch2-pca-analytical`: PCA: Analytical Formulation, Eigenvalues & Scale Sensitivity
  5. `ch2-pca-interpretation`: PCA: Loadings, Scores & Retention Diagnostics
  6. `ch3-fa-theory`: Factor Analysis: Latent Variable Theory & Variance Decomposition
  7. `ch3-fa-extraction`: Factor Analysis: Indeterminacies & Extraction Methods
  8. `ch3-fa-rotation-evaluation`: Factor Analysis: Sampling Adequacy, Rotations & FA vs PCA

---

## 5. 3-Phase Mastery Progression per Learning Unit

Progress through each segment moves sequentially:

### Phase 1: Pure Text Guide
- Comprehensive narrative explanation with formatted KaTeX formulas and practical examples.
- Auto-generates clean URL/anchor slugs on all `##` and `###` headers.
- **Active Question Anchoring & Highlighting**:
  - When jumped to from a live quiz question, the target section is highlighted with an amber callout border and a `"📍 Active Question Reference (Question X)"` badge.
  - Automatically smooth-scrolls the highlighted section into view (`scrollMarginTop: 110px`).
  - Displays a sticky top banner: `[← Return to Question X]`, allowing instant return to the in-progress quiz.
- Clicking **"Mark Text as Understood & Take Quiz"** (or `"Return to Level Quiz (12 Qs)"`) navigates to Phase 2.

### Phase 2: Level Quiz (1 Question at a Time • Immediate Reset on Error)
- **Question Format**: Exactly **12 substantive questions** (4 elemental, 4 conceptual, 4 advanced) with **6 choices each (A–F)**.
- **Strict Content Alignment**:
  - Every single question must be directly grounded in the concepts, definitions, and formulas taught in that specific Learning Unit's text guide.
  - Each question stores `section_reference` (e.g. `Section 3: Classification of Methods`) and `section_anchor` (e.g. `#section-3-classification-of-multivariate-methods`).
- **Non-Resetting Quiz Navigation**:
  - When the user clicks `"📖 Reference Text Guide"` during a quiz, the quiz state **is preserved and does NOT reset** (retains question index $i$ of 12, chosen options, and inclination tags).
- **Strict Reset on Failure**:
  - The user must score **12/12 in a single consecutive run**!
  - If the user selects an incorrect answer on ANY question, the quiz is reset back to Question 1 (0/12).
- **Large, Fundamental Explanations on Failure**:
  - Failure cards display a comprehensive theoretical breakdown explaining the underlying mathematical principles, analytical derivations, why the correct answer holds, and why each distractor is invalid.
  - Side-by-side visual comparison displays `"You Selected (Option X)"` in soft red and `"Correct Answer (Option Y)"` in soft green.
- **"What am I inclined" Helper Feature (Elimination & Pre-decision Tag)**:
  - Appears on the right side of every multiple choice option (A–F) in both the Level Quiz, Exercise Zone, and 50-Min Exam.
  - Fixed-width button (`width: 62px`, centered) cycling: Faded No -> Active No (Red) -> Maybe (Amber) -> Yes (Green) -> Unclicked.

### Phase 3: Flashcards
- Fast-recall cards with question on front, answer/insight on back.
- Self-assessment: **Yes (Green)** vs **No (Red)**.
- **100% Mastery Rule**: All cards must be answered "Yes" to complete the deck.

---

## 6. Exercise Zone & 50-Minute Comprehensive Exam

The Exercise Zone provides three specialized training modes:

### Mode A: Random Practice
- Draws random questions from topics the user has unlocked.
- Immediate feedback with large fundamental explanation on every question.

### Mode B: Sudden Death Minigame
- High-stakes consecutive streak challenge: 1 mistake resets streak to 0!
- Tracks Current Streak (🔥) and all-time Best Streak (🏆).

### Mode C: 50-Minute Comprehensive Exam Paper Simulation
- **Full Course Coverage**: Proportional sampling across all 8 learning units (25 substantive questions).
- **Continuous Paper Format**: All 25 questions are presented in a row on a single paper. Students can answer in any order, scroll through the paper, and change answers before submission.
- **50-Minute Countdown Clock**: Prominent timer with yellow and red alerts for the final 5 minutes; auto-submits on expiration.
- **Sticky Jump Navigator**: Horizontal bar (1..25) highlighting answered, unanswered, and flagged questions.
- **Flag for Review**: Allows bookmarking challenging questions to revisit before final submission.
- **Comprehensive Grading & Review**:
  - Generates final score percentage, letter grade / tier (Distinction 85%+, Merit 75%+, Pass 50%+).
  - Question-by-question review showing selected answer vs correct answer, with deep theoretical KaTeX derivations.
  - Filterable by All, Incorrect, or Correct.
  - Direct impact on Preparation Score: Contributes up to 20 full points!

### "Copy for AI" Formatted Exercise Clipboard Feature
- Available on every question in the **Level Quiz**, **Exercise Zone**, **50-Min Exam**, and **Scratchpad HUD**.
- Automatically formats the exercise for prompt engineering (Topic metadata, Question text, markdown choices `[A]` through `[F]`).
- Appends prompt guidance or full analytical solution based on state.

---

## 7. The Preparation Score Algorithm (0% to 100%)

The Preparation Score is a weighted index reflecting the student's exam readiness:

$$\text{Preparation Score} = \min(100, \text{round}(C + A + E + P + D))$$

1. **Curriculum Completion ($C$, up to 40 points)**:
   - Evaluates completed learning units (Text read + Quiz 12/12 passed + Flashcards completed).
   - $C = 40 \times \frac{\text{completed\_segments}}{\text{total\_segments}}$.
2. **Quiz First-Time Efficiency ($A$, up to 20 points)**:
   - Rewards passing quizzes on the first attempt; penalizes repeated restarts.
   - For each passed segment:
     - 1st attempt: 100% credit ($\approx 2.5$ pts per segment for 8 segments).
     - 2nd attempt: 75% credit.
     - 3rd attempt: 50% credit.
     - 4+ attempts: 25% credit.
3. **50-Minute Comprehensive Exam ($E$, up to 20 points)**:
   - Directly rewards mock exam mastery: $E = \min(20, \frac{\text{exam\_best\_score}}{100} \times 20)$.
4. **Random Practice Volume ($P$, up to 10 points)**:
   - Rewards answering questions in the Exercise Zone: $P = \min(10, \text{random\_exercises\_completed} \times 0.5)$.
5. **Sudden Death Streak ($D$, up to 10 points)**:
   - Rewards high performance under pressure: $D = \min(10, \text{best\_streak} \times 0.5)$.

Total maximum score: $40 + 20 + 20 + 10 + 10 = 100\%$.

---

## 8. Global Scratchpad / Calculation Canvas

- **Openable Everywhere**: Available across all screens via a floating action button (FAB) at the bottom-right, top bar, and inside question cards.
- **Apple Pencil & Stylus Priority**:
  - Uses `PointerEvent` with strict pen prioritization: when an Apple Pencil touches down (`e.pointerType === 'pen'`), it preempts any resting hand or touch contact and locks active drawing to the stylus.
  - Stylus touches (`touch.touchType === 'stylus'`) are bypassed by pinch-zoom listeners so resting palm contacts never trigger zoom or cancel active pen strokes.
  - Avoids calling `setPointerCapture` on mobile WebKit to prevent premature `pointercancel` aborts.
  - Single tap immediately generates an initial round dot (`ctx.arc` / `ctx.fill`) so periods, decimal points, and dots render instantly.
- **Palm Rejection & Text Selection Suppression**:
  - Global suppression of text selection (`user-select: none`, `-webkit-user-select: none`, `-webkit-touch-callout: none`).
  - Traps and prevents `selectstart` and `contextmenu` events while the scratchpad is active.
- **Faded Warm Graph Paper Grid**:
  - Rendered on a warm cream notepad sheet (`#fffdfa`) resting on a subtle desk surface (`#ece6dc`) with an authentic drop shadow.
  - Very subtle faded grid: 24px minor squares (`rgba(120, 53, 15, 0.04)`) and 120px major squares (`rgba(120, 53, 15, 0.12)`).
  - The grid scales dynamically with zoom and pan, giving immediate visual cues of zoom scale and spatial orientation.
  - Canvas bitmap is transparent (`ctx.clearRect`), allowing the grid to shine through.
  - Eraser uses `ctx.globalCompositeOperation = 'destination-out'` so erasing removes ink back to transparent without ever erasing the grid lines.
- **Two-Finger Pinch Zoom & Rolling Wheel Pan**:
  - Two fingers dynamically scale the canvas (0.4x to 3.5x).
  - Mouse wheel pans vertically and horizontally; Ctrl+Wheel zooms.
  - Floating zoom controls: `[-]`, `zoom %` (click to reset view to 100%), `[+]`, and `RotateCcw` reset buttons in the top toolbar.
- **Corner HUD**: Collapsible floating card with the current question, 6 choices, and a `"Copy for AI"` one-click button.

---

## 9. Database Architecture (Supabase `tracker` Project)

- **Target Project**: `https://eurqqiebokwcrrhfbihg.supabase.co` (`tracker`).
- **Strict Prohibition**: Completely avoid `supabase_novae` / Nova UI. Never touch calorie tracker tables (`food_items`, `weight_logs`).
- **Tables**:
  - `study_disciplines`: `id, name, code, description, created_at`
  - `study_segments`: `id, discipline_id, order_index, title, subtitle, summary_markdown, created_at`
  - `study_questions`: `id, segment_id, order_index, difficulty, question, options (jsonb), correct_option, explanation, pool_type, section_reference, section_anchor, created_at`
  - `study_flashcards`: `id, segment_id, order_index, category, front, back, created_at`
  - `study_progress`: `id, username, discipline_id, segment_id, text_completed, quiz_passed, quiz_score, quiz_attempts, flashcards_passed, completed, manually_unlocked, updated_at`
  - `study_user_settings`: `id (username), username, unlock_all, active_discipline_id, preparation_score, sudden_death_best_streak, sudden_death_current_streak, random_exercises_completed, total_correct_answers, total_wrong_answers, exam_best_score, exam_last_score, exam_attempts, updated_at`
- **Double-Click Unlocking**: Double-clicking any level pill unlocks it directly, toggling `manually_unlocked = true` in `study_progress`.

---

## 10. Web Audio Sound Effects

- **Zero-Dependency Procedural Audio**: Uses the Web Audio API (`AudioContext`) to synthesize instant, crisp acoustic feedback without needing external MP3/WAV files.
- **Audio Palette**:
  - `playCorrectSound()`: Pleasant, ascending sine-wave chime (E5 -> A5) played immediately upon selecting a correct answer.
  - `playWrongSound()`: Low, subdued downward triangle-wave tone played when an incorrect answer triggers a quiz/sudden death reset.
  - `playSuccessChime()`: Triumphant 4-note ascending major arpeggio (C5 -> E5 -> G5 -> C6) for passing 12/12 quiz questions, mastering all flashcards, or hitting exam milestones.
  - `playClickSound()`: Subtle, crisp 900 Hz acoustic tick for card flips, tab changes, and UI buttons.
