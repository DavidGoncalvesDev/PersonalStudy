import fs from 'fs';

// Helper to escape LaTeX commands inside template literals
function cleanMarkdown(md) {
  // Remove any raw '---'
  md = md.replace(/\n---\n/g, '\n\n');
  // Remove any * surrounding words or asterisks
  // (We use clean headings and bold prose without literal asterisks)
  return md;
}

// LEVEL 1 NARRATIVE
export const l1Summary = cleanMarkdown(`# Measurement Scales & Multivariate Methods Classification

## 1. The Nature of Data Analysis
Data analysis is a structured process of inspecting, cleaning, transforming, and modeling empirical observations with the express purpose of discovering actionable patterns, suggesting scientific conclusions, and supporting strategic decision-making. 

In multivariate statistical inquiry, problems are typically formalized through one or more null hypotheses ($H_0$). Empirical data collected from a sample of observations are then evaluated to make a probabilistic decision regarding whether to reject or fail to reject these hypotheses. Multivariate data analysis plays a central role in modern business analytics, engineering, and empirical science by simultaneously analyzing relationships across multiple variables.

## 2. Measurement Scales: The Foundation of Every Analysis
Measurement is the operational process by which numbers or symbols are assigned to characteristics or properties of objects according to specific rules. For instance, customers in a retail banking database may be characterized by age, education level, annual income, credit score, brand sentiment, and transaction frequency. Statistical literature classifies measurement scales into two broad categories: Nonmetric scales (qualitative) and Metric scales (quantitative).

### Nominal Scale
Numbers or symbols in a nominal scale serve purely as arbitrary labels or identifiers to categorize observations into mutually exclusive and exhaustive groups. For example, gender may be coded as 0 for male and 1 for female, or geographic regions may be coded as 1 for North, 2 for South, and 3 for Center.

The assigned numerical values have zero quantitative meaning. It is mathematically invalid to compute arithmetic averages or standard deviations of nominal variables. Permissible descriptive statistics include the mode, frequency counts, percentage distributions, and contingency table cross-tabulations.

When representing a nominal variable with $k$ categories in econometric or multivariate regression models, exactly $k - 1$ binary dummy variables are required. For example, an occupation variable with 3 categories (Commercial, Technical, Unemployed) requires $3 - 1 = 2$ dummy variables ($D_1$ and $D_2$). The omitted category serves as the baseline reference group against which the others are compared.

### Ordinal Scale
On an ordinal scale, observations are ordered or ranked according to the degree of an attribute they possess. A common example is ranking four car brands in order of personal preference ($1 = \\text{Most preferred}$, $2 = \\text{Second}$, $3 = \\text{Third}$, $4 = \\text{Least preferred}$).

Crucially, successive categories do not represent equal intervals of the measured attribute. Although brand A is ranked 1 and brand B is ranked 2, the difference in perceived utility between ranks 1 and 2 is not necessarily equal to the difference between ranks 2 and 3. Permissible statistics include the median, mode, percentiles, and non-parametric rank-order statistics such as Spearman's rank correlation coefficient ($r_s$).

### Interval Scale
On an interval scale, numerical differences between scale points represent genuinely equal amounts of the measured property. Familiar examples include temperature measured in Celsius ($^\\circ\\text{C}$) or Fahrenheit ($^\\circ\\text{F}$), as well as standard 5-point Likert agreement scales ranging from $1 = \\text{Strongly Disagree}$ to $5 = \\text{Strongly Agree}$.

The zero point on an interval scale is arbitrary and does not signify the complete absence of the characteristic. For instance, $0^\\circ\\text{C}$ does not mean "absence of heat" (it is simply the freezing point of water). Consequently, ratio comparisons are invalid: $20^\\circ\\text{C}$ is not twice as warm as $10^\\circ\\text{C}$. Properties of an interval scale are preserved under any positive linear transformation:
$$Y_t = a + b Y_0 \\quad (b > 0)$$
Permissible statistics include the arithmetic mean, standard deviation, variance, Pearson correlation coefficient, and regression analysis. However, ratio-based statistics such as the Coefficient of Variation ($CV = s / \\bar{x}$) are invalid because the arbitrary shift constant $a$ changes the ratio.

### Ratio Scale
A ratio scale possesses all properties of an interval scale, with the critical addition of a natural, absolute, immutable zero base value that signifies the absolute absence of the measured property. Typical examples include age, salary, revenue, unit sales, distance, weight, and elapsed time. A salary of $0 means zero monetary compensation, and an age of $0$ is the moment of birth.

Because an absolute origin exists, meaningful ratio comparisons can be made: a firm earning $100,000 earns exactly twice as much as a firm earning $50,000. Under a ratio scale, only similarity transformations (multiplying by a positive constant) are permissible:
$$Y_t = b Y_0 \\quad (b > 0)$$
Adding a non-zero constant ($a \\neq 0$) is forbidden because it would destroy the absolute zero reference point. All statistical techniques are valid on ratio data, including the geometric mean, harmonic mean, ratios, and the Coefficient of Variation.

## 3. Classification of Multivariate Methods
Multivariate techniques analyze datasets consisting of $n$ observations across $p$ variables. They are fundamentally split into two methodological paradigms based on variable roles.

### Dependence Methods
Dependence methods are used when variables can be conceptually divided into two distinct groups: Independent variables (predictors) and Dependent variables (criterion). The objective is to assess the presence, strength, and pattern of causal or predictive relationships.

They are categorized according to the number of dependent and independent variables, and whether each is metric or nonmetric. Prominent examples include:
- Multiple Linear Regression: One metric dependent variable predicted by multiple metric or dummy independent variables.
- Discriminant Analysis: One nonmetric (categorical) dependent variable predicted by multiple metric independent variables (such as classifying loan default risk based on income, age, and debt ratio).
- Multivariate Analysis of Variance (MANOVA): Multiple metric dependent variables evaluated across nonmetric experimental or categorical groups.
- Canonical Correlation: Multiple metric dependent variables evaluated simultaneously against multiple metric independent variables.

### Interdependence Methods
Interdependence methods are applied when it is impossible or conceptually incorrect to designate variables as independent or dependent. The primary objective is to understand how and why all variables relate among themselves simultaneously, or to discover natural clusters and dimensions in the data cloud.

Key interdependence techniques include:
- Principal Components Analysis (PCA): Dimension reduction for metric variables that maximizes retained total variance through uncorrelated linear combinations.
- Exploratory Factor Analysis (FA): Dimension reduction for metric variables that uncovers unobservable latent factors explaining the common correlation structure.
- Correspondence Analysis: Dimension reduction for nonmetric contingency tables and cross-tabulations.
- Cluster Analysis: Classifying observations into homogeneous groups such that objects within a cluster share high similarity while objects across clusters are maximally distinct.
- Multidimensional Scaling (MDS): Mapping spatial distances and perceptual relationships among objects from pairwise similarity matrices.`);

