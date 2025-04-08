const h1El = document.querySelector("h1");

const frase = "Meu nome é: ";
const nome = "Igor.";
const letters = nome.split("");
let i = 0;
let letter = "";
setInterval(() => {
  h1El.innerText = `${frase}${letter}`;
  letter += letters[i];
  i++;

  if (i > letters.length) {
    i = 0;
    letter = "";
  }
}, 500);
