const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const inputValue = document.querySelector("input").value;
  document.querySelector("input").value = "";
  fetch("http://localhost:3000", {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: inputValue,
  });
});
