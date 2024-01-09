// Create another file named app.js in the same directory.
// In app.js, require the greeting.js module and use the greet function to greet a user.
// Run app.js using Node.js and see the greeting message.

import greet from "./greeting.js";
import displayColorfulMessage from "./colorful-message.js";

displayColorfulMessage(greet("John"));
