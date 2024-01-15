// src/controllers/questionnaireController.js
const questionnaireModel = require("../models/questionnaireModel");

const submitResponse = async (req, res) => {
  try {
    const { userId, stress_level, sleep_quality, exercise_frequency, primary_source_of_stress } =
      req.body;
    await questionnaireModel.saveResponse({
      user_id: userId,
      stress_level,
      sleep_quality,
      exercise_frequency,
      primary_source_of_stress,
    });
    // Send a JSON response indicating success
    res.status(201).json({ message: "Response submitted successfully" });
  } catch (error) {
    // Send a JSON response indicating error
    res.status(500).json({ message: "Error submitting response" });
  }
};

const getUserResponses = async (req, res) => {
  try {
    const { userId } = req.params;
    const responses = await questionnaireModel.getResponsesByUserId(userId);
    if (responses.length === 0) {
      return res.status(404).json({ message: "No responses found for this user" });
    }
    res.json(responses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching responses" });
  }
};

module.exports = {
  submitResponse,
  getUserResponses,
};