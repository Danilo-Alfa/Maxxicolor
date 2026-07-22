import { Clock, Mail, MapPin } from "lucide-react";
import { site } from "@/config/site";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";

const footerLinks = [
  { href: "#categorias", label: "Categorias" },
  { href: "#produtos", label: "Produtos" },
  { href: "#marcas", label: "Marcas" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#loja", label: "A loja" },
  { href: "#cores", label: "Estúdio de cores" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#duvidas", label: "Dúvidas frequentes" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  const fullAddress = `${site.address.street} — ${site.address.district}, ${site.address.city}/${site.address.state}`;

  return (
    <footer className="border-t border-white/10 bg-navy-950 text-brand-100/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div className="flex flex-col items-start gap-4">
          <span className="rounded-xl bg-white px-4 py-2.5">
            <img
              src="/logo.png"
              alt={`Logo ${site.name}`}
              width={148}
              height={48}
              loading="lazy"
              className="h-8 w-auto"
            />
          </span>
          <p className="max-w-xs text-sm leading-relaxed">
            {site.description}
          </p>
          <div className="flex gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener"
              aria-label={`Instagram da ${site.name}`}
              className="flex size-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-brand-400 hover:text-brand-300"
            >
              <InstagramIcon className="size-4" />
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener"
              aria-label={`Facebook da ${site.name}`}
              className="flex size-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-brand-400 hover:text-brand-300"
            >
              <FacebookIcon className="size-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Links do rodapé">
          <h3 className="mb-4 font-display text-sm font-semibold tracking-wide text-white uppercase">
            Navegação
          </h3>
          <ul className="flex flex-col gap-2.5">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 font-display text-sm font-semibold tracking-wide text-white uppercase">
            Contato
          </h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <WhatsAppIcon className="size-4 shrink-0 text-wa-400" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
              >
                <Mail aria-hidden="true" className="size-4 shrink-0 text-brand-400" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-brand-400"
              />
              {fullAddress}
            </li>
            <li className="flex items-start gap-2.5">
              <Clock
                aria-hidden="true"
                className="mt-0.5 size-4 shrink-0 text-brand-400"
              />
              {site.hours}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-brand-100/70 sm:px-6">
          © {year} {site.legalName}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
