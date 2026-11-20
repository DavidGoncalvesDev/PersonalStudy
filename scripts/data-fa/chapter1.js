// Chapter 1: Accounting Foundations & Financial Statements
// Segments 1 to 4 with full narrative prose, display KaTeX formulas, authentic distractors, and exact section anchors.

export const chapterOneSegments = [
  // --------------------------------------------------------------------------
  // SEGMENT 1: Accounting Foundations & Double Entry
  // --------------------------------------------------------------------------
  {
    id: 'fa-accounting-foundations',
    discipline_id: 'financial-analysis',
    order_index: 1,
    title: 'Accounting Foundations & Double Entry',
    subtitle: 'Accounting principles, account families, debit and credit logic, and transaction recording.',
    summary_markdown: `# Accounting Foundations & Double Entry

## Accounting as a Decision System
Accounting is the standardized information system that identifies, records, and communicates the economic events of an organization. Financial analysis depends fundamentally on the integrity of underlying accounting records. If transactions are misclassified or assigned to incorrect reporting periods, subsequent financial statements, efficiency ratios, and corporate valuation models become distorted. Within Portugal and the broader European Union, financial reporting operates under standardized frameworks designed to guarantee transparency, reliability, and international comparability across enterprises.

### Core Accounting Principles
Modern accounting governance rests on four pillars:
1. The **Accrual Principle** (ou Princípio da Especialização dos Exercícios) mandates that revenues and expenses are recognized when earned or incurred, regardless of the moment cash is received or paid.
2. The **Substance Over Form Principle** dictates that transactions must be accounted for and presented in accordance with their economic reality and substantive commercial impact, rather than merely their strict legal form.
3. The **Historical Cost Convention** requires that acquired assets are initially recorded at their acquisition price or production expenditure, providing an objective, verifiable anchor prior to subsequent depreciation or impairment.
4. **Qualitative Characteristics**: Information must achieve relevance (capable of influencing economic decisions) and faithful representation (complete, neutral, and free from error).

### Accounts and the Accounting Equation
An account is a systematic record that tracks increases and decreases in a specific asset, liability, equity, revenue, or expense item. Balance sheet accounts measure financial condition at a static point in time, while income statement accounts accumulate performance over a dynamic period. The fundamental balance sheet identity states:

$$\\text{Assets} = \\text{Liabilities} + \\text{Equity}$$

Equity represents the residual ownership interest in enterprise resources after deducting all creditor claims. Over any operating period, the expansion of equity connects directly to operating profitability:

$$\\Delta \\text{Equity} = \\text{Owner Contributions} - \\text{Distributions} + (\\text{Revenues} - \\text{Expenses})$$

### Debits, Credits and Double-Entry Rules
The double-entry system requires that every transaction is recorded with balanced effects across at least two accounts, ensuring total debits equal total credits. Debits and credits indicate directional positioning on an account ledger rather than good or bad outcomes:

$$\\sum \\text{Debits} = \\sum \\text{Credits}$$

The standard rules governing normal account balances are:
- **Debit Entries (Dr)**: Increase **Asset** accounts and increase **Expense** accounts. A debit decreases liability, equity, and revenue balances.
- **Credit Entries (Cr)**: Increase **Liability** accounts, increase **Equity** accounts, and increase **Revenue** accounts. A credit decreases asset and expense balances.

A debit is not synonymous with a cash payment, nor is a credit synonymous with a cash receipt. For example, purchasing inventory on credit debits Inventory (an asset) and credits Accounts Payable (a liability), involving no cash movement.

### Portuguese SNC and Standardization Framework
In Portugal, enterprise accounting is governed by the *Sistema de Normalização Contabilística* (SNC), which succeeded the historical *Plano Oficial de Contabilidade* (POC). The SNC aligns Portuguese domestic accounting directly with European Union directives and International Financial Reporting Standards (IFRS). It establishes a standardized Chart of Accounts (*Quadro de Contas*) grouped into numeric account classes (e.g., Class 1: Means of Payment; Class 2: Receivables and Payables; Class 3: Inventories; Class 4: Tangible Fixed Assets; Class 5: Equity; Class 6: Expenses; Class 7: Revenues). Standardized coding ensures that financial statements remain strictly comparable across corporate entities.

### Worked Journal Entry Sequence
Consider the initiation of a service firm:
1. The founder invests €20,000 cash into the company:
   - Debit Cash (Asset) €20,000
   - Credit Share Capital (Equity) €20,000
2. The firm purchases operational equipment for €6,000 in cash:
   - Debit Equipment (Asset) €6,000
   - Credit Cash (Asset) €6,000
3. The firm delivers technical advisory services, invoicing a client €3,000 on 30-day payment terms:
   - Debit Accounts Receivable (Asset) €3,000
   - Credit Advisory Revenue (Income) €3,000
4. The client pays €1,800 as partial settlement of the outstanding invoice:
   - Debit Cash (Asset) €1,800
   - Credit Accounts Receivable (Asset) €1,800
   *(Note: No revenue is recorded upon collection; the asset merely transforms from receivable to cash).*
5. The firm pays €900 cash for monthly office rent:
   - Debit Rent Expense (Expense) €900
   - Credit Cash (Asset) €900

Closing Account Status:
- Cash = €20,000 - €6,000 + €1,800 - €900 = €14,900
- Accounts Receivable = €3,000 - €1,800 = €1,200
- Equipment = €6,000
- Total Assets = €14,900 + €1,200 + €6,000 = €22,100
- Total Liabilities = €0
- Equity = €20,000 Capital + €2,100 Retained Profit (€3,000 Revenue - €900 Expense) = €22,100
- Verification: $\\text{Assets (€22,100)} = \\text{Liabilities (€0)} + \\text{Equity (€22,100)}$.`
  },

  // --------------------------------------------------------------------------
  // SEGMENT 2: Inventory Valuation & Period-End Adjustments
  // --------------------------------------------------------------------------
  {
    id: 'fa-period-end-adjustments',
    discipline_id: 'financial-analysis',
    order_index: 2,
    title: 'Inventory Valuation & Period-End Adjustments',
    subtitle: 'Cost-flow assumptions, depreciation, provisions, accruals, deferrals and tax.',
    summary_markdown: `# Inventory Valuation & Period-End Adjustments

## Why Period-End Adjustments Matter
During an operating period, daily bookkeeping records visible cash and credit transactions. However, at the close of an accounting interval, provisional account balances omit consumed resources, unbilled revenues, wear-and-tear of equipment, and probable liabilities. Period-end adjustments align enterprise records with the accrual principle so that financial statements reflect true economic position and performance before annual accounts are finalized.

### Inventory Cost-Flow Methods: FIFO, LIFO, and WAC
When identical merchandise is acquired at fluctuating purchase prices across different dates, management must apply an inventory cost-flow convention to allocate total inventory expenditures between **Cost of Goods Sold** (COGS, on the income statement) and **Ending Inventory** (on the balance sheet).

$$\\text{Weighted Average Cost (WAC)} = \\frac{\\text{Total Cost of Goods Available for Sale}}{\\text{Total Units Available for Sale}} = \\frac{\\sum (Q_i \\times P_i)}{\\sum Q_i}$$

The three recognized conventions operate as follows:
- **FIFO (First-In, First-Out)** assumes the earliest acquired inventory units are sold first. Consequently, COGS reflects older acquisition costs, while ending inventory is valued at the most recent purchase prices.
- **LIFO (Last-In, First-Out)** assumes the newest acquisition costs are charged to COGS first, leaving the oldest costs in ending inventory.
- **WAC (Weighted Average Cost)** blends all procurement costs across available units to establish a uniform unit cost applied to both sales and ending stock.

| Inventory Method | Under Rising Prices (Inflation) | Balance Sheet Valuation | Tax Impact | Regulatory Status |
| :--- | :--- | :--- | :--- | :--- |
| **FIFO** | Lowest COGS, Highest Gross Margin | Current replacement cost | Higher current tax | Permitted by IFRS & Portuguese SNC |
| **LIFO** | Highest COGS, Lowest Gross Margin | Outdated historical costs | Lower tax (deferral) | **Prohibited by IFRS (IAS 2) & SNC** |
| **WAC** | Intermediate COGS and Margin | Smoothed average valuation | Moderate tax | Permitted by IFRS & Portuguese SNC |

### Tangible Asset Depreciation and Impairment
Depreciation represents the systematic allocation of a tangible fixed asset's depreciable base across its estimated useful life:

$$\\text{Annual Depreciation (Straight-Line)} = \\frac{\\text{Historical Cost} - \\text{Residual Value}}{\\text{Useful Life (Years)}}$$

Depreciation is fundamentally a non-cash expense. Recording annual depreciation reduces reported net income and decreases the net book value of the asset via the contra-asset account Accumulated Depreciation. However, no liquid cash leaves the enterprise at the time depreciation is recorded; the cash outflow occurred entirely upon initial asset acquisition.

### Accruals, Prepayments, and Deferred Revenue
Adjusting entries ensure that revenues and expenses are matched to the exact period in which economic consumption or delivery occurs:
- **Accrued Expenses**: Costs consumed during the period that remain unpaid at year-end (e.g., unpaid employee salaries). Entry: Debit Salary Expense, Credit Accrued Salaries Payable (Liability).
- **Prepaid Expenses (Deferrals)**: Cash paid in advance for services spanning future periods (e.g., annual insurance premiums paid in October). As time elapses, the consumed portion is transferred from the balance sheet asset to the income statement: Debit Insurance Expense, Credit Prepaid Insurance.
- **Deferred Revenues**: Cash collected from customers prior to delivering goods or rendering services. Cash receipt creates an unearned revenue liability, not operating revenue: Debit Cash, Credit Deferred Revenue (Liability). Revenue is recognized only upon service fulfillment.

### Provisions and Income Tax Determination
A provision is a recognized liability of uncertain timing or amount (e.g., estimated bad-debt losses on trade receivables, pending warranty claims, or legal litigation). Recording a provision recognizes an immediate operating expense and establishes a balance sheet provision, preserving conservatism. A provision is an accounting accrual, not an earmarked bank deposit.

Income tax represents the final adjustment in the accounting close. The corporate tax rate is applied strictly to adjusted pre-tax earnings (EBT) after all accruals, depreciation, provisions, and deferrals have been incorporated:

$$\\text{Corporate Income Tax Expense} = \\text{Adjusted EBT} \\times \\text{Tax Rate } (t)$$

### Byte Bakery Closing Sequence Case
In the Byte Bakery university case study, the closing sequence proceeds as follows:
- Equipment cost €30,000, 5-year life, zero residual value: Annual Depreciation = €30,000 / 5 = €6,000. Entry: Dr Depreciation Expense €6,000 / Cr Accumulated Depreciation €6,000.
- Prepaid insurance €3,600 covering 18 months, with €2,400 consumed during the year: Dr Insurance Expense €2,400 / Cr Prepaid Insurance €2,400. Remaining prepaid asset = €1,200.
- Earned but unpaid December salaries of €5,000: Dr Salary Expense €5,000 / Cr Accrued Salaries Payable €5,000.
- Customer deposit of €4,000 received for next year's catering contract: Retained as Deferred Revenue Liability €4,000 (zero revenue recognized).
- Adjusted Pre-Tax Income (EBT) after all adjustments is determined at €10,000. With a statutory corporate tax rate of 21%, Tax Expense = €10,000 × 21% = €2,100.
- Final Entry: Dr Income Tax Expense €2,100 / Cr Tax Payable €2,100. Net Income = €10,000 - €2,100 = €7,900.`
  },

  // --------------------------------------------------------------------------
  // SEGMENT 3: Balance Sheet & Income Statement
  // --------------------------------------------------------------------------
  {
    id: 'fa-balance-income-statements',
    discipline_id: 'financial-analysis',
    order_index: 3,
    title: 'Balance Sheet & Income Statement',
    subtitle: 'Position at a date, performance over a period, statement structure and margin analysis.',
    summary_markdown: `# Balance Sheet & Income Statement

## Position and Performance: Two Different Perspectives
Financial reporting separates economic evaluation into two core financial statements:
1. The **Balance Sheet** (*Balanço*) provides a static point-in-time snapshot of enterprise resources and financing sources at a specific date (e.g., December 31).
2. The **Income Statement** (*Demonstração de Resultados*) measures dynamic financial performance over a defined duration (e.g., January 1 to December 31), accumulating revenues earned and expenses incurred to determine period profitability.

### Balance Sheet Architecture and Asset Classification
The balance sheet organizes economic resources according to liquidity and maturity:
- **Current Assets**: Resources expected to be realized in cash, sold, or consumed within the standard operating cycle (typically 12 months). Key items include Cash & Cash Equivalents, Trade Accounts Receivable, and Inventories.
- **Non-Current (Fixed) Assets**: Long-term resources utilized across multiple operating cycles, including Tangible Fixed Assets (machinery, buildings), Intangibles (software, patents), and Long-Term Financial Investments.
- **Current Liabilities**: Obligations due for settlement within one year, such as Trade Accounts Payable, Short-Term Bank Loans, Accrued Payroll, and Taxes Payable.
- **Non-Current Liabilities**: Long-term creditor obligations due beyond one year, including Long-Term Debt and Bank Mortgages.
- **Equity**: The residual economic interest belonging to enterprise owners:

$$\\text{Equity} = \\text{Total Assets} - \\text{Total Liabilities}$$

### Income Statement Multistage Margin Structure
The income statement classifies revenues and costs in a hierarchical sequence that isolates core operational profitability from financing structure and tax burdens:

$$\\text{Gross Profit} = \\text{Sales Revenue} - \\text{Cost of Goods Sold (COGS)}$$

$$\\text{EBIT (Operating Income)} = \\text{Gross Profit} - \\text{Operating Costs} - \\text{Depreciation} - \\text{Provisions}$$

$$\\text{EBT (Pre-Tax Profit)} = \\text{EBIT} - \\text{Interest Expense}$$

$$\\text{Net Income (Bottom Line)} = \\text{EBT} - \\text{Corporate Income Tax}$$

Evaluating these multistage margins allows analysts to diagnose whether margin pressure stems from direct factory production costs (COGS), commercial administration overhead, heavy financial leverage (interest), or taxation.

### The Dynamic Link: From Net Income to Retained Earnings
The income statement connects directly to the balance sheet through the equity section. At the close of each fiscal year, Net Income is transferred into Retained Earnings:

$$\\text{Ending Retained Earnings} = \\text{Beginning Retained Earnings} + \\text{Net Income} - \\text{Dividends Declared}$$

Dividends paid to shareholders represent an equity distribution rather than an operating expense. Consequently, dividend payments reduce Cash and reduce Equity directly, but they never appear on the income statement or reduce net income.

### Accounting Limitations and Statement Quality
Financial statements provide a structured approximation of economic performance, not absolute valuation. Limitations include:
1. **Historical Cost Bias**: Assets are recorded at past purchase prices rather than current market replacement values.
2. **Omission of Internal Intangibles**: Internally generated brand equity, human capital, and proprietary algorithmic intellectual property are largely excluded from the balance sheet.
3. **Managerial Discretion**: Discretion in estimating bad-debt reserves, depreciation useful lives, and inventory obsolescence allows earnings management.
4. **Volume vs. Health**: Rapid sales growth can disguise collapsing profit margins, uncollected receivables, and mounting liquidity strain.

### DataVision Worked Year-End Close Case
In the DataVision source case, provisional Year 2 results report: Sales €500,000, COGS €300,000, Operating Salaries €90,000, Other Operational Costs €48,000, and Interest Expense €8,000.
Year-end closing audit adjustments:
- Subtract €15,000 of billing for software deliverables uncompleted until Year 3 (reclassified to Deferred Revenue liability): Adjusted Sales = €485,000.
- Adjusted Gross Profit = €485,000 - €300,000 = €185,000.
- Recognize €5,000 accrued staff bonuses: Adjusted Salaries = €95,000.
- Record €20,000 annual equipment depreciation and €4,000 doubtful receivables provision.
- Operating Profit (EBIT) = €185,000 - €95,000 - €48,000 - €20,000 - €4,000 = €18,000.
- Pre-Tax Profit (EBT) = €18,000 - €8,000 Interest = €10,000.
- Corporate Tax at 21% = €2,100; Net Income = €7,900.
- Balance Sheet Impact: Added liabilities include Deferred Revenue €15,000, Accrued Salaries €5,000, and Tax Payable €2,100. With total assets established at €356,000 and total liabilities at €212,100, Equity is derived as the balancing residual: €356,000 - €212,100 = €143,900.`
  },

  // --------------------------------------------------------------------------
  // SEGMENT 4: Cash Flow & Integrated Reporting
  // --------------------------------------------------------------------------
  {
    id: 'fa-cash-flow-integration',
    discipline_id: 'financial-analysis',
    order_index: 4,
    title: 'Cash Flow & Integrated Reporting',
    subtitle: 'Operating, investing and financing cash flows, free cash flow and statement reconciliation.',
    summary_markdown: `# Cash Flow & Integrated Reporting

## Profit Is Not Cash: The Liquidity Mandate
A firm can report healthy accounting net income on its income statement while facing imminent insolvency. Accrual accounting recognizes revenue upon delivery of goods, even if the customer delays cash payment for months. Simultaneously, major cash outflows—such as debt principal repayments or capital expenditures—bypass the income statement entirely. The **Statement of Cash Flows** (*Demonstração dos Fluxos de Caixa*) eliminates accrual timing differences to report the true liquid cash generated and consumed during an operating period.

### The Three Pillars: Operating, Investing, and Financing Flows
The cash flow statement partitions enterprise liquidity into three distinct economic activities:
1. **Cash Flow from Operating Activities (CFO)**: Liquid cash generated or absorbed by core operational business activities, customer collections, inventory cycles, and supplier settlements.
2. **Cash Flow from Investing Activities (CFI)**: Cash deployed for or realized from the acquisition and disposal of long-term productive assets (e.g., machinery purchases, software capitalization, factory expansions).
3. **Cash Flow from Financing Activities (CFF)**: Cash transactions between the entity and its capital providers, including bank loan borrowings, debt principal repayments, equity share capital issuance, and dividend payments.

### Indirect Operating Cash Flow Reconciliation (The CFO Bridge)
Under the standard indirect method, CFO is derived by starting from Net Income and making two classes of adjustments:

$$\\text{CFO} = \\text{Net Income} + \\text{Non-Cash Expenses} - \\Delta \\text{Working Capital}$$

$$\\text{CFO} = \\text{Net Income} + \\text{Depreciation} + \\text{Provisions} - \\Delta \\text{Accounts Receivable} - \\Delta \\text{Inventory} + \\Delta \\text{Accounts Payable} + \\Delta \\text{Accrued Liabilities}$$

The directional intuition for working capital adjustments is:
- **Increase in Receivables ($\\Delta \\text{AR} > 0$)**: Cash outflow (cash absorbed), because sales revenue was recognized on the income statement but remains uncollected in cash.
- **Increase in Inventory ($\\Delta \\text{Inv} > 0$)**: Cash outflow, because cash was spent acquiring goods not yet charged to COGS.
- **Increase in Accounts Payable ($\\Delta \\text{AP} > 0$)**: Cash inflow (cash preserved), because operating expenses were recognized on the income statement but payment was deferred.
- **Increase in Accrued Liabilities ($\\Delta \\text{Acc} > 0$)**: Cash inflow, representing incurred costs temporarily financed by employees or third parties.

### Free Cash Flow Formulation and Capital Reinvestment
Free Cash Flow (FCF) measures the discretionary cash generated by core operations after funding mandatory capital expenditures required to sustain and expand productive capacity:

$$\\text{Free Cash Flow (FCF)} = \\text{Operating Cash Flow (CFO)} - \\text{Capital Expenditures (CapEx)}$$

In DCF corporate valuation, unlevered free cash flow represents operating cash available to all capital providers (both debt and equity). Consequently, financing cash flows (loan borrowings, interest, and dividends) are strictly excluded from unlevered operating cash flow to avoid double-counting financing effects already captured in the discount rate (WACC).

### Three-Statement Reconciliation Checks
A closed financial model must satisfy three rigorous integrity checks:
1. **Cash Balance Reconciliation**: Closing Cash on the balance sheet must equal opening cash plus the net cash movement across the three cash flow sections:

$$\\text{Closing Cash} = \\text{Opening Cash} + \\text{CFO} + \\text{CFI} + \\text{CFF}$$

2. **Balance Sheet Equation**: $\\text{Total Assets} = \\text{Total Liabilities} + \\text{Total Equity}$.
3. **Retained Earnings Continuity**: Ending Retained Earnings must equal Beginning Retained Earnings plus Net Income minus Dividends Declared. Discrepancies indicate an unrecorded transaction or broken formula, never an excuse to insert an unexplained balancing plug.

### Company ABC 2025 Comprehensive Reconciliation Case
Company ABC's 2025 financial close reports:
- Net Loss: -€219,165
- Non-Cash Add-backs: Annual Depreciation €66,665; Bad-Debt Provisions €80,000
- Working Capital Changes: Receivables increase by €830,000 (uses cash); Inventory increases by €930,000 (uses cash); Trade Payables increase by €870,000 (provides cash); Other Operating Liabilities increase by €50,000 (provides cash)
- Operating Cash Flow (CFO) Calculation:
  $$\\text{CFO} = -219,165 + 66,665 + 80,000 - 830,000 - 930,000 + 870,000 + 50,000 = -\\text{€}912,500$$
- Investing Cash Flow (CFI): New factory equipment purchase of €445,000:
  $$\\text{CFI} = -\\text{€}445,000$$
- Financing Cash Flow (CFF): New bank debt €1,050,000 + Common share capital issue €500,000:
  $$\\text{CFF} = 1,050,000 + 500,000 = +\\text{€}1,550,000$$
- Net Period Cash Movement:
  $$\\Delta \\text{Cash} = -912,500 - 445,000 + 1,550,000 = +\\text{€}192,500$$
- Result: With opening cash of zero, closing cash on the balance sheet is exactly €192,500. This confirms that Company ABC survived an operating cash drain of €912,500 only because it raised €1.55m in external debt and equity financing.`
  }
];
