import { useState } from "react";
import { DasboardConfig } from "./config";
import { LuLayoutList } from "react-icons/lu";
export interface DashboardProps {
    children: React.ReactNode;
    role : "admin" | "mentor";
}   

export const Dashboard = ( {children , role} : DashboardProps) => {
    // const [isOpen, setIsOpen] = useState(false);
    const [toggle, setToggle] = useState(localStorage.getItem("toggle") == "true" ? false : true);
    function handleToggle() {
        localStorage.setItem("toggle", String(toggle));
        setToggle(!toggle);
    }
  return (
    <>
        <div className="flex h-screen ">
            <div className={(toggle) ? "w-70 bg-white z-10  p-2 border-r-1 border-gray-300 animation-05s" : "w-20 bg-white z-10  p-2 border-r-1 border-gray-300 animation-05s"}>
                <div className="p-4">
                    <h1 className="text-xl font-bold text-center text-gray-600">{(toggle) ? "Dashboard" : ""}</h1>
                </div>
                <div className={(toggle ? "p-2 font-normal" : "") + ""}>
                    <p className={(toggle) ? "text-sm text-gray-500 text-center" : "text-center w-full mx-auto text-gray-500"}>Menu</p>
                    <div className="my-4">
                    {(DasboardConfig()[role] || []).map((item, index) => {
                        let focus;
                        if (window.location.pathname == item.path) {
                             focus = "bg-blue-600 text-white"
                        } else { focus = "hover:bg-gray-200"}
                       return <button onClick={()=>{window.location.href = item.path}} key={String(index)} className={"flex items-center w-full  px-4 py-4 text-gray-700  rounded-lg my-2 " + focus}>
                            <item.icons className={"text-gray-600" + focus} size={24}/>
                            <span className="ml-2 text-[11pt]">{(toggle) ? item.name : ""}</span>
                        </button>
                     })}
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-col">
                <nav className="flex h-18 border-b-1 justify-between border-gray-300 bg-white">  
                    <div className="h-full px-5 items-center flex">
                        <button onClick={handleToggle} className="cursor-pointer flex items-center justify-center w-14 h-12 border-2 rounded-lg bg-white text-neutral-500 border-neutral-300 text-2xl"><LuLayoutList/></button>
                    </div>
                </nav>
                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    </>
  )
}
