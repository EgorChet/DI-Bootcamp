// 🌟 Exercice 4 : Volume Of A Sphere
// Instructions
// Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:
document.getElementById("MyForm").addEventListener("submit", function (event) {
  // Stop the form from submitting normally
  event.preventDefault();

  // Get the radius from the input field, assume it's a valid number
  var radius = document.getElementById("radius").value;

  // Calculate the volume of the sphere using the formula
  var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Set the calculated volume to the volume input field, rounded to 4 decimal places
  document.getElementById("volume").value = volume.toFixed(4);
});
