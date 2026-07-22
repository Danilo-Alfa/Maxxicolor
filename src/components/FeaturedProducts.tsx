import Image from "next/image";
import { PaintBucket } from "lucide-react";
import { products } from "@/data/products";
import { waMessageFor } from "@/lib/whatsapp";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppCta } from "@/components/WhatsAppCta";

/** Tons de azul da marca para o topo dos cards sem foto. */
const placeholderTones = [
  "from-navy-900 to-brand-600",
  "from-brand-700 to-brand-400",
  "from-navy-800 to-brand-500",
] as const;

export function FeaturedProducts() {
  return (
    <section id="produtos" className="bg-white py-20 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6">
        <SectionHeading
          eyebrow="Produtos em destaque"
          title="Os mais pedidos pelos nossos clientes"
          subtitle="Preço e disponibilidade direto no WhatsApp — sem cadastro, sem espera. Estes são os campeões de saída da loja."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.id} delay={(i % 3) * 90} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-950/6 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-navy-900/8">
                {/* Cartela de cor: espaco reservado para a foto real do produto */}
                <div
                  className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${placeholderTones[i % placeholderTones.length]}`}
                >
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <PaintBucket
                      aria-hidden="true"
                      className="size-14 text-white/25 transition-transform duration-300 group-hover:scale-110"
                    />
                  )}
                  {product.badge ? (
                    <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-navy-900 shadow-sm">
                      {product.badge}
                    </span>
                  ) : null}
                </div>

                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold tracking-wide text-brand-600 uppercase">
                      {product.category}
                    </span>
                    <h3 className="font-display text-base font-semibold text-navy-950">
                      {product.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink/60">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-navy-950/6 pt-4">
                    <span className="text-sm font-medium text-ink/50">
                      Preço no WhatsApp
                    </span>
                    <WhatsAppCta
                      label="Orçar agora"
                      message={waMessageFor(product.name)}
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center">
          <p className="text-sm text-ink/55">
            Não achou o que procura? Temos muito mais na loja —{" "}
            <a
              href="#contato"
              className="font-semibold text-brand-600 underline-offset-4 hover:underline"
            >
              fale com a equipe
            </a>{" "}
            e receba a indicação certa.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
