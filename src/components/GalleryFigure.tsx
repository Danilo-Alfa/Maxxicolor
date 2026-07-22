"use client";

import { useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";

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

/** Foto da galeria com lightbox nativo (<dialog>): clique para ampliar. */
export function GalleryFigure({ photo, className = "" }: GalleryFigureProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [opened, setOpened] = useState(false);

  function open() {
    setOpened(true);
    dialogRef.current?.showModal();
  }

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-label={`Ampliar foto: ${photo.caption}`}
        className={`group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${className}`}
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
        <span
          aria-hidden="true"
          className="absolute top-3 right-3 flex size-9 items-center justify-center rounded-full bg-navy-950/55 text-white backdrop-blur-sm transition-colors duration-200 group-hover:bg-navy-950/80"
        >
          <ZoomIn className="size-4" />
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={photo.caption}
        onClick={(event) => {
          // Clique fora da imagem (backdrop/moldura) fecha o lightbox
          if (event.target === dialogRef.current) dialogRef.current.close();
        }}
        className="m-auto max-w-[min(64rem,calc(100vw-1.5rem))] rounded-2xl bg-navy-950 p-2 shadow-2xl backdrop:bg-navy-950/85 backdrop:backdrop-blur-sm"
      >
        {opened ? (
          <figure className="flex flex-col">
            <img
              src={photo.srcLarge}
              alt={photo.alt}
              className="max-h-[82vh] w-full rounded-xl object-contain"
            />
            <figcaption className="px-2 pt-2.5 pb-1 text-sm text-brand-100">
              {photo.caption}
            </figcaption>
          </figure>
        ) : null}
        <form method="dialog">
          <button
            aria-label="Fechar foto ampliada"
            className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-navy-950/70 text-white backdrop-blur-sm transition-colors hover:bg-navy-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300"
          >
            <X aria-hidden="true" className="size-4" />
          </button>
        </form>
      </dialog>
    </>
  );
}
