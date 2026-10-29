import fs from 'fs';
import { createClient } from '@supabase/supabase-js';
import { levelsPart1 } from './levels-data-part1.js';
import { levelsPart2 } from './levels-data-part2.js';

const SUPABASE_URL = 'https://eurqqiebokwcrrhfbihg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cnFxaWVib2t3Y3JyaGZiaWhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNDA0MzIsImV4cCI6MjEwNzcxNjQzMn0.UrhclnTabK3YEJZzroYeDmO4D4pij59IWCXyWZ9ruxs';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log('--- Enhancing Question Alignment, Anchors & Fundamental Explanations ---');

// 1. Rewrite Question 6 of Level 1 (ch1-scales-methods)
levelsPart1[0].questions[5] = {
  id: "q_l1_6",
  segment_id: "ch1-scales-methods",
  order_index: 6,
  difficulty: "intermediate",
  section_reference: "Section 3.1: Dependence Methods",
  section_anchor: "dependence-methods",
  question: "A commercial bank wants to predict whether a credit applicant will default on a loan (a nonmetric categorical variable: Default vs Non-Default) based on three metric indicators: annual income, debt ratio, and credit history score. According to the classification of multivariate dependence methods in Chapter 1, which technique is specifically designated for this structure?",
  options: [
    {
      id: "a",
      text: "Multiple Linear Regression, because it evaluates relationships between continuous predictors"
    },
    {
      id: "b",
      text: "Discriminant Analysis, because a single nonmetric categorical dependent variable is predicted by multiple metric independent variables"
    },
    {
      id: "c",
      text: "Multivariate Analysis of Variance (MANOVA), because several independent variables are tested simultaneously"
    },
    {
      id: "d",
      text: "Principal Components Analysis (PCA), because it reduces dimensions across all applicant variables without a target"
    },
    {
      id: "e",
      text: "Canonical Correlation, because multiple metric variables are included in the bank model"
    },
    {
      id: "f",
      text: "Exploratory Factor Analysis (FA), because it extracts latent credit scores from observed bank data"
    }
  ],
  correct_option: "b",
  explanation: `### 1. Theoretical Classification Rule
In multivariate dependence methods, techniques are systematically classified by the measurement scale of variables (metric vs. nonmetric) and the number of dependent and independent variables.

### 2. Why Discriminant Analysis is Correct
When the research objective is to explain or predict a **single nonmetric (categorical) dependent variable** (such as loan default status: Default vs. Non-Default) using **multiple metric independent variables** (annual income, debt ratio, credit score), the exact designated technique is **Discriminant Analysis**. It constructs linear combinations of metric predictors that maximize separation between categorical groups.

### 3. Why Other Multivariate Techniques Fail in This Context
- **Multiple Linear Regression**: Strictly requires a **metric continuous** dependent variable (such as predicting exact credit balance in dollars, not a qualitative Yes/No group).
- **MANOVA (Multivariate Analysis of Variance)**: Operates in the exact opposite direction: it evaluates **multiple metric dependent variables** across nonmetric treatment/categorical groups.
- **Canonical Correlation**: Assesses linear relationships between **multiple metric dependent** variables and multiple metric independent variables.
- **PCA and Factor Analysis**: Are **interdependence methods** where variables are not partitioned into predictors and criterion targets at all.`
};

// 2. Set Anchors and Deep Explanations for all Level 1 questions
const l1Anchors = [
  { idx: 0, anchor: 'ratio-scale', ref: 'Section 2.4: Ratio Scale' },
  { idx: 1, anchor: 'nominal-scale', ref: 'Section 2.1: Nominal Scale' },
  { idx: 2, anchor: 'classification-of-multivariate-methods', ref: 'Section 3: Classification of Methods' },
  { idx: 3, anchor: 'ordinal-scale', ref: 'Section 2.2: Ordinal Scale' },
  { idx: 4, anchor: 'interval-scale', ref: 'Section 2.3: Interval Scale' },
  { idx: 5, anchor: 'dependence-methods', ref: 'Section 3.1: Dependence Methods' },
  { idx: 6, anchor: 'interval-scale', ref: 'Section 2.3: Interval Scale' },
  { idx: 7, anchor: 'interdependence-methods', ref: 'Section 3.2: Interdependence Methods' },
  { idx: 8, anchor: 'interval-scale', ref: 'Section 2.3: Interval Scale' },
  { idx: 9, anchor: 'nominal-scale', ref: 'Section 2.1: Nominal Scale' },
  { idx: 10, anchor: 'interdependence-methods', ref: 'Section 3.2: Interdependence Methods' },
  { idx: 11, anchor: 'ratio-scale', ref: 'Section 2.4: Ratio Scale' }
];

