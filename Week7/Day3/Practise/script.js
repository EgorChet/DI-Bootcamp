// function doSomething(f) {
//   // ... get data from server
//   f();
// }

// function myCallback() {
//   console.log("Callback executed!!!");
// }

// doSomething(myCallback);


// // GPT LEARNING 
// // Synchronous Callbacks:
// // Function as an Argument: You pass a function (the callback) as an argument to another function.
// // Execution: The outer function executes its code and, at some point, calls the passed-in callback function with any necessary arguments.


// function greeting(name) {
//     alert('Hello ' + name);
// }

// function processUserInput(callback) {
//     const name = prompt('Please enter your name.');
//     callback(name);
// }

// processUserInput(greeting);


// // Asynchronous Callbacks:
// // Asynchronous callbacks are especially important in JavaScript, where you often need to wait for something to happen (like data to load) without stopping the whole program.

// // Non-Blocking: In a synchronous operation, you wait for it to complete before moving on to another task. In contrast, an asynchronous operation allows the program to move on to another task before it finishes.
// // Execution: When the asynchronous task is complete (like data finishing loading), the callback function is called to handle the result.
// // Example:

// function fetchData(callback) {
//     // simulate a code that fetches data from a server
//     setTimeout(() => {
//         callback('Here is your data!');
//     }, 2000);
// }

// function handleData(data) {
//     console.log(data);
// }

// fetchData(handleData);

// // In this example, fetchData simulates an asynchronous operation using setTimeout. Once the "data is fetched" after 2 seconds, it calls the handleData callback to process the data.

// // Why Use Callbacks in Asynchronous Code?
// // Non-Blocking: They allow your code to be non-blocking, meaning your program can continue running other tasks while waiting for an asynchronous operation to complete.
// // Order of Operations: They ensure that certain code only runs after the asynchronous operation has completed.
// // Flexibility: They provide a way to customize the functionality of a function without changing its code, as the callback can be any function with the appropriate signature.
// // Important Points to Remember:
// // Callback Hell: Excessive use of callbacks can lead to deeply nested code (often called "callback hell" or "the pyramid of doom") which is hard to read and maintain. Solutions include using Promises and async/await.
// // Error Handling: With asynchronous callbacks, especially in Node.js, you often use the "error-first callback" style where the first argument to the callback is reserved for an error object. If there's no error, it's usually null.
// // Understanding callbacks is a foundational step in JavaScript, especially for working with asynchronous operations. As you progress, you'll also learn about advanced patterns and features that build on callbacks, like Promises and async/await, which help manage asynchronous code more elegantly.


// //CallBack
// console.log("Start");

// setTimeout(() => {
//     console.log("Callback executed");
// }, 2000); // Waits 2 seconds before executing the callback

// console.log("End");

// Promises:
// What are Promises?: A Promise is an object representing the eventual completion (or failure) of an asynchronous operation. It allows you to write asynchronous code more manageably, avoiding callback hell.

// States of a Promise:

// Pending: Initial state, neither fulfilled nor rejected.
// Fulfilled: Operation completed successfully.
// Rejected: Operation failed.
// Using Promises:

let myPromise = new Promise((resolve, reject) => {
    const success = true; // just for demonstration
    if (success) {
        resolve("Promise is resolved successfully.");
    } else {
        reject("Promise is rejected.");
    }
});

myPromise.then((message) => {
    console.log(message);  // handle a successful result
}).catch((message) => {
    console.error(message);  // handle an error
});

// Chaining Promises: Instead of nesting, you can chain promises, making the code more readable and easier to understand:

doSomething()
    .then(result => doSomethingElse(result))
    .then(newResult => doThirdThing(newResult))
    .catch(failureCallback);

// Error Handling: Use .catch() at the end of your promise chain to handle any errors that may occur at any point in the chain.
// Summary:
// Asynchronous programming allows for non-blocking operations.
// Callbacks are the fundamental unit of asynchronous operations but can lead to complex code structures known as "callback hell."
// Promises provide a cleaner, more manageable way to handle the results of asynchronous operations and can be chained and handled with .then() and .catch() methods.
// Understanding these concepts is crucial for working with any JavaScript application that performs tasks like API calls, file operations, or any operation that might take time to complete. As you get more comfortable with these, you'll also encounter more advanced patterns like async/await, which further simplifies working with asynchronous operations.





// WHOLE DAY GPT VERSION

// Asynchronous Programming
// JavaScript is single-threaded, meaning it executes one operation at a time. However, certain operations, like fetching data from a server or waiting for user input, can take time. Asynchronous programming allows the program to continue running and execute other code while waiting for these operations to complete.

// Callbacks
// Callbacks are functions passed into other functions as arguments and are executed after some operation has been completed.

// Example:

function fetchDataFromServer(callback){
  setTimeout(()=>{
    const data = 'Data from server';
    callback(data);
  },2000);
}

function processData(data){
  console.log('Received:' + data);
}

fetchDataFromServer(processData);

// setTimeout is an asynchronous function used to delay the execution of a function by a certain number of milliseconds.

// Example:

setTimeout(() => {
  console.log("This message is shown after 1 second.");
}, 1000);
// Promises
// A Promise is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of these states:

// Pending: Initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.
// Example:

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 2000);
});

p.then((message) => {
  console.log(message); // This will log 'Success!' after 2 seconds.
});

// Promise Methods
// .then(): Handles fulfilled promises.
// .catch(): Handles rejected promises.
// .finally(): Executes a function whether the promise is fulfilled or rejected.

// Promise Static Methods
// Promise.all(): Takes an array of promises and returns a single Promise that resolves when all of the promises have resolved or rejects with the reason of the first promise that rejects.
// Promise.allSettled(): Returns a promise that resolves after all of the given promises have either resolved or rejected, with an array of objects describing the outcome of each promise.
// Promise.race(): Returns a promise that fulfills or rejects as soon as one of the promises in the iterable fulfills or rejects, with the value or reason from that promise.
// Handling Asynchronous Operations
// The script gradually moves from simple callbacks to Promises, showing different ways to handle asynchronous operations. It illustrates how to transform callback-based asynchronous code into Promises for better manageability and readability.

// Concepts Overview:
// Asynchronous JavaScript: Understanding how JavaScript handles asynchronous operations using the event loop.
// Callbacks: Functions that are passed as arguments to other functions and called at a later time to continue code execution after an asynchronous operation has completed.
// setTimeout: A method used to delay operations.
// Promises: An enhancement to callbacks providing better syntax and handling for asynchronous operations.
// Promise Methods: Techniques to handle groups of Promises and their various states.
// Action Points:
// Study: Look into each of these concepts individually to understand how they work and their use cases.
// Practice: Try modifying the script, adding more functionality, or handling different scenarios to solidify your understanding.
// Further Learning: As you grow more comfortable with these concepts, explore more advanced topics like async/await, which is a way to handle Promises more elegantly.
