import { Link } from "react-router-dom";

export default function Apresentacao() {
  return (
    <section
      className="
            w-full min-h-screen bg-background-linear justify-center px-15 py-18 text-[var(--color-white)]
            xl:px-45
            lg:px-20
            md:px-0
            sm:px-0
            2xl:px-30
            max-2xl:py-18
        "
    >
      <div
        className="
            flex flex-col justify-between items-center
            gap-10
            "
      >
        <h1 className="font-bold 2xl:text-8xl sm:text-7xl text-[32px]">
            Seja bem-vindo!
        </h1>
        <p className="
        text-center
        text-[20px]
        sm:text-4xl
        2xl:text-6xl
        ">
            Faça Login ou cadastre-se para aproveitar os recursos disponíveis.
        </p>
        <span className="
        bg-[var(--color-white-button-hover)] rounded-[10px] my-3 sm:my-14
        flex justify-center
        max-2xl:max-w-[397px]
        ">
            <img 
            src="logo-hc-verde.png" 
            alt=""
            className="
            max:2xl:w-[90%]
            " 
            />
        </span>
        <nav className="mt-3">
            <ul className="flex flex-col sm:flex-row gap-10 sm:gap-12">
                <li>
                    <Link 
                    to="" 
                    className="
                    bg-[var(--color-white)] text-[var(--color-blue-0077C8)]
                    px-3 py-1 2xl:px-8 2xl:py-3 sm:px-5 rounded-full font-bold text-[24px] sm:text-3xl 
                    hover:text-[var(--color-white)] 
                    hover:bg-[var(--color-blue-2563EB)] 
                    duration-300
                    outline-none
                    ">
                        Entrar na conta
                    </Link>
                </li>
                <li>
                    <Link 
                    to="" 
                    className="
                    text-[var(--color-white)]
                    border-1
                    px-3 py-1 2xl:px-8 2xl:py-3 sm:px-5 rounded-full font-bold text-[24px] sm:text-3xl 
                    hover:bg-[var(--color-white-button-hover)] 
                    duration-300
                    outline-none
                    ">
                        Criar uma conta
                    </Link>
                </li>
            </ul>
        </nav>
      </div>
    </section>
  );
}
