import { useState } from "react";
import "./App.css";

function App() {
  // const [email, setEmail] = useState("");
  // const [pass, setPass] = useState("");
  // const [username, setUsername] = useState("");
  // const [numbers, setNumbers] = useState("");
  // const [yesno, setYesNo] = useState(false);

  const [inputs, setInputs] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, pass, username,numbers,yesno);
    console.log(inputs);
  };

  const handleInputs = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <form onSubmit={(e) => handleSubmit(e)}>
          first name:{" "}
          <input
            name='firstname'
            type='text'
            onChange={(e) => handleInputs(e)}
          />
          <br />
          Email:{" "}
          <input name='email' type='text' onChange={(e) => handleInputs(e)} />
          <br />
          Password:{" "}
          <input
            name='password'
            type='text'
            onChange={(e) => handleInputs(e)}
          />
          <br />
          Username:{" "}
          <input
            name='username'
            type='text'
            onChange={(e) => handleInputs(e)}
          />
          <br />
          <select name='numbers' onChange={(e) => handleInputs(e)}>
            <option value='-1'>Choose a numbers</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
          <br />
          Yes/No:
          <input
            name='yesno'
            type='checkbox'
            onChange={(e) => handleInputs(e)}
          />
          <br />
          {/* <button onClick={handleSubmit}>Click Me!</button> */}
          <input type='submit' value='Send' />
        </form>
      </header>
    </div>
  );
}

export default App;
