import User from "./components/User";
import "./App.css";
// import users from "./users.json";
import { useState, useEffect } from "react";
/** inline style
 * class - external css
 * css library
 */

/**
 * components - function / class
 * hooks
 * lifecycle component
 * state
 * rerender
 */
const App = () => {
  const [title, setTitle] = useState();
  const [users, setUsers] = useState();

  useEffect(() => {
    console.log("useEffect");
    if (users) changeTitle();
  }, [users]);

  const changeTitle = () => {
    setTitle("My Users");
    // getUsers();
  };
  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={getUsers}>Change Title</button>
      {users
        ? users.map((item) => {
            return <User userinfo={item} key={item.id} />;
          })
        : null}
    </div>
  );
};

export default App;
