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
            "text": "To minimize the sum of absolute deviations from the multidimensional median vector across all observations"
          },
          {
            "id": "b",
            "text": "To force all variable loadings to equal positive unity (+1.0), equalizing the variance contributions across axes"
          },
          {
            "id": "c",
            "text": "To maximize the variance of the projected observation scores along the newly defined candidate coordinate axis"
          },
          {
            "id": "d",
            "text": "To ensure the new axis passes through the highest single data point to eliminate asymmetric sample skewness"
          },
          {
            "id": "e",
            "text": "To minimize the distance between the coordinate origin and the multivariate centroid of the raw observations"
          },
          {
            "id": "f",
            "text": "To make the sum of observation scores equal to zero for each individual variable independently in observation space"
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
            "text": "Their sum must equal zero: $\\cos\\theta + \\sin\\theta = 0$, ensuring directional balance around the 45-degree ray"
          },
          {
            "id": "b",
            "text": "Each directional coefficient must be strictly greater than 1.0, amplifying weak observation projections along the axis"
          },
          {
            "id": "c",
            "text": "Their product must equal the correlation coefficient: $\\cos\\theta \\sin\\theta = r_{12}$, preserving joint association"
          },
          {
            "id": "d",
            "text": "The angle $\\theta$ must always be fixed at $45^\\circ$, splitting explained variance symmetrically between variables"
          },
          {
            "id": "e",
            "text": "They must have unit length (norm of 1): $\\cos^2(\\theta) + \\sin^2(\\theta) = 1$, preventing artificial scale stretching"
          },
          {
            "id": "f",
            "text": "They must equal the sample standard deviations of the original variables, weighting coordinates by raw dispersion"
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
            "text": "Exactly $23.091 + 21.091 = 44.182$, because rigid coordinate rotations preserve total variance completely"
          },
          {
            "id": "b",
            "text": "Always 1.000, because principal component transformation standardizes total system variance to unity"
          },
          {
            "id": "c",
            "text": "Always 2.000, because each extracted principal component contributes exactly 1.0 unit of variance by definition"
          },
          {
            "id": "d",
            "text": "Exactly $23.091 \\times 21.091 = 487.01$, representing the geometric product of orthogonal component dispersions"
          },
          {
            "id": "e",
            "text": "Zero, because principal component scores are mean-corrected and sum to zero across all observations"
          },
          {
            "id": "f",
            "text": "Half of the original variance: $44.182 / 2 = 22.091$, reflecting dimensional projection losses along axes"
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
            "text": "Equal to the original sample covariance $S_{12}$, because coordinate rotation preserves bivariate covariation"
          },
          {
            "id": "b",
            "text": "Equal to positive unity ($+1.0$), reflecting maximum standardized linear association between principal components"
          },
          {
            "id": "c",
            "text": "Equal to the ratio of their eigenvalues $\\lambda_1 / \\lambda_2$, scaling joint covariation by relative importance"
          },
          {
            "id": "d",
            "text": "Negative unity ($-1.0$), because orthogonal complement axes point in opposing perpendicular directions"
          },
          {
            "id": "e",
            "text": "Equal to the Pearson correlation $r_{12}$, because components preserve the normalized bivariate association"
          },
          {
            "id": "f",
            "text": "Identically zero ($\\text{Cov}(PC_1, PC_2) = 0$), because principal axes are constructed to be strictly orthogonal"
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
            "text": "The moment data are centered by subtracting variable sample means, which shifts the cloud to the coordinate origin"
          },
          {
            "id": "b",
            "text": "When only a subset $k < p$ of the leading principal components is retained, and the remaining $p - k$ components are discarded"
          },
          {
            "id": "c",
            "text": "When all $p$ principal components are computed and retained, because the new axes represent uncorrelated linear scores"
          },
          {
            "id": "d",
            "text": "When the covariance matrix is converted into a correlation matrix, which standardizes all variable diagonal elements to 1.0"
          },
          {
            "id": "e",
            "text": "When the sample size $n$ is reduced by eliminating bivariate outliers that deviate from the primary projection ray"
          },
          {
            "id": "f",
            "text": "When the eigenvalues are normalized to sum to 100%, converting raw component variances into relative percentages"
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
            "text": "$t_{A1} = 13.000$, calculated as the simple unweighted arithmetic sum of centered coordinates: $8 + 5 = 13.000$"
          },
          {
            "id": "b",
            "text": "$t_{A1} = 0.728238 \\times 8 - 0.685324 \\times 5 = 2.400$, subtracting the second component projection from the first"
          },
          {
            "id": "c",
            "text": "$t_{A1} = \\sqrt{8^2 + 5^2} = 9.434$, evaluating the Euclidean distance of Customer A from the origin in variable space"
          },
          {
            "id": "d",
            "text": "$t_{A1} = 0.728238 \\times 8 + 0.685324 \\times 5 = 9.253$, projecting centered coordinates onto the leading eigenvector"
          },
          {
            "id": "e",
            "text": "$t_{A1} = 38.576$, representing the maximum eigenvalue of the system rather than an individual observation score"
          },
          {
            "id": "f",
            "text": "$t_{A1} = 1.490$, standardizing Customer A coordinates by the square root of the leading system eigenvalue"
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
            "text": "Because PCA eigenvalues are constrained to be negative whenever coordinate reflections are applied to sample data"
          },
          {
            "id": "b",
            "text": "Because an axis and its negative describe the exact same geometric line; multiplying by $-1$ merely reflects coordinates"
          },
          {
            "id": "c",
            "text": "Because statistical software automatically converts all negative scores to positive absolute values during extraction"
          },
          {
            "id": "d",
            "text": "Because component weights must always be positive numbers to satisfy non-negativity constraints in Lagrange multipliers"
          },
          {
            "id": "e",
            "text": "Because reversing an axis converts covariance into correlation, standardizing the metric distances between observations"
          },
          {
            "id": "f",
            "text": "Because observations are automatically reflected across the vertical centroid line, nullifying the rotation transformation"
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
            "text": "Always exactly $p$, because a dataset with $p$ variables always possesses $p$ linearly independent orthogonal axes"
          },
          {
            "id": "b",
            "text": "Always exactly $n$, because each observation in the sample contributes one full dimension of variance to the space"
          },
          {
            "id": "c",
            "text": "At most $p \\times (n - 1)$, because degrees of freedom multiply across all variables in the multivariate data matrix"
          },
          {
            "id": "d",
            "text": "At most $\\min(p, n - 1)$, because centered data cannot span more dimensions than available observation degrees of freedom"
          },
          {
            "id": "e",
            "text": "Always equal to the number of nonmetric scales, because qualitative classifications govern the rank of the covariance matrix"
          },
          {
            "id": "f",
            "text": "At most $(p - 1) / 2$, because symmetry constraints eliminate half of the off-diagonal elements in the covariance matrix"
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
      "title": "PCA: Analytical Formulation & Scale Sensitivity",
      "subtitle": "Lagrange multiplier optimization, characteristic equations, and covariance vs correlation decomposition.",
      "order_index": 4,
      "summary_markdown": "# PCA: Analytical Formulation, Eigenvalues & Scale Sensitivity\n\n## 1. Matrix Representation of PCA\nIn general multivariate analysis with $p$ variables, geometric trial-and-error rotation is impractical. PCA is formulated algebraically using matrix algebra.\n\nLet $X_c$ be the $n \\times p$ centered data matrix. The sample covariance matrix $S$ is computed as:\n$$S = \\frac{1}{n - 1} X_c^T X_c$$\nWe seek an orthonormal transformation matrix $W$ of dimension $p \\times p$ that maps the centered data into principal component scores $T$:\n$$T = X_c W$$\nwhere columns of $W = [w_1, w_2, \\dots, w_p]$ are unit-length directional weight vectors satisfying $W^T W = I$.\n\nThe variance of any linear combination $t = X_c w$ is:\n$$\\text{Var}(t) = w^T S w$$\n\n## 2. Derivation via Lagrange Multipliers\nTo find the first principal component, we maximize $\\text{Var}(t) = w^T S w$ subject to the unit-length normalization constraint $w^T w = 1$.\n\nWe define the Lagrangian function:\n$$L(w, \\lambda) = w^T S w - \\lambda (w^T w - 1)$$\nTaking the vector derivative with respect to $w$ and setting it to zero yields:\n$$\\frac{\\partial L}{\\partial w} = 2Sw - 2\\lambda w = 0 \\implies (S - \\lambda I) w = 0$$\nThis is the classic algebraic eigenvalue equation. The scalar $\\lambda$ is an eigenvalue of covariance matrix $S$, and the weight vector $w$ is its corresponding eigenvector.\n\nPremultiplying $(S - \\lambda I)w = 0$ by $w^T$ reveals the physical meaning of $\\lambda$:\n$$w^T S w = \\lambda w^T w = \\lambda$$\nThe eigenvalue $\\lambda$ equals the exact variance of the corresponding principal component!\n\n## 3. The Characteristic Equation\nFor $(S - \\lambda I)w = 0$ to possess a non-zero solution $w \\neq 0$, the matrix $(S - \\lambda I)$ must be singular. Its determinant must equal zero:\n$$\\det(S - \\lambda I) = 0$$\nThis is the characteristic polynomial of degree $p$. For a $2 \\times 2$ covariance matrix $S = \\begin{bmatrix} s_1^2 & S_{12} \\\\ S_{12} & s_2^2 \\end{bmatrix}$, the characteristic equation is:\n$$(s_1^2 - \\lambda)(s_2^2 - \\lambda) - S_{12}^2 = 0 \\implies \\lambda^2 - (s_1^2 + s_2^2)\\lambda + (s_1^2 s_2^2 - S_{12}^2) = 0$$\nNotice that the coefficient of $\\lambda$ is the trace of $S$ (sum of variances) and the constant term is the determinant of $S$.\n\nSolving this quadratic equation yields the eigenvalues $\\lambda_1$ and $\\lambda_2$. Substituting each eigenvalue back into $(S - \\lambda I)w = 0$ and normalizing such that $w_1^2 + w_2^2 = 1$ yields the unique eigenvector weights.\n\n## 4. Fundamental Properties of Eigenvalues\nEigenvalues have three crucial properties:\n1. Trace Property: The sum of all $p$ eigenvalues equals the trace of the covariance matrix (the sum of original sample variances):\n   $$\\sum_{i=1}^p \\lambda_i = \\text{tr}(S) = \\sum_{j=1}^p s_j^2$$\n2. Generalized Variance Property: The product of all eigenvalues equals the determinant of $S$:\n   $$\\prod_{i=1}^p \\lambda_i = \\det(S)$$\n3. Orthogonality: For symmetric matrix $S$, eigenvectors associated with distinct eigenvalues are strictly orthogonal:\n   $$w_i^T w_j = 0 \\quad (i \\neq j)$$\n   Consequently, the principal components are mutually uncorrelated:\n   $$\\text{Cov}(PC_i, PC_j) = 0 \\quad (i \\neq j)$$\n\n## 5. Covariance PCA vs. Correlation PCA\nA major practical decision in PCA is whether to analyze the covariance matrix $S$ (Covariance PCA) or the correlation matrix $R$ (Correlation PCA).\n\n### Scale Sensitivity of Covariance PCA\nIn Covariance PCA, total variance is the sum of raw variances. If variables are measured in different units (e.g., annual revenue in millions vs employee count in tens), the variable with the largest absolute variance will mechanically dominate the leading components, regardless of underlying correlations.\n\n### When to Use Correlation PCA\nWhen variables are measured in non-comparable units or possess widely differing variances, the data should be standardized before performing PCA. Standardizing each variable to have a mean of 0 and a variance of 1 is equivalent to performing PCA directly on the sample correlation matrix $R$.\n\nIn Correlation PCA:\n- The trace of $R$ always equals the number of variables: $\\text{tr}(R) = p$.\n- Each original standardized variable contributes exactly $1.0$ unit of variance.\n- Total sample variance is simply $p$."
    },
    "questions": [
      {
        "id": "q_l4_1",
        "segment_id": "ch2-pca-analytical",
        "order_index": 1,
        "difficulty": "easy",
        "question": "What is the mathematical relationship between the largest eigenvalue $\\lambda_1$ of the covariance matrix $S$ and the first principal component ($PC_1$)?",
        "options": [
          {
            "id": "a",
            "text": "$\\lambda_1$ is the sample mean of $PC_1$, locating the center of gravity along the first principal component axis"
          },
          {
            "id": "b",
            "text": "$\\lambda_1$ is the sample variance of $PC_1$, quantifying the maximum variance captured along the leading principal axis"
          },
          {
            "id": "c",
            "text": "$\\lambda_1$ is the sample size divided by degrees of freedom: $n / (n - 1)$, correcting for sample degree-of-freedom scaling"
          },
          {
            "id": "d",
            "text": "$\\lambda_1$ is the correlation between $X_1$ and $X_2$, measuring the normalized linear association between raw variables"
          },
          {
            "id": "e",
            "text": "$\\lambda_1$ is the inverse of the determinant of covariance matrix $S$, measuring generalized system precision"
          },
          {
            "id": "f",
            "text": "$\\lambda_1$ is the standard deviation of the error term, measuring unexplained residual noise in the reconstruction"
          }
        ],
        "correct_option": "b",
        "explanation": "In the analytical derivation of PCA via Lagrange multipliers, the projected variance $w_1' S w_1$ simplifies directly to the Lagrange multiplier $\\lambda_1$, proving that the eigenvalue is the variance of that component.",
        "section_reference": "Section 4: Fundamental Properties of Eigenvalues",
        "section_anchor": "4-fundamental-properties-of-eigenvalues"
      },
      {
        "id": "q_l4_2",
        "segment_id": "ch2-pca-analytical",
        "order_index": 2,
        "difficulty": "easy",
        "question": "What is the characteristic equation used to solve for the eigenvalues $\\lambda$ of a square matrix $A$?",
        "options": [
          {
            "id": "a",
            "text": "$\\text{tr}(A - \\lambda I) = 0$, setting the sum of diagonal matrix elements equal to zero across all dimensions"
          },
          {
            "id": "b",
            "text": "$A^{-1} - \\lambda I = 0$, requiring matrix inversion of the raw covariance matrix to isolate spectral components"
          },
          {
            "id": "c",
            "text": "$\\sum_{i=1}^p (A_{ii} - \\lambda) = 1$, constraining the total trace deficit to equal positive unity across variables"
          },
          {
            "id": "d",
            "text": "$\\det(A - \\lambda I) = 0$, ensuring the linear system has non-trivial, non-zero eigenvector solutions"
          },
          {
            "id": "e",
            "text": "$\\lambda = A w$, equating scalar eigenvalues directly to the matrix-vector multiplication product without roots"
          },
          {
            "id": "f",
            "text": "$\\det(A) + \\det(\\lambda I) = 0$, applying additive determinant properties to solve for matrix characteristic values"
          }
        ],
        "correct_option": "d",
        "explanation": "For non-trivial eigenvectors to exist in $(A - \\lambda I)w = 0$, the matrix $(A - \\lambda I)$ must be non-invertible, which requires its determinant to equal zero: $\\det(A - \\lambda I) = 0$.",
        "section_reference": "Section 3: The Characteristic Equation",
        "section_anchor": "3-the-characteristic-equation"
      },
      {
        "id": "q_l4_3",
        "segment_id": "ch2-pca-analytical",
        "order_index": 3,
        "difficulty": "easy",
        "question": "When performing PCA on the sample correlation matrix $R$ for $p$ variables, what is the sum of all $p$ eigenvalues (the total variance)?",
        "options": [
          {
            "id": "a",
            "text": "Always 1.0, because correlation standardization normalizes the total cumulative variance of all components to unity"
          },
          {
            "id": "b",
            "text": "Equal to $n - 1$, because total system variance in Correlation PCA is governed by sample degrees of freedom"
          },
          {
            "id": "c",
            "text": "Equal to the determinant of $R$, measuring the generalized correlation volume spanned by standardized variables"
          },
          {
            "id": "d",
            "text": "Equal to the sum of raw sample variances, preserving physical measurement units in the trace of the correlation matrix"
          },
          {
            "id": "e",
            "text": "Always equal to $p$, because each standardized variable has variance 1.0 and $\\text{tr}(R) = p$"
          },
          {
            "id": "f",
            "text": "Always 100.0, because eigenvalues are automatically scaled to represent percentages of explained variation"
          }
        ],
        "correct_option": "e",
        "explanation": "In correlation PCA, all diagonal entries of $R$ are 1.0. Because the sum of eigenvalues equals the trace of the matrix, $\\sum_{i=1}^p \\lambda_i = \\text{tr}(R) = p \\times 1.0 = p$.",
        "section_reference": "Section 5.2: When to Use Correlation PCA",
        "section_anchor": "when-to-use-correlation-pca"
      },
      {
        "id": "q_l4_4",
        "segment_id": "ch2-pca-analytical",
        "order_index": 4,
        "difficulty": "easy",
        "question": "Why is Correlation PCA generally preferred over Covariance PCA when analyzing survey questionnaires containing mixed scales (e.g., annual income in thousands vs satisfaction rated 1 to 5)?",
        "options": [
          {
            "id": "a",
            "text": "Because Correlation PCA standardizes variables, preventing items with arbitrary numerical scales from dominating components"
          },
          {
            "id": "b",
            "text": "Because Covariance PCA cannot handle sample sizes greater than $n = 100$ without encountering numerical singularity errors"
          },
          {
            "id": "c",
            "text": "Because Correlation PCA produces correlated components that capture oblique non-linear interactions across survey questions"
          },
          {
            "id": "d",
            "text": "Because Covariance PCA always produces negative eigenvalues that invalidate variance decomposition in Likert survey data"
          },
          {
            "id": "e",
            "text": "Because Correlation PCA eliminates the need to compute eigenvectors, reducing computational overhead in statistical software"
          },
          {
            "id": "f",
            "text": "Because Likert survey scales cannot be centered to zero mean, prohibiting the derivation of sample covariance matrices"
          }
        ],
        "correct_option": "a",
        "explanation": "If variables are measured on different scales, the variable with the largest unit scale (e.g. income in thousands) will have a huge variance and dominate the leading eigenvectors in Covariance PCA. Correlation PCA standardizes all inputs to unit variance.",
        "section_reference": "Section 5.2: When to Use Correlation PCA",
        "section_anchor": "when-to-use-correlation-pca"
      },
      {
        "id": "q_l4_5",
        "segment_id": "ch2-pca-analytical",
        "order_index": 5,
        "difficulty": "intermediate",
        "question": "If a variable measured in kilograms is converted to grams (multiplied by 1,000), what happens to its variance, and how does this affect Covariance PCA vs Correlation PCA?",
        "options": [
          {
            "id": "a",
            "text": "Variance increases by 1,000; Covariance PCA is unaffected because scale changes leave eigenvector directions unchanged"
          },
          {
            "id": "b",
            "text": "Variance remains completely unchanged because measurement units are arbitrary and cancel out during spectral decomposition"
          },
          {
            "id": "c",
            "text": "Variance increases by $1,000^2 = 1,000,000$; Covariance PCA is heavily distorted, whereas Correlation PCA is completely invariant"
          },
          {
            "id": "d",
            "text": "Both Covariance PCA and Correlation PCA scale their eigenvalues by 1,000, leaving explained variance percentages identical"
          },
          {
            "id": "e",
            "text": "The correlation between this variable and all other variables drops to zero, destroying bivariate associations in the model"
          },
          {
            "id": "f",
            "text": "The trace of the correlation matrix increases by 1,000, expanding the sum of standardized eigenvalues across the system"
          }
        ],
        "correct_option": "c",
        "explanation": "Multiplying a variable by constant $c$ multiplies its variance by $c^2 = 1,000,000$. Covariance PCA decomposes $S$, which changes radically. But Correlation PCA standardizes inputs ($z = (cx - c\\bar{x})/(cs) = (x - \\bar{x})/s$), making it completely scale-invariant.",
        "section_reference": "Section 5.1: Scale Sensitivity of Covariance PCA",
        "section_anchor": "scale-sensitivity-of-covariance-pca"
      },
      {
        "id": "q_l4_6",
        "segment_id": "ch2-pca-analytical",
        "order_index": 6,
        "difficulty": "intermediate",
        "question": "In the Lagrange multiplier formulation of PCA: $\\max w_1' S w_1$ subject to $w_1' w_1 = 1$, why is the constraint $w_1' w_1 = 1$ strictly necessary?",
        "options": [
          {
            "id": "a",
            "text": "To ensure that all principal component scores have positive sample means and conform to normal distribution bounds"
          },
          {
            "id": "b",
            "text": "To guarantee that all extracted eigenvalues are constrained to equal 1.0, standardizing variance across dimensions"
          },
          {
            "id": "c",
            "text": "To ensure that the covariance matrix $S$ remains non-singular and invertible during iterative numerical optimization"
          },
          {
            "id": "d",
            "text": "To eliminate negative correlation coefficients between variables, preserving positive manifold geometry in data"
          },
          {
            "id": "e",
            "text": "To convert continuous metric variables into standardized nonmetric categories, enabling non-parametric projections"
          },
          {
            "id": "f",
            "text": "To fix the scale of the weights; without it, multiplying weights by any constant $c > 1$ would inflate variance to infinity"
          }
        ],
        "correct_option": "f",
        "explanation": "Variance of a linear combination is homogeneous of degree 2: $\\text{Var}((c w_1)' x) = c^2 (w_1' S w_1)$. Without fixing the length of $w_1$ to unit norm ($w_1' w_1 = 1$), one could achieve an infinite variance simply by making weights arbitrarily large.",
        "section_reference": "Section 2: Derivation via Lagrange Multipliers",
        "section_anchor": "2-derivation-via-lagrange-multipliers"
      },
      {
        "id": "q_l4_7",
        "segment_id": "ch2-pca-analytical",
        "order_index": 7,
        "difficulty": "intermediate",
        "question": "A $3 \\times 3$ covariance matrix $S$ has eigenvalues $\\lambda_1 = 6.0$, $\\lambda_2 = 2.5$, and $\\lambda_3 = 1.5$. What percentage of total variance is explained by the first two principal components ($PC_1$ and $PC_2$)?",
        "options": [
          {
            "id": "a",
            "text": "$60.0\\%$, calculated by taking the ratio of the first eigenvalue to total trace: $6.0 / 10.0 = 0.600$"
          },
          {
            "id": "b",
            "text": "$85.0\\%$, calculated as the cumulative percentage explained by the first two components: $(6.0 + 2.5) / 10.0 = 0.850$"
          },
          {
            "id": "c",
            "text": "$75.0\\%$, calculated as the ratio of the first two eigenvalues to the sample degrees of freedom in the system"
          },
          {
            "id": "d",
            "text": "$90.0\\%$, calculated by weighting the leading eigenvalues against the determinant of the covariance matrix"
          },
          {
            "id": "e",
            "text": "$25.0\\%$, representing the individual variance percentage contributed by the second principal component alone"
          },
          {
            "id": "f",
            "text": "$15.0\\%$, representing the residual variance discarded when omitting the third component: $1.5 / 10.0 = 0.150$"
          }
        ],
        "correct_option": "b",
        "explanation": "Total variance is $\\sum \\lambda_i = 6.0 + 2.5 + 1.5 = 10.0$. The variance explained by $PC_1 + PC_2$ is $6.0 + 2.5 = 8.5$. The proportion is $8.5 / 10.0 = 85.0\\%$.",
        "section_reference": "Section 4: Fundamental Properties of Eigenvalues",
        "section_anchor": "4-fundamental-properties-of-eigenvalues"
      },
      {
        "id": "q_l4_8",
        "segment_id": "ch2-pca-analytical",
        "order_index": 8,
        "difficulty": "intermediate",
        "question": "Under what specific conditions is it scientifically justifiable to perform Covariance PCA instead of Correlation PCA?",
        "options": [
          {
            "id": "a",
            "text": "When variables are measured on nominal and ordinal scales, because covariance matrices preserve nonmetric rank properties"
          },
          {
            "id": "b",
            "text": "When the researcher wants all variables to have an equal influence regardless of their natural empirical dispersion"
          },
          {
            "id": "c",
            "text": "When the sample size $n$ is smaller than 20 observations, because correlation matrices require large asymptotic samples"
          },
          {
            "id": "d",
            "text": "When all variables are measured in identical physical units, and differences in actual variances carry vital domain information"
          },
          {
            "id": "e",
            "text": "When all pairwise correlations are zero, because Covariance PCA extracts orthogonal components without matrix roots"
          },
          {
            "id": "f",
            "text": "When the primary research objective is to perform oblique factor rotation to discover correlated latent constructs"
          }
        ],
        "correct_option": "d",
        "explanation": "Covariance PCA is appropriate only when variables share the same unit of measurement (e.g. financial dollar figures, morphometric millimeters) and variance magnitude carries true domain significance that should not be normalized away.",
        "section_reference": "Section 5: Covariance PCA vs. Correlation PCA",
        "section_anchor": "5-covariance-pca-vs-correlation-pca"
      },
      {
        "id": "q_l4_9",
        "segment_id": "ch2-pca-analytical",
        "order_index": 9,
        "difficulty": "hard",
        "question": "Given the $2 \\times 2$ covariance matrix $S = \\begin{bmatrix} 23.090909 & 16.454545 \\\\ 16.454545 & 21.090909 \\end{bmatrix}$, solve the quadratic characteristic equation $\\lambda^2 - 44.181818 \\lambda + 216.256198 = 0$. What is the exact value of the smaller eigenvalue $\\lambda_2$?",
        "options": [
          {
            "id": "a",
            "text": "$\\lambda_2 = 16.455$, corresponding to the off-diagonal sample covariance between the two variables in matrix $S$"
          },
          {
            "id": "b",
            "text": "$\\lambda_2 = 38.576$, representing the leading eigenvalue $\\lambda_1$ rather than the second orthogonal root"
          },
          {
            "id": "c",
            "text": "$\\lambda_2 = 2.000$, representing the trace of a standardized correlation matrix rather than the covariance eigenvalue"
          },
          {
            "id": "d",
            "text": "$\\lambda_2 = 21.091$, corresponding to the unrotated sample variance of the second original variable $X_2$"
          },
          {
            "id": "e",
            "text": "$\\lambda_2 = 5.606$, calculated as the smaller characteristic root of the quadratic characteristic polynomial"
          },
          {
            "id": "f",
            "text": "$\\lambda_2 = 0.746$, representing the ratio of the smaller eigenvalue to the larger eigenvalue in the system"
          }
        ],
        "correct_option": "e",
        "explanation": "Using the quadratic formula for $\\lambda^2 - b\\lambda + c = 0$: $\\lambda = \\frac{44.181818 \\pm \\sqrt{44.181818^2 - 4(216.256198)}}{2} = \\frac{44.181818 \\pm \\sqrt{1952.033 - 865.025}}{2} = \\frac{44.181818 \\pm \\sqrt{1087.008}}{2} = \\frac{44.181818 \\pm 32.9698}{2}$. This gives $\\lambda_1 = 38.5758$ and $\\lambda_2 = 5.6060$.",
        "section_reference": "Section 3: The Characteristic Equation",
        "section_anchor": "3-the-characteristic-equation"
      },
      {
        "id": "q_l4_10",
        "segment_id": "ch2-pca-analytical",
        "order_index": 10,
        "difficulty": "hard",
        "question": "Suppose two standardized variables have correlation $r = 0.60$. What are the two eigenvalues resulting from Correlation PCA on this pair?",
        "options": [
          {
            "id": "a",
            "text": "$\\lambda_1 = 1 + r = 1.60$ and $\\lambda_2 = 1 - r = 0.40$, summing to $p = 2$ and preserving total standardized variance"
          },
          {
            "id": "b",
            "text": "$\\lambda_1 = 1.00$ and $\\lambda_2 = 1.00$, because standardized variables always have unit eigenvalues under zero correlation"
          },
          {
            "id": "c",
            "text": "$\\lambda_1 = 1.20$ and $\\lambda_2 = 0.80$, splitting the correlation coefficient symmetrically across both components"
          },
          {
            "id": "d",
            "text": "$\\lambda_1 = 0.60$ and $\\lambda_2 = 0.40$, equating the leading eigenvalue directly to the Pearson correlation coefficient"
          },
          {
            "id": "e",
            "text": "$\\lambda_1 = 2.00$ and $\\lambda_2 = 0.00$, because any positive correlation collapses bivariate data into a single component"
          },
          {
            "id": "f",
            "text": "$\\lambda_1 = 1.36$ and $\\lambda_2 = 0.64$, taking the square of the correlation coefficient: $r^2 = 0.36$ as the root offset"
          }
        ],
        "correct_option": "a",
        "explanation": "For a $2 \\times 2$ correlation matrix $\\begin{bmatrix} 1 & r \\\\ r & 1 \\end{bmatrix}$, the characteristic equation is $(1 - \\lambda)^2 - r^2 = 0 \\implies 1 - \\lambda = \\pm r \\implies \\lambda = 1 \\pm r$. For $r = 0.60$, $\\lambda_1 = 1 + 0.60 = 1.60$ and $\\lambda_2 = 1 - 0.60 = 0.40$. Their sum is $1.60 + 0.40 = 2.0 = p$.",
        "section_reference": "Section 5.2: When to Use Correlation PCA",
        "section_anchor": "when-to-use-correlation-pca"
      },
      {
        "id": "q_l4_11",
        "segment_id": "ch2-pca-analytical",
        "order_index": 11,
        "difficulty": "hard",
        "question": "If the leading eigenvalue $\\lambda_1 = 38.575813$ and its eigenvector is $w_1 = (0.728238, 0.685324)^T$, what must the second eigenvector $w_2$ be to satisfy both unit length and orthogonality?",
        "options": [
          {
            "id": "a",
            "text": "$w_2 = (0.728238, 0.685324)^T$, matching the leading eigenvector weights exactly to preserve directional orientation"
          },
          {
            "id": "b",
            "text": "$w_2 = (1.000000, 0.000000)^T$, aligning the second component axis strictly with the horizontal coordinate abscissa"
          },
          {
            "id": "c",
            "text": "$w_2 = (0.500000, 0.500000)^T$, bisecting the quadrant at 45 degrees to split residual variation equally across variables"
          },
          {
            "id": "d",
            "text": "$w_2 = (-0.728238, -0.685324)^T$, reflecting the leading eigenvector through the origin without establishing orthogonality"
          },
          {
            "id": "e",
            "text": "$w_2 = (0.000000, 1.000000)^T$, aligning the second component axis strictly with the vertical coordinate ordinate"
          },
          {
            "id": "f",
            "text": "$w_2 = (-0.685324, 0.728238)^T$ or $(0.685324, -0.728238)^T$, satisfying the zero dot product orthogonality condition: $w_1 \\cdot w_2 = 0$"
          }
        ],
        "correct_option": "f",
        "explanation": "In 2D, a vector orthogonal to $(a, b)$ is $(-b, a)$ or $(b, -a)$. Here, $(0.728238)(-0.685324) + (0.685324)(0.728238) = 0$, and $(-0.685324)^2 + 0.728238^2 = 1.0$. Both signs are valid eigenvectors corresponding to the two orientations of the principal axis.",
        "section_reference": "Section 1: Matrix Representation of PCA",
        "section_anchor": "1-matrix-representation-of-pca"
      },
      {
        "id": "q_l4_12",
        "segment_id": "ch2-pca-analytical",
        "order_index": 12,
        "difficulty": "hard",
        "question": "Why does solving for eigenvectors $(S - \\lambda I)w = 0$ never require matrix inversion of $S$ or $(S - \\lambda I)$?",
        "options": [
          {
            "id": "a",
            "text": "Because eigenvalues are always equal to diagonal elements of $S$, eliminating the need to evaluate characteristic roots"
          },
          {
            "id": "b",
            "text": "Because matrix inversion is only mathematically possible for diagonal matrices that have zero off-diagonal covariances"
          },
          {
            "id": "c",
            "text": "Because $(S - \\lambda I)$ is deliberately singular ($\\det = 0$); an invertible matrix would yield only the trivial zero vector $w = 0$"
          },
          {
            "id": "d",
            "text": "Because PCA algorithms only utilize matrix trace operations and never evaluate determinants or characteristic roots"
          },
          {
            "id": "e",
            "text": "Because eigenvectors are derived using numerical finite difference approximations rather than analytical matrix algebra"
          },
          {
            "id": "f",
            "text": "Because sample covariance matrix $S$ is always constrained to be an identity matrix in multivariate dimension reduction"
          }
        ],
        "correct_option": "c",
        "explanation": "By choosing $\\lambda$ such that $\\det(S - \\lambda I) = 0$, the matrix $(S - \\lambda I)$ is non-invertible (singular). Eigenvectors are the non-zero solutions spanning the null space of $(S - \\lambda I)$. As slide 32 notes: \"No matrix inversion is required.\"",
        "section_reference": "Section 3: The Characteristic Equation",
        "section_anchor": "3-the-characteristic-equation"
      }
    ],
    "flashcards": [
      {
        "id": "fc_l4_1",
        "segment_id": "ch2-pca-analytical",
        "order_index": 1,
        "category": "Formulas",
        "front": "What is the matrix formulation of the PCA component scores?",
        "back": "$$T_k = X_c W_k$$\nwhere $X_c$ is the $n \\times p$ centered data matrix and $W_k$ is the $p \\times k$ matrix of eigenvectors.",
        "section_reference": "Section 1: Matrix Representation of PCA",
        "section_anchor": "1-matrix-representation-of-pca"
      },
      {
        "id": "fc_l4_2",
        "segment_id": "ch2-pca-analytical",
        "order_index": 2,
        "category": "Lagrange",
        "front": "What optimization problem is solved to find the first principal component weights $w_1$?",
        "back": "$$\\max_{w_1} w_1' S w_1 \\quad \\text{subject to } w_1' w_1 = 1$$\nSolved via Lagrangian $\\mathcal{L} = w_1' S w_1 - \\lambda_1 (w_1' w_1 - 1)$, yielding $(S - \\lambda_1 I)w_1 = 0$.",
        "section_reference": "Section 2: Derivation via Lagrange Multipliers",
        "section_anchor": "2-derivation-via-lagrange-multipliers"
      },
      {
        "id": "fc_l4_3",
        "segment_id": "ch2-pca-analytical",
        "order_index": 3,
        "category": "Eigenvalues",
        "front": "What is the characteristic equation used to solve for eigenvalues in PCA?",
        "back": "$$\\det(S - \\lambda I) = 0$$\nSetting the determinant to zero guarantees a non-trivial (non-zero) eigenvector solution.",
        "section_reference": "Section 3: The Characteristic Equation",
        "section_anchor": "3-the-characteristic-equation"
      },
      {
        "id": "fc_l4_4",
        "segment_id": "ch2-pca-analytical",
        "order_index": 4,
        "category": "Trace",
        "front": "What is the relationship between the eigenvalues and the trace of covariance matrix $S$?",
        "back": "$$\\sum_{i=1}^p \\lambda_i = \\text{tr}(S) = \\sum_{j=1}^p s_j^2$$\nThe sum of eigenvalues equals the sum of original sample variances (total variance).",
        "section_reference": "Section 4: Fundamental Properties of Eigenvalues",
        "section_anchor": "4-fundamental-properties-of-eigenvalues"
      },
      {
        "id": "fc_l4_5",
        "segment_id": "ch2-pca-analytical",
        "order_index": 5,
        "category": "Trace",
        "front": "What is the sum of eigenvalues in **Correlation PCA** ($R$)?",
        "back": "$$\\sum_{i=1}^p \\lambda_i = \\text{tr}(R) = p$$\nBecause all $p$ standardized input variables have variance $1.0$, total variance is always $p$.",
        "section_reference": "Section 5.2: When to Use Correlation PCA",
        "section_anchor": "when-to-use-correlation-pca"
      },
      {
        "id": "fc_l4_6",
        "segment_id": "ch2-pca-analytical",
        "order_index": 6,
        "category": "Sensitivity",
        "front": "Why is Covariance PCA highly sensitive to measurement units?",
        "back": "Multiplying a variable by $k$ multiplies its variance by $k^2$.\nA variable measured in smaller units (e.g. grams vs kg) will artificially dominate the leading eigenvectors.",
        "section_reference": "Section 5.1: Scale Sensitivity of Covariance PCA",
        "section_anchor": "scale-sensitivity-of-covariance-pca"
      },
      {
        "id": "fc_l4_7",
        "segment_id": "ch2-pca-analytical",
        "order_index": 7,
        "category": "Decision",
        "front": "When should an analyst use **Correlation PCA** vs **Covariance PCA**?",
        "back": "- Use **Correlation PCA**: When variables have different measurement units or arbitrary scales (standard practice).\n- Use **Covariance PCA**: ONLY when all variables share identical physical units and raw variances reflect true substantive importance.",
        "section_reference": "Section 5.2: When to Use Correlation PCA",
        "section_anchor": "when-to-use-correlation-pca"
      },
      {
        "id": "fc_l4_8",
        "segment_id": "ch2-pca-analytical",
        "order_index": 8,
        "category": "Eigenvalues",
        "front": "For two standardized variables with correlation $r$, what are the eigenvalues of Correlation PCA?",
        "back": "$$\\lambda_1 = 1 + r, \\quad \\lambda_2 = 1 - r$$\nTheir sum is $(1 + r) + (1 - r) = 2 = p$. If $r = 0.60$, $\\lambda_1 = 1.60$ and $\\lambda_2 = 0.40$.",
        "section_reference": "Section 5.2: When to Use Correlation PCA",
        "section_anchor": "when-to-use-correlation-pca"
      }
    ]
  }
];
