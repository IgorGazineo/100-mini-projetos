const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const input = document.querySelector("input");
  const inputValu = input.value;
  input.value = "";

  fetch("http://localhost:3000", {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: inputValu,
  });
});
