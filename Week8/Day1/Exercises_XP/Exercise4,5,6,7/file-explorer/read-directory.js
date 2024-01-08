// read-directory.js

// Import the fs module
const fs = require('fs');

// Read the list of files in the current directory
fs.readdir('.', (err, files) => {
  if (err) {
    return console.error("Failed to read directory:", err);
  }
  
  console.log("Files in the directory:");
  files.forEach(file => {
    console.log(file);
  });
});
