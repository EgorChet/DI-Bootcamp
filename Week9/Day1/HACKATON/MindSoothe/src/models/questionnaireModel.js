// src/models/questionnaireModel.js
const knex = require('../config/dbConfig'); 

const saveResponse = async (response) => {
    const [responseId] = await knex('questionnaire_responses').insert(response).returning('id');
    return responseId;
};

const getResponsesByUserId = async (userId) => {
    const responses = await knex('questionnaire_responses').where({ user_id: userId });
    return responses;
};

const getRecommendation = async (question, response) => {
    try {
      const recommendation = await db.oneOrNone(
        'SELECT recommendation_text FROM recommendations WHERE question = $1 AND response = $2',
        [question, response]
      );
  
      return recommendation ? recommendation.recommendation_text : 'No recommendation available';
    } catch (error) {
      console.error('Error fetching recommendation:', error.message);
      throw error;
    }
  };
  
  module.exports = {
    saveResponse,
    getResponsesByUserId,
    getRecommendation
  };