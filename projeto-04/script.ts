const btn = document.querySelector("button") as HTMLButtonElement;
const paragraphEl = document.querySelector("p") as HTMLParagraphElement;
const inputEl = document.querySelector("input") as HTMLInputElement;

let bestMovie = "Internet O Filme";

btn.addEventListener("click", () => {
  if (inputEl.value) {
    paragraphEl.innerText = paragraphEl.innerText.replace(
      bestMovie,
      `${inputEl.value}`
    );
    bestMovie = inputEl.value;
  } else {
    paragraphEl.innerText = 'O melhor filme do mundo é "Internet O Filme"';
    bestMovie = "Internet O Filme";
  }
});
