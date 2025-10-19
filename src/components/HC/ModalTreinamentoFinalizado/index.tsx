import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function ModalTreinamentoFinalizado() {
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
            max-w-250 p-6 rounded-2xl 
            inset-0 m-auto
            flex
            max-lg:flex-col max-lg:max-w-200
            max-md:mx-2
            max-sm:p-1
        "
    >
      <div className="
      w-1/2 flex flex-col gap-5 p-5
      max-lg:w-full max-lg:items-center
      ">
        <h2 className="text-4xl font-bold text-center">Fim do tutorial!</h2>
        <p className="w-[80%] text-lg max-lg:w-full">
            Você concluiu todas as etapas com sucesso! Sua opinião pode nos ajudar a melhorar ainda mais o CT-HC.
        </p>
        <h3 className="
        text-center font-bold text-xl mt-5 
        max-[437px]:text-start max-[437px]:text-lg
        ">
            Gostaria de deixar um feedback sobre sua experiência?
        </h3>
        <ul className="
        flex justify-around items-center
        max-lg:gap-12
        max-[437px]:flex-col
        ">
            <li>
                <Link 
                to=""
                className="
                bg-[var(--Color-blue-709CFF)] text-[var(--color-white)]
                px-5 py-2 rounded-[10px] border-2 border-[var(--color-blue)]
                hover:bg-[var(--color-blue)] duration-300 outline-none
                "
                title="Clique aqui para dar o Feedback"
                >
                    Sim, quero contribuir!
                </Link>
            </li>
            <li>
                <button
                className="
                bg-[var(--color-grey-818181)] text-[var(--color-gray)]
                px-4 py-1.5 rounded-[10px] border-2 border-[var(--color-grey)]
                hover:bg-[var(--color-grey)] duration-300 outline-none
                hover:text-[var(--color-white)] cursor-pointer
                "
                onClick={fecharModal}
                title="Clique aqui para fechar"
                >
                    Agora não
                </button>
            </li>
        </ul>
      </div>
      <div className="
      w-1/2
      max-lg:w-full
      ">
        <figure className="flex justify-center items-center">
            <img 
            src="/check-icon.png"
            alt=""
            className="w-[65%] max-lg:w-[25%] max-lg:mt-2" />
        </figure>
      </div>
    </dialog>
  );
}
