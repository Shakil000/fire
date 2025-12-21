import React from "react"
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import About from "../Pages/About/About";
import System from "../Pages/System/System";
import SupportAndService from "../Pages/Support&Service/SupportAndService";

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
    element: <System></System>,
  },
  {
    path: "/news",
    element: <h1>News Page</h1>,
  },
  {
    path: "/support-service",
    element: <SupportAndService></SupportAndService>,
  },
  {
    path: "/contact",
    element: <h1>Contact Page</h1>,
  },
]);

export default router;
