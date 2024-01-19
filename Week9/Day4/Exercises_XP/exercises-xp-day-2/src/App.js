import "./App.css";
import Car from "./components/Car";

function App() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <div className='App'>
      <header className='App-header'>
        <Car carInfo={carInfo} />
      </header>
    </div>
  );
}

export default App;
