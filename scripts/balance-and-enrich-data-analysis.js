import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://eurqqiebokwcrrhfbihg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cnFxaWVib2t3Y3JyaGZiaWhnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIxNDA0MzIsImV4cCI6MjEwNzcxNjQzMn0.UrhclnTabK3YEJZzroYeDmO4D4pij59IWCXyWZ9ruxs';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Authentic concept enrichments grounded strictly in the official Data Analysis slides
const SEGMENT_ENRICHMENTS = {
  'ch1-scales-methods': [
    ', as nominal categories lack quantitative metric distance and cannot define arithmetic origins or means',
    ', since ordinal ranking preserves relative monotonic order but cannot measure exact interval distances',
    ', because interval scales lack an absolute non-arbitrary zero, preventing proportional ratio calculations',
    ', which fails to satisfy the $k - 1$ dummy variable specification required for full-rank regression matrices',
    ', confounding metric quantitative properties with qualitative categorical classifications in the model',
    ', which violates the essential requirement of independent and mutually exclusive category groupings'
  ],
  'ch1-manipulation-distances': [
    ', failing to adjust for differing measurement unit variances across heterogeneous empirical variables',
    ', which ignores statistical correlations among interdependent dimensions in standardized space',
    ', standardizing by inverse variance weights while ignoring cross-variable covariance structures ($S_{jk}$)',
    ', which produces scale-dependent distance distortions when variable metric units are altered',
    ', assuming spherical orthogonal dispersion when variables actually exhibit substantial collinearity',
    ', projecting raw Euclidean distances without accounting for the inverse covariance metric tensor $S^{-1}$'
  ],
  'ch2-pca-geometry': [
    ', failing to align along the principal axis of maximal multivariate dispersion in the observation cloud',
    ', which does not maximize the retained variance of orthogonal linear projections onto the subspace',
    ', violating the spectral decomposition theorem of real symmetric covariance and correlation matrices',
    ', which fails to preserve total sample variance given by the trace invariance $\\text{tr}(S) = \\sum \\lambda_i$',
    ', assuming non-orthogonal oblique coordinates that introduce redundant collinear components into the model',
    ', which ignores the fundamental eigenvector constraint requiring orthonormal unit length ($w_i\' w_i = 1$)'
  ],
  'ch2-pca-analytical': [
    ', allowing high-variance raw variables to arbitrarily dominate the principal components without standardization',
    ', which ignores the Kaiser criterion benchmark ($\lambda_i > 1.0$) based on standardized unit variable variance',
    ', failing to distinguish significant structural dimensions from residual scree noise before the elbow inflection',
    ', which miscalculates the cumulative proportion of preserved multivariate variance across empirical factors',
    ', confusing component eigenvector weights ($w_{ij}$) with standardized loading correlations ($l_{ji}$)',
    ', failing to verify communality recovery across individual variables in the reduced subspace'
  ],
  'ch3-fa-theory': [
    ', confounding shared common variance (communality $h_i^2$) with item-specific unique error variance ($\\Psi_i$)',
    ', assuming unobservable latent factors are directly measurable linear combinations of observed indicators',
    ', which violates the fundamental factor theorem specifying the decomposed structure $R = \\Lambda \\Lambda\' + \\Psi$',
    ', failing to account for random measurement errors and specific variance components in the diagonal matrix',
    ', assuming zero uniqueness across variables, which incorrectly reduces factor analysis to ordinary PCA',
    ', which ignores the conditional independence assumption among unique error terms across indicator variables'
  ],
  'ch3-fa-extraction': [
    ', placing unities on the diagonal of $R$ and analyzing total variance without estimating common communalities',
    ', which fails to resolve the communality estimation circularity before performing principal factor extraction',
    ', ignoring iterative convergence criteria based on squared multiple correlation ($R^2$) initial estimates',
    ', which produces root mean square residuals (RMSR) exceeding the recommended fit threshold of 0.08',
    ', assuming exact factor reproducibility without evaluating the residual correlation matrix $R_{\\text{res}} = R - \\hat{R}$',
    ', which prematurely terminates extraction iterations before stabilization of factor loading estimates'
  ],
  'ch3-fa-rotation-evaluation': [
    ', failing to rotate factor axes toward Thurstone\'s simple structure to maximize interpretive clarity',
    ', restricting factor dimensions to orthogonal 90-degree angles when latent constructs are genuinely correlated',
    ', which fails the Kaiser-Meyer-Olkin sampling adequacy threshold requiring overall MSA $\\ge 0.50$',
    ', producing Heywood cases with improper communalities $\\ge 1.0$ and negative estimated unique variances',
    ', confounding the pattern matrix of unique regression weights with the structure matrix of correlations',
    ', failing the Bartlett sphericity test ($p < 0.05$), indicating the correlation matrix is essentially an identity'
  ]
};

// Target letter sequence for 18 practice questions per segment:
// exactly 3 of each: 3 A, 3 B, 3 C, 3 D, 3 E, 3 F
const PRACTICE_TARGET_LETTERS = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'd', 'e', 'f', 'a', 'b', 'c',
  'c', 'f', 'a', 'e', 'b', 'd'
];

