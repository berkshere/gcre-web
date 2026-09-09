# GCRE Sell Side Asset Rotation Report

## 1. Executive Summary

**Report Date:** 2026-09-04
**Market Date:** 2026-09-04 00:00:00

**Macro Regime:** REFLATION

**Economic Cycle:** REFLATION

**Positioning:** POSITIVE

**Positioning Structure:** BALANCED

**Risk Pressure:** FALLING

**Crisis Level:** NORMAL

**Portfolio Stance:** RISK_ON

**Current NAV:** 1.038181

**Portfolio Value:** $103,818.10

**Cumulative Return:** 3.82%

**Latest Daily Return:** 0.67%

**Current Drawdown:** -2.32%

---

# 2. Macro Regime

**Macro Regime:** REFLATION

**Economic Cycle:** REFLATION

**Fed Regime:** PAUSE_HIGH_RATE

**Market Condition:** NEUTRAL

**Market Trend:** Bullish

| Indicator | Current |
| --- | ---: |
| VIX | 14.1000 |
| MOVE | 74.6812 |
| US 2Y | 4.1700 |
| US 10Y | 4.4800 |
| HY OAS | 2.7400 |

---

# 3. Market Risk

**Risk Pressure:** FALLING

**Crisis Level:** NORMAL

**Crisis Score:** 0.0000

**Exposure Cap:** 100.00%

| Indicator | Value |
| --- | ---: |
| VIX | 14.1000 |
| VIX Change | -1.1200 |
| MOVE | 74.6812 |
| MOVE Change | -5.0318 |
| HY OAS | 2.7400 |
| HY OAS Change | +0.0000 |

---

# 4. Portfolio Decision & Signal Intelligence

**Portfolio Decision Authority:** PortfolioEngine

**Final Target Source:** `D:\GCRE\GCRE_Timing_Engine\OUTPUT\final_portfolio.csv`

The final portfolio below represents the authoritative target allocation produced by PortfolioEngine.

| Asset | Final Target Weight |
| --- | ---: |
| CASH | 25.0000% |
| SHNY | 23.0000% |
| UCO | 20.0000% |
| QQQ | 11.5000% |
| BIL | 11.5000% |
| TQQQ | 5.0000% |
| TMF | 4.0000% |

**Total Target Weight:** 100.0000%

**Portfolio Target Validation:** PASSED

---

### Signal Intelligence

**Signal Source:** `OUTPUT/gcre_signal.json`

Signal Engine output is presented as market intelligence only. It does not override the PortfolioEngine final target allocation.

| Asset | Timing Score | Direction | Positioning Trend | Signal Change |
| --- | ---: | --- | --- | --- |
| UCO | 80 | BUY | STABLE | HOLD_TO_BUY |
| USO | 80 | BUY | STABLE | HOLD_TO_BUY |
| GLD | 75 | BUY | STRONG_WEAKENING | UNCHANGED |
| QQQ | 70 | HOLD | STRONG_WEAKENING | UNCHANGED |
| SPY | 70 | HOLD | STRONG_WEAKENING | UNCHANGED |
| BIL | 65 | HOLD | STRONG_STRENGTHENING | UNCHANGED |
| SHNY | 65 | HOLD | STRONG_WEAKENING | BUY_TO_HOLD |
| TQQQ | 65 | HOLD | STABLE | WATCH_TO_HOLD |
| UUP | 50 | WATCH | STABLE | HOLD_TO_WATCH |
| TLT | 45 | WATCH | STABLE | REDUCE_TO_WATCH |
| TMF | 45 | WATCH | STABLE | REDUCE_TO_WATCH |

> **Decision Hierarchy:** PortfolioEngine determines the final target allocation. Signal Engine provides directional and positioning intelligence only.

---

# 5. NAV Performance

| Metric | Value |
| --- | ---: |
| NAV | 1.038181 |
| Portfolio Value | $103,818.10 |
| Daily Return | 0.67% |
| Cumulative Return | 3.82% |
| Peak NAV | 1.062835 |
| Drawdown | -2.32% |

