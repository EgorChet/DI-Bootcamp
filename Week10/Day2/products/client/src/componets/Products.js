import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Products = (props) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    all();
  }, []);

  const all = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/products`);
      setProducts(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Shop</h1>
      {products &&
        products.map((item) => (
          <>{item.product_name}</>
        ))}
    </>
  );
};

export default Products;
