import HeaderHC from "./components/HC/HeaderHC";
import { Outlet, useLocation } from "react-router-dom";
import { useContraste } from "./context/ContrasteContext";

function AppHC() {
  const { contrasteAtivo } = useContraste();
  const location = useLocation();

  // Verifica se a rota atual pertence ao HC (por segurança, caso AppHC seja usado fora)
  const isHCRoute = location.pathname.includes("/hc");

  return (
    <div
      className={`min-h-screen flex transition-colors duration-300 ${
        contrasteAtivo && isHCRoute
          ? "bg-[var(--color-black)] text-[var(--color-white)]"
          : "bg-[var(--background)] text-[var(--color-text)]"
      }`}
    >
      <HeaderHC />

      <main
        className={`
          flex-grow rounded-[40px] my-3 mr-3 px-[25px] py-6 
          max-lg:rounded-none max-lg:my-0 max-lg:mr-0 max-lg:mb-20 transition-colors duration-300 ${
          contrasteAtivo && isHCRoute
            ? "bg-zinc-900 text-[var(--color-white)]"
            : "bg-[var(--color-white)] text-[var(--color-black)]"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default AppHC;