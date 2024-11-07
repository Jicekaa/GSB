import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './pages/index.jsx'
import Accueil from './pages/accueil.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },

  {
    path: '/accueil',
    element: <Accueil />
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
