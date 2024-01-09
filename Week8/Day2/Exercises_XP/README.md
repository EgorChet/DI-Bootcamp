Exercises XP
Last Updated: September 22nd, 2023

What You Will Learn:
Use Express to build an API
Use Node,js modules


🌟 Exercise 1: Building A RESTful API
Instructions
You’re tasked with building a RESTful API for a blog platform.
Users should be able to create, read, update, and delete blog posts using different endpoints.

Create a directory named blog-api.

Inside the blog-api directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

Install the express package by running npm install express in the terminal.

Create a file named server.js.

In server.js, require the express package and set up an Express app.

Create a data array to simulate a database. Each item in the array should represent a blog post with properties like id, title, and content.

Implement the following routes using Express:
GET /posts: Return a list of all blog posts.
GET /posts/:id: Return a specific blog post based on its id.
POST /posts: Create a new blog post.
PUT /posts/:id: Update an existing blog post.
DELETE /posts/:id: Delete a blog post.

Implement error handling for invalid routes and server errors.

Start the Express app and listen on a specified port (e.g., 3000).


🌟 Exercise 2: Building A Basic CRUD API With Express.Js
Instructions
In this exercise, you’ll build a basic CRUD (Create, Read, Update, Delete) API using Express.js. Your task is to create routes to manage a collection of books.

Create a new directory named book-api.

Inside the book-api directory, initialize a new Node.js project and install the express package.

Create a new file named app.js in the book-api directory.

In app.js, import the express module and create an instance of an Express app.

Define a basic data array containing a few book objects. Each book object should have properties like id, title, author, and publishedYear.

Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.

Implement the “Read all” route by defining a route at GET /api/books. Send a JSON response with the books array.

Implement the “Read” route by defining a route at GET /api/books/:bookId. Extract the bookId parameter from the URL and use it to find the corresponding book in the books array. If the book is found, send a JSON response with the book details and a status code of 200 (OK). If the book is not found, send a 404 status with a “Book not found” message.

Implement the “Create” route at POST /api/books. Use the express.json() middleware to parse JSON body content. Inside the route handler, create a new book object with an incremented ID and the data from the request body. Add the new book to the books array and return a JSON response with the new book and a status code of 201 (Created).


🌟 Exercise 3: Building A Basic CRUD API With Express And Axios Using A Data Module
Instructions
In this exercise, you’ll build a basic CRUD (Create, Read, Update, Delete) API using Express.js and Axios to retrieve data from the JSONPlaceholder API and respond with that data in your own API. You’ll also create a separate module to handle data retrieval using Axios.

Part 1: Setting Up the Express Server

Create a new directory named crud-api.

Inside the crud-api directory, initialize a new Node.js project and install the express and axios packages.

Create a new file named app.js in the crud-api directory.

In app.js, import the express module and create an instance of an Express app.

Set up the app to listen on port 5000. Print a message in the console to indicate that the server is running.


Part 2: Creating a Data Module for Axios

Inside the crud-api directory, create a new directory named data.

Inside the data directory, create a new file named dataService.js.

In dataService.js, import the axios module and create a function named fetchPosts that makes a GET request to the JSONPlaceholder API to fetch data for all posts.

Export the fetchPosts function.


Part 3: Using the Data Module in the Express App

Inside app.js, import the dataService module you created.

Create an endpoint in your Express app that uses the fetchPosts function from the dataService module to retrieve data from the JSONPlaceholder API.

Respond with the fetched data from the JSONPlaceholder API. https://jsonplaceholder.typicode.com/posts

Print a message in the console to indicate that the data has been successfully retrieved and sent as a response.