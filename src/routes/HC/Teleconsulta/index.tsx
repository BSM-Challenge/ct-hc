import ConteudoDinamico from "../../../components/HC/ConteudoDinamico";
import TitleHC from "../../../components/HC/TitleHC";
import TutorialHC from "../../../components/HC/TutorialHC";

export default function Teleconsulta() {

    const steps = [
        {
            target: ".conteudo-dinamico",
            content: "Aqui aonde vai aparecer suas teleconsultas"
        }
    ]

    return (
        <section className="flex flex-col min-h-full">
            <TitleHC title="Teleconsulta" />

            <TutorialHC steps={steps} />

            <ConteudoDinamico>
                Você não possui agendamentos de teleconsulta no momento
            </ConteudoDinamico>
        </section>

    )
}