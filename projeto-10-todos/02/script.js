const inputEl = document.querySelector("input");
const ulEl = document.querySelector("ul");

inputEl.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const li = document.createElement("li");
    li.innerHTML = `<h2>${inputEl.value}</h2>
          <span>🗑️</span>`;
    ulEl.prepend(li);
    inputEl.value = "";
  }
});

ulEl.addEventListener("click", ({ target }) => {
  if (target.tagName === "SPAN") {
    target.parentElement.remove();
  }
});
