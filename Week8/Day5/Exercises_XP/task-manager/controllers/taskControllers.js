// controllers/taskController.js
const fs = require("fs");
const tasksFilePath = "./tasks.json";
const {
  validateCreateTask,
  validateUpdateTask,
  validateId,
} = require("../validation/taskValidation");

// Helper function to read tasks from file
function readTasks() {
  const tasksData = fs.readFileSync(tasksFilePath);
  return JSON.parse(tasksData);
}

exports.getAllTasks = (req, res) => {
  try {
    const tasks = readTasks();
    res.json(tasks);
  } catch (error) {
    console.log(error);
  }
};

exports.getTaskById = (req, res) => {
  try {
    // Validate the ID
    const { error } = validateId(req.params.id);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const tasks = readTasks();
    const task = tasks.find((t) => t.id === req.params.id);
    if (!task) {
      return res.status(404).send("Task not found");
    }
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
};

exports.createTask = (req, res) => {
  try {
    // Validate the incoming task data
    const { error } = validateCreateTask(req.body);
    // Basic validation for title, description, and dueDate
    if (error) {
      // If the validation fails, send a bad request response
      return res.status(400).send(error.details[0].message);
    }
    // Destructure validated data
    const { title, description, dueDate } = req.body;

    // Create new task with provided data
    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      dueDate,
    };

    const tasks = readTasks();
    tasks.push(newTask);
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2)); // Pretty-print JSON

    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating the task");
  }
};

exports.updateTask = (req, res) => {
  try {
    // Validate the ID
    const { error: idError } = validateId(req.params.id);
    if (idError) {
      return res.status(400).send(idError.details[0].message);
    }

    // Validate the update data
    const { error: updateError } = validateUpdateTask(req.body);
    if (updateError) {
      return res.status(400).send(updateError.details[0].message);
    }

    const tasks = readTasks();
    const index = tasks.findIndex((t) => t.id === req.params.id);
    if (index === -1) {
      return res.status(404).send("Task not found");
    }

    tasks[index] = { ...tasks[index], ...req.body };
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
    res.json(tasks[index]);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
};

exports.deleteTask = (req, res) => {
  try {
    // Validate the ID
    const { error } = validateId(req.params.id);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    let tasks = readTasks();
    const index = tasks.findIndex((t) => t.id === req.params.id);
    if (index === -1) {
      return res.status(404).send("Task not found");
    }
    tasks = tasks.filter((t) => t.id !== req.params.id);
    fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
};
