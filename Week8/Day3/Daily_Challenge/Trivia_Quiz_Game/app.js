const express = require('express');
const bodyParser = require('body-parser');
const quizRoutes = require('./routes/quiz_game');

const app = express();

const PORT = process.env.PORT || 3000;

// Body parser middleware to handle POST requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use the quiz routes
app.use('/quiz', quizRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
