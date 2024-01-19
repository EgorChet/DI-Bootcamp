import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import SubHello from "./SubHello";
import reportWebVitals from "./reportWebVitals";

// const arr = [
//   { id: 1, name: "iPhone", price: 700 },
//   { id: 2, name: "iPad", price: 600 },
//   { id: 3, name: "iPhone", price: 500 },
// ];

// const element = (
//   <div>
//     {arr.map((item) => {
//       return (
//         <div>
//           <h1>
//             {item.name} {item.price}
//           </h1>
//           <h2>{item.id}</h2>
//         </div>
//       );
//     })}
//   </div>
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
