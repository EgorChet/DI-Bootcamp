import React, { useState } from "react";

const Car = ({ carInfo }) => {
  const [color, setColor] = useState("red");
  return (
    <h1>
      This car is a {carInfo.name} {carInfo.model}
    </h1>
  );
};

export default Car;
