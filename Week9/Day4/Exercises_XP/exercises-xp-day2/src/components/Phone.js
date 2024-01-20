import { useState } from "react";

const Phone = () => {
  // Define state variables using the useState hook
  //   const [brand] = useState("Samsung");
  //   const [model] = useState("Galaxy S20");
  //   const [color] = useState("black");
  //   const [year] = useState(2020);
  const [brand] = useState("Samsung");
  const [model] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year] = useState(2020);

  // Function to change the color state variable
  const changeColor = () => {
    setColor("blue");
  };

  return (
    <div>
      <h1>My Phone is a {brand}</h1>
      <p>
        it is a {color} {model} from {year}
      </p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};
export default Phone;
