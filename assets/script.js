/*
========================================================
GCRE WEB
assets/script.js
V2

用途：

1. 读取 reports/web_data.json
2. 按 web_data.json V2 数据契约更新 Home
3. 更新 Portfolio Allocation
4. 更新 Macro Environment
5. 更新 Performance
6. 保持 null -> "--"
7. 不推导 Engine 未提供的数据
8. 不依赖第三方 CDN
9. 不负责 Latest Markdown Report
========================================================
*/


const DATA_URL = "./reports/web_data.json";



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
   Input is already expressed in percentage points.
   Example:
       3.8181 -> 3.82%
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
   WEIGHT
   V2 portfolio weights are decimals.
   Example:
       0.25 -> 25.0%
====================================================== */

function formatWeight(
    value,
    decimals = 1
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
        Number(value * 100).toFixed(decimals)
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


        const response = await fetch(
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
            "GCRE: web_data.json V2 loaded",
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
   HOME PAGE
====================================================== */

function updateHomePage(data) {

    console.log(
        "GCRE: updating Home Dashboard V2"
    );


    /*
    ------------------------------------------------------
    V2 DATA CONTRACT
    ------------------------------------------------------

    model
    as_of
    decision
    macro_environment
    portfolio[]
    performance
    benchmark
    tracking
    data_quality
    ------------------------------------------------------
    */


    const model =
        data.model || {};


    const asOf =
        data.as_of || {};


    const decision =
        data.decision || {};


    const performance =
        data.performance || {};


    const macroEnvironment =
        data.macro_environment || {};



    /* ==================================================
       MODEL
    ================================================== */

    const modelName =
        safeValue(
            model.name,
            "Global Capital Regime Engine"
        );


    setText(
        "model-name",
        modelName
    );


    setText(
        "model-start-date",
        formatDate(
            performance.start_date
        )
    );


    setText(
        "model-running-days",
        performance.running_days
    );



    /* ==================================================
       CURRENT REGIME
       V2:
       decision.macro_regime
    ================================================== */

    setText(
        "macro-regime",
        decision.macro_regime
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
            asOf.nav
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
       MACRO ENVIRONMENT
    ================================================== */

    updateMacroDashboard(
        macroEnvironment,
        decision
    );



    /* ==================================================
       OPTIONAL TRACKING
    ================================================== */

    updateTracking(
        data.tracking
    );



    /* ==================================================
       LAST UPDATED
    ================================================== */

    /*
    Do NOT use macro.date.
    V2 does not contain macro.date.

    Prefer macro as_of for a generic last-updated field
    only if the corresponding DOM element exists.
    */

    setText(
        "last-updated",
        formatDate(
            asOf.macro
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

            /*
            V2:
                asset
                final_weight

            Do NOT use:
                symbol
                weight
            */


            const asset =
                safeValue(
                    position.asset,
                    "--"
                );


            const weight =
                Number(
                    position.final_weight
                );


            const validWeight =
                Number.isFinite(weight)
                    ? weight
                    : null;


            /*
            CSS bar width is percentage.

            V2 weight:
                0.25

            CSS width:
                25
            */


            const width =
                validWeight === null
                    ? 0
                    : Math.max(
                        0,
                        Math.min(
                            100,
                            validWeight * 100
                        )
                    );


            const displayWeight =
                formatWeight(
                    validWeight,
                    1
                );



            html += `

                <div class="portfolio-row">

                    <div class="portfolio-symbol">
                        ${asset}
                    </div>


                    <div class="portfolio-bar-container">

                        <div
                            class="portfolio-bar"
                            style="width:${width}%"
                        ></div>

                    </div>


                    <div class="portfolio-weight">

                        ${displayWeight}

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
    macro,
    decision
) {


    /* ================================================
       US 10Y
       V2:
       macro_environment.us10y
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
       V2:
       macro_environment.us02y
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
       V2:
       decision.fed_regime

       NOT:
       macro.fed_regime
    ================================================ */

    setText(
        "macro-fed-regime",
        decision.fed_regime
    );



    /* ================================================
       ECONOMIC CYCLE
       V2:
       decision.economic_cycle
    ================================================ */

    setText(
        "macro-cycle",
        decision.economic_cycle
    );



    /* ================================================
       MARKET CONDITION
       V2:
       decision.market_condition

       Optional DOM element.
       Current index.html does not contain it yet.
    ================================================ */

    setText(
        "macro-market-condition",
        decision.market_condition
    );



    /* ================================================
       MARKET TREND
       V2:
       macro_environment.market_trend
    ================================================ */

    setText(
        "macro-trend",
        macro.market_trend
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



    /* ================================================
       CRISIS STATE
       V2:
       decision.crisis_state

       Optional DOM element.
       Current value is null.
       Therefore:
           --
    ================================================ */

    setText(
        "macro-crisis-state",
        decision.crisis_state
    );



    /* ================================================
       YIELD CURVE
       V2:
       macro_environment.yield_curve_10y2y

       Current value is null.

       We intentionally DO NOT calculate:
           us10y - us02y
    ================================================ */

    setText(
        "macro-yield-curve",
        formatNumber(
            macro.yield_curve_10y2y,
            2
        )
    );

}



/* ======================================================
   TRACKING
====================================================== */

function updateTracking(
    tracking
) {

    const data =
        tracking || {};


    /*
    Current V2:

        available = false
        latest_decision_date = null
        decision_count = null

    Therefore all unavailable values remain "--"
    unless a corresponding DOM element exists.
    */


    setText(
        "tracking-available",
        data.available
    );


    setText(
        "tracking-date",
        formatDate(
            data.latest_decision_date
        )
    );


    setText(
        "tracking-count",
        data.decision_count
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

        "macro-regime",

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

        "macro-market-condition",

        "macro-trend",

        "macro-liquidity",

        "macro-inflection",

        "macro-crisis-state",

        "macro-yield-curve",

        "tracking-available",

        "tracking-date",

        "tracking-count",

        "last-updated"

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
            "GCRE: Dashboard V2 starting..."
        );


        loadWebData();

    }
);