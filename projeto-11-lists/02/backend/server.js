import { createServer } from "http";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  const pathFile = path.join(
    __dirname,
    "..",
    "frontend",
    url === "/" ? "index.html" : url
  );

  if (method === "GET" && url === "/") {
    fs.readFile(pathFile, "utf-8", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

  if (method === "GET" && url === "/style.css") {
    fs.readFile(pathFile, "utf-8", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
    });
  }

  if (method === "GET" && url === "/script.js") {
    fs.readFile(pathFile, "utf-8", (err, data) => {
      res.writeHead(200, { "Content-Type": "application:javascript" });
      res.end(data);
    });
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
