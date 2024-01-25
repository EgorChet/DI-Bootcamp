import Example3 from "./components/Example3";
import Example2 from "./components/Example2";
import Example1 from "./components/Example1";
import PostList from "./components/PostList";
import ErrorBoundary from "./components/ErrorBoundary";
import { Component } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Functional Components
const HomeScreen = () => <h2>Home</h2>;
const ProfileScreen = () => <h2>Profile</h2>;
const ShopScreen = () => {
  throw new Error("Shop Error"); // Intentionally throwing an error
  return <h2>Shop</h2>;
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseData: null,
    };
    this.sendData = this.sendData.bind(this);
  }

  async sendData() {
    const url = "https://webhook.site/396d6ab9-5bee-4071-90db-662cbb752dc3";
    const data = {
      key1: "myusername",
      email: "mymail@gmail.com",
      name: "Isaac",
      lastname: "Doe",
      age: 27,
    };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add any other necessary headers
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Since webhook.site usually returns plain text, use response.text()
      const result = await response.text();
      
      console.log("Response:", result);  // Log the response text
      console.log("Data posted successfully!");  // Log the success message
      this.setState({ responseData: result });
    } catch (error) {
      console.error("Error:", error);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          {/* Bootstrap Navbar with NavLink */}
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <NavLink to='/' className='nav-link'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/profile' className='nav-link'>
                  Profile
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/shop' className='nav-link'>
                  Shop
                </NavLink>
              </li>
            </ul>
          </nav>
          <main>
            <button onClick={this.sendData}>Send Data</button>
            <PostList />
            <Example1 />
            <Example2 />
            <Example3 />
          </main>

          {/* Routes */}
          <Routes>
            <Route
              path='/'
              element={
                <ErrorBoundary>
                  <HomeScreen />
                </ErrorBoundary>
              }
            />
            <Route
              path='/profile'
              element={
                <ErrorBoundary>
                  <ProfileScreen />
                </ErrorBoundary>
              }
            />
            <Route
              path='/shop'
              element={
                <ErrorBoundary>
                  <ShopScreen />
                </ErrorBoundary>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
