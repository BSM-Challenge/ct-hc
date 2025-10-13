import { Link } from "react-router-dom";

export default function CardTreinamento() {
  return (
    <div
      className="
        flex flex-col gap-10 w-full
        bg-[var(--light-blue)] rounded-4xl px-6 py-5
        border-b-8 border-[var(--color-blue-82abff)]
        lg:flex-row lg:items-center
      "
    >
      <figcaption
        className="
          flex justify-center items-center mb-5
          lg:mb-0
        "
      >
        <img
          src="/logo-ct-hc-azul.png"
          alt="Logo do CTHC"
          className="
            w-1/2
            sm:w-1/3 lg:w-full
          "
        />
      </figcaption>

      <div
        className="
          flex flex-col w-full gap-6 text-center
          lg:text-left
        "
      >
        <h2
          className="
            text-[var(--color-blue-1D509F)] text-2xl font-julius font-bold text-center
            sm:text-3xl lg:text-4xl xl:text-5xl
          "
        >
          Centro de Treinamento do Hospital das Clínicas
        </h2>

        <p
          className="
            text-lg font-imprima max-w-[70ch]
            sm:text-2xl
          "
        >
          Clique aqui para iniciar o tutorial do CT-HC, escolha a página que
          deseja visitar e vamos te orientar!
        </p>

        <div
          className="
            flex flex-col justify-center gap-18
            sm:flex-row max-sm:gap-4
          "
        >
          <Link
            to="/"
            className="
              py-3 px-6
              bg-[var(--color-blue-1277BD)] text-[var(--color-white)] rounded-2xl
              text-base font-imprima font-bold
              hover:bg-[var(--color-blue-1D509F)] duration-300
              max-lg:text-lg
            "
            title="Ver o que é o CT-HC"
          >
            O que é o CT-HC?
          </Link>

          <Link
            to=""
            className="
              py-3 px-6
              bg-[var(--color-blue-1277BD)] text-[var(--color-white)] rounded-2xl
              text-base font-imprima font-bold
              hover:bg-[var(--color-blue-1D509F)] duration-300
              max-lg:text-lg
            "
            title="Clique para iniciar o treinamento"
          >
            Iniciar Treinamento
          </Link>
        </div>
      </div>
    </div>
  );
}
