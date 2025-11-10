import { useContraste } from "../../../context/ContrasteContext";

export default function CardExperiencia() {

  const { contrasteAtivo } = useContraste(); 

  return (
    <div
      className="
        w-full bg-[var(--light-blue)]
        flex px-2 py-5 rounded-3xl border-b-8
        border-[var(--Color-blue-709CFF)]
        max-[1110px]:hidden
        max-lg:flex max-lg:flex-col
        xl:flex
        "
    >
      <figure
        className="
            w-1/2 flex justify-center
            px-2 py-2 
            max-lg:w-full max-lg:flex max-lg:justify-center
            "
      >
        <img
          src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761574299/img-aceessibilidade_e2tw78.png"
          alt="Imagem de acessibilidade"
          className="w-[45%] max-lg:w-[20%]"
        />
      </figure>
      <div
        className={`
            w-full flex flex-col gap-5
            ${
              contrasteAtivo
              ? "text-[var(--color-black)]"
              : "text-[var(--color-black)]"
            }
          `}
      >
        <h3
          className="
                font-julius text-4xl font-semibold
                max-lg:text-3xl max-lg:text-center
                max-sm:text-2xl
                "
        >
          Torne sua experiência mais acessível!
        </h3>
        <p
          className="
                w-[80%] font-imprima ml-8 text-xl 
                xl:w-[70%] xl:text-2xl
                max-lg:w-full max-lg:text-center max-lg:ml-0
                max-sm:text-lg
                "
        >
          Personalize sua navegação! Clique aqui para acessar as opções de
          acessibilidade, saiba como ajustar a fonte, contraste e mais.
        </p>
      </div>
    </div>
  );
}
