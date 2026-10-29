// Part 1: Levels 1 to 4 of Data Analysis curriculum

export const levelsPart1 = [
  // LEVEL 1
  {
    segment: {
      id: 'ch1-scales-methods',
      discipline_id: 'data-analysis',
      title: 'Measurement Scales & Methods Classification',
      subtitle: 'Nonmetric vs metric variables, dummy variable coding, and dependence vs interdependence techniques.',
      order_index: 1,
      summary_markdown: `# Measurement Scales & Multivariate Methods Classification

## 1. The Nature of Data Analysis
Data analysis is a structured process of inspecting, cleaning, transforming, and modeling data with the express purpose of discovering actionable information, suggesting scientific conclusions, and supporting strategic decision-making. 

In multivariate statistical inquiry, problems are typically formalized through one or more **null hypotheses ($H_0$)**. Empirical data collected from a sample of observations are then evaluated to make a probabilistic decision regarding whether to reject or fail to reject these hypotheses. 

Multivariate data analysis plays a central role in modern business analytics, engineering, and empirical science by simultaneously analyzing relationships across multiple variables.

---

## 2. Measurement Scales: The Foundation of Every Analysis
Measurement is the operational process by which numbers or symbols are assigned to characteristics or properties of objects according to specific rules. For instance, customers in a retail banking database may be characterized by age, education level, annual income, credit score, brand sentiment, and transaction frequency.

Statistical literature classifies measurement scales into two broad categories: **Nonmetric scales** (qualitative) and **Metric scales** (quantitative).

### A. Nonmetric Scales (Qualitative)
1. **Nominal Scale**:
   - Numbers or symbols serve purely as arbitrary labels or identifiers to categorize observations into mutually exclusive and exhaustive groups.
   - *Example*: Gender (assigned $0$ for male, $1$ for female) or Geographic Region ($1$ = North, $2$ = South, $3$ = Center).
   - *Crucial Rule*: The assigned numerical values have zero quantitative meaning. It is mathematically invalid to compute the mean or standard deviation of nominal variables.
   - *Permissible Statistics*: Mode, counts, frequency distributions, and contingency table cross-tabulations.
   - *Dummy Variable Representation*: To represent a nominal variable with $k$ categories in econometric or multivariate regression models, exactly $k - 1$ binary (dummy) variables are required. For example, an occupation variable with 3 categories (Commercial, Technical, Unemployed) requires $3 - 1 = 2$ dummy variables ($D_1$ and $D_2$). The omitted category serves as the baseline reference group.

2. **Ordinal Scale**:
   - Observations are ordered or ranked according to the degree of an attribute they possess.
   - *Example*: Ranking 4 car brands in order of personal preference ($1 = \text{Most preferred}$, $2 = \text{Second}$, $3 = \text{Third}$, $4 = \text{Least preferred}$).
   - *Crucial Rule*: Successive categories do not represent equal intervals of the measured attribute. Although brand A is ranked 1 and brand B is ranked 2, the difference in perceived utility between 1 and 2 is not necessarily equal to the difference between ranks 2 and 3.
   - *Permissible Statistics*: Median, mode, percentiles, and non-parametric rank-order statistics such as **Spearman's rank correlation coefficient ($r_s$)**.

---

### B. Metric Scales (Quantitative)
3. **Interval Scale**:
   - Numerical differences between scale points represent genuinely equal amounts of the measured property.
   - *Example*: Temperature measured in Celsius ($^\circ\text{C}$) or Fahrenheit ($^\circ\text{F}$); standard 5-point Likert agreement scales ($1 = \text{Strongly Disagree}$ to $5 = \text{Strongly Agree}$).
   - *Arbitrary Zero Point*: The zero point is arbitrary and does not indicate the complete absence of the characteristic. For instance, $0^\circ\text{C}$ does not mean "absence of heat" (it is simply the freezing point of water). Consequently, you cannot make ratio comparisons: $20^\circ\text{C}$ is **not** twice as warm as $10^\circ\text{C}$.
   - *Permissible Transformation*: Properties of an interval scale are preserved under any linear transformation:
     $$Y_t = a + b Y_0 \quad (b > 0)$$
   - *Permissible Statistics*: Arithmetic mean, standard deviation, variance, Pearson correlation, and regression coefficients. However, ratio-based statistics such as the **Coefficient of Variation ($CV = s / \bar{x}$)** are invalid because changing the arbitrary constant $a$ changes the ratio.

4. **Ratio Scale**:
   - Possesses all properties of an interval scale, with the critical addition of a **natural, absolute, immutable zero base value** that signifies the absolute absence of the measured property.
   - *Example*: Age, salary, revenue, unit sales, distance, weight, height. A salary of $\$0$ means zero monetary compensation; an age of $0$ is the moment of birth.
   - *Ratio Comparisons*: Meaningful ratio statements can be made: a customer earning $\$100,000$ earns exactly twice as much as a customer earning $\$50,000$.
   - *Permissible Transformation*: Only similarity transformations (multiplying by a positive scalar) are valid:
     $$Y_t = b Y_0 \quad (b > 0)$$
     Adding a non-zero constant ($a \neq 0$) is forbidden because it destroys the natural origin.
   - *Permissible Statistics*: All statistical techniques are permissible without restriction, including geometric mean, harmonic mean, ratios, and the Coefficient of Variation.

---

## 3. Classification of Multivariate Methods
Multivariate techniques analyze datasets consisting of $n$ observations across $p$ variables. They are fundamentally split into two methodological paradigms based on variable roles:

### Paradigm 1: Dependence Methods
Used when variables can be conceptually divided into two distinct groups: **Independent variables (predictors)** and **Dependent variables (criterion)**. The objective is to assess the presence, strength, and pattern of causal or predictive relationships.

They are categorized according to:
1. Number of dependent variables (one vs. more than one).
2. Number of independent variables (one vs. more than one).
3. Measurement scale of dependent variables (metric vs. nonmetric).
4. Measurement scale of independent variables (metric vs. nonmetric).

*Key Examples*:
- **Multiple Linear Regression**: 1 metric dependent variable, multiple metric/dummy independent variables.
- **Discriminant Analysis (DA)**: 1 nonmetric (categorical) dependent variable, multiple metric independent variables (e.g., predicting whether a borrower defaults [Yes/No] from income, age, and credit score).
- **MANOVA (Multivariate ANOVA)**: More than one metric dependent variable, nonmetric independent grouping variables.
- **Canonical Correlation**: Multiple metric dependent variables and multiple metric independent variables.

### Paradigm 2: Interdependence Methods
Used when it is impossible or conceptually incorrect to designate variables as independent or dependent. The primary objective is to understand **how and why all variables relate among themselves simultaneously** or to group objects based on multivariate similarity.

*Key Techniques (The Focus of This Course)*:
- **Principal Components Analysis (PCA)**: Metric variables. Reduces dimensionality by maximizing retained total variance through uncorrelated linear combinations.
- **Factor Analysis (FA)**: Metric variables. Identifies unobservable (latent) constructs that account for the intercorrelations among observed indicators.
- **Correspondence Analysis (CA)**: Nonmetric (categorical) variables. Dimension reduction for cross-tabulations and contingency tables (often described as PCA for categorical data).
- **Cluster Analysis**: Classifies observations into homogeneous clusters such that units within a cluster are similar and units in different clusters are maximally distinct.
- **Multidimensional Scaling (MDS)**: Constructs low-dimensional geometric maps of objects from pairwise similarity or dissimilarity matrices.`
    },
    questions: [
      // 4 EASY
      {
        id: 'q_l1_1',
        segment_id: 'ch1-scales-methods',
        order_index: 1,
        difficulty: 'easy',
        question: 'Which measurement scale possesses a natural, absolute zero point that permits valid ratio statements such as "Company A generated twice the revenue of Company B"?',
        options: [
          { id: 'a', text: 'Nominal scale, because categories represent distinct discrete entities' },
          { id: 'b', text: 'Ordinal scale, because rank orders preserve monotonic relative magnitudes' },
          { id: 'c', text: 'Interval scale, because the distance between consecutive points is uniform' },
          { id: 'd', text: 'Ratio scale, because an absolute zero signifies total absence of the attribute' },
          { id: 'e', text: 'Likert scale, because standard survey responses range symmetrically from 1 to 5' },
          { id: 'f', text: 'Binary dummy scale, because variables are restricted strictly to values 0 and 1' }
        ],
        correct_option: 'd',
        explanation: 'The Ratio scale is uniquely characterized by possessing an absolute, immutable natural zero base value (such as $0 in revenue or 0 kg in weight). This allows statements of proportionality ("twice as much") to remain valid under any admissible transformation ($Y_t = bY_0$).'
      },
      {
        id: 'q_l1_2',
        segment_id: 'ch1-scales-methods',
        order_index: 2,
        difficulty: 'easy',
        question: 'How many binary dummy variables are required to represent a nominal demographic variable with $k$ distinct categories in a regression model without introducing perfect multicollinearity?',
        options: [
          { id: 'a', text: 'Exactly $k$ dummy variables, one for each distinct category' },
          { id: 'b', text: 'Exactly $k - 1$ dummy variables, leaving one category as the reference baseline' },
          { id: 'c', text: 'Exactly $k + 1$ dummy variables to include an interaction term' },
          { id: 'd', text: 'Exactly $2k$ dummy variables to account for positive and negative effects' },
          { id: 'e', text: 'Only 1 continuous variable coded from 1 to $k$' },
          { id: 'f', text: 'Exactly $k / 2$ rounded up to the nearest integer' }
        ],
        correct_option: 'b',
        explanation: 'For a nominal variable with $k$ categories, exactly $k - 1$ dummy variables are needed. If all $k$ dummies were included along with the intercept, their sum would equal 1, causing the "dummy variable trap" (perfect multicollinearity).'
      },
      {
        id: 'q_l1_3',
        segment_id: 'ch1-scales-methods',
        order_index: 3,
        difficulty: 'easy',
        question: 'What is the fundamental distinction between dependence methods and interdependence methods in multivariate analysis?',
        options: [
          { id: 'a', text: 'Dependence methods use only small sample sizes, whereas interdependence methods require $n > 10,000$' },
          { id: 'b', text: 'Dependence methods partition variables into predictors and criterion variables, whereas interdependence methods analyze all variables simultaneously without designation' },
          { id: 'c', text: 'Dependence methods are purely nonmetric, while interdependence methods are strictly metric' },
          { id: 'd', text: 'Dependence methods cannot compute p-values, whereas interdependence methods test formal null hypotheses' },
          { id: 'e', text: 'Dependence methods only analyze categorical survey data, while interdependence methods only analyze financial records' },
          { id: 'f', text: 'Dependence methods require uncorrelated variables, while interdependence methods require perfect multicollinearity' }
        ],
        correct_option: 'b',
        explanation: 'In dependence methods (such as regression or discriminant analysis), variables are partitioned into independent (predictors) and dependent (criterion) variables. In interdependence methods (such as PCA, FA, cluster analysis), variables cannot be conceptually split, and their mutual interrelationships are studied together.'
      },
      {
        id: 'q_l1_4',
        segment_id: 'ch1-scales-methods',
        order_index: 4,
        difficulty: 'easy',
        question: 'Which of the following statistics is strictly invalid for an ordinal scale variable (such as customer satisfaction ranked 1st to 4th)?',
        options: [
          { id: 'a', text: 'Median rank' },
          { id: 'b', text: 'Mode' },
          { id: 'c', text: 'Frequency percentage distribution' },
          { id: 'd', text: 'Spearman rank-order correlation coefficient' },
          { id: 'e', text: 'Arithmetic mean and standard deviation' },
          { id: 'f', text: '75th percentile' }
        ],
        correct_option: 'e',
        explanation: 'Because the intervals between ranks on an ordinal scale are not equal, taking an arithmetic mean or standard deviation makes the false assumption of equidistant scale intervals.'
      },

      // 4 INTERMEDIATE
      {
        id: 'q_l1_5',
        segment_id: 'ch1-scales-methods',
        order_index: 5,
        difficulty: 'intermediate',
        question: 'Temperature measured in Celsius is an interval scale. Why is it statistically impermissible to calculate the Coefficient of Variation ($CV = s / \\bar{x}$) on Celsius measurements?',
        options: [
          { id: 'a', text: 'Because Celsius temperatures can never be normally distributed' },
          { id: 'b', text: 'Because the sample standard deviation cannot be calculated on interval data' },
          { id: 'c', text: 'Because the arbitrary origin allows linear transformations $Y_t = a + bY_0$ ($a \\neq 0$), which arbitrarily change the ratio $s / \\bar{x}$' },
          { id: 'd', text: 'Because Celsius is a nonmetric scale that only supports non-parametric median calculations' },
          { id: 'e', text: 'Because the variance of an interval scale is always equal to 1.0 by definition' },
          { id: 'f', text: 'Because $CV$ can only be computed when all observations are negative integers' }
        ],
        correct_option: 'c',
        explanation: 'On an interval scale, the zero point is arbitrary. A permissible transformation is $Y_t = a + bY_0$. Under this shift, the mean transforms as $\\bar{Y}_t = a + b\\bar{Y}_0$ while the standard deviation transforms as $s_t = b s_0$. Therefore, $CV_t = b s_0 / (a + b\\bar{Y}_0) \\neq s_0 / \\bar{Y}_0$. Because the constant $a$ alters the ratio, ratio-based statistics are invalid.'
      },
      {
        id: 'q_l1_6',
        segment_id: 'ch1-scales-methods',
        order_index: 6,
        difficulty: 'intermediate',
        question: 'An e-commerce retailer wants to predict whether a customer will subscribe to a premium membership (Yes/No) based on their annual spend, browsing minutes, and account age. Which multivariate technique is appropriate?',
        options: [
          { id: 'a', text: 'Principal Components Analysis (PCA)' },
          { id: 'b', text: 'Discriminant Analysis or Binary Logistic Regression' },
          { id: 'c', text: 'Correspondence Analysis (CA)' },
          { id: 'd', text: 'Multidimensional Scaling (MDS)' },
          { id: 'e', text: 'Factor Analysis (FA)' },
          { id: 'f', text: 'Simple Pearson Correlation Matrix' }
        ],
        correct_option: 'b',
        explanation: 'The problem involves a single nonmetric categorical dependent variable (Subscription: Yes/No) and multiple metric independent variables (spend, browsing minutes, age). This is the classic setup for Discriminant Analysis or Logistic Regression (a dependence method).'
      },
      {
        id: 'q_l1_7',
        segment_id: 'ch1-scales-methods',
        order_index: 7,
        difficulty: 'intermediate',
        question: 'Under what transformation are the mathematical and statistical properties of an interval scale variable strictly preserved?',
        options: [
          { id: 'a', text: 'Similarity transformation: $Y_t = b Y_0$ with $b > 0$' },
          { id: 'b', text: 'Linear (affine) transformation: $Y_t = a + b Y_0$ with $b > 0$' },
          { id: 'c', text: 'Logarithmic transformation: $Y_t = \\ln(Y_0)$ only' },
          { id: 'd', text: 'Monotonic rank transformation: any $f$ such that $x_1 > x_2 \\implies f(x_1) > f(x_2)$' },
          { id: 'e', text: 'Polynomial squaring transformation: $Y_t = Y_0^2$' },
          { id: 'f', text: 'Strict identity transformation: $Y_t = Y_0$ with zero changes permitted' }
        ],
        correct_option: 'b',
        explanation: 'Interval scale properties are preserved under linear transformations $Y_t = a + bY_0$ ($b > 0$), where $a$ represents an origin translation and $b$ represents a change in the unit of measurement.'
      },
      {
        id: 'q_l1_8',
        segment_id: 'ch1-scales-methods',
        order_index: 8,
        difficulty: 'intermediate',
        question: 'Which multivariate technique is correctly characterized as "the categorical data equivalent of Principal Components Analysis"?',
        options: [
          { id: 'a', text: 'MANOVA' },
          { id: 'b', text: 'Canonical Correlation Analysis' },
          { id: 'c', text: 'Correspondence Analysis (CA)' },
          { id: 'd', text: 'Discriminant Analysis' },
          { id: 'e', text: 'Cluster Analysis' },
          { id: 'f', text: 'Multiple Linear Regression' }
        ],
        correct_option: 'c',
        explanation: 'Correspondence Analysis (CA) is an interdependence technique designed to reduce dimensionality and display relationships in cross-tabulations of categorical (nonmetric) data, serving as the categorical counterpart to PCA.'
      },

      // 4 HARD
      {
        id: 'q_l1_9',
        segment_id: 'ch1-scales-methods',
        order_index: 9,
        difficulty: 'hard',
        question: 'A market research survey measures consumer preference across 5 smartphone brands on a 5-point Likert scale (1 = Very Low Preference to 5 = Very High Preference). If an analyst applies the transformation $Y_t = 2Y_0 + 10$, what happens to the intervals between adjacent points and the ratio between the highest and lowest scores?',
        options: [
          { id: 'a', text: 'Intervals between adjacent points increase from 1 to 2, and the ratio of maximum to minimum remains exactly 5.0' },
          { id: 'b', text: 'Intervals between adjacent points remain constant at 2, while the ratio of maximum to minimum changes from $5/1 = 5.0$ to $20/12 \\approx 1.67$' },
          { id: 'c', text: 'Intervals become non-uniform, but the ratio of maximum to minimum remains exactly 5.0' },
          { id: 'd', text: 'Both the intervals and the ratio are completely unchanged because the transformation is linear' },
          { id: 'e', text: 'The scale reverts to a nominal scale because the transformation distorts ordinal monotonicity' },
          { id: 'f', text: 'The ratio increases from 5.0 to 10.0 because the scale values were multiplied by 2' }
        ],
        correct_option: 'b',
        explanation: 'In the original scale (1 to 5), the distance between adjacent points is 1 and the ratio is $5/1 = 5.0$. Applying $Y_t = 2Y_0 + 10$ yields points 12, 14, 16, 18, 20. The interval between adjacent points is uniformly 2 (equal differences are preserved), but the ratio becomes $20/12 = 1.667$. This proves that interval scales preserve equal increments, but ratios of raw values are meaningless.'
      },
      {
        id: 'q_l1_10',
        segment_id: 'ch1-scales-methods',
        order_index: 10,
        difficulty: 'hard',
        question: 'In a marketing dataset with 1,000 customers, an analyst wants to evaluate the effect of employment sector (Public, Private, Self-employed, Student) on credit card spending ($/year). If the analyst codes three dummy variables ($D_1, D_2, D_3$) leaving "Student" as the reference group, what does the regression coefficient of $D_1$ (Public sector) represent?',
        options: [
          { id: 'a', text: 'The absolute average credit card spend of Public sector employees across the entire population' },
          { id: 'b', text: 'The expected difference in annual credit card spend between Public sector employees and Students, holding all other variables constant' },
          { id: 'c', text: 'The percentage growth in credit card spend when moving from category 1 to category 2' },
          { id: 'd', text: 'The correlation between Public sector employment and annual income' },
          { id: 'e', text: 'The ratio of Public sector spending to Private sector spending' },
          { id: 'f', text: 'The probability that a public employee belongs to the high-spending cluster' }
        ],
        correct_option: 'b',
        explanation: 'When $k - 1$ dummy variables are included in a linear regression model, the coefficient on any dummy variable represents the differential intercept—the expected difference in the dependent variable relative to the omitted baseline category (in this case, Students).'
      },
      {
        id: 'q_l1_11',
        segment_id: 'ch1-scales-methods',
        order_index: 11,
        difficulty: 'hard',
        question: 'Which of the following research problems represents an INTERDEPENDENCE technique where the input data are pairwise proximity judgments rather than individual object attributes?',
        options: [
          { id: 'a', text: 'Predicting regional GDP growth from employment, investment, and exports via Multiple Regression' },
          { id: 'b', text: 'Constructing a perceptual brand map from consumer dissimilarity matrices via Multidimensional Scaling (MDS)' },
          { id: 'c', text: 'Classifying bank borrowers into default vs non-default groups via Discriminant Analysis' },
          { id: 'd', text: 'Testing whether mean blood pressure differs across three drug dosage groups via MANOVA' },
          { id: 'e', text: 'Estimating customer lifetime value using survival analysis' },
          { id: 'f', text: 'Deriving price elasticity coefficients using ordinary least squares' }
        ],
        correct_option: 'b',
        explanation: 'Multidimensional Scaling (MDS) is an interdependence technique that takes pairwise similarity or dissimilarity ratings among $n$ objects and constructs a geometric configuration of points in low-dimensional space such that distances between points reproduce observed proximities.'
      },
      {
        id: 'q_l1_12',
        segment_id: 'ch1-scales-methods',
        order_index: 12,
        difficulty: 'hard',
        question: 'A financial researcher asserts: "Because ratio scales allow all mathematical transformations, we can add a fixed constant $a = 50$ to each firm’s revenue figures without affecting the ratio properties." Why is this statement false?',
        options: [
          { id: 'a', text: 'Because adding a constant to ratio variables makes their standard deviation negative' },
          { id: 'b', text: 'Because adding a non-zero constant destroys the absolute zero point ($0 + 50 = 50$), thereby invalidating proportionality and ratio comparisons' },
          { id: 'c', text: 'Because ratio variables can only be transformed using non-linear quadratic functions' },
          { id: 'd', text: 'Because revenue is an interval scale, not a ratio scale' },
          { id: 'e', text: 'Because only multiplication by zero is mathematically permissible on ratio scales' },
          { id: 'f', text: 'Because adding a constant alters the rank order of the firms' }
        ],
        correct_option: 'b',
        explanation: 'Ratio scales are strictly restricted to similarity transformations $Y_t = bY_0$ ($b > 0$). Adding a constant $a \\neq 0$ shifts the natural zero point, destroying the property that zero means absence of the attribute. For example, if Firm A has $10M and Firm B has $5M (ratio = 2.0), adding 50 gives $60M and $55M (ratio = 1.09), destroying the true ratio relationship.'
      }
    ],
    flashcards: [
      {
        id: 'fc_l1_1',
        segment_id: 'ch1-scales-methods',
        order_index: 1,
        category: 'Scales',
        front: 'What are the two types of **Nonmetric Scales**, and what are their defining properties?',
        back: '1. **Nominal Scale**: Numbers are purely labels for distinct categories. No quantitative meaning; mode and frequency counts only.\n2. **Ordinal Scale**: Numbers denote rank order or relative preference, but intervals between ranks are NOT equal. Median, mode, and Spearman rank correlation only.'
      },
      {
        id: 'fc_l1_2',
        segment_id: 'ch1-scales-methods',
        order_index: 2,
        category: 'Scales',
        front: 'What is the critical distinction between an **Interval Scale** and a **Ratio Scale**?',
        back: 'An **Interval Scale** has equal intervals between units but an **arbitrary zero point** (e.g. Celsius temperature); ratios are invalid.\nA **Ratio Scale** has equal intervals AND an **absolute, natural zero base** (e.g. age, revenue); ratios like "twice as much" are valid.'
      },
      {
        id: 'fc_l1_3',
        segment_id: 'ch1-scales-methods',
        order_index: 3,
        category: 'Formulas',
        front: 'What is the permissible mathematical transformation for an **Interval Scale** vs a **Ratio Scale**?',
        back: '- **Interval Scale**: Linear transformation $Y_t = a + b Y_0$ ($b > 0$).\n- **Ratio Scale**: Similarity transformation $Y_t = b Y_0$ ($b > 0$). Adding a constant $a \\neq 0$ is forbidden because it destroys the natural zero.'
      },
      {
        id: 'fc_l1_4',
        segment_id: 'ch1-scales-methods',
        order_index: 4,
        category: 'Coding',
        front: 'What is the rule for representing a nominal variable with $k$ categories using dummy variables?',
        back: 'Exactly **$k - 1$ binary dummy variables** are required.\nIncluding all $k$ dummies alongside an intercept creates perfect multicollinearity (the dummy variable trap).'
      },
      {
        id: 'fc_l1_5',
        segment_id: 'ch1-scales-methods',
        order_index: 5,
        category: 'Taxonomy',
        front: 'What characterizes **Dependence Methods** in multivariate data analysis?',
        back: 'Variables are partitioned into **independent variables (predictors)** and **dependent variables (criterion)** to explain or predict relationships (e.g., Multiple Regression, Discriminant Analysis, MANOVA).'
      },
      {
        id: 'fc_l1_6',
        segment_id: 'ch1-scales-methods',
        order_index: 6,
        category: 'Taxonomy',
        front: 'What characterizes **Interdependence Methods** in multivariate data analysis?',
        back: 'Variables cannot be partitioned into predictors and criterion. The objective is to discover underlying structure or groupings across all variables simultaneously (e.g., PCA, Factor Analysis, Cluster Analysis, MDS).'
      },
      {
        id: 'fc_l1_7',
        segment_id: 'ch1-scales-methods',
        order_index: 7,
        category: 'Methods',
        front: 'When should an analyst choose **Discriminant Analysis** over **Multiple Regression**?',
        back: 'When the dependent variable is **nonmetric (categorical)** (e.g., default vs non-default) and the independent variables are metric. Multiple Regression requires a **metric continuous** dependent variable.'
      },
      {
        id: 'fc_l1_8',
        segment_id: 'ch1-scales-methods',
        order_index: 8,
        category: 'Methods',
        front: 'What is **Correspondence Analysis (CA)**?',
        back: 'An interdependence dimension-reduction technique designed for **categorical (nonmetric) data**, analyzing contingency tables and cross-tabulations. It is considered the categorical counterpart to PCA.'
      }
    ]
  },

  // LEVEL 2
  {
    segment: {
      id: 'ch1-manipulation-distances',
      discipline_id: 'data-analysis',
      title: 'Data Manipulation Fundamentals & Distance Metrics',
      subtitle: 'Centered data, degrees of freedom, variance-covariance geometry, and metric distance spaces.',
      order_index: 2,
      summary_markdown: `# Data Manipulation Fundamentals & Distance Metrics

## 1. Summary Measures and Centered Data
Summarizing a multivariate dataset of $n$ observations measured on $p$ variables begins with central tendency and dispersion.

### The Arithmetic Mean
For the $j$-th variable, the sample mean is the average value:
$$\bar{x}_j = \frac{1}{n} \sum_{i=1}^n x_{ij}$$

### Mean-Corrected (Centered) Data
Representing data as deviations from the variable mean yields centered data:
$$x^*_{ij} = x_{ij} - \bar{x}_j$$

*Geometric Meaning*: Centering shifts the coordinate origin directly to the sample mean vector (the **centroid** $C = (\bar{x}_1, \dots, \bar{x}_p)$). Crucially, centering does **not** change the relative distances between observations, nor does it alter sample variances or covariances.

---

## 2. Degrees of Freedom ($df$)
Almost all multivariate summary measures rely on the concept of degrees of freedom.
> **Definition**: Degrees of freedom represent the number of independent pieces of information in a dataset that are free to vary when computing a given statistic.

For example, if the sample mean $\bar{x}_j$ is known, the $n$-th observation is completely determined by the remaining $n - 1$ observations:
$$x_{nj} = n \bar{x}_j - \sum_{l \neq n} x_{lj}$$
Hence, a sample of size $n$ used to estimate a mean leaves exactly **$n - 1$ degrees of freedom**.

*Contingency Table Example*: In a $2 \times 2$ cross-tabulation table with fixed marginal totals, knowing just **one** cell joint frequency completely determines the other three cells. Therefore, a $2 \times 2$ table has only $(r - 1)(c - 1) = (2 - 1)(2 - 1) = 1$ degree of freedom.

---

## 3. Dispersion, Covariation, and Correlation

### Variance: Dispersion is Information
Variance measures the spread of observations around the mean:
$$s_j^2 = \frac{1}{n - 1} \sum_{i=1}^n (x_{ij} - \bar{x}_j)^2 = \frac{SS_j}{df}$$
- The numerator is the **Sum of Squares ($SS$)**.
- The denominator is the degrees of freedom ($df = n - 1$).
- Thus, variance is the **average squared deviation per degree of freedom**.
- The **Sample Standard Deviation** is the positive square root: $s_j = \sqrt{s_j^2}$.

### Covariance: Direction of Joint Association
The linear relationship or co-movement between two variables $X_j$ and $X_k$ is quantified by the sample covariance:
$$S_{jk} = \frac{1}{n - 1} \sum_{i=1}^n (x_{ij} - \bar{x}_j)(x_{ik} - \bar{x}_k) = \frac{SCP_{jk}}{df}$$
- The numerator is the **Sum of Cross Products ($SCP$)**.
- If $S_{jk} > 0$, the variables move together in the same direction.
- If $S_{jk} < 0$, an increase in one variable corresponds to a decrease in the other.
- If $S_{jk} \approx 0$, there is no linear association.

### Standardization and Pearson Correlation Coefficient
Because covariance depends on the arbitrary measurement units of $X_j$ and $X_k$, it has no theoretical upper bound. To make associations comparable across variables, variables are **standardized**:
$$z_{ij} = \frac{x_{ij} - \bar{x}_j}{s_j}$$
Every standardized variable has a mean of $0$ and a variance of $1$.

The covariance between two standardized variables is the **Pearson Correlation Coefficient ($r_{jk}$)**:
$$r_{jk} = \frac{S_{jk}}{s_j s_k} = \frac{\sum_{i=1}^n (x_{ij} - \bar{x}_j)(x_{ik} - \bar{x}_k)}{\sqrt{\sum_{i=1}^n (x_{ij} - \bar{x}_j)^2} \sqrt{\sum_{i=1}^n (x_{ik} - \bar{x}_k)^2}}$$
- Property: $-1 \le r_{jk} \le 1$.
- Invented by Karl Pearson (1857–1936).
- *Vital Caveat*: Correlation measures **non-causal linear association**. A high correlation between height and weight does not mean eating more to gain weight will make an individual taller!

---

## 4. Geometric Duality: Variable Space vs. Observation Space

Multivariate data can be viewed through two equivalent geometric frameworks:

1. **Variable Space ($p$-dimensional space)**:
   - Coordinate axes represent the $p$ variables.
   - Each of the $n$ observations is a point located at coordinates $(x_{i1}, x_{i2}, \dots, x_{ip})$.
   - The centroid $C = (\bar{x}_1, \dots, \bar{x}_p)$ is the center of gravity of the data cloud.

2. **Observation Space / Individual Space ($n$-dimensional space)**:
   - Coordinate axes represent the $n$ observations.
   - Each of the $p$ variables is represented as a **vector** in $n$ dimensions.
   - For mean-corrected data, the squared length (norm squared) of variable vector $x_j$ is equal to its Sum of Squares:
     $$\|x_j\|^2 = SS_j \implies \|x_j\| = s_j \sqrt{n - 1}$$
   - The scalar dot product between two mean-corrected variable vectors is the Sum of Cross Products ($SCP$):
     $$x_j \cdot x_k = SCP_{jk} = (n - 1) S_{jk}$$
   - **The Cosine Rule**: The cosine of the angle $\alpha$ between two variable vectors in observation space is exactly equal to their Pearson correlation coefficient:
     $$\cos(\alpha) = \frac{x_j \cdot x_k}{\|x_j\| \|x_k\|} = \frac{(n - 1) S_{jk}}{(s_j \sqrt{n - 1})(s_k \sqrt{n - 1})} = \frac{S_{jk}}{s_j s_k} = r_{jk}$$
     - If $\alpha = 0^\circ \implies \cos(0^\circ) = 1 \implies r = 1$ (perfect collinearity).
     - If $\alpha = 90^\circ \implies \cos(90^\circ) = 0 \implies r = 0$ (orthogonal, uncorrelated variables).
     - If $\alpha = 180^\circ \implies \cos(180^\circ) = -1 \implies r = -1$.

---

## 5. Distance Metrics: From Euclidean to Mahalanobis

### Axioms of a Metric Space
Any mathematical distance function $D_{ik}$ between observations $i$ and $k$ in $p$ dimensions must satisfy three properties:
1. **Non-negativity and Distinguishability**: $D_{ik} \ge 0$, with $D_{ik} = 0 \iff i = k$.
2. **Symmetry**: $D_{ik} = D_{ki}$.
3. **Triangle Inequality**: $D_{il} \le D_{ik} + D_{kl}$ for any third observation $l$.

### A. Euclidean Distance
The familiar straight-line Pythagorean distance:
$$D_{ik} = \sqrt{\sum_{j=1}^p (x_{ij} - x_{kj})^2}$$
*Limitation*: Assumes that all variables have equal variances and are completely uncorrelated. If variable 1 is measured in millimeters and variable 2 in kilometers, Euclidean distance is distorted.

### B. Statistical Distance (Variance-Adjusted)
Adjusts Euclidean distance by standardizing each variable by its standard deviation:
$$SD_{ik}^2 = \sum_{j=1}^p \left(\frac{x_{ij} - x_{kj}}{s_j}\right)^2$$
Points separated along a high-variance dimension are statistically closer than points separated by the same absolute distance along a low-variance dimension.

### C. Mahalanobis Distance (Covariance-Adjusted)
Developed by P. C. Mahalanobis (1936), this metric accounts for **both differing variances and inter-variable correlations**:
$$MD_{ik}^2 = (x_i - x_k)' S^{-1} (x_i - x_k)$$
where $S$ is the $p \times p$ sample covariance matrix.

In the bivariate ($p = 2$) case with correlation $r$:
$$MD_{ik}^2 = \frac{1}{1 - r^2} \left[ \frac{(x_{i1} - x_{k1})^2}{s_1^2} + \frac{(x_{i2} - x_{k2})^2}{s_2^2} - \frac{2r(x_{i1} - x_{k1})(x_{i2} - x_{k2})}{s_1 s_2} \right]$$

*Key Reductions*:
- When variables are uncorrelated ($r = 0$), Mahalanobis distance simplifies to **Statistical distance**.
- When variables are uncorrelated ($r = 0$) and have unit variance ($s_j = 1$), Mahalanobis distance simplifies to **Euclidean distance** ($S = I$).`
    },
    questions: [
      // 4 EASY
      {
        id: 'q_l2_1',
        segment_id: 'ch1-manipulation-distances',
        order_index: 1,
        difficulty: 'easy',
        question: 'What is the relationship between the sample variance ($s_j^2$), the Sum of Squares ($SS_j$), and the degrees of freedom ($df$) for a single variable?',
        options: [
          { id: 'a', text: 'Variance is the Sum of Squares multiplied by $n - 1$' },
          { id: 'b', text: 'Variance is the Sum of Squares divided by degrees of freedom: $s_j^2 = SS_j / (n - 1)$' },
          { id: 'c', text: 'Variance is the square root of the Sum of Squares divided by $n$' },
          { id: 'd', text: 'Variance is the Sum of Cross Products divided by the mean' },
          { id: 'e', text: 'Variance is identical to the degrees of freedom for standardized data' },
          { id: 'f', text: 'Variance is the sum of deviations from the median divided by $n - 2$' }
        ],
        correct_option: 'b',
        explanation: 'Sample variance is defined as the sum of squared deviations from the mean (SS) divided by degrees of freedom ($df = n - 1$), representing the average squared deviation per degree of freedom.'
      },
      {
        id: 'q_l2_2',
        segment_id: 'ch1-manipulation-distances',
        order_index: 2,
        difficulty: 'easy',
        question: 'In an $n$-dimensional observation space where variables are represented as vectors, what statistical property does the angle $\\alpha$ between two mean-corrected variable vectors represent?',
        options: [
          { id: 'a', text: 'The ratio of their sample means' },
          { id: 'b', text: 'The difference between their degrees of freedom' },
          { id: 'c', text: 'The cosine of $\\alpha$ is exactly equal to the Pearson correlation coefficient: $\\cos(\\alpha) = r_{jk}$' },
          { id: 'd', text: 'The Euclidean distance between their minimum values' },
          { id: 'e', text: 'The determinant of their joint covariance matrix' },
          { id: 'f', text: 'The tangent of $\\alpha$ is equal to their pooled sample variance' }
        ],
        correct_option: 'c',
        explanation: 'In observation space, the scalar dot product between two mean-corrected vectors divided by the product of their norms equals the cosine of the angle between them, which identically matches the formula for the Pearson correlation coefficient: $\\cos(\\alpha) = r_{jk}$.'
      },
      {
        id: 'q_l2_3',
        segment_id: 'ch1-manipulation-distances',
        order_index: 3,
        difficulty: 'easy',
        question: 'What happens to the mean and variance of a variable when it is transformed into a standardized variable ($z = (x - \\bar{x})/s$)?',
        options: [
          { id: 'a', text: 'Mean becomes 1.0 and variance becomes 0.0' },
          { id: 'b', text: 'Mean becomes 0.0 and variance becomes 1.0' },
          { id: 'c', text: 'Both mean and variance become 0.0' },
          { id: 'd', text: 'Mean is unchanged and variance doubles' },
          { id: 'e', text: 'Mean becomes 0.0 and variance is multiplied by $n - 1$' },
          { id: 'f', text: 'Mean and variance become equal to the original median' }
        ],
        correct_option: 'b',
        explanation: 'Standardization subtracts the mean (making the new mean 0.0) and divides by the standard deviation (making the new variance $s^2 / s^2 = 1.0$).'
      },
      {
        id: 'q_l2_4',
        segment_id: 'ch1-manipulation-distances',
        order_index: 4,
        difficulty: 'easy',
        question: 'Which of the following is NOT one of the three fundamental mathematical axioms that define a metric distance space?',
        options: [
          { id: 'a', text: 'Non-negativity and Distinguishability: $D_{ik} \\ge 0$ and $D_{ik} = 0 \\iff i = k$' },
          { id: 'b', text: 'Symmetry: $D_{ik} = D_{ki}$' },
          { id: 'c', text: 'Triangle Inequality: $D_{il} \\le D_{ik} + D_{kl}$' },
          { id: 'd', text: 'Proportional Invariance: $D_{ik}$ must always be less than or equal to 1.0' },
          { id: 'e', text: 'Identical zero distance for self-comparison: $D_{ii} = 0$' },
          { id: 'f', text: 'Positive distance between distinct points: if $i \\neq k$, then $D_{ik} > 0$' }
        ],
        correct_option: 'd',
        explanation: 'A metric space does not require distances to be bounded by 1.0. The three required axioms are distinguishability ($D_{ik} = 0 \\iff i=k$), symmetry ($D_{ik} = D_{ki}$), and the triangle inequality ($D_{il} \\le D_{ik} + D_{kl}$).'
      },

      // 4 INTERMEDIATE
      {
        id: 'q_l2_5',
        segment_id: 'ch1-manipulation-distances',
        order_index: 5,
        difficulty: 'intermediate',
        question: 'Why does Euclidean distance become an inappropriate metric when variables have vastly different scales or variances (e.g., combining annual income in Euros with household size in persons)?',
        options: [
          { id: 'a', text: 'Because Euclidean distance cannot be computed on more than two dimensions' },
          { id: 'b', text: 'Because variables with large numerical variances dominate the distance calculation, making the smaller-scale variables practically irrelevant' },
          { id: 'c', text: 'Because Euclidean distance violates the triangle inequality whenever variables have different units' },
          { id: 'd', text: 'Because the Pythagorean theorem is only valid for nonmetric categorical scales' },
          { id: 'e', text: 'Because Euclidean distance automatically squares the correlation matrix' },
          { id: 'f', text: 'Because Euclidean distance assumes variables are negatively correlated' }
        ],
        correct_option: 'b',
        explanation: 'Euclidean distance sums raw squared differences $(x_{ij} - x_{kj})^2$. A difference of 5,000 Euros in income yields $25,000,000$, completely overwhelming a difference of 2 people in household size ($2^2 = 4$). Statistical or Mahalanobis distance solves this by standardizing by dispersion.'
      },
      {
        id: 'q_l2_6',
        segment_id: 'ch1-manipulation-distances',
        order_index: 6,
        difficulty: 'intermediate',
        question: 'Under what specific conditions does the Mahalanobis Distance ($MD$) reduce exactly to the ordinary Euclidean Distance?',
        options: [
          { id: 'a', text: 'When all variables are perfectly correlated ($r = 1.0$)' },
          { id: 'b', text: 'When the sample size $n$ approaches infinity' },
          { id: 'c', text: 'When all variables are mutually uncorrelated ($r = 0$) and have unit variance ($s_j^2 = 1$), such that the covariance matrix is the identity matrix $S = I$' },
          { id: 'd', text: 'When data are measured exclusively on an ordinal rank scale' },
          { id: 'e', text: 'When the mean vector is equal to zero' },
          { id: 'f', text: 'When all variables have identical non-zero covariances' }
        ],
        correct_option: 'c',
        explanation: 'In matrix form, $MD^2 = (x_i - x_k)^T S^{-1} (x_i - x_k)$. When variables are uncorrelated and have unit variance, $S = I$, so $S^{-1} = I$, reducing the formula to $(x_i - x_k)^T (x_i - x_k) = \\sum (x_{ij} - x_{kj})^2$, which is squared Euclidean distance.'
      },
      {
        id: 'q_l2_7',
        segment_id: 'ch1-manipulation-distances',
        order_index: 7,
        difficulty: 'intermediate',
        question: 'In a $2 \\times 2$ contingency table with fixed marginal totals, why is there only 1 degree of freedom?',
        options: [
          { id: 'a', text: 'Because there are 2 rows and 2 columns, and $2 / 2 = 1$' },
          { id: 'b', text: 'Because once any single cell joint frequency is specified, the remaining three cells are fixed by the row and column margins' },
          { id: 'c', text: 'Because binary data cannot have variance' },
          { id: 'd', text: 'Because nominal scales only permit calculation of the mode' },
          { id: 'e', text: 'Because the sample correlation in a $2 \\times 2$ table is always zero' },
          { id: 'f', text: 'Because the determinant of a $2 \\times 2$ table is always 1' }
        ],
        correct_option: 'b',
        explanation: 'For any two-way table, $df = (r - 1)(c - 1) = (2 - 1)(2 - 1) = 1$. With fixed margins, specifying just one cell frequency allows all other three cells to be deduced by subtracting from the marginal totals.'
      },
      {
        id: 'q_l2_8',
        segment_id: 'ch1-manipulation-distances',
        order_index: 8,
        difficulty: 'intermediate',
        question: 'Two mean-corrected variable vectors $x_1$ and $x_2$ in observation space are perpendicular (orthogonal) to each other ($\alpha = 90^\circ$). What is their Pearson correlation coefficient and covariance?',
        options: [
          { id: 'a', text: '$r = 1.0$ and covariance is positive' },
          { id: 'b', text: '$r = -1.0$ and covariance is negative' },
          { id: 'c', text: '$r = 0.0$ and covariance is $0.0$' },
          { id: 'd', text: '$r = 0.5$ and covariance is equal to the product of their means' },
          { id: 'e', text: '$r$ is undefined because perpendicular vectors cannot exist in observation space' },
          { id: 'f', text: '$r = 0.707$ because $\\cos(45^\\circ) = \\sqrt{2}/2$' }
        ],
        correct_option: 'c',
        explanation: 'Because $\\cos(\\alpha) = r_{jk}$, when $\\alpha = 90^\\circ$, $\\cos(90^\\circ) = 0$. Thus, the correlation $r = 0$ and the sample covariance $S_{jk} = 0$. Orthogonal vectors in observation space represent linearly uncorrelated variables.'
      },

      // 4 HARD
      {
        id: 'q_l2_9',
        segment_id: 'ch1-manipulation-distances',
        order_index: 9,
        difficulty: 'hard',
        question: 'Consider a univariate normal random variable $X \\sim N(0, \\sigma^2)$ and two fixed points $x_1 = -2$ and $x_2 = 2$. Compare the Euclidean distance and the Statistical distance between these points under Distribution A ($\\sigma^2 = 4$) vs Distribution B ($\\sigma^2 = 1$).',
        options: [
          { id: 'a', text: 'Euclidean distance is 4 under both; Statistical distance is $SD^2 = 4$ under A and $SD^2 = 16$ under B, showing the points are statistically closer under larger variance' },
          { id: 'b', text: 'Euclidean distance is 16 under A and 4 under B; Statistical distance is identical under both' },
          { id: 'c', text: 'Both Euclidean and Statistical distances are 4 under both distributions' },
          { id: 'd', text: 'Statistical distance is undefined because the mean is zero' },
          { id: 'e', text: 'Points are statistically further apart under Distribution A because variance is greater' },
          { id: 'f', text: 'Statistical distance is 0 under A and 2 under B' }
        ],
        correct_option: 'a',
        explanation: 'Euclidean distance is $|2 - (-2)| = 4$ for both. Squared statistical distance is $SD^2 = ((x_2 - x_1)/s)^2$. For A, $s = \\sqrt{4} = 2 \\implies SD^2 = (4/2)^2 = 4$. For B, $s = \\sqrt{1} = 1 \\implies SD^2 = (4/1)^2 = 16$. In probability terms, $P(-2 < X < 2)$ is much higher when $\\sigma^2 = 1$ than when $\\sigma^2 = 4$, making the points statistically closer when variance is large.'
      },
      {
        id: 'q_l2_10',
        segment_id: 'ch1-manipulation-distances',
        order_index: 10,
        difficulty: 'hard',
        question: 'In a bivariate dataset, two variables have variances $s_1^2 = 25$, $s_2^2 = 16$, and a high positive correlation $r = 0.80$. Two observations have coordinate differences $\\Delta x_1 = 5$ and $\\Delta x_2 = 4$. Compute their squared Mahalanobis distance $MD^2$.',
        options: [
          { id: 'a', text: '$MD^2 = 41.00$' },
          { id: 'b', text: '$MD^2 = 1.11$' },
          { id: 'c', text: '$MD^2 = 5.56$' },
          { id: 'd', text: '$MD^2 = 0.00$' },
          { id: 'e', text: '$MD^2 = 10.00$' },
          { id: 'f', text: '$MD^2 = 2.00$' }
        ],
        correct_option: 'b',
        explanation: 'Using the bivariate Mahalanobis formula: $MD^2 = \\frac{1}{1 - r^2} \\left[ \\frac{(\\Delta x_1)^2}{s_1^2} + \\frac{(\\Delta x_2)^2}{s_2^2} - \\frac{2r(\\Delta x_1)(\\Delta x_2)}{s_1 s_2} \\right]$. Here, $\\Delta x_1 / s_1 = 5/5 = 1$, $\\Delta x_2 / s_2 = 4/4 = 1$. The bracketed term is $1^2 + 1^2 - 2(0.80)(1)(1) = 2 - 1.60 = 0.40$. The pre-factor is $1 / (1 - 0.8^2) = 1 / (1 - 0.64) = 1 / 0.36 \\approx 2.778$. Thus, $MD^2 = 0.40 / 0.36 = 4/3.6 \\approx 1.11$.'
      },
      {
        id: 'q_l2_11',
        segment_id: 'ch1-manipulation-distances',
        order_index: 11,
        difficulty: 'hard',
        question: 'Suppose a dataset of $n = 12$ firms has two financial ratios. The mean-corrected vector for $X_1$ has squared length $\\|x_1\\|^2 = 262.92$, and $X_2$ has $\\|x_2\\|^2 = 131.67$. Their dot product is $x_1 \\cdot x_2 = 136.375$. What is their exact Pearson correlation coefficient $r_{12}$?',
        options: [
          { id: 'a', text: '$r_{12} = 136.375 / (262.92 + 131.67) = 0.346$' },
          { id: 'b', text: '$r_{12} = 136.375 / \\sqrt{262.92 \\times 131.67} \\approx 0.733$' },
          { id: 'c', text: '$r_{12} = \\sqrt{136.375} / 11 = 1.06$' },
          { id: 'd', text: '$r_{12} = (262.92 - 131.67) / 136.375 = 0.963$' },
          { id: 'e', text: '$r_{12} = 136.375 / (11 \\times 12) = 1.033$' },
          { id: 'f', text: '$r_{12} = 0.538$' }
        ],
        correct_option: 'b',
        explanation: 'In observation space, $\\cos(\\alpha) = \\frac{x_1 \\cdot x_2}{\\|x_1\\| \\|x_2\\|} = \\frac{136.375}{\\sqrt{262.917 \\times 131.667}} = \\frac{136.375}{\\sqrt{34617.48}} = \\frac{136.375}{186.058} \\approx 0.733$. This matches slide 65 of Chapter 1.'
      },
      {
        id: 'q_l2_12',
        segment_id: 'ch1-manipulation-distances',
        order_index: 12,
        difficulty: 'hard',
        question: 'Why does translating axes to the centroid (mean-correcting data) leave the sample covariance and variance invariant, whereas standardizing data changes the relative geometric configuration of points in variable space?',
        options: [
          { id: 'a', text: 'Centering is a rigid translation that preserves all Euclidean distances, whereas standardizing divides each axis by a different standard deviation, differentially stretching and compressing space' },
          { id: 'b', text: 'Centering alters the correlation matrix, whereas standardizing leaves the covariance matrix unchanged' },
          { id: 'c', text: 'Centering projects data into an $n-1$ subspace, while standardization projects data into a 1-dimensional subspace' },
          { id: 'd', text: 'Centering violates the triangle inequality, while standardization restores it' },
          { id: 'e', text: 'Centering is only permissible for ratio scales, while standardizing is only valid for nominal data' },
          { id: 'f', text: 'There is no difference; both transformations preserve identical geometric shapes' }
        ],
        correct_option: 'a',
        explanation: 'Subtracting means shifts the origin to $(0,0)$ without altering distances: $(x_{ij} - x_{kj}) = (x^*_{ij} - x^*_{kj})$. However, dividing each dimension by its own standard deviation $s_j$ differentially compresses dimensions with large spread and expands dimensions with small spread, altering relative distances and angles between observations.'
      }
    ],
    flashcards: [
      {
        id: 'fc_l2_1',
        segment_id: 'ch1-manipulation-distances',
        order_index: 1,
        category: 'Definitions',
        front: 'What is **Centered (Mean-Corrected) Data**, and what is its geometric effect?',
        back: '$x^*_{ij} = x_{ij} - \\bar{x}_j$\nGeometrically, it translates the origin to the **centroid** $(\\bar{x}_1, \\dots, \\bar{x}_p)$. Relative distances between points, variances, and covariances are completely unchanged.'
      },
      {
        id: 'fc_l2_2',
        segment_id: 'ch1-manipulation-distances',
        order_index: 2,
        category: 'Definitions',
        front: 'What is the conceptual definition of **Degrees of Freedom ($df$)**?',
        back: 'The number of **independent pieces of information** in a dataset free to vary when computing a statistic.\nFor sample variance, $df = n - 1$ because fixing the mean determines the $n$-th observation.'
      },
      {
        id: 'fc_l2_3',
        segment_id: 'ch1-manipulation-distances',
        order_index: 3,
        category: 'Formulas',
        front: 'How are **Variance** and **Covariance** related to Sum of Squares ($SS$) and Sum of Cross Products ($SCP$)?',
        back: '- Variance: $s_j^2 = \\frac{SS_j}{n - 1} = \\frac{\\sum (x_{ij} - \\bar{x}_j)^2}{df}$\n- Covariance: $S_{jk} = \\frac{SCP_{jk}}{n - 1} = \\frac{\\sum (x_{ij} - \\bar{x}_j)(x_{ik} - \\bar{x}_k)}{df}$'
      },
      {
        id: 'fc_l2_4',
        segment_id: 'ch1-manipulation-distances',
        order_index: 4,
        category: 'Geometry',
        front: 'In **Observation Space**, what does the angle between two mean-corrected variable vectors represent?',
        back: 'The cosine of the angle $\\alpha$ between the two vectors is exactly the **Pearson correlation coefficient**:\n$$\\cos(\\alpha) = \\frac{x_j \\cdot x_k}{\\|x_j\\| \\|x_k\\|} = r_{jk}$$\n$\\alpha = 90^\\circ \\implies r = 0$ (uncorrelated).'
      },
      {
        id: 'fc_l2_5',
        segment_id: 'ch1-manipulation-distances',
        order_index: 5,
        category: 'Metrics',
        front: 'What are the three essential axioms of a **Metric Distance**?',
        back: '1. **Distinguishability**: $D_{ik} \\ge 0$ and $D_{ik} = 0 \\iff i = k$\n2. **Symmetry**: $D_{ik} = D_{ki}$\n3. **Triangle Inequality**: $D_{il} \\le D_{ik} + D_{kl}$'
      },
      {
        id: 'fc_l2_6',
        segment_id: 'ch1-manipulation-distances',
        order_index: 6,
        category: 'Metrics',
        front: 'What is **Statistical Distance**, and how does it improve upon Euclidean Distance?',
        back: 'Statistical distance adjusts Euclidean distance by dividing differences by each variable\'s standard deviation:\n$$SD_{ik}^2 = \\sum_{j=1}^p \\left(\\frac{x_{ij} - x_{kj}}{s_j}\\right)^2$$\nIt prevents high-variance variables from dominating.'
      },
      {
        id: 'fc_l2_7',
        segment_id: 'ch1-manipulation-distances',
        order_index: 7,
        category: 'Metrics',
        front: 'What is **Mahalanobis Distance ($MD$)** and what does it account for?',
        back: 'Mahalanobis distance accounts for **both differing variances and inter-variable covariances**:\n$$MD_{ik}^2 = (x_i - x_k)\' S^{-1} (x_i - x_k)$$\nIt measures distance relative to the data\'s ellipsoid distribution.'
      },
      {
        id: 'fc_l2_8',
        segment_id: 'ch1-manipulation-distances',
        order_index: 8,
        category: 'Metrics',
        front: 'When does Mahalanobis distance reduce to Statistical distance and Euclidean distance?',
        back: '- Reduces to **Statistical distance** when variables are uncorrelated ($r = 0$, $S$ is diagonal).\n- Reduces to **Euclidean distance** when variables are uncorrelated and standardized ($S = I$).'
      }
    ]
  },

  // LEVEL 3
  {
    segment: {
      id: 'ch2-pca-geometry',
      discipline_id: 'data-analysis',
      title: 'PCA: Geometric Foundations & Projections',
      subtitle: 'Rigorous orthogonal projections, variance maximization along rotated axes, and subspace reconstruction.',
      order_index: 3,
      summary_markdown: `# PCA: Geometric Foundations & Coordinate Projections

## 1. Motivation: The Dimensionality Curse
Imagine an analyst examining $1,000$ companies using $50$ financial ratios. The dataset contains $50,000$ individual numbers. Many of these ratios are strongly intercorrelated (e.g., return on assets, return on equity, and profit margins all measure profitability). 

Can we summarize this multidimensional data cloud using a few composite indices without losing essential variation?

**Principal Components Analysis (PCA)** is an interdependence dimension-reduction technique that constructs new variables as **uncorrelated linear combinations** of the original variables, ordered by the amount of variance they explain.

---

## 2. The 12-Customer Case Study
Consider 12 customers measured on two variables:
- $X_1$: Annual Income (in k€/year)
- $X_2$: Customer Lifetime Value index (CLV, scale -10 to +10)

Sample statistics:
- Means: $\bar{X}_1 = 8.000$, $\bar{X}_2 = 3.000$
- Variances: $s_1^2 = 23.091$, $s_2^2 = 21.091$
- Total sample variance: $\text{Total Var} = s_1^2 + s_2^2 = 23.091 + 21.091 = 44.182$
- Correlation: $r_{12} = 0.746$ (strong positive association)

Income accounts for $52.26\%$ of total variance and CLV accounts for $47.74\%$.

---

## 3. Step 1: Centering the Cloud
Before finding principal components, each variable is centered:
$$x_{c1} = X_1 - 8.000, \quad x_{c2} = X_2 - 3.000$$
Centering translates the data cloud so its center of gravity (centroid) is exactly at the origin $(0,0)$. Crucially, the shape of the cloud, pairwise distances, variances, and covariance ($S_{12} = 16.455$) remain identical.

---

## 4. Step 2 & 3: Rotating the Axis and Projecting Points
Suppose we want to summarize this 2D scatter using a single new variable. 
We draw a new candidate coordinate axis $X^*_1$ through the origin at an angle $\theta$ relative to the horizontal $X_1$ axis.

Every centered customer observation $(x_1, x_2)$ is orthogonally projected onto this new axis. By elementary trigonometry (orthonormal basis rotation), the coordinate of customer observation $(x_1, x_2)$ along the new axis $X^*_1$ is:
$$x^*_1 = \cos(\theta) x_1 + \sin(\theta) x_2$$

The coefficients $(\cos\theta, \sin\theta)$ define a directional vector of **unit length**:
$$\cos^2(\theta) + \sin^2(\theta) = 1$$

---

## 5. Step 4: Variance as a Function of Rotation Angle $\theta$
What happens to the variance of the projected scores as we rotate the candidate axis from $\theta = 0^\circ$ to $90^\circ$?

| Angle $\theta$ | Direction Vector $(\cos\theta, \sin\theta)$ | Variance of $x^*_1$ | Proportion of Total Variance |
|:---:|:---:|:---:|:---:|
| $0^\circ$ | $(1.000, 0.000)$ | $23.091$ | $52.26\%$ (Original $X_1$ axis) |
| $10^\circ$ | $(0.985, 0.174)$ | $28.658$ | $64.86\%$ |
| $20^\circ$ | $(0.940, 0.342)$ | $33.434$ | $75.67\%$ |
| $30^\circ$ | $(0.866, 0.500)$ | $36.841$ | $83.38\%$ |
| $40^\circ$ | $(0.766, 0.643)$ | $38.469$ | $87.07\%$ |
| **$43.26^\circ$** | **$(0.728, 0.685)$** | **$38.576$** | **$87.31\%$ (MAXIMUM!)** |
| $50^\circ$ | $(0.643, 0.766)$ | $38.122$ | $86.28\%$ |
| $60^\circ$ | $(0.500, 0.866)$ | $35.841$ | $81.12\%$ |
| $70^\circ$ | $(0.342, 0.940)$ | $31.902$ | $72.21\%$ |
| $80^\circ$ | $(0.174, 0.985)$ | $26.779$ | $60.61\%$ |
| $90^\circ$ | $(0.000, 1.000)$ | $21.091$ | $47.74\%$ (Original $X_2$ axis) |

As $\theta$ increases, the variance rises smoothly, peaks at **$\theta = 43.26^\circ$**, and then decreases.

---

## 6. The First Principal Component ($PC_1$) and Its Orthogonal Complement ($PC_2$)
At $\theta = 43.26^\circ$, the new axis points directly along the longest elongation of the data cloud. This is the **First Principal Component ($PC_1$)**:
$$PC_1 = 0.728238 x_1 + 0.685324 x_2$$
- Variance of $PC_1 = \lambda_1 = 38.576$ ($87.31\%$ of total variance).

The second principal axis ($PC_2$) must be chosen **perpendicular (orthogonal)** to $PC_1$ ($\theta + 90^\circ$):
$$PC_2 = -0.685324 x_1 + 0.728238 x_2$$
- Variance of $PC_2 = \lambda_2 = 5.606$ ($12.69\%$ of total variance).
- Dot product of weight vectors: $(0.728238)(-0.685324) + (0.685324)(0.728238) = 0$ (strictly orthogonal).

### Total Variance Preservation
The total variance of the principal components equals the total variance of the original variables:
$$\text{Var}(PC_1) + \text{Var}(PC_2) = 38.576 + 5.606 = 44.182 = s_1^2 + s_2^2$$
Moreover, the covariance between $PC_1$ and $PC_2$ is identically **zero** ($\text{Cov}(PC_1, PC_2) = 0$).

---

## 7. Dimensionality Reduction vs. Coordinate Rotation
- **Keeping all $p$ components**: If we keep both $PC_1$ and $PC_2$, this is merely a **rigid coordinate rotation**. No information is lost, and all distances between observations are preserved $100\%$.
- **Retaining $k < p$ components**: Dimensionality reduction occurs when we discard $PC_2$ and keep only $PC_1$. We replace 2 variables with 1 composite score per customer.
  - Retained variance: $87.31\%$.
  - Discarded variance: $12.69\%$.
  - The total squared reconstruction error across all observations is exactly $(n - 1) \lambda_2 = 11 \times 5.606 = 61.666$.`
    },
    questions: [
      // 4 EASY
      {
        id: 'q_l3_1',
        segment_id: 'ch2-pca-geometry',
        order_index: 1,
        difficulty: 'easy',
        question: 'What is the primary geometric objective when selecting the direction of the first principal component axis ($PC_1$)?',
        options: [
          { id: 'a', text: 'To minimize the sum of absolute deviations from the median' },
          { id: 'b', text: 'To maximize the variance of the projected observation scores along that axis' },
          { id: 'c', text: 'To force all variable loadings to equal +1.0' },
          { id: 'd', text: 'To ensure the new axis passes through the highest single data point' },
          { id: 'e', text: 'To minimize the distance between the origin and the centroid' },
          { id: 'f', text: 'To make the sum of scores equal to zero for each individual customer' }
        ],
        correct_option: 'b',
        explanation: 'Geometrically, $PC_1$ is chosen to point along the direction of maximum dispersion in the data cloud, thereby maximizing the variance of the projected scores.'
      },
      {
        id: 'q_l3_2',
        segment_id: 'ch2-pca-geometry',
        order_index: 2,
        difficulty: 'easy',
        question: 'What mathematical constraint is imposed on the directional coefficients $(\\cos\\theta, \\sin\\theta)$ when projecting data onto a principal axis in 2D space?',
        options: [
          { id: 'a', text: 'Their sum must equal zero: $\\cos\\theta + \\sin\\theta = 0$' },
          { id: 'b', text: 'They must have unit length (norm of 1): $\\cos^2(\\theta) + \\sin^2(\\theta) = 1$' },
          { id: 'c', text: 'Each coefficient must be strictly greater than 1.0' },
          { id: 'd', text: 'Their product must equal the correlation coefficient: $\\cos\\theta \\sin\\theta = r$' },
          { id: 'e', text: 'The angle $\\theta$ must always be fixed at $45^\\circ$' },
          { id: 'f', text: 'They must equal the sample standard deviations of the original variables' }
        ],
        correct_option: 'b',
        explanation: 'To prevent artificial scaling of variance (since multiplying weights by 10 would multiply variance by 100), the weight vector must have unit Euclidean length: $\\sum w_j^2 = 1$. In 2D, $\\cos^2\\theta + \\sin^2\\theta = 1$.'
      },
      {
        id: 'q_l3_3',
        segment_id: 'ch2-pca-geometry',
        order_index: 3,
        difficulty: 'easy',
        question: 'If two original variables have sample variances of 23.091 and 21.091, what is the sum of the variances of their two principal components ($PC_1$ and $PC_2$)?',
        options: [
          { id: 'a', text: '$1.000$' },
          { id: 'b', text: '$2.000$' },
          { id: 'c', text: 'Exactly $23.091 + 21.091 = 44.182$' },
          { id: 'd', text: '$23.091 \\times 21.091 = 487.01$' },
          { id: 'e', text: 'Zero, because principal components are centered' },
          { id: 'f', text: 'Half of the original variance: $22.091$' }
        ],
        correct_option: 'c',
        explanation: 'PCA performs an orthogonal rotation of the coordinate system, which preserves the total variance of the dataset. Therefore, $\\text{Var}(PC_1) + \\text{Var}(PC_2) = \\text{Var}(X_1) + \\text{Var}(X_2) = 44.182$.'
      },
      {
        id: 'q_l3_4',
        segment_id: 'ch2-pca-geometry',
        order_index: 4,
        difficulty: 'easy',
        question: 'What is the covariance between the scores of the first principal component ($PC_1$) and the second principal component ($PC_2$)?',
        options: [
          { id: 'a', text: 'Identically zero ($\\text{Cov}(PC_1, PC_2) = 0$)' },
          { id: 'b', text: 'Equal to the original sample covariance $S_{12}$' },
          { id: 'c', text: 'Equal to $+1.0$' },
          { id: 'd', text: 'Equal to the ratio of their eigenvalues $\\lambda_1 / \\lambda_2$' },
          { id: 'e', text: 'Negative one ($-1.0$)' },
          { id: 'f', text: 'Equal to the Pearson correlation $r_{12}$' }
        ],
        correct_option: 'a',
        explanation: 'By mathematical construction, all principal components are chosen to be mutually orthogonal, which ensures that the sample covariance (and correlation) between any pair of distinct component scores is identically zero.'
      },

      // 4 INTERMEDIATE
      {
        id: 'q_l3_5',
        segment_id: 'ch2-pca-geometry',
        order_index: 5,
        difficulty: 'intermediate',
        question: 'At what point does dimensionality reduction actually occur in Principal Components Analysis?',
        options: [
          { id: 'a', text: 'The moment data are centered by subtracting variable sample means' },
          { id: 'b', text: 'When all $p$ principal components are computed and retained' },
          { id: 'c', text: 'When only a subset $k < p$ of the leading principal components is retained, discarding the remaining $p - k$ components' },
          { id: 'd', text: 'When the covariance matrix is converted into a correlation matrix' },
          { id: 'e', text: 'When the sample size $n$ is reduced by eliminating outliers' },
          { id: 'f', text: 'When the eigenvalues are normalized to sum to 100' }
        ],
        correct_option: 'c',
        explanation: 'Computing all $p$ principal axes is merely a change of coordinates (a rigid rotation of axes) with zero loss of dimensionality. Dimensionality reduction occurs only when $k < p$ components are retained and the remaining directions of variation are discarded.'
      },
      {
        id: 'q_l3_6',
        segment_id: 'ch2-pca-geometry',
        order_index: 6,
        difficulty: 'intermediate',
        question: 'In the 12-customer Income ($X_1$) and CLV ($X_2$) dataset, Customer A has centered coordinates $(x_1 = 8, x_2 = 5)$. If $PC_1 = 0.728238 x_1 + 0.685324 x_2$, what is Customer A’s score on $PC_1$?',
        options: [
          { id: 'a', text: '$t_{A1} = 13.000$' },
          { id: 'b', text: '$t_{A1} = 0.728238 \\times 8 + 0.685324 \\times 5 = 9.253$' },
          { id: 'c', text: '$t_{A1} = 0.728238 \\times 8 - 0.685324 \\times 5 = 2.400$' },
          { id: 'd', text: '$t_{A1} = \\sqrt{8^2 + 5^2} = 9.434$' },
          { id: 'e', text: '$t_{A1} = 38.576$' },
          { id: 'f', text: '$t_{A1} = 1.490$' }
        ],
        correct_option: 'b',
        explanation: 'The score is the linear projection of the centered observation onto the component weights: $t_{A1} = 0.728238(8) + 0.685324(5) = 5.8259 + 3.4266 = 9.2525 \\approx 9.253$.'
      },
      {
        id: 'q_l3_7',
        segment_id: 'ch2-pca-geometry',
        order_index: 7,
        difficulty: 'intermediate',
        question: 'Why does reversing the direction of a principal component axis (multiplying its weight vector by $-1$) have zero impact on the variance explained or the relative distances between observations?',
        options: [
          { id: 'a', text: 'Because PCA eigenvalues are always negative' },
          { id: 'b', text: 'Because an axis and its negative describe the exact same geometric line in space, and squaring negative scores yields identical sample variance and squared Euclidean distances' },
          { id: 'c', text: 'Because SAS and Python automatically convert all negative scores to zero' },
          { id: 'd', text: 'Because component weights must always be positive numbers' },
          { id: 'e', text: 'Because reversing an axis changes correlation into covariance' },
          { id: 'f', text: 'Because observations are automatically reflected across the 45-degree diagonal' }
        ],
        correct_option: 'b',
        explanation: 'A principal component is a line in space. Whether we define the positive direction pointing up-right or down-left does not change the line or the variance along it ($(-t)^2 = t^2$). Distances between points $(t_i - t_k)^2 = (-t_i - (-t_k))^2$ remain identical.'
      },
      {
        id: 'q_l3_8',
        segment_id: 'ch2-pca-geometry',
        order_index: 8,
        difficulty: 'intermediate',
        question: 'In a dataset with $p$ variables and $n$ observations, what is the maximum number of non-zero eigenvalues (non-zero variance components) that can exist from centered data?',
        options: [
          { id: 'a', text: 'Always exactly $p$' },
          { id: 'b', text: 'Always exactly $n$' },
          { id: 'c', text: 'At most $\\min(p, n - 1)$' },
          { id: 'd', text: 'At most $p \\times (n - 1)$' },
          { id: 'e', text: 'Always equal to the number of nonmetric scales' },
          { id: 'f', text: 'At most $(p - 1) / 2$' }
        ],
        correct_option: 'c',
        explanation: 'Centering $n$ observations imposes 1 linear restriction (the sum of deviations is zero), giving the centered data matrix a maximum rank of $n - 1$. Since the data dimension is $p$, the rank of $X_c$ (and covariance matrix $S$) cannot exceed $\\min(p, n - 1)$.'
      },

      // 4 HARD
      {
        id: 'q_l3_9',
        segment_id: 'ch2-pca-geometry',
        order_index: 9,
        difficulty: 'hard',
        question: 'In the 2-variable Income and CLV example, the candidate axis variance at $\\theta = 10^\\circ$ is $28.658$ ($64.86\\%$), while at $\\theta = 43.26^\\circ$ it reaches the global maximum of $38.576$ ($87.31\\%$). If an analyst instead rotates the axis to $\\theta = 133.26^\\circ$ ($43.26^\\circ + 90^\\circ$), what will the variance of the projected scores be?',
        options: [
          { id: 'a', text: '$0.000$' },
          { id: 'b', text: 'Exactly $5.606$, corresponding to the variance of $PC_2$' },
          { id: 'c', text: 'Negative $38.576$' },
          { id: 'd', text: '$44.182$' },
          { id: 'e', text: '$21.091$' },
          { id: 'f', text: '$19.288$' }
        ],
        correct_option: 'b',
        explanation: 'The axis at $\\theta + 90^\\circ$ is the orthogonal complement ($PC_2$). Because total variance ($44.182$) is conserved across orthogonal directions, the variance at $43.26^\\circ + 90^\\circ$ must be exactly $44.182 - 38.576 = 5.606$.'
      },
      {
        id: 'q_l3_10',
        segment_id: 'ch2-pca-geometry',
        order_index: 10,
        difficulty: 'hard',
        question: 'Suppose we discard $PC_2$ (variance $\\lambda_2 = 5.606$) and retain only $PC_1$ to represent the 12 customers. What is the total sum of squared Euclidean reconstruction errors across all 12 observations when projecting from 1D back to the original 2D space?',
        options: [
          { id: 'a', text: '$5.606$' },
          { id: 'b', text: '$(n - 1) \\times \\lambda_2 = 11 \\times 5.606005 = 61.666$' },
          { id: 'c', text: '$12 \\times 38.576 = 462.91$' },
          { id: 'd', text: '$44.182 / 12 = 3.682$' },
          { id: 'e', text: 'Zero, because orthogonal projections are error-free' },
          { id: 'f', text: '$254.000 - 232.000 = 22.000$' }
        ],
        correct_option: 'b',
        explanation: 'The reconstruction error for each observation is its squared coordinate on the discarded axis ($PC_2$). The sum of squared scores on $PC_2$ is the Sum of Squares of $PC_2$, which equals $(n - 1) \\times \\text{Var}(PC_2) = 11 \\times 5.606005 = 61.666$. This matches slide 17 and 24 of Chapter 2.'
      },
      {
        id: 'q_l3_11',
        segment_id: 'ch2-pca-geometry',
        order_index: 11,
        difficulty: 'hard',
        question: 'Two customers, Customer D and Customer E, have very similar scores on $PC_1$ ($t_{D1} = 1.499$, $t_{E1} = 4.883$). However, in the original 2D space, their centered coordinates are $D = (3, -1)$ and $E = (2, 5)$. What geometric phenomenon explains how two points can appear relatively close on $PC_1$ despite being far apart in the original space?',
        options: [
          { id: 'a', text: 'Customer D is an outlier that was automatically winsorized by PCA' },
          { id: 'b', text: 'They differ substantially along the discarded $PC_2$ axis ($t_{D2} = -2.784$ vs $t_{E2} = +2.271$), which represents variation lost in dimensionality reduction' },
          { id: 'c', text: 'PCA inverted their income scales because CLV is bounded between -10 and 10' },
          { id: 'd', text: 'The correlation between Income and CLV was negative for those two customers' },
          { id: 'e', text: 'Their Mahalanobis distance is zero' },
          { id: 'f', text: 'The cosine of their angle in individual space equals 1.0' }
        ],
        correct_option: 'b',
        explanation: 'When reducing from 2D to 1D, points are projected onto the $PC_1$ line. Points that have similar projections onto $PC_1$ may differ substantially along the discarded perpendicular axis ($PC_2$). Customer D has $t_{D2} = -2.784$ while E has $t_{E2} = +2.271$, a difference of over 5 units lost upon reduction.'
      },
      {
        id: 'q_l3_12',
        segment_id: 'ch2-pca-geometry',
        order_index: 12,
        difficulty: 'hard',
        question: 'In the geometric derivation of PCA using orthonormal basis vectors $e_1 = (1, 0)^T$ and $e_2 = (0, 1)^T$, the basis is rotated counter-clockwise by angle $\\theta$ to produce new unit vectors $e^*_1$ and $e^*_2$. What is the transformation matrix $T$ that converts original point coordinates $(a_1, a_2)^T$ into coordinates $(a^*_1, a^*_2)^T$ on the new basis?',
        options: [
          { id: 'a', text: '$\\begin{bmatrix} a^*_1 \\\\ a^*_2 \\end{bmatrix} = \\begin{bmatrix} \\cos\\theta & \\sin\\theta \\\\ -\\sin\\theta & \\cos\\theta \\end{bmatrix} \\begin{bmatrix} a_1 \\\\ a_2 \\end{bmatrix}$' },
          { id: 'b', text: '$\\begin{bmatrix} a^*_1 \\\\ a^*_2 \\end{bmatrix} = \\begin{bmatrix} 1 & \\theta \\\\ -\\theta & 1 \\end{bmatrix} \\begin{bmatrix} a_1 \\\\ a_2 \\end{bmatrix}$' },
          { id: 'c', text: '$\\begin{bmatrix} a^*_1 \\\\ a^*_2 \\end{bmatrix} = \\begin{bmatrix} \\tan\\theta & 0 \\\\ 0 & \\cot\\theta \\end{bmatrix} \\begin{bmatrix} a_1 \\\\ a_2 \\end{bmatrix}$' },
          { id: 'd', text: '$\\begin{bmatrix} a^*_1 \\\\ a^*_2 \\end{bmatrix} = \\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix} \\begin{bmatrix} a_1 \\\\ a_2 \\end{bmatrix}$' },
          { id: 'e', text: '$\\begin{bmatrix} a^*_1 \\\\ a^*_2 \\end{bmatrix} = \\begin{bmatrix} \\sin\\theta & \\cos\\theta \\\\ \\cos\\theta & \\sin\\theta \\end{bmatrix} \\begin{bmatrix} a_1 \\\\ a_2 \\end{bmatrix}$' },
          { id: 'f', text: '$\\begin{bmatrix} a^*_1 \\\\ a^*_2 \\end{bmatrix} = \\begin{bmatrix} s_1 & 0 \\\\ 0 & s_2 \\end{bmatrix} \\begin{bmatrix} a_1 \\\\ a_2 \\end{bmatrix}$' }
        ],
        correct_option: 'a',
        explanation: 'As derived in Appendix slides 65-68 of Chapter 2: projecting onto rotated basis vector $e^*_1$ yields $a^*_1 = a_1 \\cos\\theta + a_2 \\sin\\theta$, and onto orthogonal vector $e^*_2$ yields $a^*_2 = -a_1 \\sin\\theta + a_2 \\cos\\theta$. In matrix form, this is the standard rotation transformation matrix.'
      }
    ],
    flashcards: [
      {
        id: 'fc_l3_1',
        segment_id: 'ch2-pca-geometry',
        order_index: 1,
        category: 'Foundations',
        front: 'What is the primary objective of **Principal Components Analysis (PCA)**?',
        back: 'To construct **uncorrelated linear combinations** of $p$ original variables that maximize retained variance, allowing a small number of components $k < p$ to summarize the data cloud.'
      },
      {
        id: 'fc_l3_2',
        segment_id: 'ch2-pca-geometry',
        order_index: 2,
        category: 'Projections',
        front: 'What is the formula for projecting a 2D centered observation $(x_1, x_2)$ onto a candidate axis at angle $\\theta$?',
        back: '$$x^*_1 = \\cos(\\theta) x_1 + \\sin(\\theta) x_2$$\nwhere coefficients satisfy the unit-length constraint $\\cos^2(\\theta) + \\sin^2(\\theta) = 1$.'
      },
      {
        id: 'fc_l3_3',
        segment_id: 'ch2-pca-geometry',
        order_index: 3,
        category: 'Optimization',
        front: 'In the 12-customer Income vs CLV example, at what angle $\\theta$ does projected variance reach its maximum?',
        back: 'At **$\\theta = 43.26^\\circ$**, where variance reaches **$38.576$**, explaining **$87.31\\%$** of total variance.'
      },
      {
        id: 'fc_l3_4',
        segment_id: 'ch2-pca-geometry',
        order_index: 4,
        category: 'Properties',
        front: 'How is the second principal component ($PC_2$) defined geometrically relative to $PC_1$?',
        back: 'It is perpendicular (**orthogonal**, at angle $\\theta + 90^\\circ$) to $PC_1$, capturing the maximum remaining variance ($12.69\\%$ in the 2D example).'
      },
      {
        id: 'fc_l3_5',
        segment_id: 'ch2-pca-geometry',
        order_index: 5,
        category: 'Conservation',
        front: 'What is the **Total Variance Preservation** property of PCA?',
        back: 'The sum of the variances of all $p$ principal components identically equals the sum of the variances of the original variables:\n$$\\sum_{i=1}^p \\text{Var}(PC_i) = \\sum_{j=1}^p s_j^2$$'
      },
      {
        id: 'fc_l3_6',
        segment_id: 'ch2-pca-geometry',
        order_index: 6,
        category: 'Distinction',
        front: 'What is the difference between keeping all $p$ principal components vs keeping $k < p$ components?',
        back: '- Keeping all $p$ axes is merely a **rigid coordinate rotation** (zero loss of information or dimensionality).\n- Keeping $k < p$ axes achieves **dimensionality reduction**, exchanging discarded variance for lower complexity.'
      },
      {
        id: 'fc_l3_7',
        segment_id: 'ch2-pca-geometry',
        order_index: 7,
        category: 'Errors',
        front: 'What is the total squared reconstruction error when discarding the remaining components?',
        back: 'For centered data, the total squared reconstruction error across all $n$ observations is **$(n - 1) \\times$ the sum of discarded eigenvalues**:\n$$\\text{Total Error} = (n - 1) \\sum_{i=k+1}^p \\lambda_i$$'
      },
      {
        id: 'fc_l3_8',
        segment_id: 'ch2-pca-geometry',
        order_index: 8,
        category: 'Indeterminacy',
        front: 'Why are a principal component and its negative mathematically equivalent?',
        back: 'Multiplying weights by $-1$ flips the axis direction, but the axis remains the exact same line in space. Variances, Euclidean distances, and reconstruction errors are completely unchanged.'
      }
    ]
  },

  // LEVEL 4
  {
    segment: {
      id: 'ch2-pca-analytical',
      discipline_id: 'data-analysis',
      title: 'PCA: Analytical Formulation & Scale Sensitivity',
      subtitle: 'Lagrange multiplier optimization, characteristic equations, and covariance vs correlation decomposition.',
      order_index: 4,
      summary_markdown: `# PCA: Analytical Formulation, Eigenvalues & Scale Sensitivity

## 1. Matrix Formulation of PCA
In matrix terms, a centered data matrix $X_c$ ($n \times p$) is transformed into a component score matrix $T_k$ ($n \times k$):
$$T_k = X_c W_k$$
where:
- Rows of $T_k$ remain individual observations.
- Columns of $T_k$ are the scores for principal components $PC_1, PC_2, \dots, PC_k$.
- $W_k = [w_1, w_2, \dots, w_k]$ is the $p \times k$ matrix of orthonormal weight vectors (eigenvectors).

For each component $i$, the score of an observation vector $x$ is a linear combination:
$$PC_i = w_i' x = w_{i1} x_1 + w_{i2} x_2 + \dots + w_{ip} x_p$$

---

## 2. The Analytical Optimization Problem
How do we find the weight vector $w_1$ that maximizes the projected variance without guessing angles?

The sample variance of $PC_1 = w_1' x$ is:
$$\text{Var}(PC_1) = \text{Var}(w_1' x) = w_1' S w_1$$
where $S$ is the $p \times p$ sample covariance matrix:
$$S = \frac{X_c' X_c}{n - 1}$$

If we do not constrain $w_1$, we could make the variance arbitrarily large by multiplying $w_1$ by a huge number. To fix the scale, we impose the unit-length constraint:
$$w_1' w_1 = 1$$

### Solution via Lagrange Multipliers
We formulate the Lagrangian function:
$$\mathcal{L}(w_1, \lambda_1) = w_1' S w_1 - \lambda_1 (w_1' w_1 - 1)$$
where $\lambda_1$ is the Lagrange multiplier.

Taking the partial derivative with respect to $w_1$ and setting it to zero:
$$\frac{\partial \mathcal{L}}{\partial w_1} = 2 S w_1 - 2 \lambda_1 w_1 = 0 \implies S w_1 = \lambda_1 w_1 \implies (S - \lambda_1 I) w_1 = 0$$

Pre-multiplying by $w_1'$:
$$w_1' S w_1 = \lambda_1 w_1' w_1 = \lambda_1 (1) = \lambda_1$$
> **Fundamental Theorem of PCA**: The maximum variance of the principal component is identically equal to the largest eigenvalue $\lambda_1$, and the optimal weight vector $w_1$ is the corresponding normalized eigenvector!

---

## 3. Finding Eigenvalues: The Characteristic Equation
For non-trivial (non-zero) weight vectors $w_1$ to exist, the matrix $(S - \lambda I)$ must be singular (non-invertible). Therefore, its determinant must equal zero:
$$\det(S - \lambda I) = 0$$
This is the **characteristic equation** of $S$. For a $p \times p$ matrix, this produces a $p$-th degree polynomial in $\lambda$, yielding $p$ real, non-negative roots:
$$\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_p \ge 0$$

### Numerical Walkthrough: The 12-Customer Example
Given sample covariance matrix:
$$S = \begin{bmatrix} 23.090909 & 16.454545 \\ 16.454545 & 21.090909 \end{bmatrix}$$

Set $\det(S - \lambda I) = 0$:
$$\det \begin{bmatrix} 23.090909 - \lambda & 16.454545 \\ 16.454545 & 21.090909 - \lambda \end{bmatrix} = 0$$
$$(23.090909 - \lambda)(21.090909 - \lambda) - (16.454545)^2 = 0$$
$$\lambda^2 - 44.181818 \lambda + (487.008264 - 270.752066) = 0$$
$$\lambda^2 - 44.181818 \lambda + 216.256198 = 0$$

Solving using the quadratic formula:
$$\lambda_1 = 38.575813, \quad \lambda_2 = 5.606005$$

Notice that:
- $\lambda_1 + \lambda_2 = 38.575813 + 5.606005 = 44.181818 = \text{tr}(S)$ (Trace of $S$, sum of original variances).
- Substituting $\lambda_1$ back into $(S - \lambda_1 I)w_1 = 0$ and normalizing yields the leading eigenvector:
  $$w_1 = (0.728238, 0.685324)'$$
- Substituting $\lambda_2$ yields the second eigenvector:
  $$w_2 = (-0.685324, 0.728238)'$$

---

## 4. Why Measurement Units Matter: Covariance PCA vs. Correlation PCA

One of the most consequential decisions in multivariate analysis is selecting which matrix to decompose:

### 1. Covariance PCA (Decomposing $S$)
- Input variables are centered: $x_{c,ij} = x_{ij} - \bar{x}_j$.
- Decomposes the sample covariance matrix $S = X_c' X_c / (n - 1)$.
- Total variance is the sum of raw variances: $\sum s_j^2$.
- **Extreme Scale Sensitivity**:
  Suppose Income was originally measured in thousands of Euros ($k€$), with variance $s^2 = 23.091$. 
  If the analyst changes the unit to Euros ($€$) by multiplying values by $1,000$, the new variance becomes:
  $$s_{\text{new}}^2 = 1,000^2 \times 23.091 = 23,090,909.091$$
  The CLV variance remains $21.091$. In Covariance PCA, Income now accounts for $99.9999\%$ of the variance! The principal component will align almost $100\%$ with Income simply because of an arbitrary choice of units.

### 2. Correlation PCA (Decomposing $R$)
- Input variables are standardized: $z_{ij} = (x_{ij} - \bar{x}_j) / s_j$.
- Decomposes the sample correlation matrix $R = Z' Z / (n - 1)$.
- Every standardized variable has variance $1.0$.
- Total variance is always exactly equal to the number of variables:
  $$\text{Total Variance} = \text{tr}(R) = p$$
- **Scale Invariance**: Multiplying a variable by a constant does not alter its standardized values $z_{ij}$. The correlation matrix $R$ and the resulting Correlation PCA remain completely unchanged.

### Practical Decision Rule
> [!IMPORTANT]
> **When to use Correlation PCA**: Whenever variables are measured on different scales (e.g., income in €, age in years, satisfaction on a 1-5 scale) or arbitrary units. This is the standard in social sciences, marketing, and business analytics.
>
> **When to use Covariance PCA**: ONLY when all variables are measured in identical physical units (e.g., bone lengths in millimeters, pixel brightness on a 0-255 scale) AND differences in variable variances reflect genuine substantive importance that should not be eliminated.`
    },
    questions: [
      // 4 EASY
      {
        id: 'q_l4_1',
        segment_id: 'ch2-pca-analytical',
        order_index: 1,
        difficulty: 'easy',
        question: 'What is the mathematical relationship between the largest eigenvalue $\\lambda_1$ of the covariance matrix $S$ and the first principal component ($PC_1$)?',
        options: [
          { id: 'a', text: '$\\lambda_1$ is the sample mean of $PC_1$' },
          { id: 'b', text: '$\\lambda_1$ is the sample variance of $PC_1$' },
          { id: 'c', text: '$\\lambda_1$ is the sample size divided by degrees of freedom' },
          { id: 'd', text: '$\\lambda_1$ is the correlation between $X_1$ and $X_2$' },
          { id: 'e', text: '$\\lambda_1$ is the inverse of the determinant of $S$' },
          { id: 'f', text: '$\\lambda_1$ is the standard deviation of the error term' }
        ],
        correct_option: 'b',
        explanation: 'In the analytical derivation of PCA via Lagrange multipliers, the projected variance $w_1\' S w_1$ simplifies directly to the Lagrange multiplier $\\lambda_1$, proving that the eigenvalue is the variance of that component.'
      },
      {
        id: 'q_l4_2',
        segment_id: 'ch2-pca-analytical',
        order_index: 2,
        difficulty: 'easy',
        question: 'What is the characteristic equation used to solve for the eigenvalues $\\lambda$ of a square matrix $A$?',
        options: [
          { id: 'a', text: '$\\text{tr}(A - \\lambda I) = 0$' },
          { id: 'b', text: '$\\det(A - \\lambda I) = 0$' },
          { id: 'c', text: '$A^{-1} - \\lambda I = 0$' },
          { id: 'd', text: '$\\sum_{i=1}^p (A_{ii} - \\lambda) = 1$' },
          { id: 'e', text: '$\\lambda = A w$' },
          { id: 'f', text: '$\\det(A) + \\det(\\lambda I) = 0$' }
        ],
        correct_option: 'b',
        explanation: 'For non-trivial eigenvectors to exist in $(A - \\lambda I)w = 0$, the matrix $(A - \\lambda I)$ must be non-invertible, which requires its determinant to equal zero: $\\det(A - \\lambda I) = 0$.'
      },
      {
        id: 'q_l4_3',
        segment_id: 'ch2-pca-analytical',
        order_index: 3,
        difficulty: 'easy',
        question: 'When performing PCA on the sample correlation matrix $R$ for $p$ variables, what is the sum of all $p$ eigenvalues (the total variance)?',
        options: [
          { id: 'a', text: 'Always 1.0' },
          { id: 'b', text: 'Always equal to $p$, because each standardized variable has variance 1.0' },
          { id: 'c', text: 'Equal to $n - 1$' },
          { id: 'd', text: 'Equal to the determinant of $R$' },
          { id: 'e', text: 'Equal to the sum of raw sample variances' },
          { id: 'f', text: 'Always 100.0' }
        ],
        correct_option: 'b',
        explanation: 'In correlation PCA, all diagonal entries of $R$ are 1.0. Because the sum of eigenvalues equals the trace of the matrix, $\\sum_{i=1}^p \\lambda_i = \\text{tr}(R) = p \\times 1.0 = p$.'
      },
      {
        id: 'q_l4_4',
        segment_id: 'ch2-pca-analytical',
        order_index: 4,
        difficulty: 'easy',
        question: 'Why is Correlation PCA generally preferred over Covariance PCA when analyzing survey questionnaires containing mixed scales (e.g., annual income in thousands vs satisfaction rated 1 to 5)?',
        options: [
          { id: 'a', text: 'Because Covariance PCA cannot handle sample sizes greater than 100' },
          { id: 'b', text: 'Because Correlation PCA standardizes variables, preventing variables with arbitrarily large variances from dominating the analysis' },
          { id: 'c', text: 'Because Correlation PCA produces correlated components' },
          { id: 'd', text: 'Because Covariance PCA always produces negative eigenvalues' },
          { id: 'e', text: 'Because Correlation PCA does not require computing eigenvectors' },
          { id: 'f', text: 'Because Likert scales cannot be centered' }
        ],
        correct_option: 'b',
        explanation: 'If variables are measured on different scales, the variable with the largest unit scale (e.g. income in thousands) will have a huge variance and dominate the leading eigenvectors in Covariance PCA. Correlation PCA standardizes all inputs to unit variance.'
      },

      // 4 INTERMEDIATE
      {
        id: 'q_l4_5',
        segment_id: 'ch2-pca-analytical',
        order_index: 5,
        difficulty: 'intermediate',
        question: 'If a variable measured in kilograms is converted to grams (multiplied by 1,000), what happens to its variance, and how does this affect Covariance PCA vs Correlation PCA?',
        options: [
          { id: 'a', text: 'Variance increases by 1,000; Covariance PCA is unaffected, but Correlation PCA changes completely' },
          { id: 'b', text: 'Variance increases by $1,000^2 = 1,000,000$; Covariance PCA is drastically altered and dominated by this variable, whereas Correlation PCA remains completely unchanged' },
          { id: 'c', text: 'Variance is unchanged because measurement units are arbitrary' },
          { id: 'd', text: 'Both Covariance PCA and Correlation PCA scale their eigenvalues by exactly 1,000' },
          { id: 'e', text: 'The correlation between this variable and all other variables becomes zero' },
          { id: 'f', text: 'The trace of the correlation matrix increases by 1,000' }
        ],
        correct_option: 'b',
        explanation: 'Multiplying a variable by constant $c$ multiplies its variance by $c^2 = 1,000,000$. Covariance PCA decomposes $S$, which changes radically. But Correlation PCA standardizes inputs ($z = (cx - c\\bar{x})/(cs) = (x - \\bar{x})/s$), making it completely scale-invariant.'
      },
      {
        id: 'q_l4_6',
        segment_id: 'ch2-pca-analytical',
        order_index: 6,
        difficulty: 'intermediate',
        question: 'In the Lagrange multiplier formulation of PCA: $\\max w_1\' S w_1$ subject to $w_1\' w_1 = 1$, why is the constraint $w_1\' w_1 = 1$ strictly necessary?',
        options: [
          { id: 'a', text: 'To ensure the components have positive means' },
          { id: 'b', text: 'To fix the scale of the weights; without it, multiplying every weight by a constant $c$ would multiply the objective function by $c^2$, yielding no finite maximum' },
          { id: 'c', text: 'To guarantee that the eigenvalues are all equal to 1.0' },
          { id: 'd', text: 'To ensure that the covariance matrix $S$ is non-singular' },
          { id: 'e', text: 'To eliminate negative correlations between variables' },
          { id: 'f', text: 'To convert metric variables into nonmetric categories' }
        ],
        correct_option: 'b',
        explanation: 'Variance of a linear combination is homogeneous of degree 2: $\\text{Var}((c w_1)\' x) = c^2 (w_1\' S w_1)$. Without fixing the length of $w_1$ to unit norm ($w_1\' w_1 = 1$), one could achieve an infinite variance simply by making weights arbitrarily large.'
      },
      {
        id: 'q_l4_7',
        segment_id: 'ch2-pca-analytical',
        order_index: 7,
        difficulty: 'intermediate',
        question: 'A $3 \\times 3$ covariance matrix $S$ has eigenvalues $\\lambda_1 = 6.0$, $\\lambda_2 = 2.5$, and $\\lambda_3 = 1.5$. What percentage of total variance is explained by the first two principal components ($PC_1$ and $PC_2$)?',
        options: [
          { id: 'a', text: '$60.0\\%$' },
          { id: 'b', text: '$85.0\\%$' },
          { id: 'c', text: '$75.0\\%$' },
          { id: 'd', text: '$90.0\\%$' },
          { id: 'e', text: '$25.0\\%$' },
          { id: 'f', text: '$15.0\\%$' }
        ],
        correct_option: 'b',
        explanation: 'Total variance is $\\sum \\lambda_i = 6.0 + 2.5 + 1.5 = 10.0$. The variance explained by $PC_1 + PC_2$ is $6.0 + 2.5 = 8.5$. The proportion is $8.5 / 10.0 = 85.0\\%$.'
      },
      {
        id: 'q_l4_8',
        segment_id: 'ch2-pca-analytical',
        order_index: 8,
        difficulty: 'intermediate',
        question: 'Under what specific conditions is it scientifically justifiable to perform Covariance PCA instead of Correlation PCA?',
        options: [
          { id: 'a', text: 'When variables are measured on nominal and ordinal scales' },
          { id: 'b', text: 'When all variables are measured in identical, comparable physical units and differences in their variances reflect genuine substantive importance' },
          { id: 'c', text: 'When the researcher wants all variables to have an equal influence on the components' },
          { id: 'd', text: 'When the sample size $n$ is smaller than 20' },
          { id: 'e', text: 'When all pairwise correlations are zero' },
          { id: 'f', text: 'When the goal is to perform factor rotation' }
        ],
        correct_option: 'b',
        explanation: 'Covariance PCA is appropriate only when variables share the same unit of measurement (e.g. financial dollar figures, morphometric millimeters) and variance magnitude carries true domain significance that should not be normalized away.'
      },

      // 4 HARD
      {
        id: 'q_l4_9',
        segment_id: 'ch2-pca-analytical',
        order_index: 9,
        difficulty: 'hard',
        question: 'Given the $2 \\times 2$ covariance matrix $S = \\begin{bmatrix} 23.090909 & 16.454545 \\\\ 16.454545 & 21.090909 \\end{bmatrix}$, solve the quadratic characteristic equation $\\lambda^2 - 44.181818 \\lambda + 216.256198 = 0$. What is the exact value of the smaller eigenvalue $\\lambda_2$?',
        options: [
          { id: 'a', text: '$\\lambda_2 = 16.455$' },
          { id: 'b', text: '$\\lambda_2 = 5.606$' },
          { id: 'c', text: '$\\lambda_2 = 38.576$' },
          { id: 'd', text: '$\\lambda_2 = 2.000$' },
          { id: 'e', text: '$\\lambda_2 = 21.091$' },
          { id: 'f', text: '$\\lambda_2 = 0.746$' }
        ],
        correct_option: 'b',
        explanation: 'Using the quadratic formula for $\\lambda^2 - b\\lambda + c = 0$: $\\lambda = \\frac{44.181818 \\pm \\sqrt{44.181818^2 - 4(216.256198)}}{2} = \\frac{44.181818 \\pm \\sqrt{1952.033 - 865.025}}{2} = \\frac{44.181818 \\pm \\sqrt{1087.008}}{2} = \\frac{44.181818 \\pm 32.9698}{2}$. This gives $\\lambda_1 = 38.5758$ and $\\lambda_2 = 5.6060$.'
      },
      {
        id: 'q_l4_10',
        segment_id: 'ch2-pca-analytical',
        order_index: 10,
        difficulty: 'hard',
        question: 'Suppose two standardized variables have correlation $r = 0.60$. What are the two eigenvalues resulting from Correlation PCA on this pair?',
        options: [
          { id: 'a', text: '$\\lambda_1 = 1.00$ and $\\lambda_2 = 1.00$' },
          { id: 'b', text: '$\\lambda_1 = 1.60$ and $\\lambda_2 = 0.40$' },
          { id: 'c', text: '$\\lambda_1 = 1.20$ and $\\lambda_2 = 0.80$' },
          { id: 'd', text: '$\\lambda_1 = 0.60$ and $\\lambda_2 = 0.40$' },
          { id: 'e', text: '$\\lambda_1 = 2.00$ and $\\lambda_2 = 0.00$' },
          { id: 'f', text: '$\\lambda_1 = 1.36$ and $\\lambda_2 = 0.64$' }
        ],
        correct_option: 'b',
        explanation: 'For a $2 \\times 2$ correlation matrix $\\begin{bmatrix} 1 & r \\\\ r & 1 \\end{bmatrix}$, the characteristic equation is $(1 - \\lambda)^2 - r^2 = 0 \\implies 1 - \\lambda = \\pm r \\implies \\lambda = 1 \\pm r$. For $r = 0.60$, $\\lambda_1 = 1 + 0.60 = 1.60$ and $\\lambda_2 = 1 - 0.60 = 0.40$. Their sum is $1.60 + 0.40 = 2.0 = p$.'
      },
      {
        id: 'q_l4_11',
        segment_id: 'ch2-pca-analytical',
        order_index: 11,
        difficulty: 'hard',
        question: 'If the leading eigenvalue $\\lambda_1 = 38.575813$ and its eigenvector is $w_1 = (0.728238, 0.685324)^T$, what must the second eigenvector $w_2$ be to satisfy both unit length and orthogonality?',
        options: [
          { id: 'a', text: '$w_2 = (0.728238, 0.685324)\'$' },
          { id: 'b', text: '$w_2 = (-0.685324, 0.728238)\'$ or $(0.685324, -0.728238)\'$' },
          { id: 'c', text: '$w_2 = (1.000000, 0.000000)\'$' },
          { id: 'd', text: '$w_2 = (0.500000, 0.500000)\'$' },
          { id: 'e', text: '$w_2 = (-0.728238, -0.685324)\'$' },
          { id: 'f', text: '$w_2 = (0.000000, 1.000000)\'$' }
        ],
        correct_option: 'b',
        explanation: 'In 2D, a vector orthogonal to $(a, b)$ is $(-b, a)$ or $(b, -a)$. Here, $(0.728238)(-0.685324) + (0.685324)(0.728238) = 0$, and $(-0.685324)^2 + 0.728238^2 = 1.0$. Both signs are valid eigenvectors corresponding to the two orientations of the principal axis.'
      },
      {
        id: 'q_l4_12',
        segment_id: 'ch2-pca-analytical',
        order_index: 12,
        difficulty: 'hard',
        question: 'Why does solving for eigenvectors $(S - \\lambda I)w = 0$ never require matrix inversion of $S$ or $(S - \\lambda I)$?',
        options: [
          { id: 'a', text: 'Because eigenvalues are always equal to the diagonal elements of $S$' },
          { id: 'b', text: 'Because $(S - \\lambda I)$ is deliberately singular (determinant = 0), so its inverse does not exist; eigenvectors are found in its non-trivial null space' },
          { id: 'c', text: 'Because matrix inversion is only possible for diagonal matrices' },
          { id: 'd', text: 'Because PCA only uses the trace, never the determinant' },
          { id: 'e', text: 'Because eigenvectors are calculated using numerical differentiation' },
          { id: 'f', text: 'Because $S$ is always an identity matrix' }
        ],
        correct_option: 'b',
        explanation: 'By choosing $\\lambda$ such that $\\det(S - \\lambda I) = 0$, the matrix $(S - \\lambda I)$ is non-invertible (singular). Eigenvectors are the non-zero solutions spanning the null space of $(S - \\lambda I)$. As slide 32 notes: "No matrix inversion is required."'
      }
    ],
    flashcards: [
      {
        id: 'fc_l4_1',
        segment_id: 'ch2-pca-analytical',
        order_index: 1,
        category: 'Formulas',
        front: 'What is the matrix formulation of the PCA component scores?',
        back: '$$T_k = X_c W_k$$\nwhere $X_c$ is the $n \\times p$ centered data matrix and $W_k$ is the $p \\times k$ matrix of eigenvectors.'
      },
      {
        id: 'fc_l4_2',
        segment_id: 'ch2-pca-analytical',
        order_index: 2,
        category: 'Lagrange',
        front: 'What optimization problem is solved to find the first principal component weights $w_1$?',
        back: '$$\\max_{w_1} w_1\' S w_1 \\quad \\text{subject to } w_1\' w_1 = 1$$\nSolved via Lagrangian $\\mathcal{L} = w_1\' S w_1 - \\lambda_1 (w_1\' w_1 - 1)$, yielding $(S - \\lambda_1 I)w_1 = 0$.'
      },
      {
        id: 'fc_l4_3',
        segment_id: 'ch2-pca-analytical',
        order_index: 3,
        category: 'Eigenvalues',
        front: 'What is the characteristic equation used to solve for eigenvalues in PCA?',
        back: '$$\\det(S - \\lambda I) = 0$$\nSetting the determinant to zero guarantees a non-trivial (non-zero) eigenvector solution.'
      },
      {
        id: 'fc_l4_4',
        segment_id: 'ch2-pca-analytical',
        order_index: 4,
        category: 'Trace',
        front: 'What is the relationship between the eigenvalues and the trace of covariance matrix $S$?',
        back: '$$\\sum_{i=1}^p \\lambda_i = \\text{tr}(S) = \\sum_{j=1}^p s_j^2$$\nThe sum of eigenvalues equals the sum of original sample variances (total variance).'
      },
      {
        id: 'fc_l4_5',
        segment_id: 'ch2-pca-analytical',
        order_index: 5,
        category: 'Trace',
        front: 'What is the sum of eigenvalues in **Correlation PCA** ($R$)?',
        back: '$$\\sum_{i=1}^p \\lambda_i = \\text{tr}(R) = p$$\nBecause all $p$ standardized input variables have variance $1.0$, total variance is always $p$.'
      },
      {
        id: 'fc_l4_6',
        segment_id: 'ch2-pca-analytical',
        order_index: 6,
        category: 'Sensitivity',
        front: 'Why is Covariance PCA highly sensitive to measurement units?',
        back: 'Multiplying a variable by $k$ multiplies its variance by $k^2$.\nA variable measured in smaller units (e.g. grams vs kg) will artificially dominate the leading eigenvectors.'
      },
      {
        id: 'fc_l4_7',
        segment_id: 'ch2-pca-analytical',
        order_index: 7,
        category: 'Decision',
        front: 'When should an analyst use **Correlation PCA** vs **Covariance PCA**?',
        back: '- Use **Correlation PCA**: When variables have different measurement units or arbitrary scales (standard practice).\n- Use **Covariance PCA**: ONLY when all variables share identical physical units and raw variances reflect true substantive importance.'
      },
      {
        id: 'fc_l4_8',
        segment_id: 'ch2-pca-analytical',
        order_index: 8,
        category: 'Eigenvalues',
        front: 'For two standardized variables with correlation $r$, what are the eigenvalues of Correlation PCA?',
        back: '$$\\lambda_1 = 1 + r, \\quad \\lambda_2 = 1 - r$$\nTheir sum is $(1 + r) + (1 - r) = 2 = p$. If $r = 0.60$, $\\lambda_1 = 1.60$ and $\\lambda_2 = 0.40$.'
      }
    ]
  }
];
