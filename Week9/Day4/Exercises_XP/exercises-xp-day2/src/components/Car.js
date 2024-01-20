import { useState } from "react";
import Garage from "./Garage";
function Car({ carInfo }) {
  //   const [color, setColor] = useState("red");
  const [color] = useState("red");
  return (
    <>
      <h1>
        This car is {color} {carInfo.name} {carInfo.model}
      </h1>
      <Garage size='small' />
    </>
  );
}

export default Car;
