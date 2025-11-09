import { Link } from "react-router-dom"

export default function EntrarConta() {
    return (
        <section 
        className="w-full min-h-screen bg-background-linear flex justify-center items-center px-5">
            <div className="bg-[var(--color-white-button-hover)] rounded-[20px] border-2 border-white p-6">
                <span className="flex justify-center mb-3 md:mb-5">
                    <img 
                    src="logo-hc-verde.png" 
                    alt=""
                    className="w-full" 
                    />
                </span>
                <span className="flex flex-col items-center gap-3">
                    <h1 className="text-white text-center text-4xl font-bold md:text-5xl">
                        Bem vindo de volta!
                    </h1>
                    <p className="text-white text-center text-2xl mb-7 md:text-3xl md:mb-10">
                        Insira seus dados para continuar.
                    </p>
                </span>
                <div className="flex flex-col items-center">
                    <form className="flex flex-col md:w-[70%]">
                            <label 
                            className="text-white text-3xl font-bold mb-3"
                            htmlFor="">E-mail ou CPF:</label>
                            <input
                            type="text"
                            placeholder="Digite seu E-mail ou CPF"
                            className="mb-10 rounded-[20px]
                            border-2 border-[var(--color-blue-0077C8)] p-2
                            bg-[var(--color-white-04)] 
                            placeholder:text-[var(--color-white-075)] text-[18px] font-bold outline-none
                            md:px-4" 
                            /> 
                            <label 
                            className="text-white text-3xl font-bold mb-3"
                            htmlFor="">Senha:</label>
                            <input
                            type="text"
                            placeholder="Digite sua senha"
                            className="mb-10 rounded-[20px]
                            border-2 border-[var(--color-blue-0077C8)] p-2
                            bg-[var(--color-white-04)] 
                            placeholder:text-[var(--color-white-075)] text-[18px] font-bold outline-none
                            md:px-4" 
                            /> 
                    </form>
                </div>
                <ul className="flex flex-col-reverse md:flex-row md:justify-between">
                    <li className="pt-8 text-center">
                        <Link 
                        to="/criarConta"
                        title="Clique aqui para seguir para a página de criar conta."
                        className="text-white text-2xl"
                        >
                            Não tem uma conta? <span className="font-bold md:hover:underline">Clique aqui.</span>
                        </Link>
                    </li>
                    <li className="">
                        <Link 
                        to="/hc"
                        title="Clique aqui para entrar."
                        className="
                        text-white text-center px-7 py-3 flex justify-self-center
                        border-2 border-white 
                        rounded-[30px] text-[24px]
                        md:hover:bg-[var(--color-white-button-hover)] md:duration-300"
                        >
                            Entrar
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}