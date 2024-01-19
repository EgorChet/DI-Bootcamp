import "./App.css";
import Carousel from "./Carousel";

function App() {
  const images = [
    "https://www.ifc.org/content/dam/ifc/photos/2023/IFC-Infrastructure-SectorSheet-Cities-Sept-2023.png",
    "https://assets.weforum.org/global_future_council/image/-rx5e0P1APq4omo4JC9ZQ3KdegGg7SfuVfWfXK4C_K4.jpeg",
    "https://media.cntraveler.com/photos/5fc6818f3cfe1de2cab79372/master/pass/Amsterdam-GettyImages-840603854.jpg",
    "https://cdn.unenvironment.org/2020-02/sustainable-cities.jpg",
    "https://media.architecturaldigest.com/photos/58f918044f42bd463db36a3f/master/pass/1%20-%2010%20Greenest%20Cities%20in%20America%20in%202017.jpg",
  ];
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='App'>
          <h1>Image Carousel</h1>
          <Carousel images={images} />
        </div>
      </header>
    </div>
  );
}

export default App;
