// Enhanced balanced options for Level 3 (ch2-pca-geometry) and Level 4 (ch2-pca-analytical)
// Target: All 6 choices have comparable length, equal grammatical weight, and plausible theoretical rationale.
// The correct answer is NOT the longest; distractors frequently match or exceed it in length.

export const level3Balanced = [
  // Q1 (Primary geometric objective PC1)
  {
    order: 1,
    id: "q_l3_1",
    targetLetter: "c",
    options: [
      { text: "To minimize the sum of absolute deviations from the multidimensional median vector across all observations", isCorrect: false },
      { text: "To force all variable loadings to equal positive unity (+1.0), equalizing the variance contributions across axes", isCorrect: false },
      { text: "To maximize the variance of the projected observation scores along the newly defined candidate coordinate axis", isCorrect: true },
      { text: "To ensure the new axis passes through the highest single data point to eliminate asymmetric sample skewness", isCorrect: false },
      { text: "To minimize the distance between the coordinate origin and the multivariate centroid of the raw observations", isCorrect: false },
      { text: "To make the sum of observation scores equal to zero for each individual variable independently in observation space", isCorrect: false }
    ]
  },
  // Q2 (Constraint on directional coefficients)
  {
    order: 2,
    id: "q_l3_2",
    targetLetter: "e",
    options: [
      { text: "Their sum must equal zero: $\\cos\\theta + \\sin\\theta = 0$, ensuring directional balance around the 45-degree ray", isCorrect: false },
      { text: "Each directional coefficient must be strictly greater than 1.0, amplifying weak observation projections along the axis", isCorrect: false },
      { text: "Their product must equal the correlation coefficient: $\\cos\\theta \\sin\\theta = r_{12}$, preserving joint association", isCorrect: false },
      { text: "The angle $\\theta$ must always be fixed at $45^\\circ$, splitting explained variance symmetrically between variables", isCorrect: false },
      { text: "They must have unit length (norm of 1): $\\cos^2(\\theta) + \\sin^2(\\theta) = 1$, preventing artificial scale stretching", isCorrect: true },
      { text: "They must equal the sample standard deviations of the original variables, weighting coordinates by raw dispersion", isCorrect: false }
    ]
  },
  // Q3 (Conservation of variance sum)
  {
    order: 3,
    id: "q_l3_3",
    targetLetter: "a",
    options: [
      { text: "Exactly $23.091 + 21.091 = 44.182$, because rigid coordinate rotations preserve total variance completely", isCorrect: true },
      { text: "Always 1.000, because principal component transformation standardizes total system variance to unity", isCorrect: false },
      { text: "Always 2.000, because each extracted principal component contributes exactly 1.0 unit of variance by definition", isCorrect: false },
      { text: "Exactly $23.091 \\times 21.091 = 487.01$, representing the geometric product of orthogonal component dispersions", isCorrect: false },
      { text: "Zero, because principal component scores are mean-corrected and sum to zero across all observations", isCorrect: false },
      { text: "Half of the original variance: $44.182 / 2 = 22.091$, reflecting dimensional projection losses along axes", isCorrect: false }
    ]
  },
  // Q4 (Covariance between PC1 and PC2)
  {
    order: 4,
    id: "q_l3_4",
    targetLetter: "f",
    options: [
      { text: "Equal to the original sample covariance $S_{12}$, because coordinate rotation preserves bivariate covariation", isCorrect: false },
      { text: "Equal to positive unity ($+1.0$), reflecting maximum standardized linear association between principal components", isCorrect: false },
      { text: "Equal to the ratio of their eigenvalues $\\lambda_1 / \\lambda_2$, scaling joint covariation by relative importance", isCorrect: false },
      { text: "Negative unity ($-1.0$), because orthogonal complement axes point in opposing perpendicular directions", isCorrect: false },
      { text: "Equal to the Pearson correlation $r_{12}$, because components preserve the normalized bivariate association", isCorrect: false },
      { text: "Identically zero ($\\text{Cov}(PC_1, PC_2) = 0$), because principal axes are constructed to be strictly orthogonal", isCorrect: true }
    ]
  },
  // Q5 (When dimensionality reduction occurs)
  {
    order: 5,
    id: "q_l3_5",
    targetLetter: "b",
    options: [
      { text: "The moment data are centered by subtracting variable sample means, which shifts the cloud to the coordinate origin", isCorrect: false },
      { text: "When only a subset $k < p$ of the leading principal components is retained, and the remaining $p - k$ components are discarded", isCorrect: true },
      { text: "When all $p$ principal components are computed and retained, because the new axes represent uncorrelated linear scores", isCorrect: false },
      { text: "When the covariance matrix is converted into a correlation matrix, which standardizes all variable diagonal elements to 1.0", isCorrect: false },
      { text: "When the sample size $n$ is reduced by eliminating bivariate outliers that deviate from the primary projection ray", isCorrect: false },
      { text: "When the eigenvalues are normalized to sum to 100%, converting raw component variances into relative percentages", isCorrect: false }
    ]
  },
  // Q6 (Customer A score on PC1)
  {
    order: 6,
    id: "q_l3_6",
    targetLetter: "d",
    options: [
      { text: "$t_{A1} = 13.000$, calculated as the simple unweighted arithmetic sum of centered coordinates: $8 + 5 = 13.000$", isCorrect: false },
      { text: "$t_{A1} = 0.728238 \\times 8 - 0.685324 \\times 5 = 2.400$, subtracting the second component projection from the first", isCorrect: false },
      { text: "$t_{A1} = \\sqrt{8^2 + 5^2} = 9.434$, evaluating the Euclidean distance of Customer A from the origin in variable space", isCorrect: false },
      { text: "$t_{A1} = 0.728238 \\times 8 + 0.685324 \\times 5 = 9.253$, projecting centered coordinates onto the leading eigenvector", isCorrect: true },
      { text: "$t_{A1} = 38.576$, representing the maximum eigenvalue of the system rather than an individual observation score", isCorrect: false },
      { text: "$t_{A1} = 1.490$, standardizing Customer A coordinates by the square root of the leading system eigenvalue", isCorrect: false }
    ]
  },
  // Q7 (Reversing axis direction)
  {
    order: 7,
    id: "q_l3_7",
    targetLetter: "b",
    options: [
      { text: "Because PCA eigenvalues are constrained to be negative whenever coordinate reflections are applied to sample data", isCorrect: false },
      { text: "Because an axis and its negative describe the exact same geometric line; multiplying by $-1$ merely reflects coordinates", isCorrect: true },
      { text: "Because statistical software automatically converts all negative scores to positive absolute values during extraction", isCorrect: false },
      { text: "Because component weights must always be positive numbers to satisfy non-negativity constraints in Lagrange multipliers", isCorrect: false },
      { text: "Because reversing an axis converts covariance into correlation, standardizing the metric distances between observations", isCorrect: false },
      { text: "Because observations are automatically reflected across the vertical centroid line, nullifying the rotation transformation", isCorrect: false }
    ]
  },
  // Q8 (Max non-zero eigenvalues min(p, n-1))
  {
    order: 8,
    id: "q_l3_8",
    targetLetter: "d",
    options: [
      { text: "Always exactly $p$, because a dataset with $p$ variables always possesses $p$ linearly independent orthogonal axes", isCorrect: false },
      { text: "Always exactly $n$, because each observation in the sample contributes one full dimension of variance to the space", isCorrect: false },
      { text: "At most $p \\times (n - 1)$, because degrees of freedom multiply across all variables in the multivariate data matrix", isCorrect: false },
      { text: "At most $\\min(p, n - 1)$, because centered data cannot span more dimensions than available observation degrees of freedom", isCorrect: true },
      { text: "Always equal to the number of nonmetric scales, because qualitative classifications govern the rank of the covariance matrix", isCorrect: false },
      { text: "At most $(p - 1) / 2$, because symmetry constraints eliminate half of the off-diagonal elements in the covariance matrix", isCorrect: false }
    ]
  },
  // Q9 (Projected variance at orthogonal angle)
  {
    order: 9,
    id: "q_l3_9",
    targetLetter: "a",
    options: [
      { text: "Exactly $5.606$, corresponding to the variance of $PC_2$, because the orthogonal complement captures the remaining variance", isCorrect: true },
      { text: "Zero ($0.000$), because rotating an axis by 90 degrees eliminates all projected coordinate variance from the data cloud", isCorrect: false },
      { text: "Negative $38.576$, because adding 90 degrees inverts the sign of the leading eigenvalue across the coordinate plane", isCorrect: false },
      { text: "Exactly $44.182$, because any orthogonal rotation angle preserves the total combined variance of the bivariate system", isCorrect: false },
      { text: "Exactly $21.091$, corresponding to the unrotated variance of the second original variable before principal components", isCorrect: false },
      { text: "Exactly $19.288$, representing the midpoint between the minimum and maximum variances across all candidate angles", isCorrect: false }
    ]
  },
  // Q10 (Total reconstruction error discarding PC2)
  {
    order: 10,
    id: "q_l3_10",
    targetLetter: "e",
    options: [
      { text: "Exactly $5.606$, representing the per-observation variance of the discarded component without sample size weighting", isCorrect: false },
      { text: "Exactly $12 \\times 38.576 = 462.91$, multiplying the retained eigenvalue by total sample size across observations", isCorrect: false },
      { text: "Exactly $44.182 / 12 = 3.682$, averaging total system variance across all customer observations in the sample", isCorrect: false },
      { text: "Zero, because orthogonal projections preserve complete Euclidean information and eliminate reconstruction discrepancies", isCorrect: false },
      { text: "$(n - 1) \\times \\lambda_2 = 11 \\times 5.606005 = 61.666$, representing total sum of squared residuals along discarded dimensions", isCorrect: true },
      { text: "Exactly $254.000 - 232.000 = 22.000$, subtracting the centered trace from the raw uncorrected observation sums", isCorrect: false }
    ]
  },
  // Q11 (Proximity in reduced space vs original space)
  {
    order: 11,
    id: "q_l3_11",
    targetLetter: "f",
    options: [
      { text: "Customer D is an outlier that was automatically adjusted by the projection algorithm to match Customer E coordinates", isCorrect: false },
      { text: "PCA inverted their income scales because Customer Lifetime Value is mathematically bounded between 0 and 100 in data", isCorrect: false },
      { text: "The correlation between Income and CLV was negative for those two specific individuals while positive across the rest", isCorrect: false },
      { text: "Their Mahalanobis distance is zero because both customers share identical coordinate projections along the centroid ray", isCorrect: false },
      { text: "The cosine of their angle in individual space equals 1.0, forcing their projected coordinates to coalesce on $PC_1$", isCorrect: false },
      { text: "They differ substantially along the discarded $PC_2$ axis ($t_{D2} = -5.008$ vs $t_{E2} = 1.085$), which dimensionality reduction ignored", isCorrect: true }
    ]
  },
  // Q12 (Maximum non-zero components for centered data - Slide 20)
  {
    order: 12,
    id: "q_l3_12",
    targetLetter: "c",
    options: [
      { text: "Always exactly $p$ components regardless of sample size $n$, because each original variable generates one non-zero orthogonal axis", isCorrect: false },
      { text: "Always exactly $p - 1$ components, because one dimension is automatically eliminated by the orthogonal rotation algorithm", isCorrect: false },
      { text: "At most $\\min(p, n - 1)$ components, because mean-centering removes one degree of freedom, restricting data to at most $n - 1$ dimensions", isCorrect: true },
      { text: "Exactly $n$ components, because the number of possible principal directions corresponds to the number of sample observations", isCorrect: false },
      { text: "At most $p / 2$ components, because orthogonal complementary pairs cancel out each other's variances", isCorrect: false },
      { text: "Exactly $\\min(p, n)$ components, because raw observation ranks allow full dimensionality without subtracting degrees of freedom", isCorrect: false }
    ]
  }
];

