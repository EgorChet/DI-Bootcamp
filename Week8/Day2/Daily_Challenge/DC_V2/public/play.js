let timer;
let countdown;
const timeLimit = 15; // Time limit in seconds
let randomEmoji = {};

const getEmojisApi = () => {
  fetch("http://localhost:3001/emojis")
    .then((res) => res.json())
    .then((emojisapi) => {
      console.log(emojisapi);
      randomEmoji = emojisapi.randomEmoji;
      render(emojisapi.shuffleEmojis, emojisapi.randomEmoji);
      startTimer(); // Start the timer when a new emoji is fetched
    });
};

getEmojisApi();

const render = (options, emoji) => {
  const root = document.getElementById("root");
  const root1 = document.getElementById("root1");
  const root2 = document.getElementById("root2");
  const root3 = document.getElementById("root3");
  const html = options.map((item) => {
    return item.name + " ";
  });
  root.innerHTML = `Choose from the options below:`;
  root1.innerHTML = `${html.join("&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;")}`;
  root2.innerHTML = `Guess who or what is it?`;
  root3.innerHTML = `${emoji.emoji}`;
};

const gueesTheEmoji = () => {
  const guess = document.getElementById("guess").value.toLowerCase();
  const correctAnswer = randomEmoji.name.toLowerCase();

  fetch("http://localhost:3001/emojis", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ guess, name: correctAnswer }),
  })
  .then((res) => res.json())
  .then((msg) => {
    clearInterval(countdown); // Stop the timer

    const messageElement = document.getElementById("message");
    messageElement.innerHTML = `<h2>${msg.message}</h2>`; // Set new message

    if (msg.correct) {
      setTimeout(() => {
        messageElement.innerHTML = ''; // Clear the message
        getEmojisApi(); // Fetch a new emoji
        document.getElementById("guess").value = ''; // Clear the guess input
        document.getElementById("timer").innerHTML = ''; // Clear the timer display
      }, 2000); // Delay before refreshing
    } else {
      messageElement.innerHTML += `<p>Try again!</p>`; // Show "Try again!" only if incorrect
    }
  });
};

function startTimer() {
  const timerElement = document.getElementById('timer'); // Element to display the countdown
  timerElement.innerHTML = `You have: ${timeLimit} seconds`;
  let remainingTime = timeLimit;

  countdown = setInterval(() => {
    remainingTime--;
    timerElement.innerHTML = `Time remaining: ${remainingTime} seconds`;

    if (remainingTime <= 0) {
      clearInterval(countdown);
      timerElement.innerHTML = "Time's up!";
      submitGuess(); // Automatically submit the guess
    }
  }, 1000);
}


function submitGuess() {
  clearInterval(countdown); // Clear the interval if guess is submitted manually
  const guess = document.getElementById("guess").value;
  fetch("http://localhost:3001/emojis", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ guess, name: randomEmoji.name }),
  });
};



// const gueesTheEmoji = () => {
//   const guess = document.getElementById("guess").value.toLowerCase(); // Convert guess to lowercase
//   const correctAnswer = randomEmoji.name.toLowerCase(); // Convert correct answer to lowercase

//   fetch("http://localhost:3001/emojis", {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({ guess, name: correctAnswer }),
//   })
//   .then((res) => res.json())
//   .then((msg) => {
//     console.log(msg);
//     document.getElementById("message").innerHTML = `<h1>${msg.message}</h1>`;
//   });
// };

// const gueesTheEmoji = () => {
//   const guess = document.getElementById("guess").value.toLowerCase();
//   const correctAnswer = randomEmoji.name.toLowerCase();

//   fetch("http://localhost:3001/emojis", {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({ guess, name: correctAnswer }),
//   })
//   .then((res) => res.json())
//   .then((msg) => {
//     clearInterval(countdown); // Stop the timer
//     console.log(msg);

//     const messageElement = document.getElementById("message");
//     messageElement.innerHTML = `<h1>${msg.message}</h1>`;

//     // Decide what to do next based on the response
//     if (msg.correct) {
//       // If the guess is correct, refresh the game for a new emoji
//       setTimeout(() => {
//         getEmojisApi(); // Fetch a new emoji
//         messageElement.innerHTML = ''; // Clear the message
//       }, 2000); // Delay before refreshing
//     } else {
//       // If the guess is wrong, prompt to try again
//       messageElement.innerHTML += `<p>Try again!</p>`;
//     }
//   });
// };
