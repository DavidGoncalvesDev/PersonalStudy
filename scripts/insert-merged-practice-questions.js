import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://eurqqiebokwcrrhfbihg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cnFxaWVib2t3Y3JyaGZiaWhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNDA0MzIsImV4cCI6MjEwNzcxNjQzMn0.UrhclnTabK3YEJZzroYeDmO4D4pij59IWCXyWZ9ruxs';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const practiceQuestions = [
  {
    id: "pq_s4_1",
    segment_id: "ch2-pca-analytical",
    order_index: 101,
    difficulty: "easy",
    pool_type: "practice",
    section_reference: "Section 1: Covariance PCA vs. Correlation PCA",
    section_anchor: "the-scale-sensitivity-of-covariance-pca",
    question: "Why does multiplying a single variable by 100 increase its variance by 10,000 in raw Covariance PCA?",
    options: [
      { id: "a", text: "Because variance is the sum of squared deviations from the mean: Var(100X) = 100^2 Var(X) = 10,000 Var(X)" },
      { id: "b", text: "Because the sample size is multiplied by 100 during matrix multiplication" },
      { id: "c", text: "Because eigenvalues represent square roots of sample variances" },
      { id: "d", text: "Because standard deviation is unaffected by linear scale transformations" },
      { id: "e", text: "Because the correlation matrix automatically absorbs scalar constants" },
      { id: "f", text: "Because degrees of freedom increase from n - 1 to 100(n - 1)" }
    ],
    correct_option: "a",
    explanation: "By the properties of variance, Var(c X) = c^2 Var(X). When c = 100, c^2 = 10,000, inflating the sample variance ten-thousand-fold."
  },
  {
    id: "pq_s4_2",
    segment_id: "ch2-pca-analytical",
    order_index: 102,
    difficulty: "easy",
    pool_type: "practice",
    section_reference: "Section 1: Covariance PCA vs. Correlation PCA",
    section_anchor: "when-to-use-correlation-pca",
    question: "What is the primary advantage of standardizing variables to z-scores before performing PCA?",
    options: [
      { id: "a", text: "It converts non-linear relationships into perfectly linear associations" },
      { id: "b", text: "It assigns every variable an identical unit variance of 1.0, eliminating scale distortion" },
      { id: "c", text: "It reduces the number of extracted principal components by half" },
      { id: "d", text: "It forces all off-diagonal correlation coefficients to equal zero" },
      { id: "e", text: "It ensures that all observations follow a normal bell curve distribution" },
      { id: "f", text: "It guarantees that the first principal component explains 100% of the variance" }
    ],
    correct_option: "b",
    explanation: "Standardization subtracts the mean and divides by the standard deviation, setting Var(Z_j) = 1.0. This prevents variables with arbitrarily large physical units from dominating component extraction."
  },
  {
    id: "pq_s4_3",
    segment_id: "ch2-pca-analytical",
    order_index: 103,
    difficulty: "easy",
    pool_type: "practice",
    section_reference: "Section 1: Covariance PCA vs. Correlation PCA",
    section_anchor: "when-to-use-correlation-pca",
    question: "In Correlation PCA across 6 standardized variables, what is the total system variance to be explained?",
    options: [
      { id: "a", text: "1.0, because total variance is normalized to unity" },
      { id: "b", text: "6.0, because each of the 6 standardized variables contributes exactly 1.0 unit of variance" },
      { id: "c", text: "36.0, calculated as the square of the number of variables" },
      { id: "d", text: "0.0, because standardized variables are centered at zero" },
      { id: "e", text: "12.0, representing twice the number of dimensions" },
      { id: "f", text: "5.0, reflecting degrees of freedom (p - 1)" }
    ],
    correct_option: "b",
    explanation: "In Correlation PCA, each standardized variable has variance 1.0. The trace of the 6x6 correlation matrix is tr(R) = 6 * 1.0 = 6.0, which equals total system variance."
  },
  {
    id: "pq_s4_4",
    segment_id: "ch2-pca-analytical",
    order_index: 104,
    difficulty: "intermediate",
    pool_type: "practice",
    section_reference: "Section 2: Four Key Quantities (Eigenvalues, Weights, Scores & Loadings)",
    section_anchor: "four-key-quantities",
    question: "If a variable has a factor loading of l = 0.80 on PC1, what proportion of that variable's variance is explained by PC1?",
    options: [
      { id: "a", text: "80%, directly matching the correlation coefficient" },
      { id: "b", text: "64% (0.80^2 = 0.64), calculated by squaring the factor loading" },
      { id: "c", text: "89.4% (sqrt(0.80) = 0.894), taking the square root of the loading" },
      { id: "d", text: "20% (1.0 - 0.80 = 0.20), representing residual variance" },
      { id: "e", text: "40% (0.80 / 2 = 0.40), dividing by the bivariate dimensions" },
      { id: "f", text: "100%, because loadings above 0.70 indicate total saturation" }
    ],
    correct_option: "b",
    explanation: "In PCA, the proportion of a standardized variable's variance accounted for by a component equals its squared factor loading: l_ji^2 = 0.80^2 = 0.64 (64%)."
  },
  {
    id: "pq_s4_5",
    segment_id: "ch2-pca-analytical",
    order_index: 105,
    difficulty: "intermediate",
    pool_type: "practice",
    section_reference: "Section 2: Four Key Quantities (Eigenvalues, Weights, Scores & Loadings)",
    section_anchor: "four-key-quantities",
    question: "In Correlation PCA, if eigenvector weight w_11 = 0.50 and leading eigenvalue lambda_1 = 3.24, what is the factor loading l_11?",
    options: [
      { id: "a", text: "l_11 = 0.50 * 3.24 = 1.62" },
      { id: "b", text: "l_11 = 0.50 * sqrt(3.24) = 0.50 * 1.80 = 0.90" },
      { id: "c", text: "l_11 = sqrt(0.50 * 3.24) = sqrt(1.62) = 1.27" },
      { id: "d", text: "l_11 = 3.24 / 0.50 = 6.48" },
      { id: "e", text: "l_11 = 0.50^2 * 3.24 = 0.25 * 3.24 = 0.81" },
      { id: "f", text: "l_11 = 0.50 + 1.80 = 2.30" }
    ],
    correct_option: "b",
    explanation: "In Correlation PCA, the loading formula simplifies to l_ji = w_ij * sqrt(lambda_i). Here, l_11 = 0.50 * sqrt(3.24) = 0.50 * 1.80 = 0.90."
  },
  {
    id: "pq_s4_6",
    segment_id: "ch2-pca-analytical",
    order_index: 106,
    difficulty: "easy",
    pool_type: "practice",
    section_reference: "Section 3: Component Retention Criteria",
    section_anchor: "component-retention-criteria",
    question: "According to the Kaiser criterion, why are components with eigenvalues below 1.0 discarded in Correlation PCA?",
    options: [
      { id: "a", text: "Because eigenvalues below 1.0 indicate negative variance in the data cloud" },
      { id: "b", text: "Because a component with lambda < 1.0 captures less variance than a single standardized variable" },
      { id: "c", text: "Because eigenvalues below 1.0 cause division by zero in software algorithms" },
      { id: "d", text: "Because components with lambda < 1.0 are always mathematically correlated with PC1" },
      { id: "e", text: "Because statistical packages automatically delete the last extracted component" },
      { id: "f", text: "Because lambda < 1.0 indicates that all original variables have zero correlation" }
    ],
    correct_option: "b",
    explanation: "Each standardized variable contributes 1.0 unit of variance. A component with lambda < 1.0 explains less information than one original variable, defeating the purpose of data reduction."
  },
  {
    id: "pq_s4_7",
    segment_id: "ch2-pca-analytical",
    order_index: 107,
    difficulty: "intermediate",
    pool_type: "practice",
    section_reference: "Section 3: Component Retention Criteria",
    section_anchor: "component-retention-criteria",
    question: "If the first two eigenvalues in Correlation PCA on 5 variables are lambda_1 = 2.80 and lambda_2 = 1.20, what is the cumulative explained variance of these two components?",
    options: [
      { id: "a", text: "(2.80 + 1.20) / 5.00 = 4.00 / 5.00 = 80.0%" },
      { id: "b", text: "2.80 / 5.00 = 56.0%" },
      { id: "c", text: "1.20 / 5.00 = 24.0%" },
      { id: "d", text: "(2.80 + 1.20) / 10.0 = 40.0%" },
      { id: "e", text: "sqrt(2.80^2 + 1.20^2) / 5.00 = 60.8%" },
      { id: "f", text: "(2.80 * 1.20) / 5.00 = 67.2%" }
    ],
    correct_option: "a",
    explanation: "Total variance across 5 standardized variables is 5.00. The first two components explain 2.80 + 1.20 = 4.00 units. The cumulative variance percentage is 4.00 / 5.00 = 80.0%."
  },
  {
    id: "pq_s4_8",
    segment_id: "ch2-pca-analytical",
    order_index: 108,
    difficulty: "hard",
    pool_type: "practice",
    section_reference: "Section 1: Covariance PCA vs. Correlation PCA",
    section_anchor: "real-course-case-25-us-cities-food-prices",
    question: "In the 25 US cities food prices study (Exercise 1), which city was identified as an extreme price outlier across food commodities?",
    options: [
      { id: "a", text: "Honolulu, Hawaii" },
      { id: "b", text: "Anchorage, Alaska" },
      { id: "c", text: "New York City, New York" },
      { id: "d", text: "San Francisco, California" },
      { id: "e", text: "Miami, Florida" },
      { id: "f", text: "Chicago, Illinois" }
    ],
    correct_option: "b",
    explanation: "As documented in Chapter 2 Exercise 1, Anchorage, Alaska exhibited exceptionally high food prices due to remote supply chain logistics, appearing as an isolated outlier on the first principal component."
  },
  {
    id: "pq_s4_9",
    segment_id: "ch2-pca-analytical",
    order_index: 109,
    difficulty: "intermediate",
    pool_type: "practice",
    section_reference: "Section 4: Portuguese Regional Assessment",
    section_anchor: "portuguese-regional-assessment",
    question: "In the Portuguese 7-regions study from Chapter 2, what substantive dimension was captured by the second principal component (PC2)?",
    options: [
      { id: "a", text: "Public Healthcare and Hospital Density" },
      { id: "b", text: "Economic Wealth & Urban Concentration (GDP and Population Density)" },
      { id: "c", text: "Agricultural Land Use and Forestry Coverage" },
      { id: "d", text: "Tourism Hospitality and Seasonal Travel Influx" },
      { id: "e", text: "Maritime Shipping and Fishery Cargo Logistics" },
      { id: "f", text: "Public Library Literacy and Academic Schooling" }
    ],
    correct_option: "b",
    explanation: "In Slides 48-51, PC2 has high positive loadings on GDP per capita (0.750) and Population Density (0.670), reflecting urban economic concentration."
  },
  {
    id: "pq_s4_10",
    segment_id: "ch2-pca-analytical",
    order_index: 110,
    difficulty: "easy",
    pool_type: "practice",
    section_reference: "Section 5: Practical Software Execution",
    section_anchor: "sas-implementation",
    question: "In SAS PROC PRINCOMP, what is the default matrix analyzed when no options are specified in the proc statement?",
    options: [
      { id: "a", text: "The sample covariance matrix S" },
      { id: "b", text: "The sample correlation matrix R" },
      { id: "c", text: "The inverted distance matrix D^-1" },
      { id: "d", text: "The cross-products sum of squares matrix X'X" },
      { id: "e", text: "The Mahalanobis distance dispersion matrix" },
      { id: "f", text: "The polychoric contingency table matrix" }
    ],
    correct_option: "b",
    explanation: "By default, SAS PROC PRINCOMP standardizes variables and analyzes the Pearson correlation matrix R. To analyze covariances, the user must specify the COV option."
  },
  {
    id: "pq_s4_11",
    segment_id: "ch2-pca-analytical",
    order_index: 111,
    difficulty: "intermediate",
    pool_type: "practice",
    section_reference: "Section 5: Practical Software Execution",
    section_anchor: "python-implementation",
    question: "Why does Python scikit-learn require StandardScaler prior to calling PCA if the user wants Correlation PCA?",
    options: [
      { id: "a", text: "Because scikit-learn PCA fits raw centered data (Covariance SVD) by default without feature standardization" },
      { id: "b", text: "Because Python cannot perform matrix inversion on positive numbers" },
      { id: "c", text: "Because scikit-learn automatically assumes all inputs are categorical factors" },
      { id: "d", text: "Because scikit-learn will throw an indentation error on raw unscaled arrays" },
      { id: "e", text: "Because scikit-learn PCA requires all variables to have sample means equal to 1.0" },
      { id: "f", text: "Because scikit-learn PCA only accepts integer data types" }
    ],
    correct_option: "a",
    explanation: "In scikit-learn, PCA centers the data but does not divide by standard deviations. To replicate Correlation PCA, StandardScaler must explicitly be applied first."
  },
  {
    id: "pq_s4_12",
    segment_id: "ch2-pca-analytical",
    order_index: 112,
    difficulty: "hard",
    pool_type: "practice",
    section_reference: "Section 2: Four Key Quantities (Eigenvalues, Weights, Scores & Loadings)",
    section_anchor: "four-key-quantities",
    question: "How is the component score t_hi for observation h calculated from the eigenvector weight vector w_i and centered observations x_h?",
    options: [
      { id: "a", text: "t_hi = w_i^T x_h = sum(w_ij * x_hj), the dot product of weights and centered variable values" },
      { id: "b", text: "t_hi = w_i / x_h, dividing the weight vector by observation magnitudes" },
      { id: "c", text: "t_hi = lambda_i * x_h, multiplying observation coordinates by the eigenvalue" },
      { id: "d", text: "t_hi = sqrt(w_i^T w_i), taking the Euclidean norm of the weight vector" },
      { id: "e", text: "t_hi = x_h^T S x_h, evaluating the quadratic dispersion form" },
      { id: "f", text: "t_hi = sum(w_ij) / n, taking the arithmetic average of eigenvector weights" }
    ],
    correct_option: "a",
    explanation: "The component score t_hi is the linear projection of observation h onto principal axis i: t_hi = w_i^T x_h = sum_{j=1}^p w_{ij} x_{hj}."
  },
  {
    id: "pq_s4_13",
    segment_id: "ch2-pca-analytical",
    order_index: 113,
    difficulty: "intermediate",
    pool_type: "practice",
    section_reference: "Section 2: Four Key Quantities (Eigenvalues, Weights, Scores & Loadings)",
    section_anchor: "four-key-quantities",
    question: "What mathematical property is satisfied by any pair of distinct principal components PC_i and PC_k (where i != k)?",
    options: [
      { id: "a", text: "They have a correlation of 1.0" },
      { id: "b", text: "They are strictly uncorrelated: Cov(PC_i, PC_k) = 0 and Corr(PC_i, PC_k) = 0" },
      { id: "c", text: "Their eigenvalues must be identical" },
      { id: "d", text: "Their factor loadings must sum to zero across all variables" },
      { id: "e", text: "They share identical eigenvector weights" },
      { id: "f", text: "They must be rotated using Varimax to eliminate multicollinearity" }
    ],
    correct_option: "b",
    explanation: "By the spectral decomposition of symmetric matrices, eigenvectors associated with distinct eigenvalues are orthogonal, ensuring Cov(PC_i, PC_k) = 0 for i != k."
  },
  {
    id: "pq_s4_14",
    segment_id: "ch2-pca-analytical",
    order_index: 114,
    difficulty: "hard",
    pool_type: "practice",
    section_reference: "Section 1: Covariance PCA vs. Correlation PCA",
    section_anchor: "when-to-use-correlation-pca",
    question: "Can an analyst mathematically convert the eigenvalues of a Covariance PCA into the eigenvalues of a Correlation PCA using a simple constant multiplier?",
    options: [
      { id: "a", text: "Yes, by multiplying all covariance eigenvalues by the ratio n / (n - 1)" },
      { id: "b", text: "No; eigenvalues of S and R cannot be deduced from one another because standardization rescales each variable by a unique standard deviation s_j" },
      { id: "c", text: "Yes, by dividing covariance eigenvalues by the determinant det(S)" },
      { id: "d", text: "Yes, by taking the square root of each covariance eigenvalue" },
      { id: "e", text: "Yes, by subtracting the trace tr(S) from each root" },
      { id: "f", text: "Yes, by setting all eigenvalues equal to the average variance" }
    ],
    correct_option: "b",
    explanation: "Because variables have differing standard deviations, dividing by s_j scales each coordinate axis non-uniformly. Consequently, the eigenvalues and eigenvectors of R cannot be directly deduced from S."
  },
  {
    id: "pq_s4_15",
    segment_id: "ch2-pca-analytical",
    order_index: 115,
    difficulty: "easy",
    pool_type: "practice",
    section_reference: "Section 2: Four Key Quantities (Eigenvalues, Weights, Scores & Loadings)",
    section_anchor: "four-key-quantities",
    question: "What constraint is enforced on every eigenvector weight vector w_i in Principal Components Analysis?",
    options: [
      { id: "a", text: "The weights must sum to zero: sum(w_ij) = 0" },
      { id: "b", text: "The weights must have unit Euclidean length: sum(w_ij^2) = w_i^T w_i = 1.0" },
      { id: "c", text: "The weights must all be strictly positive numbers" },
      { id: "d", text: "The weights must equal the reciprocal of sample size 1/n" },
      { id: "e", text: "The weights must sum to the eigenvalue lambda_i" },
      { id: "f", text: "The weights must equal the sample correlation coefficients" }
    ],
    correct_option: "b",
    explanation: "To prevent variance from being trivially inflated to infinity by multiplying weights by a large scalar, PCA imposes the normalization constraint w_i^T w_i = sum(w_ij^2) = 1.0."
  },
  {
    id: "pq_s4_16",
    segment_id: "ch2-pca-analytical",
    order_index: 116,
    difficulty: "intermediate",
    pool_type: "practice",
    section_reference: "Section 3: Component Retention Criteria",
    section_anchor: "component-retention-criteria",
    question: "If an analyst applies the cumulative variance criterion with a threshold of 75%, and cumulative variance for components 1, 2, 3 is 48%, 68%, 81%, how many components are retained?",
    options: [
      { id: "a", text: "1 component, because 48% is close to half the variance" },
      { id: "b", text: "2 components, because 68% is within 10% of the threshold" },
      { id: "c", text: "3 components, because 3 components are required to reach and exceed the 75% threshold (81% >= 75%)" },
      { id: "d", text: "5 components, retaining all original variables to avoid any data loss" },
      { id: "e", text: "0 components, because no individual component reached 75%" },
      { id: "f", text: "4 components, adding one safety buffer component" }
    ],
    correct_option: "c",
    explanation: "Under the cumulative variance rule, the analyst retains the smallest number of components needed to reach the target threshold. Here, 2 components reach only 68%, so 3 components (81%) must be retained."
  },
  {
    id: "pq_s4_17",
    segment_id: "ch2-pca-analytical",
    order_index: 117,
    difficulty: "hard",
    pool_type: "practice",
    section_reference: "Section 1: Covariance PCA vs. Correlation PCA",
    section_anchor: "when-to-use-correlation-pca",
    question: "When is Covariance PCA scientifically and statistically preferred over Correlation PCA?",
    options: [
      { id: "a", text: "When variables are measured on completely different scales with arbitrary units" },
      { id: "b", text: "When all variables are measured in identical physical units (e.g. Euros) and differences in variance reflect true economic importance" },
      { id: "c", text: "When the researcher wants all variables to have an equal influence on PC1 regardless of their original dispersion" },
      { id: "d", text: "When the sample correlation matrix has negative eigenvalues" },
      { id: "e", text: "When variables follow qualitative nominal rating scales" },
      { id: "f", text: "When performing exploratory factor analysis with oblique Promax rotation" }
    ],
    correct_option: "b",
    explanation: "Covariance PCA is appropriate when variables share the same unit of measurement (e.g. financial returns in Euros across branches) and relative variance differences carry genuine substantive meaning that should not be normalized away."
  },
  {
    id: "pq_s4_18",
    segment_id: "ch2-pca-analytical",
    order_index: 118,
    difficulty: "intermediate",
    pool_type: "practice",
    section_reference: "Section 4: Portuguese Regional Assessment",
    section_anchor: "portuguese-regional-assessment",
    question: "In the 2D biplot of the Portuguese regional study, where does the Lisbon administrative region locate?",
    options: [
      { id: "a", text: "In the lower-left quadrant, exhibiting low public infrastructure and low economic wealth" },
      { id: "b", text: "In the upper-right quadrant, exhibiting high scores on both Public Infrastructure (PC1) and Economic Wealth & Density (PC2)" },
      { id: "c", text: "Directly at the coordinate origin (0, 0), matching the average of interior rural districts" },
      { id: "d", text: "On the negative PC1 axis, indicating zero doctors and zero public libraries" },
      { id: "e", text: "Far out on the negative PC2 axis, indicating low gross domestic product" },
      { id: "f", text: "Overlapping identically with the Azores and Madeira autonomous island regions" }
    ],
    correct_option: "b",
    explanation: "As shown on slide 51, Lisbon has large positive component scores on both PC1 (high medical and cultural infrastructure) and PC2 (high GDP per capita and urban density), placing it prominently in the upper-right quadrant."
  }
];

async function insertPracticeQuestions() {
  console.log('Inserting 18 practice questions for ch2-pca-analytical...');
  const { data, error } = await supabase.from('study_questions').insert(practiceQuestions);
  if (error) {
    console.error('Error inserting practice questions:', error.message);
  } else {
    console.log('Successfully inserted 18 practice questions for ch2-pca-analytical!');
  }
}

insertPracticeQuestions();
