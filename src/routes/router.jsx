import React from "react"
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import About from "../Pages/About/About";
import System from "../Pages/System/System";
import SupportAndService from "../Pages/Support&Service/SupportAndService";
import Contacts from "../Pages/Contacts/Contacts";
import News from "../Pages/News/News";

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
    element: <News></News>,
  },
  {
    path: "/support-service",
    element: <SupportAndService></SupportAndService>,
  },
  {
    path: "/contact",
    element: <Contacts></Contacts>,
  },
]);

export default router;
