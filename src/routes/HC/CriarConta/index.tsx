export default function CriarConta() {
    return (
    <section className="w-full min-h-screen bg-background-linear flex justify-center items-center px-80">
        <div className="w-full bg-[var(--color-white-button-hover)] rounded-[20px] border-2 border-white pr-7.5 pl-5 pt-7.5 pb-5">
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
            <form className="flex flex-col gap-5 items-start px-28">
                <label 
                className="text-white text-4xl font-bold"
                htmlFor="">Nome:</label>
                <input
                type="text"
                placeholder="Digite seu nome completo"
                className="w-[430px] px-5 py-3.5 rounded-[20px] 
                border-2 border-[var(--color-blue-0077C8)] 
                bg-[var(--color-white-04)] 
                placeholder:text-[var(--color-white-075)] text-[18px] font-bold" 
                /> 
                <label 
                className="text-white text-4xl font-bold"
                htmlFor="">E-mail:</label>
                <input
                type="text"
                placeholder="Digite seu E-mail"
                className="w-[430px] px-5 py-3.5 rounded-[20px] 
                border-2 border-[var(--color-blue-0077C8)] 
                bg-[var(--color-white-04)] 
                placeholder:text-[var(--color-white-075)] text-[18px] font-bold" 
                /> 
                
            </form>
        </div>
    </section>
    )
}