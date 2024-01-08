// In app.js, import the TodoList class from the todo.js module.
// Create an instance of the TodoList class.
// Add a few tasks, mark some as complete, and list all tasks.
// Run app.js and verify that the todo list operations are working correctly.


import { TodoList } from './todo.js';

// Create an instance of the TodoList class
const myTodoList = new TodoList();

// Add a few tasks
myTodoList.addTask('Learn Node.js');
myTodoList.addTask('Go to the gym');
myTodoList.addTask('Buy groceries');

// Mark 'Learn Node.js' as complete
myTodoList.completeTask('Learn Node.js');

// List all tasks
myTodoList.listTasks();