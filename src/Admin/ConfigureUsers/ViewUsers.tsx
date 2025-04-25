import { FaSearch, FaUser } from "react-icons/fa"
import { Dashboard } from "../../Components/Dashboard/Dashboard"
import { useEffect, useState } from "react"
import { GetUsers } from "../../api/admin"
import { AuthTokenDecoded } from "../../utils/Auth"
import { FormUserEdit } from "./FormUserEdit"

export const ViewMentor = () => {
  const [MentorData, SetMentorData] = useState<any>([])
  const [Search, SetSearch] = useState("")
  const [Filter,SetFilter] = useState<any>(null)
  const [ViewData,SetViewData] =useState<any>(null)
  const [ViewAction,SetViewAction] = useState<boolean>(false)
  useEffect(()=>{
    GetUsers(null).then((data)=> {
      SetMentorData(data)
    })
  },[])

  function handleSearch(object : AuthTokenDecoded ) {
    return (object.username.toLowerCase().includes(Search.toLowerCase()) || object.user_email.toLowerCase().includes(Search.toLowerCase()))
  }

  function disbleView() {
    SetViewAction(false)
  }

  function handleFilter(role : "user" | "mentor" | "admin" | null) {
    SetFilter(role)
    GetUsers(role).then((data)=> {
      SetMentorData(data)
    })
  }
  
  return (
      <Dashboard role="admin">
        <div className="text-gray-800 p-4">
          <h1 className="font-semibold text-xl">Users Configurator</h1>
          <div className="h-max w-full bg-white border-1 border-gray-300 mt-4 rounded-2xl p-4">
            <div className="flex items-center justify-between pb-4">
              <h1>List Mentor</h1>
              <div className="flex gap-2">
                <label className={(Filter != null) ? "text-gray-400" : ""} htmlFor="role-all">All</label>
                <input onChange={()=> {handleFilter(null)}} type="radio"id="role-all" name="role"/>
                <label className={(Filter != "user") ? "text-gray-400" : ""} htmlFor="role-user">User</label>
                <input onChange={()=> {handleFilter("user")}} type="radio"id="role-user" name="role"/>
                <label className={(Filter != "mentor") ? "text-gray-400" : ""} htmlFor="role-mentor">Mentor</label>
                <input onChange={()=> {handleFilter("mentor")}} type="radio" id="role-mentor" name="role"/>
                <label className={(Filter != "admin") ? "text-gray-400" : ""} htmlFor="role-admin">Admin</label>
                <input onChange={()=> {handleFilter("admin")}} type="radio" id="role-admin" name="role"/>
              </div>
              <div className="py-[8px] px-4 flex items-center focus-within:border-gray-500 border-2 border-gray-300 rounded-xl">
                  <input onChange={(event) => {SetSearch(event.target.value)}} className="focus:outline-0 text-sm" type="text" name="" placeholder="Cari Mentor" id="" />
                <FaSearch/>
              </div>
            </div>
            <div className="">
              <table border={10} className="w-full text-center awesome-table">
                <thead>
                  <tr>
                    <th>Profile</th>
                    <th>Updated</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Configurator</th>
                  </tr>
                </thead>
                <tbody>
                {MentorData?.filter(handleSearch).map((element : AuthTokenDecoded , key : number)=>{
                  return <tr key={String(key)}>
                    <td className="flex px-2">
                      <div className="flex">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-500">
                          <FaUser size={24} className="text-green-100"/>
                        </div>
                        <div className="flex text-sm flex-col text-left px-2">
                          <span>{element.username}</span>
                          <span className="text-gray-500">{element.user_email}</span>
                        </div>
                      </div>
                    </td>
                    <td>{element.updateAt}</td>
                    <td><span className={(element.role == "user") ? "bg-green-100 px-3 py-1 text-green-700 rounded-full" : (element.role == "mentor") ? "bg-yellow-100 px-3 py-1 text-yellow-700 rounded-full" : "bg-red-100 px-3 py-1 text-red-700 rounded-full" }>{element.role}</span></td>
                    <td><span className="bg-green-500 text-white font-bold px-4 text-sm py-1 rounded-2xl">Active</span></td>
                    <td >
                      <button onClick={()=> {
                        SetViewData(element);SetViewAction(true)
                      }} className="px-3 mr-2 py-1 font-semibold text-sm text-white rounded-sm bg-blue-500 cursor-pointer">Edit</button>
                      <button className="px-3 py-1 font-semibold text-sm text-white rounded-sm bg-red-600 cursor-pointer">Disable</button>
                      </td>
                  </tr>
                })}
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      {(ViewAction) ? 
        <FormUserEdit data={ViewData} handle={disbleView}/> :""
      }
      </Dashboard>
  )
}
