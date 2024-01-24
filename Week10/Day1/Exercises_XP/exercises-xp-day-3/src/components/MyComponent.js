import { Component } from "react";

class MyComponent extends Component {
  state = {
    favoriteColor: "red",
    show: true,
  };

  shouldComponentUpdate() {
    return true;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 5000);
  }

  componentDidUpdate() {
    console.log("after update");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  handleDelete = () => {
    window.alert("The Child component is about to be unmounted.");
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change color to blue</button>
        <button onClick={this.toggleShow}>Toggle Child Component</button>
        {this.state.show && <Child />}
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    console.log("Child component is unmounted");
  }

  render() {
    return (
      <header>
        <h1>Hello World!</h1>
      </header>
    );
  }
}

export default MyComponent;
