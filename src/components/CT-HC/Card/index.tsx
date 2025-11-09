import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { Integrante } from "../../../types/CT-HC/integrante";

export default function Card({
  nome,
  img,
  posicaoImg,
  descricao,
  rm,
  turma,
  linkGithub,
  linkLinkedin,
}: Integrante) {
  useEffect(() => {
    function handleScroll() {
      const cards = document.querySelectorAll(".card-observe");

      setTimeout(() => {
        cards.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
            el.classList.add("animate-fade-in-up");
            el.classList.remove("opacity-0");
          }
        });

      }, 200);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Card */}
      <div
        className="
          relative flex flex-col items-center max-w-6xl w-full p-0
          bg-[var(--Color-blue-709CFF)] rounded-[40px] 
          shadow-[15px_15px_20px_var(--shadow-blue-70)]
          opacity-0 card-observe transition-all
          lg:flex-row lg:items-start lg:p-8
          sm:rounded-[60px]
          "
      >
        {/* Foto */}
        <div
          className={`relative flex-shrink-0 mb-6 lg:mb-0 ${
            posicaoImg === "right" ? "lg:order-2 lg:ml-[-130px]" : "lg:mr-[-130px]"
          }`}
        >
          <img
            className="
            w-40 h-40 sm:w-60 sm:h-60 lg:w-[300px] lg:h-[300px]
            object-cover rounded-full border-[6px] sm:border-[8px]
            border-[var(--color-blue)] shadow-2xl z-10"
            src={img}
            alt={`Foto de ${nome}`}
          />
        </div>

        {/* Conteúdo */}
        <div
          className={`flex flex-col text-[var(--color-white)] w-full ${
            posicaoImg === "right" ? "mr-36" : "ml-36"
          }
          max-lg:${
            posicaoImg === "right" ? "mr-0" : "ml-0"
          }

          `}
        >
        
          {/* Nome */}
          <div className={`
            flex w-full ${posicaoImg === "right" ? "justify-end" : "justify-start"}
            max-lg:justify-center
            `}>
            <h2 
            className={`
              lg:${posicaoImg === "right" ? "ml-20" : "text-start"}
              lg:w-full
            -ml-5 px-4 py-2  
            text-2xl font-bold bg-[var(--color-blue)]
            rounded-[10px] inline-block text-center
            max-lg:bg-none
            max-lg:w-[70%]
            sm:text-3xl lg:text-4xl
          `}>
              {nome}
            </h2>
          </div>

          {/* Descrição */}
          <p className={` ml-4 mt-4 leading-relaxed px-1 
          lg:text-xl
          sm:px-4 sm:text-lg
          `}>
            {descricao}
          </p>

          {/* RM e Turma + Contato */}
          <div className="
          flex flex-col lg:flex-row justify-between gap-6
          px-1 sm:px-4 max-w-[95%] ml-4 mt-10
          ">
            <div>
              <p className="text-base sm:text-lg lg:text-xl">
                <span className="font-bold">RM: </span>
                {rm}
              </p>
              <p className="text-base sm:text-lg lg:text-xl">
                <span className="font-bold">Turma: </span>
                {turma}
              </p>
            </div>

            <div className="
            flex flex-col gap-4 items-center
            max-lg:items-end
            max-lg:py-5
            ">
              <span className="font-bold text-base sm:text-lg lg:text-xl">
                Entre em contato comigo:
              </span>
              <div className="flex gap-6 flex-wrap">
                <a
                  href={linkGithub}
                  target="_blank"
                  className="
                  flex items-center gap-2
                  bg-[var(--color-black)] text-[var(--color-white)]
                  px-3 py-2 rounded-lg hover:opacity-80 transition font-bold"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={linkLinkedin}
                  target="_blank"
                  className="
                  flex items-center gap-2 bg-[var(--color-blue-0077B5)]
                  text-[var(--color-white)] px-3 py-2 rounded-lg hover:opacity-80
                   transition font-bold"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}