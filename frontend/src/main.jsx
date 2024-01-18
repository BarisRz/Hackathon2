import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./pages/App";
import Home from "./pages/Home";
import Map from "./pages/Map";
import AddMagasin from "./pages/AddMagasin";
import Magasin from "./pages/Magasin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Map",
        element: <Map />,
      },
      {
        path: "/AddMagasin",
        element: <AddMagasin />,
      },
      {
        path: "/Magasin",
        element: <Magasin />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
