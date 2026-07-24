"use client";

import { useEffect, useMemo, useState } from "react";
import Wheel from "@uiw/react-color-wheel";
import ShadeSlider from "@uiw/react-color-shade-slider";
import { hexToHsva, hsvaToHex, type HsvaColor } from "@uiw/color-convert";
import {
  hexToLab,
  loadSelfColorCatalog,
  nearestSelfColor,
  type SelfColorEntry,
} from "@/lib/selfcolor";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppCta } from "@/components/WhatsAppCta";

/** Tons de partida: cores reais do leque SelfColor (Suvinil). */
const quickPicks: readonly SelfColorEntry[] = [
  { name: "Borboleta Azul", code: "D079", hex: "#3d88c4" },
  { name: "Azul-glacial", code: "E333", hex: "#58afd5" },
  { name: "Cavalinha", code: "E315", hex: "#559e78" },
  { name: "Seiva de Cajueiro", code: "E029", hex: "#e4c177" },
  { name: "Tijolo", code: "R121", hex: "#c16c45" },
  { name: "Suco de Framboesa", code: "P572", hex: "#a42d46" },
  { name: "Tulipa Violeta", code: "D087", hex: "#a295bf" },
  { name: "Marinheiro", code: "R397", hex: "#3d434e" },
];

const HEX_PATTERN = /^#?([0-9a-f]{6})$/i;
const CODE_PATTERN = /^[a-z]\d{3,4}$/i;

