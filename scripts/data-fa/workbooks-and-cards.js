// scripts/data-fa/workbooks-and-cards.js
// 13 Applied Workbook Exercises and 96 Flashcards for Financial Analysis
// All anchors strictly mapped to valid section headers.

export const workbookExercises = [
  {
    "id": "wb_fa-accounting-foundations",
    "segment_id": "fa-accounting-foundations",
    "order_index": 1,
    "title": "Applied Case: Accounting Foundations & Double-Entry Journal Sequence",
    "difficulty": "hard",
    "prompt_markdown": "Record the following sequence of business transactions for an enterprise:\n1. Founder contributes €25,000 cash to incorporate the firm.\n2. Firm purchases €8,000 of productive equipment paying €3,000 in cash and taking a €5,000 bank loan.\n3. Firm delivers €5,000 of consulting services to clients on 30-day credit terms.\n4. Firm collects €3,200 in cash from credit clients.\n5. Firm pays €1,200 cash for monthly facility rent.\n\nRequired:\n- Journalize all debit and credit entries.\n- Calculate ending balances for Cash, Accounts Receivable, Equipment, Bank Debt, and Total Equity.\n- Prove balance sheet equilibrium: Assets = Liabilities + Equity.",
    "solution_markdown": "### Journal Entries\n1. **Dr Cash** €25,000 | **Cr Common Equity** €25,000\n2. **Dr Equipment** €8,000 | **Cr Cash** €3,000, **Cr Bank Debt** €5,000\n3. **Dr Accounts Receivable** €5,000 | **Cr Service Revenue** €5,000\n4. **Dr Cash** €3,200 | **Cr Accounts Receivable** €3,200\n5. **Dr Rent Expense** €1,200 | **Cr Cash** €1,200\n\n### Ending Balances\n- **Cash**: €25,000 - €3,000 + €3,200 - €1,200 = **€24,000**\n- **Accounts Receivable**: €5,000 - €3,200 = **€1,800**\n- **Equipment**: **€8,000**\n- **Total Assets**: €24,000 + €1,800 + €8,000 = **€33,800**\n\n- **Bank Debt (Liability)**: **€5,000**\n- **Retained Profit**: Revenue €5,000 - Rent Expense €1,200 = **€3,800**\n- **Contributed Equity**: **€25,000**\n- **Total Equity**: €25,000 + €3,800 = **€28,800**\n- **Total Liabilities & Equity**: €5,000 + €28,800 = **€33,800** (Balanced: €33,800 = €33,800).",
    "section_reference": "Worked Journal Entry Sequence",
    "section_anchor": "worked-journal-entry-sequence"
  },
  {
    "id": "wb_fa-period-end-adjustments-1",
    "segment_id": "fa-period-end-adjustments",
    "order_index": 1,
    "title": "Applied Case: Byte Bakery Period-End Closing & Adjustments",
    "difficulty": "hard",
    "prompt_markdown": "Byte Bakery completes its first month of operations. Review and post the following four period-end closing adjustments:\n1. Equipment purchased on Jan 1 for €12,000 has a 5-year useful life and zero salvage value (straight-line depreciation).\n2. Unearned customer deposits balance shows €2,400 received in advance; €1,600 of catering has now been delivered by Jan 31.\n3. Employees earned €1,100 of wages during the final week of January, which will be disbursed on Feb 5.\n4. Facility insurance of €3,600 was prepaid on Jan 1 covering a full 12-month period.\n\nRequired:\n- Draft the four adjusting journal entries.\n- State the net impact on January Operating Income (EBIT).",
    "solution_markdown": "### Adjusting Journal Entries\n1. **Depreciation Expense**:\n   $$\\text{Monthly Depreciation} = \\frac{€12,000}{5 \\times 12} = €200$$\n   - **Dr Depreciation Expense** €200 | **Cr Accumulated Depreciation** €200\n2. **Deferred Revenue Recognition**:\n   - **Dr Unearned Revenue (Liability)** €1,600 | **Cr Catering Revenue** €1,600\n3. **Accrued Wages**:\n   - **Dr Wages Expense** €1,100 | **Cr Wages Payable (Liability)** €1,100\n4. **Prepaid Insurance Amortization**:\n   $$\\text{Monthly Insurance} = \\frac{€3,600}{12} = €300$$\n   - **Dr Insurance Expense** €300 | **Cr Prepaid Insurance (Asset)** €300\n\n### Net Impact on January Operating Income (EBIT)\n- Revenue added: +€1,600\n- Expenses added: -€200 (Depr) - €1,100 (Wages) - €300 (Insurance) = -€1,600\n- **Net Impact on EBIT**: €1,600 - €1,600 = **€0.00** (Revenue recognized exactly offsets accrued operating expenses).",
    "section_reference": "Byte Bakery Closing Sequence Case",
    "section_anchor": "byte-bakery-closing-sequence-case"
  },
  {
    "id": "wb_fa-period-end-adjustments-2",
    "segment_id": "fa-period-end-adjustments",
    "order_index": 2,
    "title": "Applied Case: Inventory Cost Flow Modeling — FIFO vs LIFO vs Weighted Average Cost",
    "difficulty": "hard",
    "prompt_markdown": "Nova Hardware starts the month with 100 units of component X @ €10. During the month, it purchases:\n- Batch 1 (Jan 10): 200 units @ €12\n- Batch 2 (Jan 22): 200 units @ €15\nOn Jan 28, it sells 350 units at a retail price of €25 per unit.\n\nRequired:\n1. Calculate Ending Inventory and Cost of Goods Sold (COGS) under FIFO (First-In, First-Out).\n2. Calculate Ending Inventory and Cost of Goods Sold (COGS) under LIFO (Last-In, First-Out).\n3. Calculate Ending Inventory and Cost of Goods Sold (COGS) under Weighted Average Cost (WAC).\n4. Compare Gross Profit across all three methods during this inflationary period and state which method is prohibited under Portuguese SNC and IFRS.",
    "solution_markdown": "### Inventory Calculations (500 Total Available Units = €1,000 + €2,400 + €3,000 = €6,400)\n\n#### 1. FIFO (First-In, First-Out)\n- **COGS (350 units sold)**: (100 @ €10) + (200 @ €12) + (50 @ €15) = €1,000 + €2,400 + €750 = **€4,150**\n- **Ending Inventory (150 units remaining)**: 150 @ €15 = **€2,250**\n- Check: €4,150 + €2,250 = €6,400.\n\n#### 2. LIFO (Last-In, First-Out)\n- **COGS (350 units sold)**: (200 @ €15) + (150 @ €12) = €3,000 + €1,800 = **€4,800**\n- **Ending Inventory (150 units remaining)**: (100 @ €10) + (50 @ €12) = €1,000 + €600 = **€1,600**\n- Check: €4,800 + €1,600 = €6,400.\n\n#### 3. Weighted Average Cost (WAC)\n- **Average Cost per Unit**:\n  $$\\text{Unit Cost} = \\frac{6400}{500} = 12.80\\text{ EUR}$$\n- **COGS (350 units sold)**: 350 * €12.80 = **€4,480**\n- **Ending Inventory (150 units remaining)**: 150 * €12.80 = **€1,920**\n- Check: €4,480 + €1,920 = €6,400.\n\n#### 4. Gross Profit Comparison (Revenue = 350 * €25 = €8,750)\n- **FIFO Gross Profit**: €8,750 - €4,150 = **€4,600** (Highest profit, lowest COGS, highest ending inventory balance sheet valuation).\n- **WAC Gross Profit**: €8,750 - €4,480 = **€4,270** (Blended middle ground).\n- **LIFO Gross Profit**: €8,750 - €4,800 = **€3,950** (Lowest profit, highest COGS, lowest ending inventory valuation).\n\n**Regulatory Ruling**: **LIFO is strictly prohibited** under both Portuguese SNC (NCRF 18) and IFRS (IAS 2) because it mismatches physical flow and understates balance sheet inventory value during inflation.",
    "section_reference": "Inventory Cost Flow Methods: FIFO, LIFO, and WAC",
    "section_anchor": "inventory-cost-flow-methods-fifo-lifo-and-wac"
  },
  {
    "id": "wb_fa-balance-income-statements",
    "segment_id": "fa-balance-income-statements",
    "order_index": 3,
    "title": "Applied Case: Multi-Stage Income Statement and Retained Earnings Rollforward",
    "difficulty": "hard",
    "prompt_markdown": "DataVision reports the following operational figures for 2025:\n- Gross Sales Revenue: €500,000\n- Cost of Goods Sold (COGS): €280,000\n- Commercial & Marketing Overhead: €70,000\n- Administrative & General Overhead: €50,000\n- Non-Cash Depreciation & Amortization: €30,000\n- Bank Debt Interest Expense: €15,000\n- Statutory Corporate Income Tax Rate: 25%\n- Beginning Retained Earnings on Jan 1: €140,000\n- Cash Dividends Declared and Paid in 2025: €18,000\n\nRequired:\n1. Construct the multi-stage Income Statement showing Gross Profit, EBITDA, EBIT, EBT, and Net Income.\n2. Execute the Retained Earnings rollforward to determine ending Retained Earnings at Dec 31, 2025.",
    "solution_markdown": "### 1. Multi-Stage Income Statement\n- **Gross Sales Revenue**: €500,000\n- Less **COGS**: (€280,000)\n- **Gross Profit**: **€220,000** (44.0% margin)\n- Less **Commercial & Administrative Overhead**: (€70,000 + €50,000 = €120,000)\n- **EBITDA**: **€100,000** (20.0% margin)\n- Less **Depreciation & Amortization**: (€30,000)\n- **Operating Income (EBIT)**: **€70,000** (14.0% margin)\n- Less **Interest Expense**: (€15,000)\n- **Earnings Before Taxes (EBT)**: **€55,000**\n- Less **Income Tax Expense (25%)**: $0.25 \\times €55,000 = (€13,750)$\n- **Net Income**: **€41,250** (8.25% net margin)\n\n### 2. Retained Earnings Rollforward\n- Beginning Retained Earnings (Jan 1): €140,000\n- Add: Net Income 2025: +€41,250\n- Less: Dividends Paid: (€18,000)\n- **Ending Retained Earnings (Dec 31, 2025)**: €140,000 + €41,250 - €18,000 = **€163,250**.",
    "section_reference": "The Dynamic Link from Net Income to Retained Earnings",
    "section_anchor": "the-dynamic-link-from-net-income-to-retained-earnings"
  },
  {
    "id": "wb_fa-cash-flow-integration",
    "segment_id": "fa-cash-flow-integration",
    "order_index": 4,
    "title": "Applied Case: Indirect Cash Flow Reconciliation & Free Cash Flow to Firm (FCFF)",
    "difficulty": "hard",
    "prompt_markdown": "Company ABC reports Net Income of €41,250 in 2025. Balance sheet changes are:\n- Non-cash Depreciation: €30,000\n- Accounts Receivable increased by €14,000\n- Inventory increased by €18,000\n- Accounts Payable increased by €12,000\n- Capital Expenditures (purchases of plant equipment): €25,000\n- Repaid long-term bank loan principal: €10,000\n- Paid cash dividends: €18,000\n- Operating EBIT is €70,000 and corporate tax rate is 25%.\n\nRequired:\n1. Calculate Cash Flow from Operating Activities (CFO) using the indirect method.\n2. Calculate Cash Flow from Investing Activities (CFI) and Financing Activities (CFF).\n3. Reconcile Net Change in Cash.\n4. Compute Unlevered Free Cash Flow to Firm (FCFF).",
    "solution_markdown": "### 1. Cash Flow from Operating Activities (Indirect CFO)\n- Net Income: €41,250\n- Add back non-cash Depreciation: +€30,000\n- Less Increase in Accounts Receivable (cash outflow): (€14,000)\n- Less Increase in Inventory (cash outflow): (€18,000)\n- Add Increase in Accounts Payable (cash inflow): +€12,000\n- **Net Cash from Operating Activities (CFO)**: €41,250 + €30,000 - €14,000 - €18,000 + €12,000 = **€51,250**\n\n### 2. Investing and Financing Cash Flows\n- **CFI**: Purchase of Equipment (Capex) = **(€25,000)**\n- **CFF**: Loan Principal Repayment (€10,000) + Dividends Paid (€18,000) = **(€28,000)**\n\n### 3. Net Change in Cash\n- $\\Delta \\text{Cash} = \\text{CFO} + \\text{CFI} + \\text{CFF} = €51,250 - €25,000 - €28,000 = **-€1,750**$\n\n### 4. Unlevered Free Cash Flow to Firm (FCFF)\n- $\\text{EBIT}(1 - t) = €70,000 \\times (1 - 0.25) = €52,500$\n- Add D&A: +€30,000\n- Less Capex: (€25,000)\n- Less $\\Delta\\text{NWC} = (\\Delta\\text{AR} + \\Delta\\text{Inv} - \\Delta\\text{AP}) = €14,000 + €18,000 - €12,000 = €20,000$\n- **FCFF**: €52,500 + €30,000 - €25,000 - €20,000 = **€37,500**.",
    "section_reference": "Indirect Operating Cash Flow Reconciliation: The CFO Bridge",
    "section_anchor": "indirect-operating-cash-flow-reconciliation-the-cfo-bridge"
  },
  {
    "id": "wb_fa-common-size-trends",
    "segment_id": "fa-common-size-trends",
    "order_index": 5,
    "title": "Applied Case: Joe’s Gadgets Vertical and Horizontal Trend Diagnosis",
    "difficulty": "hard",
    "prompt_markdown": "Joe’s Gadgets presents financial results for 2016 and 2017:\n- Sales: €14.8m in 2016; €17.5m in 2017\n- COGS: €11.2m in 2016; €13.3m in 2017\n- Commercial & Admin Expenses: €2.1m in 2016; €2.7m in 2017\n- Accounts Receivable: €2.0m in 2016; €4.0m in 2017\n- Inventory: €2.0m in 2016; €4.0m in 2017\n\nRequired:\n1. Perform vertical common-size analysis on the Income Statement for both years.\n2. Perform horizontal trend analysis (% change) on Sales, COGS, Receivables, and Inventory.\n3. Formulate an diagnostic assessment of Joe’s Gadgets revenue growth quality.",
    "solution_markdown": "### 1. Vertical Common-Size (% of Sales)\n- **2016**: COGS = 75.68% (€11.2m / €14.8m); Commercial/Admin = 14.19% (€2.1m / €14.8m); Gross Margin = 24.32%.\n- **2017**: COGS = 76.00% (€13.3m / €17.5m); Commercial/Admin = 15.43% (€2.7m / €17.5m); Gross Margin = 24.00%.\n- *Finding*: Cost structure remained fairly stable in COGS, but administrative overhead expanded faster than sales.\n\n### 2. Horizontal Growth Rates (2016 to 2017)\n- **Sales**: $(17.5 - 14.8) / 14.8 = **+18.24\\%**$\n- **COGS**: $(13.3 - 11.2) / 11.2 = **+18.75\\%**$\n- **Accounts Receivable**: $(4.0 - 2.0) / 2.0 = **+100.0\\%**$\n- **Inventory**: $(4.0 - 2.0) / 2.0 = **+100.0\\%**$\n\n### 3. Diagnostic Assessment\nWhile revenue grew an attractive 18.2%, working capital expanded by 100%. Receivables and inventory grew more than five times faster than revenue. This indicates artificial channel stuffing, loose customer credit, or unsold slow-moving stock, causing a massive operating cash drain.",
    "section_reference": "Joe's Gadgets Multi-Year Trend Diagnosis Case",
    "section_anchor": "joe-s-gadgets-multi-year-trend-diagnosis-case"
  },
  {
    "id": "wb_fa-liquidity-activity-ratios",
    "segment_id": "fa-liquidity-activity-ratios",
    "order_index": 6,
    "title": "Applied Case: Liquidity and Cash Conversion Cycle Modeling",
    "difficulty": "hard",
    "prompt_markdown": "Joe’s Gadgets balance sheet details:\n- 2016: Cash €0.5m, Receivables €2.0m, Inventory €2.0m, Current Liabilities €4.5m, Sales €14.8m, COGS €11.2m, Payables €2.5m.\n- 2017: Cash €0.1m, Receivables €4.0m, Inventory €4.0m, Current Liabilities €7.0m, Sales €17.5m, COGS €13.3m, Payables €3.0m.\n\nRequired:\n1. Compute Current Ratio and Quick Ratio for 2016 and 2017.\n2. Compute Days Sales Outstanding (DSO), Days Inventory Outstanding (DIO), and Days Payables Outstanding (DPO) for 2017 (365-day convention, ending balances).\n3. Compute the Cash Conversion Cycle (CCC) for 2017 and interpret the result.",
    "solution_markdown": "### 1. Liquidity Ratios\n- **2016**:\n  - Current Ratio: $(0.5 + 2.0 + 2.0) / 4.5 = 4.5 / 4.5 = **1.00\\times**$\n  - Quick Ratio: $(0.5 + 2.0) / 4.5 = 2.5 / 4.5 = **0.56\\times**$\n- **2017**:\n  - Current Ratio: $(0.1 + 4.0 + 4.0) / 7.0 = 8.1 / 7.0 = **1.16\\times**$\n  - Quick Ratio: $(0.1 + 4.0) / 7.0 = 4.1 / 7.0 = **0.59\\times**$\n- *Finding*: Cash plummeted from €0.5m to €0.1m. Quick coverage remains alarmingly weak (~0.59x).\n\n### 2. Operating Activity Ratios (2017)\n- **DSO**: $(€4.0m / €17.5m) \\times 365 = **83.43\\text{ days}**$\n- **DIO**: $(€4.0m / €13.3m) \\times 365 = **109.77\\text{ days}**$\n- **DPO**: $(€3.0m / €13.3m) \\times 365 = **82.33\\text{ days}**$\n\n### 3. Cash Conversion Cycle (CCC)\n$$\\text{CCC} = \\text{DIO} + \\text{DSO} - \\text{DPO} = 109.77 + 83.43 - 82.33 = **110.87\\text{ days}$$\n*Interpretation*: Joe’s Gadgets requires ~111 days to convert cash invested in operations back into cash collections. The company is funding nearly four months of operational inventory and customer financing through expensive bank borrowing.",
    "section_reference": "Days Sales Outstanding and the Cash Conversion Cycle",
    "section_anchor": "days-sales-outstanding-and-the-cash-conversion-cycle"
  },
  {
    "id": "wb_fa-debt-profitability-ratios",
    "segment_id": "fa-debt-profitability-ratios",
    "order_index": 7,
    "title": "Applied Case: 3-Stage DuPont Decomposition & Solvency Diagnostics",
    "difficulty": "hard",
    "prompt_markdown": "Joe’s Gadgets reports the following metrics:\n- 2016: Net Income €0.91m, Sales €14.8m, Total Assets €8.5m, Equity €7.0m, EBIT €1.50m, Interest €0.15m.\n- 2017: Net Income €1.20m, Sales €17.5m, Total Assets €18.7m, Equity €7.7m, EBIT €1.50m, Interest €0.40m.\n\nRequired:\n1. Calculate Times Interest Earned (TIE) for 2016 and 2017.\n2. Decompose Return on Equity (ROE) using the 3-stage DuPont model for 2016 and 2017.\n3. Disclose whether Joe’s Gadgets ROE increase from 13.0% to 15.6% represents sustainable operational improvement.",
    "solution_markdown": "### 1. Times Interest Earned (TIE)\n- **2016 TIE**: $1.50 / 0.15 = **10.0\\times**$\n- **2017 TIE**: $1.50 / 0.40 = **3.75\\times**$\n- *Finding*: Interest coverage collapsed by 62.5% due to new short-term debt.\n\n### 2. 3-Stage DuPont Decomposition (ROE = Net Margin * Asset Turnover * Leverage)\n- **2016**:\n  - Net Margin: €0.91m / €14.8m = **6.15%**\n  - Asset Turnover: €14.8m / €8.5m = **1.74x**\n  - Financial Leverage (Assets/Equity): €8.5m / €7.0m = **1.21x**\n  - $\\text{ROE} = 0.0615 \\times 1.74 \\times 1.21 = **13.0\\%**$\n- **2017**:\n  - Net Margin: €1.20m / €17.5m = **6.86%**\n  - Asset Turnover: €17.5m / €18.7m = **0.94x** (Sharp decline!)\n  - Financial Leverage (Assets/Equity): €18.7m / €7.7m = **2.43x** (Doubled!)\n  - $\\text{ROE} = 0.0686 \\times 0.94 \\times 2.43 = **15.6\\%**$\n\n### 3. Diagnostic Assessment\nThe ROE gain (13.0% to 15.6%) is an optical illusion driven entirely by balance sheet debt leverage (Equity Multiplier surged from 1.21x to 2.43x). Asset efficiency collapsed from 1.74x to 0.94x. If debt service costs increase or sales slow, the business faces acute financial distress.",
    "section_reference": "The 3-Stage DuPont Decomposition Framework",
    "section_anchor": "the-3-stage-dupont-decomposition-framework"
  },
  {
    "id": "wb_fa-market-ratios-diagnosis",
    "segment_id": "fa-market-ratios-diagnosis",
    "order_index": 8,
    "title": "Applied Case: Management Control Dashboard Design & Turnaround Action Plan",
    "difficulty": "hard",
    "prompt_markdown": "You are appointed interim Chief Financial Officer of Joe’s Gadgets after the 2017 balance sheet audit.\n\nRequired:\n1. Construct a Management Control OKR framework with 1 qualitative Objective and 3 measurable Key Results to restore solvency within 6 months.\n2. Design an operational executive dashboard specifying 4 leading indicators (not lagging accounting outcomes) to prevent recurring working capital crises.\n3. Detail 3 operational restructuring steps to liberate cash and pay down €2.5m of short-term bank debt.",
    "solution_markdown": "### 1. Management Control OKR Framework\n- **Objective**: Restore working capital discipline and debt coverage to investment-grade solvency.\n- **Key Result 1**: Reduce Days Sales Outstanding (DSO) from 83 days to 45 days through strict credit policies.\n- **Key Result 2**: Liquidate €2.0m of excess inventory, elevating Inventory Turnover from 3.3x to 6.0x.\n- **Key Result 3**: Increase Times Interest Earned (TIE) from 3.75x to > 7.0x by retiring €2.0m of short-term debt.\n\n### 2. Executive Dashboard (Leading Operational Metrics)\n1. **Weekly Aging Schedule of Receivables**: Percentage of outstanding invoices > 45 days overdue (Target: < 5%).\n2. **Inventory Stock Velocity by SKU**: Weekly turnover tracking identifying dormant or slow-moving stock.\n3. **Supplier Payment Milestone Variance**: Discrepancy between promised vendor disbursements and actual cash.\n4. **Daily Unlevered Cash Burn**: Real-time net daily cash movement across operational accounts.\n\n### 3. Operational Restructuring Plan\n1. **Discounted Receivables Collection**: Offer 2/10 Net 30 terms to accelerate cash collection from overdue accounts, freeing ~€1.5m in cash.\n2. **Production Freeze & Clearance Sale**: Halt new manufacturing runs for 60 days to burn down existing warehouse inventory, generating €1.5m cash.\n3. **Debt Paydown**: Apply €2.5m of liberated operational cash to retire high-interest short-term debt, eliminating €200k in annual interest expense.",
    "section_reference": "Management Control Systems, OKRs, and Executive Dashboards",
    "section_anchor": "management-control-systems-okrs-and-executive-dashboards"
  },
  {
    "id": "wb_fa-valuation-methods",
    "segment_id": "fa-valuation-methods",
    "order_index": 9,
    "title": "Applied Case: Relative Valuation Multiples & Trading Comparables Screening",
    "difficulty": "hard",
    "prompt_markdown": "RetailTech generates:\n- Revenue: €120m\n- EBITDA: €22m\n- Net Income: €11m\n- Cash & Equivalents: €14m\n- Total Financial Debt: €46m\n- Diluted Shares: 10 million shares\n\nComparable Peer Group Medians:\n- EV / EBITDA = 8.5x\n- P / E = 16.0x\n- EV / Sales = 1.4x\n\nRequired:\n1. Estimate Enterprise Value and Equity Value using the EV/EBITDA multiple.\n2. Estimate Equity Value using the P/E multiple.\n3. Estimate Enterprise Value and Equity Value using the EV/Sales multiple.\n4. Determine implied share price under each method and explain which multiple is most reliable.",
    "solution_markdown": "### 1. EV/EBITDA Method\n- $\\text{EV} = €22m \\times 8.5 = **€187.0m**$\n- $\\text{Net Debt} = €46m - €14m = €32.0m$\n- $\\text{Equity Value} = \\text{EV} - \\text{Net Debt} = €187.0m - €32.0m = **€155.0m**$\n- **Share Price**: €155.0m / 10m shares = **€15.50**\n\n### 2. P/E Method\n- $\\text{Equity Value} = €11m \\times 16.0 = **€176.0m**$\n- **Share Price**: €176.0m / 10m shares = **€17.60**\n\n### 3. EV/Sales Method\n- $\\text{EV} = €120m \\times 1.4 = **€168.0m**$\n- $\\text{Equity Value} = €168.0m - €32.0m = **€136.0m**$\n- **Share Price**: €136.0m / 10m shares = **€13.60**\n\n### 4. Valuation Synthesis & Reliability\n- **Valuation Range**: €13.60 to €17.60 per share.\n- **Most Reliable**: **EV/EBITDA (€15.50)**. It is capital-structure neutral, normalizes for RetailTech’s €32m net debt, and reflects operating cash flow before depreciation policies, unlike EV/Sales which ignores profitability or P/E which is distorted by leverage.",
    "section_reference": "EBITDA Multiples and Operating Performance Comparables",
    "section_anchor": "ebitda-multiples-and-operating-performance-comparables"
  },
  {
    "id": "wb_fa-wacc-discounting",
    "segment_id": "fa-wacc-discounting",
    "order_index": 10,
    "title": "Applied Case: Startup Z WACC Calculation & Project Appraisal (NPV vs IRR)",
    "difficulty": "hard",
    "prompt_markdown": "Startup Z capital structure:\n- Equity Market Value: €60m (Beta = 1.35)\n- Debt Market Value: €20m (Pre-tax borrowing rate Kd = 7.0%)\n- 10-Year Sovereign Risk-Free Rate (Rf): 3.0%\n- Equity Market Risk Premium (ERP): 6.0%\n- Corporate Tax Rate: 25%\n\nStartup Z is evaluating Project Beta:\n- Initial Outlay: €30m\n- Annual Cash Inflow: €9.5m for 4 years\n\nRequired:\n1. Compute Startup Z's Cost of Equity (Ke) using CAPM.\n2. Compute the after-tax Cost of Debt and the company's WACC.\n3. Compute Project Beta's Net Present Value (NPV) and Internal Rate of Return (IRR).\n4. Provide an investment decision recommendation.",
    "solution_markdown": "### 1. Cost of Equity (CAPM)\n$$K_e = R_f + \\beta \\times (R_m - R_f) = 3.0\\% + 1.35 \\times 6.0\\% = 3.0\\% + 8.1\\% = 11.1\\%$$\n\n### 2. After-Tax Debt and WACC\n- Total Capital: €60m + €20m = €80m (Weight Equity = 75%, Weight Debt = 25%)\n- After-tax Cost of Debt: 7.0% * (1 - 0.25) = **5.25%**\n- **WACC**:\n  $$\\text{WACC} = (0.75 \\times 11.1\\%) + (0.25 \\times 5.25\\%) = 8.325\\% + 1.3125\\% = 9.64\\%$$\n\n### 3. Project Beta Appraisal\n- Present Value of 4-year Annuity of €9.5m @ 9.64%:\n  $$\\text{PV Factor} = \\frac{1 - (1.0964)^{-4}}{0.0964} = \\frac{1 - 0.6922}{0.0964} = 3.1925$$\n  $$\\text{PV of Inflows} = 9.5 \\times 3.1925 = 30.33\\text{ million}$$\n- **NPV**: €30.33m - €30.00m = **+€0.33 million** (Accretive)\n- **IRR**: Solving $30 = 9.5 \\times \\frac{1 - (1+r)^{-4}}{r} \\implies r \\approx 10.15\\%$\n\n### 4. Recommendation\n**Accept Project Beta**. NPV > 0 (+€330,000) and IRR (10.15%) exceeds the 9.64% WACC hurdle rate, adding net economic value to Startup Z equity shareholders.",
    "section_reference": "Startup Z WACC and Capital Budgeting Case",
    "section_anchor": "startup-z-wacc-and-capital-budgeting-case"
  },
  {
    "id": "wb_fa-dcf-terminal-value",
    "segment_id": "fa-dcf-terminal-value",
    "order_index": 11,
    "title": "Applied Case: 5-Year Two-Stage DCF Modeling with Perpetual Growth",
    "difficulty": "hard",
    "prompt_markdown": "A corporation projects Unlevered Free Cash Flows (FCFF) for the next 5 years:\n- Year 1: €15.0m\n- Year 2: €18.0m\n- Year 3: €21.0m\n- Year 4: €24.0m\n- Year 5: €26.0m\nParameters:\n- WACC: 9.0%\n- Perpetual Growth Rate (g): 2.5%\n- Cash held: €12.0m\n- Financial Debt: €65.0m\n- Diluted Shares: 15 million\n\nRequired (use year-end discounting convention):\n1. Calculate the Present Value (PV) of explicit cash flows (Years 1 to 5).\n2. Calculate the Terminal Value at Year 5 using the Gordon Growth Model and discount it to Year 0.\n3. Compute total Enterprise Value and Equity Value.\n4. Determine Intrinsic Value Per Share.",
    "solution_markdown": "### 1. PV of Explicit Cash Flows (Years 1 to 5 @ 9.0%)\n- Year 1: €15.0m / (1.09)^1 = **€13.76m**\n- Year 2: €18.0m / (1.09)^2 = **€15.15m**\n- Year 3: €21.0m / (1.09)^3 = **€16.22m**\n- Year 4: €24.0m / (1.09)^4 = **€17.00m**\n- Year 5: €26.0m / (1.09)^5 = **€16.90m**\n- **Sum of PV of Explicit Cash Flows**: €13.76 + €15.15 + €16.22 + €17.00 + €16.90 = **€79.03m**\n\n### 2. Terminal Value Calculation\n- Next Year Cash Flow (Year 6): $\\text{FCFF}_6 = €26.0m \\times (1 + 0.025) = €26.65m$\n- Terminal Value at Year 5:\n  $$\\text{TV}_5 = \\frac{€26.65m}{0.09 - 0.025} = \\frac{€26.65m}{0.065} = **€410.00m**$$\n- **PV of Terminal Value at Year 0**: €410.00m / (1.09)^5 = €410.00m / 1.538624 = **€266.47m**\n\n### 3. Enterprise Value and Equity Value\n- **Enterprise Value (EV)**: €79.03m + €266.47m = **€345.50m**\n- Less Net Debt: Debt (€65.0m) - Cash (€12.0m) = €53.0m\n- **Equity Value**: €345.50m - €53.0m = **€292.50m**\n\n### 4. Per Share Valuation\n- **Intrinsic Value Per Share**: €292.50m / 15.0m shares = **€19.50 per share**.",
    "section_reference": "Worked 5-Year DCF with Perpetual Growth Case",
    "section_anchor": "worked-5-year-dcf-with-perpetual-growth-case"
  },
  {
    "id": "wb_fa-equity-value-challenge",
    "segment_id": "fa-equity-value-challenge",
    "order_index": 12,
    "title": "Applied Case: Company X 6-Step Enterprise-to-Equity Valuation Defense",
    "difficulty": "hard",
    "prompt_markdown": "Company X is undergoing an acquisition appraisal. You are given:\n- Discounted Explicit Cash Flows (Years 1-5): €85.0m\n- Year 5 FCFF: €22.0m; WACC: 8.5%; Perpetual growth: 2.0%\n- Non-Operating Cash & Marketable Securities: €25.0m\n- Fair Market Value of Surplus Real Estate: €15.0m\n- Total Senior Bank Loans & Bonds: €110.0m\n- Unfunded Defined-Benefit Pension Deficit: €12.0m\n- Non-Controlling (Minority) Interests: €8.0m\n- Basic Shares Outstanding: 20 million\n- Executive Stock Options: 2 million options with €10.00 exercise price\n- Current Market Stock Price: €11.50\n\nRequired:\n1. Calculate Terminal Value and Enterprise Value.\n2. Complete the 6-step bridge to Equity Value.\n3. Apply the Treasury Stock Method to determine diluted shares.\n4. Calculate Intrinsic Value Per Share and issue a formal Buy/Hold/Sell recommendation.",
    "solution_markdown": "### 1. Enterprise Value\n- $\\text{FCFF}_6 = €22.0m \\times 1.02 = €22.44m$\n- $\\text{TV}_5 = €22.44m / (0.085 - 0.02) = €22.44m / 0.065 = **€345.23m**$\n- $\\text{PV of TV}_5 = €345.23m / (1.085)^5 = €345.23m / 1.50366 = **€229.59m**$\n- **Enterprise Value (EV)**: €85.0m + €229.59m = **€314.59m**\n\n### 2. 6-Step Bridge to Equity Value\n- Base Enterprise Value: €314.59m\n- Add Non-Operating Cash: +€25.0m\n- Add Surplus Real Estate: +€15.0m\n- Less Financial Debt: (€110.0m)\n- Less Unfunded Pension Deficit: (€12.0m)\n- Less Minority Interests: (€8.0m)\n- **Equity Value**: €314.59m + €25m + €15m - €110m - €12m - €8m = **€224.59m**\n\n### 3. Treasury Stock Method Diluted Shares\n- In-the-money options: 2m options @ strike €10 (vs estimated price ~€11-12)\n- Option cash proceeds: 2m * €10 = €20m\n- Preliminary share price = €224.59m / 20m = €11.23\n- Shares repurchased: €20m / €11.23 = 1.78m shares\n- Net diluted shares: 20m + (2.0m - 1.78m) = **20.22 million shares**\n\n### 4. Per Share Intrinsic Value & Investment Recommendation\n- Total Equity including option cash proceeds: €224.59m + €20.0m = €244.59m / 22.0m shares = **€11.12 per share**\n- (Or using net treasury shares: €224.59m / 20.22m = **€11.11 per share**).\n- **Recommendation**: Current market price is €11.50 vs Intrinsic Value of ~€11.12. The stock is fairly priced to slightly overvalued (+3.4% premium). Issue a **HOLD** recommendation; do not purchase without a minimum 15% discount (target entry below €9.45).",
    "section_reference": "Company X Comprehensive 2024 Valuation Challenge Case",
    "section_anchor": "company-x-comprehensive-2024-valuation-challenge-case"
  }
];

