import { useSelector, useDispatch } from "react-redux";
import { ageUpAsync, ageDownAsync } from "../features/agecounter/ageSlice";
import logo from "../logo.svg"; // Assuming logo.svg is in the same directory
import "./AgeComponent.css";
export const AgeComponent = () => {
  const age = useSelector((state) => state.age.value);
  const loading = useSelector((state) => state.age.loading);
  const dispatch = useDispatch();

  return (
    <div>
      {loading ? (
        <div className='loading-container'>
          <img width={250} height={250} src={logo} alt='Loading' className='loading-logo' />
          <p>Loading...</p> {/* Displayed alongside the image */}
        </div>
      ) : (
        <>
          <h1>Age: {age}</h1>
          <button onClick={() => dispatch(ageUpAsync(1))}>Age Up</button>
          <button onClick={() => dispatch(ageDownAsync(1))}>Age Down</button>
        </>
      )}
    </div>
  );
};

export default AgeComponent;
