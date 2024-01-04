// Daily Challenge : HTML Form
// Last Updated: September 22nd, 2023

// What You Will Learn :
// HTTP and HTTP methods
// Form
// JSON


// Instructions
// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.

        // Get the form element
        const form = document.getElementById('myForm');

        // Add an event listener for the 'submit' event
        form.addEventListener('submit', function(event) {
            // Prevent the default form submission
            event.preventDefault();

            // Retrieve the form data
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });

            // Convert the data to a JSON string
            const jsonData = JSON.stringify(data, null, 4);

            // Append the JSON data to the DOM
            document.getElementById('jsonData').textContent = jsonData;
        });