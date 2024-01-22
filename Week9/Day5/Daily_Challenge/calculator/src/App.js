import "./App.css";
import SimpleAdder from "./components/adder";
import UniversalCalculator from "./components/universalCalculator";
import Calculator from "./components/realCalculator";
import GptCalculator from "./components/GptRefactoring";
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <SimpleAdder />
        <br></br>
        <UniversalCalculator />
        <br></br>
        <Calculator />
        <GptCalculator />
      </header>
    </div>
  );
}

export default App;
