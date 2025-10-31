import TitleHC from "../../../components/HC/TitleHC";
import { MdPictureAsPdf } from "react-icons/md";
import { Pdfs } from "../../../data/HC/pdfs";

export default function ManuaisPortal() {
    return (
        <section className="flex flex-col gap-5">
            <TitleHC 
             title="Manuais do Portal" 
             tamanho="2xl"
             icon={true}
             link="/hc/ajuda"
            />
            <ul className="flex flex-wrap px-5 gap-4 max-lg:justify-center">
                {Pdfs.map((pdf, index) => (
                <li key={index}>
                    <a href={pdf.link} title="Clique aqui para acessar o manual">
                        <figure
                        className="
                            flex flex-col items-center justify-center gap-2
                            border border-[var(--pdf-color)]
                            p-8 w-[13rem] h-[13rem]
                            rounded-4xl text-center
                            hover:bg-[var(--color-grey-hover-2)]
                            duration-300
                        "
                        >
                        <MdPictureAsPdf size={40} className="text-[var(--pdf-color)]" />
                        <figcaption className="text-sm font-normal leading-snug">
                            {pdf.text}
                        </figcaption>
                        </figure>
                    </a>
                </li>
                ))}
            </ul>
        </section>
    )
}