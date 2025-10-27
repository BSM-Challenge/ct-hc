import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdMenu, MdMenuOpen } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";

import { menuItems } from "../../../data/HC/menuItem";

export default function HeaderHC() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Header Desktop */}
      <header
        className={`
          hidden lg:block h-screen px-[20px]
          transition-all duration-500 ease-in-out
          ${isOpen ? "w-[360px] xl:w-[320px]" : "w-[80px]"}
        `}
      >
        <nav aria-label="Menu de navegação">
          <figure className="flex items-center justify-between py-4">
            <Link to="/hc">
              <img
                src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761431082/logo-hc_l7m35z.png"
                alt="Logo do Hospital das Clínicas"
                className={`transition-all duration-300 ${
                  isOpen ? "w-[70%] opacity-100" : "w-0 opacity-0"
                }`}
              />
            </Link>

            <button 
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? (
                <MdMenuOpen
                  className="text-4xl cursor-pointer text-[var(--color-grey)]"
                  title="Fechar o menu"
                />
              ) : (
                <MdMenu
                  className="text-4xl cursor-pointer text-[var(--color-grey)]"
                  title="Abrir o menu"
                />
              )}
            </button>
          </figure>

          <ul className={`mt-2 flex flex-col ${isOpen ? "gap-3" : "gap-4"} text-lg font-medium`}>
            <li>
              <Link
                to="/perfil"
                className="flex gap-3 items-center p-2 rounded-lg hover:bg-gray-100 transition-colors"
                title="Ir para a página do usuário"
              >
                <IoPersonCircle className="text-[var(--color-grey)] text-4xl" />
                {isOpen && <span className="text-sm font-medium">Olá, Moisés</span>}
              </Link>
            </li>

            <hr className="my-2" />

            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.to;

              return (
                <li key={index}>
                  <Link
                    to={item.to}
                    className={`
                      flex gap-3 items-center
                      rounded-lg px-2 py-2
                      transition-colors duration-300
                      hover:bg-[var(--color-grey-hover)]
                      text-sm font-medium
                      ${isActive
                        ? item.activeColor
                        : "text-[var(--color-grey)]"
                      }
                    `}
                    title={item.title}
                  >
                    <img src={item.icon} alt={item.label} className="w-6 h-6" />
                    {isOpen && <span className="text-sm">{item.label}</span>}
                  </Link>
                </li>
              );
            })}

            <hr className="my-2" />

            <li>
              <Link 
                to="/" 
                className="
                  flex gap-3 items-center
                  rounded-lg px-2 py-2
                  transition-colors duration-300
                  hover:bg-[var(--color-grey-hover)]
                  text-sm font-medium
                "
                title="Sair do Portal HC"
              >
                <img src="/icon-sair.png" alt="Sair" className="w-6 h-6" />
                {isOpen && <span className="text-sm">Sair</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Header Mobile */}
      <header className="lg:hidden fixed bottom-0 left-0 w-full bg-white shadow-2xl z-50">
        <nav>
          <ul className="flex justify-around py-3">
            <li>
              <Link to="/hc" className="flex flex-col items-center gap-1">
                <img
                  src="/icon-home-ativado-mobile.png"
                  alt="Ícone do Início"
                  className="w-6 h-6"
                />
                <span className="text-xs font-medium">Início</span>
              </Link>
            </li>
            <li>
              <Link to="hc/menu" className="flex flex-col items-center gap-1">
                <img
                  src="/icon-menu-fechado.png"
                  alt="Ícone do menu"
                  className="w-6 h-6"
                />
                <span className="text-xs">Menu</span>
              </Link>
            </li>
            <li>
              <Link to="hc/avisos" className="flex flex-col items-center gap-1">
                <img
                  src="/icon-notificacoes.png"
                  alt="Ícone de notificações"
                  className="w-6 h-6"
                />
                <span className="text-xs">Avisos</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
