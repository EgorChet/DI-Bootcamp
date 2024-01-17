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
        const data = await response.json();
        //Store the user id in local storage
        const user_id = data.id;
        localStorage.setItem("userId", user_id);
        // Redirect to questionnaire page on successful login
        window.location.href = "/questionaire.html";
      } else {
        // Handle unsuccessful login, e.g., show an error message
        alert("Login failed. Please check your username and password.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  });
});
