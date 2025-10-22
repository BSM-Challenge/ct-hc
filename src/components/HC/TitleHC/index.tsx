import type { TitleHCProps } from "../../../types/HC/title";

export default function TitleHC( {title, subtitle, tamanho='2xl', font='normal', line = false}: TitleHCProps) {
    return (
        <div>
            <h1 className={`text-${tamanho} text-[var(--color-blue)] font-${font}`}>{title}</h1>
            { line && <hr className="my-3"/> }
            <h2 className="text-lg">{subtitle}</h2>
        </div>
    )
}