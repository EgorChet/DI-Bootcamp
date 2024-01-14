Daily Challenge : Task API #2
Last Updated: September 22nd, 2023

Create A User Management API With Registration And Login Using Express.Js, Bcrypt, And JSON File Storage

Instructions
1. Create 2 HTML files: one for the Login form and the other for the Register form (when the inputs are empty the submit button should be disabled).


2. Set up a new Express.js application.


3. Implement the following routes using express.Router:

POST /register: Allow users to register by providing a username and password. Hash the password using bcrypt before storing it in the JSON file.
POST /login: Allow users to login by providing their username and password. Compare the hashed password from the JSON file with the provided password.
GET /users: Retrieve a list of all registered users from a JSON file (only for demonstration purposes; no authentication required).
GET /users/:id: Retrieve a specific user by ID from the JSON file (only for demonstration purposes; no authentication required).
PUT /users/:id: Update a user’s information by ID in the JSON file (only for demonstration purposes; no authentication required).

4. Create a JSON file (e.g., users.json) to store user data. Initialize it with an empty array [].


5. Use bcrypt to hash user passwords before storing them in the JSON file and for verifying passwords during login.


6. Implement error handling for file read/write operations, route validation, and incorrect login credentials.


7. Test your API using tools like Postman or curl.


EXAMPLES

The Register form should have five inputs: Name, Last Name, Email, Username and Password. And it should register a user with a message as follows:
register

When the user registers, if the username or the password already exist, do not write to the file. Instead, send a message back as follows:
error1

The Login form should have two inputs: Username and Password. And it should display a login message as follows:
login

When the user logs in and if they are not registered, send and error message as follows:
