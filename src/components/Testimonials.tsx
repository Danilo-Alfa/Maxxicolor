import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? "") : "";
  return `${first}${last}`.toUpperCase();
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-white py-20 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6">
        <SectionHeading
          eyebrow="Quem compra, recomenda"
          title="A opinião de quem vive de pintura"
          subtitle="Pintores, arquitetos e oficinas que escolheram a Maxxi Color como fornecedor."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 90} className="h-full">
              <figure className="flex h-full flex-col gap-4 rounded-2xl border border-navy-950/6 bg-white p-6 shadow-sm">
                <div
                  className="flex gap-0.5 text-brand-500"
                  role="img"
                  aria-label="Avaliação: 5 de 5 estrelas"
                >
                  {Array.from({ length: 5 }, (_, star) => (
                    <Star
                      key={star}
                      aria-hidden="true"
                      className="size-4 fill-current"
                    />
                  ))}
                </div>

                <blockquote className="flex-1 text-sm leading-relaxed text-ink/75">
                  “{testimonial.quote}”
                </blockquote>

                <figcaption className="flex items-center gap-3 border-t border-navy-950/6 pt-4">
                  <span
                    aria-hidden="true"
                    className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-navy-900 to-brand-500 text-sm font-semibold text-white"
                  >
                    {initials(testimonial.name)}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-navy-950">
                      {testimonial.name}
                    </span>
                    <span className="text-xs text-ink/55">
                      {testimonial.role}
                    </span>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
