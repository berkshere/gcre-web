/*
========================================================
GCRE WEB
assets/script.js
V2

用途：

1. 读取 reports/web_data.json
2. 更新 Home / Research Page
3. 更新 Performance
4. 更新 Portfolio Allocation
5. 更新 Macro Environment
6. 不负责 Latest Markdown Report
7. 不依赖第三方 CDN
========================================================
*/


const DATA_URL = "./reports/web_data_v32_example.json";



/* ======================================================
   DOM
====================================================== */

function $(id) {

    return document.getElementById(id);

}



/* ======================================================
   SAFE VALUE
====================================================== */

function safeValue(value, fallback = "--") {

    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {

        return fallback;

    }

    return value;

}



/* ======================================================
   NUMBER
====================================================== */

function formatNumber(
    value,
    decimals = 2
) {

    if (
        value === null ||
        value === undefined ||
        value === "" ||
        Number.isNaN(Number(value))
    ) {

        return "--";

    }

    return Number(value).toFixed(decimals);

}



/* ======================================================
   PERCENT
====================================================== */

function formatPercent(
    value,
    decimals = 2
) {

    if (
        value === null ||
        value === undefined ||
        value === "" ||
        Number.isNaN(Number(value))
    ) {

        return "--";

    }

    return (
        Number(value).toFixed(decimals)
        + "%"
    );

}



/* ======================================================
   DATE
====================================================== */

function formatDate(value) {

    if (!value) {

        return "--";

    }


    const date = new Date(value);


    if (
        Number.isNaN(
            date.getTime()
        )
    ) {

        return String(value);

    }


    return date
        .toISOString()
        .slice(0, 10);

}



/* ======================================================
   SET TEXT
====================================================== */

function setText(
    id,
    value,
    fallback = "--"
) {

    const element = $(id);


    if (!element) {

        return;

    }


    element.textContent =
        safeValue(
            value,
            fallback
        );

}



/* ======================================================
   LOAD JSON
====================================================== */

async function loadWebData() {

    try {

        console.log(
            "GCRE: loading:",
            DATA_URL
        );


        const response =
            await fetch(
                DATA_URL + "?t=" + Date.now(),
                {
                    cache: "no-store"
                }
            );


        if (!response.ok) {

            throw new Error(
                "HTTP " +
                response.status
            );

        }


        const data =
            await response.json();


        console.log(
            "GCRE: web_data.json loaded",
            data
        );


        window.GCRE_DATA =
            data;


        updateHomePage(
            data
        );


    }
    catch (error) {

        console.error(
            "GCRE DATA ERROR:",
            error
        );


        showDataError(
            error
        );

    }

}



/* ======================================================
   HOME / RESEARCH PAGE
====================================================== */

function updateHomePage(data) {

    console.log(
        "GCRE: updating page"
    );


    const model =
        data.model || {};


    const performance =
        data.performance || {};


    const macro =
        data.macro_environment || {};


    /* ==================================================
       MODEL
    ================================================== */

    const modelName =
        [
            safeValue(
                model.name,
                "Global Capital Regime Engine"
            ),

            model.version
                ? "V" + model.version
                : ""

        ]
        .filter(Boolean)
        .join(" ");


    setText(
        "model-name",
        modelName
    );


    /* ==================================================
       PERFORMANCE PERIOD
    ================================================== */

    setText(
        "model-start-date",
        formatDate(
            performance.start_date
        )
    );


    setText(
        "model-running-days",
        safeValue(
            performance.running_days
        )
    );


    /* ==================================================
       NAV
    ================================================== */

    setText(
        "home-nav",
        formatNumber(
            performance.nav,
            4
        )
    );


    setText(
        "home-nav-date",
        formatDate(
            data.as_of
                ? data.as_of.nav
                : performance.end_date
        )
    );


    /* ==================================================
       PERFORMANCE
    ================================================== */

    setText(
        "home-return",
        formatPercent(
            performance.total_return,
            2
        )
    );


    setText(
        "home-cagr",
        formatPercent(
            performance.cagr,
            2
        )
    );


    setText(
        "home-sharpe",
        formatNumber(
            performance.sharpe_ratio,
            2
        )
    );


    setText(
        "home-max-drawdown",
        formatPercent(
            performance.max_drawdown,
            2
        )
    );


    /* ==================================================
       PORTFOLIO
    ================================================== */

    updatePortfolio(
        data.portfolio
    );


    /* ==================================================
       MACRO
    ================================================== */

    updateMacroDashboard(
        macro
    );


    /* ==================================================
       LAST UPDATED
    ================================================== */

    setText(
        "last-updated",
        formatDate(
            data.as_of
                ? data.as_of.macro
                : null
        )
    );

}



