// Import modules using relative paths
import greet from '../greeting.js';
import displayColorfulMessage from '../colorful-message.js';
import readAndDisplayFile from './read-file.js';

// Greet the user
console.log(greet('John'));

// Display a colorful message
const greeting = greet("John");
displayColorfulMessage(greeting);

// Read and display the file's content
readAndDisplayFile();

