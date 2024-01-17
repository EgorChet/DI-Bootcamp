// Function to check if the user is logged in and get the userId
const getUserId = () => {
  const userId = localStorage.getItem("userId");
  return userId ? userId : null; // Returns the user ID if it exists, otherwise null
};

document.addEventListener("DOMContentLoaded", () => {
  const questionnaireForm = document.getElementById("questionnaire-form");

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

    const userId = getUserId();

    const formData = {
      userId: userId,
      stress_level: parseInt(stressLevelInput.value),
      sleep_quality: parseInt(sleepQualityInput.value),
      exercise_frequency: parseInt(exerciseFrequencyInput.value),
      primary_source_of_stress: selectedSourceOfStress,
    };

    fetch("/save-response", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Form submission successful", data);
        return fetch("/get-recommendations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            stressLevel: stressLevelInput.value,
            sleepQuality: sleepQualityInput.value,
            exerciseFrequency: exerciseFrequencyInput.value,
            sourceStress: selectedSourceOfStress,
          }),
        });
      })
      .then((response) => response.json())
      .then((recommendationsData) => {
        // Store recommendations data in localStorage
        localStorage.setItem("recommendations", JSON.stringify(recommendationsData));

        // Redirect to the recommendations page
        window.location.href = "../recommendations.html";
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  });
});
