import { FaCircleArrowRight } from "react-icons/fa6";

export default function SectionWelcome() {
  return (
    <section>
      <div className="container-welcome w-1/2">
        <h1
          className="text-[3.75rem] text-center text-[var(--dark-blue-title)] font-bold"
          style={{ fontFamily: "Inter" }}
        >
          Bem-vindo ao Centro de Treinamento do Hospital das Clínicas!
        </h1>
        <p className="text-2xl ml-10 mt-8">
          Um ambiente interativo criado para ajudar você a usar o Portal
          do Paciente HC de forma simples, segura e sem preocupações.
        </p>
        <p className="text-2xl ml-10 mt-5">
          Um tutorial passo a passo em tempo real com instruções destacadas para
          guiar cada ação.
        </p>
        <div className="flex justify-center mt-10">
          <a
            href=""
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[var(--color-blue)] text-white"
            style={{ fontFamily: "Inter", fontWeight: "600", boxShadow: "var(--shadow-blue)" }}
          >
            Clique aqui e <br />
            Saiba mais!
            <FaCircleArrowRight className="text-2xl ml-2" />
          </a>
        </div>
      </div>
      <div className="w-1/2"></div>
    </section>
  );
}
