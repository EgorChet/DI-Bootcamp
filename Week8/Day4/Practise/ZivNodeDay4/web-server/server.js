/** API  Restfull API */
/** CRUD */

/**
 server
  |_ config - connection to databases
  |_ models * - queries to database
  |_ controllers - function implementation code
  |_ routes - route implementation codes.
 */

const express = require("express");
const { users, products } = require("./config/db.js");
const { users_router } = require("./routes/users.routes.js");
const { products_router } = require("./routes/products.routes.js");
const { logger, auth } = require("./middlewares/utils.js");
// const bp = require("body-parser");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**  request => Middleware => respose */

// app.use(logger);
// app.use("/users", auth);
// app.use("/customers", auth);

app.listen(3001, () => {
  console.log("run on port 3001");
});

app.use("/", express.static(__dirname + "/public"));

app.use("/users", users_router);
app.use("/products", products_router);
