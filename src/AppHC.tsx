import Footer from "./components/CT-HC/Footer"
import { Header } from "./components/CT-HC/Header"
import { Outlet } from "react-router-dom"

function AppHC() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default AppHC;