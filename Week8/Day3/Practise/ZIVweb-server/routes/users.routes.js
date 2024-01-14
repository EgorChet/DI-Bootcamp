const express = require("express");
const { auth } = require("../middlewares/utils.js");
const {
  getAllUsers,
  searchUser,
  getUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller.js");

const users_router = express.Router();

users_router.get("/", getAllUsers);
users_router.get("/search", searchUser);
users_router.get("/:id", auth, getUser);
users_router.post("/", addUser);
users_router.put("/:id", updateUser);
users_router.delete("/:id", deleteUser);

module.exports = {
  users_router,
};
