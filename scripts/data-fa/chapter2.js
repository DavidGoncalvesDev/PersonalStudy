// Chapter 2: Financial Statement & Ratio Analysis
// Segments 5 to 8 with full narrative prose, display KaTeX formulas, DuPont decomposition, Cash Conversion Cycle, and authentic distractors.

export const chapterTwoSegments = [
  // --------------------------------------------------------------------------
  // SEGMENT 5: Common-Size, Trend & Comparative Analysis
  // --------------------------------------------------------------------------
  {
    id: 'fa-common-size-trends',
    discipline_id: 'financial-analysis',
    order_index: 5,
    title: 'Common-Size, Trend & Comparative Analysis',
    subtitle: 'Vertical and horizontal analysis, time trends, peer comparisons and interpretation limits.',
    summary_markdown: `# Common-Size, Trend & Comparative Analysis

## Normalizing Financial Statements for Comparison
Raw monetary amounts are deceptive when comparing companies of unequal scale or evaluating a single business expanding rapidly over time. A €5 million increase in production cost represents a catastrophe for a medium-sized enterprise but routine operational noise for a multinational conglomerate. **Common-Size Financial Analysis** normalizes financial statements by converting absolute currency values into relative percentages of an intuitive economic base, standardizing comparison across corporate sizes, business models, and accounting regimes.

### Vertical Common-Size Analysis (Base Scaling)
Vertical analysis scales every line item on a financial statement relative to a universal anchor within that same fiscal period:
- **Income Statement Base**: Every line item is divided by **Total Sales Revenue** ($100\\%$). It immediately isolates the cost structure:
  $$\\text{Common-Size Line Item (\\%)} = \\frac{\\text{Income Statement Line Item}}{\\text{Sales Revenue}} \\times 100$$
  This directly reveals the percentage of each revenue dollar consumed by Cost of Goods Sold, Commercial Overhead, and Financing Interest.
- **Balance Sheet Base**: Every line item is divided by **Total Assets** ($100\\%$):
  $$\\text{Common-Size Asset/Liability (\\%)} = \\frac{\\text{Balance Sheet Item}}{\\text{Total Assets}} \\times 100$$
  This reveals capital allocation—highlighting what proportion of corporate resources is tied up in liquid cash, trade receivables, inventory, or physical manufacturing plant.

### Horizontal and Multi-Year Trend Analysis
Horizontal analysis evaluates the trajectory of financial line items across consecutive chronological periods:
- **Monetary Change**: $\\Delta \\text{Amount} = \\text{Current Year Value} - \\text{Base Year Value}$
- **Percentage Change**:
  $$\\text{Percentage Change (\\%)} = \\frac{\\text{Current Year Value} - \\text{Base Year Value}}{\\text{Base Year Value}} \\times 100$$

A two-year comparison indicates direction, but a multi-year trend covering **three to five years** is required to filter out transient seasonal distortions and cyclical volatility. In quarterly analysis, seasonal businesses must always be benchmarked against the identical calendar quarter of the prior year (e.g., Q4 2026 vs. Q4 2025) rather than the preceding sequential quarter.

### Denominator Traps and Structural Shifts
Analysts must avoid the common analytical trap of confusing relative percentage changes with absolute monetary movements:
1. **The Denominator Effect**: A common-size line item percentage can decline even while its absolute dollar amount is expanding rapidly, provided the denominator base grows at an even faster rate.
2. **Asset Proportion Illusion**: Net fixed assets can decline as a percentage of total assets without a single machine being decommissioned or sold, simply because current assets (such as customer receivables or inventory) grew disproportionately fast.
3. **Working Capital Warnings**: If Trade Receivables expand from 11% of total assets to 19% while sales grow only modestly, it suggests slower collections, looser customer credit screening, or uncollected delinquent accounts rather than genuine business expansion.

### Industry Benchmarking and Peer Comparability Limits
External benchmarking compares a company against industry averages or direct competitors. However, industry averages must be utilized with extreme caution:
- **Business Model Divergence**: Diversified conglomerates, asset-light outsourcing firms, and vertically integrated manufacturers cannot be meaningfully pooled into a single average.
- **Accounting Policy Differences**: Variations in revenue recognition timing, depreciation methods, and inventory cost-flow assumptions distort comparisons.
- **Outlier Distortions**: Small industry samples can be skewed by financially distressed or hyper-profitable outlier firms. An industry average is an investigative diagnostic baseline, never a binding normative standard.

### Joe's Gadgets Multi-Year Trend Diagnosis Case
Joe's Gadgets reports substantial revenue growth from 2016 to 2017 (€15.0m to €20.0m, a 33.3% top-line expansion). However, vertical common-size diagnosis uncovers severe operational deterioration:
- **COGS**: Escalated from €6.0m (40.0% of sales) to €11.0m (55.0% of sales). Direct manufacturing costs consumed an additional 15 percentage points of gross revenue.
- **Selling & Administrative**: Declined from €3.0m (20.0% of sales) to €3.5m (17.5% of sales), demonstrating minor operational leverage.
- **Operating Profit (EBIT)**: Fell from €4.0m (26.7% margin) to €3.0m (15.0% margin).
- **Net Income**: Plunged by 50% from €2.1m (14.0% margin) to €1.05m (5.25% margin).
- **Balance Sheet Composition**: Both Accounts Receivable and Inventory doubled from €2.0m each to €4.0m each. Expressed as a share of total assets, Receivables expanded from 11.8% to 18.1%, and Inventory expanded from 11.8% to 18.1%.
- **Diagnostic Conclusion**: Joe's Gadgets sacrificed pricing discipline to chase revenue volume, suffering surging production costs and severe working-capital cash traps.`
  },

  // --------------------------------------------------------------------------
  // SEGMENT 6: Liquidity & Activity Ratios
  // --------------------------------------------------------------------------
  {
    id: 'fa-liquidity-activity-ratios',
    discipline_id: 'financial-analysis',
    order_index: 6,
    title: 'Liquidity & Activity Ratios',
    subtitle: 'Short-term obligations, current and quick ratios, working-capital efficiency and asset turnover.',
    summary_markdown: `# Liquidity & Activity Ratios

## Liquidity Capacity and Working Capital Management
Liquidity ratios assess an enterprise's operational capacity to meet short-term financial commitments (trade payables, accrued wages, short-term debt) as they mature, without being forced to liquidate productive fixed assets or accept emergency financing. Operating efficiency (activity) ratios measure how effectively management converts its balance sheet resources into commercial cash flows.

### Current and Quick (Acid-Test) Ratios
The primary solvency metrics evaluate current asset coverage over short-term liabilities:

$$\\text{Current Ratio} = \\frac{\\text{Current Assets}}{\\text{Current Liabilities}}$$

The classical rule of thumb suggests a current ratio between 1.5 and 3.0, though optimal targets depend heavily on industry operating models (e.g., grocery retailers operate successfully near 1.0 due to immediate cash customer sales and extended supplier credit).

$$\\text{Quick Ratio (Acid-Test)} = \\frac{\\text{Current Assets} - \\text{Inventory}}{\\text{Current Liabilities}} = \\frac{\\text{Cash} + \\text{Marketable Securities} + \\text{Receivables}}{\\text{Current Liabilities}}$$

The quick ratio excludes inventory because inventory is the least liquid current asset: merchandise must first be sold (demanding market demand), and if sold on credit, the resulting receivable must still be collected before cash becomes available to pay creditors.

### Operating Efficiency and Asset Turnover Metrics
Activity ratios evaluate the velocity at which balance sheet assets are deployed to generate revenue:

$$\\text{Inventory Turnover (Times)} = \\frac{\\text{Cost of Goods Sold (COGS)}}{\\text{Ending Inventory}}$$

$$\\text{Fixed-Asset Turnover (Times)} = \\frac{\\text{Sales Revenue}}{\\text{Net Fixed Assets}}$$

$$\\text{Total-Asset Turnover (Times)} = \\frac{\\text{Sales Revenue}}{\\text{Total Assets}}$$

Inventory turnover measures how many times inventory is sold and replaced across a fiscal year. Higher turnover indicates lean, rapid inventory movement; however, excessively high turnover can indicate stockouts, missed sales orders, and damaged client goodwill.

### Days Sales Outstanding and the Cash Conversion Cycle
To make turnover intuitive, analysts express balance sheet items in terms of operating days:

$$\\text{Days Sales Outstanding (DSO)} = \\frac{\\text{Accounts Receivable}}{\\text{Sales Revenue}} \\times 365 = \\frac{\\text{Accounts Receivable}}{\\text{Sales Revenue} / 365}$$

$$\\text{Days Inventory Outstanding (DIO)} = \\frac{\\text{Ending Inventory}}{\\text{COGS}} \\times 365$$

$$\\text{Days Payable Outstanding (DPO)} = \\frac{\\text{Accounts Payable}}{\\text{COGS}} \\times 365$$

Combining these metrics produces the **Cash Conversion Cycle (CCC)**, which tracks the net duration (in days) required to convert raw materials investments into cash collections from customers:

$$\\text{Cash Conversion Cycle (CCC)} = \\text{DIO} + \\text{DSO} - \\text{DPO}$$

A shorter or negative cash conversion cycle demonstrates superior working capital efficiency, allowing the business to fund operations using supplier credit rather than expensive bank loans.

### Measurement Conventions: Ending vs Average Balances
In academic finance and commercial practice, turnover ratios may use either the ending balance or the average balance ($(\\text{Beginning} + \\text{Ending}) / 2$) in the denominator. The official convention for this course utilizes **ending balance sheet values** unless explicit average instructions are supplied. Analysts must maintain identical denominator conventions across all compared historical periods and peer firms to prevent artificial ratio distortion.

### Joe's Gadgets Liquidity and Collection Diagnosis Case
Applying activity and liquidity ratios to Joe's Gadgets (2016 to 2017):
- **Current Assets**: €7.0m $\\to$ €11.05m; **Current Liabilities**: €4.5m $\\to$ €7.0m.
  $$\\text{Current Ratio: } 2016 = \\frac{7.0}{4.5} = 1.56 \\quad \\longrightarrow \\quad 2017 = \\frac{11.05}{7.0} = 1.58$$
  The current ratio appears superficially stable, masking underlying decay.
- **Quick Assets**: Current assets excluding €2.0m $\\to$ €4.0m inventory.
  $$\\text{Quick Ratio: } 2016 = \\frac{7.0 - 2.0}{4.5} = 1.11 \\quad \\longrightarrow \\quad 2017 = \\frac{11.05 - 4.0}{7.0} = 1.01$$
- **Inventory Turnover**: COGS €6.0m on €2.0m inventory $\\to$ COGS €11.0m on €4.0m inventory:
  $$\\text{Turnover: } 2016 = \\frac{6.0}{2.0} = 3.00\\times \\quad \\longrightarrow \\quad 2017 = \\frac{11.0}{4.0} = 2.75\\times$$
- **Days Sales Outstanding (DSO)** on 365 days:
  $$\\text{DSO: } 2016 = \\frac{2.0}{15.0} \\times 365 = 48.7 \\text{ days} \\quad \\longrightarrow \\quad 2017 = \\frac{4.0}{20.0} \\times 365 = 73.0 \\text{ days}$$
- **Fixed-Asset Turnover**: €15m/€10m = 1.50× $\\to$ €20m/€11m = 1.82×.
- **Diagnostic Conclusion**: Joe's Gadgets collection cycle extended by over 24 days (to 73 days), freezing liquid capital in uncollected customer receivables while inventory movement slowed, despite improved fixed-asset utilization.`
  },

  // --------------------------------------------------------------------------
  // SEGMENT 7: Debt & Profitability Ratios
  // --------------------------------------------------------------------------
  {
    id: 'fa-debt-profitability-ratios',
    discipline_id: 'financial-analysis',
    order_index: 7,
    title: 'Debt & Profitability Ratios',
    subtitle: 'Leverage, interest coverage, margins, ROA, ROE and the risk-return trade-off.',
    summary_markdown: `# Debt & Profitability Ratios

## Financial Leverage, Solvency, and Operating Profitability
Debt financing introduces financial leverage into corporate capital structure. In favorable macroeconomic environments, debt amplifies returns to equity owners because interest expense is fixed while operating profits grow. However, debt creates contractual interest and principal obligations that must be serviced regardless of sales performance, elevating financial default risk during market downturns.

### Debt-to-Assets, Debt-to-Equity, and Capital Structure Risk
Long-term solvency evaluates capital structure composition:

$$\\text{Debt-to-Assets Ratio} = \\frac{\\text{Total Debt}}{\\text{Total Assets}}$$

Per course case convention, total debt is measured as **total liabilities** (€10m $\\to$ €15m in Joe's Gadgets). A ratio of 0.68 means creditors finance 68% of enterprise assets.

$$\\text{Debt-to-Equity Ratio} = \\frac{\\text{Total Debt}}{\\text{Total Equity}}$$

Unlike Debt-to-Assets (which is bounded below 1.0 unless equity is negative), Debt-to-Equity routinely exceeds 1.0 (or 100%) whenever creditor claims surpass shareholders' book investment.

### Interest Coverage: Times Interest Earned (TIE)
The solvency cushion protecting an enterprise against default is measured by interest coverage:

$$\\text{Times Interest Earned (TIE)} = \\frac{\\text{Operating Income (EBIT)}}{\\text{Interest Expense}}$$

A TIE above 2.0 to 3.0 indicates an adequate operating buffer. A TIE below 1.0 means operating earnings are insufficient to service annual interest obligations, forcing management to burn liquid cash, liquidate fixed assets, or issue emergency debt to prevent formal default.

### Return on Assets (ROA) and Return on Equity (ROE)
Profitability metrics evaluate the net earnings generated relative to investment bases:

$$\\text{Gross Profit Margin} = \\frac{\\text{Gross Profit}}{\\text{Sales Revenue}} = \\frac{\\text{Sales} - \\text{COGS}}{\\text{Sales}}$$

$$\\text{Net Profit Margin} = \\frac{\\text{Net Income}}{\\text{Sales Revenue}}$$

$$\\text{Return on Assets (ROA)} = \\frac{\\text{Net Income}}{\\text{Total Assets}}$$

$$\\text{Return on Equity (ROE)} = \\frac{\\text{Net Income}}{\\text{Total Equity}}$$

### The 3-Stage DuPont Decomposition Framework
To diagnose the true structural drivers behind Return on Equity, financial analysts apply the **DuPont Equation**, which decomposes ROE into three multiplicative components:

$$\\text{ROE} = \\left( \\frac{\\text{Net Income}}{\\text{Sales Revenue}} \\right) \\times \\left( \\frac{\\text{Sales Revenue}}{\\text{Total Assets}} \\right) \\times \\left( \\frac{\\text{Total Assets}}{\\text{Total Equity}} \\right)$$

$$\\text{ROE} = \\text{Net Profit Margin (Profitability)} \\times \\text{Asset Turnover (Efficiency)} \\times \\text{Equity Multiplier (Financial Leverage)}$$

This framework reveals whether an impressive ROE stems from genuine operating margin excellence, rapid capital turnover, or dangerous financial leverage that artificially inflates returns on a thin equity base.

### Joe's Gadgets Solvency and Profitability Case
Joe's Gadgets financial performance collapsed across 2016 and 2017:
- **Gross Profit Margin**: $(€15 - €6)/€15 = 60.0\\% \\longrightarrow (€20 - €11)/€20 = 45.0\\%$
- **Net Profit Margin**: $€2.1/€15 = 14.0\\% \\longrightarrow €1.05/€20 = 5.25\\%$
- **ROA**: $€2.1/€17 = 12.35\\% \\longrightarrow €1.05/€22.05 = 4.76\\%$
- **ROE**: $€2.1/€7.0 = 30.0\\% \\longrightarrow €1.05/€7.05 = 14.89\\%$
- **Debt-to-Assets**: $€10/€17 = 58.8\\% \\longrightarrow €15/€22.05 = 68.0\\%$
- **Debt-to-Equity**: $€10/€7 = 142.9\\% \\longrightarrow €15/€7.05 = 212.8\\%$
- **Times Interest Earned (TIE)**:
  $$\\text{TIE: } 2016 = \\frac{€4.0}{€1.0} = 4.0\\times \\quad \\longrightarrow \\quad 2017 = \\frac{€3.0}{€1.5} = 2.0\\times$$
- **Diagnostic Conclusion**: Profit margins and asset productivity halved while creditor leverage surged to 212.8% of equity. The interest coverage buffer dropped to 2.0x, leaving the firm precarious if operational deterioration continues.`
  },

  // --------------------------------------------------------------------------
  // SEGMENT 8: Market Ratios & Integrated Diagnosis
  // --------------------------------------------------------------------------
  {
    id: 'fa-market-ratios-diagnosis',
    discipline_id: 'financial-analysis',
    order_index: 8,
    title: 'Market Ratios & Integrated Diagnosis',
    subtitle: 'EPS, P/E, market-to-book, dividend yield and interpretation using the Joe’s Gadgets case.',
    summary_markdown: `# Market Ratios & Integrated Diagnosis

## Market Pricing Relative to Accounting Fundamentals
Market ratios connect a publicly traded corporation's financial statements with observable capital market pricing. While accounting book values record historical transactions, public equity prices reflect collective investor expectations regarding future growth, competitive advantages, risk profiles, and cash-flow generation.

### Earnings Per Share (EPS) and Price-to-Earnings (P/E)
Earnings Per Share converts aggregate net income into a standardized claim per share:

$$\\text{Earnings Per Share (EPS)} = \\frac{\\text{Net Income}}{\\text{Common Shares Outstanding}}$$

$$\\text{Price-to-Earnings (P/E) Ratio} = \\frac{\\text{Market Price Per Share}}{\\text{Earnings Per Share (EPS)}} = \\frac{\\text{Market Capitalization}}{\\text{Total Net Income}}$$

The P/E ratio indicates how many currency units investors are willing to pay for each single unit of current corporate earnings. A high P/E ratio generally indicates robust market expectations of future revenue and earnings expansion, or lower perceived operational risk. Comparing nominal share prices alone (e.g. Alphabet at $800 vs Facebook at $120) is economically meaningless without scaling by per-share earnings.

### Market-to-Book Ratio and Unrecorded Intangibles
The Market-to-Book ratio evaluates shareholder valuation relative to accounting net worth:

$$\\text{Book Value Per Share (BVPS)} = \\frac{\\text{Total Common Equity}}{\\text{Common Shares Outstanding}}$$

$$\\text{Market-to-Book Ratio} = \\frac{\\text{Market Price Per Share}}{\\text{Book Value Per Share (BVPS)}} = \\frac{\\text{Market Capitalization}}{\\text{Total Balance Sheet Equity}}$$

A Market-to-Book ratio substantially exceeding 1.0 reflects valuable economic assets not recognized on the balance sheet under historical cost accounting (e.g., brand prestige, patented intellectual property, customer retention networks, technological leadership).

### Dividend Yield and Distribution Sustainability
Dividend yield measures the direct cash return distributed to shareholders relative to market price:

$$\\text{Dividend Yield} = \\frac{\\text{Annual Dividend Per Share (DPS)}}{\\text{Market Price Per Share}}$$

$$\\text{Dividend Payout Ratio} = \\frac{\\text{Dividends Declared}}{\\text{Net Income}} = \\frac{\\text{DPS}}{\\text{EPS}}$$

A high dividend yield is not necessarily a signal of financial strength. Mature, cash-generative firms often maintain stable dividend yields, while early-stage growth companies pay zero dividends to reinvest cash into expansion. Crucially, an artificially inflated dividend yield can indicate a collapsing share price driven by anticipated earnings deterioration.

### Multiple Distortions: Denominator Collapse vs Growth Expectations
Analysts must be alert to mathematical anomalies in valuation multiples:
1. **The P/E Expansion Trap**: If a company's share price falls by 30% while its net earnings collapse by 60%, the P/E ratio will actually **increase**. This multiple expansion reflects an earnings collapse, not premium growth prospects.
2. **Nonpositive Earnings**: When a firm reports net losses ($\text{EPS} < 0$), the standard P/E ratio becomes mathematically meaningless and cannot be interpreted.
3. **Dividend Unsustainability**: If Joe's Gadgets maintains an unchanged €0.50 DPS while EPS plunges from €1.05 to €0.525, its dividend payout ratio surges to 95.2% of net income, indicating that the dividend cannot be sustained without draining cash reserves or borrowing.

### Management Control Systems, OKRs, and Executive Dashboards
Financial statement analysis is historically retrospective: it explains what occurred during past operating periods. In contrast, **Management Control** is forward-looking and steering-oriented, ensuring that enterprise resources are deployed effectively to accomplish strategic organizational goals.

#### Objectives and Key Results (OKRs)
As organizations grow in scale and operational complexity, top-level corporate strategy frequently becomes abstract and disconnected from day-to-day employee execution. The **OKR framework** translates high-level strategy into concrete, measurable operational outcomes:
- **Objectives (What)**: Qualitative, inspiring statements of strategic intent defining the desired outcome (e.g., in a national retail perfume chain: "Significantly elevate regional store commercial profitability and brand prestige").
- **Key Results (How)**: Quantitative, rigorous, time-bound metrics that track whether the objective is being achieved (e.g., KR 1: "Increase average customer basket size from €45 to €55 by Q3"; KR 2: "Reduce inventory stockout rates from 8% to below 2% across all 100 retail outlets").

#### Business Drivers and Executive Dashboards
To maintain continuous operational control, management relies on an **Executive Dashboard** (or control panel)—a synthesized visual presentation of Key Performance Indicators (KPIs):
- **Leading Indicators**: Predictive operational metrics that signal future financial results before they appear on the income statement (e.g., store customer footfall, web conversion rates, pipeline velocity, customer satisfaction scores).
- **Lagging Indicators**: Historical financial metrics that measure realized results (e.g., gross margin, EBIT, ROE).
An effective executive dashboard bridges the gap between tactical daily decisions (inventory reordering, promotional staffing) and strategic governance, providing real-time data to prevent financial distress long before the annual fiscal close.

### Joe's Gadgets Holistic Diagnostic Synthesis Case
Joe's Gadgets has 2,000,000 common shares outstanding across both 2016 and 2017:
- **EPS**: $€2.1m / 2.0m = \\text{€}1.05 \\longrightarrow €1.05m / 2.0m = \\text{€}0.525$
- **Share Price**: Dropped from €25.00 to €17.50 (-30.0%)
- **P/E Ratio**:
  $$\\text{P/E: } 2016 = \\frac{25.00}{1.05} = 23.81\\times \\quad \\longrightarrow \\quad 2017 = \\frac{17.50}{0.525} = 33.33\\times$$
  The P/E ratio rose from 23.8x to 33.3x, exceeding the industry benchmark (24.15x), solely because earnings collapsed faster than share price.
- **Book Value Per Share**: $€7.0m / 2.0m = \\text{€}3.50 \\longrightarrow €7.05m / 2.0m = \\text{€}3.525$
- **Market-to-Book**: $25.00 / 3.50 = 7.14\\times \\longrightarrow 17.50 / 3.525 = 4.96\\times$
- **Dividend Yield**: $€0.50 / 25.00 = 2.00\\% \\longrightarrow €0.50 / 17.50 = 2.86\\%$ (above peer average of 1.99%)
- **Holistic Diagnostic Verdict**: The superficial optical appeal of Joe's Gadgets (higher P/E and higher dividend yield than peers) is an illusion. The higher P/E is driven by profit collapse, and the elevated dividend yield is an unhedged yield trap that threatens the solvency of the business.`
  }
];
