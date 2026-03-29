import { Hero } from "@/components/sections/hero";
import { ProductsShowcase } from "@/components/sections/products-showcase";
import { WhyLegitimus } from "@/components/sections/why-legitimus";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductsShowcase />
      <WhyLegitimus />
      <CTA />
    </>
  );
}
