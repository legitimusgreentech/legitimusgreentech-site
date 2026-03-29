import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/constants";
import { ProductHero } from "@/components/sections/product-hero";
import { ProductBenefits } from "@/components/sections/product-benefits";
import { CTA } from "@/components/sections/cta";

const product = PRODUCTS.find((p) => p.key === "esg")!;

export const metadata: Metadata = {
  title: "Agenda ESG | Diagnóstico, Indicadores e Governança",
  description:
    "Estruturamos e implementamos sua agenda ESG com diagnóstico personalizado, indicadores claros, governança e software integrado. Sustentabilidade conectada às decisões do negócio.",
  keywords: [
    "ESG",
    "agenda ESG",
    "diagnóstico ESG",
    "indicadores ESG",
    "governança ambiental",
    "software ESG",
    "relatório ESG",
    "sustentabilidade empresarial",
    "Environmental Social Governance",
    "consultoria ESG",
  ],
  openGraph: {
    title: "Agenda ESG | Legitimus GreenTech",
    description:
      "Diagnóstico, indicadores e governança ESG integrados à estratégia do seu negócio.",
  },
};

export default function ESGPage() {
  return (
    <>
      <ProductHero product={product} />
      <ProductBenefits product={product} />
      <CTA />
    </>
  );
}
