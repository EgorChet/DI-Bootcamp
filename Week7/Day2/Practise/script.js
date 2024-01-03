//  * Create a function called findElement that takes an array
//  * and an index as parameters.
//  * The function should attempt to retrieve the element at the given index
//  * from the array.
//  * Implement a try...catch block to handle any errors that might occur,
//  * such as an invalid index or accessing an element that doesn't exist.
//  * Return the element if it exists or return a custom error message
//  * for invalid index or missing elements.

function findElement(arr, index) {
  try {
    if (index < 0 || index >= arr.lenght) {
      throw new Error("Index out of range or invalid");
    }
    return arr[index];
  } catch (error) {
    return error.message;
  }
}
const myArray = [10, 20, 30, 40, 50];
console.log(findElement(myArray, 2));
console.log(findElement(myArray, 0));
console.log(findElement(myArray, -1));
console.log(findElement(myArray, 8));

// birthdayCakeCandles function EXERCISE!
function birthdayCakeCandles(ar) {
  // Find the tallest candle
  const tallest = Math.max(...ar);

  // Count how many candles are of this tallest height
  const count = ar.filter((candle) => candle === tallest).length;

  return count;
}

// Test the function with the provided array
const ar = [2, 4, 4, 1];
console.log(`You can blow ${birthdayCakeCandles(ar)} candles.`);

// Task 1: Create a function called parseJSON
function parseJSON(jsonString) {
  try {
    // Attempt to parse the string as JSON
    const jsonObj = JSON.parse(jsonString);
    return jsonObj;
  } catch (error) {
    // If an error occurs, return a custom error message
    return `Parsing error: ${error.message}`;
  }
}

// Test the function
const jsonString = '{"name": "John", "age": 30}';
console.log(parseJSON(jsonString)); // Should successfully parse and return an object

const invalidJsonString = '{name: "John", age: 30}'; // Missing quotation marks
console.log(parseJSON(invalidJsonString)); // Should return

// Task 2: Find the smallest distance between 2 numbers in an array
function findSmallestDistance(arr) {
  let minDistance = Infinity; // Start with the largest possible number

  // Sort the array in ascending order to make distance calculations easier
  arr.sort((a, b) => a - b);

  // Loop through the array and compare adjacent elements
  for (let i = 0; i < arr.length - 1; i++) {
    let distance = arr[i + 1] - arr[i];
    if (distance < minDistance) {
      minDistance = distance;
    }
  }

  return minDistance;
}

// Test the function
const numbers = [2, 5, 3, 7, 2, 3, 6, 8, 6];
console.log(findSmallestDistance(numbers)); // Should output 0
