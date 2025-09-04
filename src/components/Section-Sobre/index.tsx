export default function SectionSobre() {
    return (
        <div className="flex flex-col gap-5">
            <div className="w-[45%] flex flex-col gap-7">
                <h2 
                className="text-6xl text-[var(--dark-blue-title)] text-center font-bold"
                style={{ fontFamily: "Inter" }}
                >
                    Sobre o projeto
                </h2>
                <p className="text-3xl" style={{ fontFamily: "Inter" }}>
                    O <span className="text-[var(--dark-blue-title)] font-bold">Centro de Treinamento do Hospital das Clínicas (CT-HC) </span> 
                    foi criado para tornar o uso do Portal do Paciente mais fácil,
                    seguro e intuitivo.
                </p>
            </div>
            <div className="w-full flex justify-around">
                <figcaption className="">
                    <img src="/img-hospital.png" alt=""  className="h-[450px]"/>
                </figcaption>
                <div className="flex flex-col gap-10">
                    <div className="flex justify-center">
                        <h3 
                        className="text-4xl w-[65%] text-[var(--dark-blue-title)] font-bold"
                        style={{ fontFamily: "Inter" }}>
                            Utilizamos um tutorial interativo em tempo real, no qual:
                        </h3>
                    </div>
                    <ul className="flex flex-col items-center gap-10">
                        <li className="flex justify-center items-center gap-5">
                            <img src="/icon-information.png" alt="" />
                            <p className="text-3xl" style={{ fontFamily: "Inter" }}>
                                Destacamos os pontos de atenção.
                            </p>
                        </li>
                        <li className="flex justify-center items-center gap-5">
                            <img src="/icon-popups.png" alt="" />
                            <p className="text-3xl w-[50%] mr-6" style={{ fontFamily: "Inter" }}>
                                Pop-ups explicativos mostram o que fazer em cada etapa.
                            </p>
                        </li>
                        <li className="flex justify-center items-center gap-4">
                            <img src="/icon-tarefas.png" alt="" />
                            <p className="text-3xl w-[50%] mr-6" style={{ fontFamily: "Inter" }}>
                                Te ajudamos a realizar as tarefas do portal com segurança. 
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <p className="text-3xl w-[43%]" style={{ fontFamily: "Inter" }}>
                    Queremos garantir que cada paciente se sinta 
                    <span className="text-[var(--dark-blue-title)] font-bold"> preparado e confiante para utilizar o sistema </span>
                    de forma autônoma e sem medo.
                </p>
            </div>
        </div>
    )
}