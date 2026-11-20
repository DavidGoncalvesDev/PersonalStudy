import fs from 'fs';
import path from 'path';

const skillContent = `---
name: personal-study
description: >-
  Comprehensive guide and operational rules for the David Study (Personal Study) system.
  Use whenever the user mentions 'personal study' or 'David Study', provides slides, exercises,
  or course materials, asks to update or adapt the study app, or modifies disciplines,
  segments, quizzes, workbook exercises, and flashcards. Defines the architecture, Supabase schema,
  canonical repository location (Documents/GitHub/PersonalStudy), materials mapping,
  granular 7-segment curriculum, clear brown theme, 4-phase mastery progression
  (rich text -> 1-by-1 quiz with reset -> practical workbook exercises with writing zone & self-assessment -> flashcards),
  non-resetting quiz state, per-device & per-person user login data isolation, text guide anchoring with amber highlights,
  large fundamental explanations, elimination of longest-option bias, uniform A-F option distribution,
  live scratchpad question synchronization, iOS Apple Pencil callout suppression, scratchpad canvas with palm rejection,
  Apple Pencil priority, faded graph paper grid & pinch/wheel zoom, 'Copy for AI' formatted exercise clipboard feature,
  Exercise Zone (Random practice, Sudden Death & 50-Minute Comprehensive Exam), Preparation Score formulation,
  discipline deletion prevention, mobile optimization, Notion Knowledge Base integration ('David Study Workspace'),
  execution workflows (SOPs), and strict quality guidelines ensuring final product excellence.
---

# David Study System Skill

This skill defines the operational specifications, system architecture, database design, content pedagogy, granular segmentation rules, visual theme, progression logic, execution workflows, and quality assurance framework for the **David Study** platform (customized for multivariate data analysis and academic coursework).

> [!IMPORTANT]
> **CRITICAL AGENT ADAPTATION DIRECTIVE**:
> Whenever the user refers to \`personal study\` or \`David Study\`, uploads course files (slides, exercises, syllabi), or corrects any aspect of the system in conversation:
> 1. The agent **MUST base all work in the canonical repository**: \`C:\\Users\\david_kttkn32\\OneDrive\\Documents\\GitHub\\PersonalStudy\`.
> 2. The agent **MUST immediately update this SKILL.md file** across all repository and global locations to persist refinements.
> 3. The agent **MUST adapt the codebase, database, and Notion Knowledge Base** to reflect the new requirements or content immediately.
> 4. Any future agent loading this skill must adhere to all rules documented here.

---

## 1. Visual Theme, Branding & Navigation

- **Branding**: Titled **David Study** across the app header, browser tab (\`<title>David Study</title>\`), and favicon.
- **Header Navigation**: Clicking the header title ("David Study") or the custom book logo navigates directly back to the main levels overview (\`curriculum\` tab).
- **Logo**: The custom Book Icon PNG (warm brown leather cover, yellow title badge, cream pages). Located at \`/public/logo.png\` and in \`materials/david_study_book_logo.png\`.
- **Color Palette (Clear Warm Brown & Amber)**:
  - **Primary Brand / Headers / Active Accents**: Deep Leather Brown (\`#78350f\` / \`#6d3b14\` / \`#451a03\`).
  - **Warm Accent / Badges**: Warm Amber & Gold (\`#d97706\` / \`#b45309\` / \`#fef3c7\`).
  - **Backgrounds**: Soft Warm Cream / Sand (\`#fdfbf7\`, \`#f8f6f0\`, \`#fffbeb\`).
  - **Borders & Dividers**: Warm Tan / Stone (\`#e7e2d7\`, \`#d6cebf\`).
  - **Card Surfaces**: Pure White (\`#ffffff\`) with subtle warm shadows.
  - **Assessment & Flashcard Buttons**:
    - **Yes (Knew It / Got It Right)**: Tactile Vibrant Green (\`#16a34a\` / \`#15803d\`).
    - **No (Didn't Know / Made Mistakes)**: Tactile Crimson Red (\`#dc2626\` / \`#b91c1c\`).
- **No Native Browser Tooltips**: Never use native HTML \`title="..."\` attributes on buttons or pills. All hover information must be displayed via custom in-app React floating cards to avoid ugly, redundant browser popup balloons.
- **Level Selector Hover & Hold Delay (Anti-Instant Popup)**:
  - Hover preview cards for level pills must NEVER pop up instantly on mouse movement or on touch click.
  - Desktop hover requires a sustained **550ms hover delay** before the floating info card appears.
  - Mobile/tablet touch requires a sustained **600ms touch-and-hold** gesture.
  - Clicking or double-clicking any level pill immediately dismisses and cancels any active hover timers, ensuring clean, instant level switching without intrusive popups.
- **Strict Negative Constraint**: Avoid generic blues. Use warm, sophisticated leather brown and cream tones matching the book logo.
- **Discipline Deletion Prohibited**: Delete discipline buttons, trash icons, and deletion modals are strictly prohibited from the student user interface. Disciplines are curated academic curricula managed server-side.

---

## 2. Repository Architecture & Directory Standards

All project files and assets are based in the canonical Git repository:
\`C:\\Users\\david_kttkn32\\OneDrive\\Documents\\GitHub\\PersonalStudy\`

\`\`\`
PersonalStudy/
├── .agents/
│   └── skills/
│       └── personal-study/
│           └── SKILL.md                 # Primary repo skill (SSOT)
├── materials/                           # Official course materials (slides & workbooks)
│   ├── 01_Chapter_1_Scales_and_Distances.pdf
│   ├── 01_Chapter_1_Introduction_Overview.pdf
│   ├── 02_Chapter_2_Principal_Component_Analysis.pdf
│   ├── 03_Chapter_3_Factor_Analysis.pdf
│   ├── 04_Practical_Workbook_Exercises.pdf
│   └── david_study_book_logo.png
├── public/                              # Public web assets (favicon, logo)
├── scripts/                             # Curriculum data seeds, migrations & verification tools
│   ├── levels-data-part1.js             # Part 1: Levels 1 to 4 curriculum seeds
│   ├── levels-data-part2.js             # Part 2: Levels 5 to 7 curriculum seeds
│   ├── apply-all-balanced-questions.js  # Automated A-F quiz balancing & DB updater
│   └── merge-lu4-lu5.js                 # Merged Level 4 analytical guide and questions
├── src/                                 # Vite + React + TypeScript source code
│   ├── components/                      # UI Phase and Canvas components
│   │   ├── TextSummaryPhase.tsx         # Phase 1: Rich narrative text guide with anchors
│   │   ├── QuizPhase.tsx                # Phase 2: 12-question resetting quiz
│   │   ├── WorkbookPhase.tsx            # Phase 3: Practical workbook & writing zone
│   │   ├── FlashcardsPhase.tsx          # Phase 4: High-yield flashcard deck
│   │   ├── ExerciseZone.tsx             # Random Practice, Sudden Death & Mock Exam
│   │   ├── ExamSimulation.tsx           # 50-minute continuous paper simulation
│   │   ├── ScratchpadModal.tsx          # Universal calculation canvas with Apple Pencil priority
│   │   ├── SegmentSelector.tsx          # Level pills with hover delay
│   │   └── UserLoginModal.tsx           # Multi-user profile login modal
│   ├── utils/                           # Score calculators and audio synthesizers
│   ├── App.tsx                          # Root application container & phase manager
│   ├── main.tsx                         # Entry point
│   ├── supabaseClient.ts                # Supabase client singleton
│   └── types.ts                         # Strict TypeScript domain interfaces
├── index.html                           # HTML entry with KaTeX CSS injection
├── package.json                         # Dependencies and build scripts
├── tsconfig.json                        # TypeScript compiler options
└── vite.config.ts                       # Vite bundler configuration
\`\`\`

---

## 3. Notion Knowledge Base Integration ('David Study Workspace')

The Personal Study system is synchronized directly with the dedicated **David Study Workspace** inside Notion:

- **Master Workspace Page**: \`https://app.notion.com/p/41e0ce06915281709fd9dd076aa40cfc\`
  - **Title**: *📚 David Study — Knowledge Base & AI Hub*
  - **Map of Content (MOC)**: Houses the six core hubs:
    1. **Platform Architecture & System Design**: \`https://app.notion.com/p/41e0ce069152815b90bdec7f334ff8da\`
    2. **Curriculum Architecture & Content Map (7 Levels)**: \`https://app.notion.com/p/41e0ce06915281d2baa0e8bb303a5e36\`
    3. **The 4-Phase Mastery Pedagogy**: \`https://app.notion.com/p/41e0ce06915281c89164c548ead13ad5\`
    4. **Workflows & Execution Pipelines (SOPs)**: \`https://app.notion.com/p/41e0ce06915281a19326ed76ade861d8\`
    5. **Quality Guidelines & Verification Checklists**: \`https://app.notion.com/p/41e0ce0691528154808df94e4fd7168d\`
    6. **Concrete Production Examples**: \`https://app.notion.com/p/41e0ce069152819e910ded2434eba311\`
- **Dual-Synchronization Protocol**:
  Whenever curriculum levels, exam rules, or architectural standards are refined, the agent must ensure that both this \`SKILL.md\` file and the Notion Knowledge Base pages in the David Study workspace are synchronously updated to maintain complete alignment across all AI tools and team members.

---

## 4. Per-Device & Per-Person User Login (Isolated Data Architecture)

- **Device Login & Profile Key**:
  - Each person logs in with their student name (e.g. \`David\`, \`Sarah\`, \`Manu\`, \`Rodrigo\`).
  - **No Automatic Default to David**: The app must NEVER default to or automatically assign \`David\`. If \`localStorage.getItem('david_study_user')\` is not set, \`currentUser\` is \`null\`, and \`UserLoginModal\` is displayed immediately on open, prompting the student to enter their name or select a recent profile on that device.
  - Normalized database key: \`username = name.trim().toLowerCase().replace(/[^a-z0-9_-]/g, '')\`.
- **Database Partitioning**:
  - \`study_progress\`: Stores \`username\` column, unique composite index on \`(username, discipline_id, segment_id)\`, and \`id = 'prog_' || username || '_' || discipline_id || '_' || segment_id\`.
  - \`study_workbook_submissions\`: Stores student workbook responses and self-evaluations partitioned by \`(username, exercise_id)\`.
  - \`study_user_settings\`: Primary key \`id = username\` and column \`username\`.
  - Different users on the same device or different devices have 100% separate curriculum completion, quiz attempts, workbook submissions, flashcards, sudden death streaks, and 50-minute exam scores.
- **Header Profile Pill & Switcher**:
  - Header displays \`[ 👤 Username ]\` (or \`[ 👤 Login ]\` if unauthenticated). Clicking opens the profile modal with quick-select chips of recent profiles on that device, a student name input, and a **Sign Out** button to log out and clear the active session.

---

## 5. Text Formatting, Math Rendering & Pedagogy

1. **Full Narrative Prose (No Fragmented Bullet Outlines)**:
   - Deliver rich, readable paragraphs that build intuition from the ground up.
   - Subtitles (e.g. *Nominal Scale*, *Ordinal Scale*, *Varimax Rotation*) must always be formatted as real section headings (\`###\`), NEVER as bullet points (\`- ...\`).
2. **Zero Raw Asterisks (\`*\`) in Prose**:
   - The user does not want asterisks or formatting tokens visible in text. All bold terms and headings are formatted cleanly via HTML/CSS without exposing literal \`*\` symbols.
3. **No Raw Dividers**:
   - Do not use raw markdown dividers (\`---\`). Use subtle styling or spacing dividers.
4. **Proper KaTeX Math Formatting & Duplicate Suppression**:
   - All formulas must be cleanly rendered using KaTeX (\`$...$\` for inline, \`$$...$$\` for block display equations).
   - KaTeX must strictly be configured with \`output: 'html'\` to prevent generating MathML \`<math>\` tags, which cause duplicate numbers (such as \`0 0\` or \`1 1\`).
   - Every formula must be accompanied by intuitive explanations and concrete numerical walkthroughs.

---

## 6. Curriculum Architecture & Learning Units (Data Analysis)

The academic curriculum is structured into **7 granular, highly focused learning units** directly aligned with official lecture slides and practical exercise workbooks:

- **Discipline**: *Multivariate Data Analysis (MDA)* (\`data-analysis\`).
- **Chapter 1: Foundations & Measurement Scales**:
  - **L1**: Variable Typologies & Measurement Scales (Nominal, Ordinal, Interval, Ratio, Permissible Transformations, Dummy Variable Design Matrix) (\`ch1-scales-methods\`).
    - *Source Slide*: \`materials/01_Chapter_1_Scales_and_Distances.pdf\`
  - **L2**: Data Manipulation Fundamentals & Distance Metrics (Sums of Squares, Covariance, Correlation, Euclidean vs Statistical vs Mahalanobis $D^2$, Metric Space Axioms) (\`ch1-manipulation-distances\`).
    - *Source Slide*: \`materials/01_Chapter_1_Scales_and_Distances.pdf\`
- **Chapter 2: Principal Component Analysis (PCA)**:
  - **L3**: Geometric Foundations & Projections (12-Customer Bivariate Case, Coordinate Rotation $\theta = 43.26^\circ$, Variance Maximization along $PC_1$, Orthogonal Complement $PC_2$, Centered Subspace $\min(p, n-1)$) (\`ch2-pca-geometry\`).
    - *Source Slide*: \`materials/02_Chapter_2_Principal_Component_Analysis.pdf\`
  - **L4**: Covariance vs. Correlation, Loadings & Retention Diagnostics (The Scale Sensitivity Problem: $c^2$ Variance Inflation, Standardized Correlation PCA $\text{tr}(R) = p$, 25 US Cities Food Prices, 4 Fundamental Quantities: $\lambda_i, w_i, t_{hi}, l_{ji}$, Kaiser Criterion $\lambda > 1$, Cattell Scree Elbow Rule, Cumulative Variance $\ge 70\%$, Portuguese 7 Regions Case Study, SAS \`PROC PRINCOMP COV\` vs Python \`StandardScaler\` + \`PCA\`) (\`ch2-pca-analytical\`).
    - *Source Slide*: \`materials/02_Chapter_2_Principal_Component_Analysis.pdf\`
- **Chapter 3: Factor Analysis (FA)**:
  - **L5**: Latent Variable Theory & Variance Decomposition (Spearman Common Factor Model, 6-Course Grades, Total Variance Decomposition $1.0 = h_j^2 + u_j^2$, Communality vs Uniqueness, Reproduced Correlations $\hat{r}_{jk}$, Reflective vs Formative Models) (\`ch3-fa-theory\`).
    - *Source Slide*: \`materials/03_Chapter_3_Factor_Analysis.pdf\`
  - **L6**: Indeterminacies & Extraction Methods (The Two Inherent Indeterminacies: Factor Rotation & Communality Estimation Circularity, Principal Component Factoring vs Iterated Principal Axis Factoring, Residual Matrix $R_{\text{res}} = R - \hat{R}$, RMSR $\le 0.08$) (\`ch3-fa-extraction\`).
    - *Source Slide*: \`materials/03_Chapter_3_Factor_Analysis.pdf\`
  - **L7**: Sampling Adequacy, Rotations & FA vs PCA (Kaiser-Meyer-Olkin MSA Benchmarks, Bartlett Sphericity, Anti-Image Matrix, Varimax vs Quartimax vs Oblique Promax, Pattern vs Structure Matrices, Heywood Cases, 6 Systematic Differences PCA vs FA) (\`ch3-fa-rotation-evaluation\`).
    - *Source Slide*: \`materials/03_Chapter_3_Factor_Analysis.pdf\`

---

## 7. Four-Phase Mastery Progression per Segment

Each learning unit follows a rigorous 4-phase mastery progression:

### Phase 1: Comprehensive Text Guide
- Exhaustive foundational prose with worked examples and formula walkthroughs.
- Auto-generates clean URL/anchor slugs on all \`##\` and \`###\` headers.
- **Universal Reference Anchoring & Highlighting**:
  - Every single question (84 quiz questions across L1–L7), workbook exercise (8 across L1–L7), and flashcard (56 across L1–L7) has dedicated \`section_reference\` and \`section_anchor\` populated in Supabase.
  - When jumped to from a live quiz question, workbook exercise, or flashcard, the target section is highlighted with an amber callout border (\`border: 2.5px solid #d97706\`, \`#fffbeb\`) and a dynamic badge.
  - Automatically smooth-scrolls the highlighted section into view (\`scrollMarginTop: 110px\`).
  - Displays a sticky top banner with bidirectional return:
    \`[← Return to Question X]\`, \`[← Return to Workbook Exercise X]\`, or \`[← Return to Flashcards]\`.
  - All quiz progress, workbook drafts/submissions, and flashcard queues are maintained with zero resets.
- Clicking **"Mark Text as Understood & Take Quiz"** navigates to Phase 2.

### Phase 2: Level Quiz (1 Question at a Time • Immediate Reset on Error)
- **Question Format**: Exactly **12 substantive questions** (4 elemental, 4 conceptual, 4 advanced) with **6 choices each (A–F)**.
- **Strict Prohibition of Length Cues & Longest-Option Bias ("Anti-Verbosity Bias")**:
  - The correct answer must **never** be predictably longer, more descriptive, or more grammatically complex than distractors.
  - Distractors must match the correct answer in academic depth, technical vocabulary, sentence length, and structural detail (length variance strictly within 15–25%).
  - Across any question set or bank, the correct option must be the longest option in at most ~10–16.7% of questions (matching uniform random expectation among 6 choices).
- **Strict Uniform Option & Letter Distribution**:
  - Across every 12-question quiz, correct choices must be strictly and uniformly distributed across A, B, C, D, E, F (**exactly 2 of each letter per 12 questions**).
  - In aggregate question pools and exams, every letter option (A–F) must maintain an equal ~16.7% frequency.
- **Strict Curriculum Grounding (Authoritative Lecture Slides & Practical Exercises Only)**:
  - Every quiz question, exercise, and flashcard must be **strictly and exclusively grounded in the provided course materials**.
  - **Zero Overcomplication**: Avoid untelegraphed graduate-level linear algebra minutiae (such as Taylor series expansions of rotation matrices or coordinate reflection proofs) that are neither taught in the slides nor present in the exercise sheets.
  - **Zero Programmatic / Robotic Distractor Filler**: NEVER programmatically append repetitive boilerplate academic suffixes to balance length. All distractors must be substantive, plausible domain-specific misconceptions directly tied to course topics.
- **Strict Reset on Failure**:
  - The user must score **12/12 in a single consecutive run**!
  - If the user selects an incorrect answer on ANY question, the quiz is reset back to Question 1 (0/12).
- **Large, Fundamental Explanations on Failure**:
  - Failure cards display a comprehensive theoretical breakdown explaining the underlying mathematical principles, analytical derivations, why the correct answer holds, and why each distractor is invalid.
- **"What am I inclined" Helper Feature (Elimination & Pre-decision Tag)**:
  - Appears on the right side of every multiple choice option (A–F).
  - Fixed-width button cycling: Faded No -> Active No (Red) -> Maybe (Amber) -> Yes (Green) -> Unclicked.
- **Immediate Retake for Practice**:
  - Clicking **"Retake Quiz for Practice"** immediately presents Question 1 of 12 for active re-testing without being bounced back to completion screen.

### Phase 3: Practical Workbook Exercises (In-Depth Course Problem Sets)
- **Pedagogical Purpose**: Moves beyond multiple-choice recognition into active, open-ended problem solving directly reflecting university course workbooks (e.g. \`materials/04_Practical_Workbook_Exercises.pdf\`).
- **Interactive Writing Zone & Scratchpad**:
  - Large expandable text area below the prompt allowing the student to write formulas, derivations, matrix values, and conclusions.
  - Live draft autosaving in \`localStorage\` (\`david_study_wb_draft_\${username}_\${exerciseId}\`).
- **Copy for AI & Consistent Tooling Naming**:
  - **"Copy for AI" on All Exercises & Solutions**: Every workbook exercise features a standard **"Copy for AI"** button on the problem card, plus a **"Copy Solution for AI"** button on the revealed solution card.
  - **Strict Terminology Consistency**: The notes and drawing tool is **strictly named "Scratchpad / Notes"** (desktop) and **"Notes"** (mobile). The agent must **NEVER invent new, one-off, or arbitrary names** (e.g. "Apple Pencil Canvas").
- **Turn-In & Self-Assessment Workflow**:
  1. **"Turn In Exercise & Check Solution"**: Commits the student's written response to Supabase table \`study_workbook_submissions\`.
  2. **Authoritative Worked Solution**: Immediately unrolls the complete step-by-step mathematical proof, matrix transformations, and numerical answers rendered via KaTeX.
  3. **Self-Assessment Feedback Bar**: The student compares their response against the authoritative worked solution and self-evaluates with two tactile buttons:
     - \`[ ✕ No, I made mistakes ]\` (Crimson red): Records need for improvement.
     - \`[ ✓ Yes, I got it right! ]\` (Vibrant green): Confetti burst, marks \`workbook_passed = true\`, unlocks Phase 4.

### Phase 4: High-Yield Flashcards
- Fast-recall cards with question on front, answer/insight on back.
- **Universal Reference Text Guide Link**: Every card features a \`"📖 Reference Text Guide"\` button for instant jumps.
- Self-assessment: **Yes (Green)** vs **No (Red)**.
- **100% Mastery Rule**: All cards must be answered "Yes" to complete the deck.
- **Non-Resetting Mastery Persistence**: Preserved in DOM and \`localStorage\` under \`david_study_fc_\${username}_\${segmentId}\`.

---

## 8. Exercise Zone & 50-Minute Comprehensive Exam

The Exercise Zone provides three specialized training modes:

### Mode A: Random Practice
- Draws random questions from topics the user has unlocked.
- Immediate feedback with large fundamental explanation on every question.

### Mode B: Sudden Death Minigame
- High-stakes consecutive streak challenge: 1 mistake resets streak to 0!
- Tracks Current Streak (🔥) and all-time Best Streak (🏆).

### Mode C: 50-Minute Comprehensive Exam Paper Simulation
- **Full Course Coverage**: Proportional sampling across all 7 learning units (25 substantive questions).
- **Continuous Paper Format**: All 25 questions presented in a row on a single paper.
- **50-Minute Countdown Clock**: Prominent timer with yellow and red alerts for the final 5 minutes; auto-submits on expiration.
- **Sticky Jump Navigator**: Horizontal swipeable bar (1..25) highlighting answered, unanswered, and flagged questions.
- **Comprehensive Grading & Review**: Generates score %, tier (Distinction 85%+, Merit 75%+, Pass 50%+), question-by-question review with KaTeX solutions.

### Preparation Score Algorithm (0% to 100%)
$$\\text{Preparation Score} = \\min(100, \\text{round}(C + A + E + P + D))$$

1. **Curriculum Completion ($C$, up to 40 points)**: $C = 40 \\times \\frac{\\text{completed\\_segments}}{\\text{total\\_segments}}$.
2. **Quiz First-Time Efficiency ($A$, up to 20 points)**: Rewards passing quizzes on 1st attempt ($2.85$ pts per segment for 7 segments).
3. **50-Minute Comprehensive Exam ($E$, up to 20 points)**: $E = \\min(20, \\frac{\\text{exam\\_best\\_score}}{100} \\times 20)$.
4. **Random Practice Volume ($P$, up to 10 points)**: $P = \\min(10, \\text{random\\_exercises\\_completed} \\times 0.5)$.
5. **Sudden Death Streak ($D$, up to 10 points)**: $D = \\min(10, \\text{best\\_streak} \\times 0.5)$.

---

## 9. Global Scratchpad / Calculation Canvas

- **Openable Everywhere & Live Question Sync**: Passing the active question dynamically updates the corner HUD reference card.
- **Apple Pencil & Stylus Priority**: Preempts resting hand contacts, bypasses pinch-zoom for pen strokes, renders single-tap dots instantly.
- **Palm Rejection & iOS Callout Suppression**: Suppresses native iOS 18 callouts (\`[Copy | Search with AI]\`) via pointer capture, touch-action, and selection event interception.
- **Faded Warm Graph Paper Grid**: Subtle 24px minor and 120px major grid lines scaling with zoom/pan. Transparent canvas bitmap allows grid to show through.
- **Two-Finger Pinch Zoom & Rolling Wheel Pan**: Scale from 0.4x to 3.5x with floating zoom reset HUD.

---

## 10. Database Architecture (Supabase tracker Project)

- **Target Project**: \`https://eurqqiebokwcrrhfbihg.supabase.co\` (\`tracker\`).
- **Strict Prohibition**: Completely avoid \`supabase_novae\` / Nova UI. Never touch calorie tracker tables (\`food_items\`, \`weight_logs\`).
- **Tables**:
  - \`study_disciplines\`: \`id, name, code, description, created_at\`
  - \`study_segments\`: \`id, discipline_id, order_index, title, subtitle, summary_markdown, created_at\`
  - \`study_questions\`: \`id, segment_id, order_index, difficulty, question, options (jsonb), correct_option, explanation, pool_type, section_reference, section_anchor, created_at\`
  - \`study_workbook_exercises\`: \`id, segment_id, order_index, title, difficulty, prompt_markdown, solution_markdown, section_reference, section_anchor, created_at\`
  - \`study_workbook_submissions\`: \`id, username, exercise_id, segment_id, user_response, self_evaluated_correct, submitted_at, updated_at\`
  - \`study_flashcards\`: \`id, segment_id, order_index, category, front, back, created_at\`
  - \`study_progress\`: \`id, username, discipline_id, segment_id, text_completed, quiz_passed, quiz_score, quiz_attempts, workbook_passed, flashcards_passed, completed, manually_unlocked, updated_at\`
  - \`study_user_settings\`: \`id (username), username, unlock_all, active_discipline_id, preparation_score, sudden_death_best_streak, sudden_death_current_streak, random_exercises_completed, total_correct_answers, total_wrong_answers, exam_best_score, exam_last_score, exam_attempts, updated_at\`
- **Double-Click Unlocking**: Double-clicking any level pill unlocks it directly, setting \`manually_unlocked = true\`.

---

## 11. Standard Operating Procedures (Workflows)

### SOP 1: Ingesting New Slides/Workbooks into a Discipline
1. Copy official PDFs into \`PersonalStudy/materials/\`.
2. Map lecture slides into granular, focused learning units (2 to 4 segments per chapter).
3. Insert metadata records into \`study_segments\` via Supabase.
4. Update local curriculum seed scripts (\`scripts/levels-data-part1.js\` or \`part2.js\`).

### SOP 2: Formulating & Balancing Quiz Questions
1. Formulate 12 substantive questions grounded strictly in official slides.
2. Formulate 5 high-yield distractors per question targeting authentic student misconceptions.
3. Enforce length parity: no option may deviate by >25% from average option length.
4. Assign correct options uniformly across choices: **exactly 2 A, 2 B, 2 C, 2 D, 2 E, 2 F**.
5. Populate \`section_reference\` and \`section_anchor\` on every question.
6. Seed to Supabase table \`study_questions\` using \`scripts/apply-all-balanced-questions.js\`.

### SOP 3: Authoring Practical Workbook Exercises
1. Extract authentic problem sets from \`materials/04_Practical_Workbook_Exercises.pdf\`.
2. Construct detailed multi-part prompt statements with concrete datasets.
3. Write complete step-by-step worked solutions rendered in KaTeX.
4. Seed to Supabase table \`study_workbook_exercises\`.

### SOP 4: Pre-Deployment Build & Verification
1. Run \`npm run build\` inside \`PersonalStudy/\` to ensure zero TypeScript/JSX errors.
2. Run database audit script verifying 12 questions per quiz, 8 flashcards, and uniform distribution.
3. Commit and push to \`origin main\`.

---

## 12. Quality Assurance Guidelines Ensuring Final Product Excellence

1. **Anti-Verbosity Rule**: The correct answer must NEVER dominate as the longest choice. Across any bank, correct answer is longest in at most ~16.7% of questions.
2. **Zero Robotic Filler**: Never use repetitive boilerplate academic suffixes to artificially inflate distractor length.
3. **Strict Grounding**: Never introduce abstract graduate-level lemmas not found in the lecture slides.
4. **No Discipline Deletion**: Prohibit any delete buttons for disciplines in the user interface.
5. **KaTeX HTML Only**: Configure KaTeX with \`output: 'html'\` to prevent duplicate number rendering.
6. **Anti-Instant Popup**: Require 550ms hover delay on desktop and 600ms hold on touch for level preview cards.
7. **Apple Pencil Priority**: Lock stylus pointer events; suppress iOS 18 text selection and AI callouts during drawing.
8. **Zero Asterisks**: Never leave raw \`*\` in text guide prose; use semantic HTML headings and spans.

---

## 13. Pre-Deployment Quality Checklist

Before publishing new content or deploying application updates, verify:
- [ ] Exactly 12 questions per quiz with 6 choices each (A–F).
- [ ] Exactly 2 of each option letter (2 A, 2 B, 2 C, 2 D, 2 E, 2 F) per 12-question quiz.
- [ ] Correct answer is not predictably the longest option (length variance <20%).
- [ ] KaTeX formulas render cleanly without duplicate numbers or broken syntax.
- [ ] Every question, exercise, and flashcard has a valid \`section_anchor\` linking to the text guide.
- [ ] All workbook exercises include a writing zone, "Copy for AI", and self-evaluation buttons.
- [ ] \`npm run build\` exits with code 0.
`;

const targetPaths = [
  'C:/Users/david_kttkn32/OneDrive/Documents/GitHub/PersonalStudy/.agents/skills/personal-study/SKILL.md',
  'C:/Users/david_kttkn32/OneDrive/Desktop/.agents/skills/personal-study/SKILL.md',
  'C:/Users/david_kttkn32/.gemini/config/skills/personal-study/SKILL.md',
  'C:/Users/david_kttkn32/.gemini/skills/personal-study/SKILL.md',
  'C:/Users/david_kttkn32/.gemini/antigravity/skills/personal-study/SKILL.md'
];

targetPaths.forEach(targetPath => {
  const dir = path.dirname(targetPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(targetPath, skillContent, 'utf8');
  console.log('Successfully written to:', targetPath);
});
