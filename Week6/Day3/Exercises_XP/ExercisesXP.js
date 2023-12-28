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


// 🌟 Exercise 2: Ternary Operator

// Using the code below:

// function winBattle(){
//     return true;
// }

const winBattle = () => true;

let experiencePoints = winBattle() ? 10 : 1;
console.log('Exercise 2: Ternary Operator')
console.log(experiencePoints);

// First, you transform the winBattle() function into an arrow function. Arrow functions provide a concise syntax to write function expressions.
// Then, you create a variable called experiencePoints. Instead of using a traditional if...else statement, you use a ternary operator to assign the value. A ternary operator is a shorthand for if...else that takes three operands: a condition followed by a question mark (?), the expression to execute if the condition is true followed by a colon (:), and the expression to execute if the condition is false.
// In this case, if winBattle() returns true, experiencePoints becomes 10; otherwise, it's 1.
// Lastly, you log experiencePoints to the console to see the result.

// 🌟 Exercise 3: Is It A String?

const isString = (value) => typeof value === 'string';
console.log('Exercise 3: Is It A String?')
console.log(isString('hello'));
console.log(isString([1, 2, 4, 0])); 
console.log('--------');


// 🌟 Exercise 4: Find The Sum

const sum = (a, b) => a + b;

console.log('Exercise 4: Find The Sum')
console.log(sum(10, 15));
console.log('--------');

// 🌟 Exercise 5: Kg And Grams

// Function declaration
function kilogramsToGrams(kg) {
    return kg * 1000;
}
console.log('Invoke function declaration')
console.log(kilogramsToGrams(5)); // 
console.log('---');
// Function expression
const kilogramsToGramsExpr = function(kg) {
    return kg * 1000;
};
console.log('Invoke function expression')
console.log(kilogramsToGramsExpr(5));
console.log('---');

// One-line arrow function
const kgToG = (kg) => kg * 1000;
console.log('Invoke arrow function')
console.log(kgToG(5));
// Difference between function declaration and expression: Function declarations are hoisted,
// meaning they can be called before they are defined. Function expressions are not hoisted.
console.log('--------');

// 🌟 Exercise 6: Fortune Teller
(function(children, partnerName, location, jobTitle) {
    const fortuneDiv = document.createElement('div');
    fortuneDiv.innerText = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${children} kids.`;
    document.body.appendChild(fortuneDiv);  // Appends the fortune message to the body
})(2, 'Jane', 'New York', 'Developer');

// 🌟 Exercise 7: Welcome
(function(userName) {
    // Create the navbar element as a 'div'
    const navbar = document.createElement('div');
    navbar.className = 'navbar';
    navbar.style.cssText = `
        background-color: #333;
        color: white;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    `;

    // Set the inner HTML of the navbar to include the welcome text and profile picture
    navbar.innerHTML = `
        <strong>Welcome, ${userName}!</strong>
        <img src="https://www.uwlax.edu/User/photo/jnunley.jpg" alt="Profile Picture"
             style="width: 50px; height: 50px; border-radius: 50%; margin-left: 15px;">
    `;

    // Add the navbar to the top of the body of the webpage
    document.body.prepend(navbar);  // Prepend ensures navbar stays at the top

})('John');

// 🌟 Exercise 8: Shake Bar
function makeShake(size) {
    const ingredients = [];
    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    function displayShake() {
        const shakeDiv = document.createElement('div');  // Create a new div for the shake message
        shakeDiv.innerText = `The client wants a ${size} shake, containing ${ingredients.join(", ")}.`;
        document.body.appendChild(shakeDiv);  // Append the new div to the body
    }

    addIngredients("banana", "dates", "Tahini");
    addIngredients("Peanut butter", "Strawberry", "MORE BANANA PLEASE");
    displayShake();
}

makeShake("HUGE");

