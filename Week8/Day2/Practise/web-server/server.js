/** API Restfull API */
/** CRUD */
const bp = require("body-parser");
const express = require("express");

const app = express();

const users = [
  { id: 1, name: "Ziv", email: "email3@example.com" },
  { id: 2, name: "Egor", email: "email2@example.com" },
  { id: 3, name: "Victor", email: "email1@example.com" },
];

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use("/", express.static(__dirname + "/public"));

/*
app.get
app.post
app.put
app.delete
*/

app.get("/users", (request, response) => {
  response.send(users);
});

app.get("/api", (request, response) => {
  response.send("<h1>Api</h1>");
});

app.get("/users/:id", (request, response) => {
  const user = users.find((user) => user.id === parseInt(request.params.id));

  if (!user) {
    return response.status(404).send("User not found");
  }

  response.send(user);
});

app.get("/search", (request, response) => {
  console.log(request.query);
  const { name } = request.query;
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(name.toLowerCase())
  );
  response.send(filteredUsers);
});

app.post("/users1", (request, response) => {
  console.log(request.body);
  response.send("The POST request was successful");
});

app.post("/users", (request, response) => {
  // Creating a new user object from the request body
  const user = {
    id: users.length + 1, // Assigning a new id based on the length of the users array
    name: request.body.name, // Getting the name from the request body
    email: request.body.email, // Getting the email from the request body
  };

  users.push(user); // Adding the new user to the users array
  response.send("The POST request was successful");
});

app.put("/users", (request, response) => {
  const user = users.find((user) => user.id === parseInt(request.body.id));

  if (!user) {
    return response.status(404).send("User not found");
  }

  user.name = request.body.name;
  user.email = request.body.email;

  response.send("The PUT request was successful");
})

app.put("/users/:id", (request, response) => {
  const userIndex = users.findIndex((user) => user.id === parseInt(request.params.id));
  const user = users[userIndex]; 

  if (!user) {
    return response.status(404).send("User not found");
  }

  user.name = request.body.name;
  user.email = request.body.email;

  response.send("The PUT request was successful");
})