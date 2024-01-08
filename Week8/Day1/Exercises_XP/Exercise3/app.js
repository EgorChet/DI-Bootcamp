// In app.js, import the functions from the fileManager.js module.
// Use the imported functions to read the content of the “Hello World.txt” text file and then write to the “Bye World.txt” with the content “Writing to the file”.
// Run app.js and verify that the file reading and writing operations are successful.

// Import the functions from fileManager.js
const { readFile, writeFile } = require("./fileManager");

// Use the imported function to read the content of "Hello World.txt"
readFile("Hello_World.txt", (err, data) => {
  if (err) {
    return console.error("Failed to read file");
  }
  console.log("Hello World.txt content:", data);

  // Write to "Bye World.txt" with the content "Writing to the file"
  writeFile("Bye_World.txt", "Writing to the file", (err) => {
    if (err) {
      return console.error("Failed to write file");
    }
    console.log("Successfully wrote to Bye World.txt");
  });
});
