import React from "react"
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import About from "../Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        }
    ]
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/system",
    element: <h1>System Page</h1>,
  },
  {
    path: "/news",
    element: <h1>News Page</h1>,
  },
  {
    path: "/support-service",
    element: <h1>Support and Service Page</h1>,
  },
  {
    path: "/contact",
    element: <h1>Contact Page</h1>,
  },
]);

export default router;
