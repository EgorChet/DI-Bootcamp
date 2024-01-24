// App.js
import React from "react";
import BuggyCounter from "./components/BuggyCounter";
import ErrorBoundary from "./components/ErrorBoundary";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <div>
      <h2>Simulation 1: Two BuggyCounters, One ErrorBoundary</h2>
      <i>Note: So when one crashes the otherc also crashes</i>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <h2>Simulation 2: Each BuggyCounter with its own ErrorBoundary</h2>
      <i>Note: So when one crashes the other is still working</i>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <h2>Simulation 3: BuggyCounter without ErrorBoundary</h2>
      <p>
        <i>Note: This counter may crash the whole app when it reaches 5.</i>
      </p>
      <BuggyCounter />
      <MyComponent />
    </div>
  );
}

export default App;
