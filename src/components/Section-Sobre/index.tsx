export default function SectionSobre() {
    return (
        <div>
            <div className="w-[45%] flex flex-col gap-7">
                <h2 
                className="text-6xl text-[var(--dark-blue-title)] text-center"
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
        </div>
    )
}