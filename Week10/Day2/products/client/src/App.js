import { Routes, Route } from "react-router-dom";
import Products from "./componets/Products";
import Product from "./componets/Product";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/:id' element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
