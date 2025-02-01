import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import AppLayout from "./components/layouts/AppLayout.jsx"
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Service from './pages/Service.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const render = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/navlink-activelink-in-react/",
          element: <Home />
        },
        {
          path: "/navlink-activelink-in-react/contact",
          element: <Contact />
        },
        {
          path: "/navlink-activelink-in-react/service",
          element: <Service />
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={render} />
  )
}

export default App