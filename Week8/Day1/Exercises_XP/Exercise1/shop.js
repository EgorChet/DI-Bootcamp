// Create another file named shop.js.
// In shop.js, require the product objects from the products.js module.
// Create a function that takes a product name as a parameter and searches for the corresponding product object.
// Call this function with different product names and print the details of the products.
// Run shop.js and verify that the correct product details are displayed.

const { products } = require("./product.js");

function findProduct(name) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].name === name) {
      return products[i];
    }
  }
  return "Product not found"; // Default return value if not found
}
console.log("----");
console.log("Searching for 'Coffee Mug' that exists in the array =>");
console.log(findProduct("Coffee Mug"));
console.log("----");
console.log("Searching for 'Mug' that does not exist in the array =>");
console.log(findProduct("Mug"));
console.log("----");
