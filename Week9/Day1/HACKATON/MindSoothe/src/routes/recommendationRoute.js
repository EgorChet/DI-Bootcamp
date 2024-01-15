const express = require('express');
const router = express.Router();
const recommendationController = require('../controllers/recommendationController');

router.post('/get-recommendations', recommendationController.fetchRecommendations);

module.exports = router;