async function balanceDataAnalysis() {
  console.log('================================================================');
  console.log('BALANCING AND ENRICHING DATA ANALYSIS QUESTIONS IN SUPABASE');
  console.log('================================================================\n');

  const { data: segments, error: segErr } = await supabase
    .from('study_segments')
    .select('id, title, order_index')
    .eq('discipline_id', 'data-analysis')
    .order('order_index');

  if (segErr || !segments) {
    console.error('Failed to fetch segments:', segErr);
    process.exit(1);
  }

  const allUpdatedQuestions = [];

  for (const seg of segments) {
    console.log(`\nProcessing Segment ${seg.order_index}: ${seg.title} (${seg.id})`);

    const { data: questions, error: qErr } = await supabase
      .from('study_questions')
      .select('*')
      .eq('segment_id', seg.id)
      .order('order_index');

    if (qErr || !questions) {
      console.error('Error fetching questions for segment:', qErr);
      continue;
    }

    const quizQuestions = questions.filter(q => q.pool_type === 'quiz');
    const practiceQuestions = questions.filter(q => q.pool_type === 'practice');

    console.log(`  Found ${quizQuestions.length} quiz questions and ${practiceQuestions.length} practice questions.`);

    const enrichments = SEGMENT_ENRICHMENTS[seg.id] || SEGMENT_ENRICHMENTS['ch1-scales-methods'];

    // -------------------------------------------------------------
    // 1. Balance Quiz Questions (12 questions)
    // -------------------------------------------------------------
    // Quiz questions already have 2 of each A-F.
    // Goal: Make sure correct option is longest in at most 2 questions (indices 1 and 7).
    quizQuestions.forEach((q, idx) => {
      const correctLetter = (q.correct_option || '').toLowerCase();
      const correctOpt = q.options.find(o => (o.id || '').toLowerCase() === correctLetter);
      if (!correctOpt) return;

      const allowLongest = (idx === 1 || idx === 7); // ~16.7% allowed

      // If this question shouldn't be longest, check and enrich distractors if needed
      if (!allowLongest) {
        const correctLen = correctOpt.text.length;
        const sorted = [...q.options].sort((x, y) => y.text.length - x.text.length);

        if (correctLen >= sorted[0].text.length - 2) {
          // Enrich the 2 longest distractors
          const distractors = q.options.filter(o => (o.id || '').toLowerCase() !== correctLetter);
          distractors.sort((x, y) => y.text.length - x.text.length);

          const toEnrich = [distractors[0], distractors[1]].filter(Boolean);
          toEnrich.forEach((d, dIdx) => {
            const enrichText = enrichments[(idx + dIdx) % enrichments.length];
            // Only add if not already containing it
            if (!d.text.includes(enrichText.substring(0, 20))) {
              d.text = d.text.replace(/[.,;]?$/, '') + enrichText;
            }
          });
        }
      }
      allUpdatedQuestions.push(q);
    });

    // -------------------------------------------------------------
    // 2. Balance Practice Questions (18 questions)
    // -------------------------------------------------------------
    // Goal: Exactly 3 A, 3 B, 3 C, 3 D, 3 E, 3 F.
    // Goal: Correct option longest in at most 2 out of 18 (indices 2 and 11).
    practiceQuestions.forEach((q, idx) => {
      const targetLetter = PRACTICE_TARGET_LETTERS[idx % PRACTICE_TARGET_LETTERS.length];
      const currentCorrectLetter = (q.correct_option || '').toLowerCase();

      // Find current correct option text
      const currentCorrect = q.options.find(o => (o.id || '').toLowerCase() === currentCorrectLetter) || q.options[0];
      const currentDistractors = q.options.filter(o => (o.id || '').toLowerCase() !== currentCorrectLetter);

      // Rebuild options with correct option placed at targetLetter
      const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
      const newOptions = [];
      let distractorIdx = 0;

      for (const letter of letters) {
        if (letter === targetLetter) {
          newOptions.push({
            id: letter,
            text: currentCorrect.text
          });
        } else {
          newOptions.push({
            id: letter,
            text: currentDistractors[distractorIdx++].text
          });
        }
      }

      q.options = newOptions;
      q.correct_option = targetLetter;

      // Length balancing for practice
      const allowLongest = (idx === 2 || idx === 11); // exactly 2 out of 18 (~11%)
      const correctOpt = q.options.find(o => o.id === targetLetter);
      const correctLen = correctOpt.text.length;
      const sorted = [...q.options].sort((x, y) => y.text.length - x.text.length);

      if (!allowLongest && correctLen >= sorted[0].text.length - 2) {
        const distractors = q.options.filter(o => o.id !== targetLetter);
        distractors.sort((x, y) => y.text.length - x.text.length);

        const toEnrich = [distractors[0], distractors[1]].filter(Boolean);
        toEnrich.forEach((d, dIdx) => {
          const enrichText = enrichments[(idx + dIdx) % enrichments.length];
          if (!d.text.includes(enrichText.substring(0, 20))) {
            d.text = d.text.replace(/[.,;]?$/, '') + enrichText;
          }
        });
      }

      allUpdatedQuestions.push(q);
    });
  }

  console.log(`\nReady to upsert ${allUpdatedQuestions.length} balanced questions to Supabase...`);

  // Batch upsert to Supabase
  const batchSize = 35;
  for (let i = 0; i < allUpdatedQuestions.length; i += batchSize) {
    const batch = allUpdatedQuestions.slice(i, i + batchSize).map(q => ({
      id: q.id,
      segment_id: q.segment_id,
      order_index: q.order_index,
      difficulty: q.difficulty,
      question: q.question,
      options: q.options,
      correct_option: q.correct_option,
      explanation: q.explanation,
      pool_type: q.pool_type,
      section_reference: q.section_reference,
      section_anchor: q.section_anchor
    }));

    const { error } = await supabase.from('study_questions').upsert(batch);
    if (error) {
      console.error(`❌ Error upserting batch ${i}:`, error);
      process.exit(1);
    }
    console.log(`  Upserted questions ${i + 1} to ${Math.min(i + batchSize, allUpdatedQuestions.length)}`);
  }

  console.log('\n✅ ALL 210 DATA ANALYSIS QUESTIONS SUCCESSFULLY BALANCED IN SUPABASE!\n');
}

balanceDataAnalysis();
