const addButton = document.getElementById("add");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const listaDeAmigos = [];

input.addEventListener("keyup", () => {
  if (input.value) {
    addButton.disabled = false;
  } else {
    addButton.disabled = true;
  }
});

addButton.addEventListener("click", () => {
  ul.innerHTML = "";
  listaDeAmigos.push(
    `<li><div>${input.value}</div><button>Excluir</button></li>`
  );
  listaDeAmigos.forEach((amigo) => {
    ul.innerHTML += amigo;
  });
  input.value = "";

  if (input.value) {
    addButton.disabled = false;
  } else {
    addButton.disabled = true;
  }
});

ul.addEventListener("click", (event) => {
  const clickedEl = event.target;
  if (clickedEl.textContent === "Excluir") {
    clickedEl.parentElement.remove();
  }
});
