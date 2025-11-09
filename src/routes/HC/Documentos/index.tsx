import { useEffect, useState } from "react";
import ConteudoDinamico from "../../../components/HC/ConteudoDinamico";
import TitleHC from "../../../components/HC/TitleHC";
import TutorialHC from "../../../components/HC/TutorialHC";

export default function Documentos() {

    const [isTreinamento, setIsTreinamento] = useState(false);
    
    useEffect(() => {
        const modoTreinamento = localStorage.getItem("modoTreinamento");
        if (modoTreinamento === "documentos") {
        setIsTreinamento(true);
        localStorage.removeItem("modoTreinamento");
        }
    }, []);

    // Tutorial configurado para esta página
    const steps = [
        {
        target: ".conteudo-dinamico-documentos",
        content: "Aqui será apresentado todos os documentos",
        },
    ];

    return (
        <section className="flex flex-col min-h-full">
            <TitleHC title="Meus Documentos" />

            {/* Tutorial explicativo */}
            {isTreinamento && <TutorialHC steps={steps} />}

            <ConteudoDinamico>
                Nenhum documento disponível no momento.
            </ConteudoDinamico>
        </section>
    )
}