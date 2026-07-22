/**
 * Marcas realmente trabalhadas pela loja (confirmadas pelo cliente).
 * Importante: a loja NAO trabalha com Brasilit — nunca incluir.
 */
export interface BrandGroup {
  label: string;
  brands: readonly string[];
}

export const brandGroups: readonly BrandGroup[] = [
  {
    label: "Tintas",
    brands: ["Suvinil", "Coral", "Eucatex", "Maza", "Magna", "Lukscolor", "Alessi"],
  },
  {
    label: "Fitas",
    brands: ["Adere", "Koretech", "Tekbond", "Adelbras", "Tigre"],
  },
  {
    label: "Solventes",
    brands: ["Natrielli", "Itaqua", "Eucatex", "Maza"],
  },
  {
    label: "Acessórios",
    brands: ["Tigre", "Atlas", "Condor", "Roma", "Compel"],
  },
] as const;
