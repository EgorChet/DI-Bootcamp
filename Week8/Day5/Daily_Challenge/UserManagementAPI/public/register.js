document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');
    const inputs = registerForm.querySelectorAll('input');
    const registerButton = document.getElementById('register-button');

    // Function to check if all fields are filled
    function areAllFieldsFilled() {
        return Array.from(inputs).every(input => input.value.trim() !== '');
    }

    // Update the state of the register button
    function updateRegisterButtonState() {
        registerButton.disabled = !areAllFieldsFilled();
    }

    // Event listeners for input fields
    inputs.forEach(input => input.addEventListener('input', updateRegisterButtonState));

    // Handle form submission
    registerForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        const formData = {
            name: document.getElementById('name').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
        };
        const response = await fetch('/users/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const data = await response.text();
        alert(data); // Or handle the response appropriately
    });
});
