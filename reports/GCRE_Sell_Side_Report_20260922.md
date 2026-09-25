# GCRE Daily Market Run Report

**Report Date:** 2026-09-22

**GCRE — Regime. Rotation. Risk.**

---

## 1. Executive Summary

**Macro Regime:** SOVEREIGN_STRESS

**Positioning:** POSITIVE

**Rotation:** ROTATION_SHIFTING

**Risk Pressure:** MIXED

**Crisis Level:** NORMAL

**Portfolio Stance:** NEUTRAL

**NAV:** 1.047639

**Portfolio Value:** $104,763.94

**Cumulative Return:** 4.76%

**Daily Return:** -0.22%

**Drawdown:** -1.43%

---

## 2. Macro Regime

- Regime: **SOVEREIGN_STRESS**
- Previous Regime: **REFLATION**
- Regime Changed: **True**
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
| VIX | 14.8100 |
| MOVE | 81.1970 |
| HY OAS | 2.6800 |
| Crisis Score | 0.0000 |
| Exposure Cap | 100.00% |
| Override | False |
| Reason | NORMAL: absolute risk indicators remain below stress thresholds |

---

## 4. GCRE Judgment

GCRE remains positioned within a **SOVEREIGN_STRESS** regime. Market positioning is **POSITIVE**, while rotation is classified as **ROTATION_SHIFTING**.

Current leaders are **QQQ,SPY**, while **TLT,TMF** remain the weaker assets.

Risk pressure is **MIXED** with the crisis level at **NORMAL**. The resulting portfolio stance is **NEUTRAL**.

Flow 2 therefore applies leverage selectively: QQQ/TQQQ retains a **10%** leveraged share, USO/UCO retains a **10%** leveraged share, while TLT/TMF uses a **10%** leveraged share.

The final portfolio is the result of the completed GCRE decision chain, with no discretionary override introduced by the reporting layer.

---

## 5. GCRE Daily Decision

**Decision Date:** 2026-09-22

### MACRO

- Regime: **SOVEREIGN_STRESS**
- Economic Cycle: **REFLATION**
- Fed Regime: **TIGHTENING**
- Market Condition: **RISK_ON**
- Market Trend: **Bullish**

↓

### TIMING & SIGNAL

- Positioning: **POSITIVE**
- Structure: **BALANCED**
- Trend: **STABLE**
- Rotation: **ROTATION_SHIFTING**
- Positioning Spread: **45.00**
- Previous Spread: **47.50**
- Leaders: **QQQ,SPY**
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
| QQQ_TQQQ | 67.122151 | 66.473758 | -0.648393 | NEUTRAL | 10.00% | L2 |
| TLT_TMF | 56.283693 | 56.697013 | +0.413320 | NEUTRAL | 10.00% | L2 |
| USO_UCO | 64.428965 | 67.679571 | +3.250606 | NEUTRAL | 10.00% | L2 |
| GLD_SHNY | 60.991077 | 60.564071 | -0.427006 | NEUTRAL | 10.00% | L2 |

↓

### FINAL PORTFOLIO

| Asset | Final Weight |
| --- | ---: |
| CASH | 25.00% |
| GLD | 18.00% |
| SHNY | 2.00% |
| USO | 15.00% |
| UCO | 5.00% |
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
| QQQ → TQQQ | 5.38% | 12.00% | 3.00% | 10.00% |
| TLT → TMF | 5.38% | 5.00% | 0.00% | 10.00% |
| USO → UCO | 5.38% | 15.00% | 5.00% | 10.00% |
| GLD → SHNY | 26.92% | 18.00% | 2.00% | 10.00% |

### Flow 2 Pair Decisions

#### QQQ_TQQQ

- Base Asset: QQQ
- Leveraged Asset: TQQQ
- Base Score: 67.122151
- Leveraged Score: 66.473758
- Score Diff: -0.648393
- Profile: NEUTRAL
- Leveraged Share: 10.00%
- Pair Risk: L2

#### TLT_TMF

- Base Asset: TLT
- Leveraged Asset: TMF
- Base Score: 56.283693
- Leveraged Score: 56.697013
- Score Diff: +0.413320
- Profile: NEUTRAL
- Leveraged Share: 10.00%
- Pair Risk: L2

#### USO_UCO

- Base Asset: USO
- Leveraged Asset: UCO
- Base Score: 64.428965
- Leveraged Score: 67.679571
- Score Diff: +3.250606
- Profile: NEUTRAL
- Leveraged Share: 10.00%
- Pair Risk: L2

#### GLD_SHNY

- Base Asset: GLD
- Leveraged Asset: SHNY
- Base Score: 60.991077
- Leveraged Score: 60.564071
- Score Diff: -0.427006
- Profile: NEUTRAL
- Leveraged Share: 10.00%
- Pair Risk: L2

---

## 7. Asset Risk Audit

| Asset | Base Asset | Risk Index | Risk Level | Trend | Persistence | Action | Strength | Confidence | Multiplier |
| --- | --- | ---: | --- | --- | --- | --- | --- | ---: | ---: |
| UCO | USO | 29.9450 | L2 | FALLING | PERSISTENT | HOLD_REDUCED_EXPOSURE | LOW | 49.0 | 0.85 |
| BIL | BIL | 35.2489 | L2 | FALLING | PERSISTENT | NORMAL_HOLD | LOW | 49.7 | 0.85 |
| GLD | GLD | 34.2979 | L2 | N/A | N/A | N/A | N/A | N/A | 0.85 |
| QQQ | QQQ | 34.0679 | L2 | RISING | NEW | REDUCE_RISK | MODERATE | 42.6 | 0.85 |
| SHNY | GLD | 37.6356 | L2 | FALLING | PERSISTENT | HOLD_REDUCED_EXPOSURE | LOW | 50.3 | 0.85 |
| TLT | TLT | 45.5189 | L2 | FALLING | NEW | HOLD_REDUCED_EXPOSURE | LOW | 44.2 | 0.85 |
| TMF | TLT | 44.9138 | L2 | FALLING | PERSISTENT | HOLD_REDUCED_EXPOSURE | LOW | 45.0 | 0.85 |
| TQQQ | QQQ | 34.4099 | L2 | RISING | NEW | REDUCE_RISK | MODERATE | 42.1 | 0.85 |
| USO | USO | 44.6415 | L2 | RISING | PERSISTENT | REDUCE_RISK | MODERATE | 49.3 | 0.85 |

---

## 8. NAV Performance

| Metric | Value |
| --- | ---: |
| NAV | 1.047639 |
| Portfolio Value | $104,763.94 |
| Daily Return | -0.22% |
| Cumulative Return | 4.76% |
| Peak NAV | 1.062835 |
| Drawdown | -1.43% |

---

## 9. Historical NAV

Historical NAV observations: **27**

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

**Current NAV:** 1.047639

---

