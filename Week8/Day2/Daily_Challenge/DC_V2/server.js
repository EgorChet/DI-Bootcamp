import express from "express";
import { emojis } from "./emojis/emojis.js";
import path from "path";

const app = express();

const __dirname = path.resolve();
// console.log(__dirname);

app.use("/", express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3001, () => {
  console.log("run on 3001");
});

app.get("/emojis", (req, res) => {
  const randomIndx = Math.floor(Math.random() * emojis.length);
  const randomEmoji = emojis[randomIndx];
  const shuffleEmojis = shuffleArray(emojis);
  res.json({ shuffleEmojis, randomEmoji });
});

app.post("/emojis", (req, res) => {
  const { name, guess } = req.body;
  if (name === guess) return res.json({ message: "Correct" });
  res.json({ message: "Not Correct" });
});

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
