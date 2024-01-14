const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Import the router module
const router = require("./routes/index"); // Path to your router file

// Mount the router to your application
app.use('/', router); // Here, '/' specifies the root route; you can use any path you prefer

// Listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
