import { Link } from "react-router-dom";

export default function SectionWelcome() {
  return (
    <section
      className="
      bg-[var(--light-blue)] min-h-screen 
      flex flex-col pt-30 lg:pt-50 lg:flex-row"
      id="home"
    >
      <div
        className="
          flex justify-center flex-col w-full gap-3 px-4 -mt-10
          lg:w-1/2 lg:px-0
          opacity-0 animate-fade-in"
      >
        <h1
          className="
          text-3xl text-center text-[var(--dark-blue-title)] font-bold sm:text-left
          sm:w-[100%] sm:text-4xl
          lg:text-[2.30rem] lg:text-center lg:w-full
          xl:text-[60px] 
          2xl:text-[70px]"
        >
          Bem-vindo ao Centro de Treinamento do Hospital das Clínicas!
        </h1>
        <p
          className="
        text-xl mt-4 indent-4 text-justify
        sm:text-3xl 
        md:text-left md:w-[90%]
        lg:text-1xl lg:mt-8 lg:ml-10 lg:indent-8 lg:text-left
        xl:text-2xl
        2xl:2xl"
        >
          Um ambiente interativo criado para ajudar você a usar o Portal do
          Paciente HC de forma simples, segura e sem preocupações.
        </p>
        <p
          className="
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
        <ul
          className="
        mx-20 flex justify-between mt-2 min-[1093px]:mt-10
        max-[1360px]:mx-10
        max-[1093px]:flex-col max-[1093px]:gap-5 max-[1093px]:mb-8
        "
        >
          <li>
            <Link
              to="/bemVindo"
              title="Clique aqui para ir ao portal com treinamento"
              className="
              flex bg-white text-[var(--color-blue-0077C8)] py-4
              rounded-[20px] shadow-[2px_2px_20px_var(--color-blue-0077C8)]
              hover:bg-[var(--color-cyan-hover)] duration-300
              xl:text-xl
              max-[1210px]:text-sm
              "
            >
              <figure
                className="
              flex justify-center items-center
              max-[1093px]:w-full
              "
              >
                <figcaption className="font-bold">
                  Portal do <br /> paciente HC
                </figcaption>
                <img
                  src="https://res.cloudinary.com/dtbgsboo5/image/upload/v1762224323/logoBotao_wfgyuo.png"
                  alt="Logo do HC"
                  className="
                w-[45%]
                max-[1093px]:w-[30%]
                max-lg:w-[15%]
                max-md:w-[20%]
                max-sm:w-[30%]
                "
                />
              </figure>
            </Link>
          </li>
          <li>
            <a
              href="#sobre"
              title="Clique aqui para saber mais sobre o projeto"
              className="
              flex flex-col sm:flex-col items-center justify-center
              px-5 py-2 text-sm 
              bg-[var(--color-blue-2563EB)] text-[var(--color-white)]
              shadow-[var(--shadow-blue)] hover:bg-[var(--color-blue)] duration-300
              rounded-[20px]
              lg:px-12 lg:py-4 
              xl:text-xl
              max-[1210px]:text-sm
              md:text-base
            "
            >
              Clique aqui e
              <span className="sm:ml-2 font-bold">Saiba mais!</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="w-full flex justify-center px-4 lg:w-1/2 lg:-mt-45  lg:px-0">
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