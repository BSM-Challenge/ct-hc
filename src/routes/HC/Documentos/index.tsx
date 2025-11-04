import ConteudoDinamico from "../../../components/HC/ConteudoDinamico";
import TitleHC from "../../../components/HC/TitleHC";
import TutorialHC from "../../../components/HC/TutorialHC";

export default function Documentos() {

    // Tutorial configurado para esta página
    const steps = [
        {
        target: ".conteudo-dinamico",
        content: "Aqui será apresentado todos os documentos",
        },
    ];

    return (
        <section className="flex flex-col min-h-full">
            <TitleHC title="Meus Documentos" />

            <TutorialHC steps={steps} />

            <ConteudoDinamico>
                <p>Nenhum documento disponível no momento.</p>
            </ConteudoDinamico>
        </section>
    )
}