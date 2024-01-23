import { Component } from "react";
import ChildComponent from "./Child";

class ParentComponent extends Component {
  render() {
    return (
      <div>
        <h3>Parent Component</h3>
        <ChildComponent message='from Parent Component!' />
      </div>
    );
  }
}

export default ParentComponent;
