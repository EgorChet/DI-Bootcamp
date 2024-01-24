const { db } = require("../config/dnconnect.js");

const _getAllProducts = () => {
  return db("products")
    .select("product_id", "product_name", "price", "imglink")
    .orderBy("product_name");
};

const _getProduct = (id) => {
  return db("products")
    .select("product_id", "product_name", "price", "description", "imglink")
    .where({ product_id: id });
};

module.exports = {
  _getAllProducts,
  _getProduct,
};
