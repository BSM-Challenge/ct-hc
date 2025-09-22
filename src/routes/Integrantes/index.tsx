import Card from "../../components/Card";

export default function Integrantes() {
  return (
    <main className="pt-28 sm:px-32 md:px-40 bg-[var(--light-blue)] min-h-screen">
      <section className="flex flex-col items-center px-6 sm:px-12 md:px-20">
        {/* Título */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[var(--dark-blue-title)] text-center">
          Conheça nossa equipe
        </h1>
        <div className="w-20 sm:w-32 md:w-48 h-1.5 md:h-2 bg-[var(--color-blue)] mt-4 sm:mt-6 md:mt-8"></div>

        <div className="flex justify-start mt-10 sm:mt-16 md:mt-20 w-full px-6 sm:px-10 md:px-30">
          <Card
            nome="Moisés Barsoti Andrade de Oliveira"
            img="/public/foto-moises.jpg"
            posicaoImg="left"
            descricao="Sou um estudante de Análise e Desenvolvimento de Sistemas na FIAP, com formação técnica em Desenvolvimento de Software pela Proz Educação. Apaixonado por tecnologia, tenho interesse em programação e desenvolvimento de soluções digitais, buscando sempre evoluir minhas habilidades e conhecimentos para atuar de forma criativa e eficiente na área de TI."
            rm="565049"
            turma="1TDSPG"
            linkGithub=""
            linkLinkedin=""
          />
        </div>
      </section>
      <section className="py-10">
        <div className="flex justify-end mt-10 sm:mt-16 md:mt-20 w-full px-6 sm:px-10 md:px-30">
          <Card
            nome="Sofia Siqueira Fontes"
            img="/public/foto-sofia.jpg"
            posicaoImg="right"
            descricao="Estudante de Desenvolvimento de Sistemas na FIAP, apaixonada por tecnologia e motivada a explorar novas possibilidades. Tenho perfil proativo e gosto de compreender como as coisas funcionam, o que me impulsiona a buscar soluções criativas e eficazes. A cada dia desenvolvo minhas habilidades e conhecimentos para contribuir de forma significativa no universo digital."
            rm="563829"
            turma="1TDSPG"
            linkGithub=""
            linkLinkedin=""
          />
        </div>
      </section>
      <section className="py-10">
        <div className="flex justify-start mt-10 sm:mt-16 md:mt-20 w-full px-6 sm:px-10 md:px-30">
          <Card
            nome="Felipe Kirschner Modesto"
            img="/public/foto-felipe.jpg"
            posicaoImg="left"
            descricao="Sou estudante de Análise e Desenvolvimento de Sistemas na Fiap e desde que ingressei na área tecnológica desenvolvi grande admiração pela programação e pelas diversas possibilidades que ela oferece. Vejo na tecnologia uma forma de transformar ideias em soluções que fazem a diferença, por isso busco constantemente aprender e evoluir para crescer tanto academicamente quanto profissionalmente."
            rm="561810"
            turma="1TDSPG"
            linkGithub=""
            linkLinkedin=""
          />
        </div>
      </section>
    </main>
  );
}
