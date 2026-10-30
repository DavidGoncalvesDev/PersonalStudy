---
name: personal-study
description: >-
  Comprehensive guide and operational rules for the David Study (Personal Study) system.
  Use whenever the user mentions 'personal study' or 'David Study', provides slides, exercises,
  or course materials, asks to update or adapt the study app, or modifies disciplines,
  segments, quizzes, workbook exercises, and flashcards. Defines the architecture, Supabase schema,
  granular 4-5 segment-per-chapter division, clear brown theme, 4-phase mastery
  progression (rich text -> 1-by-1 quiz with reset -> practical workbook exercises with writing zone & self-assessment -> flashcards), non-resetting quiz state,
  per-device & per-person user login data isolation, text guide anchoring with amber highlights,
  large fundamental explanations, elimination of longest-option bias, uniform A-F option distribution,
  live scratchpad question synchronization, iOS Apple Pencil callout suppression, scratchpad canvas with palm rejection,
  Apple Pencil priority, faded graph paper grid & pinch/wheel zoom, "Copy for AI" formatted exercise clipboard feature,
  Exercise Zone (Random practice, Sudden Death & 50-Minute Comprehensive Exam),
  Preparation Score formulation, discipline deletion prevention, mobile optimization, and self-updating guidelines.
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
  - **Assessment & Flashcard Buttons**:
    - **Yes (Knew It / Got It Right)**: Tactile Vibrant Green (`#16a34a` / `#15803d`).
    - **No (Didn't Know / Made Mistakes)**: Tactile Crimson Red (`#dc2626` / `#b91c1c`).
- **No Native Browser Tooltips**: Never use native HTML `title="..."` attributes on buttons or pills. All hover information must be displayed via custom in-app React floating cards to avoid ugly, redundant browser popup balloons.
- **Level Selector Hover & Hold Delay (Anti-Instant Popup)**:
  - Hover preview cards for level pills must NEVER pop up instantly on mouse movement or on touch click.
  - Desktop hover requires a sustained **550ms hover delay** before the floating info card appears.
  - Mobile/tablet touch requires a sustained **600ms touch-and-hold** gesture.
  - Clicking or double-clicking any level pill immediately dismisses and cancels any active hover timers, ensuring clean, instant level switching without intrusive popups.
- **Strict Negative Constraint**: Avoid generic blues. Use warm, sophisticated leather brown and cream tones matching the book logo.
- **Discipline Deletion Prohibited**: Delete discipline buttons, trash icons, and deletion modals are strictly prohibited from the student user interface. Disciplines are curated academic curricula managed server-side.

---

## 2. Per-Device & Per-Person User Login (Isolated Data Architecture)

- **Device Login & Profile Key**:
  - Each person logs in with their student name (e.g. `David`, `Sarah`, `Alex`).
  - **No Automatic Default to David**: The app must NEVER default to or automatically assign `David`. If `localStorage.getItem('david_study_user')` is not set, `currentUser` is `null`, and `UserLoginModal` is displayed immediately on open, prompting the student to enter their name or select a recent profile on that device.
  - Normalized database key: `username = name.trim().toLowerCase().replace(/[^a-z0-9_-]/g, '')`.
- **Database Partitioning**:
  - `study_progress`: Stores `username` column, unique composite index on `(username, discipline_id, segment_id)`, and `id = 'prog_' || username || '_' || discipline_id || '_' || segment_id`.
  - `study_workbook_submissions`: Stores student workbook responses and self-evaluations partitioned by `(username, exercise_id)`.
  - `study_user_settings`: Primary key `id = username` and column `username`.
  - Different users on the same device or different devices have 100% separate curriculum completion, quiz attempts, workbook submissions, flashcards, sudden death streaks, and 50-minute exam scores.
- **Header Profile Pill & Switcher**:
  - Header displays `[ 👤 Username ]` (or `[ 👤 Login ]` if unauthenticated). Clicking opens the profile modal with quick-select chips of recent profiles on that device, a student name input, and a **Sign Out** button to log out and clear the active session.

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

## 4. Curriculum Architecture & Learning Units (Data Analysis)

Divide university courses into **granular, highly focused learning units** directly aligned with official course materials (lecture slides and practical exercise workbooks):
- **Discipline**: *Multivariate Data Analysis (MDA)* (`data-analysis`).
- **Chapter 1: Foundations & Measurement Scales**:
  - **L1**: Variable Typologies & Measurement Scales (Nominal, Ordinal, Interval, Ratio, Permissible Transformations, Dummy Variable Design Matrix) (`ch1-scales-methods`).
  - **L2**: Data Manipulation Fundamentals & Distance Metrics (Sums of Squares, Covariance, Correlation, Euclidean vs Statistical vs Mahalanobis $D^2$, Metric Space Axioms) (`ch1-manipulation-distances`).
- **Chapter 2: Principal Component Analysis (PCA)**:
  - **L3**: Geometric Foundations & Projections (12-Customer Bivariate Case, Coordinate Rotation $\theta = 43.26^\circ$, Variance Maximization along $PC_1$, Orthogonal Complement $PC_2$, Centered Subspace $\min(p, n-1)$) (`ch2-pca-geometry`).
  - **L4**: Covariance vs. Correlation, Loadings & Retention Diagnostics (The Scale Sensitivity Problem: $c^2$ Variance Inflation, Standardized Correlation PCA $\text{tr}(R) = p$, 25 US Cities Food Prices, 4 Fundamental Quantities: $\lambda_i, w_i, t_{hi}, l_{ji}$, Kaiser Criterion $\lambda > 1$, Cattell Scree Elbow Rule, Cumulative Variance $\ge 70\%$, Portuguese 7 Regions Case Study, SAS `PROC PRINCOMP COV` vs Python `StandardScaler` + `PCA`) (`ch2-pca-analytical`).
- **Chapter 3: Factor Analysis (FA)**:
  - **L5**: Latent Variable Theory & Variance Decomposition (Spearman Common Factor Model, 6-Course Grades, Total Variance Decomposition $1.0 = h_j^2 + u_j^2$, Communality vs Uniqueness, Reproduced Correlations $\hat{r}_{jk}$, Reflective vs Formative Models) (`ch3-fa-theory`).
  - **L6**: Indeterminacies & Extraction Methods (The Two Inherent Indeterminacies: Factor Rotation & Communality Estimation Circularity, Principal Component Factoring vs Iterated Principal Axis Factoring, Residual Matrix $R_{\text{res}} = R - \hat{R}$, RMSR $\le 0.08$) (`ch3-fa-extraction`).
  - **L7**: Sampling Adequacy, Rotations & FA vs PCA (Kaiser-Meyer-Olkin MSA Benchmarks, Bartlett Sphericity, Anti-Image Matrix, Varimax vs Quartimax vs Oblique Promax, Pattern vs Structure Matrices, Heywood Cases, 6 Systematic Differences PCA vs FA) (`ch3-fa-rotation-evaluation`).

---

## 5. Four-Phase Mastery Progression per Segment

Each learning unit follows a rigorous 4-phase mastery progression:

### Phase 1: Comprehensive Text Guide
- Exhaustive foundational prose with worked examples and formula walkthroughs.
- Auto-generates clean URL/anchor slugs on all `##` and `###` headers.
- **Universal Reference Anchoring & Highlighting (All Levels 1–8, Quizzes, Workbook & Flashcards)**:
  - Every single question (all 96 across L1–L8), workbook exercise (all 8 across L1–L8), and flashcard (all 64 across L1–L8) has dedicated `section_reference` and `section_anchor` populated in Supabase.
  - When jumped to from a live quiz question, workbook exercise, or flashcard, the target section is highlighted with an amber callout border (`border: 2.5px solid #d97706`, `#fffbeb`) and a dynamic badge:
    `"📍 Active Question Reference (Question X)"`, `"📍 Active Exercise Reference (Exercise X)"`, or `"📍 Active Concept Reference (Flashcard X)"`.
  - Automatically smooth-scrolls the highlighted section into view (`scrollMarginTop: 110px`).
  - Displays a sticky top banner with bidirectional return:
    `[← Return to Question X]`, `[← Return to Workbook Exercise X]`, or `[← Return to Flashcards]`.
  - All quiz progress (question index, selections, inclinations), workbook drafts/submissions, and flashcard progress (mastered cards, queue) are maintained with zero resets.
- Clicking **"Mark Text as Understood & Take Quiz"** (or `"Return to Level Quiz (12 Qs)"`) navigates to Phase 2.

### Phase 2: Level Quiz (1 Question at a Time • Immediate Reset on Error)
- **Question Format**: Exactly **12 substantive questions** (4 elemental, 4 conceptual, 4 advanced) with **6 choices each (A–F)**.
- **Strict Prohibition of Length Cues & Longest-Option Bias ("Anti-Verbosity Bias")**:
  - The correct answer must **never** be predictably longer, more descriptive, or more grammatically complex than distractors.
  - Distractors must match the correct answer in academic depth, technical vocabulary, sentence length, and structural detail (length variance should generally remain within ~15–25%).
  - Across any question set or bank, the correct option must be the longest option in at most ~10–16.7% of questions (matching uniform random expectation among 6 choices), never dominating as the longest choice.
- **Strict Uniform Option & Letter Distribution**:
  - Across every 12-question quiz, correct choices must be strictly and uniformly distributed across A, B, C, D, E, F (exactly 2 of each letter per 12 questions).
  - In aggregate question pools and exams, every letter option (A–F) must maintain an equal ~16.7% frequency.
- **Strict Curriculum Grounding (Authoritative Lecture Slides & Practical Exercises Only)**:
  - Every quiz question, exercise, and flashcard must be **strictly and exclusively grounded in the provided course materials** (official university lecture slides and practical exercise workbooks).
  - **Zero Overcomplication**: Strictly avoid inventing untelegraphed graduate-level linear algebra minutiae (such as Taylor series expansions of rotation matrices, coordinate reflection proofs, or abstract matrix lemmas) that are neither taught in the slides nor present in the practical exercise sheets.
  - **Zero Programmatic / Robotic Distractor Filler**: NEVER programmatically append repetitive boilerplate academic suffixes (such as `", which would distort the estimation of standard errors across empirical models"` or `", introducing severe estimation bias into secondary structural equation equations"`) to balance length. All distractors must be substantive, plausible domain-specific misconceptions directly tied to course topics (e.g., confusing covariance vs correlation PCA scale sensitivity, eigenvalues vs eigenvectors, unities vs iterated communalities, orthogonal vs oblique rotations, reflective vs formative models).
- **Strict Content Alignment Across All Levels**:
  - Every single question across all 8 levels is directly grounded in the concepts, definitions, and formulas taught in that specific Learning Unit's text guide.
  - Each question stores `section_reference` (e.g. `Section 3: Classification of Methods`) and `section_anchor` (e.g. `classification-of-multivariate-methods`).
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
  - Fixed-width button cycling: Faded No -> Active No (Red) -> Maybe (Amber) -> Yes (Green) -> Unclicked.
- **Immediate Retake for Practice & Robust Restart State**:
  - When a student who has already completed or mastered a quiz clicks **"Retake Quiz for Practice"**, the quiz must immediately enter active retake mode (`isRetaking = true`, `isAllCompleted = false`, `currentIndex = 0`) and present Question 1 of 12. It must **never** loop back to or trap the student on the completion screen.
  - If a student fails a question during a retake and clicks **"Restart Quiz (12-in-a-Row Required)"**, the state must keep `isRetaking = true` so they restart at Question 1 rather than being bounced back to the passed completion screen.
- Upon scoring 12/12, the user unlocks Phase 3 (Workbook Exercises) and sees a direct button: `"Proceed to Phase 3: Workbook"`.

### Phase 3: Practical Workbook Exercises (In-Depth Course Problem Sets)
- **Pedagogical Purpose**: Moves beyond multiple-choice recognition into active, open-ended problem solving directly reflecting university course workbooks (e.g. NOVA IMS Chapter 2 and Chapter 3 Exercise Workbooks).
- **Curriculum Calibration (When, Where, and How Many)**:
  - **Calculation-Heavy & Analytical Topics**: Topics involving formal matrix derivations, eigenvalue optimization, Mahalanobis distances, factor loading rotations, or reproduced correlations require substantive, multi-part workbook exercises with concrete numbers and datasets.
  - **Conceptual & Taxonomic Topics**: Focus on scale invariance proofs, dummy variable matrix singularities, and comparative methodological trade-offs (e.g. PCA vs PAF vs ML factor analysis).
  - The agent determines the number of exercises per segment based on topic depth (typically 1–2 exhaustive multi-part challenge exercises per learning unit).
- **Interactive Writing Zone & Scratchpad**:
  - Large expandable text area below the prompt allowing the student to write formulas, derivations, matrix values, and conclusions.
  - Live draft autosaving in `localStorage` (`david_study_wb_draft_${username}_${exerciseId}`) so work is never lost on refresh or navigation.
  - Live character counter.
- **Copy for AI & Consistent Tooling Naming**:
  - **"Copy for AI" on All Exercises & Solutions**: Every workbook exercise features a standard **"Copy for AI"** button on the problem card, plus a **"Copy Solution for AI"** button on the revealed solution card. Clicking copies the problem statement, curriculum references, draft responses, and worked mathematical solutions formatted for immediate AI prompting.
  - **Strict Terminology Consistency**: The notes and drawing tool is **strictly named "Scratchpad / Notes"** (desktop) and **"Notes"** (mobile) everywhere across the application. The agent must **NEVER invent new, one-off, or arbitrary names** (e.g. "Apple Pencil Canvas") for existing app features. All navigation pills and action buttons must maintain unified names across Text Guides, Quizzes, Workbook, and Flashcards.
- **Turn-In & Self-Assessment Workflow**:
  1. **"Turn In Exercise & Check Solution"**: Commits the student's written response to Supabase table `study_workbook_submissions`.
  2. **Authoritative Worked Solution**: Immediately unrolls the complete step-by-step mathematical proof, matrix transformations, and numerical answers rendered via KaTeX.
  3. **Self-Assessment Feedback Bar**: The student compares their response against the authoritative worked solution and self-evaluates with two tactile buttons:
     - `[ ✕ No, I made mistakes ]` (Crimson red): Plays subdued wrong tone, marks submission as needing improvement, and encourages reviewing the text guide or re-attempting.
     - `[ ✓ Yes, I got it right! ]` (Vibrant green): Plays correct chime, bursts confetti, records success in `study_workbook_submissions`, marks `workbook_passed = true` in `study_progress`, and unlocks Phase 4 (Flashcards).
  4. **"Edit / Re-attempt" Action**: Allows resetting the exercise state and refining the response at any time.

### Phase 4: High-Yield Flashcards
- Fast-recall cards with question on front, answer/insight on back.
- **Universal Reference Text Guide Link**:
  - Every flashcard across all 8 levels features a `"📖 Reference Text Guide"` button on the active card deck.
  - Clicking jumps directly to the corresponding concept heading in Phase 1 text guide without losing queue or mastered card progress.
- Self-assessment: **Yes (Green)** vs **No (Red)**.
- **100% Mastery Rule**: All cards must be answered "Yes" to complete the deck.
- **Non-Resetting Mastery Persistence**:
  - Maintained in the DOM with `display: activePhase === 'flashcards' ? 'block' : 'none'`, so navigating back to Phase 1 (Text Guide), Phase 2 (Quiz), or Phase 3 (Workbook) **never resets** the flashcard queue or active card position.
  - Persisted in `localStorage` under `david_study_fc_${username}_${segmentId}` so even reloads and profile switches preserve mastered card progress for that segment.
  - "Review Again" explicitly restarts and resets the queue for fresh practice.
- **Segment-Isolated Queue Synchronization & Fingerprinting**:
  - Flashcards must strictly be filtered by `segment_id === currentSegment.id` before initializing or evaluating the flashcard deck.
  - Tracks a unique card ID fingerprint (`cardsFingerprint`) so that when the user advances to a new level, the component immediately initializes that specific level's flashcard deck rather than retaining or leaking cards from earlier levels.
  - Displays a clean inline loading state if flashcards for a newly selected segment are still in flight.

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
- **Sticky Jump Navigator**: Horizontal swipeable bar (1..25) highlighting answered, unanswered, and flagged questions without consuming excessive vertical space on mobile devices.
- **Flag for Review**: Allows bookmarking challenging questions to revisit before final submission.
- **Comprehensive Grading & Review**:
  - Generates final score percentage, letter grade / tier (Distinction 85%+, Merit 75%+, Pass 50%+).
  - Question-by-question review showing selected answer vs correct answer, with deep theoretical KaTeX derivations.
  - Filterable by All, Incorrect, or Correct.
  - Direct impact on Preparation Score: Contributes up to 20 full points!

### "Copy for AI" Formatted Exercise Clipboard Feature
- Available on every question in the **Level Quiz**, **Exercise Zone**, **50-Min Exam**, and **Scratchpad HUD**.
- Automatically formats the exercise for prompt engineering (Topic metadata, Question text, markdown choices `[A]` through `[F]`, or open-ended derivation prompt).
- Appends prompt guidance or full analytical solution based on state.

---

## 7. The Preparation Score Algorithm (0% to 100%)

The Preparation Score is a weighted index reflecting the student's exam readiness:

$$\text{Preparation Score} = \min(100, \text{round}(C + A + E + P + D))$$

1. **Curriculum Completion ($C$, up to 40 points)**:
   - Evaluates completed learning units (Text read + Quiz 12/12 passed + Workbook completed + Flashcards completed).
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

- **Openable Everywhere & Live Question Sync**:
  - Available across all screens via a floating action button (FAB) at the bottom-right, top bar, and inside question/workbook cards.
  - Clicking "Scratchpad / Notes" on ANY quiz question, workbook exercise, or exam question dynamically passes the currently active question (`onOpenScratchpad(currentQ)`), ensuring the corner HUD reference card matches the exact live problem being solved rather than defaulting to Question 1.
- **Apple Pencil & Stylus Priority**:
  - Uses `PointerEvent` with strict pen prioritization: when an Apple Pencil touches down (`e.pointerType === 'pen'`), it preempts any resting hand or touch contact and locks active drawing to the stylus.
  - Stylus touches (`touch.touchType === 'stylus'`) are bypassed by pinch-zoom listeners so resting palm contacts never trigger zoom or cancel active pen strokes.
  - Single tap immediately generates an initial round dot (`ctx.arc` / `ctx.fill`) so periods, decimal points, and dots render instantly.
- **Palm Rejection & iOS Callout Suppression ("Search with AI" / "Copy")**:
  - Complete suppression of iOS 18 native edit callout menu (`[Copy | Search with AI | Look Up]`): `touch-action: none !important; -webkit-touch-callout: none !important; -webkit-user-select: none !important; user-select: none !important;` applied dynamically to `<body>` and `<canvas>` while scratchpad is open.
  - Intercepts and cancels single-touch `touchstart` to suppress iOS long-press callout timers while preserving two-finger pinch-zoom gestures.
  - Captures stylus/touch pointer events via `canvas.setPointerCapture(e.pointerId)` on pointerdown and releases on pointerup/cancel to prevent iOS callouts.
  - Traps and prevents `selectstart`, `selectionchange`, and `contextmenu` events while the scratchpad is active.
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
- **Corner HUD**: Collapsible floating card with the current question/exercise, options (if multiple choice), and a `"Copy for AI"` one-click button.

---

## 9. Mobile & Touch Screen Optimization

- **2-Tier Mobile Header**:
  - **Tier 1**: Brand logo & title on the left; Preparation score pill (`Prep: X%`) and User profile pill (`[ 👤 Name ]`) on the right.
  - **Tier 2**: Full-width unified row with Mode switcher (`[ 📖 Levels ]` flex-1 and `[ 🔥 Exercise Zone ]` flex-1), Quick Notes button, and compact Course dropdown.
- **Phase Navigation Stepper**:
  - Segmented control format using `flex: 1` per tab.
  - Chevrons hidden on mobile (`.hide-on-mobile`).
  - Responsive labels: `1. Text`, `2. Quiz`, `3. Work`, `4. Cards` on mobile viewports so all 4 phases fit cleanly on 1 line without wrapping.
- **Continuous Exam Header**:
  - Compact sticky top bar (`top: clamp(58px, 12vw, 88px)`).
  - Horizontal swipeable jump bar (`.mobile-scroll-x`) prevents 25 buttons from wrapping into 3–4 tall rows, preserving screen space for the exam questions.
- **Safe Area & Tap Targets**:
  - Minimum 38–48px touch targets for all multiple-choice cards, workbook buttons, and action pills.
  - FAB positioned with safe area padding: `bottom: max(16px, env(safe-area-inset-bottom, 16px))`.
  - Global `-webkit-tap-highlight-color: transparent` and `touch-action: manipulation`.

---

## 10. Database Architecture (Supabase `tracker` Project)

- **Target Project**: `https://eurqqiebokwcrrhfbihg.supabase.co` (`tracker`).
- **Strict Prohibition**: Completely avoid `supabase_novae` / Nova UI. Never touch calorie tracker tables (`food_items`, `weight_logs`).
- **Tables**:
  - `study_disciplines`: `id, name, code, description, created_at`
  - `study_segments`: `id, discipline_id, order_index, title, subtitle, summary_markdown, created_at`
  - `study_questions`: `id, segment_id, order_index, difficulty, question, options (jsonb), correct_option, explanation, pool_type, section_reference, section_anchor, created_at`
  - `study_workbook_exercises`: `id, segment_id, order_index, title, difficulty, prompt_markdown, solution_markdown, section_reference, section_anchor, created_at`
  - `study_workbook_submissions`: `id, username, exercise_id, segment_id, user_response, self_evaluated_correct, submitted_at, updated_at`
  - `study_flashcards`: `id, segment_id, order_index, category, front, back, created_at`
  - `study_progress`: `id, username, discipline_id, segment_id, text_completed, quiz_passed, quiz_score, quiz_attempts, workbook_passed, flashcards_passed, completed, manually_unlocked, updated_at`
  - `study_user_settings`: `id (username), username, unlock_all, active_discipline_id, preparation_score, sudden_death_best_streak, sudden_death_current_streak, random_exercises_completed, total_correct_answers, total_wrong_answers, exam_best_score, exam_last_score, exam_attempts, updated_at`
- **Double-Click Unlocking**: Double-clicking any level pill unlocks it directly, toggling `manually_unlocked = true` in `study_progress`.

---

## 11. Web Audio Sound Effects

- **Zero-Dependency Procedural Audio**: Uses the Web Audio API (`AudioContext`) to synthesize instant, crisp acoustic feedback without needing external MP3/WAV files.
- **Audio Palette**:
  - `playCorrectSound()`: Pleasant, ascending sine-wave chime (E5 -> A5) played immediately upon selecting a correct answer or self-evaluating workbook "Yes".
  - `playWrongSound()`: Low, subdued downward triangle-wave tone played when an incorrect answer triggers a quiz/sudden death reset, or when self-evaluating workbook "No".
  - `playSuccessChime()`: Triumphant 4-note ascending major arpeggio (C5 -> E5 -> G5 -> C6) for passing 12/12 quiz questions, submitting workbook exercises, mastering all flashcards, or hitting exam milestones.
  - `playClickSound()`: Subtle, crisp 900 Hz acoustic tick for card flips, tab changes, and UI buttons.

---

## 12. Turnkey Ingestion Protocol for New Disciplines (Uploaded Files Setup)

When the user uploads course files (slides, syllabi, lecture notes, textbook chapters, or exercises) to create or populate a new discipline, the agent executes the following turnkey pipeline from start to finish:

1. **File Ingestion & Syllabus Parsing**:
   - Inspect and extract content from all uploaded files (PDFs, PPTX, DOCX, TXT) in the conversation or artifacts directory.
   - Map out the academic scope: course title, standard abbreviation/code (e.g. `MDA`, `ECON`, `FIN`, `ML`), foundational chapters, formal mathematical definitions, notation systems, core formulas, and worked exercises.

2. **Discipline Registration**:
   - Derive a clean URL-friendly slug `id` (e.g. `econometrics-finance`).
   - Insert the new discipline record into `study_disciplines` (`id`, `name`, `code`, `description`).

3. **Granular 4–5 Segment Subdivision per Chapter**:
   - Deconstruct each chapter into **granular 4–5 segment learning units per chapter** (e.g. Chapter 1 -> L1 to L4; Chapter 2 -> L5 to L8).
   - Insert rows into `study_segments` (`discipline_id`, `order_index`, `title`, `subtitle`, `summary_markdown`).

4. **Phase 1: Comprehensive Text Guide Authoring**:
   - Write exhaustive narrative prose building deep mathematical and practical intuition from the ground up (no superficial bullet lists, no visible raw asterisks `*`, true `##` and `###` section headings).
   - Render all mathematical equations in KaTeX (`$...$` inline, `$$...$$` display) strictly configured with `output: 'html'`.
   - Incorporate concrete numerical walkthroughs and step-by-step formula derivations.
   - Ensure all concept headings generate clean anchor slugs (e.g. `### Autoregressive Models` -> `#autoregressive-models`) for bidirectional question/workbook/flashcard linking.

5. **Phase 2: 12-Question Substantive Quiz Formulation (Per Segment)**:
   - Construct exactly **12 substantive questions** per segment (4 elemental, 4 conceptual, 4 advanced).
   - Provide **6 choices each (A–F)**.
   - **Enforce Anti-Verbosity Bias Prohibition**: Correct answers must NEVER be predictably longer or more descriptive than distractors. Distractors must match the correct option in academic depth, grammar, and length (length variance strictly within 15–25%). Across any question pool, the correct option must be the longest option in at most ~10–16.7% of questions.
   - **Enforce Uniform Option Distribution**: Distribute correct answers equally across choices (exactly 2 of each letter A, B, C, D, E, F per 12-question quiz; 16.67% across aggregate banks).
   - Populate `section_reference` and `section_anchor` on every single question.
   - Author comprehensive failure explanations with deep theoretical and mathematical derivations.
   - Insert into `study_questions` (`pool_type = 'quiz'`).

6. **Phase 3: Practical Workbook Exercises Formulation (Per Segment)**:
   - Extract or formulate deep open-ended problem sets directly reflecting course workbook problem sets and exam-style assignments.
   - Author multi-part problem statements with authentic datasets, tables, and analytical derivations.
   - Write authoritative, step-by-step worked solutions formatted in KaTeX with complete proofs and numerical verifications.
   - Populate `section_reference` and `section_anchor` on every exercise.
   - Insert into `study_workbook_exercises`.

7. **Phase 4: High-Yield Flashcard Deck Formulation (Per Segment)**:
   - Formulate exactly **8 high-recall flashcards** per segment focusing on core definitions, formula interpretation, and critical decision rules.
   - Populate `section_reference` and `section_anchor` on each card for 1-click text guide jumps.
   - Insert into `study_flashcards`.

8. **Database Seeding & Migration**:
   - Execute insertions directly into the Supabase `tracker` project (`https://eurqqiebokwcrrhfbihg.supabase.co`).
   - Never touch calorie tracker tables (`food_items`, `weight_logs`) or `supabase_novae`.

9. **Automated Verification & Integrity Audit**:
   - Verify question count (exactly 12 per segment), workbook exercise presence, and flashcard count (exactly 8 per segment).
   - Verify exact uniform distribution (2 A's, 2 B's, 2 C's, 2 D's, 2 E's, 2 F's per 12-question quiz).
   - Verify that the correct option is not consistently the longest.
   - Verify all `section_anchor` tags exist in the text guide.
   - Run `npm run build` to ensure zero TypeScript, JSX, or bundling errors.

10. **Self-Updating Skill Persistence**:
    - Immediately update Section 4 of `SKILL.md` across all 5 mirror paths to document the new discipline, chapter structure, and segment mappings.
