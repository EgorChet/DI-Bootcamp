const fs = require("fs").promises;
const fs2 = require('fs');

const path = require("path");

const read = async() => {
    const data = await fs.readFile('info', 'utf-8');
    console.log(data);
}
read()

/** Sync / Async - default */
try {
  const data = fs2.readFileSync("info", "utf-8");

  console.log(data);
} catch (error) {
  console.log(error.message);
}

// const info = fs.readFile("info", "utf-8", (err, data) => {
//   if (err) return console.log(err.message);

//   console.log(data);
// });

let data = "123456";
// fs.writeFile("newfile", data, "utf-8", (err) => {
//   if (err) return console.log(err);
//   console.log("File created");
// });

// fs.appendFile("newfile", data, "utf-8", (err) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log("appended");
//   }
// });

// fs.copyFile("info.txt", "info", (err) => {
//   if (err) return console.log(err);
// });

// fs.mkdir('utils', (err)=>{

// })