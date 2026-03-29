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

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsShowcase />
      <WhyLegitimus />
      <Metrics />
      <VideoPreview />
      <Certifications />
      <AboutPreview />
      <ClientsLogos />
      <Testimonials />
      <CTA />
    </>
  );
}
