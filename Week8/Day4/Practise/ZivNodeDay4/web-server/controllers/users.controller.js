const { users } = require("../config/db.js");
const {
  _getAllUsers,
  _getUser,
  _addUser,
} = require("../models/users.models.js");

/** add a new product - post */

const getAllUsers = (req, res) => {
  _getAllUsers()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(404).json({ msg: "Not Found" });
    });
  // res.json(users);
};

const searchUser = (req, res) => {
  console.log(req.query);

  const { name } = req.query;

  const filteredUsers = users.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });

  if (filteredUsers.length === 0) {
    return res.status(404).json({ msg: "user not found" });
  }
  res.send(filteredUsers);
};

const getUser = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  try {
    const data = await _getUser(id);
    if (data.length === 0)
      return res.status(404).json({ msg: "user not found" });
    res.status(200).json(data);
  } catch (error) {
    return res.status(404).json({ msg: "user not found" });
  }
  // const user = users.find((item) => item.id == id);
  // if (!user) return res.status(200).json({ msg: "not found" });
  // res.json(user);
};

const addUser = (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  _addUser(name, email, password)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(404).json({ msg: "can not add a user, email already exist " });
    });
  // const new_user = { ...req.body, id: users.length + 1 };
  // users.push(new_user);
  // res.status(201).json(users);
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const indx = users.findIndex((item) => item.id == id);
  if (indx === -1) return res.sendStatus(404);

  users[indx] = { ...users[indx], name: name, email: email };

  res.json(users);
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  const indx = users.findIndex((item) => item.id == id);
  if (indx === -1) return res.sendStatus(404);
  users.splice(indx, 1);
  res.json(users);
};

module.exports = {
  getAllUsers,
  searchUser,
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
