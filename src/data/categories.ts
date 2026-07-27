export interface Category {
  id: string;
  title: string;
  description: string;
  examples: readonly string[];
  icon: "house" | "factory";
}

export const categories: readonly Category[] = [
  {
    id: "imobiliaria",
    title: "Linha Imobiliária",
    description:
      "Tintas para paredes internas, externas e fachadas, com alta cobertura e acabamento profissional.",
    examples: ["Acrílicas", "Esmaltes", "Massas", "Tinta piso"],
    icon: "house",
  },
  {
    id: "industrial",
    title: "Linha Industrial",
    description:
      "Proteção e durabilidade para pisos, máquinas e estruturas metálicas em ambientes exigentes.",
    examples: ["Epóxi", "Poliuretano", "Antiferrugem", "Demarcação"],
    icon: "factory",
  },
] as const;
