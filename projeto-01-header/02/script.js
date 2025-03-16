const searchBtn = document.querySelector("span");
const inputEl = document.querySelector("input");
const paragraph = document.querySelector("p");

const showResult = function () {
  paragraph.innerText = `Buscando por: ${inputEl.value}`;
  inputEl.value = "";
};

const errorMessage = function () {
  paragraph.innerText = "Insira algo na barra de busca...";
};

searchBtn.addEventListener("click", () => {
  if (inputEl.value) {
    showResult();
  } else {
    errorMessage();
  }
});

inputEl.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && inputEl.value) {
    showResult();
  } else if (e.key === "Enter" && !inputEl.value) {
    errorMessage();
  }
});
