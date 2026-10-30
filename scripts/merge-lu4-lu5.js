import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const SUPABASE_URL = 'https://eurqqiebokwcrrhfbihg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cnFxaWVib2t3Y3JyaGZiaWhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNDA0MzIsImV4cCI6MjEwNzcxNjQzMn0.UrhclnTabK3YEJZzroYeDmO4D4pij59IWCXyWZ9ruxs';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const mergedSummaryMarkdown = `# PCA: Covariance vs. Correlation, Loadings & Retention Diagnostics

## 1. Covariance PCA vs. Correlation PCA (The Scale Sensitivity Dilemma)
In general multivariate analysis with $p$ continuous variables, analysts must decide whether to perform Principal Components Analysis on the sample covariance matrix ($S$) or the sample correlation matrix ($R$). This choice is critical because the two methods yield fundamentally different components and are not scale-invariant.

### The Scale Sensitivity of Covariance PCA
In Covariance PCA, total system variance is the sum of the raw sample variances across all $p$ variables:
$$\\text{Total Variance} = \\text{tr}(S) = \\sum_{j=1}^p s_j^2$$
If variables are measured in non-comparable physical units (e.g., annual income in tens of thousands of Euros versus customer age in years), or possess widely differing numerical ranges, Covariance PCA is severely distorted by scale. 

Because variance is a quadratic dispersion metric:
$$\\text{Var}(c X_j) = c^2 \\text{Var}(X_j)$$
multiplying a variable by a scale factor $c = 1,000$ (e.g., converting a measurement from kilograms to grams) inflates its sample variance by a factor of $1,000^2 = 1,000,000$. In Covariance PCA, the leading principal component ($PC_1$) seeks the direction of maximum sample variance. Consequently, any variable with an arbitrarily large measurement scale will mechanically dominate $PC_1$, regardless of whether it shares meaningful covariation with the rest of the dataset.

### When to Use Correlation PCA
When variables are measured in different units, arbitrary survey rating scales, or widely varying dispersions, variables must be standardized before performing PCA. Standardizing each variable by subtracting its sample mean and dividing by its sample standard deviation:
$$Z_j = \\frac{X_j - \\bar{x}_j}{s_j}$$
assigns every variable an identical sample variance of $1.0$. 

Performing PCA on these standardized variables ($Z$) is mathematically identical to performing PCA directly on the sample correlation matrix ($R$). In Correlation PCA:
- Every original variable contributes exactly $1.0$ unit of standardized variance.
- Total system variance equals the number of variables: $\\text{tr}(R) = p$.
- The average eigenvalue is always exactly:
  $$\\bar{\\lambda} = \\frac{\\text{tr}(R)}{p} = \\frac{p}{p} = 1.0$$
In Covariance PCA, by contrast, the average eigenvalue is $\\bar{\\lambda} = \\text{tr}(S)/p$, which depends entirely on the raw physical units.

### Real Course Case: 25 US Cities Food Prices
To see the scale sensitivity dilemma in practice, consider the classic benchmark study of food prices across 25 US metropolitan areas (Chapter 2 Exercise 1). The dataset records the average price per kg for five staple food commodities: Bread ($X_1$), Hamburger ($X_2$), Milk ($X_3$), Oranges ($X_4$), and Potatoes ($X_5$).

When analyzing the raw covariance matrix, high-dispersion commodities (like meat and fresh fruit) heavily dictate the leading components, while low-priced staples contribute little variance. Standardizing to Correlation PCA gives each of the five food categories an equal initial baseline weight ($s_j^2 = 1.0$), allowing the analysis to uncover true underlying purchasing cost dimensions across cities (such as the high-cost profile of Anchorage, Alaska) independent of base commodity prices.

---

## 2. Four Key Quantities (Eigenvalues, Weights, Scores & Loadings)
In applied PCA, interpreting results requires distinguishing four closely related quantities that must never be confused:

### 1. Eigenvalue (\\lambda_i)
The eigenvalue represents the actual sample variance of the $i$-th principal component:
$$\\text{Var}(PC_i) = \\lambda_i$$
Because principal components are ordered by decreasing variance, $\\lambda_1 \\ge \\lambda_2 \\ge \\dots \\ge \\lambda_p \\ge 0$.

### 2. Eigenvector Weights (w_i)
The eigenvector $w_i = (w_{i1}, w_{i2}, \\dots, w_{ip})^T$ contains the normalized linear combination coefficients used to project centered variables onto the $i$-th principal axis:
$$PC_i = w_{i1} x_1 + w_{i2} x_2 + \\dots + w_{ip} x_p$$
Each eigenvector satisfies the unit-length normalization constraint:
$$\\sum_{j=1}^p w_{ij}^2 = w_i^T w_i = 1.0$$

### 3. Component Score (t_{hi})
The component score is the actual numerical coordinate of observation $h$ when projected onto the $i$-th principal axis:
$$t_{hi} = w_i^T x_h = \\sum_{j=1}^p w_{ij} x_{hj}$$
In standardized space, an observation with positive scores on $PC_1$ is above average on the characteristics captured by the first component.

### 4. Factor Loading (l_{ji})
A factor loading is the Pearson correlation between original variable $X_j$ and principal component $PC_i$:
$$l_{ji} = \\text{Corr}(X_j, PC_i) = w_{ij} \\frac{\\sqrt{\\lambda_i}}{s_j}$$
When analyzing standardized variables in Correlation PCA (where $s_j = 1.0$), the formula simplifies directly to:
$$l_{ji} = w_{ij} \\sqrt{\\lambda_i}$$
The squared factor loading $l_{ji}^2$ represents the proportion of variable $X_j$'s variance explained by component $PC_i$.

---

## 3. Component Retention Criteria (Stopping Rules)
Retaining all $p$ components defeats the purpose of dimensionality reduction. Analysts rely on three complementary stopping rules to determine how many components to keep:

### Kaiser Criterion (Eigenvalue-Greater-Than-One Rule)
In Correlation PCA, retain only components with eigenvalues strictly greater than 1.0:
$$\\lambda_i > 1.0$$
Because each standardized variable contributes exactly $1.0$ unit of variance, any component with an eigenvalue below $1.0$ explains less variance than a single original variable. 

Crucially, the Kaiser cutoff of 1.0 cannot be applied blindly to Covariance PCA, where total variance is $\\text{tr}(S) \\neq p$ and the average eigenvalue is $\\text{tr}(S)/p$. In Covariance PCA, the comparable threshold is retaining components whose eigenvalue exceeds the average eigenvalue $\\bar{\\lambda}$.

### Cattell Scree Test (Elbow Rule)
The Scree plot displays ordered eigenvalues on the vertical axis against the component index ($1, 2, \\dots, p$) on the horizontal axis. Analysts identify the "elbow" or point of inflection where the steep cliff transitions into a gradual, horizontal scree slope. Components appearing before the elbow are retained.

### Cumulative Percentage of Explained Variance
Analysts set a minimum cumulative variance threshold—typically $70\\%$, $75\\%$, or $80\\%$—and retain the smallest number of components $k$ required to reach that threshold:
$$\\frac{\\sum_{i=1}^k \\lambda_i}{\\sum_{i=1}^p \\lambda_i} \\ge 0.70$$

---

## 4. Real-World Case Study: Portuguese Regional Assessment
To see applied PCA in action, consider the regional socio-economic assessment from Chapter 2 (Slides 48–51), analyzing $n = 7$ Portuguese administrative regions across 5 standardized indicators:
1. $\\text{DEN}$: Population Density
2. $\\text{GDP}$: Gross Domestic Product per capita
3. $\\text{MED}$: Doctors per 1,000 residents
4. $\\text{HOS}$: Hospital beds per 1,000 residents
5. $\\text{BIB}$: Public libraries per 10,000 residents

The extracted factor loadings reveal clear substantive patterns:
- First Principal Component ($PC_1$ - Public Infrastructure: Health & Culture): Has very high positive loadings on $\\text{MED}$ ($0.957$), $\\text{HOS}$ ($0.933$), and $\\text{BIB}$ ($0.942$). It reflects regional public investment in healthcare, culture, and community facilities.
- Second Principal Component ($PC_2$ - Economic Wealth & Urban Density): Has high positive loadings on $\\text{GDP}$ ($0.750$) and $\\text{DEN}$ ($0.670$), capturing urban agglomeration and commercial economic output.

Plotting regions in the 2D coordinate space of ($PC_1, PC_2$) reveals that Lisbon scores high on both infrastructure and economic wealth, Madeira scores high on economic activity but moderate on public health infrastructure, while Alentejo exhibits a rural infrastructure profile.

---

## 5. Practical Software Execution (SAS & Python)
In applied data analytics, executing PCA efficiently requires understanding software defaults:

### SAS Implementation
In SAS, Principal Components Analysis is executed using \`PROC PRINCOMP\`:
\`\`\`sas
/* Correlation PCA (Default in SAS) */
proc princomp data=RegionalData plots=scree;
   var DEN GDP MED HOS BIB;
run;

/* Covariance PCA (Requested via the COV option) */
proc princomp data=RegionalData cov plots=scree;
   var DEN GDP MED HOS BIB;
run;
\`\`\`
By default, SAS analyzes the correlation matrix $R$. Adding the \`COV\` option forces SAS to analyze the raw covariance matrix $S$.

### Python Implementation
In Python \`scikit-learn\`, the \`PCA\` class performs Singular Value Decomposition (SVD) on centered raw data (Covariance PCA) by default without internal feature standardization:
\`\`\`python
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
import numpy as np

# Step 1: Standardize features to unit variance (Required for Correlation PCA)
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Step 2: Fit PCA on standardized data
pca = PCA(n_components=2)
scores = pca.fit_transform(X_scaled)

# Step 3: Compute factor loadings (eigenvector * sqrt(eigenvalue))
loadings = pca.components_.T * np.sqrt(pca.explained_variance_)
\`\`\`
To perform Correlation PCA in Python, the analyst must explicitly apply \`StandardScaler()\` before calling \`PCA()\`.`;

