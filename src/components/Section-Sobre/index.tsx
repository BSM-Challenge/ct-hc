export default function SectionSobre() {
    return (
        <div className="flex flex-col gap-1">
            <div className="w-full flex flex-col gap-7 lg:w-[45%]">
                <h2 
                className="text-6xl text-[var(--dark-blue-title)] text-start font-bold lg:text-center"
                style={{ fontFamily: "Inter" }}
                >
                    Sobre o projeto
                </h2>
                <p className="text-2xl lg:text-3xl" style={{ fontFamily: "Inter" }}>
                    O <span className="text-[var(--dark-blue-title)] font-bold">Centro de Treinamento do Hospital das Clínicas (CT-HC) </span> 
                    foi criado para tornar o uso do Portal do Paciente mais fácil,
                    seguro e intuitivo.
                </p>
            </div>
            <div className="w-full flex flex-col items-start justify-around gap-15 lg:flex-row lg:justify-between">
                <figcaption>
                    <img src="/img-hospital.png" alt=""  className="h-[450px]"/>
                </figcaption>
                <div className="flex flex-col items-start gap-13 my-5 lg:gap-10">
                    <div className="flex justify-start lg:justify-center lg:text-4xl">
                        <h3 
                        className="text-3xl w-[100%] text-[var(--dark-blue-title)] font-bold lg:w-[65%]"
                        style={{ fontFamily: "Inter" }}>
                            Utilizamos um tutorial interativo em tempo real, no qual:
                        </h3>
                    </div>
                    <ul className="flex flex-col items-start gap-10 lg:items-center">
                        <li className="flex items-center gap-5 lg:justify-center">
                            <img src="/icon-information.png" alt="" />
                            <p className="text-2xl w-full lg:w-[50%] lg:text-3xl" style={{ fontFamily: "Inter" }}>
                                Destacamos os pontos de atenção mais críticos do portal. 
                            </p>
                        </li>
                        <li className="flex items-center gap-5 lg:justify-center">
                            <img src="/icon-popups.png" alt="" />
                            <p className="text-2xl w-full lg:w-[50%] lg:text-3xl" style={{ fontFamily: "Inter" }}>
                                Pop-ups explicativos mostram o que fazer em cada etapa.
                            </p>
                        </li>
                        <li className="flex items-center gap-4 -ml-3 lg:justify-center lg:ml-0">
                            <img src="/icon-tarefas.png" alt="" />
                            <p className="text-2xl w-full lg:w-[50%] lg:text-3xl" style={{ fontFamily: "Inter" }}>
                                Te ajudamos a realizar as tarefas do portal com segurança. 
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <p className="text-2xl w-full lg:w-[43%] lg:text-3xl" style={{ fontFamily: "Inter" }}>
                    Queremos garantir que cada paciente se sinta 
                    <span className="text-[var(--dark-blue-title)] font-bold"> preparado e confiante para utilizar o sistema </span>
                    de forma autônoma e sem medo.
                </p>
            </div>
        </div>
    )
}