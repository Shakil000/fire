import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import { ToastContainer } from 'react-toastify'
// import { HelmetProvider } from 'react-helmet-async'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HelmetProvider> */}
    <RouterProvider router= {router}></RouterProvider>
    <ToastContainer position="top-right" autoClose={3000} />

   {/* </HelmetProvider> */}
  </React.StrictMode>,
)
