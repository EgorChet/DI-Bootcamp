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
  
  module.exports = {
    saveResponse,
    getResponsesByUserId
  };