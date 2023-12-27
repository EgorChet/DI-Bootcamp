//Console.log
// console.log("hello world");

//Javascript Variables
// let x = 2;
// let x = 1;
// console.log(x);
// let my_name="daniel"
// let _$his_name = "sam";
// let name1="Bob"
// let a = 2;
// let A = 3;
// console.log(a);
// console.log(A);

// let nameOfUser = "Dani";

// let x, y;
// x = 5 + 2;
// y = x * 2;

// console.log(y);

// let x = 5 + 2;
// let y = x * 2;

//Data Types
//String

// let a = "Hello";
// let b = "World";
// let c = a + " " + b;
// console.log(c);

// let longString = "This is a very long string which needs to wrap across multiple lines because otherwise my code is unreadable.";

//String Propertry
// let shortString = "Hello ";
// console.log(longString.length);
// console.log(shortString.length);

//String Methods

// let str = "Hello Everyone, please say hello to the class";
// // console.log(str);

// let posUppercaseHello = str.indexOf("Hello");
// console.log(posUppercaseHello);

// let posLowercaseHello = str.indexOf("hello");
// console.log(posLowercaseHello);

// let str = "Hello Everyone, please say hello to the class ";
// console.log(str.substring(0, 27));

// let str = "Hello EveRyone, pleAse say helLo to the class ";
// console.log(str.toUpperCase());

// let addressNumber = 2;
// let addressStreet = "Ben Yehuda";
// let country = "Israel";

// let globalAddress = "I live in " + addressStreet + " " + addressNumber + ", in " + country;

// console.log(globalAddress);

// let globalAddressButBetter = `I live in ${addressStreet} ${addressNumber}, in ${country}`;

// console.log(globalAddressButBetter);

// Numbers
// let x = 2;
// let y = "2";
// console.log(x + 1);

// console.log(y + 1);

//Number Methods
// let op = "me";
// let num = "1";
// let numTypeNum = 1;
// console.log(isNaN(op));
// console.log(isNaN(num));
// console.log(isNaN(numTypeNum));

// console.log(numTypeNum);
// console.log(numTypeNum.toString());

// let op = 10.6789;
// console.log(op.toFixed(2));
// console.log(op.toFixed(1));
// console.log(op.toFixed());

//Exercise 2
// let birthYear = 1997;
// let futureYear = 2025;
// let ageInThatYear = 2025 - 1997;
// console.log(`I will be ${ageInThatYear} in ${futureYear}`);
// console.log("I will be " + ageInThatYear + " in " + futureYear);

//Boolean
//true or false
// console.log(Boolean(10 > 9));
// console.log(Boolean(10 < 9));

//Comparison
//Declare
// let str = "string";

//Comparing values
// console.log(1 == "1");
// console.log(1 === "1");
// console.log(1 != "1");

// console.log(1 > 0 && 2 > 2);
// console.log(0 > 0 || 3 > 2);

// let x = 10;

// x = x + 1;
// x++;

// console.log(x);

// x--;
// console.log(x);

// x += 10;
// console.log(x);

// x *= 10;

// console.log(x);

//User Interface Functions
//Alert

// alert("Hello");

// let userAnswer = prompt("What is your username?");
// console.log(userAnswer);

// let confirmAnswer = confirm("Are you the boss?");
// console.log(confirmAnswer);

//Array

// let user1 = "John";
// let user2 = "Bill";
// let user3 = "Nancy";

// let users = ["John", "Bill", "Nancy", "Sam"];
// console.log(users[3]);

//NestedArray
// let sampleArr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8],
// ];

// console.log(sampleArr[0]);
// console.log(sampleArr[0][1]);

//changing element in array
// let colors = ["blue", "yellow", "green"];
// console.log(colors[0]);
// colors[0] = "black";
// console.log(colors);

// console.log(colors.length);

//Array Methods
//Push to add element to end of array
// let colors = ["blue", "yellow", "green"];
// console.log(colors);
// colors.push("white", "pink");

// console.log(colors);
//Remove last element of array
// colors.pop();
// console.log(colors);

//Splice->changes original array0>can remove ,add and replace elements
// colors.splice(1, 1, "pink");
// console.log(colors);

