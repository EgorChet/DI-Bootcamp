const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "lucky.db.elephantsql.com", //'127.0.0.1'
    port: 5432,
    user: "pbslqzln", //'postgres'
    password: "7uAOFI7q3RoGJ9L2-bb4FPjmyF7e55bS",
    database: "pbslqzln",
  },
});

const users = [
  { id: 1, name: "John", email: "jjj@gamail.com" },
  { id: 2, name: "Marry", email: "mmm@gamail.com" },
  { id: 3, name: "Anney", email: "aaa@gamail.com" },
];

const products = [
  { id: 1, name: "item1", desc: "bla bla bla 1" },
  { id: 2, name: "item2", desc: "bla bla bla 2" },
  { id: 3, name: "item3", desc: "bla bla bla 3" },
];

module.exports = {
  db,
  users,
  products,
};
