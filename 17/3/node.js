const MongoDB = require('mongodb');
const MongoClient = MongoDB.MongoClient;

const username = encodeURIComponent('kweb');
const userpass = encodeURIComponent('kweb');
const host = 'ds115035.mlab.com';
const port = 15035;
const env_name = 'kweb_test1';

const url = `mongodb://${username}:${userpass}@${host}:${port}/${env_name}`;

MongoClient.connect(url, function(err, db) {
	console.log("Connected correctly to server.");
	db.close();
});