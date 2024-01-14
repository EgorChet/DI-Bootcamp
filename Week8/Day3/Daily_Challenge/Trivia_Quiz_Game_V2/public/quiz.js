const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  const quizContainer = document.getElementById("quiz-container");
  if (currentQuestionIndex < triviaQuestions.length) {
    const q = triviaQuestions[currentQuestionIndex];
    quizContainer.innerHTML = `
        <h2>${q.question}</h2>
        <input type="text" id="answer">
        <button onclick="submitAnswer()">Submit</button>
      `;
  } else {
    showScore();
  }
}

function submitAnswer() {
  const userAnswer = document.getElementById("answer").value;
  if (userAnswer.toLowerCase() === triviaQuestions[currentQuestionIndex].answer.toLowerCase()) {
    score++;
  }
  currentQuestionIndex++;
  displayQuestion();
}

function showScore() {
  document.body.innerHTML = `
      <h1>Your Score</h1>
      <div>You scored ${score} out of ${triviaQuestions.length}</div>
      <button onclick="window.location.href='index.html'">Restart Quiz</button>
    `;
}

// Ensure this function runs when the quiz page is loaded
if (window.location.pathname.endsWith("quiz.html")) {
  window.onload = displayQuestion;
}
