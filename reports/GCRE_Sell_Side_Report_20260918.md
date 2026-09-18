# GCRE Daily Market Run Report

**Report Date:** 2026-09-18

**GCRE — Regime. Rotation. Risk.**

---

## 1. Executive Summary

**Macro Regime:** REFLATION

**Positioning:** NEUTRAL

**Rotation:** ROTATION_STABLE

**Risk Pressure:** FALLING

**Crisis Level:** NORMAL

**Portfolio Stance:** RISK_ON

**NAV:** 1.048667

**Portfolio Value:** $104,866.75

**Cumulative Return:** 4.87%

**Daily Return:** 0.73%

**Drawdown:** -1.33%

---

## 2. Macro Regime

- Regime: **REFLATION**
- Previous Regime: **REFLATION**
- Regime Changed: **False**
- Economic Cycle: **REFLATION**
- Fed Regime: **PAUSE_HIGH_RATE**
- Market Condition: **NEUTRAL**
- Market Trend: **Bullish**

---

## 3. Market Risk

- Risk Pressure: **FALLING**
- Crisis Level: **NORMAL**

| Item | Value |
| --- | ---: |
| VIX | 15.4400 |
| MOVE | 76.2178 |
| HY OAS | 2.7400 |
| Crisis Score | 0.0000 |
| Exposure Cap | 100.00% |
| Override | False |
| Reason | NORMAL: absolute risk indicators remain below stress thresholds |

---

## 4. GCRE Judgment

GCRE remains positioned within a **REFLATION** regime. Market positioning is **NEUTRAL**, while rotation is classified as **ROTATION_STABLE**.

Current leaders are **UUP,QQQ**, while **TLT,TMF** remain the weaker assets.

Risk pressure is **FALLING** with the crisis level at **NORMAL**. The resulting portfolio stance is **RISK_ON**.

Flow 2 therefore applies leverage selectively: QQQ/TQQQ retains a **20%** leveraged share, USO/UCO retains a **10%** leveraged share, while TLT/TMF remains entirely in the base instrument.

The final portfolio is the result of the completed GCRE decision chain, with no discretionary override introduced by the reporting layer.

---

## 5. GCRE Daily Decision

**Decision Date:** 2026-09-18

### MACRO

- Regime: **REFLATION**
- Economic Cycle: **REFLATION**
- Fed Regime: **PAUSE_HIGH_RATE**
- Market Condition: **NEUTRAL**
- Market Trend: **Bullish**

↓

### TIMING & SIGNAL

- Positioning: **NEUTRAL**
- Structure: **BALANCED**
- Trend: **MIXED**
- Rotation: **ROTATION_STABLE**
- Positioning Spread: **42.50**
- Previous Spread: **40.00**
- Leaders: **UUP,QQQ**
- Weak Assets: **TLT,TMF**
- Portfolio Stance: **RISK_ON**
- Risk Pressure: **FALLING**
- Crisis Level: **NORMAL**

↓

### FLOW 1 — BASE PORTFOLIO

| Asset | Weight |
| --- | ---: |
| CASH | 25.00% |
| GLD | 20.00% |
| USO | 20.00% |
| QQQ | 15.00% |
| BIL | 15.00% |
| TLT | 5.00% |

**Flow 1 Total:** 100.00%

↓

### FLOW 2 — LEVERAGE

| Pair | Base Score | Leveraged Score | Score Diff | Profile | Leveraged Share | Pair Risk |
| --- | ---: | ---: | ---: | --- | ---: | --- |
| QQQ_TQQQ | 58.869079 | 59.193192 | +0.324113 | NEUTRAL | 20.00% | L1 |
| TLT_TMF | 58.520128 | 59.879925 | +1.359797 | NEUTRAL | 0.00% | L3 |
| USO_UCO | 66.168805 | 68.598734 | +2.429929 | NEUTRAL | 10.00% | L2 |
| GLD_SHNY | 54.882149 | 54.341616 | -0.540533 | NEUTRAL | 10.00% | L2 |

↓

### FINAL PORTFOLIO

| Asset | Final Weight |
| --- | ---: |
| CASH | 25.00% |
| GLD | 18.00% |
| SHNY | 2.00% |
| USO | 18.00% |
| UCO | 2.00% |
| QQQ | 12.00% |
| TQQQ | 3.00% |
| BIL | 15.00% |
| TLT | 5.00% |

