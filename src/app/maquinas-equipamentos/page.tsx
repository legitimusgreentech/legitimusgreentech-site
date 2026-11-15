import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/constants";
import { ProductHero } from "@/components/sections/product-hero";
import { EquipamentosContent } from "@/components/sections/equipamentos-content";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

const product = PRODUCTS.find((p) => p.key === "maquinas-equipamentos")!;

export const metadata: Metadata = {
  title: "Equipamentos Ambientais | Separador de Água e Óleo e Composteiras",
  description:
    "Equipamentos ambientais que fecham o ciclo da sustentabilidade: L-Separator (separação de água e óleo) e Composteira Automatizada, com Locação Verde e suporte técnico.",
  keywords: [
    "equipamentos ambientais",
    "separador de água e óleo",
    "caixa separadora água óleo",
    "caixa de gordura inox",
    "composteira automatizada",
    "composteira industrial",
    "composteira elétrica",
    "locação de composteira",
    "reciclagem resíduos orgânicos",
    "gestão de resíduos equipamentos",
    "lixo zero equipamentos",
    "economia circular",
    "resíduo orgânico",
  ],
  openGraph: {
    title: "Equipamentos Ambientais | Legitimus GreenTech",
    description:
      "L-Separator e Composteira Automatizada. Equipamentos que fecham o ciclo da sustentabilidade empresarial.",
  },
  alternates: {
    canonical: "https://legitimusgreentech.com.br/maquinas-equipamentos",
  },
};

export default function MaquinasEquipamentosPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", href: "/" },
          { name: "Equipamentos Ambientais", href: "/maquinas-equipamentos" },
        ]}
      />
      <ProductHero product={product} />
      <EquipamentosContent />
    </>
  );
}
