const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://eurqqiebokwcrrhfbihg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cnFxaWVib2t3Y3JyaGZiaWhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNDA0MzIsImV4cCI6MjEwNzcxNjQzMn0.UrhclnTabK3YEJZzroYeDmO4D4pij59IWCXyWZ9ruxs';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const exercises = [
  {
    id: 'wb-l1-ex1',
    segment_id: 'ch1-scales-methods',
    order_index: 1,
    title: 'Workbook Exercise: Measurement Scales Invariance & Dummy Variable Design',
    difficulty: 'hard',
    section_reference: 'Section 1: Taxonomy of Variables',
    section_anchor: 'taxonomy-of-variables',
    prompt_markdown: `Consider an academic market research study investigating consumer purchase dynamics. The dataset records the following four variables across $n = 500$ consumers:
1. $X_1$: **Customer Region** (1 = North, 2 = South, 3 = East, 4 = West).
2. $X_2$: **Customer Satisfaction** (Measured on a 5-point Likert scale: 1 = Strongly Disagree to 5 = Strongly Agree).
3. $X_3$: **Ambient Store Temperature** (Measured in degrees Celsius, $^\circ\\text{C}$).
4. $X_4$: **Annual Grocery Expenditure** (Measured in Euros, €).

**Tasks to Solve:**
a. Formally classify each of the four variables ($X_1, X_2, X_3, X_4$) into Stevens' measurement scales (Nominal, Ordinal, Interval, Ratio). Specify the permissible mathematical operations and admissible transformations for each.
b. The econometrician wants to include $X_1$ (Customer Region) as an independent predictor in an Ordinary Least Squares (OLS) regression. Construct the dummy variable design matrix specification. How many binary indicator variables must be created? If all 4 categories are coded as binary variables without omitting a reference category, what exact mathematical singularity occurs in the normal equations $(\\mathbf{X}^T\\mathbf{X})^{-1}$?
c. Evaluate whether taking the arithmetic mean and sample standard deviation of $X_2$ (5-point Likert scale) is strictly permissible under formal measurement theory versus modern applied psychometric conventions.
d. Demonstrate why the ratio of two measurements $\\frac{x_a}{x_b}$ is meaningful for $X_4$ (Expenditure) but completely invalid for $X_3$ (Temperature in Celsius). What happens when $X_3$ is converted to Fahrenheit using $F = 1.8C + 32$?`,
    solution_markdown: `### Authoritative Step-by-Step Solution

#### Part a: Classification & Invariance Properties
1. **$X_1$ (Region)**: **Nominal Scale**.
   - *Admissible Transformation*: Any one-to-one mapping (permutation) $f(x)$ where $x_i \\neq x_j \\iff f(x_i) \\neq f(x_j)$.
   - *Permissible Operations*: Equivalence testing ($=$ or $\\neq$), counting frequencies, Mode. Arithmetic operations ($+,-,\\times,\\div$) are meaningless.
2. **$X_2$ (Likert Satisfaction)**: **Ordinal Scale**.
   - *Admissible Transformation*: Any strictly monotonic increasing transformation $f(x)$ where $x_i > x_j \\iff f(x_i) > f(x_j)$.
   - *Permissible Operations*: Ordering ($>, <, \\ge, \\le$), Median, Percentiles, Rank correlation (Spearman $\\rho$, Kendall $\\tau$).
3. **$X_3$ (Temperature in $^\circ\\text{C}$)**: **Interval Scale**.
   - *Admissible Transformation*: Positive affine transformation $y = \\alpha x + \\beta$ (with $\\alpha > 0$).
   - *Permissible Operations*: Differences and intervals ($x_a - x_b$), Mean, Variance, Pearson correlation. Zero is arbitrary (does not denote absence of thermal energy).
4. **$X_4$ (Annual Expenditure in €)**: **Ratio Scale**.
   - *Admissible Transformation*: Positive similarity transformation $y = \\alpha x$ (with $\\alpha > 0$, change of currency/scale).
   - *Permissible Operations*: All arithmetic operations including ratios $\\frac{x_a}{x_b}$, Geometric Mean, Coefficient of Variation. Contains a true, non-arbitrary absolute zero (€0 = zero expenditure).

---

#### Part b: Dummy Variable Coding & Matrix Singularity
- For $K = 4$ categories, exactly **$K - 1 = 3$ dummy variables** must be created.
- Let West be the benchmark (reference) category. The coding scheme is:
  - $D_1 = 1$ if North, $0$ otherwise.
  - $D_2 = 1$ if South, $0$ otherwise.
  - $D_3 = 1$ if East, $0$ otherwise.
  - If North = South = East = 0, the consumer is from West.
- **The Dummy Variable Trap**: If all 4 indicator columns $D_1, D_2, D_3, D_4$ are included alongside an intercept $\\mathbf{1}$, then:
  $$D_1 + D_2 + D_3 + D_4 = \\mathbf{1}$$
  This creates **exact multicollinearity** (linear dependence among columns of $\\mathbf{X}$). The matrix $\\mathbf{X}^T\\mathbf{X}$ has rank $< p$, its determinant is zero ($\\det(\\mathbf{X}^T\\mathbf{X}) = 0$), and its inverse $(\\mathbf{X}^T\\mathbf{X})^{-1}$ does not exist, causing OLS estimation to fail.

---

#### Part c: Likert Scale Arithmetic Feasibility
- **Pure Measurement Theory (Stevens, 1946)**: Strictly speaking, Likert ratings are **Ordinal**. Distances between categories (e.g. 1 to 2 vs 4 to 5) are not mathematically guaranteed to be equal. Therefore, taking means and standard deviations is theoretically invalid; only median and modes are formally justified.
- **Applied Psychometric Practice**: When a scale has 5 or more categories, is approximately symmetric, and represents an underlying continuous latent construct (or when multiple Likert items are summed into a composite index), researchers treat the data as quasi-interval. Extensive Monte Carlo simulations demonstrate that parametric tests ($F$-tests, regression, PCA) are robust to mild violations of interval scale assumptions.

---

#### Part d: Ratio Comparison & Scale Shift
- **For $X_4$ (Expenditure)**: A ratio scale possesses an absolute zero. If Consumer A spends €200 and Consumer B spends €100:
  $$\\frac{200}{100} = 2.0$$
  Consumer A spent exactly twice as much as Consumer B. If converted to Dollars using exchange rate $\\alpha = 1.10$, the ratio remains $\\frac{220}{110} = 2.0$ (invariant under $y = \\alpha x$).
- **For $X_3$ (Temperature)**: Under Celsius, compare $20^\\circ\\text{C}$ to $10^\\circ\\text{C}$: $\\frac{20}{10} = 2$.
  Now convert both to Fahrenheit ($F = 1.8C + 32$):
  - $20^\\circ\\text{C} = 1.8(20) + 32 = 68^\\circ\\text{F}$
  - $10^\\circ\\text{C} = 1.8(10) + 32 = 50^\\circ\\text{F}$
  - New ratio: $\\frac{68}{50} = 1.36 \\neq 2.0$!
  Because interval scales include an arbitrary intercept $\\beta \\neq 0$, ratios of raw values are not invariant and have no physical meaning.`
  },
  {
    id: 'wb-l2-ex1',
    segment_id: 'ch1-manipulation-distances',
    order_index: 1,
    title: 'Workbook Exercise: Metric Proximities & Mahalanobis Distance Calculation',
    difficulty: 'hard',
    section_reference: 'Section 2: Metric Proximities & Distances',
    section_anchor: 'metric-proximities-and-distances',
    prompt_markdown: `In a 2-dimensional biometric study, two patient profiles are measured on Blood Pressure ($X_1$, in mmHg) and Total Cholesterol ($X_2$, in mg/dL):
$$\\mathbf{p}_1 = \\begin{bmatrix} 120 \\\\ 200 \\end{bmatrix}, \\quad \\mathbf{p}_2 = \\begin{bmatrix} 140 \\\\ 230 \\end{bmatrix}$$

The sample population has the following variance-covariance matrix:
$$\\mathbf{S} = \\begin{bmatrix} 400 & 240 \\\\ 240 & 900 \\end{bmatrix}$$
(Note: $s_1^2 = 400 \\implies s_1 = 20$; $s_2^2 = 900 \\implies s_2 = 30$; $\\text{Cov}(X_1, X_2) = 240$).

**Tasks to Solve:**
a. Calculate the standard **Euclidean distance** $d_E(\\mathbf{p}_1, \\mathbf{p}_2)$ between the two patients.
b. Calculate the **Manhattan (City-block) distance** $d_M(\\mathbf{p}_1, \\mathbf{p}_2)$.
c. Calculate the Pearson correlation coefficient $r_{12}$ between $X_1$ and $X_2$.
d. Compute the determinant $\\det(\\mathbf{S})$ and find the explicit inverse matrix $\\mathbf{S}^{-1}$.
e. Calculate the squared **Mahalanobis distance** $D^2(\\mathbf{p}_1, \\mathbf{p}_2) = (\\mathbf{p}_1 - \\mathbf{p}_2)^T \\mathbf{S}^{-1} (\\mathbf{p}_1 - \\mathbf{p}_2)$.
f. Explain why Euclidean distance can be misleading when variables have vastly different measurement scales and non-zero covariance, and how Mahalanobis distance resolves both issues.`,
    solution_markdown: `### Authoritative Step-by-Step Solution

#### Part a: Euclidean Distance
The difference vector between patient 1 and patient 2 is:
$$\\mathbf{d} = \\mathbf{p}_1 - \\mathbf{p}_2 = \\begin{bmatrix} 120 - 140 \\\\ 200 - 230 \\end{bmatrix} = \\begin{bmatrix} -20 \\\\ -30 \\end{bmatrix}$$

The Euclidean distance is:
$$d_E(\\mathbf{p}_1, \\mathbf{p}_2) = \\sqrt{(-20)^2 + (-30)^2} = \\sqrt{400 + 900} = \\sqrt{1300} \\approx 36.056$$

---

#### Part b: Manhattan Distance
The Manhattan distance is the sum of absolute coordinate differences:
$$d_M(\\mathbf{p}_1, \\mathbf{p}_2) = |-20| + |-30| = 20 + 30 = 50.0$$

---

#### Part c: Pearson Correlation $r_{12}$
$$r_{12} = \\frac{\\text{Cov}(X_1, X_2)}{s_1 s_2} = \\frac{240}{\\sqrt{400} \\cdot \\sqrt{900}} = \\frac{240}{20 \\times 30} = \\frac{240}{600} = 0.40$$

---

#### Part d: Determinant & Inverse Matrix $\\mathbf{S}^{-1}$
For a $2 \\times 2$ matrix $\\mathbf{S} = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$:
$$\\det(\\mathbf{S}) = ad - bc = (400)(900) - (240)^2 = 360,000 - 57,600 = 302,400$$

The inverse matrix is given by:
$$\\mathbf{S}^{-1} = \\frac{1}{\\det(\\mathbf{S})} \\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix} = \\frac{1}{302,400} \\begin{bmatrix} 900 & -240 \\\\ -240 & 400 \\end{bmatrix}$$

Dividing each element by 100 simplifies the fraction:
$$\\mathbf{S}^{-1} = \\frac{1}{3,024} \\begin{bmatrix} 9 & -2.4 \\\\ -2.4 & 4 \\end{bmatrix} = \\begin{bmatrix} 0.002976 & -0.0007937 \\\\ -0.0007937 & 0.0013228 \\end{bmatrix}$$

---

#### Part e: Squared Mahalanobis Distance $D^2$
$$D^2 = \\mathbf{d}^T \\mathbf{S}^{-1} \\mathbf{d} = \\begin{bmatrix} -20 & -30 \\end{bmatrix} \\left( \\frac{1}{302,400} \\begin{bmatrix} 900 & -240 \\\\ -240 & 400 \\end{bmatrix} \\right) \\begin{bmatrix} -20 \\\\ -30 \\end{bmatrix}$$

First compute $\\mathbf{S}^{-1} \\mathbf{d}$:
$$\\begin{bmatrix} 900 & -240 \\\\ -240 & 400 \\end{bmatrix} \\begin{bmatrix} -20 \\\\ -30 \\end{bmatrix} = \\begin{bmatrix} 900(-20) - 240(-30) \\\\ -240(-20) + 400(-30) \\end{bmatrix} = \\begin{bmatrix} -18,000 + 7,200 \\\\ 4,800 - 12,000 \\end{bmatrix} = \\begin{bmatrix} -10,800 \\\\ -7,200 \\end{bmatrix}$$

Now multiply by $\\mathbf{d}^T = \\begin{bmatrix} -20 & -30 \\end{bmatrix}$:
$$\\mathbf{d}^T \\begin{bmatrix} -10,800 \\\\ -7,200 \\end{bmatrix} = (-20)(-10,800) + (-30)(-7,200) = 216,000 + 216,000 = 432,000$$

Divide by $\\det(\\mathbf{S}) = 302,400$:
$$D^2 = \\frac{432,000}{302,400} = \\frac{4,320}{3,024} = \\frac{10}{7} \\approx 1.4286$$
$$D = \\sqrt{1.4286} \\approx 1.195$$

---

#### Part f: Methodological Comparison
1. **Scale Dependency**: Euclidean distance operates on raw units. Here, Cholesterol changes by 30 units while BP changes by 20 units; if Cholesterol were measured in grams/L rather than mg/dL, Euclidean distance would change dramatically.
2. **Correlation Redundancy**: Because BP and Cholesterol correlate positively ($r = 0.40$), part of the difference in Cholesterol is predictable from BP. Euclidean distance double-counts this shared variance.
3. **Mahalanobis Advantage**: $\\mathbf{S}^{-1}$ simultaneously **standardizes the variances** (scaling by $\\frac{1}{s_j}$) and **decorrelates the coordinate system** (accounting for $\\text{Cov}(X_1, X_2)$), measuring statistical distance in units of standardized dispersion.`
  },
  {
    id: 'wb-l3-ex1',
    segment_id: 'ch2-pca-geometry',
    order_index: 1,
    title: 'Workbook Exercise: 2D Coordinate Rotation & Maximum Variance Projection',
    difficulty: 'hard',
    section_reference: 'Section 1: Geometric View of PCA',
    section_anchor: 'geometric-view-of-pca',
    prompt_markdown: `*(Directly from NOVA IMS Chapter 2 Lecture Slides 5–19 & Appendix 63–69)*

Consider $n = 12$ customers measured on two centered variables: $X_1$ (Centered Income) and $X_2$ (Centered Customer Lifetime Value).
The sample covariance matrix of the centered data is:
$$\\mathbf{S} = \\begin{bmatrix} 23.091 & 16.455 \\\\ 16.455 & 21.091 \\end{bmatrix}$$
The total variance of the data cloud is $\\text{tr}(\\mathbf{S}) = 23.091 + 21.091 = 44.182$.

We choose a candidate principal axis $X_1^*$ through the origin at angle $\\theta$ relative to the horizontal $X_1$ axis.
The projection of any centered point $(x_1, x_2)$ onto this axis is:
$$x_1^* = \\cos(\\theta) x_1 + \\sin(\\theta) x_2$$

**Tasks to Solve:**
a. Write the theoretical formula for the variance of the projected variable $\\text{Var}(x_1^*)$ as a function of sample variances $s_1^2, s_2^2$, covariance $s_{12}$, and angle $\\theta$.
b. Compute the variance retained along the candidate axis at $\\theta = 10^\\circ$ and at $\\theta = 35^\\circ$. What percentage of total variance is retained at each angle?
c. Derive the first-order condition $\\frac{d}{d\\theta} \\text{Var}(x_1^*) = 0$ to find the angle $\\theta^*$ that maximizes retained variance. Show that:
$$\\tan(2\\theta^*) = \\frac{2 s_{12}}{s_1^2 - s_2^2}$$
d. Compute the optimal angle $\\theta^*$ for this dataset. Show that $\\theta^* \\approx 43.26^\\circ$.
e. Compute the maximum variance retained at $\\theta^* = 43.26^\\circ$ and the variance along the perpendicular second axis $\\text{PC}_2$ (at $\\theta^* + 90^\\circ$). Verify that the sum of variances equals the original total variance ($44.182$).`,
    solution_markdown: `### Authoritative Step-by-Step Solution

#### Part a: Projected Variance Formula
Let $x_1^* = \\cos\\theta \\, x_1 + \\sin\\theta \\, x_2$. Since $E[x_1] = E[x_2] = 0$, $E[x_1^*] = 0$.
$$\\text{Var}(x_1^*) = E[(x_1^*)^2] = E[(\\cos\\theta \\, x_1 + \\sin\\theta \\, x_2)^2]$$
Expanding:
$$\\text{Var}(x_1^*) = \\cos^2\\theta \\, E[x_1^2] + \\sin^2\\theta \\, E[x_2^2] + 2\\cos\\theta\\sin\\theta \\, E[x_1 x_2]$$
$$\\text{Var}(x_1^*) = s_1^2 \\cos^2\\theta + s_2^2 \\sin^2\\theta + 2 s_{12} \\cos\\theta\\sin\\theta$$
Using double-angle trigonometric identities:
$$\\text{Var}(x_1^*) = \\frac{s_1^2 + s_2^2}{2} + \\left(\\frac{s_1^2 - s_2^2}{2}\\right)\\cos(2\\theta) + s_{12}\\sin(2\\theta)$$

---

#### Part b: Variance at $\\theta = 10^\\circ$ and $\\theta = 35^\\circ$
Given $s_1^2 = 23.091, s_2^2 = 21.091, s_{12} = 16.455$, and total variance $= 44.182$:
- **At $\\theta = 10^\\circ$**:
  - $\\cos(10^\\circ) = 0.98481$, $\\sin(10^\\circ) = 0.17365$
  - $\\cos^2(10^\\circ) = 0.96985$, $\\sin^2(10^\\circ) = 0.03015$, $2\\cos\\sin = \\sin(20^\\circ) = 0.34202$
  - $\\text{Var}(x_1^*) = 23.091(0.96985) + 21.091(0.03015) + 16.455(0.34202) = 22.395 + 0.636 + 5.628 = 28.658$
  - Percentage retained: $\\frac{28.658}{44.182} \\times 100\\% = 64.86\\%$.
- **At $\\theta = 35^\\circ$**:
  - $\\cos(35^\\circ) = 0.81915$, $\\sin(35^\\circ) = 0.57358$
  - $\\text{Var}(x_1^*) = 23.091(0.81915)^2 + 21.091(0.57358)^2 + 2(16.455)(0.81915)(0.57358) = 15.495 + 6.939 + 15.461 = 37.895$
  - Percentage retained: $\\frac{37.895}{44.182} \\times 100\\% = 85.77\\%$.

---

#### Part c: Optimization Derivation
Take the derivative with respect to $\\theta$ and set to 0:
$$\\frac{d}{d\\theta} \\text{Var}(x_1^*) = -2(s_1^2 - s_2^2)\\cos\\theta\\sin\\theta + 2 s_{12}(\\cos^2\\theta - \\sin^2\\theta) = 0$$
Using identities $\\sin(2\\theta) = 2\\sin\\theta\\cos\\theta$ and $\\cos(2\\theta) = \\cos^2\\theta - \\sin^2\\theta$:
$$-(s_1^2 - s_2^2)\\sin(2\\theta) + 2 s_{12}\\cos(2\\theta) = 0$$
$$(s_1^2 - s_2^2)\\sin(2\\theta) = 2 s_{12}\\cos(2\\theta)$$
Dividing by $\\cos(2\\theta)(s_1^2 - s_2^2)$:
$$\\tan(2\\theta^*) = \\frac{2 s_{12}}{s_1^2 - s_2^2}$$

---

#### Part d: Optimal Angle $\\theta^*$
$$s_1^2 - s_2^2 = 23.090909 - 21.090909 = 2.000000$$
$$2 s_{12} = 2(16.454545) = 32.909090$$
$$\\tan(2\\theta^*) = \\frac{32.909090}{2.000000} = 16.454545$$
$$2\\theta^* = \\arctan(16.454545) \\approx 86.5238^\\circ \\implies \\theta^* \\approx 43.2619^\\circ \\approx 43.26^\\circ$$

---

#### Part e: Maximum Retained Variance & Preservation
- Direction vector for $\\text{PC}_1$: $\\mathbf{w}_1 = (\\cos(43.2619^\\circ), \\sin(43.2619^\\circ))^T = (0.728238, 0.685324)^T$.
- Maximum variance along $\\text{PC}_1$:
  $$\\lambda_1 = \\text{Var}(\\text{PC}_1) = 38.575813$$
  Proportion retained: $\\frac{38.575813}{44.181818} = 87.31\\%$.
- Orthogonal direction for $\\text{PC}_2$: $\\mathbf{w}_2 = (-\\sin(43.2619^\\circ), \\cos(43.2619^\\circ))^T = (-0.685324, 0.728238)^T$.
- Variance along $\\text{PC}_2$:
  $$\\lambda_2 = \\text{Var}(\\text{PC}_2) = 5.606005$$
  Proportion retained: $\\frac{5.606005}{44.181818} = 12.69\\%$.
- **Total Variance Check**:
  $$\\lambda_1 + \\lambda_2 = 38.575813 + 5.606005 = 44.181818 = s_1^2 + s_2^2$$
  Total variance is 100% preserved under the rigid rotation.`
  },
  {
    id: 'wb-l4-ex1',
    segment_id: 'ch2-pca-analytical',
    order_index: 1,
    title: 'Workbook Exercise: Food Prices PCA & Scale Sensitivity in 25 US Cities',
    difficulty: 'hard',
    section_reference: 'Section 2: Covariance vs Correlation PCA',
    section_anchor: 'covariance-vs-correlation-pca',
    prompt_markdown: `*(Directly from NOVA IMS Exercises Workbook Chapter 2, Exercise 1)*

An analyst is commissioned to study the food price dataset containing the average price per kg for five items in 25 US cities:
1. Bread ($X_1$)
2. Hamburger ($X_2$)
3. Milk ($X_3$)
4. Oranges ($X_4$)
5. Potatoes ($X_5$)

Prices are initially recorded in Euro cents per kg (e.g. Bread = 26.5 c/kg, Hamburger = 94.5 c/kg).
The sample correlation matrix $\\mathbf{R}$ produces the following ordered eigenvalues:
$$\\lambda_1 = 2.854, \\quad \\lambda_2 = 1.126, \\quad \\lambda_3 = 0.542, \\quad \\lambda_4 = 0.318, \\quad \\lambda_5 = 0.160$$

The normalized leading eigenvector corresponding to $\\lambda_1$ is:
$$\\mathbf{w}_1 = \\begin{bmatrix} 0.452 \\\\ 0.486 \\\\ 0.384 \\\\ 0.461 \\\\ 0.442 \\end{bmatrix}$$

**Tasks to Solve:**
a. Which type of data matrix must be decomposed: mean-corrected covariance matrix $\\mathbf{S}$ or standardized correlation matrix $\\mathbf{R}$? Provide a rigorous mathematical justification based on measurement units.
b. Compute the total variance of the system under correlation PCA.
c. Calculate the proportion of variance explained by $\\text{PC}_1$, and the cumulative variance explained by the first two principal components (the 2PC solution).
d. Apply the **Kaiser criterion** and the **cumulative variance benchmark** (target $\\ge 70\\%$) to determine how many components should be retained.
e. Write out the full algebraic equation for the first principal component $\\text{PC}_1$ as a function of the standardized variables $Z_1, Z_2, Z_3, Z_4, Z_5$. What economic interpretation can be assigned to $\\text{PC}_1$?`,
    solution_markdown: `### Authoritative Step-by-Step Solution

#### Part a: Covariance vs. Correlation PCA Justification
- **Verdict**: **Standardized correlation PCA (matrix $\\mathbf{R}$)** must be used.
- **Mathematical Justification**: In covariance PCA (matrix $\\mathbf{S}$), the total variance is $\\sum s_j^2$. If prices of meat/hamburger (around 95 cents/kg) have a sample standard deviation of $s_2 = 15$, its variance is $s_2^2 = 225$. In contrast, bread (around 25 cents/kg) might have $s_1 = 3$, giving $s_1^2 = 9$.
- If we change the unit of Hamburger from cents to Euros, its variance drops by a factor of $100^2 = 10,000$ (from $225$ to $0.0225$), completely reshaping all eigenvectors and eigenvalues!
- Standardizing variables to $Z_j = \\frac{X_j - \\bar{X}_j}{s_j}$ gives every food item equal unit variance ($s_{Z_j}^2 = 1$). This ensures that high-priced items (meat) do not mechanically dominate the principal components purely due to scale magnitude.

---

#### Part b: Total Variance
In correlation PCA, every input variable has unit variance $s_{z_j}^2 = 1$.
$$\\text{Total Variance} = \\text{tr}(\\mathbf{R}) = p = 5$$
We can also verify by summing the eigenvalues:
$$\\sum_{j=1}^5 \\lambda_j = 2.854 + 1.126 + 0.542 + 0.318 + 0.160 = 5.000$$

---

#### Part c: Variance Explained
1. **Proportion for $\\text{PC}_1$**:
   $$\\frac{\\lambda_1}{p} = \\frac{2.854}{5.000} = 0.5708 \\implies 57.08\\%$$
2. **Proportion for $\\text{PC}_2$**:
   $$\\frac{\\lambda_2}{p} = \\frac{1.126}{5.000} = 0.2252 \\implies 22.52\\%$$
3. **Cumulative Variance (2PC Solution)**:
   $$\\text{Cumulative } \\% = 57.08\\% + 22.52\\% = 79.60\\%$$
   The two-component solution preserves nearly $80\\%$ of the total information across the 25 cities while reducing dimensions from 5 to 2.

---

#### Part d: Retention Criteria
1. **Kaiser Criterion**: Retain all components with $\\lambda_i > 1.0$:
   - $\\lambda_1 = 2.854 > 1.0$ (Retain)
   - $\\lambda_2 = 1.126 > 1.0$ (Retain)
   - $\\lambda_3 = 0.542 < 1.0$ (Discard)
   The Kaiser rule unambiguously recommends a **2-component solution**.
2. **Cumulative Variance Benchmark**: Retaining 2 components yields $79.60\\%$, which comfortably exceeds the standard $70\\%$ exploratory threshold.

---

#### Part e: Algebraic Equation & Economic Interpretation
The first principal component is:
$$\\text{PC}_1 = 0.452 Z_{\\text{Bread}} + 0.486 Z_{\\text{Hamburger}} + 0.384 Z_{\\text{Milk}} + 0.461 Z_{\\text{Oranges}} + 0.442 Z_{\\text{Potatoes}}$$

- **Economic Interpretation**:
  Notice that all five weights $w_{1j}$ are **positive and of comparable magnitude** ($0.38$ to $0.49$).
  Therefore, $\\text{PC}_1$ acts as an overall **General Food Cost Index (Price Level)** for each city. Cities with high positive $\\text{PC}_1$ scores (e.g. Honolulu, Anchorage) suffer from generally expensive groceries across all categories, whereas cities with negative $\\text{PC}_1$ scores enjoy low overall grocery costs.`
  },
  {
    id: 'wb-l5-ex1',
    segment_id: 'ch2-pca-interpretation',
    order_index: 1,
    title: 'Workbook Exercise: Factor Loadings, Component Scores & Regional Profiling',
    difficulty: 'hard',
    section_reference: 'Section 1: Factor Loadings Definition',
    section_anchor: 'factor-loadings-definition',
    prompt_markdown: `*(Directly from NOVA IMS Chapter 2 Lecture Slides 48–51)*

A regional development commission analyzes $n = 7$ Portuguese administrative regions using five standardized socioeconomic indicators:
1. $\\text{DEN}$: Population Density
2. $\\text{GDP}$: Gross Domestic Product per capita
3. $\\text{MED}$: Practicing Doctors per 1,000 residents
4. $\\text{HOS}$: Hospital Beds per 1,000 residents
5. $\\text{BIB}$: Public Libraries per 100,000 residents

A correlation PCA is performed. The eigenvalues for the first two components are:
$$\\lambda_1 = 3.652, \\quad \\lambda_2 = 0.884$$
The leading eigenvector weights are:
$$\\mathbf{w}_1 = \\begin{bmatrix} 0.356 \\\\ 0.313 \\\\ 0.501 \\\\ 0.488 \\\\ 0.493 \\end{bmatrix}, \\quad \\mathbf{w}_2 = \\begin{bmatrix} 0.712 \\\\ 0.798 \\\\ -0.301 \\\\ -0.376 \\\\ -0.343 \\end{bmatrix}$$

**Tasks to Solve:**
a. State the mathematical relationship between an eigenvector weight $w_{ji}$ and the correlation factor loading $l_{ji} = \\text{Corr}(X_j, \\text{PC}_i)$ in correlation PCA.
b. Compute the factor loadings for all 5 variables on $\\text{PC}_1$ and on $\\text{PC}_2$. Construct the loading matrix table.
c. Interpret the substantive meaning of $\\text{PC}_1$ and $\\text{PC}_2$ based on their loading patterns.
d. Region A (Lisbon / LVT) has standardized scores of $\\text{PC}_1 = +4.12$ and $\\text{PC}_2 = +0.65$. Region B (Alentejo) has $\\text{PC}_1 = -1.95$ and $\\text{PC}_2 = -1.25$. Provide a practical comparative diagnosis of these two regions.`,
    solution_markdown: `### Authoritative Step-by-Step Solution

#### Part a: Relationship between Weights and Loadings
In correlation PCA (where input variables $Z_j$ have unit variance $s_j = 1$), the factor loading $l_{ji}$ is the Pearson correlation between variable $Z_j$ and the $i$-th principal component $\\text{PC}_i$:
$$l_{ji} = \\text{Corr}(Z_j, \\text{PC}_i) = w_{ji} \\sqrt{\\lambda_i}$$
*(Where $w_{ji}$ is the normalized eigenvector coefficient and $\\lambda_i$ is the eigenvalue).*

---

#### Part b: Loading Calculations
Given $\\sqrt{\\lambda_1} = \\sqrt{3.652} \\approx 1.91102$ and $\\sqrt{\\lambda_2} = \\sqrt{0.884} \\approx 0.94021$:

1. **Loadings on $\\text{PC}_1$ ($l_{j1} = w_{j1} \\times 1.91102$)**:
   - $\\text{DEN}$: $0.356 \\times 1.91102 = 0.6803$
   - $\\text{GDP}$: $0.313 \\times 1.91102 = 0.5981$
   - $\\text{MED}$: $0.501 \\times 1.91102 = 0.9574$
   - $\\text{HOS}$: $0.488 \\times 1.91102 = 0.9326$
   - $\\text{BIB}$: $0.493 \\times 1.91102 = 0.9421$
2. **Loadings on $\\text{PC}_2$ ($l_{j2} = w_{j2} \\times 0.94021$)**:
   - $\\text{DEN}$: $0.712 \\times 0.94021 = 0.6694$
   - $\\text{GDP}$: $0.798 \\times 0.94021 = 0.7503$
   - $\\text{MED}$: $-0.301 \\times 0.94021 = -0.2830$
   - $\\text{HOS}$: $-0.376 \\times 0.94021 = -0.3535$
   - $\\text{BIB}$: $-0.343 \\times 0.94021 = -0.3225$

**Summary Factor Loading Table**:
| Variable | Loading on $\\text{PC}_1$ | Loading on $\\text{PC}_2$ |
| :--- | :---: | :---: |
| $\\text{DEN}$ (Density) | $0.680$ | $0.669$ |
| $\\text{GDP}$ (Wealth) | $0.598$ | $0.750$ |
| $\\text{MED}$ (Doctors) | **$0.957$** | $-0.283$ |
| $\\text{HOS}$ (Hospitals) | **$0.933$** | $-0.354$ |
| $\\text{BIB}$ (Libraries) | **$0.942$** | $-0.323$ |

---

#### Part c: Component Interpretation
- **$\\text{PC}_1$ (Health & Cultural Infrastructure)**: Dominated by massive positive correlations with Doctors ($0.96$), Hospital Beds ($0.93$), and Libraries ($0.94$). Represents the social, medical, and educational service endowment of a region.
- **$\\text{PC}_2$ (Economic Density / Urban Wealth)**: Dominated by high positive loadings on $\\text{GDP}$ ($0.75$) and Population Density ($0.67$), with slight negative loadings on public beds. It contrasts concentrated commercial wealth against rural landscapes.

---

#### Part d: Comparative Regional Diagnosis
- **Lisbon (LVT)** has a very high positive score on $\\text{PC}_1$ ($+4.12$) and positive score on $\\text{PC}_2$ ($+0.65$). This indicates superior public infrastructure (highest concentration of specialized hospitals, doctors, and cultural facilities) combined with high urban density and strong GDP.
- **Alentejo** has negative scores on both axes ($\\text{PC}_1 = -1.95, \\text{PC}_2 = -1.25$). This indicates a rural, low-density region with below-average per capita healthcare infrastructure and lower economic output per square kilometer.`
  },
  {
    id: 'wb-l6-ex1',
    segment_id: 'ch3-fa-theory',
    order_index: 1,
    title: 'Workbook Exercise: Five-Indicator Single-Factor Model Analysis',
    difficulty: 'hard',
    section_reference: 'Section 1: The Orthogonal Factor Model',
    section_anchor: 'the-orthogonal-factor-model',
    prompt_markdown: `*(Directly from NOVA IMS Exercises Workbook Chapter 3, Exercise 1)*

Consider the five-indicator single-factor model represented by the following system of linear equations:
$$V = 0.65 F_1 + U_V$$
$$W = 0.84 F_1 + U_W$$
$$X = 0.70 F_1 + U_X$$
$$Y = 0.32 F_1 + U_Y$$
$$Z = 0.28 F_1 + U_Z$$

Assume the standard factor analysis assumptions hold:
1. $E[F_1] = 0, \\quad \\text{Var}(F_1) = 1$.
2. All indicator variables are standardized ($E[V] = \\dots = 0$ and $\\text{Var}(V) = \\dots = 1$).
3. The unique error factors $U_i$ have zero means, are uncorrelated with the common factor ($E[F_1 U_i] = 0$), and are uncorrelated with each other ($E[U_i U_j] = 0$ for $i \\neq j$).

**Tasks to Solve:**
a. What are the pattern loadings for indicators $V, X,$ and $Z$?
b. Compute the communalities ($h_i^2$) between each of the five indicators and the common factor $F_1$.
c. What are the unique variances ($u_i^2$) associated with each indicator?
d. Compute the model-implied correlations between the following pairs of indicators:
   - $(V, W)$
   - $(W, X)$
   - $(W, Z)$
   - $(Y, Z)$
e. What is the shared variance between each indicator and the common factor?
f. What percentage of the total shared variance is accounted for by indicators $V, W,$ and $X$?`,
    solution_markdown: `### Authoritative Step-by-Step Solution

#### Part a: Pattern Loadings
In a single-factor model, the coefficients in front of $F_1$ are the **pattern loadings** (which equal the structure loadings under orthogonal assumptions):
- Loading for $V$: $\\lambda_V = 0.65$
- Loading for $X$: $\\lambda_X = 0.70$
- Loading for $Z$: $\\lambda_Z = 0.28$
*(For completeness: $\\lambda_W = 0.84, \\lambda_Y = 0.32$)*.

---

#### Part b: Communalities ($h_i^2$)
For a standardized single-factor model, the communality of variable $i$ is the square of its loading ($h_i^2 = \\lambda_i^2$):
- $h_V^2 = (0.65)^2 = 0.4225$
- $h_W^2 = (0.84)^2 = 0.7056$
- $h_X^2 = (0.70)^2 = 0.4900$
- $h_Y^2 = (0.32)^2 = 0.1024$
- $h_Z^2 = (0.28)^2 = 0.0784$

---

#### Part c: Unique Variances ($u_i^2 = \\text{Var}(U_i)$)
Since the total variance of each standardized variable is 1, the unique variance is $u_i^2 = 1 - h_i^2$:
- $u_V^2 = 1 - 0.4225 = 0.5775$
- $u_W^2 = 1 - 0.7056 = 0.2944$
- $u_X^2 = 1 - 0.4900 = 0.5100$
- $u_Y^2 = 1 - 0.1024 = 0.8976$
- $u_Z^2 = 1 - 0.0784 = 0.9216$

---

#### Part d: Pairwise Correlations
In an orthogonal single-factor model, the correlation between any two indicators $j$ and $k$ is the product of their pattern loadings: $r_{jk} = \\lambda_j \\lambda_k$:
1. $r(V, W) = \\lambda_V \\times \\lambda_W = (0.65)(0.84) = 0.5460$
2. $r(W, X) = \\lambda_W \\times \\lambda_X = (0.84)(0.70) = 0.5880$
3. $r(W, Z) = \\lambda_W \\times \\lambda_Z = (0.84)(0.28) = 0.2352$
4. $r(Y, Z) = \\lambda_Y \\times \\lambda_Z = (0.32)(0.28) = 0.0896$

---

#### Part e: Shared Variance
The shared variance between each indicator and the common factor is equal to its communality ($h_i^2$):
- Shared variance for $V = 0.4225$ ($42.25\\%$)
- Shared variance for $W = 0.7056$ ($70.56\\%$)
- Shared variance for $X = 0.4900$ ($49.00\\%$)
- Shared variance for $Y = 0.1024$ ($10.24\\%$)
- Shared variance for $Z = 0.0784$ ($7.84\\%$)

---

#### Part f: Percentage of Total Shared Variance Due to $V, W, X$
1. **Total Shared Variance (Sum of Communalities)**:
   $$\\sum_{i=1}^5 h_i^2 = 0.4225 + 0.7056 + 0.4900 + 0.1024 + 0.0784 = 1.7989$$
2. **Shared Variance from $V, W, X$**:
   $$h_V^2 + h_W^2 + h_X^2 = 0.4225 + 0.7056 + 0.4900 = 1.6181$$
3. **Percentage Proportion**:
   $$\\text{Percentage} = \\frac{1.6181}{1.7989} \\times 100\\% \\approx 89.95\\% \\approx 90.0\\%$$
   Indicators $V, W,$ and $X$ account for **$90\\%$** of all common variance in the model, making $Y$ and $Z$ peripheral indicators with high unique error.`
  },
  {
    id: 'wb-l7-ex1',
    segment_id: 'ch3-fa-extraction',
    order_index: 1,
    title: 'Workbook Exercise: Six-Indicator Two-Factor Orthogonal vs Oblique Models',
    difficulty: 'hard',
    section_reference: 'Section 2: The Two-Factor Model',
    section_anchor: 'the-two-factor-model',
    prompt_markdown: `*(Directly from NOVA IMS Exercises Workbook Chapter 3, Exercises 2 & 3)*

Consider the six-indicator two-factor model:
$$A = 0.85 F_1 + 0.12 F_2 + U_A$$
$$B = 0.74 F_1 + 0.07 F_2 + U_B$$
$$C = 0.67 F_1 + 0.12 F_2 + U_C$$
$$D = 0.21 F_1 + 0.93 F_2 + U_D$$
$$E = 0.05 F_1 + 0.77 F_2 + U_E$$
$$F = 0.08 F_1 + 0.62 F_2 + U_F$$

Assume zero means, standardized indicators and factors, and mutually uncorrelated unique errors.

**Tasks to Solve:**
### Scenario 1: Orthogonal Factors ($\\text{Corr}(F_1, F_2) = \\Phi_{12} = 0$)
a. State the pattern loadings and structure loadings of indicators $A, C,$ and $E$ on factors $F_1$ and $F_2$.
b. Compute the model-implied correlations between indicators $(A, B)$ and between indicators $(E, F)$.
c. What percentage of the variance of indicators $A$ and $F$ is **not explained** by the common factors $F_1$ and $F_2$ (unique variances)?
d. Identify which set of indicators share $>90\\%$ of total shared variance with each factor, and explain which indicators should be used to interpret each factor.

### Scenario 2: Oblique Factors ($\\text{Corr}(F_1, F_2) = \\Phi_{12} = 0.20$)
e. In an oblique factor model, structure loadings differ from pattern loadings via the formula:
$$s_{ji} = \\lambda_{j1}\\Phi_{1i} + \\lambda_{j2}\\Phi_{2i}$$
Calculate the structure loadings of indicator $A$ on $F_1$ and $F_2$.
f. Recompute the correlation $r(A, B)$ under the oblique factor model using the formula:
$$r(A, B) = \\lambda_{A1}\\lambda_{B1} + \\lambda_{A2}\\lambda_{B2} + (\\lambda_{A1}\\lambda_{B2} + \\lambda_{A2}\\lambda_{B1})\\Phi_{12}$$`,
    solution_markdown: `### Authoritative Step-by-Step Solution

#### Part a: Pattern vs Structure Loadings (Orthogonal Case)
When factors are orthogonal ($\\Phi_{12} = 0$), the **structure loadings equal the pattern loadings**:
- **Indicator $A$**: Pattern = Structure = $[\\lambda_{A1} = 0.85, \\lambda_{A2} = 0.12]$
- **Indicator $C$**: Pattern = Structure = $[\\lambda_{C1} = 0.67, \\lambda_{C2} = 0.12]$
- **Indicator $E$**: Pattern = Structure = $[\\lambda_{E1} = 0.05, \\lambda_{E2} = 0.77]$

---

#### Part b: Correlations (Orthogonal Case)
Under orthogonality: $r(j, k) = \\lambda_{j1}\\lambda_{k1} + \\lambda_{j2}\\lambda_{k2}$.
1. **Correlation $r(A, B)$**:
   $$r(A, B) = (0.85)(0.74) + (0.12)(0.07) = 0.6290 + 0.0084 = 0.6374$$
2. **Correlation $r(E, F)$**:
   $$r(E, F) = (0.05)(0.08) + (0.77)(0.62) = 0.0040 + 0.4774 = 0.4814$$

---

#### Part c: Unexplained Variance (Unique Variance $u_i^2$)
- **For Indicator $A$**:
  - Communality: $h_A^2 = (0.85)^2 + (0.12)^2 = 0.7225 + 0.0144 = 0.7369$ ($73.69\\%$ explained)
  - Unexplained variance: $u_A^2 = 1 - 0.7369 = 0.2631 \\implies 26.31\\%$.
- **For Indicator $F$**:
  - Communality: $h_F^2 = (0.08)^2 + (0.62)^2 = 0.0064 + 0.3844 = 0.3908$ ($39.08\\%$ explained)
  - Unexplained variance: $u_F^2 = 1 - 0.3908 = 0.6092 \\implies 60.92\\%$.

---

#### Part d: Factor Interpretation & Dominance Sets
- **Factor $F_1$ Shared Variances**:
  - $\\lambda_{A1}^2 = 0.7225$
  - $\\lambda_{B1}^2 = 0.5476$
  - $\\lambda_{C1}^2 = 0.4489$
  - $\\lambda_{D1}^2 = 0.0441, \\lambda_{E1}^2 = 0.0025, \\lambda_{F1}^2 = 0.0064$
  - Total variance of $F_1 = 0.7225 + 0.5476 + 0.4489 + 0.0441 + 0.0025 + 0.0064 = 1.772$
  - Proportion from $\{A, B, C\} = \\frac{0.7225 + 0.5476 + 0.4489}{1.772} = \\frac{1.719}{1.772} = 97.0\\% > 90\\%$.
  - $\\implies$ Indicators **$A, B,$ and $C$** should be used to interpret $F_1$.
- **Factor $F_2$ Shared Variances**:
  - $\\lambda_{D2}^2 = 0.8649$
  - $\\lambda_{E2}^2 = 0.5929$
  - $\\lambda_{F2}^2 = 0.3844$
  - Total variance of $F_2 = 0.0144 + 0.0049 + 0.0144 + 0.8649 + 0.5929 + 0.3844 = 1.8759$
  - Proportion from $\{D, E, F\} = \\frac{0.8649 + 0.5929 + 0.3844}{1.8759} = \\frac{1.8422}{1.8759} = 98.2\\% > 90\\%$.
  - $\\implies$ Indicators **$D, E,$ and $F$** should be used to interpret $F_2$.

---

#### Part e: Oblique Structure Loadings ($\\Phi_{12} = 0.20$)
For indicator $A$ ($\\lambda_{A1} = 0.85, \\lambda_{A2} = 0.12$):
- Structure loading on $F_1$:
  $$s_{A1} = \\lambda_{A1} + \\lambda_{A2}\\Phi_{12} = 0.85 + (0.12)(0.20) = 0.85 + 0.024 = 0.874$$
- Structure loading on $F_2$:
  $$s_{A2} = \\lambda_{A2} + \\lambda_{A1}\\Phi_{12} = 0.12 + (0.85)(0.20) = 0.12 + 0.170 = 0.290$$
*(Notice that because $F_1$ and $F_2$ are positively correlated, the simple correlation between indicator $A$ and factor $F_2$ jumps from $0.12$ to $0.29$).*

---

#### Part f: Correlation $r(A, B)$ under Oblique Factors
$$r(A, B) = \\lambda_{A1}\\lambda_{B1} + \\lambda_{A2}\\lambda_{B2} + (\\lambda_{A1}\\lambda_{B2} + \\lambda_{A2}\\lambda_{B1})\\Phi_{12}$$
Using the orthogonal part from before ($0.6374$):
$$\\lambda_{A1}\\lambda_{B2} + \\lambda_{A2}\\lambda_{B1} = (0.85)(0.07) + (0.12)(0.74) = 0.0595 + 0.0888 = 0.1483$$
$$r(A, B) = 0.6374 + (0.1483)(0.20) = 0.6374 + 0.02966 = 0.66706 \\approx 0.667$$`
  },
  {
    id: 'wb-l8-ex1',
    segment_id: 'ch3-fa-rotation-evaluation',
    order_index: 1,
    title: 'Workbook Exercise: PAF Output Evaluation, Residual Matrix & Conceptual PCA vs FA',
    difficulty: 'hard',
    section_reference: 'Section 4: Evaluation of Factor Solutions',
    section_anchor: 'evaluation-of-factor-solutions',
    prompt_markdown: `*(Directly from NOVA IMS Exercises Workbook Chapter 3, Exercises 4 & 5)*

The correlation matrix for $p = 4$ variables ($X_1, X_2, X_3, X_4$) is given below:
$$\\mathbf{R} = \\begin{bmatrix}
1.000 & 0.690 & 0.280 & 0.350 \\\\
0.690 & 1.000 & 0.255 & 0.195 \\\\
0.280 & 0.255 & 1.000 & 0.610 \\\\
0.350 & 0.195 & 0.610 & 1.000
\\end{bmatrix}$$

A 2-factor solution is extracted using the Principal Axis Factoring (PAF) procedure. The estimated factor loadings matrix $\\mathbf{\\Lambda}$ is:
$$\\mathbf{\\Lambda} = \\begin{bmatrix}
0.80 & 0.20 \\\\
0.70 & 0.15 \\\\
0.10 & 0.90 \\\\
0.20 & 0.70
\\end{bmatrix}$$
*(Where row 1 corresponds to $X_1$, row 2 to $X_2$, row 3 to $X_3$, and row 4 to $X_4$)*.

**Tasks to Solve:**
a. Compute the communality ($h_i^2$) and the unique variance ($u_i^2$) for each of the four variables.
b. Compute the proportion of total variance explained by Factor 1 and by Factor 2.
c. Compute the **reproduced (estimated) correlation matrix** $\\hat{\\mathbf{R}} = \\mathbf{\\Lambda} \\mathbf{\\Lambda}^T$.
d. Compute the **residual correlation matrix** $\\mathbf{E} = \\mathbf{R} - \\hat{\\mathbf{R}}$.
e. Calculate the Root Mean Square Residual (RMSR) for the off-diagonal elements:
$$\\text{RMSR} = \\sqrt{\\frac{\\sum_{i < j} (r_{ij} - \\hat{r}_{ij})^2}{p(p - 1)/2}}$$
Evaluate whether this 2-factor solution provides a good fit to the data.
f. Formulate the two fundamental conceptual differences between Factor Analysis (FA) and Principal Components Analysis (PCA).`,
    solution_markdown: `### Authoritative Step-by-Step Solution

#### Part a: Communalities & Unique Variances
For orthogonal factors: $h_i^2 = l_{i1}^2 + l_{i2}^2$ and $u_i^2 = 1 - h_i^2$:
- **For $X_1$**:
  - $h_1^2 = (0.80)^2 + (0.20)^2 = 0.64 + 0.04 = 0.68$
  - $u_1^2 = 1 - 0.68 = 0.32$
- **For $X_2$**:
  - $h_2^2 = (0.70)^2 + (0.15)^2 = 0.49 + 0.0225 = 0.5125$
  - $u_2^2 = 1 - 0.5125 = 0.4875$
- **For $X_3$**:
  - $h_3^2 = (0.10)^2 + (0.90)^2 = 0.01 + 0.81 = 0.82$
  - $u_3^2 = 1 - 0.82 = 0.18$
- **For $X_4$**:
  - $h_4^2 = (0.20)^2 + (0.70)^2 = 0.04 + 0.49 = 0.53$
  - $u_4^2 = 1 - 0.53 = 0.47$

---

#### Part b: Proportion of Total Variance Explained
In a correlation matrix, total variance is $p = 4$.
- **Eigenvalue of Factor 1**:
  $$\\lambda_1 = (0.80)^2 + (0.70)^2 + (0.10)^2 + (0.20)^2 = 0.64 + 0.49 + 0.01 + 0.04 = 1.18$$
  Proportion explained: $\\frac{1.18}{4} = 0.295 \\implies 29.5\\%$.
- **Eigenvalue of Factor 2**:
  $$\\lambda_2 = (0.20)^2 + (0.15)^2 + (0.90)^2 + (0.70)^2 = 0.04 + 0.0225 + 0.81 + 0.49 = 1.3625$$
  Proportion explained: $\\frac{1.3625}{4} = 0.3406 \\implies 34.06\\%$.
- **Total Common Variance Captured**:
  $$29.5\\% + 34.06\\% = 63.56\\%$$

---

#### Part c: Reproduced Correlation Matrix $\\hat{\\mathbf{R}} = \\mathbf{\\Lambda} \\mathbf{\\Lambda}^T$
The off-diagonal reproduced correlations are $\\hat{r}_{ij} = l_{i1}l_{j1} + l_{i2}l_{j2}$:
- $\\hat{r}_{12} = (0.80)(0.70) + (0.20)(0.15) = 0.56 + 0.03 = 0.590$
- $\\hat{r}_{13} = (0.80)(0.10) + (0.20)(0.90) = 0.08 + 0.18 = 0.260$
- $\\hat{r}_{14} = (0.80)(0.20) + (0.20)(0.70) = 0.16 + 0.14 = 0.300$
- $\\hat{r}_{23} = (0.70)(0.10) + (0.15)(0.90) = 0.07 + 0.135 = 0.205$
- $\\hat{r}_{24} = (0.70)(0.20) + (0.15)(0.70) = 0.14 + 0.105 = 0.245$
- $\\hat{r}_{34} = (0.10)(0.20) + (0.90)(0.70) = 0.02 + 0.63 = 0.650$

The diagonal contains the communalities ($h_i^2$):
$$\\hat{\\mathbf{R}} = \\begin{bmatrix}
(0.680) & 0.590 & 0.260 & 0.300 \\\\
0.590 & (0.5125) & 0.205 & 0.245 \\\\
0.260 & 0.205 & (0.820) & 0.650 \\\\
0.300 & 0.245 & 0.650 & (0.530)
\\end{bmatrix}$$

---

#### Part d: Residual Correlation Matrix $\\mathbf{E} = \\mathbf{R} - \\hat{\\mathbf{R}}$
Subtracting off-diagonal reproduced correlations from observed correlations:
- $e_{12} = 0.690 - 0.590 = +0.100$
- $e_{13} = 0.280 - 0.260 = +0.020$
- $e_{14} = 0.350 - 0.300 = +0.050$
- $e_{23} = 0.255 - 0.205 = +0.050$
- $e_{24} = 0.195 - 0.245 = -0.050$
- $e_{34} = 0.610 - 0.650 = -0.040$

$$\\mathbf{E} = \\begin{bmatrix}
0 & 0.100 & 0.020 & 0.050 \\\\
0.100 & 0 & 0.050 & -0.050 \\\\
0.020 & 0.050 & 0 & -0.040 \\\\
0.050 & -0.050 & -0.040 & 0
\\end{bmatrix}$$

---

#### Part e: Root Mean Square Residual (RMSR)
Number of unique off-diagonal pairs: $\\frac{p(p-1)}{2} = \\frac{4(3)}{2} = 6$.
Sum of squared residuals:
$$\\sum e_{ij}^2 = (0.100)^2 + (0.020)^2 + (0.050)^2 + (0.050)^2 + (-0.050)^2 + (-0.040)^2$$
$$\\sum e_{ij}^2 = 0.0100 + 0.0004 + 0.0025 + 0.0025 + 0.0025 + 0.0016 = 0.0195$$
$$\\text{RMSR} = \\sqrt{\\frac{0.0195}{6}} = \\sqrt{0.00325} \\approx 0.057$$
- **Fit Evaluation**: An $\\text{RMSR} \\le 0.08$ (and ideally $< 0.06$) indicates an **excellent fit**. The two-factor solution leaves very small residual correlations, confirming that the factor model successfully explains the observed correlations between the 4 indicators.

---

#### Part f: Conceptual Differences: PCA vs. Factor Analysis
1. **Variance Focus (Total vs. Common)**:
   - **PCA** decomposes **total observed variance** (diagonal $= 1.0$), with no distinction between common and unique/error variance. It is a linear data-reduction procedure.
   - **Factor Analysis** assumes an underlying latent factor model and focuses strictly on reproducing **shared common variance** (communalities in diagonal), discarding unique and measurement error variance.
2. **Direction of Operational Relationship (Formative vs. Reflective)**:
   - In **PCA**, original variables are mathematically combined to *form* composite indices (formative components: $\\text{PC} = \\mathbf{w}^T \\mathbf{x}$).
   - In **FA**, unobservable latent factors are hypothesized to cause/influence the observable variables (reflective indicators: $X_j = \\lambda_{j1} F_1 + \\dots + U_j$).`
  }
];

async function seed() {
  console.log('Seeding workbook exercises into study_workbook_exercises...');
  for (const ex of exercises) {
    const { error } = await supabase
      .from('study_workbook_exercises')
      .upsert(ex, { onConflict: 'id' });
    if (error) {
      console.error('Error inserting', ex.id, error.message);
    } else {
      console.log('Upserted:', ex.id, '-', ex.title);
    }
  }
  console.log('Finished seeding all workbook exercises successfully!');
}

seed();
