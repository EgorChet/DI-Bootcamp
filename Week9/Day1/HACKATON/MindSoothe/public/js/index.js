document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.querySelector('button[href="/login"]');
  const registerButton = document.querySelector('button[href="/register"]');
  const questionnaireButton = document.querySelector('button[href="/questionaire"]');

  const proceedAnonymously = () => {
    localStorage.removeItem("userId");
    // Redirect to the questionnaire page or handle UI changes
  };

  loginButton.addEventListener("click", () => {
    window.location.href = "/login.html";
  });

  registerButton.addEventListener("click", () => {
    window.location.href = "/register.html";
  });

  questionnaireButton.addEventListener("click", () => {
    proceedAnonymously();
    window.location.href = "/questionaire.html";
  });
});
