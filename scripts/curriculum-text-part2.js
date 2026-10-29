import fs from 'fs';

function cleanMarkdown(md) {
  md = md.replace(/\n---\n/g, '\n\n');
  return md;
}

// LEVEL 5 NARRATIVE
export const l5Summary = cleanMarkdown(`# PCA: Component Interpretation, Loadings, Scores & Retention Diagnostics

## 1. Four Quantities That Must Never Be Confused
In multivariate statistics, interpreting PCA requires distinguishing four closely related but mathematically distinct quantities:

### Eigenvalue (\\lambda_i)
The eigenvalue represents the variance of the $i$-th principal component: $\\text{Var}(PC_i) = \\lambda_i$. In our customer study, the leading eigenvalue is $\\lambda_1 = 38.576$.

### Eigenvector Weights (w_i)
The eigenvector contains the normalized directional coefficients used to construct the linear combination from centered variables: $PC_i = w_{i1} x_1 + \\dots + w_{ip} x_p$, satisfying $\\sum_j w_{ij}^2 = 1$. For $PC_1$, the weight vector is $w_1 = (0.728238, 0.685324)^T$.

### Component Score (t_{hi})
The component score is the actual numerical coordinate of observation $h$ when projected onto the $i$-th principal axis: $t_{hi} = w_i^T x_h$. Customer A has a $PC_1$ score of $9.253$.

### Factor Loading (l_{ji})
A factor loading is the Pearson correlation between original variable $X_j$ and principal component $PC_i$:
$$l_{ji} = \\text{Corr}(X_j, PC_i) = w_{ij} \\frac{\\sqrt{\\lambda_i}}{s_j}$$
When data are standardized (Correlation PCA, where $s_j = 1$), the loading simplifies directly to:
$$l_{ji} = w_{ij} \\sqrt{\\lambda_i}$$
For example, the loading of Income on $PC_1$ is $0.728238 \\times \\frac{\\sqrt{38.576}}{4.805} = 0.941$, indicating that Income shares an extremely high positive correlation ($r = 0.941$) with $PC_1$.

## 2. Retention Criteria: How Many Components to Keep?
Retaining all $p$ components defeats the purpose of dimension reduction. Analysts rely on three complementary stopping rules:

### Kaiser Criterion (Eigenvalue-Greater-Than-One Rule)
In Correlation PCA, retain only components with eigenvalues $\\lambda_i > 1.0$. Because each standardized input variable has a variance of $1.0$, a component with an eigenvalue below $1.0$ accounts for less variation than a single original variable and should be discarded. (Note: do not apply the cutoff of 1.0 to Covariance PCA, where total variance is not $p$).

### Cattell Scree Test (Elbow Rule)
The Scree plot displays ordered eigenvalues on the vertical axis against the component number on the horizontal axis. Analysts look for an elbow or point of inflection where the steep descent transitions into a flat, horizontal slope of residual variation (scree). Components appearing before the elbow are retained.

### Cumulative Percentage of Explained Variance
Analysts specify a minimum variance threshold (such as $70\\%$, $80\\%$, or $90\\%$), retaining the smallest number of components $k$ required to reach that threshold.

## 3. Real-World Application: Portuguese Regional Assessment
To see applied PCA in action, consider a study comparing 7 Portuguese administrative regions across 5 socio-economic indicators: Population Density (DEN), Gross Domestic Product per capita (GDP), Doctors per 1,000 residents (MED), Hospital beds per 1,000 residents (HOS), and Public libraries per 10,000 residents (BIB).

The extracted factor loadings reveal clear substantive patterns:
- First Principal Component ($PC_1$ - Public Infrastructure: Health & Culture): Has very high positive correlations with MED ($0.957$), HOS ($0.933$), and BIB ($0.942$). It reflects regional investment in healthcare and social infrastructure.
- Second Principal Component ($PC_2$ - Economic Wealth & Density): Has high positive correlations with GDP ($0.750$) and Density ($0.670$), with slightly negative correlations on healthcare indicators. It reflects urban concentration and economic productivity.

Plotting regions in the 2D coordinate space of ($PC_1, PC_2$) reveals that Lisbon (LVT) scores high on both dimensions, Madeira scores high on economic wealth but moderate on health infrastructure, and Alentejo exhibits a rural public infrastructure profile.

## 4. Software Syntax in Practice
In SAS, PCA is executed using:
\`\`\`text
proc princomp data=mydata plots=scree;
   var DEN GDP MED HOS BIB;
run;
\`\`\`
In Python, PCA is implemented via scikit-learn:
\`\`\`python
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA

X_scaled = StandardScaler().fit_transform(X)
pca = PCA(n_components=2)
scores = pca.fit_transform(X_scaled)
loadings = pca.components_.T * np.sqrt(pca.explained_variance_)
\`\`\``);

