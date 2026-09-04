# GCRE Sell Side Asset Rotation Report

## 1. Executive Summary

**Report Date:** 2026-09-02
**Market Date:** 2026-09-02 00:00:00

**Macro Regime:** GROWTH

**Economic Cycle:** EXPANSION

**Positioning:** POSITIVE

**Positioning Structure:** ROTATION

**Risk Pressure:** RISING

**Crisis Level:** NORMAL

**Portfolio Stance:** CAUTIOUS

**Current NAV:** 1.031278

**Portfolio Value:** $103,127.84

**Cumulative Return:** 3.13%

**Latest Daily Return:** 0.88%

**Current Drawdown:** -2.97%

---

# 2. Macro Regime

**Macro Regime:** GROWTH

**Economic Cycle:** EXPANSION

**Fed Regime:** NEUTRAL

**Market Condition:** NEUTRAL

**Market Trend:** Neutral

| Indicator | Current |
| --- | ---: |
| VIX | 15.2200 |
| MOVE | 79.7130 |
| US 2Y | 4.1700 |
| US 10Y | 4.4800 |
| HY OAS | 2.7400 |

---

# 3. Market Risk

**Risk Pressure:** RISING

**Crisis Level:** NORMAL

**Crisis Score:** 0.0000

**Exposure Cap:** 100.00%

| Indicator | Value |
| --- | ---: |
| VIX | 15.2200 |
| VIX Change | -1.1200 |
| MOVE | 79.7130 |
| MOVE Change | +1.8380 |
| HY OAS | 2.7400 |
| HY OAS Change | +0.0000 |

---

# 4. Portfolio Decision & Signal Intelligence

**Portfolio Decision Authority:** PortfolioEngine

**Final Target Source:** `D:\GCRE\GCRE_Timing_Engine\OUTPUT\final_portfolio.csv`

The final portfolio below represents the authoritative target allocation produced by PortfolioEngine.

| Asset | Final Target Weight |
| --- | ---: |
| CASH | 30.0000% |
| SHNY | 18.5625% |
| BIL | 15.4688% |
| QQQ | 15.4688% |
| UCO | 10.0000% |
| TQQQ | 8.0000% |
| TMF | 2.5000% |

**Total Target Weight:** 100.0000%

**Portfolio Target Validation:** PASSED

---

### Signal Intelligence

**Signal Source:** `OUTPUT/gcre_signal.json`

Signal Engine output is presented as market intelligence only. It does not override the PortfolioEngine final target allocation.

| Asset | Timing Score | Direction | Positioning Trend | Signal Change |
| --- | ---: | --- | --- | --- |
| UCO | 80 | BUY | STRONG_STRENGTHENING | UNCHANGED |
| USO | 80 | BUY | STRONG_STRENGTHENING | UNCHANGED |
| BIL | 65 | HOLD | STRENGTHENING | UNCHANGED |
| GLD | 65 | HOLD | STRENGTHENING | BUY_TO_HOLD |
| QQQ | 65 | HOLD | STRONG_STRENGTHENING | UNCHANGED |
| SHNY | 65 | HOLD | STRENGTHENING | BUY_TO_HOLD |
| UUP | 65 | HOLD | STRONG_STRENGTHENING | UNCHANGED |
| SPY | 55 | HOLD | STRONG_WEAKENING | UNCHANGED |
| TQQQ | 50 | WATCH | STABLE | BUY_TO_WATCH |
| TLT | 30 | REDUCE | STRONG_STRENGTHENING | HOLD_TO_REDUCE |
| TMF | 30 | REDUCE | STRONG_STRENGTHENING | WATCH_TO_REDUCE |

> **Decision Hierarchy:** PortfolioEngine determines the final target allocation. Signal Engine provides directional and positioning intelligence only.

---

# 5. NAV Performance

| Metric | Value |
| --- | ---: |
| NAV | 1.031278 |
| Portfolio Value | $103,127.84 |
| Daily Return | 0.88% |
| Cumulative Return | 3.13% |
| Peak NAV | 1.062835 |
| Drawdown | -2.97% |

---

# 6. Risk Metrics

| Metric | Value |
| --- | ---: |
| Total Return | 3.13% |
| CAGR | 39.19% |
| Volatility | 16.43% |
| Max Drawdown | -3.81% |
| Sharpe Ratio | 2.7050 |
| Calmar Ratio | 10.2732 |

---

# 7. Signal Intelligence

**Positioning State:** POSITIVE

**Positioning Structure:** ROTATION

**Positioning Trend:** STRENGTHENING

**Rotation Change:** ROTATION_SHIFTING

**Positioning Spread:** 50.00

**Previous Spread:** 37.50

**Spread Change:** +12.50

**Current Leaders:** USO, UCO

**Previous Leaders:** GLD, UCO

**Current Weak Assets:** TLT, TMF

**Previous Weak Assets:** TMF, TLT

## Asset Signal Changes

