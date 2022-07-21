var someone={
	name: "Team",
	height: 170,
	weight: 65,
	eat: function(){this.weight+=1;},
	diet: function(){this.weight-=1;}
}

function Person(name, height, weight){
	this.name=name
	this.height=height,
	this.weight=weight,
	this.eat=function(){this.weight+=1;},
	this.diet=function(){this.weight-=1;}
}

var Team=new Person("Team",170,65);
Team.height=173;
Team.eat();

console.log(Team);

Team.diet();

console.log(Team);