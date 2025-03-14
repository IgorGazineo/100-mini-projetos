const inputPassword = document.querySelector("input");
const inputImg = document.querySelector("img");

const imageFiles = ["visibility.svg", "visibility_off.svg"];

const showPassword = () => {
  if (inputPassword.type === "password") {
    inputImg.setAttribute("src", `./images/${imageFiles[1]}`);
    inputPassword.type = "text";
  } else {
    inputImg.setAttribute("src", `./images/${imageFiles[0]}`);
    inputPassword.type = "password";
  }
};

inputImg.addEventListener("click", showPassword);
