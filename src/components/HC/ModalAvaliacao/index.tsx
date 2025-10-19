import { useEffect, useRef } from "react";

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
            min-w-150 p-6 rounded-2xl 
            inset-0 m-auto
            flex flex-col
        "
    >
        <h2>Avalie-nos!</h2>
        <p>Como foi sua experiência durante o tutorial?</p>
    </dialog>
  );
}