import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const arr = [
//   { id: 1, name: "iphone", price: 700 },
//   { id: 2, name: "ipad", price: 1000 },
//   { id: 3, name: "ipod", price: 2000 },
// ];

// const element = (
//   <div>
//     <h1>I</h1>
//     <h2>Love</h2>
//     <h3>{50 + 50}%</h3>
//     <h3>React</h3>
//   </div>
// );

// const element = (
//   <div>
//     {arr.map((item) => {
//       return (
//         <div>
//           <h1>{item.name} {item.price}</h1>
//           <h2>{item.id}</h2>
//         </div>
//       );
//     })}
//   </div>
// );


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