---

# 6. Risk Metrics

| Metric | Value |
| --- | ---: |
| Total Return | 3.82% |
| CAGR | 46.21% |
| Volatility | 16.06% |
| Max Drawdown | -3.81% |
| Sharpe Ratio | 3.1730 |
| Calmar Ratio | 12.1159 |

---

# 7. Signal Intelligence

**Positioning State:** POSITIVE

**Positioning Structure:** BALANCED

**Positioning Trend:** STABLE

**Rotation Change:** ROTATION_SHIFTING

**Positioning Spread:** 35.00

**Previous Spread:** 55.00

**Spread Change:** -20.00

**Current Leaders:** USO, UCO

**Previous Leaders:** GLD, SHNY

**Current Weak Assets:** TLT, TMF

**Previous Weak Assets:** TLT, TMF

## Asset Signal Changes

| Asset | Score | 1D Δ | 5D Δ | Trend | Signal Change |
| --- | ---: | ---: | ---: | --- | --- |
| BIL | 65 | +0 | +15 | STRONG_STRENGTHENING | UNCHANGED |
| GLD | 75 | +0 | -15 | STRONG_WEAKENING | UNCHANGED |
| QQQ | 70 | +5 | -10 | STRONG_WEAKENING | UNCHANGED |
| SHNY | 65 | -10 | -25 | STRONG_WEAKENING | BUY_TO_HOLD |
| SPY | 70 | +15 | -10 | STRONG_WEAKENING | UNCHANGED |
| TLT | 45 | +25 | +0 | STABLE | REDUCE_TO_WATCH |
| TMF | 45 | +25 | +0 | STABLE | REDUCE_TO_WATCH |
| TQQQ | 65 | +15 | +0 | STABLE | WATCH_TO_HOLD |
| UCO | 80 | +20 | +0 | STABLE | HOLD_TO_BUY |
| USO | 80 | +20 | +0 | STABLE | HOLD_TO_BUY |
| UUP | 50 | -15 | +0 | STABLE | HOLD_TO_WATCH |

---

# 8. Market Intelligence

## Executive Market View

GCRE identifies a REFLATION macro regime with the economic cycle in REFLATION. Positioning is positive and stable, while leadership is characterized by rotation_shifting. The current leaders are USO, UCO, while TLT, TMF occupy the weakest end of the cross-section. Risk pressure is falling, but the crisis level remains NORMAL. The resulting portfolio stance is risk_on.

## Why It Matters

The current leadership structure remains relatively balanced across the cross-section. The leadership transition is more important than the absolute ranking alone because it indicates that the market's preferred exposure is changing. Risk indicators do not currently provide a strong counter-signal to the positioning structure.

## Leadership Transition

| Leadership | Assets |
| --- | --- |
| Previous Leaders | GLD, SHNY |
| Current Leaders | USO, UCO |

**Entered Leadership:** USO, UCO

**Left Leadership:** GLD, SHNY

**Positioning Spread:** 35.00

**Previous Spread:** 55.00

**Spread Change:** -20.00

## Bull Case

The macro regime does not currently provide a strong structural headwind to the leading assets. USO, UCO remain at the center of the current leadership structure. Stable or improving risk indicators would provide confirmation for continued leadership.

## Bear Case

Recent short-term timing deterioration could become more significant if it spreads beyond isolated assets. A renewed increase in volatility would challenge the current positioning structure. If the current positioning spread of 35.0 points begins to narrow materially, the current leadership advantage would weaken.

## Analyst Conviction

| Dimension | Assessment |
| --- | --- |
| Macro | NEUTRAL |
| Positioning | POSITIVE |
| Leadership | USO, UCO |
| Rotation | ACTIVE |
| Risk | FALLING |
| Crisis | NORMAL |
| Overall Conviction | MODERATE |
| Conviction Score | 4 / 5 |

---

# 9. Allocation Rationale

**Allocation Authority:** PortfolioEngine

**Final Target Source:** `D:\GCRE\GCRE_Timing_Engine\OUTPUT\final_portfolio.csv`

