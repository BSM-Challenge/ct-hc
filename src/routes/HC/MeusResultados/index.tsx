import { useState } from "react";
import TitleHC from "../../../components/HC/TitleHC";
import { FaMicroscope } from "react-icons/fa";
import { BiSolidImageAlt } from "react-icons/bi";

export default function MeusResultados() {
  const [abaAtiva, setAbaAtiva] = useState<"laboratorio" | "imagem">("laboratorio");

  return (
    <section className="flex flex-col gap-6">
      <TitleHC title="Meus Resultados" />

      <div className="flex">
        <button
          onClick={() => setAbaAtiva("laboratorio")}
          className={`flex flex-col items-center px-4 py-2 rounded-md transition w-1/2 cursor-pointer
            ${
              abaAtiva === "laboratorio"
                ? "text-[var(--color-blue)] font-semibold hover:bg-[var(--color-blue-hover)] border-b-2 border-[var(--color-blue)]"
                : "text-[--color-gray] hover:bg-[var(--color-grey-hover-2)]"
            }`}
        >
          <FaMicroscope size={28} />
          <span>Laboratório</span>
        </button>

        <button
          onClick={() => setAbaAtiva("imagem")}
          className={`flex flex-col items-center px-4 py-2 rounded-md transition w-1/2 cursor-pointer
            ${
              abaAtiva === "imagem"
                ? "text-[var(--color-blue)] font-semibold hover:bg-[var(--color-blue-hover)] border-b-2 border-[var(--color-blue)]"
                : "text-[--color-gray] hover:bg-[var(--color-grey-hover-2)]"
            }`}
        >
          <BiSolidImageAlt size={28} />
          <span>Imagem</span>
        </button>
      </div>

      <div className="w-full flex justify-center">
        {abaAtiva === "laboratorio" ? (
          <LaboratorioContent />
        ) : (
          <ImagemContent />
        )}
      </div>
    </section>
  );
}

function LaboratorioContent() {
  const [filtroAtivo, setFiltroAtivo] = useState<"3" | "6" | "12">("3");

  const botoes = [
    { label: "Últimos 3 meses", value: "3" },
    { label: "Últimos 6 meses", value: "6" },
    { label: "Últimos 12 meses", value: "12" },
  ];

  return (
    <div className="flex flex-col items-center text-[var(--color-grey)] w-full max-w-3xl">
      <ul className="flex flex-wrap justify-center gap-3 mb-6">
        {botoes.map((btn) => (
          <li key={btn.value}>
            <button
              onClick={() => setFiltroAtivo(btn.value as "3" | "6" | "12")}
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

      <p className="text-center">Não foi localizado nada no momento.</p>
    </div>
  );
}

function ImagemContent() {
  const [filtroAtivo, setFiltroAtivo] = useState<"3" | "6" | "12">("3");

  const botoes = [
    { label: "Últimos 3 meses", value: "3" },
    { label: "Últimos 6 meses", value: "6" },
    { label: "Últimos 12 meses", value: "12" },
  ];

  return (
    <div className="flex flex-col items-center text-[var(--color-grey)] w-full max-w-3xl">
      <ul className="flex flex-wrap justify-center gap-3 mb-6">
        {botoes.map((btn) => (
          <li key={btn.value}>
            <button
              onClick={() => setFiltroAtivo(btn.value as "3" | "6" | "12")}
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

      <p className="text-center">Nenhuma imagem disponível no momento.</p>
    </div>
  );
}
