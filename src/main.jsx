import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './Route/Route.jsx';
import Authentication from './Authentication/Authentication.jsx';
import toast, { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GridLoader } from 'react-spinners';

const queryClient = new QueryClient();

function MainApp() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  return (
    <StrictMode>
      <Authentication>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          {loading ? (
            <div className="flex h-screen justify-center items-center bg-gray-100">
              <div className="text-center">
                <div className="loader"></div>
                <p className="text-lg font-semibold text-gray-600 mt-2"><GridLoader color='#134E4A' />.</p>
              </div>
            </div>
          ) : (
            <RouterProvider router={router} />
          )}
        </QueryClientProvider>
      </Authentication>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<MainApp />);
