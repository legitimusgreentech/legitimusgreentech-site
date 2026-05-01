import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/constants";
import { ProductHero } from "@/components/sections/product-hero";
import { LixoZeroContent } from "@/components/sections/lixo-zero-content";

const product = PRODUCTS.find((p) => p.key === "lixo-zero")!;

export const metadata: Metadata = {
  title: "Certificação Lixo Zero | Consultoria e Auditoria ILZB",
  description:
    "Credenciados pelo ILZB desde 2021. Realizamos diagnóstico, consultoria de implementação e auditoria para Certificação Lixo Zero em indústrias, comércios e eventos. +37 empresas atendidas.",
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
    "desvio de aterro",
    "ZWIA",
    "Zero Waste International Alliance",
    "rumo ao lixo zero",
    "diagnóstico lixo zero",
    "pré-auditoria lixo zero",
    "sustentabilidade resíduos",
    "certificação ambiental",
    "ODS sustentabilidade",
  ],
  openGraph: {
    title: "Certificação Lixo Zero | Legitimus GreenTech",
    description:
      "Credenciados ILZB desde 2021. Diagnóstico, implementação e auditoria para Certificação Lixo Zero.",
  },
};

export default function LixoZeroPage() {
  return (
    <>
      <ProductHero product={product} />
      <LixoZeroContent />
    </>
  );
}
