import { useEffect, useState } from "react";
import ConteudoDinamico from "../../../components/HC/ConteudoDinamico";
import TitleHC from "../../../components/HC/TitleHC";
import TutorialHC from "../../../components/HC/TutorialHC";

export default function Teleconsulta() {

    const [isTreinamento, setIsTreinamento] = useState(false);
    
    useEffect(() => {
    const modoTreinamento = localStorage.getItem("modoTreinamento");
    if (modoTreinamento === "teleconsulta") {
        setIsTreinamento(true);
        localStorage.removeItem("modoTreinamento");
    }
    }, []);

    const steps = [
        {
            target: ".conteudo-dinamico-teleconsulta",
            content: "Aqui aonde vai aparecer suas teleconsultas"
        }
    ]

    return (
        <section className="flex flex-col min-h-full">
            <TitleHC title="Teleconsulta" />

            {/* Tutorial explicativo */}
            {isTreinamento && <TutorialHC steps={steps} />}

            <ConteudoDinamico>
                Você não possui agendamentos de teleconsulta no momento
            </ConteudoDinamico>
        </section>

    )
}