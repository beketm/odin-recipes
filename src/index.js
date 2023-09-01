import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createHashRouter,
  createBrowserRouter,
  RouterProvider,
  // Route,
  Link,
} from "react-router-dom";
import FullRecipe from './pages/FullRecipe';

const router = createHashRouter([
  {
    path: "/full-recipe",
    element: <FullRecipe />,
  },
  {
    path: "/odin-recipes",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
