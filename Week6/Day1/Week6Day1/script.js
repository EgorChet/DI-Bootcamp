// let numbers = [123, 8409, 100053, 333333333, 7];

// for (let number of numbers) {
//   if (number % 3 === 0) {
//     console.log(number % 3);
//     console.log(true);
//   } else {
//     console.log(number % 3);
//     console.log(false);
//   }
// }

//Let and Const
//Let-> When we need to re-define the variable in the future

// let username;

// do {
//   username = prompt("what is your username?");
// } while (username !== "admin");

// const myArr = [1, 2, 3, 4, 5];
// for (let x = 2; x < 30; x++) {
//   console.log(x);
// }
// myArr.push("6");
// myArr=[325]
// let outer = 3;
// for (let x = 1; x < 5; x++) {
//   let num = 0;
//   console.log(outer);
// }
// console.log(num);
// console.log(fname);

// let num = 0;
// for (let x = 1; x < 6; x++) {
//   num++;
// }
// console.log(num);

//Function
// function drinkCoffee() {
//   console.log("I drink coffee");
// }

// drinkCoffee();

// function userInfo(username) {
//   console.log(`Welcome to the website ${username}`);
// }

// userInfo("Dani123");
// userInfo("Bob");
// userInfo("sam");
// userInfo("shira");
// userInfo("yael");
// userInfo("Dani123");

// function calculate(a, b, c, d) {
//   console.log(a + b + c + d);
// }

// calculate(1, 2, 3, 4);

//Default value
// function userInfo(username, userAge = "unknown") {
//   console.log(`my name is ${username} my age is ${userAge}`);
// }

// userInfo("dani", 33);
// userInfo("asdasdasdasd");

//Local variables
// function userMoreInfo(userName, userAge) {
//   let eyeColor = "blue"; //local variable
//   console.log("My name is " + userName + ", my age is " + userAge + ", I have " + eyeColor + " eyes");
//   console.log(eyeColor);
// }

// userMoreInfo("user1", 22);

//Exercise 1

// function parentsAge(myAge) {
//   const momsAge = myAge * 2;
//   console.log(`My mom is ${momsAge} and my dad is ${momsAge * 1.2}`);
// }
// let age = Number(prompt("whats your age?"));
// parentsAge(age);

//Return
// function userInfo(userName, userAge) {
//   let result = "My name is " + userName + ", my age is " + userAge;
//   return result;
// }

// let functionReturn = userInfo("dani2", 27);
// console.log(functionReturn);

// function calc(a, b) {
//   return a + b;
// }

// console.log(calc(1, 2) + calc(2, 3));

// function isDivisable(number, divisable) {
//   if (number % divisable === 0) {
//     return "The number is even";
//   } else {
//     return "The number is odd";
//   }
// }

// console.log(isDivisable(2, 2));
// console.log(isDivisable(5, 2));
// console.log(isDivisable(7, 2));

// function calcAge(myAge) {
//   return myAge * 2;
// }

// console.log(calcAge(27));

//Exceptions

// try {
//   const fruit = "apple";
//   throw new ReferenceError("I made up an error, haha");
//   console.log("ignore this");
// } catch (err) {
//   console.log(err.name);
//   console.log(err.message);
//   console.log(err.stack);
// } finally {
//   console.log("I will run regardless of error");
// }

//Object Methods
// const person = {
//   firstName: "Sarah",
//   eyeColor: "Blue",
//   eat: function () {
//     console.log(`My name is ${this.firstName} and I love chocolate`);
//   },
// };

// person.eat();
// function hello() {
//   console.log("Hello " + this.firstName);
// }
// const person = {
//   firstName: "Sarah",
//   eyeColor: "Blue",
//   age: 25,
//   calc: function () {
//     console.log(`MY MOMS AGE IS ${this.age * 2}`);
//   },
//   hello: hello,
// };

// const person2 = {
//   firstName: "Bob",
//   eyeColor: "Blue",
//   age: 25,
//   calc: function () {
//     console.log(`MY MOMS AGE IS ${this.age * 2}`);
//   },
//   hello: hello,
// };

// person2.hello();
// person.hello();

//DOM
//queryselector
// const h1 = document.querySelector("h1");
// console.log(h1);

// const li = document.querySelector("#secondListItem");
// console.log(li);

// const h1 = document.querySelector(".headers");
// console.log(h1);

//queryselectorall

// const listItems = document.querySelectorAll("li");
// console.log(listItems);

// const listItems = document.querySelectorAll(".secondList");
// console.log(listItems);

// const firstList = document.querySelector("#firstList");

// console.log(firstList.children);

//getelementbyid

// const firstUl = document.getElementById("firstList");
// console.log(firstUl);

// const lis = document.getElementsByClassName("firstList");
// console.log(lis[1].innerText);

// const h2 = document.createElement("h2");
// h2.innerText = "This is our first createElement";

// const div = document.querySelector("#container");

// div.append(h2);

//Matches
// let ul = document.getElementById("firstList");
// ul.style.backgroundColor = "red";
// ul.style.borderRadius = "14px";

// console.log(ul.matches("#firstList"));
//Closest
// const listItems = document.querySelectorAll("li");
// const secondLi = listItems[1];

// console.log(secondLi.closest("#firstList"));

//Exercise:
const body = document.querySelector("body");
const div1 = document.getElementById("container");
const div2 = document.querySelector("#container");
const div3 = document.querySelector("div");
const div4 = body.firstElementChild;

// console.log(div1);
// console.log(div2);
// console.log(div3);
// console.log(div4);

// const ulNodes = document.querySelectorAll("ul");
// const ulNodes2 = document.getElementsByClassName("list");
// console.log(ulNodes);
// console.log(ulNodes2);
// console.log(ulNodes[0].children[0]);
// console.log(ulNodes[0].children[1]);
// console.log(ulNodes[1].children[0]);
// console.log(ulNodes[1].children[1]);

// for (let ul of ulNodes) {
//   for (let li of ul.children) {
//     console.log(li);
//   }
// }

// console.log(ulNodes[0].children[0]);
// console.log(ulNodes[1].children[0]);

// for (let ul of ulNodes) {
//   for (let i = 0; i < ul.children.length; i++) {
//     if (i === 0) {
//       console.log(ul.children[i]);
//     }
//   }
// }

//Attributes
// const div = document.querySelector("div");
// const img = document.createElement("img");
// console.log(div.hasAttribute("id"));

// console.log(div.getAttribute("id"));

// div.setAttribute("class", "red");
// // div.removeAttribute("class");
// img.setAttribute("src", "https://m.media-amazon.com/images/I/41+gelS+89L._AC_UF894,1000_QL80_.jpg");

// img.setAttribute("style", "width:100px;");
// div.append(img);
const a = document.querySelector("a");
// const href = a.getAttribute("href");
// const hreflang = a.getAttribute("hreflang");
// const rel = a.getAttribute("rel");
// const target = a.getAttribute("target");
// const type = a.getAttribute("type");

// console.log(href);
// console.log(type);

// a.style = "border:3px solid black;background-color:red;";
// // a.style.backgroundColor = "red";
// a.style.color = "white";
// console.log(a.className);
// a.className = "overwrite";

//Classlist
// a.classList.add("bClass");
// a.classList.add("cClass");
a.classList.remove("aClass");
a.classList.add("bClass", "cClass");
console.log(a.classList.contains("dClass"));
