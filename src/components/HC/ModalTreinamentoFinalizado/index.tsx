import { useState } from "react";
import ModalBase from "../ModalBase";
import ButtonAzul from "../ButtonAzul";
import ButtonCinza from "../ButtonCinza";

export default function ModalTreinamentoFinalizado() {
  const [aberto, setAberto] = useState(true);

  const fecharModal = () => setAberto(false);

  if (!aberto) return null;

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
      onClose={fecharModal}
    >
      <div
        className="
          w-1/2 flex flex-col gap-5 p-5
          max-lg:w-full max-lg:items-center
        "
      >
        <h2 className="text-4xl font-bold text-center">Fim do tutorial!</h2>
        <p className="w-[80%] text-lg max-lg:w-full">
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
            max-[437px]:flex-col
          "
        >
          <li>
            <ButtonAzul
              rota="*"
              titleMessage="Clique aqui para deixar seu feedback"
            >
              Sim, quero contribuir!
            </ButtonAzul>
          </li>
          <li>
            <ButtonCinza
              onClick={fecharModal}
              titleMessage="Clique aqui para fechar o modal"
              className="py-1.5"
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
            className="w-[65%] max-lg:w-[25%] max-lg:mt-2"
          />
        </figure>
      </div>
    </ModalBase>
  );
}
