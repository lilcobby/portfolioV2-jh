import ReactDOM from "react-dom/client";
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/Portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";

// Define the accessible routes, and which components respond to which URL

// home page should be like opening a folder.
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // home
    
     
      {
        path: "/Portfolio",
        element: <Portfolio />,
      },
      // portfolio
      {
        path: "/Skills",
        element: <Skills />,
        // resume
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
