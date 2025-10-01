import { Link } from "react-router-dom";

export default function CardTreinamento() {
  return (
    <div
      className="
        flex gap-15
        bg-[var(--light-blue)] rounded-4xl px-8 py-11
        border-b-8 border-[var(--color-blue-82abff)]
        "
    >
      <figcaption>
        <img src="/logo-ct-hc-azul.png" alt="Logo do CTHC" className="w-100" />
      </figcaption>
      <div className="flex flex-col w-full gap-8">
            <div className="flex justify-center">
                <h2 className="text-[var(--color-blue-1D509F)] text-4xl font-julius font-bold w-[22ch]">
                  Centro de Treinamento do Hospital das Clínicas
                </h2>
            </div>
            <p className="w-[42ch] text-2xl font-imprima">
                Clique aqui para iniciar o tutorial do CT-HC, escolha a página que
                deseja visitar e vamos te orientar!
            </p>
            <div className=" flex justify-around">
                <Link 
                    to=""
                    className="
                    py-4 px-10
                    bg-[var(--color-blue-1277BD)] text-[var(--color-white)] rounded-2xl
                    text-xl
                    font-imprima font-bold
                "
                >
                    O que é o CT-HC?
                </Link>
                <Link 
                    to=""
                    className="
                    py-4 px-10
                    bg-[var(--color-blue-1277BD)] text-[var(--color-white)] rounded-2xl
                    text-xl
                    font-imprima font-bold
                "
                >
                    Iniciar Treinamento
                </Link>
            </div>
      </div>
    </div>
  );
}
