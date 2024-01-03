// Daily Challenge : Go Wildcats
console.log("Daily Challenge : Go Wildcats");
// Last Updated: September 22nd, 2023

// What You Will Learn :
// Use the advanced array methods

// Instructions
// Using this array:

const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];
// Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
// The new array should look like this :
// const usernames = ["john!", "becky!", "susy!", "tyson!"]
console.log(
  "1. Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point",
);
const usernames = [];
gameInfo.forEach((gamer) => usernames.push(`${gamer.username}!`));
console.log(usernames);
console.log("--------");

// 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// The new array should look like this :
// const winners = ["becky", "susy"]
console.log(
  "2. Create an array using forEach that contains the usernames of all players with a score bigger than 5",
);
const fiveAndMore = [];
gameInfo.forEach(
  (gamer) => gamer.score > 5 && fiveAndMore.push(gamer.username),
);
console.log(fiveAndMore);
console.log("--------");

// 3. Find and display the total score of the users. (Hint: The total score is 71)
console.log("3. Find and display the total score of the users");
const totalScore = gameInfo.reduce((acc, gamer) => acc + gamer.score, 0);
console.log(totalScore);
console.log("--------");
