// 🌟 Exercise 1 : Change The Article
// Instructions
// Copy the code below, into a structured HTML file:

// <article>
//     <h1> Some Facts </h1>
//     <h2> The Chocolate </h2>
//     <h3> History of the chocolate </h3>
//     <p> Chocolate is made from tropical Theobroma cacao tree seeds. 
//     Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
//     <p> After the European discovery of the Americas, chocolate became 
//     very popular in the wider world, and its demand exploded. </p>
//     <p> Chocolate has since become a popular food product that millions enjoy every day, 
//     thanks to its unique, rich, and sweet taste.</p> 
//     <p> But what effect does eating chocolate have on our health?</p> 
// </article>

// Using a DOM property, retrieve the h1 and console.log it.
let h1 = document.querySelector('h1')
console.log(h1);

// Using DOM methods, remove the last paragraph in the <article> tag.
let article = document.querySelector('article')
let lastP = article.lastElementChild;
article.removeChild(lastP)
console.log(article)
// or just 
// article.removeChild(article.lastElementChild)

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
let h2 = document.querySelector("h2")
// Add an event listener for the 'click' event
h2.addEventListener('click', function() {
    // Change the background color of h2 to red
    h2.style.backgroundColor = 'red';
});

// or 
// Use the onclick property to assign a function that changes the background color
// h2.onclick = function() {
//     // Change the background color of h2 to red
//     h2.style.backgroundColor = 'red';
// };

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let h3 = document.querySelector('h3')
h3.addEventListener("click", function() {
    h3.style.display = "none"
})


// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// Create the button element
let boldButton = document.createElement('button');

// Set the button's text
boldButton.innerText = 'Make Text Bold';

// Styling the button to make it more modern and visually appealing
boldButton.style.position = 'fixed';
boldButton.style.left = '50%';
boldButton.style.top = '90%';
boldButton.style.transform = 'translate(-50%, -50%)';
boldButton.style.padding = '15px 30px';
boldButton.style.fontSize = '18px';
boldButton.style.color = 'white';
boldButton.style.background = 'linear-gradient(to right, #fc5c7d, #6a82fb)';
boldButton.style.border = 'none';
boldButton.style.borderRadius = '50px';
boldButton.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2)';
boldButton.style.cursor = 'pointer';
boldButton.style.transition = 'all 0.3s ease';


// Add the button to the body (or to a specific element if preferred)
document.body.appendChild(boldButton);

// Add a click event listener to the button
boldButton.onclick = function() {
    // Select all paragraph elements
    let paragraphs = document.querySelectorAll('p');
    
    // Iterate over each paragraph and change its font weight to bold
    paragraphs.forEach(function(paragraph) {
        paragraph.style.fontWeight = 'bold';
    });
};

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
h1.onmouseover = function() {
    // Set the font size to the random pixel size
    const randomSize = Math.floor(Math.random() * 101);
    h1.style.fontSize = `${randomSize}px`;
}

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
// Select the 2nd paragraph element
const secondP = document.querySelectorAll("p")[1];

// Add an event listener for mouseover
secondP.addEventListener("mouseover", () => {
  // Set the opacity to 0 to create a fade-out effect
  secondP.style.opacity = "0.2";
});

// Add an event listener for mouseout (optional, to reset the opacity when the mouse leaves)
secondP.addEventListener("mouseout", () => {
  // Set the opacity back to 1 to reset the paragraph
  secondP.style.opacity = "1";
});


// 🌟 Exercise 2 : Work With Forms
// Instructions
// Copy the code below, into a structured HTML file:

// <form>
//   <label for="fname">First name:</label><br>
//   <input type="text" id="fname" name="firstname"><br>
//   <label for="lname">Last name:</label><br>
//   <input type="text" id="lname" name="lastname"><br><br>
//   <input type="submit" value="Submit" id="submit">
// </form> 
// <ul class="usersAnswer"></ul>


// Retrieve the form and console.log it.
let form = document.querySelector("form")

console.log(form)

// Retrieve and log elements by their ID
const fnameById = document.getElementById("fname");
const lnameById = document.getElementById("lname");
const submitById = document.getElementById("submit");

console.log(fnameById);
console.log(lnameById);
console.log(submitById);

// Retrieve and log elements by their name attribute
const fnameByName = document.getElementsByName("firstname")[0];
const lnameByName = document.getElementsByName("lastname")[0];

console.log(fnameByName);
console.log(lnameByName);


// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>



// First, select the ul where answers will be appended.
const usersAnswerList = document.querySelector('.usersAnswer');

form.addEventListener('submit', function(event) {
    // Stop the form from submitting the traditional way
    event.preventDefault();

    // Check if the inputs are not empty
    if (fnameById.value !== '' && lnameById.value !== '') {
        // Create list items and append them to the ul
        usersAnswerList.innerHTML = `<li>${fnameById.value}</li><li>${lnameById.value}</li>`;
    } else {
        // Alert the user if one or both fields are empty
        alert('Please fill out both fields.');
    }
});



// 🌟 Exercise 3 : Transform The Sentence
// Instructions
// Add this sentence to your HTML file then follow the steps :

// <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
// <strong>end</strong> you <strong>will</strong> be great Developers!
// <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>

// Declare a global variable named allBoldItems
let allBoldItems;

// Create a function called getBoldItems() that collects all the bold items inside the paragraph
function getBoldItems() {
  allBoldItems = document.querySelectorAll('p strong'); // Selects all <strong> elements within <p> tags
}

// Create a function called highlight() that changes the color of all the bold text to blue
function highlight() {
  for (let item of allBoldItems) {
    item.style.color = 'blue';
  }
}

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black
function returnItemsToDefault() {
  for (let item of allBoldItems) {
    item.style.color = 'black';
  }
}

// Collect all bold items
getBoldItems();

// Select the specific paragraph which contains the <strong> elements
const targetParagraph = document.querySelector('body > p:last-of-type');

// Call the function highlight() on mouseover
targetParagraph.addEventListener('mouseover', highlight);

// Call the function returnItemsToDefault() on mouseout
targetParagraph.addEventListener('mouseout', returnItemsToDefault);