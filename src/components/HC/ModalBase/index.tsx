import { useRef, useEffect } from "react";
import type { ModalBaseProps } from "../../../types/HC/modalBase";

// Componente base de modal
export default function ModalBase({minW, px, py, className, children, onClose,}: ModalBaseProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialog.current) {
      dialog.current.showModal();
    }

    // Fechar o modal com tecla ESC
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") fechar();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const fechar = () => {
    if (dialog.current) dialog.current.close();
    if (onClose) onClose();
  };

  return (
    <dialog
      ref={dialog}
      onClose={fechar}
      className={`
        dialog-modal 
        min-w-[${minW}px]
        px-${px} py-${py}
        rounded-2xl inset-0
        m-auto outline-none
        flex flex-col items-center gap-3
        max-md:px-10 max-sm:min-w-90 max-sm:px-5
        max-[448px]:min-w-20 
        ${ className || ""}
      `}
    >
      {children}
    </dialog>
  );
}
