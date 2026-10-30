// Part 2: Levels 5 to 7 of Data Analysis curriculum

export const levelsPart2 = [
  {
    "segment": {
      "id": "ch3-fa-theory",
      "discipline_id": "data-analysis",
      "title": "Factor Analysis: Latent Variable Theory & Variance Decomposition",
      "subtitle": "Spearman's foundational intelligence model, communalities, unique variances, and reproducing correlations.",
      "order_index": 5,
      "summary_markdown": "# Factor Analysis: Latent Constructs & Variance Decomposition\n\n## 1. Foundations of Factor Analysis\nFactor Analysis (FA) originated in psychological measurement when Charles Spearman (1904) observed that schoolchildren who excelled in classics also tended to excel in mathematics, French, and music. Spearman proposed that these observed correlations were driven by an underlying, unobservable general intelligence factor ($g$).\n\nWhile Principal Components Analysis (PCA) is an empirical data-reduction technique that constructs linear combinations of observed variables, Factor Analysis is a reflective latent variable model that assumes unobservable underlying constructs cause the observed responses.\n\n### Formative vs. Reflective Models\n- Formative Model (PCA): Observed variables combine to form composite indices. Arrow points from indicators to the component.\n- Reflective Model (FA): Latent factors give rise to the observed indicator scores. Arrow points from the latent factor to the indicators.\n\n## 2. The Classical Orthogonal Factor Model\nLet $x_j$ denote the standardized response on observed variable $j$ (with $E(x_j) = 0$ and $\\text{Var}(x_j) = 1$). The classical orthogonal factor model expresses each variable as a linear function of $m$ common latent factors $\\xi_1, \\dots, \\xi_m$ plus a unique factor $\\varepsilon_j$:\n$$x_j = \\lambda_{j1}\\xi_1 + \\lambda_{j2}\\xi_2 + \\dots + \\lambda_{jm}\\xi_m + \\varepsilon_j \\quad (j = 1, \\dots, p)$$\nwhere $\\lambda_{jk}$ are the factor loadings (regression weights of indicator $j$ on latent factor $k$).\n\nThe model rests on three fundamental assumptions:\n1. Common factors are standardized and mutually uncorrelated: $E(\\xi_k) = 0$, $\\text{Var}(\\xi_k) = 1$, and $\\text{Cov}(\\xi_k, \\xi_l) = 0$ for $k \\neq l$.\n2. Unique error factors are uncorrelated with common factors: $\\text{Cov}(\\varepsilon_j, \\xi_k) = 0$.\n3. Unique errors are mutually uncorrelated across variables: $\\text{Cov}(\\varepsilon_j, \\varepsilon_k) = 0$ for $j \\neq k$.\n\n## 3. Total Variance Decomposition: Communality vs. Uniqueness\nBecause the common factors and unique errors are mutually uncorrelated, the total variance of standardized variable $x_j$ decomposes cleanly into two parts:\n$$\\text{Var}(x_j) = 1.0 = h_j^2 + \\psi_j$$\n\n### Communality (h_j^2)\nCommunality represents the proportion of variable $j$'s variance that is explained by the $m$ common latent factors:\n$$h_j^2 = \\lambda_{j1}^2 + \\lambda_{j2}^2 + \\dots + \\lambda_{jm}^2 = \\sum_{k=1}^m \\lambda_{jk}^2$$\nCommunality values range between 0 and 1. A high communality (e.g. $h_j^2 = 0.85$) indicates that the common factors capture $85\\%$ of that variable's variation.\n\n### Uniqueness (\\psi_j)\nUniqueness represents the proportion of variance specific to variable $j$ that cannot be accounted for by the common factors:\n$$\\psi_j = 1 - h_j^2$$\nUniqueness comprises two components: specific variance (true systematic variation that is unique to that individual indicator) and random measurement error.\n\n## 4. Reproducing the Correlation Matrix\nA central feature of the orthogonal factor model is that it reproduces the pairwise linear correlations among observed variables purely through the common factor loadings:\n$$\\hat{r}_{jk} = \\sum_{l=1}^m \\lambda_{jl} \\lambda_{kl} = \\lambda_{j1}\\lambda_{k1} + \\dots + \\lambda_{jm}\\lambda_{km}$$\nIn matrix notation, the reproduced correlation matrix is:\n$$\\hat{R} = \\Lambda \\Lambda^T + \\Psi$$\nwhere $\\Lambda$ is the $p \\times m$ loading matrix and $\\Psi = \\text{diag}(\\psi_1, \\dots, \\psi_p)$ is the diagonal uniqueness matrix.\n\nIn Spearman's 1904 model, if Math loads $0.80$ on general intelligence and Physics loads $0.70$, their predicted correlation is $\\hat{r} = 0.80 \\times 0.70 = 0.56$. If we statistically control for the common factor Intelligence, the partial correlation between Math and Physics drops to zero. The correlation was driven entirely by the shared latent construct."
    },
    "questions": [
      {
        "id": "q_l6_1",
        "segment_id": "ch3-fa-theory",
        "order_index": 1,
        "difficulty": "easy",
        "question": "What is the primary conceptual objective of Factor Analysis?",
        "options": [
          {
            "id": "a",
            "text": "To maximize total retained variance across all original indicators by constructing uncorrelated composite indices"
          },
          {
            "id": "b",
            "text": "To uncover unobservable latent variables (factors) that account for the shared correlation structure among observed indicators"
          },
          {
            "id": "c",
            "text": "To classify heterogeneous observations into mutually exclusive and exhaustive cluster groups based on distance"
          },
          {
            "id": "d",
            "text": "To predict a single continuous metric dependent variable from a linear combination of independent explanatory factors"
          },
          {
            "id": "e",
            "text": "To test whether multivariate group mean centroids differ significantly across experimental categorical treatments"
          },
          {
            "id": "f",
            "text": "To project high-dimensional nonmetric contingency tables into a low-dimensional perceptual Euclidean space"
          }
        ],
        "correct_option": "b",
        "explanation": "Factor Analysis is designed to discover and measure unobservable (latent) variables—such as intelligence, brand loyalty, or perceived quality—that generate the correlations observed among measurable indicators.",
        "section_reference": "Section 1: Foundations of Factor Analysis",
        "section_anchor": "1-foundations-of-factor-analysis"
      },
      {
        "id": "q_l6_2",
        "segment_id": "ch3-fa-theory",
        "order_index": 2,
        "difficulty": "easy",
        "question": "In an orthogonal factor model with standardized variables, what is the definition of a variable’s Communality ($h_j^2$)?",
        "options": [
          {
            "id": "a",
            "text": "The proportion of total indicator variance accounted for by unique measurement error and specific variance: $\\psi_j$"
          },
          {
            "id": "b",
            "text": "The arithmetic average correlation between an indicator and all other variables in the sample correlation matrix"
          },
          {
            "id": "c",
            "text": "The sample variance of the indicator divided by the degrees of freedom remaining in the reduced correlation matrix"
          },
          {
            "id": "d",
            "text": "The proportion of total indicator variance accounted for by the extracted common factors: $h_j^2 = \\sum_{i=1}^m \\lambda_{ji}^2$"
          },
          {
            "id": "e",
            "text": "The determinant of the anti-image correlation matrix evaluated across the extracted latent factor dimensions"
          },
          {
            "id": "f",
            "text": "The squared multiple correlation between the indicator and the sample centroid vector in observation space"
          }
        ],
        "correct_option": "d",
        "explanation": "Communality ($h_j^2$) is the sum of squared factor loadings across all extracted common factors, representing the shared variance explained by the latent factors.",
        "section_reference": "Section 3.1: Communality",
        "section_anchor": "communality-h-j-2"
      },
      {
        "id": "q_l6_3",
        "segment_id": "ch3-fa-theory",
        "order_index": 3,
        "difficulty": "easy",
        "question": "If a standardized indicator has a communality of $h_j^2 = 0.64$, what is its unique (specific/error) variance $\\psi_j$?",
        "options": [
          {
            "id": "a",
            "text": "$\\psi_j = 1 - h_j^2 = 1 - 0.64 = 0.36$ (36%), because total standardized variance decomposes into communality plus uniqueness"
          },
          {
            "id": "b",
            "text": "$\\psi_j = \\sqrt{1 - 0.64} = \\sqrt{0.36} = 0.60$ (60%), taking the square root of unexplained variance to obtain noise dispersion"
          },
          {
            "id": "c",
            "text": "$\\psi_j = 0.64$, because communality and uniqueness are constrained to be equal in classical orthogonal factor models"
          },
          {
            "id": "d",
            "text": "$\\psi_j = 1 / 0.64 = 1.5625$, taking the reciprocal of communality to measure the precision of unique indicator variance"
          },
          {
            "id": "e",
            "text": "$\\psi_j = 0.00$, because orthogonal factor models assume that common factors explain 100% of individual indicator variance"
          },
          {
            "id": "f",
            "text": "$\\psi_j = 0.64^2 = 0.4096$, squaring the communality to evaluate higher-order residual error dispersion in the model"
          }
        ],
        "correct_option": "a",
        "explanation": "For standardized variables, total variance is 1.0. Therefore, total variance decomposes into communality plus unique variance: $1.0 = h_j^2 + \\psi_j \\implies \\psi_j = 1.0 - 0.64 = 0.36$.",
        "section_reference": "Section 3.2: Uniqueness",
        "section_anchor": "uniqueness-psi-j"
      },
      {
        "id": "q_l6_4",
        "segment_id": "ch3-fa-theory",
        "order_index": 4,
        "difficulty": "easy",
        "question": "In a single-factor orthogonal model where Math has loading $\\lambda_M = 0.80$ and Physics has loading $\\lambda_P = 0.70$, what is the model-reproduced correlation between Math and Physics?",
        "options": [
          {
            "id": "a",
            "text": "$\\hat{r}_{MP} = (0.80 + 0.70) / 2 = 0.75$, taking the simple unweighted arithmetic mean of the two individual factor loadings"
          },
          {
            "id": "b",
            "text": "$\\hat{r}_{MP} = \\sqrt{0.80 \\times 0.70} = \\sqrt{0.56} \\approx 0.748$, taking the geometric mean of the factor loadings across courses"
          },
          {
            "id": "c",
            "text": "$\\hat{r}_{MP} = 0.80^2 + 0.70^2 = 0.64 + 0.49 = 1.13$, summing the squared loadings to evaluate cumulative bivariate association"
          },
          {
            "id": "d",
            "text": "$\\hat{r}_{MP} = 0.80 - 0.70 = 0.10$, evaluating the difference in factor saturation between Math and Physics courses"
          },
          {
            "id": "e",
            "text": "$\\hat{r}_{MP} = \\lambda_M \\lambda_P = 0.80 \\times 0.70 = 0.56$, because the single common factor accounts for all shared covariation"
          },
          {
            "id": "f",
            "text": "$\\hat{r}_{MP} = 0.00$, because orthogonal factors assume zero correlation between distinct observed course indicators"
          }
        ],
        "correct_option": "e",
        "explanation": "In an orthogonal factor model, the correlation between any two indicators is the product of their pattern loadings: $r_{jk} = \\lambda_j \\lambda_k = 0.80 \\times 0.70 = 0.56$.",
        "section_reference": "Section 4: Reproducing the Correlation Matrix",
        "section_anchor": "4-reproducing-the-correlation-matrix"
      },
      {
        "id": "q_l6_5",
        "segment_id": "ch3-fa-theory",
        "order_index": 5,
        "difficulty": "intermediate",
        "question": "Under what condition are factor pattern loadings strictly identical to factor structure loadings?",
        "options": [
          {
            "id": "a",
            "text": "When the sample size $n$ exceeds 500 observations, minimizing sampling variability across factor loading parameters"
          },
          {
            "id": "b",
            "text": "When all observed indicators are measured on standardized ratio scales with zero skewness and kurtosis in sample data"
          },
          {
            "id": "c",
            "text": "When all extracted communalities are identically equal to 1.0, eliminating unique variance from the indicator decomposition"
          },
          {
            "id": "d",
            "text": "When the factor model is estimated using Maximum Likelihood rather than iterated Principal Axis Factoring in software"
          },
          {
            "id": "e",
            "text": "When an oblique Promax or Oblimin rotation is applied to allow common factors to correlate freely in multidimensional space"
          },
          {
            "id": "f",
            "text": "When the common factors are orthogonal (uncorrelated, $\\Phi = I$), eliminating indirect correlations through other factors"
          }
        ],
        "correct_option": "f",
        "explanation": "In orthogonal factor models, common factors have zero correlation with one another. Consequently, the simple correlation between an indicator and a factor (structure loading) equals the direct regression coefficient (pattern loading).",
        "section_reference": "Section 2: The Classical Orthogonal Factor Model",
        "section_anchor": "2-the-classical-orthogonal-factor-model"
      },
      {
        "id": "q_l6_6",
        "segment_id": "ch3-fa-theory",
        "order_index": 6,
        "difficulty": "intermediate",
        "question": "What assumption does the classical orthogonal factor model make regarding the relationship between the unique error factors ($\\varepsilon_j$) and the common latent factors ($\\xi_k$)?",
        "options": [
          {
            "id": "a",
            "text": "Unique factors are perfectly collinear with the leading common factor: $\\text{Corr}(e_j, F_1) = 1.0$, providing baseline scaling"
          },
          {
            "id": "b",
            "text": "Unique factors correlate negatively with common factors: $\\text{Corr}(e_j, F_i) = -0.50$, balancing positive common loadings"
          },
          {
            "id": "c",
            "text": "Unique factors are completely uncorrelated with common factors ($\\text{Cov}(F_i, e_j) = 0$) and with each other ($\\text{Cov}(e_j, e_k) = 0$)"
          },
          {
            "id": "d",
            "text": "Unique factors are equal to the sample standard deviations of indicators divided by the number of extracted common factors"
          },
          {
            "id": "e",
            "text": "Unique factors correlate with each other at a constant rate equal to the average off-diagonal anti-image correlation"
          },
          {
            "id": "f",
            "text": "Unique factors are identical to the standardized component scores extracted from the initial unrotated PCA solution"
          }
        ],
        "correct_option": "c",
        "explanation": "A fundamental axiom of factor analysis is that unique factors $\\varepsilon_j$ represent random measurement error and specific variance that share zero covariance with the common latent factors ($E(\\xi_k \\varepsilon_j) = 0$).",
        "section_reference": "Section 2: The Classical Orthogonal Factor Model",
        "section_anchor": "2-the-classical-orthogonal-factor-model"
      },
      {
        "id": "q_l6_7",
        "segment_id": "ch3-fa-theory",
        "order_index": 7,
        "difficulty": "intermediate",
        "question": "In a two-factor orthogonal model with factors $Q$ (Quantitative) and $V$ (Verbal), Math has loadings $\\lambda_{MQ} = 0.80$ and $\\lambda_{MV} = 0.20$. What is the communality of Math, and how is it interpreted?",
        "options": [
          {
            "id": "a",
            "text": "Communality is $0.60 + 0.40 = 1.00$ (100%) and uniqueness is $0.00$ (0%), because the two loadings sum to complete unity"
          },
          {
            "id": "b",
            "text": "Communality is $0.60^2 + 0.40^2 = 0.36 + 0.16 = 0.52$ (52%); Uniqueness is $1 - 0.52 = 0.48$ (48%)"
          },
          {
            "id": "c",
            "text": "Communality is $\\sqrt{0.60^2 + 0.40^2} = \\sqrt{0.52} \\approx 0.721$ (72.1%); Uniqueness is $1 - 0.721 = 0.279$ (27.9%)"
          },
          {
            "id": "d",
            "text": "Communality is $0.60 \\times 0.40 = 0.24$ (24%); Uniqueness is $1 - 0.24 = 0.76$ (76%) of total standardized variance"
          },
          {
            "id": "e",
            "text": "Communality is $(0.60^2 + 0.40^2)/2 = 0.26$ (26%); Uniqueness is $1 - 0.26 = 0.74$ (74%) of indicator variance"
          },
          {
            "id": "f",
            "text": "Communality is $0.60^2 - 0.40^2 = 0.20$ (20%); Uniqueness is $1 - 0.20 = 0.80$ (80%) across the orthogonal dimensions"
          }
        ],
        "correct_option": "b",
        "explanation": "Communality is the sum of squared loadings across all factors: $h_j^2 = \\lambda_{j1}^2 + \\lambda_{j2}^2 = 0.80^2 + 0.20^2 = 0.64 + 0.04 = 0.68$. This means common factors account for 68% of the variance, leaving 32% unique variance.",
        "section_reference": "Section 3.1: Communality",
        "section_anchor": "communality-h-j-2"
      },
      {
        "id": "q_l6_8",
        "segment_id": "ch3-fa-theory",
        "order_index": 8,
        "difficulty": "intermediate",
        "question": "If the pattern loading of an indicator on all extracted common factors is zero ($\\lambda_{j1} = \\dots = \\lambda_{jm} = 0$), what is its correlation with every other indicator in the dataset?",
        "options": [
          {
            "id": "a",
            "text": "The indicator is perfectly explained by the common factors and has zero measurement error: $h_j^2 = 1.0$ and $\\psi_j = 0.0$"
          },
          {
            "id": "b",
            "text": "The indicator is collinear with the second principal component and should be retained as an anchor variable for rotation"
          },
          {
            "id": "c",
            "text": "The indicator has negative variance and violates mathematical non-negativity axioms, requiring data log transformation"
          },
          {
            "id": "d",
            "text": "The indicator shares zero variance with the common factors; it is pure uniqueness ($h_j^2 = 0, \\psi_j = 1.0$) and useless in FA"
          },
          {
            "id": "e",
            "text": "The indicator is an omnibus reference baseline category that establishes identification for the structural factor model"
          },
          {
            "id": "f",
            "text": "The indicator has infinite communality and must be inverted to prevent algorithmic non-convergence in factor extraction"
          }
        ],
        "correct_option": "d",
        "explanation": "Since $r_{jk} = \\sum_{l=1}^m \\lambda_{jl}\\lambda_{kl}$, if $\\lambda_{jl} = 0$ for all $l$, then $r_{jk} = 0$ for all $k$. In Factor Analysis, correlations exist purely through shared loadings on common factors.",
        "section_reference": "Section 3.2: Uniqueness",
        "section_anchor": "uniqueness-psi-j"
      },
      {
        "id": "q_l6_9",
        "segment_id": "ch3-fa-theory",
        "order_index": 9,
        "difficulty": "hard",
        "question": "Consider a 2-factor model where Chemistry has loadings $\\lambda_{CQ} = 0.60$, $\\lambda_{CV} = 0.30$, and History has loadings $\\lambda_{HQ} = 0.15$, $\\lambda_{HV} = 0.82$. Compute the model-reproduced correlation between Chemistry and History ($r_{CH}$).",
        "options": [
          {
            "id": "a",
            "text": "$r_{CH} = \\lambda_{CQ}\\lambda_{HQ} + \\lambda_{CV}\\lambda_{HV} = (0.60 \\times 0.15) + (0.30 \\times 0.82) = 0.090 + 0.246 = 0.336$"
          },
          {
            "id": "b",
            "text": "$r_{CH} = (0.60 + 0.30 + 0.15 + 0.82) / 4 = 0.468$, averaging the four factor loadings across both dimensions"
          },
          {
            "id": "c",
            "text": "$r_{CH} = (0.60 \\times 0.30) + (0.15 \\times 0.82) = 0.180 + 0.123 = 0.303$, multiplying within-course loadings rather than across factors"
          },
          {
            "id": "d",
            "text": "$r_{CH} = 0.60 \\times 0.82 = 0.492$, multiplying only the highest single loading from each course across factors"
          },
          {
            "id": "e",
            "text": "$r_{CH} = 0.60^2 + 0.82^2 = 0.360 + 0.672 = 1.032$, summing the squared maximum loadings of the two courses"
          },
          {
            "id": "f",
            "text": "$r_{CH} = 0.000$, because orthogonal factors assume that separate observed indicators share zero empirical correlation"
          }
        ],
        "correct_option": "a",
        "explanation": "In a two-factor model, $r_{jk} = \\lambda_{j1}\\lambda_{k1} + \\lambda_{j2}\\lambda_{k2}$. For Chemistry ($C$) and History ($H$): $r_{CH} = \\lambda_{CQ}\\lambda_{HQ} + \\lambda_{CV}\\lambda_{HV} = (0.60)(0.15) + (0.30)(0.82) = 0.090 + 0.246 = 0.336$. This matches slide 21 of Chapter 3 exactly.",
        "section_reference": "Section 3: Total Variance Decomposition",
        "section_anchor": "3-total-variance-decomposition-communality-vs-uniqueness"
      },
      {
        "id": "q_l6_10",
        "segment_id": "ch3-fa-theory",
        "order_index": 10,
        "difficulty": "hard",
        "question": "In the two-factor model of student grades, the sum of squared loadings for Factor $Q$ across all 6 courses is $1.61$, and for Factor $V$ is $2.25$. What is the sum of all communalities across the 6 courses, and what does it represent?",
        "options": [
          {
            "id": "a",
            "text": "Sum of communalities is $6.00$, representing 100% preservation of total variance across all 6 standardized school courses"
          },
          {
            "id": "b",
            "text": "Sum of communalities is $1.61 \\times 2.25 = 3.6225$, representing the geometric product of orthogonal factor eigenvalues"
          },
          {
            "id": "c",
            "text": "Sum of communalities is $1.61 + 2.25 = 3.86$, representing the total common variance explained by Factors $Q$ and $V$ combined"
          },
          {
            "id": "d",
            "text": "Sum of communalities is $(1.61 + 2.25) / 6 = 0.643$, representing the average communality per course across the curriculum"
          },
          {
            "id": "e",
            "text": "Sum of communalities is $6.00 - 3.86 = 2.14$, representing the total unexplained unique variance discarded from the model"
          },
          {
            "id": "f",
            "text": "Sum of communalities is $\\sqrt{1.61^2 + 2.25^2} = 2.766$, representing the Euclidean vector norm of the extracted factor roots"
          }
        ],
        "correct_option": "c",
        "explanation": "Summing communalities equals summing factor eigenvalues: $\\sum h_j^2 = \\sum \\lambda_k = 1.61 + 2.25 = 3.86$. Since there are 6 standardized variables (total variance = 6.0), the common factors account for $3.86$ ($64.3\\%$) and total unique error accounts for $6.0 - 3.86 = 2.14$ ($35.7\\%$).",
        "section_reference": "Section 3.1: Communality",
        "section_anchor": "communality-h-j-2"
      },
      {
        "id": "q_l6_11",
        "segment_id": "ch3-fa-theory",
        "order_index": 11,
        "difficulty": "hard",
        "question": "Why does Factor Analysis treat indicators as REFLECTIVE of latent constructs, whereas Principal Components Analysis treats indicators as FORMATIVE?",
        "options": [
          {
            "id": "a",
            "text": "Because Factor Analysis assumes indicators cause the latent construct, whereas PCA assumes indicators are caused by components"
          },
          {
            "id": "b",
            "text": "Because Factor Analysis is strictly a nonmetric classification technique, whereas PCA is a continuous metric forecasting model"
          },
          {
            "id": "c",
            "text": "Because Factor Analysis maximizes total indicator variance, whereas PCA maximizes shared covariance and isolates uniqueness"
          },
          {
            "id": "d",
            "text": "Because Factor Analysis treats indicators as independent predictors in regression, whereas PCA treats indicators as criterion targets"
          },
          {
            "id": "e",
            "text": "In FA, the latent construct causes the observed responses (reflective); in PCA, components are mathematical composites of variables (formative)"
          },
          {
            "id": "f",
            "text": "In FA, indicators are mutually uncorrelated by assumption; in PCA, indicators must be perfectly collinear to extract components"
          }
        ],
        "correct_option": "e",
        "explanation": "As explained on slide 74 of Chapter 3: In FA, observed indicators are reflections of an unobservable latent trait (e.g. general intelligence causes grades). In PCA, observed indicators form an index or summary composite through a weighted sum ($PC = w'X$).",
        "section_reference": "Section 1.1: Formative vs. Reflective Models",
        "section_anchor": "formative-vs-reflective-models"
      },
      {
        "id": "q_l6_12",
        "segment_id": "ch3-fa-theory",
        "order_index": 12,
        "difficulty": "hard",
        "question": "According to Chapter 3, what are the two inherent indeterminacies that prevent a factor analysis solution from being mathematically unique?",
        "options": [
          {
            "id": "a",
            "text": "(1) Finite-sample instability when observations $n < 100$, and (2) mathematical sign indeterminacy where reversing loading signs produces negative eigenvalues"
          },
          {
            "id": "b",
            "text": "(1) Iterative algorithmic non-convergence in maximum likelihood estimation, and (2) the violation of continuous metric distribution properties in survey Likert scales"
          },
          {
            "id": "c",
            "text": "(1) Inability to compute standard errors in exploratory factor analysis, and (2) severe multicollinearity among observed variables in the sample correlation matrix"
          },
          {
            "id": "d",
            "text": "(1) Arbitrary scaling of latent factor scores to zero mean and unit variance, and (2) software discrepancy in default communality priors between SAS and SPSS packages"
          },
          {
            "id": "e",
            "text": "(1) Inability of the Kaiser-Guttman criterion to select true latent dimensions, and (2) the persistence of non-zero off-diagonal correlations in the residual matrix"
          },
          {
            "id": "f",
            "text": "(1) Factor rotation indeterminacy (infinite orientations reproduce identical correlations), and (2) communality circularity (loadings depend on communalities and vice versa)"
          }
        ],
        "correct_option": "f",
        "explanation": "As explained in Chapter 3 Slides 27 to 34, factor analysis has two inherent indeterminacies: (1) The Factor Rotation Problem — any orthogonal rotation of the factor axes reproduces the exact same correlation matrix; and (2) The Communality Estimation Problem — factor loadings depend on communalities, but communalities are calculated from factor loadings, creating a circular estimation problem resolved through iteration (PAF).",
        "section_reference": "Section 5: Factor Indeterminacies",
        "section_anchor": "5-factor-indeterminacies"
      }
    ],
    "flashcards": [
      {
        "id": "fc_l6_1",
        "segment_id": "ch3-fa-theory",
        "order_index": 1,
        "category": "Foundations",
        "front": "What is a **Latent Variable**, and how does Factor Analysis identify it?",
        "back": "An **unobservable construct** (e.g. intelligence, trust, brand image) that cannot be directly measured. FA identifies it by modeling the shared correlations among measurable manifest indicators.",
        "section_reference": "Section 1: Foundations of Factor Analysis",
        "section_anchor": "1-foundations-of-factor-analysis"
      },
      {
        "id": "fc_l6_2",
        "segment_id": "ch3-fa-theory",
        "order_index": 2,
        "category": "History",
        "front": "What was **Spearman's (1904)** foundational hypothesis in developing Factor Analysis?",
        "back": "Student performance across diverse academic courses is intercorrelated because grades are driven by a single underlying trait: **General Intelligence ($I$)** plus course-specific aptitude.",
        "section_reference": "Section 1: Foundations of Factor Analysis",
        "section_anchor": "1-foundations-of-factor-analysis"
      },
      {
        "id": "fc_l6_3",
        "segment_id": "ch3-fa-theory",
        "order_index": 3,
        "category": "Decomposition",
        "front": "How does total variance decompose for a standardized indicator in Factor Analysis?",
        "back": "$$\\text{Var}(x_j) = 1.0 = h_j^2 + \\psi_j$$\n- $h_j^2$: **Communality** (shared variance with common factors).\n- $\\psi_j$: **Unique variance** (specific factor trait + measurement error).",
        "section_reference": "Section 3: Total Variance Decomposition",
        "section_anchor": "3-total-variance-decomposition-communality-vs-uniqueness"
      },
      {
        "id": "fc_l6_4",
        "segment_id": "ch3-fa-theory",
        "order_index": 4,
        "category": "Definitions",
        "front": "What is **Communality ($h_j^2$)**, and how is it calculated?",
        "back": "$$h_j^2 = \\sum_{k=1}^m \\lambda_{jk}^2$$\nThe sum of squared factor loadings across all extracted common factors. Higher values indicate more reliable indicators.",
        "section_reference": "Section 3.1: Communality",
        "section_anchor": "communality-h-j-2"
      },
      {
        "id": "fc_l6_5",
        "segment_id": "ch3-fa-theory",
        "order_index": 5,
        "category": "Loadings",
        "front": "What is the relationship between **Pattern Loadings** and **Structure Loadings** in orthogonal FA?",
        "back": "They are **identically equal**!\nPattern loadings are regression coefficients; structure loadings are correlations with factors. When factors are uncorrelated, both values match.",
        "section_reference": "Section 2: The Classical Orthogonal Factor Model",
        "section_anchor": "2-the-classical-orthogonal-factor-model"
      },
      {
        "id": "fc_l6_6",
        "segment_id": "ch3-fa-theory",
        "order_index": 6,
        "category": "Correlations",
        "front": "How is the correlation between two indicators reproduced in an orthogonal factor model?",
        "back": "$$r_{jk} = \\sum_{l=1}^m \\lambda_{jl}\\lambda_{kl} = \\lambda_{j1}\\lambda_{k1} + \\dots + \\lambda_{jm}\\lambda_{km}$$\nCorrelations exist purely because variables share common latent factors.",
        "section_reference": "Section 4: Reproducing the Correlation Matrix",
        "section_anchor": "4-reproducing-the-correlation-matrix"
      },
      {
        "id": "fc_l6_7",
        "segment_id": "ch3-fa-theory",
        "order_index": 7,
        "category": "Philosophy",
        "front": "What is the difference between **Reflective** indicators (FA) and **Formative** indicators (PCA)?",
        "back": "- **Reflective (FA)**: The latent factor causes the indicator values ($X = \\Lambda\\xi + \\varepsilon$).\n- **Formative (PCA)**: The indicators combine to form the composite index ($PC = w'X$).",
        "section_reference": "Section 1.1: Formative vs. Reflective Models",
        "section_anchor": "formative-vs-reflective-models"
      },
      {
        "id": "fc_l6_8",
        "segment_id": "ch3-fa-theory",
        "order_index": 8,
        "category": "Independence",
        "front": "What happens to the correlation between indicators if the common latent factor is removed?",
        "back": "The **partial correlation drops to zero**.\nOnce the common cause is held constant, there is no remaining mechanism linking the indicators.",
        "section_reference": "Section 2: The Classical Orthogonal Factor Model",
        "section_anchor": "2-the-classical-orthogonal-factor-model"
      }
    ]
  },
  {
    "segment": {
      "id": "ch3-fa-extraction",
      "discipline_id": "data-analysis",
      "title": "Factor Analysis: Indeterminacies & Extraction Methods",
      "subtitle": "Factor rotation indeterminacy, communality circularity, PCF vs PAF, and the RMSR criterion.",
      "order_index": 6,
      "summary_markdown": "# Factor Analysis: Indeterminacies & Extraction Methods\n\n## 1. Two Fundamental Indeterminacies in Factor Analysis\nBefore factors can be extracted and interpreted, factor analysts must resolve two mathematical challenges:\n\n### Factor Rotation Indeterminacy\nLet $\\Lambda$ be a valid matrix of factor loadings reproducing correlation matrix $R$. If we multiply $\\Lambda$ by any $m \\times m$ orthogonal rotation matrix $T$ (where $T T^T = I$), the transformed loading matrix $\\Lambda^* = \\Lambda T$ reproduces the exact same correlation matrix:\n$$\\Lambda^* (\\Lambda^*)^T = (\\Lambda T)(\\Lambda T)^T = \\Lambda (T T^T) \\Lambda^T = \\Lambda \\Lambda^T$$\nThere are infinite mathematically equivalent orientations of the factor axes that fit the observed correlations equally well. To achieve an interpretable solution, researchers apply rotation criteria (such as Varimax).\n\n### Communality Circularity\nTo determine the factor loadings $\\Lambda$, we must first know the communalities ($h_j^2$) to place on the diagonal of the correlation matrix. However, communalities cannot be calculated until the factor loadings are known ($h_j^2 = \\sum \\lambda_{jk}^2$). Different factor extraction methods resolve this circular dependency in different ways.\n\n## 2. Common Extraction Methods\n\n### Principal Components Factoring (PCF)\nPCF circumvents the communality problem by initially assuming that all communalities equal 1.0 ($h_j^2 = 1.0$). It extracts factors by performing an unrotated spectral decomposition on the full sample correlation matrix $R$.\n- Advantages: Computationally straightforward and avoids Heywood cases (improper solutions where communality exceeds 1.0).\n- Disadvantage: Because it analyzes total variance rather than common variance, loadings and communalities are slightly inflated.\n\n### Principal Axis Factoring (PAF)\nPAF replaces the diagonal of the correlation matrix $R$ with prior estimates of communalities, creating the reduced correlation matrix $R_r$:\n$$R_r = R - \\text{diag}(1 - h_j^2)$$\nThe most widely used initial communality estimate is the Squared Multiple Correlation ($R_j^2$), obtained by regressing variable $j$ on all remaining $p - 1$ variables. PAF extracts initial loadings from $R_r$, recalculates communalities, updates the diagonal, and iterates until the communalities converge.\n\n### Maximum Likelihood Factoring (MLF)\nMLF assumes that the observed variables follow a multivariate normal distribution. It uses numerical optimization to find factor loadings that maximize the likelihood of observing sample covariance matrix $S$. A major advantage of MLF is that it provides formal asymptotic $\\chi^2$ hypothesis tests to evaluate whether $m$ factors are sufficient to explain the observed correlations.\n\n## 3. Evaluating Model Fit: Residual Correlation & RMSR\nTo verify how well the extracted factor model accounts for the data, analysts examine the residual correlation matrix:\n$$R_{\\text{res}} = R - \\hat{R}$$\nThe off-diagonal elements of $R_{\\text{res}}$ represent the correlation that remains unexplained by the factor model.\n\nThe overall discrepancy is summarized by the Root Mean Square Residual (RMSR):\n$$\\text{RMSR} = \\sqrt{\\frac{2 \\sum_{j < k} (r_{jk} - \\hat{r}_{jk})^2}{p(p - 1)}}$$\nAs a standard benchmark, an RMSR value below $0.08$ indicates a good model fit, and an RMSR below $0.05$ indicates an outstanding fit."
    },
    "questions": [
      {
        "id": "q_l7_1",
        "segment_id": "ch3-fa-extraction",
        "order_index": 1,
        "difficulty": "easy",
        "question": "What is the Factor Rotation Problem in Factor Analysis?",
        "options": [
          {
            "id": "a",
            "text": "The inability of mathematical algorithms to extract more than one factor whenever the sample correlation matrix is non-singular"
          },
          {
            "id": "b",
            "text": "The algorithmic error that occurs when sample eigenvalues become negative, violating positive semi-definite matrix axioms"
          },
          {
            "id": "c",
            "text": "An unrotated solution is mathematically arbitrary; infinitely many orientations reproduce the exact same correlation matrix equally well"
          },
          {
            "id": "d",
            "text": "The requirement that all rotated factors must remain strictly orthogonal to avoid multicollinearity in econometric regressions"
          },
          {
            "id": "e",
            "text": "The limitation that factor rotation can only be executed in statistical packages when all observed variables are standardized"
          },
          {
            "id": "f",
            "text": "The circular dependency between initial communality estimates and the resulting eigenvalues extracted from the reduced matrix"
          }
        ],
        "correct_option": "c",
        "explanation": "Because $\\Lambda^* (\\Lambda^*)^T = (\\Lambda T)(T^T \\Lambda^T) = \\Lambda \\Lambda^T$, any orthogonal rotation matrix $T$ yields identical reproduced correlations and total communalities, meaning infinitely many mathematically equivalent solutions exist.",
        "section_reference": "Section 1.1: Factor Rotation Indeterminacy",
        "section_anchor": "factor-rotation-indeterminacy"
      },
      {
        "id": "q_l7_2",
        "segment_id": "ch3-fa-extraction",
        "order_index": 2,
        "difficulty": "easy",
        "question": "What initial communality values are assumed for all variables in Principal Components Factoring (PCF)?",
        "options": [
          {
            "id": "a",
            "text": "Initial communalities equal zero ($h_j^2 = 0.0$), assuming that observed indicators share zero common variance initially"
          },
          {
            "id": "b",
            "text": "Initial communalities equal squared multiple correlations ($R_j^2$), reflecting the variance explained by remaining variables"
          },
          {
            "id": "c",
            "text": "Initial communalities equal the average off-diagonal correlation entry in row $j$ of the sample correlation matrix: $\\bar{r}_j$"
          },
          {
            "id": "d",
            "text": "Initial communalities equal sample degrees of freedom divided by total sample size: $(n - 1) / n$, correcting for sample bias"
          },
          {
            "id": "e",
            "text": "Initial communalities equal 1.0 ($h_j^2 = 1.0$), assuming that total indicator variance consists entirely of common variance"
          },
          {
            "id": "f",
            "text": "Initial communalities equal the leading eigenvalue $\\lambda_1$ divided by total number of variables: $\\lambda_1 / p$"
          }
        ],
        "correct_option": "e",
        "explanation": "In PCF, prior estimates of communalities are set to 1.0 (the diagonal of the full correlation matrix), assuming no unique factors exist upfront.",
        "section_reference": "Section 2.1: Principal Components Factoring (PCF)",
        "section_anchor": "principal-components-factoring-pcf"
      },
      {
        "id": "q_l7_3",
        "segment_id": "ch3-fa-extraction",
        "order_index": 3,
        "difficulty": "easy",
        "question": "What does the Root Mean Square Residual (RMSR) measure in Factor Analysis?",
        "options": [
          {
            "id": "a",
            "text": "The arithmetic average difference between sample variable means and the estimated factor score centroids across observations"
          },
          {
            "id": "b",
            "text": "The square root of the average squared difference between empirical correlations and model-reproduced correlations: $r_{jk} - \\hat{r}_{jk}$"
          },
          {
            "id": "c",
            "text": "The ratio of the smallest extracted eigenvalue to the largest eigenvalue, evaluating collinearity in the reduced correlation matrix"
          },
          {
            "id": "d",
            "text": "The percentage of observations correctly classified into their respective groups by the rotated factor score matrix"
          },
          {
            "id": "e",
            "text": "The two-tailed p-value obtained when testing the statistical null hypothesis of zero residual correlation across dimensions"
          },
          {
            "id": "f",
            "text": "The determinant of the anti-image correlation matrix evaluated across the extracted common factor coordinate space"
          }
        ],
        "correct_option": "b",
        "explanation": "RMSR computes the square root of the average squared off-diagonal elements in the residual correlation matrix ($R - \\hat{R}$). A small RMSR indicates that the factor model closely reproduces observed correlations.",
        "section_reference": "Section 3: Evaluating Model Fit: RMSR",
        "section_anchor": "3-evaluating-model-fit-residual-correlation-rmsr"
      },
      {
        "id": "q_l7_4",
        "segment_id": "ch3-fa-extraction",
        "order_index": 4,
        "difficulty": "easy",
        "question": "What is the standard rule of thumb for a \"good\" factor model fit based on the Root Mean Square Residual (RMSR)?",
        "options": [
          {
            "id": "a",
            "text": "RMSR must be strictly greater than 0.70, indicating that common factors account for the dominant portion of correlation"
          },
          {
            "id": "b",
            "text": "RMSR must equal exactly 1.00, demonstrating that the residual correlation matrix matches the identity matrix perfectly"
          },
          {
            "id": "c",
            "text": "RMSR must fall within the range of 0.10 to 0.20, confirming that residual correlations follow a standard normal distribution"
          },
          {
            "id": "d",
            "text": "RMSR should be less than 0.05 (or at most 0.08), indicating small average discrepancy between empirical and reproduced correlations"
          },
          {
            "id": "e",
            "text": "RMSR must be less than $1 / \\sqrt{n}$, scaling the acceptable residual threshold directly to the degrees of freedom"
          },
          {
            "id": "f",
            "text": "RMSR must equal zero identically, because any non-zero residual correlation invalidates the factor model assumptions"
          }
        ],
        "correct_option": "d",
        "explanation": "Residual correlations reflect unexplained association. A smaller RMSR indicates better fit; values below 0.08 are widely accepted as indicating a good factor structure (in slide 43, RMSR = 0.078 is judged small).",
        "section_reference": "Section 3: Evaluating Model Fit: RMSR",
        "section_anchor": "3-evaluating-model-fit-residual-correlation-rmsr"
      },
      {
        "id": "q_l7_5",
        "segment_id": "ch3-fa-extraction",
        "order_index": 5,
        "difficulty": "intermediate",
        "question": "How does Principal Axis Factoring (PAF) resolve the communality estimation circularity problem?",
        "options": [
          {
            "id": "a",
            "text": "By using an iterative algorithm: start with prior communality estimates (e.g. $R_j^2$), extract factors, re-estimate communalities, and repeat until convergence"
          },
          {
            "id": "b",
            "text": "By forcing all communalities to equal 1.0 throughout all stages of extraction, eliminating the need to estimate uniqueness parameters"
          },
          {
            "id": "c",
            "text": "By replacing the empirical correlation matrix with an orthogonal Euclidean distance matrix, which bypasses the communality estimation problem completely"
          },
          {
            "id": "d",
            "text": "By fixing communalities to the diagonal elements of the inverse correlation matrix: $h_j^2 = (R^{-1})_{jj}$, which solves the algebraic system analytically in software"
          },
          {
            "id": "e",
            "text": "By using an unrotated PCA solution where communalities are calculated as the simple average of all extracted characteristic eigenvalues"
          },
          {
            "id": "f",
            "text": "By setting communalities equal to the Kaiser-Meyer-Olkin sampling adequacy measure, anchoring indicator variance to partial correlations"
          }
        ],
        "correct_option": "a",
        "explanation": "PAF inserts initial communality estimates into the diagonal of $R$, extracts factors, computes revised communalities from the new loadings, and repeats this loop until communalities stabilize (converge).",
        "section_reference": "Section 2.2: Principal Axis Factoring (PAF)",
        "section_anchor": "principal-axis-factoring-paf"
      },
      {
        "id": "q_l7_6",
        "segment_id": "ch3-fa-extraction",
        "order_index": 6,
        "difficulty": "intermediate",
        "question": "Why is Principal Components Factoring (PCF) often criticized by statistical purists as \"not being true Factor Analysis\"?",
        "options": [
          {
            "id": "a",
            "text": "Because PCF cannot compute factor scores for individual observations without violating orthogonality constraints in software"
          },
          {
            "id": "b",
            "text": "Because PCF requires sample sizes exceeding $n = 10,000$ observations to achieve numerical stability in spectral decomposition"
          },
          {
            "id": "c",
            "text": "Because PCF produces oblique correlated factors by default, prohibiting the execution of orthogonal Varimax factor rotations"
          },
          {
            "id": "d",
            "text": "Because PCF can only be performed on nonmetric categorical data, rendering it invalid for continuous financial and economic indicators"
          },
          {
            "id": "e",
            "text": "Because PCF always produces negative eigenvalues that distort the calculation of cumulative explained variance percentages"
          },
          {
            "id": "f",
            "text": "Because PCF sets initial communalities to 1.0, assuming indicators contain zero unique or error variance, which contradicts the common factor model"
          }
        ],
        "correct_option": "f",
        "explanation": "As slide 48 explicitly states: \"technically speaking, PCF is simply PCA and not really FA.\" By assuming communalities are 1.0 upfront, it assumes all variance is common, only relegating variance from dropped components to \"error\" after the fact.",
        "section_reference": "Section 2.1: Principal Components Factoring (PCF)",
        "section_anchor": "principal-components-factoring-pcf"
      },
      {
        "id": "q_l7_7",
        "segment_id": "ch3-fa-extraction",
        "order_index": 7,
        "difficulty": "intermediate",
        "question": "In the iteration history of Principal Axis Factoring (PAF), what does it mean if the algorithm requires an excessively high number of iterations (e.g. > 100) or fails to converge?",
        "options": [
          {
            "id": "a",
            "text": "It indicates that the data are perfectly suited for Factor Analysis and all observed variables share massive common variance"
          },
          {
            "id": "b",
            "text": "It signals poor data suitability: weak correlations, over-extraction of factors, or \"Heywood cases\" where estimated communality exceeds 1.0"
          },
          {
            "id": "c",
            "text": "It indicates that sample size $n$ is too large, causing the iterative algorithm to evaluate excessive degrees of freedom"
          },
          {
            "id": "d",
            "text": "It means the computer processor encountered a numerical rounding error that can be resolved by switching from SAS to SPSS"
          },
          {
            "id": "e",
            "text": "It proves that an Oblique rotation was mistakenly applied instead of an orthogonal Varimax rotation during extraction"
          },
          {
            "id": "f",
            "text": "It indicates that the true number of common factors equals the total number of observed variables in the multivariate system"
          }
        ],
        "correct_option": "b",
        "explanation": "Slide 64 notes: \"a high number of required iterations can mean that data is not appropriate for FA.\" Divergence or slow convergence often indicates unstable communality estimates or a poorly conditioned correlation matrix.",
        "section_reference": "Section 2.2: Principal Axis Factoring (PAF)",
        "section_anchor": "principal-axis-factoring-paf"
      },
      {
        "id": "q_l7_8",
        "segment_id": "ch3-fa-extraction",
        "order_index": 8,
        "difficulty": "intermediate",
        "question": "How is the residual correlation matrix $R_{\\text{res}}$ calculated, and what do its off-diagonal values represent?",
        "options": [
          {
            "id": "a",
            "text": "$R_{\\text{res}} = R + \\hat{R}$; off-diagonal values represent the cumulative total covariation captured by the extracted factor dimensions"
          },
          {
            "id": "b",
            "text": "$R_{\\text{res}} = R^{-1} \\hat{R}$; off-diagonal values represent the partial regression slopes relating indicators to factor scores"
          },
          {
            "id": "c",
            "text": "$R_{\\text{res}} = R \\times \\hat{R}$; off-diagonal values represent the joint probability density of indicator pairs under factor normality"
          },
          {
            "id": "d",
            "text": "$R_{\\text{res}} = R - \\hat{R}$; off-diagonal values represent the remaining unexplained correlation between variable pairs after factor extraction"
          },
          {
            "id": "e",
            "text": "$R_{\\text{res}} = \\text{diag}(R - \\hat{R})$; off-diagonal values are identically zero, isolating unique variances along the main diagonal"
          },
          {
            "id": "f",
            "text": "$R_{\\text{res}} = \\hat{R} - I$; off-diagonal values represent the deviation of reproduced correlations from standardized unit variances"
          }
        ],
        "correct_option": "d",
        "explanation": "The residual matrix subtracts reproduced correlations $\\hat{R} = \\Lambda\\Lambda'$ from observed correlations $R$. The off-diagonal entries represent leftover, unexplained correlations between indicators.",
        "section_reference": "Section 3: Evaluating Model Fit: RMSR",
        "section_anchor": "3-evaluating-model-fit-residual-correlation-rmsr"
      },
      {
        "id": "q_l7_9",
        "segment_id": "ch3-fa-extraction",
        "order_index": 9,
        "difficulty": "hard",
        "question": "Consider two alternative factor solutions: Model 1 ($M = 0.80Q + 0.20V$) and Model 2 ($M = 0.667Q - 0.484V$). Show that the total communality of Math ($M$) is preserved under this orthogonal rotation within rounding error.",
        "options": [
          {
            "id": "a",
            "text": "Model 1: $h_M^2 = 0.80^2 + 0.20^2 = 0.64 + 0.04 = 0.68$; Model 2: $h_M^2 = 0.667^2 + (-0.484)^2 = 0.445 + 0.234 = 0.679 \\approx 0.68$"
          },
          {
            "id": "b",
            "text": "Model 1: $h_M^2 = 0.80 + 0.20 = 1.00$; Model 2: $h_M^2 = 0.667 - 0.484 = 0.183$; communality is not preserved and changes by 0.817"
          },
          {
            "id": "c",
            "text": "Model 1: $h_M^2 = 0.80 \\times 0.20 = 0.16$; Model 2: $h_M^2 = 0.667 \\times (-0.484) = -0.323$; rotation alters the sign of communality"
          },
          {
            "id": "d",
            "text": "Model 1: $h_M^2 = \\sqrt{0.80^2 + 0.20^2} = 0.825$; Model 2: $h_M^2 = \\sqrt{0.667^2 + 0.484^2} = 0.824$; both equal the vector norm exactly"
          },
          {
            "id": "e",
            "text": "Model 1: $h_M^2 = 0.80 / 0.20 = 4.00$; Model 2: $h_M^2 = 0.667 / 0.484 = 1.378$; orthogonal rotations rescale communalities by factor slopes"
          },
          {
            "id": "f",
            "text": "Model 1: $h_M^2 = 0.68$; Model 2: $h_M^2 = 1.00$, because rotation transforms the second solution into a principal component solution"
          }
        ],
        "correct_option": "a",
        "explanation": "As proven on slides 28-32 of Chapter 3: under orthogonal rotation, total communality is strictly invariant: $h_M^2(\\text{Model 1}) = 0.64 + 0.04 = 0.68$, and $h_M^2(\\text{Model 2}) = 0.667^2 + (-0.484)^2 = 0.445 + 0.234 = 0.679 \\approx 0.68$. Both solutions explain identical total variance for variable $M$.",
        "section_reference": "Section 1.1: Factor Rotation Indeterminacy",
        "section_anchor": "factor-rotation-indeterminacy"
      },
      {
        "id": "q_l7_10",
        "segment_id": "ch3-fa-extraction",
        "order_index": 10,
        "difficulty": "hard",
        "question": "For $p = 6$ variables, how many unique off-diagonal residual correlations are evaluated in the denominator of the Root Mean Square Residual (RMSR) formula: $p(p - 1) / 2$?",
        "options": [
          {
            "id": "a",
            "text": "Exactly $6 \\times 6 = 36$ unique correlation pairs, evaluating every cell in the $6 \\times 6$ correlation matrix independently"
          },
          {
            "id": "b",
            "text": "Exactly $6 \\times (6 - 1) = 30$ pairs, excluding the 6 main diagonal elements but counting upper and lower triangles twice"
          },
          {
            "id": "c",
            "text": "Exactly $6$ unique pairs, evaluating only the principal diagonal elements that correspond to variable communalities"
          },
          {
            "id": "d",
            "text": "Exactly $(6 - 1) / 2 = 2.5$ pairs, reflecting the average degrees of freedom available across the extracted factor axes"
          },
          {
            "id": "e",
            "text": "Exactly $6 \\times (6 - 1) / 2 = 30 / 2 = 15$ unique pairs, evaluating the non-redundant off-diagonal elements in the symmetric matrix"
          },
          {
            "id": "f",
            "text": "Exactly $6^2 - 6 = 30$ pairs, subtracting the trace from the total matrix dimensions without symmetry adjustment"
          }
        ],
        "correct_option": "e",
        "explanation": "A symmetric $6 \\times 6$ matrix has $6 \\times 6 = 36$ total elements, 6 of which are diagonal entries. The remaining 30 off-diagonal elements form two symmetric triangles of $30 / 2 = 15$ unique pairwise correlations ($6 \\times 5 / 2 = 15$).",
        "section_reference": "Section 3: Evaluating Model Fit: RMSR",
        "section_anchor": "3-evaluating-model-fit-residual-correlation-rmsr"
      },
      {
        "id": "q_l7_11",
        "segment_id": "ch3-fa-extraction",
        "order_index": 11,
        "difficulty": "hard",
        "question": "In Principal Axis Factoring, what is placed on the diagonal of the \"reduced correlation matrix\" $R_r$ during each iteration?",
        "options": [
          {
            "id": "a",
            "text": "Unities ($1.0$), because correlation matrices are mathematically required to have ones on the main diagonal"
          },
          {
            "id": "b",
            "text": "Zeros ($0.0$), eliminating indicator self-correlation to focus extraction purely on off-diagonal covariances"
          },
          {
            "id": "c",
            "text": "The current estimated communalities ($h_j^2$), representing the proportion of indicator variance shared with other variables"
          },
          {
            "id": "d",
            "text": "The sample variances ($s_j^2$) of the raw unstandardized variables, preserving original physical units in the reduced matrix"
          },
          {
            "id": "e",
            "text": "The anti-image partial correlation coefficients ($a_{jj}$), measuring sampling adequacy along the principal diagonal"
          },
          {
            "id": "f",
            "text": "The eigenvalues extracted from the previous iteration, scaling each variable axis by its current characteristic root"
          }
        ],
        "correct_option": "c",
        "explanation": "The full correlation matrix has 1.0 on the diagonal (total variance). The \"reduced correlation matrix\" replaces the 1.0s with the estimated communalities $h_j^2$ (shared variance), so extraction decomposes only common variance.",
        "section_reference": "Section 2.2: Principal Axis Factoring (PAF)",
        "section_anchor": "principal-axis-factoring-paf"
      },
      {
        "id": "q_l7_12",
        "segment_id": "ch3-fa-extraction",
        "order_index": 12,
        "difficulty": "hard",
        "question": "If Model 1 and Model 2 produce identical reproduced correlation matrices $\\hat{R}$ and identical communalities $h_j^2$ through orthogonal rotation, why would a researcher strongly prefer Model 1 over Model 2?",
        "options": [
          {
            "id": "a",
            "text": "Because Model 1 was generated by PCA while Model 2 was generated by Factor Analysis, giving Model 1 higher mathematical precision"
          },
          {
            "id": "b",
            "text": "Because Model 1 has a strictly higher sample size and degrees of freedom than Model 2, reducing finite sample estimation errors"
          },
          {
            "id": "c",
            "text": "Because Model 2 produces negative communalities that violate non-negativity axioms, rendering Model 2 mathematically invalid"
          },
          {
            "id": "d",
            "text": "Because Model 1 has zero residual correlations while Model 2 has non-zero off-diagonal residuals in matrix $R_{\\text{res}}$"
          },
          {
            "id": "e",
            "text": "Because statistical software will only allow secondary regression analysis to be conducted using Model 1 factor scores"
          },
          {
            "id": "f",
            "text": "Because Model 1 exhibits \"Simple Structure\": each variable loads heavily on one factor and near zero on others, making it interpretable"
          }
        ],
        "correct_option": "f",
        "explanation": "While both models are mathematically identical in explaining data, Model 1 achieves simple structure (Math/Physics/Chemistry load heavily on Q and near zero on V; English/History/French load heavily on V and near zero on Q). This makes Model 1 readily interpretable as Quantitative vs Verbal intelligence.",
        "section_reference": "Section 1.1: Factor Rotation Indeterminacy",
        "section_anchor": "factor-rotation-indeterminacy"
      }
    ],
    "flashcards": [
      {
        "id": "fc_l7_1",
        "segment_id": "ch3-fa-extraction",
        "order_index": 1,
        "category": "Indeterminacy",
        "front": "What is the **Factor Rotation Indeterminacy** in Factor Analysis?",
        "back": "For any orthogonal rotation matrix $T$, $\\Lambda^* = \\Lambda T$ reproduces the exact same correlation matrix $\\hat{R} = \\Lambda\\Lambda'$ and identical communalities. Infinitely many mathematically equivalent solutions exist.",
        "section_reference": "Section 1.1: Factor Rotation Indeterminacy",
        "section_anchor": "factor-rotation-indeterminacy"
      },
      {
        "id": "fc_l7_2",
        "segment_id": "ch3-fa-extraction",
        "order_index": 2,
        "category": "Indeterminacy",
        "front": "What is the **Communality Estimation Circularity** problem?",
        "back": "To estimate factor loadings, prior communalities are needed; but to calculate communalities, factor loadings are needed. Solved via iterative algorithms like PAF.",
        "section_reference": "Section 1.2: Communality Circularity",
        "section_anchor": "communality-circularity"
      },
      {
        "id": "fc_l7_3",
        "segment_id": "ch3-fa-extraction",
        "order_index": 3,
        "category": "Extraction",
        "front": "What is **Principal Components Factoring (PCF)**?",
        "back": "Initial communalities are set to $1.0$ (standard PCA on correlation matrix $R$). The $m$ retained components are relabeled as factors. It is essentially PCA disguised as Factor Analysis.",
        "section_reference": "Section 2.1: Principal Components Factoring (PCF)",
        "section_anchor": "principal-components-factoring-pcf"
      },
      {
        "id": "fc_l7_4",
        "segment_id": "ch3-fa-extraction",
        "order_index": 4,
        "category": "Extraction",
        "front": "How does **Principal Axis Factoring (PAF)** work?",
        "back": "An iterative procedure that replaces the diagonal of $R$ with estimated communalities ($R_r$), extracts factors, re-estimates communalities, and repeats until convergence ($\\Delta < 0.001$).",
        "section_reference": "Section 2.2: Principal Axis Factoring (PAF)",
        "section_anchor": "principal-axis-factoring-paf"
      },
      {
        "id": "fc_l7_5",
        "segment_id": "ch3-fa-extraction",
        "order_index": 5,
        "category": "Diagnostics",
        "front": "What is the **Residual Correlation Matrix ($R_{\\text{res}}$)**?",
        "back": "$$R_{\\text{res}} = R - \\hat{R}$$\nThe difference between observed correlations $R$ and model-reproduced correlations $\\hat{R} = \\Lambda\\Lambda'$. Off-diagonal elements should be near zero.",
        "section_reference": "Section 3: Evaluating Model Fit: Residual Correlation",
        "section_anchor": "3-evaluating-model-fit-residual-correlation-rmsr"
      },
      {
        "id": "fc_l7_6",
        "segment_id": "ch3-fa-extraction",
        "order_index": 6,
        "category": "Diagnostics",
        "front": "What is the **Root Mean Square Residual (RMSR)** formula and benchmark?",
        "back": "$$\\text{RMSR} = \\sqrt{\\frac{\\sum \\sum_{j < i} \\text{res}_{ij}^2}{p(p - 1)/2}}$$\nMeasures average residual correlation. Values **below 0.08** indicate a good factor model fit.",
        "section_reference": "Section 3: Evaluating Model Fit: RMSR",
        "section_anchor": "3-evaluating-model-fit-residual-correlation-rmsr"
      },
      {
        "id": "fc_l7_7",
        "segment_id": "ch3-fa-extraction",
        "order_index": 7,
        "category": "Invariance",
        "front": "What quantities remain strictly invariant under orthogonal factor rotation?",
        "back": "1. Total communality ($h_j^2$) of each variable.\n2. Total unique variance ($\\psi_j$) of each variable.\n3. The model-reproduced correlation matrix ($\\hat{R}$).",
        "section_reference": "Section 1.1: Factor Rotation Indeterminacy",
        "section_anchor": "factor-rotation-indeterminacy"
      },
      {
        "id": "fc_l7_8",
        "segment_id": "ch3-fa-extraction",
        "order_index": 8,
        "category": "Comparison",
        "front": "When do PCF and PAF yield nearly identical factor solutions?",
        "back": "When the dataset has a **large number of variables ($p > 30$)** and **high communalities ($h^2 > 0.60$)**. With fewer variables, differences become substantial.",
        "section_reference": "Section 2.2: Principal Axis Factoring (PAF)",
        "section_anchor": "principal-axis-factoring-paf"
      }
    ]
  },
  {
    "segment": {
      "id": "ch3-fa-rotation-evaluation",
      "discipline_id": "data-analysis",
      "title": "Factor Analysis: Sampling Adequacy, Rotations & FA vs PCA",
      "subtitle": "KMO index, anti-image matrices, Varimax vs Quartimax, oblique rotations, and formative vs reflective models.",
      "order_index": 7,
      "summary_markdown": "# Factor Analysis: Sampling Adequacy, Rotations & Evaluation\n\n## 1. Testing Data Suitability for Factor Analysis\nFactor analysis requires sufficient sample size and substantial intercorrelations among variables. If variables are largely independent, factor analysis is inappropriate.\n\n### Sample Size Guidelines\nAs a rule of thumb, the sample size should be at least $n \\ge 100$, and the ratio of observations to variables should be at least $5:1$ (ideally $10:1$ or higher).\n\n### Bartlett's Test of Sphericity\nBartlett's test evaluates the null hypothesis that the population correlation matrix is an identity matrix ($H_0: R = I$). Under $H_0$, all off-diagonal correlations are zero. If the test statistic is statistically significant ($p < 0.05$), the null hypothesis is rejected, confirming that meaningful correlations exist among variables.\n\n### Kaiser-Meyer-Olkin (KMO) Measure of Sampling Adequacy\nThe KMO index compares the magnitudes of observed correlation coefficients to partial correlation coefficients:\n$$\\text{KMO} = \\frac{\\sum \\sum_{j \\neq k} r_{jk}^2}{\\sum \\sum_{j \\neq k} r_{jk}^2 + \\sum \\sum_{j \\neq k} a_{jk}^2}$$\nwhere $a_{jk}$ are the anti-image partial correlations (the correlation between variables $j$ and $k$ after controlling for all other variables). If common factors exist, partial correlations should be small, driving KMO toward 1.0.\n\nKaiser's evaluation benchmarks:\n- $\\ge 0.90$: Marvelous\n- $\\ge 0.80$: Meritorious\n- $\\ge 0.70$: Middling\n- $\\ge 0.60$: Mediocre\n- $< 0.50$: Unacceptable (data unsuitable for factor analysis)\n\n## 2. Factor Rotation Techniques\nInitial unrotated factor extraction places the first factor through the center of the correlation cluster, causing most variables to load moderately on factor 1. Rotation aims to achieve Thurstone's Simple Structure, where each factor has few large loadings and each variable loads strongly on only one factor.\n\n### Orthogonal Rotations\nOrthogonal rotations maintain a $90^\\circ$ angle between factor axes, ensuring that the rotated factors remain uncorrelated.\n- Varimax: The most widely used orthogonal rotation. It maximizes the variance of squared loadings across variables within each factor, cleaning up columns of the loading matrix so that loadings are either near $\\pm 1.0$ or near $0.0$.\n- Quartimax: Maximizes the variance of squared loadings across rows, simplifying the variables.\n\n### Oblique Rotations\nOblique rotations relax the orthogonality constraint, allowing factors to correlate if doing so provides a more realistic representation of reality.\n- Promax and Direct Oblimin are standard oblique methods.\n- In oblique solutions, the single factor loading matrix splits into two distinct matrices:\n  1. Factor Pattern Matrix: Contains partial regression weights of variables on factors, isolating unique contributions.\n  2. Factor Structure Matrix: Contains simple Pearson correlations between variables and factors, including shared covariance among correlated factors.\n\n## 3. Systematic Summary: PCA vs. Factor Analysis\n- Mathematical Nature: PCA is a descriptive, variance-maximizing data transformation. Factor Analysis is a probabilistic latent variable model.\n- Analyzed Variance: PCA analyzes $100\\%$ of total observed variance. Factor analysis analyzes only common shared variance (communality), discarding unique error.\n- Indicator Causality: In PCA, indicators combine to form the component (formative). In FA, the underlying latent construct causes the observed responses (reflective).\n- Diagonal of Input Matrix: PCA places $1.0$ on the diagonal of $R$. Principal Axis Factoring places communality estimates ($R_j^2$) on the diagonal.\n- Exploratory vs Confirmatory: Exploratory Factor Analysis (EFA) uncovers latent structure without prior hypotheses. Confirmatory Factor Analysis (CFA) tests pre-specified factor structures using structural equation modeling (SEM) fit indices."
    },
    "questions": [
      {
        "id": "q_l8_1",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 1,
        "difficulty": "easy",
        "question": "What is the benchmark interpretation of an overall Kaiser-Meyer-Olkin (KMO) measure of sampling adequacy of 0.81?",
        "options": [
          {
            "id": "a",
            "text": "\"Unacceptable\", indicating severe multicollinearity; the researcher must immediately collect a larger sample or abandon the analysis"
          },
          {
            "id": "b",
            "text": "\"Meritorious\" (Good); the correlation matrix possesses strong shared variance, making it highly appropriate for Factor Analysis"
          },
          {
            "id": "c",
            "text": "\"Miserable\", indicating that partial correlations dominate bivariate correlations, requiring variable transformation"
          },
          {
            "id": "d",
            "text": "\"Barely Acceptable\", suggesting that only a single principal component can be extracted from the correlation matrix"
          },
          {
            "id": "e",
            "text": "\"Degenerate\", signaling that the correlation matrix is singular and matrix inversion will encounter arithmetic division by zero"
          },
          {
            "id": "f",
            "text": "\"Perfect\", demonstrating that all observed variables are mutually uncorrelated and have reached mathematical orthogonality"
          }
        ],
        "correct_option": "b",
        "explanation": "According to Kaiser's established criteria: $\\ge 0.90$ is Marvelous, $0.80 - 0.89$ is Meritorious, $0.70 - 0.79$ is Middling, $0.60 - 0.69$ is Mediocre, and $< 0.50$ is Unacceptable. A value of $0.81$ is Meritorious.",
        "section_reference": "Section 1.3: Kaiser-Meyer-Olkin (KMO)",
        "section_anchor": "kaiser-meyer-olkin-kmo-measure-of-sampling-adequacy"
      },
      {
        "id": "q_l8_2",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 2,
        "difficulty": "easy",
        "question": "Which orthogonal factor rotation method is the most widely used because it simplifies the columns (factors) by driving loadings toward $\\pm 1.0$ or $0.0$?",
        "options": [
          {
            "id": "a",
            "text": "Quartimax rotation, which simplifies rows (variables) by driving loadings toward unity on a single general factor"
          },
          {
            "id": "b",
            "text": "Equamax rotation, which balances simplicity equally across rows and columns without enforcing factor orthogonality"
          },
          {
            "id": "c",
            "text": "Promax rotation, which allows factors to correlate freely by raising orthogonal loadings to an exponential power $k$"
          },
          {
            "id": "d",
            "text": "Varimax rotation, which simplifies columns (factors) by maximizing loading variances, driving loadings toward $\\pm 1.0$ or $0.0$"
          },
          {
            "id": "e",
            "text": "Oblimin rotation, which minimizes cross-products between factor structures using a non-zero obliqueness parameter $\\gamma$"
          },
          {
            "id": "f",
            "text": "Gram-Schmidt orthogonalization, which forces factor vectors to align sequentially with original coordinate axes"
          }
        ],
        "correct_option": "d",
        "explanation": "Varimax rotation (Kaiser, 1958) is the most popular orthogonal rotation method. It maximizes the variance of squared loadings across columns, making loadings as close as possible to 1.0 (or -1.0) and 0.0.",
        "section_reference": "Section 2.1: Orthogonal Rotations",
        "section_anchor": "orthogonal-rotations"
      },
      {
        "id": "q_l8_3",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 3,
        "difficulty": "easy",
        "question": "What is the primary operational difference between an Orthogonal rotation and an Oblique rotation?",
        "options": [
          {
            "id": "a",
            "text": "Orthogonal rotations enforce a 90-degree angle so factors remain uncorrelated; Oblique rotations allow angles $< 90^\\circ$, permitting factor correlations"
          },
          {
            "id": "b",
            "text": "Orthogonal rotations eliminate indicator communalities, while Oblique rotations preserve both communality and total system variance across all dimensions"
          },
          {
            "id": "c",
            "text": "Orthogonal rotations can only be executed in SAS Base PROC FACTOR, while Oblique rotations are formulated exclusively for Python scikit-learn factor libraries"
          },
          {
            "id": "d",
            "text": "Orthogonal rotations require observed variables to be measured on nominal scales, while Oblique rotations require continuous ratio data"
          },
          {
            "id": "e",
            "text": "Orthogonal rotations reduce sample size by half, while Oblique rotations preserve all $n$ observation records throughout estimation"
          },
          {
            "id": "f",
            "text": "Oblique rotations always produce negative eigenvalues that distort the calculation of cumulative explained variance percentages"
          }
        ],
        "correct_option": "a",
        "explanation": "Orthogonal rotations (Varimax, Quartimax) maintain strict 90-degree perpendicularity between factor axes, enforcing zero factor correlation. Oblique rotations (Promax, Oblimin) allow axes to intersect at arbitrary angles, reflecting real-world correlation between latent traits.",
        "section_reference": "Section 2: Factor Rotation Techniques",
        "section_anchor": "2-factor-rotation-techniques"
      },
      {
        "id": "q_l8_4",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 4,
        "difficulty": "easy",
        "question": "What is the fundamental difference between Exploratory Factor Analysis (EFA) and Confirmatory Factor Analysis (CFA)?",
        "options": [
          {
            "id": "a",
            "text": "EFA is restricted to small exploratory samples ($n < 50$), whereas CFA is formulated strictly for large-scale confirmation datasets ($n > 1,000$ observations)"
          },
          {
            "id": "b",
            "text": "EFA requires all variables to be measured on metric ratio scales, while CFA is designed exclusively for nonmetric qualitative rankings"
          },
          {
            "id": "c",
            "text": "EFA analyzes standardized correlation matrices while CFA requires unstandardized covariance matrices, producing non-comparable factor loading parameter estimates"
          },
          {
            "id": "d",
            "text": "There is zero theoretical difference; EFA and CFA are alternative software brand names for the same Principal Components algorithm"
          },
          {
            "id": "e",
            "text": "EFA explores data without prior theory to discover factors; CFA tests an explicit, theory-driven hypothesis specifying which variables load on which factors"
          },
          {
            "id": "f",
            "text": "EFA always extracts orthogonal uncorrelated factors, whereas CFA requires common factors to always be correlated by assumption"
          }
        ],
        "correct_option": "e",
        "explanation": "In EFA, the researcher has no strict prior model and allows the data to reveal the number of factors and loading patterns. In CFA, the researcher specifies exact factor-indicator links upfront based on theory and empirically tests the model fit.",
        "section_reference": "Section 1: Testing Data Suitability",
        "section_anchor": "1-testing-data-suitability-for-factor-analysis"
      },
      {
        "id": "q_l8_5",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 5,
        "difficulty": "intermediate",
        "question": "Why does Quartimax rotation often fail to achieve a satisfactory simple structure in multi-factor studies?",
        "options": [
          {
            "id": "a",
            "text": "Because it forces all indicator communalities to equal zero, destroying the underlying common factor variance decomposition in the estimated factor model"
          },
          {
            "id": "b",
            "text": "Because it requires extracted factors to be correlated (oblique), introducing severe multicollinearity into subsequent predictive regression equations"
          },
          {
            "id": "c",
            "text": "Because it simplifies rows rather than columns, often producing one massive general factor with high loadings across all variables, obscuring sub-dimensions"
          },
          {
            "id": "d",
            "text": "Because it inverts the mathematical sign of all extracted eigenvalues, converting positive variances into negative quantities"
          },
          {
            "id": "e",
            "text": "Because it violates the metric triangle inequality whenever variables have different standard deviations in empirical sample data"
          },
          {
            "id": "f",
            "text": "Because it is mathematically impossible to compute Quartimax rotations on datasets containing more than three observed indicators"
          }
        ],
        "correct_option": "c",
        "explanation": "Quartimax maximizes the variance of squared loadings across rows. Because the first factor accounts for the largest proportion of total variance, Quartimax often causes almost all variables to load heavily on Factor 1, creating a single general factor.",
        "section_reference": "Section 2.1: Orthogonal Rotations",
        "section_anchor": "orthogonal-rotations"
      },
      {
        "id": "q_l8_6",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 6,
        "difficulty": "intermediate",
        "question": "In the formula for the Kaiser-Meyer-Olkin (KMO) index, what do the terms $a_{jk}$ represent, and what values should they have for data to be appropriate for Factor Analysis?",
        "options": [
          {
            "id": "a",
            "text": "$a_{jk}$ are the extracted eigenvalues; they should all exceed 1.0 to satisfy the Kaiser retention criterion in Correlation PCA"
          },
          {
            "id": "b",
            "text": "$a_{jk}$ are sample degrees of freedom; they should equal $n - 1$ to ensure unbiased estimation of the reduced correlation matrix"
          },
          {
            "id": "c",
            "text": "$a_{jk}$ are standardized indicator sample means; they must equal 0.0 to ensure data are properly centered at the coordinate origin"
          },
          {
            "id": "d",
            "text": "$a_{jk}$ are individual observation factor scores; they must follow a standard normal distribution with mean zero and unit variance"
          },
          {
            "id": "e",
            "text": "$a_{jk}$ are Euclidean distances between variable vector endpoints in observation space; they should all equal 1.0 under orthogonality"
          },
          {
            "id": "f",
            "text": "$a_{jk}$ are anti-image partial correlations; they should be near zero because high partial correlations indicate unique rather than common variance"
          }
        ],
        "correct_option": "f",
        "explanation": "$a_{jk}$ are the anti-image correlations (negative partial correlations controlling for all other variables). If common factors drive associations, partial correlations should vanish, making the denominator close to the numerator and driving KMO toward 1.0.",
        "section_reference": "Section 1.3: Kaiser-Meyer-Olkin (KMO)",
        "section_anchor": "kaiser-meyer-olkin-kmo-measure-of-sampling-adequacy"
      },
      {
        "id": "q_l8_7",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 7,
        "difficulty": "intermediate",
        "question": "When performing an Oblique factor rotation (e.g. Promax), software reports both a \"Pattern Matrix\" and a \"Structure Matrix\". What is the difference between these two matrices?",
        "options": [
          {
            "id": "a",
            "text": "Pattern matrix contains extracted eigenvalues; structure matrix contains the eigenvectors derived from spectral decomposition"
          },
          {
            "id": "b",
            "text": "Pattern matrix contains unique regression weights of factors on variables; Structure matrix contains simple correlations between variables and factors"
          },
          {
            "id": "c",
            "text": "Pattern matrix is formulated for metric ratio scales; structure matrix is designed exclusively for nonmetric categorical cross-tabulations"
          },
          {
            "id": "d",
            "text": "Pattern matrix contains residual correlations $R_{\\text{res}}$; structure matrix contains reproduced correlation coefficients $\\hat{R}$"
          },
          {
            "id": "e",
            "text": "Pattern matrix is computed prior to extraction; structure matrix is computed only after completing iterative communality convergence"
          },
          {
            "id": "f",
            "text": "Pattern and structure matrices are identical in oblique solutions, differing only by an arbitrary constant reflection multiplier of $-1$"
          }
        ],
        "correct_option": "b",
        "explanation": "Because oblique factors correlate, the direct unique contribution of a factor (pattern loading, a standardized regression beta) differs from the total linear association (structure loading, the bivariate correlation between indicator and factor).",
        "section_reference": "Section 2.2: Oblique Rotations",
        "section_anchor": "oblique-rotations"
      },
      {
        "id": "q_l8_8",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 8,
        "difficulty": "intermediate",
        "question": "If an individual variable has an individual KMO value of 0.42 in the anti-image correlation output, what action should the analyst take?",
        "options": [
          {
            "id": "a",
            "text": "Double the empirical sample size $n$ and re-estimate the factor model immediately to inflate the variable's degrees of freedom"
          },
          {
            "id": "b",
            "text": "Apply an orthogonal Quartimax rotation to force the variable's communality to unity ($h_j^2 = 1.0$), eliminating its unique variance"
          },
          {
            "id": "c",
            "text": "Recode the continuous variable into an ordinal 5-point ranking to reduce measurement error in the sample correlation matrix"
          },
          {
            "id": "d",
            "text": "Consider dropping this variable from the analysis; an individual KMO below 0.50 (\"unacceptable\") indicates it does not share common variance with others"
          },
          {
            "id": "e",
            "text": "Take no action; individual KMO values are purely decorative diagnostic indicators that have zero mathematical impact on factor solutions"
          },
          {
            "id": "f",
            "text": "Subtract the variable from the multivariate centroid to force its partial correlations to zero in the anti-image matrix"
          }
        ],
        "correct_option": "d",
        "explanation": "As slide 62 notes: \"using individual KMO, one can delete those variables in which this value is lower.\" An individual KMO below 0.50 is classified as Unacceptable, indicating the variable shares insufficient common variance with the remaining indicators.",
        "section_reference": "Section 1.3: Kaiser-Meyer-Olkin (KMO)",
        "section_anchor": "kaiser-meyer-olkin-kmo-measure-of-sampling-adequacy"
      },
      {
        "id": "q_l8_9",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 9,
        "difficulty": "hard",
        "question": "Suppose an analyst is deciding whether to use PCA or Factor Analysis for a banking study. The goal is to construct a composite index of customer creditworthiness by combining debt ratio, income, and past delinquencies for a credit scoring scorecard. Which technique is theoretically appropriate, and why?",
        "options": [
          {
            "id": "a",
            "text": "PCA, because the objective is data reduction and formative index construction (combining all indicator variance into a practical composite score)"
          },
          {
            "id": "b",
            "text": "Factor Analysis, because creditworthiness is an unobservable nonmetric construct that requires iterative Maximum Likelihood extraction"
          },
          {
            "id": "c",
            "text": "Correspondence Analysis, because all banking and financial ratio indicators are nonmetric qualitative contingency classifications"
          },
          {
            "id": "d",
            "text": "Factor Analysis, because commercial credit scoring requires identifying unique measurement error and specific variance in balance sheets"
          },
          {
            "id": "e",
            "text": "Neither technique is valid; banking credit scores must be constructed exclusively using Multidimensional Scaling (MDS) similarity maps"
          },
          {
            "id": "f",
            "text": "PCA, because PCA eliminates degrees of freedom constraints and guarantees that all component scores will be normally distributed"
          }
        ],
        "correct_option": "a",
        "explanation": "In credit scoring, debt, income, and delinquencies combine to form an index (formative perspective). The goal is mathematical variance summarization and dimension reduction, making PCA the proper tool. Factor Analysis would assume that an unobservable \"creditworthiness\" trait generates debt and delinquencies as reflective symptoms.",
        "section_reference": "Section 3: Systematic Summary: PCA vs. Factor Analysis",
        "section_anchor": "3-systematic-summary-pca-vs-factor-analysis"
      },
      {
        "id": "q_l8_10",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 10,
        "difficulty": "hard",
        "question": "In a psychology study measuring customer trust, three survey questions are designed to reflect the construct: \"I feel safe using this platform,\" \"This platform is reliable,\" and \"I trust this platform.\" Why is Factor Analysis theoretically required here rather than PCA?",
        "options": [
          {
            "id": "a",
            "text": "Because PCA cannot mathematically analyze survey items that are measured on 5-point Likert scales with uniform category intervals"
          },
          {
            "id": "b",
            "text": "Because Factor Analysis guarantees that 100% of total indicator variance will be explained by the extracted common factor dimensions"
          },
          {
            "id": "c",
            "text": "Because psychological trust can only be measured using Euclidean distance metrics in multidimensional observation space"
          },
          {
            "id": "d",
            "text": "Because PCA always extracts oblique correlated components by default, violating statistical orthogonality across latent dimensions"
          },
          {
            "id": "e",
            "text": "Because survey items are reflective indicators of an unobservable latent construct (Trust); FA isolates the shared common factor and separates unique error"
          },
          {
            "id": "f",
            "text": "Because psychological constructs are constrained by measurement theory to have eigenvalues equal to the number of survey questions"
          }
        ],
        "correct_option": "e",
        "explanation": "Trust is an unobservable latent mental state. The survey questions are reflective manifestations of that trait. Each question contains unique wording error and specific variance. Factor Analysis separates this unique error $\\psi_j$ from the shared common factor variance $h_j^2$.",
        "section_reference": "Section 3: Systematic Summary: PCA vs. Factor Analysis",
        "section_anchor": "3-systematic-summary-pca-vs-factor-analysis"
      },
      {
        "id": "q_l8_11",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 11,
        "difficulty": "hard",
        "question": "Under what mathematical conditions will the Kaiser-Meyer-Olkin (KMO) statistic approach its theoretical maximum of 1.00?",
        "options": [
          {
            "id": "a",
            "text": "When all pairwise bivariate correlations $r_{jk}$ approach zero, indicating that observed variables share negligible linear association in empirical sample data"
          },
          {
            "id": "b",
            "text": "When the number of extracted common factors equals the total number of observations minus one: $m = n - 1$, saturating the model"
          },
          {
            "id": "c",
            "text": "When anti-image partial correlations $a_{jk}$ approach zero relative to bivariate correlations: $\\sum\\sum r_{jk}^2 / (\\sum\\sum r_{jk}^2 + \\sum\\sum a_{jk}^2) \\to 1.0$"
          },
          {
            "id": "d",
            "text": "When the determinant of the empirical correlation matrix equals zero, indicating perfect multicollinearity and complete redundancy across all observed indicators"
          },
          {
            "id": "e",
            "text": "When all variables have identical sample variances in Covariance PCA, equalizing diagonal weights across the spectral decomposition"
          },
          {
            "id": "f",
            "text": "When the Root Mean Square Residual (RMSR) reaches 1.0, indicating complete average discrepancy between empirical and model-reproduced correlation matrices"
          }
        ],
        "correct_option": "c",
        "explanation": "In the KMO formula, $\\text{KMO} = \\frac{\\sum r^2}{\\sum r^2 + \\sum a^2}$. If partial correlations $a_{jk} \\to 0$, then $\\sum a^2 \\to 0$, so $\\text{KMO} \\to \\frac{\\sum r^2}{\\sum r^2 + 0} = 1.00$. This indicates that zero-order correlations are completely accounted for by the underlying factors.",
        "section_reference": "Section 1.3: Kaiser-Meyer-Olkin (KMO)",
        "section_anchor": "kaiser-meyer-olkin-kmo-measure-of-sampling-adequacy"
      },
      {
        "id": "q_l8_12",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 12,
        "difficulty": "hard",
        "question": "In SAS, the following procedure is executed:\n```sas\nProc Factor Method=prinit Rotate=varimax Corr Scree MSA Residuals;\n   Var M P C E H F;\nRun;\n```\nWhat specific algorithms and outputs are requested by `Method=prinit`, `Rotate=varimax`, `MSA`, and `Residuals`?",
        "options": [
          {
            "id": "a",
            "text": "Principal Components Analysis on the covariance matrix; Quartimax factor rotation; Mean Square Analysis; and Bartlett sphericity test"
          },
          {
            "id": "b",
            "text": "Maximum Likelihood extraction; Oblique Promax rotation; Multiple Scale Analysis; and Durbin-Watson autocorrelation residual diagnostics"
          },
          {
            "id": "c",
            "text": "Alpha factor extraction; no rotation; Mean Standardized Association matrix; and Ordinary Least Squares parameter estimates"
          },
          {
            "id": "d",
            "text": "Correspondence analysis for nonmetric tables; Chi-square rotation; Multivariate Sampling Assessment; and leverage statistics"
          },
          {
            "id": "e",
            "text": "Ordinary least squares regression; Quartimax rotation; Kaiser-Meyer-Olkin sampling test; and collinearity tolerance diagnostic tables"
          },
          {
            "id": "f",
            "text": "Principal Axis Factoring (Iterated Principal Factor); Varimax orthogonal rotation; Kaiser-Meyer-Olkin MSA; and the residual correlation matrix $R - \\hat{R}$"
          }
        ],
        "correct_option": "f",
        "explanation": "As shown on slide 51 of Chapter 3: `Method=prinit` specifies iterated principal axis factoring (PAF); `Rotate=varimax` performs Varimax orthogonal rotation; `MSA` requests Kaiser's Measure of Sampling Adequacy (overall and individual KMO); `Residuals` requests the residual correlation matrix and RMSR.",
        "section_reference": "Section 2: Factor Rotation Techniques",
        "section_anchor": "2-factor-rotation-techniques"
      }
    ],
    "flashcards": [
      {
        "id": "fc_l8_1",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 1,
        "category": "Diagnostics",
        "front": "What is the **Kaiser-Meyer-Olkin (KMO)** index, and what does it measure?",
        "back": "$$\\text{KMO} = \\frac{\\sum r^2}{\\sum r^2 + \\sum a^2}$$\nMeasures sampling adequacy and data suitability for Factor Analysis by comparing zero-order correlations to anti-image partial correlations.",
        "section_reference": "Section 1.3: Kaiser-Meyer-Olkin (KMO)",
        "section_anchor": "kaiser-meyer-olkin-kmo-measure-of-sampling-adequacy"
      },
      {
        "id": "fc_l8_2",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 2,
        "category": "Benchmarks",
        "front": "What are Kaiser's benchmarks for evaluating the **KMO index**?",
        "back": "- $\\ge 0.90$: Marvelous\n- $0.80 - 0.89$: Meritorious\n- $0.70 - 0.79$: Middling\n- $0.60 - 0.69$: Mediocre (tolerable minimum)\n- $< 0.50$: Unacceptable (abort FA).",
        "section_reference": "Section 1.3: Kaiser-Meyer-Olkin (KMO)",
        "section_anchor": "kaiser-meyer-olkin-kmo-measure-of-sampling-adequacy"
      },
      {
        "id": "fc_l8_3",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 3,
        "category": "Diagnostics",
        "front": "What is the **Anti-Image Correlation Matrix**, and what should its off-diagonal values be?",
        "back": "Contains negative partial correlations between variables controlling for all others.\nFor good factor data, off-diagonal values should be **very small (near zero)**.",
        "section_reference": "Section 1.3: Kaiser-Meyer-Olkin (KMO)",
        "section_anchor": "kaiser-meyer-olkin-kmo-measure-of-sampling-adequacy"
      },
      {
        "id": "fc_l8_4",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 4,
        "category": "Rotations",
        "front": "What is the objective of **Varimax Rotation**, and why is it preferred?",
        "back": "Simplifies **columns (factors)** by maximizing the variance of squared loadings. Pushes loadings toward $\\pm 1.0$ or $0.0$, creating clear, distinct factor groupings.",
        "section_reference": "Section 2.1: Orthogonal Rotations",
        "section_anchor": "orthogonal-rotations"
      },
      {
        "id": "fc_l8_5",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 5,
        "category": "Rotations",
        "front": "What is the main drawback of **Quartimax Rotation**?",
        "back": "It simplifies **rows (variables)** and tends to create one massive **general factor** where all variables load heavily, hindering multi-factor interpretation.",
        "section_reference": "Section 2.1: Orthogonal Rotations",
        "section_anchor": "orthogonal-rotations"
      },
      {
        "id": "fc_l8_6",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 6,
        "category": "Rotations",
        "front": "When should an analyst use **Oblique Rotations** (Promax, Oblimin)?",
        "back": "When underlying theoretical constructs are naturally expected to correlate in the real world (e.g. quantitative and verbal abilities).",
        "section_reference": "Section 2.2: Oblique Rotations",
        "section_anchor": "oblique-rotations"
      },
      {
        "id": "fc_l8_7",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 7,
        "category": "Comparison",
        "front": "Summarize the core differences between **PCA** and **Factor Analysis**.",
        "back": "- **PCA**: Analyzes total observed variance; formative index creation ($PC = w'X$); mathematical rotation.\n- **FA**: Analyzes shared common variance ($h^2$); reflective latent modeling ($X = \\Lambda\\xi + \\varepsilon$); estimates unique error.",
        "section_reference": "Section 3: Systematic Summary: PCA vs. Factor Analysis",
        "section_anchor": "3-systematic-summary-pca-vs-factor-analysis"
      },
      {
        "id": "fc_l8_8",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 8,
        "category": "Comparison",
        "front": "What is the difference between **Exploratory (EFA)** and **Confirmatory (CFA)** Factor Analysis?",
        "back": "- **EFA**: Data-driven search to discover factor structure without prior constraints.\n- **CFA**: Theory-driven hypothesis test of an explicit pre-specified factor loading model using SEM.",
        "section_reference": "Section 1: Testing Data Suitability",
        "section_anchor": "1-testing-data-suitability-for-factor-analysis"
      }
    ]
  }
];
