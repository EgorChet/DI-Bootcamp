import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Product = (props) => {
  const [product, setProduct] = useState();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    info();
  }, []);

  const info = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/products/${params.id}`);
      setProduct(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const backToShop = () => {
    navigate("/");
  };
  return (
    <>
      <h1>Product</h1>
      {product
        ? product.map((item) => {
            return (
              <div key={item.product_id}>
                <h1>{item.product_name}</h1>
                <p>{item.description}</p>
                <img src={item.imglink} alt={item.product_name} width='400' />
                <h2>{item.price} ₪</h2>
              </div>
            );
          })
        : null}
      <Link to='/'>Back to Shop</Link>
      <br />
      <br />
      <div>
        <button onClick={() => backToShop()}>Back to Shop</button>
      </div>
    </>
  );
};
export default Product;
