// const input1 = document.querySelector("#n1") as HTMLInputElement;
// const input2 = document.querySelector("#n2") as HTMLInputElement;
const btnSoma = document.querySelector("#soma") as HTMLButtonElement;
const btnSubtracao = document.querySelector("#subtracao") as HTMLButtonElement;

const somaOuSubtracao = function (calculo) {
  const input1 = document.querySelector("#n1") as HTMLInputElement;
  const input2 = document.querySelector("#n2") as HTMLInputElement;
  if (calculo === "soma") {
    const divRes = document.querySelector("#res") as HTMLDListElement;
    divRes.innerText = `O resultado é: ${+input1.value + +input2.value}`;
  } else if (calculo === "subtracao") {
    const divRes = document.querySelector("#res") as HTMLDListElement;
    divRes.innerText = `O resultado é: ${+input1.value - +input2.value}`;
  }
};

btnSoma.addEventListener("click", () => {
  somaOuSubtracao("soma");
});

btnSubtracao.addEventListener("click", () => {
  somaOuSubtracao("subtracao");
});
