const fs = require('fs');

// Read the content from 'source.txt' and write it to 'destination.txt'
fs.readFile('source.txt', 'utf8', (err, data) => {
    if (err) {
      return console.error("Failed to read source.txt:", err);
    }
  
    fs.writeFile('destination.txt', `copied content from source.txt => ${data}`, (err) => {
      if (err) {
        return console.error("Failed to write to destination.txt:", err);
      }
      console.log("Content copied from source.txt to destination.txt successfully.");
    });
  });