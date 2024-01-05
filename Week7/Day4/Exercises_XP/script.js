// Exercises XP
// Last Updated: September 22nd, 2023

// What We Will Learn
// Fetch API
// Async/Await

// 🌟 Exercise 1 : Giphy API
// Instructions
// With your knewly accumulated knowledge of the Fetch API lets write some cool code!

// You will work with this part of the documention

// You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Explanation of the Gif URL and the queries

// q Request Parameter: Search query term or phrase. Above, the URL is searching for “hilarious” gifs

// rating Request Parameter: Filters results by specified rating. We are searching for Level 1 gifs. Check out the ratings documentation

// api_key Request Paramater : GIPHY API Key. Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Create a program to retrieve the data from the API URL provided above.
// Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
// Make sure to check the status of the Response and to catch any occuring errors.


//To perform this task using the Fetch API and async/await in JavaScript. I'll be making a GET request to the Giphy API to retrieve data and then log the JavaScript object that I receive.

// Understanding the API URL:

// The base URL is https://api.giphy.com/v1/gifs/search.
// The query parameter q=hilarious specifies the search term.
// The rating=g parameter filters results by the specified rating.
// The api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My is API key for accessing Giphy's API.

async function fetchGifs() {
    try {
        const url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

        const response = await fetch(url);

        // Check if the request was successful
        if (response.ok) {
            // Parse the JSON from the response
            const data = await response.json();

            // Log the result
            console.log(data);
        } else {
            // If the response was not ok, log the status
            console.log("HTTP Error: " + response.status);
        }
    } catch (error) {
        // Catch and log any errors
        console.error("Fetch error: " + error.message);
    }
}


// 🌟 Exercise 2 : Giphy API
// Instructions
// Read carefully the documention to understand all the possible queries that the URL accept.
// Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
// Console.log the Javascript Object that you receive.
async function fetchSunGifs() {
    try {
        // Constructing the URL with the required parameters
        const url = "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

        // Use fetch() to make the request
        const response = await fetch(url);

        // Check if the request was successful
        if (response.ok) {
            // Parse the JSON from the response
            const data = await response.json();

            // Log the result
            console.log(data);
        } else {
            // If the response was not ok, log the status
            console.log("HTTP Error: " + response.status);
        }
    } catch (error) {
        // Catch and log any errors
        console.error("Fetch error: " + error.message);
    }
}

// Call the function to perform the fetch
fetchSunGifs();


// 🌟 Exercise 3 : Async Function
// Instructions
// Improve the program below :

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));
// Create an async function, that will await for the above GET request.
// The program shouldn’t contain any then() method.
// Make sure to check the status of the Response and to catch any occuring errors.

async function fetchStarWars() {
    try {
        // Constructing the URL with the required parameters
        const url = "https://www.swapi.tech/api/starships/9/";

        // Use fetch() to make the request
        const response = await fetch(url);

        // Check if the request was successful
        if (response.ok) {
            // Parse the JSON from the response
            const data = await response.json();

            // Log the result
            console.log(data);
        } else {
            // If the response was not ok, log the status
            console.log("HTTP Error: " + response.status);
        }
    } catch (error) {
        // Catch and log any errors
        console.error("Fetch error: " + error.message);
    }
}

fetchStarWars();


// In case if I wanted to make a POST request fetch('https://example.com/api/endpoint', {
//   method: 'POST',
//   body: JSON.stringify({
//     // request body data
//   }),
//   headers: {
//     'Content-Type': 'application/json',
//   },
// })
//   .then(response => {
//     // handle response
//   })
//   .catch(error => {
//     // handle error
//   });

// 🌟 Exercise 4: Analyze
// Instructions
// Analyse the code provided below - what will be the outcome?

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// The provided code demonstrates the use of JavaScript Promises and async/await syntax for handling asynchronous operations. Here's a step-by-step analysis of what happens when you run this code:

// asyncCall() is invoked.

// This is an asynchronous function due to the async keyword. It's immediately called at the end of the script.
// Inside asyncCall():

// console.log('calling'); is executed first. This will print "calling" to the console immediately.
// let result = await resolveAfter2Seconds(); is executed:

// resolveAfter2Seconds() returns a Promise that will resolve after 2 seconds due to the setTimeout with a delay of 2000 milliseconds.
// The await keyword pauses the execution of asyncCall() until the Promise returned by resolveAfter2Seconds() settles. During this time, other scripts or event handlers can run.
// After 2 seconds, inside resolveAfter2Seconds():

// The setTimeout callback function is executed, calling resolve('resolved').
// This changes the state of the Promise from pending to fulfilled and sets its resolved value to 'resolved'.
// Back in asyncCall():

// Once the Promise is resolved, await resumes the execution of asyncCall().
// The resolved value of the Promise ('resolved') is assigned to the variable result.
// console.log(result); is executed:

// This will print the value of result to the console, which is 'resolved'.
// Expected Outcome:

// The console will immediately show: "calling".
// Then, after a 2-second delay, it will show: "resolved".
// This code demonstrates how async/await can be used to write asynchronous code that looks and behaves a bit more like synchronous code, making it easier to understand and manage. The asyncCall() function waits for the resolveAfter2Seconds() Promise to resolve before continuing, allowing for clear and sequential asynchronous logic.