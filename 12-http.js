const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello World");
  }
  if (req.url === "/about") {
    res.end("About Page. Here is our short history");
  }
  res.end(`
    <h1>Oops! There is no such page!</h1>
    <p>Go back to <a href="/">Home</a></p>`);
});

server.listen(4000);
