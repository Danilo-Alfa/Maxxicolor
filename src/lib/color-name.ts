import type { HsvaColor } from "@uiw/color-convert";

interface NamedColor {
  name: string;
  code: string;
}

const hueRanges: readonly { max: number; name: string }[] = [
  { max: 14, name: "Vermelho" },
  { max: 39, name: "Laranja" },
  { max: 64, name: "Amarelo" },
  { max: 94, name: "Verde-lima" },
  { max: 149, name: "Verde" },
  { max: 179, name: "Verde-água" },
  { max: 199, name: "Azul-piscina" },
  { max: 254, name: "Azul" },
  { max: 279, name: "Anil" },
  { max: 304, name: "Violeta" },
  { max: 334, name: "Rosa" },
  { max: 360, name: "Vermelho" },
];

function baseName(hue: number): string {
  const normalized = ((hue % 360) + 360) % 360;
  return hueRanges.find((range) => normalized <= range.max)?.name ?? "Cor";
}

function neutralName(v: number): string {
  if (v > 88) return "Branco Neve";
  if (v > 60) return "Cinza Claro";
  if (v > 35) return "Cinza Urbano";
  return "Grafite";
}

function tone(s: number, v: number): string {
  if (v < 32) return "Profundo";
  if (v < 55) return "Escuro";
  if (s < 38) return "Suave";
  if (v > 82 && s < 65) return "Claro";
  return "";
}

/** Da um nome em portugues e um codigo interno a cor escolhida na roda. */
export function nameColor(hsva: HsvaColor): NamedColor {
  const h = Math.round(hsva.h);
  const s = Math.round(hsva.s);
  const v = Math.round(hsva.v);

  const code = `MX-${String(h).padStart(3, "0")}-${String(v).padStart(2, "0")}`;

  if (s < 10) {
    return { name: neutralName(v), code };
  }

  const modifier = tone(s, v);
  const base = baseName(h);
  return { name: modifier ? `${base} ${modifier}` : base, code };
}