// LEVEL 6 NARRATIVE
export const l6Summary = cleanMarkdown(`# Factor Analysis: Latent Constructs & Variance Decomposition

## 1. Foundations of Factor Analysis
Factor Analysis (FA) originated in psychological measurement when Charles Spearman (1904) observed that schoolchildren who excelled in classics also tended to excel in mathematics, French, and music. Spearman proposed that these observed correlations were driven by an underlying, unobservable general intelligence factor ($g$).

While Principal Components Analysis (PCA) is an empirical data-reduction technique that constructs linear combinations of observed variables, Factor Analysis is a reflective latent variable model that assumes unobservable underlying constructs cause the observed responses.

### Formative vs. Reflective Models
- Formative Model (PCA): Observed variables combine to form composite indices. Arrow points from indicators to the component.
- Reflective Model (FA): Latent factors give rise to the observed indicator scores. Arrow points from the latent factor to the indicators.

## 2. The Classical Orthogonal Factor Model
Let $x_j$ denote the standardized response on observed variable $j$ (with $E(x_j) = 0$ and $\\text{Var}(x_j) = 1$). The classical orthogonal factor model expresses each variable as a linear function of $m$ common latent factors $\\xi_1, \\dots, \\xi_m$ plus a unique factor $\\varepsilon_j$:
$$x_j = \\lambda_{j1}\\xi_1 + \\lambda_{j2}\\xi_2 + \\dots + \\lambda_{jm}\\xi_m + \\varepsilon_j \\quad (j = 1, \\dots, p)$$
where $\\lambda_{jk}$ are the factor loadings (regression weights of indicator $j$ on latent factor $k$).

The model rests on three fundamental assumptions:
1. Common factors are standardized and mutually uncorrelated: $E(\\xi_k) = 0$, $\\text{Var}(\\xi_k) = 1$, and $\\text{Cov}(\\xi_k, \\xi_l) = 0$ for $k \\neq l$.
2. Unique error factors are uncorrelated with common factors: $\\text{Cov}(\\varepsilon_j, \\xi_k) = 0$.
3. Unique errors are mutually uncorrelated across variables: $\\text{Cov}(\\varepsilon_j, \\varepsilon_k) = 0$ for $j \\neq k$.

## 3. Total Variance Decomposition: Communality vs. Uniqueness
Because the common factors and unique errors are mutually uncorrelated, the total variance of standardized variable $x_j$ decomposes cleanly into two parts:
$$\\text{Var}(x_j) = 1.0 = h_j^2 + \\psi_j$$

### Communality (h_j^2)
Communality represents the proportion of variable $j$'s variance that is explained by the $m$ common latent factors:
$$h_j^2 = \\lambda_{j1}^2 + \\lambda_{j2}^2 + \\dots + \\lambda_{jm}^2 = \\sum_{k=1}^m \\lambda_{jk}^2$$
Communality values range between 0 and 1. A high communality (e.g. $h_j^2 = 0.85$) indicates that the common factors capture $85\\%$ of that variable's variation.

### Uniqueness (\\psi_j)
Uniqueness represents the proportion of variance specific to variable $j$ that cannot be accounted for by the common factors:
$$\\psi_j = 1 - h_j^2$$
Uniqueness comprises two components: specific variance (true systematic variation that is unique to that individual indicator) and random measurement error.

## 4. Reproducing the Correlation Matrix
A central feature of the orthogonal factor model is that it reproduces the pairwise linear correlations among observed variables purely through the common factor loadings:
$$\\hat{r}_{jk} = \\sum_{l=1}^m \\lambda_{jl} \\lambda_{kl} = \\lambda_{j1}\\lambda_{k1} + \\dots + \\lambda_{jm}\\lambda_{km}$$
In matrix notation, the reproduced correlation matrix is:
$$\\hat{R} = \\Lambda \\Lambda^T + \\Psi$$
where $\\Lambda$ is the $p \\times m$ loading matrix and $\\Psi = \\text{diag}(\\psi_1, \\dots, \\psi_p)$ is the diagonal uniqueness matrix.

In Spearman's 1904 model, if Math loads $0.80$ on general intelligence and Physics loads $0.70$, their predicted correlation is $\\hat{r} = 0.80 \\times 0.70 = 0.56$. If we statistically control for the common factor Intelligence, the partial correlation between Math and Physics drops to zero. The correlation was driven entirely by the shared latent construct.`);

