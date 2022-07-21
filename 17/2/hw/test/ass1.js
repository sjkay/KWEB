const fs = require('fs');

fs.writeFileSync('./1.txt', '11111');
console.log('1.txt created.');
var content1 = fs.readFileSync('./1.txt', 'UTF-8');

fs.writeFileSync('./2.txt', content1 + '22222');
console.log('2.txt created.');
var content2 = fs.readFileSync('./2.txt', 'UTF-8');

fs.writeFileSync('./3.txt', content2 + '33333');
console.log('3.txt created.');
var content3 = fs.readFileSync('./3.txt', 'UTF-8');

fs.writeFileSync('./4.txt', content3 + '44444');
console.log('4.txt created.');
var content4 = fs.readFileSync('./4.txt', 'UTF-8');

fs.writeFileSync('./5.txt', content4 + '55555');
console.log('5.txt created.');
var content5 = fs.readFileSync('./5.txt', 'UTF-8');

console.log(content5);