export const mergedLevel4QuizQuestions = [
  // Q1
  {
    id: "q_l4_1",
    segment_id: "ch2-pca-analytical",
    order_index: 1,
    difficulty: "easy",
    pool_type: "quiz",
    section_reference: "Section 2: Four Key Quantities (Eigenvalues, Weights, Scores & Loadings)",
    section_anchor: "four-key-quantities",
    question: "What does a factor loading ($l_{ji}$) quantify in Principal Components Analysis?",
    options: [
      { id: "a", text: "The sample size frequency count of observations belonging to an empirical cluster in multidimensional space" },
      { id: "b", text: "The degrees of freedom remaining in the residual covariance matrix after omitting insignificant components" },
      { id: "c", text: "The Pearson correlation between an original variable and a principal component: $l_{ji} = \\text{Corr}(X_j, PC_i)$" },
      { id: "d", text: "The ratio of leading eigenvalues between the first and second components: $\\lambda_1 / \\lambda_2$, measuring relative dominance" },
      { id: "e", text: "The standardized difference between the variable sample mean and sample median across observation records" },
      { id: "f", text: "The two-tailed p-value obtained when testing the statistical significance of orthogonal component scores" }
    ],
    correct_option: "c",
    explanation: "As defined in Chapter 2, a factor loading ($l_{ji}$) is the Pearson product-moment correlation between original variable $X_j$ and principal component $PC_i$: $l_{ji} = \\text{Corr}(X_j, PC_i) = w_{ij}\\frac{\\sqrt{\\lambda_i}}{s_j}$. When variables are standardized, it simplifies to $l_{ji} = w_{ij}\\sqrt{\\lambda_i}$."
  },
  // Q2
  {
    id: "q_l4_2",
    segment_id: "ch2-pca-analytical",
    order_index: 2,
    difficulty: "easy",
    pool_type: "quiz",
    section_reference: "Section 3: Component Retention Criteria",
    section_anchor: "component-retention-criteria",
    question: "Under the Kaiser (eigenvalue-greater-than-one) criterion in Correlation PCA, which principal components are retained?",
    options: [
      { id: "a", text: "All components with eigenvalues greater than 1.0 ($\\lambda_i > 1$), ensuring components account for more variance than one original variable" },
      { id: "b", text: "All components with eigenvalues less than 0.50 ($\\lambda_i < 0.50$), retaining residual noise dimensions for secondary sensitivity tests" },
      { id: "c", text: "Always exactly 2 components regardless of eigenvalue magnitudes, matching standard 2-dimensional visual plotting constraints" },
      { id: "d", text: "All components required to explain at least 99% of total cumulative variance, preventing any information loss during reduction" },
      { id: "e", text: "All components whose corresponding eigenvector weights are strictly positive across all original variable indicators" },
      { id: "f", text: "Only the single leading component that yields the largest factor loading, collapsing the multivariate system to 1 dimension" }
    ],
    correct_option: "a",
    explanation: "The Kaiser criterion retains only components with eigenvalues $\\lambda_i > 1.0$. Because each standardized variable contributes exactly 1.0 unit of variance in Correlation PCA, any component with an eigenvalue less than 1.0 explains less information than a single original variable."
  },
  // Q3
  {
    id: "q_l4_3",
    segment_id: "ch2-pca-analytical",
    order_index: 3,
    difficulty: "intermediate",
    pool_type: "quiz",
    section_reference: "Section 3: Component Retention Criteria",
    section_anchor: "component-retention-criteria",
    question: "In a Cattell scree plot, how does an analyst identify the number of principal components to retain?",
    options: [
      { id: "a", text: "The highest global maximum point on the vertical y-axis, identifying the primary principal component variance" },
      { id: "b", text: "The coordinate intersection where the eigenvalue scree curve crosses the horizontal zero-variance baseline axis" },
      { id: "c", text: "The point where cumulative explained variance reaches 100%, indicating complete preservation of multivariate information" },
      { id: "d", text: "The midpoint between the largest and smallest observed eigenvalues, establishing an empirical arithmetic average cutoff" },
      { id: "e", text: "The \"elbow\" or point of inflection where the steep drop levels off into a gradual scree slope; retain components before this point" },
      { id: "f", text: "The inflection point where the scree slope turns sharply downward into a negative exponential decay trajectory" }
    ],
    correct_option: "e",
    explanation: "Cattell's scree test plots eigenvalues against component order. The analyst retains components located before the \"elbow\" or point of inflection where the steep cliff levels off into a horizontal slope of residual scree."
  },
  // Q4
  {
    id: "q_l4_4",
    segment_id: "ch2-pca-analytical",
    order_index: 4,
    difficulty: "intermediate",
    pool_type: "quiz",
    section_reference: "Section 4: Portuguese Regional Assessment",
    section_anchor: "portuguese-regional-assessment",
    question: "In the Portuguese 7-regions case study from Chapter 2, what substantive dimension does the first principal component ($PC_1$) represent?",
    options: [
      { id: "a", text: "Manufacturing Industrial Capacity: Heavy Equipment and Steel Output across manufacturing districts" },
      { id: "b", text: "Public Infrastructure: Health and Culture, reflecting high loadings on doctors, pharmacies, and museums" },
      { id: "c", text: "Agricultural Productivity and Rural Land Cultivation Density across interior agrarian municipalities" },
      { id: "d", text: "Foreign Direct Investment and Export Logistics Capacity across coastal maritime shipping terminals" },
      { id: "e", text: "Demographic Emigration and Rural Depopulation Intensity across isolated interior mountainous zones" },
      { id: "f", text: "Commercial Real Estate Indebtedness and Private Banking Credit Exposure across corporate centers" }
    ],
    correct_option: "b",
    explanation: "In the Portuguese regions case study (Slides 48–51), $PC_1$ has high positive correlations with Doctors ($0.957$), Hospital beds ($0.933$), and Public libraries ($0.942$), capturing Public Infrastructure (Health and Culture)."
  },
  // Q5
  {
    id: "q_l4_5",
    segment_id: "ch2-pca-analytical",
    order_index: 5,
    difficulty: "hard",
    pool_type: "quiz",
    section_reference: "Section 2: Four Key Quantities (Eigenvalues, Weights, Scores & Loadings)",
    section_anchor: "four-key-quantities",
    question: "What is the formal mathematical formula relating factor loading $l_{ji}$ to eigenvector weight $w_{ij}$, eigenvalue $\\lambda_i$, and variable standard deviation $s_j$?",
    options: [
      { id: "a", text: "$l_{ji} = w_{ij} \\times s_j / \\sqrt{\\lambda_i}$, dividing the eigenvector weight by the standard deviation of component scores" },
      { id: "b", text: "$l_{ji} = \\lambda_i / (w_{ij} + s_j)$, taking the ratio of the characteristic root to the sum of weights and standard deviations" },
      { id: "c", text: "$l_{ji} = w_{ij}^2 \\times \\lambda_i$, multiplying the squared eigenvector coefficient by the system characteristic eigenvalue" },
      { id: "d", text: "$l_{ji} = w_{ij} \\frac{\\sqrt{\\lambda_i}}{s_j}$ where $s_j$ is the standard deviation of variable $X_j$ and $\\lambda_i$ is the eigenvalue" },
      { id: "e", text: "$l_{ji} = \\sqrt{w_{ij} \\lambda_i s_j}$, taking the geometric root across eigenvector weights, eigenvalues, and variable dispersion" },
      { id: "f", text: "$l_{ji} = s_j / \\lambda_i$, evaluating the ratio of original sample standard deviation to the principal component variance" }
    ],
    correct_option: "d",
    explanation: "As proven in Chapter 2, $l_{ji} = \\text{Corr}(X_j, PC_i) = \\frac{\\text{Cov}(X_j, PC_i)}{s_j \\sqrt{\\lambda_i}} = \\frac{w_{ij} \\lambda_i}{s_j \\sqrt{\\lambda_i}} = w_{ij} \\frac{\\sqrt{\\lambda_i}}{s_j}$. When data are standardized ($s_j = 1$), this reduces to $l_{ji} = w_{ij}\\sqrt{\\lambda_i}$."
  },
  // Q6
  {
    id: "q_l4_6",
    segment_id: "ch2-pca-analytical",
    order_index: 6,
    difficulty: "intermediate",
    pool_type: "quiz",
    section_reference: "Section 3: Component Retention Criteria",
    section_anchor: "component-retention-criteria",
    question: "Why is Kaiser's eigenvalue cutoff of 1.0 mathematically invalid when applied to Principal Components Analysis on the covariance matrix ($S$)?",
    options: [
      { id: "a", text: "Because Covariance PCA generates imaginary complex eigenvalues whenever raw variables have unequal measurement units" },
      { id: "b", text: "Because Covariance PCA does not permit the computation of characteristic roots or spectral eigenvectors in software" },
      { id: "c", text: "Because Kaiser developed his eigenvalue criterion exclusively for nonmetric nominal rankings and contingency cross-tables" },
      { id: "d", text: "Because Covariance PCA is constrained by matrix rank properties to extract exactly one significant principal component" },
      { id: "e", text: "Because statistical software automatically converts the default Kaiser threshold to 0.05 when analyzing raw covariances" },
      { id: "f", text: "Because in Covariance PCA, total variance is the sum of raw variances, not $p$; the average eigenvalue is $\\bar{\\lambda} = \\text{tr}(S)/p$, not 1.0" }
    ],
    correct_option: "f",
    explanation: "The Kaiser criterion threshold of 1.0 derives from the fact that the average eigenvalue of a correlation matrix is $\\text{tr}(R)/p = p/p = 1.0$. In Covariance PCA, total variance is $\\sum s_j^2$, so the average eigenvalue is $\\text{tr}(S)/p \\neq 1.0$. Comparing eigenvalues to 1.0 in Covariance PCA is completely arbitrary."
  },
  // Q7
  {
    id: "q_l4_7",
    segment_id: "ch2-pca-analytical",
    order_index: 7,
    difficulty: "easy",
    pool_type: "quiz",
    section_reference: "Section 5: Practical Software Execution",
    section_anchor: "practical-software-execution",
    question: "In SAS, what option in PROC PRINCOMP instructs the procedure to perform Covariance PCA rather than the default Correlation PCA?",
    options: [
      { id: "a", text: "`METHOD=ML`, which requests Maximum Likelihood parameter extraction instead of ordinary principal components" },
      { id: "b", text: "`OUTSTAT=COV`, which outputs the calculated sample covariance matrix directly into an external SAS dataset" },
      { id: "c", text: "`COV`, which instructs PROC PRINCOMP to analyze the sample covariance matrix $S$ instead of the default correlation matrix $R$" },
      { id: "d", text: "`VARDEF=N`, which divides sums of squares by sample size $n$ rather than degrees of freedom $n - 1$" },
      { id: "e", text: "`STD`, which automatically standardizes all variables to zero mean and unit variance before running analysis" },
      { id: "f", text: "`NOINT`, which suppresses the intercept term when calculating deviation cross-products from the raw origin" }
    ],
    correct_option: "c",
    explanation: "In SAS PROC PRINCOMP, the default analysis is Correlation PCA (analyzing the correlation matrix $R$). Adding the `COV` option tells SAS to analyze the sample covariance matrix $S$ directly."
  },
  // Q8
  {
    id: "q_l4_8",
    segment_id: "ch2-pca-analytical",
    order_index: 8,
    difficulty: "hard",
    pool_type: "quiz",
    section_reference: "Section 1: Covariance PCA vs. Correlation PCA",
    section_anchor: "covariance-pca-vs-correlation-pca",
    question: "In Covariance PCA, if variable $X_1$ is converted from kilograms to grams by multiplying its values by 1,000, what happens to its sample variance and its influence on $PC_1$?",
    options: [
      { id: "a", text: "Its sample variance increases by a factor of 1,000, leaving its relative weight on $PC_1$ virtually unaltered in the analysis" },
      { id: "b", text: "Its sample variance is multiplied by $1,000^2 = 1,000,000$, causing $X_1$ to completely dominate $PC_1$ purely due to unit choice" },
      { id: "c", text: "Its sample variance remains constant because linear scaling transformations are automatically cancelled by PCA normalization" },
      { id: "d", text: "Its sample variance decreases by $1,000$, forcing $PC_1$ to align with the remaining unscaled variables in the sample matrix" },
      { id: "e", text: "Its sample variance becomes non-invertible, producing arithmetic division by zero in the characteristic polynomial equation" },
      { id: "f", text: "Its sample variance is multiplied by $\\sqrt{1,000} \\approx 31.6$, resulting in a moderate increase in its factor loading on $PC_1$" }
    ],
    correct_option: "b",
    explanation: "Variance is a squared dispersion metric: $\\text{Var}(c X_1) = c^2 \\text{Var}(X_1)$. Multiplying $X_1$ by $1,000$ scales its variance by $1,000^2 = 1,000,000$. In Covariance PCA, $PC_1$ seeks to maximize captured variance, so this massive variance inflation forces $PC_1$ to align almost $100\\%$ with $X_1$, completely distorting the analysis."
  },
  // Q9
  {
    id: "q_l4_9",
    segment_id: "ch2-pca-analytical",
    order_index: 9,
    difficulty: "intermediate",
    pool_type: "quiz",
    section_reference: "Section 1: Covariance PCA vs. Correlation PCA",
    section_anchor: "covariance-pca-vs-correlation-pca",
    question: "In Correlation PCA on $p$ variables, what is the exact sum of all $p$ eigenvalues ($\\sum_{i=1}^p \\lambda_i$)?",
    options: [
      { id: "a", text: "Exactly $p$, because standardizing each variable sets its sample variance to 1.0, making the trace of the correlation matrix $\\text{tr}(R) = p$" },
      { id: "b", text: "Exactly 1.0, because eigenvalues are constrained by the spectral decomposition algorithm to sum to unity across dimensions" },
      { id: "c", text: "Exactly $\\sqrt{p}$, representing the Euclidean norm of the unit-variance indicator vector in standardized observation space" },
      { id: "d", text: "Exactly $(p - 1) / n$, adjusting the total matrix dispersion by the sample degrees of freedom available in the dataset" },
      { id: "e", text: "Exactly the determinant of the correlation matrix: $\\det(R)$, quantifying the total generalized multivariate variance" },
      { id: "f", text: "Exactly $p^2$, because every pairwise bivariate correlation coefficient contributes 1.0 to the quadratic matrix form" }
    ],
    correct_option: "a",
    explanation: "In Correlation PCA, each variable is standardized to have unit variance ($s_j^2 = 1.0$). The trace of correlation matrix $R$ is $\\text{tr}(R) = \\sum_{j=1}^p 1.0 = p$. By the spectral trace theorem, the sum of all eigenvalues equals the trace: $\\sum_{i=1}^p \\lambda_i = \\text{tr}(R) = p$."
  },
  // Q10
  {
    id: "q_l4_10",
    segment_id: "ch2-pca-analytical",
    order_index: 10,
    difficulty: "easy",
    pool_type: "quiz",
    section_reference: "Section 3: Component Retention Criteria",
    section_anchor: "component-retention-criteria",
    question: "In a 5-variable Correlation PCA, the eigenvalues are $\\lambda_1 = 2.85$, $\\lambda_2 = 1.25$, $\\lambda_3 = 0.50$, $\\lambda_4 = 0.25$, and $\\lambda_5 = 0.15$. How many components should be retained under: (1) the Kaiser criterion ($\\lambda > 1.0$), and (2) an 80% cumulative variance criterion?",
    options: [
      { id: "a", text: "(1) Kaiser retains 1 component ($\\lambda_1 = 2.85$); (2) 80% criterion retains 2 components ($(2.85 + 1.25)/5 = 82.0\\%$)" },
      { id: "b", text: "(1) Kaiser retains 3 components ($\\lambda_1, \\lambda_2, \\lambda_3$); (2) 80% criterion retains 4 components ($94.0\\%$)" },
      { id: "c", text: "(1) Kaiser retains 4 components; (2) 80% criterion retains all 5 components to capture 100% of standardized variance" },
      { id: "d", text: "(1) Kaiser retains 2 components ($\\lambda_1, \\lambda_2 > 1.0$); (2) 80% criterion retains 2 components, because $(2.85 + 1.25) / 5.00 = 82.0\\% \\ge 80\\%$" },
      { id: "e", text: "(1) Kaiser retains 1 component; (2) 80% criterion retains 3 components ($(2.85 + 1.25 + 0.50)/5 = 92.0\\%$)" },
      { id: "f", text: "(1) Kaiser retains 2 components; (2) 80% criterion retains 3 components ($82.0\\% > 80\\%$), requiring an extra safety component" }
    ],
    correct_option: "d",
    explanation: "1. Kaiser Criterion: Retain components with $\\lambda_i > 1.0$. Here, $\\lambda_1 = 2.85$ and $\\lambda_2 = 1.25$ both exceed 1.0, while $\\lambda_3 = 0.50 < 1.0$. Thus, exactly 2 components are retained.\\n2. Cumulative Variance Criterion (80%): Total variance across 5 standardized variables is $5.00$. The cumulative variance of the first two components is $(2.85 + 1.25) / 5.00 = 4.10 / 5.00 = 82.0\\%$. Because $82.0\\% \\ge 80\\%$, exactly 2 components are retained to achieve the 80% threshold."
  },
  // Q11
  {
    id: "q_l4_11",
    segment_id: "ch2-pca-analytical",
    order_index: 11,
    difficulty: "hard",
    pool_type: "quiz",
    section_reference: "Section 1: Covariance PCA vs. Correlation PCA",
    section_anchor: "covariance-pca-vs-correlation-pca",
    question: "In the 25 US cities food prices study (Exercise 1), why did the analyst evaluate Correlation PCA alongside Mean-Corrected Covariance PCA?",
    options: [
      { id: "a", text: "Because Mean-Corrected Covariance PCA cannot compute component scores for geographical observations like Anchorage" },
      { id: "b", text: "Because Correlation PCA forces all 5 food categories to have identical mean prices across the 25 metropolitan areas" },
      { id: "c", text: "Because the covariance matrix of food prices was singular and could not be inverted without prior $z$-score transformation" },
      { id: "d", text: "Because Correlation PCA eliminated the Anchorage price outlier by winsorizing extreme price observations in Alaska" },
      { id: "e", text: "Because food items had differing unit dispersions, and standardizing allowed all 5 categories to contribute equally to price patterns" },
      { id: "f", text: "Because food commodities are nonmetric ordinal rankings that violate the continuous interval assumptions of Covariance PCA" }
    ],
    correct_option: "e",
    explanation: "As analyzed in Chapter 2 Exercise 1 (Food Prices across 25 US cities): In raw Covariance PCA, commodities with high absolute price dispersion (such as meat or oranges) dominate the variance. Standardizing variables (Correlation PCA) gives each food item an equal initial weight ($s_j^2 = 1.0$), revealing underlying patterns of relative cost across cities regardless of base commodity prices."
  },
  // Q12
  {
    id: "q_l4_12",
    segment_id: "ch2-pca-analytical",
    order_index: 12,
    difficulty: "intermediate",
    pool_type: "quiz",
    section_reference: "Section 5: Practical Software Execution",
    section_anchor: "practical-software-execution",
    question: "In Python scikit-learn, why is it standard practice to apply StandardScaler prior to fitting PCA(n_components=k)?",
    options: [
      { id: "a", text: "Because `PCA` in scikit-learn will throw a syntax error if input variables have sample means different from zero" },
      { id: "b", text: "Because `StandardScaler` converts continuous metric variables into discrete integer classes for spectral factorization" },
      { id: "c", text: "Because scikit-learn's `PCA` module performs orthogonal Varimax rotation only when variables have standard deviation of 1.0" },
      { id: "d", text: "Because `StandardScaler` removes outlier observations by evaluating multivariate Mahalanobis distance thresholds" },
      { id: "e", text: "Because `PCA` requires the input matrix to be non-singular, and standardization guarantees a non-zero determinant" },
      { id: "f", text: "Because `PCA` in scikit-learn performs Covariance SVD by default without internal scaling, requiring explicit $z$-score standardization" }
    ],
    correct_option: "f",
    explanation: "Unlike SAS PROC PRINCOMP (which analyzes correlation matrices by default), scikit-learn's PCA computes SVD on centered raw data (Covariance PCA). To perform Correlation PCA in Python, the analyst must explicitly standardize features using StandardScaler() before calling PCA()."
  }
];