// LEVEL 7 NARRATIVE
export const l7Summary = cleanMarkdown(`# Factor Analysis: Indeterminacies & Extraction Methods

## 1. Two Fundamental Indeterminacies in Factor Analysis
Before factors can be extracted and interpreted, factor analysts must resolve two mathematical challenges:

### Factor Rotation Indeterminacy
Let $\\Lambda$ be a valid matrix of factor loadings reproducing correlation matrix $R$. If we multiply $\\Lambda$ by any $m \\times m$ orthogonal rotation matrix $T$ (where $T T^T = I$), the transformed loading matrix $\\Lambda^* = \\Lambda T$ reproduces the exact same correlation matrix:
$$\\Lambda^* (\\Lambda^*)^T = (\\Lambda T)(\\Lambda T)^T = \\Lambda (T T^T) \\Lambda^T = \\Lambda \\Lambda^T$$
There are infinite mathematically equivalent orientations of the factor axes that fit the observed correlations equally well. To achieve an interpretable solution, researchers apply rotation criteria (such as Varimax).

### Communality Circularity
To determine the factor loadings $\\Lambda$, we must first know the communalities ($h_j^2$) to place on the diagonal of the correlation matrix. However, communalities cannot be calculated until the factor loadings are known ($h_j^2 = \\sum \\lambda_{jk}^2$). Different factor extraction methods resolve this circular dependency in different ways.

## 2. Common Extraction Methods

### Principal Components Factoring (PCF)
PCF circumvents the communality problem by initially assuming that all communalities equal 1.0 ($h_j^2 = 1.0$). It extracts factors by performing an unrotated spectral decomposition on the full sample correlation matrix $R$.
- Advantages: Computationally straightforward and avoids Heywood cases (improper solutions where communality exceeds 1.0).
- Disadvantage: Because it analyzes total variance rather than common variance, loadings and communalities are slightly inflated.

### Principal Axis Factoring (PAF)
PAF replaces the diagonal of the correlation matrix $R$ with prior estimates of communalities, creating the reduced correlation matrix $R_r$:
$$R_r = R - \\text{diag}(1 - h_j^2)$$
The most widely used initial communality estimate is the Squared Multiple Correlation ($R_j^2$), obtained by regressing variable $j$ on all remaining $p - 1$ variables. PAF extracts initial loadings from $R_r$, recalculates communalities, updates the diagonal, and iterates until the communalities converge.

### Maximum Likelihood Factoring (MLF)
MLF assumes that the observed variables follow a multivariate normal distribution. It uses numerical optimization to find factor loadings that maximize the likelihood of observing sample covariance matrix $S$. A major advantage of MLF is that it provides formal asymptotic $\\chi^2$ hypothesis tests to evaluate whether $m$ factors are sufficient to explain the observed correlations.

## 3. Evaluating Model Fit: Residual Correlation & RMSR
To verify how well the extracted factor model accounts for the data, analysts examine the residual correlation matrix:
$$R_{\\text{res}} = R - \\hat{R}$$
The off-diagonal elements of $R_{\\text{res}}$ represent the correlation that remains unexplained by the factor model.

The overall discrepancy is summarized by the Root Mean Square Residual (RMSR):
$$\\text{RMSR} = \\sqrt{\\frac{2 \\sum_{j < k} (r_{jk} - \\hat{r}_{jk})^2}{p(p - 1)}}$$
As a standard benchmark, an RMSR value below $0.08$ indicates a good model fit, and an RMSR below $0.05$ indicates an outstanding fit.`);

