export interface FAQItem {
  pergunta: string;
  resposta: string;
}

export interface FAQCategory {
  categoria: string;
  itens: FAQItem[];
}