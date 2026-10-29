// Enhanced balanced options for Level 5 (ch2-pca-interpretation) and Level 6 (ch3-fa-theory)
// Target: All 6 choices have comparable length, equal grammatical weight, and plausible theoretical rationale.
// The correct answer is NOT the longest; distractors frequently match or exceed it in length.

export const level5Balanced = [
  // Q1 (What is a factor loading)
  {
    order: 1,
    id: "q_l5_1",
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
  // Q2 (Kaiser criterion threshold 1.0)
  {
    order: 2,
    id: "q_l5_2",
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
    id: "q_l5_3",
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
  // Q4 (Portuguese study PC1 interpretation)
  {
    order: 4,
    id: "q_l5_4",
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
  // Q5 (Loading formula from eigenvector weight)
  {
    order: 5,
    id: "q_l5_5",
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
  // Q6 (Why Kaiser threshold not applied blindly to Covariance PCA)
  {
    order: 6,
    id: "q_l5_6",
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
    id: "q_l5_7",
    targetLetter: "c",
    options: [
      { text: "`METHOD=ML`, which requests Maximum Likelihood parameter extraction instead of ordinary principal components", isCorrect: false },
      { text: "`OUTSTAT=COV`, which outputs the calculated sample covariance matrix directly into an external SAS dataset", isCorrect: false },
      { text: "`COV`, which instructs PROC PRINCOMP to analyze the sample covariance matrix $S$ instead of the default correlation matrix $R$", isCorrect: true },
      { text: "`VARDEF=N`, which divides sums of squares by sample size $n$ rather than degrees of freedom $n - 1$", isCorrect: false },
      { text: "`STD`, which automatically standardizes all variables to zero mean and unit variance before running analysis", isCorrect: false },
      { text: "`ROTATE=VARIMAX`, which executes an orthogonal Varimax rotation across extracted principal component scores", isCorrect: false }
    ]
  },
  // Q8 (Standardizing component scores effect)
  {
    order: 8,
    id: "q_l5_8",
    targetLetter: "b",
    options: [
      { text: "Variance becomes 0 for all components, collapsing scores into a single point and destroying observation differences", isCorrect: false },
      { text: "Variance becomes 1.0 for all components; components with small eigenvalues now visually expand, giving equal visual spread", isCorrect: true },
      { text: "Variance becomes equal to degrees of freedom $n - 1$, scaling component dispersion by sample size of observations", isCorrect: false },
      { text: "The principal components lose their mutual orthogonality and become highly correlated with one another in score space", isCorrect: false },
      { text: "The original data matrix can no longer be mathematically reconstructed because standardization eliminates eigenvalues", isCorrect: false },
      { text: "All negative observation scores are inverted into positive absolute values, eliminating asymmetric coordinate spread", isCorrect: false }
    ]
  },
  // Q9 (Kaiser vs 70% retention in 5-variable PCA)
  {
    order: 9,
    id: "q_l5_9",
    targetLetter: "a",
    options: [
      { text: "(1) Kaiser retains 2 components ($\\lambda_1, \\lambda_2 > 1.0$); (2) 70% criterion retains 3 components ($82.0\\% > 70\\%$)", isCorrect: true },
      { text: "(1) Kaiser retains 1 component ($\\lambda_1 = 2.85$); (2) 70% criterion retains 2 components ($(2.85 + 1.25)/5 = 82\\%$)", isCorrect: false },
      { text: "(1) Kaiser retains 3 components ($\\lambda_1, \\lambda_2, \\lambda_3$); (2) 70% criterion retains 4 components ($94.0\\%$)", isCorrect: false },
      { text: "(1) Kaiser retains 2 components; (2) 70% criterion retains 2 components, because $(2.85 + 1.25)/5 = 82\\% > 70\\%$", isCorrect: false },
      { text: "(1) Kaiser retains 4 components; (2) 70% criterion retains all 5 components to capture 100% of standardized trace", isCorrect: false },
      { text: "(1) Kaiser retains 1 component; (2) 70% criterion retains 1 component, because $\\lambda_1 / 5 = 57\\% \\approx 70\\%$", isCorrect: false }
    ]
  },
  // Q10 (Regional score plot Lisboa vs Alentejo)
  {
    order: 10,
    id: "q_l5_10",
    targetLetter: "d",
    options: [
      { text: "Alentejo has twice the population density of Lisboa, resulting in higher agricultural capitalization per capita", isCorrect: false },
      { text: "The analysis is invalid because negative component scores violate mathematical non-negativity axioms in PCA", isCorrect: false },
      { text: "Lisboa has zero hospital beds while Alentejo possesses surplus physicians and historical museums per resident", isCorrect: false },
      { text: "Lisboa has high health and cultural infrastructure, whereas Alentejo has below-average infrastructure on that component", isCorrect: true },
      { text: "Alentejo must be statistically merged into Lisboa to eliminate severe multicollinearity in regional variables", isCorrect: false },
      { text: "Both regions exhibit identical socioeconomic profiles because their Euclidean distance to the centroid is zero", isCorrect: false }
    ]
  },
  // Q11 (Highest variance vs substantive importance)
  {
    order: 11,
    id: "q_l5_11",
    targetLetter: "e",
    options: [
      { text: "Because eigenvalues are always distorted by sample size, causing large samples to inflate trailing component importance", isCorrect: false },
      { text: "Because high-variance components cannot be rotated, whereas low-variance components allow orthogonal Varimax rotations", isCorrect: false },
      { text: "Because correlation loadings are strictly bounded between $-0.50$ and $+0.50$, preventing components from capturing true relationships", isCorrect: false },
      { text: "Because eigenvalues quantify only non-linear interactions and fail to measure underlying linear associations in data", isCorrect: false },
      { text: "Because PCA maximizes total retained variance without regard to an external outcome; a lower-variance component may predict the target", isCorrect: true },
      { text: "Because principal component scores cannot be used as predictor variables in econometric regression models without bias", isCorrect: false }
    ]
  },
  // Q12 (Python scikit-learn PCA loading derivation)
  {
    order: 12,
    id: "q_l5_12",
    targetLetter: "f",
    options: [
      { text: "To convert negative eigenvalues into positive correlation coefficients, satisfying mathematical bounds on loadings", isCorrect: false },
      { text: "Because scikit-learn computes Covariance PCA by default, requiring multiplication by $\\sqrt{\\lambda}$ to recover correlations", isCorrect: false },
      { text: "Because `pca.components_` contains eigenvalues, which must be scaled by variances to obtain coordinate projections", isCorrect: false },
      { text: "To normalize the scores so that their sample sum of squares equals the total number of observations minus one", isCorrect: false },
      { text: "Because scikit-learn requires loading vectors to have norm equal to the sample size $n$ rather than unit length", isCorrect: false },
      { text: "Because `pca.components_` contains unit eigenvectors $w_i$; multiplying by $\\sqrt{\\lambda_i}$ yields factor loadings (correlations)", isCorrect: true }
    ]
  }
];

export const level6Balanced = [
  // Q1 (Conceptual objective of Factor Analysis)
  {
    order: 1,
    id: "q_l6_1",
    targetLetter: "b",
    options: [
      { text: "To maximize total retained variance across all original indicators by constructing uncorrelated composite indices", isCorrect: false },
      { text: "To uncover unobservable latent variables (factors) that account for the shared correlation structure among observed indicators", isCorrect: true },
      { text: "To classify heterogeneous observations into mutually exclusive and exhaustive cluster groups based on distance", isCorrect: false },
      { text: "To predict a single continuous metric dependent variable from a linear combination of independent explanatory factors", isCorrect: false },
      { text: "To test whether multivariate group mean centroids differ significantly across experimental categorical treatments", isCorrect: false },
      { text: "To project high-dimensional nonmetric contingency tables into a low-dimensional perceptual Euclidean space", isCorrect: false }
    ]
  },
  // Q2 (Definition of communality)
  {
    order: 2,
    id: "q_l6_2",
    targetLetter: "d",
    options: [
      { text: "The proportion of total indicator variance accounted for by unique measurement error and specific variance: $\\psi_j$", isCorrect: false },
      { text: "The arithmetic average correlation between an indicator and all other variables in the sample correlation matrix", isCorrect: false },
      { text: "The sample variance of the indicator divided by the degrees of freedom remaining in the reduced correlation matrix", isCorrect: false },
      { text: "The proportion of total indicator variance accounted for by the extracted common factors: $h_j^2 = \\sum_{i=1}^m \\lambda_{ji}^2$", isCorrect: true },
      { text: "The determinant of the anti-image correlation matrix evaluated across the extracted latent factor dimensions", isCorrect: false },
      { text: "The squared multiple correlation between the indicator and the sample centroid vector in observation space", isCorrect: false }
    ]
  },
  // Q3 (Communality 0.64 -> uniqueness 0.36)
  {
    order: 3,
    id: "q_l6_3",
    targetLetter: "a",
    options: [
      { text: "$\\psi_j = 1 - h_j^2 = 1 - 0.64 = 0.36$ (36%), because total standardized variance decomposes into communality plus uniqueness", isCorrect: true },
      { text: "$\\psi_j = \\sqrt{1 - 0.64} = \\sqrt{0.36} = 0.60$ (60%), taking the square root of unexplained variance to obtain noise dispersion", isCorrect: false },
      { text: "$\\psi_j = 0.64$, because communality and uniqueness are constrained to be equal in classical orthogonal factor models", isCorrect: false },
      { text: "$\\psi_j = 1 / 0.64 = 1.5625$, taking the reciprocal of communality to measure the precision of unique indicator variance", isCorrect: false },
      { text: "$\\psi_j = 0.00$, because orthogonal factor models assume that common factors explain 100% of individual indicator variance", isCorrect: false },
      { text: "$\\psi_j = 0.64^2 = 0.4096$, squaring the communality to evaluate higher-order residual error dispersion in the model", isCorrect: false }
    ]
  },
  // Q4 (Reproduced correlation r_MP = lambda_M * lambda_P)
  {
    order: 4,
    id: "q_l6_4",
    targetLetter: "e",
    options: [
      { text: "$\\hat{r}_{MP} = (0.80 + 0.70) / 2 = 0.75$, taking the simple unweighted arithmetic mean of the two individual factor loadings", isCorrect: false },
      { text: "$\\hat{r}_{MP} = \\sqrt{0.80 \\times 0.70} = \\sqrt{0.56} \\approx 0.748$, taking the geometric mean of the factor loadings across courses", isCorrect: false },
      { text: "$\\hat{r}_{MP} = 0.80^2 + 0.70^2 = 0.64 + 0.49 = 1.13$, summing the squared loadings to evaluate cumulative bivariate association", isCorrect: false },
      { text: "$\\hat{r}_{MP} = 0.80 - 0.70 = 0.10$, evaluating the difference in factor saturation between Math and Physics courses", isCorrect: false },
      { text: "$\\hat{r}_{MP} = \\lambda_M \\lambda_P = 0.80 \\times 0.70 = 0.56$, because the single common factor accounts for all shared covariation", isCorrect: true },
      { text: "$\\hat{r}_{MP} = 0.00$, because orthogonal factors assume zero correlation between distinct observed course indicators", isCorrect: false }
    ]
  },
  // Q5 (Pattern loadings = structure loadings when orthogonal)
  {
    order: 5,
    id: "q_l6_5",
    targetLetter: "f",
    options: [
      { text: "When sample size $n$ exceeds 1,000 observations, minimizing finite sample estimation bias in structural equation modeling", isCorrect: false },
      { text: "When all observed indicators are measured on standardized ratio scales with zero skewness and kurtosis in sample data", isCorrect: false },
      { text: "When all extracted communalities are identically equal to 1.0, eliminating unique variance from the indicator decomposition", isCorrect: false },
      { text: "When the factor model is estimated using Maximum Likelihood rather than iterated Principal Axis Factoring in software", isCorrect: false },
      { text: "When an oblique Promax or Oblimin rotation is applied to allow common factors to correlate freely in multidimensional space", isCorrect: false },
      { text: "When the common factors are orthogonal (uncorrelated, $\\Phi = I$), eliminating indirect correlations through other factors", isCorrect: true }
    ]
  },
  // Q6 (Unique factors uncorrelated with common factors)
  {
    order: 6,
    id: "q_l6_6",
    targetLetter: "c",
    options: [
      { text: "Unique factors are perfectly collinear with the leading common factor: $\\text{Corr}(e_j, F_1) = 1.0$, providing baseline scaling", isCorrect: false },
      { text: "Unique factors correlate negatively with common factors: $\\text{Corr}(e_j, F_i) = -0.50$, balancing positive common loadings", isCorrect: false },
      { text: "Unique factors are completely uncorrelated with common factors ($\\text{Cov}(F_i, e_j) = 0$) and with each other ($\\text{Cov}(e_j, e_k) = 0$)", isCorrect: true },
      { text: "Unique factors are equal to the sample standard deviations of indicators divided by the number of extracted common factors", isCorrect: false },
      { text: "Unique factors correlate with each other at a constant rate equal to the average off-diagonal anti-image correlation", isCorrect: false },
      { text: "Unique factors are identical to the standardized component scores extracted from the initial unrotated PCA solution", isCorrect: false }
    ]
  },
  // Q7 (Chemistry loadings communality 0.60^2 + 0.40^2 = 0.52)
  {
    order: 7,
    id: "q_l7_7_level6", // order 7 in level 6
    id_actual: "q_l6_7",
    targetLetter: "b",
    options: [
      { text: "Communality is $0.60 + 0.40 = 1.00$ (100%) and uniqueness is $0.00$ (0%), because the two loadings sum to complete unity", isCorrect: false },
      { text: "Communality is $0.60^2 + 0.40^2 = 0.36 + 0.16 = 0.52$ (52%); Uniqueness is $1 - 0.52 = 0.48$ (48%)", isCorrect: true },
      { text: "Communality is $\\sqrt{0.60^2 + 0.40^2} = \\sqrt{0.52} \\approx 0.721$ (72.1%); Uniqueness is $1 - 0.721 = 0.279$ (27.9%)", isCorrect: false },
      { text: "Communality is $0.60 \\times 0.40 = 0.24$ (24%); Uniqueness is $1 - 0.24 = 0.76$ (76%) of total standardized variance", isCorrect: false },
      { text: "Communality is $(0.60^2 + 0.40^2)/2 = 0.26$ (26%); Uniqueness is $1 - 0.26 = 0.74$ (74%) of indicator variance", isCorrect: false },
      { text: "Communality is $0.60^2 - 0.40^2 = 0.20$ (20%); Uniqueness is $1 - 0.20 = 0.80$ (80%) across the orthogonal dimensions", isCorrect: false }
    ]
  },
  // Q8 (Pattern loading zero on all factors)
  {
    order: 8,
    id: "q_l6_8",
    targetLetter: "d",
    options: [
      { text: "The indicator is perfectly explained by the common factors and has zero measurement error: $h_j^2 = 1.0$ and $\\psi_j = 0.0$", isCorrect: false },
      { text: "The indicator is collinear with the second principal component and should be retained as an anchor variable for rotation", isCorrect: false },
      { text: "The indicator has negative variance and violates mathematical non-negativity axioms, requiring data log transformation", isCorrect: false },
      { text: "The indicator shares zero variance with the common factors; it is pure uniqueness ($h_j^2 = 0, \\psi_j = 1.0$) and useless in FA", isCorrect: true },
      { text: "The indicator is an omnibus reference baseline category that establishes identification for the structural factor model", isCorrect: false },
      { text: "The indicator has infinite communality and must be inverted to prevent algorithmic non-convergence in factor extraction", isCorrect: false }
    ]
  },
  // Q9 (Chemistry loadings communality and uniqueness)
  {
    order: 9,
    id: "q_l6_9",
    targetLetter: "a",
    options: [
      { text: "Communality is $0.60^2 + 0.40^2 = 0.52$; Uniqueness is $1 - 0.52 = 0.48$; the common factors explain 52% of Chemistry grade variance", isCorrect: true },
      { text: "Communality is $0.60 + 0.40 = 1.00$; Uniqueness is $0.00$; Chemistry is fully captured by Quantitative and Verbal dimensions", isCorrect: false },
      { text: "Communality is $\\sqrt{0.52} = 0.721$; Uniqueness is $0.279$; Chemistry correlates at 0.721 with the joint factor centroid", isCorrect: false },
      { text: "Communality is $0.60 \\times 0.40 = 0.24$; Uniqueness is $0.76$; Chemistry shares only 24% common variance with student grades", isCorrect: false },
      { text: "Communality is $0.36 - 0.16 = 0.20$; Uniqueness is $0.80$; Chemistry is dominated by Quantitative factor specificity", isCorrect: false },
      { text: "Communality is $(0.60 + 0.40)^2 = 1.00$; Uniqueness is $0.00$; Chemistry represents a linear composite of the two factors", isCorrect: false }
    ]
  },
  // Q10 (Sum of all communalities)
  {
    order: 10,
    id: "q_l6_10",
    targetLetter: "c",
    options: [
      { text: "Sum of communalities is $6.00$, representing 100% preservation of total variance across all 6 standardized school courses", isCorrect: false },
      { text: "Sum of communalities is $1.61 \\times 2.25 = 3.6225$, representing the geometric product of orthogonal factor eigenvalues", isCorrect: false },
      { text: "Sum of communalities is $1.61 + 2.25 = 3.86$, representing the total common variance explained by Factors $Q$ and $V$ combined", isCorrect: true },
      { text: "Sum of communalities is $(1.61 + 2.25) / 6 = 0.643$, representing the average communality per course across the curriculum", isCorrect: false },
      { text: "Sum of communalities is $6.00 - 3.86 = 2.14$, representing the total unexplained unique variance discarded from the model", isCorrect: false },
      { text: "Sum of communalities is $\\sqrt{1.61^2 + 2.25^2} = 2.766$, representing the Euclidean vector norm of the extracted factor roots", isCorrect: false }
    ]
  },
  // Q11 (Reflective vs Formative indicators)
  {
    order: 11,
    id: "q_l6_11",
    targetLetter: "e",
    options: [
      { text: "Because Factor Analysis assumes indicators cause the latent construct, whereas PCA assumes indicators are caused by components", isCorrect: false },
      { text: "Because Factor Analysis is strictly a nonmetric classification technique, whereas PCA is a continuous metric forecasting model", isCorrect: false },
      { text: "Because Factor Analysis maximizes total indicator variance, whereas PCA maximizes shared covariance and isolates uniqueness", isCorrect: false },
      { text: "Because Factor Analysis treats indicators as independent predictors in regression, whereas PCA treats indicators as criterion targets", isCorrect: false },
      { text: "In FA, the latent construct causes the observed responses (reflective); in PCA, components are mathematical composites of variables (formative)", isCorrect: true },
      { text: "In FA, indicators are mutually uncorrelated by assumption; in PCA, indicators must be perfectly collinear to extract components", isCorrect: false }
    ]
  },
  // Q12 (1-factor model reproducing correlations)
  {
    order: 12,
    id: "q_l6_12",
    targetLetter: "f",
    options: [
      { text: "No, a single-factor model cannot reproduce these correlations because $\\hat{r}_{12}$ would exceed 1.0 under all positive factor loadings", isCorrect: false },
      { text: "No, because the empirical correlation matrix has negative eigenvalues, violating non-negative definite matrix requirements", isCorrect: false },
      { text: "Yes, perfectly reproduced with loading $\\lambda_1 = 0.60$, because the arithmetic mean of the three correlations equals 0.413", isCorrect: false },
      { text: "Yes, perfectly reproduced with loading $\\lambda_1 = 0.40$, because $\\lambda_1$ corresponds to the smallest off-diagonal correlation entry", isCorrect: false },
      { text: "Yes, perfectly reproduced with loading $\\lambda_1 = 0.24$, because $\\lambda_1 = r_{23}$ anchors the baseline common factor scale", isCorrect: false },
      { text: "Yes, perfectly reproduced with loading $\\lambda_1 = \\sqrt{r_{12} r_{13} / r_{23}} = \\sqrt{0.60 \\times 0.40 / 0.24} = \\sqrt{1.00} = 1.00$", isCorrect: true }
    ]
  }
];
