import type { TitleHCProps } from "../../../types/HC/title";

export default function TitleHC( {title, subtitle}: TitleHCProps) {
    return (
        <div>
            <h1 className="text-4xl text-[var(--color-blue)] font-bold">{title}</h1>
            <hr className="my-3"/>
            <h2 className="text-lg">{subtitle}</h2>
        </div>
    )
}