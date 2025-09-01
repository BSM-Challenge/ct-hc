import { Link } from "react-router-dom";

export function Menu() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/integrantes">Integrantes</Link>
        <Link to="/faq">FAQ</Link>
    </nav>
  )
}
