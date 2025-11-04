import { Link } from "react-router-dom";

export default function CriarConta() {
    return (
    <section 
    className="
    w-full min-h-screen bg-background-linear 
    flex justify-center items-center
    px-70"
    >
        <div className="w-full bg-[var(--color-white-button-hover)] rounded-[20px] border-2 border-white pr-7.5 pl-5 pt-7.5 pb-9">
            <div className="flex">
                <span className="w-1/2 flex flex-col items-center gap-5">
                    <h1 className="text-[var(--color-white)] text-6xl font-bold">
                        Boas Vindas!
                    </h1>
                    <p className="text-[var(--color-white)] text-4xl text-center">
                        Preencha seus dados para começar a usar nossos serviços.
                    </p>
                </span>
                <span className="w-1/2 flex justify-end">
                    <img 
                    src="logo-hc-verde.png" 
                    alt=""
                    className="2xl:w-[90%]"
                    />
                </span>
            </div>
            <div className="flex flex-col gap-[70px]">
                <form className="flex flex-wrap justify-around gap-10 items-start">
                    <div className="flex flex-col gap-5">
                        <label 
                        className="text-white text-4xl font-bold"
                        htmlFor="">Nome:</label>
                        <input
                        type="text"
                        placeholder="Digite seu nome completo"
                        className="w-[430px] px-5 py-3.5 rounded-[20px] 
                        border-2 border-[var(--color-blue-0077C8)] 
                        bg-[var(--color-white-04)] 
                        placeholder:text-[var(--color-white-075)] text-[18px] font-bold outline-none" 
                        /> 
                    </div>
                    <div className="flex flex-col gap-5">
                        <label 
                        className="text-white text-4xl font-bold"
                        htmlFor="">E-mail:</label>
                        <input
                        type="text"
                        placeholder="Digite seu E-mail"
                        className="w-[430px] px-5 py-3.5 rounded-[20px] 
                        border-2 border-[var(--color-blue-0077C8)] 
                        bg-[var(--color-white-04)] 
                        placeholder:text-[var(--color-white-075)] text-[18px] font-bold outline-none" 
                        /> 
                    </div>
                    <div className="flex flex-col gap-5">
                        <label 
                        className="text-white text-4xl font-bold"
                        htmlFor="">Senha:</label>
                        <input
                        type="text"
                        placeholder="Digite sua senha"
                        className="w-[430px] px-5 py-3.5 rounded-[20px] 
                        border-2 border-[var(--color-blue-0077C8)] 
                        bg-[var(--color-white-04)] 
                        placeholder:text-[var(--color-white-075)] text-[18px] font-bold outline-none" 
                        /> 
                    </div>
                    <div className="flex flex-col gap-5">
                        <label 
                        className="text-white text-4xl font-bold"
                        htmlFor="">CPF:</label>
                        <input
                        type="text"
                        placeholder="Digite seu CPF"
                        className="w-[430px] px-5 py-3.5 rounded-[20px] 
                        border-2 border-[var(--color-blue-0077C8)] 
                        bg-[var(--color-white-04)] 
                        placeholder:text-[var(--color-white-075)] text-[18px] font-bold outline-none" 
                        /> 
                    </div>
                </form>
            </div>
            <ul 
            className="
            flex justify-between 
            "
            >
                <li 
                className="
                pt-16 pl-3"
                >
                <Link 
                to="#"
                title="Clique aqui para seguir para a página de login da conta."
                className="text-white text-xl"
                >
                    Já tem uma conta? <span className="font-bold hover:underline duration-300">Clique aqui.</span>
                </Link>
                </li>
                <div className="pt-16 pl-3">
                <Link 
                to=""
                title="Clique aqui para entrar."
                className="
                text-white text-center px-7 py-3 
                border-2 border-white 
                rounded-[30px] text-[24px] 
                hover:bg-[var(--color-white-button-hover)] duration-300"
                >
                    Entrar
                </Link>
                </div>
            </ul>
        </div>
    </section>
    )
} 