var btn = document.querySelector("button");
var inputEl = document.querySelector("input");
var bestMovie = "Internet O Filme";
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    var paragraphEl = document.querySelector("p");
    paragraphEl.innerText = paragraphEl.innerText.replace(bestMovie, "".concat(inputEl.value));
    bestMovie = inputEl.value;
});
