/*
========================================================
GCRE WEB
assets/script.js

用途：
1. 读取 reports/web_data.json
2. 动态更新 Home 首页
3. 动态更新 Latest 页面
4. 动态更新 Archive 页面
5. 统一处理数据格式
========================================================
*/

const DATA_URL = "./reports/web_data.json";


/* ======================================================
   基础工具
====================================================== */

function $(id) {
    return document.getElementById(id);
}


function formatNumber(value, decimals = 2) {
    if (value === null || value === undefined || value === "" || Number.isNaN(Number(value))) {
        return "--";
    }

    return Number(value).toFixed(decimals);
}


function formatPercent(value, decimals = 2) {
    if (value === null || value === undefined || value === "" || Number.isNaN(Number(value))) {
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


function formatDateTime(value) {
    if (!value) {
        return "--";
    }

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
        return value;
    }

    return date.toLocaleString();
}


function safeValue(value, fallback = "--") {
    if (value === null || value === undefined || value === "") {
        return fallback;
    }

    return value;
}


/* ======================================================
   页面状态
====================================================== */

function setText(id, value) {
    const element = $(id);

    if (!element) {
        return;
    }

    element.textContent = safeValue(value);
}


function setHTML(id, value) {
    const element = $(id);

    if (!element) {
        return;
    }

    element.innerHTML = value;
}


/* ======================================================
   API / JSON
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

        const data = await response.json();

        console.log("GCRE web data loaded:", data);

        window.GCRE_DATA = data;

        updatePage(data);

        return data;

    } catch (error) {

        console.error("GCRE data loading error:", error);

        showDataError();

        return null;
    }
}


/* ======================================================
   页面自动识别
====================================================== */

function updatePage(data) {

    const path = window.location.pathname.toLowerCase();

    updateGlobalElements(data);

    if (
        path.endsWith("/") ||
        path.endsWith("/index.html") ||
        path.endsWith("index.html")
    ) {
        updateHomePage(data);
    }

    if (
        path.includes("latest")
    ) {
        updateLatestPage(data);
    }

    if (
        path.includes("archive")
    ) {
        updateArchivePage(data);
    }

}


/* ======================================================
   Global
====================================================== */

function updateGlobalElements(data) {

    const model = data.model || {};
    const performance = data.performance || {};
    const nav = data.nav || {};
    const macro = data.macro || {};


    /*
    Model Name
    */

    setText(
        "model-name",
        safeValue(
            model.name,
            "Global Capital Regime Engine V1"
        )
    );


    /*
    NAV
    */

    if (nav.nav !== undefined) {

        setText(
            "nav-value",
            formatNumber(nav.nav, 4)
        );

    }


    /*
    Return
    */

    if (performance.return !== undefined) {

        setText(
            "return-value",
            formatPercent(performance.return)
        );

    }


    /*
    VIX
    */

    if (macro.vix !== undefined) {

        setText(
            "vix-value",
            formatNumber(macro.vix, 2)
        );

    }


    /*
    MOVE
    */

    if (macro.move !== undefined) {

        setText(
            "move-value",
            formatNumber(macro.move, 2)
        );

    }

}


/* ======================================================
   HOME PAGE
====================================================== */

function updateHomePage(data) {

    const model = data.model || {};
    const performance = data.performance || {};
    const nav = data.nav || {};
    const macro = data.macro || {};
    const simulation = data.simulation || {};


    /*
    Model
    */

    setText(
        "model-name",
        model.name + " " + model.version
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



    /*
    NAV
    */

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



    /*
    Performance
    */

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



    /*
    Portfolio
    */

    updatePortfolio(
        data.portfolio
    );



    /*
    Macro
    */

    updateMacroDashboard(
        macro
    );



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
        !Array.isArray(portfolio)
        ||
        portfolio.length === 0
    ) {

        container.innerHTML =
        `
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
                position.symbol ||
                "--";


            const weight =
                Number(
                    position.weight || 0
                );



            html +=
            `
            <div class="portfolio-row">


                <div class="portfolio-symbol">

                    ${symbol}

                </div>


                <div class="portfolio-bar-container">


                    <div
                    class="portfolio-bar"
                    style="
                    width:${weight}%
                    ">
                    </div>


                </div>



                <div class="portfolio-weight">

                    ${weight.toFixed(1)}%

                </div>


            </div>
            `;


        }
    );



    container.innerHTML = html;


}

/* ======================================================
   MACRO DASHBOARD
====================================================== */

function updateMacroDashboard(macro) {

    /*
    10Y
    */

    setText(
        "macro-10y",
        formatNumber(
            macro.us10y ??
            macro.ten_year ??
            macro.yield_10y,
            2
        )
    );


    /*
    2Y
    */

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


    /*
    VIX
    */

    setText(
        "macro-vix",
        formatNumber(
            macro.vix,
            2
        )
    );


    /*
    MOVE
    */

    setText(
        "macro-move",
        formatNumber(
            macro.move,
            2
        )
    );


    /*
    HY OAS
    */

    setText(
        "macro-hy-oas",
        formatNumber(
            macro.hy_oas ??
            macro.hyOAS,
            2
        )
    );


    /*
    Fed Regime
    */

    setText(
        "macro-fed-regime",
        safeValue(
            macro.fed_regime ??
            macro.fed_regime ??
            macro.regime
        )
    );


    /*
    Economic Cycle
    */

    setText(
        "macro-cycle",
        safeValue(
            macro.cycle ??
            macro.cycle
        )
    );


    /*
    Market Trend
    */

    setText(
        "macro-trend",
        safeValue(
            macro.trend
        )
    );


    /*
    Liquidity Adjustment
    */

    const liquidity =
        macro.liquidity_adjustment ??
        macro.liquidity_adjustment;


    if (liquidity !== undefined) {

        setText(
            "macro-liquidity",
            formatNumber(
                liquidity,
                2
            )
        );

    }


    /*
    Inflection Score
    */

    setText(
        "macro-inflection",
        formatNumber(
            macro.inflection_score ??
            macro.inflection_score,
            2
        )
    );

}


/* ======================================================
   LATEST PAGE
====================================================== */

function updateLatestPage(data) {

    const report = data.latest_report || data.report || {};


    setText(
        "latest-report-date",
        formatDate(
            report.date ||
            data.date
        )
    );


    setText(
        "latest-nav",
        formatNumber(
            report.nav ||
            data.nav?.nav,
            4
        )
    );


    setText(
        "latest-return",
        formatPercent(
            report.return ||
            data.performance?.return
        )
    );


    setText(
        "latest-regime",
        safeValue(
            report.regime ||
            data.macro?.regime
        )
    );


    setText(
        "latest-vix",
        formatNumber(
            report.vix ||
            data.macro?.vix,
            2
        )
    );

}


/* ======================================================
   ARCHIVE PAGE
====================================================== */

function updateArchivePage(data) {

    const archive =
        data.archive ||
        data.report_archive ||
        [];


    const container =
        $("archive-list");


    if (!container) {
        return;
    }


    if (!Array.isArray(archive) || archive.length === 0) {

        container.innerHTML = `
            <div class="empty-state">
                No archived reports available
            </div>
        `;

        return;
    }


    let html = "";


    archive.forEach(item => {

        const date =
            item.date ||
            item.report_date ||
            "--";


        const file =
            item.file ||
            item.report_file ||
            "";


        const nav =
            item.nav;


        html += `
            <div class="archive-row">

                <div class="archive-date">
                    ${formatDate(date)}
                </div>

                <div class="archive-nav">
                    ${
                        nav !== undefined
                            ? formatNumber(nav, 4)
                            : "--"
                    }
                </div>

                <div class="archive-link">

                    ${
                        file
                            ? `<a href="./reports/${file}" target="_blank">
                                View Report
                               </a>`
                            : "--"
                    }

                </div>

            </div>
        `;

    });


    container.innerHTML = html;

}


/* ======================================================
   Error
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
        "macro-hy-oas"
    ];


    elements.forEach(id => {

        const element = $(id);

        if (element) {
            element.textContent = "--";
        }

    });

}


/* ======================================================
   自动加载
====================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadWebData();

    }
);