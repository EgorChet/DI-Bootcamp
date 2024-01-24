import logo from "./logo.svg";
import "./App.css";
import Display from "./components/Display";
import Action from "./components/Action";
import { useState, createContext } from "react";
/**
 * useContext / createContext
 * useRef
 * useReducer
 */
/**
         APP
        /    \
  Display    Action    Minus
    /           \
ShowCounter     Button    MinusButton
  /
Name
 */
export const AppContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='App'>
      <header className='App-header'>
        <AppContext.Provider value={{count, setCount, name:'Dan'}}>
          <Display  />
          <Action />
        </AppContext.Provider>
      </header>
    </div>
  );
}

export default App;
