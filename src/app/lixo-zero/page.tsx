import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/constants";
import { ProductHero } from "@/components/sections/product-hero";
import { LixoZeroContent } from "@/components/sections/lixo-zero-content";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/seo/json-ld";

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
  alternates: {
    canonical: "https://legitimus.greentech/lixo-zero",
  },
};

const FAQ_LIXO_ZERO = [
  {
    question: "O que é a Certificação Lixo Zero?",
    answer:
      "A Certificação Lixo Zero é um reconhecimento concedido pelo Instituto Lixo Zero Brasil (ILZB), credenciado pela Zero Waste International Alliance (ZWIA), a empresas que desviam pelo menos 90% dos seus resíduos sólidos de aterros sanitários por meio de reutilização, reciclagem ou compostagem.",
  },
  {
    question: "Qual é o papel da Legitimus GreenTech na Certificação Lixo Zero?",
    answer:
      "A Legitimus GreenTech é uma empresa credenciada pelo ILZB desde 2021. Realizamos diagnóstico de resíduos, consultoria de implementação e auditoria oficial para que sua empresa obtenha e mantenha a Certificação Lixo Zero.",
  },
  {
    question: "Quanto tempo leva para obter a Certificação Lixo Zero?",
    answer:
      "O processo varia de acordo com o porte e o setor da empresa, mas em geral envolve um diagnóstico inicial, um período de implementação das práticas corretas de gestão de resíduos e, em seguida, a auditoria formal. O prazo médio é de 3 a 12 meses.",
  },
  {
    question: "Quais empresas podem obter a Certificação Lixo Zero?",
    answer:
      "Indústrias, comércios, eventos, condomínios e instituições de qualquer segmento podem buscar a Certificação Lixo Zero. A Legitimus GreenTech já atendeu mais de 37 empresas em diferentes setores.",
  },
  {
    question: "A Certificação Lixo Zero tem validade?",
    answer:
      "Sim. A certificação tem validade definida e exige auditorias periódicas para renovação, garantindo que a empresa mantenha os padrões exigidos ao longo do tempo.",
  },
  {
    question: "Qual a diferença entre os níveis de certificação Lixo Zero?",
    answer:
      "A certificação possui diferentes níveis conforme o percentual de desvio de aterro: Platina (≥ 99%), Ouro (≥ 95%) e Prata (≥ 90%). Todos exigem no mínimo 90% de desvio de resíduos de aterros sanitários.",
  },
];

export default function LixoZeroPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", href: "/" },
          { name: "Certificação Lixo Zero", href: "/lixo-zero" },
        ]}
      />
      <FAQJsonLd questions={FAQ_LIXO_ZERO} />
      <ProductHero product={product} />
      <LixoZeroContent />
    </>
  );
}