| Asset | Score | 1D Δ | 5D Δ | Trend | Signal Change |
| --- | ---: | ---: | ---: | --- | --- |
| BIL | 65 | +5 | +5 | STRENGTHENING | UNCHANGED |
| GLD | 65 | -25 | +5 | STRENGTHENING | BUY_TO_HOLD |
| QQQ | 65 | +0 | +15 | STRONG_STRENGTHENING | UNCHANGED |
| SHNY | 65 | -10 | +5 | STRENGTHENING | BUY_TO_HOLD |
| SPY | 55 | -10 | -10 | STRONG_WEAKENING | UNCHANGED |
| TLT | 30 | -25 | +15 | STRONG_STRENGTHENING | HOLD_TO_REDUCE |
| TMF | 30 | -10 | +15 | STRONG_STRENGTHENING | WATCH_TO_REDUCE |
| TQQQ | 50 | -25 | +0 | STABLE | BUY_TO_WATCH |
| UCO | 80 | +0 | +20 | STRONG_STRENGTHENING | UNCHANGED |
| USO | 80 | +0 | +20 | STRONG_STRENGTHENING | UNCHANGED |
| UUP | 65 | +0 | +25 | STRONG_STRENGTHENING | UNCHANGED |

---

# 8. Market Intelligence

## Executive Market View

GCRE identifies a GROWTH macro regime with the economic cycle in EXPANSION. Positioning is positive and strengthening, while leadership is characterized by rotation_shifting. The current leaders are USO, UCO, while TLT, TMF occupy the weakest end of the cross-section. Risk pressure is rising, but the crisis level remains NORMAL. The resulting portfolio stance is cautious.

## Why It Matters

The widening leadership spread indicates increasing cross-sectional dispersion, with performance and positioning becoming increasingly concentrated among a smaller group of stronger assets. The leadership transition is more important than the absolute ranking alone because it indicates that the market's preferred exposure is changing. At the same time, rising risk pressure argues against interpreting the leadership improvement as a broad-based risk-on signal.

## Leadership Transition

| Leadership | Assets |
| --- | --- |
| Previous Leaders | GLD, UCO |
| Current Leaders | USO, UCO |

**Entered Leadership:** USO

**Retained Leadership:** UCO

**Left Leadership:** GLD

**Positioning Spread:** 50.00

**Previous Spread:** 37.50

**Spread Change:** +12.50

## Bull Case

The GROWTH / EXPANSION regime remains supportive of cyclical and risk-sensitive assets. USO, UCO remain at the center of the current leadership structure. If VIX and MOVE stabilize or reverse lower, the current leadership could develop into a broader risk-allocation opportunity.

## Bear Case

Recent sharp deterioration in GLD, TLT, TQQQ could become more significant if it spreads beyond isolated assets. If VIX and MOVE continue to rise, cross-sectional weakness could broaden. If the current positioning spread of 50.0 points begins to narrow materially, the current leadership advantage would weaken.

## Analyst Conviction

| Dimension | Assessment |
| --- | --- |
| Macro | CONSTRUCTIVE |
| Positioning | POSITIVE |
| Leadership | USO, UCO |
| Rotation | ACTIVE |
| Risk | RISING |
| Crisis | NORMAL |
| Overall Conviction | HIGH |
| Conviction Score | 5 / 5 |

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

**Timing Exposure:** 98.50%

**Constraint Executed:** YES

**Final Exposure:** 100.00%

**Constraint Interpretation:** Constraint-stage differences represent portfolio-level constraint / normalization effects. They do not represent independent asset-level buy or sell decisions.

**Final Target Validation:** PASSED

### CASH

#### PortfolioEngine Decision

**Base Weight:** 30.00%

**Timing Score:** N/A

**Timing Multiplier:** 1.00x

**Timing Adjusted Weight:** 30.00%

**Constraint:** Applied; no asset-level weight change

**Final Target Weight:** 30.00%

**Timing Reason:** CASH_NOT_APPLICABLE

#### Signal Intelligence

**Signal Timing Score:** N/A

**Signal Direction:** N/A

**Positioning Trend:** N/A

**Signal Reason:** N/A

### SHNY

#### PortfolioEngine Decision

**Base Weight:** 15.00%

**Timing Score:** 75

**Timing Multiplier:** 1.20x

**Timing Adjusted Weight:** 18.00%

**Constraint:** Applied; final weight differs by +0.5625% after portfolio-level constraint / normalization

**Final Target Weight:** 18.56%

**Timing Reason:** position_bias=ADD; multiplier=1.20

#### Signal Intelligence

**Signal Timing Score:** 65

**Signal Direction:** HOLD

**Positioning Trend:** STRENGTHENING

**Signal Reason:** MA20>MA60;MA20 rising;volatility normal;acceptable position;weak momentum

### BIL

#### PortfolioEngine Decision

**Base Weight:** 15.00%

**Timing Score:** 65

**Timing Multiplier:** 1.00x

**Timing Adjusted Weight:** 15.00%

**Constraint:** Applied; final weight differs by +0.4688% after portfolio-level constraint / normalization

**Final Target Weight:** 15.47%

**Timing Reason:** position_bias=HOLD; multiplier=1.00

#### Signal Intelligence

**Signal Timing Score:** 65

**Signal Direction:** HOLD