//Slice ->returns a new array, doesnt touch original, can only slice an array
// let slicedArray = colors.slice(0, 2);
// console.log(slicedArray);
// let slicedArray = colors.slice(1, 2);
// console.log(slicedArray);
// let colorstring = colors.toString();
// console.log(colors);
// console.log(colorstring);

//Exercise 3
// let pets = ["cat", "dog", "fish", "rabbit", "cow"];
// let dogIndex = pets.indexOf("dog");
// console.log(pets[dogIndex]);
// let rabbitIndex = pets.indexOf("rabbit");

// pets.splice(rabbitIndex, 1, "horse");
// console.log(pets.length);

//Objects
//array-> let arr=["red","blue","green"]

//object->
// let person = {
//   fname: "Dani",
//   lname: "Robb",
//   age: 27,
// };

// console.log(person);

// console.log(person.lname);
// console.log(person.age);
// console.log(person.fname);

// console.log(person["fname"]);
//edit or add new key value pairs
// person.country = "ISRAEL";
// person.favoriteFood = "Meat";
// person.age = 28;

// delete person.fname;
// console.log(person);

//Exercise 1 Objects
// let myObj = {
//   username: "dani123",
//   password: "1234",
// };

// let database = [myObj];

// let newsfeed = [
//   { username: "Dani123", timeline: 2020 },
//   { username: "Dani123", timeline: 2020 },
//   { username: "Dani123", timeline: 2020 },
// ];

//Conditionals
//If statement
// if(condition){
//     execute this code
// }

// let age = 17;

// if (age > 17) {
//   console.log("You can drive");
// } else {
//   console.log("You can not drive");
// }

// let age = 12;
// if (age == 18) {
//   console.log("its your birthday!");
// } else if (age > 18) {
//   console.log("We can go to a pub together");
// } else {
//   console.log("Sorry. Stay home tonight ..");
// }

//Keyless Car
// let age = prompt("What is your age?");
// if (age < 18) {
//   alert("Sorry, you are too young to drive this car. Powering off");
// } else if (age == 18) {
//   alert("Congratulations on your first year of driving. Enjoy the ride!");
// } else {
//   alert("Powering on, enjoy");
// }

//Switch case
// let fruit = "Apples";
// switch (fruit) {
//   case "Apples":
//     console.log("Apples are $1 a kilo");
//     break;
//   case "Bananas":
//     console.log("Bananas are $2 a kilo");
//     break;
//   case "Strawberries":
//     console.log("Strawberries are 1$ per kilo");
//     break;
//   case "Papayas":
//   case "Mangoes":
//     console.log("Mangoes and Papayas are $2.4 a kilo");
//     break;
//   default:
//     console.log("Sorry we do not have " + fruit);
// }

//FOR LOOP
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let colors = ["blue", "yellow", "green", "pink"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);

// let person = {
//   fname: "John",
//   lname: "Doe",
//   age: 25,
// };
// console.log(person.fname);
// console.log(person["fname"]);

// for (let key in person) {
//   console.log(key);
//   console.log(person[key]);
// }

//For of loop

// let colors = ["blue", "yellow", "green", "pink"];

// for (let x of colors) {
//   console.log(x);

// }

//While loop
// let userAnswer = prompt("what is the special password?");

// while (userAnswer != 1234) {
//   userAnswer = prompt("Wrong, try again..what is the special password?");
// }

// console.log("Welcome to the special section");

//Do While
// let userAnswer = 1234;
// do {
//   userAnswer = prompt("Please enter the password...");
// } while (userAnswer != 1234);

//Break
// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//     console.log("WE BROKE OUT");
//     break;
//   }
//   console.log("The position is " + i);
// }

//Continue
// for (let i = 0; i < 10; i++) {
//   if (i === 3 || i === 5 || i === 8) {
//     continue;
//   }
//   console.log("The position is " + i);
// }

let names = ["john", "sarah", 23, "Rudolf", 34];

// for (let name of names) {
//   if (typeof name != "string") {
//     continue;
//   } else {
//     if (name[0] != name[0].toUpperCase()) {
//       name = name[0].toUpperCase() + name.slice(1);
//       console.log(name);
//     }
//   }
// }

// for (let name of names) {
//   if (typeof name != "string") {
//     break;
//   } else {
//     console.log(name);
//   }
// }
