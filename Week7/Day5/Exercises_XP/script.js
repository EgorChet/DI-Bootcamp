// Star Wars Web App Using AJAX API
// Last Updated: September 22nd, 2023

// What You Will Learn
// async/await
// Fetch API


// What You Will Create
// Star Wars Web App Using AJAX API
// In this project you will have to build a single page application that uses AJAX to retrieve information and display it on your website as follows:



// Here is a demo.

// Instructions
// https://i.giphy.com/media/TxVVB6PfWMjE4/200.webp background
// You should use this API: https://www.swapi.tech/ to get the data and update it “randomly” in your website by clicking a button.
// Note: The API contains 83 different characters

// Create your HTML file, and add the relevant elements.

// In your JS file, create your functions :
// to retrieve the elements from the DOM.
// to get the data from the API (star wars characters).
// to display the info on the DOM: the name, height, gender, birth year, and home world of the character.

// Display the data using AJAX. Make sure to display a loading message as follows:
// You can use any of these animation icons for the loading message.
// Fontawesome link :
// https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css

document.getElementById('findPerson').addEventListener('click', async function() {
    const loadingDiv = document.querySelector('.loading');
    const characterInfoDiv = document.querySelector('.character-info');
    
    // Show spinner and loading text
    characterInfoDiv.innerHTML = '';
    loadingDiv.style.display = 'block';
  
    const personId = Math.ceil(Math.random()*82); // Random person ID
    const personUrl = `https://www.swapi.tech/api/people/${personId}`;
    
    try {
      const response = await fetch(personUrl);
      const data = await response.json();
      const person = data.result.properties;
  
      // Fetch homeworld name if the URL is provided
      let homeworldName = 'Unknown';
      if(person.homeworld) {
        const homeworldResponse = await fetch(person.homeworld);
        const homeworldData = await homeworldResponse.json();
        homeworldName = homeworldData.result.properties.name;
      }
  
      // Hide spinner and loading text
      loadingDiv.style.display = 'none';
      
      // Display character info
      characterInfoDiv.innerHTML = `
        <h1>${person.name}</h1>
        <p>Height: ${person.height}</p>
        <p>Gender: ${person.gender}</p>
        <p>Birth Year: ${person.birth_year}</p>
        <p>Home World: ${homeworldName}</p>`;
    } catch (error) {
      console.error('Error:', error);
      loadingDiv.style.display = 'none';
      characterInfoDiv.innerHTML = `<p>Error loading data.</p>`;
    }
  });
  


// 4. If there is an error getting the data, display a message as follows:




// 5. You can use your own css to style the website as you see fit