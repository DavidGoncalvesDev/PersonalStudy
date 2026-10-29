// Enhanced balanced options for Level 1 (ch1-scales-methods) and Level 2 (ch1-manipulation-distances)
// Target: All 6 choices have comparable length, equal grammatical weight, and plausible theoretical rationale.
// The correct answer is NOT the longest; distractors frequently match or exceed it in length.

export const level1Balanced = [
  // Q1 (Ratio Scale)
  {
    order: 1,
    id: "q_l1_1",
    targetLetter: "d",
    options: [
      { text: "Nominal scale, because categories represent discrete qualitative classes without quantitative distance or origin", isCorrect: false },
      { text: "Ordinal scale, because rank orders preserve monotonic relative magnitudes and ordered hierarchies across entities", isCorrect: false },
      { text: "Interval scale, because the distance between consecutive scale points is uniform across the entire measurement range", isCorrect: false },
      { text: "Ratio scale, because an absolute zero signifies total absence of the attribute, allowing multiplicative comparisons", isCorrect: true },
      { text: "Likert scale, because standard survey responses range symmetrically from strongly disagree to strongly agree", isCorrect: false },
      { text: "Binary dummy scale, because variables are restricted strictly to values 0 and 1 with fixed contrast parameters", isCorrect: false }
    ]
  },
  // Q2 (Dummy variables k-1)
  {
    order: 2,
    id: "q_l1_2",
    targetLetter: "b",
    options: [
      { text: "Exactly $k$ dummy variables, one for each distinct category while retaining the standard constant intercept vector", isCorrect: false },
      { text: "Exactly $k - 1$ dummy variables, leaving one category as the reference baseline to prevent perfect multicollinearity", isCorrect: true },
      { text: "Exactly $k + 1$ dummy variables to include an interaction term alongside an explicit omnibus reference vector", isCorrect: false },
      { text: "Exactly $2k$ dummy variables to account for positive and negative contrasts across all pairwise combinations", isCorrect: false },
      { text: "Only 1 continuous variable coded from 1 to $k$, treating the discrete qualitative categories as a metric continuum", isCorrect: false },
      { text: "Exactly $k / 2$ dummy variables rounded up, pairing adjacent categories into combined contrast groups", isCorrect: false }
    ]
  },
  // Q3 (Dependence vs Interdependence)
  {
    order: 3,
    id: "q_l1_3",
    targetLetter: "e",
    options: [
      { text: "Dependence methods are strictly restricted to small experimental samples ($n < 50$), whereas interdependence methods require massive administrative datasets exceeding $n > 10,000$", isCorrect: false },
      { text: "Dependence methods require all variables to be measured on nonmetric nominal scales, while interdependence methods are formulated strictly for continuous ratio scales", isCorrect: false },
      { text: "Dependence methods cannot compute formal inferential test statistics, whereas interdependence methods test structural null hypotheses using p-values and F-tests", isCorrect: false },
      { text: "Dependence methods analyze only cross-sectional qualitative surveys, while interdependence methods analyze longitudinal financial metrics and economic time series", isCorrect: false },
      { text: "Dependence methods partition variables into predictors and criterion variables, whereas interdependence methods analyze all variables simultaneously without designation", isCorrect: true },
      { text: "Dependence methods require zero correlation among all independent factors, while interdependence methods require perfect collinearity to isolate shared dimensions", isCorrect: false }
    ]
  },
  // Q4 (Invalid for Ordinal)
  {
    order: 4,
    id: "q_l1_4",
    targetLetter: "a",
    options: [
      { text: "Arithmetic mean and sample standard deviation, because distances between successive ranks are not assumed to be equal", isCorrect: true },
      { text: "Median rank and interquartile range, because percentiles require strictly uniform metric intervals across score points", isCorrect: false },
      { text: "Modal category and frequency percentages, because qualitative counts cannot be computed on ordered discrete rankings", isCorrect: false },
      { text: "Spearman rank correlation coefficient, because non-parametric monotonicity tests violate ordinal transformation rules", isCorrect: false },
      { text: "Cumulative frequency distribution and percentiles, because ranking metrics distort cumulative probabilities", isCorrect: false },
      { text: "Rank range and minimum-maximum boundaries, because dispersion indicators are undefined outside continuous ratio data", isCorrect: false }
    ]
  },
  // Q5 (Celsius CV invalid)
  {
    order: 5,
    id: "q_l1_5",
    targetLetter: "c",
    options: [
      { text: "Because Celsius temperature records exhibit empirical skewness that prevents the underlying population from being normally distributed", isCorrect: false },
      { text: "Because the standard deviation cannot be mathematically derived when differences between scale intervals are assumed to be uniform", isCorrect: false },
      { text: "Because the arbitrary origin allows linear transformations $Y_t = a + bY_0$ ($a \neq 0$), which arbitrarily change the ratio $s / \bar{x}$", isCorrect: true },
      { text: "Because temperature on an interval scale lacks equal intervals between degrees, restricting valid operations to non-parametric medians", isCorrect: false },
      { text: "Because the variance of any standardized interval scale is constrained to be exactly 1.0, rendering the relative dispersion invariant", isCorrect: false },
      { text: "Because the Coefficient of Variation is an econometric indicator that can only be evaluated when all observations are strictly positive integers", isCorrect: false }
    ]
  },
  // Q6 (Discriminant Analysis)
  {
    order: 6,
    id: "q_l1_6",
    targetLetter: "f",
    options: [
      { text: "Multiple Linear Regression, because it establishes predictive models between continuous predictors and quantitative responses", isCorrect: false },
      { text: "Multivariate Analysis of Variance (MANOVA), because multiple metric dependent variables are compared across categorical treatments", isCorrect: false },
      { text: "Principal Components Analysis (PCA), because it extracts orthogonal composite scores across all applicant metrics without target variables", isCorrect: false },
      { text: "Canonical Correlation, because multiple metric independent variables are correlated with a second set of multiple metric dependent variables", isCorrect: false },
      { text: "Exploratory Factor Analysis (FA), because it explains shared covariance among financial predictors using unobserved latent credit factors", isCorrect: false },
      { text: "Discriminant Analysis, because a single nonmetric categorical dependent variable is predicted by multiple metric independent variables", isCorrect: true }
    ]
  },
  // Q7 (Interval scale transformation)
  {
    order: 7,
    id: "q_l1_7",
    targetLetter: "b",
    options: [
      { text: "Similarity transformation: $Y_t = b Y_0$ ($b > 0$), which preserves origin ratios while constraining the constant term to zero", isCorrect: false },
      { text: "Linear (affine) transformation: $Y_t = a + b Y_0$ ($b > 0$), which preserves interval equality despite an arbitrary shift in origin", isCorrect: true },
      { text: "Logarithmic transformation: $Y_t = \ln(Y_0)$, which compresses high values while strictly requiring a non-arbitrary positive base origin", isCorrect: false },
      { text: "Monotonic transformation: any function $f$ preserving ranks, which maintains order but distorts the equality of interval distances", isCorrect: false },
      { text: "Quadratic power transformation: $Y_t = Y_0^2$, which magnifies higher values while violating the uniform distance property", isCorrect: false },
      { text: "Strict identity transformation: $Y_t = Y_0$, which permits zero numerical recoding or rescaling in statistical data packages", isCorrect: false }
    ]
  },
  // Q8 (Correspondence Analysis)
  {
    order: 8,
    id: "q_l1_8",
    targetLetter: "d",
    options: [
      { text: "Multivariate Analysis of Variance (MANOVA), which analyzes group centroids across metric vectors", isCorrect: false },
      { text: "Canonical Correlation Analysis (CCA), which assesses linear relationships between two metric batteries", isCorrect: false },
      { text: "Linear Discriminant Analysis (LDA), which computes linear boundaries separating categorical classes", isCorrect: false },
      { text: "Correspondence Analysis (CA), which reduces dimensions for nonmetric contingency tables and cross-tabulations", isCorrect: true },
      { text: "Agglomerative Hierarchical Cluster Analysis, which clusters observations into homogeneous partitions", isCorrect: false },
      { text: "Multiple Linear Regression Modeling, which estimates conditional expectations of continuous variables", isCorrect: false }
    ]
  },
  // Q9 (Likert scale transformation)
  {
    order: 9,
    id: "q_l1_9",
    targetLetter: "a",
    options: [
      { text: "Intervals between adjacent points remain constant at 2, while the ratio of maximum to minimum changes from $5/1 = 5.0$ to $20/12 \approx 1.67$", isCorrect: true },
      { text: "Intervals between adjacent ratings expand from 1 to 2, whereas the ratio between highest and lowest points remains constant at exactly 5.0", isCorrect: false },
      { text: "Intervals between consecutive points become non-uniform, but the ratio between extreme boundary values is strictly preserved at 5.0", isCorrect: false },
      { text: "Both the scale intervals and boundary ratios remain completely unchanged because positive linear transformations preserve all metric properties", isCorrect: false },
      { text: "The scale collapses into a nominal ranking because adding a constant shift disrupts the monotonic order of consumer agreement ratings", isCorrect: false },
      { text: "The ratio of maximum to minimum doubles from 5.0 to 10.0 because multiplying by a positive slope parameter amplifies boundary discrepancies", isCorrect: false }
    ]
  },
  // Q10 (Dummy variable interpretation)
  {
    order: 10,
    id: "q_l1_10",
    targetLetter: "e",
    options: [
      { text: "The absolute mean annual credit card expenditure for Public sector employees across the target banking population, ignoring other factors", isCorrect: false },
      { text: "The percentage growth in annual expenditure observed when moving an applicant from baseline category 1 into occupational category 2", isCorrect: false },
      { text: "The Pearson correlation coefficient between Public sector employment status and annual household income across all 1,000 respondents", isCorrect: false },
      { text: "The proportional ratio of Public sector employee transactions relative to Private sector corporate spending, holding covariates constant", isCorrect: false },
      { text: "The expected difference in annual credit card spend between Public sector employees and Students, holding all other variables constant", isCorrect: true },
      { text: "The posterior probability that a given Public sector employee will be classified into the top credit expenditure decile group", isCorrect: false }
    ]
  },
  // Q11 (Interdependence MDS)
  {
    order: 11,
    id: "q_l1_11",
    targetLetter: "c",
    options: [
      { text: "Predicting annual regional GDP growth from employment rates, capital investment, and export volume via Multiple Regression", isCorrect: false },
      { text: "Classifying commercial loan applicants into default vs non-default risk groups from financial ratios via Discriminant Analysis", isCorrect: false },
      { text: "Constructing a perceptual brand map from consumer dissimilarity matrices across 10 competitors via Multidimensional Scaling (MDS)", isCorrect: true },
      { text: "Testing whether mean blood pressure and cholesterol levels differ across three clinical medication dosages via MANOVA", isCorrect: false },
      { text: "Estimating median customer churn time based on monthly usage volume and subscription duration via Survival Analysis", isCorrect: false },
      { text: "Quantifying price elasticity parameters for consumer packaged goods across multiple retail channels via Ordinary Least Squares", isCorrect: false }
    ]
  },
  // Q12 (Ratio scale constant invalid)
  {
    order: 12,
    id: "q_l1_12",
    targetLetter: "f",
    options: [
      { text: "Because adding an additive constant causes the sample standard deviation to become negative, violating variance non-negativity axioms", isCorrect: false },
      { text: "Because ratio variables can only undergo non-linear monotonic power transformations to maintain mathematical consistency in regressions", isCorrect: false },
      { text: "Because revenue and monetary values are fundamentally interval measures whose statistical properties prohibit translation operations", isCorrect: false },
      { text: "Because only multiplication by zero is mathematically valid on ratio scales when evaluating corporate financial balance sheet accounts", isCorrect: false },
      { text: "Because adding a constant alters the monotonic sequence of corporate sales rankings, causing smaller firms to surpass larger competitors", isCorrect: false },
      { text: "Because adding a non-zero constant destroys the absolute zero point ($0 + 50 = 50$), thereby invalidating proportionality and ratio comparisons", isCorrect: true }
    ]
  }
];

