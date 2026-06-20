import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/constants";
import { ProductHero } from "@/components/sections/product-hero";
import { InventarioGeeContent } from "@/components/sections/inventario-gee-content";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

const product = PRODUCTS.find((p) => p.key === "inventario-gee")!;

export const metadata: Metadata = {
  title: "Inventário de Emissões de GEE | Software e Consultoria",
  description:
    "Estruturamos seu inventário de gases de efeito estufa via GHG Protocol, software de emissões ou diagnóstico de fontes. Escopo 1, 2 e 3, créditos de carbono e descarbonização com método e rastreabilidade.",
  keywords: [
    "inventário de emissões",
    "inventário GEE",
    "gases efeito estufa",
    "escopo 1 2 3",
    "crédito de carbono",
    "GHG Protocol",
    "software emissões",
    "software de emissões",
    "cálculo emissões atmosféricas",
    "consultoria emissões",
    "pegada de carbono",
    "descarbonização",
    "ISO 14064",
    "ISO 14064-3",
    "SBTi",
    "metas SBTi",
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
      "GHG Protocol, Software de Emissões ou diagnóstico de fontes. Três formas de estruturar seu inventário de emissões com método e rastreabilidade.",
  },
  alternates: {
    canonical: "https://legitimus.greentech/inventario-gee",
  },
};

export default function InventarioGeePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", href: "/" },
          { name: "Inventário de Emissões GEE", href: "/inventario-gee" },
        ]}
      />
      <ProductHero product={product} />
      <InventarioGeeContent />
    </>
  );
}
