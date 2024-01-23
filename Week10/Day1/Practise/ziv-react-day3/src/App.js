import Counter from "./components/Counter";
import Parent from "./components/Parent";
import Child from "./components/Child";
import ErrorBoundary from './ErrorBoundary'
import "./App.css";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Error Boundary in 10 min</h1>

        {/* <Parent auth="user">
          <Child />
          <Counter/>
        </Parent> */}
        <ErrorBoundary>
          <Counter/>
        </ErrorBoundary>
        
        <Counter/>
      </header>
    </div>
  );
}

export default App;