**Positioning Trend:** STRENGTHENING

**Signal Reason:** MA20>MA60;MA60>MA120;MA20 rising;volatility normal;acceptable position

### QQQ

#### PortfolioEngine Decision

**Base Weight:** 15.00%

**Timing Score:** 65

**Timing Multiplier:** 1.00x

**Timing Adjusted Weight:** 15.00%

**Constraint:** Applied; final weight differs by +0.4688% after portfolio-level constraint / normalization

**Final Target Weight:** 15.47%

**Timing Reason:** position_bias=HOLD; multiplier=1.00

#### Signal Intelligence

**Signal Timing Score:** 65

**Signal Direction:** HOLD

**Positioning Trend:** STRONG_STRENGTHENING

**Signal Reason:** MA20>MA60;MA60>MA120;MA20 rising;volatility normal;acceptable position

### UCO

#### PortfolioEngine Decision

**Base Weight:** 10.00%

**Timing Score:** 60

**Timing Multiplier:** 1.00x

**Timing Adjusted Weight:** 10.00%

**Constraint:** Applied; no asset-level weight change

**Final Target Weight:** 10.00%

**Timing Reason:** position_bias=HOLD; multiplier=1.00

#### Signal Intelligence

**Signal Timing Score:** 80

**Signal Direction:** BUY

**Positioning Trend:** STRONG_STRENGTHENING

**Signal Reason:** price>MA20;MA20>MA60;MA20 rising;volatility normal;healthy momentum

### TQQQ

#### PortfolioEngine Decision

**Base Weight:** 10.00%

**Timing Score:** 50

**Timing Multiplier:** 0.80x

**Timing Adjusted Weight:** 8.00%

**Constraint:** Applied; no asset-level weight change

**Final Target Weight:** 8.00%

**Timing Reason:** position_bias=WATCH; multiplier=0.80

#### Signal Intelligence

**Signal Timing Score:** 50

**Signal Direction:** WATCH

**Positioning Trend:** STABLE

**Signal Reason:** MA60>MA120;MA20 rising;volatility normal;acceptable position

### TMF

#### PortfolioEngine Decision

**Base Weight:** 5.00%

**Timing Score:** 20

**Timing Multiplier:** 0.50x

**Timing Adjusted Weight:** 2.50%

**Constraint:** Applied; no asset-level weight change

**Final Target Weight:** 2.50%

**Timing Reason:** position_bias=REDUCE; multiplier=0.50

#### Signal Intelligence

**Signal Timing Score:** 30

**Signal Direction:** REDUCE

**Positioning Trend:** STRONG_STRENGTHENING

**Signal Reason:** MA20 rising;acceptable position;weak momentum

---

# 10. Analyst Commentary

The portfolio is managed through a systematic interaction between macro regime, market timing, cross-sectional positioning, portfolio constraints and crisis controls.

The current macro regime is **GROWTH**, with positioning classified as **POSITIVE** and portfolio stance at **CAUTIOUS**.

Risk pressure is currently **RISING**, while the Crisis Engine remains at **NORMAL**.

Portfolio exposure cap is **100.00%**.

Signal Engine positioning structure: **ROTATION**.

Current leadership: **USO, UCO**.

Weak assets: **TLT, TMF**.

Current portfolio stance: **CAUTIOUS**.

---

# 11. Historical NAV Ranking

Historical NAV observations: **18**

| Rank | Date | NAV | Cumulative Return | Drawdown |
| ---: | --- | ---: | ---: | ---: |
| 1 | 2026-08-25 | 1.062835 | 6.28% | 0.00% |
| 2 | 2026-08-24 | 1.061228 | 6.12% | 0.00% |
| 3 | 2026-08-21 | 1.058337 | 5.83% | 0.00% |
| 4 | 2026-08-27 | 1.056266 | 5.63% | -0.62% |
| 5 | 2026-08-19 | 1.043863 | 4.39% | 0.00% |
| 6 | 2026-08-31 | 1.038924 | 3.89% | -2.25% |
| 7 | 2026-08-28 | 1.033456 | 3.35% | -2.76% |
| 8 | 2026-09-02 | 1.031278 | 3.13% | -2.97% |
| 9 | 2026-08-11 | 1.025723 | 2.57% | 0.00% |
| 10 | 2026-08-10 | 1.025336 | 2.53% | 0.00% |
| 11 | 2026-08-14 | 1.025158 | 2.52% | -0.06% |
| 12 | 2026-09-01 | 1.022294 | 2.23% | -3.81% |
| 13 | 2026-08-18 | 1.019429 | 1.94% | -0.61% |
| 14 | 2026-08-17 | 1.019429 | 1.94% | -0.61% |
| 15 | 2026-08-07 | 1.016608 | 1.66% | 0.00% |
| 16 | 2026-08-05 | 1.015406 | 1.54% | 0.00% |
| 17 | 2026-08-04 | 1.009790 | 0.98% | 0.00% |
| 18 | 2026-07-30 | 1.000000 | 0.00% | 0.00% |

**Current NAV:** 1.031278

**Current NAV Rank:** 8 / 18

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