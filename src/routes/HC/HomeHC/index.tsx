import CardAcessibilidade from "../../../components/HC/Card-Acessibilidade/indes";
import CardTreinamento from "../../../components/HC/Card-Treinamento";
import TitleHC from "../../../components/HC/TitleHC";

export default function HomeHC() {
    return (
        <div className="flex flex-col gap-2">
            <TitleHC title="Acessibilidade" />
            <CardTreinamento />
            <CardAcessibilidade />
        </div>
    )
}