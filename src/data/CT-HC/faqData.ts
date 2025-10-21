import type { FAQCategory } from "../../types/CT-HC/faq";

export const faqData: FAQCategory[] = [
  {
    categoria: "Sobre o Projeto",
    itens: [
      {
        pergunta: "Qual é a diferença entre o CT-HC para o Portal HC?",
        resposta: "O CT-HC é apenas um tutorial interativo que ensina, passo a passo, como usar o Portal. Já o Portal do Paciente HC é o sistema oficial onde os pacientes acessam seus dados e utilizam os serviços do hospital."
      },
      {
        pergunta: "O CT-HC é gratuito para todos os pacientes?",
        resposta: "Sim! O CT-HC é 100% gratuito e pode ser acessado por qualquer paciente que queira aprender a usar o Portal HC."
      }
    ]
  },
  {
    categoria: "Dados e Segurança",
    itens: [
      {
        pergunta: "Posso acessar meus dados de paciente no CT-HC?",
        resposta: "Não. O CT-HC é apenas um ambiente de treinamento, portanto não acessa dados reais de pacientes."
      },
      {
        pergunta: "O tutorial salva minhas informações pessoais?",
        resposta: "Não. Nenhuma informação pessoal é salva no tutorial do CT-HC."
      },
      {
        pergunta: "O tutorial pode alterar meus dados no Portal HC?",
        resposta: "Não, o CT-HC é um ambiente separado e não tem acesso ao Portal HC real."
      }
    ]
  },
  {
    categoria: "Uso do tutorial",
    itens: [
      {
        pergunta: "O que acontece se eu clicar em 'pular tutorial'?",
        resposta: "Você será redirecionado diretamente para a página inicial do CT-HC, sem passar pelo tutorial."
      },
      {
        pergunta: "Posso acessar o tutorial pelo celular?",
        resposta: "Sim, o CT-HC é responsivo e pode ser acessado por dispositivos móveis."
      },
      {
        pergunta: "Posso repetir o tutorial quantas vezes quiser?",
        resposta: "Sim, você pode repetir o tutorial quantas vezes desejar."
      },
      {
        pergunta: "Preciso criar conta para usar o CT-HC?",
        resposta: "Não, o CT-HC não requer criação de conta para acessar o tutorial."
      },
      {
        pergunta: "Como faço para acessar o Portal real depois do treinamento?",
        resposta: "Após o treinamento, você pode acessar o Portal HC real através do site oficial do hospital."
      }
    ]
  }
];