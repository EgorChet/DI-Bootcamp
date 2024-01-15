// Function to check if the user is logged in and get the userId
const getUserId = () => {
  // Check if a user session exists in session storage
  const userSession = sessionStorage.getItem("userSession");

  if (userSession) {
    // If a user session exists, return the user's ID
    // In this example, we assume the user ID is stored in the session
    return JSON.parse(userSession).userId;
  } else {
    // If no user session exists, return null for anonymous users
    return null;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const questionnaireForm = document.getElementById("questionnaire-form");

  // Handle form submission
  questionnaireForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const stressLevelInput = document.getElementById("stress-level");
    const sleepQualityInput = document.getElementById("sleep-quality");
    const exerciseFrequencyInput = document.getElementById("exercise-frequency");
    const sourceOfStressInputs = document.querySelectorAll('input[name="source-of-stress"]');

    let selectedSourceOfStress = "";

    sourceOfStressInputs.forEach((input) => {
      if (input.checked) {
        selectedSourceOfStress = input.value;
      }
    });

    // Determine the userId based on your application's logic
    const userId = getUserId();

    const formData = {
      userId: userId, // This will be the user's ID if logged in or null for anonymous users
      stress_level: parseInt(stressLevelInput.value),
      sleep_quality: parseInt(sleepQualityInput.value),
      exercise_frequency: parseInt(exerciseFrequencyInput.value),
      primary_source_of_stress: selectedSourceOfStress,
    };

    // Send formData to your server using fetch or AJAX
    fetch("/save-response", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle success response from the server
        console.log(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error.message);
      });
  });
});
