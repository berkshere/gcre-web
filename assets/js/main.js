const DATA_URL = "data/historical_backtest_display_v1.json";
const SERIES_META = {
    base: {
        label: "BASE Portfolio",
        color: "#d9b56d"
    },
    premium: {
        label: "PREMIUM Portfolio",
        color: "#e8edf3"
    },
    qqq: {
        label: "QQQ",
        color: "#5d89b8"
    },
    tqqq: {
        label: "TQQQ",
        color: "#bd6f6f"
    }
};
const canvas = document.getElementById("historicalChart");
async function loadHistoricalData() {
    if (!canvas) return;
    try {
        const response = await fetch(DATA_URL, { cache: "no-store" });
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();
        if (
            data.basis !== "INDEXED_NAV" ||
            Number(data.initial_value) !== 1 ||
            !Array.isArray(data.series)
        ) {
            throw new Error("Invalid historical data schema.");
        }
        const series = data.series
            .filter(s => SERIES_META[s.id])
            .map(s => ({
                id: s.id,
                label: SERIES_META[s.id].label,
                color: SERIES_META[s.id].color,
                data: Array.isArray(s.data)
                    ? s.data
                        .filter(p =>
                            p &&
                            typeof p.date === "string" &&
                            Number.isFinite(Number(p.value))
                        )
                        .map(p => ({
                            date: p.date,
                            value: Number(p.value)
                        }))
                    : []
            }));
        if (series.length !== 4 || series.some(s => s.data.length === 0)) {
            throw new Error("Historical series data is incomplete.");
        }
        drawChart(canvas, series);
        console.log(
            "GCRE Historical Backtest loaded:",
            data.period.start,
            "->",
            data.period.end
        );
    } catch (error) {
        console.error("Historical data load failed:", error);
        drawUnavailable(canvas);
    }
}
function drawUnavailable(canvas) {
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(600, Math.floor(rect.width || 900));
    const height = 420;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#8d96a5";
    ctx.font = "16px Arial";
    ctx.textAlign = "center";
    ctx.fillText(
        "Historical data unavailable.",
        width / 2,
        height / 2
    );
}
function drawChart(canvas, series) {
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(600, Math.floor(rect.width || 900));
    const height = 420;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    const padding = {
        top: 35,
        right: 30,
        bottom: 55,
        left: 65
    };
    const chartWidth =
        width - padding.left - padding.right;
    const chartHeight =
        height - padding.top - padding.bottom;
    const allValues = series.flatMap(s =>
        s.data.map(p => p.value)
    );
    const minValue = Math.min(...allValues);
    const maxValue = Math.max(...allValues);
    const yMin = Math.max(
        0,
        minValue - (maxValue - minValue) * 0.05
    );
    const yMax =
        maxValue + (maxValue - minValue) * 0.05;
    const count = series[0].data.length;
    function x(index) {
        return padding.left +
            (index / (count - 1)) * chartWidth;
    }
    function y(value) {
        return padding.top +
            (1 - (value - yMin) / (yMax - yMin)) *
            chartHeight;
    }
    ctx.font = "12px Arial";
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    const gridLines = 5;
    for (let i = 0; i <= gridLines; i++) {
        const value =
            yMin + (yMax - yMin) * (i / gridLines);
        const yy = y(value);
        ctx.strokeStyle = "#263142";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(padding.left, yy);
        ctx.lineTo(width - padding.right, yy);
        ctx.stroke();
        ctx.fillStyle = "#8d96a5";
        ctx.fillText(
            value.toFixed(1),
            padding.left - 10,
            yy
        );
    }
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    const yearIndexes = [];
    let lastYear = null;
    series[0].data.forEach((point, index) => {
        const year = point.date.substring(0, 4);
        if (year !== lastYear) {
            yearIndexes.push({
                index,
                year
            });
            lastYear = year;
        }
    });
    yearIndexes.forEach(item => {
        const xx = x(item.index);
        ctx.strokeStyle = "#202938";
        ctx.beginPath();
        ctx.moveTo(xx, padding.top);
        ctx.lineTo(xx, height - padding.bottom);
        ctx.stroke();
        ctx.fillStyle = "#8d96a5";
        ctx.fillText(
            item.year,
            xx,
            height - padding.bottom + 15
        );
    });
    series.forEach(s => {
        if (!s.data.length) return;
        ctx.strokeStyle = s.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        s.data.forEach((point, index) => {
            const xx = x(index);
            const yy = y(point.value);
            if (index === 0) {
                ctx.moveTo(xx, yy);
            } else {
                ctx.lineTo(xx, yy);
            }
        });
        ctx.stroke();
    });
    const legendY = 18;
    let legendX = padding.left;
    ctx.font = "12px Arial";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    series.forEach(s => {
        ctx.fillStyle = s.color;
        ctx.fillRect(
            legendX,
            legendY - 5,
            18,
            3
        );
        ctx.fillStyle = "#c7ced8";
        ctx.fillText(
            s.label,
            legendX + 25,
            legendY - 3
        );
        legendX +=
            25 +
            ctx.measureText(s.label).width +
            35;
    });
}
window.addEventListener("resize", loadHistoricalData);
loadHistoricalData();
