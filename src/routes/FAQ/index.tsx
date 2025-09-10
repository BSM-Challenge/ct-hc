import { Link } from "react-router-dom";

export default function FAQ() {
  return (
    <main>
      <section className="bg-[var(--light-blue)] pt-40 px-20 min-h-screen">
        <div className="w-full flex flex-col gap-8">
          <div className="h-[100%] flex justify-center items-center">
            <h1 className="text-5xl text-[var(--dark-blue-title)] font-bold">
              Perguntas Frequentes
            </h1>
          </div>
          <div>
            <nav className="
            flex flex-col gap-3 w-[30%] pl-7 pr-10 py-7
            bg-[var(--Color-blue-709CFF)] rounded-[40px]"
            >
              <ul className="flex flex-col gap-2 text-[var(--color-white)]">
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
              <ul className="flex flex-col gap-2 text-[var(--color-white)]">
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
              <ul className="flex flex-col gap-2 text-[var(--color-white)]">
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
            <div>
                
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}