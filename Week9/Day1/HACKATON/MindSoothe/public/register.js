console.log("Client-side JavaScript is running");
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("register-form");
  const registerButton = document.getElementById("register-button");

  // Function to update the state of the register button
  const updateButtonState = () => {
    const name = document.getElementById("name").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    registerButton.disabled = !(name && lastName && email && username && password);
  };

  // Event listeners for input fields to enable the register button
  registerForm.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", updateButtonState);
  });

  // Handle form submission
  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      lastName: document.getElementById("lastName").value,
      email: document.getElementById("email").value,
      username: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };

    fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          // If the HTTP response status code is not OK, throw an error
          throw new Error("Network response was not ok");
        }
        return response.json(); // This will fail if the response is not JSON, which will be caught by the catch block
      })
      .then((data) => {
        // Handle your success scenario
        console.log(data);
        // Redirect to login page after successful registration
        window.location.href = "/login.html";
      })
      .catch((error) => {
        // Handle any errors that occurred during fetch
        console.error("Fetch error:", error.message);
      });
  });
});
