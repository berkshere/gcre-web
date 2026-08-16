/*
GCRE-Web

Dynamic Dashboard Loader


读取:

reports/web_data.json


更新:

index.html


*/


document.addEventListener(
    "DOMContentLoaded",
    function(){

        loadGCREData();

    }
);





async function loadGCREData(){


    try{


        const response = await fetch(
            "reports/web_data.json"
        );



        const data = await response.json();



        updateModel(data);


        updatePerformance(data);

        updateBenchmark(data);

        updateMacro(data);


        updatePortfolio(data);



    }

    catch(error){


        console.error(
            "GCRE data loading error:",
            error
        );

    }


}







// ========================
// Model
// ========================


function updateModel(data){



    if(data.nav){


        setText(

            "nav",

            data.nav.nav

        );


    }



    if(data.nav){


        setText(

            "start-date",

            data.nav.date

        );


    }



}







// ========================
// Performance
// ========================


function updatePerformance(data){



    if(!data.performance)

        return;



    setText(

        "gcre-return",

        data.performance.return + "%"

    );

    setText(

        "total-return",

        data.performance.return + "%"

    );


    setText(

        "cagr",

        data.performance.cagr + "%"

    );



    setText(

        "sharpe",

        data.performance.sharpe

    );



    setText(

        "max-drawdown",

        data.performance.max_drawdown + "%"

    );


}









// ========================
// Macro Dashboard
// ========================


function updateMacro(data){



    if(!data.macro)

        return;



    setText(

        "vix",

        data.macro.vix

    );



    setText(

        "move",

        data.macro.move

    );



    setText(

        "regime",

        data.macro.cycle

    );



    setText(

        "risk",

        data.macro.risk_state

    );


}







// ========================
// Portfolio
// ========================


function updatePortfolio(data){



    const box =
    document.getElementById(
        "portfolio"
    );



    if(!box)

        return;



    box.innerHTML="";



    data.portfolio.forEach(

        item=>{


            let div =
            document.createElement(
                "div"
            );



            div.className="portfolio-item";



            div.innerHTML=`

            <span>
            ${item.symbol}
            </span>


            <span>
            ${item.weight}%
            </span>

            `;



            box.appendChild(
                div
            );


        }

    );


}







function setText(id,value){



    const element =
    document.getElementById(id);



    if(element){

        element.innerHTML =
        value ?? "--";

    }


}


function updateBenchmark(data){


    if(!data.benchmark)

        return;



    setText(

        "gcre-return",

        data.benchmark.gcre_return + "%"

    );


    setText(

        "qqq-return",

        data.benchmark.qqq_return + "%"

    );


    setText(

        "alpha",

        data.benchmark.alpha + "%"

    );


}


function updateRisk(data){


if(!data.risk)

return;


setText(
"exposure",
(data.risk.exposure*100).toFixed(1)+"%"
);


setText(
"cash-weight",
(data.risk.cash_weight*100).toFixed(1)+"%"
);


setText(
"drawdown",
(data.risk.drawdown*100).toFixed(2)+"%"
);


setText(
"inflection-score",
data.risk.inflection_score
);


setText(
"reversal-warning",
data.risk.reversal_warning
);


}