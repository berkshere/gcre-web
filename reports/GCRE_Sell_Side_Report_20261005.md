# GCRE Daily Market Run Report

**Report Date:** 2026-10-05

**GCRE — Regime. Rotation. Risk.**

---

## 1. Executive Summary

**Macro Regime:** SOVEREIGN_STRESS

**Positioning:** NEUTRAL

**Rotation:** ROTATION_SHIFTING

**Risk Pressure:** RISING

**Crisis Level:** NORMAL

**Portfolio Stance:** CAUTIOUS

**NAV:** 1.032745

**Portfolio Value:** $103,274.47

**Cumulative Return:** 3.27%

**Daily Return:** -0.10%

**Drawdown:** -2.83%

---

## 2. Macro Regime

- Regime: **SOVEREIGN_STRESS**
- Previous Regime: **SOVEREIGN_STRESS**
- Regime Changed: **False**
- Economic Cycle: **REFLATION**
- Fed Regime: **TIGHTENING**
- Market Condition: **TRENDING**
- Market Trend: **Bullish**

---

## 3. Market Risk

- Risk Pressure: **RISING**
- Crisis Level: **NORMAL**

| Item | Value |
| --- | ---: |
| VIX | 16.1200 |
| MOVE | 113.5150 |
| HY OAS | 2.6800 |
| Crisis Score | 8.0000 |
| Exposure Cap | 100.00% |
| Override | False |
| Reason | MOVE warning level (113.52) |

---

## 4. GCRE Judgment

GCRE remains positioned within a **SOVEREIGN_STRESS** regime. Market positioning is **NEUTRAL**, while rotation is classified as **ROTATION_SHIFTING**.

Current leaders are **UCO,SPY**, while **TMF,GLD** remain the weaker assets.

Risk pressure is **RISING** with the crisis level at **NORMAL**. The resulting portfolio stance is **CAUTIOUS**.

Flow 2 therefore applies leverage selectively: QQQ/TQQQ retains a **10%** leveraged share, USO/UCO retains a **40%** leveraged share, while TLT/TMF remains entirely in the base instrument.

The final portfolio is the result of the completed GCRE decision chain, with no discretionary override introduced by the reporting layer.

---

## 5. GCRE Daily Decision

**Decision Date:** 2026-10-05

### MACRO

- Regime: **SOVEREIGN_STRESS**
- Economic Cycle: **REFLATION**
- Fed Regime: **TIGHTENING**
- Market Condition: **TRENDING**
- Market Trend: **Bullish**

↓

### TIMING & SIGNAL

- Positioning: **NEUTRAL**
- Structure: **ROTATION**
- Trend: **MIXED**
- Rotation: **ROTATION_SHIFTING**
- Positioning Spread: **65.00**
- Previous Spread: **65.00**
- Leaders: **UCO,SPY**
- Weak Assets: **TMF,GLD**
- Portfolio Stance: **CAUTIOUS**
- Risk Pressure: **RISING**
- Crisis Level: **NORMAL**

↓

### FLOW 1 — BASE PORTFOLIO

| Asset | Weight |
| --- | ---: |
| CASH | 30.00% |
| GLD | 26.92% |
| USO | 5.38% |
| QQQ | 5.38% |
| BIL | 26.92% |
| TLT | 5.38% |

**Flow 1 Total:** 100.00%

↓

### FLOW 2 — LEVERAGE

| Pair | Base Score | Leveraged Score | Score Diff | Profile | Leveraged Share | Pair Risk |
| --- | ---: | ---: | ---: | --- | ---: | --- |
| QQQ_TQQQ | 71.691058 | 70.565622 | -1.125436 | NEUTRAL | 10.00% | L2 |
| TLT_TMF | 64.469820 | 63.249044 | -1.220776 | NEUTRAL | 0.00% | L3 |
| USO_UCO | 56.657760 | 69.689398 | +13.031638 | LEVERAGED_STRONG | 40.00% | L2 |
| GLD_SHNY | 65.733659 | 65.286035 | -0.447624 | NEUTRAL | 10.00% | L2 |

↓

### FINAL PORTFOLIO

| Asset | Final Weight |
| --- | ---: |
| CASH | 30.00% |
| GLD | 24.23% |
| SHNY | 2.69% |
| USO | 3.23% |
| UCO | 2.15% |
| QQQ | 4.85% |
| TQQQ | 0.54% |
| BIL | 26.92% |
| TLT | 5.38% |

**Final Portfolio Total:** 100.00%

---

## 6. Allocation Rationale

GCRE uses a two-stage portfolio process:

**Flow 1 Base Portfolio → Flow 2 Leverage Conversion → Final Portfolio**

Flow 2 does not create capital. It converts a portion of an existing base-pair allocation into the leveraged instrument.

### Flow 1 → Final Portfolio

| Pair | Flow 1 Base | Final Base | Leveraged | Leverage Share |
| --- | ---: | ---: | ---: | ---: |
| QQQ → TQQQ | 5.38% | 4.85% | 0.54% | 10.00% |
| TLT → TMF | 5.38% | 5.38% | 0.00% | 0.00% |
| USO → UCO | 5.38% | 3.23% | 2.15% | 40.00% |
| GLD → SHNY | 26.92% | 24.23% | 2.69% | 10.00% |

### Flow 2 Pair Decisions

