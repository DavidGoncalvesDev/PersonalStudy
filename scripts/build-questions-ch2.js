// scripts/build-questions-ch2.js
// Assembles the complete Question Bank for Chapter 2: Financial Statement & Ratio Analysis
// Segments 5, 6, 7, 8 (48 questions total: 12 per segment)
import fs from 'fs';
import path from 'path';

// Read the existing file to get Segments 5 and 6
const existingContent = fs.readFileSync('scripts/data-fa/questions-ch2.js', 'utf8');

// We will construct the full content with Segments 5, 6, 7, and 8.
// First extract lines up to the end of segment 6 (before closing array bracket).
const endOfSeg6Index = existingContent.lastIndexOf('    section_anchor: \'joe-s-gadgets-liquidity-and-collection-diagnosis-case\'\n  }');
if (endOfSeg6Index === -1) {
  console.error("Could not find end of segment 6 in questions-ch2.js");
  process.exit(1);
}

const prefix = existingContent.slice(0, endOfSeg6Index + '    section_anchor: \'joe-s-gadgets-liquidity-and-collection-diagnosis-case\'\n  }'.length);

const seg7and8Content = `,
  // ==========================================================================
  // SEGMENT 7: fa-profitability-dupont-solvency
  // ==========================================================================
  {
    segment_id: 'fa-profitability-dupont-solvency',
    order_index: 1, difficulty: 'easy',
    question: 'What does the Debt-to-Equity (D/E) ratio measure, and how does it differ fundamentally from the Debt-to-Assets ratio?',
    correct: 'It compares total debt claims directly to shareholder equity, measuring financial leverage relative to owners’ risk capital rather than total corporate assets.',
    distractors: [
      'It divides total operating cash flows by annual interest expense to assess corporate bank overdraft charges.',
      'It measures the proportion of customer accounts receivable that cannot be collected within sixty calendar days.',
      'It quantifies the market premium investors pay above historical book value for corporate intangible patents.',
      'It calculates the statutory corporate income tax liability payable to government authorities relative to revenues.',
      'It determines the exact number of common equity shares that must be retired through open market repurchases.'
    ],
    explanation: 'Debt-to-Equity measures the proportion of debt financing relative to equity capital. In contrast, Debt-to-Assets measures debt as a percentage of total corporate assets.',
    distractor_reasons: [
      'Describes the Times Interest Earned or cash coverage ratio, not the Debt-to-Equity balance sheet ratio.',
      'Describes an accounts receivable aging or bad-debt allowance calculation.',
      'Describes the Market-to-Book or Price-to-Book premium.',
      'Describes an effective tax rate calculation on taxable income.',
      'Describes a share repurchase program, not a capital structure solvency metric.'
    ],
    section_anchor: 'debt-to-assets-debt-to-equity-and-capital-structure-risk'
  },
  {
    segment_id: 'fa-profitability-dupont-solvency',
    order_index: 2, difficulty: 'easy',
    question: 'Why is Operating Income (EBIT) used in the numerator of the Times Interest Earned (TIE) ratio rather than Net Income?',
    correct: 'Because interest expense is deducted before calculating income taxes and net income; EBIT represents the total operating earnings available to service debt before interest and tax claims are taken.',
    distractors: [
      'Because Net Income includes non-cash depreciation while EBIT strictly measures physical currency notes inside company vaults.',
      'Because international accounting standards legally prohibit reporting interest expense on the public corporate income statement.',
      'Because Net Income is calculated before deducting cost of goods sold, which would grossly inflate the perceived interest coverage.',
      'Because EBIT includes common equity dividend distributions while Net Income deducts preferred share dividends.',
      'Because tax authorities require EBIT to be identical to gross sales revenue across all corporate jurisdictions.'
    ],
    explanation: 'Interest is a pre-tax contractual claim deducted from EBIT before computing taxable income and taxes. Therefore, EBIT is the earnings pool available to service interest.',
    distractor_reasons: [
      'Both EBIT and Net Income are accrual measures that include non-cash depreciation.',
      'Interest expense is mandatory on income statements under all international accounting regimes.',
      'Cost of Goods Sold is deducted far above EBIT to reach Gross Profit; Net Income is bottom-line.',
      'EBIT does not include dividends; dividends are distributions of net income to shareholders.',
      'EBIT deducts COGS and operating expenses from revenue; it is never identical to sales.'
    ],
    section_anchor: 'interest-coverage-times-interest-earned-tie'
  },
  {
    segment_id: 'fa-profitability-dupont-solvency',
    order_index: 3, difficulty: 'easy',
    question: 'What does Return on Equity (ROE) quantify for equity shareholders?',
    correct: 'The net profit generated for every euro of book equity capital invested by common shareholders.',
    distractors: [
      'The total gross cash collected from customers divided by the total number of common shares outstanding.',
      'The percentage discount applied to corporate commercial debt obligations during formal bankruptcy reorganization.',
      'The contractual interest rate paid to senior secured commercial lenders on long-term corporate bonds.',
      'The annual dividend payout divided by the closing stock market share price at the end of the fiscal year.',
      'The ratio of physical warehouse inventory to total long-term plant, property, and manufacturing equipment.'
    ],
    explanation: 'ROE = Net Income / Total Equity. It measures the rate of return earned by the firm on the equity capital provided by shareholders.',
    distractor_reasons: [
      'Describes cash revenue per share, not accounting return on equity book value.',
      'Describes a debt restructuring haircut in corporate insolvency.',
      'Describes the coupon interest rate on corporate debt.',
      'Describes the Dividend Yield, not Return on Equity.',
      'Describes an inventory-to-fixed-assets operational balance sheet ratio.'
    ],
    section_anchor: 'return-on-assets-roa-and-return-on-equity-roe'
  },
  {
    segment_id: 'fa-profitability-dupont-solvency',
    order_index: 4, difficulty: 'easy',
    question: 'Under the classical 3-stage DuPont model, what three fundamental economic drivers multiply together to yield Return on Equity (ROE)?',
    correct: 'Net Profit Margin (operating profitability), Total Asset Turnover (asset efficiency), and the Equity Multiplier (financial leverage).',
    distractors: [
      'Gross Profit Margin, Current Ratio, and the Corporate Statutory Income Tax Rate.',
      'Operating Cash Flow, Days Sales Outstanding, and the Average Cost of Debt Capital.',
      'Price-to-Earnings Ratio, Enterprise Value, and the Dividend Payout Percentage.',
      'Inventory Turnover, Quick Ratio, and the Total Debt-to-Equity Capitalization Multiple.',
      'EBITDA Margin, Capital Expenditure Rate, and the Weighted Average Cost of Capital.'
    ],
    explanation: 'DuPont formula: ROE = (Net Income / Sales) * (Sales / Assets) * (Assets / Equity) = Net Profit Margin * Asset Turnover * Equity Multiplier.',
    distractor_reasons: [
      'Current ratio and tax rate are not the multiplicative components of the 3-stage DuPont model.',
      'Operating cash flow, DSO, and debt cost do not multiply together algebraically to yield ROE.',
      'P/E, EV, and payout ratio are market and valuation metrics, not the DuPont decomposition of ROE.',
      'Inventory turnover, quick ratio, and D/E do not algebraically cancel out to Net Income / Equity.',
      'EBITDA, capex, and WACC belong to cash flow and valuation analysis, not classical 3-stage DuPont.'
    ],
    section_anchor: 'the-3-stage-dupont-decomposition-framework'
  },
  {
    segment_id: 'fa-profitability-dupont-solvency',
    order_index: 5, difficulty: 'intermediate',
    question: 'Under what economic condition does increasing financial leverage (debt) increase a company’s Return on Equity (ROE)?',
    correct: 'When the company’s operating Return on Assets (ROA) exceeds the after-tax interest rate paid on its borrowed debt capital.',
    distractors: [
      'Whenever the enterprise operates in a jurisdiction where the statutory corporate tax rate is exactly zero.',
      'Only when total corporate sales revenue declines by more than twenty percent year-over-year.',
      'When the company holds more physical warehouse inventory than total outstanding customer receivables.',
      'Whenever the market price of the company’s common stock falls below its historical par value.',
      'Only if all outstanding commercial bank debt is secured by personal guarantees from executive directors.'
    ],
    explanation: 'Favorable financial leverage occurs when assets earn more than the cost of borrowing: ROA > after-tax cost of debt. The excess return accrues directly to equity holders, raising ROE.',
    distractor_reasons: [
      'A zero tax rate eliminates the tax shield but does not determine whether leverage is accretive or dilutive.',
      'Declining revenue typically depresses ROA, making debt leverage dangerous rather than beneficial.',
      'Inventory-to-receivables ratios reflect working capital composition, not leverage accretion.',
      'Stock price relative to par value has no mechanical bearing on operating ROA versus interest cost.',
      'Personal loan guarantees affect lender recourse, not the economic leverage return condition.'
    ],
    section_anchor: 'debt-to-assets-debt-to-equity-and-capital-structure-risk'
  },
  {
    segment_id: 'fa-profitability-dupont-solvency',
    order_index: 6, difficulty: 'intermediate',
    question: 'A manufacturing enterprise exhibits a Times Interest Earned (TIE) ratio that falls from 8.5× to 1.8×. How should credit analysts evaluate this change?',
    correct: 'Operating earnings now provide dangerously thin headroom above debt service obligations, creating acute default vulnerability if operating income drops even slightly.',
    distractors: [
      'Operating performance has dramatically improved because interest payments are now closer to total operational profit.',
      'The company has eliminated financial leverage and is now financed entirely with non-interest-bearing retained equity.',
      'Credit risk has disappeared because the company is generating eight times more depreciation than interest expense.',
      'The company should immediately issue high-yield junk bonds to lower its credit rating to prime investment grade.',
      'The enterprise is legally required to liquidate all plant assets and distribute proceeds to preferred shareholders.'
    ],
    explanation: 'A TIE of 1.8x means EBIT is only 1.8 times interest expense. A modest 45% decline in EBIT would leave the firm unable to pay contractual interest from operating earnings.',
    distractor_reasons: [
      'A lower TIE indicates higher credit distress, not improved operating performance.',
      'A falling coverage ratio signifies heavy interest burdens, the opposite of an unleveraged capital structure.',
      'Credit risk has surged sharply; depreciation does not automatically eliminate debt service default.',
      'Issuing junk bonds would increase interest expense and further depress TIE; junk bonds carry speculative ratings.',
      'A 1.8x TIE indicates stress, but not automatic liquidation or bankruptcy mandate.'
    ],
    section_anchor: 'interest-coverage-times-interest-earned-tie'
  },
  {
    segment_id: 'fa-profitability-dupont-solvency',
    order_index: 7, difficulty: 'intermediate',
    question: 'Company A and Company B both report an identical ROE of 18%. Company A achieves this with a 12% net margin, 1.2× turnover, and 1.25× leverage, while Company B has a 2% net margin, 1.0× turnover, and 9.0× leverage. Which company represents a higher-quality economic profile?',
    correct: 'Company A, because its return is generated by strong pricing power and operational profitability rather than fragile, highly leveraged balance sheet debt.',
    distractors: [
      'Company B, because high financial leverage protects the company against changes in central bank interest rates.',
      'Both companies possess identical business risk profiles because their final Return on Equity is mathematically equal at 18%.',
      'Company B, because a 2% net margin indicates superior cost control and manufacturing scale compared to Company A.',
      'Company A is at greater risk of immediate bankruptcy because an Equity Multiplier of 1.25× indicates catastrophic debt distress.',
      'Neither company is viable because an ROE of 18% is legally prohibited under international corporate governance standards.'
    ],
    explanation: 'Company A generates returns through operational efficiency and healthy margins. Company B relies on 9.0x leverage (89% debt), making it highly vulnerable to downturns, interest rate hikes, or minor margin compression.',
    distractor_reasons: [
      'High financial leverage magnifies interest rate sensitivity and default risk rather than protecting against it.',
      'Identical ROE figures can conceal vastly different risk profiles; DuPont analysis exists specifically to uncover this.',
      'A 2% net margin leaves negligible safety buffer compared to Company A’s robust 12% margin.',
      'An Equity Multiplier of 1.25x indicates very conservative leverage (Assets/Equity = 1.25, D/E = 0.25), not distress.',
      'An 18% ROE is an attractive, lawful corporate performance metric across global industries.'
    ],
    section_anchor: 'the-3-stage-dupont-decomposition-framework'
  },
  {
    segment_id: 'fa-profitability-dupont-solvency',
    order_index: 8, difficulty: 'intermediate',
    question: 'In the Joe’s Gadgets case, what caused the Debt-to-Equity ratio to more than double from 0.43 in 2016 to 1.10 in 2017?',
    correct: 'Short-term debt surged by €2.5 million to finance swelling inventory and uncollected customer receivables while equity grew modestly from retained earnings.',
    distractors: [
      'Joe’s Gadgets paid a €10 million special cash dividend to shareholders, wiping out almost all common equity.',
      'Joe’s Gadgets repurchased eighty percent of its common shares on the open market using accumulated cash reserves.',
      'Long-term bank mortgage loans were fully retired and converted into common equity voting shares.',
      'The company suffered a catastrophic net loss of €5.0 million that completely eliminated retained earnings.',
      'Corporate equipment was revalued downward by ninety percent under hyperinflationary accounting rules.'
    ],
    explanation: 'In Joe’s Gadgets, short-term debt rose from €0 to €2.5m (and total liabilities from €4.5m to €11.0m) to finance the working capital surge, while equity only grew from €7.0m to €7.7m, driving D/E from 0.43 to 1.10.',
    distractor_reasons: [
      'Joe’s Gadgets retained €0.7m of earnings (equity grew from €7.0m to €7.7m); no massive dividend was paid.',
      'No share repurchase program took place; share count was stable.',
      'Long-term debt remained at €4.0m and short-term debt expanded; debt was not retired into equity.',
      'Joe’s Gadgets remained profitable, earning €1.35m in 2016 and €1.20m in 2017.',
      'Fixed assets actually expanded from €4.0m to €5.5m; no asset impairment wipeout occurred.'
    ],
    section_anchor: 'joe-s-gadgets-solvency-and-profitability-case'
  },
  {
    segment_id: 'fa-profitability-dupont-solvency',
    order_index: 9, difficulty: 'hard',
    question: 'In Joe’s Gadgets, EBIT remained completely flat at €1.50 million in both 2016 and 2017, yet Times Interest Earned collapsed from 10.0× to 3.75×. What explains this sharp deterioration?',
    correct: 'Substantial short-term debt borrowing raised annual interest expense from €0.15 million to €0.40 million, eroding the margin of safety on fixed financial charges.',
    distractors: [
      'Operating expenses increased by five hundred percent, wiping out all gross profit margins.',
      'The company was subjected to a punitive government windfall tax penalty that absorbed ninety percent of EBIT.',
      'Accounts receivable were completely uncollectible, forcing a direct non-operating write-off against EBIT.',
      'Joe’s Gadgets switched its accounting method from accrual to cash basis midway through fiscal year 2017.',
      'Central bank authorities froze all corporate bank accounts, halting all commercial sales transactions.'
    ],
    explanation: 'TIE = EBIT / Interest. In 2016, €1.50m / €0.15m = 10.0x. In 2017, new short-term borrowing increased interest expense to €0.40m: €1.50m / €0.40m = 3.75x, a severe drop in coverage.',
    distractor_reasons: [
      'EBIT was identical at €1.50m in both years; operating expenses did not wipe out gross profits.',
      'TIE is computed before income taxes; taxes do not enter the TIE calculation.',
      'Receivables doubled on the balance sheet but were not written off against EBIT.',
      'Financial statements were prepared on a consistent accrual basis across both periods.',
      'Sales grew from €14.8m to €17.5m; accounts were not frozen nor transactions halted.'
    ],
    section_anchor: 'joe-s-gadgets-solvency-and-profitability-case'
  },
  {
    segment_id: 'fa-profitability-dupont-solvency',
    order_index: 10, difficulty: 'hard',
    question: 'In Joe’s Gadgets, ROE improved from 13.0% in 2016 to 15.6% in 2017. Why is this apparent improvement misleading to an equity analyst?',
    correct: 'Net profit margin deteriorated from 9.1% to 6.9% and asset turnover slowed; the ROE rise was produced entirely by multiplying deteriorating operating returns by surging financial leverage.',
    distractors: [
      'The ROE calculation omitted common stock dividends paid to external venture capital preferred investors.',
      'The improvement is fictitious because European accounting regulations mandate that ROE must be calculated pre-tax.',
      'Operating income actually fell by ninety-five percent, but management falsified the audited financial report.',
      'Asset turnover tripled to 4.5×, masking a minor increase in short-term accounts payable liabilities.',
      'Joe’s Gadgets sold all its manufacturing plants and leased them back at inflated rental expense rates.'
    ],
    explanation: 'DuPont breakdown reveals: Net Margin fell (9.1% -> 6.9%), Asset Turnover fell (1.29x -> 0.93x), but Leverage surged (1.64x -> 2.43x). Higher debt created an artificial optical ROE boost while operating efficiency deteriorated.',
    distractor_reasons: [
      'ROE is based on net income after interest; preferred dividends are not the cause of the DuPont distortion here.',
      'ROE is universally calculated using net income after tax under all major international accounting frameworks.',
      'EBIT was flat at €1.50m; audited reports were not falsified.',
      'Asset turnover declined from 1.29x to 0.93x; it did not triple.',
      'Fixed assets increased from €4.0m to €5.5m; no sale-and-leaseback took place.'
    ],
    section_anchor: 'joe-s-gadgets-solvency-and-profitability-case'
  },
  {
    segment_id: 'fa-profitability-dupont-solvency',
    order_index: 11, difficulty: 'hard',
    question: 'How can a capital-intensive corporation remain fundamentally solvent according to total balance sheet assets yet face immediate corporate insolvency?',
    correct: 'Long-term assets exceed total liabilities giving positive net worth, but assets are illiquid while short-term debt obligations mature without sufficient cash or liquid reserves to service them.',
    distractors: [
      'Because accounting equity is always negative whenever a company purchases specialized manufacturing machinery.',
      'Because commercial banks are legally mandated to seize corporate bank accounts whenever fixed assets exceed current assets.',
      'Because solvency ratios are purely theoretical and have no empirical relationship to corporate financial failure.',
      'Because tax authorities immediately liquidate any business whose gross profit margin falls below fifty percent.',
      'Because depreciation expense on physical buildings must be paid in physical gold bullion every fiscal quarter.'
    ],
    explanation: 'Solvency measures total assets vs total liabilities (positive net worth). However, illiquid fixed assets cannot be quickly converted into cash to settle maturing short-term liabilities, triggering a liquidity-driven bankruptcy.',
    distractor_reasons: [
      'Purchasing machinery exchanges cash for equipment or adds debt; it does not automatically make equity negative.',
      'Banks cannot seize accounts simply because fixed assets exceed current assets; seizure requires contractual loan default.',
      'Solvency and liquidity ratios are vital empirical indicators widely used in credit risk and bankruptcy prediction.',
      'Tax authorities tax net profit; they do not liquidate firms based on arbitrary gross margin thresholds.',
      'Depreciation is a non-cash accrual allocation, not a cash payment in gold or currency.'
    ],
    section_anchor: 'debt-to-assets-debt-to-equity-and-capital-structure-risk'
  },
  {
    segment_id: 'fa-profitability-dupont-solvency',
    order_index: 12, difficulty: 'hard',
    question: 'An analyst tracks a firm over three years: Net Margin drops from 10% to 5%, Asset Turnover falls from 1.5× to 0.8×, while Financial Leverage surges from 1.5× to 4.5×, keeping ROE steady near 18%. What is the structural diagnosis?',
    correct: 'The core operating engine is collapsing through pricing erosion and capital inefficiency, masked temporarily by aggressive borrowing that exponentially magnifies bankruptcy risk.',
    distractors: [
      'The company has unlocked operational excellence and should be valued at the highest price-to-earnings multiple in its peer group.',
      'Management has successfully lowered financial risk by substituting volatile equity with stable, risk-free long-term commercial debt.',
      'The firm should immediately repurchase all outstanding corporate bonds using short-term supplier trade payables.',
      'Operating profitability has doubled because financial leverage multiplied the gross profit margin by three hundred percent.',
      'The business is completely immune to economic cycles because its Return on Equity has remained perfectly constant.'
    ],
    explanation: 'DuPont reveals that Operating Return (ROA = Margin * Turnover) collapsed from 15% to 4%. The firm compensated by tripling leverage (Assets/Equity from 1.5 to 4.5). The steady ROE is an optical illusion hiding massive financial distress risk.',
    distractor_reasons: [
      'Collapsing margins and turnover reflect operating distress, not excellence; high multiple valuation would be unwarranted.',
      'Debt is not risk-free; tripling leverage exponentially increases financial and insolvency risk.',
      'Replacing bonds with overdue supplier credit would cause immediate supply chain collapse and supplier legal action.',
      'Financial leverage does not multiply gross profit margin; gross margin is determined by sales pricing and production costs.',
      'A constant ROE driven by debt leverage makes the company exceptionally vulnerable to interest rate spikes and recessions.'
    ],
    section_anchor: 'the-3-stage-dupont-decomposition-framework'
  },

  // ==========================================================================
  // SEGMENT 8: fa-market-ratios-diagnosis
  // ==========================================================================
  {
    segment_id: 'fa-market-ratios-diagnosis',
    order_index: 1, difficulty: 'easy',
    question: 'What does Earnings Per Share (EPS) represent in financial statement analysis?',
    correct: 'The portion of net income allocated to each outstanding share of common stock after deducting preferred dividends.',
    distractors: [
      'The total gross sales revenue collected from customers divided by the total number of common and preferred shares.',
      'The market price at which a single common share was traded on the national securities exchange at market close.',
      'The total cash dividends paid to common shareholders divided by the company’s year-end total balance sheet assets.',
      'The statutory income tax expense assessed per share of common stock by domestic government authorities.',
      'The book value of physical factory machinery and equipment divided by the total number of corporate employees.'
    ],
    explanation: 'EPS = (Net Income - Preferred Dividends) / Weighted Average Common Shares Outstanding. It measures the profitability generated per unit of ownership.',
    distractor_reasons: [
      'Describes revenue per share, not earnings per share.',
      'Describes the market stock price, not the accounting earnings per share.',
      'Describes dividend per share relative to assets, not EPS.',
      'Describes tax per share, not net income allocated to common shares.',
      'Describes capital intensity per employee, not EPS.'
    ],
    section_anchor: 'earnings-per-share-eps-and-price-to-earnings-p-e'
  },
  {
    segment_id: 'fa-market-ratios-diagnosis',
    order_index: 2, difficulty: 'easy',
    question: 'What does a high Price-to-Earnings (P/E) ratio typically signal to market participants about a company?',
    correct: 'Investors expect high future earnings growth and are willing to pay a premium for each euro of current net income.',
    distractors: [
      'The company is on the verge of immediate bankruptcy because its market capitalization has dropped to zero.',
      'Management has decided to eliminate all common equity voting shares and convert the firm into a non-profit foundation.',
      'The company generates more cash interest expense than total annual gross operating revenues.',
      'The enterprise pays out one hundred percent of its net income as annual cash dividends to preferred shareholders.',
      'Accounting standards require the company to write down all historical fixed assets to nominal salvage value.'
    ],
    explanation: 'P/E = Market Price per Share / EPS. High multiples reflect market optimism regarding future earnings expansion, innovation, or superior business quality.',
    distractor_reasons: [
      'A high P/E indicates investor optimism and strong equity valuation, not zero market capitalization or imminent bankruptcy.',
      'P/E multiple levels have no connection to converting corporate structures into non-profit foundations.',
      'A high P/E does not indicate excessive interest; highly valued firms often have minimal debt.',
      'High P/E growth companies typically retain earnings to fund expansion rather than paying 100% dividends.',
      'High P/E has no mechanical link to asset write-downs or salvage valuation mandates.'
    ],
    section_anchor: 'earnings-per-share-eps-and-price-to-earnings-p-e'
  },
  {
    segment_id: 'fa-market-ratios-diagnosis',
    order_index: 3, difficulty: 'easy',
    question: 'Why does the Market-to-Book (Price-to-Book) ratio of knowledge-based software or luxury brand companies often substantially exceed 1.0×?',
    correct: 'Accounting standards record balance sheet equity at historical cost, omitting valuable internally developed intangibles, proprietary software, and brand equity from assets.',
    distractors: [
      'Because software companies are legally required to report negative common equity on their balance sheets.',
      'Because market participants systematically miscalculate the ratio by dividing stock price by total sales revenue.',
      'Because accounting standards prohibit technology companies from recognizing cash collected from software subscriptions.',
      'Because luxury brand companies carry all physical retail boutiques at five times their estimated market replacement cost.',
      'Because banking regulators mandate a minimum Market-to-Book ratio of 5.0× for all technology enterprises.'
    ],
    explanation: 'Under GAAP and IFRS, internally generated brands, patents, and software are expensed as incurred rather than capitalized. Consequently, book value understates true economic capital, pushing P/B above 1.0x.',
    distractor_reasons: [
      'Software firms often have positive, healthy equity; negative equity is not an accounting requirement.',
      'Market participants divide market value of equity by book value of equity; dividing by sales gives Price-to-Sales.',
      'Subscription cash is recognized either as revenue or deferred revenue; it is not prohibited.',
      'Retail boutiques are recorded at historical cost less depreciation, not marked up to 5x replacement cost.',
      'Banking regulations impose capital requirements on financial institutions, not Market-to-Book ratios on tech firms.'
    ],
    section_anchor: 'market-to-book-ratio-and-unrecorded-intangibles'
  },
  {
    segment_id: 'fa-market-ratios-diagnosis',
    order_index: 4, difficulty: 'easy',
    question: 'What is the fundamental difference between the Dividend Yield and the Dividend Payout Ratio?',
    correct: 'Dividend Yield measures annual cash dividends relative to current market share price, whereas Dividend Payout Ratio measures dividends relative to corporate net income.',
    distractors: [
      'Dividend Yield measures dividends paid to suppliers, whereas Dividend Payout Ratio measures dividends paid to debt lenders.',
      'Dividend Yield is calculated using pre-tax gross revenues, whereas Dividend Payout Ratio is calculated using inventory balances.',
      'Dividend Yield is determined by the central government, whereas Dividend Payout Ratio is fixed by municipal trade unions.',
      'Dividend Yield applies strictly to preferred shares, whereas Dividend Payout Ratio applies exclusively to convertible corporate bonds.',
      'There is no difference; both terms represent the exact same mathematical formula under standard corporate finance.'
    ],
    explanation: 'Dividend Yield = DPS / Stock Price (an investment return metric for shareholders). Dividend Payout Ratio = Total Dividends / Net Income (a corporate capital allocation metric).',
    distractor_reasons: [
      'Dividends are paid strictly to equity shareholders, never to trade suppliers or debt lenders.',
      'Revenues and inventory balances do not enter the dividend yield or payout ratio formulas.',
      'Dividends are declared by the corporate board of directors, not central governments or trade unions.',
      'Both metrics apply to common equity; bonds pay contractual interest, not dividends.',
      'They are distinct financial concepts with different denominators (Share Price vs Net Income).'
    ],
    section_anchor: 'dividend-yield-and-distribution-sustainability'
  },
  {
    segment_id: 'fa-market-ratios-diagnosis',
    order_index: 5, difficulty: 'intermediate',
    question: 'A mature industrial firm suffering a cyclical downturn sees its P/E ratio jump from 12× to 95× despite a 40% collapse in its stock price. What accounts for this optical distortion?',
    correct: 'Denominator collapse: net earnings dropped precipitously close to zero, causing the price-to-earnings fraction to explode even though company valuation actually fell.',
    distractors: [
      'Investors suddenly determined that the company possessed world-leading artificial intelligence intellectual property.',
      'The company repurchased ninety-nine percent of its common shares, forcing earnings per share to increase tenfold.',
      'The corporate income tax rate was increased from 20% to 95%, mechanically resetting the price-to-earnings multiple.',
      'Accounting standards required the company to multiply all operating expenses by its historical price-to-book ratio.',
      'The company paid off all debt liabilities using customer deposits, driving the denominator to infinity.'
    ],
    explanation: 'If stock price falls from €60 to €36 (-40%) while EPS collapses from €5.00 to €0.38 (-92%), P/E surges from 12x to 95x. This is a classic denominator collapse (earnings drop faster than price), creating a misleading multiple.',
    distractor_reasons: [
      'A cyclical downturn with collapsing stock price reflects business distress, not newfound AI innovation enthusiasm.',
      'If EPS had increased tenfold, P/E would have shrunk dramatically, not expanded to 95x.',
      'Tax rates do not mechanically set P/E multiples; earnings simply drop.',
      'Accounting standards do not multiply operating expenses by valuation multiples.',
      'Paying debt does not collapse the denominator of P/E; earnings determine the denominator.'
    ],
    section_anchor: 'multiple-distortions-denominator-collapse-vs-growth-expectations'
  },
  {
    segment_id: 'fa-market-ratios-diagnosis',
    order_index: 6, difficulty: 'intermediate',
    question: 'In a modern Management Control System, what is the defining structure and operational purpose of Objectives and Key Results (OKRs)?',
    correct: 'Pairing qualitative, ambitious strategic Objectives with 3 to 5 quantifiable, time-bound Key Results that establish verifiable milestone progress.',
    distractors: [
      'Setting legally binding corporate tax targets that executive officers must submit directly to public tax auditors.',
      'Calculating daily foreign currency exchange arbitrage transactions to hedge short-term supplier trade payables.',
      'Mandating that all corporate employees purchase identical amounts of company common stock through payroll deductions.',
      'Establishing rigid five-year budget quotas that penalize operational managers for any innovation or strategy pivots.',
      'Recording historical double-entry debits and credits on the general ledger to close monthly financial accounting books.'
    ],
    explanation: 'OKRs link a qualitative Objective (what to achieve) with 3-5 measurable Key Results (how progress is quantified). They align organizational focus and drive execution.',
    distractor_reasons: [
      'OKRs are internal management control tools, not statutory tax reporting submissions.',
      'Currency hedging is a treasury risk management function, not the defining structure of OKRs.',
      'Employee stock purchase plans are compensation programs, not the OKR goal-setting framework.',
      'OKRs encourage agile, ambitious stretch goals; they are the antithesis of rigid, punitive traditional budget quotas.',
      'Double-entry bookkeeping is financial accounting, not management control OKR architecture.'
    ],
    section_anchor: 'management-control-systems-okrs-and-executive-dashboards'
  },
  {
    segment_id: 'fa-market-ratios-diagnosis',
    order_index: 7, difficulty: 'intermediate',
    question: 'Why must executive management control dashboards incorporate operational leading indicators rather than relying solely on monthly financial accounting statements?',
    correct: 'Financial statements reflect lagging historical outcomes that cannot be altered, whereas leading operational indicators provide predictive foresight to rectify execution before losses appear.',
    distractors: [
      'Because financial statements are legally classified as unverified rumors until five years after publication.',
      'Because leading indicators are guaranteed by mathematical law to never deviate from budgeted operational forecasts.',
      'Because operational leading indicators are required by tax authorities to determine annual corporate dividend levies.',
      'Because financial accounting statements report only cash transactions and omit all credit sales and physical inventory.',
      'Because executive leadership is legally forbidden from reviewing monthly income statements and balance sheets.'
    ],
    explanation: 'Financial results (revenue, profit, cash flow) are lagging indicators—they record what already happened. Leading indicators (pipeline volume, order backlogs, on-time delivery, customer churn) alert managers in time to act.',
    distractor_reasons: [
      'Financial statements are audited, rigorous historical records, not unverified rumors.',
      'Leading indicators fluctuate dynamically; they are predictive operational metrics, not static mathematical guarantees.',
      'Tax authorities base tax levies on statutory taxable income, not operational leading indicators.',
      'Financial statements follow accrual accounting and fully incorporate credit sales and inventory.',
      'Executive leadership has a fiduciary duty to review financial statements regularly.'
    ],
    section_anchor: 'management-control-systems-okrs-and-executive-dashboards'
  },
  {
    segment_id: 'fa-market-ratios-diagnosis',
    order_index: 8, difficulty: 'intermediate',
    question: 'What is the primary role of a Value Driver Tree (Business Drivers) within corporate management control?',
    correct: 'Decomposing high-level financial objectives (such as ROE or Operating Cash Flow) into granular operational levers that frontline managers directly control day-to-day.',
    distractors: [
      'Allocating corporate political campaign contributions among domestic and international parliamentary elections.',
      'Encrypting executive email communications to prevent unauthorized whistleblowing to securities regulators.',
      'Determining the exact depreciation tax write-off schedules permitted under municipal real estate legislation.',
      'Eliminating all frontline manufacturing supervisory positions to automate corporate governance via smart contracts.',
      'Replacing all customer invoices with speculative cryptocurrency tokens on decentralized blockchain protocols.'
    ],
    explanation: 'A Value Driver Tree maps strategic financial outcomes (e.g., ROIC) down to operational drivers (e.g., machine uptime, scrap rates, sales conversion rate, payment terms) that teams can influence directly.',
    distractor_reasons: [
      'Political campaign contributions are not the operational purpose of Value Driver Trees.',
      'Information security and encryption are IT governance functions, not management control driver trees.',
      'Tax depreciation schedules are governed by fiscal tax codes, not business driver decomposition.',
      'Driver trees empower operational managers by providing clarity, rather than eliminating management positions.',
      'Customer invoicing is a standard commercial accounting process, unrelated to driver trees.'
    ],
    section_anchor: 'management-control-systems-okrs-and-executive-dashboards'
  },
  {
    segment_id: 'fa-market-ratios-diagnosis',
    order_index: 9, difficulty: 'hard',
    question: 'In the Joe’s Gadgets case synthesis, what market multiple signal warns equity investors despite the company’s apparent top-line revenue expansion?',
    correct: 'P/E multiples contract or stagnate because markets discount lower earnings quality, recognizing that revenue growth is trapped in unsold inventory and delinquent receivables.',
    distractors: [
      'The Price-to-Sales multiple expanded to fifty times revenue, indicating extreme speculative overvaluation.',
      'The company was delisted from the stock exchange due to failing to file quarterly financial reports for three consecutive years.',
      'Management declared a special dividend equal to four hundred percent of total annual corporate operating revenues.',
      'Bond credit rating agencies upgraded the company’s commercial debt to prime AAA status due to surging leverage.',
      'The enterprise converted all common stock into non-voting preferred shares to prevent hostile proxy takeovers.'
    ],
    explanation: 'Revenue growth that does not convert into cash flow diminishes earnings quality. Astute investors discount the company’s P/E multiple because debt service, inventory obsolescence risk, and collection delays threaten future cash flows.',
    distractor_reasons: [
      'Joe’s Gadgets is a hardware distributor trading at modest multiples, not an overvalued 50x Price-to-Sales tech stock.',
      'Joe’s Gadgets filed its reports (the case is based on its 2016 and 2017 statements); it was not delisted.',
      'Joe’s Gadgets faced cash shortages and did not declare a 400% revenue special dividend.',
      'Surging debt and collapsing TIE (10x to 3.75x) would trigger credit downgrades, never an upgrade to AAA.',
      'No share conversion took place in the Joe’s Gadgets diagnostic case.'
    ],
    section_anchor: 'joe-s-gadgets-holistic-diagnostic-synthesis-case'
  },
  {
    segment_id: 'fa-market-ratios-diagnosis',
    order_index: 10, difficulty: 'hard',
    question: 'When synthesizing Joe’s Gadgets across horizontal, liquidity, solvency, and DuPont analyses, what is the core structural diagnosis of the business?',
    correct: 'Uncontrolled working capital expansion (inventory and receivables) consumed all operating cash, forcing short-term debt borrowing that depressed net margin and strained interest coverage.',
    distractors: [
      'A catastrophic breakdown in manufacturing machinery caused direct production output to halt for nine consecutive months.',
      'Gross profit margins collapsed from 45% to negative 15% due to predatory competitor pricing across all product categories.',
      'The enterprise is in an outstanding financial position with zero debt, pristine cash liquidity, and world-class collection cycles.',
      'Management embezzled eighty percent of total corporate assets, falsifying general ledger cash accounts.',
      'The company was liquidated under Chapter 7 bankruptcy proceedings prior to the publication of the 2017 annual report.'
    ],
    explanation: 'Joe’s Gadgets suffered a classic working capital crisis: inventory doubled to €4.0m and receivables doubled to €4.0m, turning Operating Cash Flow deeply negative. Management borrowed €2.5m short-term, depressing margins and weakening solvency.',
    distractor_reasons: [
      'Sales grew from €14.8m to €17.5m; manufacturing output did not halt.',
      'Gross profit margin remained stable (~24.3% vs ~24.0%); gross margins did not collapse to negative 15%.',
      'Liquidity deteriorated and debt surged; the company is under working capital stress, not in pristine condition.',
      'There is no embezzlement in the case; the crisis stems from poor working capital and operational control.',
      'The company operated throughout 2017 and generated positive net profit; it was not liquidated.'
    ],
    section_anchor: 'joe-s-gadgets-holistic-diagnostic-synthesis-case'
  },
  {
    segment_id: 'fa-market-ratios-diagnosis',
    order_index: 11, difficulty: 'hard',
    question: 'What immediate management control and operational intervention should executive leadership execute at Joe’s Gadgets to avert an impending liquidity crisis?',
    correct: 'Enforce strict credit collection terms to lower DSO, halt redundant production to liquidate excess inventory into cash, and utilize freed liquidity to pay down short-term debt.',
    distractors: [
      'Double the credit period offered to high-risk customers from sixty days to one hundred and eighty days to boost gross sales.',
      'Issue additional high-interest short-term commercial bank debt to construct two new manufacturing assembly plants.',
      'Eliminate all sales commissions and fire the entire product engineering team to eliminate commercial overhead expenses.',
      'Declare an immediate fifty percent cash dividend payout to reassure common equity shareholders of financial stability.',
      'Write off all warehouse inventory as complete scrap and cease selling hardware gadgets in commercial retail markets.'
    ],
    explanation: 'The remedy addresses root causes: reducing receivables (lowering DSO from 73 to 45 days) and inventory frees up cash. That cash can retire the €2.5m short-term loan, restore TIE coverage, and eliminate interest expense drag.',
    distractor_reasons: [
      'Lengthening customer credit terms would worsen DSO and tie up even more liquidity in receivables.',
      'Taking on more high-interest debt to build plants would accelerate insolvency and crush interest coverage further.',
      'Firing sales and engineering would destroy revenue and market competitiveness.',
      'Paying cash dividends when experiencing a cash drain would precipitate immediate default on loan obligations.',
      'Scrapping all inventory would generate massive net losses and destroy the commercial business model.'
    ],
    section_anchor: 'joe-s-gadgets-holistic-diagnostic-synthesis-case'
  },
  {
    segment_id: 'fa-market-ratios-diagnosis',
    order_index: 12, difficulty: 'hard',
    question: 'Which set of operational leading metrics should be prioritized on the executive control dashboard to prevent another working capital crisis like the one at Joe’s Gadgets?',
    correct: 'Weekly aging of receivables (>60 days overdue), inventory stock turnover by SKU velocity, and daily cash conversion cycle tracking against supplier payment milestones.',
    distractors: [
      'Annual corporate social responsibility reports, executive cafeteria satisfaction ratings, and office square footage utilization.',
      'Daily stock market tick volumes, competitor patent publication counts, and general inflation indices published by the central bank.',
      'Historical ten-year asset depreciation schedules, audited tax returns, and statutory annual shareholder meeting minutes.',
      'Number of corporate social media impressions, office furniture replacement costs, and corporate gym membership attendance.',
      'Total accumulated historical net income earned since company inception divided by the current year statutory corporate tax rate.'
    ],
    explanation: 'The crisis at Joe’s Gadgets arose from unmonitored working capital. An operational dashboard tracking receivables aging, inventory velocity by SKU, and cash conversion cycle provides immediate warnings before liquidity drains.',
    distractor_reasons: [
      'Cafeteria ratings and CSR reports do not measure liquidity, cash flow, or credit collection health.',
      'Stock ticks and inflation indices are external market metrics that do not control internal working capital levers.',
      'Historical tax schedules and meeting minutes are lagging compliance records that offer no real-time operational control.',
      'Social media impressions and gym attendance do not provide visibility into inventory or accounts receivable health.',
      'Cumulative net income over tax rate is an irrelevant mathematical construct offering zero operational foresight.'
    ],
    section_anchor: 'management-control-systems-okrs-and-executive-dashboards'
  }
];
`;

const finalFileContent = prefix + seg7and8Content;
fs.writeFileSync('scripts/data-fa/questions-ch2.js', finalFileContent, 'utf8');
console.log('Successfully updated scripts/data-fa/questions-ch2.js with all 48 questions across Segments 5, 6, 7, and 8!');
