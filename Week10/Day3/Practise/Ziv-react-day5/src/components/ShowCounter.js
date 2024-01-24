import { useContext } from "react";
import { AppContext } from "../App";
import Name from "./Name";

const ShowCounter = (props) => {
  const { count } = useContext(AppContext);
  return (
    <>
      <h2>Counter: {count}</h2>
      <Name age={props.age}/>
    </>
  );
};
export default ShowCounter;
