const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

function createCard(robot) {
    return `<div class="card">
                <img src="${robot.image}" alt="${robot.name}">
                <h2>${robot.name}</h2>
                <p>${robot.email}</p>
            </div>`;
}

function capitalizeWords(string) {
  return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function displayRobots(robotsToDisplay, searchQuery) {
    const container = document.getElementById('robot-cards');
    if (robotsToDisplay.length > 0) {
        container.innerHTML = robotsToDisplay.map(createCard).join('');
    } else if (searchQuery) {
        const robotName = capitalizeWords(searchQuery);
        container.innerHTML = `
        <div class="no-results-message">
          <pre class="no-results-message"><h3>Sorry, there is no robot with the name '${robotName}' in our database.
          But luckily for you the Robot below has no name yet!!!
          If you wish, you can call him '${robotName}'</h3></pre>
        </div>
        <div class="card">
          <img src="https://robohash.org/NotFound?size=200x200" alt="Robot not found">
          <h2>${robotName}</h2>
          <h3>Random@gmail.com</h3>
        </div>`;
    }
}


document.getElementById('search-input').addEventListener('input', (e) => {
  const searchQuery = e.target.value.toLowerCase();
  const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchQuery)
  );
  displayRobots(filteredRobots, searchQuery);
});

// Initial display of all robots
displayRobots(robots);

// function createCard(robot) {
//     return `<div class="card">
//                 <img src="${robot.image}" alt="${robot.name}">
//                 <h2>${robot.name}</h2>
//                 <p>${robot.email}</p>
//             </div>`;
// }

// function displayRobots(robotsToDisplay) {
//   const container = document.getElementById('robot-cards');
//   if (robotsToDisplay.length > 0) {
//       container.innerHTML = robotsToDisplay.map(createCard).join('');
//   } else {
//       container.innerHTML = `<div class="no-robots">Sorry, there is no such Robot in our database. Come back later or try again.</div>`;
//   }
// }

// document.getElementById('search-input').addEventListener('input', (e) => {
//     const filteredRobots = robots.filter(robot =>
//         robot.name.toLowerCase().includes(e.target.value.toLowerCase())
//     );
//     displayRobots(filteredRobots);
// });

// displayRobots(robots);