const Joi = require("joi");

const register = Joi.object({
  name: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
});

const login = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = { register, login };
