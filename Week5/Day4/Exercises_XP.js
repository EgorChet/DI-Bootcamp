// // 🌟 Exercise 1 : List Of People
// // Part1
// console.log('Exercise 1 Part 1')
// const people = ["Greg", "Mary", "Devon", "James"]
// console.log("\nPrint People")
// console.log(people + '\n')
// const horizontalLine = "\x1b[90m\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\x1b[0m";
// console.log(horizontalLine);

// console.log("\nRemove Greg")
// people.shift();
// console.log(people + '\n')
// console.log(horizontalLine);

// console.log("Replace 'James' with 'Jason'")
// const jamesIndex = people.indexOf("James");
// if (jamesIndex !== -1) {
//   people[jamesIndex] = "Jason";
// }
// console.log(people + '\n')
// console.log(horizontalLine);

// console.log('Adding my name to the end of the array')
// people.push("Egor");
// console.log(people + '\n')
// console.log(horizontalLine);

// console.log("Mary's index")
// const maryIndex = people.indexOf("Mary");
// console.log(maryIndex + '\n');
// console.log(horizontalLine);

// console.log('Make a copy of the array without "Mary" and your name')
// const peopleCopy = people.slice(1, 3);
// console.log(people + '\n')
// console.log(horizontalLine);

// console.log('Write code that gives the index of “Foo”. Why does it return -1?')
// const fooIndex = people.indexOf("Foo");
// if (fooIndex === -1) {
//     console.log("The element was not found in the array.\n");
//   } else {
//     console.log('The element was found at index:", index + "\n"');
//   }
// console.log(horizontalLine);

// console.log('Get the last element using the length of the array')
// let lastElement = people[people.length - 1];
// console.log("Last element:", lastElement + '\n');


// // Part2
// console.log('\nExercise 1 Part 2\n')
// console.log("Iterate Through People Array")
// for (const person of people) {
//     console.log(person);
// }
// console.log('\n')
// console.log(horizontalLine);

// console.log("\nIterate Until Devon")
// for (const person of people) {
//     console.log(person);
//     if (person === "Devon") {
//         break;
//     }
// }
// console.log('\n')
// console.log(horizontalLine);

// // 🌟 Exercise 2 : Your Favorite Colors
// console.log('Exercise 2 : Your Favorite Colors')
// console.log('Create an array called colors where the value is a list of your five favorite colors.')
// let favouriteColors = ['red', 'blue', 'black', 'yellow', 'purple'];
// console.log(favouriteColors + '\n')

// console.log('Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .')
// for (let i = 0; i < favouriteColors.length; i++) {
//     console.log(`My #${i + 1} choice is ${favouriteColors[i]}`);
// }

// console.log('\nChange it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number. Hint : create an array of suffixes to do the Bonus')
// const suffixes = ["st", "nd", "rd", "th", "th"];
// for (let i = 0; i < favoriteColors.length; i++) {
//     const suffixIndex = i < 3 ? i : 3; // Use "th" for the 4th and subsequent items
//     console.log(`My ${i + 1}${suffixes[suffixIndex]} choice is ${favoriteColors[i]}`);
// }

// 🌟 Exercise 3 : Repeat The Question
console.log('Exercise 3 : Repeat The Question')

// Prompt the user for a number.
// const userInput = prompt("Please enter a number:");
// console.log(typeof userInput)

const readline = require('readline');

Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for a number
rl.question('Please enter a number: ', (userInput) => {
  // Your logic here
  console.log(typeof(userInput));

  // Don't forget to close the readline interface
  rl.close();
});
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
for (const)

// 🌟 Exercise 4 : Building Management
// Instructions:
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }


// Review About Objects
// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.

// Console.log how many apartments are on the floors 1 and 3.

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.


// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.


// Exercise 6 : Rudolf
// Instructions
// const details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”


// Exercise 7 : Secret Group
// Instructions
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”