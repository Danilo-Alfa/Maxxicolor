import { MessageCircle, ClipboardList, PackageCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppCta } from "@/components/WhatsAppCta";

/** Sequencia real de compra — por isso os passos sao numerados. */
const steps = [
  {
    number: "1",
    icon: MessageCircle,
    title: "Chame no WhatsApp",
    description:
      "Conte o que você precisa: pode mandar foto do ambiente, lista de materiais ou o código da cor.",
  },
  {
    number: "2",
    icon: ClipboardList,
    title: "Receba seu orçamento",
    description:
      "Em minutos, um consultor responde com os produtos certos, preços e condições de pagamento.",
  },
  {
    number: "3",
    icon: PackageCheck,
    title: "Retire ou receba",
    description:
      "Pedido separado para retirada na loja ou entrega no seu endereço — você escolhe.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-mist py-20 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6">
        <SectionHeading
          eyebrow="Como funciona"
          title="Do orçamento à tinta na parede, sem complicação"
          subtitle="Três passos. Nenhum cadastro, nenhum carrinho — só uma conversa."
        />

        <div className="relative grid gap-10 sm:grid-cols-3 sm:gap-6">
          {/* Linha conectando os passos (apenas desktop) */}
          <div
            aria-hidden="true"
            className="absolute top-7 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200 sm:block"
          />

          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 120}>
              <div className="relative flex flex-col items-center gap-4 text-center">
                <span className="relative flex size-14 items-center justify-center rounded-2xl bg-navy-950 text-white shadow-lg shadow-navy-900/20">
                  <step.icon aria-hidden="true" className="size-6" />
                  <span className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-brand-500 font-display text-xs font-bold text-white">
                    {step.number}
                  </span>
                </span>
                <h3 className="font-display text-lg font-semibold text-navy-950">
                  {step.title}
                </h3>
                <p className="max-w-xs text-sm leading-relaxed text-ink/60">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex justify-center">
          <WhatsAppCta label="Começar agora pelo WhatsApp" size="lg" />
        </Reveal>
      </div>
    </section>
  );
}