**Final Portfolio Total:** 100.00%

---

## 6. Allocation Rationale

GCRE uses a two-stage portfolio process:

**Flow 1 Base Portfolio → Flow 2 Leverage Conversion → Final Portfolio**

Flow 2 does not create capital. It converts a portion of an existing base-pair allocation into the leveraged instrument.

### Flow 1 → Final Portfolio

| Pair | Flow 1 Base | Final Base | Leveraged | Leverage Share |
| --- | ---: | ---: | ---: | ---: |
| QQQ → TQQQ | 15.00% | 12.00% | 3.00% | 20.00% |
| TLT → TMF | 5.00% | 5.00% | 0.00% | 0.00% |
| USO → UCO | 20.00% | 18.00% | 2.00% | 10.00% |
| GLD → SHNY | 20.00% | 18.00% | 2.00% | 10.00% |

### Flow 2 Pair Decisions

#### QQQ_TQQQ

- Base Asset: QQQ
- Leveraged Asset: TQQQ
- Base Score: 58.869079
- Leveraged Score: 59.193192
- Score Diff: +0.324113
- Profile: NEUTRAL
- Leveraged Share: 20.00%
- Pair Risk: L1

#### TLT_TMF

- Base Asset: TLT
- Leveraged Asset: TMF
- Base Score: 58.520128
- Leveraged Score: 59.879925
- Score Diff: +1.359797
- Profile: NEUTRAL
- Leveraged Share: 0.00%
- Pair Risk: L3

#### USO_UCO

- Base Asset: USO
- Leveraged Asset: UCO
- Base Score: 66.168805
- Leveraged Score: 68.598734
- Score Diff: +2.429929
- Profile: NEUTRAL
- Leveraged Share: 10.00%
- Pair Risk: L2

#### GLD_SHNY

- Base Asset: GLD
- Leveraged Asset: SHNY
- Base Score: 54.882149
- Leveraged Score: 54.341616
- Score Diff: -0.540533
- Profile: NEUTRAL
- Leveraged Share: 10.00%
- Pair Risk: L2

---

## 7. Asset Risk Audit

| Asset | Base Asset | Risk Index | Risk Level | Trend | Persistence | Action | Strength | Confidence | Multiplier |
| --- | --- | ---: | --- | --- | --- | --- | --- | ---: | ---: |
| UCO | USO | 28.5570 | L2 | FALLING | PERSISTENT | HOLD_REDUCED_EXPOSURE | LOW | 46.5 | 0.85 |
| BIL | BIL | 39.1478 | L2 | FALLING | PERSISTENT | NORMAL_HOLD | LOW | 47.9 | 0.85 |
| GLD | GLD | 36.7644 | L2 | N/A | N/A | N/A | N/A | N/A | 0.85 |
| QQQ | QQQ | 23.4615 | L1 | FALLING | PERSISTENT | NORMAL_HOLD | LOW | 47.5 | 1.00 |
| SHNY | GLD | 39.0612 | L2 | FALLING | PERSISTENT | HOLD_REDUCED_EXPOSURE | LOW | 48.6 | 0.85 |
| TLT | TLT | 48.0991 | L3 | FALLING | PERSISTENT | HOLD_REDUCED_EXPOSURE | MODERATE | 43.3 | 0.70 |
| TMF | TLT | 46.2114 | L2 | FALLING | NEW | HOLD_REDUCED_EXPOSURE | LOW | 44.1 | 0.85 |
| TQQQ | QQQ | 23.0839 | L1 | FALLING | PERSISTENT | NORMAL_HOLD | LOW | 48.9 | 1.00 |
| USO | USO | 42.2811 | L2 | RISING | PERSISTENT | REDUCE_RISK | MODERATE | 47.2 | 0.85 |

---

## 8. NAV Performance

| Metric | Value |
| --- | ---: |
| NAV | 1.048667 |
| Portfolio Value | $104,866.75 |
| Daily Return | 0.73% |
| Cumulative Return | 4.87% |
| Peak NAV | 1.062835 |
| Drawdown | -1.33% |

---

## 9. Historical NAV

Historical NAV observations: **25**

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

**Current NAV:** 1.048667

---

