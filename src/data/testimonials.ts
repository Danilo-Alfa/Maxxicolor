/**
 * TODO: substituir pelos depoimentos reais de clientes
 * (Google Reviews e WhatsApp sao boas fontes).
 * Depoimentos reais convertem mais — e evitam problemas de credibilidade.
 */
export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export const testimonials: readonly Testimonial[] = [
  {
    name: "Rodrigo Almeida",
    role: "Pintor profissional",
    quote:
      "Mando a lista pelo WhatsApp de manhã e no mesmo dia está tudo separado. Pra quem vive de obra, essa agilidade faz toda a diferença.",
  },
  {
    name: "Mariana Lopes",
    role: "Arquiteta",
    quote:
      "Precisava de uma cor específica para um projeto e eles acertaram em cheio. Atendimento consultivo de verdade, não só venda.",
  },
  {
    name: "Léo Martins",
    role: "Síndico de condomínio",
    quote:
      "Compramos tudo da manutenção do condomínio com eles: tinta, EPI e material elétrico. Preço justo e nunca me deixaram na mão com prazo.",
  },
] as const;
