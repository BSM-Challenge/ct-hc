import { Link } from "react-router-dom";

export default function ErrorHC() {
    return (
        <section className="
            w-full h-[100vh] bg-background-linear px-45 py-24 text-[var(--color-white)]
            xl:px-45
            lg:px-20
            md:px-0
            sm:px-0
            max-sm:px-1
        ">
            <div className="
            flex flex-col justify-between items-center
            w-full h-full px-42
            sm:px-6
            max-sm:px-0
            ">
                <h1 className="
                text-7xl font-bold text-center
                max-sm:text-4xl
                ">
                  Página não encontrada!
                </h1>
                <ul className="
                flex flex-col gap-10 max-w-220
                bg-[var(--color-white-button-hover)] px-10 py-6
                text-2xl rounded-[10px]
                max-sm:text-xl
                ">
                    <li>Parece que a página que você está tentando acessar não existe ou não foi encontrada.</li>
                    <li>
                        <ul className="ml-10 list-disc">
                            <li>Verifique se o endereço digitado está correto.</li>
                            <li>Ou volte para a página inicial.</li>
                        </ul>
                    </li>
                </ul>
                <div className="flex justify-center">
                    <Link 
                     to="/hc"
                     className="
                     bg-[var(--color-white)] text-[var(--color-blue)]
                     py-2 px-9 rounded-full font-bold text-2xl
                     max-sm:text-xl
                     "
                     title="Voltar para a página inicial"
                     >
                        Voltar para a Página incial
                    </Link>
                </div>
            </div>
        </section>
    )
}