const REPORT_URL = "data/report/premium_report.json";
const reportStatus = document.getElementById("report-status");
const reportContent = document.getElementById("report-content");
const REQUIRED_FIELDS = [
    "report_metadata",
    "executive_brief",
    "market_environment",
    "gcre_assessment",
    "portfolio_decision",
    "decision_rationale",
    "risk_crisis_intelligence",
    "historical_evidence",
    "performance",
    "view_change_conditions",
    "disclosure"
];
function escapeHtml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
function prettyLabel(key) {
    return String(key)
        .replace(/_/g, " ")
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .replace(/\b\w/g, c => c.toUpperCase());
}
function isNumber(value) {
    return typeof value === "number" && Number.isFinite(value);
}
function formatPercent(value, digits = 2) {
    if (!isNumber(value)) return escapeHtml(value);
    return `${(value * 100).toFixed(digits)}%`;
}
function formatWeight(value) {
    if (!isNumber(value)) return escapeHtml(value);
    return `${(value * 100).toFixed(0)}%`;
}
function formatMoney(value, digits = 0) {
    if (!isNumber(value)) return escapeHtml(value);
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: digits,
        maximumFractionDigits: digits
    }).format(value);
}
function formatMultiple(value) {
    if (!isNumber(value)) return escapeHtml(value);
    return `${value.toFixed(2)}×`;
}
function formatNumber(value, digits = 2) {
    if (!isNumber(value)) return escapeHtml(value);
    return value.toLocaleString("en-US", {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits
    });
}
function formatValue(key, value) {
    if (value === null || value === undefined || value === "") {
        return "-";
    }
    const normalized = String(key).toLowerCase();
    /*
     * Weight / exposure
     *
     * Examples:
     * previous_weight: 1 -> 100%
     * current_weight: 0.75 -> 75%
     * exposure: 0.5 -> 50%
     */
    if (
        normalized.includes("weight") ||
        normalized.includes("exposure")
    ) {
        return formatWeight(value);
    }
    /*
     * Percentage metrics.
     */
    if (
        normalized.includes("return") ||
        normalized.includes("drawdown") ||
        normalized.includes("cagr") ||
        normalized.includes("volatility") ||
        normalized.includes("confidence_percent") ||
        normalized.endsWith("_rate")
    ) {
        return formatPercent(value);
    }
    /*
     * Monetary values.
     */
    if (
        normalized.includes("nav") ||
        normalized.includes("capital") ||
        normalized.includes("value_usd") ||
        normalized.includes("amount_usd") ||
        normalized.includes("fee_usd")
    ) {
        return formatMoney(value);
    }
    /*
     * Multiples.
     */
    if (
        normalized.includes("multiple") ||
        normalized.includes("calmar") ||
        normalized.includes("sharpe") ||
        normalized.includes("sortino")
    ) {
        return formatMultiple(value);
    }
    /*
     * Boolean.
     */
    if (typeof value === "boolean") {
        return value ? "YES" : "NO";
    }
    /*
     * Integer-like counts.
     */
    if (
        normalized.includes("count") ||
        normalized.includes("trades") ||
        normalized.includes("days")
    ) {
        if (isNumber(value)) {
            return Math.round(value).toLocaleString("en-US");
        }
    }
    /*
     * Generic numbers.
     */
    if (isNumber(value)) {
        return formatNumber(value);
    }
    return escapeHtml(value);
}
function metricRow(label, value, key = label) {
    return `
        <div class="report-metric-row">
            <div class="report-metric-label">${escapeHtml(label)}</div>
            <div class="report-metric-arrow">→</div>
            <div class="report-metric-value">${formatValue(key, value)}</div>
        </div>
    `;
}
function metricRows(object, excludedKeys = []) {
    if (!object || typeof object !== "object" || Array.isArray(object)) {
        return "";
    }
    return Object.entries(object)
        .filter(([key]) => !excludedKeys.includes(key))
        .filter(([, value]) => value !== null && value !== undefined)
        .map(([key, value]) => {
            if (typeof value === "object") return "";
            return metricRow(
                prettyLabel(key),
                value,
                key
            );
        })
        .join("");
}
function section(title, body, className = "") {
    return `
        <section class="report-section ${className}">
            <div class="report-section-heading">${escapeHtml(title)}</div>
            ${body}
        </section>
    `;
}
function renderExecutiveBrief(report) {
    const data = report.executive_brief;
    if (!data || typeof data !== "object") {
        return "";
    }
    const rows = metricRows(data);
    return section(
        "EXECUTIVE BRIEF",
        `<div class="report-metric-list">${rows}</div>`
    );
}
function renderMarketEnvironment(report) {
    const data = report.market_environment;

    if (!data || typeof data !== "object") {
        return "";
    }

    const rows = [];

    /*
     * Growth / Economic State
     *
     * The production engine has historically generated valid
     * ECONOMIC_STATE values. Therefore NOT_AVAILABLE means
     * the state is currently unavailable for this report date,
     * not that the feature does not exist.
     */
    if (Object.prototype.hasOwnProperty.call(data, "growth")) {
        const growthValue = data.growth;

        const isUnavailable =
            typeof growthValue === "string" &&
            growthValue.toUpperCase().includes("NOT AVAILABLE");

        rows.push(
            metricRow(
                "Growth",
                isUnavailable
                    ? "TEMPORARILY UNAVAILABLE"
                    : growthValue,
                isUnavailable
                    ? "status"
                    : "growth"
            )
        );
    }

    /*
     * Inflation State
     *
     * Same logic as Economic State.
     */
    if (Object.prototype.hasOwnProperty.call(data, "inflation")) {
        const inflationValue = data.inflation;

        const isUnavailable =
            typeof inflationValue === "string" &&
            inflationValue.toUpperCase().includes("NOT AVAILABLE");

        rows.push(
            metricRow(
                "Inflation",
                isUnavailable
                    ? "TEMPORARILY UNAVAILABLE"
                    : inflationValue,
                isUnavailable
                    ? "status"
                    : "inflation"
            )
        );
    }

    /*
     * Rates are intentionally NOT rendered.
     *
     * GCRE V2 currently does not expose an independent
     * RATE_STATE in macro_state_daily.csv.
     */

    /*
     * Liquidity / Credit and Market Risk remain explanatory
     * portfolio-assessment information rather than independent
     * state classifications.
     */
    if (Object.prototype.hasOwnProperty.call(data, "liquidity_credit")) {
        rows.push(
            metricRow(
                "Liquidity & Credit",
                data.liquidity_credit,
                "text"
            )
        );
    }

    if (Object.prototype.hasOwnProperty.call(data, "market_risk")) {
        rows.push(
            metricRow(
                "Market Risk",
                data.market_risk,
                "text"
            )
        );
    }

    if (rows.length === 0) {
        return "";
    }

    return section(
        "MARKET ENVIRONMENT",
        `<div class="report-metric-list">${rows.join("")}</div>`
    );
}
function renderGCREAssessment(report) {
    const data = report.gcre_assessment;
    if (!data || typeof data !== "object") {
        return "";
    }
    const preferred = [
        "market_assessment",
        "risk_level",
        "trend",
        "confidence"
    ];
    const rows = preferred
        .filter(key => Object.prototype.hasOwnProperty.call(data, key))
        .map(key => metricRow(
            prettyLabel(key),
            data[key],
            key
        ))
        .join("");
    const remaining = Object.entries(data)
        .filter(([key]) => !preferred.includes(key))
        .filter(([, value]) => value !== null && value !== undefined)
        .filter(([, value]) => typeof value !== "object")
        .map(([key, value]) =>
            metricRow(prettyLabel(key), value, key)
        )
        .join("");
    return section(
        "GCRE ASSESSMENT",
        `<div class="report-metric-list">${rows}${remaining}</div>`
    );
}
function renderPortfolioDecision(report) {
    const data = report.portfolio_decision;

    if (!data || typeof data !== "object") {
        return "";
    }

    const renderModel = (label, model) => {
        if (!model || typeof model !== "object") {
            return "";
        }

        const rows = [];

        if (Object.prototype.hasOwnProperty.call(model, "previous_asset")) {
            rows.push(
                metricRow(
                    "Previous Asset",
                    model.previous_asset,
                    "asset"
                )
            );
        }

        if (Object.prototype.hasOwnProperty.call(model, "current_asset")) {
            rows.push(
                metricRow(
                    "Current Asset",
                    model.current_asset,
                    "asset"
                )
            );
        }

        if (Object.prototype.hasOwnProperty.call(model, "previous_weight")) {
            rows.push(
                metricRow(
                    "Previous Weight",
                    formatWeight(model.previous_weight),
                    "weight"
                )
            );
        }

        if (Object.prototype.hasOwnProperty.call(model, "current_weight")) {
            rows.push(
                metricRow(
                    "Current Weight",
                    formatWeight(model.current_weight),
                    "weight"
                )
            );
        }

        if (Object.prototype.hasOwnProperty.call(model, "action")) {
            rows.push(
                metricRow(
                    "Action",
                    model.action,
                    "action"
                )
            );
        }

        if (rows.length === 0) {
            return "";
        }

        return `
            <div class="report-subsection">
                <div class="report-subsection-title">${escapeHtml(label)}</div>
                <div class="report-metric-list">
                    ${rows.join("")}
                </div>
            </div>
        `;
    };

    const sections = [];

    if (Object.prototype.hasOwnProperty.call(data, "base")) {
        sections.push(
            renderModel("BASE PORTFOLIO", data.base)
        );
    }

    if (Object.prototype.hasOwnProperty.call(data, "premium")) {
        sections.push(
            renderModel("PREMIUM PORTFOLIO", data.premium)
        );
    }

    const content = sections.filter(Boolean).join("");

    if (!content) {
        return "";
    }

    return section(
        "PORTFOLIO DECISION",
        content
    );
}
function renderDecisionRationale(report) {
    const data = report.decision_rationale;
    if (!data || typeof data !== "object") {
        return "";
    }
    const rows = metricRows(data);
    return section(
        "DECISION RATIONALE",
        `<div class="report-metric-list">${rows}</div>`
    );
}
function renderRiskCrisis(report) {
    const data = report.risk_crisis_intelligence;
    if (!data || typeof data !== "object") {
        return "";
    }
    const rows = metricRows(data);
    return section(
        "RISK & CRISIS INTELLIGENCE",
        `<div class="report-metric-list">${rows}</div>`
    );
}
function renderPerformance(report) {
    const data = report.performance;
    if (!data || typeof data !== "object") {
        return "";
    }
    /*
     * Daily Report performance only.
     *
     * Historical backtest is intentionally NOT rendered here.
     */
    const live = data.live || data;
    if (!live || typeof live !== "object") {
        return "";
    }
    const blocks = [];
    ["base", "premium"].forEach(model => {
        if (!live[model] || typeof live[model] !== "object") {
            return;
        }
        const rows = metricRows(live[model]);
        blocks.push(`
            <div class="report-performance-model">
                <div class="report-subheading">
                    ${escapeHtml(model.toUpperCase())} PORTFOLIO
                </div>
                <div class="report-metric-list">
                    ${rows}
                </div>
            </div>
        `);
    });
    if (blocks.length === 0) {
        return "";
    }
    return section(
        "CURRENT SIMULATION PERFORMANCE",
        blocks.join("")
    );
}
function renderViewChangeConditions(report) {
    const data = report.view_change_conditions;
    if (!data || typeof data !== "object") {
        return "";
    }
    const rows = metricRows(data);
    return section(
        "WHEN TO PAY ATTENTION",
        `<div class="report-metric-list">${rows}</div>`
    );
}
function renderDisclosure(report) {
    const data = report.disclosure;
    if (!data || typeof data !== "object") {
        return "";
    }
    const rows = metricRows(data);
    return section(
        "DISCLOSURE",
        `<div class="report-metric-list">${rows}</div>`
    );
}
function renderReport(report) {
    const parts = [];
    parts.push(renderExecutiveBrief(report));
    parts.push(renderMarketEnvironment(report));
    parts.push(renderGCREAssessment(report));
    parts.push(renderPortfolioDecision(report));
    parts.push(renderDecisionRationale(report));
    parts.push(renderRiskCrisis(report));
    /*
     * Historical Evidence is deliberately NOT rendered.
     *
     * Historical backtest belongs to the static historical
     * performance layer, not the Daily Premium Report.
     */
    parts.push(renderPerformance(report));
    parts.push(renderViewChangeConditions(report));
    parts.push(renderDisclosure(report));
    reportContent.innerHTML = parts
        .filter(Boolean)
        .join("");
    reportStatus.textContent = "REAL GCRE PREMIUM REPORT";
    reportStatus.classList.add("report-loaded");
}
function validateReport(report) {
    if (!report || typeof report !== "object") {
        throw new Error("Report is not a valid JSON object.");
    }
    const missing = REQUIRED_FIELDS.filter(
        field => !Object.prototype.hasOwnProperty.call(report, field)
    );
    if (missing.length > 0) {
        throw new Error(
            `Missing required report fields: ${missing.join(", ")}`
        );
    }
    return true;
}
async function loadReport() {
    try {
        reportStatus.textContent = "Loading GCRE Premium report...";
        const response = await fetch(REPORT_URL, {
            cache: "no-store"
        });
        if (!response.ok) {
            throw new Error(
                `HTTP ${response.status} while loading report.`
            );
        }
        const report = await response.json();
        validateReport(report);
        renderReport(report);
    } catch (error) {
        console.error("GCRE Premium report load failed:", error);
        reportStatus.textContent = "REPORT UNAVAILABLE";
        reportContent.innerHTML = `
            <div class="report-error">
                <strong>Report data unavailable.</strong>
                <p>
                    The GCRE Premium report could not be loaded.
                    Please open this page through the GCRE Web server.
                </p>
            </div>
        `;
    }
}
document.addEventListener("DOMContentLoaded", loadReport);
