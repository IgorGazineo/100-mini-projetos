import http from "http";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const indexFilePath = path.join(__dirname, "..", "public", "index.html");

const server = http.createServer((req, res) => {
  fs.readFile(indexFilePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Erro no servidor");
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
