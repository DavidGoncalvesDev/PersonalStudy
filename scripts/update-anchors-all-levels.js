import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://eurqqiebokwcrrhfbihg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cnFxaWVib2t3Y3JyaGZiaWhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNDA0MzIsImV4cCI6MjEwNzcxNjQzMn0.UrhclnTabK3YEJZzroYeDmO4D4pij59IWCXyWZ9ruxs';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const mappings = {
  // Level 1: ch1-scales-methods
  'ch1-scales-methods': {
    questions: [
      { order: 1, id: 'q_l1_1', ref: 'Section 2.4: Ratio Scale', anchor: 'ratio-scale' },
      { order: 2, id: 'q_l1_2', ref: 'Section 2.1: Nominal Scale', anchor: 'nominal-scale' },
      { order: 3, id: 'q_l1_3', ref: 'Section 3: Classification of Methods', anchor: 'classification-of-multivariate-methods' },
      { order: 4, id: 'q_l1_4', ref: 'Section 2.2: Ordinal Scale', anchor: 'ordinal-scale' },
      { order: 5, id: 'q_l1_5', ref: 'Section 2.3: Interval Scale', anchor: 'interval-scale' },
      { order: 6, id: 'q_l1_6', ref: 'Section 3.1: Dependence Methods', anchor: 'dependence-methods' },
      { order: 7, id: 'q_l1_7', ref: 'Section 2.3: Interval Scale', anchor: 'interval-scale' },
      { order: 8, id: 'q_l1_8', ref: 'Section 3.2: Interdependence Methods', anchor: 'interdependence-methods' },
      { order: 9, id: 'q_l1_9', ref: 'Section 2.3: Interval Scale', anchor: 'interval-scale' },
      { order: 10, id: 'q_l1_10', ref: 'Section 2.1: Nominal Scale', anchor: 'nominal-scale' },
      { order: 11, id: 'q_l1_11', ref: 'Section 3.2: Interdependence Methods', anchor: 'interdependence-methods' },
      { order: 12, id: 'q_l1_12', ref: 'Section 2.4: Ratio Scale', anchor: 'ratio-scale' }
    ],
    flashcards: [
      { order: 1, id: 'fc_l1_1', ref: 'Section 2.1: Nominal Scale', anchor: 'nominal-scale' },
      { order: 2, id: 'fc_l1_2', ref: 'Section 2.3: Interval & Ratio Scales', anchor: 'interval-scale' },
      { order: 3, id: 'fc_l1_3', ref: 'Section 2.3: Interval Scale', anchor: 'interval-scale' },
      { order: 4, id: 'fc_l1_4', ref: 'Section 2.1: Nominal Scale', anchor: 'nominal-scale' },
      { order: 5, id: 'fc_l1_5', ref: 'Section 3.1: Dependence Methods', anchor: 'dependence-methods' },
      { order: 6, id: 'fc_l1_6', ref: 'Section 3.2: Interdependence Methods', anchor: 'interdependence-methods' },
      { order: 7, id: 'fc_l1_7', ref: 'Section 3.1: Dependence Methods', anchor: 'dependence-methods' },
      { order: 8, id: 'fc_l1_8', ref: 'Section 3.2: Interdependence Methods', anchor: 'interdependence-methods' }
    ]
  },

  // Level 2: ch1-manipulation-distances
  'ch1-manipulation-distances': {
    questions: [
      { order: 1, id: 'q_l2_1', ref: 'Section 2: Variance, Covariance & Correlation', anchor: '2-variance-covariance-correlation' },
      { order: 2, id: 'q_l2_2', ref: 'Section 3.2: Observation Space', anchor: 'observation-space-n-dimensional-representation' },
      { order: 3, id: 'q_l2_3', ref: 'Section 1: Data Matrices & Basic Operations', anchor: '1-data-matrices-basic-multivariate-operations' },
      { order: 4, id: 'q_l2_4', ref: 'Section 4: Distance Metrics', anchor: '4-distance-metrics-in-multivariate-space' },
      { order: 5, id: 'q_l2_5', ref: 'Section 4.1: Euclidean Distance', anchor: 'euclidean-distance' },
      { order: 6, id: 'q_l2_6', ref: 'Section 4.3: Mahalanobis Distance', anchor: 'mahalanobis-distance-covariance-adjusted' },
      { order: 7, id: 'q_l2_7', ref: 'Section 2: Variance, Covariance & Correlation', anchor: '2-variance-covariance-correlation' },
      { order: 8, id: 'q_l2_8', ref: 'Section 3.2: Observation Space', anchor: 'observation-space-n-dimensional-representation' },
      { order: 9, id: 'q_l2_9', ref: 'Section 4.2: Statistical Distance', anchor: 'statistical-distance-variance-standardized' },
      { order: 10, id: 'q_l2_10', ref: 'Section 4.3: Mahalanobis Distance', anchor: 'mahalanobis-distance-covariance-adjusted' },
      { order: 11, id: 'q_l2_11', ref: 'Section 3.2: Observation Space', anchor: 'observation-space-n-dimensional-representation' },
      { order: 12, id: 'q_l2_12', ref: 'Section 3.1: Variable Space', anchor: 'variable-space-p-dimensional-representation' }
    ],
    flashcards: [
      { order: 1, id: 'fc_l2_1', ref: 'Section 1: Data Matrices & Basic Operations', anchor: '1-data-matrices-basic-multivariate-operations' },
      { order: 2, id: 'fc_l2_2', ref: 'Section 2: Variance, Covariance & Correlation', anchor: '2-variance-covariance-correlation' },
      { order: 3, id: 'fc_l2_3', ref: 'Section 2: Variance, Covariance & Correlation', anchor: '2-variance-covariance-correlation' },
      { order: 4, id: 'fc_l2_4', ref: 'Section 3.2: Observation Space', anchor: 'observation-space-n-dimensional-representation' },
      { order: 5, id: 'fc_l2_5', ref: 'Section 4: Distance Metrics', anchor: '4-distance-metrics-in-multivariate-space' },
      { order: 6, id: 'fc_l2_6', ref: 'Section 4.2: Statistical Distance', anchor: 'statistical-distance-variance-standardized' },
      { order: 7, id: 'fc_l2_7', ref: 'Section 4.3: Mahalanobis Distance', anchor: 'mahalanobis-distance-covariance-adjusted' },
      { order: 8, id: 'fc_l2_8', ref: 'Section 4.3: Mahalanobis Distance', anchor: 'mahalanobis-distance-covariance-adjusted' }
    ]
  },

  // Level 3: ch2-pca-geometry
  'ch2-pca-geometry': {
    questions: [
      { order: 1, id: 'q_l3_1', ref: 'Section 4: Rotating Coordinate Axis & Projecting', anchor: '4-rotating-the-coordinate-axis-projecting-observations' },
      { order: 2, id: 'q_l3_2', ref: 'Section 4: Rotating Coordinate Axis & Projecting', anchor: '4-rotating-the-coordinate-axis-projecting-observations' },
      { order: 3, id: 'q_l3_3', ref: 'Section 7: Conservation of Total Variance', anchor: '7-conservation-of-total-variance' },
      { order: 4, id: 'q_l3_4', ref: 'Section 6: PC1 and Its Orthogonal Complement', anchor: '6-the-first-principal-component-and-its-orthogonal-complement' },
      { order: 5, id: 'q_l3_5', ref: 'Section 1: Motivation & Dimensionality Challenge', anchor: '1-motivation-the-dimensionality-challenge' },
      { order: 6, id: 'q_l3_6', ref: 'Section 4: Rotating Coordinate Axis & Projecting', anchor: '4-rotating-the-coordinate-axis-projecting-observations' },
      { order: 7, id: 'q_l3_7', ref: 'Section 6: PC1 and Its Orthogonal Complement', anchor: '6-the-first-principal-component-and-its-orthogonal-complement' },
      { order: 8, id: 'q_l3_8', ref: 'Section 7: Conservation of Total Variance', anchor: '7-conservation-of-total-variance' },
      { order: 9, id: 'q_l3_9', ref: 'Section 5: Variance as a Function of Rotation Angle', anchor: '5-variance-as-a-function-of-rotation-angle' },
      { order: 10, id: 'q_l3_10', ref: 'Section 7: Conservation of Total Variance', anchor: '7-conservation-of-total-variance' },
      { order: 11, id: 'q_l3_11', ref: 'Section 6: PC1 and Its Orthogonal Complement', anchor: '6-the-first-principal-component-and-its-orthogonal-complement' },
      { order: 12, id: 'q_l3_12', ref: 'Section 3: Centering the Data Cloud', anchor: '3-centering-the-data-cloud' }
    ],
    flashcards: [
      { order: 1, id: 'fc_l3_1', ref: 'Section 1: Motivation & Dimensionality Challenge', anchor: '1-motivation-the-dimensionality-challenge' },
      { order: 2, id: 'fc_l3_2', ref: 'Section 4: Rotating Coordinate Axis & Projecting', anchor: '4-rotating-the-coordinate-axis-projecting-observations' },
      { order: 3, id: 'fc_l3_3', ref: 'Section 5: Variance as a Function of Rotation Angle', anchor: '5-variance-as-a-function-of-rotation-angle' },
      { order: 4, id: 'fc_l3_4', ref: 'Section 6: PC1 and Its Orthogonal Complement', anchor: '6-the-first-principal-component-and-its-orthogonal-complement' },
      { order: 5, id: 'fc_l3_5', ref: 'Section 7: Conservation of Total Variance', anchor: '7-conservation-of-total-variance' },
      { order: 6, id: 'fc_l3_6', ref: 'Section 7: Conservation of Total Variance', anchor: '7-conservation-of-total-variance' },
      { order: 7, id: 'fc_l3_7', ref: 'Section 7: Conservation of Total Variance', anchor: '7-conservation-of-total-variance' },
      { order: 8, id: 'fc_l3_8', ref: 'Section 6: PC1 and Its Orthogonal Complement', anchor: '6-the-first-principal-component-and-its-orthogonal-complement' }
    ]
  },

  // Level 4: ch2-pca-analytical
  'ch2-pca-analytical': {
    questions: [
      { order: 1, id: 'q_l4_1', ref: 'Section 4: Fundamental Properties of Eigenvalues', anchor: '4-fundamental-properties-of-eigenvalues' },
      { order: 2, id: 'q_l4_2', ref: 'Section 3: The Characteristic Equation', anchor: '3-the-characteristic-equation' },
      { order: 3, id: 'q_l4_3', ref: 'Section 5.2: When to Use Correlation PCA', anchor: 'when-to-use-correlation-pca' },
      { order: 4, id: 'q_l4_4', ref: 'Section 5.2: When to Use Correlation PCA', anchor: 'when-to-use-correlation-pca' },
      { order: 5, id: 'q_l4_5', ref: 'Section 5.1: Scale Sensitivity of Covariance PCA', anchor: 'scale-sensitivity-of-covariance-pca' },
      { order: 6, id: 'q_l4_6', ref: 'Section 2: Derivation via Lagrange Multipliers', anchor: '2-derivation-via-lagrange-multipliers' },
      { order: 7, id: 'q_l4_7', ref: 'Section 4: Fundamental Properties of Eigenvalues', anchor: '4-fundamental-properties-of-eigenvalues' },
      { order: 8, id: 'q_l4_8', ref: 'Section 5: Covariance PCA vs. Correlation PCA', anchor: '5-covariance-pca-vs-correlation-pca' },
      { order: 9, id: 'q_l4_9', ref: 'Section 3: The Characteristic Equation', anchor: '3-the-characteristic-equation' },
      { order: 10, id: 'q_l4_10', ref: 'Section 5.2: When to Use Correlation PCA', anchor: 'when-to-use-correlation-pca' },
      { order: 11, id: 'q_l4_11', ref: 'Section 1: Matrix Representation of PCA', anchor: '1-matrix-representation-of-pca' },
      { order: 12, id: 'q_l4_12', ref: 'Section 3: The Characteristic Equation', anchor: '3-the-characteristic-equation' }
    ],
    flashcards: [
      { order: 1, id: 'fc_l4_1', ref: 'Section 1: Matrix Representation of PCA', anchor: '1-matrix-representation-of-pca' },
      { order: 2, id: 'fc_l4_2', ref: 'Section 2: Derivation via Lagrange Multipliers', anchor: '2-derivation-via-lagrange-multipliers' },
      { order: 3, id: 'fc_l4_3', ref: 'Section 3: The Characteristic Equation', anchor: '3-the-characteristic-equation' },
      { order: 4, id: 'fc_l4_4', ref: 'Section 4: Fundamental Properties of Eigenvalues', anchor: '4-fundamental-properties-of-eigenvalues' },
      { order: 5, id: 'fc_l4_5', ref: 'Section 5.2: When to Use Correlation PCA', anchor: 'when-to-use-correlation-pca' },
      { order: 6, id: 'fc_l4_6', ref: 'Section 5.1: Scale Sensitivity of Covariance PCA', anchor: 'scale-sensitivity-of-covariance-pca' },
      { order: 7, id: 'fc_l4_7', ref: 'Section 5.2: When to Use Correlation PCA', anchor: 'when-to-use-correlation-pca' },
      { order: 8, id: 'fc_l4_8', ref: 'Section 5.2: When to Use Correlation PCA', anchor: 'when-to-use-correlation-pca' }
    ]
  },

  // Level 5: ch2-pca-interpretation
  'ch2-pca-interpretation': {
    questions: [
      { order: 1, id: 'q_l5_1', ref: 'Section 1.4: Factor Loading', anchor: 'factor-loading-l-ji' },
      { order: 2, id: 'q_l5_2', ref: 'Section 2.1: Kaiser Criterion', anchor: 'kaiser-criterion-eigenvalue-greater-than-one-rule' },
      { order: 3, id: 'q_l5_3', ref: 'Section 2.2: Cattell Scree Test', anchor: 'cattell-scree-test-elbow-rule' },
      { order: 4, id: 'q_l5_4', ref: 'Section 3: Portuguese Regional Assessment', anchor: '3-real-world-application-portuguese-regional-assessment' },
      { order: 5, id: 'q_l5_5', ref: 'Section 1.4: Factor Loading', anchor: 'factor-loading-l-ji' },
      { order: 6, id: 'q_l5_6', ref: 'Section 2.1: Kaiser Criterion', anchor: 'kaiser-criterion-eigenvalue-greater-than-one-rule' },
      { order: 7, id: 'q_l5_7', ref: 'Section 4: Software Syntax in Practice', anchor: '4-software-syntax-in-practice' },
      { order: 8, id: 'q_l5_8', ref: 'Section 1.3: Component Score', anchor: 'component-score-t-hi' },
      { order: 9, id: 'q_l5_9', ref: 'Section 2.1: Kaiser Criterion', anchor: 'kaiser-criterion-eigenvalue-greater-than-one-rule' },
      { order: 10, id: 'q_l5_10', ref: 'Section 3: Portuguese Regional Assessment', anchor: '3-real-world-application-portuguese-regional-assessment' },
      { order: 11, id: 'q_l5_11', ref: 'Section 2.3: Cumulative Percentage of Explained Variance', anchor: 'cumulative-percentage-of-explained-variance' },
      { order: 12, id: 'q_l5_12', ref: 'Section 4: Software Syntax in Practice', anchor: '4-software-syntax-in-practice' }
    ],
    flashcards: [
      { order: 1, id: 'fc_l5_1', ref: 'Section 1.4: Factor Loading', anchor: 'factor-loading-l-ji' },
      { order: 2, id: 'fc_l5_2', ref: 'Section 1: Four Quantities That Must Never Be Confused', anchor: '1-four-quantities-that-must-never-be-confused' },
      { order: 3, id: 'fc_l5_3', ref: 'Section 2.1: Kaiser Criterion', anchor: 'kaiser-criterion-eigenvalue-greater-than-one-rule' },
      { order: 4, id: 'fc_l5_4', ref: 'Section 2.2: Cattell Scree Test', anchor: 'cattell-scree-test-elbow-rule' },
      { order: 5, id: 'fc_l5_5', ref: 'Section 1.3: Component Score', anchor: 'component-score-t-hi' },
      { order: 6, id: 'fc_l5_6', ref: 'Section 3: Portuguese Regional Assessment', anchor: '3-real-world-application-portuguese-regional-assessment' },
      { order: 7, id: 'fc_l5_7', ref: 'Section 4: Software Syntax in Practice', anchor: '4-software-syntax-in-practice' },
      { order: 8, id: 'fc_l5_8', ref: 'Section 2.3: Cumulative Percentage of Explained Variance', anchor: 'cumulative-percentage-of-explained-variance' }
    ]
  },

  // Level 6: ch3-fa-theory
  'ch3-fa-theory': {
    questions: [
      { order: 1, id: 'q_l6_1', ref: 'Section 1: Foundations of Factor Analysis', anchor: '1-foundations-of-factor-analysis' },
      { order: 2, id: 'q_l6_2', ref: 'Section 3.1: Communality', anchor: 'communality-h-j-2' },
      { order: 3, id: 'q_l6_3', ref: 'Section 3.2: Uniqueness', anchor: 'uniqueness-psi-j' },
      { order: 4, id: 'q_l6_4', ref: 'Section 4: Reproducing the Correlation Matrix', anchor: '4-reproducing-the-correlation-matrix' },
      { order: 5, id: 'q_l6_5', ref: 'Section 2: The Classical Orthogonal Factor Model', anchor: '2-the-classical-orthogonal-factor-model' },
      { order: 6, id: 'q_l6_6', ref: 'Section 2: The Classical Orthogonal Factor Model', anchor: '2-the-classical-orthogonal-factor-model' },
      { order: 7, id: 'q_l6_7', ref: 'Section 3.1: Communality', anchor: 'communality-h-j-2' },
      { order: 8, id: 'q_l6_8', ref: 'Section 3.2: Uniqueness', anchor: 'uniqueness-psi-j' },
      { order: 9, id: 'q_l6_9', ref: 'Section 3: Total Variance Decomposition', anchor: '3-total-variance-decomposition-communality-vs-uniqueness' },
      { order: 10, id: 'q_l6_10', ref: 'Section 3.1: Communality', anchor: 'communality-h-j-2' },
      { order: 11, id: 'q_l6_11', ref: 'Section 1.1: Formative vs. Reflective Models', anchor: 'formative-vs-reflective-models' },
      { order: 12, id: 'q_l6_12', ref: 'Section 4: Reproducing the Correlation Matrix', anchor: '4-reproducing-the-correlation-matrix' }
    ],
    flashcards: [
      { order: 1, id: 'fc_l6_1', ref: 'Section 1: Foundations of Factor Analysis', anchor: '1-foundations-of-factor-analysis' },
      { order: 2, id: 'fc_l6_2', ref: 'Section 1: Foundations of Factor Analysis', anchor: '1-foundations-of-factor-analysis' },
      { order: 3, id: 'fc_l6_3', ref: 'Section 3: Total Variance Decomposition', anchor: '3-total-variance-decomposition-communality-vs-uniqueness' },
      { order: 4, id: 'fc_l6_4', ref: 'Section 3.1: Communality', anchor: 'communality-h-j-2' },
      { order: 5, id: 'fc_l6_5', ref: 'Section 2: The Classical Orthogonal Factor Model', anchor: '2-the-classical-orthogonal-factor-model' },
      { order: 6, id: 'fc_l6_6', ref: 'Section 4: Reproducing the Correlation Matrix', anchor: '4-reproducing-the-correlation-matrix' },
      { order: 7, id: 'fc_l6_7', ref: 'Section 1.1: Formative vs. Reflective Models', anchor: 'formative-vs-reflective-models' },
      { order: 8, id: 'fc_l6_8', ref: 'Section 2: The Classical Orthogonal Factor Model', anchor: '2-the-classical-orthogonal-factor-model' }
    ]
  },

  // Level 7: ch3-fa-extraction
  'ch3-fa-extraction': {
    questions: [
      { order: 1, id: 'q_l7_1', ref: 'Section 1.1: Factor Rotation Indeterminacy', anchor: 'factor-rotation-indeterminacy' },
      { order: 2, id: 'q_l7_2', ref: 'Section 2.1: Principal Components Factoring (PCF)', anchor: 'principal-components-factoring-pcf' },
      { order: 3, id: 'q_l7_3', ref: 'Section 3: Evaluating Model Fit: RMSR', anchor: '3-evaluating-model-fit-residual-correlation-rmsr' },
      { order: 4, id: 'q_l7_4', ref: 'Section 3: Evaluating Model Fit: RMSR', anchor: '3-evaluating-model-fit-residual-correlation-rmsr' },
      { order: 5, id: 'q_l7_5', ref: 'Section 2.2: Principal Axis Factoring (PAF)', anchor: 'principal-axis-factoring-paf' },
      { order: 6, id: 'q_l7_6', ref: 'Section 2.1: Principal Components Factoring (PCF)', anchor: 'principal-components-factoring-pcf' },
      { order: 7, id: 'q_l7_7', ref: 'Section 2.2: Principal Axis Factoring (PAF)', anchor: 'principal-axis-factoring-paf' },
      { order: 8, id: 'q_l7_8', ref: 'Section 3: Evaluating Model Fit: RMSR', anchor: '3-evaluating-model-fit-residual-correlation-rmsr' },
      { order: 9, id: 'q_l7_9', ref: 'Section 1.1: Factor Rotation Indeterminacy', anchor: 'factor-rotation-indeterminacy' },
      { order: 10, id: 'q_l7_10', ref: 'Section 3: Evaluating Model Fit: RMSR', anchor: '3-evaluating-model-fit-residual-correlation-rmsr' },
      { order: 11, id: 'q_l7_11', ref: 'Section 2.2: Principal Axis Factoring (PAF)', anchor: 'principal-axis-factoring-paf' },
      { order: 12, id: 'q_l7_12', ref: 'Section 1.1: Factor Rotation Indeterminacy', anchor: 'factor-rotation-indeterminacy' }
    ],
    flashcards: [
      { order: 1, id: 'fc_l7_1', ref: 'Section 1.1: Factor Rotation Indeterminacy', anchor: 'factor-rotation-indeterminacy' },
      { order: 2, id: 'fc_l7_2', ref: 'Section 1.2: Communality Circularity', anchor: 'communality-circularity' },
      { order: 3, id: 'fc_l7_3', ref: 'Section 2.1: Principal Components Factoring (PCF)', anchor: 'principal-components-factoring-pcf' },
      { order: 4, id: 'fc_l7_4', ref: 'Section 2.2: Principal Axis Factoring (PAF)', anchor: 'principal-axis-factoring-paf' },
      { order: 5, id: 'fc_l7_5', ref: 'Section 3: Evaluating Model Fit: Residual Correlation', anchor: '3-evaluating-model-fit-residual-correlation-rmsr' },
      { order: 6, id: 'fc_l7_6', ref: 'Section 3: Evaluating Model Fit: RMSR', anchor: '3-evaluating-model-fit-residual-correlation-rmsr' },
      { order: 7, id: 'fc_l7_7', ref: 'Section 1.1: Factor Rotation Indeterminacy', anchor: 'factor-rotation-indeterminacy' },
      { order: 8, id: 'fc_l7_8', ref: 'Section 2.2: Principal Axis Factoring (PAF)', anchor: 'principal-axis-factoring-paf' }
    ]
  },

  // Level 8: ch3-fa-rotation-evaluation
  'ch3-fa-rotation-evaluation': {
    questions: [
      { order: 1, id: 'q_l8_1', ref: 'Section 1.3: Kaiser-Meyer-Olkin (KMO)', anchor: 'kaiser-meyer-olkin-kmo-measure-of-sampling-adequacy' },
      { order: 2, id: 'q_l8_2', ref: 'Section 2.1: Orthogonal Rotations', anchor: 'orthogonal-rotations' },
      { order: 3, id: 'q_l8_3', ref: 'Section 2: Factor Rotation Techniques', anchor: '2-factor-rotation-techniques' },
      { order: 4, id: 'q_l8_4', ref: 'Section 1: Testing Data Suitability', anchor: '1-testing-data-suitability-for-factor-analysis' },
      { order: 5, id: 'q_l8_5', ref: 'Section 2.1: Orthogonal Rotations', anchor: 'orthogonal-rotations' },
      { order: 6, id: 'q_l8_6', ref: 'Section 1.3: Kaiser-Meyer-Olkin (KMO)', anchor: 'kaiser-meyer-olkin-kmo-measure-of-sampling-adequacy' },
      { order: 7, id: 'q_l8_7', ref: 'Section 2.2: Oblique Rotations', anchor: 'oblique-rotations' },
      { order: 8, id: 'q_l8_8', ref: 'Section 1.3: Kaiser-Meyer-Olkin (KMO)', anchor: 'kaiser-meyer-olkin-kmo-measure-of-sampling-adequacy' },
      { order: 9, id: 'q_l8_9', ref: 'Section 3: Systematic Summary: PCA vs. Factor Analysis', anchor: '3-systematic-summary-pca-vs-factor-analysis' },
      { order: 10, id: 'q_l8_10', ref: 'Section 3: Systematic Summary: PCA vs. Factor Analysis', anchor: '3-systematic-summary-pca-vs-factor-analysis' },
      { order: 11, id: 'q_l8_11', ref: 'Section 1.3: Kaiser-Meyer-Olkin (KMO)', anchor: 'kaiser-meyer-olkin-kmo-measure-of-sampling-adequacy' },
      { order: 12, id: 'q_l8_12', ref: 'Section 2: Factor Rotation Techniques', anchor: '2-factor-rotation-techniques' }
    ],
    flashcards: [
      { order: 1, id: 'fc_l8_1', ref: 'Section 1.3: Kaiser-Meyer-Olkin (KMO)', anchor: 'kaiser-meyer-olkin-kmo-measure-of-sampling-adequacy' },
      { order: 2, id: 'fc_l8_2', ref: 'Section 1.3: Kaiser-Meyer-Olkin (KMO)', anchor: 'kaiser-meyer-olkin-kmo-measure-of-sampling-adequacy' },
      { order: 3, id: 'fc_l8_3', ref: 'Section 1.3: Kaiser-Meyer-Olkin (KMO)', anchor: 'kaiser-meyer-olkin-kmo-measure-of-sampling-adequacy' },
      { order: 4, id: 'fc_l8_4', ref: 'Section 2.1: Orthogonal Rotations', anchor: 'orthogonal-rotations' },
      { order: 5, id: 'fc_l8_5', ref: 'Section 2.1: Orthogonal Rotations', anchor: 'orthogonal-rotations' },
      { order: 6, id: 'fc_l8_6', ref: 'Section 2.2: Oblique Rotations', anchor: 'oblique-rotations' },
      { order: 7, id: 'fc_l8_7', ref: 'Section 3: Systematic Summary: PCA vs. Factor Analysis', anchor: '3-systematic-summary-pca-vs-factor-analysis' },
      { order: 8, id: 'fc_l8_8', ref: 'Section 1: Testing Data Suitability', anchor: '1-testing-data-suitability-for-factor-analysis' }
    ]
  }
};

