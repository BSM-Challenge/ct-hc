import { Link } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";
import { IoPersonCircle } from "react-icons/io5";

export default function HeaderHC() {
  return (
    <header className="h-screen w-[20%] px-[20px]">
      <div className="flex items-center">
        <Link to="/hc">
          <img src="/logoHC.png" alt="" className="w-[90%]" />
        </Link>
        <MdMenuOpen
          className="text-9xl cursor-pointer w-[60%]"
          title="Fechar Menu"
        />
      </div>
      <nav className="mt-[3%]">
        <Link to="/hc">
          <ul>
            <li className="flex justify-between items-center max-w-[70%] mb-4">
              <IoPersonCircle className="text-[var(--color-grey)] text-6xl" />
              <p className="text-[18px]">Olá, Moisés</p>
            </li>
          </ul>
        </Link>
        <hr className="my-3" />
        <div className="flex flex-col gap-4">
          <Link to="/hc">
            <ul className="flex gap-6 items-center max-w-[80%]">
              <li>
                <img src="/icon-meus-resultados.png" alt="" className="w-[33px]" />
              </li>
              <li>
                Meus Resultados
              </li>
            </ul>
          </Link>
          <Link to="/hc">
            <ul className="flex gap-6 items-center max-w-[80%]">
              <li>
                <img src="/icon-receitas.png" alt="" className="w-[33px]" />
              </li>
              <li>
                Minhas Receitas
              </li>
            </ul>
          </Link>
          <Link to="/hc">
            <ul className="flex gap-6 items-center max-w-[80%]">
              <li>
                <img src="/icon-minha-agenda.png" alt="" className="w-[33px]" />
              </li>
              <li>
                Minhas Agendas
              </li>
            </ul>
          </Link>
          <Link to="/hc">
            <ul className="flex gap-6 items-center max-w-[80%]">
              <li>
                <img src="/icon-teleconsulta.png" alt="" className="w-[33px]" />
              </li>
              <li>
                Teleconsulta
              </li>
            </ul>
          </Link>
          <Link to="/hc">
            <ul className="flex gap-6 items-center max-w-[90%]">
              <li>
                <img src="/icon-solicitacao-de-exames.png" alt="" className="w-[33px]" />
              </li>
              <li>
                Solicitação de Exames
              </li>
            </ul>
          </Link>
          <Link to="/hc">
            <ul className="flex gap-6 items-center max-w-[80%]">
              <li>
                <img src="/icon-documentos.png" alt="" className="w-[33px]" />
              </li>
              <li>
                Documentos
              </li>
            </ul>
          </Link>
          <Link to="/hc">
            <ul className="flex gap-6 items-center max-w-[90%]">
              <li>
                <img src="/icon-pesquisa-de-satisfacao.png" alt="" className="w-[33px]" />
              </li>
              <li>
                Pesquisa de Satisfação
              </li>
            </ul>
          </Link>
          <Link to="/hc">
            <ul className="flex gap-6 items-center max-w-[80%]">
              <li>
                <img src="/icon-termos-de-aceite.png" alt="" className="w-[33px]" />
              </li>
              <li>
                Termos de Aceite
              </li>
            </ul>
          </Link>
          <Link to="/hc">
            <ul className="flex gap-6 items-center max-w-[80%]">
              <li>
                <img src="/icon-preciso-de-ajuda.png" alt="" className="w-[33px]" />
              </li>
              <li>
                Preciso de Ajuda
              </li>
            </ul>
          </Link>
          <Link to="/hc">
            <ul className="flex gap-6 items-center max-w-[80%]">
              <li>
                <img src="/icon-acessibilidade.png" alt="" className="w-[33px]" />
              </li>
              <li>
                Acessibilidade  
              </li>
            </ul>
          </Link>
        </div>
      </nav>
      <hr className="my-4"/>
      <Link to="/">
        <ul className="flex gap-6 items-center">
          <li>
            <img
             src="/icon-sair.png" 
             alt=""
             className="w-[35px]" 
             />
          </li>
          <li>Sair</li>
        </ul>
      </Link>
    </header>
  );
}
