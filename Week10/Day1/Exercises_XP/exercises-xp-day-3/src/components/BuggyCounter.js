// BuggyCounter.js
import { Component } from "react";

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => {
      if (counter === 4) {
        // Throw an error when counter reaches 5
        throw new Error("I crashed!");
      }
      return { counter: counter + 1 };
    });
  }

  render() {
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}

export default BuggyCounter;
