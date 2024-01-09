const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const emojis = [
  { emoji: '😀', name: 'Smile' },
  { emoji: '🐶', name: 'Dog' },
  { emoji: '🌮', name: 'Taco' },
  // Add more emojis here
];

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/game', (req, res) => {
  // Send a random emoji to the client
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  res.json(randomEmoji);
});

app.post('/guess', (req, res) => {
  const { emoji, guess } = req.body;
  const correctEmoji = emojis.find(e => e.emoji === emoji);
  if (correctEmoji && correctEmoji.name.toLowerCase() === guess.toLowerCase()) {
    res.json({ correct: true });
  } else {
    res.json({ correct: false });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
