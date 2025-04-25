import './index.css'
import { AuthComponent, queryAuthAccepterLoader } from './utils/Auth'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { queryAuthAccepter } from './utils/Auth'
import { AdminHome } from './Admin/AdminHome'
import { NotFound } from './Components/404'
import { ViewMentor } from './Admin/ConfigureUsers/ViewUsers'
import { createContext, useState } from 'react'
import { Loading } from './Components/Dashboard/Loading'

const router = createBrowserRouter([
  { path: '/',loader : queryAuthAccepter , element: <AuthComponent/> },
  { path: '/admin',loader : async () => queryAuthAccepterLoader("admin"), element: <AdminHome/> },
  {path : '/admin/user',loader : async () => queryAuthAccepterLoader("admin"), element : <ViewMentor/>},
  { path: '/contact', element: <div>Contact</div> },
  {path : "/error", element : <NotFound/>},
])
  
export const LoadingContext = createContext<any>([]);

export const App = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <LoadingContext.Provider value={[isLoading, setIsLoading]}>
        {(isLoading) ? <Loading/> : ""}
        <RouterProvider router={router} />
    </LoadingContext.Provider>
  )
}
