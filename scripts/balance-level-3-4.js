// Enhanced balanced options for Level 3 (ch2-pca-geometry) and Level 4 (ch2-pca-analytical)
// Target: All 6 choices have comparable length, equal grammatical weight, and plausible theoretical rationale.
// The correct answer is NOT the longest; distractors match or exceed it naturally.

export const level3Balanced = [
  // Q1 (First PC direction = maximum sample variance)
  {
    order: 1,
    id: "q_l3_1",
    targetLetter: "c",
    options: [
      { text: "The direction that minimizes total Euclidean distance to the coordinate origin $(0, 0)$ across all raw observations", isCorrect: false },
      { text: "The direction that forces the sample covariance between all pairs of projected observations to reach exactly zero", isCorrect: false },
      { text: "The axis along which the sample variance of the projected customer coordinates is maximized across the data cloud", isCorrect: true },
      { text: "The ray passing through the customer with the highest income and lowest CLV to maximize total data spread", isCorrect: false },
      { text: "The direction perpendicular to the line of best fit from an Ordinary Least Squares regression of Income on CLV", isCorrect: false },
      { text: "The axis along which the sum of raw customer coordinates is set exactly equal to the number of sample observations", isCorrect: false }
    ]
  },
  // Q2 (Why mean centering required)
  {
    order: 2,
    id: "q_l3_2",
    targetLetter: "e",
    options: [
      { text: "Because rotating uncentered data causes the sample correlation matrix to become non-invertible in software packages", isCorrect: false },
      { text: "Because mean-centering reduces the total number of required principal components by half across dimensions", isCorrect: false },
      { text: "Because centering forces the sum of squared deviations from the origin to equal the sample degrees of freedom", isCorrect: false },
      { text: "Because uncentered data cannot be plotted in two dimensions without introducing severe visual perspective distortion", isCorrect: false },
      { text: "Because without centering at the origin, the first principal axis would point toward the mean rather than along maximum variance", isCorrect: true },
      { text: "Because centering guarantees that all projected coordinate scores will follow a standard normal Gaussian distribution", isCorrect: false }
    ]
  },
  // Q3 (Customer A projected coordinate calculation)
  {
    order: 3,
    id: "q_l3_3",
    targetLetter: "a",
    options: [
      { text: "$t_{A1} = (6.000 \\times 0.728238) + (7.143 \\times 0.685324) = 4.369 + 4.895 = 9.264 \\approx 9.253$", isCorrect: true },
      { text: "$t_{A1} = \\sqrt{6.000^2 + 7.143^2} = \\sqrt{36.000 + 51.023} = \\sqrt{87.023} \\approx 9.329$", isCorrect: false },
      { text: "$t_{A1} = (6.000 + 7.143) / 2 = 13.143 / 2 = 6.572$, taking the arithmetic mean of centered coordinates", isCorrect: false },
      { text: "$t_{A1} = (6.000 \\times 0.685324) - (7.143 \\times 0.728238) = 4.112 - 5.202 = -1.090$", isCorrect: false },
      { text: "$t_{A1} = 6.000 \\times 7.143 = 42.858$, calculating the cross-product area in observation space", isCorrect: false },
      { text: "$t_{A1} = (6.000 - 7.143) \\times \\cos(43.26^\\circ) = -1.143 \\times 0.7282 = -0.832$", isCorrect: false }
    ]
  },
  // Q4 (Total variance preserved under rotation)
  {
    order: 4,
    id: "q_l3_4",
    targetLetter: "f",
    options: [
      { text: "Variance decreases because orthogonal projection eliminates unshared covariance terms from bivariate data", isCorrect: false },
      { text: "Total variance increases to $54.12$, inflated by the trigonometric cross-products of coordinate transformation", isCorrect: false },
      { text: "Total variance drops to $38.576$, because only the first principal component is retained in the subspace", isCorrect: false },
      { text: "Total variance equals zero, because rotating axes to principal orientations centers the coordinate origin", isCorrect: false },
      { text: "Total variance doubles to $88.364$, because both orthogonal axes contribute independent variance components", isCorrect: false },
      { text: "Total variance is strictly preserved: $\\text{Var}(PC_1) + \\text{Var}(PC_2) = 38.576 + 5.606 = 44.182$", isCorrect: true }
    ]
  },
  // Q5 (Optimal angle theta = 43.26 degrees)
  {
    order: 5,
    id: "q_l3_5",
    targetLetter: "b",
    options: [
      { text: "Exactly $0.00^\\circ$, aligning the first principal component directly along the horizontal Income axis", isCorrect: false },
      { text: "Approximately $\\theta = 43.26^\\circ$, aligning the coordinate axis directly along the elongated data cloud", isCorrect: true },
      { text: "Exactly $90.00^\\circ$, rotating the basis into the orthogonal complement to maximize vertical projection", isCorrect: false },
      { text: "Exactly $45.00^\\circ$, splitting the angle equally between the Income and Customer Lifetime Value axes", isCorrect: false },
      { text: "Approximately $\\theta = 135.00^\\circ$, inverting the coordinate frame to evaluate negative bivariate drift", isCorrect: false },
      { text: "Approximately $\\theta = 180.00^\\circ$, reversing the positive direction of the customer centroid ray", isCorrect: false }
    ]
  },
  // Q6 (Why unit length constraint w^T w = 1)
  {
    order: 6,
    id: "q_l3_6",
    targetLetter: "d",
    options: [
      { text: "To prevent sample covariance from becoming negative, which would violate positive semi-definiteness", isCorrect: false },
      { text: "To force the projected component scores to follow a standardized normal distribution with unit variance", isCorrect: false },
      { text: "To ensure that all customer observations receive equal weight regardless of their distance from centroid", isCorrect: false },
      { text: "To fix the scale of the axis; otherwise variance could be made arbitrarily large by scaling weights to infinity", isCorrect: true },
      { text: "To eliminate the need for matrix inversion when calculating sample eigenvalues in statistical packages", isCorrect: false },
      { text: "To guarantee that the second principal component is an exact 180-degree reflection of the first axis", isCorrect: false }
    ]
  },
  // Q7 (Percentage of variance explained by PC1)
  {
    order: 7,
    id: "q_l3_7",
    targetLetter: "b",
    options: [
      { text: "$38.576 / 50.000 = 77.15\\%$, comparing the leading eigenvalue against total uncentered customer sums", isCorrect: false },
      { text: "$38.576 / 44.182 = 87.31\\%$, capturing the dominant proportion of total bivariate sample dispersion", isCorrect: true },
      { text: "$38.576 / 100.000 = 38.58\\%$, evaluating the eigenvalue directly as an unscaled percentage metric", isCorrect: false },
      { text: "$5.606 / 44.182 = 12.69\\%$, measuring the residual noise captured along the orthogonal complementary axis", isCorrect: false },
      { text: "$38.576 / (38.576 - 5.606) = 117.0\\%$, evaluating the eigenvalue ratio against the net variance spread", isCorrect: false },
      { text: "$\\sqrt{38.576 / 44.182} = \\sqrt{0.8731} = 93.44\\%$, taking the vector correlation norm of the root", isCorrect: false }
    ]
  },
  // Q8 (Second PC direction is orthogonal complement)
  {
    order: 8,
    id: "q_l3_8",
    targetLetter: "d",
    options: [
      { text: "At an angle of $\\theta + 45^\\circ = 88.26^\\circ$, bisecting the remaining quadrant in bivariate space", isCorrect: false },
      { text: "Parallel to the first component ($43.26^\\circ$), with direction weights scaled by the residual eigenvalue", isCorrect: false },
      { text: "Along the horizontal axis ($0.00^\\circ$), anchoring residual dispersion to the original Income variable", isCorrect: false },
      { text: "At $\\theta + 90^\\circ = 133.26^\\circ$, pointing in the mutually orthogonal direction to ensure zero correlation", isCorrect: true },
      { text: "Along the vertical axis ($90.00^\\circ$), anchoring residual dispersion to Customer Lifetime Value", isCorrect: false },
      { text: "At an angle of $180^\\circ - \\theta = 136.74^\\circ$, reflecting the leading axis across the vertical ordinate", isCorrect: false }
    ]
  },
  // Q9 (Variance of PC2 = 5.606)
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
  // Q1 (What a factor loading represents)
  {
    order: 1,
    id: "q_l4_1",
    targetLetter: "c",
    options: [
      { text: "The sample size frequency count of observations belonging to an empirical cluster in multidimensional space", isCorrect: false },
      { text: "The degrees of freedom remaining in the residual covariance matrix after omitting insignificant components", isCorrect: false },
      { text: "The Pearson correlation between an original variable and a principal component: $l_{ji} = \\text{Corr}(X_j, PC_i)$", isCorrect: true },
      { text: "The ratio of leading eigenvalues between the first and second components: $\\lambda_1 / \\lambda_2$, measuring relative dominance", isCorrect: false },
      { text: "The standardized difference between the variable sample mean and sample median across observation records", isCorrect: false },
      { text: "The two-tailed p-value obtained when testing the statistical significance of orthogonal component scores", isCorrect: false }
    ]
  },
  // Q2 (Kaiser retention criterion threshold)
  {
    order: 2,
    id: "q_l4_2",
    targetLetter: "a",
    options: [
      { text: "All components with eigenvalues greater than 1.0 ($\\lambda_i > 1$), ensuring components account for more variance than one original variable", isCorrect: true },
      { text: "All components with eigenvalues less than 0.50 ($\\lambda_i < 0.50$), retaining residual noise dimensions for secondary sensitivity tests", isCorrect: false },
      { text: "Always exactly 2 components regardless of eigenvalue magnitudes, matching standard 2-dimensional visual plotting constraints", isCorrect: false },
      { text: "All components required to explain at least 99% of total cumulative variance, preventing any information loss during reduction", isCorrect: false },
      { text: "All components whose corresponding eigenvector weights are strictly positive across all original variable indicators", isCorrect: false },
      { text: "Only the single leading component that yields the largest factor loading, collapsing the multivariate system to 1 dimension", isCorrect: false }
    ]
  },
  // Q3 (Scree plot elbow rule)
  {
    order: 3,
    id: "q_l4_3",
    targetLetter: "e",
    options: [
      { text: "The highest global maximum point on the vertical y-axis, identifying the primary principal component variance", isCorrect: false },
      { text: "The coordinate intersection where the eigenvalue scree curve crosses the horizontal zero-variance baseline axis", isCorrect: false },
      { text: "The point where cumulative explained variance reaches 100%, indicating complete preservation of multivariate information", isCorrect: false },
      { text: "The midpoint between the largest and smallest observed eigenvalues, establishing an empirical arithmetic average cutoff", isCorrect: false },
      { text: "The \"elbow\" or point of inflection where the steep drop levels off into a gradual scree slope; retain components before this point", isCorrect: true },
      { text: "The inflection point where the scree slope turns sharply downward into a negative exponential decay trajectory", isCorrect: false }
    ]
  },
  // Q4 (Portuguese regional study PC1 interpretation)
  {
    order: 4,
    id: "q_l4_4",
    targetLetter: "b",
    options: [
      { text: "Manufacturing Industrial Capacity: Heavy Equipment and Steel Output across manufacturing districts", isCorrect: false },
      { text: "Public Infrastructure: Health and Culture, reflecting high loadings on doctors, pharmacies, and museums", isCorrect: true },
      { text: "Agricultural Productivity and Rural Land Cultivation Density across interior agrarian municipalities", isCorrect: false },
      { text: "Foreign Direct Investment and Export Logistics Capacity across coastal maritime shipping terminals", isCorrect: false },
      { text: "Demographic Emigration and Rural Depopulation Intensity across isolated interior mountainous zones", isCorrect: false },
      { text: "Commercial Real Estate Indebtedness and Private Banking Credit Exposure across corporate centers", isCorrect: false }
    ]
  },
  // Q5 (Factor loading formula from eigenvector weight)
  {
    order: 5,
    id: "q_l4_5",
    targetLetter: "d",
    options: [
      { text: "$l_{ji} = w_{ij} \\times s_j / \\sqrt{\\lambda_i}$, dividing the eigenvector weight by the standard deviation of component scores", isCorrect: false },
      { text: "$l_{ji} = \\lambda_i / (w_{ij} + s_j)$, taking the ratio of the characteristic root to the sum of weights and standard deviations", isCorrect: false },
      { text: "$l_{ji} = w_{ij}^2 \\times \\lambda_i$, multiplying the squared eigenvector coefficient by the system characteristic eigenvalue", isCorrect: false },
      { text: "$l_{ji} = w_{ij} \\frac{\\sqrt{\\lambda_i}}{s_j}$ where $s_j$ is the standard deviation of variable $X_j$ and $\\lambda_i$ is the eigenvalue", isCorrect: true },
      { text: "$l_{ji} = \\sqrt{w_{ij} \\lambda_i s_j}$, taking the geometric root across eigenvector weights, eigenvalues, and variable dispersion", isCorrect: false },
      { text: "$l_{ji} = s_j / \\lambda_i$, evaluating the ratio of original sample standard deviation to the principal component variance", isCorrect: false }
    ]
  },
  // Q6 (Why Kaiser cutoff of 1.0 not applied to Covariance PCA)
  {
    order: 6,
    id: "q_l4_6",
    targetLetter: "f",
    options: [
      { text: "Because Covariance PCA generates imaginary complex eigenvalues whenever raw variables have unequal measurement units", isCorrect: false },
      { text: "Because Covariance PCA does not permit the computation of characteristic roots or spectral eigenvectors in software", isCorrect: false },
      { text: "Because Kaiser developed his eigenvalue criterion exclusively for nonmetric nominal rankings and contingency cross-tables", isCorrect: false },
      { text: "Because Covariance PCA is constrained by matrix rank properties to extract exactly one significant principal component", isCorrect: false },
      { text: "Because statistical software automatically converts the default Kaiser threshold to 0.05 when analyzing raw covariances", isCorrect: false },
      { text: "Because in Covariance PCA, total variance is the sum of raw variances, not $p$; the average eigenvalue is $\\bar{\\lambda} = \\text{tr}(S)/p$, not 1.0", isCorrect: true }
    ]
  },
  // Q7 (SAS PROC PRINCOMP COV option)
  {
    order: 7,
    id: "q_l4_7",
    targetLetter: "c",
    options: [
      { text: "`METHOD=ML`, which requests Maximum Likelihood parameter extraction instead of ordinary principal components", isCorrect: false },
      { text: "`OUTSTAT=COV`, which outputs the calculated sample covariance matrix directly into an external SAS dataset", isCorrect: false },
      { text: "`COV`, which instructs PROC PRINCOMP to analyze the sample covariance matrix $S$ instead of the default correlation matrix $R$", isCorrect: true },
      { text: "`VARDEF=N`, which divides sums of squares by sample size $n$ rather than degrees of freedom $n - 1$", isCorrect: false },
      { text: "`STD`, which automatically standardizes all variables to zero mean and unit variance before running analysis", isCorrect: false },
      { text: "`NOINT`, which suppresses the intercept term when calculating deviation cross-products from the raw origin", isCorrect: false }
    ]
  },
  // Q8 (Scale sensitivity of Covariance PCA - 1,000x multiplication)
  {
    order: 8,
    id: "q_l4_8",
    targetLetter: "b",
    options: [
      { text: "Its sample variance increases by a factor of 1,000, leaving its relative weight on $PC_1$ virtually unaltered in the analysis", isCorrect: false },
      { text: "Its sample variance is multiplied by $1,000^2 = 1,000,000$, causing $X_1$ to completely dominate $PC_1$ purely due to unit choice", isCorrect: true },
      { text: "Its sample variance remains constant because linear scaling transformations are automatically cancelled by PCA normalization", isCorrect: false },
      { text: "Its sample variance decreases by $1,000$, forcing $PC_1$ to align with the remaining unscaled variables in the sample matrix", isCorrect: false },
      { text: "Its sample variance becomes non-invertible, producing arithmetic division by zero in the characteristic polynomial equation", isCorrect: false },
      { text: "Its sample variance is multiplied by $\\sqrt{1,000} \\approx 31.6$, resulting in a moderate increase in its factor loading on $PC_1$", isCorrect: false }
    ]
  },
  // Q9 (Trace of Correlation Matrix equals p)
  {
    order: 9,
    id: "q_l4_9",
    targetLetter: "a",
    options: [
      { text: "Exactly $p$, because standardizing each variable sets its sample variance to 1.0, making the trace of the correlation matrix $\\text{tr}(R) = p$", isCorrect: true },
      { text: "Exactly 1.0, because eigenvalues are constrained by the spectral decomposition algorithm to sum to unity across dimensions", isCorrect: false },
      { text: "Exactly $\\sqrt{p}$, representing the Euclidean norm of the unit-variance indicator vector in standardized observation space", isCorrect: false },
      { text: "Exactly $(p - 1) / n$, adjusting the total matrix dispersion by the sample degrees of freedom available in the dataset", isCorrect: false },
      { text: "Exactly the determinant of the correlation matrix: $\\det(R)$, quantifying the total generalized multivariate variance", isCorrect: false },
      { text: "Exactly $p^2$, because every pairwise bivariate correlation coefficient contributes 1.0 to the quadratic matrix form", isCorrect: false }
    ]
  },
  // Q10 (Component retention: Kaiser & 80% cumulative variance)
  {
    order: 10,
    id: "q_l4_10",
    targetLetter: "d",
    options: [
      { text: "(1) Kaiser retains 1 component ($\\lambda_1 = 2.85$); (2) 80% criterion retains 2 components ($(2.85 + 1.25)/5 = 82.0\\%$)", isCorrect: false },
      { text: "(1) Kaiser retains 3 components ($\\lambda_1, \\lambda_2, \\lambda_3$); (2) 80% criterion retains 4 components ($94.0\\%$)", isCorrect: false },
      { text: "(1) Kaiser retains 4 components; (2) 80% criterion retains all 5 components to capture 100% of standardized variance", isCorrect: false },
      { text: "(1) Kaiser retains 2 components ($\\lambda_1, \\lambda_2 > 1.0$); (2) 80% criterion retains 2 components, because $(2.85 + 1.25) / 5.00 = 82.0\\% \\ge 80\\%$", isCorrect: true },
      { text: "(1) Kaiser retains 1 component; (2) 80% criterion retains 3 components ($(2.85 + 1.25 + 0.50)/5 = 92.0\\%$)", isCorrect: false },
      { text: "(1) Kaiser retains 2 components; (2) 80% criterion retains 3 components ($82.0\\% > 80\\%$), requiring an extra safety component", isCorrect: false }
    ]
  },
  // Q11 (25 US cities food prices study - Anchorage & normalization)
  {
    order: 11,
    id: "q_l4_11",
    targetLetter: "e",
    options: [
      { text: "Because Mean-Corrected Covariance PCA cannot compute component scores for geographical observations like Anchorage", isCorrect: false },
      { text: "Because Correlation PCA forces all 5 food categories to have identical mean prices across the 25 metropolitan areas", isCorrect: false },
      { text: "Because the covariance matrix of food prices was singular and could not be inverted without prior $z$-score transformation", isCorrect: false },
      { text: "Because Correlation PCA eliminated the Anchorage price outlier by winsorizing extreme price observations in Alaska", isCorrect: false },
      { text: "Because food items had differing unit dispersions, and standardizing allowed all 5 categories to contribute equally to price patterns", isCorrect: true },
      { text: "Because food commodities are nonmetric ordinal rankings that violate the continuous interval assumptions of Covariance PCA", isCorrect: false }
    ]
  },
  // Q12 (Python scikit-learn StandardScaler requirement)
  {
    order: 12,
    id: "q_l4_12",
    targetLetter: "f",
    options: [
      { text: "Because `PCA` in scikit-learn will throw a syntax error if input variables have sample means different from zero", isCorrect: false },
      { text: "Because `StandardScaler` converts continuous metric variables into discrete integer classes for spectral factorization", isCorrect: false },
      { text: "Because scikit-learn's `PCA` module performs orthogonal Varimax rotation only when variables have standard deviation of 1.0", isCorrect: false },
      { text: "Because `StandardScaler` removes outlier observations by evaluating multivariate Mahalanobis distance thresholds", isCorrect: false },
      { text: "Because `PCA` requires the input matrix to be non-singular, and standardization guarantees a non-zero determinant", isCorrect: false },
      { text: "Because `PCA` in scikit-learn performs Covariance SVD by default without internal scaling, requiring explicit $z$-score standardization", isCorrect: true }
    ]
  }
];
