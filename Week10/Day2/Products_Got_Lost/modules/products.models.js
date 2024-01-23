const { db } = require("../config/dbconnect.js");

const _getAllProducts = () => {
  return db("products").select("product_id", "product_name", "price").orderBy("product_name");
};

const _getProduct = (id) => {
  return db("products").select("product_id", "product_name", "price").where("product_id", id);
};

module.exports = {
  _getAllProducts,
  _getProduct,
};
