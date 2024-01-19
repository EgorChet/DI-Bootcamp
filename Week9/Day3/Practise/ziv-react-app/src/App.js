import "./App.css";
// import Hello from "./Hello";
// import SubHello from "./SubHello";
import User from "./components/User";

const arr = [
  { id: 1, name: "John", email: 'jjj@gamil.com' },
  { id: 2, name: "Marry", email: 'mmm@gamil.com' },
  { id: 3, name: "Anne", email: 'aaa@gamil.com' },
  { id: 1, name: "aaa", email: 'jjj@gamil.com' },
  { id: 2, name: "bbb", email: 'mmm@gamil.com' },
  { id: 3, name: "ccc", email: 'aaa@gamil.com' },
];

/** props */
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {
          arr.map((item,indx) => {
            return (
              <User userinfo={item} key={indx}/>
            )
          })
        }
      </header>
    </div>
  );
}

export default App;
