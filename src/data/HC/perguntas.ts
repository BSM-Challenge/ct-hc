import type { PerguntasProps } from "../../types/HC/perguntas";

export const perguntas: PerguntasProps[] = [
  {
    pergunta: "Os dados do meu cadastro estão desatualizados, como faço?",
    resposta:
      "Você pode atualizar seus dados diretamente através do portal na opção Meus Dados.",
  },
  {
    pergunta: "Posso compartilhar minha senha com outras pessoas?",
    resposta:
      "Não é indicado o compartilhamento da sua senha com outras pessoas. Elas terão acesso aos seus resultados de exames e outras informações disponíveis no portal que podem ser confidenciais.",
  },
  {
    pergunta: "Fiz exames e eles não aparecem, o que devo fazer?",
    resposta:
      "É possível que você tenha mais de um cadastro ativo no Hospital das Clínicas. Para unificar os registros você deve entrar em contato com a área de matrícula (DAM) do seu instituto de origem ou no local onde fez o último exame.",
  },
  {
    pergunta: "Como utilizar o QR CODE presente no aplicativo?",
    resposta:
      "Após o primeiro login no aplicativo do Portal do Paciente é possível acessar o QR Code mesmo sem acesso à internet e ter acesso à catraca no dia da sua consulta.",
  },
  {
    pergunta:
      "Posso solicitar o reagendamento para uma consulta e/ou exame futuro?",
    resposta:
      "Atualmente o Portal só permite o reagendamento de CONSULTAS. As solicitações de agendamento estão disponíveis apenas para os Institutos: ICHC e IOT. Não é possível solicitar a antecipação de consultas.",
  },
  {
    pergunta:
      "Posso solicitar o reagendamento para uma consulta e/ou exame passada?",
    resposta:
      "Atualmente o Portal só permite o reagendamento de CONSULTAS. As solicitações de agendamento estão disponíveis apenas para os Institutos: ICHC e IOT. Não é possível solicitar a antecipação da consulta. O sistema não permite reagendamento se teve uma falta seguida da outra. ATENÇÃO: neste caso, NÃO é possível pedir revalidação de receita.",
  },
];
