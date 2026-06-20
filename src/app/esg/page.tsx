import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/constants";
import { ProductHero } from "@/components/sections/product-hero";
import { EsgContent } from "@/components/sections/esg-content";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

const product = PRODUCTS.find((p) => p.key === "esg")!;

export const metadata: Metadata = {
  title: "Certificação ESG | Diagnóstico, Software e Consultoria",
  description:
    "Certificação ESG baseada na ABNT PR 2030: diagnóstico personalizado, software ESG, indicadores claros e consultoria para implementação. Obtenha seu nível de maturidade ESG.",
  keywords: [
    "ESG",
    "Certificação ESG",
    "ABNT PR 2030",
    "diagnóstico ESG",
    "nível de maturidade ESG",
    "indicadores ESG",
    "governança ambiental",
    "software ESG",
    "relatório ESG",
    "sustentabilidade empresarial",
    "Environmental Social Governance",
    "consultoria ESG",
    "GRI",
    "SASB",
    "Start ESG",
    "ESG Performance",
  ],
  openGraph: {
    title: "Certificação ESG | Legitimus GreenTech",
    description:
      "Diagnóstico, indicadores e governança ESG integrados à estratégia do seu negócio. Conforme ABNT PR 2030.",
  },
  alternates: {
    canonical: "https://legitimus.greentech/esg",
  },
};

export default function ESGPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", href: "/" },
          { name: "Certificação ESG", href: "/esg" },
        ]}
      />
      <ProductHero product={product} />
      <EsgContent />
    </>
  );
}
