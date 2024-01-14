// routes/users.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController");

// Defining the required routes :
// POST /register for user registration.
router.post("/register", userController.register);

// POST /login for user login.
router.post("/login", userController.login);

// GET /users to retrieve all users.
router.get("/", userController.getAllUsers);

// GET /users/:id to retrieve a specific user by ID.
router.get("/:id", userController.getUserById);

// PUT /users/:id to update a user's information.
router.put("/:id", userController.updateUser);

module.exports = router;
