import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Route/Route.jsx'
import Authentication from './Authentication/Authentication.jsx'
import toast, { Toaster } from 'react-hot-toast';
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Authentication>
   <Toaster />
   <RouterProvider router={router}></RouterProvider>
   </Authentication>
  </StrictMode>,
)
