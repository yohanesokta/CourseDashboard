import { useState } from "react";
import { DasboardConfig } from "./config";
import { LuLayoutList } from "react-icons/lu";
export interface DashboardProps {
    children: React.ReactNode;
    role : "admin" | "mentor";
}   

export const Dashboard = ( {children , role} : DashboardProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [toggle, setToggle] = useState(false);

  return (
    <>
        <div className="flex h-screen bg-white">
            <div className="w-70 bg-white z-10  p-2 border-r-1 border-gray-300">
                <div className="p-4">
                    <h1 className="text-xl font-bold text-center text-gray-600">Dashboard</h1>
                </div>
                <div className="text-gray-600 p-2">
                    <span className="text-sm text-gray-500 pb">Menu</span>
                    <div className="my-4">
                    {(DasboardConfig()[role] || []).map((item, index) => (
                        <button key={String(index)} className="flex items-center w-full  px-4 py-4 text-gray-600 hover:bg-gray-200 rounded-lg">
                            <item.icons size={24}/>
                            <span className="ml-2 text-[10pt]">{item.name}</span>
                        </button>
                    ))}
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <nav className="flex h-18 border-b-1 justify-between border-gray-300 bg-white">  
                    <div className="h-full px-5 items-center flex">
                        <button className="cursor-pointer flex items-center justify-center w-14 h-12 border-2 rounded-lg bg-white text-neutral-500 border-neutral-300 text-2xl"><LuLayoutList/></button>
                    </div>
                </nav>
            </div>
        </div>
        {children}
    </>
  )
}
