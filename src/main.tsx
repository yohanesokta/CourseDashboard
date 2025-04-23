import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthComponent } from './utils/Auth'

import { createBrowserRouter, RouterProvider } from 'react-router'
import { queryAuthAccepter } from './utils/Auth'
import { AdminHome } from './Admin/AdminHome'

const router = createBrowserRouter([
  { path: '/',loader : queryAuthAccepter , element: <AuthComponent/> },
  { path: '/admin', element: <AdminHome/> },
  { path: '/contact', element: <div>Contact</div> },
])
  

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
