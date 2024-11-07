import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Index from '../pages/index.jsx';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Accueil from '../pages/accueil.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: </>
  }
,
  {
    path: '/',
    element: </>
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
