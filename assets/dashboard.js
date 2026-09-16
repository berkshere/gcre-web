fetch("./reports/web_data.json")

.then(response => response.json())

.then(data => {


/* =====================
CURRENT ENVIRONMENT
===================== */
/* =====================
META
===================== */


setText(
"market-date",
data.meta.market_date
);

setText(
"env-regime",
data.environment.regime
);

setText(
"env-cycle",
data.environment.economic_cycle
);


setText(
"env-fed",
data.environment.fed_regime
);


setText(
"env-market",
data.environment.market_condition
);


setText(
"env-crisis",
data.environment.crisis_state
);




/* =====================
STAGE 01 MACRO
===================== */


let p=data.macro.parameters;


setText("macro-vix",p.vix);
setText("macro-move",p.move);
setText("macro-hyoas",p.hyoas);
setText("macro-10y",p["10y"]);
setText("macro-2y",p["2y"]);
setText("macro-cpi",p.cpi);
setText("macro-ip",p.ip);
setText("macro-liquidity",p.liquidity);



let j=data.macro.judgement;


setText("macro-decision",j.decision);
setText("macro-growth",j.growth);
setText("macro-inflation",j.inflation);
setText("macro-liquidity-view",j.liquidity);
setText("macro-policy",j.policy);
setText("macro-risk",j.risk);
setText("macro-summary",j.summary);



let ac=data.macro.asset_class;


setText("regime-asset-class",
`
<div>EQUITY ${ac.equity}</div>
<div>GOLD ${ac.gold}</div>
<div>COMMODITY ${ac.commodity}</div>
<div>DURATION ${ac.duration}</div>
<div>SHORT DURATION ${ac.short_duration}</div>
<div>CASH ${ac.cash}</div>
`
);





/* =====================
STAGE 02
===================== */


let t=data.timing.assets;


fillSignal(
"qqq",
t.qqq
);


fillSignal(
"gld",
t.gld
);


fillSignal(
"uso",
t.uso
);



let tj=data.timing.judgement;


setText(
"s2-equity-signal",
tj.equity.signal
);

setText(
"s2-equity-action",
tj.equity.action
);


setText(
"s2-gold-signal",
tj.gold.signal
);

setText(
"s2-gold-action",
tj.gold.action
);


setText(
"s2-commodity-signal",
tj.commodity.signal
);

setText(
"s2-commodity-action",
tj.commodity.action
);


setText(
"s2-summary",
tj.summary
);



fillPortfolio(
"s2-base",
data.timing.base_portfolio
);




/* =====================
STAGE 03
===================== */


let r=data.portfolio.risk;


setText("s3-qqq-risk",r.qqq);
setText("s3-tqqq-risk",r.tqqq);
setText("s3-shny-risk",r.shny);
setText("s3-uco-risk",r.uco);
setText("s3-tmf-risk",r.tmf);
setText("s3-bil-risk",r.bil);

/*
=====================
LEVERAGE ENGINE
=====================
*/


let leverage=data.portfolio.leverage;



setText(
"s3-leverage-score",
leverage.score
);



setText(
"s3-leverage-status",
leverage.status
);

setText(
"s3-leverage-candidate",
leverage.candidate
);
let d=data.portfolio.decision;


setText("s3-current-regime",d.current_regime);
setText("s3-risk-level",d.risk_level);
setText("s3-exposure",d.exposure);
setText("s3-leverage-decision",d.leverage);

setText(
"s3-selected-assets",
d.selected_assets
);


setText(
"s3-portfolio-logic",
d.logic
);



fillPortfolio(
"s3-final",
data.portfolio.final
);





/* =====================
PERFORMANCE
===================== */


let perf=data.performance;


setText("perf-nav",perf.nav);
setText("perf-nav-date",perf.nav_date);
setText("perf-return",perf.return);
setText("perf-cagr",perf.cagr);
setText("perf-sharpe",perf.sharpe);
setText("perf-drawdown",perf.drawdown);
setText("perf-start",perf.start);
setText("perf-days",perf.days);
setText("perf-qqq",perf.benchmark);





/* =====================
EFFICIENCY
===================== */


let ef=data.efficiency;


document.querySelectorAll(
".efficiency-grid strong"
)[0].innerHTML=ef.risk;


document.querySelectorAll(
".efficiency-grid strong"
)[1].innerHTML=ef.exposure;


document.querySelectorAll(
".efficiency-grid strong"
)[2].innerHTML=ef.leverage;


document.querySelectorAll(
".efficiency-grid strong"
)[3].innerHTML=ef.score;




});






function setText(id,value){

let el=document.getElementById(id);

if(el){

el.innerHTML=value;

}

}



function fillSignal(prefix,obj){


setText(
"s2-"+prefix+"-trend",
obj.trend
);


setText(
"s2-"+prefix+"-momentum",
obj.momentum
);


setText(
"s2-"+prefix+"-score",
obj.score
);


}



function fillPortfolio(prefix,obj){


Object.keys(obj).forEach(k=>{


let id;


if(prefix==="s2-base"){

id="s2-base-"+k;

}

else{

id="s3-final-"+k;

}



setText(
id,
obj[k]
);



});

}