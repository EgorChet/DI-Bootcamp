import { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";
import CounterClass from "./components/CounterClass";
import CounterHooks from "./components/CounterHooks";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Redux</h1>
        <h2>Props Counter</h2>
        <Counter count={count} setCount={setCount} />
        <h2>Redux Store Class Counter</h2>
        <CounterClass />
        <h2>Redux Hooks Counter </h2>
        <CounterHooks />
      </header>
    </div>
  );
}

export default App;
