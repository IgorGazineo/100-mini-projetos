const ulEl = document.querySelector("ul");
const selectEl = document.querySelector("select");
const books = [
  {
    title: "Senhor dos Anéis",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, adipisci possimus? Asperiores eaque, exercitationem iusto vitae officiis nostrum beatae provident quia!",
    price: 180,
  },
  {
    title: "Harry Potter",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, adipisci possimus? Asperiores eaque, exercitationem iusto vitae officiis nostrum beatae provident quia!",
    price: 530,
  },
  {
    title: "Nothing Can Hurt Me",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, adipisci possimus? Asperiores eaque, exercitationem iusto vitae officiis nostrum beatae provident quia!",
    price: 130,
  },
  {
    title: "1984",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, adipisci possimus? Asperiores eaque, exercitationem iusto vitae officiis nostrum beatae provident quia!",
    price: 620,
  },
];

books.forEach(({ title, description, price }) => {
  ulEl.innerHTML += `<li>
        <h2>${title}</h2>
        <p>${description}</p>
        <span>R$ ${price}</span>
    </li>`;
});

selectEl.addEventListener("click", () => {
  let expensiveBooks = null;
  let cheapBooks = null;
  if (selectEl.value === "500+") {
    ulEl.innerHTML = "";
    expensiveBooks = books.filter((book) => book.price >= 500);

    expensiveBooks.forEach(({ title, description, price }) => {
      ulEl.innerHTML += `<li>
        <h2>${title}</h2>
        <p>${description}</p>
        <span>R$ ${price}</span>
    </li>`;
    });
  } else if (selectEl.value === "500-") {
    ulEl.innerHTML = "";
    cheapBooks = books.filter((book) => book.price < 500);
    cheapBooks.forEach(({ title, description, price }) => {
      ulEl.innerHTML += `<li>
        <h2>${title}</h2>
        <p>${description}</p>
        <span>R$ ${price}</span>
    </li>`;
    });
  } else {
    ulEl.innerHTML = "";
    books.forEach(({ title, description, price }) => {
      ulEl.innerHTML += `<li>
        <h2>${title}</h2>
        <p>${description}</p>
        <span>R$ ${price}</span>
    </li>`;
    });
  }
});
