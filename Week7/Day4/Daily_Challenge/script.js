// Daily Challenge: Gifs

// Instructions
// Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.
// Wait until the DOM is fully loaded before running the script

document.addEventListener("DOMContentLoaded", () => {
  // Get the form and the container for the gifs from the document
  const form = document.getElementById("gifForm");
  const gifsContainer = document.getElementById("gifsContainer");

  // Listen for the submit event on the form
  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the category input from the user
    const category = document.getElementById("category").value.trim();

    // Check if the category is not empty
    if (category) {
      // Set the API key and construct the URL for the Giphy API request
      const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
      const url = `https://api.giphy.com/v1/gifs/random?tag=${category}&api_key=${apiKey}`;

      try {
        // Fetch the data from the Giphy API
        const response = await fetch(url);
        // Parse the JSON response
        const data = await response.json();

        // Check if data was returned
        if (data.data) {
          // Call appendGif to add the gif to the page
          appendGif(data.data);
        } else {
          // Alert the user if no gif was found for the category
          alert("No gif found for this category.");
        }
      } catch (error) {
        // Log any errors to the console
        console.error("Error fetching gif:", error);
      }
    } else {
      // Alert the user if the category input is empty
      alert("Please enter a category.");
    }
  });

  // Function to append the fetched gif and a delete button to the page
  function appendGif(gifData) {
    // Create a new div for the gif and the delete button
    const gifDiv = document.createElement("div");
    // Create an img element and set its source to the gif's URL
    const img = document.createElement("img");
    img.src = gifData.images.fixed_height.url;

    // Create a delete button for the gif
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "DELETE";
    // Set an onclick event on the delete button to remove the gif
    deleteButton.onclick = function () {
      gifsContainer.removeChild(gifDiv);
    };

    // Append the img and delete button to the gifDiv
    gifDiv.appendChild(img);
    gifDiv.appendChild(deleteButton);
    // Append the gifDiv to the gifsContainer on the page
    gifsContainer.appendChild(gifDiv);
  }

  // Create the DELETE ALL button dynamically and add it to the page
  const deleteAllButton = document.createElement("button");
  deleteAllButton.textContent = "DELETE ALL";
  // Set an onclick event to clear all gifs from the page
  deleteAllButton.onclick = function () {
    gifsContainer.innerHTML = "";
  };

  // Insert the DELETE ALL button before the gifsContainer in the document
  document.body.insertBefore(deleteAllButton, gifsContainer);
});
