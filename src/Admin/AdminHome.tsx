import { useLoaderData } from "react-router"
import { Dashboard } from "../Components/Dashboard/Dashboard"

export const AdminHome = () => {
  const data : any = useLoaderData()
  return (
    <Dashboard role="admin">
        <div className="flex flex-col items-center justify-center text-black">
            <h1 className="text-4xl font-bold">Admin Home</h1>
            <h2>{data.data.username} : name</h2>
            <p className="mt-4 text-lg">Welcome to the admin dashboard!</p>
        </div>
    </Dashboard>
  )
}
