const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/api/hello", (req, res) => {
  res.send("Hello From Express");
});

app.post("/api/world", (req, res) => {
  const inputValue = req.body.inputValue;
  if (inputValue) {
    res.send(`I received your POST request.\nThis is what you sent me:\n${inputValue}`);
  } else {
    res.status(400).send("No input value provided");
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
