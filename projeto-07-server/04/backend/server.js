import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  const filePath = path.join(
    __dirname,
    "..",
    "frontend",
    url === "/" ? "index.html" : url
  );
  console.log(method);
  console.log(url);
  if (method === "GET" && url === "/") {
    fs.readFile(filePath, (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

  if (method === "GET" && url === "/style.css") {
    fs.readFile(filePath, (err, data) => {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
    });
  }

  if (method === "GET" && url === "/script.js") {
    fs.readFile(filePath, (err, data) => {
      res.writeHead(200, { "Content-Type": "application/javascript" });
      res.end(data);
    });
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
