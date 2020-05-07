const http = require('http');
const { hesap } = require('./calculator.js');

const hostname = '127.0.0.1';
const port = process.argv[3]
3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(process.argv[2] + " " + hesap(2,3));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});