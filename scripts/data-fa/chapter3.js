// Chapter 3: Business Valuation & Capital Budgeting
// Segments 9 to 12 with full narrative prose, display KaTeX formulas, CAPM, FCFF vs FCFE, and authentic distractors.

export const chapterThreeSegments = [
  // --------------------------------------------------------------------------
  // SEGMENT 9: Valuation Purpose & Relative Methods
  // --------------------------------------------------------------------------
  {
    id: 'fa-valuation-methods',
    discipline_id: 'financial-analysis',
    order_index: 9,
    title: 'Valuation Purpose & Relative Methods',
    subtitle: 'Business value, market capitalization, revenue and earnings multiples, and method limitations.',
    summary_markdown: `# Valuation Purpose & Relative Methods

## Foundations of Enterprise and Equity Valuation
Corporate valuation estimates the economic worth of an operating business enterprise or specific shareholder claims to guide capital allocation, mergers, acquisitions, debt issuance, and strategic divestitures. Valuation is grounded in economic expectation: the value of any financial asset is fundamentally equal to the present value of the future cash flows it is expected to generate, adjusted for timing and risk.

### Market Capitalization vs Enterprise Value
Financial analysis strictly distinguishes between the value belonging exclusively to equity shareholders and the aggregate operating value belonging to all capital providers:
- **Market Capitalization (Equity Value)**: For a publicly listed corporation, market cap measures the aggregate market price of common shares:
  $$\\text{Market Capitalization} = \\text{Market Price Per Share} \\times \\text{Common Shares Outstanding}$$
  Market cap reflects only equity and ignores outstanding debt obligations and liquid cash.
- **Enterprise Value (EV)**: Measures the total operating value of the core business accessible to all financing providers (equity owners, commercial lenders, bondholders, and preferred shareholders):
  $$\\text{Enterprise Value (EV)} = \\text{Equity Value} + \\text{Total Debt} + \\text{Preferred Stock} + \\text{Minority Interests} - \\text{Cash \\& Liquid Investments}$$
  Cash is deducted because an acquirer could immediately use the target company's liquid cash reserves to pay down a portion of the acquired debt.

### Relative Valuation Multiples: Times-Revenue and Price-to-Earnings
Relative valuation benchmarks an enterprise against comparable peers or historical market transactions using standardized multiples:
- **Times-Revenue (EV / Sales)**: Scales operating value by gross revenue:
  $$\\text{EV / Sales} = \\frac{\\text{Enterprise Value}}{\\text{Sales Revenue}}$$
  Useful for high-growth startups or cyclical firms reporting negative earnings, but dangerous because it ignores profit margins and cost structures.
- **Price-to-Earnings (P/E)**: Multiplies bottom-line earnings by a peer multiple:
  $$\\text{Implied Equity Value} = \\text{Net Income} \\times (\\text{Peer P/E Multiple})$$
  More informative regarding bottom-line profitability, but sensitive to differing capital structures and tax regimes.

### EBITDA Multiples and Operating Performance Comparables
To evaluate operating earning power independently of capital structure, depreciation conventions, and regional taxation, analysts frequently employ **EV / EBITDA**:

$$\\text{EV / EBITDA} = \\frac{\\text{Enterprise Value}}{\\text{EBITDA}} = \\frac{\\text{Enterprise Value}}{\\text{Operating Income (EBIT)} + \\text{Depreciation} + \\text{Amortization}}$$

Because EBITDA represents operating cash flow before interest payments, it is an enterprise-level metric and must strictly be paired with Enterprise Value (EV) in the numerator. Pairing Equity Value (Market Cap) with EBITDA is a severe mathematical mismatch.

### Limitations of Multiple-Based Valuation
While multiples offer fast, intuitive benchmarking, they possess fundamental limitations:
1. **The Comparability Illusion**: No two companies have identical growth rates, risk profiles, management quality, or accounting policies.
2. **Importing Market Mispricing**: If the broader stock market is caught in an asset bubble, peer multiples will mathematically overstate intrinsic business value.
3. **Ignoring Capital Intensity**: EBITDA multiples overlook the substantial capital expenditure (CapEx) required to replace depreciating fixed machinery.

### Relative Valuation Screening Case
Consider a listed enterprise with 10 million shares trading at €8.00 per share, carrying €25.0 million in total debt and €5.0 million in cash. It reports Sales of €40.0m and EBITDA of €6.0m:
- **Market Capitalization**: $10.0\\text{m shares} \\times \\text{€}8.00 = \\text{€}80.0\\text{m}$.
- **Enterprise Value Bridge**:
  $$\\text{EV} = \\text{Equity Value (€80m)} + \\text{Debt (€25m)} - \\text{Cash (€5m)} = \\text{€}100.0\\text{m}$$
- **Observed Company Multiples**:
  $$\\text{EV / Sales} = \\frac{100.0}{40.0} = 2.50\\times, \\quad \\text{EV / EBITDA} = \\frac{100.0}{6.0} = 16.67\\times$$
- **Peer Valuation Comparison**: If comparable peer firms trade at an average EV/Sales of 1.50× and EV/EBITDA of 7.00×:
  - Implied EV from Revenue = $€40.0\\text{m} \\times 1.50 = \\text{€}60.0\\text{m}$ (Implied Equity = €60m - €25m + €5m = €40.0m, or €4.00/share).
  - Implied EV from EBITDA = $€6.0\\text{m} \\times 7.00 = \\text{€}42.0\\text{m}$ (Implied Equity = €42m - €25m + €5m = €22.0m, or €2.20/share).
- **Conclusion**: The company trades at a massive premium to peers, demanding rigorous DCF analysis to justify whether superior growth prospects warrant such high multiples.`
  },

  // --------------------------------------------------------------------------
  // SEGMENT 10: Time Value, WACC & Discounting
  // --------------------------------------------------------------------------
  {
    id: 'fa-wacc-discounting',
    discipline_id: 'financial-analysis',
    order_index: 10,
    title: 'Time Value, WACC & Discounting',
    subtitle: 'Present value, cost of equity, after-tax cost of debt, weighted average cost and NPV/IRR.',
    summary_markdown: `# Time Value, WACC & Discounting

## The Time Value of Money and Discounting Mechanics
A monetary unit received today is worth more than the identical unit received in the future due to its earning capacity (investment opportunity), expected inflation, and uncertainty of collection. Discounting translates anticipated future cash flows into equivalent present value terms:

$$PV_t = \\frac{CF_t}{(1 + r)^t}$$

where $CF_t$ represents the nominal cash flow expected at period $t$, $r$ denotes the annual required discount rate reflecting risk and opportunity cost, and $t$ is the elapsed time period in years.

### Weighted Average Cost of Capital (WACC) Architecture
When valuing a corporate enterprise or evaluating capital investments funded by a combination of debt and equity, the appropriate discount rate is the **Weighted Average Cost of Capital (WACC)**:

$$\\text{WACC} = \\left( \\frac{E}{V} \\right) R_e + \\left( \\frac{D}{V} \\right) R_d (1 - T)$$

where:
- $E$: Market value of enterprise equity
- $D$: Market value of enterprise debt
- $V = E + D$: Total enterprise capital base ($E/V + D/V = 1.0$)
- $R_e$: Required rate of return on equity
- $R_d$: Pre-tax contractual cost of debt
- $T$: Corporate income tax rate

### Cost of Equity Determination and the CAPM Foundation
Equity holders bear residual operating risk and demand a higher expected return than secured lenders. The required cost of equity ($R_e$) is formalized by the **Capital Asset Pricing Model (CAPM)**:

$$R_e = R_f + \\beta (R_m - R_f)$$

where $R_f$ is the risk-free rate (typically long-term government bonds), $\\beta$ measures the systematic sensitivity of the firm's equity returns relative to market volatility, and $(R_m - R_f)$ is the equity market risk premium.

### After-Tax Cost of Debt and the Interest Tax Shield
Because contractual interest payments are tax-deductible under corporate tax codes, debt financing generates an **interest tax shield** that reduces the effective cost of borrowing to the enterprise:

$$\\text{Effective After-Tax Cost of Debt} = R_d \\times (1 - T)$$

For example, if a firm borrows at an interest rate of 7.2% and faces a 21% corporate tax rate, its net after-tax borrowing cost is only:
$$7.2\\% \\times (1 - 0.21) = 5.688\\%$$

### Project Appraisal Criteria: NPV vs IRR Dynamics
In capital budgeting and project appraisal, corporate management evaluates investments using two standard criteria:
- **Net Present Value (NPV)**: The aggregate present value of all projected net cash inflows minus the initial upfront investment outlay ($I_0$):
  $$\\text{NPV} = \\sum_{t=1}^n \\frac{CF_t}{(1 + r)^t} - I_0$$
  *Decision Rule*: Accept projects where $\\text{NPV} > 0$, as they increase shareholder wealth.
- **Internal Rate of Return (IRR)**: The specific discount rate that drives the net present value of the cash-flow sequence exactly to zero:
  $$\\sum_{t=1}^n \\frac{CF_t}{(1 + \\text{IRR})^t} - I_0 = 0$$
  *Decision Rule*: Accept projects where $\\text{IRR} > \\text{WACC}$. In mutually exclusive projects with differing cash-flow profiles or scales, NPV is theoretically superior to IRR because IRR assumes intermediate cash flows can be reinvested at the IRR itself.

### Startup Z WACC and Capital Budgeting Case
In the Startup Z lecture case study:
- Capital structure: 65% debt financing ($D/V = 0.65$), 35% equity financing ($E/V = 0.35$).
- Cost inputs: Pre-tax debt interest rate $R_d = 7.2\\%$, Cost of equity $R_e = 12.0\\%$, Tax rate $T = 21.0\\%$.
- After-tax cost of debt:
  $$R_d(1 - T) = 7.2\\% \\times (1 - 0.21) = 5.688\\%$$
- WACC Calculation:
  $$\\text{WACC} = 0.35 \\times 12.0\\% + 0.65 \\times 5.688\\% = 4.20\\% + 3.697\\% = 7.897\\% \\approx 8.0\\%$$
- Valuation Application: A cash inflow of €10,000 received at the end of Year 2 discounted at an 8.0% WACC has a present value of:
  $$PV = \\frac{\\text{€}10,000}{(1 + 0.08)^2} = \\frac{10,000}{1.1664} = \\text{€}8,573.39$$
- Investment Project Decision: With an initial investment cost of €11.0m and total discounted future operational cash flows of €13.307m, the project generates a positive NPV of $+€2.307m$, confirming that the investment creates economic value for Startup Z.`
  },

  // --------------------------------------------------------------------------
  // SEGMENT 11: DCF Forecasts & Terminal Value
  // --------------------------------------------------------------------------
  {
    id: 'fa-dcf-terminal-value',
    discipline_id: 'financial-analysis',
    order_index: 11,
    title: 'DCF Forecasts & Terminal Value',
    subtitle: 'Unlevered free cash flow, explicit projections, perpetuity growth and exit multiples.',
    summary_markdown: `# DCF Forecasts & Terminal Value

## The Two-Stage Discounted Cash Flow Framework
Discounted Cash Flow (DCF) is the primary intrinsic valuation methodology in corporate finance. Under the standard two-stage DCF model, enterprise valuation is partitioned into two chronological horizons:
1. **Stage 1 (Explicit Forecast Horizon)**: A multi-year projection (typically 5 to 7 years) of annual operational performance, during which the business undergoes expansion, margin evolution, and capital investments.
2. **Stage 2 (Terminal Value Horizon)**: Summarizes all expected cash flows beyond the explicit forecast period into a single terminal value, assuming the enterprise operates indefinitely as a mature going concern:

$$\\text{Enterprise Value} = \\sum_{t=1}^n \\frac{\\text{FCFF}_t}{(1 + \\text{WACC})^t} + \\frac{\\text{Terminal Value}_n}{(1 + \\text{WACC})^n}$$

### Unlevered Free Cash Flow (FCFF) vs Levered Cash Flow (FCFE)
Analysts must pair the correct cash flow definition with its corresponding required discount rate:
- **Free Cash Flow to the Firm (FCFF / Unlevered FCF)**: Operating cash flow generated before contractual debt service, available to all capital providers. Discounted at **WACC** to determine **Enterprise Value**:
  $$\\text{FCFF} = \\text{EBIT}(1 - T) + \\text{Depreciation} - \\text{CapEx} - \\Delta \\text{Non-Cash Net Working Capital}$$
- **Free Cash Flow to Equity (FCFE / Levered FCF)**: Cash flow remaining after debt interest payments, tax shields, and net debt repayments. Discounted at the **Cost of Equity ($R_e$)** to determine **Equity Value** directly:
  $$\\text{FCFE} = \\text{Net Income} + \\text{Depreciation} - \\text{CapEx} - \\Delta \\text{NWC} + (\\text{New Debt Issued} - \\text{Debt Repaid})$$

### The Explicit Forecast Horizon (Years 1 to 5)
During the explicit forecast horizon, projected Free Cash Flows must be derived from linked, balanced financial statements (Income Statement, Balance Sheet, Cash Flow Statement). Capital expenditures must distinguish between maintenance CapEx (required to preserve current assets) and growth CapEx (funding capacity expansion).

### Perpetuity Growth Terminal Value (The Gordon Model)
Under the **Perpetuity Growth Method**, mature free cash flows are assumed to grow indefinitely at a constant sustainable rate $g$:

$$\\text{Terminal Value}_n = \\frac{\\text{FCFF}_{n+1}}{\\text{WACC} - g} = \\frac{\\text{FCFF}_n \\times (1 + g)}{\\text{WACC} - g}$$

*Critical Mathematical Constraint*: The long-term perpetual growth rate $g$ must strictly be lower than WACC ($g < \\text{WACC}$) and should never exceed the long-term sustainable GDP growth rate of the economy in which the firm operates.

### Exit Multiple Terminal Value and Market Consistency
Under the alternative **Exit Multiple Method**, the enterprise is assumed to be sold at the end of Year $n$ at a market multiple typical of mature peer firms:

$$\\text{Terminal Value}_n = \\text{Terminal Year EBITDA}_n \\times (\\text{EV / EBITDA Peer Multiple})$$

While intuitive for private equity transactions, exit multiples import current market pricing distortions into an intrinsic DCF valuation. Terminal value routinely accounts for **65% to 85% of total enterprise value**, making terminal assumptions the most sensitive driver of corporate valuation models.

### Worked 5-Year DCF with Perpetual Growth Case
A university lecture case models an explicit 5-year forecast horizon with WACC = 10.0% and perpetual terminal growth $g = 3.0\\%$:
- **Explicit Forecasted FCF**:
  - Year 1: €10.0m $\\to PV_1 = 10.0 / 1.10^1 = \\text{€}9.091\\text{m}$
  - Year 2: €12.0m $\\to PV_2 = 12.0 / 1.10^2 = \\text{€}9.917\\text{m}$
  - Year 3: €15.0m $\\to PV_3 = 15.0 / 1.10^3 = \\text{€}11.270\\text{m}$
  - Year 4: €18.0m $\\to PV_4 = 18.0 / 1.10^4 = \\text{€}12.294\\text{m}$
  - Year 5: €20.0m $\\to PV_5 = 20.0 / 1.10^5 = \\text{€}12.418\\text{m}$
- **Sum of Present Value of Explicit FCF (Years 1 to 5)**:
  $$\\sum_{t=1}^5 PV_t = 9.091 + 9.917 + 11.270 + 12.294 + 12.418 = \\text{€}54.990\\text{m} \\approx \\text{€}55.0\\text{m}$$
- **Terminal Value at Year 5**:
  - Projected Year 6 FCF = $\\text{FCF}_5 \\times (1 + g) = 20.0 \\times (1 + 0.03) = \\text{€}20.60\\text{m}$
  - Terminal Value at $t = 5$:
    $$\\text{TV}_5 = \\frac{20.60}{0.10 - 0.03} = \\frac{20.60}{0.07} = \\text{€}294.286\\text{m}$$
- **Discounting Terminal Value to Present Value**:
  $$PV(\\text{TV}) = \\frac{\\text{TV}_5}{(1 + 0.10)^5} = \\frac{294.286}{1.61051} = \\text{€}182.729\\text{m}$$
- **Total Implied Enterprise Value**:
  $$\\text{Enterprise Value} = \\text{€}54.990\\text{m} + \\text{€}182.729\\text{m} = \\text{€}237.719\\text{m} \\approx \\text{€}237.7\\text{m}$$
  Terminal value represents $\\frac{182.73}{237.72} = 76.9\\%$ of total enterprise value, demonstrating why sensitivity matrices testing WACC and $g$ are mandatory.`
  },

  // --------------------------------------------------------------------------
  // SEGMENT 12: Enterprise-to-Equity Value & Valuation Challenge
  // --------------------------------------------------------------------------
  {
    id: 'fa-equity-value-challenge',
    discipline_id: 'financial-analysis',
    order_index: 12,
    title: 'Enterprise-to-Equity Value & Valuation Challenge',
    subtitle: 'Value bridge, non-operating assets, debt, shares outstanding and communicating the result.',
    summary_markdown: `# Enterprise-to-Equity Value & Valuation Challenge

## Bridging Operating Value to Shareholder Wealth
Discounting unlevered free cash flows at WACC produces **Enterprise Value (EV)**, which measures the economic value of core operational assets available to all capital providers. However, equity investors own only the residual claim. To derive **Equity Value** and determine the fair value per share, the analyst must build a rigorous value bridge that accounts for balance sheet non-operating assets and contractual non-equity claims.

### The 6-Step Enterprise-to-Equity Value Bridge
The transition from Enterprise Value to Equity Value follows a formal 6-step protocol:

$$\\text{Equity Value} = \\text{Enterprise Value} + \\text{Non-Operating Assets} - \\text{Total Debt} - \\text{Other Non-Equity Claims}$$

$$\\text{Implied Fair Value Per Share} = \\frac{\\text{Total Common Equity Value}}{\\text{Diluted Shares Outstanding}}$$

The 6 sequential analytical stages:
1. **Forecast Unlevered Free Cash Flows (FCFF)** across the explicit multi-year forecast horizon.
2. **Calculate Terminal Value (TV)** using perpetuity growth ($g$) or exit multiples.
3. **Discount Explicit Cash Flows and Terminal Value** at WACC to calculate **Enterprise Value**.
4. **Add Non-Operating Assets**: Add excess cash, marketable securities, and equity investments in non-consolidated affiliates.
5. **Deduct Contractual Debt and Non-Equity Claims**: Subtract short-term debt, long-term bank loans, capitalized finance leases, preferred stock, and non-controlling (minority) interests.
6. **Divide by Diluted Share Count**: Divide implied equity value by the number of diluted common shares outstanding.

### Treatment of Non-Operating Assets and Excess Cash
Non-operating assets are resources owned by the firm that did not contribute to projected operating cash flows. The primary example is **excess cash** (cash reserves held above daily operational working capital needs). Because interest income on excess cash is excluded from EBIT, the cash asset must be added to enterprise value to reflect total shareholder wealth. Double-counting must be avoided: operating working capital cash must never be added twice.

### Identification and Deduction of Debt and Hybrid Claims
Contractual claims that rank senior to common equity must be completely identified and deducted:
- **Commercial Bank Loans and Corporate Bonds**: Market value of interest-bearing debt.
- **Capitalized Lease Liabilities**: Present value of long-term lease obligations.
- **Preferred Stock**: Hybrid equity claims with fixed dividend priority.
- **Non-Controlling Interests**: The portion of consolidated subsidiary equity belonging to third-party minority shareholders.
*Operating Liabilities Warning*: Trade accounts payable and accrued payroll are operating working capital items already reflected in CFO and FCFF; they must **never** be subtracted as debt in the valuation bridge.

### Dilution, Per-Share Value, and Scenario Sensitivity
When dividing total equity value by shares outstanding, analysts must use **diluted shares outstanding**, accounting for stock options, convertible bonds, and unvested restricted stock units (RSUs). Omitting potential dilution understates the true share count and artificially inflates per-share fair value.

Because corporate valuation is an estimate subject to forecast uncertainty, responsible communication requires presenting a **valuation sensitivity matrix** varying key assumptions (WACC ± 1.0%, Perpetual growth $g$ ± 0.5%, Revenue growth rates, Operating margins).

### Company X Comprehensive 2024 Valuation Challenge Case
Company X's comprehensive valuation challenge synthesizes 5-year statement projections:
- Financial profile: Projected revenue growth 4.0%, Tax rate 19.0%, WACC established at 10.0% (38% equity weight at 18% cost of equity, 62% debt weight at 5% interest rate).
- **Discounted DCF Enterprise Value**: Established at €158.719m.
- **Balance Sheet Adjustments**:
  - Add Non-Operating Cash & Equivalents: +€45.473m
  - Subtract Bank Loans Payable: -€80.000m
  - Subtract Capitalized Finance Leases: -€2.000m
  - Subtract Preferred Stock Claims: -€3.000m
- **Net Equity Value Calculation**:
  $$\\text{Equity Value} = 158.719 + 45.473 - 80.000 - 2.000 - 3.000 = \\text{€}119.192\\text{m}$$
- **Per-Share Valuation**: With 10,000,000 common shares outstanding:
  $$\\text{Value Per Share} = \\frac{\\text{€}119.192\\text{m}}{10.0\\text{m shares}} = \\text{€}11.9192 \\approx \\text{€}11.92$$
- **Communication & Sensitivity**: If WACC shifts by +1.0% (to 11.0%), implied enterprise value contracts to €142.3m, reducing equity value per share to €10.28 (-13.8%). Disclosing this sensitivity provides investors with an objective, risk-adjusted margin of safety.`
  }
];
