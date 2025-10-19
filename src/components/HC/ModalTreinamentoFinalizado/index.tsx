import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function ModalTreinamentoFinalizado() {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialog.current?.showModal();
  }, []);

  const fecharModal = () => dialog.current?.close();

  return (
    <dialog
      ref={dialog}
      className="
            dialog-modal 
            max-w-250 p-6 rounded-2xl 
            inset-0 m-auto
            flex
        "
    >
      <div className="w-1/2 flex flex-col gap-5 p-5">
        <h2 className="text-4xl font-bold text-center">Fim do tutorial!</h2>
        <p className="w-[80%] text-lg">
            Você concluiu todas as etapas com sucesso! Sua opinião pode nos ajudar a melhorar ainda mais o CT-HC.
        </p>
        <h3 className="text-center font-bold text-xl mt-5">
            Gostaria de deixar um feedback sobre sua experiência?
        </h3>
        <ul className="flex justify-around items-center">
            <li>
                <Link 
                to=""
                className="
                bg-[var(--Color-blue-709CFF)] text-[var(--color-white)]
                px-5 py-2 rounded-[10px] border-2 border-[var(--color-blue)]
                hover:bg-[var(--color-blue)] duration-300
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
                hover:bg-[var(--color-grey)] duration-300
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
      <div className="w-1/2">
        <figure className="flex justify-center items-center">
            <img 
            src="/check-icon.png"
            alt=""
            className="w-[65%]" />
        </figure>
      </div>
    </dialog>
  );
}
