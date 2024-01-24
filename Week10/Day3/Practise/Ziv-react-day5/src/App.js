import "./App.css";

import { useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);

  let name = "John";
  const nameRef = useRef("Dan");
  const inputRef = useRef();

  // console.log(nameRef);

  const chanheJohn = () => {
    name = "Marry";
    // console.log(name);
  };

  const chanheDan = () => {
    nameRef.current = "DanDan";
    // console.log(nameRef);
    console.log(inputRef.current.value);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <h2>{count}</h2>
          <button onClick={() => setCount(count + 1)}> + </button>
        </div>
        <div>
          <h3>{name}</h3>
          <button onClick={() => chanheJohn()}> Change John </button>
        </div>
        <div >
          <h3>{nameRef.current}</h3>
          <button onClick={() => chanheDan()}> Change Dan </button>
        </div>

        <div>
          <input ref={inputRef}/>
        </div>
      </header>
    </div>
  );
}

export default App;