l1Anchors.forEach(({ idx, anchor, ref }) => {
  levelsPart1[0].questions[idx].section_anchor = anchor;
  levelsPart1[0].questions[idx].section_reference = ref;
});

// Q1 Deep Explanation
levelsPart1[0].questions[0].explanation = `### 1. Fundamental Definition of the Origin
A **Ratio Scale** is uniquely characterized by possessing an **absolute, non-arbitrary, immutable zero origin** that corresponds to the complete absence of the property being measured (e.g., zero dollars in revenue, zero units produced, zero degrees Kelvin).

### 2. Analytical Invariance Property
Because the zero point is fixed, the only admissible transformation is proportional similarity scaling:
$$Y_t = b \\cdot Y_0 \\quad (b > 0)$$
When computing the ratio between two firms $i$ and $k$:
$$\\frac{Y_{t,i}}{Y_{t,k}} = \\frac{b Y_{0,i}}{b Y_{0,k}} = \\frac{Y_{0,i}}{Y_{0,k}}$$
The transformation constant $b$ cancels out algebraically. This mathematical cancellation is why statements of proportionality ('Company A has twice the revenue of Company B') remain objectively valid across all currencies (USD, EUR, Yen).

### 3. Why Other Scales Fail
On an interval scale ($Y_t = a + b Y_0$), the additive translation $a$ prevents cancellation, rendering ratio statements meaningless (e.g., $20^\\circ\\text{C}$ is not twice as hot as $10^\\circ\\text{C}$).`;

// Q2 Deep Explanation
levelsPart1[0].questions[1].explanation = `### 1. The Dummy Variable Trap & Multicollinearity
In linear regression models, nominal categorical variables with $k$ levels cannot be entered directly as integers because the numbers possess zero quantitative meaning. Instead, they are represented through binary $(0/1)$ indicator variables.

### 2. Mathematical Proof of $k - 1$ Degrees of Freedom
If an analyst were to include dummy variables for all $k$ categories ($D_1 + D_2 + \\dots + D_k = 1$), their sum would be identically equal to the constant intercept column ($X_0 = 1$) for every observation in the sample. This creates **exact linear dependence** (perfect multicollinearity), causing the matrix $(X^T X)$ to become singular and mathematically non-invertible:
$$\\det(X^T X) = 0$$
To ensure $(X^T X)$ has full column rank, exactly **$k - 1$ binary variables** must be introduced. The omitted $k$-th category serves as the baseline reference benchmark.`;

// Q3 Deep Explanation
levelsPart1[0].questions[2].explanation = `### 1. The Core Methodological Division
Multivariate methods are fundamentally partitioned by whether variables play distinct asymmetric functional roles in the scientific inquiry.

### 2. Dependence Methods (Predictive & Causal Modeling)
Used when the research problem designates one or more variables as **dependent (criterion/target)** to be predicted or explained by a set of **independent (predictor/explanatory)** variables. Examples: Multiple Linear Regression, Discriminant Analysis, Logistic Regression, MANOVA.

### 3. Interdependence Methods (Structural & Geometric Modeling)
Used when variables **cannot be conceptually partitioned** into inputs and outputs. All variables are analyzed simultaneously to uncover mutual correlation patterns, extract latent dimensions, or identify natural groupings. Examples: Principal Components Analysis (PCA), Factor Analysis (FA), Cluster Analysis, Multidimensional Scaling (MDS).`;

