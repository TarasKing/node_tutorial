const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end('Hello World!');
// });

// Using Event Emitter API
const server = new http.createServer();
// emits request event
// subscribe to it / listen for it / respond to it
server.on("request", (req, res) => {
  res.end("Hello World!");
});

server.listen(4000);
