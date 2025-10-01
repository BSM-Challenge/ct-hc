import HeaderHC from "./components/HC/Header";
import { Outlet } from "react-router-dom"

function AppHC() {
  return (
    <div className="min-h-screen flex bg-[var(--background)]">
      <HeaderHC />
      <div className="flex-grow bg-white rounded-[40px] my-3 mr-3 px-[25px] pt-6 pb-10">
        <Outlet />
      </div>
    </div>
  )
}

export default AppHC;