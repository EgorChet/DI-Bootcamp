import jwt from "jsonwebtoken";

// in order to start we need sign (payload, code, expirationTime) it has three parameters: payload, secret code and expiration time

const token = jwt.sign(
  { email: "egor.chetverikov.1997@gmail.com", userid: 16 },
  "G%$$FDGDGD^$#H333",
  {
    expiresIn: "60s",
  }
);

console.log(token); // the my token below info i got from the terminal

const mytoken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVnb3IuY2hldHZlcmlrb3YuMTk5N0BnbWFpbC5jb20iLCJ1c2VyaWQiOjE2LCJpYXQiOjE3MDY3ODIxMzAsImV4cCI6MTcwNjc4MjE5MH0.2HLZi1pBcr4hV9bQY6gtemVe_eu1iafJPXnlzXTAUWo";

//   verifying token verify( token, secret, (err, decoded) => {})

jwt.verify(mytoken, "G%$$FDGDGD^$#H333", (err, decoded) => {
  if (err) return console.log(err.message);
  console.log(decoded);
});



// // server.js or index.js
// import cors from "cors";
// import express from "express";
// import dotenv from "dotenv";
// import usersRouter from "./routes/usersRoute.js";
// dotenv.config();

// const app = express();

// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// // Middleware for parsing JSON bodies
// app.use(express.json());

// app.use("/users", usersRouter);

// // Environment variable for the port, default to 3001 if not specified
// const port = process.env.PORT || 3001;

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
