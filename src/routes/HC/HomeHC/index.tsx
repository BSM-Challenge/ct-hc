import CardAcessibilidade from "../../../components/HC/Card-Acessibilidade/indes";
import CardTreinamento from "../../../components/HC/Card-Treinamento";
import TitleHC from "../../../components/HC/TitleHC";

export default function HomeHC() {
    return (
        <div className="flex flex-col gap-5">
            <TitleHC 
            title="Acessibilidade" 
            tamanho="4xl" 
            font="bold" 
            line={true}
             />
            <CardTreinamento />
            <div className="flex flex-wrap gap-10">
                <CardAcessibilidade 
                    img="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761572476/icon-acessibilidade_jq0dzu.png"
                    title="Acessibilidade"
                    description="Veja mais recursos de acessibilidade disponíveis."
                    link="/hc/maisRecursos"
                    titleMessage="Clique para ver recursos de acessibilidade"
                />
                <CardAcessibilidade 
                    img="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761572494/icon-voz_sii5a5.png"
                    title="Navegação por Voz"
                    description="Navegue pelo site com a sua voz, clique para ativar."
                    link="/hc/maisRecursos"
                    titleMessage="Clique para aqui para ver a navegação por voz"
                />
            </div>
        </div>
    )
}