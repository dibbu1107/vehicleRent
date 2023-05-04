const http = require("http");
const app = require("./app");

const PORT = process.env.port || 6000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log("server is listening " + PORT);
});
