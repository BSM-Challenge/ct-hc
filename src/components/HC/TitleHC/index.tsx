import { IoMdArrowBack } from "react-icons/io";
import type { TitleHCProps } from "../../../types/HC/title";
import { Link } from "react-router-dom";

export default function TitleHC( {title, subtitle, tamanho='2xl', font='normal', line = false, icon = false, link = "/"}: TitleHCProps) {
    return (
        <div className="flex items-center gap-4">
            { icon && 
            <Link 
            to={link}
            title="Voltar"
            className="
            p-2 hover:bg-[var(--color-blue-EAF3FC)] duration-200 rounded-full
            ">
                <IoMdArrowBack size={25} className="text-[var(--color-blue)] cursor-pointer"/> 
            </Link>
            }
            <h1 className={`text-${tamanho} text-[var(--color-blue)] font-${font}`}>{title}</h1>
            { line && <hr className="my-3"/> }
            <h2 className="text-lg">{subtitle}</h2>
        </div>
    )
}