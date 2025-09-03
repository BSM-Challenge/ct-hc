// Menu.tsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  // Função para rolar suavemente até a section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Fecha o menu mobile
  };

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
            <a 
              href="#home" 
              className="hover:text-[var(--color-blue)] transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              Home
            </a>
          </li>
          <li className="ml-6 xl:ml-14 text-lg xl:text-2xl">
            <a 
              href="#sobre" 
              className="hover:text-[var(--color-blue)] transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('sobre');
              }}
            >
              Sobre
            </a>
          </li>
          <li className="ml-6 xl:ml-14 text-lg xl:text-2xl">
            <a 
              href="#contato" 
              className="hover:text-[var(--color-blue)] transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contato');
              }}
            >
              Contato
            </a>
          </li>
          <li className="ml-6 xl:ml-14 text-lg xl:text-2xl">
            <a 
              href="#integrantes" 
              className="hover:text-[var(--color-blue)] transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('integrantes');
              }}
            >
              Integrantes
            </a>
          </li>
          <li className="ml-6 xl:ml-14 text-lg xl:text-2xl mr-4 xl:mr-6">
            <a 
              href="#faq" 
              className="hover:text-[var(--color-blue)] transition-colors cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('faq');
              }}
            >
              FAQ
            </a>
          </li>
        </ul>
      </nav>

      {/* Menu Mobile */}
      <nav className="lg:hidden flex justify-between items-center p-4 bg-[var(--color-white)] shadow-md">
        <Link to="/">
          <img src="/logo.png" alt="Logo do CT-HC" className="h-10" />
        </Link>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-[var(--color-blue)] p-2"
          aria-label="Abrir menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-[var(--color-white)] w-[40%] shadow-lg z-50">
            <ul className="flex flex-col items-center py-4 h-screen w-[100%]">
              <li className="w-full text-center border-b border-gray-200">
                <a 
                  href="#home" 
                  className="block py-3 text-lg hover:text-[var(--color-blue)] transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                  }}
                >
                  Home
                </a>
              </li>
              <li className="w-full text-center border-b border-gray-200">
                <a 
                  href="#sobre" 
                  className="block py-3 text-lg hover:text-[var(--color-blue)] transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('sobre');
                  }}
                >
                  Sobre
                </a>
              </li>
              <li className="w-full text-center border-b border-gray-200">
                <a 
                  href="#contato" 
                  className="block py-3 text-lg hover:text-[var(--color-blue)] transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contato');
                  }}
                >
                  Contato
                </a>
              </li>
              <li className="w-full text-center border-b border-gray-200">
                <a 
                  href="#integrantes" 
                  className="block py-3 text-lg hover:text-[var(--color-blue)] transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('integrantes');
                  }}
                >
                  Integrantes
                </a>
              </li>
              <li className="w-full text-center">
                <a 
                  href="#faq" 
                  className="block py-3 text-lg hover:text-[var(--color-blue)] transition-colors cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('faq');
                  }}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}