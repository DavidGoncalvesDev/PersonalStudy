---
name: personal-study
description: >-
  Comprehensive guide and operational rules for the Personal Study system.
  Use whenever the user mentions 'personal study', provides slides, exercises,
  or course materials, asks to update or adapt the study app, or modifies disciplines,
  segments, quizzes, and flashcards. Defines the architecture, Supabase schema,
  3-phase mastery progression (text -> 12-question 6-choice quiz -> flashcards),
  Netlify deployment, and self-updating guidelines.
---

# Personal Study System Skill

This skill defines the specifications, system architecture, database design, content pedagogy, and progression logic for the **Personal Study** platform.

> [!IMPORTANT]
> **CRITICAL AGENT ADAPTATION DIRECTIVE**:
> Whenever the user refers to `personal study`, uploads course files (slides, exercises, syllabi), or corrects any aspect of the system in conversation:
> 1. The agent **MUST immediately update this SKILL.md file** to track and persist the user's instructions and refinements.
> 2. The agent **MUST adapt the codebase and database** to reflect the new requirements or content immediately.
> 3. Any future agent loading this skill must adhere to all rules documented here.

---

## 1. Project Overview & Hosting

- **Repository**: `Documents/GitHub/Personal Study Insider` (mapped to `C:\Users\david_kttkn32\OneDrive\Documents\GitHub\PersonalStudy`).
- **Remote**: `https://github.com/DavidGoncalvesDev/PersonalStudy.git`
- **Hosting Target**: Netlify (compatible with standard static / SPA deployment, e.g. `npm run build` -> `dist/` with `_redirects` or clean client bundle).
- **Multi-Device Support**: Responsive web application running smoothly on mobile, tablet, and desktop devices, keeping study progress synced in the cloud.

---

## 2. Database & Backend (Supabase)

- **Target Database**: The Supabase project named **`tracker`** (`https://eurqqiebokwcrrhfbihg.supabase.co`).
- **STRICT PROHIBITION**:
  - **Completely avoid Nova UI / `supabase_novae`**. Never query, modify, or interact with any Novae project or tables.
  - **Strict Table Isolation**: The `tracker` database also hosts calorie tracker tables (`food_items`, `weight_logs`). The Personal Study system MUST ONLY use dedicated tables prefixed with `study_`:
    - `public.study_disciplines`
    - `public.study_segments`
    - `public.study_questions`
    - `public.study_flashcards`
    - `public.study_progress`
- **Row Level Security (RLS)**: Public anon full access enabled on all `study_*` tables so client apps can read content and write user study progress across all devices without friction.

### Database Schema Reference

