// Complete Question Bank for Chapter 2: Financial Statement & Ratio Analysis
// Segments 5 to 8 (48 questions total: 12 questions per segment)
// Strictly follows: 4 easy, 4 intermediate, 4 hard; authentic domain misconceptions; exact anchors.

export const rawQuestionsCh2 = [
  // ==========================================================================
  // SEGMENT 5: fa-common-size-trends
  // ==========================================================================
  {
    segment_id: 'fa-common-size-trends',
    order_index: 1, difficulty: 'easy',
    question: 'What is the primary operational procedure performed in vertical common-size analysis of financial statements?',
    correct: 'Expressing every line item on a financial statement as a percentage of a universal base item within that same reporting period.',
    distractors: [
      'Comparing identical monetary line items across five consecutive calendar decades without adjusting for inflation.',
      'Translating foreign subsidiary financial statements into domestic currency using historical purchasing power parity rates.',
      'Adjusting all customer invoice receivables to reflect daily spot market liquidation values.',
      'Eliminating all non-operating financing cash flows from the published balance sheet report.',
      'Multiplying every income statement account balance by the statutory corporate income tax rate.'
    ],
    explanation: 'Vertical common-size analysis normalizes financial statements by dividing each line item by a common base (Sales for P&L, Total Assets for Balance Sheet) within the same period.',
    distractor_reasons: [
      'Describes multi-decade horizontal analysis, not vertical common-size scaling.',
      'Describes foreign currency translation, completely separate from common-size scaling.',
      'Describes liquidation or mark-to-market adjustments, not vertical common-size percentages.',
      'Common-size analysis retains all line items and expresses them as percentages.',
      'Tax rate multiplication calculates tax liability, not vertical common-size percentages.'
    ],
    section_anchor: 'normalizing-financial-statements-for-comparison'
  },
  {
    segment_id: 'fa-common-size-trends',
    order_index: 2, difficulty: 'easy',
    question: 'What is the standard base denominator utilized when preparing a vertical common-size Income Statement?',
    correct: 'Total Sales Revenue (Gross or Net Turnover), set equal to 100%.',
    distractors: [
      'Total Assets on the closing balance sheet, set equal to 100%.',
      'Net Operating Profit After Tax (NOPAT) plus Annual Depreciation.',
      'Total Shareholders’ Equity at the beginning of the fiscal period.',
      'Cost of Goods Sold (COGS) incurred in the primary production plant.',
      'Total Operating Cash Flow (CFO) reported on the cash statement.'
    ],
    explanation: 'In vertical common-size income statements, Total Sales Revenue is the 100% base. Every expense and margin is evaluated as a percentage of revenue.',
    distractor_reasons: [
      'Total Assets is the standard base for the balance sheet, not the income statement.',
      'NOPAT is an intermediate profit subtotal, never the 100% top-line base.',
      'Equity is a balance sheet financing total, not the base for income statement scaling.',
      'COGS is an expense component evaluated as a percentage of sales, not the base itself.',
      'CFO is a cash statement metric, not the denominator for the income statement.'
    ],
    section_anchor: 'vertical-common-size-analysis-base-scaling'
  },
  {
    segment_id: 'fa-common-size-trends',
    order_index: 3, difficulty: 'easy',
    question: 'What is the standard base denominator utilized when preparing a vertical common-size Balance Sheet?',
    correct: 'Total Assets (or Total Liabilities plus Equity), set equal to 100%.',
    distractors: [
      'Cash and cash equivalents held in commercial checking accounts.',
      'Annual Gross Sales Revenue accumulated across the preceding twelve months.',
      'Total Long-Term Bank Debt Principal outstanding at year-end close.',
      'Operating Income (EBIT) before interest and corporate income tax.',
      'Total Capital Expenditures (CapEx) deployed across the fiscal year.'
    ],
    explanation: 'In vertical common-size balance sheets, Total Assets (which equals Total Liabilities + Equity) serves as the 100% base, showing resource and financing allocation.',
    distractor_reasons: [
      'Cash is a single current asset component evaluated as a percentage of total assets.',
      'Sales revenue is the base for the income statement, not the balance sheet.',
      'Bank debt is a single liability component evaluated relative to total assets.',
      'EBIT is an income statement metric, not the denominator for balance sheet assets.',
      'CapEx is an investing cash flow metric, not the base for balance sheet scaling.'
    ],
    section_anchor: 'vertical-common-size-analysis-base-scaling'
  },
  {
    segment_id: 'fa-common-size-trends',
    order_index: 4, difficulty: 'easy',
    question: 'What does horizontal financial statement analysis examine across accounting periods?',
    correct: 'The monetary amount and percentage change of specific financial line items over consecutive chronological time periods.',
    distractors: [
      'The internal proportion of marketing expenses relative to total sales in a single quarter.',
      'The legal regulatory compliance of corporate tax returns with international customs treaties.',
      'The credit ratings assigned by commercial credit rating agencies to competitors in Asia.',
      'The mechanical depreciation recovery schedules of retired manufacturing equipment.',
      'The percentage of common equity shares held by corporate institutional pension funds.'
    ],
    explanation: 'Horizontal analysis compares financial line items across time (e.g. 2016 vs 2017), calculating both absolute currency changes and percentage growth rates.',
    distractor_reasons: [
      'Describes within-period vertical analysis, not multi-period horizontal analysis.',
      'Tax compliance is a legal audit function, not horizontal trend analysis.',
      'Credit ratings are qualitative external benchmarks, not financial statement horizontal analysis.',
      'Equipment schedules are fixed asset records, not horizontal financial statements.',
      'Shareholder registry analysis is corporate governance tracking, not financial statement trends.'
    ],
    section_anchor: 'horizontal-and-multi-year-trend-analysis'
  },
  {
    segment_id: 'fa-common-size-trends',
    order_index: 5, difficulty: 'intermediate',
    question: 'Why does financial analysis theory recommend analyzing multi-year trends covering three to five years rather than only two periods?',
    correct: 'A 3- to 5-year series filters out transient one-off anomalies and cyclical fluctuations, revealing persistent strategic trajectory.',
    distractors: [
      'Two-year data series are legally prohibited from being published under European accounting directives.',
      'Accounting software systems automatically erase general ledger records after twenty-four months.',
      'Three to five years is required because corporate tax rates change on a mandatory three-year cycle.',
      'Analyzing more than two periods guarantees that inflation has zero mathematical impact on revenue.',
      'Commercial banks only lend capital to companies that have operated for less than two calendar years.'
    ],
    explanation: 'A two-year comparison indicates change, but cannot distinguish temporary noise from persistent trends. A 3- to 5-year series reveals genuine strategic direction.',
    distractor_reasons: [
      'Two-year comparative statements are the standard statutory minimum, fully legal.',
      'Accounting ERP databases maintain permanent historical records indefinitely.',
      'Tax rates do not change on an arbitrary mandatory 3-year schedule.',
      'Longer time series do not eliminate inflation; inflation must still be considered.',
      'Banks strongly prefer mature companies with extensive multi-year operating histories.'
    ],
    section_anchor: 'horizontal-and-multi-year-trend-analysis'
  },
  {
    segment_id: 'fa-common-size-trends',
    order_index: 6, difficulty: 'intermediate',
    question: 'How can an expense item’s common-size percentage of sales decline while its absolute euro spending increases?',
    correct: 'Sales revenue expanded at a faster percentage rate than the growth of the expense item (the denominator effect).',
    distractors: [
      'The enterprise converted its accounting records from accrual basis to cash basis during the fiscal year.',
      'The commercial banking sector lowered statutory lending interest rates on corporate overdraft lines.',
      'The enterprise wrote off its entire tangible fixed asset base as an extraordinary operating loss.',
      'The currency was redenominated by the central bank at a mandatory one-to-ten conversion ratio.',
      'Corporate income tax rates were doubled by government authorities at the end of the fourth quarter.'
    ],
    explanation: 'Common-size % = Expense / Sales. If Sales grows by 50% while the expense grows by 20%, the ratio drops even though absolute spending increased.',
    distractor_reasons: [
      'Accounting basis changes do not explain standard mathematical denominator effects.',
      'Interest rates affect financing costs, but do not dictate general revenue/expense scaling.',
      'Writing off fixed assets does not cause this standard top-line denominator dynamic.',
      'Currency redenomination scales numerator and denominator equally, leaving percentages unchanged.',
      'Income taxes are deducted after operating expenses, having zero impact on operating common-size ratios.'
    ],
    section_anchor: 'denominator-traps-and-structural-shifts'
  },
  {
    segment_id: 'fa-common-size-trends',
    order_index: 7, difficulty: 'intermediate',
    question: 'Why might Net Fixed Assets decline as a common-size percentage of Total Assets without any machinery being sold or decommissioned?',
    correct: 'Current assets (such as customer receivables and inventory) expanded at a substantially faster pace, increasing the total asset denominator.',
    distractors: [
      'The corporate board of directors voted to eliminate all tangible asset accounts from the balance sheet.',
      'The central government confiscated half of the enterprise’s industrial factories without compensation.',
      'The enterprise paid off its long-term bank loans, which automatically shrinks fixed asset values.',
      'Double-entry bookkeeping mandates that fixed assets must equal zero after five operating years.',
      'The enterprise reclassified all factory machinery as short-term marketable securities.'
    ],
    explanation: 'Common-size % = Fixed Assets / Total Assets. If working capital (cash, receivables, inventory) surges, Total Assets expands, causing fixed assets to form a smaller percentage of the total.',
    distractor_reasons: [
      'Boards of directors cannot arbitrarily delete real physical assets from audited balance sheets.',
      'Expropriation is an extreme geopolitical event, not a routine mathematical common-size shift.',
      'Paying off debt reduces cash and liabilities; it does not reduce fixed asset book value.',
      'Fixed assets remain on the balance sheet as long as they provide economic utility.',
      'Productive manufacturing equipment cannot be classified as marketable securities.'
    ],
    section_anchor: 'denominator-traps-and-structural-shifts'
  },
  {
    segment_id: 'fa-common-size-trends',
    order_index: 8, difficulty: 'intermediate',
    question: 'Why must financial analysts exercise extreme caution when benchmarking a company against broad industry average ratios?',
    correct: 'Industry peers often differ substantially in business models, capital intensity, product mixes, and accounting policy conventions.',
    distractors: [
      'Industry average ratios are confidential government statistics that cannot be legally quoted.',
      'Industry averages are calculated exclusively from bankrupt companies undergoing liquidation.',
      'Comparing ratios with industry peers causes automatic disqualification from stock exchange listing.',
      'Industry benchmarks are strictly forbidden in European corporate valuation practice.',
      'Every single company in an industry is legally mandated to report identical profit margins.'
    ],
    explanation: 'Industry averages blend diversified conglomerates, asset-light firms, and differing accounting policies. Benchmarks provide diagnostic context, not absolute standards.',
    distractor_reasons: [
      'Industry ratios are widely published commercial financial benchmarks.',
      'Industry averages sample active, operating public and private enterprises.',
      'Benchmarking is standard industry practice encouraged by stock exchanges and regulators.',
      'Peer comparison is a foundation of relative valuation in European finance.',
      'Companies maintain distinct competitive advantages, pricing power, and cost structures.'
    ],
    section_anchor: 'industry-benchmarking-and-peer-comparability-limits'
  },
  {
    segment_id: 'fa-common-size-trends',
    order_index: 9, difficulty: 'hard',
    question: 'In Joe’s Gadgets, sales grew from €15.0m to €20.0m (33.3% growth), yet EBIT margin collapsed from 26.7% to 15.0%. What was the primary operational driver?',
    correct: 'Cost of Goods Sold (COGS) surged from 40.0% of sales to 55.0% of sales, indicating severe direct manufacturing cost escalation or aggressive price discounting.',
    distractors: [
      'Selling and Administrative expenses tripled from 10.0% of sales to 35.0% of sales.',
      'The corporate income tax rate was increased from 21% to 65% by statutory decree.',
      'Total bank debt principal was written off as an extraordinary loss on the income statement.',
      'The company stopped manufacturing gadgets and converted entirely into a real estate holding trust.',
      'Depreciation on fixed assets expanded by 500% due to emergency machinery retirements.'
    ],
    explanation: 'In Joe’s Gadgets, COGS jumped from €6.0m (40.0% of sales) to €11.0m (55.0% of sales), eroding 15 percentage points of gross margin and driving the EBIT collapse.',
    distractor_reasons: [
      'S&A expenses actually declined as a percentage of sales from 20.0% to 17.5%.',
      'Tax rates affect Net Income after EBT, but have zero mathematical impact on EBIT margins.',
      'Debt principal is a balance sheet liability, not an operating expense affecting EBIT.',
      'The company continued manufacturing gadgets while suffering severe production cost pressure.',
      'Depreciation grew moderately within fixed assets; COGS was the dominant margin driver.'
    ],
    section_anchor: 'joe-s-gadgets-multi-year-trend-diagnosis-case'
  },
  {
    segment_id: 'fa-common-size-trends',
    order_index: 10, difficulty: 'hard',
    question: 'On Joe’s Gadgets balance sheet, Accounts Receivable and Inventory each expanded from 11.8% of total assets to 18.1% of total assets. What does this signal?',
    correct: 'The company is experiencing operational working-capital cash traps, driven by slower customer collections and sluggish inventory turnover.',
    distractors: [
      'The company has eliminated all commercial supplier credit risks and perfected inventory flow.',
      'The company converted its customer credit contracts into non-negotiable government bonds.',
      'The company’s customers are settling invoices thirty days faster than the prior year.',
      'The company liquidated all physical inventory to distribute an extraordinary cash dividend.',
      'The company reclassified its manufacturing equipment as short-term operating receivables.'
    ],
    explanation: 'When receivables and inventory expand significantly as a share of assets, capital is trapped in unpaid customer invoices and unsold merchandise, straining liquidity.',
    distractor_reasons: [
      'Expanding receivables and inventory signal mounting working capital friction, not perfection.',
      'Commercial receivables remain private customer trade debts, not government bonds.',
      'Receivables expanded because collections slowed (DSO surged from 48.7 to 73.0 days).',
      'Inventory doubled from €2m to €4m; it was not liquidated.',
      'Equipment remains a separate non-current asset; it was not reclassified.'
    ],
    section_anchor: 'joe-s-gadgets-multi-year-trend-diagnosis-case'
  },
  {
    segment_id: 'fa-common-size-trends',
    order_index: 11, difficulty: 'hard',
    question: 'What is the disciplined sequence an analyst should follow when interpreting large financial statement changes across multiple years?',
    correct: 'Analyze top-line revenue growth and margin structure first, then evaluate working capital cycles, debt leverage, cash conversion, and asset returns.',
    distractors: [
      'Calculate market P/E ratios first, ignore balance sheet working capital, and conclude with income tax rates.',
      'Examine the cash dividend payout history, ignore cost of goods sold, and multiply assets by bank interest.',
      'Check whether the company changed its corporate logo, ignore profit margins, and review judicial court filings.',
      'Review only the fourth-quarter depreciation schedules and assume all prior statements are irrelevant.',
      'Accept sales revenue growth as final proof of profitability without examining operating expenses.'
    ],
    explanation: 'A disciplined analysis moves systematically from revenues and margins (P&L) to working capital and liquidity (balance sheet/cash flow), leverage (debt/solvency), and overall returns (ROA/ROE).',
    distractor_reasons: [
      'P/E ratios cannot be interpreted meaningfully without understanding underlying earnings and margins.',
      'Ignoring COGS blinds the analyst to core production economics and gross margins.',
      'Corporate branding changes are marketing trivia, not rigorous financial statement analysis.',
      'Isolating Q4 depreciation ignores the entire operating and financing structure of the enterprise.',
      'Revenue growth without expense analysis frequently leads to disastrous investment decisions.'
    ],
    section_anchor: 'normalizing-financial-statements-for-comparison'
  },
  {
    segment_id: 'fa-common-size-trends',
    order_index: 12, difficulty: 'hard',
    question: 'Why should quarterly horizontal financial trend analysis benchmark results against the identical quarter of the previous year rather than the sequential prior quarter?',
    correct: 'To eliminate seasonal operating distortions inherent in businesses with cyclical holiday sales, weather-dependent demand, or agricultural harvest cycles.',
    distractors: [
      'Because sequential quarterly comparisons are illegal under standard European accounting directives.',
      'Because corporate income tax rates change every three months, rendering sequential quarters incomparable.',
      'Because double-entry bookkeeping rules only allow financial statements to be balanced once every twelve months.',
      'Because consumer retail prices are locked by statutory decree for exactly four consecutive quarters.',
      'Because commercial banking credit lines are automatically canceled if sequential quarters are published.'
    ],
    explanation: 'Comparing Q4 to Q3 in a retail business distorts performance because holiday shopping creates an artificial sequential spike. Comparing Q4 2026 to Q4 2025 isolates true annual growth.',
    distractor_reasons: [
      'Sequential quarterly analysis is legal and common, but must be interpreted alongside seasonal comparisons.',
      'Corporate tax rates do not fluctuate quarterly.',
      'Double-entry books balance continuously with every transaction, not once every 12 months.',
      'Prices adjust dynamically with market conditions; they are not frozen by decree.',
      'Bank credit agreements routinely review both sequential and year-over-year quarterly trends.'
    ],
    section_anchor: 'horizontal-and-multi-year-trend-analysis'
  },

  // ==========================================================================
  // SEGMENT 6: fa-liquidity-activity-ratios
  // ==========================================================================
  {
    segment_id: 'fa-liquidity-activity-ratios',
    order_index: 1, difficulty: 'easy',
    question: 'How is the standard Current Ratio calculated, and what fundamental corporate capacity does it measure?',
    correct: 'Current Assets divided by Current Liabilities; it measures the company’s ability to cover short-term obligations due within one year using short-term assets.',
    distractors: [
      'Total Assets divided by Total Long-Term Debt; it measures permanent corporate solvency.',
      'Gross Profit divided by Sales Revenue; it measures direct manufacturing product profitability.',
      'Net Income divided by Common Equity; it measures the return generated on shareholder book capital.',
      'Operating Cash Flow divided by Annual Capital Expenditures; it measures free cash generation.',
      'Cash and cash equivalents divided by Total Liabilities; it measures immediate liquidation reserves.'
    ],
    explanation: 'Current Ratio = Current Assets / Current Liabilities. It evaluates whether short-term assets (cash, receivables, inventory) are sufficient to satisfy short-term liabilities (payables, short-term debt).',
    distractor_reasons: [
      'Assets over long-term debt measures long-term solvency, not short-term current liquidity.',
      'Gross profit over sales is Gross Margin, measuring profitability, not liquidity.',
      'Net income over equity is ROE, measuring shareholder returns.',
      'CFO over CapEx is a cash reinvestment ratio, not the current ratio.',
      'Cash over total liabilities is an extreme cash solvency test, not the standard current ratio.'
    ],
    section_anchor: 'current-and-quick-acid-test-ratios'
  },
  {
    segment_id: 'fa-liquidity-activity-ratios',
    order_index: 2, difficulty: 'easy',
    question: 'Why does the Quick Ratio (Acid-Test) strictly exclude Inventory from the numerator of liquid assets?',
    correct: 'Inventory is the least liquid current asset because it must first be sold, and if sold on credit, the resulting receivable must still be collected before cash is realized.',
    distractors: [
      'Inventory is an intangible asset that has zero legal standing under commercial insolvency proceedings.',
      'Inventory is legally owned by the transport logistics carrier until final delivery to the end consumer.',
      'Inventory cost is automatically deducted from commercial trade payables on the balance sheet.',
      'Inventory is only excluded when the statutory corporate income tax rate exceeds thirty percent.',
      'Inventory is classified as a non-current asset under European Union financial directives.'
    ],
    explanation: 'The Quick Ratio = (Current Assets - Inventory) / Current Liabilities. Inventory is excluded because realizing cash from inventory requires selling it and subsequently collecting the receivable.',
    distractor_reasons: [
      'Inventory is a tangible physical asset, not an intangible asset.',
      'The enterprise owns inventory once title passes under commercial shipping terms.',
      'Inventory does not automatically offset vendor payables.',
      'Tax rates have no impact on the structural formula of the quick ratio.',
      'Inventory is a standard current asset under IFRS and SNC, not a non-current asset.'
    ],
    section_anchor: 'current-and-quick-acid-test-ratios'
  },
  {
    segment_id: 'fa-liquidity-activity-ratios',
    order_index: 3, difficulty: 'easy',
    question: 'A company reports Current Assets of €180,000, Inventory of €60,000, and Current Liabilities of €120,000. What are its Current Ratio and Quick Ratio?',
    correct: 'Current Ratio = 1.50; Quick Ratio = 1.00.',
    distractors: [
      'Current Ratio = 1.20; Quick Ratio = 0.80.',
      'Current Ratio = 2.00; Quick Ratio = 1.50.',
      'Current Ratio = 3.00; Quick Ratio = 2.00.',
      'Current Ratio = 0.67; Quick Ratio = 0.50.',
      'Current Ratio = 1.50; Quick Ratio = 1.50.'
    ],
    explanation: 'Current Ratio = €180,000 / €120,000 = 1.50. Quick Ratio = (€180,000 - €60,000) / €120,000 = €120,000 / €120,000 = 1.00.',
    distractor_reasons: [
      'Arithmetic error in dividing current assets and quick assets by liabilities.',
      'Miscalculates by using €240,000 current assets.',
      'Calculates ratios using €360,000 assets.',
      'Inverts numerator and denominator (€120,000 / €180,000 = 0.67).',
      'Fails to deduct inventory in the quick ratio, setting it equal to the current ratio.'
    ],
    section_anchor: 'current-and-quick-acid-test-ratios'
  },
  {
    segment_id: 'fa-liquidity-activity-ratios',
    order_index: 4, difficulty: 'easy',
    question: 'How is Inventory Turnover defined and calculated under the official convention of this course?',
    correct: 'Cost of Goods Sold (COGS) divided by Ending Inventory; it measures how many times inventory is sold and replaced across a fiscal year.',
    distractors: [
      'Sales Revenue divided by Total Long-Term Debt liabilities.',
      'Gross Profit divided by Average Accounts Receivable.',
      'Ending Inventory divided by Total Operating Cash Flow.',
      'Net Income divided by Tangible Fixed Asset Cost.',
      'Current Liabilities divided by Total Units Produced.'
    ],
    explanation: 'Inventory Turnover = COGS / Ending Inventory. COGS is the appropriate numerator because inventory is carried at cost, not retail selling price.',
    distractor_reasons: [
      'Sales over debt relates to leverage turnover, not inventory turnover.',
      'Gross profit over receivables is an ad-hoc margin ratio, not inventory turnover.',
      'Inventory over CFO compares balance sheet assets with cash flows.',
      'Net income over fixed assets is a variant of return on assets.',
      'Liabilities over units produced is an arbitrary unit cost metric.'
    ],
    section_anchor: 'operating-efficiency-and-asset-turnover-metrics'
  },
  {
    segment_id: 'fa-liquidity-activity-ratios',
    order_index: 5, difficulty: 'intermediate',
    question: 'What does Days Sales Outstanding (DSO) measure, and what does a substantial increase in DSO indicate to an analyst?',
    correct: 'The average number of days required to collect cash from credit sales; an increase signals slower collections, looser credit terms, or rising bad debt risk.',
    distractors: [
      'The number of days manufacturing machines can operate without maintenance; an increase indicates superior factory engineering.',
      'The number of days an enterprise can survive before paying its trade suppliers; an increase signals superior liquidity.',
      'The statutory period required for judicial court approval of corporate mergers and acquisitions.',
      'The number of days required to ship merchandise from factory warehouses to international retail stores.',
      'The average duration that common equity shares are held by institutional asset managers.'
    ],
    explanation: 'DSO = (Accounts Receivable / Sales) * 365. It estimates the average collection period. Slower collections tie up operating cash in customer receivables.',
    distractor_reasons: [
      'Machine operating time is an industrial engineering reliability metric, not DSO.',
      'Days to pay suppliers is Days Payable Outstanding (DPO), not DSO.',
      'Judicial merger approval is regulatory antitrust timing, not DSO.',
      'Shipping duration is an operational logistics transit metric, not customer receivable collection.',
      'Investor holding period is a stock market trading metric, not corporate DSO.'
    ],
    section_anchor: 'days-sales-outstanding-and-the-cash-conversion-cycle'
  },
  {
    segment_id: 'fa-liquidity-activity-ratios',
    order_index: 6, difficulty: 'intermediate',
    question: 'How is the Cash Conversion Cycle (CCC) calculated, and what does a shorter cycle signify?',
    correct: 'DIO plus DSO minus DPO; a shorter cycle indicates superior working capital efficiency, converting inventory and receivables into cash more rapidly.',
    distractors: [
      'DIO minus DSO plus DPO; a shorter cycle indicates that customer collections are frozen in bank escrow.',
      'Current Ratio plus Quick Ratio divided by Inventory Turnover; a shorter cycle indicates high financial leverage.',
      'Debt-to-Assets multiplied by Days Sales Outstanding; a shorter cycle indicates debt default risk.',
      'Gross Margin percentage minus Operating Margin percentage; a shorter cycle indicates high pricing power.',
      'Total Assets divided by Operating Cash Flow; a shorter cycle indicates rapid equipment obsolescence.'
    ],
    explanation: 'CCC = Days Inventory Outstanding (DIO) + Days Sales Outstanding (DSO) - Days Payable Outstanding (DPO). It measures the net days cash is tied up in operating working capital.',
    distractor_reasons: [
      'DSO must be added (time to collect cash) and DPO subtracted (delayed supplier payments).',
      'Arbitrary ratio combining liquidity and turnover, not the cash conversion cycle.',
      'Debt to assets multiplied by DSO is a meaningless hybrid calculation.',
      'Margin differences measure operating cost overhead, not working capital cash conversion.',
      'Assets over CFO is a capital efficiency ratio, not the cash conversion cycle.'
    ],
    section_anchor: 'days-sales-outstanding-and-the-cash-conversion-cycle'
  },
  {
    segment_id: 'fa-liquidity-activity-ratios',
    order_index: 7, difficulty: 'intermediate',
    question: 'Why can an exceptionally high Inventory Turnover ratio actually be detrimental to commercial operating performance?',
    correct: 'It may reflect dangerously lean inventory levels that cause frequent product stockouts, unfulfilled customer orders, and damaged client relationships.',
    distractors: [
      'High inventory turnover automatically triggers mandatory judicial corporate liquidation by commercial courts.',
      'High inventory turnover forces the enterprise to pay double statutory corporate income taxes on retail sales.',
      'High inventory turnover is strictly prohibited under European Union financial reporting standards.',
      'High inventory turnover legally requires the enterprise to convert all bank loans into common equity.',
      'High inventory turnover permanently impairs the historical book value of manufacturing plant buildings.'
    ],
    explanation: 'While turnover reflects lean operations, excessively high turnover often means the company carries insufficient stock, resulting in stockouts, lost sales, and disappointed customers.',
    distractor_reasons: [
      'Stockouts are operational business problems, not judicial insolvency triggers.',
      'Turnover has no punitive tax impact under statutory tax codes.',
      'Accounting standards measure turnover; they do not prohibit or mandate inventory levels.',
      'Turnover has no legal connection to debt-to-equity conversions.',
      'Inventory velocity has no accounting impact on building carrying values.'
    ],
    section_anchor: 'operating-efficiency-and-asset-turnover-metrics'
  },
  {
    segment_id: 'fa-liquidity-activity-ratios',
    order_index: 8, difficulty: 'intermediate',
    question: 'How do Fixed-Asset Turnover and Total-Asset Turnover differ in their analytical focus?',
    correct: 'Fixed-Asset Turnover isolates sales productivity generated specifically by long-term plant and equipment, while Total-Asset Turnover evaluates revenue generated across the entire asset base.',
    distractors: [
      'Fixed-Asset Turnover uses Net Income in the numerator, while Total-Asset Turnover uses Operating Cash Flow.',
      'Fixed-Asset Turnover is strictly a liquidity metric, while Total-Asset Turnover is a solvency metric.',
      'Fixed-Asset Turnover measures commercial supplier payment velocity, while Total-Asset Turnover measures customer collections.',
      'Fixed-Asset Turnover is only calculated for bankrupt companies, while Total-Asset Turnover is calculated for growth startups.',
      'Fixed-Asset Turnover measures tax depreciation shields, while Total-Asset Turnover measures gross profit margins.'
    ],
    explanation: 'Fixed-Asset Turnover = Sales / Net Fixed Assets (evaluating plant/machinery productivity). Total-Asset Turnover = Sales / Total Assets (evaluating overall asset utilization). Both use Sales in the numerator.',
    distractor_reasons: [
      'Both turnover ratios use Sales Revenue in the numerator, not Net Income or CFO.',
      'Both turnover ratios are activity/efficiency metrics, not liquidity or solvency metrics.',
      'Neither ratio measures supplier payments (DPO) or customer collections (DSO).',
      'Both asset turnover ratios are universal metrics computed for healthy ongoing enterprises.',
      'Neither ratio measures tax shields or gross profit margins.'
    ],
    section_anchor: 'operating-efficiency-and-asset-turnover-metrics'
  },
  {
    segment_id: 'fa-liquidity-activity-ratios',
    order_index: 9, difficulty: 'hard',
    question: 'In Joe’s Gadgets, Days Sales Outstanding (DSO) increased from 48.7 days in 2016 to 73.0 days in 2017. What operational investigation should management launch?',
    correct: 'Audit customer credit approval policies, examine aging schedules for overdue delinquent receivables, and evaluate potential sales terms loosening used to chase volume.',
    distractors: [
      'Immediately double all factory machine operator wages to accelerate equipment depreciation.',
      'Reclassify all trade receivables as permanent common share capital in the equity section.',
      'Liquidate all raw material inventory in warehouse auctions to pay immediate common dividends.',
      'Close all commercial banking checking accounts and transact exclusively in physical currency.',
      'File an emergency corporate tax appeal demanding that the government guarantee customer collections.'
    ],
    explanation: 'A 24.3-day surge in DSO indicates credit deterioration. Management must examine aging schedules, credit vetting, and whether aggressive revenue growth was achieved by selling to unreliable buyers.',
    distractor_reasons: [
      'Factory wages have no direct connection to customer collection policies.',
      'Customer receivables cannot be reclassified as equity capital.',
      'Liquidating inventory fails to fix the underlying receivable collection crisis.',
      'Transacting in cash does not collect existing €4.0m in uncollected receivables.',
      'Governments do not guarantee private commercial trade receivables.'
    ],
    section_anchor: 'joe-s-gadgets-liquidity-and-collection-diagnosis-case'
  },
  {
    segment_id: 'fa-liquidity-activity-ratios',
    order_index: 10, difficulty: 'hard',
    question: 'Why is it critical to maintain consistent denominator conventions (ending balance vs average balance) when computing turnover ratios across time and peer firms?',
    correct: 'Switching between ending and average balances artificially distorts ratio trends, creating apparent performance improvements or declines that reflect mathematical inconsistency rather than operational reality.',
    distractors: [
      'Using average balances is strictly prohibited under European Union financial reporting law.',
      'Ending balances automatically eliminate all inventory holding costs from the income statement.',
      'Average balances can only be computed when a company operates in hyperinflationary economies.',
      'Using ending balances guarantees that the enterprise pays zero corporate income taxes.',
      'The denominator choice dictates the legal ownership structure of corporate voting stock.'
    ],
    explanation: 'In a growing company, ending balances are larger than average balances. Switching methods between years or peers produces false comparisons that misrepresent operating efficiency.',
    distractor_reasons: [
      'Both ending and average conventions are widely used and legally permitted under EU standards.',
      'Balance sheet denominators have no effect on income statement inventory holding costs.',
      'Average balances are standard in routine financial analysis regardless of inflation.',
      'Balance sheet conventions have zero impact on corporate income tax calculations.',
      'Denominator choices have no connection to corporate equity voting rights.'
    ],
    section_anchor: 'measurement-conventions-ending-vs-average-balances'
  },
  {
    segment_id: 'fa-liquidity-activity-ratios',
    order_index: 11, difficulty: 'hard',
    question: 'In Joe’s Gadgets, the Current Ratio remained essentially unchanged (1.56 in 2016 vs 1.58 in 2017), yet the Quick Ratio deteriorated from 1.11 to 1.01. What explains this divergence?',
    correct: 'Inventory expanded substantially from €2.0m to €4.0m, bolstering the Current Ratio while the proportion of highly liquid quick assets (cash and receivables) shrank relative to surging current liabilities.',
    distractors: [
      'The company paid off all trade accounts payable in cash, artificially depressing the Quick Ratio.',
      'The company wrote off its entire customer accounts receivable ledger as bad debt.',
      'The company revalued its factory real estate upward by €5.0 million on the balance sheet.',
      'The corporate income tax rate was reduced from 35% to 21%, eliminating accrued liabilities.',
      'The company issued €10 million in common equity shares to eliminate short-term debt.'
    ],
    explanation: 'Inventory doubled to €4.0m, helping current assets keep pace with current liabilities (€4.5m to €7.0m). But when inventory is stripped out, quick assets fell from 1.11x to 1.01x coverage.',
    distractor_reasons: [
      'Current liabilities surged from €4.5m to €7.0m; payables were not paid off.',
      'Receivables doubled from €2.0m to €4.0m; they were not written off.',
      'Real estate is a non-current asset that does not enter the current or quick ratio.',
      'Accrued liabilities expanded; tax cuts did not eliminate short-term debt.',
      'Short-term current liabilities expanded by €2.5m; they were not eliminated by equity.'
    ],
    section_anchor: 'joe-s-gadgets-liquidity-and-collection-diagnosis-case'
  },
  {
    segment_id: 'fa-liquidity-activity-ratios',
    order_index: 12, difficulty: 'hard',
    question: 'How should an analyst interpret a company whose Fixed-Asset Turnover improved from 1.50× to 1.82× while its Days Sales Outstanding worsened from 48.7 days to 73.0 days?',
    correct: 'Physical plant capacity is generating higher sales volume, but aggressive revenue growth is failing to convert efficiently into cash due to poor customer collection discipline.',
    distractors: [
      'The company has achieved complete financial perfection across all operating cycles.',
      'The company is on the verge of immediate technical liquidation due to factory machine breakdown.',
      'The company should immediately halt all sales and decommission its productive manufacturing plant.',
      'The company is transacting exclusively on a cash-on-delivery basis with retail consumers.',
      'The company’s fixed assets appreciated in market value while customer receivables were forgiven.'
    ],
    explanation: 'Higher fixed-asset turnover shows productive machinery utilization. However, surging DSO reveals that sales are sitting uncollected in receivables, creating working capital stress.',
    distractor_reasons: [
      'Surging DSO represents working capital friction, not operational perfection.',
      'Higher fixed-asset turnover indicates active, running machinery, not breakdown.',
      'Decommissioning productive machinery would destroy sales and worsen corporate health.',
      'If sales were cash-on-delivery, DSO would be near zero, not 73 days.',
      'Fixed assets are carried at historical cost net of depreciation, not appreciated value.'
    ],
    section_anchor: 'joe-s-gadgets-liquidity-and-collection-diagnosis-case'
  },
  // ==========================================================================
  // SEGMENT 7: fa-debt-profitability-ratios
  // ==========================================================================
  {
    segment_id: 'fa-debt-profitability-ratios',
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
    segment_id: 'fa-debt-profitability-ratios',
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
    segment_id: 'fa-debt-profitability-ratios',
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
    segment_id: 'fa-debt-profitability-ratios',
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
    segment_id: 'fa-debt-profitability-ratios',
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
    segment_id: 'fa-debt-profitability-ratios',
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
    segment_id: 'fa-debt-profitability-ratios',
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
    segment_id: 'fa-debt-profitability-ratios',
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
    segment_id: 'fa-debt-profitability-ratios',
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
    segment_id: 'fa-debt-profitability-ratios',
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
    segment_id: 'fa-debt-profitability-ratios',
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
    segment_id: 'fa-debt-profitability-ratios',
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
