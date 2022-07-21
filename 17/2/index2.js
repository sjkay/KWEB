const http = require('http');
const path = require('path');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

	var content = fs.readFileSync(path.join(__dirname,'data.txt'), 'UTF-8');

		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/html');
		res.end(content);
});

server.listen(port, hostname, () => {});