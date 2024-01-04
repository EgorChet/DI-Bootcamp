// Exercises XP
// Last Updated: September 22nd, 2023

// What You Will Learn:
// Promises

// 🌟 Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.
// Test:

// Function to compare the number to 10 and return a Promise
function compareToTen(num) {
  return new Promise((resolve, reject) => {
    // Check if the number is less than or equal to 10
    if (num <= 10) {
      resolve(`${num} is less than or equal to 10`);
    } else {
      reject(`${num} is greater than 10`);
    }
  });
}

//In the example, the promise should reject
compareToTen(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); // Expected output: "15 is greater than 10"

//In the example, the promise should resolve
compareToTen(8)
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); // Expected output: "8 is less than or equal to 10"

// 🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.

// Define successPromise using arrow function syntax
const successPromise = () => {
  // Return a new Promise
  return new Promise((resolve, reject) => {
    // Use setTimeout to resolve the promise after 4 seconds
    setTimeout(() => {
      resolve("success");
    }, 4000); // 4000 milliseconds = 4 seconds
  });
};

// Test the promise
successPromise()
  .then((result) => console.log(result)) // Log the result if the promise resolves
  .catch((error) => console.log(error)); // Log the error if the promise rejects

// 🌟 Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
const resolvedPromise = Promise.resolve(3);
resolvedPromise
  .then((value) => console.log("promise resolved with", value))
  .catch((error) => console.log("Rejected with:", error));
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
rejectedPromise = Promise.reject("Boo!");
rejectedPromise
  .then((value) => console.log("promise resolved with", value))
  .catch((error) => console.log("Rejected with:", error));

// Exercise 4: Quizz - Not Mandatory
// Follow this tutorial and do the quizz until the page called “a few tricks with promises”.

// The code snippet below is synchronous. It calls callback1 one time and callback2 three times. You must modify this code to make it asynchronous with the following rules:

// callback1 must be called only one time, after 2 seconds.
// callback2 must be called three times with an interval of 1 second.

function job(callback1, callback2) {
  // Call callback1 after 2 seconds
  setTimeout(() => {
    callback1();
  }, 2000);

  // Call callback2 three times with an interval of 1 second between each call
  let count = 0;
  let intervalId = setInterval(() => {
    callback2();
    count++;

    // After calling callback2 three times, clear the interval
    if (count === 3) {
      clearInterval(intervalId);
    }
  }, 1000);
}

// Prepare for the future
// Browsers will abandon synchronous requests. It's something we can't avoid. One day, it will just stop working. Some recent JavaScript frameworks (like AngularJS) forbid synchronous requests. You have to be ready for the asynchronous world.

// Are there any downsides?
// Yes there are. As you know now, asynchronous code relies on providing callbacks. The problem is that everyone is implementing callbacks however they want. If you are familliar with asynchronous code using a framework like jQuery, you know you can't just use it directly with any other framework. However, there are more downsides. Take a look at this code snippet:

function job1(callback) {
  setTimeout(function () {
    callback("test 1");
  }, 2000);
}

function job2(callback) {
  setTimeout(function () {
    callback("test 2");
  }, 4000);
}

job1(function (data) {
  console.log(data);

  job2(function (data) {
    console.log(data);
  });
});
// In this code, we want to call job2 after job1. job1 takes a callback as argument. Therefore, you have to call job2 in your callback directly. This kind of code will force a monolithic design because each callback must know the next callback. But it can get far worse; we all know it. The pyramid of DOOM:

job1(function () {
  doSomething1();

  job2(function () {
    doSomething2();

    job3(function () {
      doSomething3();

      job4(function () {
        doSomething4();
      });
    });
  });
});
// The next big problem comes when you want to join multiple asynchronous calls. Imagine you want to execute some code when job1and job2 are done. You'll code something like this:

const counter = 0;

job1(function () {
  doSomething1();

  counter += 1;

  if (counter == 2) {
    done();
  }
});

job2(function () {
  doSomething2();

  counter += 1;

  if (counter == 2) {
    done();
  }
});

function done() {
  console.log("done");
}
// With more and more asynchronous code and features in recent frameworks, we need something to manage it. Here comes our savior: the Promise class.
