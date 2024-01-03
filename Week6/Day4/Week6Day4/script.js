//forEach -> run a given function for each one of my elements in an array
// const myArray = [2, 3, 4, 5, 6];
// const colors = ["red", "blue", "green", "purple"];

// colors.forEach((element, theIndex, arr) => {
//   console.log(theIndex + " " + element);
// });

//Exercise
// const numbers = [10, 11, 12, 15, 20];

// numbers.forEach((element) => {
//   if (element % 2 === 0) {
//     console.log(element);
//   }
// });

// numbers.forEach((element) => {
//   element % 2 === 0 ? console.log(element + " is even") : console.log(element + " is odd");
// });

// numbers.forEach((element) => {
//   element % 2 === 0 && console.log(element);
// });

//Some-> Will return true if at least one element in an array matches a given condition
// const myArr = [1, 2, 3, 4, 5, 6, 7, 8];

// let someReturn = myArr.some((element) => {
//   console.log(element);
//   return element === 6;
// });

// console.log(someReturn);

//Exercise
// const words = ["wow", "hey", "bye"];

// let returnedSome = words.some((element) => {
//   return element[0] === "h";
// });

// console.log(returnedSome);

// let returnedSome = words.some((element) => {
//   return element.startsWith("h");
// });

// console.log(returnedSome);

//Every Will return true if all of my elements in an array matches a given condition

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8];

// let returnedEvery = myArr.every((element) => {
//   console.log(element);
//   return element < 5;
// });

// console.log(returnedEvery);

//Exercise
// const words = ["hello", "hey", "hola"];

// let returnedEvery = words.every((elements) => {
//   return elements[0] === "h";
// });

// console.log(returnedEvery);

//Map
// const originalArray = [1, 4, 9, 16];

// const newArr = originalArray.map((element) => {
//   if (element > 4) {
//     return element * 2;
//   } else {
//     return element;
//   }
// });

// console.log(newArr);

// const newArr = myArr.map((element, i) => {
//   return {
//     value: element,
//     index: i,
//   };
// });

// console.log(newArr);

// const newArr = myArr.map((element) => {
//   return `The element is ${element} `;
// });

// console.log(newArr);

// const myArr = [10, 20, 30, 40];

// const newArr = myArr.map((element) => {
//   return element * 10;
// });
// console.log(myArr);
// console.log(newArr);

//Filter
// const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

// const newArr = words.filter((word) => {
//   return word.length > 6;
// });

// console.log(newArr);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newArr = numbers.filter((element) => {
//   return element > 3;
// });

// console.log(newArr);

//Reduce

// const arr = [1, 4, 9, 16];

// let sum = arr.reduce((acc, val) => {
//   console.log(val);
//   return acc + val;
// }, 0);

// console.log(sum);

//Exercise
// let party = [
//   {
//     desert: "Chocolate Mousse",
//     calories: 30,
//   },
//   {
//     desert: "Apple Pie",
//     calories: 15,
//   },
//   {
//     desert: "Croissant",
//     calories: 50,
//   },
//   {
//     desert: "Strawberry Icecream",
//     calories: 5,
//   },
// ];

// let sum = party.reduce((acc, val) => {
//   return val.desert != "Apple Pie" ? acc + val.calories : acc;
// }, 0);

// console.log(sum);

// let sum1 = party.reduce((acc, val) => {
//   if (val.desert === "Apple Pie") {
//     return acc;
//   } else {
//     return acc + val.calories;
//   }
// }, 0);
// console.log(sum1);

//Destructuring
// let [a, b] = [10, 20, 30, 40, 50];

// console.log(a);
// console.log(b);
// console.log(c);

// let arr = ["Shlomi", "Elhanan"];
// let [person1, person2] = arr;
// console.log(person1);
// console.log(person2);

//Spread Operator
// let a = 10;
// let b = 20;
// let rest = [30, 40, 50];
// const arr = [a, b, ...rest];
// console.log(arr);

//Rest operator
// let [a, b, ...c] = [10, 20, 30, 40, 50];

// console.log(a);
// console.log(b);
// console.log(c);

//Create a copy of an array->
// const rainbow = ["red", "orange", "yellow"];
// const rainbowClone = rainbow;

// rainbow.push("black");
// rainbowClone.push("white");

// console.log(rainbow);
// console.log(rainbowClone);

// const [...rainbowClone] = rainbow;

// console.log(rainbowClone);
// const rainbow = ["red", "orange", "yellow"];

// const rainbowClone = [...rainbow];

// rainbowClone.push("black");
// console.log(rainbowClone);
// console.log(rainbow);

//Exercise from day 3 XP 8
// const container = document.querySelector("div");
// function makeShake(size) {
//   const ingredients = [];
//   function addIngredients(ing1, ing2, ing3) {
//     ingredients.push(ing1, ing2, ing3);
//   }
//   function displayShake() {
//     container.innerText = `The client wants a ${size} shake, containing ${ingredients.join(" ,")}`;
//   }
//   addIngredients("banana", "dates", "Tahini");
//   addIngredients("Penut butter", "Strawberry", "MORE BANANA PLEASE");

//   displayShake();
// }

// makeShake("HUGE");
// console.log(...["hello", "each", "element", "now", "string"]);
// const obj = {
//   fname: "Dan",
//   lname: "R",
// };
// const myArr = [1, 2, 3];
// const myArr2 = [...myArr];
// console.log(`${myArr2}`);

// let v = ["One", "Two", "Three"] + "";
// console.log(typeof v);
