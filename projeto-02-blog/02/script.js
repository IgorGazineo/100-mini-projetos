const body = document.body;
const headerEl = document.querySelector("header");
const mainEl = document.querySelector("main");
const ulEl = document.querySelector("ul");
const btns = document.querySelectorAll("button");
const inputEl = document.querySelector("input");

const myFriends = [];

setTimeout(() => {
  headerEl.classList.add("active");
  mainEl.classList.add("active");
}, 500);

btns.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (button.classList.contains("add")) {
      const friend = inputEl.value;
      myFriends.push(friend);
      ulEl.innerHTML = "";
      myFriends.forEach((friend) => {
        ulEl.innerHTML += `<li>
        <div class='name'>Nome: ${friend}</div>
    </li>`;
      });
    }

    if (button.classList.contains("remove-first")) {
      ulEl.innerHTML = "";
      myFriends.shift();
      myFriends.forEach((friend) => {
        ulEl.innerHTML += `<li>
        <div class='name'>Nome: ${friend}</div>
    </li>`;
      });
    }

    if (button.classList.contains("remove-last")) {
      ulEl.innerHTML = "";
      myFriends.pop();
      myFriends.forEach((friend) => {
        ulEl.innerHTML += `<li>
        <div class='name'>Nome: ${friend}</div>
    </li>`;
      });
    }
  });
});

inputEl.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const friend = inputEl.value;
    myFriends.push(friend);
    ulEl.innerHTML = "";
    myFriends.forEach((friend) => {
      ulEl.innerHTML += `<li>
        <div class='name'>Nome: ${friend}</div>
    </li>`;
    });
    inputEl.value = "";
  }
});
