---
title: "The 4-Phase Mastery Pedagogy"
aliases:
  - "Pedagogy"
  - "Mastery Progression"
  - "Learning Flow"
tags:
  - david-study
  - pedagogy
  - quiz
  - workbook
  - flashcards
type: second-brain
created: 2026-11-20
updated: 2026-11-20
---

> [!success] Pedagogical Progression Protocol
> **Pedagogical Progression Protocol**
> 
> Every learning unit enforces a 4-phase mastery progression: Narrative Understanding $\to$ Active Testing $\to$ Open-Ended Practical Problem Solving $\to$ High-Recall Flashcards.

---

## Phase 1: Comprehensive Text Guide

- **Exhaustive Narrative Prose**: Builds mathematical and domain intuition from the ground up without superficial bullet summaries.
- **Semantic Formatting**: Real section headings (`###`), zero visible raw asterisks, zero raw markdown dividers.
- **Dynamic Anchor Slugs**: Auto-generates clean URL anchors for bidirectional question/workbook/flashcard cross-referencing.
- **Universal Amber Highlighting**: Clicking "Reference Text Guide" from any quiz question, workbook exercise, or flashcard smooth-scrolls to the target heading and wraps it in an amber callout border (`border: 2.5px solid #d97706`).
- Sticky return banner enables returning to the active problem with zero state resets.

---

## Phase 2: 12-Question Substantive Quiz (1-by-1 • Immediate Reset)

- **Question Composition**: Exactly **12 substantive questions** per quiz (4 elemental, 4 conceptual, 4 advanced).
- **6 Options per Question (A–F)**: Rigorous 6-choice multiple choice design.
- **Strict Uniform Option Distribution**: Exactly **2 A, 2 B, 2 C, 2 D, 2 E, 2 F** across each 12-question quiz.
- **Strict Anti-Verbosity Prohibition**: The correct choice must NEVER dominate as the longest option. Distractors match the correct option in depth, grammar, and length (length variance strictly within 15–25%).
- **Immediate Reset on Error**: Scoring 12/12 in a single consecutive run is strictly required. Any wrong answer resets the quiz back to Question 1.
- **Large Explanations on Failure**: Complete theoretical derivations showing why the chosen option is incorrect and why the target choice holds.
- **What am I Inclined**: Tactical elimination helper (No / Maybe / Yes).
- **Practice Retake**: Allows students who passed 12/12 to actively retake the quiz for practice without getting stuck on the completed screen.

---

## Phase 3: Practical Workbook Exercises (In-Depth Problem Sets)

- **Direct Alignment**: Reflects actual university homework and exam problem sets from `04_Practical_Workbook_Exercises.pdf`.
- **Interactive Writing Zone**: Large expandable text area with live autosaving in `localStorage`.
- **Tooling Consistency**: Scratchpad tool is strictly named "Scratchpad / Notes" on desktop and "Notes" on mobile.
- **Copy for AI**: Dedicated one-click button on problem and solution cards to copy formatted exercise prompts for AI assistance.
- **Turn-In & Self-Assessment Workflow**:
  1. Student writes derivations and clicks **Turn In Exercise & Check Solution**.
  2. Commits response to Supabase table `study_workbook_submissions`.
  3. Displays complete step-by-step worked solution formatted in KaTeX.
  4. Self-assessment feedback bar:
     - `[✕ No, I made mistakes]` (Crimson Red): Subdued error tone; records need for improvement.
     - `[✓ Yes, I got it right!]` (Vibrant Green): Triumphant chime, confetti burst, marks `workbook_passed = true`, unlocks Phase 4.

---

## Phase 4: High-Yield Flashcards

- **Atomic Fast-Recall**: Exactly 8 cards per level focusing on key definitions, decision rules, and formulas.
- **Universal Text Guide Reference**: Instant jump to corresponding concept section in Phase 1 text guide.
- **100% Mastery Rule**: All cards must be answered "Yes" to complete the deck.
- **Persistent Queue**: Preserved in DOM and `localStorage` so cross-phase navigation never resets mastered card progress.
