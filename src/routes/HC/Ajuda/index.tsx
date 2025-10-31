import { useState } from "react";
import { Link } from "react-router-dom";
import TitleHC from "../../../components/HC/TitleHC";
import { perguntas } from "../../../data/HC/perguntas";
import { IoIosArrowDown } from "react-icons/io";

export default function Ajuda() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="flex flex-col gap-3">
      <TitleHC title="Ajuda / Manuais" />

      <div className="mx-10">
        <Link
          to=""
          title="Clique aqui para ver os manuais do portal"
          className="
            flex justify-center w-full py-1 rounded-full
            text-[var(--color-blue-1CB1B1)] border-2 
            hover:bg-[var(--color-cyan-hover)] duration-300
          "
        >
          Manuais do Portal
        </Link>

        <ul className="mt-4 flex flex-col gap-2">
            {perguntas.map((item, index) => (
            <li key={index}>
                <button
                onClick={() => toggleCard(index)}
                className={`
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