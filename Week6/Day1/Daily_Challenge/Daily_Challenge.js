// Daily Challenge: Planets
// What You Will Learn :
// DOM tree
// Instructions
// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.
// Create an array which value is the planets of the solar system.

const planets = [
  { name: "Mercury", color: "gray", moons: 0 },
  { name: "Venus", color: "peachpuff", moons: 0 }, // changed from yellow so that we can see the white text on it
  { name: "Earth", color: "blue", moons: 1 },
  { name: "Mars", color: "red", moons: 2 },
  { name: "Jupiter", color: "orange", moons: 79 },
  { name: "Saturn", color: "gold", moons: 62 },
  { name: "Uranus", color: "lightblue", moons: 27 },
  { name: "Neptune", color: "darkblue", moons: 14 },
];
// Select the section where planets will be displayed
const listPlanetsSection = document.querySelector(".listPlanets");

// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
planets.forEach((planet) => {
  // Create the planet div
  const planetDiv = document.createElement("div");
  planetDiv.className = "planet";
  planetDiv.textContent = planet.name; // Set the text content to the planet's name
  planetDiv.style.display = "flex";
  planetDiv.style.justifyContent = "center";
  planetDiv.style.alignItems = "center";
  planetDiv.style.fontWeight = "bold";
  planetDiv.style.color = "White";
  planetDiv.style.backgroundColor = planet.color;

  // Append the planet div to the container
  listPlanetsSection.appendChild(planetDiv);

  // Create moons for the planet if it has any
  for (let i = 0; i < planet.moons; i++) {
    const moon = document.createElement("div");
    moon.className = "moon";

    // Calculate the moon's position to spread them out
    moon.style.left = `${15 * i}px`; // Adjust as needed for better positioning
    moon.style.top = "-5px"; // Adjust as needed to position the moons correctly

    // Append the moon to the planet div
    planetDiv.appendChild(moon);
  }
});

// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?
