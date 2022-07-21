class Book {
	constructor(title, author) {
		this.title = title;
		this.author = author;
	}

	getTitle() {
		return this.title;
	}

	getAuthor() {
		return this.author;
	}
}

var es5 = new Book('ECMAScript 5 - 2009', 'Ecma International');
es5.getTitle()
//ECMAScript 5 - 2009
console.log(es5.getTitle());
es5.getAuthor()
//'Ecma International'
console.log(es5.getAuthor());