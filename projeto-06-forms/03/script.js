const input = document.querySelector("input");
const body = document.body;

input.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const div = document.createElement("div");
    div.innerText = input.value;
    input.value = "";
    body.append(div);
  }
});
