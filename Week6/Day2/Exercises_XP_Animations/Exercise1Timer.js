// Part I - Using setTimeout to alert "Hello World" after 2 seconds
setTimeout(function() {
    alert("Hello World");
}, 2000);

// Part II - Using setTimeout to add a paragraph to the container after 2 seconds
setTimeout(function() {
    const container = document.getElementById('container');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "Hello World";
    container.appendChild(newParagraph);
}, 2000);

// Part III - Using setInterval to add a paragraph every 2 seconds and clear it under certain conditions
let intervalId = setInterval(function() {
    const container = document.getElementById('container');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "Hello World";
    container.appendChild(newParagraph);

    // Clear the interval when there are 10 paragraphs
    if (container.getElementsByTagName('p').length >= 10) {
        clearInterval(intervalId);
    }
}, 2000);

// Clear the interval when the "Clear Interval" button is clicked
document.getElementById('clear').addEventListener('click', function() {
    clearInterval(intervalId);
});
