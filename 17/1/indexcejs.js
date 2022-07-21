const http = require('http');
const path = require('path');
const fs = require('fs');
const calculator = require('./calc.js');
const ejs = require('ejs');


const hostname = '127.0.0.1';
const port = 3000;

var result = calculator.add(1,3);

const server = http.createServer((req, res) => {
	fs.readFile(path.join(__dirname, 'ejs.ejs'), (err,data) => {
		if(err) {
			res.statusCode = 500;
			return;
		} else {
			const templateData = {
				E: calculator.getE(),
				'1 + 2': calculator.add(1,2),
				'3 - 1': calculator.sub(3,1),
				'3 * 14': calculator.mul(3,14),
				'14 / 2': calculator.div(14,2)
			}

			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			res.end(ejs.render(data.toString(), {
				arr: [1,2,3],
				data: templateData
			}));
		}
	});
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});