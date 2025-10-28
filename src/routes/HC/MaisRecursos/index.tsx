import CardMaisRecursos from "../../../components/HC/CardMaisRecursos";
import TitleHC from "../../../components/HC/TitleHC";

export default function MaisRecursos() {
    return (
        <div className="flex flex-col gap-15">
            <TitleHC 
                title="Acessibilidade > Mais recursos"
                subtitle="Saiba o que cada funcionalidade faz, e torne sua experiência mais acessível!"
                line={true}
            />
            <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-1">
                <CardMaisRecursos 
                    titleMessage="Clique aqui para aumentar a fonte"
                    img="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761573149/icon-aumentar-fonte-2_japh83.png"
                    title="Aumentar Fonte"
                    text="Amplia ou diminui o tamanho do texto para facilitar a leitura."
                />
                <CardMaisRecursos 
                    titleMessage="Clique aqui para ativar a navegação por Voz"
                    img="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761573302/icon-navegacao-voz_gpky4m.png"
                    title="Navegação por Voz"
                    text="Navegue pelo site usando comandos de voz."
                />
                <CardMaisRecursos 
                    titleMessage="Clique aqui para mudar o contraste"
                    img="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761573295/icon-contraste_txxb1t.png"
                    title="Mudar contraste"
                    text="Ajusta o contraste da tela para melhorar a visibilidade."
                />
            </div>
            <div className="hidden lg:flex flex-col gap-3">
                <figure className="flex items-center gap-4">
                    <img src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761573306/icon-teclado_tjyl7n.png" alt="ícone de teclado" />
                    <figcaption className="text-3xl font-bold">Atalhos de teclado:</figcaption>
                </figure>
                <ul className="flex flex-col gap-4">
                    <li className="text-xl">
                        <span className="font-bold">Ctrl + Alt + 1:</span> Aumenta o tamanho das letras.
                    </li>
                    <li className="text-xl">
                        <span className="font-bold">Ctrl + Alt + 2:</span> Diminui o tamanho das letras.
                    </li>
                    <li className="text-xl">
                        <span className="font-bold">Ctrl + Alt + 3:</span> Ativa a navegação por voz.
                    </li>
                    <li className="text-xl">
                        <span className="font-bold">Ctrl + Alt + 4:</span> Abre as configurações de contraste.
                    </li>
                </ul>
            </div>
        </div>
    )
}