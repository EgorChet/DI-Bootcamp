const horizontalLine =
  "\x1b[90m\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\x1b[0m";
// 🌟 Exercise 1 : Find The Numbers Divisible By 23
console.log("Exercise 1 : Find The Numbers Divisible By 23");
// Create a function call displayNumbersDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.
// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers that are divisible by 23.

function displayNumbersDivisible(divisor) {
  let number = 500;
  let sum = 0; // Initialize a variable to keep track of the sum
  let arrayOfNum = [];

  for (let i = 0; i <= number; i++) {
    if (i % divisor === 0) {
      // Check if 'i' is divisible by the given divisor
      arrayOfNum.push(i); // Add the number to the array
      sum += i; // Add the number to the sum
    }
  }

  console.log(
    `The list of numbers under 500 divisible by ${divisor}:\n\n${arrayOfNum.join(
      ", ",
    )}\n\n`,
  );
  console.log(
    `The sum of all numbers under 500 that are divisible by ${divisor} is:\n\n${sum}`,
  );
}

let divisor = Number(prompt("Please enter the divisor:"));
// Example:
// displayNumbersDivisible(3) : Console.log all the numbers divisible by 3,
// and their sum
// displayNumbersDivisible(45) : Console.log all the numbers divisible by 45,
// and their sum
displayNumbersDivisible(divisor);
displayNumbersDivisible(3);
displayNumbersDivisible(45);
console.log(horizontalLine);

// 🌟 Exercise 2 : Shopping List
console.log("Exercise 2 : Shopping List");
const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
shoppingList = ["banana", "orange", "apple"];

// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

function myBill() {
  let total = 0;

  for (const item of shoppingList) {
    if (stock[item] && stock[item] > 0) {
      // Check if the item is in stock
      total += prices[item]; // Add the price of the item to the total
      stock[item] -= 1; // Decrease the stock of the item by 1 as a bonus feature
    }
  }

  return total;
}

// Call the myBill() function.
// Bonus: If the item is in stock, decrease the item’s stock by 1
const totalBill = myBill(); // Calculate the total bill
console.log("Total Bill: $", totalBill);
console.log(horizontalLine);

// Exercise 3 : What’s In My Wallet ?
console.log("Exercise 3 : What’s In My Wallet ?");
// Instructions
// Note: Read the illustration (point 4), while reading the instructions

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.
// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01

// 4. To illustrate:

// After you created the function, invoke it like this:

// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

function changeEnough(itemPrice, amountOfChange) {
  // Values of each type of coin
  const coinValues = [0.25, 0.1, 0.05, 0.01];

  // Calculate the total amount of change
  let totalChange = 0;
  for (let i = 0; i < amountOfChange.length; i++) {
    totalChange += amountOfChange[i] * coinValues[i];
  }

  // Compare the total change to the item price
  if (totalChange >= itemPrice) {
    return "You can afford this item.";
  } else {
    return "You cannot afford this item.";
  }
}

// Examples

// changeEnough(14.11, [2,100,0,0]) => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true

console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2, 100, 0, 0]));
console.log(changeEnough(0.75, [0, 0, 20, 5]));
console.log(horizontalLine);

// 🌟 Exercise 4 : Vacations Costs
console.log("Exercise 4 : Vacations Costs");
// Instructions
// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.
// function hotelCost() {
//     let nights;
//     const pricePerNight = 140
//     do {
//         nights = Number(prompt("How many nights you would like to stay in our Hotel?"))
//     } while (isNaN(nights) || nights === "" || nights === null);
//     totalPrice = nights * pricePerNight

//     return `The total cost of your ${nights} nights stay with us will cost you ${totalPrice}$!`
// }

// console.log(hotelCost())

// // Define a function called planeRideCost().
// // It should ask the user for their destination.
// // If the user doesn’t answer or if the answer is not a string, ask again.
// // The function should return a different price depending on the location.
// // “London”: 183$
// // “Paris” : 220$
// // All other destination : 300$
// const destinationDict = {
//     "London": 183,
//     "Paris": 220,
//     "All other destinations": 300
// };

// function planeRideCost() {
//     let destination;

//     // Ask the user for the destination until a valid string is provided
//     do {
//         destination = prompt("Where do you wish to fly? Please enter your destination:");
//     } while (typeof destination !== 'string' || destination === "");

//     // Determine the cost based on the destination
//     let cost = destinationDict[destination] || destinationDict["All other destinations"]; // Default to 300 if not found

//     // Return the cost of the plane ride
//     return `The cost of flying to ${destination} is ${cost}$.`;
// }

// console.log(planeRideCost());

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.
// function rentalCarCost() {
//     let rentDur;
//     let pricePerDay = 40; // Base daily rate

//     do {
//         rentDur = Number(prompt("Please enter the number of days you would like to rent the car for:"));
//     } while (isNaN(rentDur) || rentDur === "" || rentDur === null || rentDur <= 0);

//     // Apply a 5% discount if renting for more than 10 days
//     if (rentDur > 10) {
//         pricePerDay *= 0.95;
//     }

//     // Calculate the total price
//     let totalPrice = rentDur * pricePerDay;

//     // Return the total price of the car rental
//     return `The total price for renting the car for ${rentDur} days is ${totalPrice.toFixed(2)}$.`;
// }

// // Call the function and display the result
// console.log(rentalCarCost());

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
function hotelCost1(nights) {
  const pricePerNight = 140;
  let totalPrice = nights * pricePerNight;
  return `The total cost of your ${nights} nights stay with us will cost you ${totalPrice}$!`;
}

function planeRideCost1(destination) {
  const destinationDict = {
    London: 183,
    Paris: 220,
    "All other destinations": 300,
  };
  let cost =
    destinationDict[destination] || destinationDict["All other destinations"]; // Default to 300 if not found
  return `The cost of flying to ${destination} is ${cost}$.`;
}

function rentalCarCost1(rentDur) {
  let pricePerDay = 40; // Base daily rate
  // Apply a 5% discount if renting for more than 10 days
  if (rentDur > 10) {
    pricePerDay *= 0.95;
  }
  // Calculate the total price
  let totalPrice = rentDur * pricePerDay;
  return `The total price for renting the car for ${rentDur} days is ${totalPrice.toFixed(
    2,
  )}$.`;
}

// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
function totalVacationCost() {
  let nights = Number(
    prompt("How many nights would you like to stay in the hotel?"),
  );
  let destination = prompt(
    "Where do you wish to fly? Please enter your destination:",
  );
  let rentDur = Number(
    prompt("How many days would you like to rent the car for?"),
  );

  // Call the functions with the user inputs as arguments
  let hotelPrice = hotelCost1(nights);
  let flightPrice = planeRideCost1(destination);
  let carRentalPrice = rentalCarCost1(rentDur);

  // Display the total vacation cost
  console.log(hotelPrice);
  console.log(flightPrice);
  console.log(carRentalPrice);
}

// Call the function totalVacationCost()
totalVacationCost();
console.log(horizontalLine);
// Exercise 5 and 6 are completed in separate files as it was a requirement asked on the platform.
console.log(
  "Exercise 5 and 6 are completed in separate files as it was a requirement asked on the platform.",
);
console.log(horizontalLine);
// Exercise 7 : My Book List
console.log(
  "Exercise 7 : My Book List it is done in Elements not in Console so switch to Elements",
);
// Instructions
// Take a look at this link for help.
// The point of this challenge is to display a list of two books on your browser.
// In the body of the HTML page, create an empty section:
// <section class="listBooks"></section>

// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).
let allBooks = [];

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
allBooks.push({
  title: "Harry Potter and the Sorcerer's Stone",
  author: "J.K. Rowling",
  image:
    "http://t3.gstatic.com/images?q=tbn:ANd9GcQttbZNVGzKnwLBGXrKBkt0VY2J2DubjnH_lSQrJCzdSf5fe4OK8yUM27EYhteFc68Ii7Xr9g",
  alreadyRead: true,
});

allBooks.push({
  title: "Harry Potter and the Chamber of Secrets",
  author: "J.K. Rowling",
  image:
    "http://t2.gstatic.com/images?q=tbn:ANd9GcTd-fG9xkzpbR9ug7pe1WHsYud0BN9JgRc3MVWeUfc-pxIJUQN4_TiYrvqUgYwMtTQUfeQz0A",
  alreadyRead: false,
});

// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

const booksSection = document.querySelector(".listBooks");

for (let book of allBooks) {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const img = document.createElement("img");

  h2.innerText = book.title;
  // Remove default margins and center text
  h2.style = "margin: 0; text-align: center;";

  h3.innerText = book.author;
  img.src = book.image;
  img.alt = book.title;
  img.style.width = "100px";

  div.style =
    "border:1px solid black; border-radius:5px; margin:10px; height:300px; display:flex; flex-direction:column; align-items:center; justify-content:center; width:240px";
  if (book.alreadyRead) {
    div.style.color = "red";
  }

  div.append(h2, h3, img);
  booksSection.append(div);
}

booksSection.style = "display: flex; flex-wrap: wrap; justify-content: center;";

// // VERSION 2

// // Select the section where the books will be displayed
// const booksSection = document.querySelector('.listBooks');

// // Function to create a book element and append it to the section
// allBooks.forEach(book => {
//     // Create a div for each book
//     const bookDiv = document.createElement('div');

//     // Set the inner HTML of the div with book details
//     bookDiv.innerHTML = `
//         <h2>${book.title} written by ${book.author}</h2>
//         <img src="${book.image}" alt="${book.title}" style="width:100px;">
//     `;

//     // If the book is already read, change the color to red
//     if (book.alreadyRead) {
//         bookDiv.style.color = 'red';
//     }

//     // Append the book div to the section
//     booksSection.appendChild(bookDiv);
// });
