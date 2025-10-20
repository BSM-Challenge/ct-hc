import type { ButtonCinzaProps } from "../../../types/HC/buttonCinza";

export default function ButtonCinza({onClick, px = 4, py = 1.5, titleMessage, children, className}: ButtonCinzaProps) {
    return (
        <button
            className={`
            bg-[var(--color-grey-818181)] text-[var(--color-gray)]
            px-${px} py-${py} rounded-[10px] border-2 border-[var(--color-grey)]
            hover:bg-[var(--color-grey)] duration-300 outline-none
            hover:text-[var(--color-white)] cursor-pointer
            ${className ?? ''} 
            `}
            onClick={onClick}
            title={titleMessage}
            >
            {children}
        </button>
    )
}