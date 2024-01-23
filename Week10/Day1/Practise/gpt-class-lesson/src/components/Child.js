import { Component } from "react";

class ChildComponent extends Component {
  render() {
    return (
      <div>
        <h5> I am a Child Component</h5>
        <p>this is my message {this.props.message}</p>
      </div>
    );
  }
}

export default ChildComponent;
