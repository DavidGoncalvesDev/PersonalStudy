// Part 2: Levels 5 to 8 of Data Analysis curriculum

export const levelsPart2 = [
  {
    "segment": {
      "id": "ch2-pca-interpretation",
      "discipline_id": "data-analysis",
      "title": "PCA: Loadings, Scores & Retention Diagnostics",
      "subtitle": "Distinguishing weights vs loadings, Kaiser/Scree/cumulative criteria, score plots, and software syntax.",
      "order_index": 5,
      "summary_markdown": "# PCA: Component Interpretation, Loadings, Scores & Retention Diagnostics\n\n## 1. Four Quantities That Must Never Be Confused\nIn multivariate statistics, interpreting PCA requires distinguishing four closely related but mathematically distinct quantities:\n\n### Eigenvalue (\\lambda_i)\nThe eigenvalue represents the variance of the $i$-th principal component: $\\text{Var}(PC_i) = \\lambda_i$. In our customer study, the leading eigenvalue is $\\lambda_1 = 38.576$.\n\n### Eigenvector Weights (w_i)\nThe eigenvector contains the normalized directional coefficients used to construct the linear combination from centered variables: $PC_i = w_{i1} x_1 + \\dots + w_{ip} x_p$, satisfying $\\sum_j w_{ij}^2 = 1$. For $PC_1$, the weight vector is $w_1 = (0.728238, 0.685324)^T$.\n\n### Component Score (t_{hi})\nThe component score is the actual numerical coordinate of observation $h$ when projected onto the $i$-th principal axis: $t_{hi} = w_i^T x_h$. Customer A has a $PC_1$ score of $9.253$.\n\n### Factor Loading (l_{ji})\nA factor loading is the Pearson correlation between original variable $X_j$ and principal component $PC_i$:\n$$l_{ji} = \\text{Corr}(X_j, PC_i) = w_{ij} \\frac{\\sqrt{\\lambda_i}}{s_j}$$\nWhen data are standardized (Correlation PCA, where $s_j = 1$), the loading simplifies directly to:\n$$l_{ji} = w_{ij} \\sqrt{\\lambda_i}$$\nFor example, the loading of Income on $PC_1$ is $0.728238 \\times \\frac{\\sqrt{38.576}}{4.805} = 0.941$, indicating that Income shares an extremely high positive correlation ($r = 0.941$) with $PC_1$.\n\n## 2. Retention Criteria: How Many Components to Keep?\nRetaining all $p$ components defeats the purpose of dimension reduction. Analysts rely on three complementary stopping rules:\n\n### Kaiser Criterion (Eigenvalue-Greater-Than-One Rule)\nIn Correlation PCA, retain only components with eigenvalues $\\lambda_i > 1.0$. Because each standardized input variable has a variance of $1.0$, a component with an eigenvalue below $1.0$ accounts for less variation than a single original variable and should be discarded. (Note: do not apply the cutoff of 1.0 to Covariance PCA, where total variance is not $p$).\n\n### Cattell Scree Test (Elbow Rule)\nThe Scree plot displays ordered eigenvalues on the vertical axis against the component number on the horizontal axis. Analysts look for an elbow or point of inflection where the steep descent transitions into a flat, horizontal slope of residual variation (scree). Components appearing before the elbow are retained.\n\n### Cumulative Percentage of Explained Variance\nAnalysts specify a minimum variance threshold (such as $70\\%$, $80\\%$, or $90\\%$), retaining the smallest number of components $k$ required to reach that threshold.\n\n## 3. Real-World Application: Portuguese Regional Assessment\nTo see applied PCA in action, consider a study comparing 7 Portuguese administrative regions across 5 socio-economic indicators: Population Density (DEN), Gross Domestic Product per capita (GDP), Doctors per 1,000 residents (MED), Hospital beds per 1,000 residents (HOS), and Public libraries per 10,000 residents (BIB).\n\nThe extracted factor loadings reveal clear substantive patterns:\n- First Principal Component ($PC_1$ - Public Infrastructure: Health & Culture): Has very high positive correlations with MED ($0.957$), HOS ($0.933$), and BIB ($0.942$). It reflects regional investment in healthcare and social infrastructure.\n- Second Principal Component ($PC_2$ - Economic Wealth & Density): Has high positive correlations with GDP ($0.750$) and Density ($0.670$), with slightly negative correlations on healthcare indicators. It reflects urban concentration and economic productivity.\n\nPlotting regions in the 2D coordinate space of ($PC_1, PC_2$) reveals that Lisbon (LVT) scores high on both dimensions, Madeira scores high on economic wealth but moderate on health infrastructure, and Alentejo exhibits a rural public infrastructure profile.\n\n## 4. Software Syntax in Practice\nIn SAS, PCA is executed using:\n```text\nproc princomp data=mydata plots=scree;\n   var DEN GDP MED HOS BIB;\nrun;\n```\nIn Python, PCA is implemented via scikit-learn:\n```python\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.decomposition import PCA\n\nX_scaled = StandardScaler().fit_transform(X)\npca = PCA(n_components=2)\nscores = pca.fit_transform(X_scaled)\nloadings = pca.components_.T * np.sqrt(pca.explained_variance_)\n```"
    },
    "questions": [
      {
        "id": "q_l5_1",
        "segment_id": "ch2-pca-interpretation",
        "order_index": 1,
        "difficulty": "easy",
        "question": "What is a factor loading in Principal Components Analysis?",
        "options": [
          {
            "id": "a",
            "text": "The sum of observations in a cluster"
          },
          {
            "id": "b",
            "text": "The Pearson correlation between an original variable and a principal component"
          },
          {
            "id": "c",
            "text": "The degrees of freedom of the sample covariance matrix"
          },
          {
            "id": "d",
            "text": "The ratio of eigenvalues between $PC_1$ and $PC_2$"
          },
          {
            "id": "e",
            "text": "The difference between the sample mean and sample median"
          },
          {
            "id": "f",
            "text": "The p-value of a two-tailed hypothesis test"
          }
        ],
        "correct_option": "b",
        "explanation": "In PCA, a factor loading ($l_{ji}$) represents the Pearson correlation coefficient between the original input variable $X_j$ and the principal component $PC_i$."
      },
      {
        "id": "q_l5_2",
        "segment_id": "ch2-pca-interpretation",
        "order_index": 2,
        "difficulty": "easy",
        "question": "According to the Kaiser criterion, how many principal components should be retained in Correlation PCA?",
        "options": [
          {
            "id": "a",
            "text": "All components with eigenvalues greater than 1.0 ($\\lambda_i > 1$)"
          },
          {
            "id": "b",
            "text": "All components with eigenvalues less than 0.5"
          },
          {
            "id": "c",
            "text": "Always exactly 2 components regardless of eigenvalues"
          },
          {
            "id": "d",
            "text": "Components that explain at least 99% of total variance"
          },
          {
            "id": "e",
            "text": "All components with positive eigenvectors"
          },
          {
            "id": "f",
            "text": "The single component with the largest loading"
          }
        ],
        "correct_option": "a",
        "explanation": "The Kaiser criterion retains components whose eigenvalues exceed 1.0. Because each standardized variable has variance 1.0 in Correlation PCA, a component with $\\lambda > 1$ accounts for more variance than an individual original variable."
      },
      {
        "id": "q_l5_3",
        "segment_id": "ch2-pca-interpretation",
        "order_index": 3,
        "difficulty": "easy",
        "question": "What visual feature on a Scree plot indicates the optimal number of principal components to retain according to Cattell’s rule?",
        "options": [
          {
            "id": "a",
            "text": "The highest point on the y-axis"
          },
          {
            "id": "b",
            "text": "The \"elbow\" or point of inflection where the steep drop levels off into a flat residual plateau"
          },
          {
            "id": "c",
            "text": "The intersection with the x-axis"
          },
          {
            "id": "d",
            "text": "The point where the line crosses 100%"
          },
          {
            "id": "e",
            "text": "The midpoint between the largest and smallest eigenvalue"
          },
          {
            "id": "f",
            "text": "The point where the curve turns downward"
          }
        ],
        "correct_option": "b",
        "explanation": "Cattell's Scree test inspects the plot of ordered eigenvalues to find the \"elbow,\" retaining all components that precede the point where the line flattens into residual rubble (scree)."
      },
      {
        "id": "q_l5_4",
        "segment_id": "ch2-pca-interpretation",
        "order_index": 4,
        "difficulty": "easy",
        "question": "In the Portuguese regional study, $PC_1$ had high positive loadings on doctors (`MED`, 0.957), hospital beds (`HOS`, 0.933), and libraries (`BIB`, 0.942). What substantive label best describes this component?",
        "options": [
          {
            "id": "a",
            "text": "Manufacturing Output"
          },
          {
            "id": "b",
            "text": "Public Infrastructure: Health and Culture"
          },
          {
            "id": "c",
            "text": "Agricultural Land Density"
          },
          {
            "id": "d",
            "text": "Foreign Direct Investment"
          },
          {
            "id": "e",
            "text": "Population Emigration Rate"
          },
          {
            "id": "f",
            "text": "Private Consumer Debt"
          }
        ],
        "correct_option": "b",
        "explanation": "Variables reflecting healthcare services (physicians, hospital beds) and cultural amenities (public libraries) all correlate strongly ($> 0.93$) with $PC_1$, making \"Health and Culture\" the natural substantive interpretation."
      },
      {
        "id": "q_l5_5",
        "segment_id": "ch2-pca-interpretation",
        "order_index": 5,
        "difficulty": "intermediate",
        "question": "What is the mathematical formula used to calculate the loading $l_{ji}$ of variable $X_j$ on component $PC_i$ when PCA is performed on the sample covariance matrix $S$?",
        "options": [
          {
            "id": "a",
            "text": "$l_{ji} = w_{ij} \\times s_j / \\sqrt{\\lambda_i}$"
          },
          {
            "id": "b",
            "text": "$l_{ji} = w_{ij} \\frac{\\sqrt{\\lambda_i}}{s_j}$ where $s_j$ is the sample standard deviation of variable $j$"
          },
          {
            "id": "c",
            "text": "$l_{ji} = \\lambda_i / (w_{ij} + s_j)$"
          },
          {
            "id": "d",
            "text": "$l_{ji} = w_{ij}^2 \\times \\lambda_i$"
          },
          {
            "id": "e",
            "text": "$l_{ji} = \\sqrt{w_{ij} \\lambda_i s_j}$"
          },
          {
            "id": "f",
            "text": "$l_{ji} = s_j / \\lambda_i$"
          }
        ],
        "correct_option": "b",
        "explanation": "By definition of Pearson correlation: $\\text{Corr}(X_j, PC_i) = \\frac{\\text{Cov}(X_j, w_i' x)}{\\text{Std}(X_j) \\text{Std}(PC_i)} = \\frac{w_{ij} \\text{Var}(PC_i)}{s_j \\sqrt{\\lambda_i}} = w_{ij} \\frac{\\lambda_i}{s_j \\sqrt{\\lambda_i}} = w_{ij} \\frac{\\sqrt{\\lambda_i}}{s_j}$."
      },
      {
        "id": "q_l5_6",
        "segment_id": "ch2-pca-interpretation",
        "order_index": 6,
        "difficulty": "intermediate",
        "question": "Why should an analyst NOT apply the Kaiser threshold of 1.0 blindly when performing Covariance PCA?",
        "options": [
          {
            "id": "a",
            "text": "Because Covariance PCA produces complex imaginary eigenvalues"
          },
          {
            "id": "b",
            "text": "Because in Covariance PCA, total variance is the sum of raw variances $\\sum s_j^2$ (which can be thousands or fractions), so an average eigenvalue is not 1.0"
          },
          {
            "id": "c",
            "text": "Because Covariance PCA does not permit computing eigenvalues"
          },
          {
            "id": "d",
            "text": "Because Kaiser developed his criterion exclusively for nonmetric nominal variables"
          },
          {
            "id": "e",
            "text": "Because Covariance PCA always has exactly one component"
          },
          {
            "id": "f",
            "text": "Because SAS automatically changes the threshold to 0.05"
          }
        ],
        "correct_option": "b",
        "explanation": "The Kaiser rule of $\\lambda > 1$ is derived from Correlation PCA, where the average eigenvalue is exactly 1.0 (since trace is $p$). In Covariance PCA, total variance is $\\sum s_j^2$, which depends on the units; an eigenvalue of 10 might be tiny if total variance is 1,000,000."
      },
      {
        "id": "q_l5_7",
        "segment_id": "ch2-pca-interpretation",
        "order_index": 7,
        "difficulty": "intermediate",
        "question": "In SAS Base, which option in `PROC PRINCOMP` tells the procedure to perform PCA on the sample covariance matrix instead of the default correlation matrix?",
        "options": [
          {
            "id": "a",
            "text": "`METHOD=ML`"
          },
          {
            "id": "b",
            "text": "`COV`"
          },
          {
            "id": "c",
            "text": "`VARDEF=N`"
          },
          {
            "id": "d",
            "text": "`STD`"
          },
          {
            "id": "e",
            "text": "`OUTSTAT=COV`"
          },
          {
            "id": "f",
            "text": "`ROTATE=VARIMAX`"
          }
        ],
        "correct_option": "b",
        "explanation": "By default, SAS `PROC PRINCOMP` decomposes the correlation matrix. Adding the `COV` option instructs SAS to analyze the sample covariance matrix."
      },
      {
        "id": "q_l5_8",
        "segment_id": "ch2-pca-interpretation",
        "order_index": 8,
        "difficulty": "intermediate",
        "question": "Suppose an analyst standardizes component scores by dividing each score by its component standard deviation: $t^*_{hi} = t_{hi} / \\sqrt{\\lambda_i}$. What is the variance of these standardized scores, and what is the primary consequence of this transformation?",
        "options": [
          {
            "id": "a",
            "text": "Variance becomes 0; scores lose all distinguishability"
          },
          {
            "id": "b",
            "text": "Variance becomes 1.0 for all components; components with smaller eigenvalues now carry equal weight to the leading components in distance calculations"
          },
          {
            "id": "c",
            "text": "Variance becomes equal to $n - 1$"
          },
          {
            "id": "d",
            "text": "The components become correlated with each other"
          },
          {
            "id": "e",
            "text": "The original data cannot be reconstructed"
          },
          {
            "id": "f",
            "text": "All negative scores become positive"
          }
        ],
        "correct_option": "b",
        "explanation": "Dividing by $\\sqrt{\\lambda_i}$ scales each component's variance to 1.0. In distance-based analyses (like clustering), this equalizes the influence of minor components with the major leading component."
      },
      {
        "id": "q_l5_9",
        "segment_id": "ch2-pca-interpretation",
        "order_index": 9,
        "difficulty": "hard",
        "question": "In a 5-variable Correlation PCA, the eigenvalues are $\\lambda_1 = 2.85$, $\\lambda_2 = 1.25$, $\\lambda_3 = 0.50$, $\\lambda_4 = 0.25$, and $\\lambda_5 = 0.15$. How many components should be retained under: (1) Kaiser criterion, and (2) an 80% cumulative variance criterion?",
        "options": [
          {
            "id": "a",
            "text": "(1) 1 component; (2) 2 components"
          },
          {
            "id": "b",
            "text": "(1) 2 components; (2) 3 components"
          },
          {
            "id": "c",
            "text": "(1) 3 components; (2) 4 components"
          },
          {
            "id": "d",
            "text": "(1) 2 components; (2) 2 components"
          },
          {
            "id": "e",
            "text": "(1) 4 components; (2) 5 components"
          },
          {
            "id": "f",
            "text": "(1) 1 component; (2) 1 component"
          }
        ],
        "correct_option": "b",
        "explanation": "Total variance is $p = 5.0$. Under Kaiser ($\\lambda > 1$), components 1 and 2 qualify ($\\lambda_1 = 2.85$, $\\lambda_2 = 1.25$), so retain 2 components. For 80% cumulative variance: 1 component explains $2.85/5 = 57\\%$; 2 components explain $(2.85+1.25)/5 = 4.10/5 = 82\\%$. Thus, both criteria actually give 2 components!"
      },
      {
        "id": "q_l5_10",
        "segment_id": "ch2-pca-interpretation",
        "order_index": 10,
        "difficulty": "hard",
        "question": "Suppose an analyst inspects a regional score plot and observes that the region of Lisboa has $PC_1 \\text{ score} = +3.8$ and $PC_2 \\text{ score} = +0.5$, while Alentejo has $PC_1 \\text{ score} = -1.8$ and $PC_2 \\text{ score} = -0.8$. Given that $PC_1$ represents \"Health & Culture\" and $PC_2$ represents \"Economic Wealth & Density\", what does this score contrast tell the policy maker?",
        "options": [
          {
            "id": "a",
            "text": "Lisboa has high health and cultural infrastructure, whereas Alentejo has below-average public infrastructure on both fronts"
          },
          {
            "id": "b",
            "text": "Alentejo has twice the population density of Lisboa"
          },
          {
            "id": "c",
            "text": "The analysis is invalid because negative scores indicate missing data"
          },
          {
            "id": "d",
            "text": "Lisboa has zero hospital beds and Alentejo has surplus physicians"
          },
          {
            "id": "e",
            "text": "Alentejo must be merged into Lisboa to eliminate collinearity"
          },
          {
            "id": "f",
            "text": "Both regions have identical economic profiles"
          }
        ],
        "correct_option": "a",
        "explanation": "Because scores are centered around 0, positive scores indicate above-average levels and negative scores indicate below-average levels. Lisboa's high positive score on $PC_1$ reflects extensive health/cultural infrastructure, while Alentejo's negative scores indicate below-average infrastructure and density."
      },
      {
        "id": "q_l5_11",
        "segment_id": "ch2-pca-interpretation",
        "order_index": 11,
        "difficulty": "hard",
        "question": "Why does highest explained variance NOT necessarily equate to highest substantive or predictive importance in practical applications?",
        "options": [
          {
            "id": "a",
            "text": "Because eigenvalues are always distorted by sample size"
          },
          {
            "id": "b",
            "text": "Because PCA maximizes total retained variance without regard to any specific external target; in safety-critical tasks or specific classification goals, the low-variance components may carry the critical predictive signal"
          },
          {
            "id": "c",
            "text": "Because high-variance components cannot be rotated"
          },
          {
            "id": "d",
            "text": "Because correlation loadings are strictly bounded between -0.5 and +0.5"
          },
          {
            "id": "e",
            "text": "Because eigenvalues measure only non-linear interactions"
          },
          {
            "id": "f",
            "text": "Because PCA scores cannot be used as predictors in regression models"
          }
        ],
        "correct_option": "b",
        "explanation": "PCA is unsupervised—it maximizes variance across the $X$ variables, completely unaware of any outcome $Y$. As slide 42 and 45 note, low variance is not the same as low importance: in fraud detection or safety-critical tasks, the 1% remaining variation may hold the vital anomaly signal."
      },
      {
        "id": "q_l5_12",
        "segment_id": "ch2-pca-interpretation",
        "order_index": 12,
        "difficulty": "hard",
        "question": "Given the following Python code for PCA on dataframe `df`: \n```python\nscaler = StandardScaler()\nX_std = scaler.fit_transform(df)\npca = PCA(n_components=2)\npca.fit(X_std)\nloadings = pca.components_.T * np.sqrt(pca.explained_variance_)\n```\nWhy is `pca.components_.T` multiplied by `np.sqrt(pca.explained_variance_)` to obtain the loadings?",
        "options": [
          {
            "id": "a",
            "text": "To convert negative eigenvalues into positive correlation coefficients"
          },
          {
            "id": "b",
            "text": "Because `pca.components_` contains unit eigenvectors $w_i$; multiplying by $\\sqrt{\\lambda_i}$ converts the weights into Pearson correlations $l_{ji} = w_{ij}\\sqrt{\\lambda_i}$ for standardized inputs"
          },
          {
            "id": "c",
            "text": "Because scikit-learn computes Covariance PCA by default"
          },
          {
            "id": "d",
            "text": "To standardize the observations to have zero mean and unit variance"
          },
          {
            "id": "e",
            "text": "To invert the correlation matrix"
          },
          {
            "id": "f",
            "text": "Because scikit-learn squares the weights during fitting"
          }
        ],
        "correct_option": "b",
        "explanation": "In scikit-learn, `pca.components_` returns the row eigenvectors $w_i$ (weights). For standardized data ($s_j = 1$), the factor loading is $l_{ji} = w_{ij}\\sqrt{\\lambda_i}$. Multiplying the transposed eigenvector matrix by $\\sqrt{\\lambda_i}$ exactly implements this definition."
      }
    ],
    "flashcards": [
      {
        "id": "fc_l5_1",
        "segment_id": "ch2-pca-interpretation",
        "order_index": 1,
        "category": "Definitions",
        "front": "What is the formula for calculating a **Factor Loading ($l_{ji}$)** in PCA?",
        "back": "$$l_{ji} = \\text{Corr}(X_j, PC_i) = w_{ij} \\frac{\\sqrt{\\lambda_i}}{s_j}$$\nFor standardized inputs ($s_j = 1$), it simplifies to: $$l_{ji} = w_{ij} \\sqrt{\\lambda_i}$$."
      },
      {
        "id": "fc_l5_2",
        "segment_id": "ch2-pca-interpretation",
        "order_index": 2,
        "category": "Distinction",
        "front": "What is the difference between an **Eigenvector Weight ($w_{ij}$)** and a **Loading ($l_{ji}$)**?",
        "back": "- **Weight ($w_{ij}$)**: Coefficient used to compute component scores ($PC_i = \\sum w_{ij} x_j$), constrained to unit norm $\\sum w_{ij}^2 = 1$.\n- **Loading ($l_{ji}$)**: Pearson correlation between variable $j$ and component $i$, bounded by $[-1, 1]$."
      },
      {
        "id": "fc_l5_3",
        "segment_id": "ch2-pca-interpretation",
        "order_index": 3,
        "category": "Retention",
        "front": "What is the **Kaiser Criterion** for retaining principal components?",
        "back": "Retain components with **eigenvalues $\\lambda_i > 1.0$**.\nValid for **Correlation PCA**, ensuring each retained component explains more variance than a single standardized input variable."
      },
      {
        "id": "fc_l5_4",
        "segment_id": "ch2-pca-interpretation",
        "order_index": 4,
        "category": "Retention",
        "front": "What is the **Scree Plot** test (Cattell), and how is it used?",
        "back": "A plot of ordered eigenvalues against component number.\nThe analyst retains components appearing **before the elbow** (the point where the curve flattens into residual rubble)."
      },
      {
        "id": "fc_l5_5",
        "segment_id": "ch2-pca-interpretation",
        "order_index": 5,
        "category": "Scores",
        "front": "How are **Standardized Component Scores** calculated, and what is their variance?",
        "back": "$$t^*_{hi} = \\frac{t_{hi}}{\\sqrt{\\lambda_i}}$$\nStandardized scores have a mean of $0$ and a variance of **$1.0$**."
      },
      {
        "id": "fc_l5_6",
        "segment_id": "ch2-pca-interpretation",
        "order_index": 6,
        "category": "Case Study",
        "front": "In the Portuguese regional study, what did $PC_1$ and $PC_2$ represent?",
        "back": "- **$PC_1$**: \"Health & Culture\" (high positive loadings on doctors, hospital beds, and libraries).\n- **$PC_2$**: \"Economic Wealth & Density\" (high positive loadings on GDP per capita and population density)."
      },
      {
        "id": "fc_l5_7",
        "segment_id": "ch2-pca-interpretation",
        "order_index": 7,
        "category": "Software",
        "front": "In SAS `PROC PRINCOMP`, what does the `COV` option specify?",
        "back": "It directs SAS to decompose the **sample covariance matrix** rather than the default sample correlation matrix."
      },
      {
        "id": "fc_l5_8",
        "segment_id": "ch2-pca-interpretation",
        "order_index": 8,
        "category": "Caveats",
        "front": "Why does highest explained variance not always mean highest substantive importance?",
        "back": "PCA is unsupervised. In predictive or anomaly detection tasks, discarded low-variance components may contain crucial domain signals or safety-critical anomalies."
      }
    ]
  },
  {
    "segment": {
      "id": "ch3-fa-theory",
      "discipline_id": "data-analysis",
      "title": "Factor Analysis: Latent Variable Theory & Variance Decomposition",
      "subtitle": "Spearman's foundational intelligence model, communalities, unique variances, and reproducing correlations.",
      "order_index": 6,
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
            "text": "To maximize the total variance of independent variables in a regression"
          },
          {
            "id": "b",
            "text": "To identify unobservable (latent) constructs that explain the observed correlations among manifest indicators"
          },
          {
            "id": "c",
            "text": "To cluster nominal categories into contingency tables"
          },
          {
            "id": "d",
            "text": "To eliminate all error variance from empirical data"
          },
          {
            "id": "e",
            "text": "To predict a binary dependent variable from continuous predictors"
          },
          {
            "id": "f",
            "text": "To compute the arithmetic mean of ordinal survey questions"
          }
        ],
        "correct_option": "b",
        "explanation": "Factor Analysis is designed to discover and measure unobservable (latent) variables—such as intelligence, brand loyalty, or perceived quality—that generate the correlations observed among measurable indicators."
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
            "text": "The sample size divided by the number of factors"
          },
          {
            "id": "b",
            "text": "The proportion of the variable’s total variance accounted for by the common factors: $h_j^2 = \\sum_{k=1}^m \\lambda_{jk}^2$"
          },
          {
            "id": "c",
            "text": "The variance of the unique error term $\\varepsilon_j$"
          },
          {
            "id": "d",
            "text": "The correlation between the first factor and the second factor"
          },
          {
            "id": "e",
            "text": "The inverse of the eigenvalue"
          },
          {
            "id": "f",
            "text": "The degrees of freedom remaining in the residual matrix"
          }
        ],
        "correct_option": "b",
        "explanation": "Communality ($h_j^2$) is the sum of squared factor loadings across all extracted common factors, representing the shared variance explained by the latent factors."
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
            "text": "$\\psi_j = 0.64$"
          },
          {
            "id": "b",
            "text": "$\\psi_j = 1.0 - 0.64 = 0.36$"
          },
          {
            "id": "c",
            "text": "$\\psi_j = \\sqrt{0.64} = 0.80$"
          },
          {
            "id": "d",
            "text": "$\\psi_j = 0.64^2 = 0.4096$"
          },
          {
            "id": "e",
            "text": "$\\psi_j = 0.00$"
          },
          {
            "id": "f",
            "text": "$\\psi_j = 1.64$"
          }
        ],
        "correct_option": "b",
        "explanation": "For standardized variables, total variance is 1.0. Therefore, total variance decomposes into communality plus unique variance: $1.0 = h_j^2 + \\psi_j \\implies \\psi_j = 1.0 - 0.64 = 0.36$."
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
            "text": "$r_{MP} = 0.80 + 0.70 = 1.50$"
          },
          {
            "id": "b",
            "text": "$r_{MP} = 0.80 \\times 0.70 = 0.56$"
          },
          {
            "id": "c",
            "text": "$r_{MP} = (0.80 - 0.70)^2 = 0.01$"
          },
          {
            "id": "d",
            "text": "$r_{MP} = \\sqrt{0.80 \\times 0.70} = 0.748$"
          },
          {
            "id": "e",
            "text": "$r_{MP} = 0.80 / 0.70 = 1.14$"
          },
          {
            "id": "f",
            "text": "$r_{MP} = 0.00$"
          }
        ],
        "correct_option": "b",
        "explanation": "In an orthogonal factor model, the correlation between any two indicators is the product of their pattern loadings: $r_{jk} = \\lambda_j \\lambda_k = 0.80 \\times 0.70 = 0.56$."
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
            "text": "Only when the sample size exceeds 1,000"
          },
          {
            "id": "b",
            "text": "In all orthogonal factor models (where common factors are mutually uncorrelated)"
          },
          {
            "id": "c",
            "text": "Only in oblique factor models where factors have correlation $r > 0.50$"
          },
          {
            "id": "d",
            "text": "Only when communalities are equal to 1.0"
          },
          {
            "id": "e",
            "text": "Only when variables are measured on ratio scales"
          },
          {
            "id": "f",
            "text": "Never; pattern and structure loadings are fundamentally incompatible"
          }
        ],
        "correct_option": "b",
        "explanation": "In orthogonal factor models, common factors have zero correlation with one another. Consequently, the simple correlation between an indicator and a factor (structure loading) equals the direct regression coefficient (pattern loading)."
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
            "text": "They are perfectly positively correlated"
          },
          {
            "id": "b",
            "text": "They are completely uncorrelated: $E(\\xi_k \\varepsilon_j) = 0$"
          },
          {
            "id": "c",
            "text": "Their covariance equals the communality"
          },
          {
            "id": "d",
            "text": "The error term is a non-linear quadratic function of the common factor"
          },
          {
            "id": "e",
            "text": "They must have identical standard deviations"
          },
          {
            "id": "f",
            "text": "The common factor is the derivative of the unique factor"
          }
        ],
        "correct_option": "b",
        "explanation": "A fundamental axiom of factor analysis is that unique factors $\\varepsilon_j$ represent random measurement error and specific variance that share zero covariance with the common latent factors ($E(\\xi_k \\varepsilon_j) = 0$)."
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
            "text": "$h_M^2 = 0.80 + 0.20 = 1.00$; Math has zero unique variance"
          },
          {
            "id": "b",
            "text": "$h_M^2 = 0.80^2 + 0.20^2 = 0.64 + 0.04 = 0.68$; 68% of Math grade variance is explained jointly by Quantitative and Verbal abilities"
          },
          {
            "id": "c",
            "text": "$h_M^2 = 0.80 \\times 0.20 = 0.16$; Math has 16% communality"
          },
          {
            "id": "d",
            "text": "$h_M^2 = 0.80^2 - 0.20^2 = 0.60$"
          },
          {
            "id": "e",
            "text": "$h_M^2 = 0.50$"
          },
          {
            "id": "f",
            "text": "$h_M^2 = \\sqrt{0.68} = 0.825$"
          }
        ],
        "correct_option": "b",
        "explanation": "Communality is the sum of squared loadings across all factors: $h_j^2 = \\lambda_{j1}^2 + \\lambda_{j2}^2 = 0.80^2 + 0.20^2 = 0.64 + 0.04 = 0.68$. This means common factors account for 68% of the variance, leaving 32% unique variance."
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
            "text": "Equal to 1.0"
          },
          {
            "id": "b",
            "text": "Identically zero"
          },
          {
            "id": "c",
            "text": "Equal to the unique variance"
          },
          {
            "id": "d",
            "text": "Equal to the mean correlation across all variables"
          },
          {
            "id": "e",
            "text": "Indeterminate because the matrix cannot be inverted"
          },
          {
            "id": "f",
            "text": "Equal to $-1.0$"
          }
        ],
        "correct_option": "b",
        "explanation": "Since $r_{jk} = \\sum_{l=1}^m \\lambda_{jl}\\lambda_{kl}$, if $\\lambda_{jl} = 0$ for all $l$, then $r_{jk} = 0$ for all $k$. In Factor Analysis, correlations exist purely through shared loadings on common factors."
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
            "text": "$r_{CH} = (0.60 \\times 0.30) + (0.15 \\times 0.82) = 0.180 + 0.123 = 0.303$"
          },
          {
            "id": "b",
            "text": "$r_{CH} = (0.60 \\times 0.15) + (0.30 \\times 0.82) = 0.090 + 0.246 = 0.336$"
          },
          {
            "id": "c",
            "text": "$r_{CH} = \\sqrt{0.60^2 + 0.82^2} = 1.016$"
          },
          {
            "id": "d",
            "text": "$r_{CH} = 0.60 + 0.30 + 0.15 + 0.82 = 1.87$"
          },
          {
            "id": "e",
            "text": "$r_{CH} = 0.60 \\times 0.82 = 0.492$"
          },
          {
            "id": "f",
            "text": "$r_{CH} = 0.15 \\times 0.30 = 0.045$"
          }
        ],
        "correct_option": "b",
        "explanation": "In a two-factor model, $r_{jk} = \\lambda_{j1}\\lambda_{k1} + \\lambda_{j2}\\lambda_{k2}$. For Chemistry ($C$) and History ($H$): $r_{CH} = \\lambda_{CQ}\\lambda_{HQ} + \\lambda_{CV}\\lambda_{HV} = (0.60)(0.15) + (0.30)(0.82) = 0.090 + 0.246 = 0.336$. This matches slide 21 of Chapter 3 exactly."
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
            "text": "$6.00$; all variance is common"
          },
          {
            "id": "b",
            "text": "$1.61 + 2.25 = 3.86$; the total amount of common variance explained by the two latent factors out of $6.0$ total variance"
          },
          {
            "id": "c",
            "text": "$2.25 - 1.61 = 0.64$; the net difference in verbal superiority"
          },
          {
            "id": "d",
            "text": "$1.61 \\times 2.25 = 3.6225$"
          },
          {
            "id": "e",
            "text": "$0.812$; the Kaiser-Meyer-Olkin sampling adequacy"
          },
          {
            "id": "f",
            "text": "$2.14$; the total unique error variance"
          }
        ],
        "correct_option": "b",
        "explanation": "Summing communalities equals summing factor eigenvalues: $\\sum h_j^2 = \\sum \\lambda_k = 1.61 + 2.25 = 3.86$. Since there are 6 standardized variables (total variance = 6.0), the common factors account for $3.86$ ($64.3\\%$) and total unique error accounts for $6.0 - 3.86 = 2.14$ ($35.7\\%$)."
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
            "text": "In FA, the latent factor causes the indicator values ($X = \\Lambda \\xi + \\varepsilon$), while in PCA, the indicators combine to form the component ($PC = w'X$)"
          },
          {
            "id": "b",
            "text": "In FA, indicators must be nonmetric nominal scales, while PCA uses metric scales"
          },
          {
            "id": "c",
            "text": "In FA, indicators have zero measurement error, while PCA assumes 100% error"
          },
          {
            "id": "d",
            "text": "Reflective indicators are used only in time-series analysis"
          },
          {
            "id": "e",
            "text": "There is no difference; formative and reflective are interchangeable synonyms"
          },
          {
            "id": "f",
            "text": "PCA is based on biological reflexes, while FA is based on mathematical reflection"
          }
        ],
        "correct_option": "a",
        "explanation": "As explained on slide 74 of Chapter 3: In FA, observed indicators are reflections of an unobservable latent trait (e.g. general intelligence causes grades). In PCA, observed indicators form an index or summary composite through a weighted sum ($PC = w'X$)."
      },
      {
        "id": "q_l6_12",
        "segment_id": "ch3-fa-theory",
        "order_index": 12,
        "difficulty": "hard",
        "question": "Suppose an analyst fits a 1-factor model to three variables: $X_1, X_2, X_3$. The empirical correlations are $r_{12} = 0.60$, $r_{13} = 0.40$, and $r_{23} = 0.24$. Can a single-factor model reproduce these correlations perfectly, and what is the estimated loading $\\lambda_1$?",
        "options": [
          {
            "id": "a",
            "text": "No, because $r_{23}$ must equal $r_{12} + r_{13}$"
          },
          {
            "id": "b",
            "text": "Yes, because $r_{12}r_{13}/r_{23} = (0.60 \\times 0.40)/0.24 = 0.24/0.24 = 1.0 = \\lambda_1^2 \\implies \\lambda_1 = 1.0$"
          },
          {
            "id": "c",
            "text": "No, because the correlation matrix has a determinant of zero"
          },
          {
            "id": "d",
            "text": "Yes, and $\\lambda_1 = 0.60$"
          },
          {
            "id": "e",
            "text": "No, because a 1-factor model requires all correlations to be identical"
          },
          {
            "id": "f",
            "text": "Yes, but $\\lambda_1$ is an imaginary number"
          }
        ],
        "correct_option": "b",
        "explanation": "In a 1-factor model, $r_{12} = \\lambda_1\\lambda_2$, $r_{13} = \\lambda_1\\lambda_3$, $r_{23} = \\lambda_2\\lambda_3$. Multiplying $r_{12}r_{13} / r_{23} = (\\lambda_1\\lambda_2)(\\lambda_1\\lambda_3)/(\\lambda_2\\lambda_3) = \\lambda_1^2$. Here, $(0.60)(0.40)/0.24 = 0.24/0.24 = 1.00 \\implies \\lambda_1 = 1.00$. Then $\\lambda_2 = 0.60$ and $\\lambda_3 = 0.40$. The reproduced $r_{23} = 0.60 \\times 0.40 = 0.24$, matching the observed data perfectly."
      }
    ],
    "flashcards": [
      {
        "id": "fc_l6_1",
        "segment_id": "ch3-fa-theory",
        "order_index": 1,
        "category": "Foundations",
        "front": "What is a **Latent Variable**, and how does Factor Analysis identify it?",
        "back": "An **unobservable construct** (e.g. intelligence, trust, brand image) that cannot be directly measured. FA identifies it by modeling the shared correlations among measurable manifest indicators."
      },
      {
        "id": "fc_l6_2",
        "segment_id": "ch3-fa-theory",
        "order_index": 2,
        "category": "History",
        "front": "What was **Spearman's (1904)** foundational hypothesis in developing Factor Analysis?",
        "back": "Student performance across diverse academic courses is intercorrelated because grades are driven by a single underlying trait: **General Intelligence ($I$)** plus course-specific aptitude."
      },
      {
        "id": "fc_l6_3",
        "segment_id": "ch3-fa-theory",
        "order_index": 3,
        "category": "Decomposition",
        "front": "How does total variance decompose for a standardized indicator in Factor Analysis?",
        "back": "$$\\text{Var}(x_j) = 1.0 = h_j^2 + \\psi_j$$\n- $h_j^2$: **Communality** (shared variance with common factors).\n- $\\psi_j$: **Unique variance** (specific factor trait + measurement error)."
      },
      {
        "id": "fc_l6_4",
        "segment_id": "ch3-fa-theory",
        "order_index": 4,
        "category": "Definitions",
        "front": "What is **Communality ($h_j^2$)**, and how is it calculated?",
        "back": "$$h_j^2 = \\sum_{k=1}^m \\lambda_{jk}^2$$\nThe sum of squared factor loadings across all extracted common factors. Higher values indicate more reliable indicators."
      },
      {
        "id": "fc_l6_5",
        "segment_id": "ch3-fa-theory",
        "order_index": 5,
        "category": "Loadings",
        "front": "What is the relationship between **Pattern Loadings** and **Structure Loadings** in orthogonal FA?",
        "back": "They are **identically equal**!\nPattern loadings are regression coefficients; structure loadings are correlations with factors. When factors are uncorrelated, both values match."
      },
      {
        "id": "fc_l6_6",
        "segment_id": "ch3-fa-theory",
        "order_index": 6,
        "category": "Correlations",
        "front": "How is the correlation between two indicators reproduced in an orthogonal factor model?",
        "back": "$$r_{jk} = \\sum_{l=1}^m \\lambda_{jl}\\lambda_{kl} = \\lambda_{j1}\\lambda_{k1} + \\dots + \\lambda_{jm}\\lambda_{km}$$\nCorrelations exist purely because variables share common latent factors."
      },
      {
        "id": "fc_l6_7",
        "segment_id": "ch3-fa-theory",
        "order_index": 7,
        "category": "Philosophy",
        "front": "What is the difference between **Reflective** indicators (FA) and **Formative** indicators (PCA)?",
        "back": "- **Reflective (FA)**: The latent factor causes the indicator values ($X = \\Lambda\\xi + \\varepsilon$).\n- **Formative (PCA)**: The indicators combine to form the composite index ($PC = w'X$)."
      },
      {
        "id": "fc_l6_8",
        "segment_id": "ch3-fa-theory",
        "order_index": 8,
        "category": "Independence",
        "front": "What happens to the correlation between indicators if the common latent factor is removed?",
        "back": "The **partial correlation drops to zero**.\nOnce the common cause is held constant, there is no remaining mechanism linking the indicators."
      }
    ]
  },
  {
    "segment": {
      "id": "ch3-fa-extraction",
      "discipline_id": "data-analysis",
      "title": "Factor Analysis: Indeterminacies & Extraction Methods",
      "subtitle": "Factor rotation indeterminacy, communality circularity, PCF vs PAF, and the RMSR criterion.",
      "order_index": 7,
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
            "text": "Rotating factors always causes eigenvalues to become negative"
          },
          {
            "id": "b",
            "text": "Infinitely many orthogonal rotations reproduce the exact same correlation matrix and total communalities, meaning the mathematical factor solution is not unique"
          },
          {
            "id": "c",
            "text": "Factors cannot be rotated if sample size is under 200"
          },
          {
            "id": "d",
            "text": "Rotation converts metric variables into categorical dummy variables"
          },
          {
            "id": "e",
            "text": "Rotation increases the Root Mean Square Residual"
          },
          {
            "id": "f",
            "text": "Rotation is only possible when all correlations are negative"
          }
        ],
        "correct_option": "b",
        "explanation": "Because $\\Lambda^* (\\Lambda^*) = (\\Lambda T)(T' \\Lambda') = \\Lambda \\Lambda', any orthogonal rotation matrix $T$ yields identical reproduced correlations and total communalities, meaning infinitely many mathematically equivalent solutions exist."
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
            "text": "Zero ($0.0$)"
          },
          {
            "id": "b",
            "text": "One ($1.0$)"
          },
          {
            "id": "c",
            "text": "Equal to each variable’s sample standard deviation"
          },
          {
            "id": "d",
            "text": "Equal to the Pearson correlation with $X_1$"
          },
          {
            "id": "e",
            "text": "0.50"
          },
          {
            "id": "f",
            "text": "Equal to $1 / p$"
          }
        ],
        "correct_option": "b",
        "explanation": "In PCF, prior estimates of communalities are set to 1.0 (the diagonal of the full correlation matrix), assuming no unique factors exist upfront."
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
            "text": "The average distance between observations and the centroid"
          },
          {
            "id": "b",
            "text": "The overall average magnitude of the off-diagonal residual correlations between observed and model-reproduced correlation matrices"
          },
          {
            "id": "c",
            "text": "The proportion of explained variance of the first factor"
          },
          {
            "id": "d",
            "text": "The number of iterations required for convergence"
          },
          {
            "id": "e",
            "text": "The ratio of quantitative to verbal loadings"
          },
          {
            "id": "f",
            "text": "The determinant of the anti-image correlation matrix"
          }
        ],
        "correct_option": "b",
        "explanation": "RMSR computes the square root of the average squared off-diagonal elements in the residual correlation matrix ($R - \\hat{R}$). A small RMSR indicates that the factor model closely reproduces observed correlations."
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
            "text": "RMSR should be greater than 1.0"
          },
          {
            "id": "b",
            "text": "RMSR should be as small as possible, generally below 0.08 (or 0.05 for outstanding fit)"
          },
          {
            "id": "c",
            "text": "RMSR must equal exactly the leading eigenvalue"
          },
          {
            "id": "d",
            "text": "RMSR should equal the degrees of freedom"
          },
          {
            "id": "e",
            "text": "RMSR must be negative"
          },
          {
            "id": "f",
            "text": "RMSR should be between 0.50 and 0.80"
          }
        ],
        "correct_option": "b",
        "explanation": "Residual correlations reflect unexplained association. A smaller RMSR indicates better fit; values below 0.08 are widely accepted as indicating a good factor structure (in slide 43, RMSR = 0.078 is judged small)."
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
            "text": "By setting all unique error variances to 1.0 permanently"
          },
          {
            "id": "b",
            "text": "By using an iterative algorithm that repeatedly updates diagonal communality estimates in the correlation matrix until changes drop below a convergence threshold"
          },
          {
            "id": "c",
            "text": "By converting metric variables into nonmetric categories"
          },
          {
            "id": "d",
            "text": "By eliminating all variables with negative loadings"
          },
          {
            "id": "e",
            "text": "By inverting the residual matrix using Ordinary Least Squares"
          },
          {
            "id": "f",
            "text": "By computing the Mahalanobis distance between factors"
          }
        ],
        "correct_option": "b",
        "explanation": "PAF inserts initial communality estimates into the diagonal of $R$, extracts factors, computes revised communalities from the new loadings, and repeats this loop until communalities stabilize (converge)."
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
            "text": "Because PCF cannot produce eigenvalues"
          },
          {
            "id": "b",
            "text": "Because PCF assumes prior communalities are 1.0 and does not separate common variance from unique error variance prior to extraction; it is mathematically identical to PCA"
          },
          {
            "id": "c",
            "text": "Because PCF requires sample sizes greater than 100,000"
          },
          {
            "id": "d",
            "text": "Because PCF cannot be executed in SAS or Python"
          },
          {
            "id": "e",
            "text": "Because PCF produces oblique correlated factors"
          },
          {
            "id": "f",
            "text": "Because PCF ignores the degrees of freedom"
          }
        ],
        "correct_option": "b",
        "explanation": "As slide 48 explicitly states: \"technically speaking, PCF is simply PCA and not really FA.\" By assuming communalities are 1.0 upfront, it assumes all variance is common, only relegating variance from dropped components to \"error\" after the fact."
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
            "text": "The computer processor has run out of memory"
          },
          {
            "id": "b",
            "text": "The data likely do not have a stable underlying common factor structure, or communality estimates are oscillating/diverging"
          },
          {
            "id": "c",
            "text": "The variables are measured in identical physical units"
          },
          {
            "id": "d",
            "text": "All variables have perfect communality ($h^2 = 1.0$)"
          },
          {
            "id": "e",
            "text": "The RMSR has reached exactly zero"
          },
          {
            "id": "f",
            "text": "The analysis should be switched to a nominal scale"
          }
        ],
        "correct_option": "b",
        "explanation": "Slide 64 notes: \"a high number of required iterations can mean that data is not appropriate for FA.\" Divergence or slow convergence often indicates unstable communality estimates or a poorly conditioned correlation matrix."
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
            "text": "$R_{\\text{res}} = R + \\hat{R}$; values represent total sample variance"
          },
          {
            "id": "b",
            "text": "$R_{\\text{res}} = R - \\hat{R}$; off-diagonal values represent correlations between variables that remain unexplained by the extracted common factors"
          },
          {
            "id": "c",
            "text": "$R_{\\text{res}} = R \\times \\hat{R}^{-1}$; values represent the eigenvalues"
          },
          {
            "id": "d",
            "text": "$R_{\\text{res}}$ is the covariance of the component scores"
          },
          {
            "id": "e",
            "text": "Off-diagonal values represent the KMO measure of sampling adequacy"
          },
          {
            "id": "f",
            "text": "Off-diagonal values represent the degrees of freedom of each variable"
          }
        ],
        "correct_option": "b",
        "explanation": "The residual matrix subtracts reproduced correlations $\\hat{R} = \\Lambda\\Lambda'$ from observed correlations $R$. The off-diagonal entries represent leftover, unexplained correlations between indicators."
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
            "text": "Model 1: $h^2 = 0.80 + 0.20 = 1.00$; Model 2: $h^2 = 0.667 - 0.484 = 0.183$"
          },
          {
            "id": "b",
            "text": "Model 1: $h^2 = 0.80^2 + 0.20^2 = 0.64 + 0.04 = 0.68$; Model 2: $h^2 = 0.667^2 + (-0.484)^2 = 0.4449 + 0.2343 \\approx 0.68$"
          },
          {
            "id": "c",
            "text": "Communality cannot be compared between rotated models"
          },
          {
            "id": "d",
            "text": "Model 1: $h^2 = 0.64$; Model 2: $h^2 = 0.45$"
          },
          {
            "id": "e",
            "text": "Both models have communality equal to $0.078$"
          },
          {
            "id": "f",
            "text": "Model 2 has higher communality because of the negative sign"
          }
        ],
        "correct_option": "b",
        "explanation": "As proven on slides 28-32 of Chapter 3: under orthogonal rotation, total communality is strictly invariant: $h_M^2(\\text{Model 1}) = 0.64 + 0.04 = 0.68$, and $h_M^2(\\text{Model 2}) = 0.667^2 + (-0.484)^2 = 0.445 + 0.234 = 0.679 \\approx 0.68$. Both solutions explain identical total variance for variable $M$."
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
            "text": "6"
          },
          {
            "id": "b",
            "text": "12"
          },
          {
            "id": "c",
            "text": "15"
          },
          {
            "id": "d",
            "text": "36"
          },
          {
            "id": "e",
            "text": "30"
          },
          {
            "id": "f",
            "text": "21"
          }
        ],
        "correct_option": "c",
        "explanation": "A symmetric $6 \\times 6$ matrix has $6 \\times 6 = 36$ total elements, 6 of which are diagonal entries. The remaining 30 off-diagonal elements form two symmetric triangles of $30 / 2 = 15$ unique pairwise correlations ($6 \\times 5 / 2 = 15$)."
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
            "text": "The sample means of the variables"
          },
          {
            "id": "b",
            "text": "The current estimates of communalities ($h_j^2$) for each variable"
          },
          {
            "id": "c",
            "text": "The eigenvalues from the preceding step"
          },
          {
            "id": "d",
            "text": "The RMSR value"
          },
          {
            "id": "e",
            "text": "Zeros, to eliminate all diagonal variance"
          },
          {
            "id": "f",
            "text": "The anti-image partial correlations"
          }
        ],
        "correct_option": "b",
        "explanation": "The full correlation matrix has 1.0 on the diagonal (total variance). The \"reduced correlation matrix\" replaces the 1.0s with the estimated communalities $h_j^2$ (shared variance), so extraction decomposes only common variance."
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
            "text": "Because Model 1 was estimated using Python while Model 2 was estimated using SAS"
          },
          {
            "id": "b",
            "text": "Because Model 1 exhibits a \"simple structure\" that aligns meaningfully with theoretical constructs (e.g. separating Quantitative from Verbal subjects), whereas Model 2 has confounding bipolar loadings that obscure theoretical interpretation"
          },
          {
            "id": "c",
            "text": "Because Model 1 has a larger sample size"
          },
          {
            "id": "d",
            "text": "Because Model 1 has higher eigenvalues"
          },
          {
            "id": "e",
            "text": "Because Model 1 has zero unique error variance"
          },
          {
            "id": "f",
            "text": "Because Model 2 violates the metric axioms of distance"
          }
        ],
        "correct_option": "b",
        "explanation": "While both models are mathematically identical in explaining data, Model 1 achieves simple structure (Math/Physics/Chemistry load heavily on Q and near zero on V; English/History/French load heavily on V and near zero on Q). This makes Model 1 readily interpretable as Quantitative vs Verbal intelligence."
      }
    ],
    "flashcards": [
      {
        "id": "fc_l7_1",
        "segment_id": "ch3-fa-extraction",
        "order_index": 1,
        "category": "Indeterminacy",
        "front": "What is the **Factor Rotation Indeterminacy** in Factor Analysis?",
        "back": "For any orthogonal rotation matrix $T$, $\\Lambda^* = \\Lambda T$ reproduces the exact same correlation matrix $\\hat{R} = \\Lambda\\Lambda'$ and identical communalities. Infinitely many mathematically equivalent solutions exist."
      },
      {
        "id": "fc_l7_2",
        "segment_id": "ch3-fa-extraction",
        "order_index": 2,
        "category": "Indeterminacy",
        "front": "What is the **Communality Estimation Circularity** problem?",
        "back": "To estimate factor loadings, prior communalities are needed; but to calculate communalities, factor loadings are needed. Solved via iterative algorithms like PAF."
      },
      {
        "id": "fc_l7_3",
        "segment_id": "ch3-fa-extraction",
        "order_index": 3,
        "category": "Extraction",
        "front": "What is **Principal Components Factoring (PCF)**?",
        "back": "Initial communalities are set to $1.0$ (standard PCA on correlation matrix $R$). The $m$ retained components are relabeled as factors. It is essentially PCA disguised as Factor Analysis."
      },
      {
        "id": "fc_l7_4",
        "segment_id": "ch3-fa-extraction",
        "order_index": 4,
        "category": "Extraction",
        "front": "How does **Principal Axis Factoring (PAF)** work?",
        "back": "An iterative procedure that replaces the diagonal of $R$ with estimated communalities ($R_r$), extracts factors, re-estimates communalities, and repeats until convergence ($\\Delta < 0.001$)."
      },
      {
        "id": "fc_l7_5",
        "segment_id": "ch3-fa-extraction",
        "order_index": 5,
        "category": "Diagnostics",
        "front": "What is the **Residual Correlation Matrix ($R_{\\text{res}}$)**?",
        "back": "$$R_{\\text{res}} = R - \\hat{R}$$\nThe difference between observed correlations $R$ and model-reproduced correlations $\\hat{R} = \\Lambda\\Lambda'$. Off-diagonal elements should be near zero."
      },
      {
        "id": "fc_l7_6",
        "segment_id": "ch3-fa-extraction",
        "order_index": 6,
        "category": "Diagnostics",
        "front": "What is the **Root Mean Square Residual (RMSR)** formula and benchmark?",
        "back": "$$\\text{RMSR} = \\sqrt{\\frac{\\sum \\sum_{j < i} \\text{res}_{ij}^2}{p(p - 1)/2}}$$\nMeasures average residual correlation. Values **below 0.08** indicate a good factor model fit."
      },
      {
        "id": "fc_l7_7",
        "segment_id": "ch3-fa-extraction",
        "order_index": 7,
        "category": "Invariance",
        "front": "What quantities remain strictly invariant under orthogonal factor rotation?",
        "back": "1. Total communality ($h_j^2$) of each variable.\n2. Total unique variance ($\\psi_j$) of each variable.\n3. The model-reproduced correlation matrix ($\\hat{R}$)."
      },
      {
        "id": "fc_l7_8",
        "segment_id": "ch3-fa-extraction",
        "order_index": 8,
        "category": "Comparison",
        "front": "When do PCF and PAF yield nearly identical factor solutions?",
        "back": "When the dataset has a **large number of variables ($p > 30$)** and **high communalities ($h^2 > 0.60$)**. With fewer variables, differences become substantial."
      }
    ]
  },
  {
    "segment": {
      "id": "ch3-fa-rotation-evaluation",
      "discipline_id": "data-analysis",
      "title": "Factor Analysis: Sampling Adequacy, Rotations & FA vs PCA",
      "subtitle": "KMO index, anti-image matrices, Varimax vs Quartimax, oblique rotations, and formative vs reflective models.",
      "order_index": 8,
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
            "text": "Unacceptable; factor analysis should be abandoned"
          },
          {
            "id": "b",
            "text": "Miserable; data require logarithmic transformation"
          },
          {
            "id": "c",
            "text": "Meritorious; data are well-suited for factor analysis"
          },
          {
            "id": "d",
            "text": "Zero communality"
          },
          {
            "id": "e",
            "text": "Perfect multicollinearity"
          },
          {
            "id": "f",
            "text": "Indicative of non-normal skewness"
          }
        ],
        "correct_option": "c",
        "explanation": "According to Kaiser's established criteria: $\\ge 0.90$ is Marvelous, $0.80 - 0.89$ is Meritorious, $0.70 - 0.79$ is Middling, $0.60 - 0.69$ is Mediocre, and $< 0.50$ is Unacceptable. A value of $0.81$ is Meritorious."
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
            "text": "Quartimax rotation"
          },
          {
            "id": "b",
            "text": "Varimax rotation"
          },
          {
            "id": "c",
            "text": "Promax rotation"
          },
          {
            "id": "d",
            "text": "Direct Oblimin rotation"
          },
          {
            "id": "e",
            "text": "Equamax rotation"
          },
          {
            "id": "f",
            "text": "Gram-Schmidt rotation"
          }
        ],
        "correct_option": "b",
        "explanation": "Varimax rotation (Kaiser, 1958) is the most popular orthogonal rotation method. It maximizes the variance of squared loadings across columns, making loadings as close as possible to 1.0 (or -1.0) and 0.0."
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
            "text": "Orthogonal rotations enforce a 90-degree angle so factors remain uncorrelated, while Oblique rotations allow common factors to correlate"
          },
          {
            "id": "b",
            "text": "Orthogonal rotations eliminate communalities, while Oblique rotations double them"
          },
          {
            "id": "c",
            "text": "Orthogonal rotations only work in SAS, while Oblique rotations only work in Python"
          },
          {
            "id": "d",
            "text": "Orthogonal rotations require nonmetric nominal variables"
          },
          {
            "id": "e",
            "text": "Orthogonal rotations reduce sample size by half"
          },
          {
            "id": "f",
            "text": "Oblique rotations always produce negative eigenvalues"
          }
        ],
        "correct_option": "a",
        "explanation": "Orthogonal rotations (Varimax, Quartimax) maintain strict 90-degree perpendicularity between factor axes, enforcing zero factor correlation. Oblique rotations (Promax, Oblimin) allow axes to intersect at arbitrary angles, reflecting real-world correlation between latent traits."
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
            "text": "EFA is for small samples, while CFA is for large samples"
          },
          {
            "id": "b",
            "text": "EFA explores data without strong prior theory to discover factors, while CFA tests a pre-specified theoretical factor structure"
          },
          {
            "id": "c",
            "text": "EFA is metric, while CFA is nonmetric"
          },
          {
            "id": "d",
            "text": "EFA requires SAS, while CFA requires Excel"
          },
          {
            "id": "e",
            "text": "EFA uses correlation, while CFA uses covariance"
          },
          {
            "id": "f",
            "text": "There is no difference; they are alternative names for PCA"
          }
        ],
        "correct_option": "b",
        "explanation": "In EFA, the researcher has no strict prior model and allows the data to reveal the number of factors and loading patterns. In CFA, the researcher specifies exact factor-indicator links upfront based on theory and empirically tests the model fit."
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
            "text": "Because it forces all communalities to equal zero"
          },
          {
            "id": "b",
            "text": "Because it simplifies rows (variables) rather than columns (factors), tending to produce one massive general factor where all variables load heavily"
          },
          {
            "id": "c",
            "text": "Because it requires factors to be oblique"
          },
          {
            "id": "d",
            "text": "Because it inverts the sign of all eigenvalues"
          },
          {
            "id": "e",
            "text": "Because it violates the triangle inequality"
          },
          {
            "id": "f",
            "text": "Because it is mathematically impossible to compute on more than 3 variables"
          }
        ],
        "correct_option": "b",
        "explanation": "Quartimax maximizes the variance of squared loadings across rows. Because the first factor accounts for the largest proportion of total variance, Quartimax often causes almost all variables to load heavily on Factor 1, creating a single general factor."
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
            "text": "$a_{jk}$ are the eigenvalues; they should all be greater than 10.0"
          },
          {
            "id": "b",
            "text": "$a_{jk}$ are anti-image partial correlations; they should be small (near zero), so that the sum of squared partial correlations in the denominator is small relative to $r_{jk}^2$"
          },
          {
            "id": "c",
            "text": "$a_{jk}$ are the degrees of freedom; they should equal $n - 1$"
          },
          {
            "id": "d",
            "text": "$a_{jk}$ are sample means; they must equal 0.0"
          },
          {
            "id": "e",
            "text": "$a_{jk}$ are the factor scores of Customer A"
          },
          {
            "id": "f",
            "text": "$a_{jk}$ are Euclidean distances between variables"
          }
        ],
        "correct_option": "b",
        "explanation": "$a_{jk}$ are the anti-image correlations (negative partial correlations controlling for all other variables). If common factors drive associations, partial correlations should vanish, making the denominator close to the numerator and driving KMO toward 1.0."
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
            "text": "Pattern matrix contains eigenvalues; structure matrix contains eigenvectors"
          },
          {
            "id": "b",
            "text": "Pattern matrix contains direct regression coefficients of factors on indicators; structure matrix contains simple Pearson correlations between factors and indicators"
          },
          {
            "id": "c",
            "text": "Pattern matrix is for metric scales; structure matrix is for nominal scales"
          },
          {
            "id": "d",
            "text": "Pattern matrix contains residuals; structure matrix contains communalities"
          },
          {
            "id": "e",
            "text": "Pattern matrix is computed before extraction; structure matrix is computed after"
          },
          {
            "id": "f",
            "text": "They are identical matrices with different signs"
          }
        ],
        "correct_option": "b",
        "explanation": "Because oblique factors correlate, the direct unique contribution of a factor (pattern loading, a standardized regression beta) differs from the total linear association (structure loading, the bivariate correlation between indicator and factor)."
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
            "text": "Double the sample size and re-estimate immediately"
          },
          {
            "id": "b",
            "text": "Consider dropping this variable from the Factor Analysis because its individual sampling adequacy is unacceptable ($< 0.50$)"
          },
          {
            "id": "c",
            "text": "Apply Quartimax rotation to force its communality to 1.0"
          },
          {
            "id": "d",
            "text": "Recode the variable into an ordinal scale"
          },
          {
            "id": "e",
            "text": "No action; individual KMO values are purely decorative"
          },
          {
            "id": "f",
            "text": "Subtract the variable from the centroid"
          }
        ],
        "correct_option": "b",
        "explanation": "As slide 62 notes: \"using individual KMO, one can delete those variables in which this value is lower.\" An individual KMO below 0.50 is classified as Unacceptable, indicating the variable shares insufficient common variance with the remaining indicators."
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
            "text": "Factor Analysis, because creditworthiness is a nonmetric ordinal variable"
          },
          {
            "id": "b",
            "text": "PCA, because the objective is data reduction and formative index creation (combining indicators into an optimal composite index explaining maximum observed variance)"
          },
          {
            "id": "c",
            "text": "Correspondence Analysis, because all banking indicators are continuous"
          },
          {
            "id": "d",
            "text": "Factor Analysis, because credit scoring requires identifying unobservable psychological constructs"
          },
          {
            "id": "e",
            "text": "Neither; only Multidimensional Scaling can be used for banking"
          },
          {
            "id": "f",
            "text": "PCA, because PCA eliminates the need for degrees of freedom"
          }
        ],
        "correct_option": "b",
        "explanation": "In credit scoring, debt, income, and delinquencies combine to form an index (formative perspective). The goal is mathematical variance summarization and dimension reduction, making PCA the proper tool. Factor Analysis would assume that an unobservable \"creditworthiness\" trait generates debt and delinquencies as reflective symptoms."
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
            "text": "Because survey items are reflective indicators of an unobservable latent construct (\"Trust\"), and each item contains specific measurement error that must be separated from common variance"
          },
          {
            "id": "b",
            "text": "Because PCA cannot analyze survey items rated on Likert scales"
          },
          {
            "id": "c",
            "text": "Because Factor Analysis guarantees 100% explained total variance"
          },
          {
            "id": "d",
            "text": "Because trust can only be measured using Euclidean distance"
          },
          {
            "id": "e",
            "text": "Because PCA produces oblique components by default"
          },
          {
            "id": "f",
            "text": "Because psychological constructs always have eigenvalues equal to 1.0"
          }
        ],
        "correct_option": "a",
        "explanation": "Trust is an unobservable latent mental state. The survey questions are reflective manifestations of that trait. Each question contains unique wording error and specific variance. Factor Analysis separates this unique error $\\psi_j$ from the shared common factor variance $h_j^2$."
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
            "text": "When all pairwise bivariate correlations $r_{jk}$ are zero"
          },
          {
            "id": "b",
            "text": "When the anti-image partial correlations $a_{jk}$ approach zero relative to the zero-order correlations ($a_{jk}^2 \\ll r_{jk}^2$), indicating that common factors account for virtually all shared relationships"
          },
          {
            "id": "c",
            "text": "When the number of factors equals the number of observations $n$"
          },
          {
            "id": "d",
            "text": "When the determinant of the correlation matrix is zero"
          },
          {
            "id": "e",
            "text": "When all variables have identical variances in Covariance PCA"
          },
          {
            "id": "f",
            "text": "When the RMSR equals 1.0"
          }
        ],
        "correct_option": "b",
        "explanation": "In the KMO formula, $\\text{KMO} = \\frac{\\sum r^2}{\\sum r^2 + \\sum a^2}$. If partial correlations $a_{jk} \\to 0$, then $\\sum a^2 \\to 0$, so $\\text{KMO} \\to \\frac{\\sum r^2}{\\sum r^2 + 0} = 1.00$. This indicates that zero-order correlations are completely accounted for by the underlying factors."
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
            "text": "PCA on covariance matrix; Quartimax rotation; Mean Square Analysis; raw residuals"
          },
          {
            "id": "b",
            "text": "Principal Axis Factoring (Iterated Principal Factor); Varimax orthogonal rotation; Kaiser's Measure of Sampling Adequacy (KMO); Residual correlation matrix and RMSR"
          },
          {
            "id": "c",
            "text": "Maximum Likelihood Factoring; Oblique Promax; Multiple Scaled ANOVA; regression scores"
          },
          {
            "id": "d",
            "text": "Alpha factoring; no rotation; Mean Standardized Association; Mahalanobis distance"
          },
          {
            "id": "e",
            "text": "Correspondence analysis; Chi-square rotation; Multivariate Sampling Algorithm; eigenvalues"
          },
          {
            "id": "f",
            "text": "Ordinary least squares regression; Durbin-Watson test; collinearity diagnostics"
          }
        ],
        "correct_option": "b",
        "explanation": "As shown on slide 51 of Chapter 3: `Method=prinit` specifies iterated principal axis factoring (PAF); `Rotate=varimax` performs Varimax orthogonal rotation; `MSA` requests Kaiser's Measure of Sampling Adequacy (overall and individual KMO); `Residuals` requests the residual correlation matrix and RMSR."
      }
    ],
    "flashcards": [
      {
        "id": "fc_l8_1",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 1,
        "category": "Diagnostics",
        "front": "What is the **Kaiser-Meyer-Olkin (KMO)** index, and what does it measure?",
        "back": "$$\\text{KMO} = \\frac{\\sum r^2}{\\sum r^2 + \\sum a^2}$$\nMeasures sampling adequacy and data suitability for Factor Analysis by comparing zero-order correlations to anti-image partial correlations."
      },
      {
        "id": "fc_l8_2",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 2,
        "category": "Benchmarks",
        "front": "What are Kaiser's benchmarks for evaluating the **KMO index**?",
        "back": "- $\\ge 0.90$: Marvelous\n- $0.80 - 0.89$: Meritorious\n- $0.70 - 0.79$: Middling\n- $0.60 - 0.69$: Mediocre (tolerable minimum)\n- $< 0.50$: Unacceptable (abort FA)."
      },
      {
        "id": "fc_l8_3",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 3,
        "category": "Diagnostics",
        "front": "What is the **Anti-Image Correlation Matrix**, and what should its off-diagonal values be?",
        "back": "Contains negative partial correlations between variables controlling for all others.\nFor good factor data, off-diagonal values should be **very small (near zero)**."
      },
      {
        "id": "fc_l8_4",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 4,
        "category": "Rotations",
        "front": "What is the objective of **Varimax Rotation**, and why is it preferred?",
        "back": "Simplifies **columns (factors)** by maximizing the variance of squared loadings. Pushes loadings toward $\\pm 1.0$ or $0.0$, creating clear, distinct factor groupings."
      },
      {
        "id": "fc_l8_5",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 5,
        "category": "Rotations",
        "front": "What is the main drawback of **Quartimax Rotation**?",
        "back": "It simplifies **rows (variables)** and tends to create one massive **general factor** where all variables load heavily, hindering multi-factor interpretation."
      },
      {
        "id": "fc_l8_6",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 6,
        "category": "Rotations",
        "front": "When should an analyst use **Oblique Rotations** (Promax, Oblimin)?",
        "back": "When underlying theoretical constructs are naturally expected to correlate in the real world (e.g. quantitative and verbal abilities)."
      },
      {
        "id": "fc_l8_7",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 7,
        "category": "Comparison",
        "front": "Summarize the core differences between **PCA** and **Factor Analysis**.",
        "back": "- **PCA**: Analyzes total observed variance; formative index creation ($PC = w'X$); mathematical rotation.\n- **FA**: Analyzes shared common variance ($h^2$); reflective latent modeling ($X = \\Lambda\\xi + \\varepsilon$); estimates unique error."
      },
      {
        "id": "fc_l8_8",
        "segment_id": "ch3-fa-rotation-evaluation",
        "order_index": 8,
        "category": "Comparison",
        "front": "What is the difference between **Exploratory (EFA)** and **Confirmatory (CFA)** Factor Analysis?",
        "back": "- **EFA**: Data-driven search to discover factor structure without prior constraints.\n- **CFA**: Theory-driven hypothesis test of an explicit pre-specified factor loading model using SEM."
      }
    ]
  }
];
