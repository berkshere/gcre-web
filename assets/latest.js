/*
========================================================
GCRE WEB

assets/latest.js

用途：

1. 读取 web_data.json
2. 找到 history[] 中最新报告
3. 自动读取对应 .md 文件
4. 使用 marked.js 转换 Markdown → HTML
5. 在 Latest 页面直接呈现完整 Sell-Side Report

数据：

reports/web_data.json

报告：

reports/GCRE_Sell_Side_Report_YYYYMMDD.md
========================================================
*/


const DATA_URL =
    "./reports/web_data.json";



/* ======================================================
   DOM
====================================================== */

function $(id) {

    return document.getElementById(id);

}



/* ======================================================
   工具
====================================================== */

function setText(id, value) {

    const element = $(id);

    if (!element) {
        return;
    }

    if (
        value === undefined ||
        value === null ||
        value === ""
    ) {

        element.textContent = "--";

        return;
    }

    element.textContent = value;

}



function formatNumber(value, decimals = 2) {

    if (
        value === undefined ||
        value === null ||
        value === "" ||
        Number.isNaN(Number(value))
    ) {

        return "--";

    }

    return Number(value).toFixed(decimals);

}



function formatDate(value) {

    if (!value) {
        return "--";
    }

    return String(value).split(" ")[0];

}



/* ======================================================
   LOAD JSON
====================================================== */

async function loadWebData() {

    const response = await fetch(
        `${DATA_URL}?t=${Date.now()}`,
        {
            cache: "no-store"
        }
    );


    if (!response.ok) {

        throw new Error(
            `Unable to load web_data.json (${response.status})`
        );

    }


    return await response.json();

}



/* ======================================================
   FIND LATEST REPORT
====================================================== */

function getLatestHistoryItem(data) {

    if (
        !Array.isArray(data.history) ||
        data.history.length === 0
    ) {

        return null;

    }


    /*
    按日期排序。

    不直接假设 history[] 一定已经排序。
    */

    const history =
        [...data.history].sort(
            (a, b) => {

                const dateA =
                    new Date(
                        a.date || 0
                    ).getTime();

                const dateB =
                    new Date(
                        b.date || 0
                    ).getTime();

                return dateA - dateB;

            }
        );


    return history[
        history.length - 1
    ];

}



/* ======================================================
   LOAD MARKDOWN
====================================================== */

async function loadMarkdown(fileName) {

    if (!fileName) {

        throw new Error(
            "Latest report file was not found."
        );

    }


    const url =
        `./reports/${encodeURIComponent(fileName)}`;


    const response =
        await fetch(
            `${url}?t=${Date.now()}`,
            {
                cache: "no-store"
            }
        );


    if (!response.ok) {

        throw new Error(
            `Unable to load report: ${fileName}`
        );

    }


    return await response.text();

}



/* ======================================================
   RENDER HEADER
====================================================== */

function renderReportHeader(data, historyItem) {

    const nav =
        data.nav || {};

    const macro =
        data.macro || {};


    const reportDate =
        historyItem?.date ||
        macro.date ||
        nav.date;


    const fileName =
        historyItem?.report_file ||
        "--";


    setText(
        "report-date",
        formatDate(reportDate)
    );


    setText(
        "report-nav",
        formatNumber(
            nav.nav,
            4
        )
    );


    setText(
        "report-regime",
        macro.cycle ||
        "--"
    );


    setText(
        "report-file-name",
        fileName
    );



    /*
    Raw report button
    */

    const rawButton =
        $("open-raw-report");


    if (
        rawButton &&
        historyItem?.report_file
    ) {

        const rawUrl =
            `./reports/${encodeURIComponent(
                historyItem.report_file
            )}`;


        rawButton.onclick = () => {

            window.open(
                rawUrl,
                "_blank"
            );

        };

    }

}



/* ======================================================
   RENDER MARKDOWN
====================================================== */

function renderMarkdown(markdown) {

    const container =
        $("report-content");


    if (!container) {
        return;
    }


    /*
    检查 marked 是否正常加载
    */

    if (
        typeof marked === "undefined"
    ) {

        container.innerHTML = `
            <div class="report-error">
                Markdown renderer failed to load.
            </div>
        `;

        return;

    }


    /*
    marked 配置
    */

    marked.setOptions({

        gfm: true,

        breaks: true,

        headerIds: true,

        mangle: false

    });


    /*
    Markdown → HTML
    */

    container.innerHTML =
        marked.parse(markdown);

}



/* ======================================================
   MAIN
====================================================== */

async function loadLatestReport() {

    const container =
        $("report-content");


    try {


        /*
        1.
        读取 web_data.json
        */

        const data =
            await loadWebData();



        /*
        2.
        找到最新 history
        */

        const latest =
            getLatestHistoryItem(
                data
            );


        if (!latest) {

            throw new Error(
                "No report history is available."
            );

        }



        /*
        3.
        页面 Header
        */

        renderReportHeader(
            data,
            latest
        );



        /*
        4.
        读取 Markdown
        */

        const markdown =
            await loadMarkdown(
                latest.report_file
            );



        /*
        5.
        Markdown → HTML
        */

        renderMarkdown(
            markdown
        );



        console.log(
            "Latest GCRE report loaded:",
            latest.report_file
        );


    }
    catch (error) {


        console.error(
            "GCRE Latest Report Error:",
            error
        );


        if (container) {

            container.innerHTML = `
                <div class="report-error">

                    <strong>
                        Unable to load the latest report.
                    </strong>

                    <br><br>

                    ${error.message}

                </div>
            `;

        }

    }

}



/* ======================================================
   START
====================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadLatestReport();

    }
);