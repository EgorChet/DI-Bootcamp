const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || 3001, () => {
  console.log(`listening on ${process.env.PORT || 3001}`);
});

app.use("api/products".products_router);
