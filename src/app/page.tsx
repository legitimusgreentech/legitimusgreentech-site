import { Hero } from "@/components/sections/hero";
import { ClientsLogos } from "@/components/sections/clients-logos";
import { ProductsShowcase } from "@/components/sections/products-showcase";
import { WhyLegitimus } from "@/components/sections/why-legitimus";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientsLogos />
      <ProductsShowcase />
      <WhyLegitimus />
      <Testimonials />
      <CTA />
    </>
  );
}
