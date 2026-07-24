import { LightboxImage } from "@/components/LightboxImage";

export interface GalleryPhotoData {
  src: string;
  /** Versao em alta resolucao, carregada apenas quando o lightbox abre. */
  srcLarge: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

interface GalleryFigureProps {
  photo: GalleryPhotoData;
  className?: string;
}

/** Foto da galeria da loja com legenda sobreposta e lightbox. */
export function GalleryFigure({ photo, className = "" }: GalleryFigureProps) {
  return (
    <LightboxImage
      src={photo.srcLarge}
      alt={photo.alt}
      caption={photo.caption}
      className={`rounded-2xl ${className}`}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading="lazy"
        className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/85 to-transparent px-5 pt-10 pb-4 text-sm font-medium text-white">
        {photo.caption}
      </span>
    </LightboxImage>
  );
}
