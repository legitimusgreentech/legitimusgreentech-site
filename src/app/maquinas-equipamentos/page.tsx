import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/constants";
import { ProductHero } from "@/components/sections/product-hero";
import { ProductBenefits } from "@/components/sections/product-benefits";
import { CTA } from "@/components/sections/cta";

const product = PRODUCTS.find((p) => p.key === "maquinas-equipamentos")!;

export const metadata: Metadata = {
  title: "Equipamentos Ambientais | Caixa Separadora e Composteiras",
  description:
    "Equipamentos ambientais que fecham o ciclo da sustentabilidade: Caixa Separadora Eco Box (água e óleo) e composteiras Terraform Kitchen Topema. Instalação e suporte técnico.",
  keywords: [
    "equipamentos ambientais",
    "caixa separadora água óleo",
    "caixa separadora eco box",
    "composteira automatizada",
    "composteira industrial",
    "terraform kitchen",
    "topema composteira",
    "reciclagem resíduos orgânicos",
    "gestão de resíduos equipamentos",
    "tratamento resíduos sólidos",
    "CONAMA 430",
    "lixo zero equipamentos",
  ],
  openGraph: {
    title: "Equipamentos Ambientais | Legitimus GreenTech",
    description:
      "Caixa Separadora Eco Box e composteiras Topema. Equipamentos que fecham o ciclo da sustentabilidade empresarial.",
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
