const btn = document.querySelector("button");

const generateNumber = function () {
  return Math.trunc(Math.random() * 50) + 1;
};

btn.addEventListener("click", () => {
  const msgDivEl = document.querySelector(".container > div");

  const number = generateNumber();
  const msg = `Número gerado: ${number < 10 ? `0${number}` : number}`;

  msgDivEl.innerText = msg;
  msgDivEl.classList.add("active");
});
