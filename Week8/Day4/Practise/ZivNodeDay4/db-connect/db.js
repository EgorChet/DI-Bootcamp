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

// db.select("id", "name", "email", "password")
//   .from("users")
//   .then((rows) => {
//     console.log(rows);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// db("users")
//   .select("id", "name", "email", "password")
//   .then((data) => {
//     console.log(data);
//   });

// db.raw("select * from users").then((data) => {
//   console.log(data.rows);
// });

// console.log("db=>", db);

//INSERT
//

//UPDATE
// db("users")
//   .where({ id: 9 })
//   .returning("*")
//   .update({ name: "Aron" })

//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// DELETE
db("users")
  .where({ id: 8 })
  .del()
  .returning("*")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
