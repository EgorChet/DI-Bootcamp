import "./App.css";
import User from "./components/User";
import users from "./users.json";
import React from "react";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {users.map((item, index) => (
          <User key={index} userinfo={item} />
        ))}
      </header>
    </div>
  );
}

export default App;
