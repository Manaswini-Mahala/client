import React from "react";
import Home from "./cmp/Home/Home";
import Apps from "./cmp/Apps/Apps";
import Item from "./cmp/Item/Item";
import NavigationBar from "./comps/NavigationBar/NavigationBar";
import Footer from "./comps/Footer/Footer";
import HeroBanner from "./comps/HeroBanner/HeroBanner";
// import Reviews from "./comps/Reviews/Reviews";
import './app.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Reviews from "./comps/Reviews/Reviews";

const Layout = () => {
  return (
    <div className="app">

      <NavigationBar />
      <Outlet />
      <Footer />

    </div>
  )
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "/apps/:id",
        element: <Apps />
      },

      {
        path: "/item/:id",
        element: <Item />
      },
      {
        path: "/reviews",
        element: <Reviews />
      }
    ]
  },

])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
