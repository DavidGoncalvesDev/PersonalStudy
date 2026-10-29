export const flashcards = [
  // ==========================================
  // SEGMENT 1: FUNDAMENTALS & SCALES (10 Flashcards)
  // ==========================================
  {
    id: 'da-fc-1',
    segment_id: 'da-ch1-intro',
    order_index: 1,
    front: 'What is a Nominal Scale, and what statistics are permissible?',
    back: 'A scale where numbers are arbitrary category identifiers with no numerical magnitude (e.g., Gender: 0=Male, 1=Female). Only count-based statistics are valid: Frequencies, Percentages, and Mode. Mean and variance are meaningless.',
    category: 'Scales'
  },
  {
    id: 'da-fc-2',
    segment_id: 'da-ch1-intro',
    order_index: 2,
    front: 'What is the Dummy Variable rule for nominal categories?',
    back: 'To represent a nominal variable with k categories in a statistical regression model, exactly k - 1 binary (0/1) dummy variables are required. The omitted category serves as the reference benchmark.',
    category: 'Dummy Coding'
  },
  {
    id: 'da-fc-3',
    segment_id: 'da-ch1-intro',
    order_index: 3,
    front: 'What distinguishes an Interval Scale from a Ratio Scale?',
    back: 'Interval scales have equal differences between values but an ARBITRARY zero (e.g., Celsius temperature, Likert scales); ratios are invalid. Ratio scales possess an ABSOLUTE NATURAL ZERO (e.g., Age, Income); ratio statements ("twice as much") and all statistics are valid.',
    category: 'Scales'
  },
  {
    id: 'da-fc-4',
    segment_id: 'da-ch1-intro',
    order_index: 4,
    front: 'Dependence vs Interdependence methods: What is the core difference?',
    back: 'Dependence methods designate specific variables as Independent (predictors) and Dependent (outcomes), such as Regression, ANOVA, and Discriminant Analysis. Interdependence methods analyze mutual correlations among all variables simultaneously (e.g., PCA, Factor Analysis, Cluster Analysis).',
    category: 'Method Classification'
  },
  {
    id: 'da-fc-5',
    segment_id: 'da-ch1-intro',
    order_index: 5,
    front: 'What effect does Mean-Centering (x* = x - x̄) have on a dataset?',
    back: 'It translates the coordinate origin to the centroid (0,0). The relative positions of points, sample variances, covariances, and relative distances remain completely unchanged.',
    category: 'Data Manipulation'
  },
  {
    id: 'da-fc-6',
    segment_id: 'da-ch1-intro',
    order_index: 6,
    front: 'Why do sample variance and covariance divide by n - 1 (df)?',
    back: 'Because one degree of freedom is consumed estimating the sample mean (∑(x_i - x̄) = 0). Only n - 1 deviations are mathematically independent. Dividing by n - 1 provides an unbiased estimate.',
    category: 'Degrees of Freedom'
  },
  {
    id: 'da-fc-7',
    segment_id: 'da-ch1-intro',
    order_index: 7,
    front: 'In the geometric observation space, what does the angle between two vectors represent?',
    back: 'The cosine of the angle α between two mean-corrected variable vectors equals their Pearson correlation coefficient: cos(α) = r. Orthogonal vectors (90°, cos = 0) mean zero correlation (r = 0).',
    category: 'Observation Space Geometry'
  },
  {
    id: 'da-fc-8',
    segment_id: 'da-ch1-intro',
    order_index: 8,
    front: 'What is the key limitation of standard Euclidean Distance?',
    back: 'It assumes all variables are completely uncorrelated and share the same measurement unit and variance. A variable with large numerical scale (e.g., Salary in €) artificially dominates the distance.',
    category: 'Distance Metrics'
  },
  {
    id: 'da-fc-9',
    segment_id: 'da-ch1-intro',
    order_index: 9,
    front: 'What is Mahalanobis Distance, and when does it reduce to Euclidean distance?',
    back: 'MD^2 = (xi - xk)\' S^-1 (xi - xk). It accounts for BOTH differing variances and covariances (correlations). It reduces to Euclidean distance when variables are uncorrelated (r=0) and standardized (variance=1, S = Identity).',
    category: 'Distance Metrics'
  },
  {
    id: 'da-fc-10',
    segment_id: 'da-ch1-intro',
    order_index: 10,
    front: 'What three axioms must any valid Metric Distance satisfy?',
    back: '1. Symmetry: D(i,k) = D(k,i)\n2. Triangle Inequality: D(i,l) ≤ D(i,k) + D(k,l)\n3. Distinguishability: D(i,k) = 0 if and only if i = k.',
    category: 'Distance Metrics'
  },

  // ==========================================
  // SEGMENT 2: PCA (10 Flashcards)
  // ==========================================
  {
    id: 'da-fc-11',
    segment_id: 'da-ch2-pca',
    order_index: 1,
    front: 'What is the primary objective of Principal Components Analysis (PCA)?',
    back: 'To reduce the dimensionality of p correlated variables into k < p uncorrelated (orthogonal) composite indices that maximize the retention of total observed variance.',
    category: 'PCA Objectives'
  },
  {
    id: 'da-fc-12',
    segment_id: 'da-ch2-pca',
    order_index: 2,
    front: 'What does an Eigenvalue (λi) represent in PCA?',
    back: 'The eigenvalue λi equals the variance of the i-th principal component: Var(PCi) = λi. The sum of all eigenvalues equals the total variance of the original variables.',
    category: 'Eigenvalues'
  },
  {
    id: 'da-fc-13',
    segment_id: 'da-ch2-pca',
    order_index: 3,
    front: 'Why must the eigenvector weight vector satisfy w\'w = 1?',
    back: 'To fix the scale uniquely. Without the unit-length constraint, multiplying weights by any constant c would multiply component variance by c^2 without changing the axis direction.',
    category: 'Eigenvectors'
  },
  {
    id: 'da-fc-14',
    segment_id: 'da-ch2-pca',
    order_index: 4,
    front: 'When MUST Correlation PCA be used instead of Covariance PCA?',
    back: 'Always when variables are measured in different units or have wildly differing variances. Covariance PCA is scale-dependent (multiplying a variable by 1,000 multiplies its variance by 1,000,000, distorting the solution). Correlation PCA standardizes all inputs first.',
    category: 'Covariance vs Correlation'
  },
  {
    id: 'da-fc-15',
    segment_id: 'da-ch2-pca',
    order_index: 5,
    front: 'What is a Component Loading (lji), and how is it calculated for standardized inputs?',
    back: 'A loading is the bivariate correlation between an original variable Xj and component PCi: lji = Corr(Xj, PCi). For standardized data, lji = wij * sqrt(λi). It is used to substantively interpret and name the component.',
    category: 'Loadings'
  },
  {
    id: 'da-fc-16',
    segment_id: 'da-ch2-pca',
    order_index: 6,
    front: 'What is a Component Score (thi)?',
    back: 'The coordinate of observation h on principal component axis i: thi = wi\'xh. Scores replace original variables for downstream analysis (plotting, clustering, regression). All PC score vectors are mutually uncorrelated.',
    category: 'Scores'
  },
  {
    id: 'da-fc-17',
    segment_id: 'da-ch2-pca',
    order_index: 7,
    front: 'What is Sign Indeterminacy (Reflection Invariance) in PCA?',
    back: 'PC1 = w1\'x and -PC1 = -w1\'x describe the exact same axis and account for identical variance. Reversing signs flips all scores and loadings together, leaving all distances and downstream geometry unchanged.',
    category: 'Properties'
  },
  {
    id: 'da-fc-18',
    segment_id: 'da-ch2-pca',
    order_index: 8,
    front: 'What is Kaiser\'s Criterion for retaining principal components?',
    back: 'In Correlation PCA, retain all components with eigenvalues greater than 1.0 (λi > 1). Each retained component then accounts for more variance than an individual standardized input variable.',
    category: 'Selection Criteria'
  },
  {
    id: 'da-fc-19',
    segment_id: 'da-ch2-pca',
    order_index: 9,
    front: 'How is a Scree Plot interpreted to select components?',
    back: 'Plot ordered eigenvalues on the vertical axis against component number on the horizontal axis. Locate the "elbow" where the curve abruptly flattens; retain components before the elbow.',
    category: 'Selection Criteria'
  },
  {
    id: 'da-fc-20',
    segment_id: 'da-ch2-pca',
    order_index: 10,
    front: 'What is the formula for the Proportion of Variance explained by PCi?',
    back: 'Proportion = λi / ∑(λj). In correlation PCA with p variables, total variance = p, so Proportion = λi / p.',
    category: 'Variance Explained'
  },

  // ==========================================
  // SEGMENT 3: FACTOR ANALYSIS (10 Flashcards)
  // ==========================================
  {
    id: 'da-fc-21',
    segment_id: 'da-ch3-fa',
    order_index: 1,
    front: 'How does Factor Analysis (FA) differ fundamentally from PCA?',
    back: 'FA models observable indicators as reflective manifestations of unobservable latent factors (x = Λξ + ε) and separates shared communality from unique error variance. PCA creates formative composite indices (PC = w\'x) to capture total observed variance.',
    category: 'FA Foundations'
  },
  {
    id: 'da-fc-22',
    segment_id: 'da-ch3-fa',
    order_index: 2,
    front: 'How is an indicator\'s total variance decomposed in Factor Analysis?',
    back: 'Total Variance (1.0) = Communality (h_j^2) + Unique Variance (u_j^2). Communality is variance shared with the common factors; unique variance is variable-specific variance plus measurement error.',
    category: 'Variance Decomposition'
  },
  {
    id: 'da-fc-23',
    segment_id: 'da-ch3-fa',
    order_index: 3,
    front: 'When are Pattern Loadings strictly equal to Structure Loadings?',
    back: 'In Orthogonal factor models, where common factors are uncorrelated (Φ = 0). In Oblique models (factors correlated), Structure Loadings include factor correlation cross-terms and do NOT equal pattern loadings.',
    category: 'Loadings'
  },
  {
    id: 'da-fc-24',
    segment_id: 'da-ch3-fa',
    order_index: 4,
    front: 'In an orthogonal single-factor model, what is the correlation between indicators V and W?',
    back: 'Corr(V, W) = λ_V * λ_W (the product of their respective pattern loadings). If either loading is zero, their correlation is zero.',
    category: 'Correlations'
  },
  {
    id: 'da-fc-25',
    segment_id: 'da-ch3-fa',
    order_index: 5,
    front: 'What are the two fundamental Factor Indeterminacies?',
    back: '1. Rotation Indeterminacy: Infinitely many rotated solutions reproduce identical correlations and communalities.\n2. Communality Estimation Circularity: Estimating loadings requires communalities, but estimating communalities requires loadings.',
    category: 'Indeterminacies'
  },
  {
    id: 'da-fc-26',
    segment_id: 'da-ch3-fa',
    order_index: 6,
    front: 'How does Principal Axis Factoring (PAF) operate iteratively?',
    back: 'It sets initial communality estimates (e.g., 1.0 or R^2), extracts factors, computes updated communalities (h^2 = ∑λ^2), replaces the correlation matrix diagonal with the new estimates, and repeats until maximum change < 0.001.',
    category: 'Extraction'
  },
  {
    id: 'da-fc-27',
    segment_id: 'da-ch3-fa',
    order_index: 7,
    front: 'What is Root Mean Square Residual (RMSR) and what indicates a good fit?',
    back: 'RMSR measures the average magnitude of off-diagonal residual correlations (r_observed - r_reproduced). A value ≤ 0.08 (or close to 0) indicates an excellent factor solution.',
    category: 'Goodness of Fit'
  },
  {
    id: 'da-fc-28',
    segment_id: 'da-ch3-fa',
    order_index: 8,
    front: 'What are the Kaiser-Meyer-Olkin (KMO) thresholds for Sampling Adequacy?',
    back: '≥ 0.90: Marvelous\n> 0.80: Meritorious (Recommended)\n> 0.70: Middling\n> 0.60: Mediocre (Tolerable)\n> 0.50: Miserable\n≤ 0.50: Unacceptable (Do not factor analyze).',
    category: 'Sampling Adequacy'
  },
  {
    id: 'da-fc-29',
    segment_id: 'da-ch3-fa',
    order_index: 9,
    front: 'What is Varimax Rotation, and why is it the most widely used rotation?',
    back: 'An orthogonal rotation that maximizes the variance of squared loadings across columns (factors). It simplifies factor interpretation by driving loadings toward ±1 or 0 (Simple Structure: each variable loads high on only one factor).',
    category: 'Rotations'
  },
  {
    id: 'da-fc-30',
    segment_id: 'da-ch3-fa',
    order_index: 10,
    front: 'What is the main drawback of Quartimax Rotation?',
    back: 'Quartimax simplifies rows (variables), causing all variables to load heavily on the very first factor, creating an undesirable, uninterpretable "general factor" that defeats the purpose of rotation.',
    category: 'Rotations'
  }
];
