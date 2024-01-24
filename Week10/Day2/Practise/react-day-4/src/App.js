import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import ErrorPage from "./components/ErrorPage";
// import { Routes, Route, Link } from "react-router-dom";
import { Outlet, Link, createBrowserRouter, RouterProvider } from "react-router-dom";

/** Routering */

const Root = () => {
  return (
    <header>
      <nav>
        <Link to='/'>Home</Link> <Link to='/about'>About</Link> <Link to='/shop'>Shop</Link>
      </nav>
      <Outlet />
    </header>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:productid",
        element: <Shop />,
      },
    ],
  },
]);

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

// {/* <header>
//   <Link to='/'>Home</Link> <Link to='/about'>About</Link> <Link to='/shop'>Shop</Link>{" "}
// </header> */}
// {/* <main>
//   <Routes>
//     <Route path='/' element={<Home />} />
//     <Route path='/about' element={<About />} />
//     <Route path='/shop' element={<Shop />} />
//     <Route path='/shop/:productid' element={<Shop />} />
//     <Route path='*' element={<ErrorPage />} />
//   </Routes>
// </main> */}
