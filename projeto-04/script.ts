const btn = document.querySelector("button") as HTMLButtonElement;
const inputEl = document.querySelector("input") as HTMLInputElement;

let bestMovie = "Internet O Filme";

btn?.addEventListener("click", () => {
  const paragraphEl = document.querySelector("p") as HTMLParagraphElement;
  paragraphEl.innerText = paragraphEl.innerText.replace(
    bestMovie,
    `${inputEl.value}`
  );
  bestMovie = inputEl.value;
});
