import HeaderHC from "./components/HC/HeaderHC";
import { Outlet } from "react-router-dom"

function AppHC() {
  return (
    <div className="min-h-screen flex bg-[var(--background)]">
      <HeaderHC />
      <div className="flex-grow bg-white rounded-[40px] my-3 mr-3 px-[25px] py-6">
        <Outlet />
      </div>
    </div>
  )
}

export default AppHC;