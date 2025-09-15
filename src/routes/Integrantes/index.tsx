import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Integrantes() {
  return (
    <main className="pt-40 bg-[var(--light-blue)] min-h-screen">
      <section className="flex flex-col items-center px-20">
        {/* Título */}
        <h1 className="text-5xl font-bold text-[var(--dark-blue-title)]">
          Conheça nossa equipe
        </h1>
        <div className="w-48 h-2 bg-[var(--color-blue)] mt-7"></div>

        {/* Card */}
        <div className="flex justify-end mt-20 w-full">
          <div className="
          relative flex items-center max-w-6xl w-full p-8 pl-52
          bg-[var(--Color-blue-709CFF)] rounded-[60px]
          shadow-[15px_15px_20px_var(--shadow-blue-70)]"
          >
            
            {/* Foto */}
            <div className="absolute -left-24 top-1/2 -translate-y-1/2">
              <img
                className="w-[300px] h-[300px] object-cover rounded-full border-[8px] border-[var(--color-blue)] shadow-2xl"
                src="/foto-moises.jpg"
                alt="Foto Moisés"
              />
            </div>

            {/* Conteúdo */}
            <div className="flex flex-col text-white w-full">
              <h2 className="text-4xl font-bold bg-[var(--color-blue)] -ml-5 px-4 py-2 rounded-[10px] inline-block text-center">
                Moisés Barsoti Andrade de Oliveira
              </h2>

              <p className="ml-4 mt-4 text-xl leading-relaxed">
                Sou um estudante de Análise e Desenvolvimento de Sistemas na FIAP,
                com formação técnica em Desenvolvimento de Software pela Proz Educação.
                Apaixonado por tecnologia, tenho interesse em programação e
                desenvolvimento de soluções digitais, buscando sempre evoluir minhas
                habilidades e conhecimentos para atuar de forma criativa e eficiente
                na área de TI.
              </p>

              {/* RM e Turma + Contato */}
              <div className="flex justify-between max-w-[95%] ml-4 mt-10">
                <div>
                  <p className="text-xl">
                    <span className="font-bold">RM: </span> 
                     565049
                  </p>
                  <p className="text-xl">
                    <span className="font-bold">Turma: </span> 
                    1TDSPG
                  </p>
                </div>

                <div className="flex flex-col gap-4 items-center">
                  <span className="font-bold text-xl">Entre em contato comigo:</span>
                  <div className="flex gap-6">
                    <a
                      href="https://github.com/seu-github"
                      target="_blank"
                      className="flex items-center gap-2 bg-black text-white px-3 py-2 rounded-lg hover:opacity-80 transition font-bold"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/seu-linkedin"
                      target="_blank"
                      className="flex items-center gap-2 bg-[#0077B5] text-white px-3 py-2 rounded-lg hover:opacity-80 transition font-bold"
                    >
                      <FaLinkedin /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
