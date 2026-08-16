/*
========================================================
GCRE WEB
assets/script.js

用途：

1. 读取 reports/web_data.json
2. 动态更新 Home 首页
3. 动态更新 Archive 页面
4. Latest 页面不做结构化处理
5. Latest 由 latest.html 直接读取完整 Markdown 报告
6. 不生成任何 Dashboard 表格
7. 不生成导航栏
========================================================
*/


const DATA_URL = "./reports/web_data.json";


/* ======================================================
   基础工具
====================================================== */

function $(id) {

    return document.getElementById(id);

}


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


function formatNumber(value, decimals = 2) {

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


function formatPercent(value, decimals = 2) {

    if (
        value === null ||
        value === undefined ||
        value === "" ||
        Number.isNaN(Number(value))
    ) {

        return "--";

    }

    return `${Number(value).toFixed(decimals)}%`;

}


function formatDate(value) {

    if (!value) {

        return "--";

    }


    const date = new Date(value);


    if (Number.isNaN(date.getTime())) {

        return value;

    }


    return date.toISOString().slice(0, 10);

}


/* ======================================================
   DOM
====================================================== */

function setText(id, value) {

    const element = $(id);


    if (!element) {

        return;

    }


    element.textContent =
        safeValue(value);

}


/* ======================================================
   读取 web_data.json
====================================================== */

async function loadWebData() {

    try {

        const response = await fetch(
            `${DATA_URL}?t=${Date.now()}`,
            {
                cache: "no-store"
            }
        );


        if (!response.ok) {

            throw new Error(
                `Failed to load web_data.json: ${response.status}`
            );

        }


        const data =
            await response.json();


        window.GCRE_DATA = data;


        console.log(
            "GCRE web data loaded:",
            data
        );


        updatePage(data);


        return data;


    } catch (error) {

        console.error(
            "GCRE data loading error:",
            error
        );


        showDataError();


        return null;

    }

}


/* ======================================================
   自动识别页面
====================================================== */

function updatePage(data) {

    const path =
        window.location.pathname.toLowerCase();


    /*
    Home
    */

    if (
        path.endsWith("/") ||
        path.endsWith("/index.html")
    ) {

        updateHomePage(data);

    }


    /*
    Archive
    */

    if (
        path.includes("archive")
    ) {

        updateArchivePage(data);

    }


    /*
    Latest

    IMPORTANT:

    Latest 不在这里处理。

    latest.html 自己直接读取最新 Markdown。
    */


}


/* ======================================================
   HOME
====================================================== */

function updateHomePage(data) {

    const model =
        data.model || {};


    const performance =
        data.performance || {};


    const nav =
        data.nav || {};


    const macro =
        data.macro || {};


    const simulation =
        data.simulation || {};


    /* --------------------------------------------------
       Model
    -------------------------------------------------- */

    setText(
        "model-name",
        `${safeValue(model.name, "Global Capital Regime Engine")} ${safeValue(model.version, "")}`.trim()
    );


    setText(
        "model-start-date",
        formatDate(
            simulation.start_date
        )
    );


    setText(
        "model-running-days",
        simulation.running_days
    );


    /* --------------------------------------------------
       NAV
    -------------------------------------------------- */

    setText(
        "home-nav",
        formatNumber(
            nav.nav,
            4
        )
    );


    setText(
        "home-nav-date",
        formatDate(
            nav.date
        )
    );


    /* --------------------------------------------------
       Performance
    -------------------------------------------------- */

    setText(
        "home-return",
        formatPercent(
            performance.return
        )
    );


    setText(
        "home-cagr",
        formatPercent(
            performance.cagr
        )
    );


    setText(
        "home-sharpe",
        formatNumber(
            performance.sharpe,
            2
        )
    );


    setText(
        "home-max-drawdown",
        formatPercent(
            performance.max_drawdown
        )
    );


    /* --------------------------------------------------
       Portfolio
    -------------------------------------------------- */

    updatePortfolio(
        data.portfolio
    );


    /* --------------------------------------------------
       Macro
    -------------------------------------------------- */

    updateMacroDashboard(
        macro
    );


    /* --------------------------------------------------
       Last Updated
    -------------------------------------------------- */

    setText(
        "last-updated",
        formatDate(
            macro.date
        )
    );

}


/* ======================================================
   PORTFOLIO
====================================================== */

function updatePortfolio(portfolio) {

    const container =
        $("portfolio-allocation");


    if (!container) {

        return;

    }


    if (
        !Array.isArray(portfolio) ||
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


    portfolio.forEach(position => {

        const symbol =
            safeValue(
                position.symbol
            );


        const weight =
            Number(
                position.weight || 0
            );


        const width =
            Math.max(
                0,
                Math.min(
                    100,
                    weight
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
                    ${weight.toFixed(1)}%
                </div>

            </div>
        `;

    });


    container.innerHTML =
        html;

}


/* ======================================================
   MACRO DASHBOARD
====================================================== */

function updateMacroDashboard(macro) {

    if (!macro) {

        return;

    }


    /* --------------------------------------------------
       US 10Y
    -------------------------------------------------- */

    setText(
        "macro-10y",
        formatNumber(
            macro.us10y ??
            macro.ten_year ??
            macro.yield_10y,
            2
        )
    );


    /* --------------------------------------------------
       US 2Y
    -------------------------------------------------- */

    setText(
        "macro-2y",
        formatNumber(
            macro.us02y ??
            macro.us2y ??
            macro.two_year ??
            macro.yield_2y,
            2
        )
    );


    /* --------------------------------------------------
       VIX
    -------------------------------------------------- */

    setText(
        "macro-vix",
        formatNumber(
            macro.vix,
            2
        )
    );


    /* --------------------------------------------------
       MOVE
    -------------------------------------------------- */

    setText(
        "macro-move",
        formatNumber(
            macro.move,
            2
        )
    );


    /* --------------------------------------------------
       HY OAS
    -------------------------------------------------- */

    setText(
        "macro-hy-oas",
        formatNumber(
            macro.hy_oas ??
            macro.hyOAS,
            2
        )
    );


    /* --------------------------------------------------
       Fed Regime
    -------------------------------------------------- */

    setText(
        "macro-fed-regime",
        macro.fed_regime ??
        macro.regime
    );


    /* --------------------------------------------------
       Economic Cycle
    -------------------------------------------------- */

    setText(
        "macro-cycle",
        macro.cycle
    );


    /* --------------------------------------------------
       Market Trend
    -------------------------------------------------- */

    setText(
        "macro-trend",
        macro.trend
    );


    /* --------------------------------------------------
       Liquidity Adjustment
    -------------------------------------------------- */

    setText(
        "macro-liquidity",
        formatNumber(
            macro.liquidity_adjustment,
            2
        )
    );


    /* --------------------------------------------------
       Inflection Score
    -------------------------------------------------- */

    setText(
        "macro-inflection",
        formatNumber(
            macro.inflection_score,
            2
        )
    );

}


/* ======================================================
   ARCHIVE
====================================================== */

function updateArchivePage(data) {

    const container =
        $("archive-list");


    if (!container) {

        return;

    }


    /*
    优先使用 history。

    当前 web_data.json：

    history:
    [
        {
            date,
            nav,
            report_file
        }
    ]
    */

    const history =
        Array.isArray(data.history)
            ? [...data.history]
            : [];


    if (history.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                No archived reports available
            </div>
        `;

        return;

    }


    /*
    最新日期在前
    */

    history.sort(
        (a, b) => {

            const da =
                new Date(
                    a.date || 0
                );

            const db =
                new Date(
                    b.date || 0
                );

            return db - da;

        }
    );


    let html = "";


    history.forEach(item => {

        const date =
            formatDate(
                item.date
            );


        const file =
            item.report_file;


        if (!file) {

            return;

        }


        const encodedFile =
            encodeURIComponent(
                file
            );


        html += `
            <div class="archive-row">

                <div class="archive-date">
                    ${date}
                </div>

                <div class="archive-nav">
                    ${
                        item.nav !== undefined
                            ? formatNumber(
                                item.nav,
                                4
                            )
                            : "--"
                    }
                </div>

                <div class="archive-link">

                    <a
                        href="./reports/${encodedFile}"
                    >
                        View Report
                    </a>

                </div>

            </div>
        `;

    });


    if (!html) {

        container.innerHTML = `
            <div class="empty-state">
                No archived reports available
            </div>
        `;

        return;

    }


    container.innerHTML =
        html;

}


/* ======================================================
   ERROR
====================================================== */

function showDataError() {

    const elements = [

        "home-nav",

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


    elements.forEach(id => {

        const element =
            $(id);


        if (element) {

            element.textContent =
                "--";

        }

    });

}


/* ======================================================
   启动
====================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadWebData();

    }
);