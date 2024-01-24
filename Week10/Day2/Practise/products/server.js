const express = require("express");
require("dotenv").config();
const cors = require("cors");

const { products_router } = require("./routes/products.router.js");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT || 3001, () => {
  console.log(`run on ${process.env.PORT || 3001}`);
});

app.use("/api/products", products_router);
