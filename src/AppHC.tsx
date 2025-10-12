import HeaderHC from "./components/HC/HeaderHC";
import { Outlet } from "react-router-dom"

function AppHC() {
  return (
    <div className="min-h-screen flex bg-[var(--background)]">
      <HeaderHC />
      <div className="
      flex-grow bg-white rounded-[40px] my-3 mr-3 px-[25px] py-6
      max-lg:rounded-none max-lg:my-0 max-lg:mr-0 max-lg:mb-20
      ">
        <Outlet />
      </div>
    </div>
  )
}

export default AppHC;