import express from "express";
import { _register, _all, _login } from "../controllers/usersController.js";
import { verifytoken } from "../middlewares/verifyToken.js";

const usersRouter = express.Router();

usersRouter.post("/register", _register);
usersRouter.get("/", verifytoken, _all);
usersRouter.post("/login", _login);

usersRouter.get("/verify", verifytoken, (req, res) => {
  res.sendStatus(200);
});

export default usersRouter;
