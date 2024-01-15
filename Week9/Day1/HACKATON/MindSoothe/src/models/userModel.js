// src/models/userModel.js
const knex = require('../config/dbConfig');

const createUser = async (userData) => {
    const [newUserId] = await knex('users').insert({
        name: userData.name,
        last_name: userData.lastName,
        username: userData.username,
        email: userData.email,
        password: userData.password
    }).returning('id');
    return newUserId;
};

const findUserByUsername = async (username) => {
    const user = await knex('users').where({ username }).first();
    return user;
};

module.exports = {
    createUser,
    findUserByUsername
};