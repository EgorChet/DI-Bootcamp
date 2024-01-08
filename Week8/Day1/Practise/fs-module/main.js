const fs = require("fs");
const path = require("path");

/**Sync / Async - default */
try {
  const data = fs.readFileSync("info.txt", "utf-8");

  console.log(data);
} catch (error) {
  console.log(`Hello this is the ${error}`);
}

const info = fs.readFile("info", "utf-8", (err, data) => {
  if (err) return console.log(err.message);

  console.log(data);
});

let data = "123456";
fs.writeFile("newfile.txt", data, "utf-8", (err) => {
  if (err) return console.log(err.message);
  console.log("The file was saved!");
});
