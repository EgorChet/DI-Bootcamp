    // Retrieve the div and console.log it
    const myDiv = document.getElementById('myDiv');
    console.log(myDiv);

    // Change the name “Pete” to “Richard”.
    const pete = myDiv.getElementsByTagName('li')[1];
    pete.textContent = 'Richard';

    // Delete the second <li> of the second <ul>.
    const secondUl = myDiv.getElementsByTagName('ul')[1];
    secondUl.removeChild(secondUl.getElementsByTagName('li')[1]);

    // Change the name of the first <li> of each <ul> to your name.
    const uls = myDiv.getElementsByTagName('ul');
    for (let ul of uls) {
        ul.getElementsByTagName('li')[0].textContent = 'Your Name';
    }

    // Add a class called student_list to both of the <ul>'s.
    for (let ul of uls) {
        ul.classList.add('student_list');
    }

    
    // Add the classes university and attendance to the first <ul>.
    uls[0].classList.add('university', 'attendance');

    // Add a “light blue” background color and some padding to the <div>.
    myDiv.style.backgroundColor = 'lightblue';
    myDiv.style.padding = '20px';

    // Do not display the <li> that contains the text node “Dan”.
    const lis = myDiv.getElementsByTagName('li');
    for (let li of lis) {
        if (li.textContent === 'Dan') {
            li.style.display = 'none';
        }
    }

    // Add a border to the <li> that contains the text node “Richard”.
    pete.style.border = '1px solid black';

    // Change the font size of the whole body.
    document.body.style.fontSize = '16px';

    // Bonus: If the background color of the div is “light blue”, alert “Hello x and y” 
    // (x and y are the users in the div).
    if (myDiv.style.backgroundColor === 'lightblue') {
        const names = [];
        for (let li of myDiv.querySelectorAll('li')) {
            if (li.style.display !== 'none') { // make sure the li is not hidden
                names.push(li.textContent);
            }
        }
        alert(`Hello ${names.join(' and ')}`);
    }