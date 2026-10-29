// Part 4 of Practice Questions (Segments 7 and 8: 36 questions)
export const practicePart4 = [
  // --- SEGMENT 7: ch3-fa-extraction (18 questions) ---
  {
    id: 'pq_s7_1',
    segment_id: 'ch3-fa-extraction',
    order_index: 101,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'Why does Factor Analysis have factor rotation indeterminacy?',
    options: [
      { id: 'a', text: 'Because eigenvalues are always negative' },
      { id: 'b', text: 'Because multiplying factor loadings by any orthogonal rotation matrix $T$ reproduces the exact same correlation matrix: $(\\Lambda T)(\\Lambda T)^T = \\Lambda \\Lambda^T$' },
      { id: 'c', text: 'Because sample size is less than 100' },
      { id: 'd', text: 'Because unique variances are zero' },
      { id: 'e', text: 'Because computers cannot calculate square roots' },
      { id: 'f', text: 'Because correlation matrices are non-symmetric' }
    ],
    correct_option: 'b',
    explanation: 'There are infinite geometric rotations of the factor axes that fit the observed correlations equally well, requiring an interpretability criterion to choose an orientation.'
  },
  {
    id: 'pq_s7_2',
    segment_id: 'ch3-fa-extraction',
    order_index: 102,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'What initial value is placed on the diagonal of the correlation matrix in Principal Components Factoring (PCF)?',
    options: [
      { id: 'a', text: '$0.0$' },
      { id: 'b', text: '$1.0$ (assuming all communalities initially equal 1.0)' },
      { id: 'c', text: 'Squared Multiple Correlations ($R_j^2$)' },
      { id: 'd', text: 'Sample means $\\bar{X}_j$' },
      { id: 'e', text: 'The RMSR value' },
      { id: 'f', text: 'Degrees of freedom' }
    ],
    correct_option: 'b',
    explanation: 'PCF bypasses initial communality estimation by placing 1.0 on the diagonal of $R$, performing spectral decomposition on total variance.'
  },
  {
    id: 'pq_s7_3',
    segment_id: 'ch3-fa-extraction',
    order_index: 103,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'What is the residual correlation matrix in factor analysis?',
    options: [
      { id: 'a', text: 'The inverse of the covariance matrix: $S^{-1}$' },
      { id: 'b', text: 'The difference between the observed correlation matrix and the model-reproduced correlation matrix: $R_{\\text{res}} = R - \\hat{R}$' },
      { id: 'c', text: 'The product of eigenvalues' },
      { id: 'd', text: 'The matrix of dummy variables' },
      { id: 'e', text: 'The anti-image correlation matrix' },
      { id: 'f', text: 'The sum of all factor loadings' }
    ],
    correct_option: 'b',
    explanation: '$R_{\\text{res}} = R - \\hat{R}$. The closer residual correlations are to zero, the better the factor model reproduces observed correlations.'
  },
  {
    id: 'pq_s7_4',
    segment_id: 'ch3-fa-extraction',
    order_index: 104,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'What rule of thumb for Root Mean Square Residual (RMSR) indicates an acceptable factor model fit?',
    options: [
      { id: 'a', text: '$\\text{RMSR} > 1.0$' },
      { id: 'b', text: '$\\text{RMSR} < 0.08$ (with $< 0.05$ indicating outstanding fit)' },
      { id: 'c', text: '$\\text{RMSR} = 0.50$' },
      { id: 'd', text: '$\\text{RMSR} < 0.0001$' },
      { id: 'e', text: '$\\text{RMSR}$ must equal the first eigenvalue' },
      { id: 'f', text: '$\\text{RMSR}$ must be negative' }
    ],
    correct_option: 'b',
    explanation: 'An RMSR below 0.08 indicates that the average residual correlation between items is small, confirming good model fit.'
  },
  {
    id: 'pq_s7_5',
    segment_id: 'ch3-fa-extraction',
    order_index: 105,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'What is the most widely recommended initial communality estimate used in Principal Axis Factoring (PAF)?',
    options: [
      { id: 'a', text: 'Zero ($0.0$)' },
      { id: 'b', text: 'The Squared Multiple Correlation ($R_j^2$) of each variable regressed on all remaining $p - 1$ variables' },
      { id: 'c', text: 'The sample standard deviation $s_j$' },
      { id: 'd', text: 'The maximum off-diagonal correlation plus 1' },
      { id: 'e', text: 'The eigenvalue $\\lambda_1$' },
      { id: 'f', text: 'The Kaiser-Meyer-Olkin index' }
    ],
    correct_option: 'b',
    explanation: 'The squared multiple correlation $R_j^2$ represents the variance shared with all other indicators in the dataset, serving as the best lower bound for communality.'
  },
  {
    id: 'pq_s7_6',
    segment_id: 'ch3-fa-extraction',
    order_index: 106,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'What is the "reduced correlation matrix" $R_r$ in Principal Axis Factoring?',
    options: [
      { id: 'a', text: 'The matrix obtained by deleting outliers' },
      { id: 'b', text: 'The correlation matrix $R$ with its diagonal 1s replaced by estimated communalities: $R_r = R - \\text{diag}(1 - h_j^2)$' },
      { id: 'c', text: 'A correlation matrix with fewer variables' },
      { id: 'd', text: 'The matrix of regression residuals' },
      { id: 'e', text: 'The anti-image correlation matrix' },
      { id: 'f', text: 'An identity matrix' }
    ],
    correct_option: 'b',
    explanation: '$R_r$ replaces 1.0 on the diagonal with prior communalities $h_j^2$. Factoring $R_r$ extracts only common variance and discards uniqueness.'
  },
  {
    id: 'pq_s7_7',
    segment_id: 'ch3-fa-extraction',
    order_index: 107,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'What mathematical assumption is required for Maximum Likelihood Factoring (MLF) that is NOT required for PAF or PCF?',
    options: [
      { id: 'a', text: 'Variables must follow a multivariate normal distribution' },
      { id: 'b', text: 'Variables must be measured on a nominal scale' },
      { id: 'c', text: 'All correlations must be positive' },
      { id: 'd', text: 'Sample size must be smaller than 30' },
      { id: 'e', text: 'Factors must be oblique' },
      { id: 'f', text: 'The trace must be equal to 1.0' }
    ],
    correct_option: 'a',
    explanation: 'MLF uses the likelihood function of the multivariate normal distribution to estimate parameters and compute $\\chi^2$ goodness-of-fit tests.'
  },
  {
    id: 'pq_s7_8',
    segment_id: 'ch3-fa-extraction',
    order_index: 108,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'What statistical hypothesis is evaluated by the $\\chi^2$ test in Maximum Likelihood Factor Analysis?',
    options: [
      { id: 'a', text: 'Null hypothesis that all eigenvalues are equal to zero' },
      { id: 'b', text: 'Null hypothesis that the specified $m$ common factors are sufficient to account for the population correlation matrix ($H_0: \\Sigma = \\Lambda \\Lambda^T + \\Psi$)' },
      { id: 'c', text: 'Null hypothesis that sample size equals 100' },
      { id: 'd', text: 'Null hypothesis that the correlation matrix is an identity matrix' },
      { id: 'e', text: 'Null hypothesis that communalities equal 1.0' },
      { id: 'f', text: 'Null hypothesis that factors are correlated' }
    ],
    correct_option: 'b',
    explanation: 'A non-significant $\\chi^2$ test ($p > 0.05$) indicates that the $m$-factor model is adequate and that remaining discrepancies are attributable to sampling error.'
  },
  {
    id: 'pq_s7_9',
    segment_id: 'ch3-fa-extraction',
    order_index: 109,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'How does iterative Principal Axis Factoring (PAF) update communalities across iterations?',
    options: [
      { id: 'a', text: 'By adding 0.1 to each diagonal element' },
      { id: 'b', text: 'By calculating new communalities from extracted factor loadings ($h_j^2 = \\sum \\lambda_{jk}^2$), placing them back on the diagonal of $R_r$, and re-extracting until differences are smaller than a convergence tolerance (e.g. $0.001$)' },
      { id: 'c', text: 'By inverting the residual correlation matrix' },
      { id: 'd', text: 'By setting communalities equal to eigenvalues' },
      { id: 'e', text: 'By dividing loadings by degrees of freedom' },
      { id: 'f', text: 'By multiplying by the KMO index' }
    ],
    correct_option: 'b',
    explanation: 'PAF iteratively refines communalities until the diagonal values stabilizing within a specified tolerance $\\epsilon$, resolving the communality circularity.'
  },
  {
    id: 'pq_s7_10',
    segment_id: 'ch3-fa-extraction',
    order_index: 110,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'What is a major advantage of Principal Components Factoring (PCF) over iterative methods like PAF or MLF?',
    options: [
      { id: 'a', text: 'PCF isolates common variance more cleanly than PAF' },
      { id: 'b', text: 'PCF is computationally robust, guarantees positive semi-definiteness, and avoids non-convergence or Heywood cases' },
      { id: 'c', text: 'PCF provides formal $\\chi^2$ hypothesis tests' },
      { id: 'd', text: 'PCF produces oblique factors' },
      { id: 'e', text: 'PCF does not require metric variables' },
      { id: 'f', text: 'PCF does not require rotation' }
    ],
    correct_option: 'b',
    explanation: 'Because PCF factors the full correlation matrix $R$ (which is always positive semi-definite), it never fails to converge and never produces improper negative uniquenesses.'
  },
  {
    id: 'pq_s7_11',
    segment_id: 'ch3-fa-extraction',
    order_index: 111,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'What is the risk of "over-factoring" (extracting more factors than truly exist in the population)?',
    options: [
      { id: 'a', text: 'Total variance becomes negative' },
      { id: 'b', text: 'Factors split into uninterpretable fragments, loadings on substantive factors become attenuated, and random error is extracted as pseudo-factors' },
      { id: 'c', text: 'Degrees of freedom become infinite' },
      { id: 'd', text: 'The correlation matrix becomes singular' },
      { id: 'e', text: 'Heywood cases become impossible' },
      { id: 'f', text: 'The KMO index drops to zero' }
    ],
    correct_option: 'b',
    explanation: 'Extracting too many factors dilutes meaningful constructs, splits single factors across trivial components, and models sample-specific noise.'
  },
  {
    id: 'pq_s7_12',
    segment_id: 'ch3-fa-extraction',
    order_index: 112,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'What happens to the reduced correlation matrix $R_r$ in PAF that can cause some eigenvalues to be negative?',
    options: [
      { id: 'a', text: 'Because sample size is small' },
      { id: 'b', text: 'Because placing communalities $h^2 < 1$ on the diagonal reduces the matrix trace below $p$, and $R_r$ is not necessarily positive semi-definite' },
      { id: 'c', text: 'Because Bartlett\'s test was rejected' },
      { id: 'd', text: 'Because variables were standardized' },
      { id: 'e', text: 'Because of Bessel\'s correction' },
      { id: 'f', text: 'Because of rounding errors' }
    ],
    correct_option: 'b',
    explanation: 'Replacing 1s with communality estimates $h_j^2 < 1$ can cause $R_r$ to have negative eigenvalues for trailing factors, representing negative residual variance.'
  },
  {
    id: 'pq_s7_13',
    segment_id: 'ch3-fa-extraction',
    order_index: 113,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'What do the off-diagonal elements of the residual correlation matrix $R_{\\text{res}}$ represent?',
    options: [
      { id: 'a', text: 'The proportion of explained variance' },
      { id: 'b', text: 'The residual pairwise linear correlations between variables that the factor model failed to explain' },
      { id: 'c', text: 'The factor pattern loadings' },
      { id: 'd', text: 'The squared multiple correlations' },
      { id: 'e', text: 'The degrees of freedom' },
      { id: 'f', text: 'The sample means' }
    ],
    correct_option: 'b',
    explanation: 'Each element $r_{jk} - \\hat{r}_{jk}$ shows how closely the factor model reproduced the observed correlation between variables $j$ and $k$.'
  },
  {
    id: 'pq_s7_14',
    segment_id: 'ch3-fa-extraction',
    order_index: 114,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'In the course example, an RMSR value of $0.078$ was obtained. How should this model fit be evaluated?',
    options: [
      { id: 'a', text: 'Completely unacceptable fit' },
      { id: 'b', text: 'Good factor model fit (since $0.078 < 0.08$)' },
      { id: 'c', text: 'Over-fitted model requiring factor deletion' },
      { id: 'd', text: 'Singular covariance matrix' },
      { id: 'e', text: 'Zero degrees of freedom' },
      { id: 'f', text: 'Heywood case' }
    ],
    correct_option: 'b',
    explanation: 'Standard psychometric benchmarks consider $\\text{RMSR} < 0.08$ to represent a good, reliable model fit.'
  },
  {
    id: 'pq_s7_15',
    segment_id: 'ch3-fa-extraction',
    order_index: 115,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'How does under-factoring (extracting fewer factors than true) distort factor loadings?',
    options: [
      { id: 'a', text: 'It creates Heywood cases automatically' },
      { id: 'b', text: 'It forces distinct latent constructs into a single blended factor, inflating loadings and producing large residual correlations' },
      { id: 'c', text: 'It makes the trace equal to zero' },
      { id: 'd', text: 'It causes the KMO to become 1.0' },
      { id: 'e', text: 'It converts the model into regression' },
      { id: 'f', text: 'It eliminates all measurement error' }
    ],
    correct_option: 'b',
    explanation: 'Extracting too few factors lumps disparate constructs together, distorting factor meanings and leaving substantial correlation unexplained.'
  },
  {
    id: 'pq_s7_16',
    segment_id: 'ch3-fa-extraction',
    order_index: 116,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'Why does Maximum Likelihood Factoring become sensitive and prone to poor estimates when sample size is small ($n < 100$)?',
    options: [
      { id: 'a', text: 'Because eigenvalues cannot be computed for $n < 100$' },
      { id: 'b', text: 'Because asymptotic properties of maximum likelihood estimators require large samples; small samples lead to frequent non-convergence and inflated $\\chi^2$ rejection rates' },
      { id: 'c', text: 'Because small samples make variables nonmetric' },
      { id: 'd', text: 'Because rotation is impossible when $n < 100$' },
      { id: 'e', text: 'Because the determinant equals 0' },
      { id: 'f', text: 'Because RMSR is only defined for large samples' }
    ],
    correct_option: 'b',
    explanation: 'ML relies on asymptotic normality. In small samples, parameter estimates are unstable and convergence failure or Heywood cases occur frequently.'
  },
  {
    id: 'pq_s7_17',
    segment_id: 'ch3-fa-extraction',
    order_index: 117,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'If the observed correlation between variables 1 and 2 is $r_{12} = 0.65$ and the 2-factor model reproduces $\\hat{r}_{12} = 0.62$, what is the residual correlation?',
    options: [
      { id: 'a', text: '$1.27$' },
      { id: 'b', text: '$+0.03$' },
      { id: 'c', text: '$-0.03$' },
      { id: 'd', text: '$0.403$' },
      { id: 'e', text: '$0.00$' },
      { id: 'f', text: '$0.078$' }
    ],
    correct_option: 'b',
    explanation: 'Residual correlation is $r_{12} - \\hat{r}_{12} = 0.65 - 0.62 = +0.03$.'
  },
  {
    id: 'pq_s7_18',
    segment_id: 'ch3-fa-extraction',
    order_index: 118,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'Why is the communality circularity dilemma not present in Principal Components Analysis?',
    options: [
      { id: 'a', text: 'Because PCA does not decompose variance into common and unique portions; it analyzes the total observed variance with 1s on the diagonal of $R$' },
      { id: 'b', text: 'Because PCA uses oblique rotation' },
      { id: 'c', text: 'Because PCA does not use correlation matrices' },
      { id: 'd', text: 'Because PCA always assumes 1 factor' },
      { id: 'e', text: 'Because PCA requires ratio data' },
      { id: 'f', text: 'Because eigenvalues are zero in PCA' }
    ],
    correct_option: 'a',
    explanation: 'PCA does not model uniqueness. The diagonal elements are simply the known sample variances (or 1.0 for standardized data), eliminating circularity.'
  },

  // --- SEGMENT 8: ch3-fa-rotation-evaluation (18 questions) ---
  {
    id: 'pq_s8_1',
    segment_id: 'ch3-fa-rotation-evaluation',
    order_index: 101,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'What is the primary objective of factor rotation in exploratory factor analysis?',
    options: [
      { id: 'a', text: 'To change the communalities of the variables' },
      { id: 'b', text: 'To achieve Thurstone\'s Simple Structure, making factor loadings easier to interpret substantively' },
      { id: 'c', text: 'To increase the sample size' },
      { id: 'd', text: 'To reduce the number of observations' },
      { id: 'e', text: 'To make the correlation matrix singular' },
      { id: 'f', text: 'To force all loadings to be positive' }
    ],
    correct_option: 'b',
    explanation: 'Rotation redistributes variance among extracted factors to produce simple structure: each variable loads heavily on one factor and near zero on others.'
  },
  {
    id: 'pq_s8_2',
    segment_id: 'ch3-fa-rotation-evaluation',
    order_index: 102,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'What is the most widely utilized orthogonal factor rotation technique in multivariate research?',
    options: [
      { id: 'a', text: 'Promax' },
      { id: 'b', text: 'Varimax' },
      { id: 'c', text: 'Direct Oblimin' },
      { id: 'd', text: 'Equamax' },
      { id: 'e', text: 'Quartimax' },
      { id: 'f', text: 'Kaiser-Guttman' }
    ],
    correct_option: 'b',
    explanation: 'Varimax (developed by Henry Kaiser, 1958) is the standard orthogonal rotation, maximizing the variance of squared loadings across variables within each factor.'
  },
  {
    id: 'pq_s8_3',
    segment_id: 'ch3-fa-rotation-evaluation',
    order_index: 103,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'What is the minimum Kaiser-Meyer-Olkin (KMO) value required to consider data acceptable for factor analysis?',
    options: [
      { id: 'a', text: 'At least $0.90$' },
      { id: 'b', text: 'At least $0.50$ (values below $0.50$ are unacceptable)' },
      { id: 'c', text: 'At least $0.10$' },
      { id: 'd', text: 'At least $1.00$' },
      { id: 'e', text: 'At least $5.00$' },
      { id: 'f', text: 'Negative values only' }
    ],
    correct_option: 'b',
    explanation: 'Kaiser established that $\\text{KMO} < 0.50$ indicates unacceptable sampling adequacy, meaning correlations between variables are too weak for factor analysis.'
  },
  {
    id: 'pq_s8_4',
    segment_id: 'ch3-fa-rotation-evaluation',
    order_index: 104,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'What does a statistically significant result ($p < 0.05$) in Bartlett\'s Test of Sphericity confirm?',
    options: [
      { id: 'a', text: 'That the population correlation matrix is an identity matrix ($R = I$)' },
      { id: 'b', text: 'That the correlation matrix is significantly different from an identity matrix, confirming sufficient correlation to proceed with factor analysis' },
      { id: 'c', text: 'That all communalities equal 1.0' },
      { id: 'd', text: 'That there are no outliers' },
      { id: 'e', text: 'That the factors are oblique' },
      { id: 'f', text: 'That the sample size is too small' }
    ],
    correct_option: 'b',
    explanation: 'Bartlett tests $H_0: R = I$. Rejecting $H_0$ ($p < 0.05$) proves variables are correlated enough to share common latent factors.'
  },
  {
    id: 'pq_s8_5',
    segment_id: 'ch3-fa-rotation-evaluation',
    order_index: 105,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'What is the fundamental difference between orthogonal rotation (Varimax) and oblique rotation (Promax / Direct Oblimin)?',
    options: [
      { id: 'a', text: 'Orthogonal rotation allows factors to correlate, while oblique keeps them at $90^\\circ$' },
      { id: 'b', text: 'Orthogonal rotation constrains factors to remain strictly uncorrelated ($90^\\circ$), while oblique rotation permits factors to be correlated' },
      { id: 'c', text: 'Orthogonal rotation is only used for dummy variables' },
      { id: 'd', text: 'Oblique rotation increases the total variance' },
      { id: 'e', text: 'Orthogonal rotation produces two matrices: Pattern and Structure' },
      { id: 'f', text: 'Oblique rotation cannot compute communalities' }
    ],
    correct_option: 'b',
    explanation: 'Orthogonal keeps axes perpendicular (uncorrelated). Oblique allows acute/obtuse angles, letting real-world latent constructs correlate with each other.'
  },
  {
    id: 'pq_s8_6',
    segment_id: 'ch3-fa-rotation-evaluation',
    order_index: 106,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'In an oblique factor rotation, what does the Factor Pattern Matrix represent?',
    options: [
      { id: 'a', text: 'The simple Pearson correlation between variables and factors' },
      { id: 'b', text: 'The unique standardized partial regression coefficients of variables on factors, controlling for all other factors' },
      { id: 'c', text: 'The residual correlation matrix' },
      { id: 'd', text: 'The anti-image correlation matrix' },
      { id: 'e', text: 'The eigenvalues of the reduced correlation matrix' },
      { id: 'f', text: 'The sample covariance matrix' }
    ],
    correct_option: 'b',
    explanation: 'The Pattern matrix contains partial regression weights, isolating the unique contribution of each factor to the indicator while partialling out correlated factors.'
  },
  {
    id: 'pq_s8_7',
    segment_id: 'ch3-fa-rotation-evaluation',
    order_index: 107,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'How are the Factor Structure Matrix ($S$) and Factor Pattern Matrix ($P$) related in oblique factor analysis?',
    options: [
      { id: 'a', text: '$S = P + I$' },
      { id: 'b', text: '$S = P \\Phi$, where $\\Phi$ is the factor correlation matrix' },
      { id: 'c', text: '$S = P^{-1}$' },
      { id: 'd', text: '$S = P / \\lambda$' },
      { id: 'e', text: '$S = P^T P$' },
      { id: 'f', text: '$S = \\det(P) \\Phi$' }
    ],
    correct_option: 'b',
    explanation: 'The Structure matrix (simple correlations) equals the Pattern matrix (partial weights) multiplied by the factor intercorrelation matrix $\\Phi$: $S = P \\Phi$.'
  },
  {
    id: 'pq_s8_8',
    segment_id: 'ch3-fa-rotation-evaluation',
    order_index: 108,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'What does it mean if an individual variable has a Measure of Sampling Adequacy (individual MSA on the anti-image diagonal) of $MSA_j = 0.38$?',
    options: [
      { id: 'a', text: 'The variable is an ideal indicator' },
      { id: 'b', text: 'The variable does not share sufficient correlation with other items and should be considered for removal to improve overall model KMO' },
      { id: 'c', text: 'The variable has zero variance' },
      { id: 'd', text: 'The variable is an exact dummy variable' },
      { id: 'e', text: 'The variable has high communality' },
      { id: 'f', text: 'The variable is normally distributed' }
    ],
    correct_option: 'b',
    explanation: 'Variables with individual $MSA < 0.50$ fit poorly into the common factor structure. Dropping them raises the overall KMO of the remaining scale.'
  },
  {
    id: 'pq_s8_9',
    segment_id: 'ch3-fa-rotation-evaluation',
    order_index: 109,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'What is the mathematical definition of Thurstone\'s Simple Structure in factor analysis?',
    options: [
      { id: 'a', text: 'All variables have identical means and variances' },
      { id: 'b', text: 'Each factor has several near-zero loadings and a few high loadings; each variable loads strongly on only one factor and near zero on all others' },
      { id: 'c', text: 'The correlation matrix equals the identity matrix' },
      { id: 'd', text: 'All communalities equal 0.50' },
      { id: 'e', text: 'The eigenvalues decrease linearly' },
      { id: 'f', text: 'The sample size is greater than 500' }
    ],
    correct_option: 'b',
    explanation: 'Thurstone defined simple structure to eliminate cross-loadings, ensuring unambiguous substantive interpretation of each factor.'
  },
  {
    id: 'pq_s8_10',
    segment_id: 'ch3-fa-rotation-evaluation',
    order_index: 110,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'How does Confirmatory Factor Analysis (CFA) differ fundamentally from Exploratory Factor Analysis (EFA)?',
    options: [
      { id: 'a', text: 'CFA is only for ordinal scales, while EFA is for metric scales' },
      { id: 'b', text: 'In EFA, all variables load on all factors; in CFA, the researcher pre-specifies which variables load on which factors based on theory and tests model fit via structural equation modeling' },
      { id: 'c', text: 'EFA does not compute loadings' },
      { id: 'd', text: 'CFA does not compute error variances' },
      { id: 'e', text: 'CFA cannot evaluate fit indices' },
      { id: 'f', text: 'EFA requires sample sizes over 10,000' }
    ],
    correct_option: 'b',
    explanation: 'EFA is data-driven; all cross-loadings are freely estimated. CFA is theory-driven; non-hypothesized loadings are fixed to zero, and model fit is tested via SEM indices (RMSEA, CFI).'
  },
  {
    id: 'pq_s8_11',
    segment_id: 'ch3-fa-rotation-evaluation',
    order_index: 111,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'Why does an oblique rotation generally produce factor loadings that are easier to interpret than orthogonal rotations in social science research?',
    options: [
      { id: 'a', text: 'Because social science constructs (such as anxiety, depression, satisfaction, and loyalty) are naturally correlated in reality' },
      { id: 'b', text: 'Because oblique rotations make all eigenvalues equal to 1.0' },
      { id: 'c', text: 'Because orthogonal rotation produces negative communalities' },
      { id: 'd', text: 'Because oblique rotation does not require Bartlett\'s test' },
      { id: 'e', text: 'Because sample size is irrelevant in oblique rotation' },
      { id: 'f', text: 'Because oblique rotation eliminates all unique variance' }
    ],
    correct_option: 'a',
    explanation: 'Forcing real-world constructs to be uncorrelated ($90^\\circ$) is often an artificial constraint. Allowing natural correlations yields cleaner pattern matrices.'
  },
  {
    id: 'pq_s8_12',
    segment_id: 'ch3-fa-rotation-evaluation',
    order_index: 112,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'In the KMO formula $\\text{KMO} = \\frac{\\sum \\sum r_{jk}^2}{\\sum \\sum r_{jk}^2 + \\sum \\sum a_{jk}^2}$, what are the $a_{jk}$ terms?',
    options: [
      { id: 'a', text: 'The sample means' },
      { id: 'b', text: 'The anti-image partial correlation coefficients between variables $j$ and $k$ after controlling for all other variables' },
      { id: 'c', text: 'The eigenvalues of the covariance matrix' },
      { id: 'd', text: 'The degrees of freedom' },
      { id: 'e', text: 'The regression intercepts' },
      { id: 'f', text: 'The unique variances' }
    ],
    correct_option: 'b',
    explanation: 'The $a_{jk}$ are anti-image partial correlations. If true common factors exist, the partial correlations should approach 0, driving the denominator toward the numerator and KMO toward 1.0.'
  },
  {
    id: 'pq_s8_13',
    segment_id: 'ch3-fa-rotation-evaluation',
    order_index: 113,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'According to Kaiser\'s KMO classification, how is a KMO value of $0.85$ described?',
    options: [
      { id: 'a', text: 'Unacceptable' },
      { id: 'b', text: 'Meritorious' },
      { id: 'c', text: 'Mediocre' },
      { id: 'd', text: 'Middling' },
      { id: 'e', text: 'Singular' },
      { id: 'f', text: 'Degenerate' }
    ],
    correct_option: 'b',
    explanation: 'Kaiser\'s benchmarks: $\\ge 0.90$ Marvelous, $\\ge 0.80$ Meritorious, $\\ge 0.70$ Middling, $\\ge 0.60$ Mediocre, $< 0.50$ Unacceptable. $0.85$ is Meritorious.'
  },
  {
    id: 'pq_s8_14',
    segment_id: 'ch3-fa-rotation-evaluation',
    order_index: 114,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'Does factor rotation change the total communality ($h_j^2$) of a variable or the total common variance explained by all factors combined?',
    options: [
      { id: 'a', text: 'Yes, rotation increases total communality by $50\\%$' },
      { id: 'b', text: 'No, orthogonal rotation redistributes variance among factors but leaves total communality and total common variance strictly unchanged' },
      { id: 'c', text: 'Yes, rotation reduces communality to zero' },
      { id: 'd', text: 'Only in oblique rotation' },
      { id: 'e', text: 'Only if sample size is less than 50' },
      { id: 'f', text: 'Yes, rotation changes the degrees of freedom' }
    ],
    correct_option: 'b',
    explanation: 'Rigid orthogonal rotation rotates the coordinate frame in common factor space. Total variance explained across all $m$ factors remains exactly invariant.'
  },
  {
    id: 'pq_s8_15',
    segment_id: 'ch3-fa-rotation-evaluation',
    order_index: 115,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'What is the Quartimax rotation criterion designed to simplify?',
    options: [
      { id: 'a', text: 'It simplifies columns of the factor loading matrix' },
      { id: 'b', text: 'It simplifies rows of the factor loading matrix (the variables), attempting to make each variable load on as few factors as possible' },
      { id: 'c', text: 'It simplifies the sample covariance matrix' },
      { id: 'd', text: 'It eliminates all negative eigenvalues' },
      { id: 'e', text: 'It calculates the condition number' },
      { id: 'f', text: 'It rotates axes by $45^\\circ$' }
    ],
    correct_option: 'b',
    explanation: 'Quartimax maximizes the variance of squared loadings across rows (variables). However, it often produces a general factor, making Varimax (column simplification) more popular.'
  },
  {
    id: 'pq_s8_16',
    segment_id: 'ch3-fa-rotation-evaluation',
    order_index: 116,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'In an oblique Promax rotation, what does power parameter $k$ (typically set to 4) do?',
    options: [
      { id: 'a', text: 'It extracts $k$ additional factors' },
      { id: 'b', text: 'It raises the initial Varimax loadings to power $k$, suppressing small loadings toward zero while magnifying large loadings to establish target oblique positions' },
      { id: 'c', text: 'It multiplies the sample size by $k$' },
      { id: 'd', text: 'It calculates the $k$-th derivative of the likelihood' },
      { id: 'e', text: 'It deletes $k$ outlier observations' },
      { id: 'f', text: 'It sets the condition number' }
    ],
    correct_option: 'b',
    explanation: 'Raising loadings to powers like 4 drastically separates large and small loadings, creating an ideal target matrix for the oblique transformation.'
  },
  {
    id: 'pq_s8_17',
    segment_id: 'ch3-fa-rotation-evaluation',
    order_index: 117,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'Which fit index in Confirmatory Factor Analysis measures the discrepancy per degree of freedom, with values $< 0.06$ indicating good fit?',
    options: [
      { id: 'a', text: 'Cronbach\'s Alpha' },
      { id: 'b', text: 'Root Mean Square Error of Approximation (RMSEA)' },
      { id: 'c', text: 'Kaiser-Meyer-Olkin index' },
      { id: 'd', text: 'Eigenvalue condition number' },
      { id: 'e', text: 'Bessel correction factor' },
      { id: 'f', text: 'Bartlett sphericity statistic' }
    ],
    correct_option: 'b',
    explanation: 'RMSEA evaluates how well the hypothesized model fits the population covariance matrix per degree of freedom. Values $< 0.06$ indicate good fit.'
  },
  {
    id: 'pq_s8_18',
    segment_id: 'ch3-fa-rotation-evaluation',
    order_index: 118,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'In a final multivariate study, when is it most advantageous to use Exploratory Factor Analysis over Principal Components Analysis?',
    options: [
      { id: 'a', text: 'When the objective is strictly data compression without any concern for underlying psychological or latent theoretical concepts' },
      { id: 'b', text: 'When the researcher wants to identify unobservable latent constructs that account for common covariation while explicitly partitioning out measurement error and specific variance' },
      { id: 'c', text: 'When all variables are perfectly uncorrelated' },
      { id: 'd', text: 'When the sample size is less than 10' },
      { id: 'e', text: 'When variables are measured on a nominal scale' },
      { id: 'f', text: 'When communalities are unknown' }
    ],
    correct_option: 'b',
    explanation: 'Factor Analysis is designed for latent variable modeling where observed indicators reflect unobserved constructs, isolating common variance from error.'
  }
];

console.log('Practice Part 4 loaded (36 questions across Segments 7 and 8).');
