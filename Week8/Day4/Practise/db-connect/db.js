const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "tuffi.db.elephantsql.com",
    port: 5432,
    user: "pnijnbxo",
    password: "O4JTnDcZbcg_SNEKqbkHxjdlby3w66Bf",
    database: "pnijnbxo",
  },
});

// console.log("db=>", db);

// db.select("id", "name", "email", "password")
//   .from("users")
//   .then((rows) => {
//     console.log(rows);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

db("users")
  .select("id", "name", "email", "password")
  .then((rows) => {
    console.log(rows);
  })
  .catch((err) => {
    console.log(err);
  });

// db.raw("SELECT * FROM users")
//   .then((data) => {
//     console.log(data.rows);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//INSERT

// db("users")
//   .insert([
//     { name: "John", email: "jjj@gamail.com", password: "12345678910" },
//     { name: "Marry", email: "mmm@gamail.com", password: "1232131"},
//     { name: "Anney", email: "aaa@gamail.com", password: "12345678ewfe10" },
//     { name: "Varvara1", email: "Varvara1@gmail.com", password: "12345678910" },
//     { name: "Barvara", email: "Barvara@gmail.com", password: "123423" },
//     { name: "vara", email: "vara@gmail.com", password: "1234dwqdfwf23" },
//   ])
//   .returning(["id", "name", "email", "password"])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// db("users")
//   .update({ email: "yulia@gmail.com" })
//   .where("id", 15)
//   .returning(["id", "name", "email", "password"])
//   .then((data) => {
//     console.log(data);
//   });

//DELETE

db("users")
  .where("id", 23)
  .del()
  .returning("*")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
