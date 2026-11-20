---
title: "Concrete Production Examples"
aliases:
  - "Production Examples"
  - "JSON Schemas"
  - "Worked Problems"
tags:
  - david-study
  - examples
  - schemas
  - worked-problems
type: second-brain
created: 2026-11-20
updated: 2026-11-20
---

> [!example] Canonical Production Examples
> **Canonical Production Examples**
> 
> Reference JSON schemas, LaTeX mathematical equations, and formatting standards for balanced quiz questions, practical workbook exercises, flashcards, and text guides.

---

## 1. Substantive Balanced Quiz Question Example

Demonstrating 6 choices (A–F), uniform length parity, realistic distractors, and target letter mapping (Option D):

```json
{
  "id": "q_l4_10",
  "segment_id": "ch2-pca-analytical",
  "order_index": 10,
  "difficulty": "advanced",
  "question": "In a 5-variable Correlation PCA, the eigenvalues are $\\lambda_1 = 2.85$, $\\lambda_2 = 1.25$, $\\lambda_3 = 0.50$, $\\lambda_4 = 0.25$, and $\\lambda_5 = 0.15$. How many components should be retained under: (1) the Kaiser criterion ($\\lambda > 1.0$), and (2) an 80% cumulative variance criterion?",
  "correct_option": "d",
  "targetLetter": "d",
  "section_reference": "Section 4: Stopping Rules & Retention Diagnostics",
  "section_anchor": "stopping-rules-and-retention-diagnostics",
  "options": [
    {
      "id": "a",
      "text": "(1) Kaiser retains 1 component ($\\lambda_1 = 2.85$); (2) 80% criterion retains 2 components ($(2.85 + 1.25)/5 = 82.0\\%$)"
    },
    {
      "id": "b",
      "text": "(1) Kaiser retains 3 components ($\\lambda_1, \\lambda_2, \\lambda_3$); (2) 80% criterion retains 4 components ($94.0\\%$)"
    },
    {
      "id": "c",
      "text": "(1) Kaiser retains 4 components; (2) 80% criterion retains all 5 components to capture 100% of standardized variance"
    },
    {
      "id": "d",
      "text": "(1) Kaiser retains 2 components ($\\lambda_1, \\lambda_2 > 1.0$); (2) 80% criterion retains 2 components, because $(2.85 + 1.25) / 5.00 = 82.0\\% \\ge 80\\%$"
    },
    {
      "id": "e",
      "text": "(1) Kaiser retains 1 component; (2) 80% criterion retains 3 components ($(2.85 + 1.25 + 0.50)/5 = 92.0\\%$)"
    },
    {
      "id": "f",
      "text": "(1) Kaiser retains 2 components; (2) 80% criterion retains 3 components ($82.0\\% > 80\\%$), requiring an extra safety component"
    }
  ],
  "explanation": "1. Kaiser Criterion: Retain components with $\\lambda_i > 1.0$. Here, $\\lambda_1 = 2.85$ and $\\lambda_2 = 1.25$ both exceed 1.0, while $\\lambda_3 = 0.50 < 1.0$. Thus, exactly 2 components are retained.\\n2. Cumulative Variance Criterion (80%): Total variance across 5 standardized variables is $5.00$. The cumulative variance of the first two components is $(2.85 + 1.25) / 5.00 = 4.10 / 5.00 = 82.0\\%$. Because $82.0\\% \\ge 80\\%$, exactly 2 components are retained to achieve the 80% threshold."
}
```

---

## 2. Practical Workbook Exercise Example

Demonstrating authentic course problems directly from `04_Practical_Workbook_Exercises.pdf` with step-by-step KaTeX solutions:

```json
{
  "id": "wb-l4-ex1",
  "segment_id": "ch2-pca-analytical",
  "order_index": 1,
  "title": "US Food Prices: Covariance vs. Correlation PCA",
  "difficulty": "advanced",
  "section_reference": "Section 2: The Scale Sensitivity Problem",
  "section_anchor": "the-scale-sensitivity-problem",
  "prompt_markdown": "In the 25 US cities food prices study, 5 food items are analyzed: Bread, Burger, Milk, Oranges, and Cookies.\\n\\n1. Explain why performing PCA on the raw covariance matrix $S$ would allow Milk (variance = 450.0) to completely dominate the first principal component over Oranges (variance = 0.05), even if Oranges contains higher relative information.\\n\\n2. Calculate the total variance of the standardized correlation matrix $R$.\\n\\n3. If $\\lambda_1 = 2.85$, what percentage of total variance is explained by the first principal component under Correlation PCA?",
  "solution_markdown": "### Step-by-Step Worked Solution\\n\\n1. **Variance Inflation & Scale Sensitivity:**\\nIn Covariance PCA, components maximize the quadratic form $w^T S w$. Variables with inherently larger numerical variances receive artificially massive loadings. Since $\\text{Var}(\\text{Milk}) = 450.0$ while $\\text{Var}(\\text{Oranges}) = 0.05$, Milk has a variance ratio of $450 / 0.05 = 9,000$ to 1. $PC_1$ will align almost collinear with Milk simply due to units of measurement.\\n\\n2. **Total Variance of Correlation Matrix $R$:**\\nUnder standardization, each variable has unit variance: $s_{jj} = 1.0$. For $p = 5$ variables:\\n$$\\text{Total Variance} = \\text{tr}(R) = \\sum_{j=1}^5 1.0 = 5.00$$\\n\\n3. **Variance Percentage of $PC_1$:**\\n$$\\% \\text{ Variance} = \\frac{\\lambda_1}{\\text{tr}(R)} \\times 100\\% = \\frac{2.85}{5.00} \\times 100\\% = 57.0\\%$$"
}
```

---

## 3. High-Yield Flashcard Example

```json
{
  "id": "fc_l4_1",
  "segment_id": "ch2-pca-analytical",
  "order_index": 1,
  "category": "Decision Rules",
  "front": "When is it strictly mandatory to perform PCA on the Correlation Matrix $R$ instead of the Covariance Matrix $S$?",
  "back": "When variables are measured in different units (e.g. income in € and age in years) or have widely disparate scales. Standardizing to $R$ prevents high-variance variables from artificially dominating the components."
}
```

---

## 4. Text Guide Section Excerpt

```markdown
### The Scale Sensitivity Problem

A critical limitation of Principal Component Analysis performed on the raw sample covariance matrix $S$ is its extreme sensitivity to measurement scale. If a researcher scales a single variable by a scalar constant $c$ (for instance, converting measurements from meters to millimeters, where $c = 1,000$), its sample variance inflates by a factor of $c^2 = 1,000^2 = 1,000,000$.

Because PCA maximizes sample variance along successive orthogonal directions, any variable measured in units with massive numerical magnitude will arbitrarily capture almost all variance of the first principal component, completely masking meaningful covariation among the other variables.

To establish scale invariance across heterogeneous features, the data matrix must be standardized by centering each variable to mean zero and scaling to unit variance:

$$z_{hj} = \frac{x_{hj} - \bar{x}_j}{s_j}$$

Standardization converts the sample covariance matrix $S$ into the sample correlation matrix $R$, where all diagonal elements are identical to $1.0$, and the trace equals the number of variables $p$:

$$\text{tr}(R) = \sum_{j=1}^p r_{jj} = p$$
```
