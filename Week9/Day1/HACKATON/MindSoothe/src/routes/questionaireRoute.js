const express = require('express');
const router = express.Router();
const questionnaireController = require('../controllers/questionnaireController');
// const authMiddleware = require('../middlewares/authMiddleware'); // If you have authentication middleware

// Endpoint to save questionnaire response
router.post('/save-response', questionnaireController.submitResponse);

// Endpoint to get questionnaire responses by user ID
router.get('/get-responses', questionnaireController.getUserResponses);

module.exports = router;
