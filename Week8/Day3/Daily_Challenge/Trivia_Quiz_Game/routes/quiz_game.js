// routes/quiz_game.js
const express = require('express');
const router = express.Router();
const triviaQuestions = require('../configuration/db.js');

// GET /quiz - Start the quiz and display the first question
router.get('/', (req, res) => {
    currentQuestionIndex = 0;
    score = 0;
    res.json({ question: triviaQuestions[currentQuestionIndex].question });
});

// POST /quiz - Submit an answer and move to the next question
router.post('/', (req, res) => {
    const userAnswer = req.body.answer;
    let response = {};

    if (userAnswer.toLowerCase() === triviaQuestions[currentQuestionIndex].answer.toLowerCase()) {
        score++;
        response.correct = true;
    } else {
        response.correct = false;
        response.correctAnswer = triviaQuestions[currentQuestionIndex].answer;
    }

    currentQuestionIndex++;

    // Check if there are more questions
    if (currentQuestionIndex < triviaQuestions.length) {
        response.nextQuestion = triviaQuestions[currentQuestionIndex].question;
    } else {
        response.message = "Quiz completed";
        response.finalScore = score;
        // Optionally reset the quiz here or in a separate route
        currentQuestionIndex = 0;
        score = 0;
    }

    res.json(response);
});

// GET /quiz/score - Display the final score
router.get('/score', (req, res) => {
    res.json({ score: score });
});

module.exports = router;