/* ======================================================
   PORTFOLIO
====================================================== */

function updatePortfolio(
    portfolio
) {

    const container =
        $("portfolio-allocation");


    if (!container) {

        return;

    }


    if (
        !Array.isArray(portfolio)
        ||
        portfolio.length === 0
    ) {

        container.innerHTML = `
            <div class="empty-state">
                No portfolio allocation data
            </div>
        `;

        return;

    }


    let html = "";


    portfolio.forEach(
        position => {


            const symbol =
                safeValue(
                    position.asset,
                    "--"
                );


            const weight =
                Number(
                    position.final_weight || 0
                );


            /*
            final_weight is stored as decimal:

            0.25 = 25%
            0.20 = 20%
            */

            const percentage =
                weight * 100;


            const width =
                Math.max(
                    0,
                    Math.min(
                        100,
                        percentage
                    )
                );


            html += `

                <div class="portfolio-row">

                    <div class="portfolio-symbol">
                        ${symbol}
                    </div>


                    <div class="portfolio-bar-container">

                        <div
                            class="portfolio-bar"
                            style="width:${width}%"
                        ></div>

                    </div>


                    <div class="portfolio-weight">

                        ${percentage.toFixed(1)}%

                    </div>

                </div>

            `;

        }
    );


    container.innerHTML =
        html;

}



/* ======================================================
   MACRO DASHBOARD
====================================================== */

function updateMacroDashboard(
    macro
) {


    /* ================================================
       US 10Y
    ================================================ */

    setText(
        "macro-10y",
        formatNumber(
            macro.us10y,
            2
        )
    );


    /* ================================================
       US 2Y
    ================================================ */

    setText(
        "macro-2y",
        formatNumber(
            macro.us02y,
            2
        )
    );


    /* ================================================
       VIX
    ================================================ */

    setText(
        "macro-vix",
        formatNumber(
            macro.vix,
            2
        )
    );


    /* ================================================
       MOVE
    ================================================ */

    setText(
        "macro-move",
        formatNumber(
            macro.move,
            2
        )
    );


    /* ================================================
       HY OAS
    ================================================ */

    setText(
        "macro-hy-oas",
        formatNumber(
            macro.hy_oas,
            2
        )
    );


    /* ================================================
       FED REGIME
    ================================================ */

    setText(
        "macro-fed-regime",
        safeValue(
            macro.fed_regime
        )
    );


    /* ================================================
       ECONOMIC CYCLE
    ================================================ */

    setText(
        "macro-cycle",
        safeValue(
            macro.economic_cycle
                || macro.cycle
        )
    );


    /* ================================================
       MARKET TREND
    ================================================ */

    setText(
        "macro-trend",
        safeValue(
            macro.market_trend
                || macro.trend
        )
    );


    /* ================================================
       LIQUIDITY
    ================================================ */

    setText(
        "macro-liquidity",
        formatNumber(
            macro.liquidity_adjustment,
            2
        )
    );


    /* ================================================
       INFLECTION
    ================================================ */

    setText(
        "macro-inflection",
        formatNumber(
            macro.inflection_score,
            2
        )
    );

}



/* ======================================================
   ERROR
====================================================== */

function showDataError(
    error
) {

    console.error(
        "GCRE Dashboard failed:",
        error
    );


    const ids = [

        "model-name",

        "model-start-date",

        "model-running-days",

        "home-nav",

        "home-nav-date",

        "home-return",

        "home-cagr",

        "home-sharpe",

        "home-max-drawdown",

        "macro-10y",

        "macro-2y",

        "macro-vix",

        "macro-move",

        "macro-hy-oas",

        "macro-fed-regime",

        "macro-cycle",

        "macro-trend",

        "macro-liquidity",

        "macro-inflection"

    ];


    ids.forEach(
        id => {

            const element =
                $(id);


            if (element) {

                element.textContent =
                    "--";

            }

        }
    );


    const portfolio =
        $("portfolio-allocation");


    if (portfolio) {

        portfolio.innerHTML = `

            <div class="empty-state">

                Unable to load
                web_data.json

            </div>

        `;

    }

}



/* ======================================================
   START
====================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        console.log(
            "GCRE: Dashboard starting..."
        );


        loadWebData();

    }
);