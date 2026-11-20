---
title: "Workflows & Execution Pipelines (SOPs)"
aliases:
  - "SOPs"
  - "Execution Workflows"
  - "Developer Guide"
tags:
  - david-study
  - workflows
  - sops
  - pipelines
type: second-brain
created: 2026-11-20
updated: 2026-11-20
---

> [!TODO] Standard Operating Procedures (SOPs)
> **Standard Operating Procedures (SOPs)**
> 
> Step-by-step developer and AI workflows for content ingestion, quiz balancing, workbook authoring, database seeding, and automated CI auditing.

---

## ⚡ The Turnkey 4-Step Ingestion Pipeline

Whenever you or an AI agent add a new chapter or discipline, follow this exact 4-step pipeline:

```text
[Step 1: Ingest Materials] ─────── Drop slide PDFs into materials/ & deconstruct into 2–4 LUs
       │
       ▼
[Step 2: Generate Content] ─────── Clone scripts/templates/discipline-template.js into scripts/[name]-content.js
       │                            Follow Principles 1 & 2 (Uniform A–F, Anti-Verbosity)
       ▼
[Step 3: One-Command Seed] ─────── Run: node scripts/seed-discipline.js scripts/[name]-content.js
       │                            Safely upserts discipline, segments, questions, workbooks, cards
       ▼
[Step 4: Automated CI Audit] ───── Run: node scripts/validate-curriculum.js
                                    Automated check for letter bias, longest option, KaTeX, & anchors
```

---

## SOP 1: Materials Management & Ingesting Course Slides

The system operates a dual-mode materials pipeline:

1. **Mode A: Pull from Folder**:
   - Official course materials are permanently organized by discipline in `PersonalStudy/materials/<discipline-id>/` (e.g. `materials/data-analysis/`, `materials/financial-analysis/`).
   - Workflow scripts automatically locate and pull slides directly from `materials/<discipline-id>/`.

2. **Mode B: Auto-Organize on Upload**:
   - When new slide decks or workbook files are uploaded (dropped into chat, staging, or `materials/`), run:
     ```bash
     npm.cmd run organize:materials
     # Or for a specific discipline:
     node scripts/organize-materials.js --discipline [discipline-id]
     ```
   - **Automated Capabilities**:
     - **Discipline Detection**: Extracts PDF text and metadata to classify files into their respective discipline subfolders.
     - **SHA-256 Deduplication**: Identifies identical uploads, cleans up redundant raw files (e.g. `media_*`), and prevents clutter.
     - **Canonical Renaming**: Renames uploaded materials to clean, semantic names (e.g. `01_Chapter_1_...pdf`).
     - **Shared Assets**: Preserves logos and shared assets in `materials/shared/`.

3. **Deconstruct Granular Units**: Split chapter topics into 2 to 4 focused learning units (never lump an entire 150-slide syllabus into one massive unit).
3. **Draft Narrative Guide (Phase 1)**:
   - Exhaustive theoretical explanations with KaTeX equations.
   - Clean semantic markdown headings (e.g., `### 1. The Scale Sensitivity Problem`).
   - Extract heading slugs to serve as `section_anchor` for questions, workbooks, and flashcards.

---

## SOP 2: Formulating & Balancing Questions (Principles 1 & 2)

1. **Grounded in Course Materials**: Formulate substantive questions grounded strictly in official university slides and past exams.
2. **5 Realistic Distractors per Question**: Base distractors on common student misconceptions, false mathematical transformations, or boundary violations.
3. **Principle 1 (Anti-Verbosity)**:
   - Correct answer must be the longest option in **$\le 16.7\%$ of questions** (at most 2 out of 12).
   - If the correct option is the longest, enrich 1 or 2 plausible distractors with authentic course reasoning (never robotic filler).
4. **Principle 2 (Uniform Option Distribution)**:
   - Every 12-question Quiz MUST have **exactly 2 A, 2 B, 2 C, 2 D, 2 E, 2 F**.
   - Every 18-question Practice set MUST have **exactly 3 A, 3 B, 3 C, 3 D, 3 E, 3 F**.
5. **Section References & Anchors**: Populate `section_reference` and `section_anchor` so clicking "Reference Text Guide" instantly highlights the concept in amber.

---

## SOP 3: Authoring Practical Workbook Exercises

1. Extract authentic problem sets from course workbooks (`materials/04_Practical_Workbook_Exercises.pdf`).
2. Construct detailed multi-part prompt statements with concrete numerical datasets.
3. Write complete step-by-step worked solutions formatted cleanly in KaTeX.
4. Provide both prompt and solution for the writing zone and "Copy for AI" features.

---

## SOP 4: Database Seeding & Supabase Synchronization

1. **Target Project**: Target the approved project URL: `https://eurqqiebokwcrrhfbihg.supabase.co` (Database: `tracker`).
2. **Strict Isolation**: Strictly avoid `supabase_novae` and calorie tracker tables (`food_items`, `weight_logs`).
3. **Execute One-Command Seeding**:
   ```bash
   node scripts/seed-discipline.js scripts/[discipline-name]-content.js
   ```
   This script handles batch upserts into `study_disciplines`, `study_segments`, `study_questions`, `study_workbook_exercises`, and `study_flashcards` with built-in rollback on failure.

---

## SOP 5: Automated Pre-Deployment Build & Verification

Before publishing or pushing changes to production:

1. **Run Automated Curriculum Validator**:
   ```bash
   node scripts/validate-curriculum.js
   ```
   Verifies:
   - [x] Question counts (12 per quiz, 18 per practice)
   - [x] Principle 1 (Longest option $\le 16.7\%$)
   - [x] Principle 2 (Exact uniform A–F distribution)
   - [x] KaTeX syntax parses with 0 errors
   - [x] Zero forbidden distractor patterns (*"all of the above"*, *"both a and b"*)
   - [x] Valid flashcards (8 per segment) and workbook exercises
2. **Run TypeScript & Bundling Build**:
   ```bash
   npm.cmd run build
   ```
   Verifies zero TypeScript type errors and outputs production assets in under 5 seconds.
3. **Deploy**: Commit and push to `origin main` to trigger automatic Netlify deployment.
