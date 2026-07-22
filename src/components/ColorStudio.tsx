"use client";

import { useState } from "react";
import Wheel from "@uiw/react-color-wheel";
import ShadeSlider from "@uiw/react-color-shade-slider";
import { hexToHsva, hsvaToHex, type HsvaColor } from "@uiw/color-convert";
import { nameColor } from "@/lib/color-name";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppCta } from "@/components/WhatsAppCta";

/** Tons de partida: um clique e a roda salta para a cor. */
const quickPicks: readonly { name: string; hex: string }[] = [
  { name: "Azul Maxxi", hex: "#1f7dbf" },
  { name: "Azul Sereno", hex: "#56aede" },
  { name: "Verde Eucalipto", hex: "#4d8f6e" },
  { name: "Amarelo Areia", hex: "#e3c26a" },
  { name: "Terracota", hex: "#c26744" },
  { name: "Vermelho Cereja", hex: "#a63446" },
  { name: "Lilás Suave", hex: "#a68cc7" },
  { name: "Grafite", hex: "#3a4351" },
];

const HEX_PATTERN = /^#?([0-9a-f]{6})$/i;

export function ColorStudio() {
  const [hsva, setHsva] = useState<HsvaColor>({ h: 205, s: 84, v: 75, a: 1 });
  const [hexDraft, setHexDraft] = useState<string | null>(null);

  const hex = hsvaToHex(hsva);
  const { name, code } = nameColor(hsva);

  const waMessage =
    `Olá! Escolhi uma cor no seletor do site e gostaria de um orçamento. ` +
    `Cor: ${name} (código ${code}, hex ${hex.toUpperCase()}).`;

  function applyHexDraft(value: string) {
    const match = HEX_PATTERN.exec(value.trim());
    if (match) setHsva({ ...hexToHsva(`#${match[1]}`), a: 1 });
    setHexDraft(null);
  }

  return (
    <section
      id="cores"
      className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28"
    >
      {/* Glow ambiente acompanha a cor escolhida */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-[30rem] w-[60rem] -translate-x-1/2 opacity-25 blur-3xl transition-colors duration-700"
        style={{
          background: `radial-gradient(closest-side, ${hex}, transparent)`,
        }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-14 px-4 sm:px-6">
        <SectionHeading
          dark
          eyebrow="Estúdio de cores"
          title="Imaginou a cor? Gire a roda e mande para a gente"
          subtitle="Escolha o tom, ajuste a intensidade e envie direto para um vendedor — a máquina tintométrica prepara a sua cor na hora."
        />

        <Reveal>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Roda + tom + hex */}
            <div className="flex flex-col items-center gap-7">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 rounded-full opacity-35 blur-2xl transition-colors duration-500"
                  style={{ backgroundColor: hex }}
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

              <div className="flex w-72 items-center gap-3">
                <label
                  htmlFor="hex"
                  className="text-xs font-semibold tracking-wide text-brand-200 uppercase"
                >
                  Hex
                </label>
                <input
                  id="hex"
                  type="text"
                  inputMode="text"
                  autoComplete="off"
                  spellCheck={false}
                  value={hexDraft ?? hex.toUpperCase()}
                  onChange={(event) => setHexDraft(event.target.value)}
                  onBlur={(event) => applyHexDraft(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter")
                      applyHexDraft(event.currentTarget.value);
                  }}
                  className="w-full rounded-full border border-white/15 bg-navy-900/70 px-4 py-2 text-sm font-medium tracking-wider text-white uppercase focus:border-brand-400 focus:outline-none"
                  aria-label="Código hexadecimal da cor"
                />
              </div>
            </div>

            {/* Cartela ao vivo + envio */}
            <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold tracking-wide text-brand-200 uppercase">
                  Ou comece por um tom pronto
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {quickPicks.map((pick) => (
                    <button
                      key={pick.hex}
                      type="button"
                      title={pick.name}
                      aria-label={`Selecionar cor ${pick.name}`}
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
                  style={{ backgroundColor: hex }}
                />
                <div className="flex items-end justify-between gap-3 px-5 py-4">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-display text-lg leading-tight font-semibold text-navy-950">
                      {name}
                    </span>
                    <span className="text-xs tracking-wide text-ink/55">
                      {code} · {hex.toUpperCase()}
                    </span>
                  </div>
                  <span className="text-[10px] leading-snug text-ink/40">
                    Cartela
                    <br />
                    Maxxi Color
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
                As cores da tela são aproximadas. Na loja, confirmamos o tom
                exato com você antes de preparar a tinta.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
