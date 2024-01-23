import { Component } from "react";

class Counter extends Component {
  // State initialization as a class field (no constructor needed)
  state = { count: 0 };

  // Arrow function for event handler (automatically binds `this`)
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;

// Old way using constructor
/*
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    // ...
  }
}
*/
