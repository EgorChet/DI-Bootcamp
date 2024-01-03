const horizontalLine =
  "\x1b[90m\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\x1b[0m";
// // 🌟 Exercise 1 : List Of People
// // Part1
// console.log('Exercise 1 Part 1')
// const people = ["Greg", "Mary", "Devon", "James"]
// console.log("The list of People")
// console.log(people + '\n')
// console.log(horizontalLine);

// console.log("\nThe list after removing Greg")
// people.shift();
// // Version 2
// // const gregIndex = people.indexOf("Greg");
// // if (gregIndex !== -1) {
// //     people.splice(gregIndex, 1); // This removes "Greg" wherever it is.
// // }
// console.log(people + '\n')
// console.log(horizontalLine);

// console.log("Replaceing 'James' with 'Jason'")
// people[people.length - 1] = "Jason";
// // Version 2
// // const jamesIndex = people.indexOf("James");
// // if (jamesIndex !== -1) {
// //     people[jamesIndex] = "Jason"; // This replaces "James" with "Jason" wherever "James" is.
// // }
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
// console.log(peopleCopy + '\n')
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
// console.log(horizontalLine);

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
// console.log('Exercise 2 : Your Favorite Colors\n\n')

// // Part 1: Create an array of favorite colors
// console.log('Create an array called colors where the value is a list of your five favorite colors.')
// let favouriteColors = ['red', 'blue', 'black', 'yellow', 'purple'];
// console.log(favouriteColors + '\n\n')

// // Part 2: Loop through the array and print out the colors with a numerical indicator
// console.log('Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” etc… .')
// for (let i = 0; i < favouriteColors.length; i++) {
//     console.log(`My #${i + 1} choice is ${favouriteColors[i]}`);
// }
// console.log('\n')

// // Bonus Part: Change the output to use ordinal indicators (1st, 2nd, 3rd, etc.)
// console.log('Changed to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.');
// let suffixes = ['st', 'nd', 'rd', 'th', 'th']; // Array of suffixes for 1st to 5th.
// for (let i = 0; i < favouriteColors.length; i++) {
//     // Determine the correct suffix for the current number
//     let suffix = suffixes[i]; // This gets the appropriate suffix from the suffixes array.
//     console.log(`My ${i + 1}${suffix} choice is ${favouriteColors[i]}`);
// };

// // 🌟 Exercise 3 : Repeat The Question
// console.log('\nExercise 3 : Repeat The Question');

// let number = 0;  // Initialize number to enter the while loop

// while (number < 10) {
//     // Prompt the user for a number. Convert the response from a string to a number.
//     number = Number(prompt("Please enter a number:"));

//     // Check if the input is a valid number. isNaN(number) will be true if 'number' is not a number.
//     if (isNaN(number)) {
//         console.log("That's not a valid number. Try again.");
//         number = 0;  // Reset number to ensure the loop continues
//     } else if (number < 10) {
//         // If the number is less than 10, inform the user
//         console.log("The number is smaller than 10. Try again.");
//     }
// }

// console.log("Thank you, your number is:", number);

// // THIS IS THE VERSION I DID LAST WEEK IT IS MADE TO BE USED IN TERMINAL
// // const readline = require('readline');

// // // Create an interface for input and output
// // const rl = readline.createInterface({
// //   input: process.stdin,
// //   output: process.stdout
// // });

// // let userInput;

// // const askForNumber = () => {
// //   rl.question('Please enter a number: ', (input) => {
// //     userInput = parseInt(input); // Convert string input to a number
// //     console.log(`You entered: ${userInput}, which is a ${typeof userInput}`);

// //     // Check if the input is a number and less than 10
// //     if (!isNaN(userInput) && userInput < 10) {
// //       console.log("The number is smaller than 10. Let's try again.");
// //       askForNumber(); // Recursively ask for a new number
// //     } else {
// //       console.log("The number is 10 or greater. Well done!");
// //       rl.close(); // Close the readline interface
// //     }
// //   });
// // };

// // askForNumber(); // Initial call to start the process
// // console.log(horizontalLine);

// // 🌟 Exercise 4 : Building Management
// console.log('\nExercise 4 : Building Management')

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

// // Console.log the number of floors in the building.
// console.log('The number of floors in the building:')
// console.log(building.numberOfFloors);
// console.log(horizontalLine);

// // Console.log how many apartments are on the floors 1 and 3.
// console.log('How many apartments are on the floors 1 and 3?')
// console.log(`There are ${building.numberOfAptByFloor.firstFloor} apartaments on the first floor`);
// console.log(`There are ${building.numberOfAptByFloor.thirdFloor} apartaments on the third floor`);
// console.log(horizontalLine);

// // Console.log the name of the second tenant and the number of rooms he has in his apartment.
// console.log('Console.log the name of the second tenant and the number of rooms he has in his apartment.')
// const secondTenantName = building.nameOfTenants[1]; // "Dan"
// const secondTenantRooms = building.numberOfRoomsAndRent[secondTenantName.toLowerCase()][0];
// console.log(`The second tenant is ${secondTenantName} and he has ${secondTenantRooms} rooms in his apartment.`);
// console.log(horizontalLine);

// // Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
// console.log('Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.')

// // Access the rent for Sarah, David, and Dan
// let sarahRent = building.numberOfRoomsAndRent.sarah[1];
// let davidRent = building.numberOfRoomsAndRent.david[1];
// let danRent = building.numberOfRoomsAndRent.dan[1];

// // Check if the sum of Sarah's and David's rent is greater than Dan's rent
// if (sarahRent + davidRent > danRent) {
//     // Check if Dan's rent is already 1200
//     if (danRent === 1200) {
//         console.log("Dan's rent is already $1200.");
//     } else {
//         // Increase Dan's rent to 1200
//         building.numberOfRoomsAndRent.dan[1] = 1200;
//         console.log(`Dan's rent has been increased to $${building.numberOfRoomsAndRent.dan[1]}`);
//     }
// } else {
//     console.log("No need to increase Dan's rent.");
// }
// console.log(horizontalLine);
// // 🌟 Exercise 5 : Family
// console.log('\nExercise 5 : Family')
// // Create an object called family with a few key value pairs.
// const family = {
//   numberOfMembers: 5,
//   numberOfChildren: 2,
//   pets: 1,
//   address: "Ibn Gabirol",
//   lastName: "Chetverikov",
//   hasCar: true,
// };

// // Using a for in loop, console.log the keys of the object.
// console.log("Keys of the family object:");
// for (let key in family) {
//     console.log(key);
// }
// console.log(horizontalLine);

// // Using a for in loop, console.log the values of the object.
// console.log("\nValues of the family object:");
// for (let key in family) {
//     console.log(family[key]);
// }
// console.log(horizontalLine);

// // Exercise 6 : Rudolf

// const details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }

// // Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

// let sentence = '';

// for (let key in details) {
//     // Concatenate the key and its value to the sentence
//     sentence += `${key} ${details[key]} `;
// }

// console.log('\nExercise 6 : Rudolf')
// console.log(sentence);  // Output: my name is Rudolf the raindeer
// console.log(horizontalLine);

// // Exercise 7 : Secret Group

// // A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// // Hint: a string is an array of letters
// // Console.log the name of their secret society. The output should be “ABJKPS”

// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// console.log(names.sort())
// let output = ""
//     for (let name of names) {
//         output += name[0];
//     }

// console.log(output)
// console.log(horizontalLine);
