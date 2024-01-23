import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      // console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Shop</h1>
      {products
        ? products.map((item) => {
            return (
              <div key={item.product_id}
              style={{
                display:'inline-block',
                padding:'20px',
                margin: '20px',
                border:'1px solid #000'
              }}>
                <h2>{item.product_name}</h2>
                <h3>{item.price}</h3>
                <Link to={`/${item.product_id}`}>Buy Now</Link>
              </div>
            );
          })
        : null}
    </>
  );
};
export default Products;
