const button = document.querySelector("button");
const ul = document.querySelector("ul");
const liContent = ["Por quê", "você", "fez", "isso?"];

button.addEventListener("click", () => {
  if (button.innerText === "Clicar") {
    button.innerText = "Limpar";
    let count = 0;
    const stopSet = setInterval(() => {
      if (count === liContent.length - 1) {
        clearInterval(stopSet);
      }
      ul.innerHTML += `<li>${liContent[count]}</li>`;
      count++;
    }, 500);
  } else if (button.innerText === "Limpar") {
    button.innerText = "Clicar";
    ul.innerHTML = "";
  }
});
