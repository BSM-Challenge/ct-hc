import { useEffect, useRef, useState } from "react";
import { avaliacoes } from "../../../data/HC/avaliacoes";
import ButtonCinza from "../ButtonCinza";

export default function ModalAvaliacao() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (dialog.current) {
      dialog.current.style.display = "flex";
      dialog.current.showModal();

      const fecharComESC = () => {
        if (dialog.current) {
          dialog.current.style.display = "none";
        }
      };

      dialog.current.addEventListener("close", fecharComESC);

      return () => dialog.current?.removeEventListener("close", fecharComESC);
    }
  }, []);

  const fecharModal = () => {
    if (dialog.current) {
        dialog.current.close();
    }
};

  return (
    <dialog
      ref={dialog}
      className="
            dialog-modal 
            min-w-150 px-15 py-7 rounded-2xl 
            inset-0 m-auto outline-none
            flex flex-col items-center gap-3
            max-md:px-10
            max-sm:min-w-90 max-sm:px-5
            max-[448px]:min-w-20
        "
    >
        <h2 className="text-4xl font-bold text-[var(--color-blue)]">
            Avalie-nos!
        </h2>
        <p className="text-xl max-sm:text-lg">Como foi sua experiência durante o tutorial?</p>
        <ul className="
        flex gap-10 mt-6 max-[491px]:flex-col
        max-[491px]:w-full max-[491px]:justify-start
        ">
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
                  {/* Ícone com cor condicional */}
                  <div
                    className={`text-4xl duration-200 ${
                      selectedIndex === index
                        ? avaliacao.activeColor
                        : `text-[var(--color-white-emoji)] ${avaliacao.hoverColor}`
                    }
                    max-sm:text-2xl
                    
                    `}
                  >
                    {avaliacao.icon}
                  </div>
                  <figcaption>{avaliacao.text}</figcaption>
                </figure>
              </li>
            ))}
        </ul>
        <div className="flex flex-col w-full mt-10 gap-2">
          <h3 className="text-xl max-[448px]:text-lg">Gostaria de deixar um comentário?</h3>
          <textarea
          className="
          resize-none w-full max-h-12 px-2 py-2 rounded-[10px] outline-none
          bg-[var(--color-blue-C3D9FF)] border-3 border-[var(--color-blue)]
          shadow-[0_4px_8px_var(--light-blue)]
          "
          placeholder="Digite uma mensagem">
          </textarea>
        </div>
        <ul className="
        flex justify-around w-full mt-5
        max-[448px]:flex-col max-[448px]:gap-3
        max-[448px]:justify-center max-[448px]:w-full
        ">
          <li>
            <ButtonCinza
              onClick={fecharModal}
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
              className="
                  bg-[var(--Color-blue-709CFF)] text-[var(--color-white)]
                  px-10 py-2 rounded-[10px] border-2 border-[var(--color-blue)]
                  hover:bg-[var(--color-blue)] duration-300 outline-none font-bold
                  text-2xl cursor-pointer
                  max-[448px]:w-full
                  "
                title="Enviar avaliação"
                onClick={fecharModal}
              >
                Enviar
             </button>
          </li>
        </ul>
    </dialog>
  );
}