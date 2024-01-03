// Exercises XP
console.log("Exercises_XP_Day4");
console.log("--------");
// Last Updated: September 22nd, 2023

// What You Will Learn:
// Array methods
// Destructuring

// 🌟 Exercise 1 : Colors
// Instructions
// Using this array :
console.log("Exercise 1 : Colors");
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…

// Displaying the colors in the specified order
colors.forEach((color, index) => {
  console.log(`${index + 1}# choice is ${color}.`);
});

// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Checking if "Violet" is in the array
const containsViolet = colors.some((color) => color === "Violet");
console.log(`The array contains Violet? => ${containsViolet}`);
console.log("--------");

// 🌟 Exercise 2 : Colors #2
// Instructions
// Using these arrays :
console.log("Exercise 2 : Colors #2");
const colors2 = [
  "Blue",
  "Green",
  "Red",
  "Orange",
  "Violet",
  "Indigo",
  "Yellow",
];
const ordinal = ["th", "st", "nd", "rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…

colors2.forEach((color, index) => {
  // Determine the correct ordinal suffix
  let suffix = ordinal[0]; // Default to 'th'
  if (index === 0) {
    suffix = ordinal[1]; // 1st
  } else if (index === 1) {
    suffix = ordinal[2]; // 2nd
  } else if (index === 2) {
    suffix = ordinal[3]; // 3rd
  } else if (index > 2 && index < 20) {
    suffix = ordinal[0]; // 4th to 20th
  } else {
    // Beyond 20, the pattern repeats every 10 (21st, 22nd, 23rd, etc.)
    let lastDigit = (index + 1) % 10;
    suffix =
      lastDigit === 1
        ? ordinal[1]
        : lastDigit === 2
          ? ordinal[2]
          : lastDigit === 3
            ? ordinal[3]
            : ordinal[0];
  }

  console.log(`${index + 1}${suffix} choice is ${color}.`);
});
console.log("--------");

// Exercise 3 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
console.log("Exercise 3 : Analyzing");
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ["bread", ...vegetables, "chicken", ...fruits];
console.log(result);
// ------1------ My prediction : ['bread', "carrot", "potato", 'chicken', "apple", "orange"]

// ------2------
const country = "USA";
console.log([...country]);
// ------2------ My prediction : ["U", "S", "A"]
// ------Bonus------
let newArray = [...[, ,]];
console.log(newArray);
// ------Bonus------ My prediction : [undefined, undefined]
console.log("--------");

// 🌟 Exercise 4 : Employees
// Instructions
// Using this array:
console.log("Exercise 4 : Employees");
const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];
// Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

const welcomeStudents = users.map((user) => `Hello ${user.firstName}`);
console.log(welcomeStudents);

// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.

const fullStackResident = users.filter((user) => {
  return user.role === "Full Stack Resident";
});
console.log(fullStackResident);

// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.

const fullStackResidentLastNames = users
  .filter((user) => user.role === "Full Stack Resident")
  .map((resident) => resident.lastName);

console.log(fullStackResidentLastNames);
console.log("--------");

// 🌟 Exercise 5 : Star Wars
console.log("Exercise 5 : Star Wars");
// Instructions
// Using this array

const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

// Use the reduce() method to combine all of these into a single string.

const epicPhrase = epic.reduce((accumulator, currentValue) => {
  return accumulator + " " + currentValue;
});

console.log(epicPhrase);
console.log("--------");

// 🌟 Exercise 6 : Employees #2
console.log("Exercise 6 : Employees #2");
// Instructions
// Using this object:

const students = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];

// Using the filter() method, create a new array, containing the students that passed the course.
// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)

const studentsPassed = students
  .filter((student) => student.isPassed === true)
  .forEach((student) =>
    console.log(
      `Good job ${student.name}, you passed the course in ${student.course}`,
    ),
  );
console.log("--------");
