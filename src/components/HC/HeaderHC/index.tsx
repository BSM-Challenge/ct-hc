import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdMenu, MdMenuOpen, MdOutlineMenu } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";

import { menuItems } from "../../../data/HC/menuItem";
import { FaRegBell } from "react-icons/fa";
import { GoHome } from "react-icons/go";

export default function HeaderHC() {
  const [isOpen, setIsOpen] = useState(true);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleItemClick = (
    label: string,
    hasSubItems: boolean,
    e: React.MouseEvent
  ) => {
    if (hasSubItems) {
      e.preventDefault();
      setOpenSubmenu((prev) => (prev === label ? null : label));
    }
  };

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

          <ul
            className={`mt-2 flex flex-col ${
              isOpen ? "gap-4" : "gap-4"
            } text-lg font-medium`}
          >
            <li>
              <Link
                to="/perfil"
                className="flex gap-3 items-center p-2 rounded-lg hover:bg-gray-100 transition-colors"
                title="Ir para a página do usuário"
              >
                <IoPersonCircle className="text-[var(--color-grey)] text-4xl" />
                {isOpen && (
                  <span className="text-sm font-medium">Olá, Moisés</span>
                )}
              </Link>
            </li>

            <hr className="my-2" />

            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.to;
              const hasSubItems = !!item.subItems;

              return (
                <li key={index} className="relative">
                  <Link
                    to={item.to}
                    onClick={(e) => handleItemClick(item.label, hasSubItems, e)}
                    className={`
                      flex gap-5 items-center
                      rounded-lg px-2 py-2
                      transition-colors duration-300
                      hover:bg-[var(--color-grey-hover)]
                      text-sm font-medium
                      ${
                        isActive ? item.activeColor : "text-[var(--color-grey)]"
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
                <img
                  src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761568469/icon-sair_hvrt0v.png"
                  alt="Sair"
                  className="w-6 h-6"
                />
                {isOpen && <span className="text-sm">Sair</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Header Mobile */}
      <header className="lg:hidden fixed bottom-0 left-0 w-full bg-white shadow-2xl z-50">
        <nav>
          <ul className="flex justify-around items-center py-3">
            <li>
              <Link to="/hc" className="flex flex-col items-center gap-1">
                <GoHome
                  size={25}
                  className={`${
                    location.pathname === "/hc"
                      ? "text-[var(--color-active)]"
                      : "text-[var(--color-grey)]"
                  }`}
                />
                <span
                  className={`text-xs font-medium ${
                    location.pathname === "/hc"
                      ? "text-[var(--color-active)]"
                      : "text-[var(--color-grey)]"
                  }`}
                >
                  Início
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/hc/menuMobile"
                className="flex flex-col items-center gap-1"
              >
                <MdOutlineMenu
                  size={25}
                  className={`${
                    location.pathname === "/hc/menuMobile"
                      ? "text-[var(--color-active)]"
                      : "text-[var(--color-grey)]"
                  }`}
                />
                <span
                  className={`text-xs font-medium ${
                    location.pathname === "/hc/menuMobile"
                      ? "text-[var(--color-active)]"
                      : "text-[var(--color-grey)]"
                  }`}
                >
                  Menu
                </span>
              </Link>
            </li>

            <li>
              <Link
                to="/hc/avisosMobile"
                className="flex flex-col items-center gap-1"
              >
                <FaRegBell
                  size={25}
                  className={`${
                    location.pathname === "/hc/avisosMobile"
                      ? "text-[var(--color-active)]"
                      : "text-[var(--color-grey)]"
                  }`}
                />
                <span
                  className={`text-xs font-medium ${
                    location.pathname === "/hc/avisosMobile"
                      ? "text-[var(--color-active)]"
                      : "text-[var(--color-grey)]"
                  }`}
                >
                  Avisos
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
