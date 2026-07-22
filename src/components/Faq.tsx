import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

/**
 * Accordion com <details>/<summary> nativo: acessivel por teclado,
 * indexavel pelo Google e zero JavaScript.
 */
export function Faq() {
  return (
    <section id="duvidas" className="bg-mist py-20 sm:py-28">
      <div className="mx-auto flex max-w-3xl flex-col gap-12 px-4 sm:px-6">
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title="Tudo o que você precisa saber antes de pedir"
          subtitle="Se a sua dúvida não estiver aqui, é só chamar no WhatsApp."
        />

        <div className="flex flex-col gap-3">
          {faqItems.map((item, i) => (
            <Reveal key={item.question} delay={i * 60}>
              <details className="faq-item group rounded-2xl border border-navy-950/8 bg-white transition-colors open:border-brand-300 open:bg-brand-50/40">
                <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left font-display text-base font-semibold text-navy-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:px-6">
                  {item.question}
                  <ChevronDown
                    aria-hidden="true"
                    className="faq-chevron size-5 shrink-0 text-brand-600 transition-transform duration-200"
                  />
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-ink/70 sm:px-6">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
