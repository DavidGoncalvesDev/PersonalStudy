// Part 2 of Practice Questions (Segments 3 and 4: 36 questions)
export const practicePart2 = [
  // --- SEGMENT 3: ch2-pca-geometry (18 questions) ---
  {
    id: 'pq_s3_1',
    segment_id: 'ch2-pca-geometry',
    order_index: 101,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'In the 12-customer case study, why does setting the rotation angle to $\\theta = 0^\\circ$ yield a variance equal to $23.091$?',
    options: [
      { id: 'a', text: 'Because $\\cos(0^\\circ) = 0$' },
      { id: 'b', text: 'Because at $\\theta = 0^\\circ$, the candidate axis coincides exactly with the original horizontal $X_1$ axis (Annual Income)' },
      { id: 'c', text: 'Because $23.091$ is the total variance of both variables combined' },
      { id: 'd', text: 'Because Customer A has an income of $23.091$' },
      { id: 'e', text: 'Because at $0^\\circ$, CLV has maximum variance' },
      { id: 'f', text: 'Because the correlation between Income and CLV is zero at $0^\\circ$' }
    ],
    correct_option: 'b',
    explanation: 'When $\\theta = 0^\\circ$, $\\cos(0^\\circ) = 1$ and $\\sin(0^\\circ) = 0$, so $x^*_1 = 1 \\cdot x_1 + 0 \\cdot x_2 = x_1$. The variance of the projection is simply the variance of $X_1$, which is $23.091$.'
  },
  {
    id: 'pq_s3_2',
    segment_id: 'ch2-pca-geometry',
    order_index: 102,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'What is the total sample variance in the 12-customer case study with variables $X_1$ (variance $23.091$) and $X_2$ (variance $21.091$)?',
    options: [
      { id: 'a', text: '$44.182$' },
      { id: 'b', text: '$38.576$' },
      { id: 'c', text: '$2.000$' },
      { id: 'd', text: '$5.606$' },
      { id: 'e', text: '$16.455$' },
      { id: 'f', text: '$22.091$' }
    ],
    correct_option: 'a',
    explanation: 'Total sample variance is the sum of individual sample variances: $s_1^2 + s_2^2 = 23.091 + 21.091 = 44.182$.'
  },
  {
    id: 'pq_s3_3',
    segment_id: 'ch2-pca-geometry',
    order_index: 103,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'What must be the geometric angle between the First Principal Component ($PC_1$) and the Second Principal Component ($PC_2$)?',
    options: [
      { id: 'a', text: 'Exactly $45^\\circ$' },
      { id: 'b', text: 'Exactly $90^\\circ$ (mutually perpendicular)' },
      { id: 'c', text: 'Equal to the Pearson correlation $r$' },
      { id: 'd', text: 'Exactly $180^\\circ$' },
      { id: 'e', text: 'Dependent on the sample size' },
      { id: 'f', text: 'Exactly $0^\\circ$' }
    ],
    correct_option: 'b',
    explanation: 'By fundamental construction of PCA, subsequent principal components are constrained to be strictly orthogonal ($90^\\circ$) to all preceding components.'
  },
  {
    id: 'pq_s3_4',
    segment_id: 'ch2-pca-geometry',
    order_index: 104,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'Why does centering the data by subtracting means not change the pairwise Euclidean distances between points?',
    options: [
      { id: 'a', text: 'Because subtracting means rotates the axes' },
      { id: 'b', text: 'Because centering is a rigid translation of the entire coordinate system, shifting all points by the same constant vector $(\\bar{X}_1, \\bar{X}_2)$' },
      { id: 'c', text: 'Because distances are always equal to 1.0 after centering' },
      { id: 'd', text: 'Because variances become zero after centering' },
      { id: 'e', text: 'Because centering only affects the first observation' },
      { id: 'f', text: 'Because the centroid is deleted' }
    ],
    correct_option: 'b',
    explanation: 'Rigid translations preserve geometric shapes and Euclidean distances: $(x_{i1} - \\bar{X}_1) - (x_{k1} - \\bar{X}_1) = x_{i1} - x_{k1}$.'
  },
  {
    id: 'pq_s3_5',
    segment_id: 'ch2-pca-geometry',
    order_index: 105,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'In the customer case study, why is the maximum variance angle $\\theta = 43.26^\\circ$ slightly less than $45^\\circ$?',
    options: [
      { id: 'a', text: 'Because the sample correlation is negative' },
      { id: 'b', text: 'Because variable $X_1$ has a slightly larger variance ($23.091$) than variable $X_2$ ($21.091$), pulling the principal axis toward the horizontal axis' },
      { id: 'c', text: 'Because degrees of freedom equal 11 instead of 12' },
      { id: 'd', text: 'Because Customer A was an outlier' },
      { id: 'e', text: 'Because CLV was measured on a scale from -10 to +10' },
      { id: 'f', text: 'Because PCA rotates axes clockwise' }
    ],
    correct_option: 'b',
    explanation: 'If variances were identical ($s_1^2 = s_2^2$), the principal axis for positive correlation would bisect the angle at exactly $45^\\circ$. The larger variance of $X_1$ tilts the optimal axis toward $X_1$ ($\\\\theta = 43.26^\\circ < 45^\\circ$).'
  },
  {
    id: 'pq_s3_6',
    segment_id: 'ch2-pca-geometry',
    order_index: 106,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'What is the variance conservation equation for the 12-customer PCA study with components $PC_1$ and $PC_2$?',
    options: [
      { id: 'a', text: '$\\lambda_1 - \\lambda_2 = s_1^2 - s_2^2$' },
      { id: 'b', text: '$\\lambda_1 + \\lambda_2 = 38.576 + 5.606 = 44.182 = s_1^2 + s_2^2$' },
      { id: 'c', text: '$\\lambda_1 \\times \\lambda_2 = 1.0$' },
      { id: 'd', text: '$\\lambda_1 / \\lambda_2 = 44.182$' },
      { id: 'e', text: '$\\lambda_1 + \\lambda_2 = 100\\%$' },
      { id: 'f', text: '$\\lambda_1 + \\lambda_2 = 2.0$' }
    ],
    correct_option: 'b',
    explanation: 'Total variance is strictly invariant to orthogonal rotation: $\\text{Var}(PC_1) + \\text{Var}(PC_2) = 38.576 + 5.606 = 44.182 = s_1^2 + s_2^2$.'
  },
  {
    id: 'pq_s3_7',
    segment_id: 'ch2-pca-geometry',
    order_index: 107,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'If an analyst projects a centered customer observation $(x_1 = 4.0, x_2 = 2.0)$ onto $PC_1 = 0.728238 x_1 + 0.685324 x_2$, what is the customer\'s $PC_1$ score?',
    options: [
      { id: 'a', text: '$t_1 = 6.000$' },
      { id: 'b', text: '$t_1 = 4.284$' },
      { id: 'c', text: '$t_1 = 2.913$' },
      { id: 'd', text: '$t_1 = 1.414$' },
      { id: 'e', text: '$t_1 = 0.883$' },
      { id: 'f', text: '$t_1 = 8.567$' }
    ],
    correct_option: 'b',
    explanation: '$t_1 = 0.728238(4.0) + 0.685324(2.0) = 2.912952 + 1.370648 = 4.2836 \\approx 4.284$.'
  },
  {
    id: 'pq_s3_8',
    segment_id: 'ch2-pca-geometry',
    order_index: 108,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'What percentage of total sample variance is discarded if the analyst summarizes the 12 customers using only $PC_1$?',
    options: [
      { id: 'a', text: '$52.26\\%$' },
      { id: 'b', text: '$12.69\\%$' },
      { id: 'c', text: '$87.31\\%$' },
      { id: 'd', text: '$5.606\\%$' },
      { id: 'e', text: '$0.00\\%$' },
      { id: 'f', text: '$47.74\\%$' }
    ],
    correct_option: 'b',
    explanation: '$PC_1$ accounts for $38.576 / 44.182 = 87.31\\%$ of total variance. The discarded $PC_2$ accounts for the remaining $5.606 / 44.182 = 12.69\\%$.'
  },
  {
    id: 'pq_s3_9',
    segment_id: 'ch2-pca-geometry',
    order_index: 109,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'In the geometric derivation of PCA, why must the direction vector $w = (w_1, w_2)^T$ satisfy the constraint $w_1^2 + w_2^2 = 1$?',
    options: [
      { id: 'a', text: 'To ensure the eigenvalues are positive' },
      { id: 'b', text: 'To ensure that the transformation represents a pure coordinate rotation without artificially amplifying or shrinking the scale of the projected variance' },
      { id: 'c', text: 'To force the sample correlation to equal 0' },
      { id: 'd', text: 'To prevent Heywood cases' },
      { id: 'e', text: 'Because nonmetric variables cannot have length greater than 1' },
      { id: 'f', text: 'To satisfy the Kaiser criterion' }
    ],
    correct_option: 'b',
    explanation: 'Without normalization ($\\|w\\| = 1$), variance $w^T S w$ could be made arbitrarily large simply by multiplying $w$ by an arbitrarily large constant.'
  },
  {
    id: 'pq_s3_10',
    segment_id: 'ch2-pca-geometry',
    order_index: 110,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'How is the reconstruction error (residual variance) of an individual observation related to its score on the discarded principal component $PC_2$?',
    options: [
      { id: 'a', text: 'Reconstruction error is independent of $PC_2$' },
      { id: 'b', text: 'The squared Euclidean distance from original point $(x_1, x_2)$ to its 1D reconstructed point along $PC_1$ is exactly equal to its squared score on $PC_2$: $d^2 = t_2^2$' },
      { id: 'c', text: 'Reconstruction error equals the eigenvalue $\\lambda_1$' },
      { id: 'd', text: 'Reconstruction error is always zero' },
      { id: 'e', text: 'Reconstruction error equals the customer\'s original income' },
      { id: 'f', text: 'Reconstruction error is proportional to the correlation coefficient' }
    ],
    correct_option: 'b',
    explanation: 'By the Pythagorean theorem on orthonormal axes, $x_1^2 + x_2^2 = t_1^2 + t_2^2$. Discarding $PC_2$ leaves an approximation error whose squared magnitude is precisely $t_2^2$.'
  },
  {
    id: 'pq_s3_11',
    segment_id: 'ch2-pca-geometry',
    order_index: 111,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'Why do the principal component axes always pass directly through the sample centroid $(\\bar{X}_1, \\dots, \\bar{X}_p)$?',
    options: [
      { id: 'a', text: 'Because eigenvectors can only be calculated when means are zero' },
      { id: 'b', text: 'Because PCA minimizes the sum of squared orthogonal distances from data points to the axis, and the center of gravity is the unique origin that minimizes total squared deviations' },
      { id: 'c', text: 'Because the correlation matrix has no intercept' },
      { id: 'd', text: 'Because the Kaiser criterion requires centering' },
      { id: 'e', text: 'Because the variance of the centroid is always 1.0' },
      { id: 'f', text: 'Because the trace equals the sum of means' }
    ],
    correct_option: 'b',
    explanation: 'The first principal component line is the orthogonal total least-squares line, which mathematically must pass through the centroid $(\\bar{X}_1, \\bar{X}_2)$.'
  },
  {
    id: 'pq_s3_12',
    segment_id: 'ch2-pca-geometry',
    order_index: 112,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'Suppose two variables are completely uncorrelated ($r = 0$) and have identical variances ($s_1^2 = s_2^2 = 10$). What happens to the PCA geometric rotation?',
    options: [
      { id: 'a', text: 'The variance maximum is at $\\theta = 45^\\circ$' },
      { id: 'b', text: 'The data cloud forms a circular sphere; all rotation angles $\\theta$ produce the identical variance of $10$, so principal components are geometrically indeterminate' },
      { id: 'c', text: 'The first eigenvalue equals 20 and the second equals 0' },
      { id: 'd', text: 'PCA cannot be performed because $\\det(S) < 0$' },
      { id: 'e', text: 'The Scree plot shows a sharp drop at $PC_1$' },
      { id: 'f', text: 'The covariance matrix has negative trace' }
    ],
    correct_option: 'b',
    explanation: 'When $S = \\sigma^2 I$, the variance of any normalized linear combination is $w^T (\\sigma^2 I) w = \\sigma^2 (w^T w) = \\sigma^2 = 10$ in all directions. No preferred principal axis exists.'
  },
  {
    id: 'pq_s3_13',
    segment_id: 'ch2-pca-geometry',
    order_index: 113,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'What is the arithmetic mean of the principal component scores $t_{i1}$ across all observations when data are centered before PCA?',
    options: [
      { id: 'a', text: '$\\bar{t}_1 = \\lambda_1$' },
      { id: 'b', text: '$\\bar{t}_1 = 0$' },
      { id: 'c', text: '$\\bar{t}_1 = 1.0$' },
      { id: 'd', text: '$\\bar{t}_1 = \\sqrt{\\lambda_1}$' },
      { id: 'e', text: '$\\bar{t}_1 = \\bar{X}_1 + \\bar{X}_2$' },
      { id: 'f', text: '$\\bar{t}_1 = 43.26$' }
    ],
    correct_option: 'b',
    explanation: 'Since component scores are linear combinations of centered variables whose means are zero: $E[t_1] = w_1 E[x_1] + w_2 E[x_2] = 0 + 0 = 0$.'
  },
  {
    id: 'pq_s3_14',
    segment_id: 'ch2-pca-geometry',
    order_index: 114,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'In 2D PCA, what are the coefficients of the second principal component $PC_2$ relative to $PC_1 = (w_1, w_2)^T$?',
    options: [
      { id: 'a', text: '$(w_1, w_2)^T$' },
      { id: 'b', text: '$(-w_2, w_1)^T$ or $(w_2, -w_1)^T$' },
      { id: 'c', text: '$(w_1^2, w_2^2)^T$' },
      { id: 'd', text: '$(1, 1)^T$' },
      { id: 'e', text: '$(0, 0)^T$' },
      { id: 'f', text: '$(s_1, s_2)^T$' }
    ],
    correct_option: 'b',
    explanation: 'In 2D, the vector orthogonal to $(w_1, w_2)$ is $(-w_2, w_1)$ because their dot product is $-w_1 w_2 + w_2 w_1 = 0$.'
  },
  {
    id: 'pq_s3_15',
    segment_id: 'ch2-pca-geometry',
    order_index: 115,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'How does the presence of an extreme multivariate outlier impact the first principal component axis in geometry?',
    options: [
      { id: 'a', text: 'It has no effect because PCA is non-parametric' },
      { id: 'b', text: 'It exerts strong leverage on the sample covariance matrix, pulling the $PC_1$ axis towards itself' },
      { id: 'c', text: 'It causes the second eigenvalue to become negative' },
      { id: 'd', text: 'It transforms the covariance matrix into a correlation matrix' },
      { id: 'e', text: 'It forces the rotation angle to exactly $90^\\circ$' },
      { id: 'f', text: 'It reduces the total sample variance' }
    ],
    correct_option: 'b',
    explanation: 'Because variance is based on squared deviations, extreme outliers exert high leverage on $S$, tilting the first principal axis toward the outlier.'
  },
  {
    id: 'pq_s3_16',
    segment_id: 'ch2-pca-geometry',
    order_index: 116,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'What is the geometric interpretation of the aspect ratio of the 2D data ellipse?',
    options: [
      { id: 'a', text: 'The ratio of degrees of freedom' },
      { id: 'b', text: 'The ratio of the standard deviations along the principal axes: $\\sqrt{\\lambda_1} / \\sqrt{\\lambda_2}$' },
      { id: 'c', text: 'The ratio of sample means: $\\bar{X}_1 / \\bar{X}_2$' },
      { id: 'd', text: 'The ratio of the sample sizes' },
      { id: 'e', text: 'The sum of the eigenvalues' },
      { id: 'f', text: 'The Pearson correlation coefficient $r$' }
    ],
    correct_option: 'b',
    explanation: 'The lengths of the semi-major and semi-minor axes of the data scatter ellipse are proportional to the component standard deviations $\\sqrt{\\lambda_1}$ and $\\sqrt{\\lambda_2}$.'
  },
  {
    id: 'pq_s3_17',
    segment_id: 'ch2-pca-geometry',
    order_index: 117,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'If customer scores on $PC_1$ have sample variance $38.576$ and scores on $PC_2$ have sample variance $5.606$, what is the sample covariance between $PC_1$ scores and $PC_2$ scores?',
    options: [
      { id: 'a', text: '$16.455$' },
      { id: 'b', text: 'Exactly $0.0$' },
      { id: 'c', text: '$44.182$' },
      { id: 'd', text: '$21.091$' },
      { id: 'e', text: '$0.746$' },
      { id: 'f', text: '$6.211$' }
    ],
    correct_option: 'b',
    explanation: 'Principal components are constructed to be mutually orthogonal, which mathematically guarantees that the sample covariance between any pair of distinct components is exactly zero.'
  },
  {
    id: 'pq_s3_18',
    segment_id: 'ch2-pca-geometry',
    order_index: 118,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'When projecting points onto candidate axes, why does the sum of the variances of projections onto two perpendicular axes always equal the total original variance regardless of angle $\\theta$?',
    options: [
      { id: 'a', text: 'Because $\\cos^2\\theta + \\sin^2\\theta = 1$ for all $\\theta$, preserving the trace of the coordinate tensor' },
      { id: 'b', text: 'Because sample size is constant' },
      { id: 'c', text: 'Because covariance is always positive' },
      { id: 'd', text: 'Because Euclidean distance depends on the origin' },
      { id: 'e', text: 'Because angles are measured in radians' },
      { id: 'f', text: 'Because the determinant is zero' }
    ],
    correct_option: 'a',
    explanation: 'For any orthogonal rotation matrix $T$, $\\text{tr}(T S T^T) = \\text{tr}(S T^T T) = \\text{tr}(S I) = \\text{tr}(S)$. The sum of variances along any orthogonal pair of axes is invariant.'
  },

  // --- SEGMENT 4: ch2-pca-analytical (18 questions) ---
  {
    id: 'pq_s4_1',
    segment_id: 'ch2-pca-analytical',
    order_index: 101,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'What is the characteristic equation used to solve for eigenvalues $\\lambda$ of covariance matrix $S$?',
    options: [
      { id: 'a', text: '$S - \\lambda I = 0$' },
      { id: 'b', text: '$\\det(S - \\lambda I) = 0$' },
      { id: 'c', text: '$\\text{tr}(S) = \\lambda$' },
      { id: 'd', text: '$S w = 1$' },
      { id: 'e', text: '$\\det(S) = \\lambda$' },
      { id: 'f', text: '$w^T S w = 0$' }
    ],
    correct_option: 'b',
    explanation: 'A non-zero eigenvector $w \\neq 0$ satisfying $(S - \\lambda I)w = 0$ exists if and only if the matrix $(S - \\lambda I)$ is singular, meaning its determinant equals zero: $\\det(S - \\lambda I) = 0$.'
  },
  {
    id: 'pq_s4_2',
    segment_id: 'ch2-pca-analytical',
    order_index: 102,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'What is the sum of the eigenvalues in Correlation PCA for a dataset with 6 variables?',
    options: [
      { id: 'a', text: '$1.0$' },
      { id: 'b', text: '$6.0$' },
      { id: 'c', text: '$36.0$' },
      { id: 'd', text: '$100\\%$' },
      { id: 'e', text: '$0.0$' },
      { id: 'f', text: '$12.0$' }
    ],
    correct_option: 'b',
    explanation: 'In Correlation PCA, $S = R$. Each standardized variable has variance $1.0$, so $\\text{tr}(R) = p = 6$. The sum of eigenvalues always equals the trace: $\\sum \\lambda_i = 6.0$.'
  },
  {
    id: 'pq_s4_3',
    segment_id: 'ch2-pca-analytical',
    order_index: 103,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'In matrix notation, how is the $n \\times p$ matrix of principal component scores $T$ calculated from centered data matrix $X_c$ and eigenvector weight matrix $W$?',
    options: [
      { id: 'a', text: '$T = X_c + W$' },
      { id: 'b', text: '$T = X_c W$' },
      { id: 'c', text: '$T = W X_c$' },
      { id: 'd', text: '$T = X_c S^{-1}$' },
      { id: 'e', text: '$T = W^T W$' },
      { id: 'f', text: '$T = \\det(X_c) W$' }
    ],
    correct_option: 'b',
    explanation: 'The component scores matrix $T$ is obtained by multiplying the centered observations $X_c$ by the weight matrix $W$: $T = X_c W$.'
  },
  {
    id: 'pq_s4_4',
    segment_id: 'ch2-pca-analytical',
    order_index: 104,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'What algebraic property do the eigenvectors of a real symmetric covariance matrix always satisfy?',
    options: [
      { id: 'a', text: 'They are all equal to 1.0' },
      { id: 'b', text: 'They are mutually orthogonal ($w_i^T w_j = 0$ for $i \\neq j$)' },
      { id: 'c', text: 'They have negative determinants' },
      { id: 'd', text: 'They sum to zero' },
      { id: 'e', text: 'They are singular matrices' },
      { id: 'f', text: 'They are imaginary numbers' }
    ],
    correct_option: 'b',
    explanation: 'By the spectral theorem for real symmetric matrices, eigenvectors corresponding to distinct eigenvalues are strictly orthogonal.'
  },
  {
    id: 'pq_s4_5',
    segment_id: 'ch2-pca-analytical',
    order_index: 105,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'For a $2 \\times 2$ correlation matrix with correlation $r = 0.40$, what are the two eigenvalues?',
    options: [
      { id: 'a', text: '$\\lambda_1 = 1.00$ and $\\lambda_2 = 1.00$' },
      { id: 'b', text: '$\\lambda_1 = 1.40$ and $\\lambda_2 = 0.60$' },
      { id: 'c', text: '$\\lambda_1 = 1.80$ and $\\lambda_2 = 0.20$' },
      { id: 'd', text: '$\\lambda_1 = 0.40$ and $\\lambda_2 = 0.16$' },
      { id: 'e', text: '$\\lambda_1 = 2.00$ and $\\lambda_2 = 0.00$' },
      { id: 'f', text: '$\\lambda_1 = 1.16$ and $\\lambda_2 = 0.84$' }
    ],
    correct_option: 'b',
    explanation: 'For a $2 \\times 2$ correlation matrix, eigenvalues are $\\lambda = 1 \\pm r$. For $r = 0.40$, $\\lambda_1 = 1 + 0.40 = 1.40$ and $\\lambda_2 = 1 - 0.40 = 0.60$.'
  },
  {
    id: 'pq_s4_6',
    segment_id: 'ch2-pca-analytical',
    order_index: 106,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'In Covariance PCA, if variable 1 is measured in kilograms and variable 2 in grams (values 1,000 times larger), what happens to $PC_1$?',
    options: [
      { id: 'a', text: 'Both variables contribute equally' },
      { id: 'b', text: 'Variable 2 (grams) will have a variance $1,000,000$ times larger and will artificially dominate $PC_1$ almost entirely' },
      { id: 'c', text: 'The eigenvalues will become negative' },
      { id: 'd', text: 'The correlation between the variables will drop to zero' },
      { id: 'e', text: 'The trace of the matrix will equal 2' },
      { id: 'f', text: 'PCA automatically converts grams into kilograms' }
    ],
    correct_option: 'b',
    explanation: 'Covariance PCA is sensitive to scale. Multiplying values by 1,000 multiplies variance by $1,000^2 = 1,000,000$, causing that variable to completely hijack the leading component.'
  },
  {
    id: 'pq_s4_7',
    segment_id: 'ch2-pca-analytical',
    order_index: 107,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'What is the generalized sample variance of a multivariate dataset, and how is it related to PCA eigenvalues?',
    options: [
      { id: 'a', text: 'It is the sum of eigenvalues $\\sum \\lambda_i$' },
      { id: 'b', text: 'It is the determinant of the covariance matrix, which equals the product of all eigenvalues: $\\det(S) = \\prod_{i=1}^p \\lambda_i$' },
      { id: 'c', text: 'It is the largest eigenvalue divided by the smallest' },
      { id: 'd', text: 'It is the average of the diagonal elements of $S$' },
      { id: 'e', text: 'It is the degrees of freedom squared' },
      { id: 'f', text: 'It is the square of the trace' }
    ],
    correct_option: 'b',
    explanation: 'Generalized sample variance is defined as $\\det(S)$. A fundamental matrix theorem states that the determinant of any diagonalizable matrix equals the product of its eigenvalues.'
  },
  {
    id: 'pq_s4_8',
    segment_id: 'ch2-pca-analytical',
    order_index: 108,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'When is it strictly recommended to perform Correlation PCA rather than Covariance PCA?',
    options: [
      { id: 'a', text: 'When variables are measured in identical physical units with similar variances' },
      { id: 'b', text: 'When variables are measured in different units (e.g., age in years, income in dollars, satisfaction from 1 to 5) or have widely differing variances' },
      { id: 'c', text: 'When sample size is less than 10' },
      { id: 'd', text: 'When all variables are perfectly uncorrelated' },
      { id: 'e', text: 'When conducting hypothesis tests on regression residuals' },
      { id: 'f', text: 'When only 1 component is retained' }
    ],
    correct_option: 'b',
    explanation: 'Correlation PCA standardizes variables to unit variance ($s_j^2 = 1$), neutralizing arbitrary measurement units and preventing high-variance variables from dominating.'
  },
  {
    id: 'pq_s4_9',
    segment_id: 'ch2-pca-analytical',
    order_index: 109,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'What happens to the eigenvalues of covariance matrix $S$ if one variable is an exact linear combination of other variables (perfect collinearity)?',
    options: [
      { id: 'a', text: 'All eigenvalues become equal to 1.0' },
      { id: 'b', text: 'At least one eigenvalue will equal exactly zero ($\\lambda_p = 0$), and $\\det(S) = 0$' },
      { id: 'c', text: 'The trace becomes infinite' },
      { id: 'd', text: 'Eigenvalues become complex numbers' },
      { id: 'e', text: 'The Kaiser criterion is violated' },
      { id: 'f', text: 'The first eigenvalue equals the sample size' }
    ],
    correct_option: 'b',
    explanation: 'Perfect collinearity makes $S$ rank-deficient (singular), meaning $\\det(S) = 0$. The number of zero eigenvalues equals the dimension of collinearity redundancy.'
  },
  {
    id: 'pq_s4_10',
    segment_id: 'ch2-pca-analytical',
    order_index: 110,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'In the Lagrange multiplier derivation of PCA, why does $\\text{Var}(t) = w^T S w = \\lambda$ hold?',
    options: [
      { id: 'a', text: 'Because premultiplying $(S - \\lambda I)w = 0$ by $w^T$ yields $w^T S w - \\lambda w^T w = 0$, and since $w^T w = 1$, $w^T S w = \\lambda$' },
      { id: 'b', text: 'Because $S$ is an identity matrix' },
      { id: 'c', text: 'Because $\\lambda$ is the mean of the scores' },
      { id: 'd', text: 'Because the trace equals the determinant' },
      { id: 'e', text: 'Because the degrees of freedom equal $w^T w$' },
      { id: 'f', text: 'Because Lagrange multipliers are always equal to 1' }
    ],
    correct_option: 'a',
    explanation: 'From $(S - \\lambda I)w = 0 \\implies Sw = \\lambda w$. Multiplying on the left by $w^T$ gives $w^T Sw = \\lambda w^T w$. Since the eigenvector is normalized ($w^T w = 1$), the variance $w^T Sw$ is identically $\\lambda$.'
  },
  {
    id: 'pq_s4_11',
    segment_id: 'ch2-pca-analytical',
    order_index: 111,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'Under what specific mathematical condition do Covariance PCA and Correlation PCA produce the exact same principal component eigenvectors?',
    options: [
      { id: 'a', text: 'When all variables have identical sample variances ($s_1^2 = s_2^2 = \\dots = s_p^2$)' },
      { id: 'b', text: 'When all pairwise correlations are zero' },
      { id: 'c', text: 'When the sample size $n$ approaches infinity' },
      { id: 'd', text: 'When the determinant of $S$ equals 1' },
      { id: 'e', text: 'When all variables are measured on an ordinal scale' },
      { id: 'f', text: 'When $p = 2$' }
    ],
    correct_option: 'a',
    explanation: 'If all variances are equal ($s_j^2 = c$), then $S = c R$. Multiplying a matrix by a constant scales eigenvalues by $c$ but leaves eigenvectors completely unchanged.'
  },
  {
    id: 'pq_s4_12',
    segment_id: 'ch2-pca-analytical',
    order_index: 112,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'How is the condition number $\\kappa(S) = \\lambda_{\\max} / \\lambda_{\\min}$ interpreted in multivariate diagnostics?',
    options: [
      { id: 'a', text: 'As the ratio of sample size to number of variables' },
      { id: 'b', text: 'As a diagnostic for severe multicollinearity and numerical instability; very large values indicate near-singularity' },
      { id: 'c', text: 'As the percentage of explained variance' },
      { id: 'd', text: 'As the reliability coefficient of the factor model' },
      { id: 'e', text: 'As the degrees of freedom of the Bartlett test' },
      { id: 'f', text: 'As the RMSR fit statistic' }
    ],
    correct_option: 'b',
    explanation: 'The condition number measures matrix sensitivity. If $\\lambda_{\\max} / \\lambda_{\\min} > 1,000$, the data cloud is squished in at least one direction, signaling severe multicollinearity.'
  },
  {
    id: 'pq_s4_13',
    segment_id: 'ch2-pca-analytical',
    order_index: 113,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'What is the trace of a $4 \\times 4$ correlation matrix $R$?',
    options: [
      { id: 'a', text: '$1.0$' },
      { id: 'b', text: '$4.0$' },
      { id: 'c', text: '$16.0$' },
      { id: 'd', text: '$0.0$' },
      { id: 'e', text: '$2.0$' },
      { id: 'f', text: '$8.0$' }
    ],
    correct_option: 'b',
    explanation: 'The diagonal elements of any correlation matrix are all $1.0$. The trace is the sum of diagonal elements: $1 + 1 + 1 + 1 = 4.0$.'
  },
  {
    id: 'pq_s4_14',
    segment_id: 'ch2-pca-analytical',
    order_index: 114,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'If a covariance matrix $S$ has eigenvalues $\\lambda_1 = 20, \\lambda_2 = 10, \\lambda_3 = 5$, what proportion of total variance is explained by $PC_1$?',
    options: [
      { id: 'a', text: '$20\\%$' },
      { id: 'b', text: '$57.14\\%$ ($20 / 35$)' },
      { id: 'c', text: '$33.33\\%$' },
      { id: 'd', text: '$85.71\\%$' },
      { id: 'e', text: '$50.00\\%$' },
      { id: 'f', text: '$14.28\\%$' }
    ],
    correct_option: 'b',
    explanation: 'Total variance is $\\sum \\lambda_i = 20 + 10 + 5 = 35$. The proportion explained by $PC_1$ is $20 / 35 \\approx 0.5714 = 57.14\\%$.'
  },
  {
    id: 'pq_s4_15',
    segment_id: 'ch2-pca-analytical',
    order_index: 115,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'If the correlation matrix is an identity matrix $R = I$ (all variables mutually uncorrelated), what are the eigenvalues?',
    options: [
      { id: 'a', text: '$\\lambda_1 = p$ and all others are 0' },
      { id: 'b', text: 'All eigenvalues equal exactly 1.0 ($\\lambda_1 = \\lambda_2 = \\dots = \\lambda_p = 1.0$)' },
      { id: 'c', text: 'All eigenvalues are zero' },
      { id: 'd', text: 'They alternate between +1 and -1' },
      { id: 'e', text: 'They cannot be calculated' },
      { id: 'f', text: 'The trace is 0' }
    ],
    correct_option: 'b',
    explanation: 'For $R = I$, $\\det(I - \\lambda I) = (1 - \\lambda)^p = 0 \\implies \\lambda_i = 1.0$ for all $i$. No dimension reduction is possible because no correlation exists.'
  },
  {
    id: 'pq_s4_16',
    segment_id: 'ch2-pca-analytical',
    order_index: 116,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'How do you convert ordinary principal component scores $t_{hi}$ into standardized scores with sample variance equal to 1.0?',
    options: [
      { id: 'a', text: 'Subtract the mean $\\bar{t}_i$' },
      { id: 'b', text: 'Divide the score by the square root of the eigenvalue: $t^*_{hi} = t_{hi} / \\sqrt{\\lambda_i}$' },
      { id: 'c', text: 'Multiply by the sample size $n$' },
      { id: 'd', text: 'Divide by the degrees of freedom' },
      { id: 'e', text: 'Add the trace of $S$' },
      { id: 'f', text: 'Multiply by the factor loading' }
    ],
    correct_option: 'b',
    explanation: 'Because ordinary component scores have variance $\\text{Var}(t_{\\cdot i}) = \\lambda_i$, dividing by the standard deviation $\\sqrt{\\lambda_i}$ scales the variance to exactly 1.0.'
  },
  {
    id: 'pq_s4_17',
    segment_id: 'ch2-pca-analytical',
    order_index: 117,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'Why is the covariance matrix $S$ guaranteed to have non-negative eigenvalues ($\\lambda_i \\ge 0$)?',
    options: [
      { id: 'a', text: 'Because $S$ is calculated with $n - 1$' },
      { id: 'b', text: 'Because $S = \\frac{1}{n-1} X_c^T X_c$ is positive semi-definite, so $w^T S w = \\frac{1}{n-1}\\|X_c w\\|^2 \\ge 0$ for all vectors $w$' },
      { id: 'c', text: 'Because the determinant is always positive' },
      { id: 'd', text: 'Because all sample means are positive' },
      { id: 'e', text: 'Because PCA uses the Kaiser criterion' },
      { id: 'f', text: 'Because of Bessel\'s correction' }
    ],
    correct_option: 'b',
    explanation: 'Any matrix of the form $A^T A$ is positive semi-definite. Quadratic forms $w^T S w$ represent squared norms, which are strictly non-negative, guaranteeing $\\lambda_i \\ge 0$.'
  },
  {
    id: 'pq_s4_18',
    segment_id: 'ch2-pca-analytical',
    order_index: 118,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'If two eigenvalues are equal ($\\lambda_1 = \\lambda_2$), what is the property of their corresponding eigenvectors?',
    options: [
      { id: 'a', text: 'They must be zero vectors' },
      { id: 'b', text: 'Any linear combination of their eigenvectors in that 2D eigenspace is also a valid eigenvector, meaning their specific orientation can be chosen arbitrarily while maintaining mutual orthogonality' },
      { id: 'c', text: 'They cannot be made orthogonal' },
      { id: 'd', text: 'Their sum must equal the determinant' },
      { id: 'e', text: 'The characteristic polynomial has no real roots' },
      { id: 'f', text: 'The covariance matrix has negative trace' }
    ],
    correct_option: 'b',
    explanation: 'Repeated eigenvalues produce an eigenspace of dimension $> 1$. Any orthonormal basis chosen within this eigenspace provides valid eigenvectors.'
  }
];

console.log('Practice Part 2 loaded (36 questions across Segments 3 and 4).');
