/**
 * CANONICAL DISCIPLINE SEED TEMPLATE
 * 
 * Rules to follow when populating this template:
 * 1. Principle 1 (Anti-Verbosity): The correct option must NOT be the longest in >16.7% of questions.
 *    Enrich distractors with authentic domain reasoning from the slides.
 * 2. Principle 2 (Uniform Distribution): Every 12-question Quiz MUST have exactly 2 A, 2 B, 2 C, 2 D, 2 E, 2 F.
 *    Every 18-question Practice set MUST have exactly 3 A, 3 B, 3 C, 3 D, 3 E, 3 F.
 * 3. KaTeX Math: Use $...$ for inline formulas and $$...$$ for block equations. Ensure syntax parses cleanly.
 * 4. Section Anchors: Ensure `section_anchor` matches the exact heading slug in `summary_markdown`.
 * 5. Flashcards: Exactly 8 atomic cards per segment.
 * 6. Workbooks: 1 or 2 comprehensive real-world problem sets per segment.
 */

export const templateDisciplineSeed = {
  discipline: {
    id: "discipline-slug", // e.g., "econometrics", "machine-learning"
    name: "Discipline Name",
    code: "DISC101",
    description: "Concise 1-2 sentence description of the academic course and target exam.",
    created_at: new Date().toISOString()
  },

  segments: [
    {
      id: "disc-seg-1",
      discipline_id: "discipline-slug",
      order_index: 1,
      title: "Segment Title",
      subtitle: "Focus topics covered in this learning unit",
      summary_markdown: `### 1. Conceptual Foundation
Thorough narrative text explaining the theoretical derivations from the lecture slides.

### 2. Analytical Formulas
Mathematical definitions with KaTeX formulas:
$$E = mc^2$$

### 3. Decision Rules & Diagnostic Criteria
Key decision thresholds and assumptions tested on the exam.
`
    }
  ],

  questions: [
    {
      id: "q_disc_s1_01",
      segment_id: "disc-seg-1",
      order_index: 1,
      difficulty: "conceptual", // elemental | conceptual | advanced
      question: "Substantive question prompt clearly stating problem constraints?",
      correct_option: "a", // a, b, c, d, e, f
      targetLetter: "a",
      section_reference: "Section 1: Conceptual Foundation",
      section_anchor: "1-conceptual-foundation",
      options: [
        { "id": "a", "text": "Correct answer with substantive conceptual depth" },
        { "id": "b", "text": "Plausible distractor based on a common student misconception" },
        { "id": "c", "text": "Plausible distractor violating a specific mathematical assumption" },
        { "id": "d", "text": "Plausible distractor confusing inverse or dual formulation" },
        { "id": "e", "text": "Plausible distractor misinterpreting boundary conditions" },
        { "id": "f", "text": "Plausible distractor with balanced character count and reasoning" }
      ],
      explanation: "Step-by-step mathematical or conceptual explanation proving why option A holds and why the others fail."
    }
    // Repeat for questions 2 through 12, following the exact 2 A, 2 B, 2 C, 2 D, 2 E, 2 F distribution!
  ],

  workbookExercises: [
    {
      id: "wb-disc-s1-ex1",
      segment_id: "disc-seg-1",
      order_index: 1,
      title: "Comprehensive Problem Title",
      difficulty: "advanced",
      section_reference: "Section 2: Analytical Formulas",
      section_anchor: "2-analytical-formulas",
      prompt_markdown: "Multi-part university exam question prompt with concrete parameters.\n\n1. Calculate the initial condition.\n2. Derive the test statistic.",
      solution_markdown: "### Step-by-Step Worked Solution\n\n1. **Initial Condition Calculation:**\n$$X = \\mu + \\sigma Z$$\n\n2. **Test Statistic Derivation:**\nFull step-by-step derivation demonstrating the exact exam-ready working."
    }
  ],

  flashcards: [
    {
      id: "fc_disc_s1_1",
      segment_id: "disc-seg-1",
      order_index: 1,
      category: "Formulas", // Definitions | Formulas | Decision Rules | Pitfalls
      front: "Prompt or question testing fast recall of a key rule or formula?",
      back: "Concise, atomic answer highlighting the exact decision threshold or equation."
    }
    // Exactly 8 atomic cards per segment
  ]
};
