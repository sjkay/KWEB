var db, book_collection;
const Book = require('./Book');
new Book('집 살래 월세 살래', '이재범(핑크팬더)', 15, 17000, '1187383279');

const MongoDB = require('mongodb');
const MongoClient = MongoDB.MongoClient;

const username = encodeURIComponent('kweb');
const userpass = encodeURIComponent('kweb');
const host = 'ds115035.mlab.com';
const port = 15035;
const env_name = 'kweb_test1';

const url = `mongodb://${username}:${userpass}@${host}:${port}/${env_name}`;

MongoClient.connect(url, function (err, _db) {
	if (err) {
		throw err;
	}
	console.log('Connected correctly to server.');

	db = _db;
	book_collection = db.collection('books');
	insert_books();
});

function insert_books() {
	const book = new Book('제 마음도 괜?', '강현식', 20, 15000, '8937852');
	const books = [
		new Book('집 살래 월세', '이재범', 15, 17000, '118738'),
		new Book('잘자', '혼', 10, 12000, '11605111')
	];

	book_collection.insertOne(book, () => {
		book_collection.insert(books, () =>
			db.close());
	});
}