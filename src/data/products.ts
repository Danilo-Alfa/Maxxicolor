export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  badge?: string;
  /**
   * Foto real em /public/produtos.
   * Para trocar: substitua o arquivo ou aponte para um novo caminho.
   */
  image?: string;
}

export const products: readonly Product[] = [
  {
    id: "coral-rende-muito",
    name: "Coral Rende Muito 18L",
    category: "Imobiliária",
    description: "Tinta acrílica concentrada com alto rendimento e cobertura.",
    badge: "Mais vendida",
    image: "/produtos/coral-rende-muito.jpg",
  },
  {
    id: "suvinil-premium",
    name: "Linha Suvinil Premium",
    category: "Imobiliária",
    description: "Fosco Completo, Toque de Seda, Sempre Limpo — na cor que você quiser.",
    image: "/produtos/suvinil-premium.jpg",
  },
  {
    id: "eucatex-peg-pinte",
    name: "Eucatex Peg & Pinte 18L",
    category: "Imobiliária",
    description: "Tinta acrílica concentrada, anti mofo e sem cheiro.",
    image: "/produtos/eucatex-peg-pinte.jpg",
  },
  {
    id: "suvinil-cor-protecao",
    name: "Esmalte Suvinil Cor & Proteção",
    category: "Esmaltes",
    description: "Cor e proteção em um só produto, para madeiras e metais.",
    image: "/produtos/suvinil-cor-protecao.jpg",
  },
  {
    id: "maza-direto-ferrugem",
    name: "Maza Direto na Ferrugem 3,6L",
    category: "Esmaltes",
    description:
      "Esmalte sintético premium: aplica direto na ferrugem, sem fundo, com opções metálicas.",
    image: "/produtos/maza-direto-ferrugem.jpg",
  },
  {
    id: "esmalte-lukscolor",
    name: "Esmalte Lukscolor Premium Plus",
    category: "Esmaltes",
    description: "Proteção e brilho premium para madeiras e metais.",
    image: "/produtos/esmalte-lukscolor.jpg",
  },
  {
    id: "massa-corrida-coral",
    name: "Coral Massa Corrida 25kg",
    category: "Preparação",
    description: "Nivelamento perfeito para paredes internas antes da pintura.",
    image: "/produtos/massa-corrida-coral.jpg",
  },
  {
    id: "martins-massa-pva",
    name: "Massa PVA Martins Complementos 23kg",
    category: "Preparação",
    description:
      "Massa PVA de fácil aplicação e super rendimento, para nivelar paredes internas.",
    image: "/produtos/martins-complementos.jpg",
  },
  {
    id: "sv-profissional",
    name: "Tintas SV Linha Profissional",
    category: "Profissional",
    description: "Esmaltes e epóxi da linha profissional, feitos para o uso pesado.",
    image: "/produtos/sv-profissional.jpg",
  },
] as const;
