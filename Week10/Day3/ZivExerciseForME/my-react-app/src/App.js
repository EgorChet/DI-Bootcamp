// App.js
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [helloMessage, setHelloMessage] = useState(""); // Descriptive name
  const [greetingFromInput, setGreetingFromInput] = useState(""); // Descriptive name
  const [inputValue, setInputValue] = useState(""); // Descriptive name

  const fetchHelloMessage = () => {
    fetch("http://localhost:3000/hello")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setHelloMessage(data.greeting);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchGreetingFromInput = () => {
    fetch(`http://localhost:3000/hello/${inputValue}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setGreetingFromInput(data.greeting);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div>
          <button onClick={fetchHelloMessage}>Get Hello Message</button>
          <p>{helloMessage}</p>
        </div>
        <div>
          <p>
            <input
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue} // Set input value to the state
            />
          </p>
          <button onClick={fetchGreetingFromInput}>Get Greeting from Input</button>
        </div>
        <p>{greetingFromInput}</p>
      </header>
    </div>
  );
}

export default App;
