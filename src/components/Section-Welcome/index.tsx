import { FaCircleArrowRight } from "react-icons/fa6";

export default function SectionWelcome() {
  return (
    <div className="flex flex-col pt-30 lg:pt-50 lg:flex-row">
      <div className="flex justify-center flex-col w-full gap-3 lg:w-1/2 opacity-0 animate-fade-in lg: px-4 lg:px-0">
        <h1
          className="text-2xl text-center sm:text-3xl md:text-4xl lg:text-[2.30rem] xl:text-[60px] 2xl:text-[70px]  text-[var(--dark-blue-title)] font-bold"
          style={{ fontFamily: "Inter" }}
        >
          Bem-vindo ao Centro de Treinamento do Hospital das Clínicas!
        </h1>
        <p className="text-base sm:text-lg md:text-xl md:text-left lg:text-1xl 2xl:2xl mt-4 lg:mt-8 lg:ml-10 indent-4 lg:indent-8 text-justify lg:text-left  xl:text-2xl">
          Um ambiente interativo criado para ajudar você a usar o Portal
          do Paciente HC de forma simples, segura e sem preocupações.
        </p>
        <p className="text-base sm:text-lg md:text-xl md:text-left lg:text-1xl mt-3 lg:mt-5 lg:ml-10 indent-4 lg:indent-8 text-justify lg:text-left xl:text-2xl">
          Um tutorial passo a passo em tempo real com instruções destacadas para
          guiar cada ação.
        </p>
        <div className="flex justify-center mt-6 lg:mt-10">
          <a
            href=""
            className="inline-flex items-center justify-center px-5 py-2 lg:px-7 lg:py-3 rounded-full bg-[var(--color-blue)] text-white text-sm sm:text-base lg:text-lg"
            style={{ fontFamily: "Inter", fontWeight: "600", boxShadow: "var(--shadow-blue)" }}
          >
            Clique aqui e <br className="hidden sm:block" />
            Saiba mais!
            <FaCircleArrowRight className="text-lg sm:text-xl lg:text-2xl ml-2" />
          </a>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center lg:-mt-50 px-4 lg:px-0">
        <img 
          src="/banner-ct.png" 
          alt="Banner Centro de Treinamento" 
          className="w-full max-w-[220px] md:max-w-[250px] lg:max-w-none lg:h-[600px] lg:mt-30 lg:ml-10 xl:h-[700px] xl:mt-15 opacity-0 animate-fade-in object-contain"
        />
      </div>
    </div>
  );
}