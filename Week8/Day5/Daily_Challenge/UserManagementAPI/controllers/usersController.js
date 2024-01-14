// const usersFilePath = path.join(__dirname, '..', 'users.json');
const usersFilePath = "./users.json";
const bcrypt = require("bcrypt");
const fs = require("fs").promises;
const userValidation = require("../validation/userValidation");

const register = async (req, res) => {
  try {
    // Validate the user input
    const { error } = userValidation.register.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Read users data from JSON file
    const usersData = JSON.parse(await fs.readFile(usersFilePath, "utf8"));

    // Check if user already exists
    if (usersData.some((user) => user.username === req.body.username)) {
      return res.status(400).send("Username already exists");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Add the new user
    const newUser = { ...req.body, password: hashedPassword };
    usersData.push(newUser);

    // Write the updated users data back to the JSON file
    await fs.writeFile(usersFilePath, JSON.stringify(usersData));

    res.send("Hello! Your account is now created.");
  } catch (err) {
    res.status(500).send("Error registering new user.");
  }
};

const login = async (req, res) => {
  try {
    // Validate the user input
    const { error } = userValidation.login.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Read users data from JSON file
    const usersData = JSON.parse(await fs.readFile(usersFilePath, "utf8"));

    // Find the user by username
    const user = usersData.find((user) => user.username === req.body.username);
    if (!user) return res.status(400).send("This username is not registered");

    // Check if the password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send("Invalid password");

    res.send(`Hi ${user.name}, welcome back!!!`);
  } catch (err) {
    res.status(500).send("Error logging in user.");
  }
};

const getAllUsers = async (req, res) => {
  try {
    const usersData = JSON.parse(await fs.readFile(usersFilePath, "utf8"));
    // Returning all users - consider filtering sensitive information like passwords
    res.json(usersData);
  } catch (err) {
    res.status(500).send("Error retrieving users.");
  }
};

const getUserById = async (req, res) => {
  try {
    const usersData = JSON.parse(await fs.readFile(usersFilePath, "utf8"));
    const user = usersData.find((u) => u.id === parseInt(req.params.id)); // Assuming each user has an 'id' property
    if (!user) return res.status(404).send("User not found.");
    res.json(user);
  } catch (err) {
    res.status(500).send("Error retrieving user.");
  }
};

const updateUser = async (req, res) => {
  try {
    const { error } = userValidation.update.validate(req.body); // Assuming you have validation for update
    if (error) return res.status(400).send(error.details[0].message);

    const usersData = JSON.parse(await fs.readFile(usersFilePath, "utf8"));
    const userIndex = usersData.findIndex((u) => u.id === parseInt(req.params.id)); // Assuming each user has an 'id' property
    if (userIndex === -1) return res.status(404).send("User not found.");

    // Update user data - be careful with updating sensitive fields like passwords
    usersData[userIndex] = { ...usersData[userIndex], ...req.body };
    await fs.writeFile(usersFilePath, JSON.stringify(usersData));

    res.send("User updated successfully.");
  } catch (err) {
    res.status(500).send("Error updating user.");
  }
};

module.exports = { register, login, getAllUsers, getUserById, updateUser };
