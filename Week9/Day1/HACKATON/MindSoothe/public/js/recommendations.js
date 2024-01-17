document.addEventListener("DOMContentLoaded", () => {
  const recommendationsData = JSON.parse(localStorage.getItem("recommendations"));
  if (recommendationsData) {
    displayRecommendations(recommendationsData);
  }
});

const displayRecommendations = async (recommendations) => {
  const recommendationDisplay = document.getElementById("recommendationDisplay");
  if (!recommendationDisplay) {
    console.error("Recommendation display element not found");
    return;
  }

  const gridContainer = document.createElement("div");
  gridContainer.className = "recommendation-grid";

  for (const key in recommendations) {
    const gifQueries = ["Stress", "Sleep", "Fitness", "Reason of stress"];
    if (recommendations.hasOwnProperty(key)) {
      const stepNumber = Object.keys(recommendations).indexOf(key) + 1; // Calculate the step number
      const recommendationText = recommendations[key];

      // Select the gifQuery based on the current iteration index
      const selectedQuery = gifQueries[stepNumber - 1] || ""; // Use stepNumber - 1 as the index

      const gifUrl = await fetchGif(selectedQuery);

      const card = document.createElement("div");
      card.className = "recommendation-card";
      card.innerHTML = `
        <h4>Step ${stepNumber}</h4>
        <p>${selectedQuery}: ${recommendationText}</p>
        <img src="${gifUrl}" alt="GIF" />
      `;
      gridContainer.appendChild(card);
    }
  }

  recommendationDisplay.appendChild(gridContainer);
};


const fetchGif = async (query) => {
  try {
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=V8mcd73PFZn30N1ac11rhtIpZ3023G2w&q=${encodeURIComponent(
      query
    )}&limit=25`; // Increase the limit to get more GIFs
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.data.length > 0) {
      // Choose a random GIF from the returned list
      const randomIndex = Math.floor(Math.random() * data.data.length);
      return data.data[randomIndex].images.original.url;
    } else {
      return "";
    }
  } catch (error) {
    console.error("Error fetching GIF:", error);
    return "";
  }
};

// const fetchGif = async (query) => {
//   try {
//     const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=V8mcd73PFZn30N1ac11rhtIpZ3023G2w&q=${encodeURIComponent(
//       query
//     )}&limit=1`;
//     const response = await fetch(apiUrl);
//     const data = await response.json();

//     return data.data.length > 0 ? data.data[0].images.original.url : "";
//   } catch (error) {
//     console.error("Error fetching GIF:", error);
//     return "";
//   }
// };
