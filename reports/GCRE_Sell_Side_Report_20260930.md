# GCRE Daily Market Run Report

**Report Date:** 2026-09-30

**GCRE — Regime. Rotation. Risk.**

---

## 1. Executive Summary

**Macro Regime:** SOVEREIGN_STRESS

**Positioning:** NEUTRAL

**Rotation:** ROTATION_SHIFTING

**Risk Pressure:** MIXED

**Crisis Level:** NORMAL

**Portfolio Stance:** NEUTRAL

**NAV:** 1.034771

**Portfolio Value:** $103,477.10

**Cumulative Return:** 3.48%

**Daily Return:** -0.71%

**Drawdown:** -2.64%

---

## 2. Macro Regime

- Regime: **SOVEREIGN_STRESS**
- Previous Regime: **SOVEREIGN_STRESS**
- Regime Changed: **False**
- Economic Cycle: **REFLATION**
- Fed Regime: **TIGHTENING**
- Market Condition: **RISK_ON**
- Market Trend: **Bullish**

---

## 3. Market Risk

- Risk Pressure: **MIXED**
- Crisis Level: **NORMAL**

| Item | Value |
| --- | ---: |
| VIX | 16.0400 |
| MOVE | 106.6030 |
| HY OAS | 2.6800 |
| Crisis Score | 8.0000 |
| Exposure Cap | 100.00% |
| Override | False |
| Reason | MOVE warning level (104.58) |

---

## 4. GCRE Judgment

GCRE remains positioned within a **SOVEREIGN_STRESS** regime. Market positioning is **NEUTRAL**, while rotation is classified as **ROTATION_SHIFTING**.

Current leaders are **QQQ,UCO**, while **TLT,TMF** remain the weaker assets.

Risk pressure is **MIXED** with the crisis level at **NORMAL**. The resulting portfolio stance is **NEUTRAL**.

Flow 2 therefore applies leverage selectively: QQQ/TQQQ retains a **10%** leveraged share, USO/UCO retains a **10%** leveraged share, while TLT/TMF remains entirely in the base instrument.

The final portfolio is the result of the completed GCRE decision chain, with no discretionary override introduced by the reporting layer.

---

## 5. GCRE Daily Decision

**Decision Date:** 2026-09-30

### MACRO

- Regime: **SOVEREIGN_STRESS**
- Economic Cycle: **REFLATION**
- Fed Regime: **TIGHTENING**
- Market Condition: **RISK_ON**
- Market Trend: **Bullish**

↓

### TIMING & SIGNAL

- Positioning: **NEUTRAL**
- Structure: **ROTATION**
- Trend: **MIXED**
- Rotation: **ROTATION_SHIFTING**
- Positioning Spread: **80.00**
- Previous Spread: **70.00**
- Leaders: **QQQ,UCO**
- Weak Assets: **TLT,TMF**
- Portfolio Stance: **NEUTRAL**
- Risk Pressure: **MIXED**
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
| QQQ_TQQQ | 72.032284 | 70.655326 | -1.376958 | NEUTRAL | 10.00% | L2 |
| TLT_TMF | 64.521471 | 64.562948 | +0.041477 | NEUTRAL | 0.00% | L3 |
| USO_UCO | 58.909343 | 62.751763 | +3.842420 | NEUTRAL | 10.00% | L2 |
| GLD_SHNY | 63.042418 | 62.236832 | -0.805586 | NEUTRAL | 10.00% | L2 |

↓

### FINAL PORTFOLIO

| Asset | Final Weight |
| --- | ---: |
| CASH | 40.00% |
| GLD | 18.00% |
| SHNY | 2.00% |
| BIL | 30.00% |
| TLT | 10.00% |

**Final Portfolio Total:** 100.00%

---

## 6. Allocation Rationale

GCRE uses a two-stage portfolio process:

**Flow 1 Base Portfolio → Flow 2 Leverage Conversion → Final Portfolio**

