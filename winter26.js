console.log("Hello World");

function makebot(name,color){
	console.log("name", name);
	bot={};
	bot.name = name;
	bot.color = color;

	bot.sayName = function sayName(){
		console.log("My name is " + bot.name);
	}

	return bot;

}


bot1 = makebot("Aidan", "blue");
console.log(bot1);
bot1.sayName();

bots = [];
bots.push(bot1);
bots.push(makebot("Aidan1","yellow"));
console.log(bots);
bots[1].sayName();