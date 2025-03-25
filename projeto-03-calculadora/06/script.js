const numbersEl = document.querySelectorAll(".number");

numbersEl.forEach((number) => {
  number.addEventListener("click", () => {
    const displayEl = document.querySelector(".display");

    displayEl.innerText += number.innerText;
  });
});
