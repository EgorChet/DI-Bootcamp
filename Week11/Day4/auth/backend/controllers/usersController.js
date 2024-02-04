import { register, login, all } from "../models/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const _login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const row = await login(email.toLowerCase());
    if (row.lenght === 0) return res.status(404).json({ msg: "email not found" });

    const match = bcrypt.compareSync(password + "", row[0].password);
    if (!match) return res.status(404).json({ msg: "wrong password" });

    const userid = row[0].id;
    const useremail = row[0].email;
    const secret = process.env.JWT_SECRET;
    const accesstoken = jwt.sign({ userid, useremail }, secret, {
      expiresIn: "60s",
    });

    res.cookie("token", accesstoken, { maxAge: 60 * 1000, httpOnly: true });
    res.json({ token: accesstoken });
  } catch (error) {
    console.log("_login=>", error);
    res.status(404).json({ msg: "Something went wrong during login " });
  }
};

export const _register = async (req, res) => {
  const { email, password } = req.body;
  const loweremail = email.toLowerCase();
  const salt = bcrypt.genSaltSync(10);
  const hashpass = bcrypt.hashSync(password + "", salt); // password +"" || password.toString()

  try {
    const row = await register(loweremail, hashpass);
    res.json(row);
    // res.status(201).json({ message: "User registered successfully", user: row });
  } catch (error) {
    console.log("register=>", error);
    res.status(404).json({ msg: "email already exist" });
  }
};

export const _all = async (req, res) => {
  try {
    const rows = await all();
    res.json(rows);
  } catch (error) {
    console.log("_all=>", error);
    res.status(404).json({ msg: "Not Found" });
  }
};
