// app.js

const express = require("express");
const app = express();
const port = 3000;
const authMiddleware = require("./authMiddleware"); // Require the authentication middleware
const cookieParser = require("cookie-parser"); // Import cookie-parser

app.use(express.json());
app.use(cookieParser()); // Enable cookie handling

// Public route accessible without authentication
app.get("/", (req, res) => {
  res.send("Hello, JWT Authentication!");
});

// Protected route that requires authentication
app.get("/profile", authMiddleware, (req, res) => {
  // Access the authenticated user's information via req.user
  res.json({ message: `Welcome, ${req.user.username}!` });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
