const express = require("express");
const { getAllProducts, getProduct } = require(
  "../controllers/products.controllor.js"
);

const products_router = express.Router();

products_router.get("/", getAllProducts);
products_router.get("/:id", getProduct);

module.exports = { products_router };
