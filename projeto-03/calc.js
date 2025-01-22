// const input1 = document.querySelector("#n1") as HTMLInputElement;
// const input2 = document.querySelector("#n2") as HTMLInputElement;
var btnSoma = document.querySelector("#soma");
var btnSubtracao = document.querySelector("#subtracao");
var somaOuSubtracao = function (calculo) {
    var input1 = document.querySelector("#n1");
    var input2 = document.querySelector("#n2");
    if (calculo === "soma") {
        var divRes = document.querySelector("#res");
        divRes.innerText = "O resultado \u00E9: ".concat(+input1.value + +input2.value);
    }
    else if (calculo === "subtracao") {
        var divRes = document.querySelector("#res");
        divRes.innerText = "O resultado \u00E9: ".concat(+input1.value - +input2.value);
    }
};
btnSoma.addEventListener("click", function () {
    somaOuSubtracao("soma");
});
btnSubtracao.addEventListener("click", function () {
    somaOuSubtracao("subtracao");
});
