import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/constants";
import { ProductHero } from "@/components/sections/product-hero";
import { ProductBenefits } from "@/components/sections/product-benefits";
import { CTA } from "@/components/sections/cta";

const product = PRODUCTS.find((p) => p.key === "inventario-gee")!;

export const metadata: Metadata = {
  title: "Inventário de Emissões de GEE | Software e Consultoria",
  description:
    "Estruturamos seu inventário de emissões de gases de efeito estufa com método, tecnologia e inteligência de dados. Cálculo de Escopo 1, 2 e 3, créditos de carbono e gestão via plataforma digital.",
  keywords: [
    "inventário de emissões",
    "inventário GEE",
    "gases efeito estufa",
    "escopo 1 2 3",
    "crédito de carbono",
    "GHG Protocol",
    "software emissões",
    "cálculo emissões atmosféricas",
    "consultoria emissões",
    "pegada de carbono",
    "descarbonização",
    "ISO 14064",
    "SBTi",
    "metas SBTi",
    "plataforma descarbonização",
    "gestão carbono empresarial",
    "verificação inventário",
    "auditoria emissões",
  ],
  openGraph: {
    title: "Inventário de Emissões GEE | Legitimus GreenTech",
    description:
      "Cálculo completo de emissões atmosféricas com tecnologia e método. Escopo 1, 2 e 3.",
  },
};

export default function InventarioGeePage() {
  return (
    <>
      <ProductHero product={product} />
      <ProductBenefits product={product} />
      <CTA />
    </>
  );
}
