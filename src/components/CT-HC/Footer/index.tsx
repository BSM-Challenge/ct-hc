import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="w-full px-5 py-4
      bg-[var(--Color-blue-709CFF)] text-[var(--color-white)]  
      lg:py-2"
    >
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <figcaption className="flex justify-center lg:justify-start">
          <img src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761431081/logo-ct-hc-com-texto_hokz7m.png" alt="" />
        </figcaption>
        <div className="
        flex flex-wrap items-start gap-10 mt-5 justify-between 
        lg:gap-20 lg:flex-row lg:mr-20 lg:mt-0"
        >
          <ul className="flex flex-col items-start gap-2 lg:items-center">
            <li>
              <h4 className="font-bold text-2xl">Links Rápidos</h4>
            </li>
            <li>
              <Link to="/">Portal do Paciente HC</Link>
            </li>
            <li>
              <Link to="/">Teleatendimento</Link>
            </li>
            <li>
              <Link to="">Rede Lucy Montoro</Link>
            </li>
          </ul>
          <ul className="flex flex-col items-start gap-2 lg:items-center">
            <li>
              <h4 className="font-bold text-2xl">Sobre nós</h4>
            </li>
            <li>
              <Link to="/integrantes">Nosso time</Link>
            </li>
            <li>
              <Link to="/contato">Contate-nos</Link>
            </li>
          </ul>
          <ul className="flex flex-col items-start gap-2 lg:items-center">
            <li>
              <h4 className="font-bold text-2xl">Dúvidas</h4>
            </li>
            <li>
              <Link to="/faq">Perguntas Frequentes</Link>
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