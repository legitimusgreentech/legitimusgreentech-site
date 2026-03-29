"use client";

import { Play } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

export function VideoPreview() {
  return (
    <section className="py-24 lg:py-32 bg-ice">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texto */}
          <FadeIn>
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-petrol">
                <span className="memphis-line bg-petrol rounded-full" />
                Como funciona
              </span>
              <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-coal">
                Veja na prática
              </h2>
              <p className="mt-4 text-base text-coal/60 leading-relaxed">
                Entenda em poucos minutos como a plataforma organiza cada etapa
                do seu projeto — do diagnóstico à entrega final.
              </p>

              {/* 3 passos visuais */}
              <div className="mt-8 space-y-4">
                {[
                  { step: "01", text: "Diagnóstico e coleta de dados" },
                  { step: "02", text: "Execução e acompanhamento via plataforma" },
                  { step: "03", text: "Entrega com relatório e certificação" },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-petrol/8 flex items-center justify-center text-xs font-bold text-petrol font-data">
                      {item.step}
                    </span>
                    <span className="text-sm font-medium text-coal/70">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Video placeholder */}
          <FadeIn delay={0.15}>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#124e6a] to-[#0a2e40] group cursor-pointer">
              {/* Placeholder image — substituir por thumbnail real */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#124e6a]/90 via-[#0e3f56]/80 to-[#0a2e40] flex items-center justify-center">
                {/* Fake UI mockup no fundo */}
                <div className="absolute inset-4 sm:inset-8 rounded-xl border border-ice/10 bg-ice/5 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-lime/50" />
                    <div className="w-2 h-2 rounded-full bg-cyan/50" />
                    <div className="w-2 h-2 rounded-full bg-gold/50" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-3/4 bg-ice/10 rounded-full" />
                    <div className="h-2 w-1/2 bg-ice/8 rounded-full" />
                    <div className="h-8 w-full bg-ice/5 rounded-lg mt-3" />
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      <div className="h-12 bg-lime/10 rounded-lg" />
                      <div className="h-12 bg-petrol/10 rounded-lg" />
                      <div className="h-12 bg-cyan/10 rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-lime flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play size={28} className="text-coal ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Label */}
              <div className="absolute bottom-4 left-4 z-10">
                <span className="px-3 py-1.5 text-xs font-semibold text-ice/70 bg-coal/60 backdrop-blur rounded-full">
                  Demonstração da plataforma
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
