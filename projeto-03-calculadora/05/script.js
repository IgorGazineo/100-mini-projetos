import numberGenerator from "./numberGenerator.js";

const inputEl = document.querySelector("input");
inputEl.addEventListener("keyup", (event) => {
  const ulEl = document.querySelector("ul");

  if (event.key === "Enter") {
    const numberAmount = +inputEl.value;
    ulEl.innerHTML = "";
    for (let i = 1; i <= numberAmount; i++) {
      const number = numberGenerator();
      const numberParsed = number === 10 ? number : `0${number}`;
      ulEl.innerHTML += `<li>${i < 10 ? `0${i}` : i}- Número: ${numberParsed}`;
    }
    inputEl.value = "";
  }
});
