Exercises XP
Last Updated: September 22nd, 2023

🌟 Exercise 1: Creating A Simple Express.Js Application With Routes
Instructions
Step 1: Setup

Create a new directory for your project.
Navigate to the project directory using your command line.
Initialize a new Node.js project by running npm init -y.
Step 2: Install Dependencies
Install Express.js by running the following command:

npm install express
Step 3: Create Your Express Application
Create a JavaScript file (e.g., app.js) to set up your Express application:

Step 4: Create a Router Module
Inside your project directory, create a new directory called routes. Inside the routes directory, create a JavaScript file (e.g., index.js) where you will define your routes using express.Router():

Step 5: Mount the Router in Your Application
In your app.js file, import the router module you created and mount it in your Express application:

Step 6: Start Your Server
Now, you can start your Express server by running:

Step 7: Test Your Routes
Open your web browser or use a tool like Postman to test the following routes:

http://localhost:3000/ (Homepage)
http://localhost:3000/about (About Us page)
You should see the corresponding responses for each route.

Congratulations! You’ve created a simple Express.js application with routes using express.Router.



🌟 Exercise 2: Simple To-Do List Exercise Using Express.Js And Express.Router.
Instructions
In this exercise, you’ll create an API for managing a to-do list with basic CRUD operations (Create, Read, Update, Delete).

Step 1: Setup

Create a new directory for your project.
Navigate to the project directory using your command line.
Initialize a new Node.js project by running npm init -y.
Step 2: Install Dependencies
Install Express.js

Step 3: Create Your Express Application
Create a JavaScript file (e.g., app.js) to set up your Express application

Step 4: Create a Router Module
Inside your project directory, create a new directory called routes. Inside the routes directory, create a JavaScript file (e.g., todos.js) where you will define routes for managing the to-do list using express.Router():

// Sample in-memory database for storing to-do items
const todos = [];

// Get all to-do items

// Add a new to-do item

// Update a to-do item by ID

// Delete a to-do item by ID
Step 5: Mount the Router in Your Application
In your app.js file, import the router module you created and mount it in your Express application

Step 6: Start Your Server
Now, you can start your Express server by running:

node app.js
Step 7: Test Your API
You can use tools like Postman or curl to test your API endpoints for managing to-do items:

GET http://localhost:3000/todos (Get all to-do items)
POST http://localhost:3000/todos (Create a new to-do item with a JSON request body)
PUT http://localhost:3000/todos/:id (Update a to-do item by ID with a JSON request body)
DELETE http://localhost:3000/todos/:id (Delete a to-do item by ID)
This exercise demonstrates a simple to-do list API built using Express.js and express.Router.



🌟 Exercise 3: Basic API For Managing A List Of Books Using Express.Js And Express.Router.
Instructions
In this exercise, you’ll implement CRUD operations (Create, Read, Update, Delete) for books.

Step 1: Setup

Create a new directory for your project.
Navigate to the project directory using your command line.
Initialize a new Node.js project by running npm init -y.
Step 2: Install Dependencies
Install Express.js

Step 3: Create Your Express Application
Create a JavaScript file (e.g., app.js) to set up your Express application

// app.js
Step 4: Create a Router Module
Inside your project directory, create a new directory called routes. Inside the routes directory, create a JavaScript file (e.g., books.js) where you will define routes for managing books using express.Router():

// routes/books.js

// Sample in-memory database for storing books
const books = [];

// Get all books

// Add a new book

// Update a book by ID

// Delete a book by ID
Step 5: Mount the Router in Your Application
In your app.js file, import the router module you created and mount it in your Express application

// app.js
Step 6: Start Your Server
Now, you can start your Express server by running:

node app.js
Step 7: Test Your API
You can use tools like Postman or curl to test your API endpoints for managing books:

GET http://localhost:3000/books (Get all books)
POST http://localhost:3000/books (Create a new book with a JSON request body)
PUT http://localhost:3000/books/:id (Update a book by ID with a JSON request body)
DELETE http://localhost:3000/books/:id (Delete a book by ID)
This exercise demonstrates a simple book management API built using Express.js and express.Router.