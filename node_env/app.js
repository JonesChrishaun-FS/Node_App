require("dotenv").config("./.env");
const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

console.log(process.env.NODE_ENV);

const http = require("http");

const fs = require("fs");
let directory_name = "./";
let filenames = fs.readdirSync(directory_name);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");

  f = "";

  filenames.forEach((files) => {
    f = f + files + " \n";
  });

  res.end(f);
});

server.listen(port, hostname, () => {});
