const paragraph = document.querySelector("p");
const select = document.querySelector("select");

select.addEventListener("click", () => {
  if (select.value === "inglês") {
    paragraph.innerText = "Testing...";
  } else {
    paragraph.innerText = "Testando...";
  }
});
