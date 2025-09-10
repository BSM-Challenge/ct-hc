// Menu.tsx
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Função para rolar até a section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView(); 
    }
    setIsOpen(false); 
  };

  // Garantir que estamos na Home antes de tentar rolar
  const handleScrollLink = (sectionId: string) => {
    if (window.location.pathname !== "/") {
      navigate("/"); // vai pra Home
      setTimeout(() => scrollToSection(sectionId), 100); // espera renderizar
    } else {
      // Verifica se já está na seção alvo
      const currentSection = document.getElementById(sectionId);
      if (currentSection) {
        const rect = currentSection.getBoundingClientRect();
        // Se a seção já está visível na tela (pelo menos 50% visível)
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          // Se já está na seção, volta para o topo (welcome)
          scrollToSection("welcome");
        } else {
          // Se não está na seção, vai para ela
          scrollToSection(sectionId);
        }
      } else {
        scrollToSection(sectionId);
      }
    }
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
            <Link
              to="/"
              className="hover:text-[var(--color-blue)] transition-colors cursor-pointer"
              onClick={() => handleScrollLink("home")}
            >
              Home
            </Link>
          </li>
          <li className="ml-6 xl:ml-14 text-lg xl:text-2xl">
            <Link
              to="/"
              onClick={() => handleScrollLink("sobre")}
              className="hover:text-[var(--color-blue)] transition-colors cursor-pointer"
            >
              Sobre
            </Link>
          </li>
          <li className="ml-6 xl:ml-14 text-lg xl:text-2xl">
            <Link
              to="/contato"
              className="hover:text-[var(--color-blue)] transition-colors cursor-pointer"
            >
              Contato
            </Link>
          </li>
          <li className="ml-6 xl:ml-14 text-lg xl:text-2xl">
            <Link
              to="/"
              onClick={() => handleScrollLink("integrantes")}
              className="hover:text-[var(--color-blue)] transition-colors cursor-pointer"
            >
              Integrantes
            </Link>
          </li>
          <li className="ml-6 xl:ml-14 text-lg xl:text-2xl mr-4 xl:mr-6">
            <Link
              to="/faq"
              onClick={() => handleScrollLink("faq")}
              className="hover:text-[var(--color-blue)] transition-colors cursor-pointer"
            >
              FAQ
            </Link>
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
                <Link
                  to="/"
                  className="block py-3 text-lg hover:text-[var(--color-blue)] transition-colors cursor-pointer"
                  onClick={() => handleScrollLink("home")}
                >
                  Home
                </Link>
              </li>
              <li className="w-full text-center border-b border-gray-200">
                <Link
                  to="/"
                  className="block py-3 text-lg hover:text-[var(--color-blue)] transition-colors cursor-pointer"
                  onClick={() => handleScrollLink("sobre")}
                >
                  Sobre
                </Link>
              </li>
              <li className="w-full text-center border-b border-gray-200">
                <Link
                  to="/contato"
                  className="block py-3 text-lg hover:text-[var(--color-blue)] transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Contato
                </Link>
              </li>
              <li className="w-full text-center border-b border-gray-200">
                <Link
                  to="/"
                  className="block py-3 text-lg hover:text-[var(--color-blue)] transition-colors cursor-pointer"
                  onClick={() => handleScrollLink("integrantes")}
                >
                  Integrantes
                </Link>
              </li>
              <li className="w-full text-center">
                <Link
                  to="/faq"
                  className="block py-3 text-lg hover:text-[var(--color-blue)] transition-colors cursor-pointer"
                  onClick={() => handleScrollLink("faq")}
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