import { Link } from "react-router-dom";
import type { CardAcessibilidadeProps } from "../../../types/HC/card-acessibilidade";

export default function CardAcessibilidade( {img, title, description, link}: CardAcessibilidadeProps ) {
    return (
        <div className="
            flex flex-col gap-7 pl-5 pr-2 py-5
            bg-[var(--color-blue-1277BD)] max-w-2xs rounded-4xl
            text-[var(--color-white)]
        "
        >
            <figcaption className="flex flex-col items-center ">
                <img 
                 src={img} 
                 alt=""
                 className="w-17"
                 />
            </figcaption>
            <div className="flex flex-col gap-2">
                <h3 className="font-bold text-xl">{title}</h3>
                <p className="">{description}</p>
            </div>
            <div className="flex justify-center">
                <Link 
                to={link}
                className="
                px-8 py-2 border-2 border-[var(--color-white)] rounded-full
                hover:bg-[var(--color-white-button-hover)] duration-300
                ">
                    Clique aqui
                </Link>
            </div>
        </div>
    )
}