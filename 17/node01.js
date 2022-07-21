var http = require('http');

var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(req, res){
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain; charset=utf-8');
	res.end('2016320256 김성준\n');
});

server.listen(port, hostname, function() {
	console.log('KWEB 과제 실행중');
});