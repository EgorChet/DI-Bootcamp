document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('login-button');

    // Function to update the state of the login button
    function updateLoginButtonState() {
        loginButton.disabled = !usernameInput.value || !passwordInput.value;
    }

    // Event listeners for input fields
    usernameInput.addEventListener('input', updateLoginButtonState);
    passwordInput.addEventListener('input', updateLoginButtonState);

    // Handle form submission
    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        const response = await fetch('/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                username: usernameInput.value, 
                password: passwordInput.value 
            }),
        });
        const data = await response.text();
        alert(data); // Or handle the response appropriately
    });
});
