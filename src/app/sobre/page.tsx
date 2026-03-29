import type { Metadata } from "next";
import { SobreContent } from "@/components/sections/sobre-content";

export const metadata: Metadata = {
  title: "Sobre a Legitimus GreenTech | Missão, Visão e Valores",
  description:
    "Conheça a Legitimus GreenTech: greentech que estrutura a sustentabilidade empresarial com tecnologia, método e inteligência de dados. Nossa missão, visão e valores.",
  keywords: [
    "Legitimus GreenTech",
    "sobre",
    "missão",
    "visão",
    "valores",
    "greentech brasileira",
    "sustentabilidade empresarial",
    "quem somos",
  ],
};

export default function SobrePage() {
  return <SobreContent />;
}
