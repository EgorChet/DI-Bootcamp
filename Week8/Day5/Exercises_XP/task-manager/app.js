// app.js
const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(express.json());

// Router setup
const tasksRouter = require("./routes/tasks");
app.use("/tasks", tasksRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Task Manager API!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
