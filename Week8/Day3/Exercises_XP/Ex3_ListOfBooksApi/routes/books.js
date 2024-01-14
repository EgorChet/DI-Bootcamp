// routes/books.js
const express = require("express");
const router = express.Router();

// Sample in-memory database for storing books
const books = [];

// Get all books
router.get("/", (req, res) => {
  res.json(books);
});

// Add a new book
router.post("/", (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }
    
  const newBook = {
    id: books.length + 1, // You can use a better way to generate IDs
    title,
  };
  
  books.push(newBook);
  res.status(201).json(newBook);
});


// Update a book by ID
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const bookToUpdate = books.find((book) => book.id === parseInt(id));

  if (!bookToUpdate) {
    return res.status(404).json({ error: "Book not found" });
  }

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  bookToUpdate.title = title;
  res.json(bookToUpdate);
});

// Delete a book by ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = books.findIndex((book) => book.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ error: "Book not found" });
  }

  books.splice(index, 1);
  res.sendStatus(204);
});

module.exports = router;
