import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginRegister from "./components/LoginRegister";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Auth from "./auth/Auth";
import Info from "./components/Info";
import { useState, useContext, createContext } from "react"; //USE REDUX INSTEAD OF useContext

export const AuthContext = createContext();

function App() {
  const [token, setToken] = useState();
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {/* Redux provider store provider instead */}
      <div className='App'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginRegister page={"Login"} />} />
          <Route path='/register' element={<LoginRegister page={"Register"} />} />

          <Route
            path='/info'
            element={
              <Auth>
                <Info />
              </Auth>
            }
          />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
