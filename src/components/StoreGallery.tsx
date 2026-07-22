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
  height: 620,
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
            Proporcoes calculadas para as colunas fecharem na mesma altura:
            esquerda = fachada (7/6) + fitas (16/10); direita = tintometrica
            em retrato ocupando as duas linhas, sem cortar o equipamento.
          */}
          <div className="grid gap-4 lg:grid-cols-[0.85fr_1fr]">
            <GalleryFigure photo={fachada} className="aspect-[7/6]" />
            <GalleryFigure
              photo={tintometrica}
              className="aspect-[3/4] lg:row-span-2 lg:aspect-auto lg:h-full"
            />
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