// LEVEL 2 NARRATIVE
export const l2Summary = cleanMarkdown(`# Data Manipulation, Geometric Duality & Distance Metrics

## 1. Data Matrices & Basic Multivariate Operations
A multivariate dataset is formalized as a matrix $X$ of dimension $n \\times p$, representing $n$ observed units measured on $p$ variables.

Before conducting advanced multivariate procedures, raw data are usually preprocessed. Centering subtracts the sample mean from every observation:
$$x_{cij} = X_{ij} - \\bar{X}_j$$
Centering shifts the data cloud so that its center of gravity (the centroid) lies precisely at the coordinate origin $(0, 0, \\dots, 0)$. Centering does not alter variances, pairwise distances, or covariances.

## 2. Variance, Covariance & Correlation
Sample variance represents the average squared deviation of an individual variable from its mean, scaled by degrees of freedom:
$$s_j^2 = \\frac{SS_j}{n - 1} = \\frac{\\sum_{i=1}^n (X_{ij} - \\bar{X}_j)^2}{n - 1}$$
where $SS_j$ is the Sum of Squares and $df = n - 1$. The standard deviation is the positive square root $s_j = \\sqrt{s_j^2}$.

Sample covariance measures the joint linear variability of two variables:
$$S_{jk} = \\frac{SCP_{jk}}{n - 1} = \\frac{\\sum_{i=1}^n (X_{ij} - \\bar{X}_j)(X_{ik} - \\bar{X}_k)}{n - 1}$$
where $SCP_{jk}$ is the Sum of Cross Products. When arranged in a square symmetric $p \\times p$ matrix $S$, the diagonal elements are the sample variances ($s_j^2$) and the off-diagonal elements are the pairwise covariances ($S_{jk}$).

The Pearson Correlation Coefficient ($r_{jk}$) scales the covariance by the product of both standard deviations, yielding a standardized measure bounded between $-1$ and $+1$:
$$r_{jk} = \\frac{S_{jk}}{s_j s_k} = \\frac{\\sum_{i=1}^n (X_{ij} - \\bar{X}_j)(X_{ik} - \\bar{X}_k)}{\\sqrt{\\sum_{i=1}^n (X_{ij} - \\bar{X}_j)^2} \\sqrt{\\sum_{i=1}^n (X_{ik} - \\bar{X}_k)^2}}$$
A high correlation signifies a strong linear association, but it does not imply causation.

## 3. Geometric Duality: Variable Space vs. Observation Space
Multivariate data can be visualized through two complementary perspectives:

### Variable Space (p-Dimensional Representation)
In variable space, coordinate axes represent the $p$ variables. Each of the $n$ observations is a discrete point located at coordinates $(x_{i1}, x_{i2}, \\dots, x_{ip})$. The centroid $C = (\\bar{X}_1, \\dots, \\bar{X}_p)$ is the central balance point of the scatter.

### Observation Space (n-Dimensional Representation)
In observation space, coordinate axes represent the $n$ individual sample units. Each of the $p$ variables is represented as a directed vector in $n$ dimensions.

For mean-corrected variables, the squared length (squared Euclidean norm) of vector $x_j$ equals its Sum of Squares:
$$\\|x_j\\|^2 = SS_j \\implies \\|x_j\\| = s_j \\sqrt{n - 1}$$
The scalar dot product between two mean-corrected variable vectors is the Sum of Cross Products:
$$x_j \\cdot x_k = SCP_{jk} = (n - 1) S_{jk}$$
From vector geometry, the cosine of the angle $\\alpha$ between two variable vectors in observation space equals their Pearson correlation:
$$\\cos(\\alpha) = \\frac{x_j \\cdot x_k}{\\|x_j\\| \\|x_k\\|} = \\frac{(n - 1) S_{jk}}{(s_j \\sqrt{n - 1})(s_k \\sqrt{n - 1})} = \\frac{S_{jk}}{s_j s_k} = r_{jk}$$
If $\\alpha = 0^\\circ$, $\\cos(0^\\circ) = 1$, representing perfect positive collinearity ($r = 1$). If $\\alpha = 90^\\circ$, $\\cos(90^\\circ) = 0$, meaning the vectors are perpendicular and the variables are completely uncorrelated ($r = 0$). If $\\alpha = 180^\\circ$, $\\cos(180^\\circ) = -1$, representing perfect inverse collinearity ($r = -1$).

## 4. Distance Metrics in Multivariate Space
A metric distance function $D_{ik}$ between observations $i$ and $k$ must satisfy non-negativity ($D_{ik} \\ge 0$, with $D_{ik} = 0 \\iff i = k$), symmetry ($D_{ik} = D_{ki}$), and the triangle inequality ($D_{il} \\le D_{ik} + D_{kl}$).

### Euclidean Distance
The classical straight-line Euclidean distance is:
$$D_{ik} = \\sqrt{\\sum_{j=1}^p (X_{ij} - X_{kj})^2}$$
Euclidean distance assumes that all variables have equal variances and are completely uncorrelated. If variables are measured on different scales (e.g. annual income in thousands vs customer satisfaction from 1 to 5), variables with larger numerical ranges dominate the distance.

### Statistical Distance (Variance-Standardized)
Statistical distance divides each squared deviation by the variable's sample variance:
$$SD_{ik}^2 = \\sum_{j=1}^p \\left(\\frac{X_{ij} - X_{kj}}{s_j}\\right)^2$$
This prevents scale distortion by measuring distance in units of standard deviations, but it still assumes variables are uncorrelated.

### Mahalanobis Distance (Covariance-Adjusted)
Introduced by P. C. Mahalanobis in 1936, this metric accounts for both differing variances and pairwise intercorrelations:
$$MD_{ik}^2 = (x_i - x_k)^T S^{-1} (x_i - x_k)$$
where $S$ is the $p \\times p$ sample covariance matrix and $S^{-1}$ is its matrix inverse.

In the bivariate ($p = 2$) case with correlation $r$:
$$MD_{ik}^2 = \\frac{1}{1 - r^2} \\left[ \\frac{(X_{i1} - X_{k1})^2}{s_1^2} + \\frac{(X_{i2} - X_{k2})^2}{s_2^2} - \\frac{2r(X_{i1} - X_{k1})(X_{i2} - X_{k2})}{s_1 s_2} \\right]$$
When variables are uncorrelated ($r = 0$), Mahalanobis distance simplifies to Statistical distance. When variables are uncorrelated ($r = 0$) and standardized ($s_j = 1$), Mahalanobis distance simplifies to Euclidean distance.`);