#### QQQ_TQQQ

- Base Asset: QQQ
- Leveraged Asset: TQQQ
- Base Score: 71.691058
- Leveraged Score: 70.565622
- Score Diff: -1.125436
- Profile: NEUTRAL
- Leveraged Share: 10.00%
- Pair Risk: L2

#### TLT_TMF

- Base Asset: TLT
- Leveraged Asset: TMF
- Base Score: 64.469820
- Leveraged Score: 63.249044
- Score Diff: -1.220776
- Profile: NEUTRAL
- Leveraged Share: 0.00%
- Pair Risk: L3

#### USO_UCO

- Base Asset: USO
- Leveraged Asset: UCO
- Base Score: 56.657760
- Leveraged Score: 69.689398
- Score Diff: +13.031638
- Profile: LEVERAGED_STRONG
- Leveraged Share: 40.00%
- Pair Risk: L2

#### GLD_SHNY

- Base Asset: GLD
- Leveraged Asset: SHNY
- Base Score: 65.733659
- Leveraged Score: 65.286035
- Score Diff: -0.447624
- Profile: NEUTRAL
- Leveraged Share: 10.00%
- Pair Risk: L2

---

## 7. Asset Risk Audit

| Asset | Base Asset | Risk Index | Risk Level | Trend | Persistence | Action | Strength | Confidence | Multiplier |
| --- | --- | ---: | --- | --- | --- | --- | --- | ---: | ---: |
| UCO | USO | 13.7361 | L1 | FALLING | PERSISTENT | NORMAL_HOLD | LOW | 45.8 | 1.00 |
| BIL | BIL | 30.3962 | L2 | RISING | PERSISTENT | NORMAL_HOLD | LOW | 49.3 | 0.85 |
| GLD | GLD | 31.9438 | L2 | N/A | N/A | N/A | N/A | N/A | 0.85 |
| QQQ | QQQ | 23.0475 | L2 | FALLING | PERSISTENT | HOLD_REDUCED_EXPOSURE | LOW | 41.9 | 0.85 |
| SHNY | GLD | 35.6897 | L2 | FALLING | PERSISTENT | HOLD_REDUCED_EXPOSURE | LOW | 48.3 | 0.85 |
| TLT | TLT | 63.3264 | L3 | FALLING | PERSISTENT | HOLD_REDUCED_EXPOSURE | MODERATE | 44.8 | 0.70 |
| TMF | TLT | 66.1912 | L3 | FALLING | PERSISTENT | HOLD_REDUCED_EXPOSURE | MODERATE | 43.7 | 0.70 |
| TQQQ | QQQ | 24.6881 | L2 | FALLING | PERSISTENT | HOLD_REDUCED_EXPOSURE | LOW | 43.2 | 0.85 |
| USO | USO | 36.0164 | L2 | FALLING | PERSISTENT | HOLD_REDUCED_EXPOSURE | LOW | 49.3 | 0.85 |

---

## 8. NAV Performance

| Metric | Value |
| --- | ---: |
| NAV | 1.032745 |
| Portfolio Value | $103,274.47 |
| Daily Return | -0.10% |
| Cumulative Return | 3.27% |
| Peak NAV | 1.062835 |
| Drawdown | -2.83% |

---

## 9. Historical NAV

Historical NAV observations: **32**

| Date | NAV | Drawdown |
| --- | ---: | ---: |
| 2026-07-30 | 1.000000 | 0.00% |
| 2026-08-04 | 1.009790 | 0.00% |
| 2026-08-05 | 1.015406 | 0.00% |
| 2026-08-07 | 1.016608 | 0.00% |
| 2026-08-10 | 1.025336 | 0.00% |
| 2026-08-11 | 1.025723 | 0.00% |
| 2026-08-14 | 1.025158 | -0.06% |
| 2026-08-17 | 1.019429 | -0.61% |
| 2026-08-18 | 1.019429 | -0.61% |
| 2026-08-19 | 1.043863 | 0.00% |
| 2026-08-21 | 1.058337 | 0.00% |
| 2026-08-24 | 1.061228 | 0.00% |
| 2026-08-25 | 1.062835 | 0.00% |
| 2026-08-27 | 1.056266 | -0.62% |
| 2026-08-28 | 1.033456 | -2.76% |
| 2026-08-31 | 1.038924 | -2.25% |
| 2026-09-01 | 1.022294 | -3.81% |
| 2026-09-02 | 1.031278 | -2.97% |
| 2026-09-04 | 1.038181 | -2.32% |
| 2026-09-10 | 1.048260 | -1.37% |
| 2026-09-11 | 1.046383 | -1.55% |
| 2026-09-14 | 1.043550 | -1.81% |
| 2026-09-15 | 1.049784 | -1.23% |
| 2026-09-16 | 1.041098 | -2.05% |
| 2026-09-17 | 1.048667 | -1.33% |
| 2026-09-18 | 1.049962 | -1.21% |
| 2026-09-21 | 1.047639 | -1.43% |
| 2026-09-24 | 1.041761 | -1.98% |
| 2026-09-25 | 1.042208 | -1.94% |
| 2026-09-29 | 1.034771 | -2.64% |
| 2026-10-02 | 1.033731 | -2.74% |
| 2026-10-05 | 1.032745 | -2.83% |

**Current NAV:** 1.032745

---

