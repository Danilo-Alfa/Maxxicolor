"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
            sharedObserver?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
  }
  return sharedObserver;
}

interface RevealProps {
  children: ReactNode;
  /** Atraso em ms para escalonar elementos vizinhos. */
  delay?: number;
  className?: string;
}

/** Revela o conteudo com fade/slide quando entra no viewport. */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = getObserver();
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  const style =
    delay > 0 ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined;

  return (
    <div ref={ref} data-reveal className={className} style={style}>
      {children}
    </div>
  );
}
