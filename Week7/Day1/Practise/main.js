let formvalues = {}

function handleInput(e) {
    formvalues[e.target.name] = e.target.value;
    console.log(formvalues);
}

// function handleInputPassword(e) {
//     formvalues.password = e.target.value;
//     console.log(formvalues);
// }

// JavaScript Part:
// 1. formvalues Object:

// let formvalues = {}: Declares an empty object that will be used to store the values from the form inputs.
// 2. handleInput Function:

// This function is called every time the user types into one of the input boxes.
// e: The event object automatically passed to the function when the event occurs. It contains information about the event.
// e.target: The target element that triggered the event (in this case, one of the <input> elements).
// e.target.name: The name of the input element, which will be 'email', 'password', or 'username'.
// e.target.value: The current value of the input element (what the user has typed in).
// formvalues[e.target.name] = e.target.value: Updates the formvalues object with the latest value from the input. The key is the name of the input field, and the value is what the user has typed.
// console.log(formvalues): Logs the updated formvalues object to the console every time the user types something. This lets you see in real-time what the object contains.
// How It's Used:
// When a user types into any of the input fields on the webpage, the handleInput function captures the input's current value and the field's name. It then updates the formvalues object to reflect the latest input. For example, if a user types 'example@email.com' into the email field, formvalues will become {email: 'example@email.com'}.

// What You Need to Know:
// Security Considerations: Always sanitize and validate user input on the server side to protect against malicious data, especially when dealing with emails and passwords.
// Form Submission: This code doesn't include form submission. Usually, you'd have a <form> element and a submit button. You'd handle the submission with an event listener for the 'submit' event, where you could further process or send the formvalues to a server.
// External JavaScript: Ensure that the handleInput function is defined in either script.js or main.js. The script files must be correctly linked and loaded for the function to be recognized.
// Privacy: Be mindful of privacy laws and best practices when handling user data, especially sensitive data like passwords.
// This simple form is a building block for more complex applications, demonstrating real-time data capture and dynamic object updates in JavaScript.