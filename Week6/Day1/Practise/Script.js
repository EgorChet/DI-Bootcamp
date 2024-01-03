// function drinkCoffee() {
//     console.log("I drink coffee");
// }

// console.log(drinkCoffee) // is not calling the function

// drinkCoffee();

// function userInfo(username, userAge) {
//     console.log(`Welcome to the website ${username} you are ${userAge} years old`);
// }

// userInfo("Dani123",25);
// userInfo("Egor",30);
// userInfo("Da",5);
// userInfo("wfeb3",2);
// userInfo("addsafansdqd123",13);
// userInfo("dasdsfbeni3",7);
// userInfo("aSASDafsDan3",22);

// // 1. Create a structured HTML file linked to a JS file
// // 2. Write a Javascript function that takes a parameter: myAge
// // 3. In the function, console.log the age of my mum and my dad. My mum is twice my age, and my dad is 1.2 the age of my mum.
function parentsAge(usersAge) {
  const momsAge = usersAge * 2; // Calculate mother's age
  const dadsAge = momsAge * 1.2; // Calculate father's age
  console.log(`Your mum's age is ${Math.floor(momsAge)}`); // Log mother's age, rounded down
  console.log(`Your dad's age is ${Math.floor(dadsAge)}`); // Log father's age, rounded down
}

// 4. Call the function after getting the user's age
let usersAge = Number(prompt("What's your age?")); // Prompt user for their age
parentsAge(usersAge); // Call the function with the user's age

// // 1. Create a structured HTML file linked to a JS file
// // 2. Write a Javascript function that takes a parameter: myAge
// // 3. In the function, return the age of my mum (my mum is twice my age)
// function momsAge(MyAge) {
//     momAge = MyAge * 2
//     return `Moms age is ${momAge}!`
// }
// // 4. Call the function
// momsAge(12)
// // 5. In the global scope, console.log the result of the function
// console.log(momsAge(12))

const h1 = document.querySelector("#LiItem2");
console.log(h1);