**Execution Audit Source:** `D:\GCRE\GCRE_Timing_Engine\OUTPUT\portfolio_audit.json`

The allocation below reconstructs the actual PortfolioEngine decision chain:

**Base Portfolio → Timing Adjustment → Constraint → Final Portfolio**

Signal Engine data is presented separately as market intelligence and does not override the PortfolioEngine decision.

### PortfolioEngine Decision Chain

**Base Exposure:** 100.00%

**Timing Adjustment Executed:** YES

**Timing Exposure:** 104.00%

**Constraint Executed:** YES

**Final Exposure:** 100.00%

**Constraint Interpretation:** Constraint-stage differences represent portfolio-level constraint / normalization effects. They do not represent independent asset-level buy or sell decisions.

**Final Target Validation:** PASSED

### CASH

#### PortfolioEngine Decision

**Base Weight:** 25.00%

**Timing Score:** N/A

**Timing Multiplier:** 1.00x

**Timing Adjusted Weight:** 25.00%

**Constraint:** Applied; No change weight change

**Final Target Weight:** 25.00%

**Timing Reason:** CASH_NOT_APPLICABLE

#### Signal Intelligence

**Signal Timing Score:** N/A

**Signal Direction:** N/A

**Positioning Trend:** N/A

**Signal Reason:** N/A

### SHNY

#### PortfolioEngine Decision

**Base Weight:** 20.00%

**Timing Score:** 65

**Timing Multiplier:** 1.00x

**Timing Adjusted Weight:** 20.00%

**Constraint:** Applied; final weight differs by +3.0000% after portfolio-level constraint / normalization

**Final Target Weight:** 23.00%

**Timing Reason:** position_bias=HOLD; multiplier=1.00

#### Signal Intelligence

**Signal Timing Score:** 65

**Signal Direction:** HOLD

**Positioning Trend:** STRONG_WEAKENING

**Signal Reason:** MA20>MA60;MA20 rising;volatility normal;acceptable position;weak momentum

### UCO

#### PortfolioEngine Decision

**Base Weight:** 25.00%

**Timing Score:** 80

**Timing Multiplier:** 1.20x

**Timing Adjusted Weight:** 30.00%

**Constraint:** Applied; final weight differs by -10.0000% after portfolio-level constraint / normalization

**Final Target Weight:** 20.00%

**Timing Reason:** position_bias=ADD; multiplier=1.20

#### Signal Intelligence

**Signal Timing Score:** 80

**Signal Direction:** BUY

**Positioning Trend:** STABLE

**Signal Reason:** price>MA20;MA20>MA60;MA20 rising;volatility normal;healthy momentum

### QQQ

#### PortfolioEngine Decision

**Base Weight:** 10.00%

**Timing Score:** 70

**Timing Multiplier:** 1.00x

**Timing Adjusted Weight:** 10.00%

**Constraint:** Applied; final weight differs by +1.5000% after portfolio-level constraint / normalization

**Final Target Weight:** 11.50%

**Timing Reason:** position_bias=HOLD; multiplier=1.00

#### Signal Intelligence

**Signal Timing Score:** 70

**Signal Direction:** HOLD

**Positioning Trend:** STRONG_WEAKENING

**Signal Reason:** price>MA20;MA20>MA60;MA60>MA120;volatility normal;weak momentum

### BIL

#### PortfolioEngine Decision

**Base Weight:** 10.00%

**Timing Score:** 65

**Timing Multiplier:** 1.00x

**Timing Adjusted Weight:** 10.00%

**Constraint:** Applied; final weight differs by +1.5000% after portfolio-level constraint / normalization

**Final Target Weight:** 11.50%

**Timing Reason:** position_bias=HOLD; multiplier=1.00

#### Signal Intelligence

**Signal Timing Score:** 65

**Signal Direction:** HOLD

**Positioning Trend:** STRONG_STRENGTHENING

**Signal Reason:** MA20>MA60;MA60>MA120;MA20 rising;volatility normal;acceptable position

### TQQQ

