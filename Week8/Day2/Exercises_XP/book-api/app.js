const express = require("express");
const app = express();

const books = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishedYear: 1960
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      publishedYear: 1949
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publishedYear: 1925
    },
    {
      id: 4,
      title: "One Hundred Years of Solitude",
      author: "Gabriel García Márquez",
      publishedYear: 1967
    },
    {
      id: 5,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      publishedYear: 1813
    }
  ];
  
app.use(express.json());

app.listen(5001, () => {   // PORT 5000 is already in use so i used 5001. As i understood by default Mac uses it for AirPlay.
    console.log("Server listening on port 5001");
})

app.get("/api/books", (request, response) => {
    response.json(books);
});

app.get("/api/books/:id", (request, response) => {
    const bookId = parseInt(request.params.id);
    const book = books.find(book => book.id === bookId);

    if (!book) {
        return response.status(404).send("Book not found");
    }

    response.json(book);
})

app.post("/api/books", (request, response) => {
    const { title, author, publishedYear } = request.body;

    if (!title ||!author ||!publishedYear) {
        return response.status(400).send("Title, author, and publishedYear are required");
    }

    const newBook = {
        id: books.length + 1,
        title,
        author,
        publishedYear
    };

    books.push(newBook);
    response.status(201).json(newBook);
})