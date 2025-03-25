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

const btns = document.querySelectorAll("button");

const deleteTodo = function (array, index) {
  array.splice(index, 1);
};

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    deleteTodo(todos, index);
    ulEl.innerHTML = "";
    todos.forEach((todo) => {
      ulEl.innerHTML += `<li>
    <h2>${todo.title}</h2>
    <button>Excluir</button>
        </li>`;
    });
  });
});
