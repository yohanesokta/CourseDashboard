import axios from "axios";
import { AuthTokenDecoded } from "../utils/Auth";

export async function GetUsers(role : 'user' | "admin" | "mentor" | null) : Promise<AuthTokenDecoded | void> {
       let userdata :  {data : {data :AuthTokenDecoded}};
       if (role) {
            userdata = await axios.get(import.meta.env.VITE_API_URL + `/admin/user?role=${role}&skip=0&take=10`,{
                  headers : {Authorization : `Bearer ${localStorage.getItem("authToken")}`}
            })
       } else {
         userdata =  await axios.get(import.meta.env.VITE_API_URL + "/admin/user?skip=0&take=10",{
            headers : {Authorization : `Bearer ${localStorage.getItem("authToken")}`}
         })
      }
       return userdata.data.data
}

export async function updateUser(data : any) {
    const userdata = await axios.put(import.meta.env.VITE_API_URL + "/admin/user",{
        id : data.id,
        role : data.role
    },{
        headers : {Authorization : `Bearer ${localStorage.getItem("authToken")}`}
    })
    return userdata.data
}