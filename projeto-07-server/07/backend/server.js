const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  const filePath = path.join(
    __dirname,
    "..",
    "frontend",
    url === "/" ? "index.html" : url
  );

  if (url === "/") {
    fs.readFile(filePath, "utf-8", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

  if (url === "/style.css") {
    fs.readFile(filePath, "utf-8", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
    });
  }

  if (url === "/script.js") {
    fs.readFile(filePath, "utf-8", (err, data) => {
      res.writeHead(200, { "Content-Type": "application/javascript" });
      res.end(data);
    });
  }

  if (req.method === "POST") {
    req.on("data", (chunk) => {
      let msg = chunk.toString();
      fs.writeFileSync("mensagem.txt", msg);
    });
  }
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
