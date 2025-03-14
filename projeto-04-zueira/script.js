var btn = document.querySelector("button");
var paragraphEl = document.querySelector("p");
var inputEl = document.querySelector("input");
var bestMovie = "Internet O Filme";
btn.addEventListener("click", function () {
    if (inputEl.value) {
        paragraphEl.innerText = paragraphEl.innerText.replace(bestMovie, "".concat(inputEl.value));
        bestMovie = inputEl.value;
    }
    else {
        paragraphEl.innerText = 'O melhor filme do mundo é "Internet O Filme"';
        bestMovie = "Internet O Filme";
    }
});
