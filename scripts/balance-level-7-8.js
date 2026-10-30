// Enhanced balanced options for Level 7 (ch3-fa-extraction) and Level 8 (ch3-fa-rotation-evaluation)
// Target: All 6 choices have comparable length, equal grammatical weight, and plausible theoretical rationale.
// The correct answer is NOT the longest; distractors frequently match or exceed it in length.

export const level7Balanced = [
  // Q1 (Factor Rotation Problem)
  {
    order: 1,
    id: "q_l7_1",
    targetLetter: "c",
    options: [
      { text: "The inability of mathematical algorithms to extract more than one factor whenever the sample correlation matrix is non-singular", isCorrect: false },
      { text: "The algorithmic error that occurs when sample eigenvalues become negative, violating positive semi-definite matrix axioms", isCorrect: false },
      { text: "An unrotated solution is mathematically arbitrary; infinitely many orientations reproduce the exact same correlation matrix equally well", isCorrect: true },
      { text: "The requirement that all rotated factors must remain strictly orthogonal to avoid multicollinearity in econometric regressions", isCorrect: false },
      { text: "The limitation that factor rotation can only be executed in statistical packages when all observed variables are standardized", isCorrect: false },
      { text: "The circular dependency between initial communality estimates and the resulting eigenvalues extracted from the reduced matrix", isCorrect: false }
    ]
  },
  // Q2 (Initial communalities in PCF = 1.0)
  {
    order: 2,
    id: "q_l7_2",
    targetLetter: "e",
    options: [
      { text: "Initial communalities equal zero ($h_j^2 = 0.0$), assuming that observed indicators share zero common variance initially", isCorrect: false },
      { text: "Initial communalities equal squared multiple correlations ($R_j^2$), reflecting the variance explained by remaining variables", isCorrect: false },
      { text: "Initial communalities equal the average off-diagonal correlation entry in row $j$ of the sample correlation matrix: $\\bar{r}_j$", isCorrect: false },
      { text: "Initial communalities equal sample degrees of freedom divided by total sample size: $(n - 1) / n$, correcting for sample bias", isCorrect: false },
      { text: "Initial communalities equal 1.0 ($h_j^2 = 1.0$), assuming that total indicator variance consists entirely of common variance", isCorrect: true },
      { text: "Initial communalities equal the leading eigenvalue $\\lambda_1$ divided by total number of variables: $\\lambda_1 / p$", isCorrect: false }
    ]
  },
  // Q3 (What RMSR measures)
  {
    order: 3,
    id: "q_l7_3",
    targetLetter: "b",
    options: [
      { text: "The arithmetic average difference between sample variable means and the estimated factor score centroids across observations", isCorrect: false },
      { text: "The square root of the average squared difference between empirical correlations and model-reproduced correlations: $r_{jk} - \\hat{r}_{jk}$", isCorrect: true },
      { text: "The ratio of the smallest extracted eigenvalue to the largest eigenvalue, evaluating collinearity in the reduced correlation matrix", isCorrect: false },
      { text: "The percentage of observations correctly classified into their respective groups by the rotated factor score matrix", isCorrect: false },
      { text: "The two-tailed p-value obtained when testing the statistical null hypothesis of zero residual correlation across dimensions", isCorrect: false },
      { text: "The determinant of the anti-image correlation matrix evaluated across the extracted common factor coordinate space", isCorrect: false }
    ]
  },
  // Q4 (Rule of thumb for RMSR < 0.05)
  {
    order: 4,
    id: "q_l7_4",
    targetLetter: "d",
    options: [
      { text: "RMSR must be strictly greater than 0.70, indicating that common factors account for the dominant portion of correlation", isCorrect: false },
      { text: "RMSR must equal exactly 1.00, demonstrating that the residual correlation matrix matches the identity matrix perfectly", isCorrect: false },
      { text: "RMSR must fall within the range of 0.10 to 0.20, confirming that residual correlations follow a standard normal distribution", isCorrect: false },
      { text: "RMSR should be less than 0.05 (or at most 0.08), indicating small average discrepancy between empirical and reproduced correlations", isCorrect: true },
      { text: "RMSR must be less than $1 / \\sqrt{n}$, scaling the acceptable residual threshold directly to the degrees of freedom", isCorrect: false },
      { text: "RMSR must equal zero identically, because any non-zero residual correlation invalidates the factor model assumptions", isCorrect: false }
    ]
  },
  // Q5 (PAF resolves communality circularity)
  {
    order: 5,
    id: "q_l7_5",
    targetLetter: "a",
    options: [
      { text: "By using an iterative algorithm: start with prior communality estimates (e.g. $R_j^2$), extract factors, re-estimate communalities, and repeat until convergence", isCorrect: true },
      { text: "By forcing all communalities to equal 1.0 throughout all stages of extraction, eliminating the need to estimate uniqueness parameters", isCorrect: false },
      { text: "By replacing the empirical correlation matrix with an orthogonal Euclidean distance matrix, which bypasses the communality estimation problem completely", isCorrect: false },
      { text: "By fixing communalities to the diagonal elements of the inverse correlation matrix: $h_j^2 = (R^{-1})_{jj}$, which solves the algebraic system analytically in software", isCorrect: false },
      { text: "By using an unrotated PCA solution where communalities are calculated as the simple average of all extracted characteristic eigenvalues", isCorrect: false },
      { text: "By setting communalities equal to the Kaiser-Meyer-Olkin sampling adequacy measure, anchoring indicator variance to partial correlations", isCorrect: false }
    ]
  },
  // Q6 (Why PCF criticized as not true FA)
  {
    order: 6,
    id: "q_l7_6",
    targetLetter: "f",
    options: [
      { text: "Because PCF cannot compute factor scores for individual observations without violating orthogonality constraints in software", isCorrect: false },
      { text: "Because PCF requires sample sizes exceeding $n = 10,000$ observations to achieve numerical stability in spectral decomposition", isCorrect: false },
      { text: "Because PCF produces oblique correlated factors by default, prohibiting the execution of orthogonal Varimax factor rotations", isCorrect: false },
      { text: "Because PCF can only be performed on nonmetric categorical data, rendering it invalid for continuous financial and economic indicators", isCorrect: false },
      { text: "Because PCF always produces negative eigenvalues that distort the calculation of cumulative explained variance percentages", isCorrect: false },
      { text: "Because PCF sets initial communalities to 1.0, assuming indicators contain zero unique or error variance, which contradicts the common factor model", isCorrect: true }
    ]
  },
  // Q7 (PAF high iterations or failure to converge)
  {
    order: 7,
    id: "q_l7_7",
    targetLetter: "b",
    options: [
      { text: "It indicates that the data are perfectly suited for Factor Analysis and all observed variables share massive common variance", isCorrect: false },
      { text: "It signals poor data suitability: weak correlations, over-extraction of factors, or \"Heywood cases\" where estimated communality exceeds 1.0", isCorrect: true },
      { text: "It indicates that sample size $n$ is too large, causing the iterative algorithm to evaluate excessive degrees of freedom", isCorrect: false },
      { text: "It means the computer processor encountered a numerical rounding error that can be resolved by switching from SAS to SPSS", isCorrect: false },
      { text: "It proves that an Oblique rotation was mistakenly applied instead of an orthogonal Varimax rotation during extraction", isCorrect: false },
      { text: "It indicates that the true number of common factors equals the total number of observed variables in the multivariate system", isCorrect: false }
    ]
  },
  // Q8 (Residual correlation matrix calculation)
  {
    order: 8,
    id: "q_l7_8",
    targetLetter: "d",
    options: [
      { text: "$R_{\\text{res}} = R + \\hat{R}$; off-diagonal values represent the cumulative total covariation captured by the extracted factor dimensions", isCorrect: false },
      { text: "$R_{\\text{res}} = R^{-1} \\hat{R}$; off-diagonal values represent the partial regression slopes relating indicators to factor scores", isCorrect: false },
      { text: "$R_{\\text{res}} = R \\times \\hat{R}$; off-diagonal values represent the joint probability density of indicator pairs under factor normality", isCorrect: false },
      { text: "$R_{\\text{res}} = R - \\hat{R}$; off-diagonal values represent the remaining unexplained correlation between variable pairs after factor extraction", isCorrect: true },
      { text: "$R_{\\text{res}} = \\text{diag}(R - \\hat{R})$; off-diagonal values are identically zero, isolating unique variances along the main diagonal", isCorrect: false },
      { text: "$R_{\\text{res}} = \\hat{R} - I$; off-diagonal values represent the deviation of reproduced correlations from standardized unit variances", isCorrect: false }
    ]
  },
  // Q9 (Communality preserved under orthogonal rotation)
  {
    order: 9,
    id: "q_l7_9",
    targetLetter: "a",
    options: [
      { text: "Model 1: $h_M^2 = 0.80^2 + 0.20^2 = 0.64 + 0.04 = 0.68$; Model 2: $h_M^2 = 0.667^2 + (-0.484)^2 = 0.445 + 0.234 = 0.679 \\approx 0.68$", isCorrect: true },
      { text: "Model 1: $h_M^2 = 0.80 + 0.20 = 1.00$; Model 2: $h_M^2 = 0.667 - 0.484 = 0.183$; communality is not preserved and changes by 0.817", isCorrect: false },
      { text: "Model 1: $h_M^2 = 0.80 \\times 0.20 = 0.16$; Model 2: $h_M^2 = 0.667 \\times (-0.484) = -0.323$; rotation alters the sign of communality", isCorrect: false },
      { text: "Model 1: $h_M^2 = \\sqrt{0.80^2 + 0.20^2} = 0.825$; Model 2: $h_M^2 = \\sqrt{0.667^2 + 0.484^2} = 0.824$; both equal the vector norm exactly", isCorrect: false },
      { text: "Model 1: $h_M^2 = 0.80 / 0.20 = 4.00$; Model 2: $h_M^2 = 0.667 / 0.484 = 1.378$; orthogonal rotations rescale communalities by factor slopes", isCorrect: false },
      { text: "Model 1: $h_M^2 = 0.68$; Model 2: $h_M^2 = 1.00$, because rotation transforms the second solution into a principal component solution", isCorrect: false }
    ]
  },
  // Q10 (Number of unique off-diagonal correlations p(p-1)/2)
  {
    order: 10,
    id: "q_l7_10",
    targetLetter: "e",
    options: [
      { text: "Exactly $6 \\times 6 = 36$ unique correlation pairs, evaluating every cell in the $6 \\times 6$ correlation matrix independently", isCorrect: false },
      { text: "Exactly $6 \\times (6 - 1) = 30$ pairs, excluding the 6 main diagonal elements but counting upper and lower triangles twice", isCorrect: false },
      { text: "Exactly $6$ unique pairs, evaluating only the principal diagonal elements that correspond to variable communalities", isCorrect: false },
      { text: "Exactly $(6 - 1) / 2 = 2.5$ pairs, reflecting the average degrees of freedom available across the extracted factor axes", isCorrect: false },
      { text: "Exactly $6 \\times (6 - 1) / 2 = 30 / 2 = 15$ unique pairs, evaluating the non-redundant off-diagonal elements in the symmetric matrix", isCorrect: true },
      { text: "Exactly $6^2 - 6 = 30$ pairs, subtracting the trace from the total matrix dimensions without symmetry adjustment", isCorrect: false }
    ]
  },
  // Q11 (Diagonal of reduced correlation matrix in PAF)
  {
    order: 11,
    id: "q_l7_11",
    targetLetter: "c",
    options: [
      { text: "Unities ($1.0$), because correlation matrices are mathematically required to have ones on the main diagonal", isCorrect: false },
      { text: "Zeros ($0.0$), eliminating indicator self-correlation to focus extraction purely on off-diagonal covariances", isCorrect: false },
      { text: "The current estimated communalities ($h_j^2$), representing the proportion of indicator variance shared with other variables", isCorrect: true },
      { text: "The sample variances ($s_j^2$) of the raw unstandardized variables, preserving original physical units in the reduced matrix", isCorrect: false },
      { text: "The anti-image partial correlation coefficients ($a_{jj}$), measuring sampling adequacy along the principal diagonal", isCorrect: false },
      { text: "The eigenvalues extracted from the previous iteration, scaling each variable axis by its current characteristic root", isCorrect: false }
    ]
  },
  // Q12 (Why prefer Model 1 over Model 2 despite identical fit)
  {
    order: 12,
    id: "q_l7_12",
    targetLetter: "f",
    options: [
      { text: "Because Model 1 was generated by PCA while Model 2 was generated by Factor Analysis, giving Model 1 higher mathematical precision", isCorrect: false },
      { text: "Because Model 1 has a strictly higher sample size and degrees of freedom than Model 2, reducing finite sample estimation errors", isCorrect: false },
      { text: "Because Model 2 produces negative communalities that violate non-negativity axioms, rendering Model 2 mathematically invalid", isCorrect: false },
      { text: "Because Model 1 has zero residual correlations while Model 2 has non-zero off-diagonal residuals in matrix $R_{\\text{res}}$", isCorrect: false },
      { text: "Because statistical software will only allow secondary regression analysis to be conducted using Model 1 factor scores", isCorrect: false },
      { text: "Because Model 1 exhibits \"Simple Structure\": each variable loads heavily on one factor and near zero on others, making it interpretable", isCorrect: true }
    ]
  }
];

