const recommendationsModel = require('../models/recommendationModel');

const fetchRecommendations = async (req, res) => {
    try {
        const { stressLevel, sleepQuality, exerciseFrequency, sourceStress } = req.body;
        const recommendations = await recommendationsModel.getRecommendations(stressLevel, sleepQuality, exerciseFrequency, sourceStress);
        res.json(recommendations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { fetchRecommendations };
