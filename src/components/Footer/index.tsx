import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="w-full bg-[var(--Color-blue-709CFF)] text-[var(--color-white)] px-5 py-4 lg:py-2"
      style={{ fontFamily: "Inter" }}
    >
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <figcaption className="flex justify-center lg:justify-start">
          <img src="/logo-com-texto.png" alt="" />
        </figcaption>
        <div className="flex flex-wrap items-start gap-10 mt-5 justify-between lg:gap-20 lg:flex-row lg:mr-20 lg:mt-0">
          <ul className="flex flex-col items-start gap-2 lg:items-center">
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
          <ul className="flex flex-col items-start gap-2 lg:items-center">
            <h4 className="font-bold text-2xl">Sobre nós</h4>
            <li>
              <Link to="">Nosso time</Link>
            </li>
            <li>
              <Link to="">Contate-nos</Link>
            </li>
          </ul>
          <ul className="flex flex-col items-start gap-2 lg:items-center">
            <h4 className="font-bold text-2xl">Dúvidas</h4>
            <li>
              <Link to="">Perguntas Frequentes</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end mt-10 lg:mt-0">
        <p className="text-sm text-center lg:text-right">
            Desenvolvido por Grupo BSM - Copyright © 2025. Todos os Direitos Reservados  
        </p>
      </div>
    </footer>
  );
}
