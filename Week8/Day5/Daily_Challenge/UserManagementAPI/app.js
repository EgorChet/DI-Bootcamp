const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(express.json());

// Router setup
const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send("Welcome to the Users Manager API!");
  });
  
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });