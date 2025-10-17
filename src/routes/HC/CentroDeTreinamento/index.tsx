import { Link } from "react-router-dom";
import TitleHC from "../../../components/HC/TitleHC";
import { iconsTreinamento } from "../../../data/HC/iconsTreinamento";

export default function CentroDeTreinamento() {
    return (
        <section className="flex flex-col gap-6">
            <TitleHC
                title="Centro de Treinamento"
                subtitle="Escolha a área do site que deseja fazer o treinamento e receba instruções em cada etapa:"
             />
            <ul className="w-full flex flex-wrap justify-center gap-6 px-30">
                {iconsTreinamento.map((i) => (
                    <li
                        key={i.label}
                        className="
                        bg-[var(--light-blue)] rounded-[10px]
                        flex justify-center items-center py-4 min-w-[200px]
                        hover:bg-[var(--light-blue-2)] duration-300"
                    >
                    <Link to={i.link || ""} title={i.titleMessage}>
                        <figure className="flex flex-col items-center gap-2">
                            <img src={`/${i.img}`} alt="" className="w-[5rem]" />
                            <figcaption className="w-[95%] text-center font-bold text-lg">
                            {i.label}
                            </figcaption>
                        </figure>
                    </Link>
                </li>
                ))}
            </ul>
        </section>
    )
}