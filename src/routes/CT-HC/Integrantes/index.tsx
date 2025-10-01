import Card from "../../../components/CT-HC/Card";

export default function Integrantes() {
  return (
    <main className="pt-28 sm:pt-32 md:pt-40 bg-[var(--light-blue)] min-h-screen">
      <section className="flex flex-col items-center px-6 sm:px-12 md:px-20">
        {/* Título */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[var(--dark-blue-title)]">
          Conheça nossa equipe
        </h1>
        <div className="w-20 sm:w-32 md:w-48 h-1.5 md:h-2 bg-[var(--color-blue)] mt-4 sm:mt-6 md:mt-8"></div>

        <div className="flex justify-end mt-20 w-full">
          <Card
            nome="Moisés Barsoti Andrade de Oliveira"
            img="/foto-moises.jpg"
            posicaoImg="left"
            descricao="Sou um estudante de Análise e Desenvolvimento de Sistemas na FIAP, com formação técnica em Desenvolvimento de Software pela Proz Educação. Apaixonado por tecnologia, tenho interesse em programação e desenvolvimento de soluções digitais, buscando sempre evoluir minhas habilidades e conhecimentos para atuar de forma criativa e eficiente na área de TI."
            rm="565049"
            turma="1TDSPG"
            linkGithub="https://github.com/moisesBarsoti"
            linkLinkedin="https://www.linkedin.com/in/mois%C3%A9s-barsoti-468869278/"
          />
        </div>
      </section>
      <section className="py-10">
        <div className="flex justify-start mt-20 w-full px-30">
          <Card
            nome="Sofia Siqueira Fontes"
            img="/foto-sofia.jpg"
            posicaoImg="right"
            descricao="Estudante de Desenvolvimento de Sistemas na FIAP, apaixonada por tecnologia e motivada a explorar novas possibilidades. Tenho perfil proativo e gosto de compreender como as coisas funcionam, o que me impulsiona a buscar soluções criativas e eficazes. A cada dia desenvolvo minhas habilidades e conhecimentos para contribuir de forma significativa no universo digital."
            rm="563829"
            turma="1TDSPG"
            linkGithub="https://github.com/sSofia-s"
            linkLinkedin="https://www.linkedin.com/in/sofia-siqueira-0111a230b/"
          />
        </div>
      </section>
      <section className="py-10">
        <div className="flex justify-end mt-20 w-full px-20">
          <Card
            nome="Felipe Kirschner Modesto"
            img="/foto-felipe.jpg"
            posicaoImg=""
            descricao="Sou aluno da Fiap, atualmente cursando Análise e Desenvolvimento de Sistemas. Desde quando ingressei-me no meio tecnológico, passei a admirar grandemente a área da programação, assim como diversos outros sistemas e tecnologias fundadas. O que me fez enxergar uma oportunidade de transformar ideias em soluções que façam a diferença. Tenho interesse em aprender e desenvolver constantemente minhas habilidades, para assim crescer tanto no ramo acadêmico, e me desenvolver profissionalmente."
            rm="561810"
            turma="1TDSPG"
            linkGithub="https://github.com/FeKiModesto"
            linkLinkedin=""
          />
        </div>
      </section>
    </main>
  );
}