#### PortfolioEngine Decision

**Base Weight:** 5.00%

**Timing Score:** 65

**Timing Multiplier:** 1.00x

**Timing Adjusted Weight:** 5.00%

**Constraint:** Applied; No change weight change

**Final Target Weight:** 5.00%

**Timing Reason:** position_bias=HOLD; multiplier=1.00

#### Signal Intelligence

**Signal Timing Score:** 65

**Signal Direction:** HOLD

**Positioning Trend:** STABLE

**Signal Reason:** price>MA20;MA60>MA120;volatility normal;acceptable position;weak momentum

### TMF

#### PortfolioEngine Decision

**Base Weight:** 5.00%

**Timing Score:** 45

**Timing Multiplier:** 0.80x

**Timing Adjusted Weight:** 4.00%

**Constraint:** Applied; No change weight change

**Final Target Weight:** 4.00%

**Timing Reason:** position_bias=WATCH; multiplier=0.80

#### Signal Intelligence

**Signal Timing Score:** 45

**Signal Direction:** WATCH

**Positioning Trend:** STABLE

**Signal Reason:** price>MA20;acceptable position;healthy momentum

---

# 10. Analyst Commentary

The portfolio is managed through a systematic interaction between macro regime, market timing, cross-sectional positioning, portfolio constraints and crisis controls.

The current macro regime is **REFLATION**, with positioning classified as **POSITIVE** and portfolio stance at **RISK_ON**.

Risk pressure is currently **FALLING**, while the Crisis Engine remains at **NORMAL**.

Portfolio exposure cap is **100.00%**.

Signal Engine positioning structure: **BALANCED**.

Current leadership: **USO, UCO**.

Weak assets: **TLT, TMF**.

Current portfolio stance: **RISK_ON**.

---

# 11. Historical NAV Ranking

Historical NAV observations: **19**

| Rank | Date | NAV | Cumulative Return | Drawdown |
| ---: | --- | ---: | ---: | ---: |
| 1 | 2026-08-25 | 1.062835 | 6.28% | 0.00% |
| 2 | 2026-08-24 | 1.061228 | 6.12% | 0.00% |
| 3 | 2026-08-21 | 1.058337 | 5.83% | 0.00% |
| 4 | 2026-08-27 | 1.056266 | 5.63% | -0.62% |
| 5 | 2026-08-19 | 1.043863 | 4.39% | 0.00% |
| 6 | 2026-08-31 | 1.038924 | 3.89% | -2.25% |
| 7 | 2026-09-04 | 1.038181 | 3.82% | -2.32% |
| 8 | 2026-08-28 | 1.033456 | 3.35% | -2.76% |
| 9 | 2026-09-02 | 1.031278 | 3.13% | -2.97% |
| 10 | 2026-08-11 | 1.025723 | 2.57% | 0.00% |
| 11 | 2026-08-10 | 1.025336 | 2.53% | 0.00% |
| 12 | 2026-08-14 | 1.025158 | 2.52% | -0.06% |
| 13 | 2026-09-01 | 1.022294 | 2.23% | -3.81% |
| 14 | 2026-08-17 | 1.019429 | 1.94% | -0.61% |
| 15 | 2026-08-18 | 1.019429 | 1.94% | -0.61% |
| 16 | 2026-08-07 | 1.016608 | 1.66% | 0.00% |
| 17 | 2026-08-05 | 1.015406 | 1.54% | 0.00% |
| 18 | 2026-08-04 | 1.009790 | 0.98% | 0.00% |
| 19 | 2026-07-30 | 1.000000 | 0.00% | 0.00% |

**Current NAV:** 1.038181

**Current NAV Rank:** 7 / 19

---

# 12. Crisis Override

| Item | Value |
| --- | --- |
| Crisis Level | **NORMAL** |
| Crisis Score | 0.00 |
| Exposure Cap | 100.00% |
| Override | **False** |
| Forced Cash | 0.00% |
| Target Source | NORMAL_TARGET |
| Reason | NORMAL: absolute risk indicators remain below stress thresholds |