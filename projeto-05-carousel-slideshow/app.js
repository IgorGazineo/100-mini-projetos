const images = [
  "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=600&quality=80",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKtKkuCjVMZ09HHU7OxCs0h7421BzTwVWGjA&s",
  "https://assets.weforum.org/article/image/responsive_large_0ZUBmNNVLRCfn3NdU55nQ00UF64m2ObtcDS0grx02fA.jpg",
  "https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4.jpg",
];

let indexOfImage = 0;

const imgEl = document.querySelector("img");
const divEl = document.querySelector("div");
imgEl.src = images[indexOfImage];

divEl.addEventListener("click", () => {
  indexOfImage++;

  imgEl.src = images[indexOfImage];

  if (indexOfImage > 3) {
    indexOfImage = 0;
    imgEl.src = images[indexOfImage];
  }
});
