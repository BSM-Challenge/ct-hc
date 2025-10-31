import { Link } from "react-router-dom";
import TitleHC from "../../../components/HC/TitleHC";

export default function Ajuda() {
    return (
        <section className="flex flex-col gap-3">
            <TitleHC title="Ajuda/ Manuais" />
            <div className="mx-10">
                <Link 
                to=""
                title="Clique aqui para ver os manuais do portal"
                className="
                flex justify-center w-full py-1 rounded-full
                text-[var(--color-blue-1CB1B1)] border-2 
                hover:bg-[var(--color-cyan-hover)] duration-300
                "
                >
                    Manuais do Portal
                </Link>
            </div>
        </section>
    )
}