export const flashcards = [
  {
    "id": "fc_fa-accounting-foundations_1",
    "segment_id": "fa-accounting-foundations",
    "order_index": 1,
    "front": "What does the accrual principle determine?",
    "back": "Income and costs are recognized when earned or incurred, regardless of when cash is received or paid.",
    "category": "Accounting Foundations & Double Entry",
    "section_reference": "Accounting Foundations & Double Entry",
    "section_anchor": "core-accounting-principles"
  },
  {
    "id": "fc_fa-accounting-foundations_2",
    "segment_id": "fa-accounting-foundations",
    "order_index": 2,
    "front": "What does substance over form require?",
    "back": "Record a transaction according to its economic reality rather than only its legal wording.",
    "category": "Accounting Foundations & Double Entry",
    "section_reference": "Accounting Foundations & Double Entry",
    "section_anchor": "core-accounting-principles"
  },
  {
    "id": "fc_fa-accounting-foundations_3",
    "segment_id": "fa-accounting-foundations",
    "order_index": 3,
    "front": "What is the basic balance-sheet identity?",
    "back": "Assets equal liabilities plus equity.",
    "category": "Accounting Foundations & Double Entry",
    "section_reference": "Accounting Foundations & Double Entry",
    "section_anchor": "core-accounting-principles"
  },
  {
    "id": "fc_fa-accounting-foundations_4",
    "segment_id": "fa-accounting-foundations",
    "order_index": 4,
    "front": "In double-entry accounting, what must be true of each journal entry?",
    "back": "Total debit amounts equal total credit amounts.",
    "category": "Accounting Foundations & Double Entry",
    "section_reference": "Accounting Foundations & Double Entry",
    "section_anchor": "core-accounting-principles"
  },
  {
    "id": "fc_fa-accounting-foundations_5",
    "segment_id": "fa-accounting-foundations",
    "order_index": 5,
    "front": "Which account families appear on the balance sheet?",
    "back": "Assets, liabilities and equity.",
    "category": "Accounting Foundations & Double Entry",
    "section_reference": "Accounting Foundations & Double Entry",
    "section_anchor": "accounts-and-the-accounting-equation"
  },
  {
    "id": "fc_fa-accounting-foundations_6",
    "segment_id": "fa-accounting-foundations",
    "order_index": 6,
    "front": "Which account families primarily determine period profit?",
    "back": "Revenue and expense accounts.",
    "category": "Accounting Foundations & Double Entry",
    "section_reference": "Accounting Foundations & Double Entry",
    "section_anchor": "accounts-and-the-accounting-equation"
  },
  {
    "id": "fc_fa-accounting-foundations_7",
    "segment_id": "fa-accounting-foundations",
    "order_index": 7,
    "front": "A company invoices a customer €1,000 on credit. What is recorded?",
    "back": "Debit accounts receivable €1,000 and credit revenue €1,000.",
    "category": "Accounting Foundations & Double Entry",
    "section_reference": "Accounting Foundations & Double Entry",
    "section_anchor": "accounts-and-the-accounting-equation"
  },
  {
    "id": "fc_fa-accounting-foundations_8",
    "segment_id": "fa-accounting-foundations",
    "order_index": 8,
    "front": "When that customer pays the €1,000 invoice, what is recorded?",
    "back": "Debit cash and credit accounts receivable; revenue is not recorded again.",
    "category": "Accounting Foundations & Double Entry",
    "section_reference": "Accounting Foundations & Double Entry",
    "section_anchor": "accounts-and-the-accounting-equation"
  },
  {
    "id": "fc_fa-period-end-adjustments_1",
    "segment_id": "fa-period-end-adjustments",
    "order_index": 1,
    "front": "What does FIFO assume about inventory costs?",
    "back": "The earliest acquired costs are assigned to the units sold first.",
    "category": "Inventory Valuation & Period-End Adjustments",
    "section_reference": "Inventory Valuation & Period-End Adjustments",
    "section_anchor": "inventory-cost-flow-methods-fifo-lifo-and-wac"
  },
  {
    "id": "fc_fa-period-end-adjustments_2",
    "segment_id": "fa-period-end-adjustments",
    "order_index": 2,
    "front": "How is weighted average cost calculated?",
    "back": "Divide total cost available for sale by total units available for sale.",
    "category": "Inventory Valuation & Period-End Adjustments",
    "section_reference": "Inventory Valuation & Period-End Adjustments",
    "section_anchor": "inventory-cost-flow-methods-fifo-lifo-and-wac"
  },
  {
    "id": "fc_fa-period-end-adjustments_3",
    "segment_id": "fa-period-end-adjustments",
    "order_index": 3,
    "front": "Under rising prices, why can FIFO and LIFO produce different profit?",
    "back": "They assign different acquisition costs to COGS and ending inventory.",
    "category": "Inventory Valuation & Period-End Adjustments",
    "section_reference": "Inventory Valuation & Period-End Adjustments",
    "section_anchor": "inventory-cost-flow-methods-fifo-lifo-and-wac"
  },
  {
    "id": "fc_fa-period-end-adjustments_4",
    "segment_id": "fa-period-end-adjustments",
    "order_index": 4,
    "front": "What is the purpose of depreciation?",
    "back": "Allocate an asset’s depreciable cost across its useful life.",
    "category": "Inventory Valuation & Period-End Adjustments",
    "section_reference": "Inventory Valuation & Period-End Adjustments",
    "section_anchor": "inventory-cost-flow-methods-fifo-lifo-and-wac"
  },
  {
    "id": "fc_fa-period-end-adjustments_5",
    "segment_id": "fa-period-end-adjustments",
    "order_index": 5,
    "front": "A €12,000 asset has a four-year life and zero residual value. What is straight-line annual depreciation?",
    "back": "€3,000 per year.",
    "category": "Inventory Valuation & Period-End Adjustments",
    "section_reference": "Inventory Valuation & Period-End Adjustments",
    "section_anchor": "tangible-asset-depreciation-and-impairment"
  },
  {
    "id": "fc_fa-period-end-adjustments_6",
    "segment_id": "fa-period-end-adjustments",
    "order_index": 6,
    "front": "What is the immediate cash effect of recording depreciation?",
    "back": "None; it is a non-cash expense in the period recorded.",
    "category": "Inventory Valuation & Period-End Adjustments",
    "section_reference": "Inventory Valuation & Period-End Adjustments",
    "section_anchor": "tangible-asset-depreciation-and-impairment"
  },
  {
    "id": "fc_fa-period-end-adjustments_7",
    "segment_id": "fa-period-end-adjustments",
    "order_index": 7,
    "front": "How is an unpaid year-end salary accrual recorded?",
    "back": "Recognize salary expense and an accrued liability.",
    "category": "Inventory Valuation & Period-End Adjustments",
    "section_reference": "Inventory Valuation & Period-End Adjustments",
    "section_anchor": "tangible-asset-depreciation-and-impairment"
  },
  {
    "id": "fc_fa-period-end-adjustments_8",
    "segment_id": "fa-period-end-adjustments",
    "order_index": 8,
    "front": "What happens to prepaid insurance as coverage is used?",
    "back": "Recognize insurance expense and reduce the prepaid asset.",
    "category": "Inventory Valuation & Period-End Adjustments",
    "section_reference": "Inventory Valuation & Period-End Adjustments",
    "section_anchor": "tangible-asset-depreciation-and-impairment"
  },
  {
    "id": "fc_fa-balance-income-statements_1",
    "segment_id": "fa-balance-income-statements",
    "order_index": 1,
    "front": "What does the balance sheet report?",
    "back": "Assets, liabilities and equity at a particular date.",
    "category": "Balance Sheet & Income Statement",
    "section_reference": "Balance Sheet & Income Statement",
    "section_anchor": "income-statement-multistage-margin-structure"
  },
  {
    "id": "fc_fa-balance-income-statements_2",
    "segment_id": "fa-balance-income-statements",
    "order_index": 2,
    "front": "What does the income statement report?",
    "back": "Revenues and expenses over a defined period.",
    "category": "Balance Sheet & Income Statement",
    "section_reference": "Balance Sheet & Income Statement",
    "section_anchor": "income-statement-multistage-margin-structure"
  },
  {
    "id": "fc_fa-balance-income-statements_3",
    "segment_id": "fa-balance-income-statements",
    "order_index": 3,
    "front": "How is gross profit calculated?",
    "back": "Revenue minus cost of goods sold.",
    "category": "Balance Sheet & Income Statement",
    "section_reference": "Balance Sheet & Income Statement",
    "section_anchor": "income-statement-multistage-margin-structure"
  },
  {
    "id": "fc_fa-balance-income-statements_4",
    "segment_id": "fa-balance-income-statements",
    "order_index": 4,
    "front": "How is EBIT distinguished from EBT?",
    "back": "EBIT is before interest and tax; EBT is after interest but before tax.",
    "category": "Balance Sheet & Income Statement",
    "section_reference": "Balance Sheet & Income Statement",
    "section_anchor": "income-statement-multistage-margin-structure"
  },
  {
    "id": "fc_fa-balance-income-statements_5",
    "segment_id": "fa-balance-income-statements",
    "order_index": 5,
    "front": "How does net income typically affect the balance sheet?",
    "back": "It increases retained earnings before dividends and other equity movements.",
    "category": "Balance Sheet & Income Statement",
    "section_reference": "Balance Sheet & Income Statement",
    "section_anchor": "the-dynamic-link-from-net-income-to-retained-earnings"
  },
  {
    "id": "fc_fa-balance-income-statements_6",
    "segment_id": "fa-balance-income-statements",
    "order_index": 6,
    "front": "Why can a credit sale increase profit before cash arrives?",
    "back": "Revenue is recognized when earned under accrual accounting, with receivables recorded.",
    "category": "Balance Sheet & Income Statement",
    "section_reference": "Balance Sheet & Income Statement",
    "section_anchor": "the-dynamic-link-from-net-income-to-retained-earnings"
  },
  {
    "id": "fc_fa-balance-income-statements_7",
    "segment_id": "fa-balance-income-statements",
    "order_index": 7,
    "front": "What does a dividend payment do to cash and equity?",
    "back": "It reduces cash and equity but is not an operating expense.",
    "category": "Balance Sheet & Income Statement",
    "section_reference": "Balance Sheet & Income Statement",
    "section_anchor": "the-dynamic-link-from-net-income-to-retained-earnings"
  },
  {
    "id": "fc_fa-balance-income-statements_8",
    "segment_id": "fa-balance-income-statements",
    "order_index": 8,
    "front": "Where are cash, receivables and inventory normally classified?",
    "back": "As current assets.",
    "category": "Balance Sheet & Income Statement",
    "section_reference": "Balance Sheet & Income Statement",
    "section_anchor": "the-dynamic-link-from-net-income-to-retained-earnings"
  },
  {
    "id": "fc_fa-cash-flow-integration_1",
    "segment_id": "fa-cash-flow-integration",
    "order_index": 1,
    "front": "What does the cash-flow statement explain?",
    "back": "Cash inflows and outflows during a period and their effect on cash.",
    "category": "Cash Flow & Integrated Reporting",
    "section_reference": "Cash Flow & Integrated Reporting",
    "section_anchor": "the-three-pillars-operating-investing-and-financing-flows"
  },
  {
    "id": "fc_fa-cash-flow-integration_2",
    "segment_id": "fa-cash-flow-integration",
    "order_index": 2,
    "front": "What are the three cash-flow statement sections?",
    "back": "Operating, investing and financing activities.",
    "category": "Cash Flow & Integrated Reporting",
    "section_reference": "Cash Flow & Integrated Reporting",
    "section_anchor": "the-three-pillars-operating-investing-and-financing-flows"
  },
  {
    "id": "fc_fa-cash-flow-integration_3",
    "segment_id": "fa-cash-flow-integration",
    "order_index": 3,
    "front": "Where is a purchase of equipment classified?",
    "back": "Investing activities as a cash outflow.",
    "category": "Cash Flow & Integrated Reporting",
    "section_reference": "Cash Flow & Integrated Reporting",
    "section_anchor": "the-three-pillars-operating-investing-and-financing-flows"
  },
  {
    "id": "fc_fa-cash-flow-integration_4",
    "segment_id": "fa-cash-flow-integration",
    "order_index": 4,
    "front": "Where is a new bank loan received classified?",
    "back": "Financing activities as a cash inflow.",
    "category": "Cash Flow & Integrated Reporting",
    "section_reference": "Cash Flow & Integrated Reporting",
    "section_anchor": "the-three-pillars-operating-investing-and-financing-flows"
  },
  {
    "id": "fc_fa-cash-flow-integration_5",
    "segment_id": "fa-cash-flow-integration",
    "order_index": 5,
    "front": "What is the usual cash effect of an increase in receivables?",
    "back": "It uses operating cash because revenue has not yet been collected.",
    "category": "Cash Flow & Integrated Reporting",
    "section_reference": "Cash Flow & Integrated Reporting",
    "section_anchor": "free-cash-flow-formulation-and-capital-reinvestment"
  },
  {
    "id": "fc_fa-cash-flow-integration_6",
    "segment_id": "fa-cash-flow-integration",
    "order_index": 6,
    "front": "What is the usual cash effect of an increase in payables?",
    "back": "It supports operating cash because some costs remain unpaid.",
    "category": "Cash Flow & Integrated Reporting",
    "section_reference": "Cash Flow & Integrated Reporting",
    "section_anchor": "free-cash-flow-formulation-and-capital-reinvestment"
  },
  {
    "id": "fc_fa-cash-flow-integration_7",
    "segment_id": "fa-cash-flow-integration",
    "order_index": 7,
    "front": "Why is depreciation added back in an indirect operating cash-flow reconciliation?",
    "back": "It reduced accounting profit without a current-period cash payment.",
    "category": "Cash Flow & Integrated Reporting",
    "section_reference": "Cash Flow & Integrated Reporting",
    "section_anchor": "free-cash-flow-formulation-and-capital-reinvestment"
  },
  {
    "id": "fc_fa-cash-flow-integration_8",
    "segment_id": "fa-cash-flow-integration",
    "order_index": 8,
    "front": "How does the lecture define free cash flow in its example?",
    "back": "Operating cash flow less cash investment in fixed assets.",
    "category": "Cash Flow & Integrated Reporting",
    "section_reference": "Cash Flow & Integrated Reporting",
    "section_anchor": "free-cash-flow-formulation-and-capital-reinvestment"
  },
  {
    "id": "fc_fa-common-size-trends_1",
    "segment_id": "fa-common-size-trends",
    "order_index": 1,
    "front": "What does vertical common-size analysis do?",
    "back": "Expresses statement line items as percentages of a common base.",
    "category": "Common-Size, Trend & Comparative Analysis",
    "section_reference": "Common-Size, Trend & Comparative Analysis",
    "section_anchor": "horizontal-and-multi-year-trend-analysis"
  },
  {
    "id": "fc_fa-common-size-trends_2",
    "segment_id": "fa-common-size-trends",
    "order_index": 2,
    "front": "What is a common income-statement base for common-size analysis?",
    "back": "Sales or revenue.",
    "category": "Common-Size, Trend & Comparative Analysis",
    "section_reference": "Common-Size, Trend & Comparative Analysis",
    "section_anchor": "horizontal-and-multi-year-trend-analysis"
  },
  {
    "id": "fc_fa-common-size-trends_3",
    "segment_id": "fa-common-size-trends",
    "order_index": 3,
    "front": "What is a common balance-sheet base for common-size analysis?",
    "back": "Total assets.",
    "category": "Common-Size, Trend & Comparative Analysis",
    "section_reference": "Common-Size, Trend & Comparative Analysis",
    "section_anchor": "horizontal-and-multi-year-trend-analysis"
  },
  {
    "id": "fc_fa-common-size-trends_4",
    "segment_id": "fa-common-size-trends",
    "order_index": 4,
    "front": "What does horizontal analysis compare?",
    "back": "Financial amounts across periods, including absolute and percentage changes.",
    "category": "Common-Size, Trend & Comparative Analysis",
    "section_reference": "Common-Size, Trend & Comparative Analysis",
    "section_anchor": "horizontal-and-multi-year-trend-analysis"
  },
  {
    "id": "fc_fa-common-size-trends_5",
    "segment_id": "fa-common-size-trends",
    "order_index": 5,
    "front": "Why can three to five years improve trend analysis over two?",
    "back": "A longer series helps distinguish persistent patterns from one-period noise.",
    "category": "Common-Size, Trend & Comparative Analysis",
    "section_reference": "Common-Size, Trend & Comparative Analysis",
    "section_anchor": "industry-benchmarking-and-peer-comparability-limits"
  },
  {
    "id": "fc_fa-common-size-trends_6",
    "segment_id": "fa-common-size-trends",
    "order_index": 6,
    "front": "Why should industry averages be selected carefully?",
    "back": "Firms may differ in industry economics, accounting choices, size and strategy.",
    "category": "Common-Size, Trend & Comparative Analysis",
    "section_reference": "Common-Size, Trend & Comparative Analysis",
    "section_anchor": "industry-benchmarking-and-peer-comparability-limits"
  },
  {
    "id": "fc_fa-common-size-trends_7",
    "segment_id": "fa-common-size-trends",
    "order_index": 7,
    "front": "In Joe’s Gadgets, why are ratios and common-size statements used together?",
    "back": "They show both performance relationships and the composition behind them.",
    "category": "Common-Size, Trend & Comparative Analysis",
    "section_reference": "Common-Size, Trend & Comparative Analysis",
    "section_anchor": "industry-benchmarking-and-peer-comparability-limits"
  },
  {
    "id": "fc_fa-common-size-trends_8",
    "segment_id": "fa-common-size-trends",
    "order_index": 8,
    "front": "A line item’s common-size share falls while its dollar value rises. How can that happen?",
    "back": "The denominator grew faster than the line item.",
    "category": "Common-Size, Trend & Comparative Analysis",
    "section_reference": "Common-Size, Trend & Comparative Analysis",
    "section_anchor": "industry-benchmarking-and-peer-comparability-limits"
  },
  {
    "id": "fc_fa-liquidity-activity-ratios_1",
    "segment_id": "fa-liquidity-activity-ratios",
    "order_index": 1,
    "front": "What does the current ratio measure?",
    "back": "Current assets divided by current liabilities.",
    "category": "Liquidity & Activity Ratios",
    "section_reference": "Liquidity & Activity Ratios",
    "section_anchor": "current-and-quick-acid-test-ratios"
  },
  {
    "id": "fc_fa-liquidity-activity-ratios_2",
    "segment_id": "fa-liquidity-activity-ratios",
    "order_index": 2,
    "front": "What does the quick ratio exclude?",
    "back": "Inventory, because it is less liquid and may require sale and collection.",
    "category": "Liquidity & Activity Ratios",
    "section_reference": "Liquidity & Activity Ratios",
    "section_anchor": "current-and-quick-acid-test-ratios"
  },
  {
    "id": "fc_fa-liquidity-activity-ratios_3",
    "segment_id": "fa-liquidity-activity-ratios",
    "order_index": 3,
    "front": "A company has current assets €180,000 and current liabilities €120,000. What is its current ratio?",
    "back": "1.5.",
    "category": "Liquidity & Activity Ratios",
    "section_reference": "Liquidity & Activity Ratios",
    "section_anchor": "current-and-quick-acid-test-ratios"
  },
  {
    "id": "fc_fa-liquidity-activity-ratios_4",
    "segment_id": "fa-liquidity-activity-ratios",
    "order_index": 4,
    "front": "With current assets €180,000, inventory €60,000 and current liabilities €120,000, what is the quick ratio?",
    "back": "1.0.",
    "category": "Liquidity & Activity Ratios",
    "section_reference": "Liquidity & Activity Ratios",
    "section_anchor": "current-and-quick-acid-test-ratios"
  },
  {
    "id": "fc_fa-liquidity-activity-ratios_5",
    "segment_id": "fa-liquidity-activity-ratios",
    "order_index": 5,
    "front": "What broad current-ratio range does the lecture offer as a rule of thumb?",
    "back": "Approximately 1.5 to 4, subject to industry and strategy.",
    "category": "Liquidity & Activity Ratios",
    "section_reference": "Liquidity & Activity Ratios",
    "section_anchor": "operating-efficiency-and-asset-turnover-metrics"
  },
  {
    "id": "fc_fa-liquidity-activity-ratios_6",
    "segment_id": "fa-liquidity-activity-ratios",
    "order_index": 6,
    "front": "How does the lecture define inventory turnover for its calculations?",
    "back": "Cost of goods sold divided by inventory.",
    "category": "Liquidity & Activity Ratios",
    "section_reference": "Liquidity & Activity Ratios",
    "section_anchor": "operating-efficiency-and-asset-turnover-metrics"
  },
  {
    "id": "fc_fa-liquidity-activity-ratios_7",
    "segment_id": "fa-liquidity-activity-ratios",
    "order_index": 7,
    "front": "What does days sales outstanding help estimate?",
    "back": "How long the company takes to collect receivables.",
    "category": "Liquidity & Activity Ratios",
    "section_reference": "Liquidity & Activity Ratios",
    "section_anchor": "operating-efficiency-and-asset-turnover-metrics"
  },
  {
    "id": "fc_fa-liquidity-activity-ratios_8",
    "segment_id": "fa-liquidity-activity-ratios",
    "order_index": 8,
    "front": "What does fixed-asset turnover relate?",
    "back": "Sales to long-term fixed assets.",
    "category": "Liquidity & Activity Ratios",
    "section_reference": "Liquidity & Activity Ratios",
    "section_anchor": "operating-efficiency-and-asset-turnover-metrics"
  },
  {
    "id": "fc_fa-debt-profitability-ratios_1",
    "segment_id": "fa-debt-profitability-ratios",
    "order_index": 1,
    "front": "How is total debt to total assets calculated?",
    "back": "Total debt divided by total assets.",
    "category": "Debt & Profitability Ratios",
    "section_reference": "Debt & Profitability Ratios",
    "section_anchor": "interest-coverage-times-interest-earned-tie"
  },
  {
    "id": "fc_fa-debt-profitability-ratios_2",
    "segment_id": "fa-debt-profitability-ratios",
    "order_index": 2,
    "front": "How is total debt to total equity calculated?",
    "back": "Total debt divided by total equity.",
    "category": "Debt & Profitability Ratios",
    "section_reference": "Debt & Profitability Ratios",
    "section_anchor": "interest-coverage-times-interest-earned-tie"
  },
  {
    "id": "fc_fa-debt-profitability-ratios_3",
    "segment_id": "fa-debt-profitability-ratios",
    "order_index": 3,
    "front": "What does a higher debt-to-assets ratio generally indicate?",
    "back": "Greater reliance on debt financing and higher financial risk.",
    "category": "Debt & Profitability Ratios",
    "section_reference": "Debt & Profitability Ratios",
    "section_anchor": "interest-coverage-times-interest-earned-tie"
  },
  {
    "id": "fc_fa-debt-profitability-ratios_4",
    "segment_id": "fa-debt-profitability-ratios",
    "order_index": 4,
    "front": "How is times interest earned calculated?",
    "back": "EBIT divided by interest expense.",
    "category": "Debt & Profitability Ratios",
    "section_reference": "Debt & Profitability Ratios",
    "section_anchor": "interest-coverage-times-interest-earned-tie"
  },
  {
    "id": "fc_fa-debt-profitability-ratios_5",
    "segment_id": "fa-debt-profitability-ratios",
    "order_index": 5,
    "front": "What coverage cushion does the lecture generally prefer?",
    "back": "Times interest earned above 2, while noting context matters.",
    "category": "Debt & Profitability Ratios",
    "section_reference": "Debt & Profitability Ratios",
    "section_anchor": "return-on-assets-roa-and-return-on-equity-roe"
  },
  {
    "id": "fc_fa-debt-profitability-ratios_6",
    "segment_id": "fa-debt-profitability-ratios",
    "order_index": 6,
    "front": "How is gross profit margin calculated?",
    "back": "Gross profit divided by sales.",
    "category": "Debt & Profitability Ratios",
    "section_reference": "Debt & Profitability Ratios",
    "section_anchor": "return-on-assets-roa-and-return-on-equity-roe"
  },
  {
    "id": "fc_fa-debt-profitability-ratios_7",
    "segment_id": "fa-debt-profitability-ratios",
    "order_index": 7,
    "front": "How is net profit margin calculated?",
    "back": "Net income divided by sales.",
    "category": "Debt & Profitability Ratios",
    "section_reference": "Debt & Profitability Ratios",
    "section_anchor": "return-on-assets-roa-and-return-on-equity-roe"
  },
  {
    "id": "fc_fa-debt-profitability-ratios_8",
    "segment_id": "fa-debt-profitability-ratios",
    "order_index": 8,
    "front": "How is ROA calculated in the course examples?",
    "back": "Net income divided by total assets.",
    "category": "Debt & Profitability Ratios",
    "section_reference": "Debt & Profitability Ratios",
    "section_anchor": "return-on-assets-roa-and-return-on-equity-roe"
  },
  {
    "id": "fc_fa-market-ratios-diagnosis_1",
    "segment_id": "fa-market-ratios-diagnosis",
    "order_index": 1,
    "front": "How is earnings per share calculated?",
    "back": "Net income divided by shares outstanding.",
    "category": "Market Ratios & Integrated Diagnosis",
    "section_reference": "Market Ratios & Integrated Diagnosis",
    "section_anchor": "market-to-book-ratio-and-unrecorded-intangibles"
  },
  {
    "id": "fc_fa-market-ratios-diagnosis_2",
    "segment_id": "fa-market-ratios-diagnosis",
    "order_index": 2,
    "front": "How is the price-to-earnings ratio calculated?",
    "back": "Share price divided by earnings per share.",
    "category": "Market Ratios & Integrated Diagnosis",
    "section_reference": "Market Ratios & Integrated Diagnosis",
    "section_anchor": "market-to-book-ratio-and-unrecorded-intangibles"
  },
  {
    "id": "fc_fa-market-ratios-diagnosis_3",
    "segment_id": "fa-market-ratios-diagnosis",
    "order_index": 3,
    "front": "Why does share price alone not show which stock is more expensive?",
    "back": "A share price must be considered relative to per-share earnings or another fundamental measure.",
    "category": "Market Ratios & Integrated Diagnosis",
    "section_reference": "Market Ratios & Integrated Diagnosis",
    "section_anchor": "market-to-book-ratio-and-unrecorded-intangibles"
  },
  {
    "id": "fc_fa-market-ratios-diagnosis_4",
    "segment_id": "fa-market-ratios-diagnosis",
    "order_index": 4,
    "front": "What can a high P/E reflect besides overpricing?",
    "back": "Higher expected growth or different risk and business prospects.",
    "category": "Market Ratios & Integrated Diagnosis",
    "section_reference": "Market Ratios & Integrated Diagnosis",
    "section_anchor": "market-to-book-ratio-and-unrecorded-intangibles"
  },
  {
    "id": "fc_fa-market-ratios-diagnosis_5",
    "segment_id": "fa-market-ratios-diagnosis",
    "order_index": 5,
    "front": "How is market-to-book commonly calculated per share?",
    "back": "Market price per share divided by book value per share.",
    "category": "Market Ratios & Integrated Diagnosis",
    "section_reference": "Market Ratios & Integrated Diagnosis",
    "section_anchor": "joe-s-gadgets-holistic-diagnostic-synthesis-case"
  },
  {
    "id": "fc_fa-market-ratios-diagnosis_6",
    "segment_id": "fa-market-ratios-diagnosis",
    "order_index": 6,
    "front": "Why might a firm have a high market-to-book ratio?",
    "back": "Unrecognized intangible value, growth expectations or investor optimism.",
    "category": "Market Ratios & Integrated Diagnosis",
    "section_reference": "Market Ratios & Integrated Diagnosis",
    "section_anchor": "joe-s-gadgets-holistic-diagnostic-synthesis-case"
  },
  {
    "id": "fc_fa-market-ratios-diagnosis_7",
    "segment_id": "fa-market-ratios-diagnosis",
    "order_index": 7,
    "front": "How is dividend yield calculated?",
    "back": "Annual dividend per share divided by share price.",
    "category": "Market Ratios & Integrated Diagnosis",
    "section_reference": "Market Ratios & Integrated Diagnosis",
    "section_anchor": "joe-s-gadgets-holistic-diagnostic-synthesis-case"
  },
  {
    "id": "fc_fa-market-ratios-diagnosis_8",
    "segment_id": "fa-market-ratios-diagnosis",
    "order_index": 8,
    "front": "Why may younger high-growth firms pay lower dividends?",
    "back": "They may reinvest cash into growth opportunities.",
    "category": "Market Ratios & Integrated Diagnosis",
    "section_reference": "Market Ratios & Integrated Diagnosis",
    "section_anchor": "joe-s-gadgets-holistic-diagnostic-synthesis-case"
  },
  {
    "id": "fc_fa-valuation-methods_1",
    "segment_id": "fa-valuation-methods",
    "order_index": 1,
    "front": "What does business valuation estimate?",
    "back": "The economic value of a company or business unit for a decision.",
    "category": "Valuation Purpose & Relative Methods",
    "section_reference": "Valuation Purpose & Relative Methods",
    "section_anchor": "market-capitalization-vs-enterprise-value"
  },
  {
    "id": "fc_fa-valuation-methods_2",
    "segment_id": "fa-valuation-methods",
    "order_index": 2,
    "front": "How is market capitalization calculated?",
    "back": "Share price multiplied by shares outstanding.",
    "category": "Valuation Purpose & Relative Methods",
    "section_reference": "Valuation Purpose & Relative Methods",
    "section_anchor": "market-capitalization-vs-enterprise-value"
  },
  {
    "id": "fc_fa-valuation-methods_3",
    "segment_id": "fa-valuation-methods",
    "order_index": 3,
    "front": "Does market capitalization include debt in the equity value?",
    "back": "No; market capitalization is equity value based on shares.",
    "category": "Valuation Purpose & Relative Methods",
    "section_reference": "Valuation Purpose & Relative Methods",
    "section_anchor": "market-capitalization-vs-enterprise-value"
  },
  {
    "id": "fc_fa-valuation-methods_4",
    "segment_id": "fa-valuation-methods",
    "order_index": 4,
    "front": "What does the times-revenue method apply?",
    "back": "A revenue multiple to a defined revenue measure.",
    "category": "Valuation Purpose & Relative Methods",
    "section_reference": "Valuation Purpose & Relative Methods",
    "section_anchor": "market-capitalization-vs-enterprise-value"
  },
  {
    "id": "fc_fa-valuation-methods_5",
    "segment_id": "fa-valuation-methods",
    "order_index": 5,
    "front": "What does an earnings multiplier apply?",
    "back": "An earnings multiple to a defined earnings measure.",
    "category": "Valuation Purpose & Relative Methods",
    "section_reference": "Valuation Purpose & Relative Methods",
    "section_anchor": "relative-valuation-multiples-times-revenue-and-price-to-earnings"
  },
  {
    "id": "fc_fa-valuation-methods_6",
    "segment_id": "fa-valuation-methods",
    "order_index": 6,
    "front": "Why can an earnings multiple be more informative than a revenue multiple?",
    "back": "It reflects earnings generation, not only sales volume.",
    "category": "Valuation Purpose & Relative Methods",
    "section_reference": "Valuation Purpose & Relative Methods",
    "section_anchor": "relative-valuation-multiples-times-revenue-and-price-to-earnings"
  },
  {
    "id": "fc_fa-valuation-methods_7",
    "segment_id": "fa-valuation-methods",
    "order_index": 7,
    "front": "What does a comparable-company multiple represent?",
    "back": "A market-based relative benchmark affected by growth, risk and market conditions.",
    "category": "Valuation Purpose & Relative Methods",
    "section_reference": "Valuation Purpose & Relative Methods",
    "section_anchor": "relative-valuation-multiples-times-revenue-and-price-to-earnings"
  },
  {
    "id": "fc_fa-valuation-methods_8",
    "segment_id": "fa-valuation-methods",
    "order_index": 8,
    "front": "Why must the analyst identify the value claim being estimated?",
    "back": "Equity value and enterprise value refer to different capital-provider claims.",
    "category": "Valuation Purpose & Relative Methods",
    "section_reference": "Valuation Purpose & Relative Methods",
    "section_anchor": "relative-valuation-multiples-times-revenue-and-price-to-earnings"
  },
  {
    "id": "fc_fa-wacc-discounting_1",
    "segment_id": "fa-wacc-discounting",
    "order_index": 1,
    "front": "How is a single future cash flow discounted to present value?",
    "back": "Divide the cash flow by (1 + discount rate) raised to its period number.",
    "category": "Time Value, WACC & Discounting",
    "section_reference": "Time Value, WACC & Discounting",
    "section_anchor": "weighted-average-cost-of-capital-wacc-architecture"
  },
  {
    "id": "fc_fa-wacc-discounting_2",
    "segment_id": "fa-wacc-discounting",
    "order_index": 2,
    "front": "What does WACC represent?",
    "back": "A weighted average required return on debt and equity capital.",
    "category": "Time Value, WACC & Discounting",
    "section_reference": "Time Value, WACC & Discounting",
    "section_anchor": "weighted-average-cost-of-capital-wacc-architecture"
  },
  {
    "id": "fc_fa-wacc-discounting_3",
    "segment_id": "fa-wacc-discounting",
    "order_index": 3,
    "front": "What is the standard after-tax WACC form used in the lecture?",
    "back": "(E/V) × cost of equity + (D/V) × cost of debt × (1 − tax rate).",
    "category": "Time Value, WACC & Discounting",
    "section_reference": "Time Value, WACC & Discounting",
    "section_anchor": "weighted-average-cost-of-capital-wacc-architecture"
  },
  {
    "id": "fc_fa-wacc-discounting_4",
    "segment_id": "fa-wacc-discounting",
    "order_index": 4,
    "front": "Why is the cost of debt tax-adjusted in WACC?",
    "back": "Interest deductibility reduces the effective after-tax cost in the model.",
    "category": "Time Value, WACC & Discounting",
    "section_reference": "Time Value, WACC & Discounting",
    "section_anchor": "weighted-average-cost-of-capital-wacc-architecture"
  },
  {
    "id": "fc_fa-wacc-discounting_5",
    "segment_id": "fa-wacc-discounting",
    "order_index": 5,
    "front": "A €100 cash flow arrives one year later and the discount rate is 10%. What is its present value?",
    "back": "About €90.91.",
    "category": "Time Value, WACC & Discounting",
    "section_reference": "Time Value, WACC & Discounting",
    "section_anchor": "project-appraisal-criteria-npv-vs-irr-dynamics"
  },
  {
    "id": "fc_fa-wacc-discounting_6",
    "segment_id": "fa-wacc-discounting",
    "order_index": 6,
    "front": "How are debt and equity weights defined in WACC?",
    "back": "Debt and equity values each divided by total capital value.",
    "category": "Time Value, WACC & Discounting",
    "section_reference": "Time Value, WACC & Discounting",
    "section_anchor": "project-appraisal-criteria-npv-vs-irr-dynamics"
  },
  {
    "id": "fc_fa-wacc-discounting_7",
    "segment_id": "fa-wacc-discounting",
    "order_index": 7,
    "front": "What discount rate should be used for unlevered free cash flow in the course model?",
    "back": "WACC.",
    "category": "Time Value, WACC & Discounting",
    "section_reference": "Time Value, WACC & Discounting",
    "section_anchor": "project-appraisal-criteria-npv-vs-irr-dynamics"
  },
  {
    "id": "fc_fa-wacc-discounting_8",
    "segment_id": "fa-wacc-discounting",
    "order_index": 8,
    "front": "What is NPV in project analysis?",
    "back": "Discounted future cash flows less the initial investment.",
    "category": "Time Value, WACC & Discounting",
    "section_reference": "Time Value, WACC & Discounting",
    "section_anchor": "project-appraisal-criteria-npv-vs-irr-dynamics"
  },
  {
    "id": "fc_fa-dcf-terminal-value_1",
    "segment_id": "fa-dcf-terminal-value",
    "order_index": 1,
    "front": "What cash-flow stream does an unlevered DCF forecast?",
    "back": "Cash flows from core operations after operating costs and required investment, before financing payments.",
    "category": "DCF Forecasts & Terminal Value",
    "section_reference": "DCF Forecasts & Terminal Value",
    "section_anchor": "unlevered-free-cash-flow-fcff-vs-levered-cash-flow-fcfe"
  },
  {
    "id": "fc_fa-dcf-terminal-value_2",
    "segment_id": "fa-dcf-terminal-value",
    "order_index": 2,
    "front": "What are the two stages of a typical DCF in the slides?",
    "back": "An explicit forecast period and a terminal-value stage for later cash flows.",
    "category": "DCF Forecasts & Terminal Value",
    "section_reference": "DCF Forecasts & Terminal Value",
    "section_anchor": "unlevered-free-cash-flow-fcff-vs-levered-cash-flow-fcfe"
  },
  {
    "id": "fc_fa-dcf-terminal-value_3",
    "segment_id": "fa-dcf-terminal-value",
    "order_index": 3,
    "front": "How does the perpetuity-growth method estimate terminal value?",
    "back": "Next-period free cash flow divided by WACC minus perpetual growth.",
    "category": "DCF Forecasts & Terminal Value",
    "section_reference": "DCF Forecasts & Terminal Value",
    "section_anchor": "unlevered-free-cash-flow-fcff-vs-levered-cash-flow-fcfe"
  },
  {
    "id": "fc_fa-dcf-terminal-value_4",
    "segment_id": "fa-dcf-terminal-value",
    "order_index": 4,
    "front": "What condition must hold in the perpetuity-growth formula?",
    "back": "Long-term growth must be lower than WACC.",
    "category": "DCF Forecasts & Terminal Value",
    "section_reference": "DCF Forecasts & Terminal Value",
    "section_anchor": "unlevered-free-cash-flow-fcff-vs-levered-cash-flow-fcfe"
  },
  {
    "id": "fc_fa-dcf-terminal-value_5",
    "segment_id": "fa-dcf-terminal-value",
    "order_index": 5,
    "front": "How does the exit-multiple method estimate terminal value?",
    "back": "Apply a selected market multiple to a terminal-year operating measure such as EBITDA.",
    "category": "DCF Forecasts & Terminal Value",
    "section_reference": "DCF Forecasts & Terminal Value",
    "section_anchor": "perpetuity-growth-terminal-value-the-gordon-model"
  },
  {
    "id": "fc_fa-dcf-terminal-value_6",
    "segment_id": "fa-dcf-terminal-value",
    "order_index": 6,
    "front": "Why can the exit-multiple method weaken a DCF’s independence from markets?",
    "back": "It brings current market valuations into the terminal value.",
    "category": "DCF Forecasts & Terminal Value",
    "section_reference": "DCF Forecasts & Terminal Value",
    "section_anchor": "perpetuity-growth-terminal-value-the-gordon-model"
  },
  {
    "id": "fc_fa-dcf-terminal-value_7",
    "segment_id": "fa-dcf-terminal-value",
    "order_index": 7,
    "front": "At what point in time is terminal value calculated?",
    "back": "At the end of the explicit forecast period.",
    "category": "DCF Forecasts & Terminal Value",
    "section_reference": "DCF Forecasts & Terminal Value",
    "section_anchor": "perpetuity-growth-terminal-value-the-gordon-model"
  },
  {
    "id": "fc_fa-dcf-terminal-value_8",
    "segment_id": "fa-dcf-terminal-value",
    "order_index": 8,
    "front": "How is terminal value brought to present value?",
    "back": "Discount it back using the same rate and periods consistent with the forecast cash flows.",
    "category": "DCF Forecasts & Terminal Value",
    "section_reference": "DCF Forecasts & Terminal Value",
    "section_anchor": "perpetuity-growth-terminal-value-the-gordon-model"
  },
  {
    "id": "fc_fa-equity-value-challenge_1",
    "segment_id": "fa-equity-value-challenge",
    "order_index": 1,
    "front": "What is the bridge from enterprise value to equity value?",
    "back": "Add non-operating assets and subtract debt and other non-equity claims.",
    "category": "Enterprise-to-Equity Value & Valuation Challenge",
    "section_reference": "Enterprise-to-Equity Value & Valuation Challenge",
    "section_anchor": "the-6-step-enterprise-to-equity-value-bridge"
  },
  {
    "id": "fc_fa-equity-value-challenge_2",
    "segment_id": "fa-equity-value-challenge",
    "order_index": 2,
    "front": "Which assets are commonly added to enterprise value in the lecture?",
    "back": "Cash, marketable securities and equity investments outside operations.",
    "category": "Enterprise-to-Equity Value & Valuation Challenge",
    "section_reference": "Enterprise-to-Equity Value & Valuation Challenge",
    "section_anchor": "the-6-step-enterprise-to-equity-value-bridge"
  },
  {
    "id": "fc_fa-equity-value-challenge_3",
    "segment_id": "fa-equity-value-challenge",
    "order_index": 3,
    "front": "Which claims are commonly subtracted to reach equity value?",
    "back": "Debt, capital leases, preferred stock and non-controlling interests.",
    "category": "Enterprise-to-Equity Value & Valuation Challenge",
    "section_reference": "Enterprise-to-Equity Value & Valuation Challenge",
    "section_anchor": "the-6-step-enterprise-to-equity-value-bridge"
  },
  {
    "id": "fc_fa-equity-value-challenge_4",
    "segment_id": "fa-equity-value-challenge",
    "order_index": 4,
    "front": "How is equity value per share estimated?",
    "back": "Total equity value divided by shares outstanding.",
    "category": "Enterprise-to-Equity Value & Valuation Challenge",
    "section_reference": "Enterprise-to-Equity Value & Valuation Challenge",
    "section_anchor": "the-6-step-enterprise-to-equity-value-bridge"
  },
  {
    "id": "fc_fa-equity-value-challenge_5",
    "segment_id": "fa-equity-value-challenge",
    "order_index": 5,
    "front": "Why does an unlevered DCF subtract debt in the bridge?",
    "back": "Unlevered cash flow values operations for debt and equity providers together.",
    "category": "Enterprise-to-Equity Value & Valuation Challenge",
    "section_reference": "Enterprise-to-Equity Value & Valuation Challenge",
    "section_anchor": "company-x-comprehensive-2024-valuation-challenge-case"
  },
  {
    "id": "fc_fa-equity-value-challenge_6",
    "segment_id": "fa-equity-value-challenge",
    "order_index": 6,
    "front": "Why should non-operating cash be added only once?",
    "back": "It must not be counted both in operating cash flow and the bridge.",
    "category": "Enterprise-to-Equity Value & Valuation Challenge",
    "section_reference": "Enterprise-to-Equity Value & Valuation Challenge",
    "section_anchor": "company-x-comprehensive-2024-valuation-challenge-case"
  },
  {
    "id": "fc_fa-equity-value-challenge_7",
    "segment_id": "fa-equity-value-challenge",
    "order_index": 7,
    "front": "What is the sequence of the lecture’s valuation challenge?",
    "back": "Project statements, derive free cash flow, calculate WACC and terminal value, discount, bridge to equity.",
    "category": "Enterprise-to-Equity Value & Valuation Challenge",
    "section_reference": "Enterprise-to-Equity Value & Valuation Challenge",
    "section_anchor": "company-x-comprehensive-2024-valuation-challenge-case"
  },
  {
    "id": "fc_fa-equity-value-challenge_8",
    "segment_id": "fa-equity-value-challenge",
    "order_index": 8,
    "front": "What must be checked when subtracting debt from enterprise value?",
    "back": "Whether all relevant debt and other non-equity claims are included exactly once.",
    "category": "Enterprise-to-Equity Value & Valuation Challenge",
    "section_reference": "Enterprise-to-Equity Value & Valuation Challenge",
    "section_anchor": "company-x-comprehensive-2024-valuation-challenge-case"
  }
];
