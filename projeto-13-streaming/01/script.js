const inputEl = document.querySelector("input");
const ulEl = document.querySelector("ul");
const lisEl = document.querySelectorAll("li");

inputEl.addEventListener("keyup", () => {
  ulEl.innerHTML = "";
  lisEl.forEach((li) => {
    if (li.innerText.includes(inputEl.value)) {
      ulEl.append(li);
    }
  });
});
