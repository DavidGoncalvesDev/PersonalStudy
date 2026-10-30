// Part 1: Levels 1 to 4 of Data Analysis curriculum

export const levelsPart1 = [
  {
    "segment": {
      "id": "ch1-scales-methods",
      "discipline_id": "data-analysis",
      "title": "Measurement Scales & Methods Classification",
      "subtitle": "Nonmetric vs metric variables, dummy variable coding, and dependence vs interdependence techniques.",
      "order_index": 1,
      "summary_markdown": "# Measurement Scales & Multivariate Methods Classification\n\n## 1. The Nature of Data Analysis\nData analysis is a structured process of inspecting, cleaning, transforming, and modeling empirical observations with the express purpose of discovering actionable patterns, suggesting scientific conclusions, and supporting strategic decision-making. \n\nIn multivariate statistical inquiry, problems are typically formalized through one or more null hypotheses ($H_0$). Empirical data collected from a sample of observations are then evaluated to make a probabilistic decision regarding whether to reject or fail to reject these hypotheses. Multivariate data analysis plays a central role in modern business analytics, engineering, and empirical science by simultaneously analyzing relationships across multiple variables.\n\n## 2. Measurement Scales: The Foundation of Every Analysis\nMeasurement is the operational process by which numbers or symbols are assigned to characteristics or properties of objects according to specific rules. For instance, customers in a retail banking database may be characterized by age, education level, annual income, credit score, brand sentiment, and transaction frequency. Statistical literature classifies measurement scales into two broad categories: Nonmetric scales (qualitative) and Metric scales (quantitative).\n\n### Nominal Scale\nNumbers or symbols in a nominal scale serve purely as arbitrary labels or identifiers to categorize observations into mutually exclusive and exhaustive groups. For example, gender may be coded as 0 for male and 1 for female, or geographic regions may be coded as 1 for North, 2 for South, and 3 for Center.\n\nThe assigned numerical values have zero quantitative meaning. It is mathematically invalid to compute arithmetic averages or standard deviations of nominal variables. Permissible descriptive statistics include the mode, frequency counts, percentage distributions, and contingency table cross-tabulations.\n\nWhen representing a nominal variable with $k$ categories in econometric or multivariate regression models, exactly $k - 1$ binary dummy variables are required. For example, an occupation variable with 3 categories (Commercial, Technical, Unemployed) requires $3 - 1 = 2$ dummy variables ($D_1$ and $D_2$). The omitted category serves as the baseline reference group against which the others are compared.\n\n### Ordinal Scale\nOn an ordinal scale, observations are ordered or ranked according to the degree of an attribute they possess. A common example is ranking four car brands in order of personal preference ($1 = \\text{Most preferred}$, $2 = \\text{Second}$, $3 = \\text{Third}$, $4 = \\text{Least preferred}$).\n\nCrucially, successive categories do not represent equal intervals of the measured attribute. Although brand A is ranked 1 and brand B is ranked 2, the difference in perceived utility between ranks 1 and 2 is not necessarily equal to the difference between ranks 2 and 3. Permissible statistics include the median, mode, percentiles, and non-parametric rank-order statistics such as Spearman's rank correlation coefficient ($r_s$).\n\n### Interval Scale\nOn an interval scale, numerical differences between scale points represent genuinely equal amounts of the measured property. Familiar examples include temperature measured in Celsius ($^\\circ\\text{C}$) or Fahrenheit ($^\\circ\\text{F}$), as well as standard 5-point Likert agreement scales ranging from $1 = \\text{Strongly Disagree}$ to $5 = \\text{Strongly Agree}$.\n\nThe zero point on an interval scale is arbitrary and does not signify the complete absence of the characteristic. For instance, $0^\\circ\\text{C}$ does not mean \"absence of heat\" (it is simply the freezing point of water). Consequently, ratio comparisons are invalid: $20^\\circ\\text{C}$ is not twice as warm as $10^\\circ\\text{C}$. Properties of an interval scale are preserved under any positive linear transformation:\n$$Y_t = a + b Y_0 \\quad (b > 0)$$\nPermissible statistics include the arithmetic mean, standard deviation, variance, Pearson correlation coefficient, and regression analysis. However, ratio-based statistics such as the Coefficient of Variation ($CV = s / \\bar{x}$) are invalid because the arbitrary shift constant $a$ changes the ratio.\n\n### Ratio Scale\nA ratio scale possesses all properties of an interval scale, with the critical addition of a natural, absolute, immutable zero base value that signifies the absolute absence of the measured property. Typical examples include age, salary, revenue, unit sales, distance, weight, and elapsed time. A salary of $0 means zero monetary compensation, and an age of $0$ is the moment of birth.\n\nBecause an absolute origin exists, meaningful ratio comparisons can be made: a firm earning $100,000 earns exactly twice as much as a firm earning $50,000. Under a ratio scale, only similarity transformations (multiplying by a positive constant) are permissible:\n$$Y_t = b Y_0 \\quad (b > 0)$$\nAdding a non-zero constant ($a \\neq 0$) is forbidden because it would destroy the absolute zero reference point. All statistical techniques are valid on ratio data, including the geometric mean, harmonic mean, ratios, and the Coefficient of Variation.\n\n## 3. Classification of Multivariate Methods\nMultivariate techniques analyze datasets consisting of $n$ observations across $p$ variables. They are fundamentally split into two methodological paradigms based on variable roles.\n\n### Dependence Methods\nDependence methods are used when variables can be conceptually divided into two distinct groups: Independent variables (predictors) and Dependent variables (criterion). The objective is to assess the presence, strength, and pattern of causal or predictive relationships.\n\nThey are categorized according to the number of dependent and independent variables, and whether each is metric or nonmetric. Prominent examples include:\n- Multiple Linear Regression: One metric dependent variable predicted by multiple metric or dummy independent variables.\n- Discriminant Analysis: One nonmetric (categorical) dependent variable predicted by multiple metric independent variables (such as classifying loan default risk based on income, age, and debt ratio).\n- Multivariate Analysis of Variance (MANOVA): Multiple metric dependent variables evaluated across nonmetric experimental or categorical groups.\n- Canonical Correlation: Multiple metric dependent variables evaluated simultaneously against multiple metric independent variables.\n\n### Interdependence Methods\nInterdependence methods are applied when it is impossible or conceptually incorrect to designate variables as independent or dependent. The primary objective is to understand how and why all variables relate among themselves simultaneously, or to discover natural clusters and dimensions in the data cloud.\n\nKey interdependence techniques include:\n- Principal Components Analysis (PCA): Dimension reduction for metric variables that maximizes retained total variance through uncorrelated linear combinations.\n- Exploratory Factor Analysis (FA): Dimension reduction for metric variables that uncovers unobservable latent factors explaining the common correlation structure.\n- Correspondence Analysis: Dimension reduction for nonmetric contingency tables and cross-tabulations.\n- Cluster Analysis: Classifying observations into homogeneous groups such that objects within a cluster share high similarity while objects across clusters are maximally distinct.\n- Multidimensional Scaling (MDS): Mapping spatial distances and perceptual relationships among objects from pairwise similarity matrices."
    },
    "questions": [
      {
        "id": "q_l1_1",
        "segment_id": "ch1-scales-methods",
        "order_index": 1,
        "difficulty": "easy",
        "question": "Which measurement scale possesses a natural, absolute zero point that permits valid ratio statements such as \"Company A generated twice the revenue of Company B\"?",
        "options": [
          {
            "id": "a",
            "text": "Nominal scale, because categories represent discrete qualitative classes without quantitative distance or origin"
          },
          {
            "id": "b",
            "text": "Ordinal scale, because rank orders preserve monotonic relative magnitudes and ordered hierarchies across entities"
          },
          {
            "id": "c",
            "text": "Interval scale, because the distance between consecutive scale points is uniform across the entire measurement range"
          },
          {
            "id": "d",
            "text": "Ratio scale, because an absolute zero signifies total absence of the attribute, allowing multiplicative comparisons"
          },
          {
            "id": "e",
            "text": "Likert scale, because standard survey responses range symmetrically from strongly disagree to strongly agree"
          },
          {
            "id": "f",
            "text": "Binary dummy scale, because variables are restricted strictly to values 0 and 1 with fixed contrast parameters"
          }
        ],
        "correct_option": "d",
        "explanation": "### 1. Fundamental Definition of the Origin\nA **Ratio Scale** is uniquely characterized by possessing an **absolute, non-arbitrary, immutable zero origin** that corresponds to the complete absence of the property being measured (e.g., zero dollars in revenue, zero units produced, zero degrees Kelvin).\n\n### 2. Analytical Invariance Property\nBecause the zero point is fixed, the only admissible transformation is proportional similarity scaling:\n$$Y_t = b \\cdot Y_0 \\quad (b > 0)$$\nWhen computing the ratio between two firms $i$ and $k$:\n$$\\frac{Y_{t,i}}{Y_{t,k}} = \\frac{b Y_{0,i}}{b Y_{0,k}} = \\frac{Y_{0,i}}{Y_{0,k}}$$\nThe transformation constant $b$ cancels out algebraically. This mathematical cancellation is why statements of proportionality ('Company A has twice the revenue of Company B') remain objectively valid across all currencies (USD, EUR, Yen).\n\n### 3. Why Other Scales Fail\nOn an interval scale ($Y_t = a + b Y_0$), the additive translation $a$ prevents cancellation, rendering ratio statements meaningless (e.g., $20^\\circ\\text{C}$ is not twice as hot as $10^\\circ\\text{C}$).",
        "section_anchor": "ratio-scale",
        "section_reference": "Section 2.4: Ratio Scale"
      },
      {
        "id": "q_l1_2",
        "segment_id": "ch1-scales-methods",
        "order_index": 2,
        "difficulty": "easy",
        "question": "How many binary dummy variables are required to represent a nominal demographic variable with $k$ distinct categories in a regression model without introducing perfect multicollinearity?",
        "options": [
          {
            "id": "a",
            "text": "Exactly $k$ dummy variables, one for each distinct category while retaining the standard constant intercept vector"
          },
          {
            "id": "b",
            "text": "Exactly $k - 1$ dummy variables, leaving one category as the reference baseline to prevent perfect multicollinearity"
          },
          {
            "id": "c",
            "text": "Exactly $k + 1$ dummy variables to include an interaction term alongside an explicit omnibus reference vector"
          },
          {
            "id": "d",
            "text": "Exactly $2k$ dummy variables to account for positive and negative contrasts across all pairwise combinations"
          },
          {
            "id": "e",
            "text": "Only 1 continuous variable coded from 1 to $k$, treating the discrete qualitative categories as a metric continuum"
          },
          {
            "id": "f",
            "text": "Exactly $k / 2$ dummy variables rounded up, pairing adjacent categories into combined contrast groups"
          }
        ],
        "correct_option": "b",
        "explanation": "### 1. The Dummy Variable Trap & Multicollinearity\nIn linear regression models, nominal categorical variables with $k$ levels cannot be entered directly as integers because the numbers possess zero quantitative meaning. Instead, they are represented through binary $(0/1)$ indicator variables.\n\n### 2. Mathematical Proof of $k - 1$ Degrees of Freedom\nIf an analyst were to include dummy variables for all $k$ categories ($D_1 + D_2 + \\dots + D_k = 1$), their sum would be identically equal to the constant intercept column ($X_0 = 1$) for every observation in the sample. This creates **exact linear dependence** (perfect multicollinearity), causing the matrix $(X^T X)$ to become singular and mathematically non-invertible:\n$$\\det(X^T X) = 0$$\nTo ensure $(X^T X)$ has full column rank, exactly **$k - 1$ binary variables** must be introduced. The omitted $k$-th category serves as the baseline reference benchmark.",
        "section_anchor": "nominal-scale",
        "section_reference": "Section 2.1: Nominal Scale"
      },
      {
        "id": "q_l1_3",
        "segment_id": "ch1-scales-methods",
        "order_index": 3,
        "difficulty": "easy",
        "question": "What is the fundamental distinction between dependence methods and interdependence methods in multivariate analysis?",
        "options": [
          {
            "id": "a",
            "text": "Dependence methods are strictly restricted to small experimental samples ($n < 50$), whereas interdependence methods require massive administrative datasets exceeding $n > 10,000$"
          },
          {
            "id": "b",
            "text": "Dependence methods require all variables to be measured on nonmetric nominal scales, while interdependence methods are formulated strictly for continuous ratio scales"
          },
          {
            "id": "c",
            "text": "Dependence methods cannot compute formal inferential test statistics, whereas interdependence methods test structural null hypotheses using p-values and F-tests"
          },
          {
            "id": "d",
            "text": "Dependence methods analyze only cross-sectional qualitative surveys, while interdependence methods analyze longitudinal financial metrics and economic time series"
          },
          {
            "id": "e",
            "text": "Dependence methods partition variables into predictors and criterion variables, whereas interdependence methods analyze all variables simultaneously without designation"
          },
          {
            "id": "f",
            "text": "Dependence methods require zero correlation among all independent factors, while interdependence methods require perfect collinearity to isolate shared dimensions"
          }
        ],
        "correct_option": "e",
        "explanation": "### 1. The Core Methodological Division\nMultivariate methods are fundamentally partitioned by whether variables play distinct asymmetric functional roles in the scientific inquiry.\n\n### 2. Dependence Methods (Predictive & Causal Modeling)\nUsed when the research problem designates one or more variables as **dependent (criterion/target)** to be predicted or explained by a set of **independent (predictor/explanatory)** variables. Examples: Multiple Linear Regression, Discriminant Analysis, Logistic Regression, MANOVA.\n\n### 3. Interdependence Methods (Structural & Geometric Modeling)\nUsed when variables **cannot be conceptually partitioned** into inputs and outputs. All variables are analyzed simultaneously to uncover mutual correlation patterns, extract latent dimensions, or identify natural groupings. Examples: Principal Components Analysis (PCA), Factor Analysis (FA), Cluster Analysis, Multidimensional Scaling (MDS).",
        "section_anchor": "classification-of-multivariate-methods",
        "section_reference": "Section 3: Classification of Methods"
      },
      {
        "id": "q_l1_4",
        "segment_id": "ch1-scales-methods",
        "order_index": 4,
        "difficulty": "easy",
        "question": "Which of the following statistics is strictly invalid for an ordinal scale variable (such as customer satisfaction ranked 1st to 4th)?",
        "options": [
          {
            "id": "a",
            "text": "Arithmetic mean and sample standard deviation, because distances between successive ranks are not assumed to be equal"
          },
          {
            "id": "b",
            "text": "Median rank and interquartile range, because percentiles require strictly uniform metric intervals across score points"
          },
          {
            "id": "c",
            "text": "Modal category and frequency percentages, because qualitative counts cannot be computed on ordered discrete rankings"
          },
          {
            "id": "d",
            "text": "Spearman rank correlation coefficient, because non-parametric monotonicity tests violate ordinal transformation rules"
          },
          {
            "id": "e",
            "text": "Cumulative frequency distribution and percentiles, because ranking metrics distort cumulative probabilities"
          },
          {
            "id": "f",
            "text": "Rank range and minimum-maximum boundaries, because dispersion indicators are undefined outside continuous ratio data"
          }
        ],
        "correct_option": "a",
        "explanation": "### 1. Ordinal Distance Non-Uniformity\nAn **Ordinal Scale** preserves only monotonic rank order ($x_i > x_k$). It guarantees direction of preference, but the intervals between consecutive ranks are strictly unknown and unequal. The perceived utility gap between rank 1 and rank 2 is not equal to the gap between rank 2 and rank 3.\n\n### 2. Mathematical Invalidity of Means and Variances\nComputing the arithmetic mean $\\bar{x} = \\frac{1}{n} \\sum x_i$ or standard deviation $s = \\sqrt{\\frac{1}{n-1}\\sum (x_i - \\bar{x})^2}$ relies on the mathematical assumption that intervals between adjacent integer values are identical. Performing these operations on ordinal ranks yields distorted, arbitrary statistics.\n\n### 3. Permissible Statistics\nPermissible summary metrics for ordinal data include the **median**, **mode**, percentiles, and rank-order correlation metrics like Spearman's rank correlation coefficient ($r_s$) or Kendall's tau ($\\tau$).",
        "section_anchor": "ordinal-scale",
        "section_reference": "Section 2.2: Ordinal Scale"
      },
      {
        "id": "q_l1_5",
        "segment_id": "ch1-scales-methods",
        "order_index": 5,
        "difficulty": "intermediate",
        "question": "Temperature measured in Celsius is an interval scale. Why is it statistically impermissible to calculate the Coefficient of Variation ($CV = s / \\bar{x}$) on Celsius measurements?",
        "options": [
          {
            "id": "a",
            "text": "Because Celsius temperature records exhibit empirical skewness that prevents the underlying population from being normally distributed"
          },
          {
            "id": "b",
            "text": "Because the standard deviation cannot be mathematically derived when differences between scale intervals are assumed to be uniform"
          },
          {
            "id": "c",
            "text": "Because the arbitrary origin allows linear transformations $Y_t = a + bY_0$ ($a \neq 0$), which arbitrarily change the ratio $s / \bar{x}$"
          },
          {
            "id": "d",
            "text": "Because temperature on an interval scale lacks equal intervals between degrees, restricting valid operations to non-parametric medians"
          },
          {
            "id": "e",
            "text": "Because the variance of any standardized interval scale is constrained to be exactly 1.0, rendering the relative dispersion invariant"
          },
          {
            "id": "f",
            "text": "Because the Coefficient of Variation is an econometric indicator that can only be evaluated when all observations are strictly positive integers"
          }
        ],
        "correct_option": "c",
        "explanation": "### 1. The Coefficient of Variation ($CV$) Formula\nThe Coefficient of Variation is a dimensionless relative dispersion metric defined as:\n$$CV = \\frac{s}{\\bar{x}}$$\n\n### 2. Behavior Under Interval Linear Transformations\nInterval scales permit linear transformations $Y_t = a + b Y_0$ ($b > 0$), where $a$ is an arbitrary origin shift. Under this transformation:\n- The standard deviation transforms purely proportionally: $s_t = b \\cdot s_0$.\n- The arithmetic mean shifts additively: $\\bar{Y}_t = a + b \\cdot \\bar{Y}_0$.\n\nSubstituting these into the $CV$ equation yields:\n$$CV_t = \\frac{b \\cdot s_0}{a + b \\cdot \\bar{Y}_0} \\neq \\frac{s_0}{\\bar{Y}_0}$$\nBecause the arbitrary constant $a$ does not cancel out, the value of $CV$ changes arbitrarily depending on whether temperature is measured in Celsius or Fahrenheit. Therefore, $CV$ is statistically invalid on interval scales.",
        "section_anchor": "interval-scale",
        "section_reference": "Section 2.3: Interval Scale"
      },
      {
        "id": "q_l1_6",
        "segment_id": "ch1-scales-methods",
        "order_index": 6,
        "difficulty": "intermediate",
        "section_reference": "Section 3.1: Dependence Methods",
        "section_anchor": "dependence-methods",
        "question": "A commercial bank wants to predict whether a credit applicant will default on a loan (a nonmetric categorical variable: Default vs Non-Default) based on three metric indicators: annual income, debt ratio, and credit history score. According to the classification of multivariate dependence methods in Chapter 1, which technique is specifically designated for this structure?",
        "options": [
          {
            "id": "a",
            "text": "Multiple Linear Regression, because it establishes predictive models between continuous predictors and quantitative responses"
          },
          {
            "id": "b",
            "text": "Multivariate Analysis of Variance (MANOVA), because multiple metric dependent variables are compared across categorical treatments"
          },
          {
            "id": "c",
            "text": "Principal Components Analysis (PCA), because it extracts orthogonal composite scores across all applicant metrics without target variables"
          },
          {
            "id": "d",
            "text": "Canonical Correlation, because multiple metric independent variables are correlated with a second set of multiple metric dependent variables"
          },
          {
            "id": "e",
            "text": "Exploratory Factor Analysis (FA), because it explains shared covariance among financial predictors using unobserved latent credit factors"
          },
          {
            "id": "f",
            "text": "Discriminant Analysis, because a single nonmetric categorical dependent variable is predicted by multiple metric independent variables"
          }
        ],
        "correct_option": "f",
        "explanation": "### 1. Theoretical Classification Rule\nIn multivariate dependence methods, techniques are systematically classified by the measurement scale of variables (metric vs. nonmetric) and the number of dependent and independent variables.\n\n### 2. Why Discriminant Analysis is Correct\nWhen the research objective is to explain or predict a **single nonmetric (categorical) dependent variable** (such as loan default status: Default vs. Non-Default) using **multiple metric independent variables** (annual income, debt ratio, credit score), the exact designated technique is **Discriminant Analysis**. It constructs linear combinations of metric predictors that maximize separation between categorical groups.\n\n### 3. Why Other Multivariate Techniques Fail in This Context\n- **Multiple Linear Regression**: Strictly requires a **metric continuous** dependent variable (such as predicting exact credit balance in dollars, not a qualitative Yes/No group).\n- **MANOVA (Multivariate Analysis of Variance)**: Operates in the exact opposite direction: it evaluates **multiple metric dependent variables** across nonmetric treatment/categorical groups.\n- **Canonical Correlation**: Assesses linear relationships between **multiple metric dependent** variables and multiple metric independent variables.\n- **PCA and Factor Analysis**: Are **interdependence methods** where variables are not partitioned into predictors and criterion targets at all."
      },
      {
        "id": "q_l1_7",
        "segment_id": "ch1-scales-methods",
        "order_index": 7,
        "difficulty": "intermediate",
        "question": "Under what transformation are the mathematical and statistical properties of an interval scale variable strictly preserved?",
        "options": [
          {
            "id": "a",
            "text": "Similarity transformation: $Y_t = b Y_0$ ($b > 0$), which preserves origin ratios while constraining the constant term to zero"
          },
          {
            "id": "b",
            "text": "Linear (affine) transformation: $Y_t = a + b Y_0$ ($b > 0$), which preserves interval equality despite an arbitrary shift in origin"
          },
          {
            "id": "c",
            "text": "Logarithmic transformation: $Y_t = ln(Y_0)$, which compresses high values while strictly requiring a non-arbitrary positive base origin"
          },
          {
            "id": "d",
            "text": "Monotonic transformation: any function $f$ preserving ranks, which maintains order but distorts the equality of interval distances"
          },
          {
            "id": "e",
            "text": "Quadratic power transformation: $Y_t = Y_0^2$, which magnifies higher values while violating the uniform distance property"
          },
          {
            "id": "f",
            "text": "Strict identity transformation: $Y_t = Y_0$, which permits zero numerical recoding or rescaling in statistical data packages"
          }
        ],
        "correct_option": "b",
        "explanation": "Interval scale properties are preserved under linear transformations $Y_t = a + bY_0$ ($b > 0$), where $a$ represents an origin translation and $b$ represents a change in the unit of measurement.",
        "section_anchor": "interval-scale",
        "section_reference": "Section 2.3: Interval Scale"
      },
      {
        "id": "q_l1_8",
        "segment_id": "ch1-scales-methods",
        "order_index": 8,
        "difficulty": "intermediate",
        "question": "Which multivariate technique is correctly characterized as \"the categorical data equivalent of Principal Components Analysis\"?",
        "options": [
          {
            "id": "a",
            "text": "Multivariate Analysis of Variance (MANOVA), which analyzes group centroids across metric vectors"
          },
          {
            "id": "b",
            "text": "Canonical Correlation Analysis (CCA), which assesses linear relationships between two metric batteries"
          },
          {
            "id": "c",
            "text": "Linear Discriminant Analysis (LDA), which computes linear boundaries separating categorical classes"
          },
          {
            "id": "d",
            "text": "Correspondence Analysis (CA), which reduces dimensions for nonmetric contingency tables and cross-tabulations"
          },
          {
            "id": "e",
            "text": "Agglomerative Hierarchical Cluster Analysis, which clusters observations into homogeneous partitions"
          },
          {
            "id": "f",
            "text": "Multiple Linear Regression Modeling, which estimates conditional expectations of continuous variables"
          }
        ],
        "correct_option": "d",
        "explanation": "Correspondence Analysis (CA) is an interdependence technique designed to reduce dimensionality and display relationships in cross-tabulations of categorical (nonmetric) data, serving as the categorical counterpart to PCA.",
        "section_anchor": "interdependence-methods",
        "section_reference": "Section 3.2: Interdependence Methods"
      },
      {
        "id": "q_l1_9",
        "segment_id": "ch1-scales-methods",
        "order_index": 9,
        "difficulty": "hard",
        "question": "A market research survey measures consumer preference across 5 smartphone brands on a 5-point Likert scale (1 = Very Low Preference to 5 = Very High Preference). If an analyst applies the transformation $Y_t = 2Y_0 + 10$, what happens to the intervals between adjacent points and the ratio between the highest and lowest scores?",
        "options": [
          {
            "id": "a",
            "text": "Intervals between adjacent points remain constant at 2, while the ratio of maximum to minimum changes from $5/1 = 5.0$ to $20/12 approx 1.67$"
          },
          {
            "id": "b",
            "text": "Intervals between adjacent ratings expand from 1 to 2, whereas the ratio between highest and lowest points remains constant at exactly 5.0"
          },
          {
            "id": "c",
            "text": "Intervals between consecutive points become non-uniform, but the ratio between extreme boundary values is strictly preserved at 5.0"
          },
          {
            "id": "d",
            "text": "Both the scale intervals and boundary ratios remain completely unchanged because positive linear transformations preserve all metric properties"
          },
          {
            "id": "e",
            "text": "The scale collapses into a nominal ranking because adding a constant shift disrupts the monotonic order of consumer agreement ratings"
          },
          {
            "id": "f",
            "text": "The ratio of maximum to minimum doubles from 5.0 to 10.0 because multiplying by a positive slope parameter amplifies boundary discrepancies"
          }
        ],
        "correct_option": "a",
        "explanation": "In the original scale (1 to 5), the distance between adjacent points is 1 and the ratio is $5/1 = 5.0$. Applying $Y_t = 2Y_0 + 10$ yields points 12, 14, 16, 18, 20. The interval between adjacent points is uniformly 2 (equal differences are preserved), but the ratio becomes $20/12 = 1.667$. This proves that interval scales preserve equal increments, but ratios of raw values are meaningless.",
        "section_anchor": "interval-scale",
        "section_reference": "Section 2.3: Interval Scale"
      },
      {
        "id": "q_l1_10",
        "segment_id": "ch1-scales-methods",
        "order_index": 10,
        "difficulty": "hard",
        "question": "In a marketing dataset with 1,000 customers, an analyst wants to evaluate the effect of employment sector (Public, Private, Self-employed, Student) on credit card spending (dollars/year). If the analyst codes three dummy variables ($D_1, D_2, D_3$) leaving \"Student\" as the reference group, what does the regression coefficient of $D_1$ (Public sector) represent?",
        "options": [
          {
            "id": "a",
            "text": "The absolute mean annual credit card expenditure for Public sector employees across the target banking population, ignoring other factors"
          },
          {
            "id": "b",
            "text": "The percentage growth in annual expenditure observed when moving an applicant from baseline category 1 into occupational category 2"
          },
          {
            "id": "c",
            "text": "The Pearson correlation coefficient between Public sector employment status and annual household income across all 1,000 respondents"
          },
          {
            "id": "d",
            "text": "The proportional ratio of Public sector employee transactions relative to Private sector corporate spending, holding covariates constant"
          },
          {
            "id": "e",
            "text": "The expected difference in annual credit card spend between Public sector employees and Students, holding all other variables constant"
          },
          {
            "id": "f",
            "text": "The posterior probability that a given Public sector employee will be classified into the top credit expenditure decile group"
          }
        ],
        "correct_option": "e",
        "explanation": "When $k - 1$ dummy variables are included in a linear regression model, the coefficient on any dummy variable represents the differential intercept—the expected difference in the dependent variable relative to the omitted baseline category (in this case, Students).",
        "section_anchor": "nominal-scale",
        "section_reference": "Section 2.1: Nominal Scale"
      },
      {
        "id": "q_l1_11",
        "segment_id": "ch1-scales-methods",
        "order_index": 11,
        "difficulty": "hard",
        "question": "Which of the following research problems represents an INTERDEPENDENCE technique where the input data are pairwise proximity judgments rather than individual object attributes?",
        "options": [
          {
            "id": "a",
            "text": "Predicting annual regional GDP growth from employment rates, capital investment, and export volume via Multiple Regression"
          },
          {
            "id": "b",
            "text": "Classifying commercial loan applicants into default vs non-default risk groups from financial ratios via Discriminant Analysis"
          },
          {
            "id": "c",
            "text": "Constructing a perceptual brand map from consumer dissimilarity matrices across 10 competitors via Multidimensional Scaling (MDS)"
          },
          {
            "id": "d",
            "text": "Testing whether mean blood pressure and cholesterol levels differ across three clinical medication dosages via MANOVA"
          },
          {
            "id": "e",
            "text": "Estimating median customer churn time based on monthly usage volume and subscription duration via Survival Analysis"
          },
          {
            "id": "f",
            "text": "Quantifying price elasticity parameters for consumer packaged goods across multiple retail channels via Ordinary Least Squares"
          }
        ],
        "correct_option": "c",
        "explanation": "Multidimensional Scaling (MDS) is an interdependence technique that takes pairwise similarity or dissimilarity ratings among $n$ objects and constructs a geometric configuration of points in low-dimensional space such that distances between points reproduce observed proximities.",
        "section_anchor": "interdependence-methods",
        "section_reference": "Section 3.2: Interdependence Methods"
      },
      {
        "id": "q_l1_12",
        "segment_id": "ch1-scales-methods",
        "order_index": 12,
        "difficulty": "hard",
        "question": "A financial researcher asserts: \"Because ratio scales allow all mathematical transformations, we can add a fixed constant $a = 50$ to each firm’s revenue figures without affecting the ratio properties.\" Why is this statement false?",
        "options": [
          {
            "id": "a",
            "text": "Because adding an additive constant causes the sample standard deviation to become negative, violating variance non-negativity axioms"
          },
          {
            "id": "b",
            "text": "Because ratio variables can only undergo non-linear monotonic power transformations to maintain mathematical consistency in regressions"
          },
          {
            "id": "c",
            "text": "Because revenue and monetary values are fundamentally interval measures whose statistical properties prohibit translation operations"
          },
          {
            "id": "d",
            "text": "Because only multiplication by zero is mathematically valid on ratio scales when evaluating corporate financial balance sheet accounts"
          },
          {
            "id": "e",
            "text": "Because adding a constant alters the monotonic sequence of corporate sales rankings, causing smaller firms to surpass larger competitors"
          },
          {
            "id": "f",
            "text": "Because adding a non-zero constant destroys the absolute zero point ($0 + 50 = 50$), thereby invalidating proportionality and ratio comparisons"
          }
        ],
        "correct_option": "f",
        "explanation": "Ratio scales are strictly restricted to similarity transformations $Y_t = bY_0$ ($b > 0$). Adding a constant $a \\neq 0$ shifts the natural zero point, destroying the property that zero means absence of the attribute. For example, if Firm A has $10M and Firm B has $5M (ratio = 2.0), adding 50 gives $60M and $55M (ratio = 1.09), destroying the true ratio relationship.",
        "section_anchor": "ratio-scale",
        "section_reference": "Section 2.4: Ratio Scale"
      }
    ],
    "flashcards": [
      {
        "id": "fc_l1_1",
        "segment_id": "ch1-scales-methods",
        "order_index": 1,
        "category": "Scales",
        "front": "What are the two types of **Nonmetric Scales**, and what are their defining properties?",
        "back": "1. **Nominal Scale**: Numbers are purely labels for distinct categories. No quantitative meaning; mode and frequency counts only.\n2. **Ordinal Scale**: Numbers denote rank order or relative preference, but intervals between ranks are NOT equal. Median, mode, and Spearman rank correlation only.",
        "section_reference": "Section 2.1: Nominal Scale",
        "section_anchor": "nominal-scale"
      },
      {
        "id": "fc_l1_2",
        "segment_id": "ch1-scales-methods",
        "order_index": 2,
        "category": "Scales",
        "front": "What is the critical distinction between an **Interval Scale** and a **Ratio Scale**?",
        "back": "An **Interval Scale** has equal intervals between units but an **arbitrary zero point** (e.g. Celsius temperature); ratios are invalid.\nA **Ratio Scale** has equal intervals AND an **absolute, natural zero base** (e.g. age, revenue); ratios like \"twice as much\" are valid.",
        "section_reference": "Section 2.3: Interval & Ratio Scales",
        "section_anchor": "interval-scale"
      },
      {
        "id": "fc_l1_3",
        "segment_id": "ch1-scales-methods",
        "order_index": 3,
        "category": "Formulas",
        "front": "What is the permissible mathematical transformation for an **Interval Scale** vs a **Ratio Scale**?",
        "back": "- **Interval Scale**: Linear transformation $Y_t = a + b Y_0$ ($b > 0$).\n- **Ratio Scale**: Similarity transformation $Y_t = b Y_0$ ($b > 0$). Adding a constant $a \\neq 0$ is forbidden because it destroys the natural zero.",
        "section_reference": "Section 2.3: Interval Scale",
        "section_anchor": "interval-scale"
      },
      {
        "id": "fc_l1_4",
        "segment_id": "ch1-scales-methods",
        "order_index": 4,
        "category": "Coding",
        "front": "What is the rule for representing a nominal variable with $k$ categories using dummy variables?",
        "back": "Exactly **$k - 1$ binary dummy variables** are required.\nIncluding all $k$ dummies alongside an intercept creates perfect multicollinearity (the dummy variable trap).",
        "section_reference": "Section 2.1: Nominal Scale",
        "section_anchor": "nominal-scale"
      },
      {
        "id": "fc_l1_5",
        "segment_id": "ch1-scales-methods",
        "order_index": 5,
        "category": "Taxonomy",
        "front": "What characterizes **Dependence Methods** in multivariate data analysis?",
        "back": "Variables are partitioned into **independent variables (predictors)** and **dependent variables (criterion)** to explain or predict relationships (e.g., Multiple Regression, Discriminant Analysis, MANOVA).",
        "section_reference": "Section 3.1: Dependence Methods",
        "section_anchor": "dependence-methods"
      },
      {
        "id": "fc_l1_6",
        "segment_id": "ch1-scales-methods",
        "order_index": 6,
        "category": "Taxonomy",
        "front": "What characterizes **Interdependence Methods** in multivariate data analysis?",
        "back": "Variables cannot be partitioned into predictors and criterion. The objective is to discover underlying structure or groupings across all variables simultaneously (e.g., PCA, Factor Analysis, Cluster Analysis, MDS).",
        "section_reference": "Section 3.2: Interdependence Methods",
        "section_anchor": "interdependence-methods"
      },
      {
        "id": "fc_l1_7",
        "segment_id": "ch1-scales-methods",
        "order_index": 7,
        "category": "Methods",
        "front": "When should an analyst choose **Discriminant Analysis** over **Multiple Regression**?",
        "back": "When the dependent variable is **nonmetric (categorical)** (e.g., default vs non-default) and the independent variables are metric. Multiple Regression requires a **metric continuous** dependent variable.",
        "section_reference": "Section 3.1: Dependence Methods",
        "section_anchor": "dependence-methods"
      },
      {
        "id": "fc_l1_8",
        "segment_id": "ch1-scales-methods",
        "order_index": 8,
        "category": "Methods",
        "front": "What is **Correspondence Analysis (CA)**?",
        "back": "An interdependence dimension-reduction technique designed for **categorical (nonmetric) data**, analyzing contingency tables and cross-tabulations. It is considered the categorical counterpart to PCA.",
        "section_reference": "Section 3.2: Interdependence Methods",
        "section_anchor": "interdependence-methods"
      }
    ]
  },
  {
    "segment": {
      "id": "ch1-manipulation-distances",
      "discipline_id": "data-analysis",
      "title": "Data Manipulation Fundamentals & Distance Metrics",
      "subtitle": "Centered data, degrees of freedom, variance-covariance geometry, and metric distance spaces.",
      "order_index": 2,
      "summary_markdown": "# Data Manipulation, Geometric Duality & Distance Metrics\n\n## 1. Data Matrices & Basic Multivariate Operations\nA multivariate dataset is formalized as a matrix $X$ of dimension $n \\times p$, representing $n$ observed units measured on $p$ variables.\n\nBefore conducting advanced multivariate procedures, raw data are usually preprocessed. Centering subtracts the sample mean from every observation:\n$$x_{cij} = X_{ij} - \\bar{X}_j$$\nCentering shifts the data cloud so that its center of gravity (the centroid) lies precisely at the coordinate origin $(0, 0, \\dots, 0)$. Centering does not alter variances, pairwise distances, or covariances.\n\n## 2. Variance, Covariance & Correlation\nSample variance represents the average squared deviation of an individual variable from its mean, scaled by degrees of freedom:\n$$s_j^2 = \\frac{SS_j}{n - 1} = \\frac{\\sum_{i=1}^n (X_{ij} - \\bar{X}_j)^2}{n - 1}$$\nwhere $SS_j$ is the Sum of Squares and $df = n - 1$. The standard deviation is the positive square root $s_j = \\sqrt{s_j^2}$.\n\nSample covariance measures the joint linear variability of two variables:\n$$S_{jk} = \\frac{SCP_{jk}}{n - 1} = \\frac{\\sum_{i=1}^n (X_{ij} - \\bar{X}_j)(X_{ik} - \\bar{X}_k)}{n - 1}$$\nwhere $SCP_{jk}$ is the Sum of Cross Products. When arranged in a square symmetric $p \\times p$ matrix $S$, the diagonal elements are the sample variances ($s_j^2$) and the off-diagonal elements are the pairwise covariances ($S_{jk}$).\n\nThe Pearson Correlation Coefficient ($r_{jk}$) scales the covariance by the product of both standard deviations, yielding a standardized measure bounded between $-1$ and $+1$:\n$$r_{jk} = \\frac{S_{jk}}{s_j s_k} = \\frac{\\sum_{i=1}^n (X_{ij} - \\bar{X}_j)(X_{ik} - \\bar{X}_k)}{\\sqrt{\\sum_{i=1}^n (X_{ij} - \\bar{X}_j)^2} \\sqrt{\\sum_{i=1}^n (X_{ik} - \\bar{X}_k)^2}}$$\nA high correlation signifies a strong linear association, but it does not imply causation.\n\n## 3. Geometric Duality: Variable Space vs. Observation Space\nMultivariate data can be visualized through two complementary perspectives:\n\n### Variable Space (p-Dimensional Representation)\nIn variable space, coordinate axes represent the $p$ variables. Each of the $n$ observations is a discrete point located at coordinates $(x_{i1}, x_{i2}, \\dots, x_{ip})$. The centroid $C = (\\bar{X}_1, \\dots, \\bar{X}_p)$ is the central balance point of the scatter.\n\n### Observation Space (n-Dimensional Representation)\nIn observation space, coordinate axes represent the $n$ individual sample units. Each of the $p$ variables is represented as a directed vector in $n$ dimensions.\n\nFor mean-corrected variables, the squared length (squared Euclidean norm) of vector $x_j$ equals its Sum of Squares:\n$$\\|x_j\\|^2 = SS_j \\implies \\|x_j\\| = s_j \\sqrt{n - 1}$$\nThe scalar dot product between two mean-corrected variable vectors is the Sum of Cross Products:\n$$x_j \\cdot x_k = SCP_{jk} = (n - 1) S_{jk}$$\nFrom vector geometry, the cosine of the angle $\\alpha$ between two variable vectors in observation space equals their Pearson correlation:\n$$\\cos(\\alpha) = \\frac{x_j \\cdot x_k}{\\|x_j\\| \\|x_k\\|} = \\frac{(n - 1) S_{jk}}{(s_j \\sqrt{n - 1})(s_k \\sqrt{n - 1})} = \\frac{S_{jk}}{s_j s_k} = r_{jk}$$\nIf $\\alpha = 0^\\circ$, $\\cos(0^\\circ) = 1$, representing perfect positive collinearity ($r = 1$). If $\\alpha = 90^\\circ$, $\\cos(90^\\circ) = 0$, meaning the vectors are perpendicular and the variables are completely uncorrelated ($r = 0$). If $\\alpha = 180^\\circ$, $\\cos(180^\\circ) = -1$, representing perfect inverse collinearity ($r = -1$).\n\n## 4. Distance Metrics in Multivariate Space\nA metric distance function $D_{ik}$ between observations $i$ and $k$ must satisfy non-negativity ($D_{ik} \\ge 0$, with $D_{ik} = 0 \\iff i = k$), symmetry ($D_{ik} = D_{ki}$), and the triangle inequality ($D_{il} \\le D_{ik} + D_{kl}$).\n\n### Euclidean Distance\nThe classical straight-line Euclidean distance is:\n$$D_{ik} = \\sqrt{\\sum_{j=1}^p (X_{ij} - X_{kj})^2}$$\nEuclidean distance assumes that all variables have equal variances and are completely uncorrelated. If variables are measured on different scales (e.g. annual income in thousands vs customer satisfaction from 1 to 5), variables with larger numerical ranges dominate the distance.\n\n### Statistical Distance (Variance-Standardized)\nStatistical distance divides each squared deviation by the variable's sample variance:\n$$SD_{ik}^2 = \\sum_{j=1}^p \\left(\\frac{X_{ij} - X_{kj}}{s_j}\\right)^2$$\nThis prevents scale distortion by measuring distance in units of standard deviations, but it still assumes variables are uncorrelated.\n\n### Mahalanobis Distance (Covariance-Adjusted)\nIntroduced by P. C. Mahalanobis in 1936, this metric accounts for both differing variances and pairwise intercorrelations:\n$$MD_{ik}^2 = (x_i - x_k)^T S^{-1} (x_i - x_k)$$\nwhere $S$ is the $p \\times p$ sample covariance matrix and $S^{-1}$ is its matrix inverse.\n\nIn the bivariate ($p = 2$) case with correlation $r$:\n$$MD_{ik}^2 = \\frac{1}{1 - r^2} \\left[ \\frac{(X_{i1} - X_{k1})^2}{s_1^2} + \\frac{(X_{i2} - X_{k2})^2}{s_2^2} - \\frac{2r(X_{i1} - X_{k1})(X_{i2} - X_{k2})}{s_1 s_2} \\right]$$\nWhen variables are uncorrelated ($r = 0$), Mahalanobis distance simplifies to Statistical distance. When variables are uncorrelated ($r = 0$) and standardized ($s_j = 1$), Mahalanobis distance simplifies to Euclidean distance."
    },
    "questions": [
      {
        "id": "q_l2_1",
        "segment_id": "ch1-manipulation-distances",
        "order_index": 1,
        "difficulty": "easy",
        "question": "What is the relationship between the sample variance ($s_j^2$), the Sum of Squares ($SS_j$), and the degrees of freedom ($df$) for a single variable?",
        "options": [
          {
            "id": "a",
            "text": "Variance is the Sum of Squares multiplied by degrees of freedom: $s_j^2 = SS_j \\times (n - 1)$, representing cumulative dispersion"
          },
          {
            "id": "b",
            "text": "Variance is the square root of the Sum of Squares divided by sample size: $s_j^2 = \\sqrt{SS_j / n}$, representing root mean dispersion"
          },
          {
            "id": "c",
            "text": "Variance is the Sum of Squares divided by degrees of freedom: $s_j^2 = SS_j / (n - 1)$, representing average squared deviation"
          },
          {
            "id": "d",
            "text": "Variance is the Sum of Cross Products divided by the sample mean: $s_j^2 = SCP_{jk} / \\bar{x}$, representing scaled covariation"
          },
          {
            "id": "e",
            "text": "Variance is identical to degrees of freedom divided by Sum of Squares: $s_j^2 = (n - 1) / SS_j$, representing precision density"
          },
          {
            "id": "f",
            "text": "Variance is the sum of absolute deviations divided by degrees of freedom: $s_j^2 = \\sum |x_i - \\bar{x}| / (n - 1)$, representing mean spread"
          }
        ],
        "correct_option": "c",
        "explanation": "Sample variance is defined as the sum of squared deviations from the mean (SS) divided by degrees of freedom ($df = n - 1$), representing the average squared deviation per degree of freedom.",
        "section_reference": "Section 2: Variance, Covariance & Correlation",
        "section_anchor": "2-variance-covariance-correlation"
      },
      {
        "id": "q_l2_2",
        "segment_id": "ch1-manipulation-distances",
        "order_index": 2,
        "difficulty": "easy",
        "question": "In an $n$-dimensional observation space where variables are represented as vectors, what statistical property does the angle $\\alpha$ between two mean-corrected variable vectors represent?",
        "options": [
          {
            "id": "a",
            "text": "The cosine of $\\alpha$ is exactly equal to the Pearson correlation coefficient: $\\cos(\\alpha) = r_{jk}$, linking geometry to correlation"
          },
          {
            "id": "b",
            "text": "The tangent of $\\alpha$ is exactly equal to the pooled covariance: $\\tan(\\alpha) = s_{jk}$, linking angular slope to covariance spread"
          },
          {
            "id": "c",
            "text": "The Euclidean distance between vector endpoints equals the correlation: $D_{jk} = r_{jk}$, linking distance to linear association"
          },
          {
            "id": "d",
            "text": "The angle $\\alpha$ is proportional to the ratio of variable means: $\\alpha = \\bar{x}_j / \\bar{x}_k$, linking orientation to central tendency"
          },
          {
            "id": "e",
            "text": "The sine of $\\alpha$ equals the coefficient of determination: $\\sin(\\alpha) = r_{jk}^2$, linking trigonometric height to shared variance"
          },
          {
            "id": "f",
            "text": "The angle $\\alpha$ in radians equals the degrees of freedom: $\\alpha = n - 1$, linking geometric dimensionality to sample size"
          }
        ],
        "correct_option": "a",
        "explanation": "In observation space, the scalar dot product between two mean-corrected vectors divided by the product of their norms equals the cosine of the angle between them, which identically matches the formula for the Pearson correlation coefficient: $\\cos(\\alpha) = r_{jk}$.",
        "section_reference": "Section 3.2: Observation Space",
        "section_anchor": "observation-space-n-dimensional-representation"
      },
      {
        "id": "q_l2_3",
        "segment_id": "ch1-manipulation-distances",
        "order_index": 3,
        "difficulty": "easy",
        "question": "What happens to the mean and variance of a variable when it is transformed into a standardized variable ($z = (x - \\bar{x})/s$)?",
        "options": [
          {
            "id": "a",
            "text": "The sample mean becomes 1.0 and the sample variance becomes 0.0, shifting all observations into a single deterministic point mass at the positive unit boundary"
          },
          {
            "id": "b",
            "text": "Both the sample mean and sample variance become exactly 0.0, collapsing all observation deviations to the origin and destroying statistical dispersion"
          },
          {
            "id": "c",
            "text": "The sample mean remains completely unchanged while the sample variance doubles: $\\bar{z} = \\bar{x}$ and $s_z^2 = 2 s_x^2$, amplifying original variability"
          },
          {
            "id": "d",
            "text": "The sample mean becomes 0.0 and the sample variance is multiplied by $n - 1$, scaling total dispersion proportionally to the sample size of observations"
          },
          {
            "id": "e",
            "text": "The sample mean becomes 0.0 and the sample variance becomes 1.0: $\\bar{z} = 0$ and $s_z^2 = 1$, standardizing location and scale"
          },
          {
            "id": "f",
            "text": "The sample mean and variance both equal the original sample median, preserving non-parametric percentile boundaries across all observations"
          }
        ],
        "correct_option": "e",
        "explanation": "Standardization subtracts the mean (making the new mean 0.0) and divides by the standard deviation (making the new variance $s^2 / s^2 = 1.0$).",
        "section_reference": "Section 1: Data Matrices & Basic Operations",
        "section_anchor": "1-data-matrices-basic-multivariate-operations"
      },
      {
        "id": "q_l2_4",
        "segment_id": "ch1-manipulation-distances",
        "order_index": 4,
        "difficulty": "easy",
        "question": "Which of the following is NOT one of the three fundamental mathematical axioms that define a metric distance space?",
        "options": [
          {
            "id": "a",
            "text": "Non-negativity and Distinguishability: $D_{ik} \\ge 0$ for all pairs, with $D_{ik} = 0$ if and only if points $i$ and $k$ are identical"
          },
          {
            "id": "b",
            "text": "Symmetry: $D_{ik} = D_{ki}$ for all pairs, ensuring distance is identical regardless of travel direction between points"
          },
          {
            "id": "c",
            "text": "Triangle Inequality: $D_{il} \\le D_{ik} + D_{kl}$ for all points, ensuring direct path is never longer than an indirect detour"
          },
          {
            "id": "d",
            "text": "Proportional Invariance: $D_{ik}$ must always be strictly bounded between 0.0 and 1.0 regardless of variable scales"
          },
          {
            "id": "e",
            "text": "Identical Zero Self-Distance: $D_{ii} = 0$ for every observation, confirming that any point has zero distance to itself"
          },
          {
            "id": "f",
            "text": "Strict Positivity for Distinct Points: if $i \\neq k$, then $D_{ik} > 0$, guaranteeing spatial separation between distinct entities"
          }
        ],
        "correct_option": "d",
        "explanation": "A metric space does not require distances to be bounded by 1.0. The three required axioms are distinguishability ($D_{ik} = 0 \\iff i=k$), symmetry ($D_{ik} = D_{ki}$), and the triangle inequality ($D_{il} \\le D_{ik} + D_{kl}$).",
        "section_reference": "Section 4: Distance Metrics",
        "section_anchor": "4-distance-metrics-in-multivariate-space"
      },
      {
        "id": "q_l2_5",
        "segment_id": "ch1-manipulation-distances",
        "order_index": 5,
        "difficulty": "intermediate",
        "question": "Why does Euclidean distance become an inappropriate metric when variables have vastly different scales or variances (e.g., combining annual income in Euros with household size in persons)?",
        "options": [
          {
            "id": "a",
            "text": "Because Euclidean distance cannot be computed on more than two dimensions without violating matrix non-singularity axioms in multidimensional projection"
          },
          {
            "id": "b",
            "text": "Because variables with large numerical variances dominate the distance calculation, making smaller-scale variables practically irrelevant"
          },
          {
            "id": "c",
            "text": "Because Euclidean distance violates the metric triangle inequality whenever attributes are measured in non-standardized heterogeneous physical measurement units"
          },
          {
            "id": "d",
            "text": "Because the Pythagorean theorem is mathematically invalid whenever variables have non-zero skewness or kurtosis in empirical multivariate sample distributions"
          },
          {
            "id": "e",
            "text": "Because Euclidean distance assumes all pairwise correlations are negative, causing distances between positively correlated items to artificially inflate"
          },
          {
            "id": "f",
            "text": "Because Euclidean distance projects data onto a 1-dimensional line, destroying all geometric spread and orthogonal variation across remaining dimensions"
          }
        ],
        "correct_option": "b",
        "explanation": "Euclidean distance sums raw squared differences $(x_{ij} - x_{kj})^2$. A difference of 5,000 Euros in income yields $25,000,000$, completely overwhelming a difference of 2 people in household size ($2^2 = 4$). Statistical or Mahalanobis distance solves this by standardizing by dispersion.",
        "section_reference": "Section 4.1: Euclidean Distance",
        "section_anchor": "euclidean-distance"
      },
      {
        "id": "q_l2_6",
        "segment_id": "ch1-manipulation-distances",
        "order_index": 6,
        "difficulty": "intermediate",
        "question": "Under what specific conditions does the Mahalanobis Distance ($MD$) reduce exactly to the ordinary Euclidean Distance?",
        "options": [
          {
            "id": "a",
            "text": "When all variables are perfectly collinear ($r = 1.0$) and sample size $n$ exceeds total variables $p$ by at least 100 observations in the empirical dataset"
          },
          {
            "id": "b",
            "text": "When sample size $n$ approaches infinity and all variable means are centered exactly at the origin: $\\bar{x} = 0$, eliminating centroid translations"
          },
          {
            "id": "c",
            "text": "When data are measured exclusively on ordinal scales and distance is evaluated using non-parametric rank scores across all pairwise observations"
          },
          {
            "id": "d",
            "text": "When all pairwise covariances are positive constants and variances are proportional to degrees of freedom ($s_j^2 = n - 1$) across all dimensions"
          },
          {
            "id": "e",
            "text": "When the determinant of the covariance matrix equals zero and matrix inversion is replaced by the Moore-Penrose pseudo-inverse in dimensional space"
          },
          {
            "id": "f",
            "text": "When all variables are mutually uncorrelated ($r = 0$) and have unit variance ($s_j^2 = 1$), such that covariance matrix $S = I$"
          }
        ],
        "correct_option": "f",
        "explanation": "In matrix form, $MD^2 = (x_i - x_k)^T S^{-1} (x_i - x_k)$. When variables are uncorrelated and have unit variance, $S = I$, so $S^{-1} = I$, reducing the formula to $(x_i - x_k)^T (x_i - x_k) = \\sum (x_{ij} - x_{kj})^2$, which is squared Euclidean distance.",
        "section_reference": "Section 4.3: Mahalanobis Distance",
        "section_anchor": "mahalanobis-distance-covariance-adjusted"
      },
      {
        "id": "q_l2_7",
        "segment_id": "ch1-manipulation-distances",
        "order_index": 7,
        "difficulty": "intermediate",
        "question": "In a $2 \\times 2$ contingency table with fixed marginal totals, why is there only 1 degree of freedom?",
        "options": [
          {
            "id": "a",
            "text": "Because a $2 \\times 2$ table has 4 cells, and dividing by total row and column dimensions yields exactly $(2 \\times 2) / 4 = 1$ degree of freedom"
          },
          {
            "id": "b",
            "text": "Because once any single cell joint frequency is specified, the remaining three cells are fixed by the row and column margins"
          },
          {
            "id": "c",
            "text": "Because binary categorical data have zero theoretical variance, constraining all joint cell probabilities to equal the simple product of marginals"
          },
          {
            "id": "d",
            "text": "Because qualitative nominal classifications only permit estimation of the central mode, eliminating parameter dispersion across cross-tabulations"
          },
          {
            "id": "e",
            "text": "Because the sample correlation in any $2 \\times 2$ contingency table is constrained to zero under the baseline null hypothesis of mutual independence"
          },
          {
            "id": "f",
            "text": "Because the determinant of a $2 \\times 2$ frequency matrix with fixed margins is mathematically forced to equal 1.0 by matrix normalization rules"
          }
        ],
        "correct_option": "b",
        "explanation": "For any two-way table, $df = (r - 1)(c - 1) = (2 - 1)(2 - 1) = 1$. With fixed margins, specifying just one cell frequency allows all other three cells to be deduced by subtracting from the marginal totals.",
        "section_reference": "Section 2: Variance, Covariance & Correlation",
        "section_anchor": "2-variance-covariance-correlation"
      },
      {
        "id": "q_l2_8",
        "segment_id": "ch1-manipulation-distances",
        "order_index": 8,
        "difficulty": "intermediate",
        "question": "Two mean-corrected variable vectors $x_1$ and $x_2$ in observation space are perpendicular (orthogonal) to each other ($alpha = 90^circ$). What is their Pearson correlation coefficient and covariance?",
        "options": [
          {
            "id": "a",
            "text": "$r = 1.0$ and covariance is positive, because orthogonal vectors share identical orientation in observation space and overlap perfectly"
          },
          {
            "id": "b",
            "text": "$r = -1.0$ and covariance is negative, because perpendicular vectors point in opposite geometric directions across the multidimensional axes"
          },
          {
            "id": "c",
            "text": "$r = 0.5$ and covariance equals half of the product of sample standard deviations: $s_{12} = 0.5 s_1 s_2$, reflecting intermediate angular projection"
          },
          {
            "id": "d",
            "text": "$r = 0.0$ and covariance is $0.0$, because $\\cos(90^\\circ) = 0$, indicating zero linear correlation between the variables"
          },
          {
            "id": "e",
            "text": "$r = 0.707$ and covariance is positive, because $\\cos(45^\\circ) = \\sqrt{2}/2$, reflecting intermediate linear association between the vectors"
          },
          {
            "id": "f",
            "text": "Correlation is undefined and covariance is infinite, because perpendicular vectors cannot share common projections onto observation subspaces"
          }
        ],
        "correct_option": "d",
        "explanation": "Because $\\cos(\\alpha) = r_{jk}$, when $\\alpha = 90^\\circ$, $\\cos(90^\\circ) = 0$. Thus, the correlation $r = 0$ and the sample covariance $S_{jk} = 0$. Orthogonal vectors in observation space represent linearly uncorrelated variables.",
        "section_reference": "Section 3.2: Observation Space",
        "section_anchor": "observation-space-n-dimensional-representation"
      },
      {
        "id": "q_l2_9",
        "segment_id": "ch1-manipulation-distances",
        "order_index": 9,
        "difficulty": "hard",
        "question": "Consider a univariate normal random variable $X \\sim N(0, \\sigma^2)$ and two fixed points $x_1 = -2$ and $x_2 = 2$. Compare the Euclidean distance and the Statistical distance between these points under Distribution A ($\\sigma^2 = 4$) vs Distribution B ($\\sigma^2 = 1$).",
        "options": [
          {
            "id": "a",
            "text": "Euclidean distance is 4 under both; Statistical distance is $SD^2 = 4$ under A and $SD^2 = 16$ under B, showing points are statistically closer under larger variance"
          },
          {
            "id": "b",
            "text": "Euclidean distance is 16 under Distribution A and 4 under Distribution B; Statistical distance is identical under both distributions because sample variance cancels out completely"
          },
          {
            "id": "c",
            "text": "Both Euclidean and Statistical distances equal 4 under both distributions, because distance is a rigid metric invariant to variance shifts across standard normal coordinates"
          },
          {
            "id": "d",
            "text": "Statistical distance is undefined under Distribution A because the mean is zero, whereas Euclidean distance equals the difference of squares across coordinate points"
          },
          {
            "id": "e",
            "text": "Points are statistically further apart under Distribution A because larger variance expands the metric space: $SD^2 = 64$ under A vs $SD^2 = 4$ under B in standardized space"
          },
          {
            "id": "f",
            "text": "Statistical distance is zero under both distributions because points $-2$ and $+2$ are symmetrically positioned around the central distribution origin in univariate models"
          }
        ],
        "correct_option": "a",
        "explanation": "Euclidean distance is $|2 - (-2)| = 4$ for both. Squared statistical distance is $SD^2 = ((x_2 - x_1)/s)^2$. For A, $s = \\sqrt{4} = 2 \\implies SD^2 = (4/2)^2 = 4$. For B, $s = \\sqrt{1} = 1 \\implies SD^2 = (4/1)^2 = 16$. In probability terms, $P(-2 < X < 2)$ is much higher when $\\sigma^2 = 1$ than when $\\sigma^2 = 4$, making the points statistically closer when variance is large.",
        "section_reference": "Section 4.2: Statistical Distance",
        "section_anchor": "statistical-distance-variance-standardized"
      },
      {
        "id": "q_l2_10",
        "segment_id": "ch1-manipulation-distances",
        "order_index": 10,
        "difficulty": "hard",
        "question": "In a bivariate dataset, two variables have variances $s_1^2 = 25$, $s_2^2 = 16$, and a high positive correlation $r = 0.80$. Two observations have coordinate differences $\\Delta x_1 = 5$ and $\\Delta x_2 = 4$. Compute their squared Mahalanobis distance $MD^2$.",
        "options": [
          {
            "id": "a",
            "text": "$MD^2 = 41.00$, calculated as the unweighted sum of squared coordinate differences: $\\Delta x_1^2 + \\Delta x_2^2 = 25 + 16 = 41.00$"
          },
          {
            "id": "b",
            "text": "$MD^2 = 5.56$, calculated by dividing squared coordinate differences by standard deviations without covariance correction"
          },
          {
            "id": "c",
            "text": "$MD^2 = 1.11$, calculated via inverse covariance weighting, showing correlation significantly contracts statistical distance"
          },
          {
            "id": "d",
            "text": "$MD^2 = 0.00$, because coordinate differences $\\Delta x_1 = 5$ and $\\Delta x_2 = 4$ match variable standard deviations exactly"
          },
          {
            "id": "e",
            "text": "$MD^2 = 10.00$, calculated by multiplying Euclidean distance by the correlation coefficient: $MD^2 = r \\times (\\Delta x_1^2 + \\Delta x_2^2)$"
          },
          {
            "id": "f",
            "text": "$MD^2 = 2.00$, representing the standard two-variable degrees of freedom under bivariate normality assumptions"
          }
        ],
        "correct_option": "c",
        "explanation": "Using the bivariate Mahalanobis formula: $MD^2 = \\frac{1}{1 - r^2} \\left[ \\frac{(\\Delta x_1)^2}{s_1^2} + \\frac{(\\Delta x_2)^2}{s_2^2} - \\frac{2r(\\Delta x_1)(\\Delta x_2)}{s_1 s_2} \\right]$. Here, $\\Delta x_1 / s_1 = 5/5 = 1$, $\\Delta x_2 / s_2 = 4/4 = 1$. The bracketed term is $1^2 + 1^2 - 2(0.80)(1)(1) = 2 - 1.60 = 0.40$. The pre-factor is $1 / (1 - 0.8^2) = 1 / (1 - 0.64) = 1 / 0.36 \\approx 2.778$. Thus, $MD^2 = 0.40 / 0.36 = 4/3.6 \\approx 1.11$.",
        "section_reference": "Section 4.3: Mahalanobis Distance",
        "section_anchor": "mahalanobis-distance-covariance-adjusted"
      },
      {
        "id": "q_l2_11",
        "segment_id": "ch1-manipulation-distances",
        "order_index": 11,
        "difficulty": "hard",
        "question": "Suppose a dataset of $n = 12$ firms has two financial ratios. The mean-corrected vector for $X_1$ has squared length $\\|x_1\\|^2 = 262.92$, and $X_2$ has $\\|x_2\\|^2 = 131.67$. Their dot product is $x_1 \\cdot x_2 = 136.375$. What is their exact Pearson correlation coefficient $r_{12}$?",
        "options": [
          {
            "id": "a",
            "text": "$r_{12} = 136.375 / (262.92 + 131.67) = 0.346$, dividing the dot product by the arithmetic sum of squared vector lengths"
          },
          {
            "id": "b",
            "text": "$r_{12} = \\sqrt{136.375} / 11 = 1.061$, taking the square root of the cross-product divided by sample degrees of freedom"
          },
          {
            "id": "c",
            "text": "$r_{12} = (262.92 - 131.67) / 136.375 = 0.963$, evaluating the normalized difference between individual variable lengths"
          },
          {
            "id": "d",
            "text": "$r_{12} = 136.375 / (11 \\times 12) = 1.033$, standardizing the raw dot product by sample size and degrees of freedom"
          },
          {
            "id": "e",
            "text": "$r_{12} = 136.375 / \\sqrt{262.92 \\times 131.67} \\approx 0.733$, dividing dot product by the product of vector norms"
          },
          {
            "id": "f",
            "text": "$r_{12} = 0.538$, taking the ratio of smaller vector length to larger vector length: $131.67 / 262.92 = 0.501$ with rounding"
          }
        ],
        "correct_option": "e",
        "explanation": "In observation space, $\\cos(\\alpha) = \\frac{x_1 \\cdot x_2}{\\|x_1\\| \\|x_2\\|} = \\frac{136.375}{\\sqrt{262.917 \\times 131.667}} = \\frac{136.375}{\\sqrt{34617.48}} = \\frac{136.375}{186.058} \\approx 0.733$. This matches slide 65 of Chapter 1.",
        "section_reference": "Section 3.2: Observation Space",
        "section_anchor": "observation-space-n-dimensional-representation"
      },
      {
        "id": "q_l2_12",
        "segment_id": "ch1-manipulation-distances",
        "order_index": 12,
        "difficulty": "hard",
        "question": "Why does translating axes to the centroid (mean-correcting data) leave the sample covariance and variance invariant, whereas standardizing data changes the relative geometric configuration of points in variable space?",
        "options": [
          {
            "id": "a",
            "text": "Centering projects data onto an $n-1$ subspace, while standardization projects data into a 1-dimensional subspace across variable space"
          },
          {
            "id": "b",
            "text": "Centering alters the correlation matrix, whereas standardizing leaves the covariance matrix completely unchanged throughout projections"
          },
          {
            "id": "c",
            "text": "Centering violates the metric triangle inequality, while standardization restores metric axioms across heterogeneous observation groups"
          },
          {
            "id": "d",
            "text": "Centering is only permissible for ratio scales, while standardizing is only mathematically valid for nominal rankings and categorical data"
          },
          {
            "id": "e",
            "text": "There is zero geometric difference; both operations preserve identical Euclidean distances and shape configurations in multivariate space"
          },
          {
            "id": "f",
            "text": "Centering is a rigid translation that preserves all Euclidean distances, whereas standardizing differentially scales axes"
          }
        ],
        "correct_option": "f",
        "explanation": "Subtracting means shifts the origin to $(0,0)$ without altering distances: $(x_{ij} - x_{kj}) = (x^*_{ij} - x^*_{kj})$. However, dividing each dimension by its own standard deviation $s_j$ differentially compresses dimensions with large spread and expands dimensions with small spread, altering relative distances and angles between observations.",
        "section_reference": "Section 3.1: Variable Space",
        "section_anchor": "variable-space-p-dimensional-representation"
      }
    ],
    "flashcards": [
      {
        "id": "fc_l2_1",
        "segment_id": "ch1-manipulation-distances",
        "order_index": 1,
        "category": "Definitions",
        "front": "What is **Centered (Mean-Corrected) Data**, and what is its geometric effect?",
        "back": "$x^*_{ij} = x_{ij} - \\bar{x}_j$\nGeometrically, it translates the origin to the **centroid** $(\\bar{x}_1, \\dots, \\bar{x}_p)$. Relative distances between points, variances, and covariances are completely unchanged.",
        "section_reference": "Section 1: Data Matrices & Basic Operations",
        "section_anchor": "1-data-matrices-basic-multivariate-operations"
      },
      {
        "id": "fc_l2_2",
        "segment_id": "ch1-manipulation-distances",
        "order_index": 2,
        "category": "Definitions",
        "front": "What is the conceptual definition of **Degrees of Freedom ($df$)**?",
        "back": "The number of **independent pieces of information** in a dataset free to vary when computing a statistic.\nFor sample variance, $df = n - 1$ because fixing the mean determines the $n$-th observation.",
        "section_reference": "Section 2: Variance, Covariance & Correlation",
        "section_anchor": "2-variance-covariance-correlation"
      },
      {
        "id": "fc_l2_3",
        "segment_id": "ch1-manipulation-distances",
        "order_index": 3,
        "category": "Formulas",
        "front": "How are **Variance** and **Covariance** related to Sum of Squares ($SS$) and Sum of Cross Products ($SCP$)?",
        "back": "- Variance: $s_j^2 = \\frac{SS_j}{n - 1} = \\frac{\\sum (x_{ij} - \\bar{x}_j)^2}{df}$\n- Covariance: $S_{jk} = \\frac{SCP_{jk}}{n - 1} = \\frac{\\sum (x_{ij} - \\bar{x}_j)(x_{ik} - \\bar{x}_k)}{df}$",
        "section_reference": "Section 2: Variance, Covariance & Correlation",
        "section_anchor": "2-variance-covariance-correlation"
      },
      {
        "id": "fc_l2_4",
        "segment_id": "ch1-manipulation-distances",
        "order_index": 4,
        "category": "Geometry",
        "front": "In **Observation Space**, what does the angle between two mean-corrected variable vectors represent?",
        "back": "The cosine of the angle $\\alpha$ between the two vectors is exactly the **Pearson correlation coefficient**:\n$$\\cos(\\alpha) = \\frac{x_j \\cdot x_k}{\\|x_j\\| \\|x_k\\|} = r_{jk}$$\n$\\alpha = 90^\\circ \\implies r = 0$ (uncorrelated).",
        "section_reference": "Section 3.2: Observation Space",
        "section_anchor": "observation-space-n-dimensional-representation"
      },
      {
        "id": "fc_l2_5",
        "segment_id": "ch1-manipulation-distances",
        "order_index": 5,
        "category": "Metrics",
        "front": "What are the three essential axioms of a **Metric Distance**?",
        "back": "1. **Distinguishability**: $D_{ik} \\ge 0$ and $D_{ik} = 0 \\iff i = k$\n2. **Symmetry**: $D_{ik} = D_{ki}$\n3. **Triangle Inequality**: $D_{il} \\le D_{ik} + D_{kl}$",
        "section_reference": "Section 4: Distance Metrics",
        "section_anchor": "4-distance-metrics-in-multivariate-space"
      },
      {
        "id": "fc_l2_6",
        "segment_id": "ch1-manipulation-distances",
        "order_index": 6,
        "category": "Metrics",
        "front": "What is **Statistical Distance**, and how does it improve upon Euclidean Distance?",
        "back": "Statistical distance adjusts Euclidean distance by dividing differences by each variable's standard deviation:\n$$SD_{ik}^2 = \\sum_{j=1}^p \\left(\\frac{x_{ij} - x_{kj}}{s_j}\\right)^2$$\nIt prevents high-variance variables from dominating.",
        "section_reference": "Section 4.2: Statistical Distance",
        "section_anchor": "statistical-distance-variance-standardized"
      },
      {
        "id": "fc_l2_7",
        "segment_id": "ch1-manipulation-distances",
        "order_index": 7,
        "category": "Metrics",
        "front": "What is **Mahalanobis Distance ($MD$)** and what does it account for?",
        "back": "Mahalanobis distance accounts for **both differing variances and inter-variable covariances**:\n$MD_{ik}^2 = (x_i - x_k)^T S^{-1} (x_i - x_k)$\nIt measures distance relative to the data's ellipsoid distribution.",
        "section_reference": "Section 4.3: Mahalanobis Distance",
        "section_anchor": "mahalanobis-distance-covariance-adjusted"
      },
      {
        "id": "fc_l2_8",
        "segment_id": "ch1-manipulation-distances",
        "order_index": 8,
        "category": "Metrics",
        "front": "When does Mahalanobis distance reduce to Statistical distance and Euclidean distance?",
        "back": "- Reduces to **Statistical distance** when variables are uncorrelated ($r = 0$, $S$ is diagonal).\n- Reduces to **Euclidean distance** when variables are uncorrelated and standardized ($S = I$).",
        "section_reference": "Section 4.3: Mahalanobis Distance",
        "section_anchor": "mahalanobis-distance-covariance-adjusted"
      }
    ]
  },
  {
    "segment": {
      "id": "ch2-pca-geometry",
      "discipline_id": "data-analysis",
      "title": "PCA: Geometric Foundations & Projections",
      "subtitle": "Rigorous orthogonal projections, variance maximization along rotated axes, and subspace reconstruction.",
      "order_index": 3,
      "summary_markdown": "# PCA: Geometric Foundations & Coordinate Projections\n\n## 1. Motivation: The Dimensionality Challenge\nWhen analyzing datasets with many correlated variables, examining each variable individually is redundant and overwhelming. For example, a company tracking 30 financial metrics often finds that profitability, liquidity, and leverage indicators share strong mutual correlations.\n\nPrincipal Components Analysis (PCA) addresses this challenge by finding new, uncorrelated linear combinations of the original variables that capture the maximum possible variance of the data cloud in a lower-dimensional subspace.\n\n## 2. The 12-Customer Case Study\nTo build concrete intuition, consider a sample of 12 customers measured on two variables:\n- Variable 1 ($X_1$): Annual Income (in k€/year)\n- Variable 2 ($X_2$): Customer Lifetime Value index (CLV, scale -10 to +10)\n\nSample summary statistics:\n- Sample Means: $\\bar{X}_1 = 8.000$, $\\bar{X}_2 = 3.000$\n- Sample Variances: $s_1^2 = 23.091$, $s_2^2 = 21.091$\n- Total Sample Variance: $\\text{Total Var} = s_1^2 + s_2^2 = 23.091 + 21.091 = 44.182$\n- Sample Correlation: $r_{12} = 0.746$ (strong positive association)\n\nIncome accounts for $52.26\\%$ of total variance and CLV accounts for $47.74\\%$. Neither variable alone provides an efficient 1-dimensional summary.\n\n## 3. Centering the Data Cloud\nThe first step of PCA is centering the data by subtracting the sample means:\n$$x_{c1} = X_1 - 8.000, \\quad x_{c2} = X_2 - 3.000$$\nCentering translates the data scatter so that its centroid is located at the origin $(0, 0)$. Crucially, centering does not change the spread, pairwise distances, variances, or sample covariance ($S_{12} = 16.455$).\n\n## 4. Rotating the Coordinate Axis & Projecting Observations\nTo capture the data cloud along a single new dimension, draw a new coordinate axis $X^*_1$ through the origin at an angle $\\theta$ relative to the horizontal $X_1$ axis.\n\nEvery centered customer point $(x_1, x_2)$ is orthogonally projected onto this new axis. From basic trigonometry, the coordinate of point $(x_1, x_2)$ along the rotated axis $X^*_1$ is:\n$$x^*_1 = \\cos(\\theta) x_1 + \\sin(\\theta) x_2$$\nThe vector of coefficients $(\\cos\\theta, \\sin\\theta)$ has unit length:\n$$\\cos^2(\\theta) + \\sin^2(\\theta) = 1$$\n\n## 5. Variance as a Function of Rotation Angle\nAs the candidate axis rotates from $\\theta = 0^\\circ$ to $90^\\circ$, the sample variance of the projected customer scores changes continuously:\n- At $\\theta = 0^\\circ$: The axis coincides with $X_1$, yielding variance $23.091$ ($52.26\\%$ of total variance).\n- At $\\theta = 20^\\circ$: The variance rises to $33.434$ ($75.67\\%$).\n- At $\\theta = 43.26^\\circ$: The variance reaches its absolute maximum of $38.576$, accounting for $87.31\\%$ of the total sample variance.\n- At $\\theta = 60^\\circ$: The variance drops to $35.841$ ($81.12\\%$).\n- At $\\theta = 90^\\circ$: The axis coincides with $X_2$, yielding variance $21.091$ ($47.74\\%$).\n\nThe maximum variance occurs at $\\theta = 43.26^\\circ$, aligning the axis precisely with the longest elongation of the customer scatter.\n\n## 6. The First Principal Component and Its Orthogonal Complement\nThe axis at angle $\\theta = 43.26^\\circ$ defines the First Principal Component ($PC_1$):\n$$PC_1 = \\cos(43.26^\\circ) x_1 + \\sin(43.26^\\circ) x_2 = 0.728238 x_1 + 0.685324 x_2$$\n$PC_1$ has variance $\\lambda_1 = 38.576$, capturing $87.31\\%$ of total variability.\n\nThe Second Principal Component ($PC_2$) is constructed perpendicular to $PC_1$ by rotating the axis by an additional $90^\\circ$ ($\\\\theta + 90^\\circ = 133.26^\\circ$):\n$$PC_2 = -\\sin(43.26^\\circ) x_1 + \\cos(43.26^\\circ) x_2 = -0.685324 x_1 + 0.728238 x_2$$\n$PC_2$ has variance $\\lambda_2 = 5.606$, accounting for the remaining $12.69\\%$ of total variance.\n\n## 7. Conservation of Total Variance\nA fundamental mathematical theorem of PCA is the strict conservation of total variance:\n$$\\lambda_1 + \\lambda_2 = 38.576 + 5.606 = 44.182 = s_1^2 + s_2^2$$\nPCA does not create or destroy information; it rotates the coordinate system into the principal directions of variation. By retaining only $PC_1$, the analyst reduces dimensionality from 2 variables to 1 while preserving over $87\\%$ of the total sample information."
    },
    "questions": [
      {
        "id": "q_l3_1",
        "segment_id": "ch2-pca-geometry",
        "order_index": 1,
        "difficulty": "easy",
        "question": "What is the primary geometric objective when selecting the direction of the first principal component axis ($PC_1$)?",
        "options": [
          {
            "id": "a",
            "text": "The direction that minimizes total Euclidean distance to the coordinate origin $(0, 0)$ across all raw observations"
          },
          {
            "id": "b",
            "text": "The direction that forces the sample covariance between all pairs of projected observations to reach exactly zero"
          },
          {
            "id": "c",
            "text": "The axis along which the sample variance of the projected customer coordinates is maximized across the data cloud"
          },
          {
            "id": "d",
            "text": "The ray passing through the customer with the highest income and lowest CLV to maximize total data spread"
          },
          {
            "id": "e",
            "text": "The direction perpendicular to the line of best fit from an Ordinary Least Squares regression of Income on CLV"
          },
          {
            "id": "f",
            "text": "The axis along which the sum of raw customer coordinates is set exactly equal to the number of sample observations"
          }
        ],
        "correct_option": "c",
        "explanation": "Geometrically, $PC_1$ is chosen to point along the direction of maximum dispersion in the data cloud, thereby maximizing the variance of the projected scores.",
        "section_reference": "Section 4: Rotating Coordinate Axis & Projecting",
        "section_anchor": "4-rotating-the-coordinate-axis-projecting-observations"
      },
      {
        "id": "q_l3_2",
        "segment_id": "ch2-pca-geometry",
        "order_index": 2,
        "difficulty": "easy",
        "question": "What mathematical constraint is imposed on the directional coefficients $(\\cos\\theta, \\sin\\theta)$ when projecting data onto a principal axis in 2D space?",
        "options": [
          {
            "id": "a",
            "text": "Because rotating uncentered data causes the sample correlation matrix to become non-invertible in software packages"
          },
          {
            "id": "b",
            "text": "Because mean-centering reduces the total number of required principal components by half across dimensions"
          },
          {
            "id": "c",
            "text": "Because centering forces the sum of squared deviations from the origin to equal the sample degrees of freedom"
          },
          {
            "id": "d",
            "text": "Because uncentered data cannot be plotted in two dimensions without introducing severe visual perspective distortion"
          },
          {
            "id": "e",
            "text": "Because without centering at the origin, the first principal axis would point toward the mean rather than along maximum variance"
          },
          {
            "id": "f",
            "text": "Because centering guarantees that all projected coordinate scores will follow a standard normal Gaussian distribution"
          }
        ],
        "correct_option": "e",
        "explanation": "To prevent artificial scaling of variance (since multiplying weights by 10 would multiply variance by 100), the weight vector must have unit Euclidean length: $\\sum w_j^2 = 1$. In 2D, $\\cos^2\\theta + \\sin^2\\theta = 1$.",
        "section_reference": "Section 4: Rotating Coordinate Axis & Projecting",
        "section_anchor": "4-rotating-the-coordinate-axis-projecting-observations"
      },
      {
        "id": "q_l3_3",
        "segment_id": "ch2-pca-geometry",
        "order_index": 3,
        "difficulty": "easy",
        "question": "If two original variables have sample variances of 23.091 and 21.091, what is the sum of the variances of their two principal components ($PC_1$ and $PC_2$)?",
        "options": [
          {
            "id": "a",
            "text": "$t_{A1} = (6.000 \\times 0.728238) + (7.143 \\times 0.685324) = 4.369 + 4.895 = 9.264 \\approx 9.253$"
          },
          {
            "id": "b",
            "text": "$t_{A1} = \\sqrt{6.000^2 + 7.143^2} = \\sqrt{36.000 + 51.023} = \\sqrt{87.023} \\approx 9.329$"
          },
          {
            "id": "c",
            "text": "$t_{A1} = (6.000 + 7.143) / 2 = 13.143 / 2 = 6.572$, taking the arithmetic mean of centered coordinates"
          },
          {
            "id": "d",
            "text": "$t_{A1} = (6.000 \\times 0.685324) - (7.143 \\times 0.728238) = 4.112 - 5.202 = -1.090$"
          },
          {
            "id": "e",
            "text": "$t_{A1} = 6.000 \\times 7.143 = 42.858$, calculating the cross-product area in observation space"
          },
          {
            "id": "f",
            "text": "$t_{A1} = (6.000 - 7.143) \\times \\cos(43.26^\\circ) = -1.143 \\times 0.7282 = -0.832$"
          }
        ],
        "correct_option": "a",
        "explanation": "PCA performs an orthogonal rotation of the coordinate system, which preserves the total variance of the dataset. Therefore, $\\text{Var}(PC_1) + \\text{Var}(PC_2) = \\text{Var}(X_1) + \\text{Var}(X_2) = 44.182$.",
        "section_reference": "Section 7: Conservation of Total Variance",
        "section_anchor": "7-conservation-of-total-variance"
      },
      {
        "id": "q_l3_4",
        "segment_id": "ch2-pca-geometry",
        "order_index": 4,
        "difficulty": "easy",
        "question": "What is the covariance between the scores of the first principal component ($PC_1$) and the second principal component ($PC_2$)?",
        "options": [
          {
            "id": "a",
            "text": "Variance decreases because orthogonal projection eliminates unshared covariance terms from bivariate data"
          },
          {
            "id": "b",
            "text": "Total variance increases to $54.12$, inflated by the trigonometric cross-products of coordinate transformation"
          },
          {
            "id": "c",
            "text": "Total variance drops to $38.576$, because only the first principal component is retained in the subspace"
          },
          {
            "id": "d",
            "text": "Total variance equals zero, because rotating axes to principal orientations centers the coordinate origin"
          },
          {
            "id": "e",
            "text": "Total variance doubles to $88.364$, because both orthogonal axes contribute independent variance components"
          },
          {
            "id": "f",
            "text": "Total variance is strictly preserved: $\\text{Var}(PC_1) + \\text{Var}(PC_2) = 38.576 + 5.606 = 44.182$"
          }
        ],
        "correct_option": "f",
        "explanation": "By mathematical construction, all principal components are chosen to be mutually orthogonal, which ensures that the sample covariance (and correlation) between any pair of distinct component scores is identically zero.",
        "section_reference": "Section 6: PC1 and Its Orthogonal Complement",
        "section_anchor": "6-the-first-principal-component-and-its-orthogonal-complement"
      },
      {
        "id": "q_l3_5",
        "segment_id": "ch2-pca-geometry",
        "order_index": 5,
        "difficulty": "intermediate",
        "question": "At what point does dimensionality reduction actually occur in Principal Components Analysis?",
        "options": [
          {
            "id": "a",
            "text": "Exactly $0.00^\\circ$, aligning the first principal component directly along the horizontal Income axis"
          },
          {
            "id": "b",
            "text": "Approximately $\\theta = 43.26^\\circ$, aligning the coordinate axis directly along the elongated data cloud"
          },
          {
            "id": "c",
            "text": "Exactly $90.00^\\circ$, rotating the basis into the orthogonal complement to maximize vertical projection"
          },
          {
            "id": "d",
            "text": "Exactly $45.00^\\circ$, splitting the angle equally between the Income and Customer Lifetime Value axes"
          },
          {
            "id": "e",
            "text": "Approximately $\\theta = 135.00^\\circ$, inverting the coordinate frame to evaluate negative bivariate drift"
          },
          {
            "id": "f",
            "text": "Approximately $\\theta = 180.00^\\circ$, reversing the positive direction of the customer centroid ray"
          }
        ],
        "correct_option": "b",
        "explanation": "Computing all $p$ principal axes is merely a change of coordinates (a rigid rotation of axes) with zero loss of dimensionality. Dimensionality reduction occurs only when $k < p$ components are retained and the remaining directions of variation are discarded.",
        "section_reference": "Section 1: Motivation & Dimensionality Challenge",
        "section_anchor": "1-motivation-the-dimensionality-challenge"
      },
      {
        "id": "q_l3_6",
        "segment_id": "ch2-pca-geometry",
        "order_index": 6,
        "difficulty": "intermediate",
        "question": "In the 12-customer Income ($X_1$) and CLV ($X_2$) dataset, Customer A has centered coordinates $(x_1 = 8, x_2 = 5)$. If $PC_1 = 0.728238 x_1 + 0.685324 x_2$, what is Customer A’s score on $PC_1$?",
        "options": [
          {
            "id": "a",
            "text": "To prevent sample covariance from becoming negative, which would violate positive semi-definiteness"
          },
          {
            "id": "b",
            "text": "To force the projected component scores to follow a standardized normal distribution with unit variance"
          },
          {
            "id": "c",
            "text": "To ensure that all customer observations receive equal weight regardless of their distance from centroid"
          },
          {
            "id": "d",
            "text": "To fix the scale of the axis; otherwise variance could be made arbitrarily large by scaling weights to infinity"
          },
          {
            "id": "e",
            "text": "To eliminate the need for matrix inversion when calculating sample eigenvalues in statistical packages"
          },
          {
            "id": "f",
            "text": "To guarantee that the second principal component is an exact 180-degree reflection of the first axis"
          }
        ],
        "correct_option": "d",
        "explanation": "The score is the linear projection of the centered observation onto the component weights: $t_{A1} = 0.728238(8) + 0.685324(5) = 5.8259 + 3.4266 = 9.2525 \\approx 9.253$.",
        "section_reference": "Section 4: Rotating Coordinate Axis & Projecting",
        "section_anchor": "4-rotating-the-coordinate-axis-projecting-observations"
      },
      {
        "id": "q_l3_7",
        "segment_id": "ch2-pca-geometry",
        "order_index": 7,
        "difficulty": "intermediate",
        "question": "Why does reversing the direction of a principal component axis (multiplying its weight vector by $-1$) have zero impact on the variance explained or the relative distances between observations?",
        "options": [
          {
            "id": "a",
            "text": "$38.576 / 50.000 = 77.15\\%$, comparing the leading eigenvalue against total uncentered customer sums"
          },
          {
            "id": "b",
            "text": "$38.576 / 44.182 = 87.31\\%$, capturing the dominant proportion of total bivariate sample dispersion"
          },
          {
            "id": "c",
            "text": "$38.576 / 100.000 = 38.58\\%$, evaluating the eigenvalue directly as an unscaled percentage metric"
          },
          {
            "id": "d",
            "text": "$5.606 / 44.182 = 12.69\\%$, measuring the residual noise captured along the orthogonal complementary axis"
          },
          {
            "id": "e",
            "text": "$38.576 / (38.576 - 5.606) = 117.0\\%$, evaluating the eigenvalue ratio against the net variance spread"
          },
          {
            "id": "f",
            "text": "$\\sqrt{38.576 / 44.182} = \\sqrt{0.8731} = 93.44\\%$, taking the vector correlation norm of the root"
          }
        ],
        "correct_option": "b",
        "explanation": "A principal component is a line in space. Whether we define the positive direction pointing up-right or down-left does not change the line or the variance along it ($(-t)^2 = t^2$). Distances between points $(t_i - t_k)^2 = (-t_i - (-t_k))^2$ remain identical.",
        "section_reference": "Section 6: PC1 and Its Orthogonal Complement",
        "section_anchor": "6-the-first-principal-component-and-its-orthogonal-complement"
      },
      {
        "id": "q_l3_8",
        "segment_id": "ch2-pca-geometry",
        "order_index": 8,
        "difficulty": "intermediate",
        "question": "In a dataset with $p$ variables and $n$ observations, what is the maximum number of non-zero eigenvalues (non-zero variance components) that can exist from centered data?",
        "options": [
          {
            "id": "a",
            "text": "At an angle of $\\theta + 45^\\circ = 88.26^\\circ$, bisecting the remaining quadrant in bivariate space"
          },
          {
            "id": "b",
            "text": "Parallel to the first component ($43.26^\\circ$), with direction weights scaled by the residual eigenvalue"
          },
          {
            "id": "c",
            "text": "Along the horizontal axis ($0.00^\\circ$), anchoring residual dispersion to the original Income variable"
          },
          {
            "id": "d",
            "text": "At $\\theta + 90^\\circ = 133.26^\\circ$, pointing in the mutually orthogonal direction to ensure zero correlation"
          },
          {
            "id": "e",
            "text": "Along the vertical axis ($90.00^\\circ$), anchoring residual dispersion to Customer Lifetime Value"
          },
          {
            "id": "f",
            "text": "At an angle of $180^\\circ - \\theta = 136.74^\\circ$, reflecting the leading axis across the vertical ordinate"
          }
        ],
        "correct_option": "d",
        "explanation": "Centering $n$ observations imposes 1 linear restriction (the sum of deviations is zero), giving the centered data matrix a maximum rank of $n - 1$. Since the data dimension is $p$, the rank of $X_c$ (and covariance matrix $S$) cannot exceed $\\min(p, n - 1)$.",
        "section_reference": "Section 7: Conservation of Total Variance",
        "section_anchor": "7-conservation-of-total-variance"
      },
      {
        "id": "q_l3_9",
        "segment_id": "ch2-pca-geometry",
        "order_index": 9,
        "difficulty": "hard",
        "question": "In the 2-variable Income and CLV example, the candidate axis variance at $\\theta = 10^\\circ$ is $28.658$ ($64.86\\%$), while at $\\theta = 43.26^\\circ$ it reaches the global maximum of $38.576$ ($87.31\\%$). If an analyst instead rotates the axis to $\\theta = 133.26^\\circ$ ($43.26^\\circ + 90^\\circ$), what will the variance of the projected scores be?",
        "options": [
          {
            "id": "a",
            "text": "Exactly $5.606$, corresponding to the variance of $PC_2$, because the orthogonal complement captures the remaining variance"
          },
          {
            "id": "b",
            "text": "Zero ($0.000$), because rotating an axis by 90 degrees eliminates all projected coordinate variance from the data cloud"
          },
          {
            "id": "c",
            "text": "Negative $38.576$, because adding 90 degrees inverts the sign of the leading eigenvalue across the coordinate plane"
          },
          {
            "id": "d",
            "text": "Exactly $44.182$, because any orthogonal rotation angle preserves the total combined variance of the bivariate system"
          },
          {
            "id": "e",
            "text": "Exactly $21.091$, corresponding to the unrotated variance of the second original variable before principal components"
          },
          {
            "id": "f",
            "text": "Exactly $19.288$, representing the midpoint between the minimum and maximum variances across all candidate angles"
          }
        ],
        "correct_option": "a",
        "explanation": "The axis at $\\theta + 90^\\circ$ is the orthogonal complement ($PC_2$). Because total variance ($44.182$) is conserved across orthogonal directions, the variance at $43.26^\\circ + 90^\\circ$ must be exactly $44.182 - 38.576 = 5.606$.",
        "section_reference": "Section 5: Variance as a Function of Rotation Angle",
        "section_anchor": "5-variance-as-a-function-of-rotation-angle"
      },
      {
        "id": "q_l3_10",
        "segment_id": "ch2-pca-geometry",
        "order_index": 10,
        "difficulty": "hard",
        "question": "Suppose we discard $PC_2$ (variance $\\lambda_2 = 5.606$) and retain only $PC_1$ to represent the 12 customers. What is the total sum of squared Euclidean reconstruction errors across all 12 observations when projecting from 1D back to the original 2D space?",
        "options": [
          {
            "id": "a",
            "text": "Exactly $5.606$, representing the per-observation variance of the discarded component without sample size weighting"
          },
          {
            "id": "b",
            "text": "Exactly $12 \\times 38.576 = 462.91$, multiplying the retained eigenvalue by total sample size across observations"
          },
          {
            "id": "c",
            "text": "Exactly $44.182 / 12 = 3.682$, averaging total system variance across all customer observations in the sample"
          },
          {
            "id": "d",
            "text": "Zero, because orthogonal projections preserve complete Euclidean information and eliminate reconstruction discrepancies"
          },
          {
            "id": "e",
            "text": "$(n - 1) \\times \\lambda_2 = 11 \\times 5.606005 = 61.666$, representing total sum of squared residuals along discarded dimensions"
          },
          {
            "id": "f",
            "text": "Exactly $254.000 - 232.000 = 22.000$, subtracting the centered trace from the raw uncorrected observation sums"
          }
        ],
        "correct_option": "e",
        "explanation": "The reconstruction error for each observation is its squared coordinate on the discarded axis ($PC_2$). The sum of squared scores on $PC_2$ is the Sum of Squares of $PC_2$, which equals $(n - 1) \\times \\text{Var}(PC_2) = 11 \\times 5.606005 = 61.666$. This matches slide 17 and 24 of Chapter 2.",
        "section_reference": "Section 7: Conservation of Total Variance",
        "section_anchor": "7-conservation-of-total-variance"
      },
      {
        "id": "q_l3_11",
        "segment_id": "ch2-pca-geometry",
        "order_index": 11,
        "difficulty": "hard",
        "question": "Two customers, Customer D and Customer E, have very similar scores on $PC_1$ ($t_{D1} = 1.499$, $t_{E1} = 4.883$). However, in the original 2D space, their centered coordinates are $D = (3, -1)$ and $E = (2, 5)$. What geometric phenomenon explains how two points can appear relatively close on $PC_1$ despite being far apart in the original space?",
        "options": [
          {
            "id": "a",
            "text": "Customer D is an outlier that was automatically adjusted by the projection algorithm to match Customer E coordinates"
          },
          {
            "id": "b",
            "text": "PCA inverted their income scales because Customer Lifetime Value is mathematically bounded between 0 and 100 in data"
          },
          {
            "id": "c",
            "text": "The correlation between Income and CLV was negative for those two specific individuals while positive across the rest"
          },
          {
            "id": "d",
            "text": "Their Mahalanobis distance is zero because both customers share identical coordinate projections along the centroid ray"
          },
          {
            "id": "e",
            "text": "The cosine of their angle in individual space equals 1.0, forcing their projected coordinates to coalesce on $PC_1$"
          },
          {
            "id": "f",
            "text": "They differ substantially along the discarded $PC_2$ axis ($t_{D2} = -5.008$ vs $t_{E2} = 1.085$), which dimensionality reduction ignored"
          }
        ],
        "correct_option": "f",
        "explanation": "When reducing from 2D to 1D, points are projected onto the $PC_1$ line. Points that have similar projections onto $PC_1$ may differ substantially along the discarded perpendicular axis ($PC_2$). Customer D has $t_{D2} = -2.784$ while E has $t_{E2} = +2.271$, a difference of over 5 units lost upon reduction.",
        "section_reference": "Section 6: PC1 and Its Orthogonal Complement",
        "section_anchor": "6-the-first-principal-component-and-its-orthogonal-complement"
      },
      {
        "id": "q_l3_12",
        "segment_id": "ch2-pca-geometry",
        "order_index": 12,
        "difficulty": "hard",
        "question": "In Principal Components Analysis with centered data on $p$ variables measured across $n$ observations, at most how many principal components can have non-zero variance?",
        "options": [
          {
            "id": "a",
            "text": "Always exactly $p$ components regardless of sample size $n$, because each original variable generates one non-zero orthogonal axis"
          },
          {
            "id": "b",
            "text": "Always exactly $p - 1$ components, because one dimension is automatically eliminated by the orthogonal rotation algorithm"
          },
          {
            "id": "c",
            "text": "At most $\\min(p, n - 1)$ components, because mean-centering removes one degree of freedom, restricting data to at most $n - 1$ dimensions"
          },
          {
            "id": "d",
            "text": "Exactly $n$ components, because the number of possible principal directions corresponds to the number of sample observations"
          },
          {
            "id": "e",
            "text": "At most $p / 2$ components, because orthogonal complementary pairs cancel out each other's variances"
          },
          {
            "id": "f",
            "text": "Exactly $\\min(p, n)$ components, because raw observation ranks allow full dimensionality without subtracting degrees of freedom"
          }
        ],
        "correct_option": "c",
        "explanation": "According to Chapter 2 Slide 20, mean-centering the data removes one degree of freedom, restricting the cloud of points to at most an $(n - 1)$-dimensional subspace. Therefore, the maximum number of principal components with non-zero variance (positive eigenvalues) is at most $\\min(p, n - 1)$.",
        "section_reference": "Section 3: Centering the Data Cloud",
        "section_anchor": "3-centering-the-data-cloud"
      }
    ],
    "flashcards": [
      {
        "id": "fc_l3_1",
        "segment_id": "ch2-pca-geometry",
        "order_index": 1,
        "category": "Foundations",
        "front": "What is the primary objective of **Principal Components Analysis (PCA)**?",
        "back": "To construct **uncorrelated linear combinations** of $p$ original variables that maximize retained variance, allowing a small number of components $k < p$ to summarize the data cloud.",
        "section_reference": "Section 1: Motivation & Dimensionality Challenge",
        "section_anchor": "1-motivation-the-dimensionality-challenge"
      },
      {
        "id": "fc_l3_2",
        "segment_id": "ch2-pca-geometry",
        "order_index": 2,
        "category": "Projections",
        "front": "What is the formula for projecting a 2D centered observation $(x_1, x_2)$ onto a candidate axis at angle $\\theta$?",
        "back": "$$x^*_1 = \\cos(\\theta) x_1 + \\sin(\\theta) x_2$$\nwhere coefficients satisfy the unit-length constraint $\\cos^2(\\theta) + \\sin^2(\\theta) = 1$.",
        "section_reference": "Section 4: Rotating Coordinate Axis & Projecting",
        "section_anchor": "4-rotating-the-coordinate-axis-projecting-observations"
      },
      {
        "id": "fc_l3_3",
        "segment_id": "ch2-pca-geometry",
        "order_index": 3,
        "category": "Optimization",
        "front": "In the 12-customer Income vs CLV example, at what angle $\\theta$ does projected variance reach its maximum?",
        "back": "At **$\\theta = 43.26^\\circ$**, where variance reaches **$38.576$**, explaining **$87.31\\%$** of total variance.",
        "section_reference": "Section 5: Variance as a Function of Rotation Angle",
        "section_anchor": "5-variance-as-a-function-of-rotation-angle"
      },
      {
        "id": "fc_l3_4",
        "segment_id": "ch2-pca-geometry",
        "order_index": 4,
        "category": "Properties",
        "front": "How is the second principal component ($PC_2$) defined geometrically relative to $PC_1$?",
        "back": "It is perpendicular (**orthogonal**, at angle $\\theta + 90^\\circ$) to $PC_1$, capturing the maximum remaining variance ($12.69\\%$ in the 2D example).",
        "section_reference": "Section 6: PC1 and Its Orthogonal Complement",
        "section_anchor": "6-the-first-principal-component-and-its-orthogonal-complement"
      },
      {
        "id": "fc_l3_5",
        "segment_id": "ch2-pca-geometry",
        "order_index": 5,
        "category": "Conservation",
        "front": "What is the **Total Variance Preservation** property of PCA?",
        "back": "The sum of the variances of all $p$ principal components identically equals the sum of the variances of the original variables:\n$$\\sum_{i=1}^p \\text{Var}(PC_i) = \\sum_{j=1}^p s_j^2$$",
        "section_reference": "Section 7: Conservation of Total Variance",
        "section_anchor": "7-conservation-of-total-variance"
      },
      {
        "id": "fc_l3_6",
        "segment_id": "ch2-pca-geometry",
        "order_index": 6,
        "category": "Distinction",
        "front": "What is the difference between keeping all $p$ principal components vs keeping $k < p$ components?",
        "back": "- Keeping all $p$ axes is merely a **rigid coordinate rotation** (zero loss of information or dimensionality).\n- Keeping $k < p$ axes achieves **dimensionality reduction**, exchanging discarded variance for lower complexity.",
        "section_reference": "Section 7: Conservation of Total Variance",
        "section_anchor": "7-conservation-of-total-variance"
      },
      {
        "id": "fc_l3_7",
        "segment_id": "ch2-pca-geometry",
        "order_index": 7,
        "category": "Errors",
        "front": "What is the total squared reconstruction error when discarding the remaining components?",
        "back": "For centered data, the total squared reconstruction error across all $n$ observations is **$(n - 1) \\times$ the sum of discarded eigenvalues**:\n$$\\text{Total Error} = (n - 1) \\sum_{i=k+1}^p \\lambda_i$$",
        "section_reference": "Section 7: Conservation of Total Variance",
        "section_anchor": "7-conservation-of-total-variance"
      },
      {
        "id": "fc_l3_8",
        "segment_id": "ch2-pca-geometry",
        "order_index": 8,
        "category": "Indeterminacy",
        "front": "Why are a principal component and its negative mathematically equivalent?",
        "back": "Multiplying weights by $-1$ flips the axis direction, but the axis remains the exact same line in space. Variances, Euclidean distances, and reconstruction errors are completely unchanged.",
        "section_reference": "Section 6: PC1 and Its Orthogonal Complement",
        "section_anchor": "6-the-first-principal-component-and-its-orthogonal-complement"
      }
    ]
  },
  {
    "segment": {
      "id": "ch2-pca-analytical",
      "discipline_id": "data-analysis",
      "order_index": 4,
      "title": "PCA: Covariance vs. Correlation, Loadings & Retention Diagnostics",
      "subtitle": "Scale sensitivity problem, distinguishing weights vs loadings, Kaiser/Scree/variance criteria, regional profiling, and software.",
      "summary_markdown": "# PCA: Covariance vs. Correlation, Loadings & Retention Diagnostics\n\n## 1. Covariance PCA vs. Correlation PCA (The Scale Sensitivity Dilemma)\nIn general multivariate analysis with $p$ continuous variables, analysts must decide whether to perform Principal Components Analysis on the sample covariance matrix ($S$) or the sample correlation matrix ($R$). This choice is critical because the two methods yield fundamentally different components and are not scale-invariant.\n\n### The Scale Sensitivity of Covariance PCA\nIn Covariance PCA, total system variance is the sum of the raw sample variances across all $p$ variables:\n$$\\text{Total Variance} = \\text{tr}(S) = \\sum_{j=1}^p s_j^2$$\nIf variables are measured in non-comparable physical units (e.g., annual income in tens of thousands of Euros versus customer age in years), or possess widely differing numerical ranges, Covariance PCA is severely distorted by scale. \n\nBecause variance is a quadratic dispersion metric:\n$$\\text{Var}(c X_j) = c^2 \\text{Var}(X_j)$$\nmultiplying a variable by a scale factor $c = 1,000$ (e.g., converting a measurement from kilograms to grams) inflates its sample variance by a factor of $1,000^2 = 1,000,000$. In Covariance PCA, the leading principal component ($PC_1$) seeks the direction of maximum sample variance. Consequently, any variable with an arbitrarily large measurement scale will mechanically dominate $PC_1$, regardless of whether it shares meaningful covariation with the rest of the dataset.\n\n### When to Use Correlation PCA\nWhen variables are measured in different units, arbitrary survey rating scales, or widely varying dispersions, variables must be standardized before performing PCA. Standardizing each variable by subtracting its sample mean and dividing by its sample standard deviation:\n$$Z_j = \\frac{X_j - \\bar{x}_j}{s_j}$$\nassigns every variable an identical sample variance of $1.0$. \n\nPerforming PCA on these standardized variables ($Z$) is mathematically identical to performing PCA directly on the sample correlation matrix ($R$). In Correlation PCA:\n- Every original variable contributes exactly $1.0$ unit of standardized variance.\n- Total system variance equals the number of variables: $\\text{tr}(R) = p$.\n- The average eigenvalue is always exactly:\n  $$\\bar{\\lambda} = \\frac{\\text{tr}(R)}{p} = \\frac{p}{p} = 1.0$$\nIn Covariance PCA, by contrast, the average eigenvalue is $\\bar{\\lambda} = \\text{tr}(S)/p$, which depends entirely on the raw physical units.\n\n### Real Course Case: 25 US Cities Food Prices\nTo see the scale sensitivity dilemma in practice, consider the classic benchmark study of food prices across 25 US metropolitan areas (Chapter 2 Exercise 1). The dataset records the average price per kg for five staple food commodities: Bread ($X_1$), Hamburger ($X_2$), Milk ($X_3$), Oranges ($X_4$), and Potatoes ($X_5$).\n\nWhen analyzing the raw covariance matrix, high-dispersion commodities (like meat and fresh fruit) heavily dictate the leading components, while low-priced staples contribute little variance. Standardizing to Correlation PCA gives each of the five food categories an equal initial baseline weight ($s_j^2 = 1.0$), allowing the analysis to uncover true underlying purchasing cost dimensions across cities (such as the high-cost profile of Anchorage, Alaska) independent of base commodity prices.\n\n---\n\n## 2. Four Key Quantities (Eigenvalues, Weights, Scores & Loadings)\nIn applied PCA, interpreting results requires distinguishing four closely related quantities that must never be confused:\n\n### 1. Eigenvalue (\\lambda_i)\nThe eigenvalue represents the actual sample variance of the $i$-th principal component:\n$$\\text{Var}(PC_i) = \\lambda_i$$\nBecause principal components are ordered by decreasing variance, $\\lambda_1 \\ge \\lambda_2 \\ge \\dots \\ge \\lambda_p \\ge 0$.\n\n### 2. Eigenvector Weights (w_i)\nThe eigenvector $w_i = (w_{i1}, w_{i2}, \\dots, w_{ip})^T$ contains the normalized linear combination coefficients used to project centered variables onto the $i$-th principal axis:\n$$PC_i = w_{i1} x_1 + w_{i2} x_2 + \\dots + w_{ip} x_p$$\nEach eigenvector satisfies the unit-length normalization constraint:\n$$\\sum_{j=1}^p w_{ij}^2 = w_i^T w_i = 1.0$$\n\n### 3. Component Score (t_{hi})\nThe component score is the actual numerical coordinate of observation $h$ when projected onto the $i$-th principal axis:\n$$t_{hi} = w_i^T x_h = \\sum_{j=1}^p w_{ij} x_{hj}$$\nIn standardized space, an observation with positive scores on $PC_1$ is above average on the characteristics captured by the first component.\n\n### 4. Factor Loading (l_{ji})\nA factor loading is the Pearson correlation between original variable $X_j$ and principal component $PC_i$:\n$$l_{ji} = \\text{Corr}(X_j, PC_i) = w_{ij} \\frac{\\sqrt{\\lambda_i}}{s_j}$$\nWhen analyzing standardized variables in Correlation PCA (where $s_j = 1.0$), the formula simplifies directly to:\n$$l_{ji} = w_{ij} \\sqrt{\\lambda_i}$$\nThe squared factor loading $l_{ji}^2$ represents the proportion of variable $X_j$'s variance explained by component $PC_i$.\n\n---\n\n## 3. Component Retention Criteria (Stopping Rules)\nRetaining all $p$ components defeats the purpose of dimensionality reduction. Analysts rely on three complementary stopping rules to determine how many components to keep:\n\n### Kaiser Criterion (Eigenvalue-Greater-Than-One Rule)\nIn Correlation PCA, retain only components with eigenvalues strictly greater than 1.0:\n$$\\lambda_i > 1.0$$\nBecause each standardized variable contributes exactly $1.0$ unit of variance, any component with an eigenvalue below $1.0$ explains less variance than a single original variable. \n\nCrucially, the Kaiser cutoff of 1.0 cannot be applied blindly to Covariance PCA, where total variance is $\\text{tr}(S) \\neq p$ and the average eigenvalue is $\\text{tr}(S)/p$. In Covariance PCA, the comparable threshold is retaining components whose eigenvalue exceeds the average eigenvalue $\\bar{\\lambda}$.\n\n### Cattell Scree Test (Elbow Rule)\nThe Scree plot displays ordered eigenvalues on the vertical axis against the component index ($1, 2, \\dots, p$) on the horizontal axis. Analysts identify the \"elbow\" or point of inflection where the steep cliff transitions into a gradual, horizontal scree slope. Components appearing before the elbow are retained.\n\n### Cumulative Percentage of Explained Variance\nAnalysts set a minimum cumulative variance threshold—typically $70\\%$, $75\\%$, or $80\\%$—and retain the smallest number of components $k$ required to reach that threshold:\n$$\\frac{\\sum_{i=1}^k \\lambda_i}{\\sum_{i=1}^p \\lambda_i} \\ge 0.70$$\n\n---\n\n## 4. Real-World Case Study: Portuguese Regional Assessment\nTo see applied PCA in action, consider the regional socio-economic assessment from Chapter 2 (Slides 48–51), analyzing $n = 7$ Portuguese administrative regions across 5 standardized indicators:\n1. $\\text{DEN}$: Population Density\n2. $\\text{GDP}$: Gross Domestic Product per capita\n3. $\\text{MED}$: Doctors per 1,000 residents\n4. $\\text{HOS}$: Hospital beds per 1,000 residents\n5. $\\text{BIB}$: Public libraries per 10,000 residents\n\nThe extracted factor loadings reveal clear substantive patterns:\n- First Principal Component ($PC_1$ - Public Infrastructure: Health & Culture): Has very high positive loadings on $\\text{MED}$ ($0.957$), $\\text{HOS}$ ($0.933$), and $\\text{BIB}$ ($0.942$). It reflects regional public investment in healthcare, culture, and community facilities.\n- Second Principal Component ($PC_2$ - Economic Wealth & Urban Density): Has high positive loadings on $\\text{GDP}$ ($0.750$) and $\\text{DEN}$ ($0.670$), capturing urban agglomeration and commercial economic output.\n\nPlotting regions in the 2D coordinate space of ($PC_1, PC_2$) reveals that Lisbon scores high on both infrastructure and economic wealth, Madeira scores high on economic activity but moderate on public health infrastructure, while Alentejo exhibits a rural infrastructure profile.\n\n---\n\n## 5. Practical Software Execution (SAS & Python)\nIn applied data analytics, executing PCA efficiently requires understanding software defaults:\n\n### SAS Implementation\nIn SAS, Principal Components Analysis is executed using `PROC PRINCOMP`:\n```sas\n/* Correlation PCA (Default in SAS) */\nproc princomp data=RegionalData plots=scree;\n   var DEN GDP MED HOS BIB;\nrun;\n\n/* Covariance PCA (Requested via the COV option) */\nproc princomp data=RegionalData cov plots=scree;\n   var DEN GDP MED HOS BIB;\nrun;\n```\nBy default, SAS analyzes the correlation matrix $R$. Adding the `COV` option forces SAS to analyze the raw covariance matrix $S$.\n\n### Python Implementation\nIn Python `scikit-learn`, the `PCA` class performs Singular Value Decomposition (SVD) on centered raw data (Covariance PCA) by default without internal feature standardization:\n```python\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.decomposition import PCA\nimport numpy as np\n\n# Step 1: Standardize features to unit variance (Required for Correlation PCA)\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)\n\n# Step 2: Fit PCA on standardized data\npca = PCA(n_components=2)\nscores = pca.fit_transform(X_scaled)\n\n# Step 3: Compute factor loadings (eigenvector * sqrt(eigenvalue))\nloadings = pca.components_.T * np.sqrt(pca.explained_variance_)\n```\nTo perform Correlation PCA in Python, the analyst must explicitly apply `StandardScaler()` before calling `PCA()`.",
      "created_at": "2026-10-29T12:38:51.277563+00:00"
    },
    "questions": [
      {
        "id": "q_l4_1",
        "segment_id": "ch2-pca-analytical",
        "order_index": 1,
        "difficulty": "easy",
        "pool_type": "quiz",
        "section_reference": "Section 2: Four Key Quantities (Eigenvalues, Weights, Scores & Loadings)",
        "section_anchor": "four-key-quantities",
        "question": "What does a factor loading ($l_{ji}$) quantify in Principal Components Analysis?",
        "options": [
          {
            "id": "a",
            "text": "The sample size frequency count of observations belonging to an empirical cluster in multidimensional space"
          },
          {
            "id": "b",
            "text": "The degrees of freedom remaining in the residual covariance matrix after omitting insignificant components"
          },
          {
            "id": "c",
            "text": "The Pearson correlation between an original variable and a principal component: $l_{ji} = \\text{Corr}(X_j, PC_i)$"
          },
          {
            "id": "d",
            "text": "The ratio of leading eigenvalues between the first and second components: $\\lambda_1 / \\lambda_2$, measuring relative dominance"
          },
          {
            "id": "e",
            "text": "The standardized difference between the variable sample mean and sample median across observation records"
          },
          {
            "id": "f",
            "text": "The two-tailed p-value obtained when testing the statistical significance of orthogonal component scores"
          }
        ],
        "correct_option": "c",
        "explanation": "As defined in Chapter 2, a factor loading ($l_{ji}$) is the Pearson product-moment correlation between original variable $X_j$ and principal component $PC_i$: $l_{ji} = \\text{Corr}(X_j, PC_i) = w_{ij}\\frac{\\sqrt{\\lambda_i}}{s_j}$. When variables are standardized, it simplifies to $l_{ji} = w_{ij}\\sqrt{\\lambda_i}$."
      },
      {
        "id": "q_l4_2",
        "segment_id": "ch2-pca-analytical",
        "order_index": 2,
        "difficulty": "easy",
        "pool_type": "quiz",
        "section_reference": "Section 3: Component Retention Criteria",
        "section_anchor": "component-retention-criteria",
        "question": "Under the Kaiser (eigenvalue-greater-than-one) criterion in Correlation PCA, which principal components are retained?",
        "options": [
          {
            "id": "a",
            "text": "All components with eigenvalues greater than 1.0 ($\\lambda_i > 1$), ensuring components account for more variance than one original variable"
          },
          {
            "id": "b",
            "text": "All components with eigenvalues less than 0.50 ($\\lambda_i < 0.50$), retaining residual noise dimensions for secondary sensitivity tests"
          },
          {
            "id": "c",
            "text": "Always exactly 2 components regardless of eigenvalue magnitudes, matching standard 2-dimensional visual plotting constraints"
          },
          {
            "id": "d",
            "text": "All components required to explain at least 99% of total cumulative variance, preventing any information loss during reduction"
          },
          {
            "id": "e",
            "text": "All components whose corresponding eigenvector weights are strictly positive across all original variable indicators"
          },
          {
            "id": "f",
            "text": "Only the single leading component that yields the largest factor loading, collapsing the multivariate system to 1 dimension"
          }
        ],
        "correct_option": "a",
        "explanation": "The Kaiser criterion retains only components with eigenvalues $\\lambda_i > 1.0$. Because each standardized variable contributes exactly 1.0 unit of variance in Correlation PCA, any component with an eigenvalue less than 1.0 explains less information than a single original variable."
      },
      {
        "id": "q_l4_3",
        "segment_id": "ch2-pca-analytical",
        "order_index": 3,
        "difficulty": "intermediate",
        "pool_type": "quiz",
        "section_reference": "Section 3: Component Retention Criteria",
        "section_anchor": "component-retention-criteria",
        "question": "In a Cattell scree plot, how does an analyst identify the number of principal components to retain?",
        "options": [
          {
            "id": "a",
            "text": "The highest global maximum point on the vertical y-axis, identifying the primary principal component variance"
          },
          {
            "id": "b",
            "text": "The coordinate intersection where the eigenvalue scree curve crosses the horizontal zero-variance baseline axis"
          },
          {
            "id": "c",
            "text": "The point where cumulative explained variance reaches 100%, indicating complete preservation of multivariate information"
          },
          {
            "id": "d",
            "text": "The midpoint between the largest and smallest observed eigenvalues, establishing an empirical arithmetic average cutoff"
          },
          {
            "id": "e",
            "text": "The \"elbow\" or point of inflection where the steep drop levels off into a gradual scree slope; retain components before this point"
          },
          {
            "id": "f",
            "text": "The inflection point where the scree slope turns sharply downward into a negative exponential decay trajectory"
          }
        ],
        "correct_option": "e",
        "explanation": "Cattell's scree test plots eigenvalues against component order. The analyst retains components located before the \"elbow\" or point of inflection where the steep cliff levels off into a horizontal slope of residual scree."
      },
      {
        "id": "q_l4_4",
        "segment_id": "ch2-pca-analytical",
        "order_index": 4,
        "difficulty": "intermediate",
        "pool_type": "quiz",
        "section_reference": "Section 4: Portuguese Regional Assessment",
        "section_anchor": "portuguese-regional-assessment",
        "question": "In the Portuguese 7-regions case study from Chapter 2, what substantive dimension does the first principal component ($PC_1$) represent?",
        "options": [
          {
            "id": "a",
            "text": "Manufacturing Industrial Capacity: Heavy Equipment and Steel Output across manufacturing districts"
          },
          {
            "id": "b",
            "text": "Public Infrastructure: Health and Culture, reflecting high loadings on doctors, pharmacies, and museums"
          },
          {
            "id": "c",
            "text": "Agricultural Productivity and Rural Land Cultivation Density across interior agrarian municipalities"
          },
          {
            "id": "d",
            "text": "Foreign Direct Investment and Export Logistics Capacity across coastal maritime shipping terminals"
          },
          {
            "id": "e",
            "text": "Demographic Emigration and Rural Depopulation Intensity across isolated interior mountainous zones"
          },
          {
            "id": "f",
            "text": "Commercial Real Estate Indebtedness and Private Banking Credit Exposure across corporate centers"
          }
        ],
        "correct_option": "b",
        "explanation": "In the Portuguese regions case study (Slides 48–51), $PC_1$ has high positive correlations with Doctors ($0.957$), Hospital beds ($0.933$), and Public libraries ($0.942$), capturing Public Infrastructure (Health and Culture)."
      },
      {
        "id": "q_l4_5",
        "segment_id": "ch2-pca-analytical",
        "order_index": 5,
        "difficulty": "hard",
        "pool_type": "quiz",
        "section_reference": "Section 2: Four Key Quantities (Eigenvalues, Weights, Scores & Loadings)",
        "section_anchor": "four-key-quantities",
        "question": "What is the formal mathematical formula relating factor loading $l_{ji}$ to eigenvector weight $w_{ij}$, eigenvalue $\\lambda_i$, and variable standard deviation $s_j$?",
        "options": [
          {
            "id": "a",
            "text": "$l_{ji} = w_{ij} \\times s_j / \\sqrt{\\lambda_i}$, dividing the eigenvector weight by the standard deviation of component scores"
          },
          {
            "id": "b",
            "text": "$l_{ji} = \\lambda_i / (w_{ij} + s_j)$, taking the ratio of the characteristic root to the sum of weights and standard deviations"
          },
          {
            "id": "c",
            "text": "$l_{ji} = w_{ij}^2 \\times \\lambda_i$, multiplying the squared eigenvector coefficient by the system characteristic eigenvalue"
          },
          {
            "id": "d",
            "text": "$l_{ji} = w_{ij} \\frac{\\sqrt{\\lambda_i}}{s_j}$ where $s_j$ is the standard deviation of variable $X_j$ and $\\lambda_i$ is the eigenvalue"
          },
          {
            "id": "e",
            "text": "$l_{ji} = \\sqrt{w_{ij} \\lambda_i s_j}$, taking the geometric root across eigenvector weights, eigenvalues, and variable dispersion"
          },
          {
            "id": "f",
            "text": "$l_{ji} = s_j / \\lambda_i$, evaluating the ratio of original sample standard deviation to the principal component variance"
          }
        ],
        "correct_option": "d",
        "explanation": "As proven in Chapter 2, $l_{ji} = \\text{Corr}(X_j, PC_i) = \\frac{\\text{Cov}(X_j, PC_i)}{s_j \\sqrt{\\lambda_i}} = \\frac{w_{ij} \\lambda_i}{s_j \\sqrt{\\lambda_i}} = w_{ij} \\frac{\\sqrt{\\lambda_i}}{s_j}$. When data are standardized ($s_j = 1$), this reduces to $l_{ji} = w_{ij}\\sqrt{\\lambda_i}$."
      },
      {
        "id": "q_l4_6",
        "segment_id": "ch2-pca-analytical",
        "order_index": 6,
        "difficulty": "intermediate",
        "pool_type": "quiz",
        "section_reference": "Section 3: Component Retention Criteria",
        "section_anchor": "component-retention-criteria",
        "question": "Why is Kaiser's eigenvalue cutoff of 1.0 mathematically invalid when applied to Principal Components Analysis on the covariance matrix ($S$)?",
        "options": [
          {
            "id": "a",
            "text": "Because Covariance PCA generates imaginary complex eigenvalues whenever raw variables have unequal measurement units"
          },
          {
            "id": "b",
            "text": "Because Covariance PCA does not permit the computation of characteristic roots or spectral eigenvectors in software"
          },
          {
            "id": "c",
            "text": "Because Kaiser developed his eigenvalue criterion exclusively for nonmetric nominal rankings and contingency cross-tables"
          },
          {
            "id": "d",
            "text": "Because Covariance PCA is constrained by matrix rank properties to extract exactly one significant principal component"
          },
          {
            "id": "e",
            "text": "Because statistical software automatically converts the default Kaiser threshold to 0.05 when analyzing raw covariances"
          },
          {
            "id": "f",
            "text": "Because in Covariance PCA, total variance is the sum of raw variances, not $p$; the average eigenvalue is $\\bar{\\lambda} = \\text{tr}(S)/p$, not 1.0"
          }
        ],
        "correct_option": "f",
        "explanation": "The Kaiser criterion threshold of 1.0 derives from the fact that the average eigenvalue of a correlation matrix is $\\text{tr}(R)/p = p/p = 1.0$. In Covariance PCA, total variance is $\\sum s_j^2$, so the average eigenvalue is $\\text{tr}(S)/p \\neq 1.0$. Comparing eigenvalues to 1.0 in Covariance PCA is completely arbitrary."
      },
      {
        "id": "q_l4_7",
        "segment_id": "ch2-pca-analytical",
        "order_index": 7,
        "difficulty": "easy",
        "pool_type": "quiz",
        "section_reference": "Section 5: Practical Software Execution",
        "section_anchor": "practical-software-execution",
        "question": "In SAS, what option in PROC PRINCOMP instructs the procedure to perform Covariance PCA rather than the default Correlation PCA?",
        "options": [
          {
            "id": "a",
            "text": "`METHOD=ML`, which requests Maximum Likelihood parameter extraction instead of ordinary principal components"
          },
          {
            "id": "b",
            "text": "`OUTSTAT=COV`, which outputs the calculated sample covariance matrix directly into an external SAS dataset"
          },
          {
            "id": "c",
            "text": "`COV`, which instructs PROC PRINCOMP to analyze the sample covariance matrix $S$ instead of the default correlation matrix $R$"
          },
          {
            "id": "d",
            "text": "`VARDEF=N`, which divides sums of squares by sample size $n$ rather than degrees of freedom $n - 1$"
          },
          {
            "id": "e",
            "text": "`STD`, which automatically standardizes all variables to zero mean and unit variance before running analysis"
          },
          {
            "id": "f",
            "text": "`NOINT`, which suppresses the intercept term when calculating deviation cross-products from the raw origin"
          }
        ],
        "correct_option": "c",
        "explanation": "In SAS PROC PRINCOMP, the default analysis is Correlation PCA (analyzing the correlation matrix $R$). Adding the `COV` option tells SAS to analyze the sample covariance matrix $S$ directly."
      },
      {
        "id": "q_l4_8",
        "segment_id": "ch2-pca-analytical",
        "order_index": 8,
        "difficulty": "hard",
        "pool_type": "quiz",
        "section_reference": "Section 1: Covariance PCA vs. Correlation PCA",
        "section_anchor": "covariance-pca-vs-correlation-pca",
        "question": "In Covariance PCA, if variable $X_1$ is converted from kilograms to grams by multiplying its values by 1,000, what happens to its sample variance and its influence on $PC_1$?",
        "options": [
          {
            "id": "a",
            "text": "Its sample variance increases by a factor of 1,000, leaving its relative weight on $PC_1$ virtually unaltered in the analysis"
          },
          {
            "id": "b",
            "text": "Its sample variance is multiplied by $1,000^2 = 1,000,000$, causing $X_1$ to completely dominate $PC_1$ purely due to unit choice"
          },
          {
            "id": "c",
            "text": "Its sample variance remains constant because linear scaling transformations are automatically cancelled by PCA normalization"
          },
          {
            "id": "d",
            "text": "Its sample variance decreases by $1,000$, forcing $PC_1$ to align with the remaining unscaled variables in the sample matrix"
          },
          {
            "id": "e",
            "text": "Its sample variance becomes non-invertible, producing arithmetic division by zero in the characteristic polynomial equation"
          },
          {
            "id": "f",
            "text": "Its sample variance is multiplied by $\\sqrt{1,000} \\approx 31.6$, resulting in a moderate increase in its factor loading on $PC_1$"
          }
        ],
        "correct_option": "b",
        "explanation": "Variance is a squared dispersion metric: $\\text{Var}(c X_1) = c^2 \\text{Var}(X_1)$. Multiplying $X_1$ by $1,000$ scales its variance by $1,000^2 = 1,000,000$. In Covariance PCA, $PC_1$ seeks to maximize captured variance, so this massive variance inflation forces $PC_1$ to align almost $100\\%$ with $X_1$, completely distorting the analysis."
      },
      {
        "id": "q_l4_9",
        "segment_id": "ch2-pca-analytical",
        "order_index": 9,
        "difficulty": "intermediate",
        "pool_type": "quiz",
        "section_reference": "Section 1: Covariance PCA vs. Correlation PCA",
        "section_anchor": "covariance-pca-vs-correlation-pca",
        "question": "In Correlation PCA on $p$ variables, what is the exact sum of all $p$ eigenvalues ($\\sum_{i=1}^p \\lambda_i$)?",
        "options": [
          {
            "id": "a",
            "text": "Exactly $p$, because standardizing each variable sets its sample variance to 1.0, making the trace of the correlation matrix $\\text{tr}(R) = p$"
          },
          {
            "id": "b",
            "text": "Exactly 1.0, because eigenvalues are constrained by the spectral decomposition algorithm to sum to unity across dimensions"
          },
          {
            "id": "c",
            "text": "Exactly $\\sqrt{p}$, representing the Euclidean norm of the unit-variance indicator vector in standardized observation space"
          },
          {
            "id": "d",
            "text": "Exactly $(p - 1) / n$, adjusting the total matrix dispersion by the sample degrees of freedom available in the dataset"
          },
          {
            "id": "e",
            "text": "Exactly the determinant of the correlation matrix: $\\det(R)$, quantifying the total generalized multivariate variance"
          },
          {
            "id": "f",
            "text": "Exactly $p^2$, because every pairwise bivariate correlation coefficient contributes 1.0 to the quadratic matrix form"
          }
        ],
        "correct_option": "a",
        "explanation": "In Correlation PCA, each variable is standardized to have unit variance ($s_j^2 = 1.0$). The trace of correlation matrix $R$ is $\\text{tr}(R) = \\sum_{j=1}^p 1.0 = p$. By the spectral trace theorem, the sum of all eigenvalues equals the trace: $\\sum_{i=1}^p \\lambda_i = \\text{tr}(R) = p$."
      },
      {
        "id": "q_l4_10",
        "segment_id": "ch2-pca-analytical",
        "order_index": 10,
        "difficulty": "easy",
        "pool_type": "quiz",
        "section_reference": "Section 3: Component Retention Criteria",
        "section_anchor": "component-retention-criteria",
        "question": "In a 5-variable Correlation PCA, the eigenvalues are $\\lambda_1 = 2.85$, $\\lambda_2 = 1.25$, $\\lambda_3 = 0.50$, $\\lambda_4 = 0.25$, and $\\lambda_5 = 0.15$. How many components should be retained under: (1) the Kaiser criterion ($\\lambda > 1.0$), and (2) an 80% cumulative variance criterion?",
        "options": [
          {
            "id": "a",
            "text": "(1) Kaiser retains 1 component ($\\lambda_1 = 2.85$); (2) 80% criterion retains 2 components ($(2.85 + 1.25)/5 = 82.0\\%$)"
          },
          {
            "id": "b",
            "text": "(1) Kaiser retains 3 components ($\\lambda_1, \\lambda_2, \\lambda_3$); (2) 80% criterion retains 4 components ($94.0\\%$)"
          },
          {
            "id": "c",
            "text": "(1) Kaiser retains 4 components; (2) 80% criterion retains all 5 components to capture 100% of standardized variance"
          },
          {
            "id": "d",
            "text": "(1) Kaiser retains 2 components ($\\lambda_1, \\lambda_2 > 1.0$); (2) 80% criterion retains 2 components, because $(2.85 + 1.25) / 5.00 = 82.0\\% \\ge 80\\%$"
          },
          {
            "id": "e",
            "text": "(1) Kaiser retains 1 component; (2) 80% criterion retains 3 components ($(2.85 + 1.25 + 0.50)/5 = 92.0\\%$)"
          },
          {
            "id": "f",
            "text": "(1) Kaiser retains 2 components; (2) 80% criterion retains 3 components ($82.0\\% > 80\\%$), requiring an extra safety component"
          }
        ],
        "correct_option": "d",
        "explanation": "1. Kaiser Criterion: Retain components with $\\lambda_i > 1.0$. Here, $\\lambda_1 = 2.85$ and $\\lambda_2 = 1.25$ both exceed 1.0, while $\\lambda_3 = 0.50 < 1.0$. Thus, exactly 2 components are retained.\n2. Cumulative Variance Criterion (80%): Total variance across 5 standardized variables is $5.00$. The cumulative variance of the first two components is $(2.85 + 1.25) / 5.00 = 4.10 / 5.00 = 82.0\\%$. Because $82.0\\% \\ge 80\\%$, exactly 2 components are retained to achieve the 80% threshold."
      },
      {
        "id": "q_l4_11",
        "segment_id": "ch2-pca-analytical",
        "order_index": 11,
        "difficulty": "hard",
        "pool_type": "quiz",
        "section_reference": "Section 1: Covariance PCA vs. Correlation PCA",
        "section_anchor": "covariance-pca-vs-correlation-pca",
        "question": "In the 25 US cities food prices study (Exercise 1), why did the analyst evaluate Correlation PCA alongside Mean-Corrected Covariance PCA?",
        "options": [
          {
            "id": "a",
            "text": "Because Mean-Corrected Covariance PCA cannot compute component scores for geographical observations like Anchorage"
          },
          {
            "id": "b",
            "text": "Because Correlation PCA forces all 5 food categories to have identical mean prices across the 25 metropolitan areas"
          },
          {
            "id": "c",
            "text": "Because the covariance matrix of food prices was singular and could not be inverted without prior $z$-score transformation"
          },
          {
            "id": "d",
            "text": "Because Correlation PCA eliminated the Anchorage price outlier by winsorizing extreme price observations in Alaska"
          },
          {
            "id": "e",
            "text": "Because food items had differing unit dispersions, and standardizing allowed all 5 categories to contribute equally to price patterns"
          },
          {
            "id": "f",
            "text": "Because food commodities are nonmetric ordinal rankings that violate the continuous interval assumptions of Covariance PCA"
          }
        ],
        "correct_option": "e",
        "explanation": "As analyzed in Chapter 2 Exercise 1 (Food Prices across 25 US cities): In raw Covariance PCA, commodities with high absolute price dispersion (such as meat or oranges) dominate the variance. Standardizing variables (Correlation PCA) gives each food item an equal initial weight ($s_j^2 = 1.0$), revealing underlying patterns of relative cost across cities regardless of base commodity prices."
      },
      {
        "id": "q_l4_12",
        "segment_id": "ch2-pca-analytical",
        "order_index": 12,
        "difficulty": "intermediate",
        "pool_type": "quiz",
        "section_reference": "Section 5: Practical Software Execution",
        "section_anchor": "practical-software-execution",
        "question": "In Python scikit-learn, why is it standard practice to apply StandardScaler prior to fitting PCA(n_components=k)?",
        "options": [
          {
            "id": "a",
            "text": "Because `PCA` in scikit-learn will throw a syntax error if input variables have sample means different from zero"
          },
          {
            "id": "b",
            "text": "Because `StandardScaler` converts continuous metric variables into discrete integer classes for spectral factorization"
          },
          {
            "id": "c",
            "text": "Because scikit-learn's `PCA` module performs orthogonal Varimax rotation only when variables have standard deviation of 1.0"
          },
          {
            "id": "d",
            "text": "Because `StandardScaler` removes outlier observations by evaluating multivariate Mahalanobis distance thresholds"
          },
          {
            "id": "e",
            "text": "Because `PCA` requires the input matrix to be non-singular, and standardization guarantees a non-zero determinant"
          },
          {
            "id": "f",
            "text": "Because `PCA` in scikit-learn performs Covariance SVD by default without internal scaling, requiring explicit $z$-score standardization"
          }
        ],
        "correct_option": "f",
        "explanation": "Unlike SAS PROC PRINCOMP (which analyzes correlation matrices by default), scikit-learn's PCA computes SVD on centered raw data (Covariance PCA). To perform Correlation PCA in Python, the analyst must explicitly standardize features using StandardScaler() before calling PCA()."
      }
    ],
    "flashcards": [
      {
        "id": "fc_l4_1",
        "segment_id": "ch2-pca-analytical",
        "order_index": 1,
        "category": "Covariance vs Correlation",
        "front": "What is the **scale sensitivity problem** in Covariance PCA, and how does it distort component extraction?",
        "back": "Because variance scales quadratically ($\\\\text{Var}(c X) = c^2 \\\\text{Var}(X)$), variables measured in larger units (e.g. multiplied by 1,000) have variances multiplied by $1,000,000$. Covariance $PC_1$ mechanically aligns with the largest variance variable, regardless of correlation.",
        "section_reference": "Section 1: Covariance PCA vs. Correlation PCA",
        "section_anchor": "the-scale-sensitivity-of-covariance-pca"
      },
      {
        "id": "fc_l4_2",
        "segment_id": "ch2-pca-analytical",
        "order_index": 2,
        "category": "Covariance vs Correlation",
        "front": "Under what conditions should **Correlation PCA** be selected over **Covariance PCA**?",
        "back": "Whenever variables are measured in **different physical units** (e.g. Euros vs years vs kg), arbitrary rating scales, or widely differing dispersions. Standardizing sets all variances to $1.0$, preventing scale distortion.",
        "section_reference": "Section 1: Covariance PCA vs. Correlation PCA",
        "section_anchor": "when-to-use-correlation-pca"
      },
      {
        "id": "fc_l4_3",
        "segment_id": "ch2-pca-analytical",
        "order_index": 3,
        "category": "Matrix Properties",
        "front": "What is the **total variance** and **average eigenvalue** in Correlation PCA across $p$ variables?",
        "back": "Total variance equals $\\\\text{tr}(R) = p$. The average eigenvalue is always exactly $\\\\bar{\\\\lambda} = p / p = 1.0$. (In Covariance PCA, total variance is $\\\\text{tr}(S) = \\\\sum s_j^2$, and $\\\\bar{\\\\lambda} = \\\\text{tr}(S)/p$).",
        "section_reference": "Section 1: Covariance PCA vs. Correlation PCA",
        "section_anchor": "when-to-use-correlation-pca"
      },
      {
        "id": "fc_l4_4",
        "segment_id": "ch2-pca-analytical",
        "order_index": 4,
        "category": "Core Quantities",
        "front": "What is a **Factor Loading** ($l_{ji}$), and what does its squared value represent?",
        "back": "The Pearson correlation between variable $X_j$ and component $PC_i$: $l_{ji} = w_{ij}\\\\frac{\\\\sqrt{\\\\lambda_i}}{s_j}$ (or $w_{ij}\\\\sqrt{\\\\lambda_i}$ in Correlation PCA). The squared loading $l_{ji}^2$ is the proportion of variable $X_j$'s variance explained by $PC_i$.",
        "section_reference": "Section 2: Four Key Quantities (Eigenvalues, Weights, Scores & Loadings)",
        "section_anchor": "four-key-quantities"
      },
      {
        "id": "fc_l4_5",
        "segment_id": "ch2-pca-analytical",
        "order_index": 5,
        "category": "Core Quantities",
        "front": "How do **Eigenvector Weights** ($w_i$) differ fundamentally from **Factor Loadings** ($l_{ji}$)?",
        "back": "**Weights ($w_i$)** are normalized linear coefficients ($\\\\sum w_{ij}^2 = 1$) that construct components: $PC = w'X$. **Loadings ($l_{ji}$)** are bivariate correlations between original variables and components, bounded between $[-1, 1]$.",
        "section_reference": "Section 2: Four Key Quantities (Eigenvalues, Weights, Scores & Loadings)",
        "section_anchor": "four-key-quantities"
      },
      {
        "id": "fc_l4_6",
        "segment_id": "ch2-pca-analytical",
        "order_index": 6,
        "category": "Retention Diagnostics",
        "front": "What is the **Kaiser Criterion** for retaining principal components, and why does it apply ONLY to Correlation PCA?",
        "back": "Retain components with $\\\\lambda_i > 1.0$. It applies only to Correlation PCA because average eigenvalue is $1.0$; a component with $\\\\lambda < 1.0$ accounts for less variance than a single standardized variable. In Covariance PCA, total variance is not $p$.",
        "section_reference": "Section 3: Component Retention Criteria",
        "section_anchor": "component-retention-criteria"
      },
      {
        "id": "fc_l4_7",
        "segment_id": "ch2-pca-analytical",
        "order_index": 7,
        "category": "Retention Diagnostics",
        "front": "How is the **Cattell Scree Test (Elbow Rule)** applied to determine component retention?",
        "back": "Plot ordered eigenvalues vs component index. Retain all components appearing **before the elbow** (the point of inflection where steep descent levels off into a horizontal scree slope).",
        "section_reference": "Section 3: Component Retention Criteria",
        "section_anchor": "component-retention-criteria"
      },
      {
        "id": "fc_l4_8",
        "segment_id": "ch2-pca-analytical",
        "order_index": 8,
        "category": "Software Execution",
        "front": "How do default PCA execution settings differ between **SAS PROC PRINCOMP** and **Python scikit-learn**?",
        "back": "**SAS** analyzes the correlation matrix $R$ by default (use `COV` option for covariance PCA). **Python scikit-learn** performs Covariance SVD by default (analyst must explicitly apply `StandardScaler()` for Correlation PCA).",
        "section_reference": "Section 5: Practical Software Execution",
        "section_anchor": "practical-software-execution"
      }
    ]
  }
];
