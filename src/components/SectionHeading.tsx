import { Reveal } from "@/components/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Cores invertidas para secoes com fundo escuro. */
  dark?: boolean;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
  align = "center",
}: SectionHeadingProps) {
  const alignClasses =
    align === "center" ? "mx-auto text-center items-center" : "items-start";

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignClasses}`}>
      <span
        className={`inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase ${
          dark ? "text-brand-300" : "text-brand-600"
        }`}
      >
        <span
          aria-hidden="true"
          className="h-px w-8 bg-gradient-to-r from-navy-800 to-brand-400"
        />
        {eyebrow}
      </span>
      <h2
        className={`font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl ${
          dark ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`text-base leading-relaxed text-pretty sm:text-lg ${
            dark ? "text-brand-100/80" : "text-ink/65"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}
