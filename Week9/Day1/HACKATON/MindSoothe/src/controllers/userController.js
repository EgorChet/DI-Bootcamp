// src/controllers/userController.js
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

const registerUser = async (req, res) => {
  try {
    const { name, lastName, username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await userModel.findUserByUsername(username);
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    await userModel.createUser({ name, lastName, username, email, password: hashedPassword });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    res.status(500).json({ message: "Error registering user" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user by username
    const user = await userModel.findUserByUsername(username);
    if (!user) {
      return res.status(400).send("Invalid credentials");
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send("Invalid credentials");
    }

    res.json({ ...user, password: "" });
  } catch (error) {
    res.status(500).send("Error logging in user");
  }
};

module.exports = { registerUser, loginUser };