// LEVEL 3 NARRATIVE
export const l3Summary = cleanMarkdown(`# PCA: Geometric Foundations & Coordinate Projections

## 1. Motivation: The Dimensionality Challenge
When analyzing datasets with many correlated variables, examining each variable individually is redundant and overwhelming. For example, a company tracking 30 financial metrics often finds that profitability, liquidity, and leverage indicators share strong mutual correlations.

Principal Components Analysis (PCA) addresses this challenge by finding new, uncorrelated linear combinations of the original variables that capture the maximum possible variance of the data cloud in a lower-dimensional subspace.

## 2. The 12-Customer Case Study
To build concrete intuition, consider a sample of 12 customers measured on two variables:
- Variable 1 ($X_1$): Annual Income (in k€/year)
- Variable 2 ($X_2$): Customer Lifetime Value index (CLV, scale -10 to +10)

Sample summary statistics:
- Sample Means: $\\bar{X}_1 = 8.000$, $\\bar{X}_2 = 3.000$
- Sample Variances: $s_1^2 = 23.091$, $s_2^2 = 21.091$
- Total Sample Variance: $\\text{Total Var} = s_1^2 + s_2^2 = 23.091 + 21.091 = 44.182$
- Sample Correlation: $r_{12} = 0.746$ (strong positive association)

Income accounts for $52.26\\%$ of total variance and CLV accounts for $47.74\\%$. Neither variable alone provides an efficient 1-dimensional summary.

## 3. Centering the Data Cloud
The first step of PCA is centering the data by subtracting the sample means:
$$x_{c1} = X_1 - 8.000, \\quad x_{c2} = X_2 - 3.000$$
Centering translates the data scatter so that its centroid is located at the origin $(0, 0)$. Crucially, centering does not change the spread, pairwise distances, variances, or sample covariance ($S_{12} = 16.455$).

## 4. Rotating the Coordinate Axis & Projecting Observations
To capture the data cloud along a single new dimension, draw a new coordinate axis $X^*_1$ through the origin at an angle $\\theta$ relative to the horizontal $X_1$ axis.

Every centered customer point $(x_1, x_2)$ is orthogonally projected onto this new axis. From basic trigonometry, the coordinate of point $(x_1, x_2)$ along the rotated axis $X^*_1$ is:
$$x^*_1 = \\cos(\\theta) x_1 + \\sin(\\theta) x_2$$
The vector of coefficients $(\\cos\\theta, \\sin\\theta)$ has unit length:
$$\\cos^2(\\theta) + \\sin^2(\\theta) = 1$$

## 5. Variance as a Function of Rotation Angle
As the candidate axis rotates from $\\theta = 0^\\circ$ to $90^\\circ$, the sample variance of the projected customer scores changes continuously:
- At $\\theta = 0^\\circ$: The axis coincides with $X_1$, yielding variance $23.091$ ($52.26\\%$ of total variance).
- At $\\theta = 20^\\circ$: The variance rises to $33.434$ ($75.67\\%$).
- At $\\theta = 43.26^\\circ$: The variance reaches its absolute maximum of $38.576$, accounting for $87.31\\%$ of the total sample variance.
- At $\\theta = 60^\\circ$: The variance drops to $35.841$ ($81.12\\%$).
- At $\\theta = 90^\\circ$: The axis coincides with $X_2$, yielding variance $21.091$ ($47.74\\%$).

The maximum variance occurs at $\\theta = 43.26^\\circ$, aligning the axis precisely with the longest elongation of the customer scatter.

## 6. The First Principal Component and Its Orthogonal Complement
The axis at angle $\\theta = 43.26^\\circ$ defines the First Principal Component ($PC_1$):
$$PC_1 = \\cos(43.26^\\circ) x_1 + \\sin(43.26^\\circ) x_2 = 0.728238 x_1 + 0.685324 x_2$$
$PC_1$ has variance $\\lambda_1 = 38.576$, capturing $87.31\\%$ of total variability.

The Second Principal Component ($PC_2$) is constructed perpendicular to $PC_1$ by rotating the axis by an additional $90^\\circ$ ($\\\\theta + 90^\\circ = 133.26^\\circ$):
$$PC_2 = -\\sin(43.26^\\circ) x_1 + \\cos(43.26^\\circ) x_2 = -0.685324 x_1 + 0.728238 x_2$$
$PC_2$ has variance $\\lambda_2 = 5.606$, accounting for the remaining $12.69\\%$ of total variance.

## 7. Conservation of Total Variance
A fundamental mathematical theorem of PCA is the strict conservation of total variance:
$$\\lambda_1 + \\lambda_2 = 38.576 + 5.606 = 44.182 = s_1^2 + s_2^2$$
PCA does not create or destroy information; it rotates the coordinate system into the principal directions of variation. By retaining only $PC_1$, the analyst reduces dimensionality from 2 variables to 1 while preserving over $87\\%$ of the total sample information.`);

