const input = document.querySelector("input");

input.addEventListener("keyup", (event) => {
  const inputValue = event.target.value;
  const ul = document.querySelector("ul");

  if (event.key === "Enter") {
    ul.innerHTML += `<li class="tarefa">
          <p>${inputValue}</p>
          <div class="btn">
            <button>Deletar</button>
          </div>
        </li>`;
    input.value = "";
  }
});
