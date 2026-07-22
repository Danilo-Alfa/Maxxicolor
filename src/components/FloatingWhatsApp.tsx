import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

/** CTA fixo de conversao — visivel durante toda a rolagem. */
export function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener"
      aria-label="Falar com a Maxxi Color no WhatsApp"
      className="wa-pulse fixed right-4 bottom-4 z-50 flex size-14 items-center justify-center rounded-full bg-wa-500 text-wa-950 shadow-xl transition-transform duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wa-600 sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
