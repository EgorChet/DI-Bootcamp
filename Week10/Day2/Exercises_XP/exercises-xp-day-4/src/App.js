import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import YourComponent from "./YourComponent";

function App() {
  return (
    <div className='App'>
      <ErrorBoundary>
        <YourComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
