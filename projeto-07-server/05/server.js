const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    req.on("data", (chunk) => {
      console.log(chunk.toString());
    });
    req.on("end", () => {
      res.writeHead(200, { "Content-Type": "text:plain" });
      res.end("Recebi sua mensagem, cliente!");
    });
  }
});

server.listen(3000, () => {
  console.log("Servidor rodando no endereço http://localhost:3000");
});