export const level4Balanced = [
  // Q1 (Largest eigenvalue = variance of PC1)
  {
    order: 1,
    id: "q_l4_1",
    targetLetter: "b",
    options: [
      { text: "$\\lambda_1$ is the sample mean of $PC_1$, locating the center of gravity along the first principal component axis", isCorrect: false },
      { text: "$\\lambda_1$ is the sample variance of $PC_1$, quantifying the maximum variance captured along the leading principal axis", isCorrect: true },
      { text: "$\\lambda_1$ is the sample size divided by degrees of freedom: $n / (n - 1)$, correcting for sample degree-of-freedom scaling", isCorrect: false },
      { text: "$\\lambda_1$ is the correlation between $X_1$ and $X_2$, measuring the normalized linear association between raw variables", isCorrect: false },
      { text: "$\\lambda_1$ is the inverse of the determinant of covariance matrix $S$, measuring generalized system precision", isCorrect: false },
      { text: "$\\lambda_1$ is the standard deviation of the error term, measuring unexplained residual noise in the reconstruction", isCorrect: false }
    ]
  },
  // Q2 (Characteristic equation det(A - lambda I) = 0)
  {
    order: 2,
    id: "q_l4_2",
    targetLetter: "d",
    options: [
      { text: "$\\text{tr}(A - \\lambda I) = 0$, setting the sum of diagonal matrix elements equal to zero across all dimensions", isCorrect: false },
      { text: "$A^{-1} - \\lambda I = 0$, requiring matrix inversion of the raw covariance matrix to isolate spectral components", isCorrect: false },
      { text: "$\\sum_{i=1}^p (A_{ii} - \\lambda) = 1$, constraining the total trace deficit to equal positive unity across variables", isCorrect: false },
      { text: "$\\det(A - \\lambda I) = 0$, ensuring the linear system has non-trivial, non-zero eigenvector solutions", isCorrect: true },
      { text: "$\\lambda = A w$, equating scalar eigenvalues directly to the matrix-vector multiplication product without roots", isCorrect: false },
      { text: "$\\det(A) + \\det(\\lambda I) = 0$, applying additive determinant properties to solve for matrix characteristic values", isCorrect: false }
    ]
  },
  // Q3 (Sum of eigenvalues in Correlation PCA = p)
  {
    order: 3,
    id: "q_l4_3",
    targetLetter: "e",
    options: [
      { text: "Always 1.0, because correlation standardization normalizes the total cumulative variance of all components to unity", isCorrect: false },
      { text: "Equal to $n - 1$, because total system variance in Correlation PCA is governed by sample degrees of freedom", isCorrect: false },
      { text: "Equal to the determinant of $R$, measuring the generalized correlation volume spanned by standardized variables", isCorrect: false },
      { text: "Equal to the sum of raw sample variances, preserving physical measurement units in the trace of the correlation matrix", isCorrect: false },
      { text: "Always equal to $p$, because each standardized variable has variance 1.0 and $\\text{tr}(R) = p$", isCorrect: true },
      { text: "Always 100.0, because eigenvalues are automatically scaled to represent percentages of explained variation", isCorrect: false }
    ]
  },
  // Q4 (Why Correlation PCA preferred for surveys)
  {
    order: 4,
    id: "q_l4_4",
    targetLetter: "a",
    options: [
      { text: "Because Correlation PCA standardizes variables, preventing items with arbitrary numerical scales from dominating components", isCorrect: true },
      { text: "Because Covariance PCA cannot handle sample sizes greater than $n = 100$ without encountering numerical singularity errors", isCorrect: false },
      { text: "Because Correlation PCA produces correlated components that capture oblique non-linear interactions across survey questions", isCorrect: false },
      { text: "Because Covariance PCA always produces negative eigenvalues that invalidate variance decomposition in Likert survey data", isCorrect: false },
      { text: "Because Correlation PCA eliminates the need to compute eigenvectors, reducing computational overhead in statistical software", isCorrect: false },
      { text: "Because Likert survey scales cannot be centered to zero mean, prohibiting the derivation of sample covariance matrices", isCorrect: false }
    ]
  },
  // Q5 (Scale change kg to g effect on PCA)
  {
    order: 5,
    id: "q_l4_5",
    targetLetter: "c",
    options: [
      { text: "Variance increases by 1,000; Covariance PCA is unaffected because scale changes leave eigenvector directions unchanged", isCorrect: false },
      { text: "Variance remains completely unchanged because measurement units are arbitrary and cancel out during spectral decomposition", isCorrect: false },
      { text: "Variance increases by $1,000^2 = 1,000,000$; Covariance PCA is heavily distorted, whereas Correlation PCA is completely invariant", isCorrect: true },
      { text: "Both Covariance PCA and Correlation PCA scale their eigenvalues by 1,000, leaving explained variance percentages identical", isCorrect: false },
      { text: "The correlation between this variable and all other variables drops to zero, destroying bivariate associations in the model", isCorrect: false },
      { text: "The trace of the correlation matrix increases by 1,000, expanding the sum of standardized eigenvalues across the system", isCorrect: false }
    ]
  },
  // Q6 (Why Lagrange constraint w'w = 1)
  {
    order: 6,
    id: "q_l4_6",
    targetLetter: "f",
    options: [
      { text: "To ensure that all principal component scores have positive sample means and conform to normal distribution bounds", isCorrect: false },
      { text: "To guarantee that all extracted eigenvalues are constrained to equal 1.0, standardizing variance across dimensions", isCorrect: false },
      { text: "To ensure that the covariance matrix $S$ remains non-singular and invertible during iterative numerical optimization", isCorrect: false },
      { text: "To eliminate negative correlation coefficients between variables, preserving positive manifold geometry in data", isCorrect: false },
      { text: "To convert continuous metric variables into standardized nonmetric categories, enabling non-parametric projections", isCorrect: false },
      { text: "To fix the scale of the weights; without it, multiplying weights by any constant $c > 1$ would inflate variance to infinity", isCorrect: true }
    ]
  },
  // Q7 (3x3 covariance variance percent)
  {
    order: 7,
    id: "q_l4_7",
    targetLetter: "b",
    options: [
      { text: "$60.0\\%$, calculated by taking the ratio of the first eigenvalue to total trace: $6.0 / 10.0 = 0.600$", isCorrect: false },
      { text: "$85.0\\%$, calculated as the cumulative percentage explained by the first two components: $(6.0 + 2.5) / 10.0 = 0.850$", isCorrect: true },
      { text: "$75.0\\%$, calculated as the ratio of the first two eigenvalues to the sample degrees of freedom in the system", isCorrect: false },
      { text: "$90.0\\%$, calculated by weighting the leading eigenvalues against the determinant of the covariance matrix", isCorrect: false },
      { text: "$25.0\\%$, representing the individual variance percentage contributed by the second principal component alone", isCorrect: false },
      { text: "$15.0\\%$, representing the residual variance discarded when omitting the third component: $1.5 / 10.0 = 0.150$", isCorrect: false }
    ]
  },
  // Q8 (When justifiable to use Covariance PCA)
  {
    order: 8,
    id: "q_l4_8",
    targetLetter: "d",
    options: [
      { text: "When variables are measured on nominal and ordinal scales, because covariance matrices preserve nonmetric rank properties", isCorrect: false },
      { text: "When the researcher wants all variables to have an equal influence regardless of their natural empirical dispersion", isCorrect: false },
      { text: "When the sample size $n$ is smaller than 20 observations, because correlation matrices require large asymptotic samples", isCorrect: false },
      { text: "When all variables are measured in identical physical units, and differences in actual variances carry vital domain information", isCorrect: true },
      { text: "When all pairwise correlations are zero, because Covariance PCA extracts orthogonal components without matrix roots", isCorrect: false },
      { text: "When the primary research objective is to perform oblique factor rotation to discover correlated latent constructs", isCorrect: false }
    ]
  },
  // Q9 (2x2 covariance second eigenvalue)
  {
    order: 9,
    id: "q_l4_9",
    targetLetter: "e",
    options: [
      { text: "$\\lambda_2 = 16.455$, corresponding to the off-diagonal sample covariance between the two variables in matrix $S$", isCorrect: false },
      { text: "$\\lambda_2 = 38.576$, representing the leading eigenvalue $\\lambda_1$ rather than the second orthogonal root", isCorrect: false },
      { text: "$\\lambda_2 = 2.000$, representing the trace of a standardized correlation matrix rather than the covariance eigenvalue", isCorrect: false },
      { text: "$\\lambda_2 = 21.091$, corresponding to the unrotated sample variance of the second original variable $X_2$", isCorrect: false },
      { text: "$\\lambda_2 = 5.606$, calculated as the smaller characteristic root of the quadratic characteristic polynomial", isCorrect: true },
      { text: "$\\lambda_2 = 0.746$, representing the ratio of the smaller eigenvalue to the larger eigenvalue in the system", isCorrect: false }
    ]
  },
  // Q10 (Two standardized variables correlation r eigenvalues)
  {
    order: 10,
    id: "q_l4_10",
    targetLetter: "a",
    options: [
      { text: "$\\lambda_1 = 1 + r = 1.60$ and $\\lambda_2 = 1 - r = 0.40$, summing to $p = 2$ and preserving total standardized variance", isCorrect: true },
      { text: "$\\lambda_1 = 1.00$ and $\\lambda_2 = 1.00$, because standardized variables always have unit eigenvalues under zero correlation", isCorrect: false },
      { text: "$\\lambda_1 = 1.20$ and $\\lambda_2 = 0.80$, splitting the correlation coefficient symmetrically across both components", isCorrect: false },
      { text: "$\\lambda_1 = 0.60$ and $\\lambda_2 = 0.40$, equating the leading eigenvalue directly to the Pearson correlation coefficient", isCorrect: false },
      { text: "$\\lambda_1 = 2.00$ and $\\lambda_2 = 0.00$, because any positive correlation collapses bivariate data into a single component", isCorrect: false },
      { text: "$\\lambda_1 = 1.36$ and $\\lambda_2 = 0.64$, taking the square of the correlation coefficient: $r^2 = 0.36$ as the root offset", isCorrect: false }
    ]
  },
  // Q11 (Orthogonal second eigenvector w2)
  {
    order: 11,
    id: "q_l4_11",
    targetLetter: "f",
    options: [
      { text: "$w_2 = (0.728238, 0.685324)^T$, matching the leading eigenvector weights exactly to preserve directional orientation", isCorrect: false },
      { text: "$w_2 = (1.000000, 0.000000)^T$, aligning the second component axis strictly with the horizontal coordinate abscissa", isCorrect: false },
      { text: "$w_2 = (0.500000, 0.500000)^T$, bisecting the quadrant at 45 degrees to split residual variation equally across variables", isCorrect: false },
      { text: "$w_2 = (-0.728238, -0.685324)^T$, reflecting the leading eigenvector through the origin without establishing orthogonality", isCorrect: false },
      { text: "$w_2 = (0.000000, 1.000000)^T$, aligning the second component axis strictly with the vertical coordinate ordinate", isCorrect: false },
      { text: "$w_2 = (-0.685324, 0.728238)^T$ or $(0.685324, -0.728238)^T$, satisfying the zero dot product orthogonality condition: $w_1 \\cdot w_2 = 0$", isCorrect: true }
    ]
  },
  // Q12 (Why solving for eigenvectors doesn't invert S - lambda I)
  {
    order: 12,
    id: "q_l4_12",
    targetLetter: "c",
    options: [
      { text: "Because eigenvalues are always equal to diagonal elements of $S$, eliminating the need to evaluate characteristic roots", isCorrect: false },
      { text: "Because matrix inversion is only mathematically possible for diagonal matrices that have zero off-diagonal covariances", isCorrect: false },
      { text: "Because $(S - \\lambda I)$ is deliberately singular ($\\det = 0$); an invertible matrix would yield only the trivial zero vector $w = 0$", isCorrect: true },
      { text: "Because PCA algorithms only utilize matrix trace operations and never evaluate determinants or characteristic roots", isCorrect: false },
      { text: "Because eigenvectors are derived using numerical finite difference approximations rather than analytical matrix algebra", isCorrect: false },
      { text: "Because sample covariance matrix $S$ is always constrained to be an identity matrix in multivariate dimension reduction", isCorrect: false }
    ]
  }
];