export const mergedLevel4Flashcards = [
  {
    id: "fc_l4_1",
    segment_id: "ch2-pca-analytical",
    order_index: 1,
    category: "Covariance vs Correlation",
    front: "What is the **scale sensitivity problem** in Covariance PCA, and how does it distort component extraction?",
    back: "Because variance scales quadratically ($\\\\text{Var}(c X) = c^2 \\\\text{Var}(X)$), variables measured in larger units (e.g. multiplied by 1,000) have variances multiplied by $1,000,000$. Covariance $PC_1$ mechanically aligns with the largest variance variable, regardless of correlation.",
    section_reference: "Section 1: Covariance PCA vs. Correlation PCA",
    section_anchor: "the-scale-sensitivity-of-covariance-pca"
  },
  {
    id: "fc_l4_2",
    segment_id: "ch2-pca-analytical",
    order_index: 2,
    category: "Covariance vs Correlation",
    front: "Under what conditions should **Correlation PCA** be selected over **Covariance PCA**?",
    back: "Whenever variables are measured in **different physical units** (e.g. Euros vs years vs kg), arbitrary rating scales, or widely differing dispersions. Standardizing sets all variances to $1.0$, preventing scale distortion.",
    section_reference: "Section 1: Covariance PCA vs. Correlation PCA",
    section_anchor: "when-to-use-correlation-pca"
  },
  {
    id: "fc_l4_3",
    segment_id: "ch2-pca-analytical",
    order_index: 3,
    category: "Matrix Properties",
    front: "What is the **total variance** and **average eigenvalue** in Correlation PCA across $p$ variables?",
    back: "Total variance equals $\\\\text{tr}(R) = p$. The average eigenvalue is always exactly $\\\\bar{\\\\lambda} = p / p = 1.0$. (In Covariance PCA, total variance is $\\\\text{tr}(S) = \\\\sum s_j^2$, and $\\\\bar{\\\\lambda} = \\\\text{tr}(S)/p$).",
    section_reference: "Section 1: Covariance PCA vs. Correlation PCA",
    section_anchor: "when-to-use-correlation-pca"
  },
  {
    id: "fc_l4_4",
    segment_id: "ch2-pca-analytical",
    order_index: 4,
    category: "Core Quantities",
    front: "What is a **Factor Loading** ($l_{ji}$), and what does its squared value represent?",
    back: "The Pearson correlation between variable $X_j$ and component $PC_i$: $l_{ji} = w_{ij}\\\\frac{\\\\sqrt{\\\\lambda_i}}{s_j}$ (or $w_{ij}\\\\sqrt{\\\\lambda_i}$ in Correlation PCA). The squared loading $l_{ji}^2$ is the proportion of variable $X_j$'s variance explained by $PC_i$.",
    section_reference: "Section 2: Four Key Quantities (Eigenvalues, Weights, Scores & Loadings)",
    section_anchor: "four-key-quantities"
  },
  {
    id: "fc_l4_5",
    segment_id: "ch2-pca-analytical",
    order_index: 5,
    category: "Core Quantities",
    front: "How do **Eigenvector Weights** ($w_i$) differ fundamentally from **Factor Loadings** ($l_{ji}$)?",
    back: "**Weights ($w_i$)** are normalized linear coefficients ($\\\\sum w_{ij}^2 = 1$) that construct components: $PC = w'X$. **Loadings ($l_{ji}$)** are bivariate correlations between original variables and components, bounded between $[-1, 1]$.",
    section_reference: "Section 2: Four Key Quantities (Eigenvalues, Weights, Scores & Loadings)",
    section_anchor: "four-key-quantities"
  },
  {
    id: "fc_l4_6",
    segment_id: "ch2-pca-analytical",
    order_index: 6,
    category: "Retention Diagnostics",
    front: "What is the **Kaiser Criterion** for retaining principal components, and why does it apply ONLY to Correlation PCA?",
    back: "Retain components with $\\\\lambda_i > 1.0$. It applies only to Correlation PCA because average eigenvalue is $1.0$; a component with $\\\\lambda < 1.0$ accounts for less variance than a single standardized variable. In Covariance PCA, total variance is not $p$.",
    section_reference: "Section 3: Component Retention Criteria",
    section_anchor: "component-retention-criteria"
  },
  {
    id: "fc_l4_7",
    segment_id: "ch2-pca-analytical",
    order_index: 7,
    category: "Retention Diagnostics",
    front: "How is the **Cattell Scree Test (Elbow Rule)** applied to determine component retention?",
    back: "Plot ordered eigenvalues vs component index. Retain all components appearing **before the elbow** (the point of inflection where steep descent levels off into a horizontal scree slope).",
    section_reference: "Section 3: Component Retention Criteria",
    section_anchor: "component-retention-criteria"
  },
  {
    id: "fc_l4_8",
    segment_id: "ch2-pca-analytical",
    order_index: 8,
    category: "Software Execution",
    front: "How do default PCA execution settings differ between **SAS PROC PRINCOMP** and **Python scikit-learn**?",
    back: "**SAS** analyzes the correlation matrix $R$ by default (use \`COV\` option for covariance PCA). **Python scikit-learn** performs Covariance SVD by default (analyst must explicitly apply \`StandardScaler()\` for Correlation PCA).",
    section_reference: "Section 5: Practical Software Execution",
    section_anchor: "practical-software-execution"
  }
];

