import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/constants";
import { ProductHero } from "@/components/sections/product-hero";
import { ProductBenefits } from "@/components/sections/product-benefits";
import { CTA } from "@/components/sections/cta";

const product = PRODUCTS.find((p) => p.key === "maquinas-equipamentos")!;

export const metadata: Metadata = {
  title: "Máquinas e Equipamentos Ambientais",
  description:
    "Fornecemos máquinas e equipamentos ambientais que complementam sua estratégia de sustentabilidade. Caixa separadora de água e óleo, composteira automatizada e mais.",
  keywords: [
    "equipamentos ambientais",
    "máquinas ambientais",
    "caixa separadora água óleo",
    "composteira automatizada",
    "composteira industrial",
    "equipamentos sustentabilidade",
    "gestão de resíduos equipamentos",
    "tratamento resíduos sólidos",
  ],
  openGraph: {
    title: "Máquinas e Equipamentos Ambientais | Legitimus GreenTech",
    description:
      "Equipamentos ambientais que fecham o ciclo da sustentabilidade empresarial.",
  },
};

export default function MaquinasEquipamentosPage() {
  return (
    <>
      <ProductHero product={product} />
      <ProductBenefits product={product} />
      <CTA />
    </>
  );
}
