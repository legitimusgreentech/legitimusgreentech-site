"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/fade-in";

export function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-petrol via-petrol to-coal px-8 py-16 lg:px-16 lg:py-24">
            {/* Decorative gradients */}
            <div
              className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-20"
              style={{
                background: "radial-gradient(circle, var(--color-lime) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-10"
              style={{
                background: "radial-gradient(circle, var(--color-cyan) 0%, transparent 70%)",
              }}
            />

            <div className="relative max-w-2xl">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-ice leading-tight">
                Pronto para estruturar a sustentabilidade do seu negócio?
              </h2>
              <p className="mt-4 text-lg text-ice/60 leading-relaxed">
                Fale com nossos especialistas e descubra como integrar
                tecnologia, método e inteligência de dados à gestão ambiental da
                sua empresa.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-coal bg-lime rounded-full hover:bg-lime/80 transition-all duration-200 group"
                >
                  Fale com um especialista
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <a
                  href="https://legitimus.evoluto.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-ice border border-ice/20 rounded-full hover:bg-ice/5 transition-all duration-200"
                >
                  Acessar plataforma
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
