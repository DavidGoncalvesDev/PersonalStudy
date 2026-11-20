---
title: "Platform Architecture & System Design"
aliases:
  - "System Design"
  - "Tech Stack"
  - "Supabase Tracker"
tags:
  - david-study
  - architecture
  - supabase
  - engineering
type: second-brain
created: 2026-11-20
updated: 2026-11-20
---

> [!abstract] System Design & Engineering Architecture
> **System Design & Engineering Architecture**
> 
> Technical specifications, database topology, client-side state isolation, math rendering engine, and hardware pen input handling for the David Study platform.

---

## 1. Technical Stack & Repository Topology

- **Repository Root**: `C:\Users\david_kttkn32\OneDrive\Documents\GitHub\PersonalStudy`
- **Frontend Core**: React 18 (TypeScript), Vite 6, Tailwind CSS 3.
- **Math Rendering Engine**: KaTeX strictly configured with `output: 'html'`.
  - *Duplicate Prevention*: When KaTeX outputs MathML (`&lt;math&gt;`) alongside HTML markup, screen readers and modern browsers duplicate numbers (e.g. `0 0` or `1 1`). Emitting HTML-only completely eliminates ghost duplicate characters.
- **Procedural Acoustic Engine**: Web Audio API (`AudioContext`) synthesizing real-time sine/triangle waves (correct chime, error tone, success arpeggio, card tick) with zero external MP3/WAV dependencies.
- **State Persistence**: Dual-layer architecture:
  - Fast client-side optimistic UI state and autosaving drafts in `localStorage`.
  - Asynchronous background synchronization to cloud Supabase tables.

---

## 2. Database Schema (Supabase tracker)

Target Project URL: `https://eurqqiebokwcrrhfbihg.supabase.co` (Database: `tracker`).

| Table | Primary Key | Key Columns | Purpose |
| --- | --- | --- | --- |
| `study_disciplines` | `id` | `name, code, description` | Curated academic subject tracks |
| `study_segments` | `id` | `discipline_id, order_index, title, subtitle, summary_markdown` | Granular learning units per chapter |
| `study_questions` | `id` | `segment_id, difficulty, question, options (jsonb), correct_option, explanation, pool_type, section_anchor` | 84 quiz questions + 126 practice questions |
| `study_workbook_exercises` | `id` | `segment_id, title, difficulty, prompt_markdown, solution_markdown, section_anchor` | In-depth university workbook problem sets |
| `study_workbook_submissions` | `id` | `username, exercise_id, segment_id, user_response, self_evaluated_correct, submitted_at` | Student written solutions and self-evaluations |
| `study_flashcards` | `id` | `segment_id, order_index, category, front, back` | 8 high-yield atomic cards per segment |
| `study_progress` | `id` | `username, discipline_id, segment_id, text_completed, quiz_passed, quiz_score, workbook_passed, flashcards_passed, completed, manually_unlocked` | Isolated student progress records |
| `study_user_settings` | `id (username)` | `username, unlock_all, preparation_score, sudden_death_best_streak, exam_best_score, total_correct_answers` | Student profile metrics and exam stats |

---

## 3. Multi-User Isolation & Security Model

- **Normalized Username**: `username = name.trim().toLowerCase().replace(/[^a-z0-9_-]/g, '')`.
- **Anti-Defaulting Guard**: The application must NEVER default to or automatically log in as \`David\`. If \`localStorage.getItem('david_study_user')\` is null, \`currentUser\` is \`null\` and \`UserLoginModal\` opens immediately.
- **Strict Data Partitioning**: All progress, quiz scores, workbook drafts, flashcard states, sudden death streaks, and mock exam scores are keyed on \`username\`. Different students on the same machine have 100% data isolation.
- **Discipline Deletion Prohibition**: Deletion controls (trash icons, delete discipline buttons) are strictly prohibited from the student UI. Disciplines are curated academic curricula managed exclusively via migrations.

---

## 4. Hardware Pen Input & Canvas Engineering

- **Apple Pencil Priority**:
  - Uses \`PointerEvent\` listeners. When \`e.pointerType === 'pen'\`, the application preempts resting palm contact and gives exclusive drawing priority to the stylus.
  - Stylus touches are bypassed by pinch-zoom handlers to prevent hand movements from scaling the canvas while writing.
  - Immediate single-tap dot rendering (\`ctx.arc\` / \`ctx.fill\`) renders decimal points and punctuation instantly.
- **Palm Rejection & iOS 18 Callout Suppression**:
  - Dynamically injects \`touch-action: none !important; -webkit-touch-callout: none !important; -webkit-user-select: none !important;\` to body and canvas while the scratchpad is active.
  - Intercepts and suppresses iOS 18 contextual callouts (\`[Copy \| Search with AI \| Look Up]\`) via pointer capture (\`canvas.setPointerCapture\`).
- **Warm Graph Paper Grid**:
  - Rendered on warm cream sheet (\`#fffdfa\`) resting on desk surface (\`#ece6dc\`).
  - Subtle grid lines (24px minor, 120px major) that scale dynamically with zoom and pan.
  - Transparent canvas bitmap ensures erasing removes ink without ever erasing background grid lines.

---

## 5. Preparation Score Formula

$$\text{Preparation Score} = \min(100, \text{round}(C + A + E + P + D))$$

1. **Curriculum Completion (****$C$****, up to 40 pts)**: $C = 40 \times \frac{\text{completed_segments}}{\text{total_segments}}$.
2. **Quiz First-Time Efficiency (****$A$****, up to 20 pts)**: Rewards passing 12/12 quizzes on 1st attempt ($2.85$ pts per level for 7 levels).
3. **50-Minute Comprehensive Exam (****$E$****, up to 20 pts)**: $E = \min(20, \frac{\text{exam_best_score}}{100} \times 20)$.
4. **Random Practice Volume (****$P$****, up to 10 pts)**: $P = \min(10, \text{random_exercises_completed} \times 0.5)$.
5. **Sudden Death Streak (****$D$****, up to 10 pts)**: $D = \min(10, \text{best_streak} \times 0.5)$.
