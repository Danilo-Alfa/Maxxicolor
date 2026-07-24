/**
 * Catalogo de cores do sistema tintometrico SelfColor (Suvinil) —
 * 1.768 cores reais do leque, com nome e codigo que o vendedor usa
 * na maquina da loja. Servido em /selfcolor.json (fora do bundle JS).
 */
export interface SelfColorEntry {
  name: string;
  code: string;
  hex: string;
}

interface RawEntry {
  n: string;
  c: string;
  h: string;
}

export async function loadSelfColorCatalog(): Promise<SelfColorEntry[]> {
  const response = await fetch("/selfcolor.json");
  if (!response.ok) {
    throw new Error(`Falha ao carregar catálogo SelfColor (${response.status})`);
  }
  const raw: RawEntry[] = await response.json();
  return raw.map((entry) => ({ name: entry.n, code: entry.c, hex: entry.h }));
}

type Lab = readonly [number, number, number];

/** Converte sRGB para CIELAB (D65) — base para distancia perceptual. */
export function hexToLab(hex: string): Lab {
  const channels = [1, 3, 5].map((i) => {
    const srgb = parseInt(hex.slice(i, i + 2), 16) / 255;
    return srgb <= 0.04045 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4;
  });
  const [r, g, b] = channels as [number, number, number];

  const x = (0.4124 * r + 0.3576 * g + 0.1805 * b) / 0.95047;
  const y = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  const z = (0.0193 * r + 0.1192 * g + 0.9505 * b) / 1.08883;

  const f = (t: number) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
  const [fx, fy, fz] = [f(x), f(y), f(z)];

  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
}

/**
 * Cor do catalogo perceptualmente mais proxima do tom escolhido
 * (deltaE76 em CIELAB). `labs` deve ser pre-computado do catalogo.
 */
export function nearestSelfColor(
  hex: string,
  catalog: readonly SelfColorEntry[],
  labs: readonly Lab[],
): SelfColorEntry | null {
  if (catalog.length === 0) return null;
  const [l, a, b] = hexToLab(hex);
  let bestIndex = 0;
  let bestDistance = Infinity;
  for (let i = 0; i < labs.length; i++) {
    const [l2, a2, b2] = labs[i];
    const distance = (l - l2) ** 2 + (a - a2) ** 2 + (b - b2) ** 2;
    if (distance < bestDistance) {
      bestDistance = distance;
      bestIndex = i;
    }
  }
  return catalog[bestIndex];
}
