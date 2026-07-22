import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Sora } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

/*
 * "swap" + fallback metrico automatico do next/font:
 * texto visivel imediatamente com fonte de sistema ajustada (CLS 0)
 * e a fonte da marca entra assim que carregar.
 */
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.legalName} | Tintas Imobiliárias, Automotivas e Industriais`,
  description: `${site.description} Peça seu orçamento grátis: ${site.phoneDisplay}.`,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: site.legalName,
    title: `${site.legalName} | A cor certa para o seu projeto`,
    description: site.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `Logo ${site.legalName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.legalName} | A cor certa para o seu projeto`,
    description: site.description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#081f36",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${sora.variable} ${instrumentSans.variable}`}
    >
      <body>
        {/*
          Marca o documento como "JS ativo" antes do primeiro paint.
          As animacoes de scroll so escondem conteudo quando ha JS —
          sem JS (ou para crawlers) tudo permanece visivel.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-navy-950 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
