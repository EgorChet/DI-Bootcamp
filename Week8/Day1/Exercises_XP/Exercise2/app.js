// In app.js, import the array of person objects from the data.js module.
// Write a function that calculates and prints the average age of all the persons in the array.
// Use the imported array and the average age function in app.js.
// Run app.js and confirm that the average age is correctly calculated and displayed.
import people from './data.js';

// Function to calculate and return the average age
const calculateAverageAge = (persons) => persons.reduce((sum, person) => sum + person.age, 0) / persons.length;

// Calculate and print the average age
console.log(`The average age is ${calculateAverageAge(people)}.`);



