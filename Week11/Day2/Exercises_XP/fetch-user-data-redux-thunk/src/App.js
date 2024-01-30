// src/App.js
import { UserData } from "./features/user/UserData";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Please Select User</h1>
        <UserData />
      </header>
    </div>
  );
}

export default App;
