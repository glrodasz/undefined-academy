const http = require("http"); // CommonJS

function serverCallback(request, response) {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify({ message: "Hello Bootcamp Texto" }));
}

const server = http.createServer(serverCallback);

server.listen(3000, () => console.log("🌍 Server running on port 3000"));
