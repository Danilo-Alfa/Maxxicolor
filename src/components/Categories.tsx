import {
  ArrowRight,
  Disc,
  Droplets,
  Factory,
  FlaskConical,
  HardHat,
  House,
  Layers,
  Paintbrush,
  Shield,
  Zap,
} from "lucide-react";
import { categories, type Category } from "@/data/categories";
import { departments, type Department } from "@/data/departments";
import { waLink, waMessageFor } from "@/lib/whatsapp";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const categoryIcons: Record<Category["icon"], typeof House> = {
  house: House,
  factory: Factory,
};

const departmentIcons: Record<Department["icon"], typeof House> = {
  disc: Disc,
  flask: FlaskConical,
  brush: Paintbrush,
  layers: Layers,
  hardhat: HardHat,
  droplets: Droplets,
  zap: Zap,
  shield: Shield,
};

export function Categories() {
  return (
    <section id="categorias" className="bg-mist py-20 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6">
        <SectionHeading
          eyebrow="O que você encontra aqui"
          title="Duas linhas de tinta e tudo o que a obra pede"
          subtitle="Da parede da sala ao piso da fábrica — com os acessórios, EPIs e complementos para o serviço inteiro em um só lugar."
        />

        <div className="mx-auto grid w-full max-w-4xl gap-5 sm:grid-cols-2">
          {categories.map((category, i) => {
            const Icon = categoryIcons[category.icon];
            return (
              <Reveal key={category.id} delay={i * 90} className="h-full">
                <article className="group flex h-full flex-col gap-4 rounded-2xl border border-navy-950/6 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/8">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>

                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display text-lg font-semibold text-navy-950">
                      {category.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink/60">
                      {category.description}
                    </p>
                  </div>

                  <ul className="flex flex-wrap gap-1.5">
                    {category.examples.map((example) => (
                      <li
                        key={example}
                        className="rounded-full bg-mist px-2.5 py-1 text-xs font-medium text-navy-900/70"
                      >
                        {example}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink(waMessageFor(`produtos da ${category.title}`))}
                    target="_blank"
                    rel="noopener"
                    className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                  >
                    Pedir orçamento
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <h3 className="mb-5 text-center font-display text-lg font-semibold text-navy-950">
            E os departamentos que completam o serviço
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((department) => {
              const Icon = departmentIcons[department.icon];
              return (
                <div
                  key={department.title}
                  className="flex items-start gap-3 rounded-xl border border-navy-950/6 bg-white p-4"
                >
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <Icon aria-hidden="true" className="size-4" />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <h4 className="text-sm font-semibold text-navy-950">
                      {department.title}
                    </h4>
                    <p className="text-xs leading-relaxed text-ink/55">
                      {department.items}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
