import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Route/Route.jsx'
import Authentication from './Authentication/Authentication.jsx'
import toast, { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'
const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Authentication>
   <QueryClientProvider client={queryClient}><Toaster />
   <RouterProvider router={router}></RouterProvider></QueryClientProvider>
   </Authentication>
  </StrictMode>,
)