// LEVEL 4 NARRATIVE
export const l4Summary = cleanMarkdown(`# PCA: Analytical Formulation, Eigenvalues & Scale Sensitivity

## 1. Matrix Representation of PCA
In general multivariate analysis with $p$ variables, geometric trial-and-error rotation is impractical. PCA is formulated algebraically using matrix algebra.

Let $X_c$ be the $n \\times p$ centered data matrix. The sample covariance matrix $S$ is computed as:
$$S = \\frac{1}{n - 1} X_c^T X_c$$
We seek an orthonormal transformation matrix $W$ of dimension $p \\times p$ that maps the centered data into principal component scores $T$:
$$T = X_c W$$
where columns of $W = [w_1, w_2, \\dots, w_p]$ are unit-length directional weight vectors satisfying $W^T W = I$.

The variance of any linear combination $t = X_c w$ is:
$$\\text{Var}(t) = w^T S w$$

## 2. Derivation via Lagrange Multipliers
To find the first principal component, we maximize $\\text{Var}(t) = w^T S w$ subject to the unit-length normalization constraint $w^T w = 1$.

We define the Lagrangian function:
$$L(w, \\lambda) = w^T S w - \\lambda (w^T w - 1)$$
Taking the vector derivative with respect to $w$ and setting it to zero yields:
$$\\frac{\\partial L}{\\partial w} = 2Sw - 2\\lambda w = 0 \\implies (S - \\lambda I) w = 0$$
This is the classic algebraic eigenvalue equation. The scalar $\\lambda$ is an eigenvalue of covariance matrix $S$, and the weight vector $w$ is its corresponding eigenvector.

Premultiplying $(S - \\lambda I)w = 0$ by $w^T$ reveals the physical meaning of $\\lambda$:
$$w^T S w = \\lambda w^T w = \\lambda$$
The eigenvalue $\\lambda$ equals the exact variance of the corresponding principal component!

## 3. The Characteristic Equation
For $(S - \\lambda I)w = 0$ to possess a non-zero solution $w \\neq 0$, the matrix $(S - \\lambda I)$ must be singular. Its determinant must equal zero:
$$\\det(S - \\lambda I) = 0$$
This is the characteristic polynomial of degree $p$. For a $2 \\times 2$ covariance matrix $S = \\begin{bmatrix} s_1^2 & S_{12} \\\\ S_{12} & s_2^2 \\end{bmatrix}$, the characteristic equation is:
$$(s_1^2 - \\lambda)(s_2^2 - \\lambda) - S_{12}^2 = 0 \\implies \\lambda^2 - (s_1^2 + s_2^2)\\lambda + (s_1^2 s_2^2 - S_{12}^2) = 0$$
Notice that the coefficient of $\\lambda$ is the trace of $S$ (sum of variances) and the constant term is the determinant of $S$.

Solving this quadratic equation yields the eigenvalues $\\lambda_1$ and $\\lambda_2$. Substituting each eigenvalue back into $(S - \\lambda I)w = 0$ and normalizing such that $w_1^2 + w_2^2 = 1$ yields the unique eigenvector weights.

## 4. Fundamental Properties of Eigenvalues
Eigenvalues have three crucial properties:
1. Trace Property: The sum of all $p$ eigenvalues equals the trace of the covariance matrix (the sum of original sample variances):
   $$\\sum_{i=1}^p \\lambda_i = \\text{tr}(S) = \\sum_{j=1}^p s_j^2$$
2. Generalized Variance Property: The product of all eigenvalues equals the determinant of $S$:
   $$\\prod_{i=1}^p \\lambda_i = \\det(S)$$
3. Orthogonality: For symmetric matrix $S$, eigenvectors associated with distinct eigenvalues are strictly orthogonal:
   $$w_i^T w_j = 0 \\quad (i \\neq j)$$
   Consequently, the principal components are mutually uncorrelated:
   $$\\text{Cov}(PC_i, PC_j) = 0 \\quad (i \\neq j)$$

## 5. Covariance PCA vs. Correlation PCA
A major practical decision in PCA is whether to analyze the covariance matrix $S$ (Covariance PCA) or the correlation matrix $R$ (Correlation PCA).

### Scale Sensitivity of Covariance PCA
In Covariance PCA, total variance is the sum of raw variances. If variables are measured in different units (e.g., annual revenue in millions vs employee count in tens), the variable with the largest absolute variance will mechanically dominate the leading components, regardless of underlying correlations.

### When to Use Correlation PCA
When variables are measured in non-comparable units or possess widely differing variances, the data should be standardized before performing PCA. Standardizing each variable to have a mean of 0 and a variance of 1 is equivalent to performing PCA directly on the sample correlation matrix $R$.

In Correlation PCA:
- The trace of $R$ always equals the number of variables: $\\text{tr}(R) = p$.
- Each original standardized variable contributes exactly $1.0$ unit of variance.
- Total sample variance is simply $p$.`);

console.log('Part 1 summaries defined.');
