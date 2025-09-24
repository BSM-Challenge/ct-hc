import { Outlet } from "react-router-dom"

function AppHC() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  )
}

export default AppHC;