// Create a file named products.js.
// Inside products.js, create an array of objects, each representing a product with properties like name, price, and category.
// Export this array using the Common JS syntax.



const products = [
  {
    name: "Basic T-Shirt",
    price: 14.99,
    category: "Apparel",
  },
  {
    name: "Coffee Mug",
    price: 8.99,
    category: "Kitchenware",
  },
  {
    name: "Bluetooth Headphones",
    price: 75.0,
    category: "Electronics",
  },
  {
    name: "Notebook",
    price: 2.99,
    category: "Stationery",
  },
  {
    name: "Water Bottle",
    price: 20.0,
    category: "Accessories",
  },
];

module.exports = { products };
