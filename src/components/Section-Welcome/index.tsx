import { FaCircleArrowRight } from "react-icons/fa6";

export default function SectionWelcome() {
  return (
    <section className="flex">
      <div className="flex justify-center flex-col w-1/2 opacity-0 animate-fade-in mt-40">
        <h1
          className="text-[3.75rem] text-center text-[var(--dark-blue-title)] font-bold"
          style={{ fontFamily: "Inter" }}
        >
          Bem-vindo ao Centro de Treinamento do Hospital das Clínicas!
        </h1>
        <p className="text-2xl ml-10 mt-8 indent-8">
          Um ambiente interativo criado para ajudar você a usar o Portal
          do Paciente HC de forma simples, segura e sem preocupações.
        </p>
        <p className="text-2xl ml-10 mt-5 indent-8">
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
      <div className="w-1/2 flex justify-center">
        <img 
        src="/banner-ct.png" 
        alt="" 
        className="h-[700px] mt-15 ml-10 opacity-0 animate-fade-in"
        />
      </div>
    </section>
  );
}
