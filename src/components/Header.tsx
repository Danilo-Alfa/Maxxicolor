import { site } from "@/config/site";
import { WhatsAppCta } from "@/components/WhatsAppCta";

const navLinks = [
  { href: "#cores", label: "Cores" },
  { href: "#categorias", label: "Categorias" },
  { href: "#produtos", label: "Produtos" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#duvidas", label: "Dúvidas" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-navy-950/8 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#inicio" aria-label={`${site.name} — início`} className="shrink-0">
          {/* img nativa com fetchpriority: e o candidato a LCP do header */}
          <img
            src="/logo.png"
            alt={`Logo ${site.name}`}
            width={148}
            height={48}
            fetchPriority="high"
            className="h-9 w-auto"
          />
        </a>

        <nav aria-label="Seções da página" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-ink/70 transition-colors hover:text-navy-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <WhatsAppCta label="Orçamento grátis" />
      </div>
    </header>
  );
}
