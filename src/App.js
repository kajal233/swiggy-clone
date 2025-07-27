import React, { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


const Grocery = lazy(() => import("./components/Grocery"));

// Shared layout component
const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet /> {/* renders child routes here */}
    </div>
  );
};

// Define routes and export router
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>loading...</h1>}><Grocery /></Suspense>,
      },
      {
        path: "/",
        element: <Body />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ]
  }
]);

export default App; // Optional if you want to import layout elsewhere
