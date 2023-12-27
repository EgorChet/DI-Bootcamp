// const allBooks = [
//   {
//     title: "Harry Potter 1",
//     author: "JK R",
//     img: "https://kids.scholastic.com/content/kids64/en/books/harry-potter/_jcr_content/root/responsivegrid/responsivegrid_1333535796/responsivegrid_19882/image_copy_136678971_1190196747.coreimg.100.1285.png/1693924446949/7-hp-grandpre-refresh-deathlyhallows-sm.png",
//     alreadyRead: true,
//   },
//   {
//     title: "Harry Potter 2",
//     author: "JK R",
//     img: "https://images.booksense.com/images/866/064/9780439064866.jpg",
//     alreadyRead: false,
//   },
// ];

// const listBooksSection = document.querySelector(".listBooks");

// for (let book of allBooks) {
//   const div = document.createElement("div");
//   const h2 = document.createElement("h2");
//   const h3 = document.createElement("h3");
//   const img = document.createElement("img");

//   h2.innerText = book.title;
//   h3.innerText = book.author;
//   img.setAttribute("src", book.img);
//   img.style.width = "100px";
//   div.style =
//     "display:inline-block;border:1px solid black;border-radius:5px; margin:10px; height:320px; display:flex;flex-direction:column; width:100px";
//   div.append(h2, h3, img);
//   listBooksSection.append(div);

//   if (book.alreadyRead) {
//     h2.style.color = "red";
//     h3.style.color = "red";

// let y = 2;
// function greet() {
//   let x = 1;
//   return x + y;
// }

// console.log(greet());

//Access Before Decleration
// function doSomething() {
//   console.log(x); //undefined
//   var x = 1;
//   console.log("x: ", x); //x: 1
// }
// doSomething();
// var x = 2;
// {
//   //   console.log(x); //undefined
//   var x = 1;
//   console.log("x: ", x); //x: 1
// }

// console.log(x);
// function checkAge(age) {
//   let message;
//   if (age < 18) {
//     message = "Sorry, you're too young.";
//   } else {
//     message = "Yay! You're old enough!";
//   }

//   return message;
// }

// console.log(checkAge(1));
// function numbers() {
//   for (let i = 0; i < 5; i += 1) {
//     console.log(i);
//   }
//   console.log(i);
// }
// numbers();

//Default Parameters
// function mulitply(a, b = 1) {
//   return a * b;
// }

// console.log(mulitply(2, 2));

// function getFee(isMember) {
//   return isMember ? "2.00" : "10.00";
//   //   if (isMember) {
//   //     return 2.0;
//   //   } else {
//   //     return 10.0;
//   //   }
// }

// console.log(getFee(true));
// console.log(getFee(false));

// function checkYear() {
//   const userAnswer = Number(prompt("Give me a year"));
//   const str = userAnswer > 2000 ? "You are in the 21century" : "You live in the middle age";
//   console.log(str);
// }
// checkYear();

// let fname = "daniel";
// console.log(`my name is ${fname}`);

// console.log("string text line 1 \nstring text line 2");
// console.log(`string text line 1
// string text line 2`);

//Functions
//Function Decleration

// function funcName(params) {
//   //code to execute....
// }

// //Function Expression
// const funcName1 = function (params) {
//   //code to execute..
// };

//Arrow function

// function myFunc(x, y) {
//   return x + y;
// }

// console.log(myFunc(2, 9));

// const myFunc1 = (x, y) => {
//   return x + y;
// };

// const myFunc2 = (x, y) => x + y;
// const myFunc2 = (x) => x + 2;
// console.log(myFunc2(2));

// const calculator = (num1, num2, operator) => {
//   return operator === "+"
//     ? num1 + num2
//     : operator === "-"
//     ? num1 - num2
//     : operator === "*"
//     ? num1 * num2
//     : operator === "/"
//     ? num1 / num2
//     : "Invalid Operator";
// };

// console.log(calculator(1, 2, "+"));
// console.log(calculator(1, 2, "-"));
// console.log(calculator(1, 2, "*"));
// console.log(calculator(1, 2, "/"));
// console.log(calculator(1, 2, "asdasdasd"));

// function add() {
//   let counter = 0;
//   function plus() {
//     counter += 1;
//     console.log(counter);
//   }
//   plus();
// }
// add();

//Closures

// function outside(x) {
//   function inside(y) {
//     return x + y;
//   }
//   return inside;
// }

// let fnInside = outside(3);
// console.log(fnInside);

// let result = fnInside(10);

// console.log(result);

// let add = (function () {
//   let counter = 0;
//   function calculus() {
//     counter += 1;
//     return counter;
//   }
//   return calculus;
// })();

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());

//Currying
// const add = (a) => (b) => a + b;
// const result = add(2)(3);

// console.log(result);

//Uncurrying
// const curriedAdd = (x) => (y) => x + y;
// const uncurried = (x, y) => curriedAdd(x)(y);

// console.log(uncurried(1, 2));

//Refrence or value

// const colors = ["blue", "green", "grey"];
// //x1

// const person = {
//   fname: "Daniel",
//   age: 27,
// };
// //x2

// const person2 = person;
// person.country = "Israel";

// const colors1 = colors;
// const colors2 = colors1;
// //x1
// colors.push("black");
// console.log(colors);
// console.log(colors1);

//Copying as opposed to refrencing

// const colors = ["blue", "green", "grey"];
// // console.log(...colors);
// const colors2 = [...colors];
// colors.push("black");
// console.log(colors);
// console.log(colors2);

//Object
// let user = {};
// let alsoObject = new Object();
// console.log(alsoObject);
// console.log(user);

//Dot-Notation
// let myCar = new Object();
// myCar.make = "Ford";
// myCar.model = "Mustang";
// myCar.year = 1969;

// console.log(myCar);
// //Bracket Notation
// for (let key in myCar) {
//   console.log(myCar[key]);
// }

// console.log(myCar.make);
// let property = "make";
// console.log(myCar[property]);

// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//   };
// }

// let user = makeUser("John", 30);
// console.log(user);

// function makeUserShorthand(name, age) {
//   return {
//     name,
//     age,
//   };
// }

// let user2 = makeUserShorthand("John", 40);
// console.log(user2);

// const person = {
//   name: "Lydia",
//   age: 21,
// };

// for (const item in person) {
//   console.log(item + " " + person[item]);
// }

//Advanced Javascript Methods
// const colors = ["blue", "yellow", "green"];
// console.log(colors.includes("Blue"));

// const str =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, nihil architecto tempora obcaecati facere tenetur sed expedita voluptas possimus placeat. Perferendis excepturi eius nesciunt quaerat et id quam accusantium necessitatibus?";

// console.log(str.includes("exp"));

// console.log("bottle".replace("tt", "z"));
// let str = "string";
// str = str.padStart(str.length + 3, "CAT");
// console.log(str);

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

// for (let fruit of groceries.fruits) {
//   console.log(fruit);
// }

groceries.fruits.forEach((fruit) => {
  console.log(fruit);
});
