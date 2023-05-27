import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Menu from './pages/Menu';
import Globallayout from './layouts/Globallayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Globallayout>
        <App />
      </Globallayout>
    ),
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Menu",
        element: <Menu />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
