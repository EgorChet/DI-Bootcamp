import { readFile } from "fs";

function readAndDisplayFile() {
  readFile("./file-data.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Failed to read file:", err);
      return;
    }
    console.log(data);
  });
}

export default readAndDisplayFile;