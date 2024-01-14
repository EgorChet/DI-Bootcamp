const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Importing routes
const routes = require('./routes/routes');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use routes defined in route.js
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Trivia Quiz app listening at http://localhost:${port}`);
});
