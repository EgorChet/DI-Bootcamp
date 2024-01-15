document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('button[href="/login"]');
    const registerButton = document.querySelector('button[href="/register"]');
    const questionnaireButton = document.querySelector('button[href="/questionaire"]');

    loginButton.addEventListener('click', () => {
        window.location.href = '/login.html'; 
    });

    registerButton.addEventListener('click', () => {
        window.location.href = '/register.html'; 
    });

    questionnaireButton.addEventListener('click', () => {
        window.location.href = '/questionaire.html'; 
    });
});
