import User from "./components/User";
import "./App.css";
// import users from "./users.json";
import React, { Component } from "react";
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
class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "My State Title Robots",
      users: [],
    };
    // this.title = "Robots";
    console.log("constructor");
  }

  

  componentDidMount = () => {
    console.log("componentDidMount");
    this.chageTitle()
  };

  componentDidUpdate = (prevProps, presState) => {
    console.log("prevProps=>", prevProps);
    console.log("presState=>", presState);
  };

  chageTitle = () => {
    // this.state.title = 'My Users';
    this.setState({ title: "My Users" });
    // console.log(this.state.title);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ users: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log("render");
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={this.chageTitle}>Change Title</button>
        <br />
        {this.state.users.map((item, indx) => {
          return <User userinfo={item} key={indx} />;
        })}
      </div>
    );
  }
}

export default App;