Flow 2 does not create capital. It converts a portion of an existing base-pair allocation into the leveraged instrument.

### Flow 1 → Final Portfolio

| Pair | Flow 1 Base | Final Base | Leveraged | Leverage Share |
| --- | ---: | ---: | ---: | ---: |
| QQQ → TQQQ | 5.38% | 0.00% | 0.00% | 10.00% |
| TLT → TMF | 5.38% | 10.00% | 0.00% | 0.00% |
| USO → UCO | 5.38% | 0.00% | 0.00% | 10.00% |
| GLD → SHNY | 26.92% | 18.00% | 2.00% | 10.00% |

### Flow 2 Pair Decisions

#### QQQ_TQQQ

- Base Asset: QQQ
- Leveraged Asset: TQQQ
- Base Score: 72.032284
- Leveraged Score: 70.655326
- Score Diff: -1.376958
- Profile: NEUTRAL
- Leveraged Share: 10.00%
- Pair Risk: L2

#### TLT_TMF

- Base Asset: TLT
- Leveraged Asset: TMF
- Base Score: 64.521471
- Leveraged Score: 64.562948
- Score Diff: +0.041477
- Profile: NEUTRAL
- Leveraged Share: 0.00%
- Pair Risk: L3

#### USO_UCO

- Base Asset: USO
- Leveraged Asset: UCO
- Base Score: 58.909343
- Leveraged Score: 62.751763
- Score Diff: +3.842420
- Profile: NEUTRAL
- Leveraged Share: 10.00%
- Pair Risk: L2

#### GLD_SHNY

- Base Asset: GLD
- Leveraged Asset: SHNY
- Base Score: 63.042418
- Leveraged Score: 62.236832
- Score Diff: -0.805586
- Profile: NEUTRAL
- Leveraged Share: 10.00%
- Pair Risk: L2

---

## 7. Asset Risk Audit

| Asset | Base Asset | Risk Index | Risk Level | Trend | Persistence | Action | Strength | Confidence | Multiplier |
| --- | --- | ---: | --- | --- | --- | --- | --- | ---: | ---: |
| UCO | USO | 18.9027 | L1 | FALLING | PERSISTENT | NORMAL_HOLD | LOW | 52.5 | 1.00 |
| BIL | BIL | 33.4934 | L2 | RISING | PERSISTENT | NORMAL_HOLD | LOW | 46.2 | 0.85 |
| GLD | GLD | 44.7898 | L2 | N/A | N/A | N/A | N/A | N/A | 0.85 |
| QQQ | QQQ | 30.0203 | L2 | FALLING | PERSISTENT | HOLD_REDUCED_EXPOSURE | LOW | 46.6 | 0.85 |
| SHNY | GLD | 45.2078 | L2 | RISING | NEW | REDUCE_RISK | MODERATE | 48.5 | 0.85 |
| TLT | TLT | 67.3242 | L3 | RISING | PERSISTENT | REDUCE_RISK_SIGNIFICANTLY | HIGH | 43.7 | 0.70 |
| TMF | TLT | 69.3095 | L3 | RISING | PERSISTENT | REDUCE_RISK_SIGNIFICANTLY | HIGH | 43.1 | 0.70 |
| TQQQ | QQQ | 32.8117 | L2 | FALLING | PERSISTENT | HOLD_REDUCED_EXPOSURE | LOW | 47.5 | 0.85 |
| USO | USO | 44.9622 | L2 | RISING | PERSISTENT | REDUCE_RISK | MODERATE | 48.6 | 0.85 |

---

## 8. NAV Performance

| Metric | Value |
| --- | ---: |
| NAV | 1.034771 |
| Portfolio Value | $103,477.10 |
| Daily Return | -0.71% |
| Cumulative Return | 3.48% |
| Peak NAV | 1.062835 |
| Drawdown | -2.64% |

---

## 9. Historical NAV

Historical NAV observations: **30**

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

**Current NAV:** 1.034771

---

