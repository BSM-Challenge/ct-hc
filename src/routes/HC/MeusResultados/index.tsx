import { useState } from "react";
import TitleHC from "../../../components/HC/TitleHC";
import { FaMicroscope } from "react-icons/fa";
import { BiSolidImageAlt } from "react-icons/bi";
import ConteudoDinamico from "../../../components/HC/ConteudoDinamico";
import TutorialHC from "../../../components/HC/TutorialHC";

export default function MeusResultados() {
  const [abaAtiva, setAbaAtiva] = useState<"laboratorio" | "imagem">("laboratorio");
  const [filtroAtivo, setFiltroAtivo] = useState<"3" | "6" | "12">("3");

  const botoes: { label: string; value: "3" | "6" | "12"; mensagem: string }[] = [
    { label: "Últimos 3 meses", value: "3", mensagem: "Não foi localizado nada no momento." },
    { label: "Últimos 6 meses", value: "6", mensagem: "Não foi localizado nada no momento." },
    { label: "Últimos 12 meses", value: "12", mensagem: "Não foi localizado nada no momento." },
  ];

  const botoesImagem: { label: string; value: "3" | "6" | "12"; mensagem: string }[] = [
    { label: "Últimos 3 meses", value: "3", mensagem: "Nenhuma imagem disponível no momento" },
    { label: "Últimos 6 meses", value: "6", mensagem: "Nenhuma imagem disponível no momento" },
    { label: "Últimos 12 meses", value: "12", mensagem: "Nenhuma imagem disponível no momento" },
  ];

  // 👇 Steps do tutorial explicativo
  const steps = [
    {
      target: ".btn-lab",
      content: "Aqui você acessa seus resultados de laboratório.",
      showOverlay: false,
    },
    {
      target: ".btn-img",
      content: "Aqui você acessa suas imagens e exames de imagem.",
    },
    {
      target: ".filtro-meses",
      content: "Você pode filtrar os resultados por período.",
    },
  ];

  return (
    <section className="flex flex-col gap-6 min-h-full relative">
      <TitleHC title="Meus Resultados" />

      {/* TutorialHC - exibe o guia passo a passo */}
      <TutorialHC steps={steps} />

      <div className="flex">
        <button
          onClick={() => setAbaAtiva("laboratorio")}
          className={`btn-lab flex flex-col items-center px-4 py-2 rounded-md transition w-1/2 cursor-pointer
            ${
              abaAtiva === "laboratorio"
                ? "text-[var(--color-blue)] font-semibold hover:bg-[var(--color-blue-hover)] border-b-2 border-[var(--color-blue)]"
                : "text-[--color-gray] hover:bg-[var(--color-grey-hover-2)]"
            }`}
        >
          <FaMicroscope size={24} />
          <span>Laboratório</span>
        </button>

        <button
          onClick={() => setAbaAtiva("imagem")}
          className={`btn-img flex flex-col items-center px-4 py-2 rounded-md transition w-1/2 cursor-pointer
            ${
              abaAtiva === "imagem"
                ? "text-[var(--color-blue)] font-semibold hover:bg-[var(--color-blue-hover)] border-b-2 border-[var(--color-blue)]"
                : "text-[--color-gray] hover:bg-[var(--color-grey-hover-2)]"
            }`}
        >
          <BiSolidImageAlt size={24} />
          <span>Imagem</span>
        </button>
      </div>

      <ul className="flex flex-wrap justify-center gap-3 mb-6 filtro-meses">
        {(abaAtiva === "laboratorio" ? botoes : botoesImagem).map((btn) => (
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

      <ConteudoDinamico>
        <p>
          {abaAtiva === "laboratorio"
            ? {
                "3": "Não foi localizado nada no momento.",
                "6": "Não foi localizado nada no momento.",
                "12": "Não foi localizado nada no momento.",
              }[filtroAtivo]
            : {
                "3": "Nenhuma imagem disponível no momento",
                "6": "Nenhuma imagem disponível no momento",
                "12": "Nenhuma imagem disponível no momento",
              }[filtroAtivo]}
        </p>
      </ConteudoDinamico>
    </section>
  );
}