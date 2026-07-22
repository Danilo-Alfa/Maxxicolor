import { Clock } from "lucide-react";
import { site } from "@/config/site";
import { Reveal } from "@/components/Reveal";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function FinalCta() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-56 left-1/2 size-[44rem] -translate-x-1/2 rounded-full border border-brand-400/12"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[28rem] w-[56rem] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(37,211,102,0.12),transparent)]"
      />

      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center gap-7 px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
          Seu orçamento está a uma{" "}
          <span className="bg-gradient-to-r from-wa-400 to-wa-500 bg-clip-text text-transparent">
            mensagem
          </span>{" "}
          de distância
        </h2>

        <p className="max-w-xl text-base leading-relaxed text-pretty text-brand-100/80 sm:text-lg">
          Sem cadastro, sem formulário, sem espera. Chame agora e receba a
          indicação certa com preço e condições — direto no seu WhatsApp.
        </p>

        <WhatsAppCta label="Chamar no WhatsApp agora" size="lg" />

        <div className="flex flex-col items-center gap-2 text-sm text-brand-100/70 sm:flex-row sm:gap-6">
          <span className="inline-flex items-center gap-2">
            <WhatsAppIcon className="size-4 text-wa-400" />
            {site.phoneDisplay}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock aria-hidden="true" className="size-4 text-brand-400" />
            {site.hours}
          </span>
        </div>
      </Reveal>
    </section>
  );
}
