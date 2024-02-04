import { db } from "../config/db.js";

export const register = (email, password) => {
  return db("users").insert({ email, password }, ["id", "email"]); // "password"
};

export const login = (email) => {
  return db("users").select("id", "email", "password").where({ email });
};

export const all = () => {
  return db("users").select("id", "email").orderBy("id"); // "password"
};
