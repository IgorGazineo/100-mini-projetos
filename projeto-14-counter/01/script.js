let value = 0;

const div = document.querySelector("div");

div.textContent = value;

document.querySelector("#diminui").addEventListener("click", () => {
  value--;
  div.textContent = value;
});

document.querySelector("#reseta").addEventListener("click", () => {
  value = 0;
  div.textContent = value;
});

document.querySelector("#aumenta").addEventListener("click", () => {
  value++;
  div.textContent = value;
});
