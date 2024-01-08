console.log("Hello World!");
// const g = require("./greeting.js");

// console.log("g=>", g);
// g('John')

const { greeting, hello } = require("./greeting.js");

greeting("John");

hello("Egor");

// Create a module -> sum 2 number
// use this sum fubction in app.js
// multiple 2 number

const { sum, multiple } = require("./math.js");

console.log(`The Sum of 2 and 3 is ${sum(2, 3)}, The Multiplication of 2 and 3 is ${multiple(2, 3)}`);
