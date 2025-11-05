import { IoPersonCircle } from "react-icons/io5";
import { Pdfs } from "../../../data/HC/pdfs";
import { MdPictureAsPdf } from "react-icons/md";
import { menuItems } from "../../../data/HC/menuItem";
import { Link } from "react-router-dom";

export default function MenuMobile() {
    return (
        <section>
            <header className="flex justify-between items-center">
                <img 
                src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761431082/logo-hc_l7m35z.png" 
                alt="Logo do Hospital das Clínicas"
                className="w-[30%]"
                />
                <IoPersonCircle className="text-[var(--color-blue)] text-4xl" />
            </header>
             <ul className="flex flex-wrap px-5 gap-4 max-lg:justify-center">
                {menuItems.map((menu, index) => (
                <li key={index}>
                    <Link to={menu.to} title="Clique aqui para acessar o manual">
                        <figure
                        className="
                            flex flex-col items-center justify-center gap-2
                            border border-[var(--pdf-color)]
                            p-8 w-[13rem] h-[13rem]
                            rounded-4xl text-center
                            hover:bg-[var(--color-grey-hover-2)]
                            duration-300
                            max-sm:p-2
                        "
                        >
                        <img 
                        src={menu.icon}
                        alt=""
                        className="w-[30%]"
                        />
                        <figcaption className="text-sm font-normal leading-snug">
                            {menu.label}
                        </figcaption>
                        </figure>
                    </Link>
                </li>
                ))}
            </ul>
        </section>
    )
}