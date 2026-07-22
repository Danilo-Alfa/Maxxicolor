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
    id: "esmalte-maxxicolor",
    name: "Esmalte Premium Maxxi Color 3,6L",
    category: "Marca própria",
    description: "Esmalte base d'água com acabamento profissional, exclusivo da loja.",
    badge: "Exclusivo",
    image: "/produtos/esmalte-maxxicolor.jpg",
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
    id: "massa-corrida-coral",
    name: "Coral Massa Corrida 25kg",
    category: "Preparação",
    description: "Nivelamento perfeito para paredes internas antes da pintura.",
    image: "/produtos/massa-corrida-coral.jpg",
  },
  {
    id: "esmalte-lukscolor",
    name: "Esmalte Lukscolor Premium Plus",
    category: "Esmaltes",
    description: "Proteção e brilho premium para madeiras e metais.",
    image: "/produtos/esmalte-lukscolor.jpg",
  },
] as const;
