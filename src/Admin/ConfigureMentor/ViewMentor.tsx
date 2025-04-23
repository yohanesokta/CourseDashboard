import { FaSearch } from "react-icons/fa"
import { Dashboard } from "../../Components/Dashboard/Dashboard"

export const ViewMentor = () => {
  return (
    <Dashboard role="admin">
      <div className="text-gray-800 p-4">
        <h1 className="font-semibold text-xl">Mentors Configurator</h1>
        <div className="h-300 w-full bg-white border-1 border-gray-300 mt-4 rounded-2xl p-4">
          <div className="flex items-center justify-between pb-4">
            <h1>List Mentor</h1>
            <div className="py-[8px] px-4 flex items-center focus-within:border-gray-500 border-2 border-gray-300 rounded-xl">
                <input className="focus:outline-0 text-sm" type="text" name="" placeholder="Cari Mentor" id="" />

              <FaSearch/>
            </div>
          </div>
          <div className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, eaque est. Temporibus esse necessitatibus exercitationem, laboriosam alias facilis? Illum, quasi.
          </div>
        </div>
      </div>
    </Dashboard>
  )
}
