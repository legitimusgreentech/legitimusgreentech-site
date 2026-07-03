"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Award, ShieldCheck, BadgeCheck } from "lucide-react";

const certs = [
  {
    icon: BadgeCheck,
    title: "Credenciados ILZB",
    description: "Consultores e auditores credenciados pelo Instituto Lixo Zero Brasil",
    color: "var(--color-leaf)",
  },
  {
    icon: ShieldCheck,
    title: "Auditores de Organismos Certificadores",
    description: "Elaboração de inventários com olhar técnico e rigor de auditoria",
    color: "var(--color-petrol)",
  },
  {
    icon: Award,
    title: "ISO 9001",
    description: "Sistema de gestão da qualidade certificado, com processos auditados e rastreáveis",
    color: "var(--color-cyan)",
  },
];

export function Certifications() {
  return (
    <section className="py-16 lg:py-20 bg-white border-y border-coal/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-coal/30 mb-10">
            Selos e Credenciamentos
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certs.map((cert, index) => (
            <FadeIn key={cert.title} delay={index * 0.08} className="h-full">
              <div className="flex items-start gap-4 p-5 h-full rounded-xl border border-coal/5 hover:border-coal/10 transition-colors">
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${cert.color}12` }}
                >
                  <cert.icon size={20} style={{ color: cert.color }} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-coal">{cert.title}</h3>
                  <p className="mt-1 text-xs text-coal/50 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
