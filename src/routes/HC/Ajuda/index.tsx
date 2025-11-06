import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TitleHC from "../../../components/HC/TitleHC";
import { perguntas } from "../../../data/HC/perguntas";
import { IoIosArrowDown } from "react-icons/io";
import TutorialHC from "../../../components/HC/TutorialHC";

export default function Ajuda() {

  const [isTreinamento, setIsTreinamento] = useState(false);
  
  useEffect(() => {
      const modoTreinamento = localStorage.getItem("modoTreinamento");
      if (modoTreinamento === "ajuda") {
      setIsTreinamento(true);
      localStorage.removeItem("modoTreinamento");
      }
  }, []);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Tutorial configurado para esta página
  const steps = [
      {
      target: ".manual-portal",
      content: "Clicando aqui aparecerá os manuais do portal HC",
      },
      {
      target: ".accordion-ajuda",
      content: "Aqui estão algumas dúvidas frequentes do portal",
      },
      {
      target: ".abrir-accordion",
      content: "Clique em qualquer lugar desejado para abrir a pergunta",
      },
  ];  

  return (
    <section className="flex flex-col gap-3">
      <TitleHC title="Ajuda / Manuais" />

      {/* TutorialHC - exibe o guia passo a passo */}
      {isTreinamento && <TutorialHC steps={steps} />}

      <div className="mx-10">
        <Link
          to="/hc/manuaisDoPortal"
          title="Clique aqui para ver os manuais do portal"
          className="
            manual-portal
            flex justify-center w-full py-1 rounded-full
            text-[var(--color-blue-1CB1B1)] border-2 
            hover:bg-[var(--color-cyan-hover)] duration-300
          "
        >
          Manuais do Portal
        </Link>

        <ul className="accordion-ajuda mt-4 flex flex-col gap-2">
            {perguntas.map((item, index) => (
            <li key={index}>
                <button
                onClick={() => toggleCard(index)}
                className={`
                    abrir-accordion
                    w-full text-left p-4 rounded-lg shadow-sm 
                    flex justify-between items-center cursor-pointer
                    hover:bg-gray-50 duration-200
                `}
                >
                <span
                    className={`font-medium ${
                    openIndex === index ? "text-[var(--color-blue)]" : "text-[var(--color-grey-1e2939)]"
                    }`}
                >
                    {item.pergunta}
                </span>
                <span
                    className={`transform transition-transform duration-300 ${
                    openIndex === index
                        ? "rotate-180 text-[var(--color-blue)]"
                        : "rotate-0 text-[var(--color-grey-1e2939)]"
                    }`}
                >
                    <IoIosArrowDown />
                </span>
                </button>

                <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === index
                    ? "max-h-96 opacity-100 py-4 px-6 border-b bg-[var(--color-white)]"
                    : "max-h-0 opacity-0 py-0 px-6"
                }`}
                >
                <p className="text-[var(--color-grey-1e2939)] text-[15px] leading-relaxed">
                    {item.resposta}
                </p>
                </div>
            </li>
            ))}
        </ul>
      </div>
    </section>
  );
}