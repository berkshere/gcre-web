# GCRE Daily Market Run Report

**Report Date:** 2026-09-16

**GCRE — Regime. Rotation. Risk.**

---

## 1. Executive Summary

**Macro Regime:** REFLATION

**Positioning:** NEUTRAL

**Rotation:** ROTATION_SHIFTING

**Risk Pressure:** MIXED

**Crisis Level:** NORMAL

**Portfolio Stance:** NEUTRAL

**NAV:** 1.049865

**Portfolio Value:** $104,986.49

**Cumulative Return:** 4.99%

**Daily Return:** 0.61%

**Drawdown:** -1.22%

---

## 2. Macro Regime

- Regime: **REFLATION**
- Previous Regime: **REFLATION**
- Regime Changed: **False**
- Economic Cycle: **REFLATION**
- Fed Regime: **PAUSE_HIGH_RATE**
- Market Condition: **NEUTRAL**
- Market Trend: **Bearish**

---

## 3. Market Risk

- Risk Pressure: **MIXED**
- Crisis Level: **NORMAL**

| Item | Value |
| --- | ---: |
| VIX | 17.2000 |
| MOVE | 83.7087 |
| HY OAS | 2.7400 |
| Crisis Score | 0.0000 |
| Exposure Cap | 100.00% |
| Override | False |
| Reason | NORMAL: absolute risk indicators remain below stress thresholds |

---

## 4. GCRE Judgment

GCRE remains positioned within a **REFLATION** regime. Market positioning is **NEUTRAL**, while rotation is classified as **ROTATION_SHIFTING**.

Current leaders are **QQQ,UUP**, while **TLT,TMF** remain the weaker assets.

Risk pressure is **MIXED** with the crisis level at **NORMAL**. The resulting portfolio stance is **NEUTRAL**.

Flow 2 therefore applies leverage selectively: QQQ/TQQQ retains a **20%** leveraged share, USO/UCO retains a **10%** leveraged share, while TLT/TMF remains entirely in the base instrument.

The final portfolio is the result of the completed GCRE decision chain, with no discretionary override introduced by the reporting layer.

---

## 5. GCRE Daily Decision

**Decision Date:** 2026-09-16

### MACRO

- Regime: **REFLATION**
- Economic Cycle: **REFLATION**
- Fed Regime: **PAUSE_HIGH_RATE**
- Market Condition: **NEUTRAL**
- Market Trend: **Bearish**

↓

### TIMING & SIGNAL

- Positioning: **NEUTRAL**
- Structure: **ROTATION**
- Trend: **STABLE**
- Rotation: **ROTATION_SHIFTING**
- Positioning Spread: **65.00**
- Previous Spread: **62.50**
- Leaders: **QQQ,UUP**
- Weak Assets: **TLT,TMF**
- Portfolio Stance: **NEUTRAL**
- Risk Pressure: **MIXED**
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
| QQQ_TQQQ | 61.225760 | 61.153742 | -0.072018 | NEUTRAL | 20.00% | L1 |
| TLT_TMF | 58.906230 | 59.168127 | +0.261897 | NEUTRAL | 0.00% | L3 |
| USO_UCO | 63.568979 | 67.688187 | +4.119208 | NEUTRAL | 10.00% | L2 |
| GLD_SHNY | 59.172484 | 59.240091 | +0.067607 | NEUTRAL | 10.00% | L2 |

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
- Base Score: 61.225760
- Leveraged Score: 61.153742
- Score Diff: -0.072018
- Profile: NEUTRAL
- Leveraged Share: 20.00%
- Pair Risk: L1

#### TLT_TMF

- Base Asset: TLT
- Leveraged Asset: TMF
- Base Score: 58.906230
- Leveraged Score: 59.168127
- Score Diff: +0.261897
- Profile: NEUTRAL
- Leveraged Share: 0.00%
- Pair Risk: L3

#### USO_UCO

- Base Asset: USO
- Leveraged Asset: UCO
- Base Score: 63.568979
- Leveraged Score: 67.688187
- Score Diff: +4.119208
- Profile: NEUTRAL
- Leveraged Share: 10.00%
- Pair Risk: L2

#### GLD_SHNY

- Base Asset: GLD
- Leveraged Asset: SHNY
- Base Score: 59.172484
- Leveraged Score: 59.240091
- Score Diff: +0.067607
- Profile: NEUTRAL
- Leveraged Share: 10.00%
- Pair Risk: L2

---

## 7. Asset Risk Audit

| Asset | Base Asset | Risk Index | Risk Level | Trend | Persistence | Action | Strength | Confidence | Multiplier |
| --- | --- | ---: | --- | --- | --- | --- | --- | ---: | ---: |
| UCO | USO | 34.1501 | L2 | RISING | PERSISTENT | REDUCE_RISK | MODERATE | 44.4 | 0.85 |
| BIL | BIL | 40.5614 | L2 | FALLING | PERSISTENT | NORMAL_HOLD | LOW | 48.9 | 0.85 |
| GLD | GLD | 45.6310 | L2 | N/A | N/A | N/A | N/A | N/A | 0.85 |
| QQQ | QQQ | 26.4852 | L1 | RISING | PERSISTENT | MONITOR | LOW | 46.3 | 1.00 |
| SHNY | GLD | 48.2239 | L2 | RISING | PERSISTENT | REDUCE_RISK | MODERATE | 48.2 | 0.85 |
| TLT | TLT | 55.7180 | L3 | RISING | PERSISTENT | REDUCE_RISK_SIGNIFICANTLY | HIGH | 46.1 | 0.70 |
| TMF | TLT | 56.5155 | L3 | RISING | PERSISTENT | REDUCE_RISK_SIGNIFICANTLY | HIGH | 45.8 | 0.70 |
| TQQQ | QQQ | 27.1914 | L1 | RISING | PERSISTENT | MONITOR | LOW | 45.4 | 1.00 |
| USO | USO | 41.7408 | L2 | RISING | PERSISTENT | REDUCE_RISK | MODERATE | 46.0 | 0.85 |

---

## 8. NAV Performance

| Metric | Value |
| --- | ---: |
| NAV | 1.049865 |
| Portfolio Value | $104,986.49 |
| Daily Return | 0.61% |
| Cumulative Return | 4.99% |
| Peak NAV | 1.062835 |
| Drawdown | -1.22% |

---

## 9. Historical NAV

Historical NAV observations: **23**

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
| 2026-09-15 | 1.049865 | -1.22% |

**Current NAV:** 1.049865

---

