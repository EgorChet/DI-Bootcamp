document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('button[href="/login"]');
    const registerButton = document.querySelector('button[href="/register"]');
    const questionnaireButton = document.querySelector('button[href="/questionaire"]');

    loginButton.addEventListener('click', () => {
        window.location.href = '/login.html'; // Assuming you have a login.html in your public directory
    });

    registerButton.addEventListener('click', () => {
        window.location.href = '/register.html'; // Assuming you have a register.html
    });

    questionnaireButton.addEventListener('click', () => {
        window.location.href = '/questionaire.html'; // Assuming you have a questionnaire.html
    });
});
