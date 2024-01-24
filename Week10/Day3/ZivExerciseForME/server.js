// server.js

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running ${process.env.PORT || 3000}`);
});

// Route for 'hello'
app.get("/hello", (req, res) => {
  //   res.send('Hello');
  res.json({ greeting: "Hello" });
});

// Route for 'hello/:name'
app.get("/hello/:name", (req, res) => {
  //   res.send(`Hello ${name}`);
  res.json({ greeting: `Hello ${req.params.name}` });
});
