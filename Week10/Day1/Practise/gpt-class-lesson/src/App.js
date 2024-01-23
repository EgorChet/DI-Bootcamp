import "./App.css";
import { Component } from "react";
import ParentComponent from "./components/Parent";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";

class MyComponent extends Component {
  render() {
    return <div>Hello, World!</div>;
  }
}

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

function App() {
  return (
    <div>
      <h1>
        1. Basic Class Component
        <MyComponent />
      </h1>
      <br />
      <h1>
        2. Basic Class Component with props
        <Greeting name='Egor' />
      </h1>
      <h1>
        3. Parent Child Class Components
        <ParentComponent />
      </h1>
      <h1>
        4. Counter Component using Class Component
        <Counter />
      </h1>
      <h1>
        5. User Profile Component using Class Component Lifecycle Methods
        <UserProfile userId={1} /> {/* Example: Passing userId as a prop */}
      </h1>
    </div>
  );
}

export default App;
