import {
  Award,
  BadgePercent,
  CreditCard,
  Palette,
  Truck,
  UserCheck,
} from "lucide-react";
import { features, type Feature } from "@/data/features";
import { stats } from "@/data/stats";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const iconMap: Record<Feature["icon"], typeof Award> = {
  userCheck: UserCheck,
  award: Award,
  palette: Palette,
  truck: Truck,
  creditCard: CreditCard,
  percent: BadgePercent,
};

export function WhyUs() {
  return (
    <section
      id="diferenciais"
      className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-48 size-[36rem] rounded-full border border-brand-400/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-[24rem] w-[50rem] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(47,150,216,0.16),transparent)]"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-14 px-4 sm:px-6">
        <SectionHeading
          dark
          eyebrow="Por que a Maxxi Color"
          title="Uma loja de tintas feita para resolver, não só vender"
          subtitle="Quem chega pela primeira vez fica. Estes são os motivos."
        />

        <Reveal>
          <dl className="grid grid-cols-2 gap-8 border-y border-white/10 py-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 text-center">
                <dd className="font-display text-3xl font-bold text-brand-300 sm:text-4xl">
                  {stat.value}
                </dd>
                <dt className="text-sm text-brand-100/70">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon];
            return (
              <Reveal key={feature.title} delay={(i % 3) * 90}>
                <div className="flex flex-col gap-3.5">
                  <span className="flex size-11 items-center justify-center rounded-xl border border-brand-400/25 bg-brand-400/10 text-brand-300">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-brand-100/70">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
