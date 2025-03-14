const btn = document.querySelector("button");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const paragraph = document.querySelector("p");
const select = document.querySelector("select");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let result;
  const inputValue1 = Number(input1.value);
  const inputValue2 = Number(input2.value);

  if (select.value === "soma") {
    result = inputValue1 + inputValue2;
  } else if (select.value === "subtração") {
    result = inputValue1 - inputValue2;
  } else if (select.value === "multiplicação") {
    result = inputValue1 * inputValue2;
  } else if (select.value === "divisão") {
    result = inputValue1 / inputValue2;
  }
  input1.value = "";
  input2.value = "";
  paragraph.innerText = `Resultado: ${result}`;
});
