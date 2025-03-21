const setas = document.querySelectorAll(".seta");
const imgEl = document.querySelector("img");
const imgPaths = [
  "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2325447/pexels-photo-2325447.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=600",
];

let indexOfImgage = 0;

setas.forEach((seta) => {
  seta.addEventListener("click", () => {
    let lastIndexOfImg = imgPaths.length - 1;
    if (seta.classList.contains("esquerda") && indexOfImgage > 0) {
      indexOfImgage--;
    } else if (seta.classList.contains("esquerda") && indexOfImgage === 0) {
      indexOfImgage = lastIndexOfImg;
    }

    if (seta.classList.contains("direita") && indexOfImgage < lastIndexOfImg) {
      indexOfImgage++;
    } else if (
      seta.classList.contains("direita") &&
      indexOfImgage === lastIndexOfImg
    ) {
      indexOfImgage = 0;
    }

    imgEl.src = imgPaths[indexOfImgage];
  });
});
