// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
// const [username, setUsername] = useState("");
// const [numbers, setNumbers] = useState("");
// const [yesno, setYesno] = useState(false);

import { useState } from "react";
import "./App.css";

function App() {
  const [inputs, SetInputs] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const handleInputs = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    SetInputs({ ...inputs, [name]: value });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <br />
          <input type='email' onChange={(e) => handleInputs(e)} /> <br />
          <label>Password:</label>
          <br />
          <input type='password' onChange={(e) => handleInputs(e)} /> <br />
          <label>Username:</label>
          <br />
          <input type='username' onChange={(e) => handleInputs(e)} /> <br />
          <select onChange={(e) => handleInputs(e)} defaultValue=''>
            <option value='' disabled>
              Choose a Number
            </option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
          <br />
          <label>Yes/No</label>
          <br />
          <input type='checkbox' onChange={(e) => handleInputs(e)} />
          <br />
          <input type='submit' value='Send' />
        </form>
      </header>
    </div>
  );
}

export default App;
