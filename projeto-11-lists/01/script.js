const btn = document.querySelector("button");
const ulEl = document.querySelector("ul");
const inputName = document.querySelector("#name");
const selectEl = document.querySelector("select");
const inputPosition = document.querySelector("#position");
const friends = [];

btn.addEventListener("click", () => {
  if (inputPosition.value !== "") {
    const index = Number(inputPosition.value) - 1;
    ulEl.innerHTML = "";
    friends.splice(index, 0, inputName.value);
    friends.forEach((friend) => {
      ulEl.innerHTML += `<li>${friend}</li>`;
    });
    inputName.value = "";
    inputPosition.value = "";
  } else {
    if (selectEl.value === "primeiro") {
      ulEl.innerHTML = "";
      friends.unshift(inputName.value);
      friends.forEach((friend) => {
        ulEl.innerHTML += `<li>${friend}</li>`;
      });
      inputName.value = "";
    }

    if (selectEl.value === "ultimo") {
      ulEl.innerHTML = "";
      friends.push(inputName.value);
      friends.forEach((friend) => {
        ulEl.innerHTML += `<li>${friend}</li>`;
      });
      inputName.value = "";
    }
  }
});

inputName.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    if (inputPosition.value !== "") {
      const index = Number(inputPosition.value) - 1;
      ulEl.innerHTML = "";
      friends.splice(index, 0, inputName.value);
      friends.forEach((friend) => {
        ulEl.innerHTML += `<li>${friend}</li>`;
      });
      inputName.value = "";
      inputPosition.value = "";
    } else {
      if (selectEl.value === "primeiro") {
        ulEl.innerHTML = "";
        friends.unshift(inputName.value);
        friends.forEach((friend) => {
          ulEl.innerHTML += `<li>${friend}</li>`;
        });
        inputName.value = "";
      }

      if (selectEl.value === "ultimo") {
        ulEl.innerHTML = "";
        friends.push(inputName.value);
        friends.forEach((friend) => {
          ulEl.innerHTML += `<li>${friend}</li>`;
        });
        inputName.value = "";
      }
    }
  }
});
