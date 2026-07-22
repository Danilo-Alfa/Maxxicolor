/**
 * Cada pergunta existe para remover uma objecao de compra.
 * TODO: revisar as respostas com as condicoes reais da loja.
 */
export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: readonly FaqItem[] = [
  {
    question: "Como funciona o orçamento pelo WhatsApp?",
    answer:
      "Você chama no WhatsApp, conta o que precisa (produto, cor, metragem ou uma foto do ambiente) e nossa equipe responde em minutos com a melhor opção de produto e preço. Sem compromisso.",
  },
  {
    question: "Vocês entregam? Qual o prazo?",
    answer:
      "Sim. Entregamos na região e você também pode retirar na loja com o pedido já separado. O prazo exato é confirmado no orçamento, de acordo com o seu endereço.",
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer:
      "Pix, dinheiro e cartões de crédito e débito, com opção de parcelamento. As condições são confirmadas junto com o orçamento.",
  },
  {
    question: "Fazem cor personalizada?",
    answer:
      "Sim. Preparamos a cor exata que o seu projeto pede — a partir de catálogo, código da cor ou de uma amostra que você trouxer.",
  },
  {
    question: "Atendem pintores, empresas e condomínios?",
    answer:
      "Atendemos. Profissionais e compras em volume têm condições especiais — fale com a gente no WhatsApp e peça uma cotação para o seu caso.",
  },
  {
    question: "Não entendo de tinta. Vocês me ajudam a escolher?",
    answer:
      "Claro — essa é a nossa especialidade. Nossa equipe indica o produto certo para cada superfície e ambiente, na quantidade certa, para você não gastar mais do que precisa.",
  },
] as const;
