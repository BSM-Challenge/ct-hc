import Footer from "./components/CT-HC/Footer"
import { Header } from "./components/CT-HC/Header"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App