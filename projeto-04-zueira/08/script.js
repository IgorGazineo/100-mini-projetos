const phrase = "Hello World!";
const h1El = document.querySelector("h1");
const letters = phrase.split("");

let index = 0;

setInterval(() => {
  h1El.innerText += phrase[index];

  index++;

  if (index > letters.length) {
    index = 0;
    h1El.innerText = "";
  }
}, 500);