export function ColorStudio() {
  const [hsva, setHsva] = useState<HsvaColor>({ h: 205, s: 84, v: 75, a: 1 });
  const [hexDraft, setHexDraft] = useState<string | null>(null);
  const [inputError, setInputError] = useState(false);
  const [catalog, setCatalog] = useState<readonly SelfColorEntry[]>([]);

  useEffect(() => {
    let active = true;
    loadSelfColorCatalog()
      .then((colors) => {
        if (active) setCatalog(colors);
      })
      .catch(() => {
        // Sem catalogo, o estudio segue funcional enviando o hex escolhido
      });
    return () => {
      active = false;
    };
  }, []);

  const labs = useMemo(
    () => catalog.map((entry) => hexToLab(entry.hex)),
    [catalog],
  );

  const hex = hsvaToHex(hsva);
  const match = useMemo(
    () => nearestSelfColor(hex, catalog, labs),
    [hex, catalog, labs],
  );

  const waMessage = match
    ? `Olá! Escolhi uma cor no site e gostaria de um orçamento. ` +
      `Cor SelfColor: ${match.name} (código ${match.code}).`
    : `Olá! Escolhi uma cor no site e gostaria de um orçamento. ` +
      `Cor: ${hex.toUpperCase()}.`;

  /** Aceita hex (#73BF87) ou codigo do leque SelfColor (D627). */
  function applyColorInput(value: string) {
    const raw = value.trim();
    if (raw === "") {
      setHexDraft(null);
      setInputError(false);
      return;
    }

    const asHex = HEX_PATTERN.exec(raw);
    if (asHex) {
      setHsva({ ...hexToHsva(`#${asHex[1]}`), a: 1 });
      setHexDraft(null);
      setInputError(false);
      return;
    }

    const asCode = CODE_PATTERN.exec(raw.replace(/[\s-]/g, ""));
    if (asCode) {
      const found = catalog.find(
        (entry) => entry.code.toLowerCase() === asCode[0].toLowerCase(),
      );
      if (found) {
        setHsva({ ...hexToHsva(found.hex), a: 1 });
        setHexDraft(null);
        setInputError(false);
        return;
      }
    }

    setInputError(true);
  }

  return (
    <section
      id="cores"
      className="relative overflow-hidden border-t border-white/10 bg-navy-950 py-20 text-white sm:py-28"
    >
      {/* Glow ambiente acompanha a cor do leque */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 opacity-25 blur-3xl transition-colors duration-700"
        style={{
          background: `radial-gradient(closest-side, ${match?.hex ?? hex}, transparent)`,
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-14 px-4 sm:px-6">
        <SectionHeading
          dark
          eyebrow="Estúdio de cores · Sistema SelfColor"
          title="Imaginou a cor? Gire a roda e mande para a gente"
          subtitle="A cada tom escolhido, mostramos a cor equivalente no leque SelfColor da Suvinil — a mesma que a máquina tintométrica da loja prepara na hora."
        />

        <Reveal>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Roda + tom + hex */}
            <div className="flex flex-col items-center gap-7">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 rounded-full opacity-35 blur-2xl transition-colors duration-500"
                  style={{ backgroundColor: match?.hex ?? hex }}
                />
                <div className="relative rounded-full border border-white/10 bg-navy-900/60 p-5 shadow-2xl backdrop-blur">
                  <Wheel
                    color={hsva}
                    width={260}
                    height={260}
                    onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
                  />
                </div>
              </div>

              <div className="flex w-72 flex-col gap-2">
                <label
                  htmlFor="tom"
                  className="text-xs font-semibold tracking-wide text-brand-200 uppercase"
                >
                  Intensidade do tom
                </label>
                <div id="tom" className="overflow-hidden rounded-full">
                  <ShadeSlider
                    hsva={hsva}
                    style={{ width: "100%", height: 16 }}
                    onChange={(shade) => setHsva({ ...hsva, ...shade })}
                  />
                </div>
              </div>

              <div className="flex w-72 flex-col gap-2">
                <label
                  htmlFor="cor-codigo"
                  className="text-xs font-semibold tracking-wide text-brand-200 uppercase"
                >
                  Hex ou código do leque
                </label>
                <input
                  id="cor-codigo"
                  type="text"
                  inputMode="text"
                  autoComplete="off"
                  spellCheck={false}
                  placeholder="#73BF87 ou D627"
                  value={hexDraft ?? hex.toUpperCase()}
                  onChange={(event) => {
                    setHexDraft(event.target.value);
                    setInputError(false);
                  }}
                  onBlur={(event) => applyColorInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter")
                      applyColorInput(event.currentTarget.value);
                  }}
                  aria-invalid={inputError}
                  className={`w-full rounded-full border bg-navy-900/70 px-4 py-2 text-sm font-medium tracking-wider text-white uppercase focus:outline-none ${
                    inputError
                      ? "border-red-400 focus:border-red-400"
                      : "border-white/15 focus:border-brand-400"
                  }`}
                  aria-label="Código hexadecimal ou código SelfColor da cor"
                />
                <p
                  className={`text-xs leading-relaxed ${
                    inputError ? "text-red-300" : "text-brand-100/50"
                  }`}
                  role={inputError ? "alert" : undefined}
                >
                  {inputError
                    ? "Não encontramos essa cor. Use um hex (#73BF87) ou um código do leque, como D627."
                    : "Aceita os dois: hex (#73BF87) ou código SelfColor (D627)."}
                </p>
              </div>
            </div>

            {/* Cartela SelfColor ao vivo + envio */}
            <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold tracking-wide text-brand-200 uppercase">
                  Ou comece por um tom do leque
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {quickPicks.map((pick) => (
                    <button
                      key={pick.code}
                      type="button"
                      title={`${pick.name} · ${pick.code}`}
                      aria-label={`Selecionar cor ${pick.name}, código ${pick.code}`}
                      onClick={() => setHsva({ ...hexToHsva(pick.hex), a: 1 })}
                      className={`size-9 rounded-full border-2 transition-transform duration-150 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300 ${
                        hex.toLowerCase() === pick.hex
                          ? "border-white"
                          : "border-white/25"
                      }`}
                      style={{ backgroundColor: pick.hex }}
                    />
                  ))}
                </div>
              </div>

              {/* Cartela no mesmo estilo do leque do hero */}
              <div className="overflow-hidden rounded-2xl bg-white shadow-2xl shadow-navy-950/50">
                <div
                  className="h-36 transition-colors duration-300 sm:h-44"
                  style={{ backgroundColor: match?.hex ?? hex }}
                />
                <div className="flex items-end justify-between gap-3 px-5 py-4">
                  <div className="flex flex-col gap-1.5">
                    <span className="font-display text-lg leading-tight font-semibold text-navy-950">
                      {match ? match.name : hex.toUpperCase()}
                    </span>
                    {match ? (
                      <span className="flex flex-wrap items-center gap-1.5">
                        <span className="rounded-md bg-brand-50 px-1.5 py-0.5 text-xs font-bold tracking-wider text-brand-700">
                          {match.code}
                        </span>
                        <span className="rounded-md bg-mist px-1.5 py-0.5 text-xs font-semibold tracking-wider text-navy-900">
                          {match.hex.toUpperCase()}
                        </span>
                      </span>
                    ) : (
                      <span className="text-xs tracking-wide text-ink/55">
                        Carregando o leque SelfColor…
                      </span>
                    )}
                  </div>
                  <span className="text-right text-[10px] leading-snug text-ink/40">
                    SelfColor
                    <br />
                    Suvinil
                  </span>
                </div>
              </div>

              <WhatsAppCta
                label="Enviar cor para o vendedor"
                message={waMessage}
                size="lg"
                className="w-full"
              />

              <p className="text-center text-xs leading-relaxed text-brand-100/60">
                Mostramos a cor do leque SelfColor mais próxima do tom
                escolhido. As cores da tela são aproximadas — confirmamos o
                tom exato na loja antes de preparar a tinta.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