```sql
-- Disciplines (e.g. Data Analysis)
CREATE TABLE public.study_disciplines (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    code TEXT,
    description TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Segments / Levels within a discipline
CREATE TABLE public.study_segments (
    id TEXT PRIMARY KEY,
    discipline_id TEXT NOT NULL REFERENCES public.study_disciplines(id) ON DELETE CASCADE,
    order_index INT NOT NULL,
    title TEXT NOT NULL,
    subtitle TEXT,
    summary_markdown TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 12 Questions per segment (4 easy, 4 intermediate, 4 hard; 6 choices each)
CREATE TABLE public.study_questions (
    id TEXT PRIMARY KEY,
    segment_id TEXT NOT NULL REFERENCES public.study_segments(id) ON DELETE CASCADE,
    order_index INT NOT NULL,
    difficulty TEXT NOT NULL CHECK (difficulty IN ('easy', 'intermediate', 'hard')),
    question TEXT NOT NULL,
    options JSONB NOT NULL, -- Array of 6 objects: [{"id": "a", "text": "..."}, ...]
    correct_option TEXT NOT NULL,
    explanation TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Flashcards for segment reinforcement
CREATE TABLE public.study_flashcards (
    id TEXT PRIMARY KEY,
    segment_id TEXT NOT NULL REFERENCES public.study_segments(id) ON DELETE CASCADE,
    order_index INT NOT NULL,
    front TEXT NOT NULL,
    back TEXT NOT NULL,
    category TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- User Progress tracking across devices
CREATE TABLE public.study_progress (
    id TEXT PRIMARY KEY,
    discipline_id TEXT NOT NULL REFERENCES public.study_disciplines(id) ON DELETE CASCADE,
    segment_id TEXT NOT NULL REFERENCES public.study_segments(id) ON DELETE CASCADE,
    text_completed BOOLEAN DEFAULT FALSE,
    quiz_passed BOOLEAN DEFAULT FALSE,
    quiz_score INT DEFAULT 0,
    quiz_attempts INT DEFAULT 0,
    flashcards_passed BOOLEAN DEFAULT FALSE,
    completed BOOLEAN DEFAULT FALSE,
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 3. Discipline Management

1. **Multi-Discipline Support**:
   - The user can have multiple disciplines (e.g., *Data Analysis*, *Machine Learning*, *Database Systems*).
   - The UI includes a clean discipline switcher dropdown.
2. **Easy Deletion**:
   - When a semester or exam finishes, the user can easily delete any discipline directly from the UI or via prompt.
   - Deleting a discipline cascades automatically in PostgreSQL to delete all its segments, questions, flashcards, and progress records.

---

## 4. Content Creation & Pedagogy Guidelines

When transforming raw course materials (slides, workbooks, lecture notes) into study content:
1. **Focus on What's Important**:
   - Filter out confusing fluff, excessive historical tangents, or cluttered formatting.
   - Laser-focus on core foundations, underlying mechanics, key formulas, and concepts that exam exercises actually test.
2. **High Digestibility**:
   - Structure text with clear headings, concise bullet points, callout boxes for crucial definitions, and intuitive step-by-step examples.
   - Emphasize "why" and "how to solve", matching the exercise workbooks directly.

---

## 5. Segment / Level-Based Progression Logic

The study journey progresses from **0% (know nothing)** to **100% (full mastery)**. Each topic is divided into sequential **Segments / Levels**.

### 3-Phase Mastery per Segment:

#### Phase 1: Pure Text Summary
- Pure written text, deeply segmented and easy to read.
- Highlights the most important concepts with visual callouts and concrete examples.
- Once read and understood, the user clicks **"Mark Text as Understood & Continue"** to unlock the Quiz.

#### Phase 2: Exercises / Quiz
- **Exact Count**: Exactly **12 questions** per segment.
  - **4 Easy / Elemental**: Fundamentals, basic definitions, direct properties.
  - **4 Intermediate**: Concepts, interpretation of models, criteria selection.
  - **4 Hard**: Calculations, mathematical decompositions, multi-step output interpretations.
- **Exact Format**: Exactly **6 choices** per question, with **1 correct answer**.
  - Choices must be substantive, thoughtful, and content-focused (no single-word or trivial throwaways).
- **Strict Mastery Rule**:
  - The user **MUST get all 12 questions correct (100%)** to pass!
  - If the user scores anything less than 12/12, they **CANNOT move on** to flashcards.
  - They **MUST redo the ENTIRE test** (all 12 questions), not just the failed question.
  - Quick, clean quiz UI with instant feedback and explanations upon submission.

#### Phase 3: Flashcards
- Fast recall cards covering definitions, formulas, and rules.
- Card flips to reveal the answer.
- Self-assessment buttons:
  - **Yes (Green)**: "I knew it"
  - **No (Red)**: "I didn't know it"
- **Strict Mastery Rule**:
  - The user **MUST get all flashcards correct (100% Yes)** in the session to complete the phase.
  - Any "No" resets or re-queues until 100% mastery is achieved.

#### Completion & Segment Freedom:
- Once all 3 phases are complete:
  - The segment is marked **Completed** (Green checkmark).
  - The discipline progress bar increments (e.g. 1/3 = 33%, 2/3 = 67%, 3/3 = 100%).
  - The next segment unlocks automatically.
  - Completed segments can be revisited anytime for review.
- **"Unlock All Segments" Toggle**:
  - Located in the segment selector, allowing the user to bypass locks and jump straight to any segment when needed for quick revision.

---

## 6. UI / UX Design Standards

- **Aesthetic**: Minimalist, clean, elegant, modern, focused. No juvenile gamification, but clear visual sense of progress and mastery.
- **Attention to Micro-Details**:
  - Smooth custom dropdown selectors for disciplines and segments.
  - Refined typography and readable line heights.
  - Clean card elevation and subtle borders.
  - Flashcard action buttons: Beautiful, tactile **Yes (Vibrant Emerald Green)** and **No (Crimson Red)** buttons.
  - Clear progress bar at the top of the app showing percentage completed.
  - Responsive design adapting gracefully to desktop, tablet, and mobile.

---

## 7. Current Disciplines & Content Index

### Discipline: Data Analysis (`data-analysis`)
- **Segment 1**: Fundamentals of Data Analysis, Measurement Scales, & Distance Metrics
  - *Covers*: Measurement scales (Nominal, Ordinal, Interval, Ratio; dummy variables $k-1$); Dependence vs Interdependence methods; Mean, mean-corrected data, degrees of freedom ($n-1$), variance, covariance, Pearson correlation coefficient; Geometric observation space ($\cos\alpha = r$); Euclidean vs Statistical vs Mahalanobis distances and metric properties.
- **Segment 2**: Principal Components Analysis (PCA)
  - *Covers*: Objectives & dimensionality reduction; Covariance vs Correlation PCA (scale sensitivity); Optimization, eigenvalues ($\det(S-\lambda I)=0$) and eigenvectors; Loadings ($l_{ji} = w_{ij}\sqrt{\lambda_i}/s_j$) vs weights vs scores; Kaiser criterion ($\lambda > 1$), scree plot, cumulative variance; Scores interpretation, plotting, and SAS/Python code. Includes workbook applications (US food prices, Brand X sales, Junior executive job attitudes).
- **Segment 3**: Factor Analysis (FA)
  - *Covers*: Latent factor model ($x_j = \lambda_{j1}\xi_1 + \dots + \epsilon_j$); Total variance decomposition: Communality ($h^2$) + Unique variance ($u^2$); Pattern loadings vs Structure loadings; Orthogonal vs Oblique models ($\Phi_{12} \ne 0$); Factor indeterminacy (rotation indeterminacy & communality circularity); Principal Components Factoring (PCF) vs Principal Axis Factoring (PAF) iteration; Goodness of fit (RMSR); Appropriateness checks (correlation matrix, anti-image partial correlations, KMO thresholds: $\ge 0.90$ Marvelous, $> 0.80$ Meritorious, $> 0.70$ Middling, $> 0.60$ Mediocre, $> 0.50$ Miserable, $\le 0.50$ Unacceptable); Rotations: Varimax (column simplification) vs Quartimax (row simplification) vs Equamax/Promax/Oblimin; Exploratory (EFA) vs Confirmatory (CFA); Workbook problems (Brand perception, Student test battery, E-car adoption, Nutrition survey).
