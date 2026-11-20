// Complete Question Bank for Chapter 1: Accounting Foundations & Financial Statements
// Segments 1 to 4 (48 questions total: 12 questions per segment)
// Strictly follows: 4 easy, 4 intermediate, 4 hard; authentic domain misconceptions; exact anchors.

export const rawQuestionsCh1 = [
  // ==========================================================================
  // SEGMENT 1: fa-accounting-foundations
  // ==========================================================================
  {
    segment_id: 'fa-accounting-foundations',
    order_index: 1, difficulty: 'easy',
    question: 'Under the fundamental accrual accounting principle (especialização dos exercícios), when must revenues and operational expenses be recognized in financial statements?',
    correct: 'In the operating period in which they are earned or incurred, regardless of the timing of related cash receipts or disbursements.',
    distractors: [
      'Exclusively in the calendar month when cash settlement is fully banked and verified by commercial bank statements.',
      'Only when legal contracts are signed and physical goods have departed the supplier warehouse, irrespective of delivery timing.',
      'At the close of the fiscal year when pre-tax net income is audited, allocating activity evenly across all twelve calendar months.',
      'Whenever the enterprise issues formal tax invoices, provided customer credit terms do not exceed sixty calendar days.',
      'Only upon the final cash collection from customers, deferring direct manufacturing costs until cash is received.'
    ],
    explanation: 'The accrual principle recognizes economic events when earned or incurred. Matching revenues with associated expenses occurs in the period of economic activity, not cash movement.',
    distractor_reasons: [
      'Describes cash-basis accounting rather than accrual accounting.',
      'Contract signing precedes economic earning; delivery and performance obligations determine revenue recognition.',
      'Revenues cannot be artificially smoothed across months; they must reflect actual period economic activity.',
      'Invoicing is an administrative act; earning occurs upon delivery of goods or completion of services.',
      'Cash collection timing does not govern revenue recognition under standard accrual governance.'
    ],
    section_anchor: 'core-accounting-principles'
  },
  {
    segment_id: 'fa-accounting-foundations',
    order_index: 2, difficulty: 'easy',
    question: 'What does the substance over form accounting principle require of financial analysts and accountants?',
    correct: 'Economic transactions must be accounted for and presented in accordance with their substantive economic reality rather than merely their legal form.',
    distractors: [
      'Legal contracts must always supersede economic reality whenever a formal corporate dispute arises with commercial suppliers.',
      'Financial statements must record every tangible fixed asset at fair liquidation market value rather than historical purchase cost.',
      'Revenues must only be recognized when all legal claims and client warranty rights have completely expired.',
      'Every journal entry must be reviewed and certified by a commercial notary prior to balance sheet consolidation.',
      'Intangible assets must be written off immediately to ensure conservative legal compliance on the balance sheet.'
    ],
    explanation: 'Substance over form ensures that accounting captures the underlying economic truth of an arrangement (such as recognizing a finance lease as an asset acquisition) rather than its narrow legal title.',
    distractor_reasons: [
      'Substance over form specifically prevents legal formalities from distorting the underlying economic reality.',
      'Refers to fair-value or liquidation accounting, not substance over form.',
      'Revenues are recognized when performance obligations are fulfilled; warranty provisions handle ongoing obligations.',
      'Notarial certification is an administrative procedure unrelated to this accounting measurement rule.',
      'Conservative write-offs of viable intangibles violates faithful representation and economic substance.'
    ],
    section_anchor: 'core-accounting-principles'
  },
  {
    segment_id: 'fa-accounting-foundations',
    order_index: 3, difficulty: 'easy',
    question: 'What is the fundamental balance sheet equation that must hold true after every recorded transaction?',
    correct: 'Assets equal Liabilities plus Equity, reflecting that resources are financed by creditor claims and owner capital.',
    distractors: [
      'Assets equal Liabilities minus Equity, reflecting residual liquidation proceeds available to secured corporate lenders.',
      'Equity equals Total Assets plus Operating Revenues, reflecting the cumulative turnover generated across enterprise life.',
      'Liabilities equal Total Assets plus Operating Expenses, reflecting total capital deployed across active commercial projects.',
      'Total Cash equals Net Income plus Depreciation, reflecting the complete statutory balance sheet reconciliation.',
      'Gross Profit equals Total Assets divided by Total Liabilities, measuring enterprise structural operating leverage.'
    ],
    explanation: 'The fundamental balance sheet identity states that Total Assets = Liabilities + Equity. All economic resources (assets) owned by an enterprise are financed either through creditor borrowing (liabilities) or ownership investment (equity).',
    distractor_reasons: [
      'Subtracting equity from liabilities violates the dual-financing balance identity.',
      'Revenues are an income statement flow that accumulates into equity via retained earnings, not a direct addition to assets.',
      'Conflates operating costs with creditor liabilities, destroying the balance sheet identity.',
      'Conflates a rough operating cash proxy with the universal balance sheet equation.',
      'Conflates an efficiency ratio with the fundamental accounting balance identity.'
    ],
    section_anchor: 'accounts-and-the-accounting-equation'
  },
  {
    segment_id: 'fa-accounting-foundations',
    order_index: 4, difficulty: 'easy',
    question: 'In double-entry bookkeeping, what absolute mathematical constraint must be satisfied across every single journal entry?',
    correct: 'The sum of all debit amounts must exactly equal the sum of all credit amounts across affected accounts.',
    distractors: [
      'The number of debited individual accounts must strictly match the number of credited individual accounts.',
      'Every debit entry must involve an immediate corresponding cash inflow into corporate liquid bank reserves.',
      'Every credit entry must directly reduce operating expenses on the active income statement ledger.',
      'Debits must always be recorded in asset accounts while credits must strictly be recorded in equity accounts.',
      'Every journal entry must balance by including at least one short-term commercial liability account.'
    ],
    explanation: 'Double entry dictates that total debits must equal total credits for every transaction. Compound entries can have multiple debits and a single credit (or vice versa), provided monetary amounts balance.',
    distractor_reasons: [
      'One debit can balance against three credits; monetary amounts must balance, not the count of accounts.',
      'Debits describe the left-hand account placement and frequently represent non-cash asset or expense increases.',
      'Credits normally increase liabilities, equity, and revenues; they do not primarily reduce expenses.',
      'Debits can increase expenses and decrease liabilities; they are not restricted to asset accounts.',
      'Transactions frequently occur solely between asset accounts without involving liabilities.'
    ],
    section_anchor: 'debits-credits-and-double-entry-rules'
  },
  {
    segment_id: 'fa-accounting-foundations',
    order_index: 5, difficulty: 'intermediate',
    question: 'Which of the following account families normally increase with a debit and maintain normal debit balances?',
    correct: 'Asset accounts and operating expense accounts.',
    distractors: [
      'Liability accounts and sales revenue accounts.',
      'Shareholders’ equity capital accounts and trade accounts payable.',
      'Corporate income tax payable and retained earnings reserves.',
      'Bank loans payable and commercial customer billing revenues.',
      'Accumulated depreciation contra-accounts and common share capital.'
    ],
    explanation: 'Under double-entry conventions, asset accounts (e.g., cash, receivables, equipment) and expense accounts (e.g., wages, rent, utilities) increase with debits and carry normal debit balances.',
    distractor_reasons: [
      'Liabilities and revenues increase with credits and carry normal credit balances.',
      'Equity and trade payables are financing claims that increase with credits.',
      'Taxes payable and retained earnings are credit-balance liability and equity accounts.',
      'Bank loans and revenues both increase with credit entries.',
      'Share capital and accumulated depreciation contra-assets increase with credits.'
    ],
    section_anchor: 'debits-credits-and-double-entry-rules'
  },
  {
    segment_id: 'fa-accounting-foundations',
    order_index: 6, difficulty: 'intermediate',
    question: 'Which account families normally increase with a credit and maintain normal credit balances on the ledger?',
    correct: 'Liability accounts, shareholders’ equity accounts, and operating revenue accounts.',
    distractors: [
      'Tangible fixed asset accounts, inventory accounts, and cost of goods sold.',
      'Cash and cash equivalents, customer accounts receivable, and prepaid expenses.',
      'Operating salary expenses, administrative utility expenses, and marketing costs.',
      'Short-term commercial receivables, intangible software assets, and rent expense.',
      'Prepaid insurance assets, raw material inventories, and depreciation expense.'
    ],
    explanation: 'Liabilities (creditor claims), Equity (shareholder claims), and Revenues (earnings inflows) increase on the credit side and maintain normal credit balances.',
    distractor_reasons: [
      'Fixed assets, inventory, and COGS are asset and expense accounts that increase with debits.',
      'Cash, receivables, and prepayments are current assets that increase with debits.',
      'Salaries, utilities, and marketing are operating expenses that increase with debits.',
      'Receivables, software, and rent are asset and expense items that increase with debits.',
      'Prepayments, raw materials, and depreciation are asset and expense accounts that increase with debits.'
    ],
    section_anchor: 'debits-credits-and-double-entry-rules'
  },
  {
    segment_id: 'fa-accounting-foundations',
    order_index: 7, difficulty: 'intermediate',
    question: 'A company delivers consulting services and invoices a corporate client €1,000 on 30-day payment terms. What is the correct journal entry?',
    correct: 'Debit Accounts Receivable €1,000 and Credit Consulting Revenue €1,000.',
    distractors: [
      'Debit Cash €1,000 and Credit Consulting Revenue €1,000, assuming immediate bank clearance.',
      'Debit Accounts Payable €1,000 and Credit Consulting Revenue €1,000.',
      'Debit Consulting Revenue €1,000 and Credit Accounts Receivable €1,000.',
      'Debit Accounts Receivable €1,000 and Credit Deferred Revenue Liability €1,000.',
      'Debit Cash €1,000 and Credit Accounts Receivable €1,000 with no revenue recognized.'
    ],
    explanation: 'Under accrual accounting, fulfilling the service earns revenue (Credit Revenue €1,000) and creates a legal right to receive cash (Debit Accounts Receivable €1,000).',
    distractor_reasons: [
      'Cash has not yet been received; debiting cash misstates liquid bank balances.',
      'Accounts Payable is a liability owed to suppliers, not a claim against customers.',
      'Reverses the entry, which would decrease revenue and decrease assets.',
      'Deferred revenue is only used when cash is received prior to delivering the service.',
      'Describes the subsequent collection event, not the initial service delivery and invoicing.'
    ],
    section_anchor: 'worked-journal-entry-sequence'
  },
  {
    segment_id: 'fa-accounting-foundations',
    order_index: 8, difficulty: 'intermediate',
    question: 'When the client subsequently settles the €1,000 consulting invoice in cash, what journal entry must be recorded?',
    correct: 'Debit Cash €1,000 and Credit Accounts Receivable €1,000, with no new revenue recognized.',
    distractors: [
      'Debit Cash €1,000 and Credit Consulting Revenue €1,000, recognizing revenue upon cash arrival.',
      'Debit Accounts Receivable €1,000 and Credit Cash €1,000, reclassifying the commercial balance.',
      'Debit Consulting Revenue €1,000 and Credit Cash €1,000 to eliminate provisional billing.',
      'Debit Cash €1,000 and Credit Retained Earnings €1,000 directly on the balance sheet.',
      'Debit Cash €1,000 and Credit Accounts Payable €1,000 to cancel the client obligation.'
    ],
    explanation: 'Settling an invoice is an asset exchange: Cash increases (Debit Cash €1,000) and Receivables decrease (Credit Accounts Receivable €1,000). Revenue was already recognized when earned.',
    distractor_reasons: [
      'Double-counts revenue; revenue was recognized at the moment of billing.',
      'Reverses the actual cash movement; cash is being received, not disbursed.',
      'Debiting revenue cancels earnings, which contradicts receiving payment.',
      'Net income flows into retained earnings during year-end close, not through routine collections.',
      'Accounts payable is for vendor liabilities, not customer receivables.'
    ],
    section_anchor: 'worked-journal-entry-sequence'
  },
  {
    segment_id: 'fa-accounting-foundations',
    order_index: 9, difficulty: 'hard',
    question: 'A company borrows €5,000 in cash from a commercial bank by signing a two-year loan. What is the balanced effect on financial records?',
    correct: 'Debit Cash €5,000 (increasing assets) and Credit Bank Loans Payable €5,000 (increasing liabilities).',
    distractors: [
      'Debit Cash €5,000 and Credit Financing Revenue €5,000, increasing period operating income.',
      'Debit Bank Loans Payable €5,000 and Credit Cash €5,000, reflecting the loan principal draw.',
      'Debit Bank Loans Expense €5,000 and Credit Cash €5,000 directly on the income statement.',
      'Debit Cash €5,000 and Credit Share Capital €5,000, increasing equity ownership claims.',
      'Debit Cash €5,000 and Credit Retained Earnings €5,000 as an extraordinary gain.'
    ],
    explanation: 'Borrowing increases an asset (Debit Cash €5,000) and creates an equal obligation to repay the lender (Credit Bank Loans Payable €5,000). Borrowing generates no revenue.',
    distractor_reasons: [
      'Borrowing is not revenue; it must be repaid and represents a creditor liability.',
      'Reverses the transaction, which would record a loan repayment rather than a loan disbursement.',
      'Principal borrowing is not an expense; only interest incurred over time is an expense.',
      'Bank borrowing is debt financing from creditors, not equity capital from shareholders.',
      'Borrowing proceeds do not represent earned profit or an extraordinary gain.'
    ],
    section_anchor: 'worked-journal-entry-sequence'
  },
  {
    segment_id: 'fa-accounting-foundations',
    order_index: 10, difficulty: 'hard',
    question: 'Why is an accounting debit entry not synonymous with an economic cash outflow?',
    correct: 'A debit can record an increase in a non-cash asset (like equipment or inventory) or an operating expense incurred on credit.',
    distractors: [
      'Debits only represent cash outflows when transactions involve certified public institutions.',
      'A debit always reflects cash inflows, whereas credits strictly represent commercial cash outflows.',
      'Debits represent cash outflows only when audited at the end of the fourth fiscal quarter.',
      'A debit entry is strictly an equity adjustment that never impacts liquid banking balances.',
      'Debits only track tax disbursements, while credits track all operational supplier settlements.'
    ],
    explanation: 'Debit describes an account side. Debits increase all assets (cash, receivables, equipment) and expenses. Purchasing equipment on credit debits Equipment (non-cash) without any cash outflow.',
    distractor_reasons: [
      'Accounting rules apply universally across public and private commercial transactions.',
      'Inverts reality: cash inflows are recorded as debits to the Cash asset account.',
      'Debits operate continuously throughout the fiscal year, not solely at quarter-end close.',
      'Debits routinely adjust cash, receivables, and liabilities, not exclusively equity.',
      'Debits apply across all account classes, not solely tax disbursements.'
    ],
    section_anchor: 'debits-credits-and-double-entry-rules'
  },
  {
    segment_id: 'fa-accounting-foundations',
    order_index: 11, difficulty: 'hard',
    question: 'What is the primary operational role of Portugal’s Sistema de Normalização Contabilística (SNC) chart of accounts?',
    correct: 'It establishes a standardized numeric accounting taxonomy aligned with European directives, ensuring consistency across enterprise statements.',
    distractors: [
      'It mandates that all Portuguese corporations publish weekly audited balance sheets in the government gazette.',
      'It dictates the statutory price ceiling that commercial enterprises are permitted to charge for consumer goods.',
      'It eliminates the need for double-entry bookkeeping for small and medium-sized regional enterprises.',
      'It requires that all fixed asset investments be amortized to zero within twenty-four months of acquisition.',
      'It forces companies to operate exclusively on a pure cash-accounting basis without accruals.'
    ],
    explanation: 'The SNC provides a standardized framework and structured chart of accounts aligned with IFRS and EU directives, ensuring uniform financial reporting across Portuguese companies.',
    distractor_reasons: [
      'SNC regulates reporting standards and annual accounts, not weekly gazette publications.',
      'Price controls are macroeconomic regulatory matters entirely separate from accounting standards.',
      'Double-entry bookkeeping is the universal structural foundation of SNC.',
      'Depreciation schedules depend on economic useful lives, not an arbitrary 24-month write-off.',
      'SNC strictly enforces accrual-basis accounting, explicitly rejecting cash-basis reporting.'
    ],
    section_anchor: 'portuguese-snc-and-standardization-framework'
  },
  {
    segment_id: 'fa-accounting-foundations',
    order_index: 12, difficulty: 'hard',
    question: 'How do balance sheet accounts differ fundamentally from income statement accounts regarding their temporal nature?',
    correct: 'Balance sheet accounts report cumulative financial position at a static date, while income statement accounts measure performance flows over a dynamic period.',
    distractors: [
      'Balance sheet accounts are closed to zero each month, whereas income statement accounts accumulate across decades.',
      'Income statement accounts measure permanent resources, while balance sheet accounts track transient overhead costs.',
      'Balance sheet accounts only record cash movements, while income statement accounts record credit transactions.',
      'Balance sheet accounts are optional for private firms, while income statement accounts are mandatory for tax audits.',
      'Income statement accounts carry forward permanent balances, while balance sheet accounts are reset at year-end.'
    ],
    explanation: 'The balance sheet is a static snapshot of assets, liabilities, and equity at a specific date. The income statement is a dynamic flow measuring revenues and expenses over an elapsed period, resetting to zero at year-end.',
    distractor_reasons: [
      'Inverts reality: income statement accounts are closed to zero at year-end, while balance sheet accounts are permanent.',
      'The balance sheet measures permanent resources (assets) and obligations (liabilities).',
      'Both financial statements incorporate accrual and credit transactions.',
      'Both the balance sheet and income statement are mandatory components of complete statutory financial reporting.',
      'Inverts the closing process: temporary revenue and expense accounts reset, not permanent balance sheet accounts.'
    ],
    section_anchor: 'accounts-and-the-accounting-equation'
  },

  // ==========================================================================
  // SEGMENT 2: fa-period-end-adjustments
  // ==========================================================================
  {
    segment_id: 'fa-period-end-adjustments',
    order_index: 1, difficulty: 'easy',
    question: 'Under the First-In, First-Out (FIFO) inventory cost-flow convention, what assumption is made regarding unit costs?',
    correct: 'The earliest acquired inventory procurement costs are assigned to Cost of Goods Sold (COGS) first, leaving the most recent purchase costs in ending inventory.',
    distractors: [
      'The most recently incurred acquisition costs are charged to COGS first, leaving the oldest historical costs on the balance sheet.',
      'All inventory purchases are blended into an arithmetic mean unit cost applied equally to units sold and units retained.',
      'Inventory units are strictly valued at their future estimated retail selling price minus standard marketing commissions.',
      'Inventory is immediately written off as an operational expense upon warehouse delivery, maintaining a zero balance sheet carrying value.',
      'The highest cost units in the batch are assigned to units sold regardless of acquisition sequence to minimize reported gross profit.'
    ],
    explanation: 'FIFO assumes that the oldest items acquired are the first ones sold. Consequently, COGS receives the earliest purchase prices while ending inventory reflects recent market acquisition costs.',
    distractor_reasons: [
      'Describes the LIFO (Last-In, First-Out) method, not FIFO.',
      'Describes the Weighted Average Cost (WAC) method, not FIFO.',
      'Inventory is recorded at cost, not anticipated retail selling price.',
      'Immediate expensing violates the matching and accrual principles for unsold goods.',
      'Cost-flow methods follow chronological or weighted formulas, not opportunistic cherry-picking of high costs.'
    ],
    section_anchor: 'inventory-cost-flow-methods-fifo-lifo-and-wac'
  },
  {
    segment_id: 'fa-period-end-adjustments',
    order_index: 2, difficulty: 'easy',
    question: 'How is the Weighted Average Cost (WAC) per unit calculated across an accounting period?',
    correct: 'Divide the total monetary cost of goods available for sale by the total number of units available for sale across the period.',
    distractors: [
      'Divide ending balance sheet cash reserves by the total number of customer orders invoiced during the fiscal year.',
      'Multiply the earliest purchase price by total units sold, then subtract the latest purchase invoice price.',
      'Add the highest and lowest purchase prices of the year and divide by two, ignoring actual order unit quantities.',
      'Divide the final invoice unit price by total units remaining in the physical warehouse at year-end close.',
      'Multiply total units purchased by the statutory corporate tax rate and divide by units delivered to retail stores.'
    ],
    explanation: 'WAC takes the total cost of all units available for sale (Beginning Inventory Cost + Purchase Costs) and divides by the total number of available units to produce a weighted average cost per unit.',
    distractor_reasons: [
      'Cash reserves have no mathematical connection to inventory unit procurement costs.',
      'Arbitrary arithmetic formula with no relationship to weighted inventory valuation.',
      'A simple midpoint ignores purchase quantities, violating weighted average principles.',
      'Uses only the final price rather than weighting all purchases across the operating period.',
      'Tax rates are completely irrelevant to determining inventory unit acquisition cost.'
    ],
    section_anchor: 'inventory-cost-flow-methods-fifo-lifo-and-wac'
  },
  {
    segment_id: 'fa-period-end-adjustments',
    order_index: 3, difficulty: 'easy',
    question: 'In an inflationary environment with steadily rising supplier purchase prices, why does FIFO report higher net income than LIFO?',
    correct: 'FIFO assigns older, lower purchase costs to COGS, yielding a higher gross profit margin, whereas LIFO assigns recent, higher purchase costs to COGS.',
    distractors: [
      'FIFO artificially increases cash inflows from retail customers by applying a premium consumer surcharge.',
      'LIFO automatically exempts the enterprise from paying statutory municipal value-added taxes on merchandise.',
      'FIFO requires that all tangible fixed assets be revalued upward annually to match general economic inflation.',
      'LIFO records lower depreciation charges on production machinery, depressing operating earnings on the income statement.',
      'FIFO eliminates supplier trade accounts payable from the closing balance sheet through automatic debt cancellation.'
    ],
    explanation: 'Under rising prices, earliest costs are the lowest costs. Because FIFO assigns these older, lower costs to COGS, reported production costs are minimized, producing higher gross profit and higher taxable income.',
    distractor_reasons: [
      'Cost-flow methods only affect internal cost allocation; they do not change customer retail prices.',
      'LIFO affects income tax timing under US GAAP; it does not exempt companies from VAT.',
      'Depreciation and fixed asset accounting are entirely separate from inventory cost-flow methods.',
      'LIFO relates strictly to inventory and COGS, not machinery depreciation schedules.',
      'Inventory cost methods do not alter or cancel liabilities owed to trade vendors.'
    ],
    section_anchor: 'inventory-cost-flow-methods-fifo-lifo-and-wac'
  },
  {
    segment_id: 'fa-period-end-adjustments',
    order_index: 4, difficulty: 'easy',
    question: 'What is the fundamental accounting purpose of recording annual depreciation on tangible fixed assets?',
    correct: 'To systematically allocate the depreciable cost of a long-lived productive asset across the accounting periods that benefit from its operational use.',
    distractors: [
      'To build a liquid cash reserve in a segregated bank account earmarked for future equipment replacement.',
      'To guarantee that the balance sheet carrying value of machinery matches its exact second-hand auction price.',
      'To reduce the enterprise’s total liabilities owed to commercial banking lenders and debenture holders.',
      'To record the periodic cash payments disbursed to machine operators and maintenance contractors.',
      'To eliminate the historical purchase cost of the asset from balance sheet records within twelve months.'
    ],
    explanation: 'Depreciation matches the historical cost of a productive asset against the revenues it helps generate over its useful economic life, adhering strictly to the matching principle.',
    distractor_reasons: [
      'Depreciation is an accounting cost allocation, not cash set aside in a bank account.',
      'Depreciation is cost allocation, not market valuation or fair-value appraisal.',
      'Depreciation reduces net asset carrying values; it does not reduce external debt liabilities.',
      'Equipment maintenance and wages are routine operating expenses, not asset depreciation.',
      'Assets are depreciated across their multi-year useful lives, not eliminated in 12 months.'
    ],
    section_anchor: 'tangible-asset-depreciation-and-impairment'
  },
  {
    segment_id: 'fa-period-end-adjustments',
    order_index: 5, difficulty: 'intermediate',
    question: 'A manufacturing machine costs €12,000, has an estimated zero residual value, and has an expected useful life of 4 years. What is the straight-line annual depreciation?',
    correct: '€3,000 per year.',
    distractors: [
      '€12,000 per year, expensing the entire asset in Year 1.',
      '€4,000 per year, based on a three-year accelerated statutory recovery schedule.',
      '€1,500 per year, assuming half-year amortization conventions across eight operating semesters.',
      '€2,400 per year, applying a standard twenty percent declining balance multiplier.',
      '€6,000 per year, dividing historical cost by half of the estimated operational life.'
    ],
    explanation: 'Straight-line annual depreciation = (Cost - Residual Value) / Useful Life = (€12,000 - €0) / 4 years = €3,000 per year.',
    distractor_reasons: [
      'Expensing the entire €12,000 in Year 1 violates the matching principle for long-lived assets.',
      '€4,000 corresponds to a 3-year life, not the stated 4-year useful life.',
      '€1,500 would correspond to an 8-year useful life.',
      '€2,400 represents a 20% rate (5-year life), not the stated 4-year life (25%).',
      'Arbitrary calculation dividing by 2 years instead of the full 4-year life.'
    ],
    section_anchor: 'tangible-asset-depreciation-and-impairment'
  },
  {
    segment_id: 'fa-period-end-adjustments',
    order_index: 6, difficulty: 'intermediate',
    question: 'What is the immediate liquid cash impact on the enterprise when an annual depreciation adjusting entry is recorded in the general journal?',
    correct: 'There is zero cash impact; depreciation is a non-cash accounting expense that reduces profit without requiring a current-period cash disbursement.',
    distractors: [
      'Cash immediately decreases by the full depreciation amount via an electronic transfer to the tax authority.',
      'Cash increases because depreciation expense generates an immediate non-refundable government tax rebate.',
      'Cash decreases because the company must deposit matching funds into an escrow account at a commercial bank.',
      'Cash increases by the asset’s original purchase cost multiplied by the statutory corporate tax rate.',
      'Cash decreases by half the depreciation amount to settle accumulated wear-and-tear liabilities.'
    ],
    explanation: 'Depreciation is a non-cash expense. The cash outflow occurred in full when the asset was purchased. Recording depreciation allocates historical cost without moving liquid cash.',
    distractor_reasons: [
      'Depreciation involves no cash transfer to tax authorities or third parties.',
      'Depreciation provides a tax shield that lowers tax liabilities, but does not provide immediate cash grants.',
      'No legal requirement exists to deposit cash into escrow accounts when depreciating equipment.',
      'Fictional formula confusing tax shield concepts with direct cash creation.',
      'Wear-and-tear does not trigger cash outflows unless physical repairs are contracted.'
    ],
    section_anchor: 'tangible-asset-depreciation-and-impairment'
  },
  {
    segment_id: 'fa-period-end-adjustments',
    order_index: 7, difficulty: 'intermediate',
    question: 'At fiscal year-end, corporate staff have earned €5,000 in wages for December work that will not be paid until January 5. What adjusting entry must be made on December 31?',
    correct: 'Debit Salary Expense €5,000 (increasing expenses) and Credit Accrued Salaries Payable €5,000 (increasing liabilities).',
    distractors: [
      'Debit Cash €5,000 and Credit Salary Expense €5,000 to record the deferred labor benefit.',
      'Debit Prepaid Salaries Asset €5,000 and Credit Cash €5,000 to anticipate future payroll obligations.',
      'Debit Accrued Salaries Payable €5,000 and Credit Salary Expense €5,000 on the balance sheet.',
      'Make no entry until January 5 when actual cash leaves the company bank account.',
      'Debit Salary Expense €5,000 and Credit Retained Earnings €5,000 directly in equity.'
    ],
    explanation: 'Under accrual accounting, employees earned their wages in December. The firm must record the expense (Debit Salary Expense €5,000) and the liability to pay them (Credit Accrued Salaries Payable €5,000).',
    distractor_reasons: [
      'Cash was not received; cash is unaffected until actual payment occurs in January.',
      'Prepaid salary is for wages paid in advance of work; here the work was already performed.',
      'Reverses the entry, which would reduce expenses and reduce liabilities.',
      'Omitting the entry violates accrual accounting, understating expenses and liabilities.',
      'Operating payroll expenses match against period revenues, not credited to retained earnings.'
    ],
    section_anchor: 'accruals-prepayments-and-deferred-revenue'
  },
  {
    segment_id: 'fa-period-end-adjustments',
    order_index: 8, difficulty: 'intermediate',
    question: 'A company paid €3,600 cash in advance for an 18-month commercial insurance policy. By December 31, €2,400 of coverage has expired. What is the adjusting entry?',
    correct: 'Debit Insurance Expense €2,400 and Credit Prepaid Insurance €2,400, leaving €1,200 as an asset on the balance sheet.',
    distractors: [
      'Debit Cash €2,400 and Credit Insurance Expense €2,400, recognizing an insurance dividend.',
      'Debit Prepaid Insurance €2,400 and Credit Insurance Expense €2,400 to restore asset value.',
      'Debit Insurance Expense €3,600 and Credit Cash €3,600, re-recording the initial payment.',
      'Debit Accounts Payable €2,400 and Credit Prepaid Insurance €2,400 to eliminate supplier balances.',
      'Make no adjustment until the full 18-month policy reaches its final contractual expiration date.'
    ],
    explanation: 'The portion of prepaid insurance that has expired during the year (€2,400) is recognized as an operating expense (Debit Insurance Expense €2,400) and deducted from the asset (Credit Prepaid Insurance €2,400).',
    distractor_reasons: [
      'The company did not receive cash; it consumed insurance coverage.',
      'Prepaid insurance was already debited when cash was paid; it must now be credited as it expires.',
      'Expensing the entire €3,600 overstates current expenses, because 6 months of coverage remain unconsumed.',
      'Accounts payable is unaffected because the policy was paid upfront in cash.',
      'Deferring adjustment until policy expiration violates the accrual and matching principles.'
    ],
    section_anchor: 'accruals-prepayments-and-deferred-revenue'
  },
  {
    segment_id: 'fa-period-end-adjustments',
    order_index: 9, difficulty: 'hard',
    question: 'In December, a company collects €4,000 in cash from a client as an advance deposit for catering services to be delivered in February. How must this be recorded in December?',
    correct: 'Debit Cash €4,000 and Credit Deferred Revenue (Liability) €4,000, recognizing zero revenue until services are delivered.',
    distractors: [
      'Debit Cash €4,000 and Credit Catering Sales Revenue €4,000, recognizing revenue immediately upon cash receipt.',
      'Debit Accounts Receivable €4,000 and Credit Deferred Revenue €4,000 without recording cash.',
      'Debit Deferred Revenue €4,000 and Credit Cash €4,000, treating the receipt as a supplier refund.',
      'Debit Catering Expense €4,000 and Credit Cash €4,000 directly on the income statement.',
      'Record the receipt in an unlisted memorandum ledger without adjusting the general ledger accounts.'
    ],
    explanation: 'Collecting cash before fulfilling the performance obligation creates a liability (Deferred Revenue / Unearned Revenue) because the company owes the service. Revenue is recognized only in February upon delivery.',
    distractor_reasons: [
      'Recognizing revenue before delivery violates the accrual principle.',
      'Cash was physically collected, so Cash must be debited, not Accounts Receivable.',
      'Reverses the cash flow, treating a cash inflow as a cash outflow.',
      'Customer deposits are not operating expenses; they are unearned customer liabilities.',
      'All commercial transactions must be recorded in the formal general ledger accounts.'
    ],
    section_anchor: 'accruals-prepayments-and-deferred-revenue'
  },
  {
    segment_id: 'fa-period-end-adjustments',
    order_index: 10, difficulty: 'hard',
    question: 'What does an accounting provision (e.g. for doubtful debts or warranty claims) represent on the balance sheet?',
    correct: 'A recognized liability of uncertain timing or amount established to reflect probable economic obligations or asset impairments under conservatism.',
    distractors: [
      'A segregated cash deposit held in an insured commercial bank account that cannot be withdrawn for five years.',
      'A permanent reduction in common share capital authorized by the corporate board of directors.',
      'A statutory cash prepayment disbursed directly to the judicial court system for pending litigation.',
      'A guaranteed tax credit voucher issued by the ministry of finance to subsidize industrial research.',
      'An unearned revenue liability arising strictly from advance client subscription contracts.'
    ],
    explanation: 'A provision is a recognized liability of uncertain timing or amount (e.g., bad-debt allowance, warranty obligation). It reflects conservatism and matching, and is an accounting accrual, not cash in a bank.',
    distractor_reasons: [
      'A provision is an accounting estimate on the liability side, not a dedicated liquid bank deposit.',
      'Provisions do not adjust legal common share capital.',
      'Provisions reflect estimated internal liabilities, not court escrow payments.',
      'Provisions are obligations/expenses, not government tax credit subsidies.',
      'Unearned customer revenue is deferred revenue, not a loss provision.'
    ],
    section_anchor: 'provisions-and-income-tax-determination'
  },
  {
    segment_id: 'fa-period-end-adjustments',
    order_index: 11, difficulty: 'hard',
    question: 'Why is the Last-In, First-Out (LIFO) inventory cost-flow convention strictly prohibited under IFRS (IAS 2) and Portuguese SNC regulations?',
    correct: 'LIFO leaves outdated historical purchase costs on the balance sheet, severely understating inventory asset values during inflationary periods.',
    distractors: [
      'LIFO is mathematically impossible to implement in modern computer accounting software databases.',
      'LIFO requires companies to physically label and track every individual unit sold using serial numbers.',
      'LIFO automatically eliminates all gross profit margins, forcing companies into technical legal bankruptcy.',
      'LIFO is prohibited because it prevents corporate entities from claiming straight-line machinery depreciation.',
      'LIFO forces enterprises to pay double statutory corporate income taxes on unsold warehouse merchandise.'
    ],
    explanation: 'Under inflation, LIFO leaves older, deflated historical costs on the balance sheet, resulting in carrying values that bear no resemblance to current replacement costs. Therefore, IFRS and SNC prohibit LIFO.',
    distractor_reasons: [
      'LIFO is easily computed in ERP databases (and is widely used in the US under US GAAP).',
      'Tracking serial numbers describes the Specific Identification method, not LIFO.',
      'LIFO increases COGS under inflation, but does not eliminate profits or cause legal bankruptcy.',
      'Inventory cost-flow methods have no legal or accounting impact on fixed asset depreciation.',
      'LIFO actually lowers reported profits and defers taxes in the US; it does not double tax.'
    ],
    section_anchor: 'inventory-cost-flow-methods-fifo-lifo-and-wac'
  },
  {
    segment_id: 'fa-period-end-adjustments',
    order_index: 12, difficulty: 'hard',
    question: 'In the standard accounting closing sequence, at what exact stage must corporate income tax expense be calculated and recorded?',
    correct: 'Strictly after all accruals, prepayments, depreciation, and bad-debt provisions have been incorporated to establish final adjusted pre-tax income (EBT).',
    distractors: [
      'Prior to recording annual depreciation, applying the tax rate to unadjusted gross cash receipts.',
      'At the start of the fiscal year, based on projected sales forecasts approved by commercial managers.',
      'Immediately after invoicing customer sales, applying the tax rate directly to each individual sales ticket.',
      'Only after common dividends have been fully distributed to equity shareholders in cash.',
      'Concurrently with the procurement of raw material inventory, treating supplier invoices as pre-tax income.'
    ],
    explanation: 'Income tax is levied on taxable operating profit. Therefore, all period-end adjustments (depreciation, provisions, accruals, deferrals) must be completed to determine adjusted EBT before multiplying by the tax rate.',
    distractor_reasons: [
      'Depreciation is a deductible expense; calculating tax before depreciation overstates tax liability.',
      'Tax is levied on realized annual taxable income, not preliminary budget forecasts.',
      'Sales invoicing determines VAT/sales tax, not annual corporate income tax on net earnings.',
      'Dividends are an equity distribution of after-tax earnings; tax is calculated before dividends.',
      'Inventory purchases are asset acquisitions, not taxable income.'
    ],
    section_anchor: 'provisions-and-income-tax-determination'
  },

  // ==========================================================================
  // SEGMENT 3: fa-balance-income-statements
  // ==========================================================================
  {
    segment_id: 'fa-balance-income-statements',
    order_index: 1, difficulty: 'easy',
    question: 'What economic information does the balance sheet (balanço) provide to corporate stakeholders?',
    correct: 'A point-in-time snapshot of the enterprise’s economic resources (assets) and financing claims (liabilities and equity) at a specific calendar date.',
    distractors: [
      'A dynamic record of operational revenues and commercial expenses accumulated across twelve continuous months.',
      'A multi-year forecast of anticipated customer orders and production quotas for upcoming product lines.',
      'A detailed reconciliation of liquid cash deposits moving through corporate checking accounts during the year.',
      'A statutory register of customer warranty claims filed against defective industrial equipment.',
      'A schedule of employee salary negotiations and corporate collective bargaining agreements.'
    ],
    explanation: 'The balance sheet reports financial position at a single point in time (e.g., December 31), classifying assets, liabilities, and equity.',
    distractor_reasons: [
      'Describes the income statement, which measures performance flows over a dynamic period.',
      'Describes an operational budget or sales pipeline, not a historical balance sheet.',
      'Describes the statement of cash flows, which reconciles liquid cash movements.',
      'Warranty tracking is an internal customer service log, not the balance sheet.',
      'Human resources and collective bargaining are operational HR matters outside balance sheet reporting.'
    ],
    section_anchor: 'position-and-performance-two-different-perspectives'
  },
  {
    segment_id: 'fa-balance-income-statements',
    order_index: 2, difficulty: 'easy',
    question: 'How does the income statement (demonstração de resultados) differ conceptually from the balance sheet?',
    correct: 'It measures dynamic operational performance over an elapsed period of time by matching revenues earned against expenses incurred.',
    distractors: [
      'It measures permanent cumulative enterprise resources built up since initial corporate incorporation.',
      'It reports the liquidation auction value of machinery and industrial real estate at year-end close.',
      'It is strictly prepared on a pure cash-accounting basis, completely excluding all credit transactions.',
      'It lists the legal ownership percentages and voting rights of all institutional equity shareholders.',
      'It only tracks tax disbursements paid to municipal authorities, omitting employee payroll costs.'
    ],
    explanation: 'The income statement is a dynamic flow statement measuring economic performance (revenues - expenses = net income) over a defined period (e.g., one quarter or one year).',
    distractor_reasons: [
      'Permanent cumulative resources are reported on the balance sheet, not the income statement.',
      'The income statement records revenue and expense flows, not liquidation property values.',
      'The income statement is strictly prepared under accrual accounting, not pure cash accounting.',
      'Shareholder ownership percentages are documented in the corporate register and notes, not the income statement.',
      'The income statement includes all operating expenses, including payroll, COGS, and overhead.'
    ],
    section_anchor: 'position-and-performance-two-different-perspectives'
  },
  {
    segment_id: 'fa-balance-income-statements',
    order_index: 3, difficulty: 'easy',
    question: 'How is Gross Profit calculated on a standard multi-step income statement?',
    correct: 'Sales Revenue minus Cost of Goods Sold (COGS).',
    distractors: [
      'Sales Revenue minus Total Operating Expenses and Administrative Overhead.',
      'Operating Income (EBIT) minus Net Interest Expense and Bank Fees.',
      'Pre-Tax Income (EBT) minus Corporate Income Tax Expense.',
      'Total Assets minus Total Liabilities on the closing balance sheet.',
      'Gross Billings plus Long-Term Commercial Debt Borrowings.'
    ],
    explanation: 'Gross Profit = Sales Revenue - Cost of Goods Sold (COGS). It isolates the direct profit margin remaining after direct manufacturing or acquisition costs.',
    distractor_reasons: [
      'Subtracting total operating overhead yields Operating Income (EBIT), not Gross Profit.',
      'EBIT minus interest expense yields Pre-Tax Income (EBT).',
      'EBT minus income tax yields Net Income (bottom line).',
      'Assets minus liabilities calculates Equity on the balance sheet.',
      'Borrowing debt is a financing cash flow, completely unrelated to gross profit margins.'
    ],
    section_anchor: 'income-statement-multistage-margin-structure'
  },
  {
    segment_id: 'fa-balance-income-statements',
    order_index: 4, difficulty: 'easy',
    question: 'What specific expense items separate Operating Income (EBIT) from Pre-Tax Profit (EBT)?',
    correct: 'Net financing costs, primarily interest expenses on bank debt and bond borrowings.',
    distractors: [
      'Direct factory production wages and raw material manufacturing procurement costs.',
      'Commercial marketing expenditures and executive administrative salaries.',
      'Corporate income tax provisions and statutory municipal profit surcharges.',
      'Annual depreciation of tangible equipment and intangible software amortization.',
      'Cash dividend payouts distributed to common equity shareholders.'
    ],
    explanation: 'EBIT is Operating Income before interest and taxes. Subtracting Net Interest Expense from EBIT produces EBT (Earnings Before Taxes).',
    distractor_reasons: [
      'Factory wages and raw materials form COGS, which is deducted before reaching Gross Profit.',
      'Marketing and executive salaries are operating expenses deducted before reaching EBIT.',
      'Income taxes are deducted after EBT to arrive at Net Income.',
      'Depreciation and amortization are operating expenses deducted before EBIT.',
      'Dividends are an equity distribution deducted from Net Income, not an expense between EBIT and EBT.'
    ],
    section_anchor: 'income-statement-multistage-margin-structure'
  },
  {
    segment_id: 'fa-balance-income-statements',
    order_index: 5, difficulty: 'intermediate',
    question: 'How does annual Net Income ultimately flow into and impact the balance sheet at fiscal year-end?',
    correct: 'It increases Retained Earnings within the Shareholders’ Equity section, net of any dividends declared or distributed.',
    distractors: [
      'It directly increases liquid cash reserves in bank checking accounts by an equal monetary amount.',
      'It reduces total creditor liabilities owed to commercial suppliers and long-term lenders.',
      'It increases common share capital par value without requiring board authorization.',
      'It is recorded as a long-term intangible asset titled Goodwill on the asset side.',
      'It eliminates accumulated depreciation contra-assets on the fixed asset schedule.'
    ],
    explanation: 'Net Income increases Retained Earnings in Equity. Retained Earnings = Beginning Retained Earnings + Net Income - Dividends Declared. It does not automatically equal cash.',
    distractor_reasons: [
      'Net income is an accrual profit metric and does not automatically translate into an equal cash inflow.',
      'Profits do not automatically pay down liabilities unless cash is actively disbursed to lenders.',
      'Share capital reflects formal equity contributions, whereas profits accumulate in retained earnings.',
      'Goodwill arises only in corporate mergers and acquisitions, not from internal annual profits.',
      'Accumulated depreciation tracks asset aging and is unaffected by net income.'
    ],
    section_anchor: 'the-dynamic-link-from-net-income-to-retained-earnings'
  },
  {
    segment_id: 'fa-balance-income-statements',
    order_index: 6, difficulty: 'intermediate',
    question: 'Why can a profitable company reporting substantial net income face an acute liquidity shortage?',
    correct: 'Revenues recognized on credit expand Accounts Receivable rather than cash, while cash may be absorbed by inventory, CapEx, or debt repayments.',
    distractors: [
      'Accrual accounting rules mandate that half of annual net profit must be destroyed in paper cash.',
      'Corporate income taxes must be paid in gold bullion rather than standard electronic banking currency.',
      'Net income can only be calculated when the company has exhausted all available commercial credit lines.',
      'Double-entry bookkeeping requires that every euro of reported profit must reduce liquid bank balances.',
      'Depreciation expenses force the company to disburse cash to equipment manufacturers every December.'
    ],
    explanation: 'Profits reflect accrual accounting (credit sales create receivables, not immediate cash). If cash is tied up in expanding receivables and inventory, or used for debt service and CapEx, the firm can run out of cash.',
    distractor_reasons: [
      'Absurd distractor with no basis in reality or accounting rules.',
      'Taxes are settled in legal electronic currency, not bullion.',
      'Net income is calculated continuously regardless of credit facility utilization.',
      'Double entry does not reduce bank balances when recording profit.',
      'Depreciation is a non-cash expense; it causes no cash disbursements to manufacturers.'
    ],
    section_anchor: 'the-dynamic-link-from-net-income-to-retained-earnings'
  },
  {
    segment_id: 'fa-balance-income-statements',
    order_index: 7, difficulty: 'intermediate',
    question: 'How does the declaration and payment of a cash dividend to shareholders affect financial statements?',
    correct: 'It reduces Cash (Asset) and reduces Retained Earnings (Equity); it is never recorded as an operating expense on the income statement.',
    distractors: [
      'It is recorded as an operating administrative expense on the income statement, reducing Net Income.',
      'It increases Accounts Payable (Liability) and increases Common Share Capital (Equity).',
      'It increases Financing Revenue on the income statement and increases balance sheet cash.',
      'It reduces Long-Term Debt liabilities while increasing Net Operating Profit After Tax (NOPAT).',
      'It has zero effect on the balance sheet because dividends represent internal book adjustments.'
    ],
    explanation: 'Dividends are distributions of profit to owners, not business operating costs. They bypass the income statement completely, reducing Cash (Asset) and reducing Retained Earnings (Equity).',
    distractor_reasons: [
      'Dividends are an equity distribution, not an operating expense; they never reduce net income.',
      'Dividends distribute cash to owners; they do not increase share capital.',
      'Paying dividends is a cash outflow, not financing revenue.',
      'Dividends are paid to shareholders, not debt lenders, and have no impact on NOPAT.',
      'Dividends materially reduce corporate cash and total shareholders equity.'
    ],
    section_anchor: 'the-dynamic-link-from-net-income-to-retained-earnings'
  },
  {
    segment_id: 'fa-balance-income-statements',
    order_index: 8, difficulty: 'intermediate',
    question: 'Which of the following items are properly classified as Current Assets on a corporate balance sheet?',
    correct: 'Cash and cash equivalents, trade accounts receivable, marketable securities, and inventory.',
    distractors: [
      'Industrial manufacturing buildings, proprietary patents, and commercial bank mortgage loans.',
      'Trade accounts payable, accrued payroll liabilities, and provision for pension obligations.',
      'Common share capital, legal revaluation reserves, and long-term bank debentures.',
      'Annual factory equipment depreciation expense and commercial marketing utility costs.',
      'Capitalized lease machinery obligations, deferred tax liabilities, and executive stock options.'
    ],
    explanation: 'Current assets are resources expected to be realized in cash, sold, or consumed within one year or the operating cycle. They include cash, receivables, marketable securities, and inventory.',
    distractor_reasons: [
      'Buildings and patents are non-current assets; mortgage loans are non-current liabilities.',
      'Trade payables, accrued payroll, and pension provisions are liabilities.',
      'Share capital and legal reserves are equity; debentures are liabilities.',
      'Depreciation and marketing costs are income statement expenses, not balance sheet assets.',
      'Lease obligations and deferred taxes are liabilities, not current assets.'
    ],
    section_anchor: 'balance-sheet-architecture-and-asset-classification'
  },
  {
    segment_id: 'fa-balance-income-statements',
    order_index: 9, difficulty: 'hard',
    question: 'In the accounting equation, why is Shareholders’ Equity defined conceptually as a "residual claim"?',
    correct: 'Creditors possess senior legal priority; equity represents the remaining economic value of enterprise assets only after all creditor obligations are satisfied.',
    distractors: [
      'Equity is the primary senior claim that must be paid in cash before trade suppliers or employees receive wages.',
      'Equity represents the cumulative amount of cash that commercial banks have loaned to the corporation.',
      'Equity is an arbitrary balancing number created by auditors that carries no legal or commercial significance.',
      'Equity equals total sales revenues accumulated across the entire historical operating life of the company.',
      'Equity only includes state government subsidies granted during national economic emergencies.'
    ],
    explanation: 'Equity = Assets - Liabilities. In liquidation or ongoing operations, creditors (lenders, suppliers, employees, tax authorities) hold senior legal claims. Owners receive only the residual value.',
    distractor_reasons: [
      'Inverts legal seniority: creditors hold senior claims, while equity is the most junior, residual claim.',
      'Bank loans represent debt liabilities, not equity ownership capital.',
      'Equity represents real legal ownership claims on net assets, not an arbitrary meaningless number.',
      'Equity reflects net book value, not cumulative gross sales turnover.',
      'Equity comprises owner contributions and retained earnings, not government subsidies.'
    ],
    section_anchor: 'balance-sheet-architecture-and-asset-classification'
  },
  {
    segment_id: 'fa-balance-income-statements',
    order_index: 10, difficulty: 'hard',
    question: 'How does recording €20,000 in equipment depreciation simultaneously impact the income statement and balance sheet?',
    correct: 'It records a €20,000 operating expense (reducing EBIT and Net Income) and increases Accumulated Depreciation (reducing Net Fixed Assets).',
    distractors: [
      'It reduces balance sheet Cash by €20,000 and increases Equipment Maintenance Expense by €20,000.',
      'It increases Net Income by €20,000 through an extraordinary operating gain and reduces Long-Term Debt.',
      'It increases Equipment Asset cost by €20,000 and credits Accounts Payable for vendor machinery services.',
      'It reduces Retained Earnings directly by €20,000 without appearing on the multi-step income statement.',
      'It increases Accounts Receivable by €20,000 and credits Tangible Asset Revaluation Reserves.'
    ],
    explanation: 'Depreciation increases operating expenses on the income statement (reducing EBIT, EBT, and Net Income) and increases the contra-asset Accumulated Depreciation on the balance sheet, reducing Net Fixed Assets.',
    distractor_reasons: [
      'Depreciation is a non-cash entry that does not reduce liquid cash reserves.',
      'Depreciation is an expense that lowers net income, not an extraordinary gain.',
      'Depreciation reduces net carrying value; it does not increase historical equipment cost.',
      'Depreciation passes through the income statement as an operating expense; it does not bypass the income statement.',
      'Depreciation has no relation to customer receivables or upward revaluation reserves.'
    ],
    section_anchor: 'the-dynamic-link-from-net-income-to-retained-earnings'
  },
  {
    segment_id: 'fa-balance-income-statements',
    order_index: 11, difficulty: 'hard',
    question: 'Why should a financial analyst never treat rapid sales growth as standalone proof of enterprise financial health?',
    correct: 'Sales growth can be accompanied by collapsing gross margins, uncollected delinquent receivables, excessive debt leverage, or severe operational cash burn.',
    distractors: [
      'Sales growth is an illegal accounting metric under European Union financial reporting directives.',
      'Companies that increase sales revenues are automatically prohibited from issuing common equity shares.',
      'Sales growth automatically triggers immediate mandatory liquidation by corporate judicial regulators.',
      'Sales growth has no mathematical connection to the calculation of Gross Profit or Net Income.',
      'Sales growth always reduces total balance sheet assets by accelerating equipment obsolescence.'
    ],
    explanation: 'Top-line sales growth can conceal deep operational distress if products are sold below cost (margin collapse), customers fail to pay (bad debts), or growth is funded by unsustainable debt.',
    distractor_reasons: [
      'Sales growth is a universal standard performance metric, fully sanctioned under EU directives.',
      'Revenue growth encourages equity issuance and investment; it is never prohibited.',
      'Revenue growth does not trigger judicial liquidation.',
      'Sales is the direct starting numerator for Gross Profit and Net Income margins.',
      'Sales growth typically expands assets (receivables, inventory) rather than shrinking them.'
    ],
    section_anchor: 'accounting-limitations-and-statement-quality'
  },
  {
    segment_id: 'fa-balance-income-statements',
    order_index: 12, difficulty: 'hard',
    question: 'In the DataVision case close, Year 2 sales were adjusted from provisional €500,000 to final €485,000. Why was €15,000 deducted from sales?',
    correct: 'The €15,000 represented billing for software project deliverables not completed or delivered until Year 3, requiring reclassification to Deferred Revenue.',
    distractors: [
      'The €15,000 was stolen by company employees and written off as an extraordinary criminal loss.',
      'The client went bankrupt in Year 2, forcing an immediate reduction in historical share capital.',
      'The company converted its accounting system from accrual basis to a pure cash-accounting basis.',
      'The €15,000 was transferred directly to the tax authority as a pre-tax environmental penalty.',
      'The auditors discovered that the client had returned physical hardware that was destroyed in transit.'
    ],
    explanation: 'Under accrual accounting, revenue cannot be recognized until performance obligations are satisfied. Because €15,000 of deliverables belonged to Year 3, it was deferred as a liability.',
    distractor_reasons: [
      'Fictional scenario; the adjustment was a routine revenue deferral for uncompleted deliverables.',
      'Customer insolvency triggers a bad-debt provision, not a revenue deferral.',
      'DataVision operates strictly on an accrual basis; deferring unearned revenue exemplifies accrual accounting.',
      'Environmental penalties are operating expenses, not top-line revenue reductions.',
      'The contract involved software service deliverables, not destroyed physical hardware.'
    ],
    section_anchor: 'datavision-worked-year-end-close-case'
  },

  // ==========================================================================
  // SEGMENT 4: fa-cash-flow-integration
  // ==========================================================================
  {
    segment_id: 'fa-cash-flow-integration',
    order_index: 1, difficulty: 'easy',
    question: 'What is the primary objective of the corporate Statement of Cash Flows (demonstração dos fluxos de caixa)?',
    correct: 'To explain the net change in liquid cash and cash equivalents across an operating period by reporting cash generated and used in operating, investing, and financing activities.',
    distractors: [
      'To record the fair market liquidation value of all corporate real estate and intellectual property assets.',
      'To calculate the taxable personal income of individual equity shareholders and executive directors.',
      'To replace the balance sheet and income statement as the sole legally required statutory financial report.',
      'To track the physical delivery routes and warehouse transport schedules of commercial delivery trucks.',
      'To determine the statutory replacement cost of manufacturing machinery based on foreign exchange rates.'
    ],
    explanation: 'The Statement of Cash Flows explains how liquid cash moved across the period, bridging opening and closing cash balances across operating, investing, and financing activities.',
    distractor_reasons: [
      'Liquidation value of real estate is not reported on the statement of cash flows.',
      'Personal taxes of shareholders are separate personal legal matters outside corporate cash flow statements.',
      'The cash flow statement complements the balance sheet and income statement; it does not replace them.',
      'Logistics delivery tracking is an operational supply chain activity, not a financial statement.',
      'Machinery replacement costs are capital budgeting engineering estimates, not cash flow statements.'
    ],
    section_anchor: 'profit-is-not-cash-the-liquidity-mandate'
  },
  {
    segment_id: 'fa-cash-flow-integration',
    order_index: 2, difficulty: 'easy',
    question: 'Under international accounting standards, where is the cash purchase of new manufacturing equipment classified on the cash flow statement?',
    correct: 'Cash Flow from Investing Activities (CFI) as a cash outflow.',
    distractors: [
      'Cash Flow from Operating Activities (CFO) as a routine operational supplier expense.',
      'Cash Flow from Financing Activities (CFF) as a repayment of creditor capital.',
      'Directly in Shareholders’ Equity as an extraordinary dividend distribution.',
      'In the Net Working Capital memorandum ledger without affecting reported cash flow totals.',
      'On the income statement as a non-operating financing charge.'
    ],
    explanation: 'Purchasing long-term productive fixed assets (CapEx) represents an investment in productive capacity and is classified as an investing cash outflow in CFI.',
    distractor_reasons: [
      'Routine operational supplier payments are in CFO; long-term fixed assets belong in CFI.',
      'Financing activities involve debt and equity capital transactions, not equipment purchases.',
      'Equipment acquisitions are assets, not equity dividend payouts.',
      'Equipment purchases are major capital outflows that must appear prominently in CFI.',
      'Asset acquisitions are balance sheet and cash flow events, not immediate income statement charges.'
    ],
    section_anchor: 'the-three-pillars-operating-investing-and-financing-flows'
  },
  {
    segment_id: 'fa-cash-flow-integration',
    order_index: 3, difficulty: 'easy',
    question: 'Where is the cash receipt from issuing €1,000,000 in new commercial bank loans classified on the cash flow statement?',
    correct: 'Cash Flow from Financing Activities (CFF) as a cash inflow.',
    distractors: [
      'Cash Flow from Operating Activities (CFO) as commercial customer sales revenue.',
      'Cash Flow from Investing Activities (CFI) as an asset divestiture receipt.',
      'Directly in Retained Earnings as an extraordinary operating gain.',
      'On the income statement as pre-tax interest income.',
      'As a deduction from Trade Accounts Receivable in the operating reconciliation.'
    ],
    explanation: 'Borrowing money from commercial lenders or bondholders alters the capital structure of the enterprise and is classified as a financing cash inflow in CFF.',
    distractor_reasons: [
      'Borrowing principal is not operating revenue; it creates an external creditor liability.',
      'Investing activities involve buying or selling fixed productive assets, not borrowing bank debt.',
      'Loan principal proceeds do not represent earned profit and cannot be credited to retained earnings.',
      'Borrowing principal is not interest income; it is a balance sheet financing liability.',
      'Receivables track customer invoices, completely unrelated to bank loan proceeds.'
    ],
    section_anchor: 'the-three-pillars-operating-investing-and-financing-flows'
  },
  {
    segment_id: 'fa-cash-flow-integration',
    order_index: 4, difficulty: 'easy',
    question: 'Under the indirect method of calculating Operating Cash Flow (CFO), what is the cash impact of an increase in Trade Accounts Receivable?',
    correct: 'It is subtracted from Net Income (cash outflow/absorbed), because sales revenue was recognized on the income statement but cash has not yet been collected.',
    distractors: [
      'It is added to Net Income (cash inflow), because expanding receivables represents guaranteed future banking cash.',
      'It has zero impact on CFO because customer credit balances bypass the operating cash reconciliation.',
      'It is classified as an investing cash outflow under Cash Flow from Investing Activities (CFI).',
      'It is added directly to financing cash flows alongside new common equity issues.',
      'It is multiplied by the corporate tax rate and deducted from long-term bank loans.'
    ],
    explanation: 'When receivables increase, sales revenue exceeds actual cash collected. Therefore, the increase in receivables must be deducted from Net Income in the indirect CFO bridge.',
    distractor_reasons: [
      'Adding the increase would double-count uncollected sales, inflating apparent cash generation.',
      'Changes in operating working capital accounts are the core adjustments in the indirect CFO bridge.',
      'Customer receivables are operating working capital items, not long-term investing assets.',
      'Customer receivables are operating items, completely separate from financing capital in CFF.',
      'Nonsensical tax and loan deduction with no accounting basis.'
    ],
    section_anchor: 'indirect-operating-cash-flow-reconciliation-the-cfo-bridge'
  },
  {
    segment_id: 'fa-cash-flow-integration',
    order_index: 5, difficulty: 'intermediate',
    question: 'In an indirect operating cash flow reconciliation, what is the cash effect of an increase in Trade Accounts Payable?',
    correct: 'It is added to Net Income (cash inflow/preserved), because operating expenses were recognized on the income statement but cash payment to suppliers was deferred.',
    distractors: [
      'It is subtracted from Net Income, because higher supplier payables represent an immediate cash drain.',
      'It is classified as a financing cash outflow under Cash Flow from Financing Activities (CFF).',
      'It is transferred to Investing Cash Flows as a capital investment subsidy.',
      'It has zero impact on cash flows because supplier trade credit is an off-balance-sheet item.',
      'It is deducted from ending cash reserves on the balance sheet as an emergency reserve.'
    ],
    explanation: 'When trade payables increase, the firm received goods or services and recognized expenses, but delayed cash payment. This preserves liquid cash, requiring an addition to Net Income in CFO.',
    distractor_reasons: [
      'Subtracting the increase would treat delayed payments as cash outflows, which is the exact opposite of reality.',
      'Trade payables are operating working capital, not debt/equity financing in CFF.',
      'Trade supplier credit is not an investing capital expenditure in CFI.',
      'Trade payables are prominent current liabilities on the balance sheet, not off-balance-sheet items.',
      'Payables are liabilities, not direct deductions from balance sheet cash assets.'
    ],
    section_anchor: 'indirect-operating-cash-flow-reconciliation-the-cfo-bridge'
  },
  {
    segment_id: 'fa-cash-flow-integration',
    order_index: 6, difficulty: 'intermediate',
    question: 'Why is annual depreciation expense added back to Net Income in the indirect operating cash flow reconciliation?',
    correct: 'Depreciation was deducted as an expense in computing Net Income, but it required no liquid cash disbursement in the current period.',
    distractors: [
      'Depreciation represents actual liquid cash received from equipment salvage auctions during the year.',
      'Depreciation is added back to comply with municipal bank reserve requirements for industrial equipment.',
      'Depreciation is an investing cash inflow generated by operating manufacturing plants at full capacity.',
      'Depreciation generates an immediate electronic cash transfer from the corporate tax authority.',
      'Depreciation represents cash dividends disbursed to preferred equity shareholders.'
    ],
    explanation: 'Net Income was reduced by depreciation expense. Since depreciation involves no cash outflow, adding it back restores the true liquid cash generated by operations.',
    distractor_reasons: [
      'Depreciation is an internal cost allocation, not cash received from asset sales.',
      'Depreciation add-back is an accounting reconciliation, not a bank reserve requirement.',
      'Depreciation is a non-cash expense, not an investing cash inflow.',
      'Depreciation lowers taxable income, but the add-back itself is not a direct cash grant.',
      'Dividends to shareholders are financing cash outflows, not depreciation expenses.'
    ],
    section_anchor: 'indirect-operating-cash-flow-reconciliation-the-cfo-bridge'
  },
  {
    segment_id: 'fa-cash-flow-integration',
    order_index: 7, difficulty: 'intermediate',
    question: 'How is operational Free Cash Flow (FCF) defined in standard corporate financial analysis?',
    correct: 'Cash Flow from Operating Activities (CFO) minus Capital Expenditures (CapEx spent on fixed assets).',
    distractors: [
      'Net Income plus Common Dividends Declared minus Income Tax Expense.',
      'Gross Profit minus Total Commercial Debt Principal Repayments.',
      'Cash Flow from Financing Activities (CFF) plus Ending Cash Reserves.',
      'Total Assets divided by Cash Flow from Investing Activities (CFI).',
      'Operating Sales Revenue minus Total Shareholders’ Equity.'
    ],
    explanation: 'Free Cash Flow (FCF) = Operating Cash Flow (CFO) - CapEx. It represents the discretionary cash generated by operations after reinvesting in fixed assets to maintain and grow capacity.',
    distractor_reasons: [
      'Net income includes non-cash items and ignores working capital changes and CapEx.',
      'Gross profit ignores operating expenses, taxes, working capital, and CapEx.',
      'Financing cash flows and cash reserves do not measure operational free cash flow generation.',
      'Dividing assets by CFI produces a meaningless ratio, not free cash flow.',
      'Subtracting equity from revenue conflates income flows with balance sheet capital.'
    ],
    section_anchor: 'free-cash-flow-formulation-and-capital-reinvestment'
  },
  {
    segment_id: 'fa-cash-flow-integration',
    order_index: 8, difficulty: 'intermediate',
    question: 'Why are financing cash flows (e.g. loan borrowings, interest, and dividends) strictly excluded from unlevered free cash flow used in DCF valuation models?',
    correct: 'Unlevered free cash flow measures operating cash available to all capital providers, before financing effects that are already incorporated into the discount rate (WACC).',
    distractors: [
      'Financing cash flows are considered illegal accounting entries in corporate valuation models.',
      'Commercial lenders prohibit corporations from disclosing debt borrowing transactions on cash statements.',
      'Financing flows are only recognized when an enterprise is undergoing formal liquidation bankruptcy.',
      'Unlevered models assume that the company operates entirely without assets, suppliers, or employees.',
      'Financing cash flows are automatically converted into customer accounts receivable at year-end.'
    ],
    explanation: 'Unlevered DCF values the enterprise operating asset base. Financing structure (debt vs equity) is captured in WACC. Subtracting financing flows from cash flows would double-count financing costs.',
    distractor_reasons: [
      'Financing cash flows are fully legitimate statutory entries; their separation in DCF is a theoretical valuation principle.',
      'Lenders and regulations mandate full transparency of financing flows in audited financial statements.',
      'Financing flows occur continuously in healthy, growing enterprises.',
      'Unlevered models focus on operating assets, employees, and revenues, independent of debt/equity mix.',
      'Financing flows represent cash transactions with capital providers, not customer receivables.'
    ],
    section_anchor: 'free-cash-flow-formulation-and-capital-reinvestment'
  },
  {
    segment_id: 'fa-cash-flow-integration',
    order_index: 9, difficulty: 'hard',
    question: 'What mathematical identity reconciles the Statement of Cash Flows with the corporate Balance Sheet?',
    correct: 'Closing Cash equals Opening Cash plus the sum of Net Operating Cash Flow (CFO), Net Investing Cash Flow (CFI), and Net Financing Cash Flow (CFF).',
    distractors: [
      'Closing Cash equals Net Income multiplied by Total Retained Earnings divided by Gross Sales.',
      'Closing Cash equals Total Assets minus Total Liabilities plus Depreciation Expense.',
      'Closing Cash equals Operating Cash Flow (CFO) minus Total Shareholders’ Equity.',
      'Closing Cash equals Opening Cash plus Net Income minus Corporate Income Tax Payable.',
      'Closing Cash equals Net Investing Cash Flow (CFI) multiplied by the statutory corporate tax rate.'
    ],
    explanation: 'Ending Cash = Beginning Cash + CFO + CFI + CFF. The net movement across the three cash flow sections must account for the change in cash on the balance sheet.',
    distractor_reasons: [
      'Arbitrary multiplication formula with no mathematical or accounting validity.',
      'Conflates the balance sheet equity identity with liquid cash reconciliation.',
      'Subtracting equity from CFO confuses operating cash flow with ownership capital.',
      'Omits working capital changes, CapEx, debt, equity issuance, and dividends.',
      'Investing cash flows do not determine total cash reconciliation via tax rate multiplication.'
    ],
    section_anchor: 'three-statement-reconciliation-checks'
  },
  {
    segment_id: 'fa-cash-flow-integration',
    order_index: 10, difficulty: 'hard',
    question: 'If a preliminary financial model produces a balance sheet that fails to balance, what is the proper professional procedure for an analyst?',
    correct: 'Recheck source data, journal entries, and cash flow working capital bridges to locate and correct the structural inconsistency, never inserting an unexplained balancing plug.',
    distractors: [
      'Insert an arbitrary balancing plug into miscellaneous other expenses on the income statement to force balance.',
      'Manually overwrite Shareholders’ Equity with whatever figure forces assets to equal liabilities.',
      'Delete the Statement of Cash Flows entirely and publish only the provisional income statement.',
      'Reclassify all short-term trade accounts payable as permanent common share capital.',
      'Adjust prior-year audited net income retroactively without regulatory or auditor disclosure.'
    ],
    explanation: 'An unbalanced balance sheet indicates an omission, formula error, or sign error. Inserting a plug hides errors and creates misleading financial reports.',
    distractor_reasons: [
      'Plugging accounts violates accounting ethics and distorts subsequent financial analysis.',
      'Overwriting equity falsifies the connection between retained earnings, net income, and dividends.',
      'Deleting statutory statements violates securities laws and accounting standards.',
      'Payables are legal liabilities owed to vendors, not shareholder equity capital.',
      'Retroactive unapproved tampering with prior audited statements is fraudulent.'
    ],
    section_anchor: 'three-statement-reconciliation-checks'
  },
  {
    segment_id: 'fa-cash-flow-integration',
    order_index: 11, difficulty: 'hard',
    question: 'How do the three core financial statements (Balance Sheet, Income Statement, Cash Flow Statement) link dynamically together?',
    correct: 'Net Income from the income statement flows into equity retained earnings and starts CFO; cash flow changes explain balance sheet cash movement.',
    distractors: [
      'The balance sheet calculates period sales, the income statement tracks bank cash, and the cash flow statement determines tax rates.',
      'The three statements operate completely independently with zero shared variables, accounts, or mathematical linkages.',
      'The income statement only connects to the balance sheet if the company reports net losses for three consecutive years.',
      'The cash flow statement determines gross profit, which is then copied onto the balance sheet as an asset.',
      'The balance sheet is prepared first, and its cash balance is copied directly onto the income statement as revenue.'
    ],
    explanation: 'Net Income flows to Retained Earnings (Balance Sheet) and serves as the starting point for CFO (Cash Flow Statement). The net cash change across CFO, CFI, and CFF reconciles the Balance Sheet cash account.',
    distractor_reasons: [
      'Inverts statement roles: the income statement records sales, the cash flow statement tracks cash, and the tax code sets tax rates.',
      'The three statements are deeply interconnected mathematically and conceptually.',
      'The connection through retained earnings and operating cash flow exists in every operating period.',
      'Gross profit is calculated on the income statement, not the cash flow statement.',
      'Balance sheet cash is an asset, never recorded as income statement revenue.'
    ],
    section_anchor: 'three-statement-reconciliation-checks'
  },
  {
    segment_id: 'fa-cash-flow-integration',
    order_index: 12, difficulty: 'hard',
    question: 'In Company ABC’s 2025 case, the firm reported an operational cash drain (CFO = -€912,500) and CapEx of €445,000, yet ended with positive cash of €192,500. How did this happen?',
    correct: 'The company raised €1,550,000 in Financing Cash Flow (CFF) through €1,050,000 in new bank loans and €500,000 in new share capital issuance.',
    distractors: [
      'The company earned €2,000,000 in software consulting revenues that bypassed the operating income statement.',
      'The Portuguese government awarded Company ABC a non-refundable cash grant of €1,550,000 recorded in Retained Earnings.',
      'The company’s equipment appreciated in value by €1,550,000, which commercial banks converted directly into liquid cash.',
      'The firm collected €1,550,000 by liquidating its corporate pension fund and selling executive office furniture.',
      'The positive cash was created automatically by adding back €1,550,000 of accumulated depreciation expenses.'
    ],
    explanation: 'Company ABC survived a massive operational cash burn (-€912.5k) and capital investment (-€445k) because it secured €1.55m in external financing (+€1,050k debt + €500k equity), leaving net cash of +€192.5k.',
    distractor_reasons: [
      'Revenues cannot bypass the income statement; cash was raised through debt and equity financing.',
      'The funds were raised from private lenders and shareholders, not state subsidies.',
      'Asset appreciation is an unrealized accounting adjustment, not liquid cash.',
      'The case specifies bank loans and share issuance, not pension liquidation or furniture sales.',
      'Depreciation was €66,665, not €1.55m, and depreciation add-back does not manufacture external cash.'
    ],
    section_anchor: 'company-abc-2025-comprehensive-reconciliation-case'
  }
];
