import { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";

import { menuItems } from "../../../data/HC/menuItem";

export default function HeaderHC() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Header Desktop */}
      <header
        className={`
        hidden lg:block h-screen px-[20px]
        transition-all duration-500 ease-in-out
        ${isOpen ? "lg:w-[35%] xl:w-[32%]" : "w-[80px]"}
        `}
      >
        <nav aria-label="Menu de navegação">
          <figure className="flex items-center justify-between">
            <Link to="/hc">
              <img
                src="/logoHC.png"
                alt="Logo do Hospital das Clínicas"
                className={`transition-all duration-300 ${
                  isOpen ? "w-[70%]" : "w-0 opacity-0"
                }`}
              />
            </Link>

            {isOpen ? (
                <MdMenuOpen
                  onClick={toggleMenu}
                  className="text-9xl cursor-pointer text-[var(--color-grey)]"
                  title="Fechar o menu"
                />
            ) : (
                <MdMenu
                  onClick={toggleMenu}
                  className="text-8xl cursor-pointer text-[var(--color-grey)]"
                  title={isOpen ? "Fechar o menu" : "Abrir o menu"}
                />
            )}    

          </figure>

          <ul className={`mt-2 flex flex-col ${isOpen ? "gap-3.5" : "gap-5"} text-lg font-medium`}>
            <li>
              <Link
                to="/perfil"
                className="flex gap-4 items-center pagina__nao__desenvolvida"
                title="Ir para a página do usuário"
              >
                <IoPersonCircle className="text-[var(--color-grey)] text-5xl" />
                {isOpen && <span id="user">Olá, Moisés</span>}
              </Link>
            </li>

            <hr />

            {menuItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="
                    flex gap-4 items-center
                    rounded-xl px-2 py-1
                    transition-colors duration-300
                    hover:bg-[var(--color-grey-hover)]
                    lg:text-[.79rem] 
                    xl:py-1.4 xl:text-[1.1rem]
                  "
                  title={item.title}
                >
                  <img src={item.icon} alt={item.label} className="w-8" />
                  {isOpen && <span>{item.label}</span>}
                </Link>
              </li>
            ))}

            <hr />

            <li>
              <Link 
              to="/" 
              className="
                    flex gap-4 items-center
                    rounded-xl px-2 py-1
                    transition-colors duration-300
                    hover:bg-[var(--color-grey-hover)]
                  "
              title="Sair do Portal HC"
                  >
                <img src="/icon-sair.png" alt="Sair" className="w-8" />
                {isOpen && <span>Sair</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Header Mobile */}
      <header
        className="
        fixed bottom-0 left-0 w-full
        bg-white shadow-2xl
        lg:hidden
        "
      >
        <nav>
          <ul className="flex justify-around py-2">
            <li>
              <Link to="/hc" className="flex flex-col items-center">
                <img
                  src="/icon-home-ativado-mobile.png"
                  alt="Ícone do Início"
                  className="w-8"
                />
                <span className="font-semibold">Início</span>
              </Link>
            </li>
            <li>
              <Link to="/menu" className="flex flex-col items-center">
                <img
                  src="/icon-menu-fechado.png"
                  alt="Ícone do menu"
                  className="w-8"
                />
                <span>Menu</span>
              </Link>
            </li>
            <li>
              <Link to="/avisos" className="flex flex-col items-center">
                <img
                  src="/icon-notificacoes.png"
                  alt="Ícone de notificações"
                  className="w-8"
                />
                <span>Avisos</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
