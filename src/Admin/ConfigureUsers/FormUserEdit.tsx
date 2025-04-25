import { useContext, useState } from "react"
import { AuthTokenDecoded } from "../../utils/Auth"
import { updateUser } from "../../api/admin"
import { LoadingContext } from "../../App"
interface Data {
   data : AuthTokenDecoded | null
   handle : any
}

export const FormUserEdit = ({data,handle} : Data) => {
    const [_, SetIsLoading] = useContext<any>(LoadingContext)
    const [Role,SetRole] = useState(data?.role)

   async function handleChangeRole() {

        if (data?.role != Role) {
            const new_data = {
                role : Role,
                id : data?.id
            }
            SetIsLoading(true)
            const response = await updateUser(new_data) 
            SetIsLoading(false)
            if (response) {
                window.location.reload()
            }  
        }
    }

  return (
    <div className="z-20 fixed top-0 items-center justify-center left-0 flex w-full h-screen">
        <div onClick={handle} className="absolute w-full h-screen blur-bg "></div>
        <div className="h-120 w-200 flex flex-col bg-white gap-2 rounded-2xl z-30 p-8">
            <h1 className="text-2xl font-bold">Edit Personal Information</h1>
            <p className=" text-gray-500">Update your details to keep your profile up-to-date.</p>
            <form action="" className="flex-1  flex flex-col py-3 overflow-y-auto">
                <p className="font-semibold">Personal Information</p>
                <div className="flex gap-4">
                    <div className="flex flex-col w-[50%]">
                        <label htmlFor="username" className="my-2 px-2 text-gray-500">Username</label>
                        <input className="py-2 px-4 border-1 rounded-md border-gray-500 text-gray-500" type="text" id="username" disabled value={data?.username}/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="role" className="my-2 px-2 text-green-500">Role</label>
                        <select onChange={(event) => {SetRole(event.target.value)}} className="py-2 px-4 border-1 rounded-md  border-green-500 " id="role" value={Role}>
                            <option  value="admin">Admin</option>
                            <option value="user">User</option>
                            <option value="mentor">Mentor</option>
                        </select>
                    </div>
                
                </div>
                <label htmlFor="email" className="my-2 px-2 text-gray-500">Email</label>
                <input className="py-2 px-4 border-1 rounded-md w-[50%] border-gray-500 text-gray-500" type="text" id="email" disabled value={data?.user_email}/>
            </form>
            <div className="flex justify-between">
                <div className=""></div>
                <div className="flex gap-2">
                    <button onClick={handle} className="px-4 py-2 bg-red-200 text-red-600 rounded-md">Close</button>
                    <button onClick={handleChangeRole} className="px-4 py-2 bg-blue-200 text-blue-600 rounded-md">Save Change</button>
                </div>
            </div>
        </div>
    </div>
  )
}
