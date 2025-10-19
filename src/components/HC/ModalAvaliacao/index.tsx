import { useEffect, useRef } from "react";
import { avaliacoes } from "../../../data/HC/avaliacoes";

export default function ModalAvaliacao() {
  const dialog = useRef<HTMLDialogElement>(null);

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
        "
    >
        <h2 className="text-4xl font-bold text-[var(--color-blue)]">
            Avalie-nos!
        </h2>
        <p className="text-xl">Como foi sua experiência durante o tutorial?</p>
        <ul className="flex gap-10 mt-6">
            {avaliacoes.map((avaliacao) => (
              <li>
                <figure 
                className="flex flex-col items-center gap-1 cursor-pointer" 
                title={avaliacao.titleMessage}
                >
                  <img src={avaliacao.img} alt="" />
                  <figcaption>{avaliacao.text}</figcaption>
                </figure>
              </li>
            ))}
        </ul>
    </dialog>
  );
}