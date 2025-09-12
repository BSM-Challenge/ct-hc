import { Link } from "react-router-dom";
import { FaAngleDown } from 'react-icons/fa';


export default function FAQ() {
  return (
    <main className="bg-[var(--light-blue)]">
      <section className="
      pt-30 px-10 min-h-screen
      max-[500px]:px-5
      lg:pt-35 
      xl:px-20 xl:pt-40"
      >
        <div className="w-full flex flex-col gap-5">
          <div className="
          h-full flex justify-center items-center 
          xl:justify-center"
          >
            <h1 className="
            text-3xl text-[var(--dark-blue-title)] font-bold 
            sm:text-4xl 
            xl:text-5xl"
            >
              Perguntas Frequentes
            </h1>
          </div>
          <div className="
          flex flex-col justify-around gap-20 
          lg:flex-row
          xl:flex-row"
          >
            <nav className="
            w-[100%] flex flex-col gap-4 pl-7 pr-10 py-7
            bg-[var(--Color-blue-709CFF)] rounded-[40px]
            lg:w-[50%]
            xl:w-[35%]"
            >
              <ul className="flex flex-col gap-[.6rem] text-[var(--color-white)]">
                <li className="border-b-2 border-[var(--color-white)]">
                  <h2 className="text-xl font-bold">Sobre o Projeto</h2>
                </li>
                <li className="ml-2">
                  <Link to="" className="text-[1.1rem]">
                    CT-HC e Portal HC
                  </Link>
                </li>
                <li className="ml-2">
                  <Link to="" className="text-[1.1rem]">
                    CT-HC gratuito
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-[.6rem] text-[var(--color-white)]">
                <li className="border-b-2 border-[var(--color-white)]">
                  <h2 className="text-xl font-bold">Dados e Segurança</h2>
                </li>
                <li className="ml-2">
                  <Link to="" className="text-[1.1rem]">
                    Dados do paciente
                  </Link>
                </li>
                <li className="ml-2">
                  <Link to="" className="text-[1.1rem]">
                    Informações pessoais
                  </Link>
                </li>
                <li className="ml-2">
                  <Link to="" className="text-[1.1rem]">
                    Informações no tutorial
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-[.6rem] text-[var(--color-white)]">
                <li className="border-b-2 border-[var(--color-white)]">
                  <h2 className="text-xl font-bold">Uso do tutorial</h2>
                </li>
                <li className="ml-2">
                  <Link to="" className="text-[1.1rem]">
                    Pular tutorial
                  </Link>
                </li>
                <li className="ml-2">
                  <Link to="" className="text-[1.1rem]">
                    Uso no celular
                  </Link>
                </li>
                <li className="ml-2">
                  <Link to="" className="text-[1.1rem]">
                    Repetir tutorial
                  </Link>
                </li>
                <li className="ml-2">
                  <Link to="" className="text-[1.1rem]">
                    Cria conta CT-HC
                  </Link>
                </li>
                <li className="ml-2">
                  <Link to="" className="text-[1.1rem]">
                    Uso em dispositivos móveis
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="bg-[var(--light-blue-2)] w-full rounded-[60px] h-[10%] mt-7">
              <div className=" flex flex-col items-center gap-5 h-full py-5">
                <figcaption>
                  <img src="./public/icon-pergunta.png" alt="" />
                </figcaption>
                <form 
                method="POST"
                className="flex flex-col justify-center items-center gap-10">
                  <h3 className="text-3xl w-[75%] text-center font-bold">Tem alguma outra pergunta? Mande para nós!</h3>
                  <input 
                  type="text" placeholder="Escreva aqui a sua pergunta..."
                  className="
                  w-[80%] p-4 rounded-2xl
                  bg-[var(--light-blue)] border-2 border-[var(--border-black)] 
                  placeholder-[--color-gray] placeholder:font-bold
                  outline-none
                  "
                  />
                  <button className="
                  bg-[var(--color-blue)] p-2 w-[30%] text-[var(--color-white)]
                  rounded-full font-bold text-2xl cursor-pointer
                  shadow-[4px_4px_15px_var(--color-blue)]
                  "
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen px-43 pt-30">
        <div>
          <ul className="flex flex-col gap-8">
            <li>
              <h3 className="text-4xl font-bold border-b-4 border-[var(--dark-blue-title)]">Sobre o projeto</h3>
            </li>
            <li className="
            flex items-center justify-between
            bg-[var(--Color-blue-709CFF)] rounded-3xl p-3
            ">
              <p className="font-bold text-2xl text-[var(--dark-blue-title)]">
                  Qual é a diferença entre o CT-HC para o Portal HC?
              </p>
              <div className="mr-4 p-2 bg-[var(--color-blue)] rounded-full">
                  <FaAngleDown className="text-[var(--color-white)] text-2xl"/>
              </div>
            </li>
            <li className="
            flex items-center justify-between
            bg-[var(--Color-blue-709CFF)] rounded-3xl p-3
            ">
              <p className="font-bold text-2xl text-[var(--dark-blue-title)]">
                  O CT-HC é gratuito para todos os pacientes?
              </p>
              <div className="mr-4 p-2 bg-[var(--color-blue)] rounded-full">
                  <FaAngleDown className="text-[var(--color-white)] text-2xl"/>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
