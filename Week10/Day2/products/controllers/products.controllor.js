const {
  _getAllProducts,
  _getProduct,
} = require("../models/products.models.js");

const getAllProducts = (req, res) => {
  _getAllProducts()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({ msg: "not found" });
    });
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await _getProduct(id);
    if (product.length === 0)
      return res.status(404).json({ msg: "No Product Found" });
    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "not found" });
  }
};

module.exports = {
  getAllProducts,
  getProduct,
};
