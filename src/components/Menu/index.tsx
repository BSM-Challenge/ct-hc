import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav className="flex justify-center">
      <ul className="bg-[#ffffff] flex items-center mt-[55px] rounded-full">
        <li className="ml-4">
          <Link to="/">
            <img src="/logo.png" alt="Logo do CT-HC" className="h-15 m-2" />
          </Link>
        </li>
        <li className="ml-15 text-2xl">
          <Link to="/">Home</Link>
        </li>
        <li className="ml-14 text-2xl">
          <Link to="/sobre">Sobre</Link>
        </li>
        <li className="ml-14 text-2xl">
          <Link to="/contato">Contato</Link>
        </li>
        <li className="ml-14 text-2xl">
          <Link to="/integrantes">Integrantes</Link>
        </li>
        <li className="ml-14 text-2xl mr-6">
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
    </nav>
  )
}
