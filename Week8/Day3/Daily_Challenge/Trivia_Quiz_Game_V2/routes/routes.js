const express = require('express');
const path = require('path');
const router = express.Router();

// Route for the starting page of the quiz
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Route for the quiz page
router.get('/quiz', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/quiz.html'));
});

// Route for the score page
router.get('/score', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/score.html'));
});

module.exports = router;
