const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("../frontend/index.html", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Erro ao carregar arquivo.");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

server.listen(3000);
