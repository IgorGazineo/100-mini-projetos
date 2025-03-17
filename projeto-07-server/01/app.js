const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/plain");
    res.write("<p>Hello</p>");
    res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 500;
    res.write("<h1>Page Not Found</h1>");
    res.end();
  }
});

server.listen(3000);
