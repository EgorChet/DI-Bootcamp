const express = require("express");
const app = express();

const blogPosts = [
  {
    id: 1,
    title: "Understanding JavaScript Closures",
    content:
      "Closures are a powerful feature of JavaScript that allow functions to remember their lexical environment...",
  },
  {
    id: 2,
    title: "Introduction to React Hooks",
    content:
      "React Hooks provide a way to use state and other React features in functional components...",
  },
  {
    id: 3,
    title: "Demystifying Async/Await in JavaScript",
    content:
      "Async/Await simplifies asynchronous operations in JavaScript, making our code look synchronous and easier to understand...",
  },
  {
    id: 4,
    title: "Exploring Node.js File System Module",
    content:
      "The File System module in Node.js allows us to work with the file system on our computer. We can read, create, update, delete, and rename files...",
  },
  {
    id: 5,
    title: "Understanding the Event Loop in JavaScript",
    content:
      "The event loop is a crucial part of the JavaScript runtime that helps manage asynchronous operations and callbacks...",
  },
];


// Middleware to parse JSON bodies
app.use(express.json());

// GET /posts: Return a list of all blog posts
app.get("/blogPosts", (request, response) => {
  response.json(blogPosts);
});

// GET /posts/:id: Return a specific blog post based on its id
app.get("/blogPosts/:id", (request, response) => {
  const blogPostId = parseInt(request.params.id);
  const blogPost = blogPosts.find(post => post.id === blogPostId);

  if (!blogPost) {
    return response.status(404).send("Blog post not found");
  }

  response.json(blogPost);
});

// POST /posts: Create a new blog post
app.post("/blogPosts", (request, response) => {
  const { title, content } = request.body;

  if (!title || !content) {
    return response.status(400).send("Title and content are required");
  }

  const newBlogPost = {
    id: blogPosts.length + 1,
    title,
    content,
  };

  blogPosts.push(newBlogPost);
  response.status(201).json(newBlogPost);
});

// PUT /posts/:id: Update an existing blog post
app.put("/blogPosts/:id", (request, response) => {
  const blogPostId = parseInt(request.params.id);
  const blogPostIndex = blogPosts.findIndex(post => post.id === blogPostId);

  if (blogPostIndex === -1) {
    return response.status(404).send("Blog post not found");
  }

  const { title, content } = request.body;
  if (!title || !content) {
    return response.status(400).send("Both title and content are required for an update");
  }

  const updatedBlogPost = { id: blogPostId, title, content };
  blogPosts[blogPostIndex] = updatedBlogPost;
  response.json(updatedBlogPost);
});

// DELETE /posts/:id: Delete a blog post
app.delete("/blogPosts/:id", (request, response) => {
  const blogPostId = parseInt(request.params.id);
  const blogPostIndex = blogPosts.findIndex(post => post.id === blogPostId);

  if (blogPostIndex === -1) {
    return response.status(404).send("Blog post not found");
  }

  blogPosts.splice(blogPostIndex, 1);
  response.send(`Blog post with id ${blogPostId} deleted`);
});

// Implement error handling for invalid routes
app.all('*', (req, res) => {
  res.status(404).send('Page not found');
});

// Start the Express app and listen on a specified port
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
                                                            
