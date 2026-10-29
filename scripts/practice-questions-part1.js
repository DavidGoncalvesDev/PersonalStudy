// Part 1 of Practice Questions (Segments 1 to 4: 72 questions)
export const practicePart1 = [
  // --- SEGMENT 1: ch1-scales-methods (18 questions) ---
  {
    id: 'pq_s1_1',
    segment_id: 'ch1-scales-methods',
    order_index: 101,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'In econometric regression modeling, if a qualitative variable has 4 categories (e.g., North, South, East, West) and "West" is chosen as the reference category, which dummy variables must be created?',
    options: [
      { id: 'a', text: '4 dummy variables including West' },
      { id: 'b', text: '3 dummy variables: $D_{\\text{North}}$, $D_{\\text{South}}$, and $D_{\\text{East}}$' },
      { id: 'c', text: '2 dummy variables for latitude and longitude' },
      { id: 'd', text: 'Only 1 dummy variable taking values 1, 2, 3, 4' },
      { id: 'e', text: '5 dummy variables to include an interaction term' },
      { id: 'f', text: 'No dummy variables; qualitative variables cannot enter regression' }
    ],
    correct_option: 'b',
    explanation: 'By the $k - 1$ dummy coding rule, a nominal variable with 4 categories requires exactly $4 - 1 = 3$ binary indicator variables. The omitted reference category (West) is captured when all three dummies equal zero.'
  },
  {
    id: 'pq_s1_2',
    segment_id: 'ch1-scales-methods',
    order_index: 102,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'What is the key mathematical consequence of converting interval or ratio data into ordinal ranks?',
    options: [
      { id: 'a', text: 'Degrees of freedom increase from $n-1$ to $n$' },
      { id: 'b', text: 'Metric information regarding the exact distance between observations is permanently lost' },
      { id: 'c', text: 'The variance of the sample increases twofold' },
      { id: 'd', text: 'The Pearson correlation automatically equals 1.0' },
      { id: 'e', text: 'The data can no longer be used in non-parametric tests' },
      { id: 'f', text: 'The median becomes equal to the arithmetic mean' }
    ],
    correct_option: 'b',
    explanation: 'Ranking preserves only the relative ordering ($a > b$), completely discarding the precise numerical magnitude of differences between observations.'
  },
  {
    id: 'pq_s1_3',
    segment_id: 'ch1-scales-methods',
    order_index: 103,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'Why is temperature measured in Kelvin classified as a ratio scale, whereas Celsius is classified as an interval scale?',
    options: [
      { id: 'a', text: 'Because Kelvin is measured in integer units while Celsius uses decimals' },
      { id: 'b', text: 'Because Kelvin has an absolute, physical zero point ($0\\text{ K}$ = complete absence of thermal kinetic energy), permitting meaningful ratio statements' },
      { id: 'c', text: 'Because Celsius cannot be linearly transformed' },
      { id: 'd', text: 'Because Kelvin only applies to nonmetric data' },
      { id: 'e', text: 'Because the Celsius scale does not have equidistant degree increments' },
      { id: 'f', text: 'Because Kelvin cannot be used to compute a standard deviation' }
    ],
    correct_option: 'b',
    explanation: 'Kelvin has a true natural zero point (absolute zero). Thus, $200\\text{ K}$ has twice the thermal energy of $100\\text{ K}$, making it a valid ratio scale.'
  },
  {
    id: 'pq_s1_4',
    segment_id: 'ch1-scales-methods',
    order_index: 104,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'Which multivariate dependence method is specifically designed to analyze more than one metric dependent variable across several categorical groups?',
    options: [
      { id: 'a', text: 'Multiple Linear Regression' },
      { id: 'b', text: 'Multivariate Analysis of Variance (MANOVA)' },
      { id: 'c', text: 'Principal Components Analysis' },
      { id: 'd', text: 'Cluster Analysis' },
      { id: 'e', text: 'Correspondence Analysis' },
      { id: 'f', text: 'Simple Bivariate Correlation' }
    ],
    correct_option: 'b',
    explanation: 'MANOVA evaluates group differences across multiple metric dependent variables simultaneously while controlling for overall Type I experiment-wise error rate.'
  },
  {
    id: 'pq_s1_5',
    segment_id: 'ch1-scales-methods',
    order_index: 105,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'When is it appropriate to utilize Canonical Correlation Analysis?',
    options: [
      { id: 'a', text: 'When predicting a single binary dependent variable from multiple metric predictors' },
      { id: 'b', text: 'When exploring linear relationships between two distinct sets of metric variables (multiple predictors and multiple criterion variables)' },
      { id: 'c', text: 'When grouping observations into discrete clusters based on Euclidean distance' },
      { id: 'd', text: 'When analyzing contingency tables of two nonmetric variables' },
      { id: 'e', text: 'When all variables in the dataset are perfectly uncorrelated' },
      { id: 'f', text: 'When sample size is smaller than the number of variables' }
    ],
    correct_option: 'b',
    explanation: 'Canonical correlation generalizes multiple regression to the scenario where both the independent set and the dependent set contain multiple metric variables.'
  },
  {
    id: 'pq_s1_6',
    segment_id: 'ch1-scales-methods',
    order_index: 106,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'What statistical failure occurs if an analyst includes all $k$ dummy variables in a regression model that also includes an intercept term?',
    options: [
      { id: 'a', text: 'Heteroscedasticity' },
      { id: 'b', text: 'The "Dummy Variable Trap" (perfect multicollinearity, making $X^T X$ singular and non-invertible)' },
      { id: 'c', text: 'Autocorrelation of error terms' },
      { id: 'd', text: 'Loss of all residual degrees of freedom' },
      { id: 'e', text: 'The regression coefficients become negative' },
      { id: 'f', text: 'The model converts into an interdependence method' }
    ],
    correct_option: 'b',
    explanation: 'Because the sum of all $k$ dummy variables equals the constant column vector of 1s (the intercept), perfect linear dependence is created, making $(X^T X)^{-1}$ impossible to compute.'
  },
  {
    id: 'pq_s1_7',
    segment_id: 'ch1-scales-methods',
    order_index: 107,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'Although ratios of absolute values are invalid on an interval scale, why are ratios of differences (intervals) valid?',
    options: [
      { id: 'a', text: 'Because interval scales possess an absolute zero for negative numbers' },
      { id: 'b', text: 'Because subtracting two points cancels out the arbitrary origin shift constant $a$: $(Y_1 - Y_2)/(Y_3 - Y_4) = b(X_1 - X_2)/b(X_3 - X_4)$' },
      { id: 'c', text: 'Because differences on interval scales convert automatically into nominal categories' },
      { id: 'd', text: 'Because the variance of an interval difference is always 1.0' },
      { id: 'e', text: 'Because temperature differences cannot be measured in Fahrenheit' },
      { id: 'f', text: 'Because interval scales do not permit multiplicative scaling' }
    ],
    correct_option: 'b',
    explanation: 'Under $Y = a + bX$, the difference is $(Y_1 - Y_2) = b(X_1 - X_2)$. When dividing two differences, both the additive constant $a$ and the scaling constant $b$ cancel, preserving the exact ratio.'
  },
  {
    id: 'pq_s1_8',
    segment_id: 'ch1-scales-methods',
    order_index: 108,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'Which multivariate interdependence method is widely recognized as the categorical analogue of Principal Components Analysis for contingency tables?',
    options: [
      { id: 'a', text: 'Multiple Discriminant Analysis' },
      { id: 'b', text: 'Correspondence Analysis' },
      { id: 'c', text: 'Conjoint Analysis' },
      { id: 'd', text: 'Logistic Regression' },
      { id: 'e', text: 'Structural Equation Modeling' },
      { id: 'f', text: 'Repeated Measures ANOVA' }
    ],
    correct_option: 'b',
    explanation: 'Correspondence Analysis projects row and column categorical categories into a joint low-dimensional space based on standardized residuals from cross-tabulations, acting like PCA for nonmetric data.'
  },
  {
    id: 'pq_s1_9',
    segment_id: 'ch1-scales-methods',
    order_index: 109,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'A credit risk analyst seeks to model customer default risk ($0 = \\text{No Default}, 1 = \\text{Default}$) using Debt-to-Income, Age, and Credit Score. Why is Multiple Discriminant Analysis (or Logistic Regression) preferred over Ordinary Least Squares (OLS) Linear Regression?',
    options: [
      { id: 'a', text: 'Because OLS requires at least 100 independent variables' },
      { id: 'b', text: 'Because OLS with a binary dependent variable can produce predicted probabilities outside $[0, 1]$ and violates the assumption of homoscedastic errors' },
      { id: 'c', text: 'Because Discriminant Analysis does not require metric predictors' },
      { id: 'd', text: 'Because Logistic Regression treats the dependent variable as an interdependence construct' },
      { id: 'e', text: 'Because OLS cannot compute an $R^2$ statistic for financial datasets' },
      { id: 'f', text: 'Because binary dependent variables always have infinite variance' }
    ],
    correct_option: 'b',
    explanation: 'Linear probability models via OLS produce unbounded predictions ($< 0$ or $> 1$) and intrinsically violate homoscedasticity because the variance of a Bernoulli variable depends on the probability: $p(1 - p)$.'
  },
  {
    id: 'pq_s1_10',
    segment_id: 'ch1-scales-methods',
    order_index: 110,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'In survey research, what justification permits researchers to treat 5-point or 7-point Likert scales as metric interval data rather than strictly ordinal data?',
    options: [
      { id: 'a', text: 'Because Likert scales have a natural absolute zero point at "Strongly Disagree"' },
      { id: 'b', text: 'Under the assumption that respondents perceive the psychological distance between adjacent response choices as approximately equal' },
      { id: 'c', text: 'Because the central limit theorem converts ordinal data into ratio data automatically' },
      { id: 'd', text: 'Because Spearman correlation is identical to Pearson correlation for all sample sizes' },
      { id: 'e', text: 'Because Likert items can only be analyzed using non-parametric chi-squared tests' },
      { id: 'f', text: 'Because Likert scales always have a normal distribution' }
    ],
    correct_option: 'b',
    explanation: 'Psychometric literature treats multi-item Likert summated ratings as pseudo-interval data under the pragmatic assumption of equal psychological spacing, enabling parametric mean and covariance computations.'
  },
  {
    id: 'pq_s1_11',
    segment_id: 'ch1-scales-methods',
    order_index: 111,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'How does Multidimensional Scaling (MDS) differ fundamentally from Cluster Analysis in interdependence methodology?',
    options: [
      { id: 'a', text: 'MDS groups objects into discrete non-overlapping sets, whereas Cluster Analysis maps objects into a continuous geometric space' },
      { id: 'b', text: 'MDS maps objects into a continuous spatial coordinate configuration based on pairwise proximities, whereas Cluster Analysis assigns objects to discrete partitions' },
      { id: 'c', text: 'MDS can only be applied to financial balance sheets' },
      { id: 'd', text: 'Cluster Analysis requires dependent variables, while MDS is purely independent' },
      { id: 'e', text: 'MDS maximizes explained variance like PCA, while Cluster Analysis maximizes eigenvalues' },
      { id: 'f', text: 'Cluster Analysis produces perceptual maps, while MDS produces dendrograms' }
    ],
    correct_option: 'b',
    explanation: 'MDS derives continuous spatial dimensions representing perceptual distances, whereas Cluster Analysis groups objects into discrete, categorical clusters.'
  },
  {
    id: 'pq_s1_12',
    segment_id: 'ch1-scales-methods',
    order_index: 112,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'If a researcher multiplies all values of a ratio scale variable by $-2$, why is the resulting scale no longer a valid ratio scale?',
    options: [
      { id: 'a', text: 'Because the arithmetic mean becomes negative' },
      { id: 'b', text: 'Because ratio scale transformations require multiplying by a strictly positive constant ($b > 0$); multiplying by a negative number reverses order and inverts the direction of the origin' },
      { id: 'c', text: 'Because the variance becomes zero' },
      { id: 'd', text: 'Because ratio scales only allow addition, not multiplication' },
      { id: 'e', text: 'Because degrees of freedom are halved' },
      { id: 'f', text: 'Because the Pearson correlation becomes undefined' }
    ],
    correct_option: 'b',
    explanation: 'Similarity transformations for ratio scales require $Y = bX$ with $b > 0$. A negative constant inverts the direction of measurement relative to the absolute zero origin.'
  },
  {
    id: 'pq_s1_13',
    segment_id: 'ch1-scales-methods',
    order_index: 113,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'Which of the following is an example of an interdependence method?',
    options: [
      { id: 'a', text: 'Multiple linear regression' },
      { id: 'b', text: 'Cluster analysis' },
      { id: 'c', text: 'Logistic regression' },
      { id: 'd', text: 'Discriminant analysis' },
      { id: 'e', text: 'Two-way ANOVA' },
      { id: 'f', text: 'Simple linear regression' }
    ],
    correct_option: 'b',
    explanation: 'In cluster analysis, no variable is singled out as dependent or independent; all variables are evaluated simultaneously to uncover groupings.'
  },
  {
    id: 'pq_s1_14',
    segment_id: 'ch1-scales-methods',
    order_index: 114,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'What is the most appropriate measure of central tendency for a nominal variable such as preferred payment method (Credit Card, Debit Card, Cash, PayPal)?',
    options: [
      { id: 'a', text: 'Arithmetic mean' },
      { id: 'b', text: 'Mode' },
      { id: 'c', text: 'Median' },
      { id: 'd', text: 'Geometric mean' },
      { id: 'e', text: 'Harmonic mean' },
      { id: 'f', text: 'Trimmed mean' }
    ],
    correct_option: 'b',
    explanation: 'Because categories have no natural ordering or arithmetic distance, the only valid central tendency measure is the mode (the most frequent category).'
  },
  {
    id: 'pq_s1_15',
    segment_id: 'ch1-scales-methods',
    order_index: 115,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'Under what measurement scale is the Coefficient of Variation ($CV = s / \\bar{X}$) statistically meaningful and invariant to changes in unit?',
    options: [
      { id: 'a', text: 'Nominal scale' },
      { id: 'b', text: 'Ratio scale only' },
      { id: 'c', text: 'Ordinal scale only' },
      { id: 'd', text: 'Interval scale' },
      { id: 'e', text: 'Binary dummy scale' },
      { id: 'f', text: 'All metric scales equally' }
    ],
    correct_option: 'b',
    explanation: 'The CV requires a true absolute zero so that the ratio of standard deviation to mean is not altered by an arbitrary additive constant $a$.'
  },
  {
    id: 'pq_s1_16',
    segment_id: 'ch1-scales-methods',
    order_index: 116,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'What type of research question is best answered by Principal Components Analysis?',
    options: [
      { id: 'a', text: 'Testing whether average customer satisfaction differs across 4 marketing regions' },
      { id: 'b', text: 'Summarizing 25 correlated financial ratios into a small number of composite indices that retain most of the variance' },
      { id: 'c', text: 'Predicting employee turnover based on salary and tenure' },
      { id: 'd', text: 'Determining if gender is independent of product purchase' },
      { id: 'e', text: 'Comparing median test scores between two independent classrooms' },
      { id: 'f', text: 'Estimating the causal impact of advertising on sales' }
    ],
    correct_option: 'b',
    explanation: 'PCA is an interdependence data-reduction procedure designed to synthesize multiple correlated metric variables into a few composite indicators.'
  },
  {
    id: 'pq_s1_17',
    segment_id: 'ch1-scales-methods',
    order_index: 117,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'Suppose an education analyst codes university degree level as $1 = \\text{Bachelor}, 2 = \\text{Master}, 3 = \\text{PhD}$. If the analyst runs an ordinary linear regression with this variable as the predictor, what implicit assumption is made?',
    options: [
      { id: 'a', text: 'That the data have zero variance' },
      { id: 'b', text: 'That advancing from Bachelor to Master represents the exact same increment in effect as advancing from Master to PhD' },
      { id: 'c', text: 'That the reference category is Master' },
      { id: 'd', text: 'That the degrees of freedom equal 3' },
      { id: 'e', text: 'That the regression coefficient will be negative' },
      { id: 'f', text: 'That the sample size is greater than 1,000' }
    ],
    correct_option: 'b',
    explanation: 'Treating an ordinal scale as a continuous metric variable in regression assumes equidistant intervals between consecutive levels ($2 - 1 = 3 - 2$).'
  },
  {
    id: 'pq_s1_18',
    segment_id: 'ch1-scales-methods',
    order_index: 118,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'Why does multiple discriminant analysis construct discriminant functions as linear combinations of predictors rather than running separate t-tests on each predictor?',
    options: [
      { id: 'a', text: 'Because separate t-tests fail to account for intercorrelations among predictors and inflate experiment-wise Type I error' },
      { id: 'b', text: 'Because t-tests can only be computed when $n < 30$' },
      { id: 'c', text: 'Because discriminant analysis requires qualitative predictors' },
      { id: 'd', text: 'Because the variance of a linear combination is always zero' },
      { id: 'e', text: 'Because separate t-tests require ratio scales' },
      { id: 'f', text: 'Because discriminant analysis does not use the covariance matrix' }
    ],
    correct_option: 'a',
    explanation: 'Discriminant analysis simultaneously accounts for predictor covariances and controls multivariate error rate, which separate univariate tests ignore.'
  },

  // --- SEGMENT 2: ch1-manipulation-distances (18 questions) ---
  {
    id: 'pq_s2_1',
    segment_id: 'ch1-manipulation-distances',
    order_index: 101,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'If two mean-corrected variable vectors in $n$-dimensional observation space are perpendicular (at an angle of $90^\\circ$), what is their sample covariance and Pearson correlation?',
    options: [
      { id: 'a', text: 'Covariance is 1.0 and correlation is 1.0' },
      { id: 'b', text: 'Covariance is 0 and correlation is 0' },
      { id: 'c', text: 'Covariance is negative and correlation is -1.0' },
      { id: 'd', text: 'Covariance equals the degrees of freedom' },
      { id: 'e', text: 'Covariance is undefined' },
      { id: 'f', text: 'Covariance equals the product of their means' }
    ],
    correct_option: 'b',
    explanation: 'Because $\\cos(90^\\circ) = 0$, their dot product (Sum of Cross Products) is 0, which makes both the sample covariance and the correlation exactly 0.'
  },
  {
    id: 'pq_s2_2',
    segment_id: 'ch1-manipulation-distances',
    order_index: 102,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'What is the geometric length (norm) of a mean-corrected variable vector $x_j$ in $n$-dimensional observation space?',
    options: [
      { id: 'a', text: '$\\|x_j\\| = \\bar{X}_j$' },
      { id: 'b', text: '$\\|x_j\\| = \\sqrt{SS_j} = s_j \\sqrt{n - 1}$' },
      { id: 'c', text: '$\\|x_j\\| = n - 1$' },
      { id: 'd', text: '$\\|x_j\\| = s_j^2 / (n - 1)$' },
      { id: 'e', text: '$\\|x_j\\| = \\sum_{i=1}^n X_{ij}$' },
      { id: 'f', text: '$\\|x_j\\| = 1.0$' }
    ],
    correct_option: 'b',
    explanation: 'The squared norm of a mean-corrected vector is $\\sum (X_{ij} - \\bar{X}_j)^2 = SS_j$. Taking the square root gives $\\sqrt{SS_j} = s_j \\sqrt{n - 1}$.'
  },
  {
    id: 'pq_s2_3',
    segment_id: 'ch1-manipulation-distances',
    order_index: 103,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'Calculate the Euclidean distance between Observation 1 at $(2, 3)$ and Observation 2 at $(6, 6)$ in 2-dimensional space.',
    options: [
      { id: 'a', text: '$7.00$' },
      { id: 'b', text: '$5.00$' },
      { id: 'c', text: '$25.00$' },
      { id: 'd', text: '$3.50$' },
      { id: 'e', text: '$4.24$' },
      { id: 'f', text: '$1.00$' }
    ],
    correct_option: 'b',
    explanation: 'By the Euclidean distance formula: $D = \\sqrt{(6 - 2)^2 + (6 - 3)^2} = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5.00$.'
  },
  {
    id: 'pq_s2_4',
    segment_id: 'ch1-manipulation-distances',
    order_index: 104,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'Why is ordinary Euclidean distance considered problematic when variables have vastly different units of measurement?',
    options: [
      { id: 'a', text: 'Because Euclidean distance cannot be computed for positive numbers' },
      { id: 'b', text: 'Because variables with large numerical values or variances artificially dominate the distance calculation' },
      { id: 'c', text: 'Because Euclidean distance violates the triangle inequality' },
      { id: 'd', text: 'Because Euclidean distance is always negative' },
      { id: 'e', text: 'Because Euclidean distance assumes variables are correlated' },
      { id: 'f', text: 'Because Euclidean distance requires sample size greater than 10,000' }
    ],
    correct_option: 'b',
    explanation: 'A variable measured in euros will have a range thousands of times larger than a satisfaction score from 1 to 5, dominating the sum of squared differences.'
  },
  {
    id: 'pq_s2_5',
    segment_id: 'ch1-manipulation-distances',
    order_index: 105,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'If the angle $\\alpha$ between two mean-corrected variable vectors in observation space is $60^\\circ$, what is their sample Pearson correlation coefficient?',
    options: [
      { id: 'a', text: '$r = 0.866$' },
      { id: 'b', text: '$r = 0.500$' },
      { id: 'c', text: '$r = 0.000$' },
      { id: 'd', text: '$r = 0.707$' },
      { id: 'e', text: '$r = 1.000$' },
      { id: 'f', text: '$r = -0.500$' }
    ],
    correct_option: 'b',
    explanation: 'From the cosine identity $r = \\cos(\\alpha)$, we have $r = \\cos(60^\\circ) = 0.500$.'
  },
  {
    id: 'pq_s2_6',
    segment_id: 'ch1-manipulation-distances',
    order_index: 106,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'In Statistical Distance (variance-standardized distance), how is each coordinate difference weighted?',
    options: [
      { id: 'a', text: 'By the sample mean $\\bar{X}_j$' },
      { id: 'b', text: 'Divided by the variable\'s variance $s_j^2$ (or standardized by standard deviation $s_j$)' },
      { id: 'c', text: 'Multiplied by the degrees of freedom $n - 1$' },
      { id: 'd', text: 'By the determinant of the covariance matrix' },
      { id: 'e', text: 'Divided by the sample size $n$' },
      { id: 'f', text: 'By the sum of cross products' }
    ],
    correct_option: 'b',
    explanation: 'Statistical distance standardizes each variable: $SD^2 = \\sum (\\frac{X_{ij} - X_{kj}}{s_j})^2$, equalizing the variance contribution across all variables.'
  },
  {
    id: 'pq_s2_7',
    segment_id: 'ch1-manipulation-distances',
    order_index: 107,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'Under what condition does the Statistical Distance fail to provide an accurate reflection of multidimensional separation?',
    options: [
      { id: 'a', text: 'When variables are measured on a ratio scale' },
      { id: 'b', text: 'When variables share non-zero linear correlations with each other' },
      { id: 'c', text: 'When sample size exceeds 50 observations' },
      { id: 'd', text: 'When all variables have unit variance' },
      { id: 'e', text: 'When the mean vector is zero' },
      { id: 'f', text: 'When the data cloud is centered' }
    ],
    correct_option: 'b',
    explanation: 'Statistical distance assumes all off-diagonal covariances are zero. When variables are correlated, it counts shared variation multiple times.'
  },
  {
    id: 'pq_s2_8',
    segment_id: 'ch1-manipulation-distances',
    order_index: 108,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'What geometric shape represents loci of constant Mahalanobis distance from the centroid in bivariate space?',
    options: [
      { id: 'a', text: 'Concentric circles' },
      { id: 'b', text: 'Concentric ellipses whose major axis aligns with the direction of maximum variance' },
      { id: 'c', text: 'Right triangles' },
      { id: 'd', text: 'Hyperbolas' },
      { id: 'e', text: 'Square diamonds' },
      { id: 'f', text: 'Parallel straight lines' }
    ],
    correct_option: 'b',
    explanation: 'Because Mahalanobis distance accounts for variance and covariance, contours of constant $MD^2 = (x - \\mu)^T S^{-1} (x - \\mu)$ form ellipsoids oriented along the principal axes.'
  },
  {
    id: 'pq_s2_9',
    segment_id: 'ch1-manipulation-distances',
    order_index: 109,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'Consider two standardized variables with correlation $r = 0.80$. Two points are separated by 2 units along the positive correlation direction ($x_1 - x_2 = 0$). In the Mahalanobis formula, why is their squared distance much smaller than their Euclidean distance?',
    options: [
      { id: 'a', text: 'Because Mahalanobis distance divides by negative numbers' },
      { id: 'b', text: 'Because variation along the direction of high positive correlation is expected, making points along that axis statistically less unusual than orthogonal displacements' },
      { id: 'c', text: 'Because $1 - r^2$ equals zero when $r = 0.80$' },
      { id: 'd', text: 'Because the covariance matrix is singular' },
      { id: 'e', text: 'Because Mahalanobis distance ignores sample variances' },
      { id: 'f', text: 'Because standardized variables cannot be correlated' }
    ],
    correct_option: 'b',
    explanation: 'Mahalanobis distance measures distance in terms of probability contours. Along the principal axis of high correlation, dispersion is naturally wide, so a difference of 2 units represents fewer standard distance units.'
  },
  {
    id: 'pq_s2_10',
    segment_id: 'ch1-manipulation-distances',
    order_index: 110,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'In matrix algebra, the centering matrix $H$ is defined as $H = I_n - \\frac{1}{n} \\mathbf{1}\\mathbf{1}^T$. What algebraic property does $H$ possess?',
    options: [
      { id: 'a', text: 'It is skew-symmetric and non-invertible' },
      { id: 'b', text: 'It is symmetric ($H^T = H$) and idempotent ($H^2 = H$)' },
      { id: 'c', text: 'Its determinant always equals 1.0' },
      { id: 'd', text: 'Its trace is always equal to $n$' },
      { id: 'e', text: 'It has all eigenvalues equal to 2.0' },
      { id: 'f', text: 'It transforms variables into dummy variables' }
    ],
    correct_option: 'b',
    explanation: 'The centering matrix $H$ is an orthogonal projection matrix that is both symmetric ($H = H^T$) and idempotent ($H H = H$), with rank and trace equal to $n - 1$.'
  },
  {
    id: 'pq_s2_11',
    segment_id: 'ch1-manipulation-distances',
    order_index: 111,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'What guarantees that the sample correlation coefficient $r_{jk}$ is mathematically bounded between $-1$ and $+1$?',
    options: [
      { id: 'a', text: 'The Central Limit Theorem' },
      { id: 'b', text: 'The Cauchy-Schwarz inequality for vectors: $|x_j \\cdot x_k| \\le \\|x_j\\| \\|x_k\\|$' },
      { id: 'c', text: 'The Kaiser criterion' },
      { id: 'd', text: 'The degree of freedom formula $n - 1$' },
      { id: 'e', text: 'The determinant of the correlation matrix' },
      { id: 'f', text: 'The Bartlett test of sphericity' }
    ],
    correct_option: 'b',
    explanation: 'Because $|x_j \\cdot x_k| \\le \\|x_j\\| \\|x_k\\|$, the ratio $\\frac{x_j \\cdot x_k}{\\|x_j\\| \\|x_k\\|} = \\cos(\\alpha) = r$ is mathematically bounded by $[-1, 1]$.'
  },
  {
    id: 'pq_s2_12',
    segment_id: 'ch1-manipulation-distances',
    order_index: 112,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'For a dataset with $p$ variables, what happens to the Mahalanobis distance calculation if $n < p$ (fewer observations than variables)?',
    options: [
      { id: 'a', text: 'The Mahalanobis distance becomes identical to Euclidean distance' },
      { id: 'b', text: 'The sample covariance matrix $S$ is singular (rank $< p$), meaning $S^{-1}$ does not exist and ordinary Mahalanobis distance cannot be calculated' },
      { id: 'c', text: 'The degrees of freedom increase to $p - n$' },
      { id: 'd', text: 'All correlations become 1.0' },
      { id: 'e', text: 'The centroid shifts to infinity' },
      { id: 'f', text: 'Mahalanobis distance reduces to the Pearson correlation' }
    ],
    correct_option: 'b',
    explanation: 'When $n < p$, the sample covariance matrix $S$ has at most rank $n - 1 < p$, making $S$ singular and non-invertible without regularization.'
  },
  {
    id: 'pq_s2_13',
    segment_id: 'ch1-manipulation-distances',
    order_index: 113,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'What is the sum of deviations of any variable from its arithmetic mean: $\\sum_{i=1}^n (X_{ij} - \\bar{X}_j)$?',
    options: [
      { id: 'a', text: 'Exactly $n - 1$' },
      { id: 'b', text: 'Always exactly 0' },
      { id: 'c', text: 'The sample variance $s_j^2$' },
      { id: 'd', text: 'The standard deviation' },
      { id: 'e', text: 'The median' },
      { id: 'f', text: 'Equal to $1.0$' }
    ],
    correct_option: 'b',
    explanation: 'By definition of the arithmetic mean, positive and negative deviations exactly balance, summing to zero.'
  },
  {
    id: 'pq_s2_14',
    segment_id: 'ch1-manipulation-distances',
    order_index: 114,
    difficulty: 'easy',
    pool_type: 'practice',
    question: 'If two variables have a sample covariance of $S_{12} = -15.0$, what does this indicate about their relationship?',
    options: [
      { id: 'a', text: 'They have a positive relationship' },
      { id: 'b', text: 'They tend to vary in opposite directions (as one increases, the other tends to decrease)' },
      { id: 'c', text: 'Their correlation is exactly -1.0' },
      { id: 'd', text: 'Their Euclidean distance is negative' },
      { id: 'e', text: 'The variables are measured on a nominal scale' },
      { id: 'f', text: 'The dataset has negative degrees of freedom' }
    ],
    correct_option: 'b',
    explanation: 'A negative covariance indicates an inverse linear relationship, meaning above-average values on one variable pair with below-average values on the other.'
  },
  {
    id: 'pq_s2_15',
    segment_id: 'ch1-manipulation-distances',
    order_index: 115,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'If two variables have variances $s_1^2 = 16$ and $s_2^2 = 9$, and their covariance is $S_{12} = 6$, what is their Pearson correlation coefficient $r_{12}$?',
    options: [
      { id: 'a', text: '$r = 0.25$' },
      { id: 'b', text: '$r = 0.50$' },
      { id: 'c', text: '$r = 0.416$' },
      { id: 'd', text: '$r = 0.667$' },
      { id: 'e', text: '$r = 0.125$' },
      { id: 'f', text: '$r = 0.80$' }
    ],
    correct_option: 'b',
    explanation: '$s_1 = \\sqrt{16} = 4$ and $s_2 = \\sqrt{9} = 3$. Then $r = \\frac{S_{12}}{s_1 s_2} = \\frac{6}{4 \\times 3} = \\frac{6}{12} = 0.50$.'
  },
  {
    id: 'pq_s2_16',
    segment_id: 'ch1-manipulation-distances',
    order_index: 116,
    difficulty: 'intermediate',
    pool_type: 'practice',
    question: 'What is the angle $\\alpha$ in observation space between two variables that have a sample correlation of $r = 1.0$?',
    options: [
      { id: 'a', text: '$\\alpha = 90^\\circ$' },
      { id: 'b', text: '$\\alpha = 0^\\circ$' },
      { id: 'c', text: '$\\alpha = 45^\\circ$' },
      { id: 'd', text: '$\\alpha = 180^\\circ$' },
      { id: 'e', text: '$\\alpha = 360^\\circ$' },
      { id: 'f', text: '$\\alpha = 30^\\circ$' }
    ],
    correct_option: 'b',
    explanation: 'Since $\\cos(\\alpha) = r$, $\\cos(0^\\circ) = 1.0$, meaning the two vectors point in the identical direction.'
  },
  {
    id: 'pq_s2_17',
    segment_id: 'ch1-manipulation-distances',
    order_index: 117,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'How is Hotelling\'s $T^2$ statistic related to the Mahalanobis distance from an observation $x$ to the sample mean vector $\\bar{x}$?',
    options: [
      { id: 'a', text: 'Hotelling\'s $T^2$ is the sample size multiplied by the squared Mahalanobis distance: $T^2 = n (x - \\bar{x})^T S^{-1} (x - \\bar{x})$' },
      { id: 'b', text: 'Hotelling\'s $T^2$ is the Euclidean distance divided by degrees of freedom' },
      { id: 'c', text: 'Hotelling\'s $T^2$ is the square root of the Pearson correlation' },
      { id: 'd', text: 'Hotelling\'s $T^2$ is only computed when $S$ is a diagonal matrix' },
      { id: 'e', text: 'Hotelling\'s $T^2$ equals the trace of the covariance matrix' },
      { id: 'f', text: 'Hotelling\'s $T^2$ is the sum of eigenvalues' }
    ],
    correct_option: 'a',
    explanation: 'Hotelling\'s $T^2$ multivariate test statistic is directly proportional to the squared Mahalanobis distance between the sample mean and the hypothesized centroid.'
  },
  {
    id: 'pq_s2_18',
    segment_id: 'ch1-manipulation-distances',
    order_index: 118,
    difficulty: 'hard',
    pool_type: 'practice',
    question: 'Why does dividing by $n - 1$ instead of $n$ in sample variance produce an unbiased estimator of population variance $\\sigma^2$?',
    options: [
      { id: 'a', text: 'Because sample observations are always correlated' },
      { id: 'b', text: 'Because estimating the sample mean $\\bar{X}$ consumes one degree of freedom, causing deviations around $\\bar{X}$ to be smaller than deviations around true $\\mu$' },
      { id: 'c', text: 'Because $n - 1$ converts the data into a standard normal distribution' },
      { id: 'd', text: 'Because the last observation in any dataset is always zero' },
      { id: 'e', text: 'Because population variance cannot be calculated' },
      { id: 'f', text: 'Because sample sizes must be even numbers' }
    ],
    correct_option: 'b',
    explanation: 'Sum of squared deviations around sample mean $\\bar{X}$ is always smaller than around true population mean $\\mu$. Bessel\'s correction ($n - 1$) compensates exactly for this downward bias.'
  }
];

console.log('Practice Part 1 loaded (36 questions across Segments 1 and 2).');
