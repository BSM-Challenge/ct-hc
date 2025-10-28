import { Link } from "react-router-dom";
import TitleHC from "../../../components/HC/TitleHC";
import { iconsTreinamento } from "../../../data/HC/iconsTreinamento";
import CardExperiencia from "../../../components/HC/CardExperiencia";

export default function CentroDeTreinamento() {
    return (
        <section className="flex flex-col gap-8 max-lg:gap-10">
            <TitleHC
                title="Centro de Treinamento"
                subtitle="Escolha a área do site que deseja fazer o treinamento e receba instruções em cada etapa:"
                line={true}
             />
            <ul className="
            w-full flex flex-wrap justify-center gap-2 xl:px-20 2xl:px-50 xl:gap-4
            max-[474px]:justify-start
            "
            >
                {iconsTreinamento.map((i) => (
                    <li
                        key={i.label}
                        className="
                        bg-[var(--light-blue)] rounded-[10px]
                        flex justify-center items-center 
                        hover:bg-[var(--light-blue-2)] duration-300
                        max-[474px]:w-full
                        "
                    >
                    <Link to={i.link || ""} title={i.titleMessage} className="
                    py-4 min-w-[200px] 
                    ">
                        <figure className="flex flex-col items-center gap-2">
                            <img src={`/${i.img}`} alt="" className="w-[4rem] lg:w-[3rem]" />
                            <figcaption className="w-[70%] text-center font-bold text-lg lg:text-[18px]">
                            {i.label}
                            </figcaption>
                        </figure>
                    </Link>
                </li>
                ))}
            </ul>
            <CardExperiencia />
        </section>
    )
}