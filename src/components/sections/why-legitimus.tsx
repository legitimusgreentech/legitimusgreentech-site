"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Database, Zap, Users, ShieldCheck } from "lucide-react";

const differentials = [
  {
    icon: Database,
    title: "Inteligência de dados",
    description:
      "Organizamos informações e aplicamos metodologias reconhecidas para que seus indicadores sejam claros e rastreáveis.",
    color: "var(--color-cyan)",
  },
  {
    icon: Zap,
    title: "Tecnologia aplicada",
    description:
      "Plataforma digital para acompanhar cada etapa. Gestão à vista, sem troca de e-mails ou planilhas.",
    color: "var(--color-lime)",
  },
  {
    icon: Users,
    title: "Parceria estratégica",
    description:
      "Atuamos lado a lado com sua equipe. Proximidade, responsabilidade compartilhada e foco em resultado.",
    color: "var(--color-sage)",
  },
  {
    icon: ShieldCheck,
    title: "Rigor e credibilidade",
    description:
      "Metodologia consistente, auditores credenciados e entregas com segurança técnica e dentro do prazo.",
    color: "var(--color-gold)",
  },
];

export function WhyLegitimus() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-petrol via-petrol to-coal">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-lime">
              <span className="memphis-line bg-lime rounded-full" />
              Por que a Legitimus
            </span>
            <h2 className="mt-4 font-heading text-3xl lg:text-4xl font-bold text-ice">
              Estrutura que transforma sustentabilidade em decisão de negócio
            </h2>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              <div className="group text-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 mx-auto transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <item.icon size={26} style={{ color: item.color }} />
                </div>
                <h3 className="font-sans text-base font-semibold text-ice">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ice/50 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
