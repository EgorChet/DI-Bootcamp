const express = require('express');
const router = express.Router();
const questionnaireController = require('../controllers/questionnaireController');

// Endpoint to save questionnaire response
router.post('/save-response', questionnaireController.submitResponse);

// Endpoint to get questionnaire responses by user ID
router.get('/get-responses', questionnaireController.getUserResponses);

module.exports = router;
