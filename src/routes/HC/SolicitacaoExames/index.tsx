import { FaUserDoctor } from "react-icons/fa6";
import TitleHC from "../../../components/HC/TitleHC";
import { IoSearch } from "react-icons/io5";

export default function SolcitacaoExames() {
    return (
        <section className="flex flex-col gap-5 min-h-full">
            <TitleHC title="Solicitação de exames" />
            <div className="
            w-full px-4 flex-grow
            max-lg:px-0
            ">
                <div className="w-full bg-[var(--color-blue-4383B4)] px-4">
                    <span>
                        <img 
                        src="/logo-hc-bg-branco.png"
                        alt="" 
                        className="w-[7%] max-md:w-[20%]"/>
                    </span>
                </div>
                <div className="
                w-full pl-35 pr-10 mt-5 min-h-full
                max-xl:pl-10 max-lg:pr-3
                max-lg:pl-10
                max-md:pl-0 max-md:pr-0
                ">
                    <div className="
                    flex flex-col gap-2
                    max-md:items-start
                    ">
                        <figure className="
                        flex items-center gap-2">
                            <FaUserDoctor size={23} className="text-[var(--color-blue-4383B4)]" />
                            <figcaption className="text-[var(--color-blue-4383B4)] text-xl">Situação de pedido de exames</figcaption>
                        </figure>
                        <hr className="text-[var(--color-blue-4383B4)] opacity-20"/>
                        <div className="
                        flex gap-3 px-20
                        max-lg:px-0
                        max-md:flex-col
                        ">
                            <form action="" className="
                            flex flex-col w-1/2 gap-1
                            max-md:w-full
                            ">
                                <label className="font-light">Informe o RGHC (matrícula) ou o CPF do paciente</label>
                                <input 
                                   type="text"
                                   placeholder="RGHC ou CPF" 
                                   className="
                                   px-1 py-1 outline-none
                                   border-1 border-[var(--color-grey-818181)]
                                   focus:border-[var(--color-yellow)]
                                   "
                                 />
                                 <button 
                                 title="Clique aqui para buscar"
                                 className="
                                 flex justify-center items-center gap-1 py-2 mt-3
                                 bg-[var(--color-blue-428BCA)] text-[var(--color-white)]
                                 hover:bg-[var(--color-blue)] duration-300 cursor-pointer
                                 ">
                                    Buscar
                                    <IoSearch />
                                 </button>
                            </form>
                            <div className="
                            flex flex-col gap-2 p-4
                            w-1/2 bg-[var(--color-blue-D9EDF7)]
                            text-[var(--color-blue-31708F)]
                            max-md:w-full
                            ">
                                <h2 className="text-lg">O que é RGHC?</h2>
                                <p className="font-light">
                                    O RGHC é a matrícula do paciente na instituição, 
                                    ele é composto por números e uma letra e está impresso
                                    na filipeta de atendimento, exemplo: 
                                    <span className="font-bold">1234567X.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="text-[var(--color-grey-818181)]"/>
            <div className="flex flex-col items-center px-10">
                <h3>
                   <span className="text-[var(--color-blue-4383B4)]">NETi</span> HCFMUSP © 2016-2023
                </h3>
            </div>
        </section>
    )
}