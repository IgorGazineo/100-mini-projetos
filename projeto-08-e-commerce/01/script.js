const btn = document.querySelector("button");
const livrosEl = document.querySelector(".livros");
const inputTitle = document.querySelector("#title");
const inputDescription = document.querySelector("#description");
const inputPrice = document.querySelector("#price");
const h2El = document.querySelector("h2");
const selectEl = document.querySelector("select");

const books = [];

btn.addEventListener("click", (event) => {
  event.preventDefault();
  h2El.style.display = "none";
  livrosEl.innerHTML = "";
  const title = inputTitle.value;
  const description = inputDescription.value;
  const price = Number(inputPrice.value);

  books.push({ title, description, price });

  books.forEach(({ title, description, price }) => {
    livrosEl.innerHTML += `
    <li class='livro'>
    <h3>${title}</h3
    <p>${description}</p>
    <span>R$ ${price}</span>
    </li>`;
  });

  inputTitle.value = "";
  inputDescription.value = "";
  inputPrice.value = "";
});

selectEl.addEventListener("click", () => {
  livrosEl.innerHTML = "";
  if (selectEl.value === "100-") {
    const cheapBooks = books.filter((book) => book.price < 100);
    cheapBooks.forEach(({ title, description, price }) => {
      livrosEl.innerHTML += `
    <li class='livro'>
    <h3>${title}</h3
    <p>${description}</p>
    <span>R$ ${price}</span>
    </li>`;
    });
  } else if (selectEl.value === "100+") {
    const expensiveBooks = books.filter((book) => book.price >= 100);
    expensiveBooks.forEach(({ title, description, price }) => {
      livrosEl.innerHTML += `
    <li class='livro'>
    <h3>${title}</h3
    <p>${description}</p>
    <span>R$ ${price}</span>
    </li>`;
    });
  } else {
    books.forEach(({ title, description, price }) => {
      livrosEl.innerHTML += `
    <li class='livro'>
    <h3>${title}</h3
    <p>${description}</p>
    <span>R$ ${price}</span>
    </li>`;
    });
  }
});
