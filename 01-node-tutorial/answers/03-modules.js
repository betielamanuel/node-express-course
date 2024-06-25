const names = require("./04-names");
const greeting = require("./05-utils");
const flavors = require("./06-alternative-flavor");
require("./07-mind-grenade");

greeting.sayHello(names.name1);
greeting.sayHello(names.name2);
greeting.sayHello(names.name3);

console.log(flavors.flavor1);
console.log(flavors.flavor2);
console.log(flavors.flavor3);
