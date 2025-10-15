import CardMaisRecursos from "../../../components/HC/CardMaisRecursos";
import TitleHC from "../../../components/HC/TitleHC";

export default function MaisRecursos() {
    return (
        <div className="flex flex-col gap-15">
            <TitleHC 
                title="Acessibilidade > Mais recursos"
                subtitle="Saiba o que cada funcionalidade faz, e torne sua experiência mais acessível!"
            />
            <div className="flex justify-between">
                <CardMaisRecursos />
                <CardMaisRecursos />
                <CardMaisRecursos />
            </div>
        </div>
    )
}