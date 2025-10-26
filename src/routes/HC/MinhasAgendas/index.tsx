import { useState } from "react";
import TitleHC from "../../../components/HC/TitleHC";
import { RiCheckLine } from "react-icons/ri";
import ConteudoDinamico from "../../../components/HC/ConteudoDinamico";

type Filtro = "3" | "6" | "12" | "6a";

export default function MinhasAgendas() {
  const [filtroAtivo, setFiltroAtivo] = useState<Filtro>("3");

  const botoes: { label: string; value: Filtro; mensagem:string }[] = [
    { label: "Próximos 3 meses", value: "3", mensagem: "Você não possui agendas nos próximos 3 meses." },
    { label: "Próximos 6 meses", value: "6", mensagem: "Você não possui agendas nos próximos 6 meses." },
    { label: "Próximos 12 meses", value: "12", mensagem: "Você não possui agendas nos próximos 12 meses." },
    { label: "Últimos 6 meses", value: "6a", mensagem: "Você não possui agendas nos últimos 6 meses." },
  ];

  return (
    <section className="flex flex-col min-h-full">
      <TitleHC title="Minhas agendas e reagendamentos" />
      <ul className="flex justify-center gap-7">
        {botoes.map((botao) => (
          <li key={botao.value}>
            <button
              onClick={() => setFiltroAtivo(botao.value)}
              aria-pressed={filtroAtivo === botao.value}
              className={`
                flex items-center gap-2 px-3 py-1 rounded-md transition
                cursor-pointer mt-10
                ${
                  filtroAtivo === botao.value
                    ? "bg-[var(--color-blue)] text-[var(--color-white)]"
                    : "border border-[var(--color-grey)] hover:bg-[var(--color-grey-hover-2)]"
                }
              `}
            >
              {filtroAtivo === botao.value && (
                <span aria-hidden="true">
                  <RiCheckLine />
                </span>
              )}
              {botao.label}
            </button>
          </li>
        ))}
      </ul>

      <ConteudoDinamico>
        <p>
            {botoes.find(botao => botao.value === filtroAtivo)?.mensagem}
        </p>
      </ConteudoDinamico>
    </section>
  );
}