export async function runMerge() {
  console.log('=== Merging LU4 and LU5 into Single Streamlined Level 4 ===');

  // 1. Update study_segments
  console.log('1. Updating study_segments...');
  const { error: segErr } = await supabase
    .from('study_segments')
    .update({
      title: 'PCA: Covariance vs. Correlation, Loadings & Retention Diagnostics',
      subtitle: 'Scale sensitivity problem, distinguishing weights vs loadings, Kaiser/Scree/variance criteria, regional profiling, and software.',
      summary_markdown: mergedSummaryMarkdown
    })
    .match({ id: 'ch2-pca-analytical' });

  if (segErr) console.error('Error updating ch2-pca-analytical:', segErr);
  else console.log('Updated ch2-pca-analytical metadata and summary text.');

  // Update order_indices of Chapter 3 segments (6 -> 5, 7 -> 6, 8 -> 7)
  await supabase.from('study_segments').update({ order_index: 5 }).match({ id: 'ch3-fa-theory' });
  await supabase.from('study_segments').update({ order_index: 6 }).match({ id: 'ch3-fa-extraction' });
  await supabase.from('study_segments').update({ order_index: 7 }).match({ id: 'ch3-fa-rotation-evaluation' });
  console.log('Updated Chapter 3 segments order_indices to 5, 6, 7.');

  // 2. Migrate and clean workbook exercises
  console.log('2. Updating study_workbook_exercises...');
  // Check if wb-l5-ex1 exists; if so, update it to wb-l4-ex2 in ch2-pca-analytical
  const { data: wb5 } = await supabase.from('study_workbook_exercises').select('*').eq('id', 'wb-l5-ex1').maybeSingle();
  if (wb5) {
    await supabase.from('study_workbook_exercises').delete().match({ id: 'wb-l5-ex1' });
    await supabase.from('study_workbook_exercises').upsert({
      id: 'wb-l4-ex2',
      segment_id: 'ch2-pca-analytical',
      order_index: 2,
      title: 'Workbook Exercise: Factor Loadings, Component Scores & Regional Profiling',
      difficulty: 'hard',
      prompt_markdown: wb5.prompt_markdown,
      solution_markdown: wb5.solution_markdown,
      section_reference: 'Section 4: Portuguese Regional Assessment',
      section_anchor: '4-real-world-case-study-portuguese-regional-assessment'
    });
    console.log('Migrated wb-l5-ex1 to wb-l4-ex2 in ch2-pca-analytical.');
  }

  // Ensure wb-l4-ex1 is order_index 1
  await supabase.from('study_workbook_exercises').update({
    order_index: 1,
    section_reference: 'Section 1: Covariance PCA vs. Correlation PCA',
    section_anchor: 'real-course-case-25-us-cities-food-prices'
  }).match({ id: 'wb-l4-ex1' });

  // 3. Update questions in study_questions
  console.log('3. Updating study_questions...');
  // Delete all questions belonging to ch2-pca-interpretation and ch2-pca-analytical
  await supabase.from('study_questions').delete().eq('segment_id', 'ch2-pca-interpretation');
  await supabase.from('study_questions').delete().eq('segment_id', 'ch2-pca-analytical');

  // Insert 12 new quiz questions
  const { error: qErr } = await supabase.from('study_questions').insert(mergedLevel4QuizQuestions);
  if (qErr) console.error('Error inserting merged quiz questions:', qErr);
  else console.log('Inserted 12 balanced quiz questions for ch2-pca-analytical.');

  // 4. Update flashcards in study_flashcards
  console.log('4. Updating study_flashcards...');
  await supabase.from('study_flashcards').delete().eq('segment_id', 'ch2-pca-interpretation');
  await supabase.from('study_flashcards').delete().eq('segment_id', 'ch2-pca-analytical');
  const { error: fcErr } = await supabase.from('study_flashcards').insert(mergedLevel4Flashcards);
  if (fcErr) console.error('Error inserting merged flashcards:', fcErr);
  else console.log('Inserted 8 flashcards for ch2-pca-analytical.');

  // 5. Clean progress entries and delete old segment ch2-pca-interpretation
  console.log('5. Deleting ch2-pca-interpretation...');
  await supabase.from('study_progress').delete().eq('segment_id', 'ch2-pca-interpretation');
  const { error: delSegErr } = await supabase.from('study_segments').delete().match({ id: 'ch2-pca-interpretation' });
  if (delSegErr) console.error('Error deleting segment ch2-pca-interpretation:', delSegErr);
  else console.log('Deleted segment ch2-pca-interpretation from study_segments.');

  console.log('\n=== Database Migration Completed Successfully! ===');
}

if (process.argv[1]?.endsWith('merge-lu4-lu5.js')) {
  runMerge();
}
