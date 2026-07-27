import { site } from "@/config/site";
import { faqItems } from "@/data/faq";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { BrandsStrip } from "@/components/BrandsStrip";
import { WhyUs } from "@/components/WhyUs";
import { StoreGallery } from "@/components/StoreGallery";
import { ColorStudio } from "@/components/ColorStudio";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const storeJsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: site.legalName,
  description: site.description,
  url: site.url,
  telephone: site.phoneE164,
  image: [`${site.url}/loja/fachada.jpg`, `${site.url}/og-image.png`],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "BR",
  },
  // TODO: manter em sincronia com site.hours (config/site.ts)
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-13:00"],
  sameAs: [site.social.instagram, site.social.facebook],
} as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
} as const;

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <ColorStudio />
        <StoreGallery />
        <Categories />
        <FeaturedProducts />
        <BrandsStrip />
        <WhyUs />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storeJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
