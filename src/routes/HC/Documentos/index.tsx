import TitleHC from "../../../components/HC/TitleHC";

export default function Documentos() {
    return (
        <section className="flex flex-col min-h-full">
            <TitleHC title="Meus Documentos" />
            <div className="flex justify-center items-center flex-grow">
                <p>Nenhum documento disponível no momento.</p>
            </div>
        </section>
    )
}