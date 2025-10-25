export default function SectionSobre() {
    return (
        <section className="
        bg-[var(--color-white)] min-h-screen p-4
         flex flex-col gap-1"
         id="sobre"
         >
            <div className="w-full flex flex-col gap-7 lg:w-[45%]">
                <h2 
                className="text-6xl text-[var(--dark-blue-title)] text-start font-bold lg:text-center"
                >
                    Sobre o projeto
                </h2>
                <p className="text-2xl lg:text-3xl mb-8">
                    O <span className="text-[var(--dark-blue-title)] font-bold">Centro de Treinamento do Hospital das Clínicas (CT-HC) </span> 
                    foi criado para tornar o uso do Portal do Paciente mais fácil,
                    seguro e intuitivo.
                </p>
            </div>
            <div className="w-full flex flex-col items-center justify-around gap-15 lg:flex-row lg:justify-between">
                <figcaption>
                    <img src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761433387/img-hospital_ygvzzr.png" alt="Imagem aérea do Hospital das Clínicas" className="h-[450px]"/>
                </figcaption>
                <div className="flex flex-col items-start gap-13 my-5 lg:gap-10">
                    <div className="flex justify-start lg:justify-center lg:text-4xl">
                        <h3 
                        className="text-3xl w-[100%] text-[var(--dark-blue-title)] font-bold lg:w-[65%]"
        >
                            Utilizamos um tutorial interativo em tempo real, no qual:
                        </h3>
                    </div>
                    <ul className="flex flex-col items-start gap-10 lg:items-center">
                        <li className="flex items-center gap-5 lg:justify-center">
                            <img src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761433483/icon-information_dl95l8.png" alt="Ícone de atenção."/>
                            <p className="text-2xl w-full lg:w-[50%] lg:text-3xl">
                                Destacamos os pontos de atenção mais críticos do portal. 
                            </p>
                        </li>
                        <li className="flex items-center gap-5 lg:justify-center">
                            <img src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761433556/icon-popups_bojuhv.png" alt="Ícone de checklist."/>
                            <p className="text-2xl w-full lg:w-[50%] lg:text-3xl">
                                Pop-ups explicativos mostram o que fazer em cada etapa.
                            </p>
                        </li>
                        <li className="flex items-center gap-4 -ml-3 lg:justify-center lg:ml-0">
                            <img src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761433584/icon-tarefas_qegr7r.png" alt="Ícone de check."/>
                            <p className="text-2xl w-full lg:w-[50%] lg:text-3xl">
                                Te ajudamos a realizar as tarefas do portal com segurança. 
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <p className="text-2xl w-full lg:w-[43%] lg:text-3xl">
                    Queremos garantir que cada paciente se sinta 
                    <span className="text-[var(--dark-blue-title)] font-bold"> preparado e confiante para utilizar o sistema </span>
                    de forma autônoma e sem medo.
                </p>
            </div>
        </section>
    )
}