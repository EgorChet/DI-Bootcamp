// Daily Challenge: Play With Words
console.log("Daily Challenge: Play With Words");

// Instructions
// 1rst Daily Challenge
// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.

const makeAllCaps = (arrayOfWords) => {
  return new Promise((resolve, reject) => {
    // Check if all elements in the array are strings
    if (arrayOfWords.every((word) => typeof word === "string")) {
      // Resolve the promise with the array of words, each word transformed to uppercase
      resolve(arrayOfWords.map((word) => word.toUpperCase()));
    } else {
      // Reject the promise if not all elements are strings
      reject("Error: Not all items in the array are strings!");
    }
  });
};

// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.
// Test:
const sortWords = (arrayOfWordsUppercased) => {
  return new Promise((resolve, reject) => {
    if (arrayOfWordsUppercased.length > 4) {
      const sortedArray = arrayOfWordsUppercased.sort();
      resolve(sortedArray);
    } else {
      reject("Error array lenght is less than 4 words!");
    }
  });
};
//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//in this example, you should see in the console,
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
  .catch((error) => console.log(error));

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

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object

const toMorse = (morseJS) => {
  return new Promise((resolve, reject) => {
    let userInput = prompt("Please enter a word or sentence:").toLowerCase();
    const inputChars = userInput.split("");
    let translation = [];

    for (let char of inputChars) {
      if (char === " ") {
        translation.push("       "); // Use seven spaces to represent space between words
        continue;
      }
      if (morseJS[char]) {
        translation.push(morseJS[char]);
      } else {
        reject(new Error(`The character "${char}" doesn't exist in the Morse code object.`));
        return;
      }
    }
    resolve({ translation, userInput }); // Return both translation and original userInput
  });
};

// The third function called joinWords(morseTranslation), takes one argument: the morse translation array
// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)
// Chain the three functions.
// DOM VERSION
const joinWords = (morse) => {
  toJs(morse)
    .then(morseJS => toMorse(morseJS))
    .then(result => {
      const {translation: morseTranslation, userInput} = result;

      const originalDiv = document.createElement("div");
      originalDiv.innerHTML = `<strong>Original:</strong> ${userInput}`;
      document.body.appendChild(originalDiv);

      const morseDiv = document.createElement("div");

      // Replace seven regular spaces with seven non-breaking spaces for HTML display
      const readableMorse = morseTranslation.join(' ').replace(/       /g, '&nbsp;&nbsp;&nbsp;');
      morseDiv.innerHTML = `<strong>Morse Code:</strong> ${readableMorse}`;
      document.body.appendChild(morseDiv);
    })
    .catch(error => {
      console.error("Error:", error);
      const errorDiv = document.createElement("div");
      errorDiv.innerHTML = `Error: ${error.message}`;
      document.body.appendChild(errorDiv);
    });
};

// Call joinWords with the morse string
joinWords(morse);

// Example:
// "Hello" gives you
// ....
// .
// .-..
// .-..
// ---
