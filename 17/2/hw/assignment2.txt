class Person {
	constructor(name, height, weight) {
		this.name = name;
		this.height = height;
		this.weight = weight;
	}

	getName() {
		return this.name;
	}

	getHeight() {
		return this.height;
	}

	getWeight() {
		return this.weight;
	}

	eat() {
		this.weight+=1;
	}

	diet() {
		this.weight-=1;
	}
}

var Team = new Person("Team",170,65);
Team.getHeight()
//170
console.log(Team.getHeight());

Team.height=173;

Team.getHeight()
//173
console.log(Team.getHeight());

Team.eat();

Team.getWeight()
//66
console.log(Team.getWeight());

Team.diet();

Team.getWeight()
//65
console.log(Team.getWeight());