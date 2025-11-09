import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

interface ContrasteContextType {
  contrasteAtivo: boolean;
  alternarContraste: () => void;
}

const ContrasteContext = createContext<ContrasteContextType | undefined>(undefined);

export function ContrasteProvider({ children }: { children: ReactNode }) {
  const [contrasteAtivo, setContrasteAtivo] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("contraste-ativo", contrasteAtivo);
  }, [contrasteAtivo]);

  const alternarContraste = () => setContrasteAtivo(!contrasteAtivo);

  return (
    <ContrasteContext.Provider value={{ contrasteAtivo, alternarContraste }}>
      {children}
    </ContrasteContext.Provider>
  );
}

export function useContraste() {
  const context = useContext(ContrasteContext);
  if (!context) {
    throw new Error("useContraste deve ser usado dentro de ContrasteProvider");
  }
  return context;
}