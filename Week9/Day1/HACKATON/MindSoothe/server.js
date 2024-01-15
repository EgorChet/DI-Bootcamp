// server.js
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// Import and use routes
const userRoute = require('./src/routes/userRoute');
const questionnaireRoute = require('./src/routes/questionaireRoute');
const recommendationsRoute = require('./src/routes/recommendationRoute')
app.use(userRoute);
app.use(questionnaireRoute);
app.use(recommendationsRoute);

app.listen(port, () => console.log(`Server listening on port ${port}`));
