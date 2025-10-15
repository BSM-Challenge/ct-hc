import CardMaisRecursos from "../../../components/HC/CardMaisRecursos";
import TitleHC from "../../../components/HC/TitleHC";

export default function MaisRecursos() {
    return (
        <div className="flex flex-col gap-15">
            <TitleHC 
                title="Acessibilidade > Mais recursos"
                subtitle="Saiba o que cada funcionalidade faz, e torne sua experiência mais acessível!"
            />
            <div className="grid grid-cols-3 gap-4">
                <CardMaisRecursos 
                    titleMessage="Clique aqui para aumentar a fonte"
                    img="/img-aumentar-fonte-2.png"
                    title="Aumentar Fonte"
                    text="Amplia ou diminui o tamanho do texto para facilitar a leitura."
                />
                <CardMaisRecursos 
                    titleMessage="Clique aqui para ativar a navegação por Voz"
                    img="/img-navegacao-voz.png"
                    title="Navegação por Voz"
                    text="Navegue pelo site usando comandos de voz."
                />
                <CardMaisRecursos 
                    titleMessage="Clique aqui para mudar o contraste"
                    img="/img-contraste.png"
                    title="Mudar contraste"
                    text="Ajusta o contraste da tela para melhorar a visibilidade."
                />
            </div>
        </div>
    )
}