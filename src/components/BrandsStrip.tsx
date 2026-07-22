import { brandGroups } from "@/data/brands";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function BrandsStrip() {
  return (
    <section id="marcas" className="bg-mist py-16 sm:py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 sm:px-6">
        <SectionHeading
          eyebrow="Marcas parceiras"
          title="As marcas que o profissional confia"
          subtitle="Só fabricantes consolidados, em todos os departamentos da loja."
        />

        <Reveal>
          <dl className="flex flex-col gap-4">
            {brandGroups.map((group) => (
              <div
                key={group.label}
                className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4"
              >
                <dt className="w-24 shrink-0 text-xs font-semibold tracking-[0.14em] text-brand-600 uppercase">
                  {group.label}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {group.brands.map((brand) => (
                    <span
                      key={`${group.label}-${brand}`}
                      className="rounded-full border border-navy-950/8 bg-white px-4 py-1.5 text-sm font-semibold text-navy-900"
                    >
                      {brand}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