export const level2Balanced = [
  // Q1 (Variance SS and df)
  {
    order: 1,
    id: "q_l2_1",
    targetLetter: "c",
    options: [
      { text: "Variance is the Sum of Squares multiplied by degrees of freedom: $s_j^2 = SS_j \\times (n - 1)$, representing cumulative dispersion", isCorrect: false },
      { text: "Variance is the square root of the Sum of Squares divided by sample size: $s_j^2 = \\sqrt{SS_j / n}$, representing root mean dispersion", isCorrect: false },
      { text: "Variance is the Sum of Squares divided by degrees of freedom: $s_j^2 = SS_j / (n - 1)$, representing average squared deviation", isCorrect: true },
      { text: "Variance is the Sum of Cross Products divided by the sample mean: $s_j^2 = SCP_{jk} / \\bar{x}$, representing scaled covariation", isCorrect: false },
      { text: "Variance is identical to degrees of freedom divided by Sum of Squares: $s_j^2 = (n - 1) / SS_j$, representing precision density", isCorrect: false },
      { text: "Variance is the sum of absolute deviations divided by degrees of freedom: $s_j^2 = \\sum |x_i - \\bar{x}| / (n - 1)$, representing mean spread", isCorrect: false }
    ]
  },
  // Q2 (Observation space cosine angle)
  {
    order: 2,
    id: "q_l2_2",
    targetLetter: "a",
    options: [
      { text: "The cosine of $\\alpha$ is exactly equal to the Pearson correlation coefficient: $\\cos(\\alpha) = r_{jk}$, linking geometry to correlation", isCorrect: true },
      { text: "The tangent of $\\alpha$ is exactly equal to the pooled covariance: $\\tan(\\alpha) = s_{jk}$, linking angular slope to covariance spread", isCorrect: false },
      { text: "The Euclidean distance between vector endpoints equals the correlation: $D_{jk} = r_{jk}$, linking distance to linear association", isCorrect: false },
      { text: "The angle $\\alpha$ is proportional to the ratio of variable means: $\\alpha = \\bar{x}_j / \\bar{x}_k$, linking orientation to central tendency", isCorrect: false },
      { text: "The sine of $\\alpha$ equals the coefficient of determination: $\\sin(\\alpha) = r_{jk}^2$, linking trigonometric height to shared variance", isCorrect: false },
      { text: "The angle $\\alpha$ in radians equals the degrees of freedom: $\\alpha = n - 1$, linking geometric dimensionality to sample size", isCorrect: false }
    ]
  },
  // Q3 (Standardized variable mean 0 var 1)
  {
    order: 3,
    id: "q_l2_3",
    targetLetter: "e",
    options: [
      { text: "The sample mean becomes 1.0 and the sample variance becomes 0.0, shifting all observations into a single deterministic point mass at the positive unit boundary", isCorrect: false },
      { text: "Both the sample mean and sample variance become exactly 0.0, collapsing all observation deviations to the origin and destroying statistical dispersion", isCorrect: false },
      { text: "The sample mean remains completely unchanged while the sample variance doubles: $\\bar{z} = \\bar{x}$ and $s_z^2 = 2 s_x^2$, amplifying original variability", isCorrect: false },
      { text: "The sample mean becomes 0.0 and the sample variance is multiplied by $n - 1$, scaling total dispersion proportionally to the sample size of observations", isCorrect: false },
      { text: "The sample mean becomes 0.0 and the sample variance becomes 1.0: $\\bar{z} = 0$ and $s_z^2 = 1$, standardizing location and scale", isCorrect: true },
      { text: "The sample mean and variance both equal the original sample median, preserving non-parametric percentile boundaries across all observations", isCorrect: false }
    ]
  },
  // Q4 (Metric distance axioms)
  {
    order: 4,
    id: "q_l2_4",
    targetLetter: "d",
    options: [
      { text: "Non-negativity and Distinguishability: $D_{ik} \\ge 0$ for all pairs, with $D_{ik} = 0$ if and only if points $i$ and $k$ are identical", isCorrect: false },
      { text: "Symmetry: $D_{ik} = D_{ki}$ for all pairs, ensuring distance is identical regardless of travel direction between points", isCorrect: false },
      { text: "Triangle Inequality: $D_{il} \\le D_{ik} + D_{kl}$ for all points, ensuring direct path is never longer than an indirect detour", isCorrect: false },
      { text: "Proportional Invariance: $D_{ik}$ must always be strictly bounded between 0.0 and 1.0 regardless of variable scales", isCorrect: true },
      { text: "Identical Zero Self-Distance: $D_{ii} = 0$ for every observation, confirming that any point has zero distance to itself", isCorrect: false },
      { text: "Strict Positivity for Distinct Points: if $i \\neq k$, then $D_{ik} > 0$, guaranteeing spatial separation between distinct entities", isCorrect: false }
    ]
  },
  // Q5 (Euclidean scale sensitivity)
  {
    order: 5,
    id: "q_l2_5",
    targetLetter: "b",
    options: [
      { text: "Because Euclidean distance cannot be computed on more than two dimensions without violating matrix non-singularity axioms in multidimensional projection", isCorrect: false },
      { text: "Because variables with large numerical variances dominate the distance calculation, making smaller-scale variables practically irrelevant", isCorrect: true },
      { text: "Because Euclidean distance violates the metric triangle inequality whenever attributes are measured in non-standardized heterogeneous physical measurement units", isCorrect: false },
      { text: "Because the Pythagorean theorem is mathematically invalid whenever variables have non-zero skewness or kurtosis in empirical multivariate sample distributions", isCorrect: false },
      { text: "Because Euclidean distance assumes all pairwise correlations are negative, causing distances between positively correlated items to artificially inflate", isCorrect: false },
      { text: "Because Euclidean distance projects data onto a 1-dimensional line, destroying all geometric spread and orthogonal variation across remaining dimensions", isCorrect: false }
    ]
  },
  // Q6 (Mahalanobis reduces to Euclidean)
  {
    order: 6,
    id: "q_l2_6",
    targetLetter: "f",
    options: [
      { text: "When all variables are perfectly collinear ($r = 1.0$) and sample size $n$ exceeds total variables $p$ by at least 100 observations in the empirical dataset", isCorrect: false },
      { text: "When sample size $n$ approaches infinity and all variable means are centered exactly at the origin: $\\bar{x} = 0$, eliminating centroid translations", isCorrect: false },
      { text: "When data are measured exclusively on ordinal scales and distance is evaluated using non-parametric rank scores across all pairwise observations", isCorrect: false },
      { text: "When all pairwise covariances are positive constants and variances are proportional to degrees of freedom ($s_j^2 = n - 1$) across all dimensions", isCorrect: false },
      { text: "When the determinant of the covariance matrix equals zero and matrix inversion is replaced by the Moore-Penrose pseudo-inverse in dimensional space", isCorrect: false },
      { text: "When all variables are mutually uncorrelated ($r = 0$) and have unit variance ($s_j^2 = 1$), such that covariance matrix $S = I$", isCorrect: true }
    ]
  },
  // Q7 (Contingency table df = 1)
  {
    order: 7,
    id: "q_l2_7",
    targetLetter: "b",
    options: [
      { text: "Because a $2 \\times 2$ table has 4 cells, and dividing by total row and column dimensions yields exactly $(2 \\times 2) / 4 = 1$ degree of freedom", isCorrect: false },
      { text: "Because once any single cell joint frequency is specified, the remaining three cells are fixed by the row and column margins", isCorrect: true },
      { text: "Because binary categorical data have zero theoretical variance, constraining all joint cell probabilities to equal the simple product of marginals", isCorrect: false },
      { text: "Because qualitative nominal classifications only permit estimation of the central mode, eliminating parameter dispersion across cross-tabulations", isCorrect: false },
      { text: "Because the sample correlation in any $2 \\times 2$ contingency table is constrained to zero under the baseline null hypothesis of mutual independence", isCorrect: false },
      { text: "Because the determinant of a $2 \\times 2$ frequency matrix with fixed margins is mathematically forced to equal 1.0 by matrix normalization rules", isCorrect: false }
    ]
  },
  // Q8 (Orthogonal vectors r = 0)
  {
    order: 8,
    id: "q_l2_8",
    targetLetter: "d",
    options: [
      { text: "$r = 1.0$ and covariance is positive, because orthogonal vectors share identical orientation in observation space and overlap perfectly", isCorrect: false },
      { text: "$r = -1.0$ and covariance is negative, because perpendicular vectors point in opposite geometric directions across the multidimensional axes", isCorrect: false },
      { text: "$r = 0.5$ and covariance equals half of the product of sample standard deviations: $s_{12} = 0.5 s_1 s_2$, reflecting intermediate angular projection", isCorrect: false },
      { text: "$r = 0.0$ and covariance is $0.0$, because $\\cos(90^\\circ) = 0$, indicating zero linear correlation between the variables", isCorrect: true },
      { text: "$r = 0.707$ and covariance is positive, because $\\cos(45^\\circ) = \\sqrt{2}/2$, reflecting intermediate linear association between the vectors", isCorrect: false },
      { text: "Correlation is undefined and covariance is infinite, because perpendicular vectors cannot share common projections onto observation subspaces", isCorrect: false }
    ]
  },
  // Q9 (Statistical vs Euclidean distance)
  {
    order: 9,
    id: "q_l2_9",
    targetLetter: "a",
    options: [
      { text: "Euclidean distance is 4 under both; Statistical distance is $SD^2 = 4$ under A and $SD^2 = 16$ under B, showing points are statistically closer under larger variance", isCorrect: true },
      { text: "Euclidean distance is 16 under Distribution A and 4 under Distribution B; Statistical distance is identical under both distributions because sample variance cancels out completely", isCorrect: false },
      { text: "Both Euclidean and Statistical distances equal 4 under both distributions, because distance is a rigid metric invariant to variance shifts across standard normal coordinates", isCorrect: false },
      { text: "Statistical distance is undefined under Distribution A because the mean is zero, whereas Euclidean distance equals the difference of squares across coordinate points", isCorrect: false },
      { text: "Points are statistically further apart under Distribution A because larger variance expands the metric space: $SD^2 = 64$ under A vs $SD^2 = 4$ under B in standardized space", isCorrect: false },
      { text: "Statistical distance is zero under both distributions because points $-2$ and $+2$ are symmetrically positioned around the central distribution origin in univariate models", isCorrect: false }
    ]
  },
  // Q10 (Bivariate Mahalanobis MD^2 calculation)
  {
    order: 10,
    id: "q_l2_10",
    targetLetter: "c",
    options: [
      { text: "$MD^2 = 41.00$, calculated as the unweighted sum of squared coordinate differences: $\\Delta x_1^2 + \\Delta x_2^2 = 25 + 16 = 41.00$", isCorrect: false },
      { text: "$MD^2 = 5.56$, calculated by dividing squared coordinate differences by standard deviations without covariance correction", isCorrect: false },
      { text: "$MD^2 = 1.11$, calculated via inverse covariance weighting, showing correlation significantly contracts statistical distance", isCorrect: true },
      { text: "$MD^2 = 0.00$, because coordinate differences $\\Delta x_1 = 5$ and $\\Delta x_2 = 4$ match variable standard deviations exactly", isCorrect: false },
      { text: "$MD^2 = 10.00$, calculated by multiplying Euclidean distance by the correlation coefficient: $MD^2 = r \\times (\\Delta x_1^2 + \\Delta x_2^2)$", isCorrect: false },
      { text: "$MD^2 = 2.00$, representing the standard two-variable degrees of freedom under bivariate normality assumptions", isCorrect: false }
    ]
  },
  // Q11 (Correlation from vector dot product)
  {
    order: 11,
    id: "q_l2_11",
    targetLetter: "e",
    options: [
      { text: "$r_{12} = 136.375 / (262.92 + 131.67) = 0.346$, dividing the dot product by the arithmetic sum of squared vector lengths", isCorrect: false },
      { text: "$r_{12} = \\sqrt{136.375} / 11 = 1.061$, taking the square root of the cross-product divided by sample degrees of freedom", isCorrect: false },
      { text: "$r_{12} = (262.92 - 131.67) / 136.375 = 0.963$, evaluating the normalized difference between individual variable lengths", isCorrect: false },
      { text: "$r_{12} = 136.375 / (11 \\times 12) = 1.033$, standardizing the raw dot product by sample size and degrees of freedom", isCorrect: false },
      { text: "$r_{12} = 136.375 / \\sqrt{262.92 \\times 131.67} \\approx 0.733$, dividing dot product by the product of vector norms", isCorrect: true },
      { text: "$r_{12} = 0.538$, taking the ratio of smaller vector length to larger vector length: $131.67 / 262.92 = 0.501$ with rounding", isCorrect: false }
    ]
  },
  // Q12 (Centering vs Standardization geometry)
  {
    order: 12,
    id: "q_l2_12",
    targetLetter: "f",
    options: [
      { text: "Centering projects data onto an $n-1$ subspace, while standardization projects data into a 1-dimensional subspace across variable space", isCorrect: false },
      { text: "Centering alters the correlation matrix, whereas standardizing leaves the covariance matrix completely unchanged throughout projections", isCorrect: false },
      { text: "Centering violates the metric triangle inequality, while standardization restores metric axioms across heterogeneous observation groups", isCorrect: false },
      { text: "Centering is only permissible for ratio scales, while standardizing is only mathematically valid for nominal rankings and categorical data", isCorrect: false },
      { text: "There is zero geometric difference; both operations preserve identical Euclidean distances and shape configurations in multivariate space", isCorrect: false },
      { text: "Centering is a rigid translation that preserves all Euclidean distances, whereas standardizing differentially scales axes", isCorrect: true }
    ]
  }
];
