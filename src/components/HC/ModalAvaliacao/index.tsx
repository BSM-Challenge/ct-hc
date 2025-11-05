import { useState } from "react";
import { avaliacoes } from "../../../data/HC/avaliacoes";
import ButtonCinza from "../ButtonCinza";
import ModalBase from "../ModalBase";

interface ModalAvaliacaoProps {
  onClose: () => void; // função para fechar o modal
}

export default function ModalAvaliacao({ onClose }: ModalAvaliacaoProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [comentario, setComentario] = useState("");

  const handleEnviar = () => {
    console.log("Avaliação enviada:", {
      avaliacao: avaliacoes[selectedIndex ?? -1]?.text || "Sem avaliação",
      comentario,
    });
    onClose();
  };

  return (
    <ModalBase
      minW={150}
      className="
        flex flex-col items-center gap-3
        px-15 py-7
        max-md:px-10
        max-sm:min-w-90 max-sm:px-5
        max-[448px]:min-w-20
      "
      onClose={onClose}
    >
      <h2 className="text-4xl font-bold text-[var(--color-blue)] text-center">
        Avalie-nos!
      </h2>

      <p className="text-xl text-center max-sm:text-lg">
        Como foi sua experiência durante o tutorial?
      </p>

      <ul
        className="
          flex gap-10 mt-6 max-[491px]:flex-col
          max-[491px]:w-full max-[491px]:justify-start
        "
      >
        {avaliacoes.map((avaliacao, index) => (
          <li key={index}>
            <figure
              className="
                flex flex-col items-center gap-1 cursor-pointer
                max-[491px]:flex-row max-[491px]:gap-3
              "
              title={avaliacao.titleMessage}
              onClick={() => setSelectedIndex(index)}
            >
              <div
                className={`text-5xl duration-200 ${
                  selectedIndex === index
                    ? avaliacao.activeColor
                    : `text-[var(--color-white-emoji)] ${avaliacao.hoverColor}`
                } max-sm:text-3xl`}
              >
                {avaliacao.icon}
              </div>
              <figcaption className="text-base">
                {avaliacao.text}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="flex flex-col w-full mt-10 gap-2">
        <h3 className="text-xl max-[448px]:text-lg">
          Gostaria de deixar um comentário?
        </h3>
        <textarea
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          className="
            resize-none w-full max-h-20 px-3 py-2 rounded-[10px] outline-none
            bg-[var(--color-blue-C3D9FF)] border-3 border-[var(--color-blue)]
            shadow-[0_4px_8px_var(--light-blue)] text-base
          "
          placeholder="Digite uma mensagem..."
        ></textarea>
      </div>

      <ul
        className="
          flex justify-around w-full mt-7
          max-[448px]:flex-col max-[448px]:gap-3
          max-[448px]:justify-center max-[448px]:w-full
        "
      >
        <li>
          <ButtonCinza
            onClick={onClose}
            px={10}
            py={2}
            titleMessage="Cancelar avaliação"
            className="text-2xl max-[448px]:w-full"
          >
            Cancelar
          </ButtonCinza>
        </li>
        <li>
          <button
            onClick={handleEnviar}
            className="
              bg-[var(--color-blue)] text-[var(--color-white)]
              px-10 py-2 rounded-[10px] border-2 border-[var(--color-blue)]
              hover:bg-[var(--color-blue-82abff)] duration-300 outline-none font-bold
              text-2xl cursor-pointer
              max-[448px]:w-full
            "
            title="Enviar avaliação"
          >
            Enviar
          </button>
        </li>
      </ul>
    </ModalBase>
  );
}