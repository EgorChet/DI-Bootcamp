/** fetch */

// fetch(url, {})
// XMLHttprequst

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     render(data);
//   });

const handleClick = () => {
  const value = document.getElementById("userid").value;
  getData(value);
};

const getData = async (id) => {
  try {
    const response = await fetch(
      "https://users-18kl.onrender.com/userjson?id=" + id,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    render(data);
  } catch (error) {
    console.log(error);
  }
};
// getData()

const render = (arr) => {
  const html = arr.map((item) => {
    return `<div style="
         display:inline-block;
         padding:20px;
         margin:20px;
         text-align:center;
         border:1px solid #ccc;
         background-color:lightgreen;
         border-radius:20px;
         "
        >
        <img src=https://robohash.org/${item.id}?size=150x150 />
        <h2>${item.name}</h2>
        <h4>${item.username}</h4>
        <p>${item.email}</p>
        </div>`;
  });
  document.getElementById("root").innerHTML = html.join("");
};
// const post = {
//     title:'bla bla bla title11',
//     body:' TTA8 the best class ever ',
//     userId: 4
// }

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify(post)
// })
// .then(res => res.json())
// .then(newpost => console.log(newpost))

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
