import { site } from "@/config/site";

/** Monta o link wa.me com mensagem pre-preenchida. */
export function waLink(message: string = site.whatsapp.defaultMessage): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

/** Mensagem personalizada para orcamento de um produto/categoria especifico. */
export function waMessageFor(item: string): string {
  return `Olá! Vim pelo site e gostaria de um orçamento de ${item}.`;
}