// LEVEL 8 NARRATIVE
export const l8Summary = cleanMarkdown(`# Factor Analysis: Sampling Adequacy, Rotations & Evaluation

## 1. Testing Data Suitability for Factor Analysis
Factor analysis requires sufficient sample size and substantial intercorrelations among variables. If variables are largely independent, factor analysis is inappropriate.

### Sample Size Guidelines
As a rule of thumb, the sample size should be at least $n \\ge 100$, and the ratio of observations to variables should be at least $5:1$ (ideally $10:1$ or higher).

### Bartlett's Test of Sphericity
Bartlett's test evaluates the null hypothesis that the population correlation matrix is an identity matrix ($H_0: R = I$). Under $H_0$, all off-diagonal correlations are zero. If the test statistic is statistically significant ($p < 0.05$), the null hypothesis is rejected, confirming that meaningful correlations exist among variables.

### Kaiser-Meyer-Olkin (KMO) Measure of Sampling Adequacy
The KMO index compares the magnitudes of observed correlation coefficients to partial correlation coefficients:
$$\\text{KMO} = \\frac{\\sum \\sum_{j \\neq k} r_{jk}^2}{\\sum \\sum_{j \\neq k} r_{jk}^2 + \\sum \\sum_{j \\neq k} a_{jk}^2}$$
where $a_{jk}$ are the anti-image partial correlations (the correlation between variables $j$ and $k$ after controlling for all other variables). If common factors exist, partial correlations should be small, driving KMO toward 1.0.

Kaiser's evaluation benchmarks:
- $\\ge 0.90$: Marvelous
- $\\ge 0.80$: Meritorious
- $\\ge 0.70$: Middling
- $\\ge 0.60$: Mediocre
- $< 0.50$: Unacceptable (data unsuitable for factor analysis)

## 2. Factor Rotation Techniques
Initial unrotated factor extraction places the first factor through the center of the correlation cluster, causing most variables to load moderately on factor 1. Rotation aims to achieve Thurstone's Simple Structure, where each factor has few large loadings and each variable loads strongly on only one factor.

### Orthogonal Rotations
Orthogonal rotations maintain a $90^\\circ$ angle between factor axes, ensuring that the rotated factors remain uncorrelated.
- Varimax: The most widely used orthogonal rotation. It maximizes the variance of squared loadings across variables within each factor, cleaning up columns of the loading matrix so that loadings are either near $\\pm 1.0$ or near $0.0$.
- Quartimax: Maximizes the variance of squared loadings across rows, simplifying the variables.

### Oblique Rotations
Oblique rotations relax the orthogonality constraint, allowing factors to correlate if doing so provides a more realistic representation of reality.
- Promax and Direct Oblimin are standard oblique methods.
- In oblique solutions, the single factor loading matrix splits into two distinct matrices:
  1. Factor Pattern Matrix: Contains partial regression weights of variables on factors, isolating unique contributions.
  2. Factor Structure Matrix: Contains simple Pearson correlations between variables and factors, including shared covariance among correlated factors.

## 3. Systematic Summary: PCA vs. Factor Analysis
- Mathematical Nature: PCA is a descriptive, variance-maximizing data transformation. Factor Analysis is a probabilistic latent variable model.
- Analyzed Variance: PCA analyzes $100\\%$ of total observed variance. Factor analysis analyzes only common shared variance (communality), discarding unique error.
- Indicator Causality: In PCA, indicators combine to form the component (formative). In FA, the underlying latent construct causes the observed responses (reflective).
- Diagonal of Input Matrix: PCA places $1.0$ on the diagonal of $R$. Principal Axis Factoring places communality estimates ($R_j^2$) on the diagonal.
- Exploratory vs Confirmatory: Exploratory Factor Analysis (EFA) uncovers latent structure without prior hypotheses. Confirmatory Factor Analysis (CFA) tests pre-specified factor structures using structural equation modeling (SEM) fit indices.`);

console.log('Part 2 summaries defined.');
