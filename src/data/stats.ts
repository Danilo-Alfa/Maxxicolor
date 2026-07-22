/**
 * TODO: confirmar os numeros reais da empresa antes de publicar.
 * Numeros verdadeiros geram confianca; numeros inflados destroem.
 */
export interface Stat {
  value: string;
  label: string;
}

export const stats: readonly Stat[] = [
  { value: "+10", label: "anos de mercado" },
  { value: "+5 mil", label: "clientes atendidos" },
  { value: "+2 mil", label: "cores disponíveis" },
  { value: "9", label: "departamentos completos" },
] as const;
