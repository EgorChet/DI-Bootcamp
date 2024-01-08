// Exercises XP
// Last Updated: September 22nd, 2023

// What You Will Learn:
// Working with Node.js modules
// Working with the fs module

// 🌟 Exercise 1: Multiple Exports And Import Using CommonJS Syntax
// Instructions
// Create a file named products.js.

// Inside products.js, create an array of objects, each representing a product with properties like name, price, and category.
// Export this array using the Common JS syntax.

// Create another file named shop.js.
// In shop.js, require the product objects from the products.js module.
// Create a function that takes a product name as a parameter and searches for the corresponding product object.
// Call this function with different product names and print the details of the products.
// Run shop.js and verify that the correct product details are displayed.

// 🌟 Exercise 2: Advanced Module Usage Using ES6 Module Syntax
// Instructions
// Create a file named data.js.

// Inside data.js, define an array of objects, each representing a person with properties like name, age, and location.

// Export the array using the ES6 module syntax.

// Create another file named app.js.

// In app.js, import the array of person objects from the data.js module.

// Write a function that calculates and prints the average age of all the persons in the array.

// Use the imported array and the average age function in app.js.

// Run app.js and confirm that the average age is correctly calculated and displayed.

// 🌟 Exercise 3: File Management Using CommonJS Syntax
// Instructions
// Create a file named fileManager.js.

// Inside fileManager.js, define a module that exports functions for reading and writing files.
// Export functions named readFile and writeFile.
// Implement the readFile function to read the content of a specified file using the fs module.
// Implement the writeFile function to write content to a specified file using the fs module.

// Create a file “Hello World.txt” containing the sentence “Hello World !! “

// Create a file “Bye World.txt” containing the sentence “Bye World !! “

// Create another file named app.js.

// In app.js, import the functions from the fileManager.js module.

// Use the imported functions to read the content of the “Hello World.txt” text file and then write to the “Bye World.txt” with the content “Writing to the file”.

// Run app.js and verify that the file reading and writing operations are successful.

// 🌟 Exercise 4: Todo List Using ES6 Module Syntax
// Instructions
// Create a directory named todoApp.
// Inside the todoApp directory, create two files: todo.js and app.js.
// In todo.js, define an ES6 module that exports a TodoList class.
// The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.
// Export the TodoList class.

// In app.js, import the TodoList class from the todo.js module.
// Create an instance of the TodoList class.
// Add a few tasks, mark some as complete, and list all tasks.
// Run app.js and verify that the todo list operations are working correctly.

// 🌟 Exercise 5: Creating And Using A Custom Module
// Instructions
// Create a directory named math-app.
// Inside the math-app directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

// Install the lodash package, a utility library, by running npm install lodash in the terminal.

// Create a file named math.js inside the math-app directory.
// In math.js, define a simple custom module that exports functions for addition and multiplication.
// Create a file named app.js in the same directory.

// In app.js, require the lodash package and the custom math module.
// Use the exported functions from the math module and the utility functions from the lodash package to perform calculations.
// Run app.js using Node.js and verify that the calculations are correct.

// 🌟 Exercise 6: Simple NPM Package Usage
// Instructions
// Create a directory named npm-beginner.
// Inside the npm-beginner directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.
// Install the chalk package, which provides easy coloring for terminal output, by running npm install chalk in the terminal.

// Create a file named app.js inside the npm-beginner directory.
// In app.js, require the chalk package and use it to color and style text in the terminal.
// Write a simple script that uses chalk to print a colorful message.
// Run app.js using Node.js and observe the colorful output in the terminal.

// 🌟 Exercise 7: Reading And Copying Files
// Instructions

// Create a directory named file-explorer.
// Inside the file-explorer directory, create a file named copy-file.js.
// In copy-file.js, use the fs module to read the content from a file named source.txt and then write the same content to a new file named destination.txt.

// Create another file named read-directory.js.
// In read-directory.js, use the fs module to read the list of files in a specified directory and display their names in the terminal.

// Open a terminal in the file-explorer directory.
// Run node copy-file.js to copy the content from source.txt to destination.txt.
// Run node read-directory.js to list the files in the directory.
