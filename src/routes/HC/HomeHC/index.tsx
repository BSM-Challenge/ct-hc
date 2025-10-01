import CardTreinamento from "../../../components/HC/Card-Treinamento";
import TitleHC from "../../../components/HC/TitleHC";

export default function HomeHC() {
    return (
        <div className="flex flex-col gap-8">
            <TitleHC title="Acessibilidade" />
            <CardTreinamento />
        </div>
    )
}