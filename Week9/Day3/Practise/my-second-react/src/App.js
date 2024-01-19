import "./App.css";
// import Hello from "./Hello.js";
// import SubHello from "./subHello.js";
import User from "./User.js";

const arr = [
  { id: 1, name: "Alex", email: "alex@gmail.com" },
  { id: 2, name: "Mary", email: "mary@gmail.com" },
  { id: 4, name: "Viktor", email: "viktor@gmail.com" },
  { id: 5, name: "Viktor", email: "viktor@gmail.com" },
  { id: 6, name: "Viktor", email: "viktor@gmail.com" },
  { id: 7, name: "Viktor", email: "viktor@gmail.com" },
  { id: 8, name: "Viktor", email: "viktor@gmail.com" },
  { id: 9, name: "Viktor", email: "viktor@gmail.com" },
  { id: 10, name: "Viktor", email: "viktor@gmail.com" },
  { id: 11, name: "Viktor", email: "viktor@gmail.com" },
  { id: 12, name: "Viktor", email: "viktor@gmail.com" },
  { id: 13, name: "Viktor", email: "viktor@gmail.com" },
  { id: 14, name: "Viktor", email: "viktor@gmail.com" },
  { id: 15, name: "Viktor", email: "viktor@gmail.com" },
  { id: 16, name: "Viktor", email: "viktor@gmail.com" },
  { id: 17, name: "Viktor", email: "viktor@gmail.com" },
  { id: 18, name: "Viktor", email: "viktor@gmail.com" },
  { id: 19, name: "Viktor", email: "viktor@gmail.com" },
  { id: 20, name: "Viktor", email: "viktor@gmail.com" },
  { id: 21, name: "Viktor", email: "viktor@gmail.com" },
];

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {arr.map((item, indx) => {
          return <User userinfo={item} key={indx} />;
        })}
      </header>
    </div>
  );
}

export default App;
