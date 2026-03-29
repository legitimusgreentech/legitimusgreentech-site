import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/constants";
import { ProductHero } from "@/components/sections/product-hero";
import { ProductBenefits } from "@/components/sections/product-benefits";
import { CTA } from "@/components/sections/cta";

const product = PRODUCTS.find((p) => p.key === "lixo-zero")!;

export const metadata: Metadata = {
  title: "Certificação Lixo Zero | Consultoria e Auditoria ILZB",
  description:
    "Conduzimos programas de Certificação Lixo Zero como consultores e auditores credenciados pelo ILZB. Implementação completa da metodologia com gestão digital por etapas.",
  keywords: [
    "certificação lixo zero",
    "lixo zero",
    "ILZB",
    "Instituto Lixo Zero Brasil",
    "consultoria lixo zero",
    "auditoria lixo zero",
    "gestão de resíduos",
    "resíduo zero",
    "programa lixo zero",
    "sustentabilidade resíduos",
  ],
  openGraph: {
    title: "Certificação Lixo Zero | Legitimus GreenTech",
    description:
      "Consultoria e auditoria credenciada ILZB para Certificação Lixo Zero.",
  },
};

export default function LixoZeroPage() {
  return (
    <>
      <ProductHero product={product} />
      <ProductBenefits product={product} />
      <CTA />
    </>
  );
}
