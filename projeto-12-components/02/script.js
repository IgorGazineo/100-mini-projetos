const button = document.querySelector("button");
const msg = document.querySelector(".msg");
button.addEventListener("click", () => {
  msg.style.opacity = "1";
  button.style.top = "-60px";
});
