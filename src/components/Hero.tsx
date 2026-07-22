import type { CSSProperties } from "react";
import { Palette, Clock, CreditCard } from "lucide-react";
import { WhatsAppCta } from "@/components/WhatsAppCta";

/** Cartelas do leque: os proprios azuis da identidade viram amostras de tinta. */
const swatches = [
  { color: "#0c2d4d", name: "Azul Marinho", code: "MX-900" },
  { color: "#17679f", name: "Azul Atlântico", code: "MX-700" },
  { color: "#1f7dbf", name: "Azul Maxxi", code: "MX-600" },
  { color: "#2f96d8", name: "Azul Céu", code: "MX-500" },
  { color: "#56aede", name: "Azul Sereno", code: "MX-400" },
] as const;

const trustChips = [
  { icon: Clock, label: "Resposta rápida no WhatsApp" },
  { icon: Palette, label: "Cor sob medida na hora" },
  { icon: CreditCard, label: "Pagamento facilitado" },
] as const;

function riseDelay(ms: number): CSSProperties {
  return { "--rise-delay": `${ms}ms` } as CSSProperties;
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-navy-950 text-white"
    >
      {/* Arcos concentricos: eco do simbolo circular da logo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 size-[34rem] rounded-full border border-brand-400/15 sm:size-[44rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 size-[26rem] rounded-full border border-brand-400/10 sm:size-[34rem]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[30rem] w-[40rem] bg-[radial-gradient(closest-side,rgba(47,150,216,0.28),transparent)]"
      />

      <div className="mx-auto grid max-w-6xl gap-14 px-4 pt-16 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:pt-24 lg:pb-28">
        <div className="flex max-w-xl flex-col items-start gap-6">
          <div className="rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/25 bg-brand-400/10 px-4 py-1.5 text-xs font-medium tracking-wide text-brand-200">
              Tintas e tudo para pintura e obra em um só lugar
            </span>
          </div>

          {/* Sem animacao de opacity: o h1 e o candidato a LCP e deve pintar imediatamente */}
          <h1 className="font-display text-4xl leading-[1.08] font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
            A cor certa, a tinta certa e o{" "}
            <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
              orçamento em minutos.
            </span>
          </h1>

          <p
            className="rise text-base leading-relaxed text-pretty text-brand-100/85 sm:text-lg"
            style={riseDelay(160)}
          >
            A Maxxi Color atende do pintor profissional à sua primeira reforma:
            marcas líderes, cor preparada sob medida e uma equipe que indica
            exatamente o que o seu projeto precisa.
          </p>

          <div
            className="rise flex flex-wrap items-center gap-3"
            style={riseDelay(240)}
          >
            <WhatsAppCta
              label="Pedir orçamento grátis"
              size="lg"
              className="w-full sm:w-auto"
            />
            <a
              href="#produtos"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-7 py-4 text-base font-semibold text-white transition duration-200 hover:border-white/40 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300 sm:w-auto"
            >
              Ver produtos
            </a>
          </div>

          <ul
            className="rise mt-2 flex flex-wrap gap-x-6 gap-y-2"
            style={riseDelay(320)}
          >
            {trustChips.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm text-brand-100/70"
              >
                <Icon aria-hidden="true" className="size-4 text-brand-400" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Assinatura visual: leque de cartelas de cor, 100% CSS */}
        <div className="relative mx-auto w-full max-w-md">
          <div aria-hidden="true" className="fan relative h-72 sm:h-80">
            {swatches.map((swatch, i) => (
              <div
                key={swatch.code}
                className="fan-chip absolute bottom-0 left-1/2 flex h-56 w-28 flex-col overflow-hidden rounded-xl bg-white shadow-xl shadow-navy-950/40 sm:h-64 sm:w-32"
                style={
                  {
                    "--rot": `${(i - 2) * 14}deg`,
                    "--fan-delay": `${200 + i * 90}ms`,
                  } as CSSProperties
                }
              >
                <div
                  className="flex-1"
                  style={{ backgroundColor: swatch.color }}
                />
                <div className="flex flex-col gap-0.5 px-3 py-2.5">
                  <span className="text-[11px] leading-none font-semibold text-navy-950">
                    {swatch.name}
                  </span>
                  <span className="text-[10px] leading-none tracking-wide text-ink/50">
                    {swatch.code}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div
            className="rise absolute -bottom-14 left-1/2 flex -translate-x-1/2 items-center gap-2.5 rounded-full border border-white/10 bg-navy-900/80 py-2 pr-5 pl-2.5 whitespace-nowrap shadow-lg backdrop-blur"
            style={riseDelay(700)}
          >
            <span className="flex size-8 items-center justify-center rounded-full bg-brand-400/15">
              <Palette aria-hidden="true" className="size-4 text-brand-300" />
            </span>
            <p className="text-xs font-medium text-brand-100">
              Mais de 2.000 cores — preparamos a sua na hora
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
