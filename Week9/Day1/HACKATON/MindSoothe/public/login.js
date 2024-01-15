document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const loginButton = document.getElementById("login-button");

  // Enable the login button when both fields have some input
  loginForm.addEventListener("input", () => {
    loginButton.disabled = !usernameInput.value || !passwordInput.value;
  });

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Redirect to questionnaire page on successful login
        window.location.href = "/questionaire.html"; // Replace with the actual path of your questionnaire page
      } else {
        // Handle unsuccessful login, e.g., show an error message
        alert("Login failed. Please check your username and password.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  });
});

// document.addEventListener('DOMContentLoaded', () => {
//     const loginForm = document.getElementById('login-form');
//     const loginButton = document.getElementById('login-button');
//     const usernameInput = document.getElementById('username');
//     const passwordInput = document.getElementById('password');

//     // Enable the login button only if both fields are filled
//     const toggleButtonState = () => {
//         loginButton.disabled = !usernameInput.value || !passwordInput.value;
//     };

//     usernameInput.addEventListener('input', toggleButtonState);
//     passwordInput.addEventListener('input', toggleButtonState);

//     loginForm.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const username = usernameInput.value;
//         const password = passwordInput.value;

//         fetch('/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ username, password }),
//         })
//         .then(response => response.json())
//         .then(data => {
//             // Handle response here (e.g., redirect on successful login or display an error message)
//         })
//         .catch(error => console.error('Error:', error));
//     });
// });
