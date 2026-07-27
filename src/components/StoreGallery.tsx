import { site } from "@/config/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppCta } from "@/components/WhatsAppCta";
import {
  GalleryFigure,
  type GalleryPhotoData,
} from "@/components/GalleryFigure";

const fachada: GalleryPhotoData = {
  src: "/loja/fachada.jpg",
  srcLarge: "/loja/fachada-grande.jpg",
  alt: `Fachada da loja ${site.name}`,
  caption: "Loja física com estoque completo, pronto para retirada",
  width: 720,
  height: 535,
};

const tintometrica: GalleryPhotoData = {
  src: "/loja/tintometrica.jpg",
  srcLarge: "/loja/tintometrica-grande.jpg",
  alt: "Máquina tintométrica Suvinil preparando cor personalizada",
  caption: "Sistema tintométrico: sua cor preparada na hora",
  width: 720,
  height: 920,
};

const fitas: GalleryPhotoData = {
  src: "/loja/fitas.jpg",
  srcLarge: "/loja/fitas-grande.jpg",
  alt: "Prateleiras de fitas e acessórios na loja",
  caption: "Departamentos completos além da tinta",
  width: 720,
  height: 450,
};

export function StoreGallery() {
  return (
    <section id="loja" className="bg-white py-20 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6">
        <SectionHeading
          eyebrow="Conheça a loja"
          title="Uma loja de verdade, com estoque de verdade"
          subtitle="Visite a Maxxi Color ou peça pelo WhatsApp — o pedido sai da prateleira direto para a sua obra. Clique nas fotos para ampliar."
        />

        <Reveal>
          {/*
            Fachada em destaque ocupando as duas linhas da esquerda;
            tintometrica e fitas menores, empilhadas na coluna direita
            (16/10 cada, somando a mesma altura da fachada).
          */}
          <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
            <GalleryFigure
              photo={fachada}
              className="aspect-[4/3] lg:row-span-2 lg:aspect-auto lg:h-full"
            />
            <GalleryFigure photo={tintometrica} className="aspect-[16/10]" />
            <GalleryFigure photo={fitas} className="aspect-[16/10]" />
          </div>
        </Reveal>

        <Reveal className="flex justify-center">
          <WhatsAppCta label="Falar com a loja agora" size="lg" />
        </Reveal>
      </div>
    </section>
  );
}
