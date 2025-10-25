import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function SectionWelcome() {
  return (
    <section className="
      bg-[var(--light-blue)] min-h-screen 
      flex flex-col pt-30 lg:pt-50 lg:flex-row"
      id="home"
    >
      <div className="
          flex justify-center flex-col w-full gap-3 px-4
          lg:w-1/2 lg:px-0
          opacity-0 animate-fade-in">
        <h1 className="
          text-3xl text-center text-[var(--dark-blue-title)] font-bold sm:text-left
          sm:w-[100%] sm:text-4xl
          lg:text-[2.30rem] lg:text-center lg:w-full
          xl:text-[60px] 
          2xl:text-[70px]"
        >
          Bem-vindo ao Centro de Treinamento do Hospital das Clínicas!
        </h1>
        <p className="
        text-xl mt-4 indent-4 text-justify
        sm:text-3xl 
        md:text-left md:w-[90%]
        lg:text-1xl lg:mt-8 lg:ml-10 lg:indent-8 lg:text-left
        xl:text-2xl
        2xl:2xl"
        >
          Um ambiente interativo criado para ajudar você a usar o Portal
          do Paciente HC de forma simples, segura e sem preocupações.
        </p>
        <p className="
        text-xl mt-4 indent-4 text-justify
        sm:text-3xl 
        md:text-left md:w-[90%]
        lg:text-1xl lg:mt-8 lg:ml-10 lg:indent-8 lg:text-left
        xl:text-2xl
        2xl:2xl "
        >
          Um tutorial passo a passo em tempo real com instruções destacadas para
          guiar cada ação.
        </p>
        <div className="flex justify-center mt-6 lg:mt-10">
          <Link
            to="/hc"
            className="
            inline-flex items-center justify-center px-5 py-2 font-semibold
            text-sm bg-[var(--color-blue)] text-[var(--color-white)]
            shadow-[var(--shadow-blue)]
            lg:px-7 lg:py-3 rounded-full   
            md:text-base"
          >
            Clique aqui e <br className="hidden sm:block" />
            Saiba mais!
            <FaCircleArrowRight className="text-lg ml-2 sm:text-xl lg:text-2xl " />
          </Link>
        </div>
      </div>

      <div className="w-full flex justify-center px-4 lg:w-1/2 lg:-mt-50  lg:px-0">
        <img 
          src="https://res.cloudinary.com/dt26mfzpw/image/upload/v1761430828/banner-ct_jyju1p.png" 
          alt="Banner Centro de Treinamento" 
          className="
          w-full max-w-[260px] 
          md:max-w-[250px] 
          lg:max-w-none lg:h-[600px] lg:mt-30 lg:ml-10 
          xl:h-[700px] xl:mt-15 
          opacity-0 animate-fade-in object-contain"
        />
      </div>
    </section>
  );
}