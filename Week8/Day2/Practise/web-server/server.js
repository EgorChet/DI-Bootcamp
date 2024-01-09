/** API Restfull API */
/** CRUD */

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

app.post("/api", (request, response) => {
  response.send("Post Post ");
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
  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(name.toLowerCase()));
  response.send(filteredUsers);
});
