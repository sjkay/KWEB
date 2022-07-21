const http = require('http');
const path = require('path');
const fs = require('fs');
const calculator = require('./calc.js');


const hostname = '127.0.0.1';
const port = 3000;

var result = calculator.add(1,3);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`1 + 3 = ${result}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log(`add(1,3) = ${result}`);
});