async function run() {
  console.log('--- Applying Section References and Anchors to Supabase ---');

  let totalQuestionsUpdated = 0;
  let totalFlashcardsUpdated = 0;

  for (const [segmentId, data] of Object.entries(mappings)) {
    console.log(`\nProcessing Segment: ${segmentId}`);

    // Update Questions
    for (const q of data.questions) {
      const { error } = await supabase
        .from('study_questions')
        .update({
          section_reference: q.ref,
          section_anchor: q.anchor
        })
        .match({ id: q.id });

      if (error) {
        console.error(`Error updating question ${q.id}:`, error.message);
      } else {
        totalQuestionsUpdated++;
      }
    }

    // Update Flashcards
    for (const fc of data.flashcards) {
      const { error } = await supabase
        .from('study_flashcards')
        .update({
          section_reference: fc.ref,
          section_anchor: fc.anchor
        })
        .match({ id: fc.id });

      if (error) {
        console.error(`Error updating flashcard ${fc.id}:`, error.message);
      } else {
        totalFlashcardsUpdated++;
      }
    }
  }

  console.log(`\n--- Completed DB Updates ---`);
  console.log(`Total Questions Updated: ${totalQuestionsUpdated} / 96`);
  console.log(`Total Flashcards Updated: ${totalFlashcardsUpdated} / 64`);
}

if (process.argv[1] && process.argv[1].endsWith('update-anchors-all-levels.js')) {
  run();
}
