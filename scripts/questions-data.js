export const questions = [
  // ==========================================
  // SEGMENT 1: FUNDAMENTALS & SCALES (12 Qs)
  // ==========================================
  {
    id: 'da-q1-1',
    segment_id: 'da-ch1-intro',
    order_index: 1,
    difficulty: 'easy',
    question: 'A market researcher measures customer gender by coding 0 for Male and 1 for Female. Why is calculating the arithmetic mean of this variable statistically inappropriate?',
    options: [
      { id: 'a', text: 'Because numbers on a nominal scale represent arbitrary group labels with no intrinsic numerical magnitude or distance.' },
      { id: 'b', text: 'Because nominal scales require at least three categories before parametric measures can be computed.' },
      { id: 'c', text: 'Because the variance of a binary nominal variable is always mathematically undefined.' },
      { id: 'd', text: 'Because the arithmetic mean can only be computed when data are standardized to unit variance.' },
      { id: 'e', text: 'Because nominal variables are exclusively reserved for dependent variables in regression analysis.' },
      { id: 'f', text: 'Because nonmetric variables must always be converted into continuous logarithms before calculating central tendency.' }
    ],
    correct_option: 'a',
    explanation: 'On a nominal scale, numbers are arbitrary symbols used solely to classify observations into discrete categories. They lack order, equal intervals, and a natural zero, so arithmetic operations such as computing the mean or standard deviation have no substantive meaning.'
  },
  {
    id: 'da-q1-2',
    segment_id: 'da-ch1-intro',
    order_index: 2,
    difficulty: 'easy',
    question: 'If an occupation variable contains 4 distinct categories (Commercial, Technical, Managerial, Unemployed), how many dummy (binary) variables are required to represent it in an econometric model without causing perfect multicollinearity?',
    options: [
      { id: 'a', text: 'Exactly 1 continuous dummy variable using fractional ranks.' },
      { id: 'b', text: 'Exactly 2 dummy variables, because 2^2 = 4 combinations.' },
      { id: 'c', text: 'Exactly 3 dummy variables, following the k - 1 rule where one category serves as the benchmark reference group.' },
      { id: 'd', text: 'Exactly 4 dummy variables, one for each categorical modality including the intercept.' },
      { id: 'e', text: 'Exactly 5 dummy variables to account for interaction effects and residual degrees of freedom.' },
      { id: 'f', text: 'Zero dummy variables, because nominal categories must be analyzed using rank-order Spearman coefficients.' }
    ],
    correct_option: 'c',
    explanation: 'For a nominal variable with k categories, exactly k - 1 dummy variables are needed. The omitted category becomes the reference base group; including all k dummies alongside a regression intercept causes the dummy variable trap (perfect collinearity).'
  },
  {
    id: 'da-q1-3',
    segment_id: 'da-ch1-intro',
    order_index: 3,
    difficulty: 'easy',
    question: 'Which of the following correctly describes the conceptual boundary between Dependence methods and Interdependence methods in multivariate analysis?',
    options: [
      { id: 'a', text: 'Dependence methods require nonmetric data, whereas Interdependence methods strictly require metric ratio data.' },
      { id: 'b', text: 'Dependence methods designate specific variables as predictors (independent) and outcomes (dependent), whereas Interdependence methods analyze all variables simultaneously to uncover latent structure.' },
      { id: 'c', text: 'Dependence methods assume zero correlation among variables, while Interdependence methods require perfect collinearity.' },
      { id: 'd', text: 'Dependence methods only analyze sample sizes under 100, whereas Interdependence methods are applied to big data.' },
      { id: 'e', text: 'Dependence methods reduce data dimensionality, whereas Interdependence methods exclusively test null hypotheses.' },
      { id: 'f', text: 'Dependence methods are purely exploratory, while Interdependence methods are exclusively confirmatory.' }
    ],
    correct_option: 'b',
    explanation: 'In dependence methods (e.g. regression, ANOVA, discriminant analysis), variables are divided into independent and dependent groups to model relationship patterns. In interdependence methods (e.g. PCA, Factor Analysis, Cluster Analysis), no variable is prioritized as dependent; mutual associations among all variables are examined together.'
  },
  {
    id: 'da-q1-4',
    segment_id: 'da-ch1-intro',
    order_index: 4,
    difficulty: 'easy',
    question: 'When original raw data are mean-corrected (centered) by subtracting the mean of each variable (x* = x - x̄), what happens to the data coordinates, variances, and covariances?',
    options: [
      { id: 'a', text: 'The coordinate origin shifts to the sample centroid (0,0), while all variances, covariances, and relative distances remain completely unchanged.' },
      { id: 'b', text: 'The variances become equal to 1.0, and all covariances are rescaled between -1.0 and +1.0.' },
      { id: 'c', text: 'The covariance matrix collapses to an identity matrix, eliminating all linear associations between variables.' },
      { id: 'd', text: 'The data points rotate counter-clockwise by 45 degrees, changing the shape and relative distances of the observation cloud.' },
      { id: 'e', text: 'The degrees of freedom increase from n - 1 to n because the origin is fixed.' },
      { id: 'f', text: 'The sum of squares becomes zero for all variables across the dataset.' }
    ],
    correct_option: 'a',
    explanation: 'Mean-centering is a pure spatial translation that shifts the origin to the center of gravity (centroid). It alters absolute coordinates but leaves all deviations, variances, covariances, and pairwise relative distances invariant.'
  },
  {
    id: 'da-q1-5',
    segment_id: 'da-ch1-intro',
    order_index: 5,
    difficulty: 'intermediate',
    question: 'Why does calculating the sample variance of a dataset with n observations divide the Sum of Squares (SS) by n - 1 rather than n?',
    options: [
      { id: 'a', text: 'Because one degree of freedom is consumed estimating the sample mean, leaving exactly n - 1 independent pieces of information.' },
      { id: 'b', text: 'Because dividing by n would violate the triangle inequality axiom of Euclidean geometry.' },
      { id: 'c', text: 'Because sample observations are always assumed to follow an oblique factor distribution.' },
      { id: 'd', text: 'Because dividing by n creates an upward bias that artificially inflates the population dispersion.' },
      { id: 'e', text: 'Because sample sizes in multivariate data analysis must always be corrected for measurement unit scaling.' },
      { id: 'f', text: 'Because the last observation in any sample is always mathematically dependent on the first observation.' }
    ],
    correct_option: 'a',
    explanation: 'Since the sum of deviations around the sample mean must equal zero (∑(x_i - x̄) = 0), once n - 1 deviations are determined, the n-th deviation is strictly fixed. Dividing by n - 1 (Bessel\'s correction) provides an unbiased estimator of population variance.'
  },
  {
    id: 'da-q1-6',
    segment_id: 'da-ch1-intro',
    order_index: 6,
    difficulty: 'intermediate',
    question: 'In the geometric observation space (where variables are represented as vectors in an n-dimensional space of observations), what fundamental relationship connects the angle α between two mean-corrected vectors and their Pearson correlation coefficient r?',
    options: [
      { id: 'a', text: 'The cosine of the angle α between the two vectors is exactly equal to the Pearson correlation coefficient (cos α = r).' },
      { id: 'b', text: 'The tangent of the angle α equals the ratio of the two sample variances (tan α = s1^2 / s2^2).' },
      { id: 'c', text: 'The Euclidean length of the angle bisector equals the Sum of Cross Products (SCP).' },
      { id: 'd', text: 'The angle α is always 90 degrees regardless of whether the variables correlate or not.' },
      { id: 'e', text: 'The sine of the angle α represents the proportion of explained variance in Principal Axis Factoring.' },
      { id: 'f', text: 'The angle α multiplied by degrees of freedom equals the Mahalanobis statistical distance.' }
    ],
    correct_option: 'a',
    explanation: 'From the vector dot product definition, x1 · x2 = ||x1|| ||x2|| cos α. Dividing by n - 1 yields s12 = s1 s2 cos α, which simplifies directly to cos α = s12 / (s1 s2) = r. Thus, two orthogonal vectors (α = 90°, cos α = 0) represent uncorrelated variables (r = 0).'
  },
  {
    id: 'da-q1-7',
    segment_id: 'da-ch1-intro',
    order_index: 7,
    difficulty: 'intermediate',
    question: 'Consider two variables: Annual Salary (in euros, variance = 40,000,000) and Number of Children (variance = 1.5). Why is using standard Euclidean distance between customers problematic in this context?',
    options: [
      { id: 'a', text: 'Because Euclidean distance is completely dominated by Annual Salary due to its massive variance scale, rendering the children variable functionally irrelevant.' },
      { id: 'b', text: 'Because Euclidean distance cannot be mathematically evaluated when one variable is metric and the other is nonmetric.' },
      { id: 'c', text: 'Because Euclidean distance violates the symmetry axiom when variables have different sample means.' },
      { id: 'd', text: 'Because Euclidean distance requires that all variables follow a standard normal distribution with mean zero.' },
      { id: 'e', text: 'Because Euclidean distance cannot handle sample sizes larger than 12 observations.' },
      { id: 'f', text: 'Because the Euclidean distance formula requires inverting a singular covariance matrix.' }
    ],
    correct_option: 'a',
    explanation: 'Euclidean distance sums squared raw differences directly. Differences of thousands of euros dwarf differences of 1 or 2 children, giving Salary overwhelming artificial weight. Statistical distance resolves this by standardizing differences by each variable\'s variance.'
  },
  {
    id: 'da-q1-8',
    segment_id: 'da-ch1-intro',
    order_index: 8,
    difficulty: 'intermediate',
    question: 'Under what specific conditions does the Mahalanobis distance (MD^2 = (xi - xk)\' S^-1 (xi - xk)) simplify exactly to standard Euclidean distance?',
    options: [
      { id: 'a', text: 'When all variables are mutually uncorrelated (covariances = 0) and standardized to have unit variance (S = Identity Matrix).' },
      { id: 'b', text: 'When all variables have a correlation of exactly r = 1.0.' },
      { id: 'c', text: 'When the sample size n equals the number of variables p.' },
      { id: 'd', text: 'When the data are measured on an ordinal Likert scale transformed by Y = a + bY0.' },
      { id: 'e', text: 'When Principal Components Factoring is used instead of Principal Axis Factoring.' },
      { id: 'f', text: 'When all variables are mean-corrected without scaling by their standard deviations.' }
    ],
    correct_option: 'a',
    explanation: 'Mahalanobis distance weights differences by the inverse covariance matrix S^-1. When variables are uncorrelated (r = 0) and standardized (variance = 1), S becomes the Identity matrix I, and S^-1 = I. Then (xi - xk)\' I (xi - xk) = ∑(x_ij - x_kj)^2, which is Euclidean distance squared.'
  },
  {
    id: 'da-q1-9',
    segment_id: 'da-ch1-intro',
    order_index: 9,
    difficulty: 'hard',
    question: 'In a sample of 12 firms, the Sum of Squares for Financial Ratio 1 is SS1 = 262.92, the Sum of Squares for Ratio 2 is SS2 = 131.67, and the Sum of Cross Products is SCP = 136.38. What are the sample variances s1^2, s2^2 and Pearson correlation r12?',
    options: [
      { id: 'a', text: 's1^2 = 23.90, s2^2 = 11.97, and r12 = 0.733' },
      { id: 'b', text: 's1^2 = 21.91, s2^2 = 10.97, and r12 = 0.518' },
      { id: 'c', text: 's1^2 = 26.29, s2^2 = 13.17, and r12 = 0.850' },
      { id: 'd', text: 's1^2 = 23.90, s2^2 = 11.97, and r12 = 0.941' },
      { id: 'e', text: 's1^2 = 28.66, s2^2 = 14.33, and r12 = 0.620' },
      { id: 'f', text: 's1^2 = 23.09, s2^2 = 21.09, and r12 = 0.746' }
    ],
    correct_option: 'a',
    explanation: 'With n = 12, df = n - 1 = 11. s1^2 = 262.92 / 11 = 23.90; s2^2 = 131.67 / 11 = 11.97. Covariance s12 = 136.38 / 11 = 12.398. Correlation r12 = s12 / (s1 * s2) = 12.398 / (sqrt(23.90) * sqrt(11.97)) = 136.38 / sqrt(262.92 * 131.67) = 136.38 / 186.06 ≈ 0.733.'
  },
  {
    id: 'da-q1-10',
    segment_id: 'da-ch1-intro',
    order_index: 10,
    difficulty: 'hard',
    question: 'Two observations have coordinates (x1, x2) of (-2, 0) and (2, 0). If the variables are uncorrelated with variances s1^2 = 4 and s2^2 = 1, how do their Euclidean Distance (ED) and Statistical Distance (SD) compare?',
    options: [
      { id: 'a', text: 'ED = 4.0, while SD = 2.0 (the statistical distance is smaller because the difference occurs along a high-variance axis).' },
      { id: 'b', text: 'ED = 4.0, while SD = 8.0 because statistical distance multiplies Euclidean distance by variance.' },
      { id: 'c', text: 'ED = 2.0, while SD = 4.0 because degrees of freedom reduce Euclidean distances.' },
      { id: 'd', text: 'ED = 16.0, while SD = 4.0 because statistical distance uses square roots twice.' },
      { id: 'e', text: 'ED and SD are identical at 4.0 because the second coordinate difference is zero.' },
      { id: 'f', text: 'SD cannot be calculated unless the variables are rotated using the Varimax criterion.' }
    ],
    correct_option: 'a',
    explanation: 'Euclidean distance ED = sqrt((2 - (-2))^2 + (0 - 0)^2) = sqrt(16) = 4.0. Squared statistical distance SD^2 = (2 - (-2))^2 / s1^2 + 0 / s2^2 = 16 / 4 = 4. Thus SD = sqrt(4) = 2.0. Statistical distance properly recognizes that a 4-unit gap on a variable with variance 4 represents only 2 standard deviations.'
  },
  {
    id: 'da-q1-11',
    segment_id: 'da-ch1-intro',
    order_index: 11,
    difficulty: 'hard',
    question: 'A financial institution wants to predict whether a customer will Default on a loan (Yes / No) using their Credit Score (Metric), Annual Income (Metric), and Debt-to-Income Ratio (Metric). According to the classification of multivariate techniques, what is the appropriate method and why?',
    options: [
      { id: 'a', text: 'Two-group Discriminant Analysis (or Logistic Regression), because there is a single nonmetric (binary) dependent variable and multiple metric independent variables.' },
      { id: 'b', text: 'Principal Components Analysis (PCA), because it forms uncorrelated linear composites to maximize loan variance.' },
      { id: 'c', text: 'Analysis of Variance (ANOVA), because ANOVA models a continuous dependent outcome across categorical groups.' },
      { id: 'd', text: 'Canonical Correlation Analysis, because it evaluates linear relations between two sets of nonmetric variables.' },
      { id: 'e', text: 'Correspondence Analysis, because all consumer finance data must be evaluated in contingency tables.' },
      { id: 'f', text: 'Factor Analysis (FA), because Default status is a latent unobservable construct measured by metric indicators.' }
    ],
    correct_option: 'a',
    explanation: 'When the goal is predicting a discrete, categorical (nonmetric) outcome from multiple metric predictor variables, Discriminant Analysis (or binary logistic regression) is the classical dependence technique.'
  },
  {
    id: 'da-q1-12',
    segment_id: 'da-ch1-intro',
    order_index: 12,
    difficulty: 'hard',
    question: 'A proposed distance measure D satisfies D(A, B) = D(B, A) and D(A, B) = 0 if and only if A = B. However, for three points A, B, and C, it yields D(A, C) = 10, D(A, B) = 3, and D(B, C) = 4. Why does this measure fail as a valid geometric metric?',
    options: [
      { id: 'a', text: 'It violates the Triangle Inequality axiom, which strictly requires that D(A, C) <= D(A, B) + D(B, C) (here 10 > 3 + 4 = 7).' },
      { id: 'b', text: 'It violates the Symmetry axiom because distances cannot sum to an odd integer.' },
      { id: 'c', text: 'It violates the Distinguishability axiom because the distance between A and C exceeds the sample variance.' },
      { id: 'd', text: 'It violates the Kaiser criterion by having an eigenvalue smaller than unity.' },
      { id: 'e', text: 'It violates the mean-correction principle because the origin was not shifted to the centroid.' },
      { id: 'f', text: 'It violates the Bessel correction by failing to divide by n - 1 degrees of freedom.' }
    ],
    correct_option: 'a',
    explanation: 'The three fundamental axioms of a metric space are: 1. Symmetry (D(i,k) = D(k,i)); 2. Distinguishability (D(i,k) = 0 iff i = k); 3. Triangle Inequality (D(i,l) <= D(i,k) + D(k,l)). Here, D(A,C) = 10 > 3 + 4 = 7, which breaches the triangle inequality.'
  },

  // ==========================================
  // SEGMENT 2: PCA (12 Qs)
  // ==========================================
  {
    id: 'da-q2-1',
    segment_id: 'da-ch2-pca',
    order_index: 1,
    difficulty: 'easy',
    question: 'What is the primary conceptual objective of Principal Components Analysis (PCA)?',
    options: [
      { id: 'a', text: 'To reduce the dimensionality of p correlated variables into a smaller set of k uncorrelated composite indices while retaining maximum total observed variance.' },
      { id: 'b', text: 'To identify unobservable latent constructs by partitioning variable variance into communality and unique error variance.' },
      { id: 'c', text: 'To predict a nonmetric dependent variable from a linear combination of metric independent variables.' },
      { id: 'd', text: 'To cluster observations into homogeneous subgroups such that within-group variance is minimized.' },
      { id: 'e', text: 'To rotate categorical cross-tabulations into simple orthogonal structures using Varimax.' },
      { id: 'f', text: 'To determine whether sample group means differ significantly across experimental conditions.' }
    ],
    correct_option: 'a',
    explanation: 'PCA is a data-reduction technique that constructs uncorrelated linear combinations of original variables to explain as much of the total observed variance as possible using fewer dimensions.'
  },
  {
    id: 'da-q2-2',
    segment_id: 'da-ch2-pca',
    order_index: 2,
    difficulty: 'easy',
    question: 'In PCA, what does each eigenvalue (λi) mathematically represent?',
    options: [
      { id: 'a', text: 'The variance of the corresponding i-th principal component (Var(PCi) = λi).' },
      { id: 'b', text: 'The correlation between the original variable and the first principal component.' },
      { id: 'c', text: 'The unique error variance discarded when reducing dimensions.' },
      { id: 'd', text: 'The degree of sampling adequacy according to Kaiser\'s classification.' },
      { id: 'e', text: 'The sample mean of the standardized observations on the rotated axis.' },
      { id: 'f', text: 'The determinant of the inverse covariance matrix.' }
    ],
    correct_option: 'a',
    explanation: 'An eigenvalue λi directly measures the variance accounted for by the i-th principal component. The sum of all eigenvalues equals the total variance of the original dataset.'
  },
  {
    id: 'da-q2-3',
    segment_id: 'da-ch2-pca',
    order_index: 3,
    difficulty: 'easy',
    question: 'Why must the eigenvector weight vector w1 in PCA be constrained to have unit length (w1\'w1 = 1)?',
    options: [
      { id: 'a', text: 'To prevent the projected variance from increasing arbitrarily to infinity by simply scaling up the weights.' },
      { id: 'b', text: 'To ensure that all principal component scores are constrained strictly between -1.0 and +1.0.' },
      { id: 'c', text: 'To enforce oblique factor correlations among the extracted dimensions.' },
      { id: 'd', text: 'To guarantee that the sample mean of the original variables equals zero.' },
      { id: 'e', text: 'To eliminate the need for computing the characteristic determinant equation.' },
      { id: 'f', text: 'To ensure that the residual correlation matrix has zeroes on its main diagonal.' }
    ],
    correct_option: 'a',
    explanation: 'Because Var(w\'x) = w\'Sw, multiplying every weight in w by 10 would multiply the resulting variance by 100 without altering the axis direction. The unit norm constraint w\'w = 1 fixes the scale uniquely.'
  },
  {
    id: 'da-q2-4',
    segment_id: 'da-ch2-pca',
    order_index: 4,
    difficulty: 'easy',
    question: 'According to Kaiser\'s rule of thumb (Mineigen criterion) applied to a Correlation PCA, which components should be retained?',
    options: [
      { id: 'a', text: 'Components with eigenvalues strictly greater than 1.0 (λi > 1).' },
      { id: 'b', text: 'Components that explain at least 95% of cumulative variance.' },
      { id: 'c', text: 'Only the single component with the largest absolute loading.' },
      { id: 'd', text: 'Components whose RMSR is lower than 0.05.' },
      { id: 'e', text: 'All components whose eigenvalues are strictly smaller than the average variance.' },
      { id: 'f', text: 'Components that possess positive pattern loadings for all variables.' }
    ],
    correct_option: 'a',
    explanation: 'In correlation PCA, each standardized original variable has variance 1.0. Kaiser\'s criterion retains components with λ > 1, meaning the component captures more variance than any single original variable.'
  },
  {
    id: 'da-q2-5',
    segment_id: 'da-ch2-pca',
    order_index: 5,
    difficulty: 'intermediate',
    question: 'A dataset includes Annual Revenue (in €), Employee Headcount (in units), and Customer Satisfaction (1-5 rating). Why MUST Correlation PCA (standardized data) be used instead of Covariance PCA?',
    options: [
      { id: 'a', text: 'Because Covariance PCA is scale-dependent; the immense variance of Revenue would dominate the leading components, distorting the true multivariate relationship.' },
      { id: 'b', text: 'Because Covariance PCA cannot calculate eigenvalues when sample sizes exceed 1,000 observations.' },
      { id: 'c', text: 'Because Correlation PCA eliminates the need for calculating eigenvectors.' },
      { id: 'd', text: 'Because satisfaction ratings on Likert scales are nonmetric and cannot be centered.' },
      { id: 'e', text: 'Because Covariance PCA produces components that are mutually correlated.' },
      { id: 'f', text: 'Because Correlation PCA forces all component scores to have an eigenvalue equal to the number of variables.' }
    ],
    correct_option: 'a',
    explanation: 'Covariance PCA retains original measurement units. If one variable has an enormous numerical scale (e.g. millions of euros), its variance dominates S, forcing PC1 to align almost entirely with that single variable. Standardizing inputs (Correlation PCA) gives each variable equal initial weight (variance = 1).'
  },
  {
    id: 'da-q2-6',
    segment_id: 'da-ch2-pca',
    order_index: 6,
    difficulty: 'intermediate',
    question: 'How do Component Scores (thi) differ conceptually and functionally from Component Loadings (lji)?',
    options: [
      { id: 'a', text: 'Scores are the coordinates of observations on the principal axes (for plotting/clustering), while Loadings are correlations between original variables and components (for substantive interpretation).' },
      { id: 'b', text: 'Scores measure the variance explained by each factor, while Loadings measure the degrees of freedom.' },
      { id: 'c', text: 'Scores are computed using Varimax rotation, while Loadings are computed using Principal Axis Factoring.' },
      { id: 'd', text: 'Scores represent formative weights, while Loadings represent residual error variances.' },
      { id: 'e', text: 'Scores are restricted between -1 and +1, while Loadings can take any positive real value.' },
      { id: 'f', text: 'Scores apply only to nonmetric variables, whereas Loadings apply only to metric variables.' }
    ],
    correct_option: 'a',
    explanation: 'Component scores thi = wi\'xh give each individual entity\'s position along the new principal dimension. Component loadings lji = Corr(Xj, PCi) describe how strongly each original variable correlates with that component, allowing researchers to label what the axis substantive represents.'
  },
  {
    id: 'da-q2-7',
    segment_id: 'da-ch2-pca',
    order_index: 7,
    difficulty: 'intermediate',
    question: 'For a standardized variable Xj in Correlation PCA, what is the exact formula for its loading lji on component i with eigenvalue λi and eigenvector weight wij?',
    options: [
      { id: 'a', text: 'lji = wij * sqrt(λi)' },
      { id: 'b', text: 'lji = wij / sqrt(λi)' },
      { id: 'c', text: 'lji = wij^2 * λi' },
      { id: 'd', text: 'lji = sqrt(wij * λi) / (n - 1)' },
      { id: 'e', text: 'lji = wij * (λi / total_variance)' },
      { id: 'f', text: 'lji = (wij + λi) / 2' }
    ],
    correct_option: 'a',
    explanation: 'The general loading formula is lji = wij * sqrt(λi) / sj. For standardized inputs, the sample standard deviation sj = 1.0, so the formula simplifies directly to lji = wij * sqrt(λi).'
  },
  {
    id: 'da-q2-8',
    segment_id: 'da-ch2-pca',
    order_index: 8,
    difficulty: 'intermediate',
    question: 'Software A outputs the equation PC1 = 0.728*X1 + 0.685*X2, while Software B outputs PC1 = -0.728*X1 - 0.685*X2 on the exact same dataset. Which software solution is statistically correct?',
    options: [
      { id: 'a', text: 'Both solutions are equally correct; reversing the sign of an eigenvector describes the exact same principal axis, retains identical variance, and preserves all relative distances.' },
      { id: 'b', text: 'Software A is correct, because principal component weights must always be positive numbers.' },
      { id: 'c', text: 'Software B is correct, because negative weights indicate that the origin was centered at the centroid.' },
      { id: 'd', text: 'Neither solution is valid because the sum of the squared weights must equal the eigenvalue.' },
      { id: 'e', text: 'Only the solution whose loadings match the Kaiser sampling adequacy threshold is valid.' },
      { id: 'f', text: 'Software A is valid for Covariance PCA, while Software B is only valid for Factor Analysis.' }
    ],
    correct_option: 'a',
    explanation: 'Principal axes are lines in space spanning both positive and negative directions. If w is an eigenvector satisfying Sw = λw, then -w satisfies S(-w) = λ(-w). Reversing signs simultaneously flips all scores and loadings along that axis without altering explained variance or relative distances.'
  },
  {
    id: 'da-q2-9',
    segment_id: 'da-ch2-pca',
    order_index: 9,
    difficulty: 'hard',
    question: 'A covariance PCA on two variables produces eigenvalues λ1 = 38.576 and λ2 = 5.606. What exact percentage of the total variance is retained by the first principal component, and what percentage is discarded?',
    options: [
      { id: 'a', text: 'Retained: 87.31%; Discarded: 12.69%' },
      { id: 'b', text: 'Retained: 75.67%; Discarded: 24.33%' },
      { id: 'c', text: 'Retained: 92.53%; Discarded: 7.47%' },
      { id: 'd', text: 'Retained: 64.86%; Discarded: 35.14%' },
      { id: 'e', text: 'Retained: 81.12%; Discarded: 18.88%' },
      { id: 'f', text: 'Retained: 52.26%; Discarded: 47.74%' }
    ],
    correct_option: 'a',
    explanation: 'Total variance = λ1 + λ2 = 38.576 + 5.606 = 44.182. Retained proportion by PC1 = 38.576 / 44.182 = 0.87311 (87.31%). Discarded proportion = 1 - 0.8731 = 12.69%.'
  },
  {
    id: 'da-q2-10',
    segment_id: 'da-ch2-pca',
    order_index: 10,
    difficulty: 'hard',
    question: 'Customer A has mean-corrected Income x1 = 8.0 and mean-corrected CLV x2 = 5.0. If the first two principal component weight vectors are w1 = (0.728238, 0.685324)\' and w2 = (-0.685324, 0.728238)\', what are Customer A\'s exact PC1 and PC2 scores?',
    options: [
      { id: 'a', text: 'PC1 score = +9.253, and PC2 score = -1.841' },
      { id: 'b', text: 'PC1 score = +7.710, and PC2 score = +2.356' },
      { id: 'c', text: 'PC1 score = +5.697, and PC2 score = -1.242' },
      { id: 'd', text: 'PC1 score = +1.490, and PC2 score = -0.778' },
      { id: 'e', text: 'PC1 score = +8.000, and PC2 score = +5.000' },
      { id: 'f', text: 'PC1 score = +13.000, and PC2 score = +3.000' }
    ],
    correct_option: 'a',
    explanation: 'PC1 score = w1\'x = 0.728238*(8) + 0.685324*(5) = 5.825904 + 3.426620 = 9.252524 ≈ 9.253. PC2 score = w2\'x = -0.685324*(8) + 0.728238*(5) = -5.482592 + 3.641190 = -1.841402 ≈ -1.841.'
  },
  {
    id: 'da-q2-11',
    segment_id: 'da-ch2-pca',
    order_index: 11,
    difficulty: 'hard',
    question: 'A Correlation PCA on 5 regional variables yields ordered eigenvalues: λ1 = 3.367, λ2 = 1.194, λ3 = 0.507, λ4 = 0.372, λ5 = 0.313. Evaluating both Kaiser\'s criterion and cumulative variance, what is the best decision for retaining components?',
    options: [
      { id: 'a', text: 'Retain 2 components; both have λ > 1.0 and together they explain 76.02% of total variance ((3.367 + 1.194)/5 = 91.2% of reduced or 76.02% of total).' },
      { id: 'b', text: 'Retain all 5 components, because PCA only reduces dimensions when all eigenvalues are identical.' },
      { id: 'c', text: 'Retain only 1 component, because λ1 accounts for over 50% of the variance.' },
      { id: 'd', text: 'Retain 4 components, because RMSR must be evaluated before discarding λ4.' },
      { id: 'e', text: 'Discard all components and switch to Canonical Correlation Analysis.' },
      { id: 'f', text: 'Retain 3 components because λ3 exceeds the 0.50 cutoff convention.' }
    ],
    correct_option: 'a',
    explanation: 'Total variance across 5 standardized variables is 5.0. Kaiser\'s criterion retains components with λ > 1.0 (here, PC1 = 3.367 and PC2 = 1.194). Together, (3.367 + 1.194) / 5 = 4.561 / 5 = 91.2% of 2-factor representation and 76.02% of total variance. The scree plot elbow occurs sharply at component 3 (λ3 = 0.507), confirming a 2-component solution.'
  },
  {
    id: 'da-q2-12',
    segment_id: 'da-ch2-pca',
    order_index: 12,
    difficulty: 'hard',
    question: 'In the Portuguese regional study with 5 indicators (Density, GDP, Doctors, Hospitals, Libraries), PC1 has positive loadings on all variables (> 0.60), while PC2 has high positive loadings on Density and GDP (+0.67, +0.75) and negative loadings on Doctors, Hospitals, and Libraries (-0.28 to -0.35). How should PC1 and PC2 be substantively interpreted?',
    options: [
      { id: 'a', text: 'PC1 reflects overall general regional development, while PC2 contrasts urban economic wealth against healthcare/cultural infrastructure.' },
      { id: 'b', text: 'PC1 measures unique measurement error, while PC2 measures common factor communality.' },
      { id: 'c', text: 'PC1 is an oblique factor, while PC2 is an orthogonal rotation error.' },
      { id: 'd', text: 'PC1 indicates that the data are inappropriate for PCA according to the KMO metric.' },
      { id: 'e', text: 'PC1 and PC2 must be discarded because opposite loading signs violate the Kaiser criterion.' },
      { id: 'f', text: 'PC1 represents verbal abilities, while PC2 represents quantitative abilities.' }
    ],
    correct_option: 'a',
    explanation: 'When PC1 has large positive loadings across all indicators, it acts as a "size/general level" component summarizing overall regional development. PC2, with opposite signs between economic/density indicators (+) and public service infrastructure (-), acts as a "shape/contrast" component differentiating commercial/urban wealth from health/cultural infrastructure.'
  },

  // ==========================================
  // SEGMENT 3: FACTOR ANALYSIS (12 Qs)
  // ==========================================
  {
    id: 'da-q3-1',
    segment_id: 'da-ch3-fa',
    order_index: 1,
    difficulty: 'easy',
    question: 'What is the fundamental theoretical difference between Factor Analysis (FA) and Principal Components Analysis (PCA)?',
    options: [
      { id: 'a', text: 'FA models observable variables as reflective manifestations of underlying unobservable latent factors and separates unique error variance, whereas PCA creates formative composite indices to explain total observed variance.' },
      { id: 'b', text: 'FA only uses nonmetric contingency tables, whereas PCA strictly analyzes continuous metric data.' },
      { id: 'c', text: 'FA requires that variables have zero correlation, while PCA requires all correlations to be positive.' },
      { id: 'd', text: 'FA maximizes total variance retained, while PCA only maximizes the residual correlation matrix.' },
      { id: 'e', text: 'FA produces orthogonal components, while PCA can only produce oblique rotated solutions.' },
      { id: 'f', text: 'FA is an iterative algorithm that never converges, whereas PCA always converges in one iteration.' }
    ],
    correct_option: 'a',
    explanation: 'In FA, variables are reflective indicators of unobserved latent constructs, and total variance is decomposed into shared communality (h^2) and unique error (u^2). PCA is a formative data-reduction technique explaining total observed variance without modeling unique factor errors.'
  },
  {
    id: 'da-q3-2',
    segment_id: 'da-ch3-fa',
    order_index: 2,
    difficulty: 'easy',
    question: 'In Factor Analysis of standardized variables, how is the total variance of an indicator xj partitioned?',
    options: [
      { id: 'a', text: 'Total Variance (1.0) = Communality (h_j^2, shared with common factors) + Unique Variance (u_j^2, specific error variance).' },
      { id: 'b', text: 'Total Variance (1.0) = Eigenvalue (λ) + Degrees of Freedom (n - 1).' },
      { id: 'c', text: 'Total Variance (1.0) = Pattern Loading + Structure Loading.' },
      { id: 'd', text: 'Total Variance (1.0) = Sum of Squares (SS) / Sum of Cross Products (SCP).' },
      { id: 'e', text: 'Total Variance (1.0) = KMO Sampling Adequacy + RMSR Goodness of Fit.' },
      { id: 'f', text: 'Total Variance (1.0) = Varimax Variance + Quartimax Variance.' }
    ],
    correct_option: 'a',
    explanation: 'For standardized indicators with unit variance, Var(x_j) = 1.0 = h_j^2 + u_j^2. Communality h_j^2 is the proportion explained by the common factors; unique variance u_j^2 = 1 - h_j^2 is the residual specific/error variance.'
  },
  {
    id: 'da-q3-3',
    segment_id: 'da-ch3-fa',
    order_index: 3,
    difficulty: 'easy',
    question: 'Under what specific structural condition are the pattern loadings of a factor model strictly identical to its structure loadings?',
    options: [
      { id: 'a', text: 'When the factor model is orthogonal (the common factors are mutually uncorrelated, Φ = 0).' },
      { id: 'b', text: 'When the factor model is oblique with factor correlation Φ12 = 0.50.' },
      { id: 'c', text: 'When the KMO measure of sampling adequacy is less than 0.50.' },
      { id: 'd', text: 'When the communalities of all variables are equal to zero.' },
      { id: 'e', text: 'When Principal Components Factoring is rotated using Promax.' },
      { id: 'f', text: 'When the sample size is equal to the number of indicators.' }
    ],
    correct_option: 'a',
    explanation: 'Pattern loadings are regression coefficients, while structure loadings are bivariate correlations between indicators and factors. When factors are orthogonal (uncorrelated), there are no cross-factor correlation terms, so pattern loadings and structure loadings are identical.'
  },
  {
    id: 'da-q3-4',
    segment_id: 'da-ch3-fa',
    order_index: 4,
    difficulty: 'easy',
    question: 'According to Kaiser\'s established criteria for the Kaiser-Meyer-Olkin (KMO) measure of sampling adequacy, what does an overall KMO value of 0.83 indicate?',
    options: [
      { id: 'a', text: 'Meritorious sampling adequacy, indicating the data are well-suited for factor analysis.' },
      { id: 'b', text: 'Unacceptable sampling adequacy, indicating factor analysis should not be attempted.' },
      { id: 'c', text: 'Miserable sampling adequacy, requiring the deletion of at least half the variables.' },
      { id: 'd', text: 'Mediocre sampling adequacy, representing the bare minimum tolerable limit.' },
      { id: 'e', text: 'A computational error, because KMO values cannot exceed 0.50.' },
      { id: 'f', text: 'That the correlation matrix is singular and cannot be inverted.' }
    ],
    correct_option: 'a',
    explanation: 'KMO thresholds: ≥ 0.90 Marvelous; > 0.80 Meritorious; > 0.70 Middling; > 0.60 Mediocre; > 0.50 Miserable; ≤ 0.50 Unacceptable. A value of 0.83 is classified as Meritorious.'
  },
  {
    id: 'da-q3-5',
    segment_id: 'da-ch3-fa',
    order_index: 5,
    difficulty: 'intermediate',
    question: 'In an orthogonal single-factor model with indicators V = 0.65*F1 + UV and W = 0.84*F1 + UW, what is the reproduced correlation between V and W?',
    options: [
      { id: 'a', text: 'Corr(V, W) = 0.65 * 0.84 = 0.546' },
      { id: 'b', text: 'Corr(V, W) = (0.65 + 0.84) / 2 = 0.745' },
      { id: 'c', text: 'Corr(V, W) = 0.65^2 + 0.84^2 = 1.128' },
      { id: 'd', text: 'Corr(V, W) = sqrt(0.65 * 0.84) = 0.739' },
      { id: 'e', text: 'Corr(V, W) = 0.84 - 0.65 = 0.190' },
      { id: 'f', text: 'Corr(V, W) = 0.000 because unique factors are uncorrelated.' }
    ],
    correct_option: 'a',
    explanation: 'In an orthogonal single-factor model where indicators share only one common factor F1, the correlation between any two indicators is the product of their pattern loadings: Corr(V, W) = λ_V * λ_W = 0.65 * 0.84 = 0.546.'
  },
  {
    id: 'da-q3-6',
    segment_id: 'da-ch3-fa',
    order_index: 6,
    difficulty: 'intermediate',
    question: 'Factor analysis solutions are not unique due to two fundamental indeterminacies. What are these two indeterminacies?',
    options: [
      { id: 'a', text: 'Factor rotation indeterminacy (infinite valid rotations yield identical reproduced correlations) and Communality estimation circularity (loadings require communalities, but communalities require loadings).' },
      { id: 'b', text: 'Sample size indeterminacy and degrees of freedom indeterminacy.' },
      { id: 'c', text: 'KMO indeterminacy and RMSR eigenvalue indeterminacy.' },
      { id: 'd', text: 'Covariance PCA indeterminacy and Correlation PCA unit indeterminacy.' },
      { id: 'e', text: 'Nominal scale indeterminacy and Ordinal ranking indeterminacy.' },
      { id: 'f', text: 'Euclidean triangle inequality indeterminacy and Mahalanobis curvature indeterminacy.' }
    ],
    correct_option: 'a',
    explanation: 'The two inherent indeterminacies of FA are: 1. Factor rotation indeterminacy (infinitely many rotations reconstruct the correlation matrix identically); 2. Communality estimation circularity (estimating loadings requires knowing communalities, but communalities are defined by squared loadings).'
  },
  {
    id: 'da-q3-7',
    segment_id: 'da-ch3-fa',
    order_index: 7,
    difficulty: 'intermediate',
    question: 'How does the iterative Principal Axis Factoring (PAF) procedure overcome the communality estimation circularity?',
    options: [
      { id: 'a', text: 'It initializes the diagonal with prior estimates (e.g. 1.0 or R^2), extracts factors, computes revised communalities (∑λ^2), replaces the diagonal, and re-factors repeatedly until communality changes fall below a convergence threshold (e.g. 0.001).' },
      { id: 'b', text: 'It permanently fixes all communalities at 1.0 and runs standard PCA without updating.' },
      { id: 'c', text: 'It forces all unique error variances to zero and inverts the partial correlation matrix.' },
      { id: 'd', text: 'It switches to an oblique Promax rotation whenever communalities fail to equal eigenvalues.' },
      { id: 'e', text: 'It deletes variables sequentially until the remaining variables have identical sample variances.' },
      { id: 'f', text: 'It standardizes the observation space using the Mahalanobis metric.' }
    ],
    correct_option: 'a',
    explanation: 'PAF is an iterative algorithm: starting with initial communality guesses on the correlation matrix diagonal, it extracts m factors, computes updated communalities from the resulting loadings, updates the diagonal, and repeats this loop until convergence (Δ < criterion).'
  },
  {
    id: 'da-q3-8',
    segment_id: 'da-ch3-fa',
    order_index: 8,
    difficulty: 'intermediate',
    question: 'What is the key mathematical and interpretative difference between Varimax rotation and Quartimax rotation?',
    options: [
      { id: 'a', text: 'Varimax simplifies columns (factors) so that each variable loads high on only one factor and near zero on others, whereas Quartimax simplifies rows (variables) and tends to create an undesirable large general factor.' },
      { id: 'b', text: 'Varimax allows factors to correlate, whereas Quartimax strictly enforces orthogonality.' },
      { id: 'c', text: 'Varimax maximizes unique error variance, while Quartimax maximizes total communality.' },
      { id: 'd', text: 'Varimax is applied to raw covariances, while Quartimax is only applicable to standardized z-scores.' },
      { id: 'e', text: 'Varimax requires eigenvalues greater than 1.0, while Quartimax requires RMSR < 0.05.' },
      { id: 'f', text: 'Varimax is an exploratory technique, whereas Quartimax is exclusively confirmatory.' }
    ],
    correct_option: 'a',
    explanation: 'Varimax maximizes the variance of squared loadings across columns of the factor matrix, driving loadings toward ±1 or 0 (simple structure). Quartimax maximizes variance across rows, which often leaves all variables with moderate-to-high loadings on the first factor, creating an unhelpful general factor.'
  },
  {
    id: 'da-q3-9',
    segment_id: 'da-ch3-fa',
    order_index: 9,
    difficulty: 'hard',
    question: 'Consider a two-factor orthogonal model: Indicator A = 0.85*F1 + 0.12*F2 + UA, and Indicator B = 0.74*F1 + 0.07*F2 + UB. What is the communality of Indicator A (h_A^2), its unique variance (u_A^2), and the reproduced correlation Corr(A, B)?',
    options: [
      { id: 'a', text: 'h_A^2 = 0.7369 (73.69%), u_A^2 = 0.2631 (26.31%), and Corr(A, B) = 0.6374' },
      { id: 'b', text: 'h_A^2 = 0.9700 (97.00%), u_A^2 = 0.0300 (3.00%), and Corr(A, B) = 0.8100' },
      { id: 'c', text: 'h_A^2 = 0.6500 (65.00%), u_A^2 = 0.3500 (35.00%), and Corr(A, B) = 0.5476' },
      { id: 'd', text: 'h_A^2 = 0.7225 (72.25%), u_A^2 = 0.2775 (27.75%), and Corr(A, B) = 0.6290' },
      { id: 'e', text: 'h_A^2 = 0.8500 (85.00%), u_A^2 = 0.1500 (15.00%), and Corr(A, B) = 0.7400' },
      { id: 'f', text: 'h_A^2 = 0.5625 (56.25%), u_A^2 = 0.4375 (43.75%), and Corr(A, B) = 0.4900' }
    ],
    correct_option: 'a',
    explanation: 'In an orthogonal model: Communality h_A^2 = λ_A1^2 + λ_A2^2 = 0.85^2 + 0.12^2 = 0.7225 + 0.0144 = 0.7369 (73.69%). Unique variance u_A^2 = 1 - h_A^2 = 1 - 0.7369 = 0.2631 (26.31%). Correlation Corr(A, B) = λ_A1*λ_B1 + λ_A2*λ_B2 = (0.85 * 0.74) + (0.12 * 0.07) = 0.6290 + 0.0084 = 0.6374.'
  },
  {
    id: 'da-q3-10',
    segment_id: 'da-ch3-fa',
    order_index: 10,
    difficulty: 'hard',
    question: 'Consider the same indicator A = 0.85*F1 + 0.12*F2 + UA, but now common factors F1 and F2 are OBLIQUE with correlation Corr(F1, F2) = Φ12 = 0.20. What is the structure loading of Indicator A on factor F1 (i.e. Corr(A, F1))?',
    options: [
      { id: 'a', text: 'Structure Loading = 0.85 + (0.12 * 0.20) = 0.874' },
      { id: 'b', text: 'Structure Loading = 0.85 - (0.12 * 0.20) = 0.826' },
      { id: 'c', text: 'Structure Loading = 0.850 (remains identical to the pattern loading)' },
      { id: 'd', text: 'Structure Loading = 0.85 * 0.20 = 0.170' },
      { id: 'e', text: 'Structure Loading = sqrt(0.85^2 + 0.12^2) = 0.858' },
      { id: 'f', text: 'Structure Loading = (0.85 + 0.12) * 0.20 = 0.194' }
    ],
    correct_option: 'a',
    explanation: 'In an oblique factor model, the structure loading is the correlation between the indicator and the factor: Corr(A, F1) = E[A * F1] = E[(λ_A1*F1 + λ_A2*F2 + UA)*F1] = λ_A1*E[F1^2] + λ_A2*E[F1*F2] = λ_A1 + λ_A2*Φ12 = 0.85 + 0.12*(0.20) = 0.85 + 0.024 = 0.874.'
  },
  {
    id: 'da-q3-11',
    segment_id: 'da-ch3-fa',
    order_index: 11,
    difficulty: 'hard',
    question: 'After extracting 2 factors using Principal Axis Factoring, the Root Mean Square Residual (RMSR) of the off-diagonal elements in the residual correlation matrix is 0.00042. How should the researcher evaluate this factor solution?',
    options: [
      { id: 'a', text: 'The factor solution is excellent; the near-zero RMSR indicates that the 2 extracted factors almost perfectly account for the observed correlations among the indicators.' },
      { id: 'b', text: 'The factor solution is defective; RMSR must always exceed the KMO threshold to be statistically significant.' },
      { id: 'c', text: 'The factor solution indicates severe factor indeterminacy that can only be corrected by Quartimax rotation.' },
      { id: 'd', text: 'The near-zero RMSR proves that the variables are nonmetric and should be analyzed via contingency tables.' },
      { id: 'e', text: 'The factor solution explains less than 1% of total variance because RMSR is below 0.01.' },
      { id: 'f', text: 'The solution violates the assumption of zero correlation between unique factors.' }
    ],
    correct_option: 'a',
    explanation: 'The residual matrix contains r_observed - r_reproduced. An RMSR of 0.00042 demonstrates that residual correlations after removing factor effects are essentially zero, indicating the 2-factor model reproduces the observed correlation structure with extraordinary accuracy.'
  },
  {
    id: 'da-q3-12',
    segment_id: 'da-ch3-fa',
    order_index: 12,
    difficulty: 'hard',
    question: 'A researcher analyzes 6 high school student courses (Math, Physics, Chemistry, English, History, French). In the unrotated PAF factor pattern, all 6 courses load heavily on Factor 1 (0.60 to 0.83). After Varimax rotation, Factor 1 has high loadings (> 0.78) ONLY on English, History, and French, while Factor 2 has high loadings (> 0.71) ONLY on Math, Physics, and Chemistry. What does this rotation demonstrate?',
    options: [
      { id: 'a', text: 'Varimax rotation achieved simple structure, cleanly isolating two distinct substantive dimensions: Verbal Ability (Factor 1) and Quantitative Ability (Factor 2).' },
      { id: 'b', text: 'Varimax rotation destroyed the validity of the model by reducing the total communality of the indicators.' },
      { id: 'c', text: 'The rotation proved that English and History are formative indicators while Math is a reflective indicator.' },
      { id: 'd', text: 'The rotation transformed the orthogonal model into an oblique model with Φ12 = 0.80.' },
      { id: 'e', text: 'The rotation indicates that Math and Physics should be discarded due to low KMO sampling adequacy.' },
      { id: 'f', text: 'The rotation caused communality circularity, requiring a switch to Principal Components Factoring.' }
    ],
    correct_option: 'a',
    explanation: 'The unrotated solution suffered from general factor loading (all loading on F1). Varimax rotation simplified the columns by rotating axes in factor space, resulting in simple structure where humanities load exclusively on F1 (Verbal Ability) and STEM subjects load exclusively on F2 (Quantitative Ability).'
  }
];
