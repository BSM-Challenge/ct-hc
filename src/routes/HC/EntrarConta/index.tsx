import { Link } from "react-router-dom"

export default function EntrarConta() {
    return (
        <section 
        className="w-full min-h-screen bg-background-linear flex justify-center items-center px-5">
            <div className="bg-[var(--color-white-button-hover)] rounded-[20px] border-2 border-white p-6">
                <span className="flex justify-center mb-3">
                    <img 
                    src="logo-hc-verde.png" 
                    alt=""
                    className="w-full" 
                    />
                </span>
                <span className="flex flex-col items-center gap-3">
                    <h1 className="text-white text-center text-4xl font-bold">
                        Bem vindo de volta!
                    </h1>
                    <p className="text-white text-center text-2xl mb-7">
                        Insira seus dados para continuar.
                    </p>
                </span>
                <div className="flex flex-col items-start">
                    <form className="flex flex-wrap">
                            <label 
                            className="text-white text-3xl font-bold mb-3"
                            htmlFor="">E-mail ou CPF:</label>
                            <input
                            type="text"
                            placeholder="Digite seu E-mail ou CPF"
                            className="mb-10 rounded-[20px]
                            border-2 border-[var(--color-blue-0077C8)] p-2
                            bg-[var(--color-white-04)] 
                            placeholder:text-[var(--color-white-075)] text-[18px] font-bold outline-none" 
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
                            placeholder:text-[var(--color-white-075)] text-[18px] font-bold outline-none" 
                            /> 
                    </form>
                </div>
                <ul className="flex flex-col-reverse">
                    <li 
                        className="pt-8 text-center">
                        <Link 
                        to="#"
                        title="Clique aqui para seguir para a página de criar conta."
                        className="text-white text-2xl"
                        >
                            Não tem uma conta? <span className="font-bold">Clique aqui.</span>
                        </Link>
                    </li>
                    <div className="">
                        <Link 
                        to=""
                        title="Clique aqui para entrar."
                        className="
                        text-white text-center px-7 py-3 flex justify-self-center
                        border-2 border-white 
                        rounded-[30px] text-[24px]"
                        >
                            Entrar
                        </Link>
                    </div>
                </ul>
            </div>
        </section>
    )
}