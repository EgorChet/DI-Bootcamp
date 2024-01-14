const { db } = require("../config/db.js");

const _getAllUsers = () => {
  return db("users").select("*").orderBy("id");
};

const _getUser = (id) => {
  return db("users").select("*").where({ id });
};

const _addUser = (name, email, password) => {
  return db("users").insert({ name, email, password }).returning("*");
};

module.exports = {
  _getAllUsers,
  _getUser,
  _addUser
};
