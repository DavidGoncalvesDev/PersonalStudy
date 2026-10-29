import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://eurqqiebokwcrrhfbihg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cnFxaWVib2t3Y3JyaGZiaWhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNDA0MzIsImV4cCI6MjEwNzcxNjQzMn0.UrhclnTabK3YEJZzroYeDmO4D4pij59IWCXyWZ9ruxs';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const discipline = {
  id: 'data-analysis',
  name: 'Data Analysis',
  code: 'DA-2026/2027',
  description: 'Multivariate statistical analysis: Fundamentals & Scales, Principal Components Analysis (PCA), and Factor Analysis (FA).'
};

const segments = [
  {
    id: 'da-ch1-intro',
    discipline_id: 'data-analysis',
    order_index: 1,
    title: 'Chapter 1: Fundamentals of Data Analysis & Scales',
    subtitle: 'Measurement Scales, Dependence vs Interdependence, Observation Space Geometry & Distance Metrics',
    summary_markdown: `# Chapter 1: Introduction to Data Analysis & Fundamentals

## 1. Core Concepts of Data Analysis
Data analysis is the systematic process of **inspecting, cleaning, transforming, and modelling** data to discover actionable insights, validate statistical hypotheses ($H_0$), and guide strategic decisions.

---

## 2. Measurement Scales: The Fundamental Hierarchy
Before choosing any statistical technique, you MUST identify the scale of your variables. The four scales are divided into **Nonmetric** (qualitative) and **Metric** (quantitative):

### A. Nonmetric Scales (Categorical)
1. **Nominal Scale**:
   - Numbers or labels serve solely as **arbitrary category identifiers** (e.g., Gender: $0 = \\text{Male}, 1 = \\text{Female}$; Nationality).
   - Mathematical operations ($+, -$) and metrics like Mean or Standard Deviation are **completely meaningless**.
   - **Appropriate Statistics**: Frequencies, Percentages, and Mode.
   - **Dummy Coding Rule**: A nominal variable with $k$ categories requires exactly **$k - 1$ dummy (binary 0/1) variables** in models to prevent perfect multicollinearity.
2. **Ordinal Scale**:
   - Ranks objects in relative order ($1^{\\text{st}}, 2^{\\text{nd}}, 3^{\\text{rd}}$), such as brand preferences or medal standings.
   - **Intervals between ranks are NOT equal** (the preference gap between 1st and 2nd is not necessarily the same as between 2nd and 3rd).
   - **Appropriate Statistics**: Median, Mode, Percentiles, and Non-parametric correlations (e.g., Spearman rank correlation $\\rho$).

### B. Metric Scales (Continuous / Quantitative)
3. **Interval Scale**:
   - Equal numerical intervals represent **equal differences** in the measured attribute (e.g., Celsius temperature; Likert scales where $2-1 = 5-4$).
   - **Zero is arbitrary** (there is NO absolute/natural zero; $0^\\circ\\text{C}$ does not mean complete absence of heat).
   - **Permissible Transformation**: Linear transformation $Y_t = a + b Y_0$ preserves all properties.
   - **Restriction**: Ratios are **invalid** (you cannot claim $20^\\circ\\text{C}$ is "twice as warm" as $10^\\circ\\text{C}$). You cannot compute ratio-based statistics like the Coefficient of Variation ($CV$).
4. **Ratio Scale**:
   - Possesses all properties of interval scales plus an **absolute, natural base point (true zero)** representing the absence of the trait (e.g., Age, Income, Weight, Distance).
   - **Permissible Transformation**: Only scalar multiplication $Y_t = b Y_0$ preserves the zero base.
   - **Advantage**: Statements like "Firm A's revenue is twice Firm B's revenue" are fully valid. **All statistical measures** can be computed.

---

## 3. Classification of Multivariate Methods
Multivariate techniques fall into two major paradigms:

### A. Dependence Methods
Used when variables can be separated into **Independent Variables (Predictors / IVs)** and **Dependent Variables (Outcomes / DVs)**:
- **1 Metric DV, Metric IVs**: Multiple Linear Regression
- **1 Metric DV, Nonmetric IVs**: ANOVA (Analysis of Variance) / t-test
- **1 Nonmetric (Categorical) DV, Metric IVs**: Discriminant Analysis (DA) or Logistic Regression
- **Multiple Metric DVs**: MANOVA (with Nonmetric IVs) or Canonical Correlation (with Metric IVs)

### B. Interdependence Methods
Used when it is impossible or inappropriate to assign IV/DV roles. The objective is to identify **underlying structures, mutual correlations, or clusters**:
- **Metric Variables**: Principal Components Analysis (PCA), Factor Analysis (FA)
- **Categorical / Nonmetric Variables**: Contingency Tables, Log-linear models, Correspondence Analysis (CA)
- **Object Grouping**: Cluster Analysis (CA), Multidimensional Scaling (MDS)

---

## 4. Data Manipulation Fundamentals
- **Mean (Central Tendency)**: $\\bar{x}_j = \\frac{1}{n} \\sum_{i=1}^n x_{ij}$
- **Mean-Corrected (Centered) Data**: $x^*_{ij} = x_{ij} - \\bar{x}_j$. Centering shifts the coordinate origin to the centroid $(0,0,\\dots,0)$; **variances, covariances, and relative distances remain unchanged**.
- **Degrees of Freedom ($df$)**: The number of independent pieces of information available to estimate a parameter ($df = n - 1$ for sample variance).
- **Sum of Squares (SS) & Variance ($s^2$)**:
  $$s^2 = \\frac{SS}{df} = \\frac{1}{n-1} \\sum_{i=1}^n (x_{ij} - \\bar{x}_j)^2$$
  *Key Principle: In multivariate analysis, **dispersion is information**.*
- **Sum of Cross Products (SCP) & Covariance ($s_{jk}$)**:
  $$s_{jk} = \\frac{SCP}{df} = \\frac{1}{n-1} \\sum_{i=1}^n (x_{ij} - \\bar{x}_j)(x_{ik} - \\bar{x}_k)$$
  Measures the strength of **linear association** (non-causal).
- **Pearson Correlation Coefficient ($r_{jk}$)**:
  $$r_{jk} = \\frac{s_{jk}}{s_j s_k}, \\quad -1 \\le r_{jk} \\le 1$$
  Standardized covariance, invariant to scale or unit changes.
- **Standardization**: $z_{ij} = \\frac{x_{ij} - \\bar{x}_j}{s_j}$. Standardized variables have mean $0$ and variance $1$.

---

## 5. Geometric Representation: Variable vs Observation Space
- **Variable Space**: Points represent observations ($n$), axes represent variables ($p$).
- **Observation Space**: Points/vectors represent variables ($p$) in an $n$-dimensional space of observations!
  - The **squared length** of a mean-corrected vector is its Sum of Squares: $\\|x_j\\|^2 = SS_j$.
  - The vector length rescaled by $\\sqrt{n-1}$ is its **sample standard deviation**: $s_j = \\frac{\\|x_j\\|}{\\sqrt{n-1}}$.
  - Standardizing a variable is equivalent to rescaling its vector to length $\\sqrt{n-1}$.
  - **The Cosine Identity**: The cosine of the angle $\\alpha$ between two mean-corrected vectors equals their Pearson correlation:
    $$\\cos\\alpha = \\frac{x_j \\cdot x_k}{\\|x_j\\| \\|x_k\\|} = r_{jk}$$
    - If $\\alpha = 90^\\circ \\implies \\cos(90^\\circ) = 0 \\implies r = 0$ (orthogonal = uncorrelated).
    - If $\\alpha = 0^\\circ \\implies \\cos(0^\\circ) = 1 \\implies r = 1$ (collinear = perfect positive correlation).

---

## 6. Distances in Multivariate Space
1. **Euclidean Distance**:
   $$D_{ik} = \\sqrt{\\sum_{j=1}^p (x_{ij} - x_{kj})^2}$$
   Straight-line distance. **Flaw**: Assumes variables are uncorrelated and share the exact same scale and variance.
2. **Statistical Distance**:
   $$SD_{ik}^2 = \\sum_{j=1}^p \\left(\\frac{x_{ij} - x_{kj}}{s_j}\\right)^2$$
   Normalizes differences by each variable's standard deviation ($s_j$). Adjusts for variance, but still assumes variables are uncorrelated.
3. **Mahalanobis Distance ($MD$)**:
   $$MD_{ik}^2 = (x_i - x_k)' S^{-1} (x_i - x_k)$$
   (where $S$ is the covariance matrix).
   - Incorporates **BOTH variances and covariances (correlations)** between variables.
   - **Special Cases**:
     - When variables are uncorrelated ($r = 0$), $S$ is diagonal $\\implies MD$ reduces to **Statistical Distance**.
     - When variables are uncorrelated and standardized ($S = I$), $MD$ reduces to **Euclidean Distance**.
4. **Metric Axioms**:
   Every valid statistical distance must satisfy:
   - **Symmetry**: $D_{ik} = D_{ki}$
   - **Triangle Inequality**: $D_{il} \\le D_{ik} + D_{kl}$
   - **Distinguishability**: $D_{ik} = 0 \\iff i = k$`
  },
  {
    id: 'da-ch2-pca',
    discipline_id: 'data-analysis',
    order_index: 2,
    title: 'Chapter 2: Principal Components Analysis (PCA)',
    subtitle: 'Dimensionality Reduction, Eigenvalues & Eigenvectors, Loadings vs Scores, and Selection Criteria',
    summary_markdown: `# Chapter 2: Principal Components Analysis (PCA)

## 1. What is PCA & What Does It Achieve?
PCA is an **interdependence, data-reduction technique** that transforms a set of $p$ correlated observed variables into a smaller set of $k < p$ **uncorrelated (orthogonal)** composite variables called **Principal Components (PCs)**.
- **Primary Objective**: Maximize the amount of total observed variance explained with the minimum number of components.
- **Formative Logic**: Original variables are combined into new index variables ($PC = w'x$). PCA explains total observed variance, NOT shared latent factors.

---

## 2. Geometric & Analytical Foundations
### The Optimization Problem
Each principal component is a linear combination of centered (or standardized) variables:
$$PC_i = \\xi_i = w_{i1}x_1 + w_{i2}x_2 + \\dots + w_{ip}x_p = w_i'x$$
To find $PC_1$, we maximize its variance:
$$\\text{Var}(PC_1) = w_1' S w_1 \\quad \\text{subject to} \\quad w_1'w_1 = 1$$
The constraint $w'w = 1$ (unit length) is mandatory; without it, multiplying weights by $c$ would multiply variance by $c^2$.

### Eigenvalues ($\\lambda$) & Eigenvectors ($w$)
- Eigenvalues are found by solving the characteristic equation:
  $$\\det(S - \\lambda I) = 0 \\quad \\text{or} \\quad \\det(R - \\lambda I) = 0$$
- **Eigenvalue ($\\lambda_i$)**: Equals the **variance of that component**: $\\text{Var}(PC_i) = \\lambda_i$.
- **Eigenvector ($w_i$)**: Defines the direction (weights) of component $i$.
- **Total Variance Property**: The sum of all eigenvalues equals the total variance of the input data:
  $$\\sum_{i=1}^p \\lambda_i = \\text{Total Variance}$$
  - In standardized (correlation) PCA, each variable has variance $1$, so Total Variance $= p$.
- **Proportion of Variance Explained**:
  $$\\text{Proportion of } PC_i = \\frac{\\lambda_i}{\\sum_{j=1}^p \\lambda_j}$$

---

## 3. Four Core Quantities That Must NOT Be Confused
| Quantity | Symbol | Mathematical Meaning | Key Role |
| :--- | :--- | :--- | :--- |
| **Eigenvalue** | $\\lambda_i$ | $\\text{Var}(PC_i)$ | Measures variance captured by component $i$. |
| **Eigenvector / Weights** | $w_i = (w_{i1},\\dots,w_{ip})'$ | Unit-length direction vector ($w'w = 1$) | Coefficients used to calculate scores from inputs. |
| **Component Score** | $t_{hi} = w_i'x_h$ | Coordinate of observation $h$ on axis $PC_i$ | Used in downstream plotting, clustering, or regression. |
| **Component Loading** | $l_{ji} = \\text{Corr}(X_j, PC_i)$ | Correlation between variable $j$ and $PC_i$ | Used to interpret and label the substantive meaning of $PC_i$. |

### The Loading Formula
$$l_{ji} = \\text{Corr}(X_j, PC_i) = w_{ij} \\frac{\\sqrt{\\lambda_i}}{s_j}$$
- For **standardized variables (Correlation PCA)**, $s_j = 1$, so:
  $$l_{ji} = w_{ij} \\sqrt{\\lambda_i}$$
- **Sign & Magnitude**: Large absolute loadings ($|l| \\ge 0.50$ or $0.60$) indicate strong association with the component.

### Sign Indeterminacy (Reflection Invariance)
A component $PC_1 = w_1'x$ and its negative $-PC_1 = -w_1'x$ are **mathematically equivalent**. Both describe the exact same axis and account for identical variance. Reversing signs flips all scores and loadings together, leaving relative distances and reconstructed data unchanged.

---

## 4. Covariance PCA vs Correlation PCA: Why Units Matter
- **Covariance PCA ($S$)**: Performed on mean-corrected data. Retains original measurement units.
  - *Risk*: Variables with large scales dominate the variance. If you change Income from $k€$ to $€$ (multiplying by 1,000), its variance multiplies by $1,000^2 = 1,000,000$, completely distorting the PCs!
- **Correlation PCA ($R$)**: Performed on standardized data ($z$).
  - *Rule*: **Always use Correlation PCA** when variables are measured in different units (e.g., age in years, income in euros, satisfaction on a 1-7 scale).

---

## 5. Selection Criteria: How Many Components to Retain?
1. **Kaiser Criterion**: For **correlation PCA**, retain components with $\\lambda_i > 1.0$. (Each retained component explains more variance than a single standardized original variable).
2. **Cumulative Variance Criterion**: Retain the minimum number of components reaching an application target (typically $70\\%$, $80\\%$, or $90\\%$).
3. **Scree Plot**: Plot ordered eigenvalues vs component number and locate the **"elbow"** (point where the curve flattens out into residual debris).

---

## 6. Implementation in Python & SAS
- **Python**:
  \`\`\`python
  from sklearn.decomposition import PCA
  from sklearn.preprocessing import StandardScaler
  X_std = StandardScaler().fit_transform(X)
  pca = PCA(n_components=2)
  scores = pca.fit_transform(X_std)
  # loadings = pca.components_.T * np.sqrt(pca.explained_variance_)
  \`\`\`
- **SAS**:
  \`\`\`sas
  Proc PrinComp Data=MyData Out=Scores OutStat=Stats N=2 Plots=Scree;
    Var X1 X2 X3 X4 X5;
  Run;
  \`\`\``
  },
  {
    id: 'da-ch3-fa',
    discipline_id: 'data-analysis',
    order_index: 3,
    title: 'Chapter 3: Factor Analysis (FA)',
    subtitle: 'Latent Constructs, Communalities & Unique Variance, PCF vs PAF, KMO Adequacy, and Varimax Rotation',
    summary_markdown: `# Chapter 3: Factor Analysis (FA)

## 1. What is Factor Analysis?
Factor Analysis is an **interdependence technique** whose primary objective is to **explain the intercorrelations among $p$ observable indicators** by uncovering a smaller number ($m \\ll p$) of unobservable, underlying dimensions called **latent factors ($\\xi$)**.

### The Fundamental Contrast: PCA vs FA
| Dimension | Principal Components Analysis (PCA) | Factor Analysis (FA) |
| :--- | :--- | :--- |
| **Model Type** | Formative composite indices ($PC = w'x$) | Reflective latent model ($x = \\Lambda \\xi + \\epsilon$) |
| **Focus** | Explains **total observed variance** | Explains **intercorrelations (shared variance)** |
| **Unique Factors** | Assumes no unique error factors ($u^2 = 0$) | Explicitly isolates unique/specific error variance |
| **Indicators** | Formative: Variables combine to create the PC | Reflective: Observable variables reflect underlying latent traits |

---

## 2. The Factor Model & Variance Decomposition
For a standardized indicator $x_j$, the general $m$-factor model is:
$$x_j = \\lambda_{j1}\\xi_1 + \\lambda_{j2}\\xi_2 + \\dots + \\lambda_{jm}\\xi_m + \\epsilon_j$$
Where:
- $\\lambda_{jm}$ are **pattern loadings** (regression coefficients).
- $\\xi_m$ are common latent factors.
- $\\epsilon_j$ is the **unique factor** (specific variance + measurement error).

### Total Variance Decomposition
Since variables and factors are standardized (variance $= 1$):
$$\\text{Total Variance}(x_j) = 1 = \\underbrace{h_j^2}_{\\text{Communality}} + \\underbrace{u_j^2}_{\\text{Unique Variance}}$$
1. **Communality ($h_j^2$)**: The proportion of the indicator's variance that is shared with the common factors:
   $$h_j^2 = \\sum_{k=1}^m \\lambda_{jk}^2 \\quad \\text{(in orthogonal models)}$$
2. **Unique Variance ($u_j^2 = \\text{Var}(\\epsilon_j)$)**:
   $$u_j^2 = 1 - h_j^2$$
   Variance unique to that particular variable or error.

---

## 3. Pattern Loadings vs Structure Loadings
- **Pattern Loadings**: The linear regression coefficients (weights) connecting latent factors to indicators.
- **Structure Loadings**: The simple bivariate correlation between an indicator and a factor: $\\text{Corr}(x_j, \\xi_k)$.
- **Crucial Distinction**:
  - In an **Orthogonal Model** (factors uncorrelated, $\\Phi = 0$): **Pattern Loadings $\\equiv$ Structure Loadings**!
  - In an **Oblique Model** (factors correlated, $\\Phi_{12} = \\text{Corr}(\\xi_1, \\xi_2) \\ne 0$):
    $$\\text{Structure Loading} = \\text{Corr}(x_j, \\xi_1) = \\lambda_{j1} + \\lambda_{j2}\\Phi_{12} \\ne \\text{Pattern Loading}$$
- **Correlation Between Indicators**:
  - In an orthogonal single-factor model: $\\text{Corr}(x_j, x_k) = \\lambda_j \\lambda_k$ (the product of their loadings).
  - In an orthogonal two-factor model: $\\text{Corr}(x_j, x_k) = \\lambda_{j1}\\lambda_{k1} + \\lambda_{j2}\\lambda_{k2}$.

---

## 4. The Two Fundamental Factor Indeterminacies
1. **Factor Rotation Indeterminacy**: There is an infinite number of rotated factor solutions that produce the exact same communalities, unique variances, and reproduced correlation matrix. Rotations are used to achieve **simple structure** for meaningful interpretation.
2. **Communality Estimation Circularity**: To calculate factor loadings, an estimate of communalities is required; but to calculate communalities, factor loadings are needed!

---

## 5. Extraction Techniques: PCF vs PAF
1. **Principal Components Factoring (PCF)**:
   - Sets initial communality estimates on the diagonal to **$1.0$**.
   - Simply performs PCA on the correlation matrix; assumes no initial unique error. Not truly a latent factor model.
2. **Principal Axis Factoring (PAF)**:
   - An **iterative algorithm**:
     1. Starts with initial communalities (e.g. 1.0 or squared multiple correlations $R^2$).
     2. Extracts $m$ factors and computes new communalities ($h^2 = \\sum \\lambda^2$).
     3. Replaces matrix diagonals with updated communalities and re-extracts factors.
     4. Repeats until convergence (maximum change $< 0.001$).
   - Explicitly separates shared from unique variance.

### Goodness of Fit: Root Mean Square Residual (RMSR)
The residual correlation matrix contains $r_{\\text{observed}} - r_{\\text{reproduced}}$.
$$RMSR = \\sqrt{\\frac{\\sum_{i=1}^p \\sum_{j=1}^p res_{ij}^2}{p(p-1)/2}}$$
A small $RMSR \\le 0.08$ indicates that the factor solution successfully accounts for the correlations among variables.

---

## 6. Testing Data Appropriateness: KMO & Partial Correlations
Before conducting FA, verify that the correlation matrix is factorable:
1. **Partial Correlations (Negative Anti-Image)**: Partial correlations controlling for all other variables should be **small (close to zero)**.
2. **Kaiser-Meyer-Olkin (KMO) Measure of Sampling Adequacy**:
   | KMO Value | Recommendation / Interpretation |
   | :--- | :--- |
   | **$\\ge 0.90$** | **Marvelous** |
   | **$> 0.80$** | **Meritorious** (Strongly recommended) |
   | **$> 0.70$** | **Middling** |
   | **$> 0.60$** | **Mediocre** (Minimum tolerable threshold) |
   | **$> 0.50$** | **Miserable** |
   | **$\\le 0.50$** | **Unacceptable** (Do NOT factor analyze) |

---

## 7. Factor Rotations: Simple Structure
- **Objective**: Simplify the factor pattern so that each indicator loads heavily on **only one factor** and close to zero on all others.
- **Orthogonal Rotations (Factors remain uncorrelated)**:
  - **Varimax**: Maximizes the variance of squared loadings across **columns** (factors). Best for separating factors; most popular and efficient.
  - **Quartimax**: Maximizes variance across **rows** (variables). Forces variables to load high on one factor, but tends to produce a large, uninterpretable **general factor**.
  - **Equamax**: A compromise between Varimax and Quartimax.
- **Oblique Rotations (Factors are allowed to correlate)**:
  - **Promax**, **Direct Oblimin**. Use when factors are expected to be theoretically correlated.`
  }
];

export { discipline, segments, supabase };
