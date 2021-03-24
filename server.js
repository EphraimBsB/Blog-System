const http = require("http");
const app = require("./App");
const server = http.createServer(app);
const port = process.env.PORT || 5000;
const dotenv = require("dotenv");

dotenv.config();

server.listen(port);
