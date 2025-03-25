const ulEl = document.querySelector("ul");

const todos = [
  { title: "Tomar Café" },
  { title: "Correr" },
  { title: "Estudar" },
  { title: "Ler" },
];

todos.forEach((todo) => {
  ulEl.innerHTML += `<li>
    <h2>${todo.title}</h2>
    <button>Excluir</button>
        </li>`;
});

ulEl.addEventListener("click", (event) => {
  const clickedElement = event.target;
  if (clickedElement.innerText === "Excluir") {
    clickedElement.parentElement.remove();
  }
});