// Q4 Deep Explanation
levelsPart1[0].questions[3].explanation = `### 1. Ordinal Distance Non-Uniformity
An **Ordinal Scale** preserves only monotonic rank order ($x_i > x_k$). It guarantees direction of preference, but the intervals between consecutive ranks are strictly unknown and unequal. The perceived utility gap between rank 1 and rank 2 is not equal to the gap between rank 2 and rank 3.

### 2. Mathematical Invalidity of Means and Variances
Computing the arithmetic mean $\\bar{x} = \\frac{1}{n} \\sum x_i$ or standard deviation $s = \\sqrt{\\frac{1}{n-1}\\sum (x_i - \\bar{x})^2}$ relies on the mathematical assumption that intervals between adjacent integer values are identical. Performing these operations on ordinal ranks yields distorted, arbitrary statistics.

### 3. Permissible Statistics
Permissible summary metrics for ordinal data include the **median**, **mode**, percentiles, and rank-order correlation metrics like Spearman's rank correlation coefficient ($r_s$) or Kendall's tau ($\\tau$).`;

// Q5 Deep Explanation
levelsPart1[0].questions[4].explanation = `### 1. The Coefficient of Variation ($CV$) Formula
The Coefficient of Variation is a dimensionless relative dispersion metric defined as:
$$CV = \\frac{s}{\\bar{x}}$$

### 2. Behavior Under Interval Linear Transformations
Interval scales permit linear transformations $Y_t = a + b Y_0$ ($b > 0$), where $a$ is an arbitrary origin shift. Under this transformation:
- The standard deviation transforms purely proportionally: $s_t = b \\cdot s_0$.
- The arithmetic mean shifts additively: $\\bar{Y}_t = a + b \\cdot \\bar{Y}_0$.

Substituting these into the $CV$ equation yields:
$$CV_t = \\frac{b \\cdot s_0}{a + b \\cdot \\bar{Y}_0} \\neq \\frac{s_0}{\\bar{Y}_0}$$
Because the arbitrary constant $a$ does not cancel out, the value of $CV$ changes arbitrarily depending on whether temperature is measured in Celsius or Fahrenheit. Therefore, $CV$ is statistically invalid on interval scales.`;

// Save back to levelsPart1 and levelsPart2 files
fs.writeFileSync(
  'scripts/levels-data-part1.js',
  `// Part 1: Levels 1 to 4 of Data Analysis curriculum\n\nexport const levelsPart1 = ${JSON.stringify(levelsPart1, null, 2)};\n`,
  'utf8'
);

fs.writeFileSync(
  'scripts/levels-data-part2.js',
  `// Part 2: Levels 5 to 8 of Data Analysis curriculum\n\nexport const levelsPart2 = ${JSON.stringify(levelsPart2, null, 2)};\n`,
  'utf8'
);

console.log('✓ Successfully serialized updated levels with section anchors and deep explanations.');

// Update Supabase questions
async function syncToSupabase() {
  const allLevels = [...levelsPart1, ...levelsPart2];
  const allQuestions = allLevels.flatMap(l => l.questions);

  console.log(`Syncing ${allQuestions.length} questions to Supabase study_questions...`);
  for (const q of allQuestions) {
    const { error } = await supabase
      .from('study_questions')
      .upsert({
        id: q.id,
        segment_id: q.segment_id,
        order_index: q.order_index,
        difficulty: q.difficulty,
        question: q.question,
        options: q.options,
        correct_option: q.correct_option,
        explanation: q.explanation,
        section_reference: q.section_reference || null,
        section_anchor: q.section_anchor || null,
        pool_type: 'quiz'
      });
    if (error) {
      console.error(`Error updating question ${q.id}:`, error);
    }
  }
  console.log('✓ Supabase study_questions updated successfully!');
}

syncToSupabase().then(() => {
  process.exit(0);
}).catch(err => {
  console.error('Failed to sync:', err);
  process.exit(1);
});
