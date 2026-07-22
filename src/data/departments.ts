/** Departamentos alem das tintas — catalogo real da loja. */
export interface Department {
  title: string;
  items: string;
  icon:
    | "disc"
    | "flask"
    | "brush"
    | "layers"
    | "hardhat"
    | "droplets"
    | "zap"
    | "shield";
}

export const departments: readonly Department[] = [
  {
    title: "Fitas",
    items: "Crepe, isolante, dupla face e demarcação",
    icon: "disc",
  },
  {
    title: "Solventes e diluentes",
    items: "Thinner, aguarrás e diluentes",
    icon: "flask",
  },
  {
    title: "Acessórios de pintura",
    items: "Rolos, pincéis, bandejas e espátulas",
    icon: "brush",
  },
  {
    title: "Abrasivos",
    items: "Lixas e discos diamantados",
    icon: "layers",
  },
  {
    title: "EPIs",
    items: "Botas, luvas, capacetes, máscaras e coletes",
    icon: "hardhat",
  },
  {
    title: "Colas e adesivos",
    items: "Massa epóxi, espuma expansiva, PU e silicone",
    icon: "droplets",
  },
  {
    title: "Elétrica",
    items: "Lâmpadas, extensões, disjuntores e conduítes",
    icon: "zap",
  },
  {
    title: "Lonas e forração",
    items: "Plástico bolha e protetor de piso",
    icon: "shield",
  },
] as const;
