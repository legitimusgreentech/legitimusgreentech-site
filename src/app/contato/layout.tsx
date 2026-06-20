import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato | Fale com a Legitimus GreenTech",
  description:
    "Entre em contato com a Legitimus GreenTech. Solicite uma proposta para inventário de emissões GEE, Certificação ESG, Certificação Lixo Zero ou equipamentos ambientais.",
  openGraph: {
    title: "Contato | Legitimus GreenTech",
    description:
      "Solicite uma proposta ou tire suas dúvidas sobre nossos serviços de sustentabilidade empresarial.",
  },
  alternates: {
    canonical: "https://legitimus.greentech/contato",
  },
};

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
