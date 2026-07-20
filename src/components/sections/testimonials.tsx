"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

// Placeholders — substituir pelos depoimentos reais
const testimonials = [
  {
    quote:
      "A Legitimus transformou nossa gestão ambiental. O acompanhamento via plataforma nos deu clareza total sobre cada etapa do inventário de emissões.",
    author: "Diretor de Sustentabilidade",
    company: "Indústria Alimentícia",
    product: "Inventário GEE",
    color: "var(--color-lime)",
  },
  {
    quote:
      "A certificação Lixo Zero foi conduzida com método e organização impressionantes. Hoje somos referência no nosso setor graças ao trabalho da equipe.",
    author: "Gerente de Operações",
    company: "Indústria Automotiva",
    product: "Lixo Zero",
    color: "var(--color-leaf)",
  },
  {
    quote:
      "Estruturar o ESG em nossa organização parecia complexo até trabalharmos com a Legitimus. Os indicadores ficaram claros e conectados às decisões do negócio.",
    author: "CEO",
    company: "Empresa de Tecnologia",
    product: "ESG",
    color: "var(--color-petrol)",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  function next() {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }

  function prev() {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }

  const t = testimonials[current];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-petrol">
              <span className="memphis-line bg-petrol rounded-full" />
              Depoimentos
            </span>
            <h2 className="mt-4 font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-coal">
              O que nossos clientes dizem
            </h2>
          </div>
        </FadeIn>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="text-center"
            >
              {/* Quote icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-8"
                style={{ backgroundColor: `${t.color}15` }}
              >
                <Quote size={22} style={{ color: t.color }} />
              </div>

              {/* Quote text */}
              <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-coal leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author — centralizado explicitamente (ajustes finais, slide 4) */}
              <div className="mt-8 flex flex-col items-center text-center">
                <p className="text-base font-semibold text-coal">
                  {t.author}
                </p>
                <p className="text-sm text-coal/50 mt-1">{t.company}</p>
                <span
                  className="inline-block mt-3 px-3 py-1 text-xs font-semibold rounded-full"
                  style={{
                    backgroundColor: `${t.color}12`,
                    color: t.color,
                  }}
                >
                  {t.product}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              aria-label="Depoimento anterior"
              className="w-11 h-11 rounded-full border border-coal/10 flex items-center justify-center text-coal/40 hover:text-petrol hover:border-petrol/30 active:bg-petrol/5 transition-all min-h-[44px] min-w-[44px]"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Depoimento ${i + 1}`}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  <span
                    className={`block w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-6 bg-petrol"
                        : "bg-coal/15 hover:bg-coal/30"
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Próximo depoimento"
              className="w-11 h-11 rounded-full border border-coal/10 flex items-center justify-center text-coal/40 hover:text-petrol hover:border-petrol/30 active:bg-petrol/5 transition-all min-h-[44px] min-w-[44px]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