export const level8Balanced = [
  // Q1 (KMO benchmark 0.81 = Meritorious)
  {
    order: 1,
    id: "q_l8_1",
    targetLetter: "b",
    options: [
      { text: "\"Unacceptable\", indicating severe multicollinearity; the researcher must immediately collect a larger sample or abandon the analysis", isCorrect: false },
      { text: "\"Meritorious\" (Good); the correlation matrix possesses strong shared variance, making it highly appropriate for Factor Analysis", isCorrect: true },
      { text: "\"Miserable\", indicating that partial correlations dominate bivariate correlations, requiring variable transformation", isCorrect: false },
      { text: "\"Barely Acceptable\", suggesting that only a single principal component can be extracted from the correlation matrix", isCorrect: false },
      { text: "\"Degenerate\", signaling that the correlation matrix is singular and matrix inversion will encounter arithmetic division by zero", isCorrect: false },
      { text: "\"Perfect\", demonstrating that all observed variables are mutually uncorrelated and have reached mathematical orthogonality", isCorrect: false }
    ]
  },
  // Q2 (Varimax rotation objective)
  {
    order: 2,
    id: "q_l8_2",
    targetLetter: "d",
    options: [
      { text: "Quartimax rotation, which simplifies rows (variables) by driving loadings toward unity on a single general factor", isCorrect: false },
      { text: "Equamax rotation, which balances simplicity equally across rows and columns without enforcing factor orthogonality", isCorrect: false },
      { text: "Promax rotation, which allows factors to correlate freely by raising orthogonal loadings to an exponential power $k$", isCorrect: false },
      { text: "Varimax rotation, which simplifies columns (factors) by maximizing loading variances, driving loadings toward $\\pm 1.0$ or $0.0$", isCorrect: true },
      { text: "Oblimin rotation, which minimizes cross-products between factor structures using a non-zero obliqueness parameter $\\gamma$", isCorrect: false },
      { text: "Gram-Schmidt orthogonalization, which forces factor vectors to align sequentially with original coordinate axes", isCorrect: false }
    ]
  },
  // Q3 (Orthogonal vs Oblique difference)
  {
    order: 3,
    id: "q_l8_3",
    targetLetter: "a",
    options: [
      { text: "Orthogonal rotations enforce a 90-degree angle so factors remain uncorrelated; Oblique rotations allow angles $< 90^\\circ$, permitting factor correlations", isCorrect: true },
      { text: "Orthogonal rotations eliminate indicator communalities, while Oblique rotations preserve both communality and total system variance across all dimensions", isCorrect: false },
      { text: "Orthogonal rotations can only be executed in SAS Base PROC FACTOR, while Oblique rotations are formulated exclusively for Python scikit-learn factor libraries", isCorrect: false },
      { text: "Orthogonal rotations require observed variables to be measured on nominal scales, while Oblique rotations require continuous ratio data", isCorrect: false },
      { text: "Orthogonal rotations reduce sample size by half, while Oblique rotations preserve all $n$ observation records throughout estimation", isCorrect: false },
      { text: "Oblique rotations always produce negative eigenvalues that distort the calculation of cumulative explained variance percentages", isCorrect: false }
    ]
  },
  // Q4 (EFA vs CFA difference)
  {
    order: 4,
    id: "q_l8_4",
    targetLetter: "e",
    options: [
      { text: "EFA is restricted to small exploratory samples ($n < 50$), whereas CFA is formulated strictly for large-scale confirmation datasets ($n > 1,000$ observations)", isCorrect: false },
      { text: "EFA requires all variables to be measured on metric ratio scales, while CFA is designed exclusively for nonmetric qualitative rankings", isCorrect: false },
      { text: "EFA analyzes standardized correlation matrices while CFA requires unstandardized covariance matrices, producing non-comparable factor loading parameter estimates", isCorrect: false },
      { text: "There is zero theoretical difference; EFA and CFA are alternative software brand names for the same Principal Components algorithm", isCorrect: false },
      { text: "EFA explores data without prior theory to discover factors; CFA tests an explicit, theory-driven hypothesis specifying which variables load on which factors", isCorrect: true },
      { text: "EFA always extracts orthogonal uncorrelated factors, whereas CFA requires common factors to always be correlated by assumption", isCorrect: false }
    ]
  },
  // Q5 (Quartimax drawback)
  {
    order: 5,
    id: "q_l8_5",
    targetLetter: "c",
    options: [
      { text: "Because it forces all indicator communalities to equal zero, destroying the underlying common factor variance decomposition in the estimated factor model", isCorrect: false },
      { text: "Because it requires extracted factors to be correlated (oblique), introducing severe multicollinearity into subsequent predictive regression equations", isCorrect: false },
      { text: "Because it simplifies rows rather than columns, often producing one massive general factor with high loadings across all variables, obscuring sub-dimensions", isCorrect: true },
      { text: "Because it inverts the mathematical sign of all extracted eigenvalues, converting positive variances into negative quantities", isCorrect: false },
      { text: "Because it violates the metric triangle inequality whenever variables have different standard deviations in empirical sample data", isCorrect: false },
      { text: "Because it is mathematically impossible to compute Quartimax rotations on datasets containing more than three observed indicators", isCorrect: false }
    ]
  },
  // Q6 (KMO formula a_jk terms)
  {
    order: 6,
    id: "q_l8_6",
    targetLetter: "f",
    options: [
      { text: "$a_{jk}$ are the extracted eigenvalues; they should all exceed 1.0 to satisfy the Kaiser retention criterion in Correlation PCA", isCorrect: false },
      { text: "$a_{jk}$ are sample degrees of freedom; they should equal $n - 1$ to ensure unbiased estimation of the reduced correlation matrix", isCorrect: false },
      { text: "$a_{jk}$ are standardized indicator sample means; they must equal 0.0 to ensure data are properly centered at the coordinate origin", isCorrect: false },
      { text: "$a_{jk}$ are individual observation factor scores; they must follow a standard normal distribution with mean zero and unit variance", isCorrect: false },
      { text: "$a_{jk}$ are Euclidean distances between variable vector endpoints in observation space; they should all equal 1.0 under orthogonality", isCorrect: false },
      { text: "$a_{jk}$ are anti-image partial correlations; they should be near zero because high partial correlations indicate unique rather than common variance", isCorrect: true }
    ]
  },
  // Q7 (Oblique Pattern vs Structure matrix)
  {
    order: 7,
    id: "q_l8_7",
    targetLetter: "b",
    options: [
      { text: "Pattern matrix contains extracted eigenvalues; structure matrix contains the eigenvectors derived from spectral decomposition", isCorrect: false },
      { text: "Pattern matrix contains unique regression weights of factors on variables; Structure matrix contains simple correlations between variables and factors", isCorrect: true },
      { text: "Pattern matrix is formulated for metric ratio scales; structure matrix is designed exclusively for nonmetric categorical cross-tabulations", isCorrect: false },
      { text: "Pattern matrix contains residual correlations $R_{\\text{res}}$; structure matrix contains reproduced correlation coefficients $\\hat{R}$", isCorrect: false },
      { text: "Pattern matrix is computed prior to extraction; structure matrix is computed only after completing iterative communality convergence", isCorrect: false },
      { text: "Pattern and structure matrices are identical in oblique solutions, differing only by an arbitrary constant reflection multiplier of $-1$", isCorrect: false }
    ]
  },
  // Q8 (Action if individual variable KMO is 0.42)
  {
    order: 8,
    id: "q_l8_8",
    targetLetter: "d",
    options: [
      { text: "Double the empirical sample size $n$ and re-estimate the factor model immediately to inflate the variable's degrees of freedom", isCorrect: false },
      { text: "Apply an orthogonal Quartimax rotation to force the variable's communality to unity ($h_j^2 = 1.0$), eliminating its unique variance", isCorrect: false },
      { text: "Recode the continuous variable into an ordinal 5-point ranking to reduce measurement error in the sample correlation matrix", isCorrect: false },
      { text: "Consider dropping this variable from the analysis; an individual KMO below 0.50 (\"unacceptable\") indicates it does not share common variance with others", isCorrect: true },
      { text: "Take no action; individual KMO values are purely decorative diagnostic indicators that have zero mathematical impact on factor solutions", isCorrect: false },
      { text: "Subtract the variable from the multivariate centroid to force its partial correlations to zero in the anti-image matrix", isCorrect: false }
    ]
  },
  // Q9 (Deciding between PCA and FA for credit scoring index)
  {
    order: 9,
    id: "q_l8_9",
    targetLetter: "a",
    options: [
      { text: "PCA, because the objective is data reduction and formative index construction (combining all indicator variance into a practical composite score)", isCorrect: true },
      { text: "Factor Analysis, because creditworthiness is an unobservable nonmetric construct that requires iterative Maximum Likelihood extraction", isCorrect: false },
      { text: "Correspondence Analysis, because all banking and financial ratio indicators are nonmetric qualitative contingency classifications", isCorrect: false },
      { text: "Factor Analysis, because commercial credit scoring requires identifying unique measurement error and specific variance in balance sheets", isCorrect: false },
      { text: "Neither technique is valid; banking credit scores must be constructed exclusively using Multidimensional Scaling (MDS) similarity maps", isCorrect: false },
      { text: "PCA, because PCA eliminates degrees of freedom constraints and guarantees that all component scores will be normally distributed", isCorrect: false }
    ]
  },
  // Q10 (Why FA required for latent trust survey)
  {
    order: 10,
    id: "q_l10_level8",
    id_actual: "q_l8_10",
    targetLetter: "e",
    options: [
      { text: "Because PCA cannot mathematically analyze survey items that are measured on 5-point Likert scales with uniform category intervals", isCorrect: false },
      { text: "Because Factor Analysis guarantees that 100% of total indicator variance will be explained by the extracted common factor dimensions", isCorrect: false },
      { text: "Because psychological trust can only be measured using Euclidean distance metrics in multidimensional observation space", isCorrect: false },
      { text: "Because PCA always extracts oblique correlated components by default, violating statistical orthogonality across latent dimensions", isCorrect: false },
      { text: "Because survey items are reflective indicators of an unobservable latent construct (Trust); FA isolates the shared common factor and separates unique error", isCorrect: true },
      { text: "Because psychological constructs are constrained by measurement theory to have eigenvalues equal to the number of survey questions", isCorrect: false }
    ]
  },
  // Q11 (When KMO approaches 1.0)
  {
    order: 11,
    id: "q_l8_11",
    targetLetter: "c",
    options: [
      { text: "When all pairwise bivariate correlations $r_{jk}$ approach zero, indicating that observed variables share negligible linear association in empirical sample data", isCorrect: false },
      { text: "When the number of extracted common factors equals the total number of observations minus one: $m = n - 1$, saturating the model", isCorrect: false },
      { text: "When anti-image partial correlations $a_{jk}$ approach zero relative to bivariate correlations: $\\sum\\sum r_{jk}^2 / (\\sum\\sum r_{jk}^2 + \\sum\\sum a_{jk}^2) \\to 1.0$", isCorrect: true },
      { text: "When the determinant of the empirical correlation matrix equals zero, indicating perfect multicollinearity and complete redundancy across all observed indicators", isCorrect: false },
      { text: "When all variables have identical sample variances in Covariance PCA, equalizing diagonal weights across the spectral decomposition", isCorrect: false },
      { text: "When the Root Mean Square Residual (RMSR) reaches 1.0, indicating complete average discrepancy between empirical and model-reproduced correlation matrices", isCorrect: false }
    ]
  },
  // Q12 (SAS Proc Factor Method=prinit Rotate=varimax MSA Residuals)
  {
    order: 12,
    id: "q_l8_12",
    targetLetter: "f",
    options: [
      { text: "Principal Components Analysis on the covariance matrix; Quartimax factor rotation; Mean Square Analysis; and Bartlett sphericity test", isCorrect: false },
      { text: "Maximum Likelihood extraction; Oblique Promax rotation; Multiple Scale Analysis; and Durbin-Watson autocorrelation residual diagnostics", isCorrect: false },
      { text: "Alpha factor extraction; no rotation; Mean Standardized Association matrix; and Ordinary Least Squares parameter estimates", isCorrect: false },
      { text: "Correspondence analysis for nonmetric tables; Chi-square rotation; Multivariate Sampling Assessment; and leverage statistics", isCorrect: false },
      { text: "Ordinary least squares regression; Quartimax rotation; Kaiser-Meyer-Olkin sampling test; and collinearity tolerance diagnostic tables", isCorrect: false },
      { text: "Principal Axis Factoring (Iterated Principal Factor); Varimax orthogonal rotation; Kaiser-Meyer-Olkin MSA; and the residual correlation matrix $R - \\hat{R}$", isCorrect: true }
    ]
  }
];
