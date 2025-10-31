import { Link } from "react-router-dom";

export default function Apresentacao() {
  return (
    <section
      className="
            w-full min-h-screen bg-background-linear px-45 py-18 text-[var(--color-white)]
            xl:px-45
            lg:px-20
            md:px-0
            sm:px-0
            max-2xl:py-18
        "
    >
      <div
        className="
            flex flex-col justify-between items-center
            gap-10
            "
      >
        <h1 className="font-bold text-8xl">
            Seja bem-vindo!
        </h1>
        <p className="
        text-center text-5xl px-50
        max-2xl:text-3xl
        ">
            Faça Login ou cadastre-se para aproveitar os recursos disponíveis.
        </p>
        <span className="
        bg-[var(--color-white-button-hover)] rounded-[10px] my-3
        flex justify-center
        max-2xl:max-w-[397px]
        ">
            <img 
            src="logo-hc-verde.png" 
            alt=""
            className="max-2xl:w-[90%]" 
            />
        </span>
        <nav className="mt-3">
            <ul className="flex gap-16">
                <li>
                    <Link 
                    to="" 
                    className="
                    bg-[var(--color-white)] text-[var(--color-blue-0077C8)]
                    px-8 py-3 rounded-full font-bold text-3xl
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
                    px-8 py-3 rounded-full font-bold text-3xl 
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
