const imgPassword = document.querySelector("img");
const inputPassword = document.querySelector("input");
imgPassword.addEventListener("click", () => {
  if (inputPassword.type === "password") {
    imgPassword.setAttribute("src", "hide-password.svg");
    inputPassword.type = "text";
  } else {
    imgPassword.setAttribute("src", "show-password.svg");
    inputPassword.type = "password";
  }
});
