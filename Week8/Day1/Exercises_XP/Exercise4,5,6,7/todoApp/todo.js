// Create a directory named todoApp.
// Inside the todoApp directory, create two files: todo.js and app.js.
// In todo.js, define an ES6 module that exports a TodoList class.
// The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.
// Export the TodoList class.

export class TodoList {
  constructor() {
    this.tasks = [];
  }

  // Add a task
  addTask(task) {
    this.tasks.push({ task, complete: false });
  }

  // Mark a task as complete
  completeTask(taskName) {
    const task = this.tasks.find((t) => t.task === taskName);
    if (task) {
      task.complete = true;
    }
  }

  // List all tasks
  listTasks() {
    this.tasks.forEach((task) => {
      //   console.log(`${task.task}: ${task.complete}`);
      console.log(`${task.task}: ${task.complete ? "Complete" : "Incomplete"}`);
    });
  }
}
