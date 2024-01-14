// Step 5: Mount the Router in Your Application
// In your app.js file, import the router module you created and mount it in your Express application
// app.js
const express = require('express');
const app = express();
const booksRouter = require('./routes/books.js');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/books', booksRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

