// // Daily Challenge: Play With Words
// console.log("Daily Challenge: Play With Words");

// // Instructions
// // 1rst Daily Challenge
// // Create two functions. Each function should return a promise.
// // The first function called makeAllCaps(), takes an array of words as an argument
// // If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// // else, reject the promise with a reason.

// const makeAllCaps = (arrayOfWords) => {
//   return new Promise((resolve, reject) => {
//     // Check if all elements in the array are strings
//     if (arrayOfWords.every((word) => typeof word === "string")) {
//       // Resolve the promise with the array of words, each word transformed to uppercase
//       resolve(arrayOfWords.map((word) => word.toUpperCase()));
//     } else {
//       // Reject the promise if not all elements are strings
//       reject("Error: Not all items in the array are strings!");
//     }
//   });
// };

// // The second function called sortWords(), takes an array of words uppercased as an argument
// // If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// // else, reject the promise with a reason.
// // Test:
// const sortWords = (arrayOfWordsUppercased) => {
//   return new Promise((resolve, reject) => {
//     if (arrayOfWordsUppercased.length > 4) {
//       const sortedArray = arrayOfWordsUppercased.sort();
//       resolve(sortedArray);
//     } else {
//       reject("Error array lenght is less than 4 words!");
//     }
//   });
// };
// //in this example, the catch method is executed
// makeAllCaps([1, "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// //in this example, the catch method is executed
// makeAllCaps(["apple", "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// //in this example, you should see in the console,
// // the array of words uppercased and sorted
// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//       .catch(error => console.log(error))

// 2nd Daily Challenge
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

// Create three functions. The two first functions should return a promise..

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)

const toJs = (morse) => {
  return new Promise((resolve, reject) => {
    // Attempt to parse the JSON string
    try {
      const morseJS = JSON.parse(morse);

      // Check if the resulting object is empty
      if (Object.keys(morseJS).length === 0) {
        reject(new Error("The Morse JavaScript object is empty."));
      } else {
        // If it's not empty, resolve the promise with the Morse JavaScript object
        resolve(morseJS);
      }
    } catch (error) {
      // If there's an error in parsing, reject the promise
      reject(new Error("Invalid JSON format."));
    }
  });
};

//   toJs(morse)
//   .then(morseJS => console.log('Morse JS Object:', morseJS))
//   .catch(error => console.error('Error:', error));

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object

// Version 1 That does not handle sentences only words due to " " (spaces)
// const toMorse = (morseJS) => {
//     return new Promise((resolve, reject) => {
//       // Ask the user for a word or sentence
//       let userInput = prompt("Please enter a word or sentence:");

//       // Convert the user input into an array of characters
//       const inputChars = userInput.split('');

//       // Initialize an array to hold the Morse code translation
//       let translation = [];

//       // Iterate over each character in the input
//       for (let char of inputChars) {
//         // Check if the character exists in the Morse JavaScript object
//         if (morseJS[char]) {
//           // Add the Morse code to the translation array
//           translation.push(morseJS[char]);
//         } else {
//           // If a character doesn't exist in the Morse object, reject the promise
//           reject(new Error(`The character "${char}" doesn't exist in the Morse code object.`));
//           return; // Stop the execution if an unknown character is found
//         }
//       }

//       // If all characters were successfully translated, resolve the promise with the translation array
//       resolve(translation);
//     });
//   };

// Version 2 Handling both sentences and words

const toMorse = (morseJS) => {
  return new Promise((resolve, reject) => {
    // Prompt the user for a word or sentence
    let userInput = prompt("Please enter a word or sentence:").toLowerCase();

    // Convert the user input into an array of characters
    const inputChars = userInput.split("");

    // Initialize an array to hold the Morse code translation
    let translation = [];

    // Iterate over each character in the input
    for (let char of inputChars) {
      // Special handling for spaces (word separators)
      if (char === " ") {
        translation.push("       "); // 7 spaces as a standard word separator in Morse code
        continue;
      }

      // Check if the character exists in the Morse JavaScript object
      if (morseJS[char]) {
        // Add the Morse code to the translation array
        translation.push(morseJS[char]);
      } else {
        // If a character doesn't exist in the Morse object, reject the promise
        reject(new Error(`The character "${char}" doesn't exist in the Morse code object.`));
        return; // Stop the execution if an unknown character is found
      }
    }

    // If all characters were successfully translated, resolve the promise with the translation array
    resolve(translation);
  });
};

// The third function called joinWords(morseTranslation), takes one argument: the morse translation array
// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)
// Chain the three functions.

//CONSOLE VERSION
// const joinWords = (morse, userInput) => {
//     toJs(morse)
//       .then(morseJS => toMorse(morseJS, userInput))
//       .then(morseTranslation => {
//         // Join the morse translation array with line breaks
//         const joinedMorse = morseTranslation.join('\n');
//         console.log(joinedMorse); // Outputs the Morse code translation
//         // If in a browser environment, you might want to display this on the page
//       })
//       .catch(error => console.error('Error:', error));
//   };

// DOM VERSION
const joinWords = (morse, userInput) => {
  toJs(morse)
    .then((morseJS) => toMorse(morseJS, userInput))
    .then((morseTranslation) => {
      // Join the morse translation array with line breaks for HTML
      const joinedMorse = morseTranslation.join("<br>");

      // Create a div element to hold the Morse code
      const div = document.createElement("div");
      // Set the inner HTML of the div to the joined Morse code
      div.innerHTML = joinedMorse;

      // Append the div to the body of the page
      document.body.appendChild(div);
    })
    .catch((error) => {
      console.error("Error:", error);
      // Optionally, display the error on the page as well
      const errorDiv = document.createElement("div");
      errorDiv.innerHTML = `Error: ${error.message}`;
      document.body.appendChild(errorDiv);
    });
};

// Test the function with the word "Hello"
joinWords(morse, "Hello");

// Example:
// "Hello" gives you
// ....
// .
// .-..
// .-..
// ---
