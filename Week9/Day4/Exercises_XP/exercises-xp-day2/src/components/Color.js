import { useState, useEffect } from "react";

function Color() {
  // Define state variable using the useState hook
  const [favoriteColor, setFavoriteColor] = useState("red");

  // Use useEffect to change the color to "yellow" and display an alert
  useEffect(() => {
    setTimeout(() => {
      setFavoriteColor("yellow");
      alert("useEffect reached");
    }, 2000);
  }, []);

  // Function to change the favoriteColor to "blue"
  const changeColorToBlue = () => {
    setFavoriteColor("blue");
  };

  return (
    <div>
      <h1>My Favorite Color is {favoriteColor}</h1>
      <button onClick={changeColorToBlue}>Change Color</button>
    </div>
  );
}

export default Color;
