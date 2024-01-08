// app.js

// Require the lodash package
const _ = require('lodash');

// Require the custom math module
const math = require('./math.js');

// Use the exported functions from the math module
const sum = math.addition(10, 5);
console.log(`10 + 5 = ${sum}`);

const product = math.multiplication(10, 5);
console.log(`10 * 5 = ${product}`);

// Use a lodash function to find the maximum number
const maxNumber = _.max([sum, product, 20, 78, 128, 2, 28]);
console.log(`The maximum number within an array is ${maxNumber}`);

