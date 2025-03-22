const btn = document.querySelector("button");

const generateRandomNumber = function (n1, n2) {
  const difference = n2 - n1;
  return Math.round(Math.random() * difference) + n1;
};

btn.addEventListener("click", () => {
  const input1 = document.querySelector("#input1");
  const input2 = document.querySelector("#input2");
  const divMessage = document.querySelector(".inner-div2");

  const randomNumber = generateRandomNumber(+input1.value, +input2.value);

  divMessage.classList.add("active");

  divMessage.innerText = `Número gerado: ${randomNumber}`;
});
