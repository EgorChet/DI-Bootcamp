// validateTask.js
const Joi = require("joi");

// Schema for creating a new task
const createOrUpdateTaskSchema = Joi.object({
  title: Joi.string().min(5).required(), // 'title' must be a string and is required
  description: Joi.string().min(15).required(), // 'description' must be a string and is required
  dueDate: Joi.date().iso().required(), // 'dueDate' must be a date in ISO format and is required
});

// Schema for validating an ID (assuming ID is a string)
const idSchema = Joi.string().required();

// Export validation functions
module.exports = {
  validateCreateTask: (taskData) => createOrUpdateTaskSchema.validate(taskData),
  validateUpdateTask: (taskData) => createOrUpdateTaskSchema.validate(taskData),
  validateId: (id) => idSchema.validate(id),
};
