"use client";

import { useRef, useState, type ReactNode } from "react";
import { X, ZoomIn } from "lucide-react";

interface LightboxImageProps {
  /** Imagem exibida ampliada no lightbox. */
  src: string;
  alt: string;
  caption: string;
  className?: string;
  /** Conteudo do tile clicavel (imagem, overlays, selos). */
  children: ReactNode;
}

/**
 * Envolve qualquer imagem num botao "clique para ampliar" com
 * lightbox nativo (<dialog>): ESC, clique fora e X fecham.
 * A imagem grande so e carregada na primeira abertura.
 */
export function LightboxImage({
  src,
  alt,
  caption,
  className = "",
  children,
}: LightboxImageProps) {
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
        aria-label={`Ampliar foto: ${caption}`}
        className={`group relative block w-full cursor-zoom-in overflow-hidden text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand-500 ${className}`}
      >
        {children}
        <span
          aria-hidden="true"
          className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-navy-950/55 text-white backdrop-blur-sm transition-colors duration-200 group-hover:bg-navy-950/80"
        >
          <ZoomIn className="size-4" />
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={caption}
        onClick={(event) => {
          // Clique fora da imagem (backdrop/moldura) fecha o lightbox
          if (event.target === dialogRef.current) dialogRef.current.close();
        }}
        className="m-auto max-w-[min(64rem,calc(100vw-1.5rem))] rounded-2xl bg-navy-950 p-2 shadow-2xl backdrop:bg-navy-950/85 backdrop:backdrop-blur-sm"
      >
        {opened ? (
          <figure className="flex flex-col">
            <img
              src={src}
              alt={alt}
              className="max-h-[82vh] w-full rounded-xl object-contain"
            />
            <figcaption className="px-2 pt-2.5 pb-1 text-sm text-brand-100">
              {caption}
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
