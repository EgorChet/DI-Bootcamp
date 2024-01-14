const { db } = require("../config/db.js");

const getAllUsers = () => {
  return db("users").select("*").orderBy("name");
};

module.exports = {
    _getAllUSers
}