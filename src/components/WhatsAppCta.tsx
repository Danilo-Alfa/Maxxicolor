import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

interface WhatsAppCtaProps {
  label: string;
  message?: string;
  size?: "md" | "lg";
  className?: string;
}

/**
 * CTA principal da pagina. O verde WhatsApp e usado exclusivamente
 * em acoes de conversa — um unico codigo visual de conversao.
 */
export function WhatsAppCta({
  label,
  message,
  size = "md",
  className = "",
}: WhatsAppCtaProps) {
  const sizeClasses =
    size === "lg"
      ? "px-7 py-4 text-base gap-3"
      : "px-5 py-3 text-sm gap-2.5";

  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener"
      className={`inline-flex items-center justify-center rounded-full bg-wa-500 font-semibold text-wa-950 shadow-lg shadow-wa-500/25 transition duration-200 hover:bg-wa-400 hover:shadow-wa-500/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wa-600 active:scale-[0.98] ${sizeClasses} ${className}`}
    >
      <WhatsAppIcon className={size === "lg" ? "size-5" : "size-4"} />
      {label}
    </a>
  );
}
