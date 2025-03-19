const bodyEl = document.body;
const headerEl = document.querySelector("header");
const selectEl = document.querySelector("select");

selectEl.addEventListener("click", () => {
  if (selectEl.value === "light") {
    bodyEl.style.backgroundColor = "lightblue";
    bodyEl.style.color = "black";
    headerEl.style.background = "white";
  } else {
    bodyEl.style.backgroundColor = "rgb(34, 34, 34)";
    bodyEl.style.color = "white";
    headerEl.style.background = "black";
  }
});
