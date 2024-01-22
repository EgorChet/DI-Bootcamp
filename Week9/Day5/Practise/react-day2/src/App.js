import User from "./components/User";
import "./App.css";
// import users from "./users.json";
import GetUsersButton from "./components/GetUsersButton";
import SearchUsers from "./components/SearchUsers";
import React, { Component, useState, useEffect } from "react";
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
  const [filterUsers, setFilterUsers] = useState();
  // const myusers = [] -> useRef()

  useEffect(() => {
    // console.log("useEffect");
    // if (users) changeTitle();
    getUsers();
    // return ()=> {
    //   console.log('unmpounting');
    // }
  }, []);

  // const changeTitle = () => {
  //   setTitle("My Users");
  //   // getUsers();
  // };

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
        setFilterUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const search = (value) => {
    const filter = users.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    setFilterUsers(filter);
  };

  return (
    <div>
      <h1>{title}</h1>
      {/* <GetUsersButton getUsersFunc={getUsers} /> */}
      <SearchUsers search={search}/>
      {filterUsers
        ? filterUsers.map((item) => {
            return <User userinfo={item} key={item.id} />;
          })
        : null}
    </div>
  );
};

export default App;
