import { useEffect, useRef } from "react";

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
            min-w-250 p-6 rounded-2xl 
            inset-0 m-auto
            flex justify-between
        "
    >
      <div className="
      w-1/2 bg-amber-200
      flex justify-center
      ">
        <h2>Fim do tutorial!</h2>
      </div>
      <div className="w-1/2 bg-amber-300">
        <figure>
            <img src="" alt="" />
        </figure>
      </div>
    </dialog>
  );
}
