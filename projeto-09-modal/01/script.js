const btns = document.querySelectorAll("button");
const modal = document.querySelector(".modal-background");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("abrir")) {
      modal.classList.add("abrir");
    } else if (btn.classList.contains("fechar")) {
      modal.classList.remove("abrir");
    }
  });
});
