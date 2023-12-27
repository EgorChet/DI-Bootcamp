// // 🌟 Exercise 1 : Scope
// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`); // It will be an alert "inside the funcOne function 3"
// }

// // #1.1 - run in the console:
// funcOne()
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ? // this is not possible const is constant 

// //#2
// const a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree() // inside the funcThree function 0
// funcTwo() // will make a = 5
// funcThree() // inside the funcThree function 5
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ? // My prediction is that it will not work once again because const is constant so it will show the first alert and then TypeError

// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()
// // GPT helped I did not know about the window object
// // #3.1 - Predicted alert: "inside the funcFive function hello"
// // funcFour sets 'a' on the window object, which is the global object in browsers.

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }

// // #4.1 - run in the console:
// funcSix()
// // #4.1 - Predicted alert: "inside the funcSix function test"
// // The local variable 'a' within funcSix shadows the global 'a'.

// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?
// // #4.2 - If 'a' is declared with const inside funcSix, it works the same way as let in this context.
// // 'a' inside funcSix is separate from the global 'a'.

// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`); // Predicted alert: "in the if block 5"
// }
// alert(`outside of the if block ${a}`); // Predicted alert: "outside of the if block 2"

// // #5.1 - run the code in the console // The a inside the if block is a different 'a' due to block-scoping of let.
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ?
// // #5.2 - it wont change the anything.


// // 🌟 Exercise 2: Ternary Operator

// // Using the code below:

// // function winBattle(){
// //     return true;
// // }

// const winBattle = () => true;

// let experiencePoints = winBattle() ? 10 : 1;
// console.log(experiencePoints);

// // First, you transform the winBattle() function into an arrow function. Arrow functions provide a concise syntax to write function expressions.
// // Then, you create a variable called experiencePoints. Instead of using a traditional if...else statement, you use a ternary operator to assign the value. A ternary operator is a shorthand for if...else that takes three operands: a condition followed by a question mark (?), the expression to execute if the condition is true followed by a colon (:), and the expression to execute if the condition is false.
// // In this case, if winBattle() returns true, experiencePoints becomes 10; otherwise, it's 1.
// // Lastly, you log experiencePoints to the console to see the result.

// // 🌟 Exercise 3: Is It A String?

// const isString = (value) => typeof value === 'string';

// console.log(isString('hello'));
// console.log(isString([1, 2, 4, 0])); 

// // 🌟 Exercise 4: Find The Sum

// const sum = (a, b) => a + b;

// // 🌟 Exercise 5: Kg And Grams

// // Function declaration
// function kilogramsToGrams(kg) {
//     return kg * 1000;
// }
// console.log(kilogramsToGrams(5)); // Invoke function declaration

// // Function expression
// const kilogramsToGramsExpr = function(kg) {
//     return kg * 1000;
// };
// console.log(kilogramsToGramsExpr(5)); // Invoke function expression

// // One-line arrow function
// const kgToG = (kg) => kg * 1000;
// console.log(kgToG(5)); // Invoke arrow function

// // Difference between function declaration and expression: Function declarations are hoisted,
// // meaning they can be called before they are defined. Function expressions are not hoisted.

// 🌟 Exercise 6: Fortune Teller

// Self invoking function
(function(children, partnerName, location, jobTitle) {
    document.body.innerHTML = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${children} kids.`;
})(2, 'Jane', 'New York', 'Developer');

// // 🌟 Exercise 7: Welcome

// // Assuming HTML contains a <div id="navbar"></div>
// (function(userName) {
//     const navbar = document.getElementById('navbar');
//     const div = document.createElement('div');
//     div.textContent = `Welcome, ${userName}!`;
//     navbar.appendChild(div);
// })('John');

// // 🌟 Exercise 8: Juice Bar

// function makeJuice(size) {
//     let ingredients = [];

//     function addIngredients(...args) {
//         ingredients.push(...args);
//     }

//     function displayJuice() {
//         document.body.innerHTML = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
//     }

//     // Add ingredients and display juice
//     addIngredients('apple', 'banana', 'mango');
//     addIngredients('pineapple', 'peach');
//     displayJuice();
// }

// makeJuice('large');
