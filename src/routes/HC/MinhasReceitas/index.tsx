import { useState } from "react";
import TitleHC from "../../../components/HC/TitleHC";
import { LuSquareMenu } from "react-icons/lu";
import { AiFillCloseSquare } from "react-icons/ai";

export default function MeusResultados() {
  type Filtro = "3" | "6" | "12"

  const [abaAtiva, setAbaAtiva] = useState<"ativas" | "inativas">("ativas");
  const [filtroAtivo, setFiltroAtivo] = useState<Filtro>("3");

  const botoes: {label: string; value: Filtro}[] = [
    { label: "Últimos 3 meses", value: "3" },
    { label: "Últimos 6 meses", value: "6" },
    { label: "Últimos 12 meses", value: "12" },
  ];

  return (
    <section className="flex flex-col gap-6 min-h-full">
      <TitleHC title="Meus Resultados" />

      <div className="flex">
        <button
          onClick={() => setAbaAtiva("ativas")}
          className={`flex flex-col items-center px-4 py-2 rounded-md transition w-1/2 cursor-pointer
            ${
              abaAtiva === "ativas"
                ? "text-[var(--color-blue)] font-semibold hover:bg-[var(--color-blue-hover)] border-b-2 border-[var(--color-blue)]"
                : "text-[--color-gray] hover:bg-[var(--color-grey-hover-2)]"
            }`}
        >
          <LuSquareMenu size={24} />
          <span>Ativas</span>
        </button>

        <button
          onClick={() => setAbaAtiva("inativas")}
          className={`flex flex-col items-center px-4 py-2 rounded-md transition w-1/2 cursor-pointer
            ${
              abaAtiva === "inativas"
                ? "text-[var(--color-blue)] font-semibold hover:bg-[var(--color-blue-hover)] border-b-2 border-[var(--color-blue)]"
                : "text-[--color-gray] hover:bg-[var(--color-grey-hover-2)]"
            }`}
        >
          <AiFillCloseSquare size={24} />
          <span>Inativas</span>
        </button>
      </div>

      <ul className="flex flex-wrap justify-center gap-3 mb-6">
        {botoes.map((btn) => (
          <li key={btn.value}>
            <button
              onClick={() => setFiltroAtivo(btn.value)}
              className={`px-4 py-2 rounded-md transition cursor-pointer ${
                filtroAtivo === btn.value
                  ? "bg-[var(--color-blue)] text-[var(--color-white)]"
                  : "border border-[var(--color-grey)] hover:bg-[var(--color-grey-hover-2)]"
              }`}
            >
              {btn.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="w-full flex justify-center flex-grow items-center">
        <p className="text-center">
          {abaAtiva === "ativas"
            ? {
                "3": "Não foi localizado nada no momento.",
                "6": "Não foi localizado nada no momento.",
                "12": "Não foi localizado nada no momento.",
              }[filtroAtivo]
            : {
                "3": "Nenhuma receita inativa disponível no momento.",
                "6": "Nenhuma receita inativa disponível no momento.",
                "12": "Nenhuma receita inativa disponível no momento.",
              }[filtroAtivo]}
        </p>
      </div>
    </section>
  );
}