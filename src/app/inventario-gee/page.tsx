import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/constants";
import { ProductHero } from "@/components/sections/product-hero";
import { InventarioGeeContent } from "@/components/sections/inventario-gee-content";

const product = PRODUCTS.find((p) => p.key === "inventario-gee")!;

export const metadata: Metadata = {
  title: "Inventário de Emissões de GEE | Software e Consultoria",
  description:
    "Estruturamos seu inventário de gases de efeito estufa via GHG Protocol, software Climo ou diagnóstico de fontes. Escopo 1, 2 e 3, créditos de carbono e descarbonização com método e rastreabilidade.",
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
    "plataforma Climo",
    "diagnóstico de fontes GEE",
    "gestão carbono empresarial",
    "verificação inventário",
    "auditoria emissões",
    "net zero",
    "registro público de emissões",
  ],
  openGraph: {
    title: "Inventário de Emissões GEE | Legitimus GreenTech",
    description:
      "GHG Protocol, Climo ou diagnóstico de fontes. Três formas de estruturar seu inventário de emissões com método e rastreabilidade.",
  },
};

export default function InventarioGeePage() {
  return (
    <>
      <ProductHero product={product} />
      <InventarioGeeContent />
    </>
  );
}
