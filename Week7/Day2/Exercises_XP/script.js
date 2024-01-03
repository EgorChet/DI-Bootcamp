// Exercises XP
// Last Updated: September 22nd, 2023

// What We Will Learn
// HTTP & Forms

// 🌟 Exercise 1 : HTML Form
console.log("🌟 Exercise 1 : HTML Form");
// document.getElementById('myForm').addEventListener('submit', function(e) {
//     e.preventDefault();  // Prevent the default form submission
//     // Now, you can do whatever you want with the form data here.
//     // For example, logging the values to the console:
//     const formData = new FormData(e.target);
//     formData.forEach((value, key) => {
//         console.log(`${key}: ${value}`);
//     });
// });
// Instructions
// Hint : Read about sending form data using the HTTP protocol
// form

// Create a form like the one above. The form should contain three inputs:
// a small text input asking for a name,
// a larger textarea input to write a message,
// a submit input (“Send”)

// When you click the Send button, the form will be submitted with a GET method. (you can use the same HTML file for the action url)
// Where will the sent data appear?
console.log("By default it will appear in the end of our URL");
// document.getElementById('myForm').addEventListener('submit', function(e) {
//     e.preventDefault();  // Prevent the default form submission
//     // Now, you can do whatever you want with the form data here.
//     // For example, logging the values to the console:
//     const formData = new FormData(e.target);
//     formData.forEach((value, key) => {
//         console.log(`${key}: ${value}`);
//     });
// });

// 🌟 Exercise 2 : HTML Form #2
console.log("🌟 Exercise 2 : HTML Form #2");
// document.getElementById('myForm2').addEventListener('submit', function(e) {
//     e.preventDefault();  // Prevent the default form submission

//     // Prepare and log form data to see what would be sent
//     const formData = new FormData(e.target);
//     console.log('Form data to be sent:');
//     formData.forEach((value, key) => {
//         console.log(`${key}: ${value}`);
//     });
// })
// Instructions
// Use the same form structure as Exercise 1.
// When you click the Send button, the form will be submitted with a POST method.(you can use the same HTML file for the action url)
// Where will the sent data appear? Hint : Look at the Network Tab
console.log(
  "When the form is submitted with a POST method, the data does not appear in the URL. Instead, it's included in the request body. We won't see this data on the client side unless you handle it with a server-side script or use JavaScript. To see the sent data, we can look at the Network Tab in our browser's developer tools after submitting the form. Find the form submission request and inspect it to view the request payload.",
);

// 🌟 Exercise 3 : JSON Mario
console.log("🌟 Exercise 3 : JSON Mario");

// Instructions
// Using this code:

const marioGame = {
  detail: "An amazing game!",
  characters: {
    mario: {
      description: "Small and jumpy. Likes princesses.",
      height: 10,
      weight: 3,
      speed: 12,
    },
    bowser: {
      description: "Big and green, Hates princesses.",
      height: 16,
      weight: 6,
      speed: 4,
    },
    princessPeach: {
      description: "Beautiful princess.",
      height: 12,
      weight: 2,
      speed: 2,
    },
  },
};
// Convert this JS object into a JSON object. What happens to the nested objects ?
// Convert and pretty print this JS object into a JSON object. Hint : Check out the JSON lesson on the platform.
// Use your web inspector to add a breakpoint. Check the values of the JSON object in the debugger.
const marioGameJSON = JSON.stringify(marioGame);
console.log(marioGameJSON);

const prettyMarioGameJSON = JSON.stringify(marioGame, null, 4);
console.log(prettyMarioGameJSON);
console.log("Inspect marioGameJSON and prettyMarioGameJSON");
