import CardAcessibilidade from "../../../components/HC/Card-Acessibilidade/indes";
import CardTreinamento from "../../../components/HC/Card-Treinamento";
import TitleHC from "../../../components/HC/TitleHC";

export default function HomeHC() {
    return (
        <div className="flex flex-col gap-5">
            <TitleHC title="Acessibilidade" />
            <CardTreinamento />
            <div className="flex flex-wrap gap-3 justify-between">
                <CardAcessibilidade 
                    img="img-acessibilidade.png"
                    title="Acessibilidade"
                    description="Veja mais recursos de acessibilidade disponíveis."
                    link="/hc/maisRecursos"
                />
                <CardAcessibilidade 
                    img="img-voz.png"
                    title="Navegação por Voz"
                    description="Navegue pelo site com a sua voz, clique para ativar."
                    link="/hc/maisRecursos"
                />
                <CardAcessibilidade 
                    img="img-aumentar-fonte.png"
                    title="Aumentar Fonte"
                    description="Melhore a leitura ajustando o tamanho das letras."
                    link="/hc/maisRecursos"
                />
            </div>
        </div>
    )
}