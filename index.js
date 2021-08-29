console.log("HELLO");

// SI
var output = document.querySelector("#output");
var Principle = document.querySelector("#Principle");
var Rate = document.querySelector("#Rate");
var Time = document.querySelector("#Time");
var calculate = document.querySelector(".calculate");

if(calculate){
calculate.addEventListener('click',function calculate() {
    var SI = (Principle.value*Rate.value*Time.value)/100;
    output.innerText = "Your Simple Interest is : " + SI;
}
);
}

// CI
var output1 = document.querySelector("#output1");
var principle_ci = document.querySelector("#principle_ci");
var rate_ci = document.querySelector("#rate_ci");
var time_ci = document.querySelector("#time_ci");
var N = document.querySelector("#N");
var calculateci = document.querySelector(".calculateci");

if(calculateci) {
calculateci.addEventListener('click',function calculateci() {
    var X = Math.pow(1 + (rate_ci.value/N.value*100) , (N.value*time_ci.value));
    var CI = (principle_ci.value*X).toPrecision(2);
    output1.innerText = "Your Coumpound Interest is : " + CI;
}
);
}



