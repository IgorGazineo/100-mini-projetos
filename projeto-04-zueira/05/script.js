const btnEl = document.querySelector("button");

btnEl.addEventListener("click", () => {
  const asideEl = document.querySelector("aside");

  if (btnEl.innerText === "Abrir") {
    asideEl.classList.add("active");
    btnEl.innerText = "Fechar";
  } else {
    asideEl.classList.remove("active");
    btnEl.innerText = "Abrir";
  }
});
