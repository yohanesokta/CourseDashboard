import { Dashboard } from "../Components/Dashboard/Dashboard"

export const AdminHome = () => {
  return (
    <Dashboard role="admin">
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Admin Home</h1>
            <p className="mt-4 text-lg">Welcome to the admin dashboard!</p>
        </div>
    </Dashboard>
  )
}
