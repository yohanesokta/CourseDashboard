import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthComponent, queryAuthAccepterLoader } from './utils/Auth'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { queryAuthAccepter } from './utils/Auth'
import { AdminHome } from './Admin/AdminHome'
import { NotFound } from './Components/404'
import { ViewMentor } from './Admin/ConfigureMentor/ViewMentor'

const router = createBrowserRouter([
  { path: '/',loader : queryAuthAccepter , element: <AuthComponent/> },
  { path: '/admin',loader : async () => queryAuthAccepterLoader("admin"), element: <AdminHome/> },
  {path : '/admin/mentor', element : <ViewMentor/>},
  { path: '/contact', element: <div>Contact</div> },
  {path : "/error", element : <NotFound/>},
])
  

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
