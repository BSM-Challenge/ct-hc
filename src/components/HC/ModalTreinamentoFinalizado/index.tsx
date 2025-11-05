import ModalBase from "../ModalBase";
import ButtonCinza from "../ButtonCinza";
import ButtonAzulAcao from "../ButtonAzulAcao";

interface ModalTreinamentoFinalizadoProps {
  onClose: () => void;  // Vai fechar o modal
  onFeedback: () => void;  // Vai abrir o modal de avaliação
}

export default function ModalTreinamentoFinalizado({ onClose, onFeedback,}: ModalTreinamentoFinalizadoProps) {
  return (
    <ModalBase
      px={6}
      py={6}
      className="
        flex flex-row max-w-250
        max-lg:flex-col max-lg:max-w-200
        max-md:mx-2
        max-sm:p-1
      "
      onClose={onClose}
    >
      <div
        className="
          w-1/2 flex flex-col gap-5 p-5
          max-lg:w-full max-lg:items-center
        "
      >
        <h2 className="text-4xl font-bold text-center text-[var(--color-blue)]">
          Fim do tutorial!
        </h2>

        <p className="w-[90%] text-lg text-center max-lg:w-full">
          Você concluiu todas as etapas com sucesso! Sua opinião pode nos
          ajudar a melhorar ainda mais o CT-HC.
        </p>

        <h3
          className="
            text-center font-bold text-xl mt-5 
            max-[437px]:text-start max-[437px]:text-lg
          "
        >
          Gostaria de deixar um feedback sobre sua experiência?
        </h3>

        <ul
          className="
            flex justify-around items-center 
            max-lg:gap-12
            max-[437px]:flex-col max-[437px]:gap-4
          "
        >
          <li>
          <ButtonAzulAcao
            onClick={onFeedback}
            titleMessage="Clique aqui para deixar seu feedback"
            className="px-2 py-2 text-xl cursor-pointer"
          >
            Sim, quero contribuir!
          </ButtonAzulAcao>
          </li>
          <li>
            <ButtonCinza
              onClick={onClose}
              titleMessage="Clique aqui para fechar o modal"
              className="px-8 py-2 text-xl cursor-pointer"
            >
              Agora não
            </ButtonCinza>
          </li>
        </ul>
      </div>
      <div className="w-1/2 max-lg:w-full">
        <figure className="flex justify-center items-center">
          <img
            src="/icon-check.png"
            alt="Ícone de sucesso"
            className="w-[65%] max-lg:w-[25%] max-lg:mt-4"
          />
        </figure>
      </div>
    </ModalBase>
  );
}
