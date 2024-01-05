// JSONavaScript Instructor11:36
// https://users-18kl.onrender.com/usersjson
// JavaScript Instructor11:46
// https://robohash.org/1?size=150x150
// JavaScript Instructor12:10
// https://users-18kl.onrender.com/userjson

// form -> name, username, email -> submit 
// POST this https://users-18kl.onrender.com/userjson

// get back this list of user and render on the page 



/**
 * form -> name, username, email -> submit
 * POST this https://users-18kl.onrender.com/userjson
 *
 * get back this list of users and render on the page
 */

const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    postAUser(name, email, username);
  };
  
  const postAUser = async (name, email, username) => {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, username, email }),
      };
  
      const res = await fetch(
        "https://users-18kl.onrender.com/userjson",
        options
      );
  
      const data = await res.json()
  
      render(data)
    } catch (error) {
      console.log(error);
    }
  };
  






//GPT VERSION
// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('userForm');
//     const usersListDiv = document.getElementById('usersList');

//     form.addEventListener('submit', function(e) {
//         e.preventDefault();

//         // Prepare data to be sent
//         const formData = {
//             name: document.getElementById('name').value,
//             username: document.getElementById('username').value,
//             email: document.getElementById('email').value
//         };

//         // POST the data to the server
//         fetch('https://users-18kl.onrender.com/userjson', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Success:', data);
//             fetchUsers(); // Fetch all users after successful submission
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
//     });

//     // Function to fetch and display users
//     function fetchUsers() {
//         fetch('https://users-18kl.onrender.com/userjson')
//         .then(response => response.json())
//         .then(users => {
//             usersListDiv.innerHTML = ''; // Clear current list
//             users.forEach(user => {
//                 const userDiv = document.createElement('div');
//                 userDiv.textContent = `Name: ${user.name}, Username: ${user.username}, Email: ${user.email}`;
//                 usersListDiv.appendChild(userDiv);
//             });
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
//     }
//     // Initially fetch and display users
//     fetchUsers();
// });

