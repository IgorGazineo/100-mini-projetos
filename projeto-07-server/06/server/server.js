const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  const filePath = path.join(
    __dirname,
    "..",
    "public",
    url === "/" ? "index.html" : url
  );

  if (url === "/") {
    fs.readFile(filePath, "utf-8", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

  if (url === "/script.js") {
    fs.readFile(filePath, "utf-8", (err, data) => {
      res.writeHead(200, { "Content-Type": "application/javascript" });
      res.end(data);
    });
  }

  if (method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body = String(chunk);
      fs.writeFileSync("input-value.txt", body);
    });
  }
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
