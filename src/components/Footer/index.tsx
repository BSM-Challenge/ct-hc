import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="w-full bg-[var(--Color-blue-709CFF)] text-[var(--color-white)] px-5 py-2"
      style={{ fontFamily: "Inter" }}
    >
      <div className=" flex justify-between">
        <figcaption>
          <img src="/logo-com-texto.png" alt="" />
        </figcaption>
        <div className="flex gap-20 mr-20">
          <ul className="flex flex-col items-center gap-2">
            <h4 className="font-bold text-2xl">Links Rápidos</h4>
            <li>
              <Link to="">Portal do Paciente HC</Link>
            </li>
            <li>
              <Link to="">Teleatendimento</Link>
            </li>
            <li>
              <Link to="">Rede Lucy Montoro</Link>
            </li>
          </ul>
          <ul className="flex flex-col items-center gap-2">
            <h4 className="font-bold text-2xl">Sobre nós</h4>
            <li>
              <Link to="">Nosso time</Link>
            </li>
            <li>
              <Link to="">Contate-nos</Link>
            </li>
          </ul>
          <ul className="flex flex-col items-center gap-2">
            <h4 className="font-bold text-2xl">Dúvidas</h4>
            <li>
              <Link to="">Perguntas Frequentes</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end">
        <p>
            Desenvolvido por Grupo BSM - Copyright © 2025. Todos os Direitos Reservados  
        </p>
      </div>
    </footer>
  );
}
