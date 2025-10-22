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
            ${abaAtiva === "laboratorio" 
                ? "text-[var(--color-blue)] font-semibold hover:bg-[var(--color-blue-hover)] border-b-2 border-[var(--color-blue)] hover:border-b-2 hover:border-[var(--color-blue)]"
                : "text-[--color-gray] hover:bg-[var(--color-grey-hover-2)] hover:border-b-2 hover:border-[var(--color-grey-hover)]"
                }`}
            >
          <FaMicroscope size={28} />
          <span>Laboratório</span>
        </button>

        <button
          onClick={() => setAbaAtiva("imagem")}
          className={`flex flex-col items-center px-4 py-2 rounded-md transition w-1/2 cursor-pointer
            ${abaAtiva === "imagem"
                 ? "text-[var(--color-blue)] font-semibold hover:bg-[var(--color-blue-hover)] hover:border-b-2 hover:border-[var(--color-blue)]"
                 : "text-[--color-gray] hover:bg-[var(--color-grey-hover-2)] hover:border-b-2 hover:border-[var(--color-grey-hover)]"
                }`}
        >
          <BiSolidImageAlt  size={28} />
          <span>Imagem</span>
        </button>
      </div>
    </section>
  );
}