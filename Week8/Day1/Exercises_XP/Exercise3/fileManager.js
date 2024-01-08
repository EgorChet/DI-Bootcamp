// fileManager.js

// Import the fs module
const fs = require('fs');

// Function to read the content of a specified file
function readFile(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return callback(err);
    }
    callback(null, data);
  });
}

// Function to write content to a specified file
function writeFile(filePath, content, callback) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error("Error writing to the file:", err);
      return callback(err);
    }
    callback(null);
  });
}

// Export the functions
module.exports = { readFile, writeFile };
