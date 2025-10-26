import ConteudoDinamico from "../../../components/HC/ConteudoDinamico";
import TitleHC from "../../../components/HC/TitleHC";

export default function Teleconsulta() {
    return (
        <section className="flex flex-col min-h-full">
            <TitleHC title="Teleconsulta" />

            <ConteudoDinamico>
                Você não possui agendamentos de teleconsulta no momento
            </ConteudoDinamico>
        </section>

    )
}