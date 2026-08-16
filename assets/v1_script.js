fetch("reports/latest.json")

.then(response => response.json())

.then(data => {


    /*
    =========================
    Model Overview
    =========================
    */


    let startDate =
    document.getElementById("start-date");


    if(startDate){

        startDate.innerHTML =
        data.model.start_date;

    }



    let runningDays =
    document.getElementById("running-days");


    if(runningDays){

        runningDays.innerHTML =
        data.model.running_days;

    }



    let nav =
    document.getElementById("nav");


    if(nav){

        nav.innerHTML =
        data.model.current_nav;

    }





    /*
    =========================
    Performance
    =========================
    */


    let gcreReturn =
    document.getElementById("gcre-return");


    if(gcreReturn){

        gcreReturn.innerHTML =
        data.performance.gcre_return;

    }



    let qqqReturn =
    document.getElementById("qqq-return");


    if(qqqReturn){

        qqqReturn.innerHTML =
        data.performance.qqq_return;

    }



    let alpha =
    document.getElementById("alpha");


    if(alpha){

        alpha.innerHTML =
        data.performance.alpha;

    }





    /*
    =========================
    Market Regime
    =========================
    */


    let vix =
    document.getElementById("vix");


    if(vix){

        vix.innerHTML =
        data.market.vix;

    }



    let move =
    document.getElementById("move");


    if(move){

        move.innerHTML =
        data.market.move;

    }



    let trend =
    document.getElementById("trend");


    if(trend){

        trend.innerHTML =
        data.market.trend;

    }



    let regime =
    document.getElementById("regime");


    if(regime){

        regime.innerHTML =
        data.market.regime;

    }



    let risk =
    document.getElementById("risk");


    if(risk){

        risk.innerHTML =
        data.market.risk;

    }



    let exposure =
    document.getElementById("exposure");


    if(exposure){

        exposure.innerHTML =
        data.market.exposure;

    }
    /*
=========================
Macro Risk Dashboard
=========================
*/


let us10y =
document.getElementById("us10y");


if(us10y){

us10y.innerHTML =
data.macro.us10y;

}



let us02y =
document.getElementById("us02y");


if(us02y){

us02y.innerHTML =
data.macro.us02y;

}



let hyOas =
document.getElementById("hy-oas");


if(hyOas){

hyOas.innerHTML =
data.macro.hy_oas;

}



let macroVix =
document.getElementById("macro-vix");


if(macroVix){

macroVix.innerHTML =
data.macro.vix;

}



let macroMove =
document.getElementById("macro-move");


if(macroMove){

macroMove.innerHTML =
data.macro.move;

}



let fedRegime =
document.getElementById("fed-regime");


if(fedRegime){

fedRegime.innerHTML =
data.macro.fed_regime;

}




    /*
    =========================
    Latest Report
    =========================
    */


    let latestReport =
    document.getElementById("latest-report");


    if(latestReport){

        latestReport.innerHTML =
        data.date + 
        " GCRE Daily Report";

    }


    /*
=========================
Portfolio Allocation
=========================
*/


let portfolioTable =
document.getElementById(
"portfolio"
);



if(portfolioTable){


let html="";


data.portfolio.forEach(
item=>{


html +=

`
<tr>

<td>
${item.symbol}
</td>




<td>
${item.weight}
</td>


<td>
${item.direction}
</td>


</tr>
`;


});


portfolioTable.innerHTML=html;


}



})






.catch(error => {


    console.error(
        "GCRE data loading error:",
        error
    );


});