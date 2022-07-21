const fs = require('fs');

fs.writeFile('./1.txt', '11111');
console.log('1.txt created.');
fs.readFile('./1.txt', 'UTF-8', function(err, content){
	fs.writeFile('./2.txt', content + '22222');
	console.log('2.txt created.');
	fs.readFile('./2.txt', 'UTF-8', function(err, content){
		fs.writeFile('./3.txt', content + '33333');
		console.log('3.txt created.');
		fs.readFile('./3.txt', 'UTF-8', function(err, content){
			fs.writeFile('./4.txt', content + '44444');
			console.log('4.txt created.');
			fs.readFile('./4.txt', 'UTF-8', function(err, content){
				fs.writeFile('./5.txt', content + '55555');
				console.log('5.txt created.');
				fs.readFile('./5.txt', 'UTF-8', function(err, content){
					console.log(content);
				})
			})
		})
	})
})
