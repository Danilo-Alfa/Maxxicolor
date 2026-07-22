export interface Feature {
  title: string;
  description: string;
  icon: "userCheck" | "award" | "palette" | "truck" | "creditCard" | "percent";
}

export const features: readonly Feature[] = [
  {
    title: "Atendimento especialista",
    description:
      "Equipe que entende de tinta de verdade e indica o produto certo para cada superfície e ambiente.",
    icon: "userCheck",
  },
  {
    title: "Marcas líderes",
    description:
      "Suvinil, Coral, Eucatex, Maza, Magna e mais — qualidade de fábrica em todos os departamentos.",
    icon: "award",
  },
  {
    title: "Cor sob medida",
    description:
      "Sistema tintométrico prepara a cor exata do seu projeto na hora, a partir de catálogo ou amostra.",
    icon: "palette",
  },
  {
    title: "Entrega ágil",
    description:
      "Receba na obra ou retire na loja com o pedido já separado — sem perder tempo de trabalho.",
    icon: "truck",
  },
  {
    title: "Pagamento facilitado",
    description:
      "Pix, cartão de crédito e débito, com parcelamento para caber no seu orçamento.",
    icon: "creditCard",
  },
  {
    title: "Condições para profissionais",
    description:
      "Pintores, empresas e condomínios têm preço especial em compras recorrentes e por volume.",
    icon: "percent",
  },
] as const;
