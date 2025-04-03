const helloNode = async function () {
  const promise = await fetch("http://localhost:3000", {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
    },
    body: "Mandando um hello do arquivo client.js",
  });

  const resposta = await promise.text();
  console.log(resposta);
};

helloNode();
