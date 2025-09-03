import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Desktop */}
      <nav className="hidden lg:flex justify-center">
        <ul className="bg-[var(--color-white)] flex items-center mt-[55px] rounded-full shadow-lg">
          <li className="ml-4">
            <Link to="/">
              <img src="/logo.png" alt="Logo do CT-HC" className="h-12 m-2" />
            </Link>
          </li>
          <li className="ml-8 xl:ml-15 text-lg xl:text-2xl">
            <Link to="/" className="hover:text-[var(--color-blue)] transition-colors">Home</Link>
          </li>
          <li className="ml-6 xl:ml-14 text-lg xl:text-2xl">
            <Link to="/sobre" className="hover:text-[var(--color-blue)] transition-colors">Sobre</Link>
          </li>
          <li className="ml-6 xl:ml-14 text-lg xl:text-2xl">
            <Link to="/contato" className="hover:text-[var(--color-blue)] transition-colors">Contato</Link>
          </li>
          <li className="ml-6 xl:ml-14 text-lg xl:text-2xl">
            <Link to="/integrantes" className="hover:text-[var(--color-blue)] transition-colors">Integrantes</Link>
          </li>
          <li className="ml-6 xl:ml-14 text-lg xl:text-2xl mr-4 xl:mr-6">
            <Link to="/faq" className="hover:text-[var(--color-blue)] transition-colors">FAQ</Link>
          </li>
        </ul>
      </nav>

      {/* Menu Mobile */}
      <nav className="lg:hidden flex justify-between items-center p-4 bg-[var(--color-white)] shadow-md">
        <Link to="/">
          <img src="/logo.png" alt="Logo do CT-HC" className="h-10" />
        </Link>
        
        {/* Botão Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-[var(--color-blue)] p-2"
          aria-label="Abrir menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu Mobile Aberto */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-[var(--color-white)] w-[40%] shadow-lg z-50">
            <ul className="flex flex-col items-center py-4 h-screen w-[100%]">
              <li className="w-full text-center border-b border-gray-200">
                <Link 
                  to="/" 
                  className="block py-3 text-lg hover:text-[var(--color-blue)] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="w-full text-center border-b border-gray-200">
                <Link 
                  to="/sobre" 
                  className="block py-3 text-lg hover:text-[var(--color-blue)] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sobre
                </Link>
              </li>
              <li className="w-full text-center border-b border-gray-200">
                <Link 
                  to="/contato" 
                  className="block py-3 text-lg hover:text-[var(--color-blue)] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contato
                </Link>
              </li>
              <li className="w-full text-center border-b border-gray-200">
                <Link 
                  to="/integrantes" 
                  className="block py-3 text-lg hover:text-[var(--color-blue)] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Integrantes
                </Link>
              </li>
              <li className="w-full text-center">
                <Link 
                  to="/faq" 
                  className="block py-3 text-lg hover:text-[var(--color-blue)] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}