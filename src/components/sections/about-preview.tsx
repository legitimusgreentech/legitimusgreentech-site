"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

export function AboutPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Imagem placeholder */}
          <FadeIn>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#16577a] via-[#124e6a] to-[#0f4258] border border-white/5 flex items-center justify-center p-12">
              {/* Logo temporária até a foto do time (slide 8 v2) */}
              <Image
                src="/logo-blue.png"
                alt="Legitimus GreenTech"
                width={400}
                height={120}
                className="w-auto max-h-24 object-contain"
              />
            </div>
          </FadeIn>

          {/* Texto */}
          <FadeIn delay={0.1}>
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-petrol">
                <span className="memphis-line bg-petrol rounded-full" />
                Quem somos
              </span>
              <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-coal">
                GreenTech, não consultoria
              </h2>
              <p className="mt-4 text-base text-coal/60 leading-relaxed">
                Unimos rigor técnico e tecnologia para que a sustentabilidade
                funcione como parte da gestão — não como burocracia.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { label: "Missão", text: "Acelerar a sustentabilidade empresarial com tecnologia e método" },
                  { label: "Visão", text: "Ser a greentech de referência em estruturação sustentável" },
                ].map((item) => (
                  <div key={item.label} className="bg-ice rounded-xl p-4 border border-coal/5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-petrol">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xs text-coal/60 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-ice rounded-xl p-5 border border-coal/5">
                <p className="text-xs font-semibold uppercase tracking-wider text-petrol">
                  Sustentabilidade com Propósito
                </p>
                <p className="mt-1.5 text-sm text-coal/60 leading-relaxed">
                  Atuamos com responsabilidade ambiental e visão de longo prazo,
                  desenvolvendo soluções que unem eficiência operacional, impacto
                  positivo e compromisso com a transformação sustentável dos negócios.
                </p>
              </div>

              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-petrol hover:text-coal transition-colors group min-h-[44px]"
              >
                Conheça nossa história
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
