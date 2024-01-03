// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).

// Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *

console.log("Daily Challenge Stars:\n\n");
console.log("Using One Loop:");

let lines = 6;
let stars = "";
for (let i = 1; i <= lines; i++) {
  stars += " * ";
  console.log(stars);
}

// By using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
console.log("\n\nUsing Two Nested Loops:");

// The outer loop runs once for each line.
for (let lineNum = 1; lineNum <= lines; lineNum++) {
  let starsForLine = ""; // This will hold the stars for the current line.

  // The inner loop runs as many times as the line number.
  // So, for line 1, it runs once; for line 2, it runs twice; and so on.
  for (let starCount = 1; starCount <= lineNum; starCount++) {
    starsForLine += "*"; // Add a star for each iteration of the inner loop.
  }

  // After the inner loop completes, we have the full string of stars for the current line.
  console.log(starsForLine);
}

// node DailyChallengeStars.js
