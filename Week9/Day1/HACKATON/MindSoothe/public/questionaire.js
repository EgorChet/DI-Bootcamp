// Function to check if the user is logged in and get the userId
const getUserId = () => {
  const userSession = sessionStorage.getItem("userSession");
  if (userSession) {
    return JSON.parse(userSession).userId;
  } else {
    return null;
  }
};

// Function to display recommendations

const displayRecommendations = (recommendations) => {
  const recommendationDisplay = document.getElementById("recommendationDisplay");
  if (recommendationDisplay) {
    recommendationDisplay.innerHTML = `
      <h3>Your Recommendations</h3>
      <p>Stress: ${recommendations.stressRecommendation}</p>
      <p>Sleep Quality: ${recommendations.sleepRecommendation}</p>
      <p>Exercise Frequency: ${recommendations.exerciseRecommendation}</p>
      <p>Source of Stress: ${recommendations.sourceStressRecommendation}</p>
    `;
  } else {
    console.error("Recommendation display element not found");
  }
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
      userId,
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
        console.log("Recommendations:", recommendationsData);
        displayRecommendations(recommendationsData);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  });
});
