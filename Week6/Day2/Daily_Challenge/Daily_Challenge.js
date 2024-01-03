// Instructions
// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.
// <!DOCTYPE html>
// <html>
//     <head>
//     <meta charset="utf-8" />
//     <title>Challenge: Mad Libs</title>
//     </head>
//     <body>

//         <h1>Mad Libs</h1>

//         <form id="libform">
//             <label for="noun">Noun:</label><input type="text" id="noun"><br>
//             <label for="adjective">Adjective:</label><input type="text" id="adjective"><br>
//             <label for="person">Someone's Name:</label><input type="text" id="person"><br>
//             <label for="verb">Verb:</label><input type="text" id="verb"><br>
//             <label for="place">A place:</label><input type="text" id="place"><br>
//             <button id="lib-button">Lib it!</button>
//         </form>

//         <p>Generated story:
//             <span id="story"></span>
//         </p>

//         <script src="Daily_Challenge.js"></script>

//     </body>
// </html>

// Follow these steps :
// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("libform");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve input values
    const noun = document.getElementById("noun").value;
    const adjective = document.getElementById("adjective").value;
    const person = document.getElementById("person").value;
    const verb = document.getElementById("verb").value;
    const place = document.getElementById("place").value;

    // Validate inputs
    if (!noun || !adjective || !person || !verb || !place) {
      alert("Please fill out all fields!");
      return;
    }

    // Generate and display the story
    const story = `Today, ${person} decided to go to the ${adjective} ${place} to ${verb} with a ${noun}.`;
    document.getElementById("story").innerText = story;
  });

  // Bonus: Shuffle button
  const shuffleButton = document.createElement("button");
  shuffleButton.innerText = "Shuffle";
  document.body.appendChild(shuffleButton);

  const stories = [
    `In an %adjective% moment, %person% decided to %verb% at the %place% with their favorite %noun%.`,
    `%person% always believed that a %noun% could %verb%, especially in a %adjective% place like %place%.`,
    `Why did %person% bring a %noun% to the %place%? Just to %verb% in the most %adjective% way possible!`,
  ];

  shuffleButton.addEventListener("click", function () {
    // Retrieve current input values
    const noun = document.getElementById("noun").value;
    const adjective = document.getElementById("adjective").value;
    const person = document.getElementById("person").value;
    const verb = document.getElementById("verb").value;
    const place = document.getElementById("place").value;

    // Validate inputs
    if (!noun || !adjective || !person || !verb || !place) {
      alert("Please fill out all fields before shuffling!");
      return;
    }

    // Randomly select a story template and fill it with current input words
    const randomStoryIndex = Math.floor(Math.random() * stories.length);
    let newStory = stories[randomStoryIndex];
    newStory = newStory
      .replace("%noun%", noun)
      .replace("%adjective%", adjective)
      .replace("%person%", person)
      .replace("%verb%", verb)
      .replace("%place%", place);

    // Update the story on the page
    document.getElementById("story").innerText = newStory;
  });
});
