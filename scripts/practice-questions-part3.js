// Part 3 of Practice Questions (Segments 5 and 6: 36 questions)
export const practicePart3 = [
  // --- SEGMENT 5: ch2-pca-interpretation (18 questions) ---
  {
    id: 'pq_s5_1',
    segment_id: 'ch2-pca-interpretation',
    order_index: 101,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'In Correlation PCA, how is the factor loading $l_{ji}$ computed from the eigenvector weight $w_{ij}$ and eigenvalue $\\lambda_i$?',
    options: [
      { id: 'a', text: '$l_{ji} = w_{ij} / \\lambda_i$' },
      { id: 'b', text: '$l_{ji} = w_{ij} \\sqrt{\\lambda_i}$' },
      { id: 'c', text: '$l_{ji} = w_{ij} + \\lambda_i$' },
      { id: 'd', text: '$l_{ji} = \\lambda_i^2 / w_{ij}$' },
      { id: 'e', text: '$l_{ji} = w_{ij} \\bar{X}_j$' },
      { id: 'f', text: '$l_{ji} = 1.0$' }
    ],
    correct_option: 'b',
    explanation: 'In Correlation PCA, all input variables have standard deviation $s_j = 1$. The loading formula $l_{ji} = w_{ij} \\frac{\\sqrt{\\lambda_i}}{s_j}$ reduces to $l_{ji} = w_{ij} \\sqrt{\\lambda_i}$.'
  },
  {
    id: 'pq_s5_2',
    segment_id: 'ch2-pca-interpretation',
    order_index: 102,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'What is the sum of squared factor loadings for a single principal component $PC_i$ across all $p$ variables: $\\sum_{j=1}^p l_{ji}^2$?',
    options: [
      { id: 'a', text: 'It equals 1.0' },
      { id: 'b', text: 'It equals the component\'s eigenvalue $\\lambda_i$' },
      { id: 'c', text: 'It equals the sample size $n$' },
      { id: 'd', text: 'It equals the determinant $\\det(S)$' },
      { id: 'e', text: 'It equals 0' },
      { id: 'f', text: 'It equals the trace of the correlation matrix' }
    ],
    correct_option: 'b',
    explanation: 'Since $l_{ji} = w_{ij}\\sqrt{\\lambda_i}$ and $\\sum w_{ij}^2 = 1$, we have $\\sum_{j=1}^p l_{ji}^2 = \\sum w_{ij}^2 \\lambda_i = \\lambda_i \\sum w_{ij}^2 = \\lambda_i(1) = \\lambda_i$.'
  },
  {
    id: 'pq_s5_3',
    segment_id: 'ch2-pca-interpretation',
    order_index: 103,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'In the Portuguese regional study, what did the First Principal Component ($PC_1$) primarily measure?',
    options: [
      { id: 'a', text: 'Agricultural wine production' },
      { id: 'b', text: 'Public infrastructure in healthcare and culture (doctors, hospital beds, and libraries)' },
      { id: 'c', text: 'Unemployment and inflation rates' },
      { id: 'd', text: 'International tourism revenue' },
      { id: 'e', text: 'Transportation highway length' },
      { id: 'f', text: 'High-tech startup density' }
    ],
    correct_option: 'b',
    explanation: '$PC_1$ had very strong positive loadings ($> 0.93$) on practicing doctors (MED), hospital beds (HOS), and public libraries (BIB), representing social public infrastructure.'
  },
  {
    id: 'pq_s5_4',
    segment_id: 'ch2-pca-interpretation',
    order_index: 104,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'Why should the Kaiser-Guttman rule (eigenvalue $> 1.0$) NOT be applied to Covariance PCA?',
    options: [
      { id: 'a', text: 'Because Covariance PCA only has negative eigenvalues' },
      { id: 'b', text: 'Because in Covariance PCA, total variance is not $p$, and individual variable variances can be far larger or smaller than 1.0' },
      { id: 'c', text: 'Because Covariance PCA does not produce eigenvectors' },
      { id: 'd', text: 'Because SAS cannot compute Covariance PCA' },
      { id: 'e', text: 'Because eigenvalues are always equal to 0 in Covariance PCA' },
      { id: 'f', text: 'Because the Kaiser criterion is only for factor analysis' }
    ],
    correct_option: 'b',
    explanation: 'The cutoff of 1.0 is meaningful only when standardized variables each have variance 1.0. In Covariance PCA, an eigenvalue of 10 might be trivial if total variance is 100,000.'
  },
  {
    id: 'pq_s5_5',
    segment_id: 'ch2-pca-interpretation',
    order_index: 105,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'In Correlation PCA, what is the sum of squared factor loadings across all $p$ components for a single variable $X_j$: $\\sum_{i=1}^p l_{ji}^2$?',
    options: [
      { id: 'a', text: '$\\lambda_1$' },
      { id: 'b', text: 'Exactly $1.0$ (representing $100\\%$ of the standardized variable\'s variance)' },
      { id: 'c', text: '$p$' },
      { id: 'd', text: '$n - 1$' },
      { id: 'e', text: '$\\det(R)$' },
      { id: 'f', text: '$0.50$' }
    ],
    correct_option: 'b',
    explanation: 'Across all $p$ components, all variance of the standardized variable is fully accounted for: $\\sum_{i=1}^p l_{ji}^2 = \\text{Var}(X_j^*) = 1.0$.'
  },
  {
    id: 'pq_s5_6',
    segment_id: 'ch2-pca-interpretation',
    order_index: 106,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'What is a known limitation of the Kaiser criterion when the dataset contains a large number of variables (e.g., $p > 40$)?',
    options: [
      { id: 'a', text: 'It retains zero components' },
      { id: 'b', text: 'It has an inherent tendency to over-extract (retain too many components), retaining trivial components that capture little more than random noise' },
      { id: 'c', text: 'It converts the correlation matrix into an identity matrix' },
      { id: 'd', text: 'It causes eigenvalues to become imaginary' },
      { id: 'e', text: 'It inverts the factor loadings' },
      { id: 'f', text: 'It requires oblique rotation' }
    ],
    correct_option: 'b',
    explanation: 'With large $p$, many small eigenvalues will slightly exceed 1.0 purely by chance sampling fluctuation, leading the Kaiser rule to over-extract components.'
  },
  {
    id: 'pq_s5_7',
    segment_id: 'ch2-pca-interpretation',
    order_index: 107,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'On a PCA component score plot, what does it mean if Observation A and Observation B lie very close to each other in the space of $(PC_1, PC_2)$?',
    options: [
      { id: 'a', text: 'They have identical residual degrees of freedom' },
      { id: 'b', text: 'They share similar multivariate profiles across the primary dimensions of variation captured by the first two components' },
      { id: 'c', text: 'They are outliers that should be deleted' },
      { id: 'd', text: 'Their covariance is zero' },
      { id: 'e', text: 'Their raw data values are negative' },
      { id: 'f', text: 'They belong to different clusters' }
    ],
    correct_option: 'b',
    explanation: 'Proximity in the leading principal score space indicates high multivariate similarity along the major patterns of variation in the dataset.'
  },
  {
    id: 'pq_s5_8',
    segment_id: 'ch2-pca-interpretation',
    order_index: 108,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'What is a "bipolar" principal component?',
    options: [
      { id: 'a', text: 'A component with two identical eigenvalues' },
      { id: 'b', text: 'A component that has substantial positive loadings on one group of variables and substantial negative loadings on another group of variables' },
      { id: 'c', text: 'A component that switches signs between iterations' },
      { id: 'd', text: 'A component that only takes values of +1 and -1' },
      { id: 'e', text: 'A component whose variance exceeds $100\\%$' },
      { id: 'f', text: 'A component extracted from binary dummy variables' }
    ],
    correct_option: 'b',
    explanation: 'A bipolar component contrasts two opposing sets of variables (e.g., contrasting offensive capabilities with defensive metrics in athletic performance).'
  },
  {
    id: 'pq_s5_9',
    segment_id: 'ch2-pca-interpretation',
    order_index: 109,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'In Principal Component Regression (PCR), why are principal component scores used as independent variables instead of original predictors?',
    options: [
      { id: 'a', text: 'To increase the $R^2$ to 1.0' },
      { id: 'b', text: 'Because principal components are perfectly uncorrelated, eliminating multicollinearity and stabilizing coefficient variance estimates' },
      { id: 'c', text: 'To eliminate the need for an intercept term' },
      { id: 'd', text: 'Because PCR transforms regression into an interdependence method' },
      { id: 'e', text: 'To double the degrees of freedom' },
      { id: 'f', text: 'Because regression requires ratio scales' }
    ],
    correct_option: 'b',
    explanation: 'Multicollinearity inflates standard errors of regression coefficients. Because $PC$ scores have zero mutual correlation, PCR solves multicollinearity cleanly.'
  },
  {
    id: 'pq_s5_10',
    segment_id: 'ch2-pca-interpretation',
    order_index: 110,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'In the Portuguese regional study, Region LVT (Lisbon) had high positive scores on both $PC_1$ (Infrastructure: $+1.52$) and $PC_2$ (Wealth/Density: $+2.15$). In contrast, Alentejo had a positive score on $PC_1$ ($+0.45$) but a strongly negative score on $PC_2$ ($-1.20$). What does this contrast substantively mean?',
    options: [
      { id: 'a', text: 'Lisbon has no public hospitals' },
      { id: 'b', text: 'Lisbon combines both high economic density and high social infrastructure, whereas Alentejo has adequate healthcare/cultural provision per capita despite low population density and lower GDP' },
      { id: 'c', text: 'Alentejo is an outlier that violates the Kaiser criterion' },
      { id: 'd', text: 'The correlation matrix was singular' },
      { id: 'e', text: 'Lisbon should be removed from the dataset' },
      { id: 'f', text: 'Alentejo has higher GDP than Lisbon' }
    ],
    correct_option: 'b',
    explanation: 'The 2D score plot isolates the distinct profiles: Lisbon is the dense, high-GDP capital with strong infrastructure, whereas Alentejo is rural with high per-capita public beds/libraries but low density.'
  },
  {
    id: 'pq_s5_11',
    segment_id: 'ch2-pca-interpretation',
    order_index: 111,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'In Parallel Analysis (Horn, 1965) for component retention, how is the retention threshold determined?',
    options: [
      { id: 'a', text: 'By retaining all components with eigenvalues greater than 1.0' },
      { id: 'b', text: 'By generating multiple random datasets of identical size ($n \\times p$), calculating their average eigenvalues, and retaining only empirical components whose eigenvalues exceed the 95th percentile of the random eigenvalues' },
      { id: 'c', text: 'By checking where the Scree curve reaches zero' },
      { id: 'd', text: 'By computing the Bartlett test p-value' },
      { id: 'e', text: 'By testing if RMSR $< 0.05$' },
      { id: 'f', text: 'By running two PCA models in parallel on SAS and Python' }
    ],
    correct_option: 'b',
    explanation: 'Parallel Analysis simulates random noise to establish empirical baseline eigenvalues. Only components that explain more variance than pure random chance are retained.'
  },
  {
    id: 'pq_s5_12',
    segment_id: 'ch2-pca-interpretation',
    order_index: 112,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'What is a PCA "Biplot"?',
    options: [
      { id: 'a', text: 'A plot comparing two different datasets side by side' },
      { id: 'b', text: 'A simultaneous graphical representation displaying observations as points and original variables as directional vectors in the space of the leading two principal components' },
      { id: 'c', text: 'A plot showing both the mean and the median' },
      { id: 'd', text: 'A chart with two vertical y-axes' },
      { id: 'e', text: 'A histogram with normal curve overlay' },
      { id: 'f', text: 'A 3D surface plot of eigenvalues' }
    ],
    correct_option: 'b',
    explanation: 'A biplot displays observations as points and variables as vectors. The cosine of the angle between two variable vectors approximates their correlation, and the projection of points onto vectors approximates scores.'
  },
  {
    id: 'pq_s5_13',
    segment_id: 'ch2-pca-interpretation',
    order_index: 113,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'If an eigenvalue in Correlation PCA is $\\lambda_3 = 0.45$, how much variance does it explain relative to a single original standardized variable?',
    options: [
      { id: 'a', text: 'It explains $45\\%$ of the total variance of the entire dataset' },
      { id: 'b', text: 'It explains less than half the variance of one single original standardized variable ($0.45 < 1.0$)' },
      { id: 'c', text: 'It explains twice as much variance' },
      { id: 'd', text: 'It explains $4.5$ variables worth of variance' },
      { id: 'e', text: 'It has zero variance' },
      { id: 'f', text: 'It is invalid because eigenvalues cannot be less than 1.0' }
    ],
    correct_option: 'b',
    explanation: 'Since each standardized variable has variance $1.0$, a component with $\\lambda = 0.45$ represents only $45\\%$ of the variance of a single original variable.'
  },
  {
    id: 'pq_s5_14',
    segment_id: 'ch2-pca-interpretation',
    order_index: 114,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'What does the SAS option `plots(only)=scree` generate in `proc princomp`?',
    options: [
      { id: 'a', text: 'A scatter plot of residuals' },
      { id: 'b', text: 'The Cattell Scree plot of eigenvalues versus component numbers' },
      { id: 'c', text: 'A histogram of the dependent variable' },
      { id: 'd', text: 'A correlation matrix heatmap' },
      { id: 'e', text: 'A dendrogram of clusters' },
      { id: 'f', text: 'A box plot of outliers' }
    ],
    correct_option: 'b',
    explanation: 'In SAS `proc princomp`, `plots(only)=scree` specifically requests the eigenvalue Scree plot for Cattell\'s elbow test.'
  },
  {
    id: 'pq_s5_15',
    segment_id: 'ch2-pca-interpretation',
    order_index: 115,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'If the first two components have eigenvalues $\\lambda_1 = 4.2$ and $\\lambda_2 = 2.1$ in an 8-variable Correlation PCA, what is their cumulative explained variance percentage?',
    options: [
      { id: 'a', text: '$63.0\\%$' },
      { id: 'b', text: '$78.75\\%$' },
      { id: 'c', text: '$52.50\\%$' },
      { id: 'd', text: '$84.0\\%$' },
      { id: 'e', text: '$33.33\\%$' },
      { id: 'f', text: '$95.0\\%$' }
    ],
    correct_option: 'b',
    explanation: 'Total variance is $p = 8$. The first two explain $4.2 + 2.1 = 6.3$. Then $6.3 / 8.0 = 0.7875 = 78.75\\%$.'
  },
  {
    id: 'pq_s5_16',
    segment_id: 'ch2-pca-interpretation',
    order_index: 116,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'In scikit-learn (`from sklearn.decomposition import PCA`), what attribute provides the proportion of total variance explained by each component?',
    options: [
      { id: 'a', text: '`pca.components_`' },
      { id: 'b', text: '`pca.explained_variance_ratio_`' },
      { id: 'c', text: '`pca.singular_values_`' },
      { id: 'd', text: '`pca.mean_`' },
      { id: 'e', text: '`pca.n_features_`' },
      { id: 'f', text: '`pca.noise_variance_`' }
    ],
    correct_option: 'b',
    explanation: '`pca.explained_variance_ratio_` contains the percentage of variance explained by each of the selected components.'
  },
  {
    id: 'pq_s5_17',
    segment_id: 'ch2-pca-interpretation',
    order_index: 117,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'Can the signs of all elements in an eigenvector be flipped simultaneously (e.g. from $(0.728, 0.685)$ to $(-0.728, -0.685)$)?',
    options: [
      { id: 'a', text: 'No, because eigenvalues would become negative' },
      { id: 'b', text: 'Yes, because $(S - \\lambda I)(-w) = -(S - \\lambda I)w = 0$; the orientation of an eigenvector is arbitrary and simply inverts the direction of the component axis' },
      { id: 'c', text: 'Only if the correlation matrix is singular' },
      { id: 'd', text: 'No, because the norm would become -1' },
      { id: 'e', text: 'Only in Covariance PCA, never in Correlation PCA' },
      { id: 'f', text: 'Only if sample size is odd' }
    ],
    correct_option: 'b',
    explanation: 'Eigenvectors are defined up to a scalar factor. Reversing all signs reflects the axis $180^\\circ$ through the origin, which preserves variance and orthogonality.'
  },
  {
    id: 'pq_s5_18',
    segment_id: 'ch2-pca-interpretation',
    order_index: 118,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'How do you detect extreme multivariate leverage points (outliers) in a PCA model with $k$ components?',
    options: [
      { id: 'a', text: 'By sorting original variables by standard deviation' },
      { id: 'b', text: 'By computing the squared Mahalanobis distance of observations in the $k$-dimensional component score space: $D^2 = \\sum_{i=1}^k (t_{hi} / \\sqrt{\\lambda_i})^2$' },
      { id: 'c', text: 'By checking if the eigenvalues sum to 1' },
      { id: 'd', text: 'By calculating the RMSR statistic' },
      { id: 'e', text: 'By performing Varimax rotation' },
      { id: 'f', text: 'By checking the sign of the determinant' }
    ],
    correct_option: 'b',
    explanation: 'Because components are uncorrelated, Mahalanobis distance in score space is simply the sum of squared standardized scores $\\sum (t_{hi}/\\sqrt{\\lambda_i})^2$, which follows a $\\chi^2_k$ distribution.'
  },

  // --- SEGMENT 6: ch3-fa-theory (18 questions) ---
  {
    id: 'pq_s6_1',
    segment_id: 'ch3-fa-theory',
    order_index: 101,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'Who developed the foundational two-factor theory of intelligence in 1904 that gave birth to Factor Analysis?',
    options: [
      { id: 'a', text: 'Karl Pearson' },
      { id: 'b', text: 'Charles Spearman' },
      { id: 'c', text: 'P. C. Mahalanobis' },
      { id: 'd', text: 'Harold Hotelling' },
      { id: 'e', text: 'L. L. Thurstone' },
      { id: 'f', text: 'Ronald Fisher' }
    ],
    correct_option: 'b',
    explanation: 'Charles Spearman published his landmark 1904 paper proposing that performance across diverse mental tests is driven by a single common latent general intelligence factor ($g$).'
  },
  {
    id: 'pq_s6_2',
    segment_id: 'ch3-fa-theory',
    order_index: 102,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'What is the fundamental conceptual difference between a formative model (PCA) and a reflective model (Factor Analysis)?',
    options: [
      { id: 'a', text: 'PCA requires nonmetric data while Factor Analysis requires metric data' },
      { id: 'b', text: 'In PCA, observed variables combine to create the composite component (formative); in Factor Analysis, underlying latent constructs cause the observed indicator responses (reflective)' },
      { id: 'c', text: 'PCA is only used for psychology while Factor Analysis is used for engineering' },
      { id: 'd', text: 'PCA assumes measurement error while Factor Analysis assumes zero error' },
      { id: 'e', text: 'Factor Analysis maximizes variance while PCA minimizes covariance' },
      { id: 'f', text: 'PCA is a dependence method while Factor Analysis is an interdependence method' }
    ],
    correct_option: 'b',
    explanation: 'In reflective models (FA), arrows point from the latent factor to observed indicators ($X = \\Lambda \\xi + \\varepsilon$). In formative models (PCA), arrows point from indicators to the index ($PC = W^T X$).'
  },
  {
    id: 'pq_s6_3',
    segment_id: 'ch3-fa-theory',
    order_index: 103,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'In the orthogonal factor model for standardized variables, what is the decomposition of total variance for variable $j$?',
    options: [
      { id: 'a', text: '$\\text{Var}(x_j) = \\lambda_j + \\bar{x}_j$' },
      { id: 'b', text: '$\\text{Var}(x_j) = 1.0 = h_j^2 + \\psi_j$ (Communality + Uniqueness)' },
      { id: 'c', text: '$\\text{Var}(x_j) = s_j^2 / (n - 1)$' },
      { id: 'd', text: '$\\text{Var}(x_j) = r_{jk}^2$' },
      { id: 'e', text: '$\\text{Var}(x_j) = 0$' },
      { id: 'f', text: '$\\text{Var}(x_j) = \\det(R)$' }
    ],
    correct_option: 'b',
    explanation: 'Total standardized variance equals 1.0, which partitions cleanly into communality $h_j^2$ (variance shared with common factors) and uniqueness $\\psi_j$ (specific variance plus error).'
  },
  {
    id: 'pq_s6_4',
    segment_id: 'ch3-fa-theory',
    order_index: 104,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'If a standardized variable has communality $h_j^2 = 0.72$, what is its uniqueness $\\psi_j$?',
    options: [
      { id: 'a', text: '$\\psi_j = 0.72$' },
      { id: 'b', text: '$\\psi_j = 0.28$' },
      { id: 'c', text: '$\\psi_j = 1.72$' },
      { id: 'd', text: '$\\psi_j = 0.518$' },
      { id: 'e', text: '$\\psi_j = 0.00$' },
      { id: 'f', text: '$\\psi_j = 0.848$' }
    ],
    correct_option: 'b',
    explanation: 'Uniqueness is $\\psi_j = 1 - h_j^2 = 1.00 - 0.72 = 0.28$ ($28\\%$ unique variation).'
  },
  {
    id: 'pq_s6_5',
    segment_id: 'ch3-fa-theory',
    order_index: 105,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'In an orthogonal factor model with 2 common factors, variable $X_1$ has loadings $\\lambda_{11} = 0.80$ and $\\lambda_{12} = 0.30$. What is the communality $h_1^2$ of variable $X_1$?',
    options: [
      { id: 'a', text: '$h_1^2 = 1.10$' },
      { id: 'b', text: '$h_1^2 = 0.73$ ($0.80^2 + 0.30^2 = 0.64 + 0.09$)' },
      { id: 'c', text: '$h_1^2 = 0.50$' },
      { id: 'd', text: '$h_1^2 = 0.24$' },
      { id: 'e', text: '$h_1^2 = 0.854$' },
      { id: 'f', text: '$h_1^2 = 0.27$' }
    ],
    correct_option: 'b',
    explanation: 'Communality is the sum of squared loadings: $h_1^2 = \\lambda_{11}^2 + \\lambda_{12}^2 = 0.80^2 + 0.30^2 = 0.64 + 0.09 = 0.73$.'
  },
  {
    id: 'pq_s6_6',
    segment_id: 'ch3-fa-theory',
    order_index: 106,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'Under a 1-factor orthogonal model, variable $j$ has loading $\\lambda_{j} = 0.80$ and variable $k$ has loading $\\lambda_{k} = 0.70$. What is the model-reproduced correlation $\\hat{r}_{jk}$ between them?',
    options: [
      { id: 'a', text: '$\\hat{r}_{jk} = 1.50$' },
      { id: 'b', text: '$\\hat{r}_{jk} = 0.56$ ($0.80 \\times 0.70$)' },
      { id: 'c', text: '$\\hat{r}_{jk} = 0.75$' },
      { id: 'd', text: '$\\hat{r}_{jk} = 0.10$' },
      { id: 'e', text: '$\\hat{r}_{jk} = 0.64$' },
      { id: 'f', text: '$\\hat{r}_{jk} = 0.49$' }
    ],
    correct_option: 'b',
    explanation: 'In an orthogonal factor model, reproduced correlation is $\\hat{r}_{jk} = \\sum_l \\lambda_{jl}\\lambda_{kl} = 0.80 \\times 0.70 = 0.56$.'
  },
  {
    id: 'pq_s6_7',
    segment_id: 'ch3-fa-theory',
    order_index: 107,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'What happens to the partial correlation between two variables in the factor model if we statistically control for the common latent factors?',
    options: [
      { id: 'a', text: 'It increases to 1.0' },
      { id: 'b', text: 'It drops to zero ($r_{jk | \\xi} = 0$), demonstrating conditional independence' },
      { id: 'c', text: 'It becomes negative' },
      { id: 'd', text: 'It equals the sum of communalities' },
      { id: 'e', text: 'It becomes undefined' },
      { id: 'f', text: 'It equals the unique variance' }
    ],
    correct_option: 'b',
    explanation: 'A fundamental axiom of factor analysis is local (conditional) independence: common factors completely explain the intercorrelations. Once conditioned on $\\xi$, residual partial correlation is 0.'
  },
  {
    id: 'pq_s6_8',
    segment_id: 'ch3-fa-theory',
    order_index: 108,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'What are the two distinct components that comprise a variable\'s uniqueness $\\psi_j$?',
    options: [
      { id: 'a', text: 'Eigenvalue and eigenvector' },
      { id: 'b', text: 'Specific variance (reliable variance unique to that variable) and random measurement error' },
      { id: 'c', text: 'Sample mean and sample median' },
      { id: 'd', text: 'Degrees of freedom and Sum of Squares' },
      { id: 'e', text: 'Covariance and correlation' },
      { id: 'f', text: 'Pattern loading and structure loading' }
    ],
    correct_option: 'b',
    explanation: 'Uniqueness is $\\psi_j = s_j^2 + e_j^2$, where $s_j^2$ is specific systematic variance unique to that item and $e_j^2$ is unreliability (random measurement error).'
  },
  {
    id: 'pq_s6_9',
    segment_id: 'ch3-fa-theory',
    order_index: 109,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'In an orthogonal factor model, what is the covariance structure equation for the population correlation matrix $R$?',
    options: [
      { id: 'a', text: '$R = W \\Lambda W^T$' },
      { id: 'b', text: '$R = \\Lambda \\Lambda^T + \\Psi$, where $\\Psi = \\text{diag}(\\psi_1, \\dots, \\psi_p)$' },
      { id: 'c', text: '$R = S^{-1} + I$' },
      { id: 'd', text: '$R = \\Lambda + \\Psi$' },
      { id: 'e', text: '$R = \\det(\\Lambda) I$' },
      { id: 'f', text: '$R = \\Lambda^T \\Lambda - \\Psi$' }
    ],
    correct_option: 'b',
    explanation: 'Because factors and errors are uncorrelated, $\\text{Cov}(X) = \\Lambda \\text{Cov}(\\xi) \\Lambda^T + \\text{Cov}(\\varepsilon) = \\Lambda I \\Lambda^T + \\Psi = \\Lambda \\Lambda^T + \\Psi$.'
  },
  {
    id: 'pq_s6_10',
    segment_id: 'ch3-fa-theory',
    order_index: 110,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'What is a "Heywood Case" in factor analysis estimation?',
    options: [
      { id: 'a', text: 'When all variables have identical sample means' },
      { id: 'b', text: 'An improper mathematical solution where an estimated communality exceeds 1.0 ($h_j^2 > 1.0$), resulting in a negative uniqueness estimate ($\\psi_j < 0$)' },
      { id: 'c', text: 'When the Scree plot has two elbows' },
      { id: 'd', text: 'When all eigenvalues are zero' },
      { id: 'e', text: 'When sample size is larger than 1,000' },
      { id: 'f', text: 'When Bartlett\'s test is non-significant' }
    ],
    correct_option: 'b',
    explanation: 'Variance cannot be negative. If numerical estimation yields $\\psi_j < 0$ ($h_j^2 > 1$), it is an improper Heywood case, usually caused by over-factoring, small sample size, or model misspecification.'
  },
  {
    id: 'pq_s6_11',
    segment_id: 'ch3-fa-theory',
    order_index: 111,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'How many variables $p$ are required at a minimum to uniquely identify a 1-factor model without placing constraints on parameters?',
    options: [
      { id: 'a', text: 'At least $p = 1$' },
      { id: 'b', text: 'At least $p = 3$' },
      { id: 'c', text: 'At least $p = 2$' },
      { id: 'd', text: 'At least $p = 10$' },
      { id: 'e', text: 'At least $p = 5$' },
      { id: 'f', text: 'At least $p = 4$' }
    ],
    correct_option: 'b',
    explanation: 'For $p = 2$, there is only 1 correlation $r_{12} = \\lambda_1 \\lambda_2$ (1 equation, 2 unknowns: under-identified). For $p = 3$, there are 3 correlations and 3 loadings: just-identified ($df = 0$). Thus $p \\ge 3$ is required.'
  },
  {
    id: 'pq_s6_12',
    segment_id: 'ch3-fa-theory',
    order_index: 112,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'If variable 1 has loadings $\\lambda_{11} = 0.70$ and $\\lambda_{12} = 0.50$, and variable 2 has loadings $\\lambda_{21} = 0.60$ and $\\lambda_{22} = -0.40$, what is the reproduced correlation $\\hat{r}_{12}$?',
    options: [
      { id: 'a', text: '$\\hat{r}_{12} = 0.62$' },
      { id: 'b', text: '$\\hat{r}_{12} = 0.22$ ($0.70 \\times 0.60 + 0.50 \\times (-0.40) = 0.42 - 0.20$)' },
      { id: 'c', text: '$\\hat{r}_{12} = -0.22$' },
      { id: 'd', text: '$\\hat{r}_{12} = 0.42$' },
      { id: 'e', text: '$\\hat{r}_{12} = 0.74$' },
      { id: 'f', text: '$\\hat{r}_{12} = 0.00$' }
    ],
    correct_option: 'b',
    explanation: '$\\hat{r}_{12} = \\lambda_{11}\\lambda_{21} + \\lambda_{12}\\lambda_{22} = (0.70)(0.60) + (0.50)(-0.40) = 0.42 - 0.20 = 0.22$.'
  },
  {
    id: 'pq_s6_13',
    segment_id: 'ch3-fa-theory',
    order_index: 113,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'In factor analysis, what is the expected value (mean) of any latent factor $\\xi_k$?',
    options: [
      { id: 'a', text: '$E(\\xi_k) = 1.0$' },
      { id: 'b', text: '$E(\\xi_k) = 0.0$' },
      { id: 'c', text: '$E(\\xi_k) = \\lambda_k$' },
      { id: 'd', text: '$E(\\xi_k) = p$' },
      { id: 'e', text: '$E(\\xi_k) = n$' },
      { id: 'f', text: '$E(\\xi_k) = h_k^2$' }
    ],
    correct_option: 'b',
    explanation: 'Latent factors are standardized constructs by convention, with mean $E(\\xi_k) = 0$ and unit variance $\\text{Var}(\\xi_k) = 1$.'
  },
  {
    id: 'pq_s6_14',
    segment_id: 'ch3-fa-theory',
    order_index: 114,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'Why are unique factors $\\varepsilon_j$ and $\\varepsilon_k$ assumed to be mutually uncorrelated for $j \\neq k$?',
    options: [
      { id: 'a', text: 'Because unique factors are measured in different currencies' },
      { id: 'b', text: 'Because any shared correlation between two variables must be accounted for entirely by common factors' },
      { id: 'c', text: 'Because eigenvalues are orthogonal' },
      { id: 'd', text: 'Because of Bessel\'s correction' },
      { id: 'e', text: 'Because uniqueness is always zero' },
      { id: 'f', text: 'Because sample size is large' }
    ],
    correct_option: 'b',
    explanation: 'If errors were correlated, that shared correlation would represent another unextracted common factor. Hence, $\\text{Cov}(\\varepsilon_j, \\varepsilon_k) = 0$.'
  },
  {
    id: 'pq_s6_15',
    segment_id: 'ch3-fa-theory',
    order_index: 115,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'What is the communality of an indicator variable that is completely uncorrelated with all other indicators in the dataset?',
    options: [
      { id: 'a', text: '$h_j^2 = 1.0$' },
      { id: 'b', text: '$h_j^2 = 0.0$' },
      { id: 'c', text: '$h_j^2 = 0.50$' },
      { id: 'd', text: '$h_j^2 = -1.0$' },
      { id: 'e', text: '$h_j^2 = \\infty$' },
      { id: 'f', text: '$h_j^2 = 0.08$' }
    ],
    correct_option: 'b',
    explanation: 'If a variable shares no correlation with other variables, common factors explain none of its variance, so its loadings are 0 and $h_j^2 = 0$.'
  },
  {
    id: 'pq_s6_16',
    segment_id: 'ch3-fa-theory',
    order_index: 116,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'If variable 1 has communality $0.64$ and uniqueness $0.36$, what percentage of its variance is common variance shared with the latent factors?',
    options: [
      { id: 'a', text: '$36\\%$' },
      { id: 'b', text: '$64\\%$' },
      { id: 'c', text: '$100\\%$' },
      { id: 'd', text: '$80\\%$' },
      { id: 'e', text: '$28\\%$' },
      { id: 'f', text: '$48\\%$' }
    ],
    correct_option: 'b',
    explanation: 'Communality $h_1^2 = 0.64$ directly represents the proportion of common variance ($64\\%$).'
  },
  {
    id: 'pq_s6_17',
    segment_id: 'ch3-fa-theory',
    order_index: 117,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'What is the degrees of freedom formula for testing an $m$-factor model on $p$ variables in Exploratory Factor Analysis?',
    options: [
      { id: 'a', text: '$df = n - p$' },
      { id: 'b', text: '$df = \\frac{1}{2}[(p - m)^2 - (p + m)]$' },
      { id: 'c', text: '$df = p(p - 1) / 2$' },
      { id: 'd', text: '$df = m(m - 1)$' },
      { id: 'e', text: '$df = p - m - 1$' },
      { id: 'f', text: '$df = n - m$' }
    ],
    correct_option: 'b',
    explanation: 'Degrees of freedom equals the number of non-redundant correlation elements $p(p-1)/2$ minus free parameters $pm + p - m(m-1)/2$, which simplifies to $df = \\frac{1}{2}[(p - m)^2 - (p + m)]$.'
  },
  {
    id: 'pq_s6_18',
    segment_id: 'ch3-fa-theory',
    order_index: 118,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'Why does PCA analyze $100\\%$ of the total observed variance while Factor Analysis analyzes only common variance?',
    options: [
      { id: 'a', text: 'Because PCA ignores sample size' },
      { id: 'b', text: 'Because PCA assumes zero measurement error and places 1.0 on the diagonal of $R$, whereas Factor Analysis places communalities ($h^2 < 1$) on the diagonal to isolate shared variance from uniqueness' },
      { id: 'c', text: 'Because Factor Analysis only uses negative correlations' },
      { id: 'd', text: 'Because PCA uses oblique rotation' },
      { id: 'e', text: 'Because Factor Analysis requires $n > 10,000$' },
      { id: 'f', text: 'Because eigenvalues are smaller in PCA' }
    ],
    correct_option: 'b',
    explanation: 'PCA operates on the full correlation matrix with 1s on the diagonal (analyzing total variance). FA explicitly models uniqueness $\\Psi$ and analyzes only common variance $R - \\Psi$.'
  }
];

console.log('Practice Part 3 loaded (36 questions across Segments 5 and 6).');
