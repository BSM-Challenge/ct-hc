import ConteudoDinamico from "../../../components/HC/ConteudoDinamico";

export default function AvisosMobile() {
    return (
        <section className="flex flex-col min-h-screen">
            <header className="flex justify-center">
                <h1 className="text-[var(--color-blue-0077C8)] text-2xl">
                    Histórico
                </h1>
            </header>
            <ConteudoDinamico>
                Não há nenhum aviso no momento.
            </ConteudoDinamico>
        </section>
    )
}