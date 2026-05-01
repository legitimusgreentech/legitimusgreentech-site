import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ProductsShowcase } from "@/components/sections/products-showcase";
import { WhyLegitimus } from "@/components/sections/why-legitimus";
import { Metrics } from "@/components/sections/metrics";
import { VideoPreview } from "@/components/sections/video-preview";
import { Certifications } from "@/components/sections/certifications";
import { AboutPreview } from "@/components/sections/about-preview";
import { ClientsLogos } from "@/components/sections/clients-logos";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Legitimus GreenTech | Sustentabilidade com Inteligência e Tecnologia",
  description:
    "Greentech especializada em inventário de emissões GEE, agenda ESG, certificação Lixo Zero e equipamentos ambientais. Tecnologia, método e inteligência de dados para a sustentabilidade empresarial.",
  openGraph: {
    title: "Legitimus GreenTech | Sustentabilidade com Inteligência e Tecnologia",
    description:
      "Estruturamos a sustentabilidade empresarial com tecnologia, método e inteligência de dados. Inventário GEE, ESG, Lixo Zero e equipamentos ambientais.",
    url: "https://legitimus.greentech",
  },
  alternates: {
    canonical: "https://legitimus.greentech",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsShowcase />
      <WhyLegitimus />
      <VideoPreview />
      <Metrics />
      <Certifications />
      <AboutPreview />
      <ClientsLogos />
      <Testimonials />
      <CTA />
    </>
  );
}
