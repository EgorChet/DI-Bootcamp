import "./App.css";
import QuoteViewer from "./components/QuoteViewer";
import QuoteViewer1 from "./components/QuoteViewer1"


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <QuoteViewer1/>
        <QuoteViewer/>
      </header>
    </div>
  );
}

export default App;
