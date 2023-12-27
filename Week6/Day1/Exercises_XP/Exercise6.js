// 🌟 Exercise 6 : Change The Navbar

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

// Select the div with id 'navBar'
let div = document.getElementById('navBar');

// Use setAttribute to change the id to 'socialNetworkNavigation'
div.setAttribute('id', 'socialNetworkNavigation');

// Console log to confirm the change
console.log(div); // Should now show the div with the new id

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).

// Select the <ul> within the <div id="socialNetworkNavigation">
let ul = document.querySelector('#socialNetworkNavigation ul');

// Create a new <li> element
let newLi = document.createElement('li');

// Create a new text node with "Logout" as its specified text
let textNode = document.createTextNode('Logout');

// Append the text node to the newly created list node (<li>)
newLi.appendChild(textNode);

// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method
ul.appendChild(newLi);

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
// Get the first and last <li> elements within the <ul>
let firstLi = ul.firstElementChild;
let lastLi = ul.lastElementChild;

// Get the text content of the first and last <li> elements
let firstLiText = firstLi.textContent;
let lastLiText = lastLi.textContent;

// Display the text of each link
console.log("Text of the first <li>: " + firstLiText);
console.log("Text of the last <li>: " + lastLiText);
